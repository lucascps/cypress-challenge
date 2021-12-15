import ActionItemsElements from "./actionItemsElements";

class ActionItemsPage{

    assertPendingActionItemsTitle(title){
        cy.get(ActionItemsElements.lbl_pending_action_items_title).contains(title)
    }

    assertPendingActionItemsStatus(status){
        cy.get(ActionItemsElements.lbl_pending_action_items_status).contains(status)
    }

    clickMarkAsDone(){
        cy.get(ActionItemsElements.btn_mark_as_done).click()
    }

    assertUncompletedItems(){
        cy.get(ActionItemsElements.lbl_uncompleted_items).should('be.visible')
    }

    assertCompletedItems(){
        cy.get(ActionItemsElements.lbl_completed_items).should('be.visible')
    }

    assertDoneActionItemsTitle(title){
        cy.get(ActionItemsElements.lbl_done_action_items_title).contains(title)
    }

    assertDoneActionItemsStatus(status){
        cy.get(ActionItemsElements.lbl_done_action_items_status).contains(status)
    }
}

export default ActionItemsPage