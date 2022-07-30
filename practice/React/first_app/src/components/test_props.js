import { Component, Fragment } from 'react';

// function WhoAmI({name, surname, link}) {
//     return(
//         <div>
//             <h1>My name is {name.firstName}, surname - {surname()}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     );
// }

class WhoAmI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: 27,
            text: '-+-+-+-',
            position: ''
        }
    }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1  
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(e.currentTarget);
        e.currentTarget.style.color = color;
        this.setState({
            position: e.target.value
        })
    }


    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return(
            <>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h3>My name is {name.firstName}, surname - {surname()}, age - {years}, position - {position}</h3>
                <a href={link}>My profile</a>
                <form>
                    <span>Ваша должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'lime')}/>
                </form>
            </>
        );
    }
}

export default WhoAmI;