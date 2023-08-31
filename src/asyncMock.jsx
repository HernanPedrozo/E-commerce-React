const products = [{
        "id": "1",
        "category": "samsung",
        "name": "Samsung Galaxy samsungA53 5G 128 GB 6 GB RAM",
        "price": 129.999,
        "image": "../img/samsungA53.png",
        "stock": 2
    },
    {
        "id": "2",
        "category": "samsung",
        "name": "Samsung Galaxy Z Flip 4 256 GB 8 GB RAM",
        "price": 249.999,
        "image": "../img/samsungflip.png",
        "stock": 7
    },
    {
        "id": "3",
        "category": "motorola",
        "name": "Motorola Edge 30 Pro 256 GB 12 GB RAM",
        "price": 189.999,
        "image": "../img/motoedge.png",
        "stock": 5
    },
    {
        "id": "4",
        "category": "motorola",
        "name": "Moto G71 128 GB neptune green 6 GB RAM",
        "price": 75.999,
        "image": "../img/motog71.png",
        "stock": 1
    },
    {
        "id": "5",
        "category": "xiaomi",
        "name": "Xiaomi Redmi Note 9 Pro 128 GB gris interestelar 6 GB RAM",
        "price": 102.362,
        "image": "../img/xiaomi9.png",
        "stock": 3
    },
    {
        "id": "6",
        "category": "xiaomi",
        "name": "Xiaomi Redmi Note 10 5G 128 GB azul nocturno 6 GB RAM",
        "price": 124.199,
        "image": "../img/xiaomi10.png",
        "stock": 9
    },
    {
        "id": "7",
        "category": "xiaomi",
        "name": "Xiaomi Redmi Note 11 128 GB gris grafito 8 GB RAM",
        "price": 132.208,
        "image": "../img/xiaomi11.png",
        "stock": 6

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const filteredProducts = products.filter((product) => product.category === category)
            resolve(filteredProducts)
            
        }, 500)
    })
}