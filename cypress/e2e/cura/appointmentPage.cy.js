/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import AppointmentObjects from "../../pageObjects/appointmentObjects";
import UserFields from "../../pageObjects/appointmentObjects";
import HistoryObjects from "../../pageObjects/historyObjects";


describe('Test Suite', () => {
  it('Test Make Appointment Button', () => {
    UserFields.makeAppointmentButton();

  });

  it('Make an appointment', () => {
    AppointmentObjects.usernameField();
    AppointmentObjects.passwordField();
    AppointmentObjects.loginButton();
    AppointmentObjects.facilityDropdown();
    AppointmentObjects.hospitalReadAdmCheck();
    AppointmentObjects.healthcareProgButton();
    AppointmentObjects.commentField();
    AppointmentObjects.dateInput();
    AppointmentObjects.bookAppointmentButton();
    
   
  });
  it('Appointment history empty', () =>{
    AppointmentObjects.makeAppointmentButton();
    AppointmentObjects.usernameField();
    AppointmentObjects.passwordField();
    AppointmentObjects.loginButton();
    HistoryObjects.clickMenu();
    

  });
  });

