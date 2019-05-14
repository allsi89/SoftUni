//jshint esversion: 6

function solve() {
	let rightAnswers = 0;
	let buttons = document.getElementsByTagName('button');
	let radioBtnYear = document.getElementsByName('softUniYear');
	let popularName = document.getElementsByName('popularName');
	let softUniFounder = document.getElementsByName('softUniFounder');
	let result = document.getElementById('result');

	buttons[0].addEventListener('click', answer);
	buttons[1].addEventListener('click', answer2);
	buttons[2].addEventListener('click', getResult);

	function answer() {
		for (let btn of radioBtnYear) {
			if (btn.checked) {
				if(btn.value === '2013'){
					rightAnswers++;
				}
				document.getElementsByTagName('section')[1].style.display = 'block';
				buttons[0].removeEventListener('click', answer);				
			}
		}		
	}
	
	function answer2() {
		for (let btn of popularName) {
			if (btn.checked) {
				if(btn.value === 'Pesho'){
					rightAnswers++;
				}
				document.getElementsByTagName('section')[2].style.display = 'block';
				buttons[1].removeEventListener('click', answer2);				
			}
		}		
	}
	function getResult(){
		for(let btn of softUniFounder){
			if(btn.checked){
				if(btn.value === 'Nakov'){
					rightAnswers++;
				}
				if(rightAnswers === 3){
					result.textContent = 'You are recognized as top SoftUni fan!';
					buttons[2].removeEventListener('click', getResult);
				}else{
					result.textContent = `You have ${rightAnswers} right answers`;
					buttons[2].removeEventListener('click', getResult);
				}
			}
		}
	}
}