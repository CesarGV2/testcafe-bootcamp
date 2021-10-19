import { CREDENTIALS,URL } from "../data/Constants";
import loginpage from '../page/LoginPage'
import projectpage from '../page/ProjectPage'
import {STANDARD_USER} from '../data/Roles'


fixture.meta('test','login')('Login test')
    .page(URL.LOGIN_URL)


test.meta("type","regression")('As a user I should not be able to login with incorrect email', async (t) => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.INVALID_USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
        .expect(loginpage.errorMessage.innerText).eql('Wrong email or password.')
        
    
});

test.meta('type','smoke')('As a user I should be able to login with valid credentials', async (t) => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
        .wait(2000)
        .expect(projectpage.projectName.exists)
        .ok();
    
});

test.meta("type","regression")('As a user I should not be able to login with incorrect password', async (t) => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.INVALID_PASSWORD)
    await t
    .expect(loginpage.errorMessage.innerText).eql('Wrong email or password.')
    
});


// test.meta("type","regression")('As a user I should not be able to login with incorrect email and password', async (t) => {
//     await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.INVALID_USERNAME, CREDENTIALS.STANDARD_USER.INVALID_PASSWORD)
//     await t
//      .expect(loginpage.errorMessage.innerText).eql('Wrong email or password.')
     
 
//  });