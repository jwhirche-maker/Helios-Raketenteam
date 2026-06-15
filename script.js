const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuBackdrop = document.getElementById("menuBackdrop");

const navLinks = document.querySelectorAll(".nav-link");
const pageViews = document.querySelectorAll(".page-view");
const pageTriggers = document.querySelectorAll("[data-target]");

const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const milestoneList = document.getElementById("milestoneList");

const sponsorForm = document.getElementById("sponsorForm");
const spaceBg = document.getElementById("spaceBg");

const projects = {
  phaeton: {
    eyebrow: "Projekt 01",
    title: "Phaeton 1 / H1 Feststoffrakete",
    description:
      "Phaeton 1 ist unser erstes großes Raketenprojekt. Ziel ist es, eine eigene Feststoffrakete zu entwickeln, zu testen und kontrolliert fliegen zu lassen.",
    milestones: [
      {
        date: "Dez 2025",
        title: "Idee",
        text: "Die Grundidee für Helios und das erste Raketenprojekt entsteht.",
        status: "done"
      },
      {
        date: "Feb 2026",
        title: "Pitch",
        text: "Das Projekt wird vorgestellt und die Grundstruktur für Team, Roadmap und Finanzierung entsteht.",
        status: "done"
      },
      {
        date: "März 2026",
        title: "Gründung",
        text: "Helios wird als studentisches Raketen-Team aufgebaut.",
        status: "done"
      },
      {
        date: "Aktuell",
        title: "Entwicklung & Konstruktion",
        text: "CAD, Struktur, Antrieb, Avionics, Body, Nozzle und Igniter werden geplant und konstruiert.",
        status: "active"
      },
      {
        date: "Geplant",
        title: "Erster Prototyp",
        text: "Konzepte werden in belastbare Hardware überführt. Der Prototyp bildet den Auftakt der Testphase.",
        status: "upcoming"
      },
      {
        date: "Geplant",
        title: "Erster Test",
        text: "Die ersten Zündungen auf dem Prüfstand sollen theoretisches Potenzial in messbare Schubkraft umwandeln.",
        status: "upcoming"
      },
      {
        date: "Geplant",
        title: "Erster Flug",
        text: "Start, Steigflug, Apogee bei ungefähr 3 km und kontrollierte Landung per Fallschirm.",
        status: "upcoming"
      }
    ]
  },

  teststand: {
    eyebrow: "Projekt 02",
    title: "Teststand",
    description:
      "Der Teststand ist die Grundlage für sichere Prüfstandversuche. Hier sollen Antrieb und Zündsysteme kontrolliert getestet werden.",
    milestones: [
      {
        date: "Aktuell",
        title: "Konzeptphase",
        text: "Anforderungen an Sicherheit, Messung, Befestigung und Ablauf der Tests werden definiert.",
        status: "active"
      },
      {
        date: "Geplant",
        title: "Konstruktion",
        text: "Der Prüfstand wird konstruiert und auf Stabilität, Sicherheit und Wiederverwendbarkeit ausgelegt.",
        status: "upcoming"
      },
      {
        date: "Geplant",
        title: "Erste Zündung",
        text: "Erste kontrollierte Tests liefern Daten zu Verhalten, Schub und Belastung.",
        status: "upcoming"
      },
      {
        date: "Geplant",
        title: "Auswertung",
        text: "Die Messdaten werden genutzt, um Antrieb und Raketenstruktur weiter zu verbessern.",
        status: "upcoming"
      }
    ]
  },

  nextrocket: {
    eyebrow: "Projekt 03",
    title: "Nächste Rakete",
    description:
      "Nach Phaeton 1 soll der nächste Entwicklungsschritt folgen. Langfristig ist eine komplexere Rakete mit Flüssigtreibstoff-Konzept geplant.",
    milestones: [
      {
        date: "Zukunft",
        title: "Lessons Learned",
        text: "Erfahrungen aus Phaeton 1 und den ersten Tests werden gesammelt und ausgewertet.",
        status: "upcoming"
      },
      {
        date: "Zukunft",
        title: "Neues Konzept",
        text: "Eine neue Rakete wird auf Basis der gewonnenen Daten und Erfahrungen geplant.",
        status: "upcoming"
      },
      {
        date: "Zukunft",
        title: "Flüssigtreibstoff",
        text: "Langfristiges Ziel ist die Entwicklung eines anspruchsvolleren Antriebskonzepts.",
        status: "upcoming"
      }
    ]
  }
};

function openMenu() {
  menuButton.classList.add("active");
  sideMenu.classList.add("open");
  menuBackdrop.classList.add("show");
}

function closeMenu() {
  menuButton.classList.remove("active");
  sideMenu.classList.remove("open");
  menuBackdrop.classList.remove("show");
}

menuButton.addEventListener("click", () => {
  if (sideMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuBackdrop.addEventListener("click", closeMenu);

function showPage(targetPage) {
  pageViews.forEach((page) => {
    page.classList.remove("active");
  });

  const nextPage = document.querySelector(`[data-page="${targetPage}"]`);

  if (nextPage) {
    nextPage.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === targetPage);
  });

  closeMenu();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  history.replaceState(null, "", `#${targetPage}`);
}

pageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const target = trigger.dataset.target;

    if (!target) return;

    event.preventDefault();
    showPage(target);
  });
});

function getStatusLabel(status) {
  if (status === "done") return "Abgeschlossen";
  if (status === "active") return "In Arbeit";
  return "Geplant";
}

function openProjectModal(projectKey) {
  const project = projects[projectKey];

  if (!project) return;

  modalEyebrow.textContent = project.eyebrow;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  milestoneList.innerHTML = project.milestones
    .map((milestone) => {
      return `
        <article class="milestone">
          <div class="milestone-date">${milestone.date}</div>
          <div>
            <h4>${milestone.title}</h4>
            <p>${milestone.text}</p>
          </div>
          <span class="status ${milestone.status}">
            ${getStatusLabel(milestone.status)}
          </span>
        </article>
      `;
    })
    .join("");

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    openProjectModal(card.dataset.project);
  });
});

modalClose.addEventListener("click", closeProjectModal);
modalBackdrop.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeProjectModal();
  }
});

if (sponsorForm) {
  sponsorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Danke! Die Sponsoren-Anfrage wurde als Demo erfasst. Später kann das Formular mit einem echten Dienst verbunden werden.");
    sponsorForm.reset();
  });
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  spaceBg.style.transform = `translateY(${scrollY * 0.03}px)`;
});

window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "");

  if (hash && document.querySelector(`[data-page="${hash}"]`)) {
    showPage(hash);
  }
});
