z = "1,000,000,000"


function buybug() {
    
    x = document.querySelector(`.amount`)
    
    cost=2
    name=`#bigmac`
    cash = sub_cash(z, cost,name)
    
    x.innerHTML= cash    
}

function buy_ring(){
    x = document.querySelector(`.amount`)
    cost=10000
    
    name =`#ring`    
    cash = sub_cash(z, cost,name)
    
    x.innerHTML= cash 
    
}

function buy_rolex(){
    x = document.querySelector(`.amount`)
    cost=15000
    
    
    
    name =`#rolex`    
    cash = sub_cash(z, cost,name)
    
    
    x.innerHTML= cash   
}

function buy_tesla(){
    x = document.querySelector(`.amount`)
    cost=75000
    
    
    
    name =`#tesla`    
    cash = sub_cash(z, cost,name)
        
    x.innerHTML= cash 
    
    
}

function buy_monster(){
    x = document.querySelector(`.amount`)
    cost=150000
    
        
        
    cash = sub_cash(z, cost,`#monster`)
        
    x.innerHTML= cash 
    

    
}

function buy_ferari() {
    
    x = document.querySelector(`.amount`)
    cost=250000
    cash = sub_cash(z, cost,`#ferari`)
    
    x.innerHTML= cash    
    
   
}

function buy_abrams() {
    
    x = document.querySelector(`.amount`)
    cost=8000000
    cash = sub_cash(z, cost,`#abrams`)
    
    x.innerHTML= cash    
  
}

function buy_heli() {
    
    x = document.querySelector(`.amount`)
    cost=31000000
    cash = sub_cash(z, cost,`#heli`)
    
    x.innerHTML= cash    

}

function buy_mansion() {
    
    x = document.querySelector(`.amount`)
    cost=45000000
    cash = sub_cash(z, cost,`#mansion`)
    
    x.innerHTML= cash    
  
}



