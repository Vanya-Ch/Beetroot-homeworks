import React from 'react';
import moment from 'moment';

class ApplicationChecker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isDay: this.props.date ? (moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future') : null
        }

      //  console.log(moment().isBefore(this.props.date))
      //  console.log(moment().isSame(this.props.date, 'minute'), moment(), this.props.date)
    }

    showText(){

    }

    render(){
        /* First method
        
        let isDay = null;
        if(moment().isSame(this.props.date, 'minute')){
            isDay = 'today';
        }else if(moment().isBefore(this.props.date)){
            isDay = 'past';
        }else{
            isDay = 'future';
        }

        console.log(isDay) */
        // today
        // past
        // future

        // Second method
        // const isDay = moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future'
        /* return (
            <div>{this.state.isDay === 'today' ? 'Today!' : this.state.isDay === 'past' ? 'Past!' : 'Future!'}</div>
        ) */
        
        
        // Third method

        console.log(this.state.isDay)
        //if(this.state.isDay){
            if(this.state.isDay === 'today'){
                return <div>Today!</div>
            }else if(this.state.isDay === 'past'){
                return <div>Past!</div>
            }else if(this.state.isDay === 'future'){
                return <div>Future!</div>
            }else{
                return <div>Date is not defined</div>
            }

        //}else{
        //    <div>Date is not defined</div>
        //}

    }
}

export default ApplicationChecker;