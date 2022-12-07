import './style.scss'
import ItemsContainer from '../../components/ItemsContainer';
import bg from '../../assets/osrs.webp';

function Content() {
  return(
    <div
      className="content"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '100vw auto'
      }}
    >
      <div className="container">
        <ItemsContainer
          title='Condimentum consectetur'
        />
      </div>
    </div>
  )
}

export default Content;