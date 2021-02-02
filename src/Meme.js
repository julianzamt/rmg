import React from "react"

function Meme(props){
    return(
        <div className="meme">
                <img style={{maxWidth: 500}} src={props.random_img}></img>
                <h2 className="top">{props.top_text}</h2>
                <h2 className="bottom">{props.bottom_text}</h2>
            </div>
    )
}

export default Meme