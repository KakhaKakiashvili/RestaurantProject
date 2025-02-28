import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { CartProducts } from '../../interfaces/interfaces';
import { CartService } from '../../serviecs/Basket.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  products: CartProducts[] = []
  private items: any[] = []
  
  addCheckoutClass: boolean = false

  checkoutForm: any = FormGroup

  constructor(protected service: CartService, public http: HttpClient) {}

  ngOnInit(): void {
    this.generateForm()
  }

  getCartProducts(){
    this.http.get<CartProducts[]>('https://restaurant.stepprojects.ge/api/Baskets/GetAll')
    .subscribe(res =>{
      this.products = res
    })
  }

  deleteFromCart(item: any){
    this.service.deleteFromCart(item)
  }

  checkoutPopup() {
    this.addCheckoutClass = true
    console.log(this.addCheckoutClass);
    
  }

  closePopup() {
    this.addCheckoutClass = false
    console.log(this.addCheckoutClass);
  }

  generateForm(){
  this.checkoutForm = new  FormGroup ({
    firstName: new FormControl ('',[Validators.required]),
    lastName: new FormControl ('',[Validators.required]),
    phoneNumber: new FormControl ('',[Validators.required, Validators.maxLength(9), Validators.minLength(9)])
  })
}
  formValue(){
    alert('Your order has been placed ✔️, we will contact you soon.')
  }
}
