import './style.scss';
import { ReactElement } from 'react';

export interface IButtonProps {
  title?: string;
  full?: boolean;
  primary?: boolean;
  secondary?: boolean;
  green?: boolean;
  border?: boolean;
  icon?: ReactElement<any, any>;
}

function Button(props: IButtonProps) {
  return(
    <a className={
      `btn${
        props.full ? ' full' : ''
      }${
        props.primary ? ' primary' : ''
      }${
        props.secondary ? ' secondary' : ''
      }${
        props.border ? ' border' : ''
      }${
        props.green ? ' green' : ''
      }`
    }>
      <div>
        <span>
          { props.title }
        </span>
        { props.icon }
      </div>
    </a>
  )
}

export default Button;