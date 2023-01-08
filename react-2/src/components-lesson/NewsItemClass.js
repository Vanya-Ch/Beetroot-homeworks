import React from 'react';

class NewsItemClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleBig: this.props.title,
            space: '1',
            isSpanClicked: false
        }

       // console.log(this.state.titleBig)
      //  console.log(this.state.space)

       // this.state.space = '2';
    }
    
    handleClick(){
        this.setState({
            space: '2'
        })
        
     //   console.log(this.state.space)
    }

    spanClick(){
        this.setState({
            isSpanClicked: !this.state.isSpanClicked,
        })

        console.log('Here', this.state.isSpanClicked)
    }

    render(){
        return(
        <div>
            <h3 onClick={() => this.handleClick()}>{this.state.titleBig} {this.state.space}</h3>
            <p>{this.props.text}</p>
            <span onClick={() => this.spanClick()}>Click here! ({this.state.isSpanClicked ? 'true':'false'})</span>
        </div>
        );
    }
}

export default NewsItemClass;