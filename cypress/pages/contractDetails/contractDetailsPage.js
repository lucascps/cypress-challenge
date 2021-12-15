import ContractDetailsElements from "./contractDetailsElements";

class ContractDetailsPage{
    fillFirstName(first_name){
        cy.get(ContractDetailsElements.txt_first_name).type(first_name)
    }

    fillLasName(last_name){
        cy.get(ContractDetailsElements.txt_last_name).type(last_name)
    }

    selectCountryEligible(){
        cy.get(ContractDetailsElements.rb_yes_eligible_work_country).click()
    }

    selectExecutive(){
        cy.get(ContractDetailsElements.rb_no_talent_executive).click()
    }

    fillJobTitle(job_title){
        cy.get(ContractDetailsElements.txt_job_title).type(job_title)
    }

    fillJobDescription(job_description){
        cy.get(ContractDetailsElements.txt_job_description).type(job_description)
    }

    selectFullTime(){
        cy.get(ContractDetailsElements.rb_full_time).click()
    }

    fillContractStartDate(contract_start_date){
        cy.get(ContractDetailsElements.pnl_contract_start_date).type(contract_start_date)
    }
}

export default ContractDetailsPage