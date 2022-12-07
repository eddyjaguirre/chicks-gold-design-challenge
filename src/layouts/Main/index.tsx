import './style.scss'
import ItemsContainer from '../../components/ItemsContainer';

function Content() {
  return(
    <div className="content">
      <div className="container">
        <ItemsContainer
          title='Condimentum consectetur'
        />
      </div>
    </div>
  )
}

export default Content;