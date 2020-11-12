
interface BmiValues {
    height: number;
    weight: number;
    bmi: string;
}

// const parseArguments = (args: Array<string>): BmiValues => {
//     if(args.length < 4 ) throw new Error('missing arguments') 
//     if(args.length > 4 ) throw new Error('too many arguments') 

//     if( !isNaN(Number(args[2])) && !isNaN(Number(args[3])) ) {
//         return {
//             height: Number(args[2]),
//             weight: Number(args[3])
//         }
//     } else {
//         throw new Error('values must be numbers')
//     }
// }



export const calculateBmi = (height: number, weight: number): BmiValues => {
    const heightKg = height/100
    const bmi = weight / ( heightKg*heightKg )

    const result = () => {
        switch (true) {
            case (bmi <= 15):
                return "Very severly underweight"
            case (bmi > 15 && bmi <= 16 ):
                return "Severely underweight"
            case (bmi > 16 && bmi <= 18.5):
                return "Underweight"
            case (bmi > 18.5 && bmi <= 25):
                return "Normal (healthy weight)"
            case (bmi > 25 && bmi <= 30):
                return "Overweight"
            case (bmi > 30 && bmi <= 35):
                return "Obese Class I (Moderately obese)"
            case (bmi > 35 && bmi <= 40):
                return "Obese Class II (Severely obese)"
            case (bmi > 40):
                return "Obese Class III (Very severely obese obese)"
            default:
                return "Something"
        }
    }

    return {
        weight: weight,
        height: height,
        bmi: result()
    }
}

// try {
//     const { height, weight } = parseArguments(process.argv)
//     console.log(calculateBmi(height, weight))
    
// } catch (e) {
//     console.log('ERROR, something went wrong: ', e.message)
// }

