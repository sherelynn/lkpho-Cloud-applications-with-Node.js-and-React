// This method will be provided as a parameter
function firstCallBackMethod() {
  // This function will be used as a callback
  // Logging a message inside the callback method
  console.log("Inside the first call back method")
}

// Log message before calling setTimeout
// Indicate the impending timer setup
console.log("Going to call setTimeout with a delay of 5 seconds")

// Call the function firstCallBackMethod after a delay using setTimeout
// setTimeout is a built-in library method which allows you to pass a method which needs to be called on timeout, as a parameter. Here firstCallBackMethod is defined and then passed as a parameter to setTimeOut. As you may have observed, the method will be called after 5 seconds. This is called callback
setTimeout(firstCallBackMethod, 5000) // Schedules the execution after a delay of 5000 milliseconds (5 seconds). allowing the rest of the code to continue executing immediately while the timer runs in the background

// ========== End of Block Code ========== //
// Run the server with the following command:
// node ExampleAsyncCallBack.js
