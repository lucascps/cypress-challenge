import HomeElements from "./homeElements";

class HomePage{
    visitDashboard(){
        cy.visit('/dashboard/employees')
    }

    visitActionItems(){
        cy.visit('/action-items')
    }

    clickAddEmployee(){
        cy.get(HomeElements.lbl_onboarding_list).should('be.visible')
        cy.get(HomeElements.btn_add_employee).click()
    }

    clickContinue(){
        cy.get(HomeElements.btn_continue).should('be.enabled');
        cy.get(HomeElements.btn_continue).click()
    }

    clickActionItems(){
        cy.get(HomeElements.btn_action_items).click()
    }
}

export default HomePage