import CountryElements from "./countryElements";

class CountryPage {
    selectACountry(country){
        cy.get(CountryElements.txt_select_a_country).type(country);
        cy.get(CountryElements.txt_country_result).click()
    }

    clickGetStarted(){
        cy.get(CountryElements.btn_get_started).should('be.enabled');
        cy.get(CountryElements.btn_get_started).click()
    }
}

export default CountryPage