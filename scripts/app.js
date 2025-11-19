const toggle = document.getElementById('menu-toggle');

if(toggle){
    toggle.addEventListener('change',
        () =>{
            document.body.classList.toggle
            ("no-scroll", toggle.checked);
        } );
 }

const words = [
    " Just a beginner",
    " skilled in HTML",
    " skilled in CSS",
    " skilled in JavaScript"
];

const typingtext = document.getElementById("typing-span");

let wordindex =  0;
let charindex = 0;
let isdeleting = false;
let typingdelay = 100;
let erasingdelay = 100;
let nextworddelay = 1000;

const type = () =>{
    const currentword = words[wordindex];


    if(!isdeleting){
        typingtext.textContent = currentword.substring(0, charindex + 1);
        charindex++ ;

    
      if(charindex === currentword.length){
           isdeleting = true;
            setTimeout(type , erasingdelay);
     }else{
         setTimeout(type , typingdelay);
     }
    }else{
        typingtext.textContent = currentword.substring(0, charindex -1);
        charindex--;

        if(charindex === 0){
            isdeleting = false;
            wordindex = (wordindex + 1)% words.length;
            setTimeout(type , 500);
        }else{
            setTimeout(type , erasingdelay);
        }
    }
};

document.addEventListener('DOMContentLoaded',() =>{
    if(words?.length) type();
});
 
const navlinks =  document.querySelectorAll(".navlink");
const tabs =  document.querySelectorAll(".content");

navlinks.forEach((link) =>{
    link.addEventListener('click',(e) =>{
        e.preventDefault();

       navlinks.forEach((l) => {
        if(l === link){
            link.classList.add("active");
        }else{
            l.classList.remove("active");
        }
       });
       
         const tabname = link.dataset.tab;

        tabs.forEach((tab)=>{
            if(tab.id === tabname){
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }
        });

        if(tabname === "services"){
            const servicelist = [{
                id:1,
                icon: "ph-code",
                text: "Website Development",
                para: "I build responsive and modern websites uisng the latest technologies like HTML, CSS, JavaScriptf",
            },
            { 
                id:2,
                icon: "ph-paint-brush",
                text: "UX/UI Design",
                para: "Custom mobile apps for andriod and iOS using React Native and Expo , dsigned to provide excellent UI/UX and performance",
            },
            { 
                id:3,
                icon: "ph-trend-up",
                text: "SEO Optimization",
                para: "I improve website visibility on search engines with optimized structure, keywoeds, and performance best practices.",
            },
            { 
                id:4,
                icon: "ph-palette",
                text: "Graphic Design",
                para: "Offering expert advice and solutions for tech projects,  helping individuals planning and stack decisions.",
            },
            { 
                id:5,
                icon: "ph-video",
                text: "Mentorship & Training",
                para: "Offering expert advice and solutions for tech projects,  helping individuals planning and stack decisions.",
            },
            { 
                id:6,
                icon: "ph-camera",
                text: "Photography",
                para: "End-to-end delivery of freelance projects - from planning to deployment - with quality assurance and post.",
            }
        ];

        const services = document.getElementsByClassName("service-list");

        const innercontent = servicelist.map((l)=>{
            return ` 
                <div class="box" key=${l?.id}>
                    <div class="head-icons">
                      <i class="ph ${l?.icon}"></i>
                     <span>
                         <i class="ph ph-arrow-down-right"></i>
                     </span>
                    </div>
                    <h3>${l?.text}</h3>
                    <span class="spacer">
                        
                    </span>
                    <p>
                    ${l?.para}
                    </p>
                </div>
              
            `;
          
        }).join("");


        Array.from(services).forEach((ele)=>{
           ele.innerHTML = innercontent ;
        });
     }
      
     toggle.checked = false;
    });
});


