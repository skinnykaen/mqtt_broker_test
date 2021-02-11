import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Login.css';



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  signIn() {
    alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
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
              <input id="email" name="email" type="email" onChange={this.handleEmailChange} className="form-control" placeholder="exemple@mail.ru" aria-label="Email" aria-describedby="mailLabel" />
            </div>

            <div class="mb-3 row">
              <div className="input-group mb-3">
                <span className="input-group-text" id="passwordLabel">Пароль</span>
                <input id="password" name="password" type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="" aria-label="Password" aria-describedby="passwordLabel" />
              </div>
            </div>

            <div className="bottom-elem">
              <div className="forgot-password">
                <a className="link" href="#">Забыли пароль?</a>
              </div>

              <div className="send-button-wrapper">
                <button type="submit" onClick={this.signIn} className="btn btn-primary">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}