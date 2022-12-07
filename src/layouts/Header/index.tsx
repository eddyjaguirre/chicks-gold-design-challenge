import './style.scss';
import logo from '../../assets/chicks-logo-large.svg';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

function Header() {
  return(
    <header>
      <div className='header'>
        <div className="header__container">
          <div className='header__logo-container'>
            <img src={logo} alt="Chicks Gold Logo"/>
          </div>
          <NavBar />
          <div className="header__user-container">
            <Button
              green
              title="Sign in"
              icon={
                <Icon path={mdiAccount}
                  size={1}
                />
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;