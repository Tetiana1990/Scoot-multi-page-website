/*-----------------------burger menu---------------*/
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const icon = document.getElementById("burgerIcon");

burger.addEventListener("click", () => {
	nav.classList.toggle("active");

	const isOpen = nav.classList.contains("active");
	burger.setAttribute("aria-expanded", isOpen);

	burger.setAttribute("aria-label", isOpen ? 'Close' : 'Open menu');

	icon.src = isOpen
	? 'assets/icons/close.svg'
	: 'assets/icons/hamburger.svg'
});




const items = document.querySelectorAll(".faq__item");

if(items.length){
items.forEach(item => {
	const btn = item.querySelector(".faq__question");

	btn.addEventListener("click", () => {
		item.classList.toggle("active");
	});
});
}