'use strict';

export function RankService() {
    this.url = 'http://localhost:8000/';
    this.username = "test@mailinator.com";
    this.password = "123456";
    this.clientSecret = '2VBJUSGbZZU7emKJIViSfNJVLsjlnCOzMK44seio';
    this.clientId = 2;
    this.rankId = 1;
    this.players = [];

    this.register = register;
    this.login = login;
    this.getToken = getToken;
    this.getRank = getRank;

    function register(name, score) {
        let data =  fetch(this.url + 'api/ranking/' + this.rankId + '/player',{
            method:'post',
            mode: 'cors',
            headers: {
                "Authorization": 'Bearer ' + window.localStorage.getItem('token'), 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                score: score
            })
        }).then(response => {
            return response.json();
        }).then(data => {
            return data;
        }).catch((err) => {
            console.log(err);
        });

        return data;
    }

    function getRank() {
        fetch(this.url + 'api/ranking/' + this.rankId + '/player',{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Authorization": 'Bearer ' + window.localStorage.getItem('token'), 
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.players = data.data;
        }).catch((err) => {
            console.log(err);
        });

        console.log(this.players);
    }
    
    function login() {
        fetch(this.url + 'oauth/token', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({                
                username: this.username,
                password: this.password,
                client_secret: this.clientSecret,
                grant_type: 'password',
                client_id: this.clientId                
            })
        }).then(response => {
            return response.json();            
        }).then(data => {            
           window.localStorage.setItem('token', data.access_token);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    function getToken() {
        if (window.localStorage.getItem('token') == null) {
            this.login();
        }    
        return window.localStorage.getItem('token');
    }
}