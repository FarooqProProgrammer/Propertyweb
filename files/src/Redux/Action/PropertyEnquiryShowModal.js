function PropertyEnquiryShowModal(user) {
    console.log(user);
    return {

        type: 'SHOW_MODAL',

        data: user

    }

}

export {
    PropertyEnquiryShowModal
}