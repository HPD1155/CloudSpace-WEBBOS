function signup()
{
    var email = document.getElementById("email")
    var eprov = [email] 

    var psw = document.getElementById("Pwd")
    var rpsw = document.getElementById("repwd")
    
    if(psw.value == rpsw.value && email.value.includes('@' && '.com'))
    {
        alert("Signed up")
    }else {
        psw.value = "";
        rpsw.value = "";
        alert("Password doesn't match or no valid email provided")
    }
}