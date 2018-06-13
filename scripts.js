/*
let url = '';

function getWeather() {
    let url = '';


}



function getURL(){
    let http = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    let city = document.getElementById('cityTextbox').value;
    let apikey = '&appid=1eb1c09b4557ae2856528ee4c3560580';
    let units = '';

    if(document.getElementById('metric').checked === true){
        units += '&units=' + document.getElementById('metric').value;
    } else{
        units += '&units=' + document.getElementById('imperial').value;
    }

    url += http;
}*/

//function that gets user search term
function getSearchValue(){
    let userSearchTerm = document.getElementById('searchTermTextBox').value.toLowerCase();
    let myArr = userSearchTerm.split(' ');
    let myStr = '';
    for(i = 0; i < myArr.length; i++){
        myStr += myArr[i];
        if(i !== myArr.length - 1){
            myStr += '+';
        }
    }
    return myStr;


}

//function ran on search button click
function searchButton(){
    let userSearch = getSearchValue();
    console.log(userSearch);
}
