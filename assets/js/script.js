const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Gracias. Nos pondremos en contacto contigo pronto.";
      form.reset();
    } else {
      status.innerHTML = "Ha ocurrido un error. Inténtalo de nuevo.";
    }
  }).catch(() => {
    status.innerHTML = "Ha ocurrido un error. Inténtalo de nuevo.";
  });
}

form.addEventListener("submit", handleSubmit);
