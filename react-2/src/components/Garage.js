import React from 'react';
import Car from './Car.js'

export default class Garage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            show:false
        }
    }
    
    componentDidMount(){
        
        this.setState({
            show:true,
        })

        // resize
    }
    componentDidUpdate(prevProps){
        console.log(prevProps ,this.props)
       // if(this.props.page !== this.props.page)
       if(JSON.stringify(prevProps.cars) !== JSON.stringify(this.props.cars)){

       }
    }

    componentWillUnmount(){
        // remove resize
    }

    componentDidCatch(error){
        // тільки класова компонента
        console.log(error)
    }

    render(){
       // if(this.props.cars.length){
            return(
                <div>
                    <h2>Garage</h2>
                    {/* {this.props.cars.length ? <div>You have {this.props.cars.length} cars</div> : <div>You dont have cars</div>} */}
                    {/* <div>You have {this.props.cars.length} cars</div> */}
                    {this.props.cars.length > 0 && <div>You have {this.props.cars.length} cars</div>}
                    {/* map - key is required */}
                    {this.props.cars.map((car, index) =>
                     <Car key={index} name={car.name} speed={car.speed} index={index}/>
                     )}
                </div>
                
            )
        /* }else{
            return(
                <div>
                    <h2>Garage</h2>
                    <div>You don't have cars</div>
                </div>
            )
        } */
    }
}