import './style.scss'
import Item from '../Item'
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';
import Selector from '../Selector';
import Icon from '@mdi/react';
import { mdiSword, mdiSack, mdiFeather } from '@mdi/js'; 
import InputGroup from '../InputGroup';

interface IItemsContainerProps {
  title: string;
}

function ItemsContainer(props: IItemsContainerProps) {
  const items = [
    {
      name: 'Blue Partyhat',
      price: 522.50,
      discount: 20,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at a, sequi ducimus, maxime mollitia labore atque, accusantium optio natus perspiciatis asperiores recusandae? Adipisci sapiente assumenda, natus rerum explicabo exercitationem.',
      inStock: true,
      game: 'wow',
      image: 'hat'
    },
    {
      name: 'Blue Partyhat',
      price: 522.50,
      discount: 0,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at a, sequi ducimus, maxime mollitia labore atque, accusantium optio natus perspiciatis asperiores recusandae? Adipisci sapiente assumenda, natus rerum explicabo exercitationem.',
      inStock: true,
      game: 'wow',
      image: 'hat1'
    }
  ]
  return( 
    <div className='items-container'>
      <div className='container'>
        <h1>{props.title}</h1>
        <div className='data-filter-container'>
          <div className='flex-1'>
            <Selector
              icon={<Icon path={mdiSword}
                size={1}
              />}
              title='Select a game'
            />
          </div>
          <div className='flex-2'>
            <SearchBar />
          </div>
          <div className='flex-1'>
            <InputGroup>
              <Selector
                icon={<Icon path={mdiSack}
                  size={1}
                />}
                green
                title='Price'
                selectedOption='All'
              />
              <Selector
                icon={<Icon path={mdiFeather}
                  size={1}
                />}
                green
                title='Item type'
                selectedOption='All'
              />
            </InputGroup>
          </div>
        </div>
        <div className='items'>
          <div className='items__grid'>
            {
              [...items, ...items, ...items].map((item) => {
                return(
                  <Item item={item}/>
                )
              })
            }
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default ItemsContainer;