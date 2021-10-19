import projectpage from '../page/ProjectPage'
import {STANDARD_USER} from '../data/Roles'
import { test } from 'testcafe';
import {PROJECTS} from '../data/Constants'
import commonpage from '../page/CommonPage'

fixture.meta('test','createProject')('Create Project Tests')
    .beforeEach(async (t) => {
        await t.useRole(STANDARD_USER)
    })
    
    .afterEach(async (t) => {
        await projectpage.deleteProject()
        await t
        .expect(projectpage.favoriteProject.exists)
        .notOk()
    })

    test.meta('type','smoke')("As a logged in user I should be able to create a new project,select a color and add it to 'Favorites'", async (t) => {
        await projectpage.createProject(PROJECTS.PROJECT_NAME)
        await t
            .expect(projectpage.favorite.exists)
            .ok()
            .expect(projectpage.colorName.exists)
            .ok()

    });