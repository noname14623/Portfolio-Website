const media = document.querySelector(".contact-media");

const contactlist = [
    {
        id: 1,
        icon: "ph ph-phone-call" ,
        name: "Phone" ,
        value: "+91 96251XXXXX",
        href: "tel:+9196251XXXXX"
    },
    {
        id: 2,
        icon: "ph ph-envelope" ,
        name: "E-Mail" ,
        value: "noname14623@gmail.com",
        href: "mailto:noname14623@gmail.com"
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area" ,
        name: "Country" ,
        value: "India",
        href: "#",
    },
];

const contactcontent = contactlist.map((ele)=>{
    return`
      <div class="media" key=${ele?.id}>
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href="${ele?.href}">${ele?.value}</a>
                        </div>
                       
                    </div>
    `
})
.join("");

if(media) media.innerHTML = contactcontent;

const sendbtn = document.querySelector("#send-msg");

const originaltext = sendbtn.innerHTML;

const originalstyle = {
    backgroundColor:sendbtn.style.backgroundColor,
    color:sendbtn.style.color,
    border:sendbtn.style.border,
    boxshadow:sendbtn.style.boxshadow,
};


document.getElementById('contact-form').addEventListener("submit",(event)=>{
    event.preventDefault();

    sendbtn.innerHTML = 'Sending...';
    sendbtn.style.backgroundColor = "gray";
    sendbtn.style.color = "white";
    sendbtn.style.border = "none";
    sendbtn.style.boxshadow = "none";


    sendbtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if(!name || !email || !phone || !message){
        sendbtn.innerHTML = originaltext;
        Object.assign(sendbtn.style,originalstyle);

        sendbtn.disabled = true;
        
        return Toastify({
         text: "All Fields are Mandatoryo !",
         duration: 3000,
        
         gravity: "top", 
         position: "center",
         close: true,
         stopOnFocus: true, 
         style: {
         background: "rgb(206,16,16)",
         },
         }).showToast();
        }
   
    emailjs.send("service_0ws8jbq" , "template_09ki4dm" , {
        name,
        email,
        phone,
        message,
    }).then(
        () => {     
         Toastify({
         text: "Message Sent!",
         duration: 3000,
         gravity: "top", 
         position: "center",
         close: true,
         stopOnFocus: true, 
         style: {
         background: "rgba(193, 202, 194, 1)",
         },
         }).showToast();


         setTimeout(()=>{
            sendbtn.innerHTML = originaltext;
            Object.assign(sendbtn.style, originalstyle);

            sendbtn.disabled = false;
         },2000);
        }, (error) => {
                         Toastify({
         text: "Message Not Sent!",
         duration: 3000,
         gravity: "top", 
         position: "center",
         close: true,
         stopOnFocus: true, 
         style: {
         background: "rgb(206,16,16)",
         },
         }).showToast();
            setTimeout(()=>{
            sendbtn.innerHTML = originaltext;
            Object.assign(sendbtn.style, originalstyle);

            sendbtn.disabled = false;
         },2000);
                        console.log('FAILED...', error);
                    });
    });
