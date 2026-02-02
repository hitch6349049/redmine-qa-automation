import { expect } from "@playwright/test"

export class LoginRedmain{

    constructor(page){
        this.page=page
        this.input_user=page.locator('#username')
        this.input_password=page.locator('#password')
        this.btn_connexion=page.locator('#login-submit')
        this.btn_deconnecter=page.locator('.logout')
        
    }



    async connecter(user,password){
        await this.input_user.fill(user)
        await this.input_password.fill(password)
        await this.btn_connexion.click()
        await expect(this.page.getByRole('link', { name: user })).toHaveText(user)

    }
    async Deconnecter(){
        await this.btn_deconnecter.click()

    }

























}