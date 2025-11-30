export {};

declare global {
  interface Window {
    openFreeLessonFlow: () => void;
    startFreeLessonFromButton: () => void;
  }
}
