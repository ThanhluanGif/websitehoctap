export function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}
