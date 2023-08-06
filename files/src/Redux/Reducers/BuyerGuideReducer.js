export default function BuyerGuideReducerhandle(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'Handle_Buyer_Nav': return { ...state, Nav: action.data }

   
        default: return state

    }

}

