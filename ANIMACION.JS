document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     NAVBAR
  ===================================================== */

  const navbar = document.querySelector(".navbar");


  function updateNavbar() {

    if (!navbar) return;


    /* NAVBAR SCROLLED */

    if (window.scrollY > 50) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  }


  window.addEventListener(
    "scroll",
    updateNavbar
  );


  updateNavbar();



  /* =====================================================
     NAVBAR SOBRE SECCIONES CLARAS
  ===================================================== */

  const lightSections = document.querySelectorAll(
    ".intro, .services, .contact-section"
  );


  const observer = new IntersectionObserver(

    (entries) => {

      let lightSectionVisible = false;


      entries.forEach(entry => {

        if (entry.isIntersecting) {

          lightSectionVisible = true;

        }

      });


      if (lightSectionVisible) {

        navbar.classList.add("light-nav");

      } else {

        navbar.classList.remove("light-nav");

      }

    },

    {
      root: null,

      threshold: 0,

      rootMargin: "-80px 0px -80% 0px"
    }

  );


  lightSections.forEach(section => {

    observer.observe(section);

  });



  /* =====================================================
     MENÚ MOBILE
  ===================================================== */

  const menuToggle =
    document.getElementById("menuToggle");


  const navLinks =
    document.getElementById("navLinks");


  if (menuToggle && navLinks) {

    menuToggle.addEventListener(
      "click",
      () => {

        navLinks.classList.toggle("active");

      }
    );


    const links =
      navLinks.querySelectorAll("a");


    links.forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove("active");

        }
      );

    });

  }



  /* =====================================================
     AUTOPLAY DE VIDEOS
  ===================================================== */

  const previewVideos =
    document.querySelectorAll(
      ".featured-media video"
    );


  previewVideos.forEach(video => {

    video.muted = true;

    video.playsInline = true;


    const playPromise =
      video.play();


    if (
      playPromise !== undefined
    ) {

      playPromise.catch(() => {

        // Algunos navegadores pueden
        // bloquear autoplay.

      });

    }

  });



  /* =====================================================
     REPRODUCIR VIDEO AL PASAR EL MOUSE
  ===================================================== */

  previewVideos.forEach(video => {

    video.addEventListener(
      "mouseenter",
      () => {

        video.play();

      }
    );


    video.addEventListener(
      "mouseleave",
      () => {

        video.play();

      }
    );

  });

});