import {Role} from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import loginpage from '../page/LoginPage'


export const STANDARD_USER = Role(URLS.TODOIST_URL, async (t) => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD)
},{preserveUrl:true})