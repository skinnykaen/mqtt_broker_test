import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Registration.css';

export default class Registration extends React.Component {

  constructor(props){
    super(props);
  }

  send() {
    const API_URL = 'http://localhost:5000/registration';
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    const info = {
      mail, 
      password
    };
    fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
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
        <form id="registration">
          <div className="wrapper-registration">
        
            <div className="input-group mb-3">
              <span className="input-group-text" id="mailLabel">E-mail</span>
              <input id="mail" name="mail" type="text" className="form-control" placeholder="exemple@mail.ru" aria-label="Email" aria-describedby="mailLabel" />
            </div>

            <div class="mb-3 row">
              <div className="input-group mb-3">
               <span className="input-group-text" id="passwordLabel">Пароль</span>
               <input id="password" name="password" type="text" className="form-control" placeholder="" aria-label="Password" aria-describedby="passwordLabel" />
              </div>
            </div>
                       
            <div className="send-button-wrapper">
              <button type="submit" className="btn btn-primary" onClick={this.send.bind(this)}>Зарегистрироваться</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
