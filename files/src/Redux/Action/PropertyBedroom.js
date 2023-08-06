function PropertyBedroom(user) {
    console.log(user)
    return {

        type: 'PROPERTY_BEDROOM_FILTER',

        data: user

    }

}

export {
    PropertyBedroom
}