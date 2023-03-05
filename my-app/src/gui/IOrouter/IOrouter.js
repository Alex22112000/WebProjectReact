import React from 'react';

class IOrouter extends React.Component {
	constructor() {
		super();
		this.flagAsync = false;
	}

	async signIn(login, password) {
		let response = await fetch("api/auth", {
			method: "POST",
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify([login, password]),
		});

		if (response.ok) {
			return true;
		}
		else {
			throw response.status;
		}
	}

	async signUp(login, password) {
		let response = await fetch("api/reg", {
			method: "POST",
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify([login, password]),
		});

		if (response.ok) {
			return true;
		}
		else {
			throw response.status;
		}
	}

	async getCatalog() {
		let catalogJSON = new Array();
		let response = await fetch("api/catalogs/product-catalog", {
			method: "GET",
		});

		if (response.ok) {
			catalogJSON = await response.json();
			return catalogJSON;
		}
		else {
			throw response.status;
		}
	}

	async postNewProduct(name, cost, count, img) {
		let response = await fetch("api/catalogs/product-catalog/add", {
			method: "POST",
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify([name, cost, count, img]),
		});

		if (response.ok) {
			return true;
		}
		else {
			throw response.status;
		}
	}

	async delProduct(name) {
		let response = await fetch("api/catalogs/product-catalog/del", {
			method: 'DELETE',
			headers: {
				'name': JSON.stringify([name])
			},
		});

		if (response.ok) {

			return true;
		} else
			throw response.status;
	}

	render() {
		return null;
	}
}

export default IOrouter;