function clickBurger() {
    const navBar = document.getElementById('navbar__ul');
    navBar.classList.toggle("trigger__navbar");
    const lines = document.getElementById('hamburger').children;
    lines[0].classList.toggle('hamburger__line1');
    lines[1].classList.toggle('hamburger__line2');
    lines[2].classList.toggle('hamburger__line3');
  }