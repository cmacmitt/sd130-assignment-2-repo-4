const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 
const names = ['Elizabeth', 'Adam', 'Rhythm'];
let index = 0;
function insertName() {
  if(index < names.length) {
    nameList.insertAdjacentHTML('beforeend', `<li>${names[index]}</li>`);
    index++;
  }
}

addName.addEventListener('click', function(){
  insertName();
});