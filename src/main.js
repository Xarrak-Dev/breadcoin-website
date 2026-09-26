import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.store("balance", {amount: 1000})
Alpine.store("user", {
    name: localStorage.getItem('username')
})
Alpine.start()
