// Requiring fs module - fs is used for File I/O
let fs = require("fs") // Imports the Node.js built-in fs module, which provides the file system related functionality

// Define the filenames to be read
let filename1 = "courseDetails.json"
let filename2 = "sampleData.json"

// Function to read the first file synchronously
function readFile1(filename1) {
  // Defines a function to read courseDetails.json synchronously using fs.readFileSync which blocks further execution until each file is read
  // Reading the file Synchronously - Blocking rest of execution
  let data = fs.readFileSync(filename1)
  console.log("\n\nThe content of the file is \n\n" + data)
  console.log("Completed reading file1")
}

// Function to read the second file synchronously
function readFile2(filename2) {
  // Defines a function to read sampleData.json synchronously using fs.readFileSync which blocks further execution until each file is read
  // Reading the file Synchronously - Blocking rest of execution
  let data = fs.readFileSync(filename2)
  console.log("\n\nThe content of the file is \n\n" + data)
  console.log("Completed reading file2")
}

// Log message before reading the first file
console.log("Before reading file-1")
readFile1(filename1)

// Log message before reading the second file
console.log("Before reading file-2")
readFile2(filename2)

// Log message after reading both files
// Indicates that the code has executed beyond the file reading initiation
console.log("All done!")

// ========== End of Block Code ========== //
// Run the server with the following command:
// node ExampleSyncIO.js
