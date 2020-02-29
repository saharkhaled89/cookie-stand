'use strict';
var testArray = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var total_cookies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function addTime() { // Add the header
  var container = document.getElementById('locationsInfo');
  if(container !== null){
    var row = document.createElement('tr');// add row to the table
    var cell = document.createElement('th');// add header cell
    var cellText = document.createTextNode('');// first cell is empty
    cell.appendChild(cellText);
    row.appendChild(cell);
    for(var i=0; i < testArray.length; i++){
      cell = document.createElement('th');
      cellText = document.createTextNode(testArray[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    cell = document.createElement('th');
    cellText = document.createTextNode('Daily Location Total');
    cell.appendChild(cellText);
    row.appendChild(cell);

    container.appendChild(row);

  }
}


function clearTotal() { // clear the total in case the variable is shared between pages
  total_cookies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
function addTotal(i,v) { // Add to the total row the cookies (v) sold at time indexed by (i)
  total_cookies[i] = total_cookies[i] + v;
}
function appendTotal() { // add the total row in the table
  var total = 0;
  var container = document.getElementById('locationsInfo');
  if(container !== null){
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    var cellText = document.createTextNode('Total');
    cell.appendChild(cellText);
    row.appendChild(cell);
    for(var i=0; i < total_cookies.length; i++){
      cell = document.createElement('td');
      cellText = document.createTextNode(total_cookies[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      total+= total_cookies[i];
    }
    cell = document.createElement('td');
    cellText = document.createTextNode(total);
    cell.appendChild(cellText);
    row.appendChild(cell);

    container.appendChild(row);

  }
}

var newlocation=[];
function Locations(name,min1, max1, Averagecoo) {
  this.name = name;
  this.min1 = min1;
  this.max1 = max1;
  this.Averagecoo = Averagecoo;
  this.customerArr = [];
  this.cookies = 0;
  this.total = 0;
  this.number = 0;
  this.cookies=[];
  newlocation.push(this);
}



Locations.prototype.customerNamber = function () { // Compute the sold cookies and their total per location
  for (var i = 0; i < testArray.length; i++) {
    this.number = getRandomInt(this.min1, this.max1);
    var product = Math.floor(this.number * this.Averagecoo);
    this.cookies.push(product);
    this.total += product;
    // eslint-disable-next-line indent
    // var message2 = 'The product of ' + this.number + ' and ' + this.Averagecoo + product + '.';
    var message2 = testArray[i] + ' : ' + product + ' cookies ';
    this.customerArr.push(message2);
    // console.log('messag2', message2);
    // console.log('number', this.number);
  }
};


Locations.prototype.render = function () { // output the text in the sales.html
  var container = document.getElementById('Locations');
  if(container !== null){ // in case the id does not exist, needed when visiing the index.html
    var div_name = document.createElement('h2');
    div_name.textContent = this.name;
    container.appendChild(div_name);
    div_name.className = 'locationName';

    var ulEL = document.createElement('ul');
    container.appendChild(ulEL);
    for (let index = 0; index < testArray.length; index++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.customerArr[index];
      ulEL.appendChild(liEl);
    }
    var total_li = document.createElement('li');
    total_li.textContent = 'Total : ' + this.total + ' cookies';
    ulEL.appendChild(total_li);

    ulEL.className = 'list_cookies';
  }
};




Locations.prototype.renderTable = function () { // print the table, there should be a table with id = locationsInfo
  var container = document.getElementById('locationsInfo');
  if(container !== null){
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    var cellText = document.createTextNode(this.name);
    cell.appendChild(cellText);
    row.appendChild(cell);
    for(var i=0; i < testArray.length; i++){
      cell = document.createElement('td');
      cellText = document.createTextNode(this.cookies[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      addTotal(i,this.cookies[i]);
    }
    cell = document.createElement('td');
    cellText = document.createTextNode(this.total);
    cell.appendChild(cellText);
    row.appendChild(cell);

    container.appendChild(row);

  }
};

clearTotal(); // clear total
addTime(); // add the header (times)
var Seattle = new Locations('Seattle',23, 65, 6.3);
Seattle.customerNamber();
Seattle.render();
Seattle.renderTable();

var Tokyo = new Locations('Tokyo',3,24,1.2);
Tokyo.customerNamber();
Tokyo.render();
Tokyo.renderTable();


var Dubai = new Locations('Dubai',11,38,3.7);
Dubai.customerNamber();
Dubai.render();
Dubai.renderTable();

var Paris = new Locations('Paris',20,38,2.3);
Paris.customerNamber();
Paris.render();
Paris.renderTable();

var Lima =new Locations('Lima',2,16,2.3);
Lima.customerNamber();
Lima.render();
Lima.renderTable();


appendTotal();




// add the total row to the table's end



for (var i=0; i<newlocation; i++){

  newlocation[i].render();
}



var locationform=document.getElementById('locationform');
locationform.addEventListener('submit',function(event){
  event.preventDefault();
  var name=event.target.name.value;
  console.log(event);
  console.log(name);
  var min1=event.target.min1.value;
  console.log(min1);
  var max1=event.target.max1.value;
  console.log(max1);
  var Averagecoo=event.target.Averagecoo.value;
  console.log(Averagecoo);

  locationsInfo.deleteRow(locationsInfo.rows.length-1);
  // let table = document.querySelector('table');

  // // Delete second row

  // table.deleteRow(6);
  var newlocation =new Locations(name,min1,max1,Averagecoo);
  console.log(newlocation);

  newlocation.customerNamber();
  newlocation.render();
  newlocation.renderTable();

  appendTotal();



});

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
