import { expect } from "@playwright/test";

export class DeleteProject {
    constructor(page) {
        this.page = page;

        // Liens et boutons dans l'interface Redmine
        this.linkAdmin = page.locator('.administration');
        this.linkProjects = page.locator('.icon.icon-projects.projects');
        this.btnDelete = page.locator('.icon.icon-del');
        this.inputConfirm = page.locator('#confirm');
        this.btnConfirmDelete = page.locator('input[name="commit"]');
        this.deleteNotice = page.locator('#flash_notice');
    }

    // Retourne le bouton de suppression du projet avec le nom donné
    getProjectDelete(name) {
        return this.page.locator(`//a[text()='${name}']/../../td[@class='buttons']/a`);
    }

    // Supprime le projet et vérifie que l'alerte de succès apparaît
    async deleteProject(name) {
        // Aller à l'administration
        await this.linkAdmin.click();

        // Aller à la liste des projets
        await this.linkProjects.click();

        // Cliquer sur le projet à supprimer
        await this.getProjectDelete(name).click();

        // Cliquer sur le bouton supprimer
        await this.btnDelete.click();

        // Confirmer le nom du projet
        await this.inputConfirm.fill(name);

        // Confirmer la suppression
        await this.btnConfirmDelete.click();

        // Vérifier que la notification de succès est visible
        await expect(this.deleteNotice).toBeVisible();
    }
}