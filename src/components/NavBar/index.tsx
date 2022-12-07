import './style.scss';

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