/* =========================================================================
   AREPITA FAST FOOD — script.js
   Animaciones de entrada al hacer scroll, efecto ripple en botones
   y pequeñas microinteracciones. Sin dependencias externas.
   ========================================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     1. REVEAL AL CARGAR / AL HACER SCROLL
     Usa IntersectionObserver para animar cada elemento marcado con
     data-reveal solo la primera vez que entra en el viewport.
     ----------------------------------------------------------------- */
  function initReveal() {
    var elements = document.querySelectorAll("[data-reveal]");

    // Si el navegador no soporta IntersectionObserver, mostrar todo directo.
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* -----------------------------------------------------------------
     2. LOGO: pequeño impulso adicional apenas carga la página
     (independiente del observer, para que se sienta inmediato)
     ----------------------------------------------------------------- */
  function initLogoEntrance() {
    var logoWrap = document.querySelector('[data-reveal="logo"]');
    if (!logoWrap) return;

    // Pequeño retraso para dejar que las fuentes/estilos asienten
    // antes de disparar la animación de entrada.
    window.requestAnimationFrame(function () {
      setTimeout(function () {
        logoWrap.classList.add("is-visible");
      }, 60);
    });
  }

  /* -----------------------------------------------------------------
     3. EFECTO RIPPLE en las tarjetas / botones al tocar o hacer clic
     ----------------------------------------------------------------- */
  function initRipple() {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      card.addEventListener("click", function (event) {
        spawnRipple(card, event);
      });
    });
  }

  function spawnRipple(container, event) {
    var rect = container.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 1.2;

    var x = (event.clientX || rect.left + rect.width / 2) - rect.left;
    var y = (event.clientY || rect.top + rect.height / 2) - rect.top;

    var ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = x - size / 2 + "px";
    ripple.style.top = y - size / 2 + "px";

    container.appendChild(ripple);

    // Limpieza tras la animación para no acumular nodos en el DOM.
    window.setTimeout(function () {
      ripple.remove();
    }, 650);
  }

  /* -----------------------------------------------------------------
     4. INIT
     ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initLogoEntrance();
    initRipple();
  });
})();
