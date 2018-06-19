
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

function getURLString(userSearchTerm) {
    var searchLimit = 10;
    let resultCount = `limit=${searchLimit}&`;
    let country = 'country=us&';
    let media = 'media=music&';
    let explicit = getExplicitValue();
    let language = 'lang=en_us&';
    let url = `https://itunes.apple.com/search?${country}${media}${resultCount}${language}${explicit}${userSearchTerm}`;
    return url;

}


function searchButton(){
    let userSearchTerm = getSearchValue();
    let url = getURLString(userSearchTerm);
    loadJSON(url);
}
document.addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if (key === 13) {
        let userSearchTerm = getSearchValue();
        let url = getURLString(userSearchTerm);
        loadJSON(url);
    }
});
function secondMaster(myObj){
    for (let i = 0; i < 10; i++)
    {
        document.getElementById(`trackName${[i]}`).innerHTML = myObj.results[i].trackName;
        document.getElementById(`albumCover${[i]}`).src = myObj.results[i].artworkUrl100;
        document.getElementById(`artistName${[i]}`).innerHTML = myObj.results[i].artistName;
        document.getElementById(`preview${[i]}`).src = myObj.results[i].previewUrl;
        document.getElementById(`preview${[i]}`).hidden = false;

    }
}

function loadJSON(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            let bacon = JSON.parse(this.responseText);
            secondMaster(bacon);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

