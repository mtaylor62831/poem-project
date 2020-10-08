var paragraphs = document.getElementsByTagName("p");
var threshold = 0.95;
var head = document.getElementsByTagName("head")[0];
var startSpan = "<span class = \"blackout\">";
var endSpan = " </span>";


//add the CSS file to the document
var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
cssLink.href = "https://github.com/mtaylor62831/poem-project/blob/master/poemStyles.css";
head.appendChild(cssLink);


//access the text in each paragraph
for (var i = 0; i < paragraphs.length; i++){
    var pContent = paragraphs[i].textContent;
    paragraphs[i].innerHTML = UpdateText(pContent);
}

//run through the string text of each p
function UpdateText(content){
    //parse words by splitting on spaces
    var newText = "";
    var openSpan = false;
    var blackout = false;
    var words = content.split(" ");
    for(var i = 0; i < words.length; i++){
        //for each word determine if it gets blacked out
        if (Math.random() > threshold){
            blackout = false;
            //the word is selected
            //when the span is open close it and append the word
            if(openSpan){
                newText += endSpan + words[i];
                openSpan = false;
            } else {
                newText += " " + words[i];
            }
        } else {
            blackout = true;
            if (openSpan) {
                newText += " " + words[i];
            } else {
                newText += startSpan;
                openSpan = true;
            }
        }
    }
    return newText;
}

