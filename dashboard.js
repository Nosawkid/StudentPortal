import students from "./students.js";

const params = new URLSearchParams(window.location.search)
if(!params)
{
    document.body.textContent = "Invalid Params"
} else
{
    // Card
    const studentId = params.get("studentId")
    const student = students.find((el) => el.studentId === studentId)
    document.getElementById("name").textContent = student.name
    document.getElementById("address").textContent = student.address
    document.getElementById("dob").textContent = student.dob
    document.getElementById("dept").textContent = student.department
    document.getElementById("profile-pic").setAttribute("src",student.studentImg)

    // Graph
    let ctx = document.getElementById("marksChart").getContext("2d")
    const labels = [...student.subjects.map(el => el.subjectName)]
    const data = [...student.subjects.map(el => el.marks)]
    const backgroundColors = data.map(mark => mark <= 35 ? "red" : "lightblue")
    
    const marksChart = new Chart(ctx,{
        type:"bar",
        data:{
            labels,
            datasets:[{
                label:"Marks",
                data,
                backgroundColor : backgroundColors               
            }]
        },
        options:{
            responsive:true,
            scales:{
                y: {beginsAtZero:true,max:100}
            }
        }
    })
    // Attendance
    const tableBody = document.getElementById("table-body")
    const subjects = [...labels]
    const presentDays = [...student.subjects.map(el => el.presentDays)]
    const absentDays = [...student.subjects.map(el => el.absentDays)]
    
    
    for(let i = 0; i < subjects.length; i++)
    {
        const row = document.createElement("tr")
        const subName  = document.createElement("td")
        subName.textContent = subjects[i]
        const attendance = document.createElement("td")
        const attendancePercentage = Math.floor(presentDays[i].length / (presentDays[i].length + absentDays[i].length) * 100)
        attendance.textContent = attendancePercentage + "%"
        if (attendancePercentage < 85) {
            setInterval(() => {
                attendance.style.color = attendance.style.color === "red" ? "black" : "red";
            }, 200);
        }
        
        row.appendChild(subName)
        row.appendChild(attendance)
        tableBody.appendChild(row)
    }
}
