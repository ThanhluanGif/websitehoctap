import { lessons } from "./data/lessons.js";
import { initExerciseList } from "./components/exercise-list.js";
import { initLessonDetail } from "./components/lesson-detail.js";
import { initSlideViewer } from "./components/slide-viewer.js";

initLessonDetail(lessons);
initSlideViewer(lessons);
initExerciseList(lessons);
