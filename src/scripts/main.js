'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const labelText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = labelText;

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentElement.insertBefore(label, input);
}
