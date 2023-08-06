export default function ViewPropertyReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET__PROPERTY__ACTION': return { ...state, login: action.data }

   
        default: return state

    }

}

