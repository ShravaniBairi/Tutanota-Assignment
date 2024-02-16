export function urlExistence(url) {
    return new Promise((resolve, reject) => {
    // Log the current date and count of throttled function for debugging purposes
      console.count("Throttled Function");
      console.log(new Date());
      // Generate a random number to mock server responses
      let mockElement = Math.random()
      if (mockElement < 0.5) {
        resolve({ type: "file" }); // Mocking server response with file type
      } else if (mockElement >= 0.5) {
        resolve({ type: "folder" }); // Mocking server response with folder type
      } else {
        reject(new Error("URL not found"));
      }
    });
  }