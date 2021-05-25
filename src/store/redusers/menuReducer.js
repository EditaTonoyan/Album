const initialState = {
    collapsed: false
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_collapsed":{
            return{
                ...state,
                collapsed: !state.collapsed

            }

        }
        default: return state
    }
}

export default menuReducer