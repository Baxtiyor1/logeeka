import { createContext, useEffect, useState } from "react";

let TokenContext = createContext()

function TokenProvider({ children }) {

    let [token, setToken] = useState(window.localStorage.getItem('logeekaToken') || false)

    useEffect(() => {
        window.localStorage.setItem('logeekaToken', token)
    }, [token])


    return (
        <>
            <TokenContext.Provider value={{token, setToken}}>{children}</TokenContext.Provider>
        </>
    )
}

export { TokenContext, TokenProvider }