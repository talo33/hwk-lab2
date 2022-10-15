// create a JSON object
const user = {
    id: 1,
    name: 'John Doe',
    age: 22
  }
  
  // convert JSON object to a string
  const data = JSON.stringify(user)
  
  // write JSON string to a file
  const fs = require('fs');
  fs.writeFile('user.json', data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })