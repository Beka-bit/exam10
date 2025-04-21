import './App.css'
import Card from './components/Card'
import Cardprovider from './components/Cardprovider'
import ProductList from './components/productList'

function App() {

  return (
    <Cardprovider>
    <ProductList/>
    <Card/>
    </Cardprovider>
  )
}

export default App
