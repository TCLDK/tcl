document.documentElement.classList.remove("no-js");

const state = {
  activeRequest: null,
};

const main = document.querySelector("[data-page-shell]");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initCarousels(scope = document) {
  scope.querySelectorAll("[data-carousel]").forEach((carousel) => {
    if (carousel.dataset.bound === "true") {
      return;
    }

    const track = carousel.querySelector(".carousel-track");
    const next = carousel.querySelector("[data-carousel-next]");
    const prev = carousel.querySelector("[data-carousel-prev]");

    if (!track || !next || !prev) {
      return;
    }

    const scrollByWidth = (direction) => {
      track.scrollBy({ left: track.clientWidth * direction, behavior: "smooth" });
    };

    next.addEventListener("click", () => scrollByWidth(1));
    prev.addEventListener("click", () => scrollByWidth(-1));
    carousel.dataset.bound = "true";
  });
}

function updateHead(doc) {
  const newTitle = doc.querySelector("title");
  if (newTitle) {
    document.title = newTitle.textContent;
  }

  ["description", "og:title", "og:description", "og:image", "twitter:title", "twitter:description", "twitter:image"].forEach((name) => {
    const selector = name.startsWith("og:") || name.startsWith("twitter:") ? `meta[property=\"${name}\"], meta[name=\"${name}\"]` : `meta[name=\"${name}\"]`;
    const incoming = doc.querySelector(selector);
    if (!incoming) {
      return;
    }

    let existing = document.head.querySelector(selector);
    if (!existing) {
      existing = document.createElement("meta");
      if (name.startsWith("og:")) {
        existing.setAttribute("property", name);
      } else {
        existing.setAttribute("name", name);
      }
      document.head.appendChild(existing);
    }
    existing.setAttribute("content", incoming.getAttribute("content") || "");
  });
}

function swapContent(doc, url) {
  const nextMain = doc.querySelector("[data-page-shell]");
  if (!nextMain || !main) {
    window.location.href = url;
    return;
  }

  main.classList.add("is-transitioning");

  window.setTimeout(() => {
    main.innerHTML = nextMain.innerHTML;
    document.body.className = doc.body.className;
    updateHead(doc);
    initCarousels(main);
    main.classList.remove("is-transitioning");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 140);
}

async function navigate(url, push = true) {
  if (!main) {
    window.location.href = url;
    return;
  }

  const requestId = Date.now().toString();
  state.activeRequest = requestId;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Requested-With": "fetch",
      },
    });

    if (!response.ok) {
      throw new Error(`Navigation failed: ${response.status}`);
    }

    const markup = await response.text();
    if (state.activeRequest !== requestId) {
      return;
    }

    const doc = new DOMParser().parseFromString(markup, "text/html");
    if (push) {
      window.history.pushState({}, "", url);
    }
    swapContent(doc, url);
  } catch (error) {
    window.location.href = url;
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) {
    return;
  }

  const url = new URL(link.href, window.location.origin);
  const sameOrigin = url.origin === window.location.origin;
  const isHashOnly = url.pathname === window.location.pathname && url.hash;
  const bypass = link.target || link.hasAttribute("download") || link.dataset.noAjax !== undefined;

  if (!sameOrigin || isHashOnly || bypass) {
    return;
  }

  event.preventDefault();
  navigate(url.href);
});

window.addEventListener("popstate", () => navigate(window.location.href, false));

initCarousels();