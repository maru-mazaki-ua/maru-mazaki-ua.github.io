var color = document.querySelector(':root');
var decors = document.getElementsByClassName("decor");
var folder = 0;
function starify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "зірочка.gif";
    }
    document.getElementById("ttlimg").src = "titleImg1.png";
    folder = 1;
    document.getElementById("strs_img").src = "лоґо/" + folder + "/історії.gif";
    document.getElementById("mrpd_img").src = "лоґо/" + folder + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + folder + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + folder + "/наліпки.gif";
    color.style.setProperty('--bg','url(фони/зірки.gif)');
    color.style.setProperty('--window_bg','url(фони/водорості.gif)');
    color.style.setProperty('--main_clr', '#45cbe6');
    color.style.setProperty('--light_clr', '#a6efff');
    color.style.setProperty('--dark_clr', '#082a4d');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_зірочка.gif)');
    color.style.setProperty('--border1','url(краї/зірки.png)');
    color.style.setProperty('--border2','url(краї/краї.png)');
}
function heartify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "серденько.gif";
    }
    document.getElementById("ttlimg").src = "titleImg2.png";
    folder = 2;
    document.getElementById("strs_img").src = "лоґо/" + folder + "/історії.gif";
    document.getElementById("mrpd_img").src = "лоґо/" + folder + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + folder + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + folder + "/наліпки.gif";
    color.style.setProperty('--bg','url(фони/серденька.gif)');
    color.style.setProperty('--window_bg','url(фони/танець_серця.gif)');
    color.style.setProperty('--main_clr', '#f26185');
    color.style.setProperty('--light_clr', '#ff8c97');
    color.style.setProperty('--dark_clr', '#4d0842');
    color.style.setProperty('--lightest', '#ffe2d9');
    color.style.setProperty('--white_decor','url(біле_серденько.gif)');
    color.style.setProperty('--border1','url(краї/серця.png)');
    color.style.setProperty('--border2','url(краї/краї2.png)');
}
function smilify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "мармизка.gif";
    }
    document.getElementById("ttlimg").src = "titleImg3.png";
    folder = 3;
    document.getElementById("strs_img").src = "лоґо/" + folder + "/історії.gif";
    document.getElementById("mrpd_img").src = "лоґо/" + folder + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + folder + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + folder + "/наліпки.gif";
    color.style.setProperty('--bg','url(фони/мармизки.gif)');
    color.style.setProperty('--window_bg','url(фони/емоджі.gif)');
    color.style.setProperty('--main_clr', '#cc843e');
    color.style.setProperty('--light_clr', '#ffe666');
    color.style.setProperty('--dark_clr', '#802b1a');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_мармизка.gif)');
    color.style.setProperty('--border1','url(краї/стрілочки.png)');
    color.style.setProperty('--border2','url(краї/краї3.png)');
}
function dropify() {
    for (var t = 0; t < decors.length; t++) {
        decors[t].src = "крапелька.gif";
    }
    document.getElementById("ttlimg").src = "titleImg4.png";
    folder = 4;
    document.getElementById("strs_img").src = "лоґо/" + folder + "/історії.gif";
    document.getElementById("mrpd_img").src = "лоґо/" + folder + "/марупедія.gif";
    document.getElementById("drwngs_img").src = "лоґо/" + folder + "/малюнки.gif";
    document.getElementById("stckrs_img").src = "лоґо/" + folder + "/наліпки.gif";
    color.style.setProperty('--bg','url(фони/крапельки.gif)');
    color.style.setProperty('--window_bg','url(фони/море.gif)');
    color.style.setProperty('--main_clr', '#7373e6');
    color.style.setProperty('--light_clr', '#a6c4ff');
    color.style.setProperty('--dark_clr', '#36084d');
    color.style.setProperty('--lightest', '#fefefe');
    color.style.setProperty('--white_decor','url(біла_крапелька.gif)');
    color.style.setProperty('--border1','url(краї/краплі.png)');
    color.style.setProperty('--border2','url(краї/краї4.png)');
}