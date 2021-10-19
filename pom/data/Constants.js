import dotnev from 'dotenv'
dotnev.config()

export const CREDENTIALS = {
    STANDARD_USER : {
        USERNAME : process.env.STANDARD_USER_USERNAME,
        PASSWORD : process.env.STANDARD_USER_PASSWORD,
        INVALID_USERNAME: "notaemail@test.com",
        INVALID_PASSWORD: "thisisnotapassword"
    },

}

export const URL = {
    LOGIN_URL : 'https://todoist.com/users/showlogin'
}

export const TASKS = {
    TODAY_TASK_NAME : 'NewTaskToday',
    TODAY_TASK_DATE : 'Today',

    TOMORROW_TASK_NAME: 'NewTaskTomorrow',
    TOMORROW_TASK_DATE: 'Tomorrow'

}

export const PROJECTS = {
    PROJECT_NAME : 'ProjectTest'
}
