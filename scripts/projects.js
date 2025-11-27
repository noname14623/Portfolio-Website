const projectlist = [
    {
        id:1,
        number: "01",
        title: "Amazon clone",
        description: "A simple Amazon homepage clone built using HTML and CSS, focusing on layout structure and responsive design.",
        techstack: ["HTML , CSS"],
        image: "amazonclone.png ",
        livelink:"https://noname14623.github.io/AMAZONCLONE/",
        githublink: "https://github.com/noname14623/AMAZONCLONE",
    },
    {
        id:2,
        number: "02",
        title: "Basic Projects",
        description: "A collection of small JavaScript projects including QR generator, calculator, and tic-tac-toe, built to practice logic and UI interaction.",
        techstack: ["HTML , CSS ,JS"],
        image: "jsprojects.jpg",
        livelink:"https://noname14623.github.io/QR-CODE-GENERATOR/",
        githublink: " https://github.com/#:~:text=noname14623/QR,TIC%2DTAC%2DTOE ",
    },
    {
        id:3,
        number: "03",
        title: "Portfolio-Website",
        description: "A personal portfolio website showcasing my skills, projects, and experience, designed with a clean and modern UI.",
        techstack: ["HTML , CSS ,JS"],
        image: "portfolioweb.png",
        livelink:"https://noname14623.github.io/Portfolio-Website/",
        githublink: "https://github.com/noname14623/Portfolio-Website",
    },
]
 
const projects = document.querySelector(".projects");

let currentindex = 0;

const renderproject = (index) =>{
    const projectcontent = projectlist[index];

    const previousdisabled = currentindex === 0;

    const nextdisabled = currentindex === projectlist.length - 1;

    projects.innerHTML = `
     <div class="project-info">
     <h3>${projectcontent?.number}</h3>
     <h4>${projectcontent?.title }</h4>
     <p>${projectcontent?.description}</p>
     <div class="tech-stack">
     ${
        projectcontent?.techstack?.map((tech , i)=>{
            return`
              <span key ="${i}">${tech}</span>
            `;
        })
        .join(",")}
     </div>
     <hr />
     <div class="links">
     <a href="${projectcontent?.livelink}">
     <i class="ph ph-arrow-right"></i>
     </a>
     <a href="${projectcontent?.githublink}">
     <i class="ph ph-github-logo"></i>
     </a>
     </div>
     </div>
     <div class="carousel">
                    <img src="${projectcontent?.image}" alt="${projectcontent?.title}"/>
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousdisabled?"disabled-btn": ""
                        }>
                            <i class="ph ph-caret-left"> </i>
                        </a>
                        <a href="#" id="next" class=${nextdisabled?"disabled-btn": ""}>
                            <i class="ph ph-caret-right"> </i>
                        </a>
                    </div>

                </div>
    `;


    document.getElementById('previous').addEventListener("click",(e) => {
        e.preventDefault();

        if(currentindex > 0) {
            currentindex--;
            renderproject(currentindex);
        }
    });

     document.getElementById('next').addEventListener("click",(e) => {
        e.preventDefault();

        if(currentindex <  projectlist.length -1) {
            currentindex++;
            renderproject(currentindex);
        }
    });
}; 

renderproject(currentindex);
 
 