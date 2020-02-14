window.onload = function () {
'use strict';
const socket = io();
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
	    pay: '',
	    Gender: '',
	    checkbox1: "",
	    checkbox2: "",
	    checkbox3: "",
	    cnt: 0
	},

	methods: {
	    markDone: function() {
		order.name = document.getElementById("name").value;
		order.email = document.getElementById("email").value;
		order.pay = document.getElementById("pay").value;
		order.Gender = genders.gender;

		if(document.getElementById("checkbox1").checked) {
		    order.checkbox1 = "ELD ham";
		}
		
		else {order.checkbox1 = "";}
		
		if(document.getElementById("checkbox2").checked) {
		    order.checkbox2 = "KALKON ham";
		}
		
		else {order.checkbox2 = "";}
		
		if(document.getElementById("checkbox3").checked) {
		    order.checkbox3 = "double w/ CHEESE";
		}
		
		else {order.checkbox3 = "";}
		
	    },
	    getNext: function () {
		this.cnt++;
		return this.cnt;
	    },
	    
	    addOrder: function (event) {
		socket.emit("addOrder", {
		    orderId: this.getNext(),
		    details: {
			x: dot.display.x,
			y: dot.display.y},
		    orderItems: [order.checkbox1,
				 order.checkbox2,
				 order.checkbox3],
		    customer: [order.name,
			       order.Gender,
			       order.email],
		});
	    },
	},
    });

    const dot = new Vue({
	el: '#dots',
	data: {
	    orders: {},
	    display: {x:0, y:0},
	},
	created: function () {
	    socket.on('initialize', function (data) {
		this.orders = data.orders;
	    }.bind(this));

	    socket.on('currentQueue', function (data) {
		this.orders = data.orders;
	    }.bind(this));
	},
	methods: {
	    displayOrder: function(event) {
		let offset = {
		    x: event.currentTarget.getBoundingClientRect().left,
		    y: event.currentTarget.getBoundingClientRect().top,
		};
		this.display = {x:event.clientX - 10 - offset.x,
				y:event.clientY - 10 - offset.y};
	    },
	},
    });
}







			

