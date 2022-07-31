import { Component, Fragment } from 'react';
import styled from 'styled-components';

// function WhoAmI({name, surname, link}) {
//     return(
//         <div>
//             <h1>My name is {name.firstName}, surname - {surname()}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     );
// }

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    a {
        display: block;
        margin: 10px 0;
        color: ${(props) => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const HeaderStyle = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    cursor: pointer;
`;

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
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <EmpItem active>
                <Button onClick={this.nextYear}>{this.state.text}</Button>
                <HeaderStyle>My name is {name.firstName}, surname - {surname()}, age - {years}, position - {position}</HeaderStyle>
                <a href={link}>My profile</a>
                <form>
                    <span>Ваша должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'lime')} />
                </form>
            </EmpItem>
        );
    }
}

export default WhoAmI;