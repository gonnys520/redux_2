
let count = 0

const todoReducer = (state = [ ], action ) => {

    console.log("todoReducer................start")
    console.log(state)

    return [...state,'AAA']
}

export default todoReducer