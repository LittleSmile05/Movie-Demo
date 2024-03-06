// Initialize Glide carousel
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  autoplay: 4000,
  hoverpause: false,
  gap: 5,
  perView: 1,
}).mount();

// Toggle menu on mobile
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar .navbar-nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Fetch movies from The Movie Database API
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.API_KEY; // Retrieve API key from environment variable
const TRENDING_MOVIE = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;
const POPULAR_MOVIE = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const RATED_MOVIE = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w200`;

function getMovies(url, container) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.results);
      showMovies(response.results, container);
    })
    .catch(function (err) {
      alert(err);
    });
}

getMovies(TRENDING_MOVIE, ".trending_container");
getMovies(POPULAR_MOVIE, ".popular_container");
getMovies(RATED_MOVIE, ".rated_container");

function showMovies(movies, container) {
  let cards = "";
  movies.forEach((movie) => (cards += showPosters(movie)));
  const trendingContainer = document.querySelector(container);
  trendingContainer.innerHTML = cards;
}

function showPosters(movie) {
  const { title, name, poster_path } = movie;
  if (title !== undefined) {
    return `<div class="card poster_card">
                <a href="#"><img class="poster_img img-fluid" src="${
                  IMAGE_URL + poster_path
                }" alt="${title}" draggable="false"></a>
                <div class="card-body">
                <p class="card-text">${title}</p>
                </div>
            </div>`;
  } else {
    return `<div class="card poster_card">
                <a href="#"><img class="poster_img img-fluid" src="${
                  IMAGE_URL + poster_path
                }" alt="${name}" draggable="false"></a>
                <div class="card-body">
                <p class="card-text">${name}</p>
                </div>
            </div>`;
  }
}

// Animations using GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-brand, .navbar-toggler", {
  opacity: 0,
  duration: 0.6,
  delay: 0.3,
  y: 10,
});

gsap.from(".nav-item", {
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  y: 30,
  stagger: 0.2,
});

gsap.from(".slides", {
  scrollTrigger: ".slides",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  y: -30,
});

gsap.from(".search", {
  scrollTrigger: ".search",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  y: -30,
});

gsap.from(".link_section", {
  scrollTrigger: ".link_section",
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  x: -20,
  stagger: 0.6,
});

gsap.from(".title_trending", {
  scrollTrigger: ".title_trending",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  x: -30,
});

gsap.from(".trending_container", {
  scrollTrigger: ".trending_container",
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  y: -30,
  stagger: 0.6,
});

gsap.from(".title_popular", {
  scrollTrigger: ".title_popular",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  x: -30,
});

gsap.from(".popular_container", {
  scrollTrigger: ".popular_container",
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  y: -30,
  stagger: 0.6,
});

gsap.from(".title_rated", {
  scrollTrigger: ".title_rated",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  x: -30,
});

gsap.from(".rated_container", {
  scrollTrigger: ".rated_container",
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  y: -30,
  stagger: 0.6,
});

gsap.from(".logo_footer", {
  scrollTrigger: ".logo_footer",
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  x: -30,
});

gsap.from(".credit, .services, .contact, .download", {
  scrollTrigger: ".credit, .services, .contact, .download",
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  y: -30,
  stagger: 0.2,
});

gsap.from(".copyright", {
  scrollTrigger: ".copyright",
  opacity: 0,
  duration: 1,
  delay: 0.9,
  y: 30,
});
