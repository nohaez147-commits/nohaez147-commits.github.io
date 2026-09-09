const logoutLink = document.querySelector("[data-logout]");

function ensureFarewell() {
  let overlay = document.querySelector("[data-farewell]");
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.className = "farewell";
  overlay.setAttribute("data-farewell", "");
  overlay.innerHTML = `
    <div class="farewell-card" role="dialog" aria-labelledby="farewell-title" aria-modal="true">
      <p class="farewell-heart">♡</p>
      <h2 id="farewell-title">Hasta pronto, mi amor</h2>
      <p>
      Gracias por estos 5 años. Aunque el mapa nos ponga en dos países, 
      mi corazón se queda contigo en cada mensaje, en cada partida, 
      en cada espera y en cada “te amo”.
      </p>
      <p>
        Esta página es para ti: un pedacito de nosotros, para que recuerdes que te elijo
        hoy, mañana y siempre. Te amo. Vuelve cuando quieras… aquí te sigo esperando.
      </p>
      <button type="button" class="btn btn-dark" data-farewell-close>Hasta pronto ♡</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) overlay.classList.remove("open");
  });

  overlay.querySelector("[data-farewell-close]").addEventListener("click", () => {
    overlay.classList.remove("open");
  });

  return overlay;
}

if (logoutLink) {
  logoutLink.addEventListener("click", (event) => {
    event.preventDefault();
    ensureFarewell().classList.add("open");
  });
}
