import projectpage from '../page/ProjectPage'
import {STANDARD_USER} from '../data/Roles'
import {TASKS} from '../data/Constants'

fixture.meta("test","createTask")('Create Task Tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
    })
    
    .afterEach(async (t) => {
        await projectpage.deleteTask()  
        await t
        .expect(projectpage.taskCreated.exists).notOk()
        .wait(2000)
    });
   

test.meta('type','smoke')("As a logged in user I should be able to create a task with today as due date", async (t) => {
    
    await projectpage.createTask(TASKS.TODAY_TASK_NAME, TASKS.TODAY_TASK_DATE)
    await t
        .expect(projectpage.taskNameCreatedToday.exists)
        .ok()
});

test.meta("type","regression")("As a logged in user I should be able to create a task with tomorrow as due date", async (t) => {
    await projectpage.createTask(TASKS.TOMORROW_TASK_NAME, TASKS.TOMORROW_TASK_DATE)
    await t
        .expect(projectpage.taskNameCreatedTomorrow.exists)
        .ok()
});

test.meta("type","regression")("As a logged in user I should be able to create 10 tasks with today as due date", async (t) => {
    await projectpage.createTask(TASKS.TODAY_TASK_NAME, TASKS.TODAY_TASK_DATE,10)
    await t
        .expect(projectpage.taskCreated.count).eql(10)
    });