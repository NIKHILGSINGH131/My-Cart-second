
import './App.css';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
import NavBar from './components/e-comerce/navbar/NavBar';
import ProductList from './components/e-comerce/productList/ProductList';
// import CreateNote from './components/notes/CreateNote';
// import ListNote from './components/notes/ListNote';

function App() {
  return (
    <div className="App">
      {/* <Child1/>
      <Child2/> */}
      {/* <CreateNote/>
      <ListNote/> */}
      <NavBar/>
      <ProductList/>
    </div>
  );
}

export default App;
