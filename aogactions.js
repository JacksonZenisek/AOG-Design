function no_enter(){
   document.getElementById("no_entry_desc_alt").style.display = "block";
}

function yes_enter(){
    let a = document.getElementById("form_disclaim_alt");
    if(a.style.display === "block"){
        a.style.display = "none";
    }else{
        a.style.display = "none";
    }
}

function alertthankyou() {
    document.body.innerHTML = '<br><br><br><p style="color:white;font-size:50px;text-align:center;"><br><br><br><br>Thank you for your review submission!<br><br>We appreciate you being a customer for AOG Design!</p>';
    setTimeout(() => {
  window.location.href = 'index.html';
  },2000);
  };

function ref_page(){
    const homebutton = document.getElementById("aog_img_alt");
        window.location.reload();
};

function proceed_to_form_page(){
    window.location = "index.php"
};

setInterval(featuredpicstimer, 1000);

function featuredpicstimer(){
    let a = document.getElementById("rec_work_box_1_alt");
    let b = document.getElementById("rec_work_box_2_alt");
    let c = document.getElementById("rec_work_box_3_alt");
    let d = document.getElementById("rec_work_box_4_alt");
    let e = document.getElementById("rec_work_box_5_alt");
    let f = document.getElementById("rec_work_box_6_alt");

    const featuredzone = new Date().getSeconds();

    if(featuredzone < 10){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else if (featuredzone > 10, featuredzone < 20){
        b.style.display = "block";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else if (featuredzone > 20, featuredzone < 30){
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else if (featuredzone > 30, featuredzone < 40){
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else if (featuredzone > 40, featuredzone < 50){
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
    }else{
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
};

function dis_serv_list(){
    let a = document.getElementById("options_container_alt");
    
    if(a.style.display === "none"){
        a.style.display = "block";
    }else{
        a.style.display = "none";
    }
};

function show_about_page(){
    let a = document.getElementById("main_about_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("main_serv_container_alt");
    let e = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
};

function show_gal_page(){
    let a = document.getElementById("gallery_main_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("main_serv_container_alt");
    let e = document.getElementById("main_about_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}

function gotoroofing(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
    document.body.scrollTop = 250;
    document.documentElement.scrollTop = 250;
};

function gotodrywall(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 950;
    document.documentElement.scrollTop = 950;
};

function gotoconcrete(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 1650;
    document.documentElement.scrollTop = 1650;
};

function gotoframing(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 2350;
    document.documentElement.scrollTop = 2350;
};

function gotopainting(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 3050;
    document.documentElement.scrollTop = 3050;
};

function gotoflooring(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 3750;
    document.documentElement.scrollTop = 3750;
};

function gotolandscape(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 4450;
    document.documentElement.scrollTop = 4450;
}

function gototile(){
    let a = document.getElementById("main_serv_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("options_container_alt");
    let e = document.getElementById("main_about_container_alt");
    let f = document.getElementById("gallery_main_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    document.body.scrollTop = 5150;
    document.documentElement.scrollTop = 5150;
}

window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    let bttbutton = document.getElementById("btt_button_alt");
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ){
        bttbutton.style.display = "block";
    }else{
        bttbutton.style.display = "none";
    }
}

function gototopofpage(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openmobilemenu() {
    document.getElementById("mobile_side_menu_alt").style.width = "550px";
  }
  
  function closemobilemenu() {
    document.getElementById("mobile_side_menu_alt").style.width = "0";
  }

  function showmobileabout(){
    let a = document.getElementById("main_about_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("gallery_main_container_alt");
    let e = document.getElementById("main_serv_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
  }

  function showmobilegallery(){
    let a = document.getElementById("gallery_main_container_alt");
    let b = document.getElementById("intro_heading_container_alt");
    let c = document.getElementById("home_page_container_alt");
    let d = document.getElementById("main_about_container_alt");
    let e = document.getElementById("main_serv_container_alt");

    if(a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}

function showmobileservices(){
        let a = document.getElementById("main_serv_container_alt");
        let b = document.getElementById("gallery_main_container_alt");
        let c = document.getElementById("intro_heading_container_alt");
        let d = document.getElementById("home_page_container_alt");
        let e = document.getElementById("main_about_container_alt");
    
        if(a.style.display === "none"){
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }else{
            a.style.display = "block";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
    }
}
