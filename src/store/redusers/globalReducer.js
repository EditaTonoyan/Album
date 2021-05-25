const initialState = {
    image: []
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "get_images":{
            return{
                ...state,
                image:action.data

            }
        }
        default: return state
    }
}
export default globalReducer