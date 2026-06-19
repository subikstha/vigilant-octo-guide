import Store from './services/Store.js'
import API from './services/API.js'
import { loadData } from './services/Menu.js'
import Router from './services/Router.js'

// Link Web Components
import {MenuPage} from './components/MenuPage.js'
import  DetailsPage  from './components/DetailsPage.js'
import { OrderPage } from './components/OrderPage.js'
import ProductItem from './components/ProductItem.js'
import { CartItem } from './components/CartItem.js'

// Singleton pattern for accessing the Store globally
window.app = {}
app.store = Store
app.router = Router
// It is better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
    loadData()
    app.router.init() // Initialize the router
})

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge")
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0)
    badge.textContent = qty
    badge.hidden = qty == 0
})

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);