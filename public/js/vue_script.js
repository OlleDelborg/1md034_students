
window.onload = function () {
    const vm1 = new Vue({
	el: '#fstBurger',
	data: {
	    Name1: burgers[0].name,
	    picture1: burgers[0].img,
	    info1: [burgers[0].gluten, burgers[0].lactose, burgers[0].kCal]
	}
    });

    const vm2 = new Vue({
	el: '#sndBurger',
	data: {
	    Name2: burgers[1].name,
	    picture2: burgers[1].img,
	    info2: [burgers[1].gluten, burgers[1].lactose, burgers[1].kCal]
	}
    });

    const vm3 = new Vue({
	el: '#trdBurger',
	data: {
	    Name3: burgers[2].name,
	    picture3: burgers[2].img,
	    info3: [burgers[2].gluten, burgers[2].lactose, burgers[2].kCal]
	}
    });

    const genders = new Vue({
	el: '#Genders',
	data: {
	    gender: '',
	    
	},
    });

    
    const order = new Vue({
	el: '#orders',
	data: {
            
	    name: '',
	    email: '',
	    address: '',
	    house: '',
	    pay: '',
	    Gender: '',
	    checkbox1: "",
	    checkbox2: "",
	    checkbox3: ""
	},

	methods: {
	    markDone: function() {
		order.name = document.getElementById("name").value;
		order.email = document.getElementById("email").value;
		order.address = document.getElementById("address").value;
		order.house = document.getElementById("house").value;
		order.pay = document.getElementById("pay").value;
		order.Gender = genders.gender;

		if(document.getElementById("checkbox1").checked) {
		    order.checkbox1 = "burger1";
		}
		
		else {order.checkbox1 = "";}
		
		if(document.getElementById("checkbox2").checked) {
		    order.checkbox2 = "burger2";
		}
		
		else {order.checkbox2 = "";}
		
		if(document.getElementById("checkbox3").checked) {
		    order.checkbox3 = "burger3";
		}
		
		else {order.checkbox3 = "";}
		
	    }
	}
    });
}

