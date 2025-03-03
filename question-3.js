// Question #3
let userPassword = "12345678910";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength (userPassword){
    for (let i = 0; i < userPassword.length; i++) {
     

        if(userPassword.length < 6){
            return "WeaK"
        }
        else if (userPassword.length <= 10){
            return "Medium"
        }
        else if (userPassword.length > 10){
            return "Storng"
        }
        
    }
}console.log(checkPasswordStrength(userPassword));



