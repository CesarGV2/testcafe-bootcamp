import { Selector} from "testcafe";

class UpcomingPage {
    constructor(){
        this.tomorrowTasks = Selector('a').withText('Tomorrow')
    }
}
export default new UpcomingPage