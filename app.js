$(document).ready(function () {
	const searchData = ["Adana", "Balıkesir", "Ceyhan", "Diyarbakır", "Edirne", "Malatya", "Manisa", "Yozgat"];
	$("#search_id").autocomplete({
		source: searchData
	});
});

// now date
const nowDate = () => {
	document.getElementById('now_date').innerHTML = new Date().getFullYear();
}
nowDate();
