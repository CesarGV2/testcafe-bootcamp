import TaskPage from '../page/TaskPage'
import {STANDARD_USER} from '../data/Roles'
import {TASKS,TIMERS} from '../data/Constants'
import commonpage from '../page/CommonPage'

fixture.meta('test','createTask')('Create Task Tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
        // added in order to solve a problem in headless mode
        .maximizeWindow()
    })
    
    .afterEach(async (t) => {
        await TaskPage.deleteTask()  
        await t
        .expect(TaskPage.taskCreated.exists).notOk()
        .wait(TIMERS.API_WAIT)
    });
   

test.meta('type','smoke')('As a logged in user I should be able to create a task with today as due date', async (t) => {
    
    await TaskPage.createTask(TASKS.TODAY_TASK_NAME, TASKS.TODAY_TASK_DATE)
    await t
        .expect(TaskPage.taskNameCreated.withExactText(TASKS.TODAY_TASK_NAME).exists)
        .ok()
        .wait(TIMERS.API_WAIT)
});

test.meta('type','regression')('As a logged in user I should be able to create a task with tomorrow as due date', async (t) => {
    await TaskPage.createTask(TASKS.TOMORROW_TASK_NAME, TASKS.TOMORROW_TASK_DATE)
    await t
        .click(commonpage.upcoming)
        .click(TaskPage.tomorrowTasks) 
        .expect(TaskPage.taskNameCreated.withExactText(TASKS.TOMORROW_TASK_NAME).exists)
        .ok()
        .wait(TIMERS.API_WAIT)
});

test.meta('type','regression')('As a logged in user I should be able to create 10 tasks with today as due date', async (t) => {
    await TaskPage.createManyTask(TASKS.NUMBER_OF_TASK)
    await t
        .expect(TaskPage.taskCreated.count).eql(TASKS.NUMBER_OF_TASK)
        .wait(TIMERS.API_WAIT)
        .expect(await TaskPage.validateTasks())
        .ok()
    });