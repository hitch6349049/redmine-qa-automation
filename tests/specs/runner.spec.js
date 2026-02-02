/** @type {import('@playwright/test').Locator} */

import { test } from '@playwright/test';
import {LoginRedmain} from '../page/Login'
import {CreeProjet} from  '../page/new_project'
import {DeleteProject} from '../page/delet_project'
import {new_issu} from '../page/new_Issu'
import PrjectData from '../dataPool/PrjectData.json'

test.describe('creation projetJson',()=>{
    PrjectData.forEach((creatProject)=>{
        test(`creation projet ${creatProject.name}`,async({page})=>{
             const login = new LoginRedmain(page)
             const nvProject = new CreeProjet(page)
             const deleteProject = new DeleteProject(page)

              await page.goto('http://192.168.2.45/login')
              await login.connecter('TAALBIH', '12HT6i8o$$')

              await nvProject.newProject(
                 creatProject.name,
                 creatProject.description,
                 creatProject.public
      )


      await deleteProject.supprimProject(creatProject.name)












        })







    })













})