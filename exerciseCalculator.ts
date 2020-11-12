interface ExerciseValues {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
}

// const parseExerciseArgs = (args: Array<string>): ExerciseValues => {
//     if ( args.length < 4 ) throw new Error('too little arguments')

//     const validArgs = args.filter( n => !isNaN(Number(n)))
    
    
//     if (args.length - 2 === validArgs.length) {
        

//         const argsNumbers= validArgs.map(a => Number(a))
//         const target = Number(argsNumbers.shift())

//         return {
//             exerciseArray: argsNumbers,
//             target: target
//         }
//     }
// }

export const calculateExercises = ( args: Array<number>, userTarget: number): ExerciseValues => {

    const trainingDays = args.filter(p => p > 0)
    const average = args.reduce((a, b) => a + b)/args.length
    const target = userTarget
    
    const success = () => {
        switch(true) {
            case (average  >= target ):
                return true
            default:
                return false
        }
    }

    const rating = () => {
        switch(true) {
            case (average < target * 0.9):
                return 1
            case (average >= target * 0.9 && average < target * 1.1):
                return 2
            case ( average >= target * 1.1):
                return 3
            default: 
                return 0
        }
    }

    const ratingDescription = () => {
        switch(rating()) {
            case 1:
                return 'Not quite there yet'
            case 2:
                return 'Good, but could be better'
            case 3:
                return 'Above target. Good Job'
            default:
                return 'couldn\'t find description'
        }
    }

    return {
        periodLength: args.length,
        trainingDays: trainingDays.length,
        success: success(),
        rating: rating(),
        ratingDescription: ratingDescription(),
        target: userTarget,
        average: average
    }
    
}

// try {
//     const {exerciseArray, target} = parseExerciseArgs(process.argv)
//     console.log(calculateExercises(exerciseArray, target))
// } catch (e) {
//     console.log('Error, something went wrong: ', e.message)
// }
