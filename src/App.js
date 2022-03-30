import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ContentSlider from './components/ContentSlider';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <ContentSlider />
            <Product />
        </div>
    );
}

export default App;
