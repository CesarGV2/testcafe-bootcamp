import {Selector} from 'testcafe'


class CommonPage {
    constructor(){
        this.inbox = Selector('#filter_inbox')
        this.upcoming = Selector('#filter_upcoming')
        this.addProjectButton = Selector('[aria-label="Add Project"]')
    }
}

export default new CommonPage;