function AboutTurkeyNavHandle(user) {
    console.log(user);
    return {

        type: 'Handle_About_Nav',

        data: user

    }

}

export {
    AboutTurkeyNavHandle
}