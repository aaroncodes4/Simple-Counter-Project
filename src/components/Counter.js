import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

     plus() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

     clear() {
        this.setState({
            counter: this.state.counter = 0
        })
    }

     sub() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div className="case">
                <div className="container">
                    <h1>Counter: {this.state.counter}</h1>
                </div>
                <p>aarontechs</p>
                <div className="keys">
                    <button onClick={() => this.plus()} className="btn-left">+</button>
                    <button onClick={() => this.clear()} className="btn-clear">Clear</button>
                    <button onClick={() => this.sub()} className="btn-right">-</button>
                </div>
            </div>
        )
}
}

export default Counter;