import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="insert-in-list"
export default class extends Controller {
	static targets = ["items", "form"];

	send(event) {
		event.preventDefault();
		const formData = new FormData(this.formTarget);

		const url = this.formTarget.action; // -> The URL we send the AJAX request to!
		const options = {
			method: "POST",
			headers: { Accept: "application/json" },
			body: new FormData(this.formTarget),
		};
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				if (data.inserted_item) {
					this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item);
				}
				this.formTarget.outerHTML = data.form;
			});
	}
}
