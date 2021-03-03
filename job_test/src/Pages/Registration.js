import React from 'react';
import './Styles/Registration.css'
import axios from 'axios'
import md5 from 'md5'

export default class Registration extends React.Component {

  constructor(props){
    super(props);
  }

  send() {
    let email = document.getElementById("email").value;
    let password = md5(document.getElementById("password").value);

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/registration',
      data: {
        id: 15,
        user_data : {
          email: email,
          passwordhash: password,
        }
      }
    }).then(response => {
      console.log(response);
    }, (error) => {
      console.log(error)
    });
  }

  render() {
    return(
      <div className="registration">
        <div className="wrapper-title">
          <div className="title">
              <h3>Добро пожаловать в MQTT Broker!</h3>
           </div>
        </div>
        <div className="registration">
          <div className="wrapper-registration" id="registration">
        
            <div className="input-group mb-3">
              <span className="input-group-text" id="mailLabel">E-mail</span>
              <input id="email" name="email"  onChange={this.handleEmailChange} type="email" className="form-control" placeholder="exemple@mail.ru" aria-label="Email" aria-describedby="mailLabel" />
            </div>

            <div class="mb-3 row">
              <div className="input-group mb-3">
               <span className="input-group-text" id="passwordLabel">Пароль</span>
               <input id="password" name="password" onChange={this.handlePasswordChange} type="password" className="form-control" placeholder="" aria-label="Password" aria-describedby="passwordLabel" />
              </div>
            </div>
                       
            <div className="send-button-wrapper">
              <button type="submit" className="btn btn-primary" onClick={this.send.bind(this)}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
