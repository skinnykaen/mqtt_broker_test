import React from 'react';
import './Styles/Login.css';
import axios from 'axios';
import md5 from 'md5';
import EmailValidator  from 'email-validator'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  signIn() {
    let email = document.getElementById("email").value;
    let password = md5(document.getElementById("password").value);  

    if(!EmailValidator.validate(email)){
      alert = document.querySelector('#alert');
      alert.textContent = "Email введен неверно!";
      return;
    }

    if (email == "" || password == "d41d8cd98f00b204e9800998ecf8427e") {
      alert = document.querySelector('#alert');
      alert.textContent = "Одно из полей не заполнено!";
      return;
    }

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/login',
      data: {
        id: 15,
        user_data : {
          email: email,
          passwordhash: password,
        }
      }
    }).then(response => {
      console.log(response);    
      alert = document.querySelector('#alert');
      alert.textContent = response.data; 
    }, (error) => {
      console.log(error)
    });
  }
  
  render() {
    return (
      <div className="login">
        <div className="wrapper-title">
          <div className="title">
            <h3>Добро пожаловать в MQTT Broker!</h3>
          </div>
        </div>

        <div className="wrapper-login" id="login">
          <div className="top-elem">
            <div className="input-group mb-3">
              <span className="input-group-text" id="mailLabel">E-mail</span>
              <input id="email" name="email" type="email" onChange={this.handleEmailChange} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="mailLabel" />
            </div>

            <div class="mb-3 row">
              <div className="input-group mb-3">
                <span className="input-group-text" id="passwordLabel">Пароль</span>
                <input id="password" name="password" type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordLabel" />
              </div>
            </div>

            <div className="alert"><p id="alert"></p></div>

            <div className="bottom-elem" id="bottom-elem">
              <div className="forgot-password">
                <a className="link" href="#">Забыли пароль?</a>
              </div>

              <div className="send-button-wrapper">
                <button type="submit" onClick={this.signIn.bind(this)} className="btn btn-primary">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}