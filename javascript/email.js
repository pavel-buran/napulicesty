  // AJAX odesílání na pozadí pro desktop
  var form = document.getElementById("comment_form");
  var statusDiv = document.getElementById("form_status");

  form.addEventListener("submit", function(event) {
    // Zamezí standardnímu přesměrování prohlížeče na Formspree
    event.preventDefault(); 
    
    var data = new FormData(form);
    statusDiv.style.color = "black";
    statusDiv.innerHTML = "Odesílám komentář...";

    // Odeslání dat asynchronně přes Fetch API
    fetch("https://formspree.io/f/mnjyzyoa", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        statusDiv.style.color = "green";
        statusDiv.innerHTML = "Komentář byl úspěšně odeslán.";
        form.reset(); // Vymaže pole formuláře po úspěšném odeslání
        document.getElementById("submit_button").setAttribute("disabled", "disabled"); // Znovu uzamkne tlačítko
      } else {
        response.json().then(function(data) {
          if (Object.hasOwn(data, 'errors')) {
            statusDiv.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            statusDiv.innerHTML = "Nastala chyba při komunikaci.";
          }
        })
      }
    }).catch(function(error) {
      statusDiv.style.color = "red";
      statusDiv.innerHTML = "Formulář se nepodařilo odeslat. Zkontrolujte připojení.";
    });
  });

  // AJAX odesílání na pozadí pro mobil
  var form = document.getElementById("comment_form2");
  var statusDiv = document.getElementById("form_status2");

  form.addEventListener("submit", function(event) {
    // Zamezí standardnímu přesměrování prohlížeče na Formspree
    event.preventDefault(); 
    
    var data = new FormData(form);
    statusDiv.style.color = "black";
    statusDiv.innerHTML = "Odesílám komentář...";

    // Odeslání dat asynchronně přes Fetch API
    fetch("https://formspree.io/f/mnjyzyoa", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      if (response.ok) {
        statusDiv.style.color = "green";
        statusDiv.innerHTML = "Komentář byl úspěšně odeslán.";
        form.reset(); // Vymaže pole formuláře po úspěšném odeslání
        document.getElementById("submit_button2").setAttribute("disabled", "disabled"); // Znovu uzamkne tlačítko
      } else {
        response.json().then(function(data) {
          if (Object.hasOwn(data, 'errors')) {
            statusDiv.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            statusDiv.innerHTML = "Nastala chyba při komunikaci.";
          }
        })
      }
    }).catch(function(error) {
      statusDiv.style.color = "red";
      statusDiv.innerHTML = "Formulář se nepodařilo odeslat. Zkontrolujte připojení.";
    });
  });
