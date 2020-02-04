function menuItem(name, kcal, allergies, src) {
    this.name = name;
    this.kcal = kcal;
    this.allergies = allergies;
    this.src = src;

    this.getBurger = function() {
	return this.name + ' ' + this.kcal;
    }
}

let burger1 = new menuItem('Fire', '773', 'Gluten', 'https://images6.alphacoders.com/883/883558.jpg');
let burger2 = new menuItem('Turkey', '729', 'Gluten', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/07/main/ranch_turkey_burgers_2525701_hiaha_0086.jpg?itok=sfDFAJMw');
let burger3 = new menuItem('Cheese', '995', 'Lactose', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg');
let burger4 = new menuItem('Truffle', '800', 'Gluten', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5e0fb56c381eb932f756ea17-883cc3c6.jpg');
let burger5 = new menuItem('BBQ', '800', 'Lactose', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmt8Fx9qUAA0h9wEro70Z0_1GqGxj4pzXz3DegVn04HhCTSG54xA&s');


/*
const vm = new Vue({x
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})
*/

var menu = [ burger1, burger2, burger3, burger4, burger5 ];
var i = 0;
for (i = 0; i < menu.length; i++) {
  let listItem = document.createElement("li");
  let listItemAllergy = document.createElement("ul");
        let burgerList = document.createTextNode(menu[i].name);
        	listItem.appendChild(burgerList);
          document.getElementById("myloop").appendChild(listItem);
          if(menu[i].allergies != "none")
          {
          		let listAllergy = document.createTextNode(menu[i].allergies);
        			listItemAllergy.appendChild(listAllergy);
        			document.getElementById("myloop").appendChild(listItemAllergy);  		
          }
        
					
}

/*
document.getElementById("burger1").innerHTML = burger1.getBurger();
document.getElementById("burger2").innerHTML = burger2.getBurger();
document.getElementById("burger3").innerHTML = burger3.getBurger();
document.getElementById("burger4").innerHTML = burger4.getBurger();
document.getElementById("burger5").innerHTML = burger5.getBurger();
*/

console.log(burger1.getBurger());
console.log(burger2.getBurger());
console.log(burger3.getBurger());
console.log(burger4.getBurger());
console.log(burger5.getBurger());
