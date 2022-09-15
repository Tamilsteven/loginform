const btn = document.getElementById('submit');
btn.addEventListener("click",validate)
function validate(e) {
    e.preventDefault();
  
    const NameField = document.getElementById("fname");
    let valid = true;
  
    if (NameField.value) {
      const nameError = document.getElementById("nameError");
      nameError.classList.add("visible");
      NameField.classList.add("invalid");
      nameError.setAttribute("aria-hidden", false);
      nameError.setAttribute("aria-invalid", true);
    }
    return valid;
  }