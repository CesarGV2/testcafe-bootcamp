import {Role} from 'testcafe'
import { CREDENTIALS, URL } from './Constants'
import loginpage from '../page/LoginPage'


export const STANDARD_USER = Role(URL.LOGIN_URL, async (t) => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD)
},{preserveUrl:true})