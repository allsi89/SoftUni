//jshint esversion: 6
function solve() {
    let buttons = document.querySelectorAll('#buttons button');
    let nextBtn = buttons[0];
    let cancelBtn = buttons[1];
    let agreeBtn = document.getElementsByTagName('input')[0];
    nextBtn.addEventListener('click', nextStep);
    cancelBtn.addEventListener('click', finish);

    let mainDiv = document.getElementById('content');
    let firstStep = true;
    let secondStep = false;
    let thirdStep = false;

    function nextStep(){
        if(firstStep){
        firstPage();
        firstStep = false;
        }
        else if(agreeBtn.checked && secondStep){
            secondPage();
        }
        else if(thirdStep){
            thirdPage();
        }
    }

    function finish(){
        document.getElementsByTagName('section')[0].style.display = 'none';
    }

    function firstPage(){
        mainDiv.style.backgroundImage = 'none';
        document.getElementById('firstStep').style.display = 'block';
        secondStep = true;
    }

    function secondPage(){
        document.getElementById('firstStep').style.display = 'none';
        document.getElementById('secondStep').style.display = 'block';
        nextBtn.style.display = 'none';
        setTimeout(function() {
            nextBtn.style.display = "inline";
        }, 3000);
        secondStep = false;
        thirdStep = true;
        
    }
    function thirdPage(){
        document.getElementById('secondStep').style.display = 'none';
        document.getElementById('thirdStep').style.display = 'block';
        nextBtn.style.display = 'none';
        cancelBtn.textContent = 'Finish';
        thirdStep = false;
    }   
}