import React, { useRef } from "react"
import Meme from "./Meme"
import { exportComponentAsPNG } from "react-component-export-image"

const ComponentToPrint = React.forwardRef((props, ref) => (
    <Meme ref={ref} />
  ));

function ExportButton(){
    const componentRef = useRef();

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={() => exportComponentAsPNG(componentRef)}>
                Export As PNG
            </button>
        </div>
    )
}

export default ExportButton