import './style.scss';
import { ReactElement } from 'react';
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

export interface ISelectorProps {
  title?: string;
  selectedOption?: string;
  green?: boolean;
  icon?: ReactElement<any, any>;
}

function Selector(props: ISelectorProps) {
  return(
    <div className="selector">
      <div className={`selector__icon${props.green ? ' green' : ''}`}>
        {props.icon}
      </div>
      <div className='selector__container'>
        <div className={`selector__title${props.selectedOption ? ' option-selected' : ''}`}>
          {props.title}
        </div>
        {
          props.selectedOption
          ? <div className='selector__option'>{props.selectedOption}</div>
          : null
        }
      </div>
      <div className="selector__arrow">
        <Icon
          path={mdiMenuDown}
          size={1}
        />
      </div>
    </div>
  )
}

export default Selector;