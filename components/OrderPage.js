export class OrderPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})

        const styles = document.createElement("style")
        this.root.appendChild(styles)

        async function loadCSS() {
            const result = await fetch("/components/OrderPage.css")
            const css = await result.text()
            styles.textContent = css
        }
        loadCSS()
    }

    connectedCallback() {
        const template = document.getElementById("order-form-template")
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)
    }
}

customElements.define("order-page", OrderPage)