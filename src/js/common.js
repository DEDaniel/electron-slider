const debounce = require('lodash.debounce');

// resize width and hight at the same time
window.addEventListener('resize', debounce(handleResize, 150));

function handleResize() {
    console.log('resize')
}