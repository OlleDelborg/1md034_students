window.onload = function () {
    const vm = new Vue({
	el: '#IDitem',
	data: {
	    IDitem: 'Välj en burgare'
	    burger1: burger1.getBurger(),
	    burger2: burger2.getBurger(),
	    burger3: burger3.getBurger(),
	    burger4: burger4.getBurger(),
	    burger5: burger5.getBurger()
	}
    });
}
