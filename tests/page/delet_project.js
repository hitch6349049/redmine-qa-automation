import { expect } from "@playwright/test"

export class DeleteProject{
    constructor(page){
        this.page=page
        this.link_admin=page.locator('.administration')
        this.link_projet=page.locator('.icon.icon-projects.projects')
        this.btn_supprimer=page.locator('.icon.icon-del')
        this.input_confirme=page.locator('#confirm')
        this.btn_supp_final=page.locator('input[name="commit"]')
        this.assertDelet=page.locator('#flash_notice')
        



    }

    getProjectDelete(nameP){
        return this.page.locator(`//a[text()='${nameP}']/../../td[@class='buttons']/a`)
        
    }



    async supprimProject(nameP){
        await this.link_admin.click()
        await this.link_projet.click()
        await this.getProjectDelete(nameP).click()
        await this.btn_supprimer.click()
        await this.input_confirme.fill(nameP)
        await this.btn_supp_final.click()
        await expect(this.assertDelet).toBeVisible()




    }

 



















}