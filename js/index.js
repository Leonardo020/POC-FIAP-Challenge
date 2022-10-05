const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);

const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(".dropdown").on("show.bs.dropdown", function (e) {
	$(this).find(".dropdown-menu").first().stop(true, true).slideDown(300);
});

$(".dropdown").on("hide.bs.dropdown", function (e) {
	$(this).find(".dropdown-menu").first().stop(true, true).slideUp(200);
});
