import projectpage from '../page/ProjectPage'
import {STANDARD_USER} from '../data/Roles'
import {TASKS,TIMERS} from '../data/Constants'
import commonpage from '../page/CommonPage'

fixture.meta('test','createTask')('Create Task Tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
    })
    
    .afterEach(async (t) => {
        await projectpage.deleteTask()  
        await t
        .expect(projectpage.taskCreated.exists).notOk()
        .wait(TIMERS.API_WAIT)
    });
   

test.meta('type','smoke')('As a logged in user I should be able to create a task with today as due date', async (t) => {
    
    await projectpage.createTask(TASKS.TODAY_TASK_NAME, TASKS.TODAY_TASK_DATE)
    await t
        .expect(projectpage.taskNameCreated.withExactText(TASKS.TODAY_TASK_NAME).exists)
        .ok()
        .wait(TIMERS.API_WAIT)
});

test.meta('type','regression')('As a logged in user I should be able to create a task with tomorrow as due date', async (t) => {
    await projectpage.createTask(TASKS.TOMORROW_TASK_NAME, TASKS.TOMORROW_TASK_DATE)
    await t
        .click(commonpage.upcoming)
        .click(projectpage.tomorrowTasks) 
        .expect(projectpage.taskNameCreated.withExactText(TASKS.TOMORROW_TASK_NAME).exists)
        .ok()
        .wait(TIMERS.API_WAIT)
});

test.meta('type','regression')('As a logged in user I should be able to create 10 tasks with today as due date', async (t) => {
    await projectpage.createManyTask(TASKS.NUMBER_OF_TASK)
    await t
        .expect(projectpage.taskCreated.count).eql(TASKS.NUMBER_OF_TASK)
        .wait(TIMERS.API_WAIT)
        .expect(await projectpage.validateTasks())
        .ok()
    });