function addTodo() {
  todolist.innerHTML += `<li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="fa-solid fa-arrow-right"></i>
      ${todofield.value}
    </span>
    <span class="mdl-list__item-secondary-action">
      <label
        class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
        for="list-checkbox-1"
      >
        <input
          type="checkbox"
          id="list-checkbox-1"
          class="mdl-checkbox__input"
          checked
        />
      </label>
    </span>
  </li>`;
}