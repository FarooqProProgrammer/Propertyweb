function FeaturedProperty(user) {
    console.log(user);
    return {

        type: 'SET_FEATURED_PROEPRTY',

        data: user

    }

}

export {
    FeaturedProperty
}