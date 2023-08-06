export default function HideComponentOneReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'HIDE_COMPONENT_ONE': return { ...state, Hide: action.data }

   
        default: return state

    }

}

