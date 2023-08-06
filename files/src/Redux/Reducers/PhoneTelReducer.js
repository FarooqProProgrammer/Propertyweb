export default function PhoneTelReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_PHONE_CODE': return { ...state, Phone: action.data }

   
        default: return state

    }

}

