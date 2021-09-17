//display hidden div when mouseover corresponding button, then hide it on mouseout
const pwGenBtn = document.getElementById('pwGen');
pwGenBtn.onmouseover = function(){
    document.getElementById('hidepwGen').style.display = 'block';
}
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