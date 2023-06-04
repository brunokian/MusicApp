interface Ifavorite {
    email: string,
    favoriteList: string[]
}

interface IfavoriteRequest {
    email: string,
    songLink: string,
}

export { Ifavorite, IfavoriteRequest }