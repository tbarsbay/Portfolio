import { getProjects } from '../api/projects';
import { getSkills } from '../api/skills';

export default class PortfolioService {

    static fetchSkills() {
        return Promise.resolve(getSkills());
    }

    static fetchProjects() {
        return Promise.resolve(getProjects());
    }
    
    static fetchProject({ id }) {
        return new Promise((resolve, reject) => {
            let projects = getProjects();
            let numProjects = projects.length;
            for (var i = 0; i < numProjects; i++) {
                let project = projects[i];
                if (project.id === id) {
                    resolve(project);
                }
            }
            resolve(null);
        });
    }
    
    //TODO this is shitty, replace this with sql and a server
    static fetchProjectsWithSkills({ skillIds }) {
        return new Promise((resolve, reject) => {
            let projects = getProjects();
            if (!skillIds || skillIds.length === 0) {
                resolve(projects);
                return;
            }
    
            let projectsToReturn = [];
            let numProjects = projects.length;
            let numSkills = skillIds.length;
            loop1:
                for (var i = 0; i < numProjects; i++) {
                    let project = projects[i];
                    let projectSkillIds = project.skills.map(skill => skill.id);
                    loop2:
                        for (var j = 0; j < numSkills; j++) {
                            let idToCheck = skillIds[j];
                            if (!projectSkillIds.includes(idToCheck)) {
                                console.log(`${project.title} doesnt have skill ${idToCheck}`)
                                continue loop1;
                            }
                        }
                    projectsToReturn.push(project);
                }
            resolve(projectsToReturn);
        });
    }

}