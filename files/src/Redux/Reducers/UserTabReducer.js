export default function UserTabReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_TAB_INFO': return { ...state, Tab: action.data }

   
        default: return state

    }

}

