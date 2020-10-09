(function(){
//global vars
var paragraphs = document.getElementsByTagName('p');
var threshold = 0.95;

//access the text in each paragraph
for (var i = 0; i < paragraphs.length; i++){
    var pContent = paragraphs[i].textContent;
    var bgColor = getComputedStyle(paragraphs[i]).getPropertyValue('color');
    paragraphs[i].innerHTML = UpdateText(pContent, bgColor);
}

//run through the string text of each p
function UpdateText(content, bgColor){
    //parse words by splitting on spaces
    var newText = '';
    var startSpan = '<span style="background-color:' + bgColor + ';">';
    var endSpan = ' </span>';
    var openSpan = false;
    var words = content.split(' ');
    for(var i = 0; i < words.length; i++){
        //if we beat the random threshhold keep word visible
        if (Math.random() > threshold){
            //close the blackout span if it is currently open
            if(openSpan){
                newText += endSpan + words[i];
                openSpan = false;
            } else {
                newText += ' ' + words[i];
            }
        //if we don't beat the threshold then blackout
        } else {
            if (openSpan) {
                newText += ' ' + words[i];
            //open a new blackout span if needed
            } else {
                newText += startSpan;
                openSpan = true;
            }
        }
    }
    return newText;
}
})();