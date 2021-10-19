import { Selector, t } from "testcafe";

class homePage {
    constructor(){
        this.loginLink = Selector('a').withExactText('Log in')
        this.signUpLink = Selector('a').withExactText('Sign up')
        this.featuresLink = Selector('a').withExactText('Features')
        this.templatesLink = Selector('a').withExactText('Templates')
        this.forTeamsLink = Selector('a').withExactText('For Teams')
        this.pricingLink = Selector('a').withExactText('Pricing')
        this.getStaredButton = Selector('a').withExactText('Get Stared')

    }

    async goToLoginPage(){
        await t
        .click(this.loginLink)
    }

}
export default new homePage;