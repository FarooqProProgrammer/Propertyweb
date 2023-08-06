function BuyerGuideNavHandle(user) {
    console.log(user);
    return {

        type: 'Handle_Buyer_Nav',

        data: user

    }

}

export {
    BuyerGuideNavHandle
}