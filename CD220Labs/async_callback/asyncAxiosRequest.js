// Requiring axios module for making HTTP requests
const axios = require("axios").default

// Function to connect to a URL and handle the response
const connectToURL = url => {
  // Defines a function that takes a URL as a parameter and sends a GET request to that URL using axios.get(url). It logs the initial promise object returned by axios.get.

  // Sending a GET request to the specified URL using axios
  const req = axios.get(url)

  // Logging the initial promise object
  console.log(req)

  // Handling the promise resolution
  req
    .then(resp => {
      // req.then(resp => { ... }) handles the promise resolution by logging "Fulfilled" and the response data (resp.data) if the request is successful.

      // Logging the fulfillment message
      console.log("Fulfilled")
      // Logging the response data
      console.log(resp.data)
    })
    // Handling the promise rejection
    .catch(err => {
      // req.catch(err => { ... }) handles the promise rejection by logging "Rejected for url" followed by the URL and the error message if the request fails.

      // Logging the rejection message with the URL
      console.log("Rejected for url " + url)
      // Logging the error message
      console.log(err.toString())
    })
}

// Valid URL
connectToURL(
  "https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json"
)
// Invalid URL
connectToURL(
  "https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json"
)

// ========== End of Block Code ========== //
// To run this code, we need to install axios package. Run the following command to install axios:
// npm install --save axios
// In the terminal window run the code with the following command:
// node asyncAxiosRequest.js

// ========== Output ========== //
// When you run the code, the first connectToURL is an axios request to a valid URL which will return JSON object. The second connectToURL is an axiosRequest to an invalid URL. This will return appropriate error message. The output will be as below.

/*
Promise { <pending> }
Promise { <pending> }
Fulfilled
{ name: 'Jason', age: '25', department: 'IT' }
Rejected for url https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json
Error: Request failed with status code 404 
*/
