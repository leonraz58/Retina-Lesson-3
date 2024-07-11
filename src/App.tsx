import './App.css';
import image from './assets/images/image.jpg';
import image2x from './assets/images/image@2x.jpg';
import image3x from './assets/images/image@3x.jpg';

function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>
            {/*<div className={'bg'}></div>*/}

            {/*<img src={image} srcSet={`${image2x} 2x, ${image3x} 3x`} alt="nature"/>*/}

            {/*<picture>*/}
            {/*    <source srcSet={`${image2x} 2x, ${image3x} 3x`}/>*/}
            {/*    <img src={image} alt="nature"/>*/}
            {/*</picture>*/}

            <figure>
                <img src={image} srcSet={`${image2x} 2x, ${image3x} 3x`} alt="nature"/>
                <figcaption>
                    image
                </figcaption>
            </figure>
        </div>
    );
}

export default App;



