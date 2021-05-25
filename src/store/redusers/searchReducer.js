const initialState = {
    value: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "change_input":{
            const {name, value} = action.target
            return{
                ...state,
                [name]:value

            }

        }
        default: return state
    }
}

export default searchReducer