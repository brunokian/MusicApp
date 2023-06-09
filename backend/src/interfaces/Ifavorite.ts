interface Ifavorite {
    email: string,
    favoriteList: string[]
}

interface IfavoriteRequest {
    email: string,
    songInfo: { title: string, url: string },
}

export { Ifavorite, IfavoriteRequest }