// It is better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", () => {
    let nav = $("nav")
    console.log(nav)

    nav.on('click', () => {
        alert('Hey you just clicked on the nav')
    })
})

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);