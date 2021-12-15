import InviteEmployeeElements from "./inviteEmployeeElements";

class InviteEmployeePage{
    fillTalentEmail(talent_email){
        cy.get(InviteEmployeeElements.txt_talent_email).type(talent_email)
    }
}

export default InviteEmployeePage