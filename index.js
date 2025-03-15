'use strict'
import {students as studentArray} from "./students.js"



let students = []
document.addEventListener("DOMContentLoaded",(e)=>{
    let storedStudents = localStorage.getItem("students");

    try {
        students = storedStudents ? JSON.parse(storedStudents) : [];
    } catch (error) {
        console.error("Error parsing students:", error);
        students = [];
    }
    if (!students.length) {
        localStorage.setItem("students", JSON.stringify(studentArray));
        students = studentArray;  // Update the students variable in memory
    }
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


