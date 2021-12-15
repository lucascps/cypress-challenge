/// <reference types="cypress" />

import ContractDetailsPage from "../pages/contractDetails/contractDetailsPage";
import CountryPage from "../pages/country/countryPage";
import HomePage from "../pages/home/homePage";
import InviteEmployeePage from "../pages/inviteEmployee/inviteEmployeePage";
import LoginPage from "../pages/login/loginPage";
import SalaryCalculatorPage from "../pages/salaryCalculator/salaryCalculatorPage";
import SummaryReviewPage from "../pages/summaryReview/summaryReviewPage";
import ActionItemsPage from "../pages/actionItems/actionItemsPage";
import SuccessPage from "../pages/success/successPage";

before(function () {
  cy.fixture('testData').then(function (testdata) {
      this.testdata = testdata
  })
}) 

describe("employer workflow", function() {
  it("should complete the employee onboarding and mark the action item as done", function() {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    const login = new LoginPage();
    const home = new HomePage();
    const country = new CountryPage();
    const contract = new ContractDetailsPage();
    const salary = new SalaryCalculatorPage();
    const invite = new InviteEmployeePage();
    const summary = new SummaryReviewPage();
    const success = new SuccessPage();
    const action = new ActionItemsPage();
    home.visitDashboard();
    login.fillEmail(email);
    login.fillPassword(password);
    login.clickLogin();
    home.clickAddEmployee();
    country.selectACountry(this.testdata.country);
    country.clickGetStarted();
    contract.fillFirstName(this.testdata.first_name);
    contract.fillLasName(this.testdata.last_name);
    contract.selectCountryEligible();
    contract.selectExecutive();
    contract.fillJobTitle(this.testdata.job_title);
    contract.fillJobDescription(this.testdata.job_description);
    contract.selectFullTime();
    contract.fillContractStartDate(this.testdata.contract_start_date);
    home.clickContinue();
    home.clickContinue();
    salary.fillBaseSalary(this.testdata.base_salary);
    home.clickContinue();
    invite.fillTalentEmail(this.testdata.talentEmail);
    home.clickContinue();
    summary.confirmInformation();
    home.clickContinue();
    success.assertCongratulations();
    cy.wait(7000);
    home.visitActionItems();
    action.assertPendingActionItemsTitle(this.testdata.first_name);
    action.assertPendingActionItemsTitle(this.testdata.last_name);
    action.assertPendingActionItemsStatus(this.testdata.statusPending);
    action.clickMarkAsDone();
    action.assertDoneActionItemsTitle(this.testdata.first_name);
    action.assertDoneActionItemsTitle(this.testdata.last_name);
    action.assertDoneActionItemsStatus(this.testdata.statusDone); 
  })
})
