const students = [
    {
      studentId: "PRN001",
      name: "John Doe",
      age: 20,
      dob: "2003-05-15",
      address: "123 Main St, Cityville",
      studentImg:"https://www.rainbowschoolnellore.com/images/student-profile-1.jpg",
      department: "Computer Science",
      subjects: [
        {
          subjectName: "Mathematics",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03"],
          absentDays: ["2023-10-04"],
          marks: 85,
          facultyName: "Dr. Smith"
        },
        {
          subjectName: "Physics",
          presentDays: ["2023-10-01", "2023-10-02"],
          absentDays: ["2023-10-03", "2023-10-04"],
          marks: 78,
          facultyName: "Prof. Johnson"
        },
        {
          subjectName: "Chemistry",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 82,
          facultyName: "Dr. Brown"
        },
        {
          subjectName: "Programming",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
          absentDays: [],
          marks: 20,
          facultyName: "Prof. Davis"
        },
        {
          subjectName: "Database Systems",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 88,
          facultyName: "Dr. Wilson"
        }
      ]
    },
    {
      studentId: "PRN002",
      name: "Jane Smith",
      age: 21,
      dob: "2002-08-22",
      address: "456 Elm St, Townsville",
      department: "Electrical Engineering",
      subjects: [
        {
          subjectName: "Mathematics",
          presentDays: ["2023-10-01", "2023-10-02"],
          absentDays: ["2023-10-03", "2023-10-04"],
          marks: 80,
          facultyName: "Dr. Smith"
        },
        {
          subjectName: "Circuit Theory",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 75,
          facultyName: "Prof. Lee"
        },
        {
          subjectName: "Electronics",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03"],
          absentDays: ["2023-10-04"],
          marks: 83,
          facultyName: "Dr. Harris"
        },
        {
          subjectName: "Signal Processing",
          presentDays: ["2023-10-01", "2023-10-04"],
          absentDays: ["2023-10-02", "2023-10-03"],
          marks: 77,
          facultyName: "Prof. Clark"
        },
        {
          subjectName: "Control Systems",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
          absentDays: [],
          marks: 85,
          facultyName: "Dr. Martinez"
        }
      ]
    },
    {
      studentId: "PRN003",
      name: "Alice Johnson",
      age: 22,
      dob: "2001-11-30",
      address: "789 Oak St, Villagetown",
      department: "Mechanical Engineering",
      subjects: [
        {
          subjectName: "Mathematics",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03"],
          absentDays: ["2023-10-04"],
          marks: 88,
          facultyName: "Dr. Smith"
        },
        {
          subjectName: "Thermodynamics",
          presentDays: ["2023-10-01", "2023-10-02"],
          absentDays: ["2023-10-03", "2023-10-04"],
          marks: 79,
          facultyName: "Prof. Taylor"
        },
        {
          subjectName: "Fluid Mechanics",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 81,
          facultyName: "Dr. White"
        },
        {
          subjectName: "Machine Design",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
          absentDays: [],
          marks: 87,
          facultyName: "Prof. Anderson"
        },
        {
          subjectName: "Manufacturing Processes",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 84,
          facultyName: "Dr. Thomas"
        }
      ]
    },
    {
      studentId: "PRN004",
      name: "Bob Brown",
      age: 20,
      dob: "2003-04-10",
      address: "321 Pine St, Hamletville",
      department: "Civil Engineering",
      subjects: [
        {
          subjectName: "Mathematics",
          presentDays: ["2023-10-01", "2023-10-02"],
          absentDays: ["2023-10-03", "2023-10-04"],
          marks: 82,
          facultyName: "Dr. Smith"
        },
        {
          subjectName: "Structural Analysis",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 76,
          facultyName: "Prof. Green"
        },
        {
          subjectName: "Geotechnical Engineering",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03"],
          absentDays: ["2023-10-04"],
          marks: 80,
          facultyName: "Dr. Hall"
        },
        {
          subjectName: "Construction Management",
          presentDays: ["2023-10-01", "2023-10-04"],
          absentDays: ["2023-10-02", "2023-10-03"],
          marks: 78,
          facultyName: "Prof. Adams"
        },
        {
          subjectName: "Transportation Engineering",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
          absentDays: [],
          marks: 85,
          facultyName: "Dr. King"
        }
      ]
    },
    {
      studentId: "PRN005",
      name: "Charlie Davis",
      age: 21,
      dob: "2002-07-25",
      address: "654 Birch St, Forestville",
      department: "Biotechnology",
      subjects: [
        {
          subjectName: "Mathematics",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03"],
          absentDays: ["2023-10-04"],
          marks: 84,
          facultyName: "Dr. Smith"
        },
        {
          subjectName: "Molecular Biology",
          presentDays: ["2023-10-01", "2023-10-02"],
          absentDays: ["2023-10-03", "2023-10-04"],
          marks: 77,
          facultyName: "Prof. Scott"
        },
        {
          subjectName: "Biochemistry",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 79,
          facultyName: "Dr. Young"
        },
        {
          subjectName: "Genetics",
          presentDays: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
          absentDays: [],
          marks: 86,
          facultyName: "Prof. Allen"
        },
        {
          subjectName: "Bioinformatics",
          presentDays: ["2023-10-01", "2023-10-03"],
          absentDays: ["2023-10-02", "2023-10-04"],
          marks: 83,
          facultyName: "Dr. Wright"
        }
      ]
    },
  ];

  export default students
  
  