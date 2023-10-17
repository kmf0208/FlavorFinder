import React from 'react'
import { useNavigate } from 'react-router-dom';



function Home(){
    const navigate = useNavigate()

    const handleGeneratorPageChange = () => {
        navigate('/generator')
    }

    return (
        <>
        <h2>Home Component</h2>

        <button onClick={handleGeneratorPageChange}> Generate Recipe </button>
        </>
    )
}

export default Home;