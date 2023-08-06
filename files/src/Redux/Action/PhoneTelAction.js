function PhoneTelAction(user) {
    console.log(user);
    return {

        type: 'SET_PHONE_CODE',

        data: user

    }

}

export {
    PhoneTelAction
}