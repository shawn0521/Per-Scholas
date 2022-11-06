//Tip Calculator
const express = require('express')

 const app = express()

 const PORT = 3000

 app.get('/greeting/:name', function(req, res){
    const {name} = req.params
    res.send(`Hey, Big-head! So good to see you again, ${name}!`)
 })

 app.get('/tip/:total/:tipPercentage', function(req, res){
    const {total, tipPercentage} = req.params
    console.log(req.params)
    const percentage = tipPercentage/100
    console.log(percentage)
    const tip = total * percentage
    console.log(tip)
    res.send(`The tip owed is ${tip}`)
 })

 //MagiC EightBall

 const answerArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

 app.get('/magic/:question/', function(req, res){
   const answer = answerArr[Math.floor(Math.random() * answerArr.length)]
   const {question} = req.params
   res.send(`<h1>The answer to your question: ${question} is: ${answer}!</h1>`)
})

// http://localhost:3000/magic/Will%20I%20Ever%20Fly%3F

 app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})