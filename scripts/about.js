const abouttabs = document.querySelectorAll(".tab");

const aboutcontent = document.querySelectorAll(".tab-content");

document.addEventListener(
    'DOMContentLoaded' , ()=>{
      if(abouttabs){
        abouttabs[0].click();
      }

})

abouttabs.forEach((tab)=>{
    tab.addEventListener("click" ,(e)=>{
        e.preventDefault();

        abouttabs.forEach((a)=>{
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutcontent.forEach((c) =>{
            c.classList.remove("active");
        });

        const activetab = tab.dataset.section;

        document.getElementById(activetab).classList.add("active");

        if(activetab === "experience"){
            const experiences = document.querySelector(".experience-list");

          const experiencelist = [
          {
            id:1,
            date: "2025-2026",
            position: "Freelance Web Developer",
            company: "Self-Employed",
            details:""
          },
          {
            id:2,
            date: "2025-2026",
            position: "Frontend Developer",
            company: "Self-Employed",
            details:""
          },
          {
            id:3,
            date: "2025-2026",
            position: "Freelance Web Developer",
            company: "Self-Employed",
            details:""
          },
        ];

        const experiencecontent = experiencelist.map((ele)=>{
            return`
            <div class="experience-box"  key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                       <p>${ele?.details}</p>
                    </div>
            `;
        })
        .join("");

        if(experiences){
          experiences.innerHTML = experiencecontent ;
        }
        }else if(activetab === "education"){
           const education = document.querySelector(".education-list");

           const educationlist = [
            {
              id: 1,
              date: "2020-2023",
              degree: "Bachelor of Computer Applications (BCA)",
              institution: "CS UNIVERSIYT, dehradun",
              details:"studied core subjects like data structures, web dev, and operating systems. built multiple academic projects using JavaScript and the MERN stack.",
            },
            {
              id: 2,
              date: "2020-2023",
              degree: "Bachelor of Computer Applications (BCA)",
              institution: "CS UNIVERSIYT, dehradun",
              details:"studied core subjects like data structures, web dev, and operating systems. built multiple academic projects using JavaScript and the MERN stack.",
            },
            {
             id: 3,
             date: "2020-2023",
             degree: "Bachelor of Computer Applications (BCA)",
             institution: "CS UNIVERSIYT, dehradun",
             details:"studied core subjects like data structures, web dev, and operating systems. built multiple academic projects using JavaScript and the MERN stack.",
            },
          ]; 

          const educationcontent = educationlist.map((ele)=>{
            return`
             <div class="experience-box"  key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                       <p>${ele?.details}</p>
                    </div>
            `;
        })
        .join(""); 
            

        if(education){
          education.innerHTML = educationcontent;
        }
      }else if(activetab === "skills"){ 
        const skills = document.querySelector('.skill-list'); 
        const skilllist = [{
          id:1,
          name: "HTML - Hyper Text Markup Language",
          icon: "html.png"
        },
        {
          id:2,
          name: "CSS - ",
          icon: "css.png"
        },
        {
          id:3,
          name: "JS - ",
          icon: "js 1.png"
        },
        {
          id:4,
          name: "PYTHON",
          icon: "py.png"
        },
        {
          id:5,
          name: "C++",
          icon: "assets/skills/node.png"
        },
        {
          id:6,
          name: "GITHUB",
          icon: "assets/skills/node.png"
        },
        {
          id:7,
          name: "REACT.js",
          icon: "assets/skills/node.png"
        },
         ];
        
         const skillcontent = skilllist.map((ele)=>{
          return`
           <div class="skill-box" key=${ele?.id}>
            <img src="${ele?.icon}" alt="${ele?.name}"
             tittle="${ele?.name}" 
             loading="lazy">
          </div>
          `;
         }).join("");

         if(skills){
          skills.innerHTML = skillcontent;
         }
      }
    });
}); 