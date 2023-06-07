import styles from './App.module.scss';
import { ProductsList } from './sections/products/ProductsList';

function App() {
  return (
    <div className={styles.app}>
      <ProductsList></ProductsList>
    </div>
  )
}

export default App
