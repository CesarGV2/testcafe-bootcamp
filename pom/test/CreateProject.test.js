import projectpage from '../page/ProjectPage'
import {STANDARD_USER} from '../data/Roles'
import { test } from 'testcafe';
import {PROJECTS,TIMERS} from '../data/Constants'
import commonpage from '../page/CommonPage'

fixture.meta('test','createProject')('Create Project Tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
    })
    
    .afterEach(async (t) => {
        // delte the project created
        await projectpage.deleteProject()
        await t
            .wait(TIMERS.API_WAIT)
            .expect(projectpage.projectName.exists)
            .notOk()
    })

    test.meta('type','smoke')('As a logged in user I should be able to create a new project,select a color and add it to \'Favorites\'', async (t) => {
        await projectpage.createProject(PROJECTS.PROJECT_NAME,PROJECTS.PROJECT_COLOR,PROJECTS.FAVORITE_SWITCH)
        await t
            .expect(projectpage.favorite.exists)
            .ok()
            .expect(projectpage.colorName.exists)
            .ok()

    });