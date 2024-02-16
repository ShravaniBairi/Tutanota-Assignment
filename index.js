import { urlExistence } from "./utils/urlExistance.js";
import { isValidUrl } from "./utils/isValidUrl.js";

const urlInput = document.getElementById("url");
const messageElement = document.getElementById("message");

// Timeout-based throttling function with apply method:
function throttle(fn, limit) {
  let flag = true;
  return async function () {
    let context = this;
    let args = arguments;

    if (flag) {
      messageElement.textContent = "Checking URL... (throttled)";
      try {
        // Call the function with provided arguments using apply method:
        const response = await fn.apply(context, args);
        messageElement.textContent = `URL exists and is a ${response.type}`;
      } catch (error) {
        messageElement.textContent = "URL not found.";
      }
      // Set flag to prevent further executions until timeout expires
      flag = false;
      setTimeout(() => {
        // Reset the flag after the specified limit to allow the function to be called again
        flag = true;
      }, limit);
    }
  };
}

// Throttled URL existence check:
const throttledUrlExistence = throttle(urlExistence, 5000); // Adjust limit as needed

urlInput.addEventListener("keyup", async (event) => {
  const url = event.target.value.trim(); 
  // Validate URL format:
  if (!isValidUrl(url)) {
    messageElement.textContent =
      "Invalid URL format. Please enter a valid URL.";
    return;
  }
  // Call the throttled version of urlExistence:
  await throttledUrlExistence(url);
});