import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categories, ProductCategories, Products } from "../interfaces/interfaces";

@Injectable({ 
    providedIn: 'root'
})

export class HomeService {
    
    products: Products[] = []
    categories: Categories[] = []
    
    constructor(private http: HttpClient) {}

    getProducts() {
        this.http.get<Products[]>('https://restaurant.stepprojects.ge/api/Products/GetAll')
        .subscribe(res => {
            this.products = res
        })
    }

    getCategories(){
        this.http.get<Categories[]>('https://restaurant.stepprojects.ge/api/Categories/GetAll')
        .subscribe(res => {
            this.categories = res
        })
    }

    getCategoryProducts(id: number) {
        this.http.get<ProductCategories>(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
        .subscribe(res => {
            this.products = res.products
        })
    }

    getProductByCategory(id: number) {
        this.http.get<ProductCategories>(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
        .subscribe(res =>{
            this.products = res.products
        })
    }

    getFilteredProducts(url: string) {
        this.http.get<Products[]>(url)
        .subscribe(res => {
            console.log(res);
            this.products = res
            
        })
    }
}