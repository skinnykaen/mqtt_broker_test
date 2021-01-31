import Main from '../Pages/Main';
import Login from '../Pages/Login';
import Block1 from '../Pages/Block1';
import Registration from '../Pages/Registration';


export default function ControlPages(props) {

  let page = <Main />

  switch(props.page) {
    case "Главная": page = <Main />; break;
    case "Блок1": page = <Block1 />; break;
    case "Вход": page = <Login />; break;
    case "Регистрация": page = <Registration />; break;
    default: page = <Main />
  }


  return(
    <div>
      {page}
    </div>
  );
}
