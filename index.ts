import express from 'express';
import { calculateBmi } from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator'

const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query

    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {

        res.send(calculateBmi(Number(height), Number(weight)))
    } else {
        res.send({ error: "malformatted parameters" })
    }
    
});

app.post('/exercises', (req, res) => {
 
    const {dailyExercises, target} = req.body

    if( !dailyExercises || !target ) res.send({ error: "parameters missing"}).end()
    
    const validArray = dailyExercises.filter( (i: number) => !isNaN(Number(i)) )

    if (validArray.length === dailyExercises.length &&
        !isNaN(target)) {
            res.send(calculateExercises(dailyExercises, target))
    } else {
        res.send({ error: "malformatted request" })
    }

})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});