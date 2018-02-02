

    

    
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
    drawPyramid(output)
    
}






function drawPyramid(height) {

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
        var targetLength = height + 1
        

        
        
        
        for (var i = 0; i < numBricks; i++) {
            
            rowStr += select.value
            var padStr = rowStr.padStart(targetLength);
        }
        
        
       
        var element = document.createElement("p");
        var node = document.createTextNode(padStr);
        element.appendChild(node);
        insertPyramid = document.getElementById("pyramid");
        insertPyramid.appendChild(element);
        }  

    }


