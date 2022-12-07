import './style.scss';

interface IStockStatusProps {
  inStock: boolean;
}

function StockStatus(props: IStockStatusProps) {
  return(
    <div>
      <span className={`stock-status${props.inStock ? '' : ' out-of-stock'}`}>
        {props.inStock ? 'In stock' : 'Out of stock'}
      </span>
    </div>
  )
}

export default StockStatus;