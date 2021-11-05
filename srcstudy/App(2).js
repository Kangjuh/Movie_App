import React, { Component } from 'react';
import Cake from './Cake';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
    }

    componentDidMount() {
        console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate함수는 화면이 새로그려지면 즉 업데이트 되면 실행되는 함수')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
    }
    
    state = {
        count: 0,
        sum: 0,
        avg: 0
    };

    add = () => {
        //this.state.count = 1;
        this.setState(
            current => ( {count : current.count + 1} )
            );
    }
    minus = () => {
        //this.state.count = -1;
        this.setState(
            current => ( {count : current.count - 1} )
            );
    }
    
    render() {
        return (
        <>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <Cake />
        </>
        )
    }
}







export default App;
