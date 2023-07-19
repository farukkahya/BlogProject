$(document).ready(function () {
	const searchData = ["Adana", "Balıkesir", "Ceyhan", "Diyarbakır", "Edirne", "Malatya", "Manisa", "Yozgat"];
	$("#search_id").autocomplete({
		source: searchData
	});
});
