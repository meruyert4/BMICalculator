import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webPage.html'));
});

app.post('/bmi', (req, res) =>{
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height)
    const bmi = weight / (height/100) ** 2
    let category
    let color

    if (isNaN(weight) || isNaN(height) || weight <=0 || height <= 0){
         color = 'red'
        return res.status(400).send(`<p style = "color:${color}";>Invalid input. Try Again</p>`)
    }
    if (bmi < 18.5){
        category = 'Underweight'
        color = 'blue'
    } else if(bmi >= 18.5 && bmi < 24.5){
        category = 'Normal weight'
        color = 'green'
    } else if(bmi >= 25 && bmi < 29.9){
        category = 'Overweight'
        color='orange'
    } else{
        category = 'Obesity'
        color = 'red'
    }

    res.send(`<p style="color:${color}";>Your bmi is ${bmi.toFixed(2)}. Your category is ${category}</p>`)
})

app.listen(3000, () =>{
    console.log('Server running on http://localhost:3000')
})
