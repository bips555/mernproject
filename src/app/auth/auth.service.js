class authservice{
    registerEmailMessage(name,token)
    {
        return  `<b>Dear ${name}</b>
        <p>Your account has been successfully registered. please copy or click the link below to activate the account <a href="http://localhost:5173/activate/${token}">http://localhost:5173/activate/${token}</a>
        </br>
        <p>
        <b>regards</b></p></p>`
    }
}