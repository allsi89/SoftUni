//jshint esversion: 6

function solve() {

   let buttons = Array.from(document.getElementsByTagName('button'));

   let user1BtnUnlock = document.getElementsByName('user1Locked')[1];
   let button1 = buttons[0];
   let user1Section = document.getElementById('user1HiddenFields');


   let user2BtnUnlock = document.getElementsByName('user2Locked')[1];
   let button2 = buttons[1];
   let user2Section = document.getElementById('user2HiddenFields');

   let user3BtnUnlock = document.getElementsByName('user3Locked')[1];
   let button3 = buttons[2];
   let user3Section = document.getElementById('user3HiddenFields');


   button1.addEventListener('click', () => {
      if (user1BtnUnlock.checked) {
         user1Section.style.display = 'block';
         // document.getElementsByName('user1Username')[0].disabled = false;
         button1.textContent = 'Hide it';
         hideIt(user1BtnUnlock, user1Section, button1);
      }
   });
   button2.addEventListener('click', () => {
      if (user2BtnUnlock.checked) {
         user2Section.style.display = 'block';
         // document.getElementsByName('user1Username')[0].disabled = false;
         button2.textContent = 'Hide it';
         hideIt(user2BtnUnlock, user2Section, button2);
      }
   });
   button3.addEventListener('click', () => {
      if (user3BtnUnlock.checked) {
         user3Section.style.display = 'block';
         // document.getElementsByName('user1Username')[0].disabled = false;
         button3.textContent = 'Hide it';
         hideIt(user3BtnUnlock, user3Section, button3);
      }
   });

   function showMore(radioBtn, userSection, btn) {
      btn.addEventListener('click', () => {
         if (radioBtn.checked) {
            userSection.style.display = 'block';
            // document.getElementsByName('user1Username')[0].disabled = false;
            btn.textContent = 'Hide it';
            hideIt(radioBtn, userSection, btn);
         }
      });
   }

   function hideIt(radioBtn, userSection, btn) {
      btn.addEventListener('click', () => {
         if (radioBtn.checked) {
            userSection.style.display = 'none';
            // document.getElementsByName('user1Username')[0].disabled = false;
            btn.textContent = 'Show More';
            showMore(radioBtn, userSection, btn);
         }
      });
   }
}