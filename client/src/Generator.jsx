import React, { useState } from "react";

const Generator = () => {
    const [formInput, setformInput] = useState([])

    const handleFormChange = (event) => {
        setformInput(event.target.value)
    }


    return (
        <>
        <h1> Logo </h1>

        <form>
            <h2> Recipe Generator </h2>
            <input placeholder="Please enter the ingredients you would like to use to generate the recipe" id="ingredients" type="ingredients" value={formInput} onChange={handleFormChange} />
            <br/>
            <input id="submit "type="submit" value="Generate Recipe"/>
        </form>
        </>
    )
}

export default Generator;