import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';


import './App.css';
import Form from './components/formUseContext/Form';
import dataContext from './components/formUseContext/context';
import SliderUseReducer from './components/hookUseReducer/HookUseReducer';
import HigherOrderComponent from './components/higherOrderComponent/HigherOrderComponent'

const { Provider } = dataContext;


// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({ slide }) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({ autoplay }) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const countTotal = (num) => {
    console.log('couning ...');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log');
    }

    // сработает только при первом рендере
    useEffect(() => {
        console.log('effect');
        document.title = `Slide ${slide}`;
    }, [])

    // сработает при изменении slide
    useEffect(() => {
        console.log('update effect');
        document.title = `Slide ${slide}`;
    }, [slide])

    // применяем отписку 
    useEffect(() => {
        document.title = `Slide ${slide}`;

        window.addEventListener('click', logging);

        return () => {

            window.removeEventListener('click', logging)
        }
    }, [slide])

    useEffect(() => {
        console.log('autoplay');
    }, [autoplay])

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    //! правильное использование хука useCallback, закешировали функцию (которая не должна меняться)
    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6lB2os1yw6AwUJYI9YcRee1J3QBHyjlcgA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRI_6xxqP0FbgEeQ0XZVINi0T5YAdG1UJrA&usqp=CAU',
            'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
        ]
    }, [slide])
    //!

    //* закешировали значение (нельзя помещать побочные эффекты по типу запросов и подписок)
    const total = useMemo(() => {
        return countTotal(slide);
    }, []);

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('styles!');
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">

                {/* //! правильное использование хука useCallback? закешировали функцию (которая не должна меняться) */}
                <Slide getSomeImages={getSomeImages} />


                <div className="text-center mt-5">Active slide {slide} <br /> {autoplay ? 'auto' : null}</div>
                <div style={style} className="text-center mt-5">Total slide: {total}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

//! правильное использование хука useCallback, закешировали функцию (которая не должна меняться)
const Slide = ({ getSomeImages }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img className="d-block w-100" src={url} key={i} alt={`image ${i}`} />)}
        </>
    )
}
//! 



function App() {
    const [slider, setSlider] = useState(true)
    const [data, setData] = useState({
        mail: 'name@example',
        text: 'some text'
    });

    return (
        <>
            <HigherOrderComponent/>
            {/* <SliderUseReducer initial={false} />
            <Provider value={data}>
                <Form text={data.text} />
                <button
                    onClick={() => setData({
                        mail: 'second@example.com',
                        text: 'another text'
                    })}>
                    Click me
                </button>
            </Provider> */}
            {/* {slider ? <Slider /> : null} */}
        </>
    );
}

export default App;
