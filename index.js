let dbUsers = [
    {
        username: "Wee",
        password: "0000",
        name : "wee",
        email : "ok@gmail.com"
    },

    {
        username: "A",
        password: "B",
        name : "C",
        email : "D@gmail.com"
    }
]

//function login(username, password){
//    console.log("someone try to login with", username, password)
//    dbUsers.find(element => {
//        console.log(element)
//    })
//}

function login(username, password) {
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        } 
    } else {
        return "User not found"
    }
}

//try to login
console.log(login("Wee", "0000"))
//login("wee", "0000")