function HidelComponentOne(user) {
    console.log(user);
    return {
        type: 'HIDE_COMPONENT_ONE',
        data: user
    }
}
export {
    HidelComponentOne
}