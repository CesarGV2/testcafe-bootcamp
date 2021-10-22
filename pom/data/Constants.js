/* eslint-disable sort-keys */
/* eslint-disable one-var */
import dotnev from 'dotenv'
dotnev.config()

export const CREDENTIALS = {
    STANDARD_USER : {
        
        INVALID_PASSWORD: 'thisisnotapassword',
        INVALID_USERNAME: 'notaemail@test.com',
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
    TODAY_TASK_NAME : 'TaskToday',
    

    TOMORROW_TASK_DATE: 'Tomorrow',
    TOMORROW_TASK_NAME: 'TaskTomorrow',

    DYNAMIC_TASK_NAME: 'Task_',
    
    NUMBER_OF_TASK : 10

}

export const PROJECTS = {
    PROJECT_NAME : 'ProjectTest',
    PROJECT_COLOR: 'Teal',
    FAVORITE_SWITCH: true

}

export const TIMERS = {
    API_WAIT: 1500
}