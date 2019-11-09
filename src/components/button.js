import React, { Component } from 'react';

class Button extends Component {

    divStyle = {
        backgroundColor: this.props.color
    }

    UNSAFE_componentWillMount(){
        this.divStyle = {
            backgroundColor: this.props.color
        }
    }

    componentDidUpdate(){
        this.divStyle = {
            backgroundColor: this.props.color
        }
    }

    render(){
        return(
            <div className="buttonHolder">
                <button onClick={this.props.newquote} style={this.divStyle}>Get me a new quote!</button>
            </div>  
        )
    }
}

export default Button;