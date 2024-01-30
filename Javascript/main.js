let currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;

flatpickr("#boardingnearInput", {
  enableTime: false, // Set to true if you want to include time selection
  dateFormat: "d-m-Y", // Set your desired date format
  minDate: "today",
  // Add more options as needed
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("html"),
  smooth: true,
  mobile: {
    smooth: true,
    inertia: 0.8,
    getDirection: true,
  },
  tablet: {
    smooth: true,
    inertia: 0.8,
    getDirection: true,
  },
  // lerp: 0.1,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".navone, .navtwo", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".navone", // Use an appropriate trigger element or class
    once: true, // Animation will only play once
  },
});
