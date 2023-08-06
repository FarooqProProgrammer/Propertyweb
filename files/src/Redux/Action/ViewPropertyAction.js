function ViewPropertyAction(user) {
    console.log(user);
    return {

        type: 'SET__PROPERTY__ACTION',

        data: user

    }

}

export default ViewPropertyAction;