/*
function menuItem(name, kcal, allergies, src) {
    this.name = name;
    this.kcal = kcal;
    this.allergies = allergies;
    this.src = src;

    this.getBurger = function() {
	return this.name + ' ' + this.kcal;
    }
}
*/

/*
let burger1 = new menuItem('Fire', '773', 'Gluten', 'https://images6.alphacoders.com/883/883558.jpg');
let burger2 = new menuItem('Turkey', '729', 'Gluten', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/07/main/ranch_turkey_burgers_2525701_hiaha_0086.jpg?itok=sfDFAJMw');
let burger3 = new menuItem('Cheese', '995', 'Lactose', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg');
let burger4 = new menuItem('Truffle', '800', 'Gluten', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5e0fb56c381eb932f756ea17-883cc3c6.jpg');
let burger5 = new menuItem('BBQ', '800', 'Lactose', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmt8Fx9qUAA0h9wEro70Z0_1GqGxj4pzXz3DegVn04HhCTSG54xA&s');
/*

/*
console.log(burger1.getBurger());
console.log(burger2.getBurger());
console.log(burger3.getBurger());
console.log(burger4.getBurger());
console.log(burger5.getBurger());
*/
/*
const vm = new Vue({x
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})
*/

/*
let firstName = document.createElement("h2");
firstName.innerHTML = "Fire Burger";
document.getElementById("fstBurger").appendChild(firstName);

let firstImage = document.createElement("img");
firstImage.src = "https://images6.alphacoders.com/883/883558.jpg";
document.getElementById("fstBurger").appendChild(firstImage);
firstImage.width = "300";

var info1 = ["Vegan", "Gluten Free", "Actual Fire from Hell"];
var element1 = document.getElementById("fstBurger");
for(var i = 0; i < info1.length; i++) {
    let listItem = document.createElement("li");
    let burgerList = document.createTextNode(info1[i]);
    listItem.appendChild(burgerList);
    element1.appendChild(listItem);
}

let secondName = document.createElement("h2");
secondName.innerHTML = "Turkey Burger";
document.getElementById("sndBurger").appendChild(secondName);

let secondImage = document.createElement("img");
secondImage.src = "https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/07/main/ranch_turkey_burgers_2525701_hiaha_0086.jpg?itok=sfDFAJMw";
document.getElementById("sndBurger").appendChild(secondImage);
secondImage.width = "300";



var info2 = ["Meaty", "Gluten", "Actual Turkey from Hell"];
var element2 = document.getElementById("sndBurger");
for(var i = 0; i < info2.length; i++) {
    let listItem2 = document.createElement("li");
    let burgerList = document.createTextNode(info2[i]);
    listItem2.appendChild(burgerList);
    element2.appendChild(listItem2);
}

let thirdName = document.createElement("h2");
thirdName.innerHTML = "double w/ CHEESE";
document.getElementById("trdBurger").appendChild(thirdName);

let thirdImage = document.createElement("img");
thirdImage.src = "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/lotus-burger-lead.jpg";
document.getElementById("trdBurger").appendChild(thirdImage);
thirdImage.width = "300";

var info3 = ["Tasteless", "Gluten Free", "Actual Cheese from Hell"];
var element3 = document.getElementById("trdBurger");
for(var i = 0; i < info3.length; i++) {
    let listItem3 = document.createElement("li");
    let burgerList = document.createTextNode(info3[i]);
    listItem3.appendChild(burgerList);
    element3.appendChild(listItem3);
}





/*
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
*/

/*
document.getElementById("burger1").innerHTML = burger1.getBurger();
document.getElementById("burger2").innerHTML = burger2.getBurger();
document.getElementById("burger3").innerHTML = burger3.getBurger();
document.getElementById("burger4").innerHTML = burger4.getBurger();
document.getElementById("burger5").innerHTML = burger5.getBurger();


*/
