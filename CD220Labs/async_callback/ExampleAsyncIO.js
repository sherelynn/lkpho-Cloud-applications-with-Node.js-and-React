// Requiring fs module - fs is used for File I/O
// Imports the Node.js built-in fs module, which provides file system-related functionality.
let fs = require("fs")

let filename1 = "courseDetails.json"
let filename2 = "sampleData.json"

// Reading the file Asynchronously - Not blocking rest of execution
function readFile1(filename1) {
  // Defines function to read courseDetails.json using fs.readFile which reads the files asynchronously, allowing the rest of the code to execute without waiting for the file reading to complete
  // Using fs.readFile to read the file asynchronously
  fs.readFile(filename1, (err, data) => {
    if (err) {
      // Logging the error if any occurs
      console.log(err)
    } else {
      // Logging the content of the file if read successfully
      console.log("\n\nThe content of the file is \n\n" + data)
      console.log("Completed reading file1")
    }
  })
}

function readFile2(filename2) {
  // Defines function to read sampleData.json using fs.readFile which reads the files asynchronously, allowing the rest of the code to execute without waiting for the file reading to complete
  // Using fs.readFile to read the file asynchronously
  fs.readFile(filename2, (err, data) => {
    if (err) {
      // Logging the error if any occurs
      console.log(err)
    } else {
      // Logging the content of the file if read successfully
      console.log("\n\nThe content of the file is \n\n" + data)
      console.log("Completed reading file2")
    }
  })
}

// Log message before reading the first file
// Indicates the start of the reading process for each file
console.log("Before reading the file-1")
readFile1(filename1)

// Log message before reading the second file
// Indicates the start of the reading process for each file
console.log("Before reading the file-2")
readFile2(filename2)

// Log message after initiating the reading of both files
// Indicate that the code has executed beyond the file reading initiation
console.log("All done!")

// ========== Output from Console Logs ========== //
// Before the reading the file-1
// Before the reading the file-2
// All done!

// *** Files are being read asynchronously //
// *** The following three console log appears before the file content is printed though the logs are called in the code in different order //

// ========== End of Block Code ========== //
// Run the server with the following command:
// node ExampleAsyncIO.js
