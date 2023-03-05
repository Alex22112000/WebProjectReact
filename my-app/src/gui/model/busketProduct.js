import React from 'react';

class busketProduct extends React.Component {
	constructor(index, prod_id, prod_name, img_src, cost) {
		super();
		this.index = index;
		this.prod_id = prod_id;
		this.prod_name = prod_name;
		this.img_src = img_src;
		this.cost = cost;
	}

	render() {
		return null;
	}
}

export {busketProduct};