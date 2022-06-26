






// __________RING PART____________//






// ________ rolex_______________//







// __________________ TESLA____________






//________________MONSTER TRUCK______________//





// ___________FRRARI_____________//






// ___________Abrams_____________//





// ___________Helicoptor_____________//





// ___________MANSION_____________//


function buy_mansion() {
    
    x = document.querySelector(`.amount`)
    cost=45000000
    cash = sub_cash(z, cost,`#mansion`)
    
    x.innerHTML= cash    
  
}

function sell_mansion(){
    a = document.querySelector(`#mansion`)
    quantity= sub_quantity(a.innerHTML)
    
    if (quantity >=0) {
        a.innerHTML = quantity
        
    } else {
        a.innerHTML = 0
    }
    
    
    x = document.querySelector(`.amount`)
    cost = 45000000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}





