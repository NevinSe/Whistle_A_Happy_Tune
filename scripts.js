
let myObj = {};

function getSearchValue(){
    let userSearchTerm = document.getElementById('searchTermTextBox').value.toLowerCase();
    let myArr = userSearchTerm.split(' ');
    let myStr = '';
    for(let i = 0; i < myArr.length; i++){
        myStr += myArr[i];
        if(i !== myArr.length - 1){
            myStr += '+';
        }
    }
    return `term=${myStr}`;
}

function getExplicitValue(){
   if(document.getElementById('explicitYes').checked === true){
       return document.getElementById('explicitYes').value;
   } else {
       return document.getElementById('explicitNo').value;
   }
}

function getURLString(userSearchTerm){
    let country = 'country=us&';
    let media = 'media=music&';
    let explicit = getExplicitValue();
    let language = 'lang=en_us&';
    let url = `https://itunes.apple.com/search?${country}${media}${language}${explicit}${userSearchTerm}`;
    console.log(url);
    return url;
}

//function ran on search button click
function searchButton(){
    let userSearchTerm = getSearchValue();
    let url = getURLString(userSearchTerm);
    let JSON = loadJSON(url);
    console.log(JSON);
    console.log('this is my object:', myObj);
}

function loadJSON(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("hello");
        if(this.readyState === 4 && this.status === 200) {
            let bacon = JSON.parse(this.responseText);
            document.getElementById("whatever").innerHTML = this.responseText;

            myObj[0] = bacon.results;


        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

