function addTodo() {
  var todofield = document.getElementById("todofield");
  var todolist = document.getElementById("todolist");

  var todoText = todofield.value.trim(); // Leerzeichen am Anfang und Ende entfernen

  if (todoText !== "") {
    // Überprüfen, ob der Text nicht leer ist
    var listItem = document.createElement("li");
    listItem.className = "mdl-list__item";
    listItem.innerHTML = `
        <span class="mdl-list__item-primary-content">
          <i class="fa-solid fa-arrow-right"></i>
          ${todoText}
        </span>
        <span class="mdl-list__item-secondary-action">
          <label
            class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          >
            <input
              type="checkbox"
              class="mdl-checkbox__input"
            />
          </label>
        </span>
      `;

    todolist.appendChild(listItem); // Füge das Listenelement zur Liste hinzu

    todofield.value = ""; // Setze das Eingabefeld zurück
  }
}
