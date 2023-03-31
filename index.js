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

function register(newusername, newpassword, newname, newemail) {
    //TODO: Check if username exist

    let regmatch = dbUsers.find(element =>
        element.username == newusername
        )
        if (regmatch) {
            return "Username is used"
        } else {

        dbUsers.push({
            username: newusername,
            password: newpassword,
            name: newname,
            email: newemail,
        })
        return "Registration success"
    }
}

//try to login
//console.log(login("Wee", "0000"))
console.log(login("utem", "123456"))
//login("wee", "0000")

//try to register
console.log(register("utem", "123456", "utem", "utem@gmail.com"))
console.log(register("utem", "123456", "utem", "utem@gmail.com"))
console.log(register("utem", "123456", "utem", "utem@gmail.com"))

console.log(login("utem", "123456"))