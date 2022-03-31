import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ContentSlider from './components/ContentSlider';
import Service from './components/Service';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <ContentSlider />
            <Product />
            <Service />
        </div>
    );
}

export default App;
