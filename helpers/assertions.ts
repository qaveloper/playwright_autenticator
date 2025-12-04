import messages from '../data/messages.json'
import {LoginPage} from '../pages/LoginPage'
import {expect} from '../fixtures/testFixtures'

export async function assertLoginSuccess(loginPage : LoginPage){
    const successText = await loginPage.getSucessMessage();
    expect(successText).toBe(messages.successLogin.message);
}

export async function assertLoginFailure(loginPage : LoginPage){
    const failureText = await loginPage.getFailureMessage();
    expect(failureText).toBe(messages.failureLogin.message);
}

