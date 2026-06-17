const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault()
                const url = a.getAttribute("href")

                Router.go(url)
            })
        })
        // Check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        console.log(`Routing to the path ${route}`)

        if(addToHistory) {
            history.pushState({route}, null, route)
        }
    }
}

export default Router