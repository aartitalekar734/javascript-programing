class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
let arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vena,
  emp_mahi,
];
console.log("===========Employee company is TCS=================================");

for (const element of arrayEmployees) {
  if (element.emp_company == "TCS") {
    console.log(element.emp_name, element.emp_company);
  }
}
console.log("=========Employee department is Finance===========================");

for (const element of arrayEmployees) {
  if (element.emp_dept == "Finance") {
    console.log(element.emp_name, element.emp_dept);
  }
}
console.log("========Employee name start with R====================================");

for (const element of arrayEmployees) {
  if (element.emp_name.startsWith("R") ){
    console.log(
      element.emp_id,
      element.emp_name,
      element.emp_dept,
      element.emp_salary,
      element.emp_company
    );
  }
}
console.log("=========employee salary greater than 75000==================================");

for (const element of arrayEmployees) {
  if (element.emp_salary>75000) {
    console.log(element.emp_name, element.emp_company,element.emp_salary);
  }
}
console.log("=====Employee whose salary greater than 50000 and department is IT=============");

for (const element of arrayEmployees) {
  if (element.emp_salary>=50000 && element.emp_dept=="IT") {
    console.log( element.emp_id,
      element.emp_name,
      element.emp_dept,
      element.emp_salary,
      element.emp_company);
  }
}
console.log("==========employee company is Infy=========================================");

for (const element of arrayEmployees) {
  if (element.emp_company=="Infy") {
    console.log( element.emp_id,
      element.emp_name,
      element.emp_dept,
      element.emp_salary,
      element.emp_company);
  }
}
