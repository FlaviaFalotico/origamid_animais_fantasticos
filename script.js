function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // Verifica se existe elemento em tabContent e tabMenu
  const activeClass = "ativo";
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  // Verifica se existe elemento em AccordionList
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topOfSection = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Método alternativo para suavizar o scroll em links internos
    /* window.scrollTo({
    top: topOfSection,
    behavior: "smooth",
  }); */
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.5;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) section.classList.add("ativo");
      });
    }
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

initAnimationScroll();


