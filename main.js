const toggle = document.getElementById('toggle');
const navMenu = document.querySelector('#nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('#navbar');

// Smooth scroll effect
var scroll = new SmoothScroll('a[href*="#"]', '[data-easing="linear"]', {
  easing: 'linear',
});

// Navbar toggle
const toggleNavbar = () => {
  if (navMenu.style.right === '0px') {
    navMenu.style.right = '-700px';
    toggle.className = '';
  } else {
    navMenu.style.right = '0px';
    toggle.className = 'close';
  }
};

// Event listeners
// Event listener for toggling the navbar
toggle.addEventListener('click', toggleNavbar);

// toggle navbar when clicking on a link
navLink.forEach((link) => link.addEventListener('click', toggleNavbar));

// event listener for scrolling
window.addEventListener('scroll', function (event) {
  var scroll = this.scrollY;
  const clientHeight = event.target.scrollingElement.clientHeight;

  // change opacity of the navbar when scrolling, proportional with scrolling on Y axis
  if (scroll > clientHeight) {
    console.log('here1');
    navbar.style.backgroundColor = 'rgb(236, 231, 225)';
  } else {
    let opacity = (scroll / clientHeight) * 3;
    opacity = opacity > 1 ? 1 : opacity;
    navbar.style.backgroundColor = `rgba(236, 231, 225,${opacity})`;
  }

  // add active class to links when scrolling
  const elementIndex = Math.floor(scroll / clientHeight + 0.1);
  navLink.forEach((link, key) => {
    if (key === elementIndex) {
      link.className = 'nav-link active';
    } else {
      link.className = 'nav-link';
    }
  });
});

// Maps api
function initMap() {
  var location = { lat: 45.7557, lng: 21.228 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location,
  });
  var marker = new google.maps.Marker({ position: location, map: map });
}

// Scroll out
ScrollOut();
