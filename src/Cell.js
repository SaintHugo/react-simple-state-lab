import React, {Component} from 'react'

export default class Cell extends Component{

    constructor(props){
        super()
        this.state={
            color: props.value
        }
    }

    handleClick = () => {
        console.log('penis')
        this.setState({
            color: '#333'
        })
    }

    render(){
        // console.log(this.props.value)
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        )
    }
}