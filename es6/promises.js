function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }

  function findUser(username) {
      const users = getUsers();
      const user = users.find((u) => u.username === username)
      return user
  }

//   console.log(findUser("jane"));

let pr = new Promise(function(resolve, reject) {
    const x = "one"
    const y = "one"
    if (x == y) {
        resolve()
    } else {
        reject()
    }
})

pr.then(() => console.log("Sucess"))
.catch(function() {
    console.log('Error');
})