const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript'},
    {id: 2, name: 'Alise Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Pyton'},
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    {id: 4, name: 'Elton Fisher', age: 37, department: 'Logistic', salary: 55000, specialization: 'JavaScript'},
    {id: 5, name: 'Brus Woo', age: 28, department: 'HR', salary: 50000, specialization: 'Java'},
    {id: 6, name: 'Debora Nuts', age: 41, department: 'Logistic', salary: 55000, specialization: 'JavaScript'},
    {id: 7, name: 'Bonny Masters', age: 43, department: 'Finance', salary: 60000, specialization: 'JavaScript'},
];


function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age}: - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees; 
} 

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Общая зарплата: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department}: - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age}: - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;

    }else{
        document.getElementById('employeesDetails').innerHTML = 'сотрудник с таким ID не найден';
    }
}

function findByJSSpecialization() {
    const jsEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
    const jsEmployeesDisplay = jsEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department}: - ${employee.specialization}</p>`).join('');
        
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay; 
}    

