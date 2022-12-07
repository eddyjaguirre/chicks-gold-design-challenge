import './style.scss';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Button from '../Button';

function NavBar() {
  const items = [
    'Currency',
    'Items',
    'Accounts',
    'Services',
    'Swap',
    'Sell'
  ]
  return(
    <nav className='navbar'>
      <div className="navbar__menu-icon">
        <Button
          icon={
            <Icon
              path={mdiMenu}
              size={1}
            />
          }
        />
      </div>
      <ul>
        {items.map(item => {
          return (
            <li>{item.toUpperCase()}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar;