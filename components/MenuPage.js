export class MenuPage extends HTMLElement {
    constructor() {
        super()
    }
    // Connectedcallback is when the component is attached to the DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true) // Boolean true indicates that we want a deep clone
        this.appendChild(content)
    }
}

customElements.define("menu-page", MenuPage)