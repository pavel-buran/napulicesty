  function validateYear() {
    var yearInput = document.getElementById("comment_year");
    var submitButton = document.getElementById("submit_button");
    
    // Zjistí aktuální rok (2026)
    var currentYear = new Date().getFullYear().toString();

    // Kontrola hodnoty
    if (yearInput.value.trim() === currentYear) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  }
  
  // Pojistka pro jistotu: Spustí se hned po načtení skriptu a tlačítko zamkne
  document.getElementById("submit_button").setAttribute("disabled", "disabled");
  