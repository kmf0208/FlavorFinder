require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')


const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017')

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json('the password incorrect')
            }
        }else{
            res.json("dont exist")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

// code to send request to openai api
app.post('/api/generate-recipe', (req, res) => {
    fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
        "messages": [{ "role": "system", "content": "Please give me a recipe for a Japanese dinner dish that is easy to make and can be cooked in 30 minutes in the following format: Name of dish: Cooking time: Short description: List of ingredients: Instructions:" }],
        "model": "gpt-3.5-turbo-16k-0613"
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0].message.content);
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

// { "messages": 
// [{ "role": "system", "content": "Please give me a recipe for a Japanese dinner dish that is easy to make and can be cooked in 30 minutes in the following format: Name of dish: Cooking time: Short description: List of ingredients: Instructions:" }],
//     "model": "gpt-3.5-turbo"}


app.listen(3001, ()=>{
    console.log('server is running')
})