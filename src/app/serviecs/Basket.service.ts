import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CartProducts, Products } from "../interfaces/interfaces";
import { Observable } from "rxjs/internal/Observable";


@Injectable({
    providedIn: 'root'
})

export class CartService{
    private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    

    addToCart(product: Products) {
        this.items.push({...product, quantity: 1})
        alert('Product has been added')

        localStorage.setItem('cartItems', JSON.stringify(this.items))
        
    }

    getItems() {
        return this.items
    }

    deleteFromCart(item: Products) {
        this.items = this.items.filter((i: Products) => i.id !== item.id)

        localStorage.setItem('cartItems', JSON.stringify(this.items))
    }

    increaseQuantity(id: number) {
        let item = this.items.find((i: any) => i.id === id);
        if (item) {
            item.quantity++
        }

        localStorage.setItem('cartItems', JSON.stringify(this.items))
    }

    decreaseQuantity(id: number) {
        let item = this.items.find((i: any) => i.id === id);
        if (item.quantity > 1) {
            item.quantity--
        }

        localStorage.setItem('cartItems', JSON.stringify(this.items))
    }

    getTotal() {
        return this.items.reduce((acc: any, item: any) => {
          return acc + item.price *item.quantity;
        },0);
      }

}
