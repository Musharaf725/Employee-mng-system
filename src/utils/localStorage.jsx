const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a responsive homepage design.",
        date: "2025-03-08",
        category: "UI/UX",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        description: "Resolve the login issue reported by users.",
        date: "2025-03-09",
        category: "Bug Fix",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write API Docs",
        description: "Document API endpoints for developers.",
        date: "2025-03-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Improve database performance for faster queries.",
        date: "2025-03-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Security Policies",
        description: "Review and enhance security protocols.",
        date: "2025-03-12",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Implement Dark Mode",
        description: "Add a dark mode feature to the website.",
        date: "2025-03-15",
        category: "Feature Update",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const data= localStorage.getItem('employees')
    console.log(JSON.parse(data))
}