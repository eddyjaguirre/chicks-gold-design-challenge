import './style.scss'
import Button from '../Button';
import StockStatus from '../StockStatus';
import SaleStatus from '../SaleStatus';
import Counter from '../Counter';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

import { useEffect, useState } from 'react';

interface Item {
  name: string;
  price: number;
  discount: number;
  description: string;
  inStock: boolean;
  game: string;
  image: string;
}

interface IItemProps {
  item: Item;
}

function Item(props: IItemProps) {
  const item = props.item;

  const [image, setImage] = useState(null);
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    const fetchImage = async (folder: string, image: string, setFunction: Function) => {
      try {
        const response = await import(`../../assets/${folder}/${image}.png`);
        // setImage(response.default);
        setFunction(response.default)
      } catch (err) {
        console.log(err);
      }
    }
    fetchImage('items', item.image, setImage);
    fetchImage('icons', item.game, setIcon);
  })

  return( 
    <div className="item">
      <div className='item__status-container'>
        <div className='item__status'>
          {
            item.discount > 0 ?
              <SaleStatus /> : null
          }
          <StockStatus inStock={item.inStock}/>
        </div>
        <div>
          <Counter />
        </div>
      </div>
      <div className='item__image'>
        {image && <img src={image}/>}
      </div>
      <div className='item__title-container'>
        <div className='item__title'>
          { item.name }
        </div>
        <div className='item__game-icon'>
          {icon && <img src={icon}/>}
        </div>
      </div>
      <div className='item__prices-container'>
        {
          item.discount > 0 ?
            <div className='item__discounted-price'>
              ${item.price * (100.0 - item.discount) / 100.0}
            </div>
            : null
        }
        <div className={`item__price${item.discount > 0 ? ' discounted': ''}`}>
          ${item.price}
        </div>
      </div>
      <div className='item__description'>
        {item.description}
      </div>
      <div className="item__buttons-container">
        <Button title="Details" full secondary/>
        <Button title="Add" full primary icon={
          <div className="cart-icon-container">
            <Icon
              path={mdiCart}
              size={0.8}
            />
          </div>
        }/>
      </div>
    </div>
  )
}

export default Item;