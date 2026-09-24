document.addEventListener("DOMContentLoaded", () => {

  const header =
    document.getElementById("site-header");

  const menuButton =
    document.getElementById("menu-button");

  const mobileMenu =
    document.getElementById("mobile-menu");

  const copyrightYear =
    document.getElementById("copyright-year");


  /* =====================================
     CURRENT YEAR
  ====================================== */

  if (copyrightYear) {
    copyrightYear.textContent =
      new Date().getFullYear();
  }


  /* =====================================
     NAVBAR SCROLL STATE
  ====================================== */

  const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  /* =====================================
     MOBILE MENU
  ====================================== */

  const closeMenu = () => {

    if (!menuButton || !mobileMenu) {
      return;
    }

    menuButton.classList.remove(
      "active"
    );

    mobileMenu.classList.remove(
      "active"
    );

    document.body.classList.remove(
      "menu-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );

  };


  const openMenu = () => {

    if (!menuButton || !mobileMenu) {
      return;
    }

    menuButton.classList.add(
      "active"
    );

    mobileMenu.classList.add(
      "active"
    );

    document.body.classList.add(
      "menu-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    menuButton.setAttribute(
      "aria-label",
      "Close navigation"
    );

  };


  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      () => {

        const isOpen =
          menuButton.classList.contains(
            "active"
          );

        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMenu
        );

      });


    document.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "Escape") {
          closeMenu();
        }

      }
    );

  }


  /* =====================================
     SCROLL REVEALS
  ====================================== */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window &&
    revealElements.length
  ) {

    const revealObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach(
            (entry) => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }
          );

        },

        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -45px 0px"
        }

      );


    revealElements.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =====================================
     HANDLE DESKTOP RESIZE
  ====================================== */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 980
      ) {
        closeMenu();
      }

    }
  );

});
