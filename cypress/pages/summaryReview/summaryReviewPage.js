import SummaryReviewElements from "./summaryReviewElements";

class SummaryReviewPage{
    confirmInformation(){
        cy.get(SummaryReviewElements.cb_confirm).click()
    }
}

export default SummaryReviewPage