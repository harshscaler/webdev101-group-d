let projects = []

// create 
function createProject(name){
    let tickets = []

    projects.push(
        {
            name,
            tickets
        }
    )
}


// dom

let projectList = document.querySelector(".projects");
let projectNameInput = document.querySelector(".project-name");
let createProjectBtn = document.querySelector(".create-project");

// create a project node 

function createProjectNode(name){
    let projectNode = document.createElement("li");
    projectNode.innerText = name;
    return projectNode;
}

// render projects
function renderProjects(name){
    let projectNode = createProjectNode(name);
    projectList.appendChild(projectNode);
}

createProjectBtn.addEventListener('click' , () => {
    let projectName = projectNameInput.value;
    createProject(projectName);

    console.log(projects);

    renderProjects(projectName)
})

