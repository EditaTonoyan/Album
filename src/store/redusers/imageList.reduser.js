const initialState = {
    spans: ''
}

const imageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "change_spane":{
            return{
                ...state,
                spans:action.data

            }

        }
        default: return state
    }
}

export default imageListReducer