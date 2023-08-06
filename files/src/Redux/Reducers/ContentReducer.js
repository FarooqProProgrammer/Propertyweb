export default function ContentReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'Handle_Content_Action': return { ...state, Nav: action.data }

   
        default: return state

    }

}

