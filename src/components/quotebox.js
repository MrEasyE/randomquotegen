import React, { Component } from 'react';

class Quotebox extends Component {

    componentDidMount(){
        this.divStyle = {
            backgroundColor: this.props.color
        }
    }

    componentDidUpdate(){
        this.divStyle = {
            backgroundColor: this.props.color // we need to call this in did update or the variable divUpdate will persist
        }
    }

    render(){

        return(
            <div className="quoteHolder">
                <div className="QuoteboxShadow">
                
                </div>
                <div className="Quotebox" style={this.divStyle}>
                    <div className="QuoteArea" >
                        <h2 className="Quote">{this.props.quote.quote}</h2>
                        <p className="Author">{this.props.quote.author}</p>
                    </div>
                </div>
            </div>            
        );
    }
}

export default Quotebox;