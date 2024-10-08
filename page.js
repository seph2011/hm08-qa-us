module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',
    messageField: '#comment',
    blanketAndHandkerchiefsSwitch: '.switch',
    blanketSwitchElement: '.switch-input',
    iceCreamCounterValue: '//*[@class="counter-value"]',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: '//div[starts-with(text(), "Supportive")]',
    paymentMethod: '.pp-button.filled',
    addCardButton: '//div[starts-with(text(), "Add card")]',
    linkCardButton: 'button=Link',
    orderRequirementsMenu: '//div[starts-with(text(), "Order requirements")]',
    addIceCreamButton: '//div[@class="counter-plus"]',
    confirmRideButton: '//button[@class="smart-button"]',
    supportiveIcon: '//div[@class="tcard active"]//div[@data-for="tariff-card-4"]',
    // Modals
    phoneNumberModal: '.modal',
    paymentMethodModal: '.payment-picker.open',
    carSearchModal: '.order.shown',
    driverInfoHeader: '//*[starts-with(text(), "The driver will arrive in")]',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
    },    
    clickCallATaxi: async function() {  
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        const requests = await browser.getRequests();
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCreditCard: async function(creditCardNumber, creditCardCode) {
        const paymentMethod = await $(this.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        const paymentMethodModal = await $(this.paymentMethodModal);
        await paymentMethodModal.waitForDisplayed()
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumber = await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(creditCardNumber);
        const cardCode = await $(this.cardCode);
        await cardCode.setValue(creditCardCode);
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.click();
    },
    fillMessageField: async function (message) {
        const messageField = await $(this.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue(message);        
    },
    clickBlanketSwitch: async function () {
        const blanketAndHandkerchiefsSwitch = await $(this.blanketAndHandkerchiefsSwitch);
        await blanketAndHandkerchiefsSwitch.waitForDisplayed();
        await blanketAndHandkerchiefsSwitch.click(); 
    },
    addIceCream: async function () {
        const addIceCreamButton = await $(this.addIceCreamButton);
        await addIceCreamButton.waitForDisplayed();
        await addIceCreamButton.click();
    },
    confirmRide: async function () {
        const confirmRideButton = await $(this.confirmRideButton);
        await confirmRideButton.waitForDisplayed();
        await confirmRideButton.click();
    }
};