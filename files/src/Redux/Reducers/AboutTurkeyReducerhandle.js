



export default function AboutTurkeyReducerhandle(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'Handle_About_Nav': return { ...state, Nav: action.data }
        default: return state

    }

}

