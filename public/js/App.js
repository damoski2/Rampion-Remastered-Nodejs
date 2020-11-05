/*$(window).on("load", function () {
  $(".loader-container").fadeOut(3000);
});
$("document").ready(function () {
    $("#down").click(function () {
      $("#p-1").toggle();
    });
    $("#down2").click(function () {
      $("#p-2").toggle();
    });
  });*/
  
//Animation on scroll
AOS.init({
    duration: 1200,
  });
  
  //Project images
  
  const span_details = document.querySelectorAll(".row a");
  console.log(span_details);
  
  span_details.forEach((item) => {
    let spanText = item.querySelector("span");
    item.addEventListener("mouseover", () => {
      spanText.style.display = "block";
    });
  
    item.addEventListener("mouseout", () => {
      spanText.style.display = "none";
    });
  });
  
  /*Number countdown*/
  var client_proj = document.getElementById("client_proj");
  var targetHeight = client_proj.clientHeight;
  console.log(targetHeight);
  
  
  var counter = 10,
    intervalID1,
    intervalID2;
  
  window.addEventListener('scroll',TimerCountDown)

  function TimerCountDown(){
    if(document.body.scrollTop>4000 || document.documentElement.scrollTop>3000){
      calcClient();
      calcProject();
      console.log("event listener gotten")
      window.removeEventListener('scroll',TimerCountDown);
    }
  }


  function calcClient() {
    var client_no = 100;
    intervalID1 = setInterval(() => {
      var client_value = document.getElementById("client_no").innerHTML;
      var res = Number(client_value) + counter;
      document.getElementById("client_no").innerHTML = res;
      Number(document.getElementById("client_no").innerHTML) == client_no? clearInterval(intervalID1): null;
    }, 100);
  }
  
  function calcProject() {
    var proj_no = 420;
    intervalID2 = setInterval(() => {
      var proj_value = document.getElementById("proj_no").innerHTML;
      var res = Number(proj_value) + counter;
      document.getElementById("proj_no").innerHTML = res;
      Number(document.getElementById("proj_no").innerHTML) == proj_no? clearInterval(intervalID2): null;
    }, 100);
  }
 

  var identity= false;
  
  //contact.addEventListener('click',(error)=>{  
   /* identity = !identity;
  
  switch(identity){
    case true:
      body.style.background ="#191919";
      backdrops.style.display="block";
      break;
  
    case false:
      backdrops.style.display="none"
      break;
  
    default:
      console.log(error);
  }*/
  //})
  
  
  //FAQ
  var faq_icon = document.getElementById("toggleFAQ");
  var faq_para = document.getElementById("faq_para");
  var faq_icon2 = document.getElementById("toggleFAQ2");
  var faq_para2 = document.getElementById("faq_para2");
  var boolToggle1 = false;
  var boolToggle2 = false;

  faq_icon.addEventListener('click',()=>{
    boolToggle1 = ! boolToggle1
    boolToggle1 == true? showFaq(faq_icon,faq_para): hideFaq(faq_icon,faq_para);
  });

  faq_icon2.addEventListener('click',()=>{
    boolToggle2 = ! boolToggle2;
    boolToggle2 == true? showFaq(faq_icon2,faq_para2) : hideFaq(faq_icon2,faq_para2);
  })

  function showFaq(para1,para2){
   para2.style.display = "block"; 
   para1.setAttribute("class","fa fa-chevron-up up");
  }

  function hideFaq(para1, para2){
    para2.style.display = "none";
    para1.setAttribute("class","fa fa-chevron-down down");
  }


  var contact_handle = document.getElementById("contact_link");
  var contactForm = document.getElementById("contacts");
  var backdrops = document.getElementById("backdrops");

  contact_handle.onclick = ()=>{
    backdrops.style.display ="block";
    contactForm.style.display ="flex";
  }

  backdrops.onclick= ()=>{
    contactForm.style.display="none";
    backdrops.style.display="none";
  }

  /*Scroll to top button */
  var buttonTop = document.getElementById("myBtn");

 window.onscroll = function(){
  scrollFunction();
 }

 function scrollFunction(){
  document.body.scrollTop>3500 || document.documentElement.scrollTop>3000? console.log("ddd"):null
  document.body.scrollTop>20 || document.documentElement.scrollTop>20? buttonTop.style.display="block" : buttonTop.style.display="none";
 }

  buttonTop.addEventListener('click',()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  });


  //Window onload rotate animation
  var sec =0;
  var phoneImg = document.getElementById("welcomeImg");
  var phoneImg2 = document.getElementById("goodbyeImg");
  var intervalID;

  function rotatePhone(){
    intervalID = setInterval(rotate,10);
  }

  function rotate(){
    console.log(sec)
    phoneImg.style.transform = `rotateY(${sec++}deg)`;
    phoneImg2.style.transform = `rotateY(${sec++}deg)`;

    //sec == 2360? clearInterval(intervalID):null
  }

  function stopRotate(){
    clearInterval(intervalID);
  }



  //Handling Form submission

  var form_sub  = document.getElementById("form_sub");
  var email = document.getElementById("email");
  var Name = document.getElementById("name");
  var message = document.getElementById("message");


  form_sub.addEventListener('submit',async (e)=>{
    e.preventDefault();
    var EmailVal = email.value;
    var NameVal = Name.value;
    var MesageValue = message.value;

    console.log(EmailVal,NameVal,MesageValue);

    await axios({
      method: "POST",
      url: "https://fast-waters-51761.herokuapp.com/",
      data: {
        name: NameVal,
        email: EmailVal,
        message: MesageValue,
      },
      headers:{
          'Content-Type':'application/json'
      }
    }).then(response=>{
      if(response.data.msg == "success"){
        alert("Message sent")
      }else if (response.data.msg === "fail") {
        alert("message failed to send");
      }
    });
  });