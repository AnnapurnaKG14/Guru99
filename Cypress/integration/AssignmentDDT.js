///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('Assignment problem with DDT', () => {
    
    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/index.php")
    });

    before(()=>{
        cy.fixture('RegisterData').then((data)=>{
            globalThis.RegisterData = data
        })

        cy.fixture('LoginData').then((data)=>{
            globalThis.LoginData = data
        })

        cy.fixture('FlightsData').then((data)=>{
            globalThis.FlightsData = data
        })
    });
    it('Register', () => {
        cy.contains('REGISTER').click()
        cy.xpath('//*[@name="firstName"]').type(RegisterData.firstName)
        cy.get('input[name="lastName"]').type(RegisterData.lastName)
        cy.xpath("//*[@name='phone']").type(RegisterData.phone)
        cy.get("input[id='userName']").type(RegisterData.userName)
        cy.xpath("//*[@name='address1']").type(RegisterData.address1)
        cy.get("input[name='city']").type(RegisterData.city)
        cy.xpath("//*[@name='state']").type(RegisterData.state)
        cy.xpath("//*[@name='postalCode']").type(RegisterData.postalCode)

        cy.xpath("//*[@name='country']").select(RegisterData.country)
        cy.get('input[id="email"]').type(RegisterData.email)
        cy.get('input[name="password"]').type(RegisterData.password)
        cy.get('input[name="confirmPassword"]').type(RegisterData.confirmPassword)
        cy.get('input[name="submit"]').click()
    });

    it('Login', () => {
        cy.contains('SIGN-ON').click()
        cy.get('input[name="userName"]').type(LoginData.userName)
        cy.get('input[name="password"]').type(LoginData.password)
        cy.get('input[name="submit"]').click()
    });

    it('Flights', () => {
        cy.contains('Flights').click()
        cy.xpath('//*[@name="passCount"]').select(FlightsData.passCount)
        cy.get('select[name="fromPort"]').select(FlightsData.fromPort)
        cy.get('select[name="fromMonth"]').select(FlightsData.fromMonth)
        cy.get('select[name="fromDay"]').select(FlightsData.fromDay)
        cy.get('select[name="toPort"]').select(FlightsData.toPort)
        cy.get('select[name="toMonth"]').select(FlightsData.toMonth)
        cy.get('select[name="toDay"]').select(FlightsData.toDay)
        cy.get('input[value="Business"][name="servClass"]').click()
        cy.get('select[name="airline"]').select(FlightsData.airline)
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
        cy.get('input[name="userName"]').type(LoginData.userName)
        cy.get('input[name="password"]').type(LoginData.password)
        cy.get('input[name="submit"]').click()
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