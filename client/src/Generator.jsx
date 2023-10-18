import React, { useState } from "react";

const Generator = () => {
    const [formInput, setformInput] = useState("")

    const handleFormChange = (event) => {
        setformInput(event.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/generate-recipe', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ prompt: formInput })
        })
        .then(response => {
            console.log(response)
            setformInput('')
        })
    }


    return (
        <>
        <h1> Logo </h1>

        <form onSubmit={handleFormSubmit}>
            <h2> Recipe Generator </h2>
            <input placeholder="Please enter the ingredients you would like to use to generate the recipe" id="ingredients" type="ingredients" value={formInput} onChange={handleFormChange} />
            <br/>
            <input id="submit "type="submit" value="Generate Recipe" />
        </form>
        </>
    )
}

export default Generator;