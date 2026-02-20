import { test } from '@playwright/test';
import 'dotenv/config';
import { LoginRedmain } from '../page/loginRedmine'
import { CreateProject } from '../page/createProject'
import { DeleteProject } from '../page/deleteProject'
import ProjectData from '../dataPool/ProjectData.json'

test.describe('Création de projets depuis JSON', () => {
    ProjectData.forEach((project) => {
        test(`Créer et supprimer le projet ${project.name}`, async ({ page }) => {
            const login = new LoginRedmain(page)
            const nvProject = new CreateProject(page)
            const deleteProject = new DeleteProject(page)

            // Aller à la page de login
            await page.goto('http://192.168.2.45/login')

            // Se connecter avec identifiants sécurisés
            await login.connecter(process.env.REDMAIN_USER, process.env.REDMAIN_PASSWORD)

            // Créer un projet
            await nvProject.newProject(project.name, project.description, project.public)

            // Supprimer le projet après test pour nettoyage
            await deleteProject.deleteProject(project.name)
        })
    })
})