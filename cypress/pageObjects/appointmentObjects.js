
  class AppointmentObjects {
  
    static makeAppointmentButton() {
      cy.visit('https://katalon-demo-cura.herokuapp.com/') 
      cy.get('#btn-make-appointment').click();
    }
  
    static usernameField() {
      cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login') 
      cy.get("#txt-username").type('John Doe');
    }
    static  passwordField() {
      cy.get("#txt-password").type('ThisIsNotAPassword');
    }
    static loginButton(){
      cy.get('#btn-login').click();
    }
    static facilityDropdown(){
      cy.get('#combo_facility').select("Seoul CURA Healthcare Center").invoke("val").should("eq", "Seoul CURA Healthcare Center")
    }
    static hospitalReadAdmCheck(){
      cy.get('#chk_hospotal_readmission').click();
    }
    static healthcareProgButton(){
      cy.get('#radio_program_medicaid').click();
    }
    static dateInput(){
        cy.get('#txt_visit_date').click().type('30/06/2023');
    }
    static commentField(){
      cy.get('#txt_comment').type('CURA Healthcare Service');
    }
    static bookAppointmentButton(){
      cy.get('#btn-book-appointment').click();
  
    }};

  export default AppointmentObjects;