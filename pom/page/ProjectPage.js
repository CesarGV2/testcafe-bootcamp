import { Selector, t } from "testcafe";
import { TASKS } from "../data/Constants";
import commonpage from "../page/CommonPage"


class ProjectPage {
    constructor(){
        this.projectName = Selector('.simple_content').withExactText('Today');
        this.addTaskButton = Selector ('.plus_add_button')
        this.taskNameInput = Selector('.public-DraftStyleDefault-block')
        this.creatTaskButton = Selector('.reactist_button').withText('Add task')
        this.taskNameCreated = Selector('.markdown_content')
        this.taskDateOption = Selector('.item_due_selector')
        this.taskDateTomorrow = Selector('.scheduler-suggestions-item-label').withExactText('Tomorrow')
        this.tomorrowTasks = Selector('a').withText('Tomorrow')
        this.taskCreated = Selector('.task_list_item')
        this.moreActionsButton = Selector('.item_actions_more')
        this.deleteTaskButton = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.confirmationButtonModal = Selector('.ist_button_red')
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.projectColorDropdown = Selector('.color_dropdown_toggle')
        this.colorName = Selector('.color_dropdown_select__name')
        this.projectOptionsButton = Selector('[aria-label="Project options menu"]')
        this.deleteProjectOption = Selector('.icon_menu_item__content').withExactText('Delete project')
        this.favorite = Selector('.reactist_switch--checked')
        this.cancelButtonModal = Selector('.ist_button').withExactText('Cancel')
        this.editProjectOption = Selector('.icon_menu_item__content').withExactText('Edit project')
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
            .click(this.confirmationButtonModal) 
   
        }
    }    

    async createProject(projectname,projectcolor,projectfavoriteswitch){
        await t
        .click(commonpage.addProjectButton)
        .typeText(this.projectNameInput,projectname)
        .click(this.projectColorDropdown)
        .click(this.colorName.withExactText(projectcolor))

        if(projectfavoriteswitch === true){
        await t
        .click(this.addtoFavoriteSwitch)
        }

        await t
        .click(this.confirmationButtonModal)
        .click(commonpage.projectName.withExactText(projectname))
        .click(this.projectOptionsButton)
        .click(this.editProjectOption)
    }

    async deleteProject(){
        await t
        .click(this.cancelButtonModal)
        while(await commonpage.projectName.exists)
        {
       await t
        .click(commonpage.projectName)
        .click(this.projectOptionsButton)
        .click(this.deleteProjectOption)
        .click(this.confirmationButtonModal)
        }
    }
        


}

export default new ProjectPage;