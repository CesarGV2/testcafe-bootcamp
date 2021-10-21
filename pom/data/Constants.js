import dotnev from 'dotenv'
dotnev.config()
import faker from 'faker'

export const CREDENTIALS = {
    STANDARD_USER : {
        
        INVALID_PASSWORD: "thisisnotapassword",
        INVALID_USERNAME: "notaemail@test.com",
        PASSWORD : process.env.STANDARD_USER_PASSWORD,
        USERNAME : process.env.STANDARD_USER_USERNAME
    }

}

export const URLS = {
    TODOIST_URL : 'https://todoist.com/',
    LOGIN_URL : 'https://todoist.com/users/showlogin'
}

export const TASKS = {
    TODAY_TASK_DATE : 'Today',
    TODAY_TASK_NAME : 'TaskToday_'+ faker.hacker.verb(),
    

    TOMORROW_TASK_DATE: 'Tomorrow',
    TOMORROW_TASK_NAME: 'TaskTomorrow_'+ faker.hacker.verb()
    

}

export const PROJECTS = {
    PROJECT_NAME : 'ProjectTest'
}