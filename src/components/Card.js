import { Component } from "react";
import React from 'react';

// import tailwindcss from "tailwindcss";

class Card extends Component {
    render() {
        return (
            <div className="mw5 mw7-ns center bg-light-blue pa3 ph5-ns br3 pa3 ma2 grow bw2 shadow-5">
                <h1   className="font-bold antialiased" style={{fontSize: '30px'}}>{this.props.author}</h1>
                <div>
                    <p className="i fw8">{this.props.quote}</p>
                    <button onClick={this.props.newQuote} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-3">Next Quote</button>
                </div>
            </div>
        );
    }

    
}


export default Card;


// bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5