import { renderList } from "../utils/render-list.js";

export function initLessonDetail(lessons) {
  const tabs = document.querySelector("#lessonTabs");
  const lessonKicker = document.querySelector("#lessonKicker");
  const lessonTitle = document.querySelector("#lessonTitle");
  const lessonGoals = document.querySelector("#lessonGoals");
  const lessonTopics = document.querySelector("#lessonTopics");
  const teacherActivities = document.querySelector("#teacherActivities");
  const studentActivities = document.querySelector("#studentActivities");
  const lessonProduct = document.querySelector("#lessonProduct");
  const lessonHomework = document.querySelector("#lessonHomework");
  const lessonEvaluation = document.querySelector("#lessonEvaluation");
  const lessonCount = document.querySelector("#lessonCount");
  const progressFill = document.querySelector("#progressFill");

  function renderLesson(index) {
    const lesson = lessons[index];
    lessonKicker.textContent = `Buổi ${index + 1}`;
    lessonTitle.textContent = lesson.title;
    lessonProduct.textContent = lesson.product;
    lessonCount.textContent = `${index + 1} / ${lessons.length}`;
    progressFill.style.width = `${((index + 1) / lessons.length) * 100}%`;

    renderList(lessonGoals, lesson.goals);
    renderList(lessonTopics, lesson.topics);
    renderList(teacherActivities, lesson.teacher);
    renderList(studentActivities, lesson.student);
    renderList(lessonHomework, lesson.homework);
    renderList(lessonEvaluation, lesson.evaluation);

    document.querySelectorAll(".lesson-tab").forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  tabs.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab" type="button" aria-selected="false" data-lesson-index="${index}">
      <span>Buổi ${index + 1}</span>
      <strong>${lesson.title}</strong>
    </button>
  `).join("");

  tabs.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => renderLesson(Number(button.dataset.lessonIndex)));
  });

  renderLesson(0);
}
