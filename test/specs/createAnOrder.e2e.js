const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should select the plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed;
        await (supportiveButton).click();
        await expect($(page.supportiveIcon)).toBeExisting;
    })

    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })

    it('should add a credit card', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCreditCard(cardNumber, cardCode);
        await expect(await $(`${page.addCardButton}`)).toBeExisting();

    })

    it ('should message the driver', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        await page.fillMessageField('play a funny podcast');
        await expect($(page.messageField)).toHaveValue('play a funny podcast');
    })

    it('should order a blanket and handkerchiefs', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const supportiveButton= await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed;
        await (supportiveButton).click();
        await page.clickBlanketSwitch();
        await expect($(page.blanketSwitchElement)).toBeChecked();        
    })
    
    it ('should order 2 ice creams', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed;
        await (supportiveButton).click();
        await page.addIceCream();
        await page.addIceCream();
        await expect($(page.iceCreamCounterValue)).toHaveText("2");
    })

    it('should show the car search modal', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed;
        await (supportiveButton).click();
        await page.fillMessageField('play a funny podcast');
        await page.confirmRide();
        await expect($(page.carSearchModal)).toBeExisting();
    })

    it('should show waiting for driver info', async() => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.clickCallATaxi();
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed;
        await (supportiveButton).click();
        await page.fillMessageField('play a funny podcast');
        await page.confirmRide();
        await expect($(page.driverInfoHeader)).toBeExisting();
    })

})
