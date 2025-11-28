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
            position: "Fresher",
            company: "Self Learning",
            details:"Currently building projects and improving skills through personal practice."
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
            position: "Learning Cpp",
            company: "Self-Employed",
            details:""
          },
          {
            id:4,
            date: "2025-2026",
            position: "Learning Python",
            company: "Self-Employed",
            details:""
          },
          {
            id:5,
            date: "2025-2026",
            position: "More Updates Coming Soon",
            company: "Self-Learning",
            details:""
          },]
          

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
              date: "2022-2023",
              degree: "High School",
              institution: "S.T. Joseph`s Convent School NIT-5 ,FBD, HRY",
              details:"Completed my Class 10th from the CBSE Board.",
            },
            {
              id: 2,
              date: "2023-2025",
              degree: "Senior Secondary",
              institution: "Holy Child Public School SEC-75,FBD,HRY",
              details:"Completed my Class 10th from the CBSE Board.",
            },
            {
             id: 3,
             date: "2025-2029",
             degree: "B.Tech in CE-DS(Data Science",
             institution: "JC Bose University of Science & Technology, YMCA",
             details:"Currently pursuing B.Tech in Computer Engineering (CEDS).",
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
          icon: "html.svg"
        },
        {
          id:2,
          name: "CSS - ",
          icon: "css.png"
        },
        {
          id:3,
          name: "JS - ",
          icon: "jslogo1.webp"
        },
        {
          id:4,
          name: "PYTHON",
          icon: "py.png"
        },
        {
          id:5,
          name: "C++",
          icon: "c++.png"
        },
        {
          id:6,
          name: "GITHUB",
          icon: "github.jpg"
        },
        // {
        //   id:7,
        //   name: "REACT.js",
        //   icon: "assets/skills/node.png"
        // },
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
      }else if(activetab === "about-me"){
         const myinfo = document.querySelector(".my-info");

         const infolist = [
          {
           id: 1,
           key: "Name",
           value: "Prachi Garg",
          },
          {
           id: 2,
           key: "Country",
           value: "India",
          },
          {
           id: 3,
           key: "Industry : ",
           value: "Software & IT",
          },
          {
           id: 4,
           key: "Experience",
           value: "Fresher",
          },
          {
           id: 5,
           key: "Address : ",
           value: "H.No-146, SEC-23,FBD,HRY",
          },
         ];

         const infocontent = infolist.map((ele)=>{
          return`
            <div class="info-box" key=${ele?.id}>
            <span>${ele?.key}</span>
            <span>${ele?.value}</span>
            
            </div>
          `;
         }).join("");

         if(myinfo){
            myinfo.innerHTML = infocontent
         }
      }
    });
}); 