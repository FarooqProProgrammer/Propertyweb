export default function NewsViewReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_NEWS_VIEW': return { ...state, Hide: action.data }

   
        default: return state

    }

}

