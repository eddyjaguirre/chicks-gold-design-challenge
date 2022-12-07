import './style.scss';
import Button from '../Button';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

function Pagination() {
  return( 
    <div className='pagination'>
      <Button
        icon={
          <Icon path={mdiChevronLeft}
            size={1}
          />
        }
        border
      />
      {
        [...Array(6).keys()].map((i) => {
          return(
            <Button
              key={i}
              title={String(i + 1)}
              primary={ i === 4 }
            />
          )
        })
      }
      <Button
        icon={
          <Icon path={mdiChevronLeft}
            size={1}
            rotate={180}
          />
        }
        border
      />
    </div>
  )
}

export default Pagination;