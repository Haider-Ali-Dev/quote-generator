import { Component } from "react";
import React from 'react';

// import tailwindcss from "tailwindcss";

class Card extends Component {
    render() {
        return (
            <div className="mw5 mw7-ns center bg-light-blue pa3 ph5-ns br3 pa3 ma2 grow bw2 shadow-5">
                <h1   className="underline">{this.props.author}</h1>
                <div>
                    <p className="i fw8">{this.props.quote}</p>
                    <button onClick={this.props.newQuote} className="f6 link dim ph3 pv2 mb2 dib white bg-black br4">Next Quote</button>
                </div>
            </div>
        );
    }

    
}


export default Card;


// bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5