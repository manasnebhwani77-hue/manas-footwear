const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const filterButtons = document.querySelectorAll('.filter');
const categoryLinks = document.querySelectorAll('[data-filter]');
const products = document.querySelectorAll('.product-card');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

function filterCatalog(filter) {
  filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === filter));
  products.forEach((product) => {
    product.hidden = filter !== 'all' && product.dataset.category !== filter;
  });
}

filterButtons.forEach((button) => button.addEventListener('click', () => filterCatalog(button.dataset.filter)));

categoryLinks.forEach((link) => {
  if (link.classList.contains('category-card')) {
    link.addEventListener('click', () => filterCatalog(link.dataset.filter));
  }
});
