function PropertyTypeFilter(user) {
    console.log(user)
    return {

        type: 'PROPERTY_TYPE_FILTER',

        data: user

    }

}

export {
    PropertyTypeFilter
}