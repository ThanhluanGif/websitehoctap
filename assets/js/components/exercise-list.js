export function initExerciseList(lessons) {
  const exerciseList = document.querySelector("#exerciseList");

  exerciseList.innerHTML = lessons.map((lesson, index) => `
    <article class="exercise-item">
      <div>
        <span>Buổi ${index + 1}</span>
        <h3>${lesson.title}</h3>
      </div>
      <ul>
        ${lesson.homework.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}
