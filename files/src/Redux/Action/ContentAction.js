function ContentAction(user) {
    console.log(user);
    return {

        type: 'Handle_Content_Action',

        data: user

    }

}

export {
    ContentAction
}