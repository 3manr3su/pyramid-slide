

    

    
var slider = document.getElementById("myRange")
var output = slider.value
var select = document.getElementById("charselect")

drawPyramid(myRange.value)

slider.oninput = function() {
     var output = this.value
     height.value = this.value
     
    drawPyramid(output)}

select.onchange = function(){
    select.value = this.value
    drawPyramid(height.value)
    
}






function drawPyramid(height) {
    height = parseInt(height);
    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">

    document.getElementById("pyramid").innerHTML = "";


    // for each row....
   
        
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "&nbsp;"; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }
        
        
       
        var element = document.createElement("p");
        element.innerHTML = rowStr
        insertPyramid = document.getElementById("pyramid");
        insertPyramid.appendChild(element);
        }  

    }


