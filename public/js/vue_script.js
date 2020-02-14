

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

    const dot = new Vue({
	el: '#dots',
	data: {
	    orders: {},
	},
	created: function() {
	    /* When the page is loaded, get the current orders stored on the server.
	     * (the server's code is in app.js) */
	    socket.on('initialize', function(data) {
		this.orders = data.orders;
	    }.bind(this));

	    /* Whenever an addOrder is emitted by a client (every open map.html is
	     * a client), the server responds with a currentQueue message (this is
	     * defined in app.js). The message's data payload is the entire updated
	     * order object. Here we define what the client should do with it.
	     * Spoiler: We replace the current local order object with the new one. */
	    socket.on('currentQueue', function(data) {
		this.orders = data.orders;
	    }.bind(this));
	},   
	methods: {
	    getNext: function() {
		/* This function returns the next available key (order number) in
		 * the orders object, it works under the assumptions that all keys
		 * are integers. */
		let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		    return Math.max(last, next);
		}, 0);
		return lastOrder + 1;
	    },
	    addOrder: function(event) {
		/* When you click in the map, a click event object is sent as parameter
		 * to the function designated in v-on:click (i.e. this one).
		 * The click event object contains among other things different
		 * coordinates that we need when calculating where in the map the click
		 * actually happened. */
		let offset = {
		    x: event.currentTarget.getBoundingClientRect().left,
		    y: event.currentTarget.getBoundingClientRect().top,
		};
		socket.emit('addOrder', {
		    orderId: this.getNext(),
		    details: {
			x: event.clientX - 10 - offset.x,
			y: event.clientY - 10 - offset.y,
		    },
		    orderItems: ['Beans', 'Curry'],
		});
	    },
	},
    });
}

