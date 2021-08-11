import React from 'react';

const MakeQuote = (props) => {
    return(
        <div className="mw5 mw7-ns center bg-light-purple pa4 ph5-ns br3 pa3 ma4 grow bw2 shadow-5">
            <h1 className="tc underline">Quote Maker</h1>
            <form>
                <label>
                    <textarea className="ma3" name="text" style={{resize: 'vertical'}}  onChange={props.formFucn} type="text" placeholder="Type Your Quote"/> 
                </label>
                
            </form>
            <div>
                <h1>Your Quote:</h1>
                <p style={{ wordWrap: 'break-word' }} className="i fw8 lh-copy">{props.data}</p>
                <button className="f6 link dim ph3 pv2 mb2 dib white bg-green br4 mr3" type="button" onClick={props.button}>Add Quotation Mark</button>
                <button onClick={props.reset} className="f6 link dim ph3 pv2 mb2 dib white bg-red br4 ml3" type="reset">Reset</button>
            </div>
        </div>
    )
}

export default MakeQuote;