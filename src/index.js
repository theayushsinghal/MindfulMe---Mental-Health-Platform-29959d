import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

// Initialize React app with strict mode
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA support if needed
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful");
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

// Error boundary for global error handling
window.addEventListener("error", (event) => {
  // Log errors to analytics or error tracking service
  console.error("Global error:", event.error);
});

// Performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const paintMetrics = performance.getEntriesByType("paint");
    if (paintMetrics) {
      paintMetrics.forEach((paintMetric) => {
        console.log(`${paintMetric.name}: ${Math.round(paintMetric.startTime)}ms`);
      });
    }
  }
});