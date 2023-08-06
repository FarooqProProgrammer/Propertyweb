function NewsView(user) {
    console.log(user);
    return {

        type: 'SET_NEWS_VIEW',

        data: user

    }

}

export {
    NewsView
}