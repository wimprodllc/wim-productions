// WiM Productions — site behaviour
(function () {
  "use strict";

  // --- Performer data: name + a portrait image from the assets folder ---
  var performers = [
    { name: "Brenda",   file: "brenda",   role: "Flow Artist", desc: "Silks & hoop specialist, opening act." },
    { name: "Kevin Miles", file: "kevin",   role: "Flow Artist", desc: "LED clubs and rings — crowd favourite." },
    { name: "Mark Wizz", file: "mark",      role: "Flow Artist", desc: "LED and Fire Juggling." },
    { name: "Vinny",    file: "vinny",     role: "Flow Artist", desc: "Stage illusions & close-up magic." },
    { name: "Guy The Juggler", file: "guy",   role: "Flow Artist", desc: "Fire staff & poi routines." },
    { name: "Janice",   file: "janice",    role: "Flow Artist", desc: "Rigging & trust work, understudy lead." },
    { name: "Remi Chaz", file: "remi",      role: "Flow Artist", desc: "Comedy, acrobatics and mischievous magic." }
  ];

  function buildPerformers() {
    var grid = document.getElementById("performerGrid");
    if (!grid) return;
    performers.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "performer";
      card.innerHTML =
        '<img class="portrait" src="assets/' + p.file + '.jpg" ' +
        'alt="Portrait of ' + p.name + '" loading="lazy" />' +
        '<div><div class="act">' + p.role + '</div>' +
        '<p class="pname">' + p.name + '</p></div>' +
        '<div class="act">✶</div>';
      grid.appendChild(card);
    });
  }

  function buildGallery() {
    var grid = document.getElementById("galleryGrid");
    if (!grid) return;
    var items = [
      "hero", "brenda", "kevin", "mark", "vinny",
      "guy", "janice", "remi", "passing"
    ];
    items.forEach(function (f) {
      var fig = document.createElement("figure");
      fig.innerHTML =
        '<img src="assets/' + f + '.jpg" alt="WiM Productions photo: ' + f + '" loading="lazy" />' +
        '<figcaption>' + f.charAt(0).toUpperCase() + f.slice(1) + '</figcaption>';
      grid.appendChild(fig);
    });
  }

  // --- Contact form: client-side demo submit ---
  function initForm() {
    var form = document.getElementById("contactForm");
    var note = document.getElementById("formNote");
    if (!form || !note) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var msg = form.message.value.trim();
      if (!name || !msg) {
        note.textContent = "Please enter your name and describe your event.";
        return;
      }
      note.textContent = "Thanks, " + name.split(" ")[0] + "! Your booking request is on its way — we'll be in touch within one business day. ✶";
      form.reset();
    });
  }

  // --- Mobile nav toggle ---
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("navLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.getAttribute("aria-hidden") !== "true";
      links.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function init() {
    buildPerformers();
    buildGallery();
    initForm();
    initNav();
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
