import { Selector, t } from "testcafe";
import { TASKS } from "../data/Constants";
import commonpage from "../page/CommonPage"

class TaskPage{
    constructor(){
        this.projectName = Selector('.simple_content').withExactText('Today');
        this.addTaskButton = Selector ('.plus_add_button')
        this.taskNameInput = Selector('.public-DraftStyleDefault-block')
        this.creatTaskButton = Selector('.reactist_button').withText('Add task')
        this.taskNameCreated = Selector('.markdown_content')
        this.taskDateOption = Selector('.item_due_selector')
        this.taskDateTomorrow = Selector('.scheduler-suggestions-item-label').withExactText('Tomorrow')
        
        this.taskCreated = Selector('.task_list_item')
        this.moreActionsButton = Selector('.item_actions_more')
        this.deleteTaskButton = Selector('.icon_menu_item__content').withExactText('Delete task')
    }

    async createTask(taskname,date) {
        await t
        .click(this.addTaskButton)
        .typeText(this.taskNameInput,taskname,{paste:true})
        if(date==='Today'){
                await t
                .click(this.creatTaskButton)

        } else{
                await t
                .click(this.taskDateOption) 
                .click(this.taskDateTomorrow) 
                .click(this.creatTaskButton) 
            }
    }

    async createManyTask(numberOfTask){
       await t.click(this.addTaskButton)
        for(let i=0; i< numberOfTask; i++)
        {
            await t
            .typeText(this.taskNameInput,TASKS.DYNAMIC_TASK_NAME + i,{paste:true})
            .click(this.creatTaskButton)

        }
    }

    async validateTasks(){   
        const tasksCreated = await this.taskNameCreated.count  
     for (let i = 0; i < tasksCreated; i++) {
           await t
           .expect(this.taskCreated.nth(i).innerText).contains(TASKS.DYNAMIC_TASK_NAME + i)
     }
     return true
    }

    async deleteTask(){
        while(await this.taskCreated.exists)
        {
            await t
            .click(this.taskCreated.nth(0))
            .click(this.moreActionsButton)
            .click(this.deleteTaskButton)
            .click(commonpage.confirmationButtonModal) 
   
        }
    }    

}

export default new TaskPage