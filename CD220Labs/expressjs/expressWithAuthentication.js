// Importing required modules: Express.js, JSON Web Token (JWT), and Express session
const express = require("express")
const jwt = require("jsonwebtoken")
const session = require("express-session")

let users = []

// Function to check if the user exists
const doesExist = username => {
  let usersWithSameName = users.filter(user => {
    return user.username === username
  })
  return usersWithSameName.length > 0
}

// Function to check if the user is authenticated
const authenticatedUser = (username, password) => {
  let validUsers = users.filter(user => {
    return user.username === username && user.password === password
  })
  return validUsers.length > 0
}

const app = express()

app.use(express.json()) // Middleware to parse JSON request bodies

app.use(session({ secret: "fingerprint" })) // Middleware to handle sessions

// Middleware to authenticate users using JWT
app.use("/auth", function auth(req, res, next) {
  if (req.session.authorization) {
    // Get the authorization object stored in the session
    token = req.session.authorization["accessToken"] // Retrieve the token from authorization object
    jwt.verify(token, "access", (err, user) => {
      // Use JWT to verify token
      if (!err) {
        req.user = user
        next()
      } else {
        return res.status(403).json({ message: "User not authenticated" })
      }
    })
  } else {
    return res.status(403).json({ message: "User not logged in" })
  }
})

// Route to handle user login
// Postman: http://localhost:5001/login?username=user12&password=pwd12
// Output: "message": "User successfully registered. Now you can login"
app.post("/login", (req, res) => {
  const username = req.query.username
  const password = req.query.password

  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in" })
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign(
      {
        data: password,
      },
      "access",
      { expiresIn: 60 * 60 }
    )

    req.session.authorization = {
      accessToken,
      username,
    }
    return res.status(200).send("User successfully logged in")
  } else {
    return res
      .status(208)
      .json({ message: "Invalid Login. Check username and password" })
  }
})

// Route to handle user registration
// Postman: http://localhost:5001/register?username=user12&password=pwd12
// Output: "message": "User successfully registered. Now you can login"
app.post("/register", (req, res) => {
  const username = req.query.username
  const password = req.query.password

  if (username && password) {
    if (!doesExist(username)) {
      users.push({ username: username, password: password })
      return res
        .status(200)
        .json({ message: "User successfully registered. Now you can login" })
    } else {
      return res.status(404).json({ message: "User already exists!" })
    }
  }
  return res.status(404).json({ message: "Unable to register user." })
})

// Main endpoint to be accessed by authenticated users
// curl localhost:5001/auth/get_message
// First response // Output: {"message":"User not logged in"}
// If Authenticated // Output:
app.get("/auth/get_message", (req, res) => {
  return res
    .status(200)
    .json({ message: "Hello, You are an authenticated user. Congratulations!" })
})
// curl localhost:5001/auth/get_message
// First response // Output: {"message":"User not logged in"}

const PORT = 5001 // Define the port number

app.listen(PORT, () => console.log("Server is running")) // Start the server and listen on the specified port
