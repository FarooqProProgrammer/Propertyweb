export default function PropertyBedroomFilter(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'PROPERTY_BEDROOM_FILTER': return { ...state, Phone: action.data }

   
        default: return state

    }

}

