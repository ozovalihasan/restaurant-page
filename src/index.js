import navBar from './navbar';
import homePage from './home-page';
import menuPage from './menu-page';
import contactPage from './contact-page';
import './stylesheets/style.scss';

const clearPage = () => {
  const parent = document.getElementById('content');
  parent.lastChild.remove();
};

const showPage = {
  home: homePage,
  menu: menuPage,
  contact: contactPage,
};

navBar();
homePage();

['home', 'menu', 'contact'].forEach((val) => {
  const pageButton = document.getElementById(val);
  pageButton.addEventListener('click', () => {
    clearPage();
    showPage[val]();
  });
});
