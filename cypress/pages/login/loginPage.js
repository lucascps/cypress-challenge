import LoginElements from "./loginElements";

class LoginPage {
    visitLogin(){
        cy.visit('/login')
    }

    fillEmail(email){
        cy.get(LoginElements.txt_email).type(email)
    }

    fillPassword(password){
        cy.get(LoginElements.txt_password).type(password)
    }

    clickLogin(){
        cy.get(LoginElements.btn_login).click()
    }
}

export default LoginPage