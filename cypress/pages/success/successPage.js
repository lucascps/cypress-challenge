import SuccessElements from "./successElements";

class SuccessPage{
    assertCongratulations(){
        cy.get(SuccessElements.lbl_congratulations).contains('Congratulations')
    }
}

export default SuccessPage