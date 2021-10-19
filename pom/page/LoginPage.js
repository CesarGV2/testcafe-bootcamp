import { Selector, t } from "testcafe";
import homePage from "./homePage";


class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn')
        this.errorMessage = Selector('.error_msg')
    }

    async submitLoginForm(username, password){
        await homePage.goToLoginPage()
        await t
        .typeText(this.usernameInput,username)
        .typeText(this.passwordInput,password)
        .click(this.loginButton)
    }
}

export default new LoginPage;