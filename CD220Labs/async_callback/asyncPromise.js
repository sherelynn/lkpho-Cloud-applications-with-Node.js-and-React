// Requiring prompt-sync module to enable synchronous user input
let prompt = require("prompt-sync")()

// Requiring fs module - fs is used for File I/O
// Imports the Node.js built-in fs module for file system-related functionality
let fs = require("fs")

// Creating a new Promise to handle file reading
// This promise takes a callback function with resolve and reject parameters
const methCall = new Promise((resolve, reject) => {
  // Prompting the user to input the filename
  let filename = prompt("What is the name of the file?") // prompts the user to input the filename.
  try {
    // Reading the file synchronously
    const data = fs.readFileSync(filename, { encoding: "utf8", flag: "r" }) // attempts to read the specified file synchronously with UTF-8 encoding.
    // Resolving the promise with the file data if read successfully
    resolve(data)
  } catch (err) {
    // Rejecting the promise if an error occurs
    reject(err)
  }
})

// Logging the promise object
console.log(methCall)

// Handling the resolved and rejected states of the promise
methCall.then(
  // Logging the file data if the promise is resolved
  data => console.log(data),
  // Logging an error message if the promise is rejected
  err => console.log("Error reading file")
)

// ========== End of Block Code ========== //
// In the terminal window run the following command to install prompt-sync. Using --save ensures that the package.json file is updated for dependencies:
// npm install --save prompt-sync
// In the terminal window run the server with the following command. It will ask you for a filename. Enter a valid filename from the current directory:
// node asyncPromise.js
// Filenames: courseDetails.json, sampleData.json
