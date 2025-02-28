export interface Products {
description: any
    id: number
    name: string
    price: number
    nuts: boolean
    image: string
    vegeterian: boolean
    spiciness: number
    categoryId: number
}

export interface Categories {
    id: number
    name: string
}

export interface ProductCategories {
    id: number
    name: string
    products: Products[]
}

export interface CartProducts {
    quantity: number
    price: number
    product: Products
}

export interface AddToCart {
    quantity: number
    price: number
    productId: number
}
