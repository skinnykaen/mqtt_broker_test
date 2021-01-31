import './App.css';
import Header from './StaticPageElements/Header';
import Footer from './StaticPageElements/Footer';
import Menu from './MenuBlock/Menu';

function App() {
  return (
    <div>
      <Header />
      <Menu menuElements="Главная Блок1 Вход Регистрация" />
      <Footer />
    </div>
  );
}

export default App;
