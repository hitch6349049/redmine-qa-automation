import { expect } from "@playwright/test";

export class CreateProject {
    constructor(page) {
        this.page = page;

        // Liens et boutons
        this.linkProjects = page.getByRole('link', { name: 'Projects' });
        this.linkNewProject = page.locator('.icon.icon-add');
        this.inputName = page.locator('#project_name');
        this.inputDescription = page.locator('#project_description');
        this.inputIdentifier = page.locator('#project_identifier');
        this.checkboxPublic = page.locator('#project_is_public');
        this.btnCreate = page.locator('input[name="commit"]');
        this.projectNotice = page.locator('#flash_notice');
    }

    // Cocher ou décocher la case "Public"
    async togglePublic(active) {
        if (active) {
            await this.checkboxPublic.check();
        } else {
            await this.checkboxPublic.uncheck();
        }
    }

    // Créer un projet
    async newProject(name, description, isPublic) {
        // Aller à la liste des projets
        await this.linkProjects.click();

        // Cliquer sur "New Project"
        await this.linkNewProject.click();

        // Remplir le formulaire
        await this.inputName.fill(name);
        await this.inputDescription.fill(description);
        await this.inputIdentifier.fill(name); // Peut être modifié pour un identifiant unique

        // Cocher ou décocher "Public"
        await this.togglePublic(isPublic);

        // Cliquer sur créer
        await this.btnCreate.click();

        // Vérifier que le projet a été créé
        await expect(this.projectNotice).toBeVisible();
    }
}