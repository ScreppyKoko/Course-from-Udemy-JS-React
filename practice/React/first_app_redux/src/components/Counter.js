

import { useSelector, useDispatch } from "react-redux";
// import { Component } from "react";
// import { bindActionCreators } from 'redux';

import { inc, dec, rnd } from '../actions';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}




// class Counter extends Component {
//     render() {
//         const { counter, inc, dec, rnd } = this.props;
//         return (
//             <div className="jumbotron">
//                 <h1>{counter}</h1>
//                 <button onClick={inc} className="btn btn-primary">INC</button>
//                 <button onClick={dec} className="btn btn-primary">DEC</button>
//                 <button onClick={rnd} className="btn btn-primary">RND</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

//! редак делает под капотом при передаче actions
// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         inc,
//         dec,
//         rnd
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);

export default Counter;