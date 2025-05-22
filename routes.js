const routes = [
    {
        method: 'GET',
        path : "/",
        handler: (request, h) => {
            return "Home Page";
        },
    },
    {
        method: '*',
        path : "/",
        handler: (request, h) => {
            return "Halaman ini tidak dapat diakses dengan metode tersebut";
        },
    },
    {
        method: 'GET',
        path : "/about",
        handler: (request, h) => {
            return "About Page";
        },
    },
    {
        method: "*",
        path : "/about",
        handler: (request, h) => {
            return "Halaman ini tidak dapat diakses dengan metode tersebut";
        },
    },
    {
        method: 'GET',
        path : "/contact",
        handler: (request, h) => {
            return "Contact Page";
        },
    },
    {
        method: "*",
        path : "/contact",
        handler: (request, h) => {
            return "Halaman ini tidak dapat diakses dengan metode tersebut";
        },
    },
    {
        method: "GET",
        path : "/users/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;
            if (lang === "id") {
                return `Hai, ${name}`;
            }
            return `Hello, ${name}`;
        },
    },
    {
        method: "*",
        path : "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    }

]

module.exports = routes;