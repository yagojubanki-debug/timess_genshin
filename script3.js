document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    body.classList.add("fade-in");

    body.addEventListener("animationend", (event) => {
        if (event.animationName === "fadeOutAnimation") {
            body.classList.remove("fade-out");
        }
    });

    const navigationLinks = document.querySelectorAll(".coisas li a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            body.classList.add("fade-out");

            const targetUrl = link.getAttribute("href");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 3000);
        });
    });
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init()   
