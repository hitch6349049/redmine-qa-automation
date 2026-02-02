import { expect } from "@playwright/test"

export class CreeProjet{
    constructor(page){
        this.page=page
        this.link_projet=page.getByRole('link', { name: 'Projects' })
        this.link_nv_projet=page.locator('.icon.icon-add')
        this.input_nameP=page.locator('#project_name')
        this.input_descripte=page.locator('#project_description')
        this.input_ident=page.locator('#project_identifier')
        this.chekbox=page.locator('#project_is_public')
        this.btn_cree=page.locator('input[name="commit"]')
        this.assert_project=page.locator('#flash_notice')

    }

    async CaseCocher(active){
        if(active){

            await this.chekbox.check()

        }else{

            await this.chekbox.uncheck()
        }

    }

    async newProject(nameP,description,option){

        await this.link_projet.click()
        await this.link_nv_projet.click()
        await this.input_nameP.fill(nameP)
        await this.input_descripte.fill(description)
        await this.input_ident.fill(nameP)
        await this.CaseCocher(option)
        await this.btn_cree.click()
        await expect(this.assert_project).toBeVisible()

    }















}