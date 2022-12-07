import './style.scss';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

function SearchBar() {
  return (
    <div className="search-bar">
      <Icon path={mdiMagnify}
        size={1}
      />
      <input type="text" placeholder='Search'/>
    </div>
  )
}

export default SearchBar;