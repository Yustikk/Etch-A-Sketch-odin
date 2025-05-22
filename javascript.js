//creating an nxn grid (n<=100)  gridSize=n

let gridSize=16; 
let clicked=false;
let previousColor;
let currentColor="red";




//preventing drag action that messes up the drawing action
let body = document.querySelector("body")
body.addEventListener("mouseup", () => clicked=false)
body.addEventListener("selectstart", function(e) {e.preventDefault()})


function makeGridSquare()               
{
    let container=document.getElementById("container");
    container.style.height=getComputedStyle(container).width;
}
        

function createGrid()
{
    let container=document.getElementById("container");

    makeGridSquare();
    for(i=0;i<gridSize;i++)
    {
        //adding rows
        let row=document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for(j=0;j<gridSize;j++)
        {
            //adding every square and adding their listener functions for drawing
            let column=document.createElement("div");
            column.addEventListener("mouseenter", function (e){
                
                previousColor=getComputedStyle(column).background;
                let a=e.target;
                a.style.background=currentColor;
                
            });

            column.addEventListener("mouseleave",function (e) {
                if(!clicked)
                e.target.style.background=previousColor;

            });

            column.addEventListener("mousedown", function (e) {
                if(ColorPickerMode){
                    currentColor=previousColor;
                    ColorPickerMode=false;
                    colorpicker.classList.toggle("border");
                    console.log(currentColor)
                }
                else{
                e.target.style.background=currentColor;
                previousColor=currentColor;
                clicked=true;
                }
            })
            column.addEventListener("mouseup", () => clicked=false );
            column.classList.add("column");
            row.appendChild(column);
        }
        
    }
}



function getColor()
{
    let color=document.getElementById("favcolor");
    color.addEventListener("change",function(e){
        currentColor=e.target.value;
    })
}


let gridsize=document.getElementById("gridSize");
 gridsize.addEventListener("input", function(e) {
    if(e.target.value <=125)
    {
        gridSize=e.target.value;
        let container=document.getElementById("container");
        container.innerHTML=" ";
        createGrid();
        makeGridSquare();
    }
    
})

let ColorPickerMode=false;
let ColorPickerModeRightClick=false; 
let colorpicker=document.getElementById("colorpicker")
colorpicker.addEventListener("click", (e) => {
    if(ColorPickerMode)
    {
        ColorPickerMode=false
        colorpicker.classList.toggle("border");
    }
    else 
    {
        ColorPickerMode=true;
        colorpicker.classList.toggle("border");
    }
});





getColor();
createGrid();