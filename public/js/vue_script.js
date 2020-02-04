window.onload = function () {
    const vm = new Vue({
	el: '#fstBurger',
	data: {
	    Name1: "FIRE",
	    picture1: "https://images6.alphacoders.com/883/883558.jpg",
	    info1: ["Hot as Hell", "Totally Vegan", "SAUCY"],
	}
    });

     const vm2 = new Vue({
	el: '#sndBurger',
	data: {
	    Name2: "TURKEY",
	    picture2: "https://images6.alphacoders.com/883/883558.jpg",
	    info2: ["Turkish", "GlutOUT", "Healthy"]
	}
     });

     const vm3 = new Vue({
	el: '#trdBurger',
	data: {
	    Name3: "CHEESE",
	    picture3: "https://images6.alphacoders.com/883/883558.jpg",
	    info3: ["Shauncy", "Totally tasty", "SAUCYBAWSY"]
	}
    });
}
