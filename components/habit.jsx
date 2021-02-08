import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncreament = (event) =>{
        //state object 안에 있는 count를 증가한 뒤 state를 업데이트 한다. 
        this.setState({count: this.state.count +1});
    }
    handleDecrease = (event) => {
        //state object 안에 있는 count를 감소한 뒤 state를 업데이트 한다.
        const count = this.state.count -1;
        this.setState({count: count < 0 ? 0 : count});
    }
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncreament}>
                 <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit habit-decrease" onClick={this.handleDecrease}>
                 <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit habit-delete">
                <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;