var color = document.querySelector(':root');
var decors = document.getElementsByClassName("decor");
let theme = 1;
function starify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "зірочка.gif";
    }
    document.getElementById("ttlimg").src = "titleImg1.png";
    theme = 1;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/зірки.gif)');
    color.style.setProperty('--window_bg','url(фони/водорості.gif)');
    color.style.setProperty('--main_clr', '#45cbe6');
    color.style.setProperty('--light_clr', '#a6efff');
    color.style.setProperty('--dark_clr', '#082a4d');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_зірочка.gif)');
    color.style.setProperty('--border1','url(краї/зірки.png)');
    color.style.setProperty('--border2','url(краї/краї.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}
function heartify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "серденько.gif";
    }
    document.getElementById("ttlimg").src = "titleImg2.png";
    theme = 2;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/серденька.gif)');
    color.style.setProperty('--window_bg','url(фони/танець_серця.gif)');
    color.style.setProperty('--main_clr', '#f26185');
    color.style.setProperty('--light_clr', '#ff8c97');
    color.style.setProperty('--dark_clr', '#4d0842');
    color.style.setProperty('--lightest', '#ffe2d9');
    color.style.setProperty('--white_decor','url(біле_серденько.gif)');
    color.style.setProperty('--border1','url(краї/серця.png)');
    color.style.setProperty('--border2','url(краї/краї2.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}
function smilify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "мармизка.gif";
    }
    document.getElementById("ttlimg").src = "titleImg3.png";
    theme = 3;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/мармизки.gif)');
    color.style.setProperty('--window_bg','url(фони/емоджі.gif)');
    color.style.setProperty('--main_clr', '#cc843e');
    color.style.setProperty('--light_clr', '#ffe666');
    color.style.setProperty('--dark_clr', '#802b1a');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_мармизка.gif)');
    color.style.setProperty('--border1','url(краї/стрілочки.png)');
    color.style.setProperty('--border2','url(краї/краї3.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}
function dropify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "крапелька.gif";
    }
    document.getElementById("ttlimg").src = "titleImg4.png";
    theme = 4;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/крапельки.gif)');
    color.style.setProperty('--window_bg','url(фони/море.gif)');
    color.style.setProperty('--main_clr', '#7373e6');
    color.style.setProperty('--light_clr', '#a6c4ff');
    color.style.setProperty('--dark_clr', '#36084d');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_крапелька.gif)');
    color.style.setProperty('--border1','url(краї/краплі.png)');
    color.style.setProperty('--border2','url(краї/краї4.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}
function plantify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "листочок.gif";
    }
    document.getElementById("ttlimg").src = "titleImg5.png";
    theme = 5;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/травичка.gif)');
    color.style.setProperty('--window_bg','url(фони/паросток.gif)');
    color.style.setProperty('--main_clr', '#59bf26');
    color.style.setProperty('--light_clr', '#daf261');
    color.style.setProperty('--dark_clr', '#1e5900');
    color.style.setProperty('--lightest', '#fff2b2');
    color.style.setProperty('--white_decor','url(білий_листочок.gif)');
    color.style.setProperty('--border1','url(краї/рослини.png)');
    color.style.setProperty('--border2','url(краї/краї5.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}
function catify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "киця.gif";
    }
    document.getElementById("ttlimg").src = "titleImg6.png";
    theme = 6;
    document.getElementById("mrpd_img").src = "лоґо/" + theme + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + theme + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + theme + "/наліпки.gif";
    document.getElementById("gms_img").src = "лоґо/" + theme + "/забавки.gif";
    color.style.setProperty('--bg','url(фони/киці.gif)');
    color.style.setProperty('--window_bg','url(фони/Анялу.gif)');
    color.style.setProperty('--main_clr', '#d96ca3');
    color.style.setProperty('--light_clr', '#ffb2f2');
    color.style.setProperty('--dark_clr', '#4d0842');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_киця.gif)');
    color.style.setProperty('--border1','url(краї/котики.png)');
    color.style.setProperty('--border2','url(краї/краї6.png)');
    document.getElementById("strs_img").src = "лоґо/" + theme + "/історії_lat" + ".gif";
}