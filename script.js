const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		nav.classList.add('green');
	} else {
		nav.classList.remove('green');
	}
});

const links = document.querySelectorAll('nav a');

for (const link of links) {
	link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('show');
});

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.remove('show');
	});
});

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.dataset.filter;
		const items = document.querySelectorAll('.filter-item');

		items.forEach(item => {
			if (item.classList.contains(value) || value === 'all') {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	});
});
