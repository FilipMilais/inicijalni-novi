/* =========================================================
   Sentinel Sigurnost — glavna JS datoteka
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobilna navigacija (hamburger) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Zatvori mobilni izbornik kad korisnik klikne na neku poveznicu */
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Newsletter forma ----------
     Stranica je statična (nema pravog servera koji prima podatke),
     pa ovdje samo simuliramo uspješnu prijavu i ispisujemo poruku.
     Kad se forma spoji na pravi backend, ovaj dio treba zamijeniti
     stvarnim slanjem podataka (npr. fetch() na server). */
  var newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var emailInput = form.querySelector('input[type="email"]');

      if (!emailInput.checkValidity()) {
        showStatus(status, 'err', 'Unesite ispravnu e-mail adresu (npr. ime@gmail.com).');
        return;
      }

      showStatus(status, 'ok', 'Hvala na prijavi! Obavijesti o novim istraživanjima stižu na ' + emailInput.value + '.');
      form.reset();
    });
  });

  /* ---------- Kontakt forma ---------- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = contactForm.querySelector('.form-status');

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        showStatus(status, 'err', 'Molimo ispunite sva obavezna polja ispravno prije slanja.');
        return;
      }

      showStatus(status, 'ok', 'Hvala na upitu! Javit ćemo vam se u najkraćem mogućem roku.');
      contactForm.reset();
    });
  }

  function showStatus(el, type, message) {
    if (!el) return;
    el.textContent = message;
    el.classList.remove('ok', 'err');
    el.classList.add(type, 'is-visible');
  }

});
