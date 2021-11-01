import {Selector} from 'testcafe'


class CommonPage {
    constructor(){
        this.inbox = Selector('#filter_inbox')
        this.upcoming = Selector('#filter_upcoming')
        this.addProjectButton = Selector('[aria-label="Add Project"]')
        this.projectName = Selector('.name')
        this.confirmationButtonModal = Selector('.ist_button_red')
        this.cancelButtonModal = Selector('.ist_button').withExactText('Cancel')
    }
}

export default new CommonPage;