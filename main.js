var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length)
  return array[random];
}

var storyText = '從前有個人, 他常自稱 :insertx:。有一天，他走在街上，碰上他的 :inserty:。他走上前搭訕，並說了一個 :insertz:「西餐廳餐牌上面，有邊種食物係由三個姓氏組成？」:insertx:覺得對方答不上，自己道出答案：「羅宋湯。」';
var insertX = ['天之驕子','聰明人','天才'];
var insertY = ['小學同學','暗戀對象','初戀情人'];
var insertZ = ['爛Gag','無聊笑話','IQ題'];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText; 

  var xItem = randomValueFromArray(insertX); 
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem); 
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name); 
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone'; 
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature); 
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory; 
  story.style.visibility = 'visible';
}
