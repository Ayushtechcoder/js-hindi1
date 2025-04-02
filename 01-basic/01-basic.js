const accountID = 14553
let  accountEmail = "aayushh121@gmail.com"
var  accountPassword = "12345"
accountcity = "jaipur"
let accountState = "chandigarh"

// account Id = "223344" not allowed

accountEmail = "ashish1232@gmail.com"
accountPassword = "11223344"
accountCity = "palampur"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountID,accountEmail,accountPassword,accountCity])