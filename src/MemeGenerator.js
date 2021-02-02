import React, { useState } from "react"
import Meme from "./Meme"

function MemeGenerator(){
    const [ topText, setTopText ] = useState("")
    const [ bottomText, setBottomText ] = useState("")
    const [ randomImg, setRandomImg ] = useState("http://i.imgflip.com/1bij.jpg")

    function handleChange(event){
        /* Sets state as only source of truth */
        const { name } = event.target
        name === "topText" ? setTopText(event.target.value) : setBottomText(event.target.value)
    }

    function handleSubmit(event){
        /* grab an array of memes from api and randomly set 
        an image for the meme */
        event.preventDefault()
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(res => {
            const randomNumber = Math.floor(Math.random() * res.data.memes.length)
            const newImg = res.data.memes[randomNumber]
            setRandomImg(newImg.url)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="meme-form">
                <input 
                    type="text" 
                    value={topText} 
                    name="topText" 
                    onChange={handleChange} 
                    placeholder="Top Text"/>
                    <br></br>
                <input 
                    type="text" 
                    value={bottomText} 
                    name="bottomText" 
                    onChange={handleChange} 
                    placeholder="Bottom Text"/>
                    <br></br>
                <button>Generate Random Meme</button><br></br>
            </form>
            <Meme 
                top_text={topText} 
                bottom_text={bottomText}
                random_img={randomImg} 
            />
        </div>
    )
}

export default MemeGenerator