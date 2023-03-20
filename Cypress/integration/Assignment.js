///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('Assignment problem', () => {

    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/index.php")
    });

    it('start with the register page', () => {
        cy.contains('REGISTER').click()
        cy.xpath('//*[@name="firstName"]').type("Annapurna")
        cy.get('input[name="lastName"]').type("Nayak")
        cy.xpath("//*[@name='phone']").type("9876543210")
        cy.get("input[id='userName']").type("Annu")
        cy.xpath("//*[@name='address1']").type("koramangala")
        cy.get("input[name='city']").type("bangalore")
        cy.xpath("//*[@name='state']").type("Karnataka")
        cy.xpath("//*[@name='postalCode']").type("555555")

        cy.xpath("//*[@name='country']").select("INDIA")
        cy.get('input[id="email"]').type("Annu@gmail.com")
        cy.get('input[name="password"]').type("abcdefg")
        cy.get('input[name="confirmPassword"]').type("abcdefg")
        cy.get('input[name="submit"]').click() 
    });

    it('Login', () => {
        cy.contains('SIGN-ON').click()
        cy.get('input[name="userName"]').type("Annu@gmail.com")
        cy.get('input[name="password"]').type("abcdefg")
        cy.get('input[name="submit"]').click()
    });

    it('Flights', () => {
        cy.contains('Flights').click()
        cy.xpath('//*[@name="passCount"]').select('2')
        cy.get('select[name="fromPort"]').select('London')
        cy.get('select[name="fromMonth"]').select('November')
        cy.get('select[name="fromDay"]').select('14')
        cy.get('select[name="toPort"]').select('Paris')
        cy.get('select[name="toMonth"]').select('December')
        cy.get('select[name="toDay"]').select('24')
        cy.get('input[value="Business"][name="servClass"]').click()
        cy.get('select[name="airline"]').select('Unified Airlines')
        cy.get('input[name="findFlights"]').click()  
    });

    it('Hotels', () => {
        cy.contains('Hotels').click()
        cy.url().should('include',"support")   
    });

    it('Car Rentals', () => {
        cy.contains('Car Rentals').click()
        cy.url().should('include',"support")           
    });

    it('Cruises', () => {
        cy.contains('Cruises').click()
        cy.get('input[name="userName"]').type("Annu@gmail.com")
        cy.get('input[name="password"]').type("abcdefg")
        cy.get("input[name='submit']").click()
    });

    it('Destinations', () => {
        cy.contains('Destinations').click()
        cy.url().should('include',"support")           
    });

    it('Vacations', () => {
        cy.contains('Vacations').click()
        cy.url().should('include',"support")           
    });
});