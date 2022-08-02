import {Container} from 'react-bootstrap';
import React, {Component} from 'react';

//! ТЕСТИМ РЕФЫ
class Form extends Component {

    // myRef = React.createRef();
    mySecondRef = React.createRef();

    // componentDidMount() {
    //     this.myRef.current.focus();
    // }
    //!  с колбэком чистая ссылка на элемент
    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
    }

    focusSecondTI = () => {
        this.mySecondRef.current.focus();
    }

    setInputRef = (elem) => {
        this.myRef = elem;
    }


    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                            onClick={this.focusSecondTI}
                            ref={this.setInputRef} 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea ref={this.mySecondRef} onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

export default Form;