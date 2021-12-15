import SalaryCalculatorElements from "./salaryCalculatorElements";

class SalaryCalculatorPage{
    fillBaseSalary(base_salary){
        cy.get(SalaryCalculatorElements.txt_base_salary).type(base_salary)
    }
}

export default SalaryCalculatorPage