function sellbug(){
    a = document.querySelector(`#bigmac`)
    quantity= sub_quantity(a.innerHTML)
    
    if (quantity >=0) {
        a.innerHTML = quantity
        
    } else {
        a.innerHTML = 0
    }
    
    
    x = document.querySelector(`.amount`)
    cost = 2
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_ring(){
    a = document.querySelector(`#ring`)
    quantity= sub_quantity(a.innerHTML)

    if (quantity >=0) {
        a.innerHTML = quantity

        
    } else {
        a.innerHTML = 0
    }

    
    

    x = document.querySelector(`.amount`)
    cost = 10000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_rolex(){
    a = document.querySelector(`#rolex`)
    quantity= sub_quantity(a.innerHTML)

    if (quantity >=0) {
        a.innerHTML = quantity

        
    } else {
        a.innerHTML = 0
    }

    
    

    x = document.querySelector(`.amount`)
    cost = 15000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_tesla(){
    a = document.querySelector(`#tesla`)
    quantity= sub_quantity(a.innerHTML)

    if (quantity >=0) {
        a.innerHTML = quantity

        
    } else {
        a.innerHTML = 0
    }

    
    

    x = document.querySelector(`.amount`)
    cost = 75000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_monster(){
    a = document.querySelector(`#monster`)
    quantity= sub_quantity(a.innerHTML)

    if (quantity >=0) {
        a.innerHTML = quantity

        
    } else {
        a.innerHTML = 0
    }

    
    

    x = document.querySelector(`.amount`)
    cost = 150000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_ferari(){
    a = document.querySelector(`#ferari`)
    quantity= sub_quantity(a.innerHTML)
    
    if (quantity >=0) {
        a.innerHTML = quantity
        
    } else {
        a.innerHTML = 0
    }
    
    
    x = document.querySelector(`.amount`)
    cost = 250000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_abrams(){
    a = document.querySelector(`#abrams`)
    quantity= sub_quantity(a.innerHTML)
    
    if (quantity >=0) {
        a.innerHTML = quantity
        
    } else {
        a.innerHTML = 0
    }
    
    
    x = document.querySelector(`.amount`)
    cost = 8000000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
}

function sell_heli(){
    a = document.querySelector(`#heli`)
    quantity= sub_quantity(a.innerHTML)
    
    if (quantity >=0) {
        a.innerHTML = quantity
        
    } else {
        a.innerHTML = 0
    }
    
    x = document.querySelector(`.amount`)
    cost = 31000000
    cash = add_cash(z, cost, quantity)
    x.innerHTML= cash
    z = cash
    
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
// ___________________ functions ___________________________//

function add_quanity(quantity){
    return parseInt(quantity)+1
    
}

function sub_quantity(quantity){
    quantity = parseInt(quantity)
    
        
    if (quantity>0) {
        return quantity-1
        
    } else {
        
        alert("You cannot sell the items which you don't have")
        return quantity-1
    }
}


function add_cash(cash, cost, quantity,){

    cash = remcomma(cash)
    if (quantity >=0) {
        
        cash = parseInt(cash) + cost
        cash = cash.toString()
        cash = addcomma(cash)

        return cash
        
    } else {
        cash = cash.toString()
        cash = addcomma(cash)
        return cash
    }
}

function sub_cash(cash, cost,name){

    cash = remcomma(cash)
    cash=parseInt(cash)

    if (cost<=cash) {
           
        cash = cash - cost
        a = document.querySelector(name)
        quantity = add_quanity(a.innerHTML)
        a.innerHTML = quantity 

        cash = cash.toString()
        cash = addcomma(cash)
        z = cash
        return cash
           
    } else {
        alert("You don't have enough balace to buy the selected item")
        cash = cash.toString()
        cash = addcomma(cash) 

        return cash 
    }
}

function remcomma(cash){
    cash=cash.toString()
    len = cash.length

    if (len==13) {
       
        B = cash.slice(0,1)
        M = cash.slice(2,5)
        T = cash.slice(6,9)
        O = cash.slice(10,13)

        return parseInt(B+M+T+O)
    }
    
    if(len==11) {
        M = cash.slice(0,3)
        T = cash.slice(4,7)
        O = cash.slice(8,11)
        
        return parseInt(M+T+O)
    }
    if(len==10) {
        M = cash.slice(0,2)
        T = cash.slice(3,6)
        O = cash.slice(7,10)
        
        return parseInt(M+T+O)
    }
    if(len==9) {
        M = cash.slice(0,1)
        T = cash.slice(2,5)
        O = cash.slice(6,9)
        
        return parseInt(M+T+O)
    }
    if(len==7) {
        T = cash.slice(0,3)
        O = cash.slice(4,7)
        
        return parseInt(T+O)
    }
    if(len==6) {
        T = cash.slice(0,2)
        O = cash.slice(3,6)
        
        return parseInt(T+O)
    }
    if(len==5) {
        T = cash.slice(0,1)
        O = cash.slice(2,5)
        
        return parseInt(T+O)
    }
    if(len<4) {
        
        return parseInt(cash)
    }
}

function addcomma(cash){
    cash=cash.toString()
    len = cash.length;
    
    if (len==10) {

        B = cash.slice(0,1)
        M = cash.slice(1,4)
        T = cash.slice(4,7)
        O = cash.slice(7,10)

        cash = B+","+M+","+T+","+O
    }
    
    if(len==9) {
        
        M = cash.slice(0,3)
        T = cash.slice(3,6)
        O = cash.slice(6,9)
        cash =M+","+T+","+O
    }
    if(len==8) {
        
        M = cash.slice(0,2)
        T = cash.slice(2,5)
        O = cash.slice(5,8)
        cash =M+","+T+","+O
    }
    if(len==7) {
        
        M = cash.slice(0,1)
        T = cash.slice(1,4)
        O = cash.slice(4,7)
        cash =M+","+T+","+O
    }
    if(len==6) {
        
        T = cash.slice(0,3)
        O = cash.slice(3,6)
        
        cash =T+","+O
    }
    if(len==5) {
        
        T = cash.slice(0,2)
        O = cash.slice(2,5)
        
        cash =T+","+O
    }
    if(len==4) {
        
        T = cash.slice(0,1)
        O = cash.slice(1,4)
        
        cash =T+","+O
    }

    return cash
}