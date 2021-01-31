import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Login.css';

export default class Login extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
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
                <input id="mail" name="mail" type="text" className="form-control" placeholder="exemple@mail.ru" aria-label="Email" aria-describedby="mailLabel" />
              </div>

              <div class="mb-3 row">
                <div className="input-group mb-3">
                <span className="input-group-text" id="passwordLabel">Пароль</span>
                <input id="password" name="password" type="text" className="form-control" placeholder="" aria-label="Password" aria-describedby="passwordLabel" />
              </div>
            </div>
      
            <div className="bottom-elem">
              <div className="forgot-password">
                <a className="link" href="#">Забыли пароль?</a>
              </div>

              <div className="send-button-wrapper">
                <button type="submit" className="btn btn-primary">Войти</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
