import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../serviecs/home.service';
import { filter } from 'rxjs';
import { AddToCart, CartProducts, Products } from '../../interfaces/interfaces';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../serviecs/Basket.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  filterUrl: string = 'https://restaurant.stepprojects.ge/api/Products/GetFiltered?'

  vegetarian!: null | boolean
  nuts!: null | boolean
  range!: null | number
  categoryId: number = 0

  selectedId: number | null = null;
  activePopups: boolean[] = [];
  i: any;


  constructor(public service: HomeService, private cartService: CartService){}

  ngOnInit(){
    this.service.getProducts()
    this.service.getCategories()

    this.activePopups = new Array(this.service.products.length).fill(false);
  }

  filterProducts() {
    this.filterUrl = 'https://restaurant.stepprojects.ge/api/Products/GetFiltered?'
    if(this.vegetarian === true || this.vegetarian === false) {
      this.filterUrl += `vegeterian=${this.vegetarian}&`
    }
    if(this.nuts === true || this.nuts === false) {
      this.filterUrl += `nuts=${this.nuts}&`
    }
    if(typeof this.range === 'number') {
      this.filterUrl += `spiciness=${this.range}`
    }

    if(this.categoryId != 0) {
      this.filterUrl += `categoryId=${this.categoryId}`
    }
    
    this.service.getFilteredProducts(this.filterUrl)
  }

  resetFilter() {
    this.vegetarian = this.nuts = this.range = null
  }

  addToCart(product: any){
    this.cartService.addToCart(product)
    
      
    }
  }

