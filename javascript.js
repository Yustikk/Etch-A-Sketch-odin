//creating an nxn grid (n<=100)  gridSize=n

let gridSize=16; 

function createGrid()
{
    
    let container=document.querySelector("#container");
    for(i=0;i<gridSize;i++)
    {
        
        let row=document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(j=0;j<gridSize;j++)
        {
            let column=document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        
    }
}

createGrid();

function makeContainerSquare()
{
    
    
    
}

makeContainerSquare()

//since this didnt work ill just make alll the inside divs square