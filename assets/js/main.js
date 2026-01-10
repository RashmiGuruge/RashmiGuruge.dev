// --------------- Listen for scroll events on the window ---------------
window.addEventListener('scroll', function() {
  document.querySelector('.header-row').classList.toggle('scrolled', window.scrollY > 50);
});




// --------------- Hero Section Typeing Text ---------------
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 150;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const txtElement = document.querySelector('.txt-type');
  if (!txtElement) return;

  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
});



// --------------- Back to top button ---------------
window.addEventListener('scroll', toggleTopButton);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleTopButton() {
  const btn = document.getElementById('back-to-up');
  const homeSection = document.getElementById('home');

  if (!btn || !homeSection) return;

  // Bottom position of #home section
  const homeBottom =
    homeSection.offsetTop + homeSection.offsetHeight;

  // Current scroll position
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Show button only after passing #home
  if (scrollPosition > homeBottom) {
    btn.classList.remove('d-none');
  } else {
    btn.classList.add('d-none');
  }
}



// --------------- Sample Comment ---------------
fetch("../components/projects.html")
  .then(res => res.text())
  .then(data => document.getElementById("feature-project-cards").innerHTML = data);




  