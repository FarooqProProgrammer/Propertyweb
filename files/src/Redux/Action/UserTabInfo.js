function UserTabInfo(Tab) {
    console.log(Tab);
    return {

        type: 'SET_TAB_INFO',

        data: Tab

    }

}

export {
    UserTabInfo
}