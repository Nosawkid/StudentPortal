'use strict'
import students from "./students.js"


document.addEventListener("DOMContentLoaded",(e)=>{
    const loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit",handleLoginForm)
})


function handleLoginForm(e){
    e.preventDefault()
    const prn = document.getElementById("prn").value
    const password = document.getElementById("password").value
    const student = students.find((e) => e.studentId === prn)
    if(!student)
    {
        alert("Invalid PRN")
        return
    }
    const isValidPassword = student.dob === password ? true :false
    if(!isValidPassword)
    {
        alert("Wrong Password, try again")
        return
    }
    window.location.href = `dashboard.html?studentId=${encodeURIComponent(prn)}`
}


