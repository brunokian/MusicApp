import { useMemo, useState } from "react";
import Context from "./Context";

function Provider({children}) {
    const [favoriteList, setFavoriteList] = useState([])

    const contextUser = useMemo(() => ({
        favoriteList,
        setFavoriteList
    }), [favoriteList]) // o useMemo tem a finalidade de evitar calculos compitacionais repetidos desnecessarios, recalculando o valor apenas quando ocorre mudanças na dependecia

    return (
        <Context.Provider value={ contextUser }>
            {children}
        </Context.Provider>
    )
}

export default Provider