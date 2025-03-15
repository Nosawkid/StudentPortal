let students = []

document.addEventListener("DOMContentLoaded",()=>{
    students = JSON.parse(localStorage.getItem("students")) || []
    console.log(students)
    renderTable()
    const form = document.getElementById("addStudentForm")
    form.addEventListener("submit",addStudent)
})


function addStudent(e)
{
    e.preventDefault()
    const name = document.getElementById("studentName").value
    const dept = document.getElementById("studentDept").value
    const prn = document.getElementById("studentPRN").value
    const dob = document.getElementById("studentDOB").value
    students.push({
        studentId:prn,
        name:name,
        department:dept,
        dob:dob
    })
    localStorage.setItem("students",JSON.stringify(students))
    renderTable()
}



function renderTable() {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    for (let student of students) {
        const row = `<tr>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>${student.studentId}</td>
        <td><button class="btn btn-danger" onClick="deleteStudent('${student.studentId}')">Delete</button></td>
    </tr>`;

        tableBody.innerHTML += row;
    }
}

window.deleteStudent = function (id) {
    students = students.filter((e)=> e.studentId !== id)
    localStorage.setItem("students",JSON.stringify(students))
    renderTable()
}


renderTable()