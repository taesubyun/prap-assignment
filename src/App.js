import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ContentSlider from './components/ContentSlider';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Home />
            <ContentSlider />
            <Product />
            <Service />
            <Footer />
        </div>
    );
}

export default App;
