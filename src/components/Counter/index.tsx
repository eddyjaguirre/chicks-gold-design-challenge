import './style.scss';
import { mdiMenuUp, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';

function Counter() {
  return (
    <div className='counter'>
      <input type="number" />
      {/* <div className='counter__buttons-container'>
        <button>
          <Icon path={mdiMenuUp}
            size={0.7}
          />
        </button>
        <button>
          <Icon path={mdiMenuDown}
            size={0.7}
          />
        </button>
      </div> */}
    </div>
  )
}

export default Counter;