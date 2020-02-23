'use strict';
var testArray = ['6 am', '7 am', '8 am','9 am', '10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm', '6 pm', '7 pm'];

var Seattle ={

  min1:23,
  max1: 65,
  Averagecoo:6.3,
  customerArr:[],
  cookies:[],
  number:0,
  total: 0,
  customerNamber : function(){
    for(var i=0; i<testArray.length ;i++){
      this.number = getRandomInt(this.min1 , this.max1);
      var product = Math.floor(this.number * this.Averagecoo);
      this.cookies.push(product);
      this.total += product;
      // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
      var message2 = testArray[i] + ' : ' + product + ' cookies ';



      this.customerArr.push(message2);
      console.log('messag2',message2);
      console.log('number',this.number);
    }

  }
};

Seattle.customerNamber();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var container = document.getElementById('Locations');
var div_name = document.createElement('h2');
div_name.textContent = 'Seattle';
container.appendChild(div_name);
div_name.className = 'locationName';

var ulEL = document.createElement('ul');
container.appendChild(ulEL);
for (let index = 0; index < testArray.length; index++) {
  var liEl = document.createElement('li');
  liEl.textContent = Seattle.customerArr[index];
  ulEL.appendChild(liEl);
}
var total_li = document.createElement('li');
total_li.textContent ='Total : ' + Seattle.total + ' cookies';
ulEL.appendChild(total_li);

ulEL.className = 'list_cookies';






var Tokyo  ={

  min2:3,
  max2: 24,
  Averagecoo:1.2,
  customerArr:[],
  number:0,
  cookies:[],
  total: 0,
  customerNamber : function(){
    for(var i=0; i<testArray.length ;i++){
      this.number = getRandomInt(this.min2 , this.max2);
      var product = Math.floor(this.number * this.Averagecoo);
      this.cookies.push(product);
      this.total += product;
      // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
      var message2 = testArray[i] + ' : ' + product + ' cookies ';




      this.customerArr.push(message2);
      console.log('messag2',message2);
      console.log('number',this.number);
    }

  }
};

Tokyo.customerNamber();

div_name = document.createElement('h2');
div_name.textContent = 'Tokyo';
container.appendChild(div_name);
div_name.className = 'locationName';

ulEL = document.createElement('ul');
container.appendChild(ulEL);
for (let index = 0; index < testArray.length; index++) {
  liEl = document.createElement('li');
  liEl.textContent = Tokyo.customerArr[index];
  ulEL.appendChild(liEl);
}
total_li = document.createElement('li');
total_li.textContent ='Total : ' + Tokyo.total + ' cookies';
ulEL.appendChild(total_li);

ulEL.className = 'list_cookies';




var Dubai  ={

  min3:11,
  max3: 38,
  Averagecoo:3.7,
  customerArr:[],
  number:0,
  cookies:[],
  total: 0,
  customerNamber : function(){
    for(var i=0; i<testArray.length ;i++){
      this.number = getRandomInt(this.min3 , this.max3);
      var product = Math.floor(this.number * this.Averagecoo);
      this.cookies.push(product);
      this.total += product;
      // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
      var message2 = testArray[i] + ' : ' + product + ' cookies ';




      this.customerArr.push(message2);
      console.log('messag2',message2);
      console.log('number',this.number);
    }

  }
};

Dubai.customerNamber();


div_name = document.createElement('h2');
div_name.textContent = 'Dubai';
container.appendChild(div_name);
// div_name.style = 'color:red;';
div_name.className = 'locationName';
ulEL = document.createElement('ul');
container.appendChild(ulEL);
for (let index = 0; index < testArray.length; index++) {
  liEl = document.createElement('li');
  liEl.textContent = Dubai.customerArr[index];
  ulEL.appendChild(liEl);
}
total_li = document.createElement('li');
total_li.textContent ='Total : ' + Dubai.total + ' cookies';
ulEL.appendChild(total_li);

ulEL.className = 'list_cookies';


var Paris ={

  min4:20,
  max4: 38,
  Averagecoo:2.3,
  customerArr:[],
  number:0,
  cookies:[],
  total: 0,
  customerNamber : function(){
    for(var i=0; i<testArray.length ;i++){
      this.number = getRandomInt(this.min4 , this.max4);
      var product = Math.floor(this.number * this.Averagecoo);
      this.cookies.push(product);
      this.total += product;
      // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
      var message2 = testArray[i] + ' : ' + product + ' cookies ';




      this.customerArr.push(message2);
      console.log('messag2',message2);
      console.log('number',this.number);
    }

  }
};

Paris.customerNamber();

div_name = document.createElement('h2');
div_name.textContent = 'Paris';
container.appendChild(div_name);
div_name.className = 'locationName';

ulEL = document.createElement('ul');
container.appendChild(ulEL);
for (let index = 0; index < testArray.length; index++) {
  liEl = document.createElement('li');
  liEl.textContent = Paris.customerArr[index];
  ulEL.appendChild(liEl);
}
total_li = document.createElement('li');
total_li.textContent ='Total : ' + Paris.total + ' cookies';
ulEL.appendChild(total_li);

ulEL.className = 'list_cookies';



var Lima ={

  min5:2,
  max5: 16,
  Averagecoo:2.3,
  customerArr:[],
  number:0,
  cookies:[],
  total: 0,
  customerNamber : function(){
    for(var i=0; i<testArray.length ;i++){
      this.number = getRandomInt(this.min5 , this.max5);
      var product = Math.floor(this.number * this.Averagecoo);
      this.cookies.push(product);
      this.total += product;
      // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
      var message2 = testArray[i] + ' : ' + product + ' cookies ';




      this.customerArr.push(message2);
      console.log('messag2',message2);
      console.log('number',this.number);
    }

  }
};

Lima.customerNamber();

div_name = document.createElement('h2');
div_name.textContent = 'Lima';
container.appendChild(div_name);
div_name.className = 'locationName';

ulEL = document.createElement('ul');
container.appendChild(ulEL);
for (let index = 0; index < testArray.length; index++) {
  liEl = document.createElement('li');
  liEl.textContent = Lima.customerArr[index];
  ulEL.appendChild(liEl);
}

total_li = document.createElement('li');
total_li.textContent ='Total : ' + Lima.total + ' cookies';
ulEL.appendChild(total_li);
ulEL.className = 'list_cookies';









