class Api {
    constructor() {
        this.path = "https://api.react-learning.ru/v2/group-7";
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzlkMDciLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDcsImV4cCI6MTY5OTQ0Nzk0N30.KTv0dS9PgOqxRU4zcCLIgqTBybVJcYjF1CEIkzhAeig';
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
    }
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
    }
    addProduct(body) {
        return fetch(`${this.path}/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }
    updProduct(id, body) {
        return fetch(`${this.path}/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }
    delProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())

    }
    logIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }
    signUp(body) { 
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }
    showProfile() {
        return fetch(`${this.path}/users/me`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
    }
    setLike(id, flag) {
        return  fetch(`${this.path}/products/likes/${id}`, {
            method: flag ? "PUT" : "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
    }
}

const api = new Api;

export default api;