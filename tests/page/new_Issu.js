import { expect } from "@playwright/test"

export class new_issu{
    constructor(page){
        this.page=page
        this.link_admin=page.locator('.administration')
        this.link_projet=page.locator('.icon.icon-projects.projects')
        this.link_nv_demande=page.locator('.icon.icon-add.new-issue')
        this.selecttra=page.locator('#issue_tracker_id')
        this.selectprioriter=page.locator('#issue_priority_id')
        this.btnCree=page.locator('input[name="commit"]')
        this.inpute_sujet=page.locator('#issue_subject')
        this.input_description=page.locator('#issue_description')
        this.demande=page.locator(`//li/a[@class='issues']`)
        this.assertDemande=page.locator('#flash_notice')








    }
     getlinkProject(nameP){
        return this.page.locator(`//a[text()='${nameP}']`)
    }

    async selectionTracker(valeur){
        await this.selecttra.selectOption(valeur)

    }

    async selectprio(valeur){
        await this.selectprioriter.selectOption(valeur)
    }



    async creeDemande(nameP,vtracker,subject,descript,vprio){
        await this.getlinkProject(nameP)
        await this.link_admin.click()
        await this.link_projet.click()
        await this.getlinkProject(nameP).click()
        await this.demande.click()
        await this.link_nv_demande.click()
        await this.selectionTracker(vtracker)
        await this.inpute_sujet.fill(subject)
        await this.input_description.fill(descript)
        await this.selectprio(vprio)
        await this.btnCree.click()
        await expect(this.assertDemande).toBeVisible
    }







}