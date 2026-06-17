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
            history.pushState({route}, null, route) // The third argument which is the route is what you see in the URL
        }

        let pageElement = null

        switch (route) {
            case "/":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Menu"
                break

            case "/order":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Your Order"
                break
        }

        if(pageElement) {
             const cache = document.querySelector("main")
            // cache.children[0].remove()
            cache.innerHTML = "" // Quick and dirty way of removing and ignoring attached eventlisteners
            cache.appendChild(pageElement)
            window.scrollX = 0
            window.scrollY = 0
        }

       
    }
}

export default Router