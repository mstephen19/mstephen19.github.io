//display hidden div when mouseover corresponding button, then hide it on mouseout
//for onmouseover event
const pwGenBtn = document.getElementById('pwGen');
pwGenBtn.onmouseover = function(){
    document.getElementById('hidepwGen').style.display = 'block';
}
//when onmouseout
pwGenBtn.onmouseout = function(){
    document.getElementById('hidepwGen').style.display = 'none';
}

const refactorBtn = document.getElementById('refactor');
refactorBtn.onmouseover = function(){
    document.getElementById('hideRefactor').style.display = 'block';
}
refactorBtn.onmouseout = function(){
    document.getElementById('hideRefactor').style.display = 'none';
}

const chatBotBtn = document.getElementById('chatbot');
chatBotBtn.onmouseover = function(){
    document.getElementById('hideChatBot').style.display = 'block';
}
chatBotBtn.onmouseout = function(){
    document.getElementById('hideChatBot').style.display = 'none';
}

const theBoxBtn = document.getElementById('firstProject');
theBoxBtn.onmouseover = function(){
    document.getElementById('hideTheBox').style.display = 'block';
}
theBoxBtn.onmouseout = function(){
    document.getElementById('hideTheBox').style.display = 'none';
}

//Change opacity of navbar based on scroll position.
setInterval (function scrollAction(){
    if (/*document.body.scrollTop*/window.scrollY >= 100)  {
        const nameBox = document.getElementById('nameBox');
        const navBox = document.getElementById('navBox');
        nameBox.style.opacity = "50%";
        navBox.style.opacity = "50%";
    }
    else {
        nameBox.style.opacity = "100%";
        navBox.style.opacity = "100%";
    }
}), 10;

window.addEventListener('scroll', scrollAction());