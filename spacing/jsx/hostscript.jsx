/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function presetSpacing(number)
{
 
// Set document to active and selected layer to active
    var activeDoc = app.activeDocument;
    var currentLayer = activeDoc.activeLayer;
    
//Selected Layer Postion / Size Info
    var layerBounds = currentLayer.bounds;
    var layerX1 = layerBounds[0].value;
    var layerX2 = layerBounds[2].value;
    var layerY1 = layerBounds[1].value;
    var layerY2 = layerBounds[3].value;

//Selection Marquee Postion / Size Info
    var selPoint = activeDoc.selection;
    var selBounds = selPoint.bounds;
    var selX1 = selBounds[0].value;
    var selX2 = selBounds[2].value;
    var selY1 = selBounds[1].value;
    var selY2 = selBounds[3].value;
    var selHeight = selY2 - selY1;
    var selWidth = selX2 - selX1;
    
//Preset Value selected by User
    var userPut = number;
    var layerMove;
   

// if Marquee height is greater than the width, adjust vertical spacing
    
    if (selHeight > selWidth)
        {
                if (selY2 < layerY2)
                    {
                    
                    layerMove = userPut - selHeight;  
                    currentLayer.translate (null, layerMove); 
                    }
    
                else if (selY2 > layerY2)
                    {
                    
                    layerMove = selHeight - userPut;  
                    currentLayer.translate (null, layerMove); 
                    }
        }

// if Marquee width is greater than the height, adjust horizontal spacing
    
    if (selHeight < selWidth)
        {
                if (selX2 < layerX2)
                    {
                    layerMove = userPut - selWidth;  
                    currentLayer.translate (layerMove, null); 
                    }
    
                else if (selX2 > layerX2)
                    {
            
                    layerMove = selWidth - userPut;  
                    currentLayer.translate (layerMove, null); 
                    }
            
                      else if (selY2 == layerY2)
                    {
                        alert(selY2); alert(layerY2);   
                    }
        }

// If Marquee width & height are the same
    
    if (selHeight == selWidth)
        {
                alert("The width and height of the marquee are the same. Please adjust width and height separately.");
        }

//Deselect Marquee
    
selPoint.deselect();
    
}


/*//Custom Space Function
function customSpacing()
{
    // Set document to active and selected layer to active
    var activeDoc = app.activeDocument;
    var currentLayer = activeDoc.activeLayer;
    
//Selected Layer Postion / Size Info
    var layerBounds = currentLayer.bounds;
    var layerX1 = layerBounds[0].value;
    var layerX2 = layerBounds[2].value;
    var layerY1 = layerBounds[1].value;
    var layerY2 = layerBounds[3].value;

//Selection Marquee Postion / Size Info
    var selPoint = activeDoc.selection;
    var selBounds = selPoint.bounds;
    var selX1 = selBounds[0].value;
    var selX2 = selBounds[2].value;
    var selY1 = selBounds[1].value;
    var selY2 = selBounds[3].value;
    var selHeight = selY2 - selY1;
    var selWidth = selX2 - selX1;
    
//Preset Value selected by User
    var userPut;
    var layerMove;

// if Marquee height is greater than the width, adjust vertical spacing
    
    if (selHeight > selWidth)
        {
            userPut = prompt("Add Correct Vertical Spacing", selHeight);  
                if (selY2 < layerY2)
                    {
                   
                    layerMove = userPut - selHeight;  
                    currentLayer.translate (null, layerMove); 
                    }
    
                else if (selY2 > layerY2)
                    {
            
                    layerMove = selHeight - userPut;  
                    currentLayer.translate (null, layerMove); 
                    }

                else if (selY2 == layerY2)
                    {
                        alert(selY2); alert(layerY2);   
                    }
                
                }

// if Marquee width is greater than the height, adjust horizontal spacing
    
    if (selHeight < selWidth)
        {
            userPut = prompt("Add Correct Horizontal Spacing", selWidth);  
                if (selX2 < layerX2)
                    {
                    layerMove = userPut - selWidth;  
                    currentLayer.translate (layerMove, null); 
                    }
    
                else if (selX2 > layerX2)
                    {
            
                    layerMove = selWidth - userPut;  
                    currentLayer.translate (layerMove, null); 
                    }
        }

// If Marquee width & height are the same
    
    if (selHeight == selWidth)
        {
                alert("The width and height of the marquee are the same. Please adjust width and height separately.");
        }

//Deselect Marquee
    
selPoint.deselect();
}*/
