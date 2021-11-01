import { Selector, t } from "testcafe";

class homePage {
    constructor(){
        this.loginLink = Selector('a').withExactText('Log in')
    }

    async goToLoginPage(){
        await t
        .click(this.loginLink)
    }

}
export default new homePage;