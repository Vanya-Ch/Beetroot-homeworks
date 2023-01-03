import React from 'react';
import Child from './Child.js';

export default class Parent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            originValue: 1
        }
    }
    ChangeOriginValue(e){
        this.setState({
            originValue: e
        })
    }
    /* componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    } */
    render(){
        return (
            <div>
                <div>
                    Doubled value: {this.state.originValue * 2}
                </div>
                <Child 
                    origin={this.state.originValue}
                    onOriginChange={(e) => this.ChangeOriginValue(e)}
                />
            </div>
        )
    }
}