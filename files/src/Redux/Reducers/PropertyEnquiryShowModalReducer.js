export default function PropertyEnquiryShowModalReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SHOW_MODAL': return { ...state, Enquiry: action.data }

   
        default: return state

    }

}

