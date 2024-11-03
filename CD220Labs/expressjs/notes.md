## expressRouting.js

-> terminal 1: node expressRouting.js
-> output: Listening at http://localhost:3333
-> terminal 2: curl localhost:3333/item/1
-> output: Item 1 last enquiry Sun Nov 03 2024 18:52:00 GMT+1300 (New Zealand Daylight Time)
-> curl localhost:3333/user/1
-> output: User 1 last successful login Sun Nov 03 2024 18:52:45 GMT+1300 (New Zealand Daylight Time)

## expressStaticPages.js

-> terminal 1: node expressStaticPages.js
-> output: Listening at http://localhost:3333
-> To render the static file, add the file name to url server
-> open browser: httpL//localhost:3333/ReactCalc.html
