import { array } from "jsverify"

export function calculateTotal (items, tax) {
    let totalPrice = 0
    tax = Math.abs(tax)
  for(let i=0; i< items.length; i++){
    if(items[i].taxable === true){
     totalPrice += items[i].price + items[i].price * tax
    }else{
      totalPrice += items[i].price
    }
  }
return totalPrice
}