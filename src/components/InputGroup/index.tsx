import './style.scss';

interface IInputGroup {
  children: React.ReactNode;
}

function InputGroup (props: IInputGroup) {
  return (
    <div className='input-group'>
      {props.children}
    </div>
  )
}

export default InputGroup;