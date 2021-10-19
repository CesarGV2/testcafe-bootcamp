import { Selector, t } from "testcafe";
import {TASKS,PROJECTS} from '../data/Constants'
import commonpage from "../page/CommonPage"

class ProjectPage {
    constructor(){
        this.projectName = Selector('.simple_content').withExactText('Today');
        this.addTaskButton = Selector ('.plus_add_button')
        this.taskNameInput = Selector('.public-DraftStyleDefault-block')
        this.creatTaskButton = Selector('.reactist_button').withText('Add task')
        this.taskNameCreatedToday = Selector('.markdown_content').withExactText(TASKS.TODAY_TASK_NAME)
        this.taskDateOption = Selector('.item_due_selector')
        this.taskDateTomorrow = Selector('.scheduler-suggestions-item-label').withExactText('Tomorrow')
        this.tomorrowTasks = Selector('a').withText('Tomorrow')
        this.taskNameCreatedTomorrow = Selector('.markdown_content').withExactText(TASKS.TOMORROW_TASK_NAME)
        this.taskCreated = Selector('.task_list_item')
        this.moreActionsButton = Selector('.item_actions_more')
        this.deleteTaskButton = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.confirmationButtonModal = Selector('.ist_button_red')
        this.projectNameInput = Selector('#edit_project_modal_field_name')
        this.addtoFavoriteSwitch = Selector('.reactist_switch')
        this.projectColorDropdown = Selector('.color_dropdown_toggle')
        this.colorName = Selector('.color_dropdown_select__name').withExactText('Teal')
        this.favoriteProject = Selector('[data-type="project_list_item"]').withText(PROJECTS.PROJECT_NAME)
        this.projectOptionsButton = Selector('[aria-label="Project options menu"]')
        this.deleteProjectOption = Selector('.icon_menu_item__content').withExactText('Delete project')
        this.favorite = Selector('.reactist_switch--checked')
        this.cancelButtonModal = Selector('.ist_button').withExactText('Cancel')
        this.editProjectOption = Selector('.icon_menu_item__content').withExactText('Edit project')
    }

    async createTask(taskname,date,numberOfTask = 1) {
        await t
        .click(this.addTaskButton)
        .wait(500)

        if(date==='Today'){
            for(let i=0; i< numberOfTask; i++)
            {
                await t
                .typeText(this.taskNameInput,taskname,{paste:true})
                .click(this.creatTaskButton)
            }

        } else{
            for(let i=0; i< numberOfTask; i++)
            {
                await t
                .typeText(this.taskNameInput,taskname,{paste:true})
                .click(this.taskDateOption) 
                .click(this.taskDateTomorrow) 
                .click(this.creatTaskButton) 
            }
            await t
               
                .click(commonpage.upcoming)
                .click(this.tomorrowTasks) 
           }
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

    async createProject(projectname){
        await t
        .click(commonpage.addProjectButton)
        .typeText(this.projectNameInput,projectname)
        .click(this.projectColorDropdown)
        .click(this.colorName)
        .click(this.addtoFavoriteSwitch)
        .click(this.confirmationButtonModal)
        .click(this.favoriteProject)
        .click(this.projectOptionsButton)
        .click(this.editProjectOption)
    }

    async deleteProject(){
       await t
        .click(this.cancelButtonModal)
        .click(this.favoriteProject)
        .click(this.projectOptionsButton)
        .click(this.deleteProjectOption)
        .click(this.confirmationButtonModal)
        .wait(900)
    }
        


}

export default new ProjectPage;