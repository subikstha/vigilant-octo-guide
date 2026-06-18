const Store = {
    menu: null,
    cart:[]
}

const proxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value
        if(property === "menu") {
            // Announce globally that the menu has changed
            window.dispatchEvent(new Event("appmenuchange"))
        }
        if(property === "cart") {
            window.dispatchEvent(new Event("appcartchange"))
        }
        // Set should return either true or false to indicate that you accepted the set or not
        return true // Accept the setter
    }
})

export default proxiedStore