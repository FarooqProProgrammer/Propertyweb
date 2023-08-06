export default function PropertyFilterReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'PROPERTY_FILTER': return { ...state, Enquiry: action.data }

   
        default: return state

    }

}

