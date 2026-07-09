export function initSlideViewer(lessons) {
  const slideGrid = document.querySelector("#slideGrid");
  const slideKicker = document.querySelector("#slideKicker");
  const slideTitle = document.querySelector("#slideTitle");
  const slideFrame = document.querySelector("#slideFrame");
  const slideEmpty = document.querySelector("#slideEmpty");
  const slideDirectLink = document.querySelector("#slideDirectLink");

  function renderSlideDeck(index) {
    const lesson = lessons[index];
    const hasDeck = Boolean(lesson.embedUrl);

    slideKicker.textContent = `Slide bài ${index + 1}`;
    slideTitle.textContent = lesson.title;
    slideEmpty.hidden = hasDeck;
    slideFrame.hidden = !hasDeck;
    slideDirectLink.hidden = !hasDeck;

    if (hasDeck) {
      slideFrame.src = lesson.embedUrl;
      slideDirectLink.href = lesson.deckUrl || lesson.embedUrl;
    } else {
      slideFrame.removeAttribute("src");
      slideDirectLink.removeAttribute("href");
    }

    slideGrid.querySelectorAll(".slide-card").forEach((card, cardIndex) => {
      card.classList.toggle("active", cardIndex === index);
    });
  }

  slideGrid.innerHTML = lessons.map((lesson, index) => `
    <article class="slide-card">
      <div class="slide-number">Slide ${index + 1}</div>
      <h3>Buổi ${index + 1}: ${lesson.title}</h3>
      <ol>
        ${lesson.slides.map((item) => `<li>${item}</li>`).join("")}
      </ol>
      ${lesson.embedUrl ? `<button class="slide-select" type="button" data-slide-index="${index}">Xuất slide lên khung trình chiếu</button>` : `<span class="slide-note">Chưa gắn file slide</span>`}
    </article>
  `).join("");

  slideGrid.querySelectorAll("[data-slide-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.slideIndex);
      renderSlideDeck(index);
      document.querySelector("#slides").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  renderSlideDeck(0);
}
