export default function PropertyTypeFilterReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'PROPERTY_TYPE_FILTER': return { ...state, Enquiry: action.data }

   
        default: return state

    }

}

