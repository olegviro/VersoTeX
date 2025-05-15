ReverseDisplay = function(d) { if(d.length < 1) { return; }
else{document.getElementById(d).classList.toggle("hide");}};

SectionEnd = function(d) {if(d.length < 1) { return; }
else{document.getElementById("bOdY"+d).classList.toggle("hide");
     var element_to_scroll_to = document.getElementById(d);
     element_to_scroll_to.scrollIntoView();}};



linkTo = function(elem) {
        if( document.getElementById('bOdY' + elem) ) {
                document.getElementById('bOdY' + elem).classList.remove("hide");
        }
        var parent = document.getElementById('bOdY' + elem);
        while( parent.parentElement ) {
                parent = parent.parentElement;
                parent.classList.remove("hide");
        }
        document.getElementById('bOdY' + elem).scrollIntoView();
};



ToggleLocalFolds = function (X) {
      var C = document.getElementById(X).innerHTML;
      var res1 = C.replace(/bODy/g, "bODDy");
      var res2 = res1.replace(/hEAd/g, "hEAAd");
      document.getElementById(X).innerHTML=res2;
      var bODDyList = document.getElementsByClassName("bODDy");
    for (var i=0; i<bODDyList.length;i++){
    bODDyList[i].classList.toggle("hide"); 
    };
      var headList = document.getElementsByClassName("hEAAd");
    for (var i=0; i<headList.length;i++){
    headList[i].classList.toggle("hide");
    };
       var CC = document.getElementById(X).innerHTML;
    var res3 = CC.replace(/bODDy/g,"bODy");
    var res4 = res3.replace(/hEAAd/g,"hEAd");
    this.innerHTML=res4;
}


ToggleTocFolds = function () {
      var tOCList = document.getElementsByClassName("tOC");
    for (var i=0; i<tOCList.length;i++){
    tOCList[i].classList.toggle("hide"); 
    };
}

ToggleSection = function(d,x) { if(d.length < 1) { return; }
else{document.getElementById(d).classList.toggle("hide");
     if(x.className === 'fa fa-caret-right fa-lg open')
     {x.className='fa fa-caret-down fa-lg open'}
     else{x.className='fa fa-caret-right fa-lg open'};
     }
};

CloseSection = function(d) { if(d.length < 1) { return; }
 else{
      var open=document.getElementById("open" + d);
      open.className='fa fa-angle-right fa-lg open';};
     document.getElementById('bOdY' + d).classList.add("hide");

};


ToggleDivs = function(e,f) {
document.getElementById(f).classList.toggle("hide");
document.getElementById(e).classList.toggle("hide");};

LinkToBody = function(elem) {
	if( document.getElementById('bOdY' + elem) ) {
	   document.getElementById('bOdY' + elem).classList.remove("hide");
	}
	var parent = document.getElementById('bOdY' + elem);
	while( parent.parentElement ) {
		parent = parent.parentElement;
		parent.classList.remove("hide");
	}
	document.getElementById('bOdY' + elem).scrollIntoView();
};


LinkTo = function(elem) {
	if( document.getElementById(elem) ) {
           document.getElementById(elem).classList.remove("hide");
	}
	var parent = document.getElementById(elem);
	while( parent.parentElement ) {
		parent = parent.parentElement;
		parent.classList.remove("hide");
	}
	document.getElementById(elem).scrollIntoView();
};

UnFoldAll = function () {
var bOdYList = document.getElementsByClassName("bOdY");
for (var i=0; i<bOdYList.length;i++){
bOdYList[i].classList.remove("hide");
};
var headList = document.getElementsByClassName("hEaD");
for (var i=0; i<headList.length;i++){
headList[i].classList.add("hide");
};
};

FoldAll = function () {
var bOdYList = document.getElementsByClassName("bOdY");
for (var i=0; i<bOdYList.length;i++){
bOdYList[i].classList.add("hide"); 
};
var headList = document.getElementsByClassName("hEaD");
for (var i=0; i<headList.length;i++){
headList[i].classList.remove("hide");
}};

CloseWindows = function () {
document.getElementById("recto").innerHTML = null;
var citeupList = document.getElementsByClassName("citeUp");
for (var i=0; i<citeupList.length;i++){
citeupList[i].classList.add("hide");
citeupList[i].innerHTML = null;
};
};


ToggleProofs = function () {
var proofList = document.getElementsByClassName("proof");
for (var i=0; i<proofList.length;i++){
proofList[i].classList.toggle("hide"); 
}};


//TogglePetit = function () {
//var petitList = document.getElementsByClassName("petit");
//for (var i=0; i<petitList.length;i++){
//petitList[i].classList.toggle("stealth"); 
//}};

ToggleHighLight = function () {
var emphList = document.getElementsByClassName("emph");
for (var i=0; i<emphList.length;i++){
emphList[i].classList.toggle("highlight");
}}; 

//window.onload = function() 
//      {  
//       var y=document.getElementById("MyNormalView"); 
//       var ys=document.getElementById("MySmallView"); 
//       var yb=document.getElementById("MyLargeView"); 
//       
//       of (y.addEventListener) {        
//// For all major browsers, except IE 8 and earlier 
//          y.addEventListener("click", function(){changeClass("50%","51%")}); 
//        } else if (y.attachEvent) {                  
//// For IE 8 and earlier versions 
//          y.attachEvent("onclick", function(){changeClass("50%","51%")}); 
//        } 
//        
//       if (ys.addEventListener) {                    
//// For all major browsers, except IE 8 and earlier 
//          ys.addEventListener("click", function(){changeClass("65%","36%")}); 
//        } else if (ys.attachEvent) {                  
//// For IE 8 and earlier versions 
//          ys.attachEvent("onclick", function(){changeClass("65%","36%")}); 
//        } 
//        
//       if (yb.addEventListener) {                    
//// For all major browsers, except IE 8 and earlier 
//          yb.addEventListener("click", function(){changeClass("25%","76%")}); 
//        } else if (yb.attachEvent) {                  
//// For IE 8 and earlier versions 
//          yb.attachEvent("onclick", function(){changeClass("25%","76%")}); 
//        } 
//      } 
    
function changeClass(dim,sdim)
     {
      var x=document.getElementById("versoCell");
      var y=document.getElementById("recto");
      x.style.right=dim;
      y.style.left=sdim;
     };


citeUp = function(b,c) {
     var firstDivContent = document.getElementById(b);
     var secondDivContent = document.getElementById(c);
if(secondDivContent.innerHTML == 0)
{secondDivContent.innerHTML = firstDivContent.innerHTML;};
document.getElementById(c).classList.toggle("hide");
};


closeCite = function(self) {
    self.parentNode.classList.add("hide");
    self.parentNode.innerHTML = null;
};


CpMath2Recto = function(dmath) {
     var DivContent = document.getElementById(dmath);
{if( document.getElementById("contRecto" + DivContent.id) === null )
{document.getElementById("recto").innerHTML += `<span id="contRecto` + DivContent.id + `" 
class="mathUp uidraggable uiresizable" ><br><div id="recto` + DivContent.id +
`"  class="rightsqueezed">` +
DivContent.innerHTML + `</div> &nbsp;&nbsp;<span 
onclick="mathDown('contRecto` + DivContent.id + `')" class="righttop BoldLarge">&nbsp;&nbsp;&times;</span></span>`;
$(".uidraggable").draggable();$(".uiresizable").resizable();
}
else {
     var cont =  document.getElementById("contRecto" + DivContent.id);
     cont.parentNode.removeChild(cont);}};
};



mathDown = function(amb) {
     var sideMath = document.getElementById(amb);
     sideMath.parentNode.removeChild(sideMath);
};

sideNote = function(fnote) {
       var Content=document.getElementById(fnote);
{if(document.getElementById("recto" + Content.id) === null )
{document.getElementById("recto").innerHTML += `<span id="recto` + Content.id
+ `" class="noteUp uidraggable uiresizable">` + Content.innerHTML + `</span>`;
$(".uidraggable").draggable();$(".uiresizable").resizable();}
else { 
     var contFnote =  document.getElementById("recto" + Content.id);
     contFnote.parentNode.removeChild(contFnote);}
};};

hideSideNote = function(sn) {
       var Content = document.getElementById(sn);
       var sideNote = document.getElementById("side" + sn);
       sideNote.parentNode.removeChild(sideNote);
};

goHome = function() {
   FoldAll();
   CloseWindows();
   resetFontSize();
   const element = document.getElementById("verso");
   element.scrollIntoView(true);
};


rectoCopyAll = function() {
   var Canvas=document.getElementById("verso");
   if(document.getElementById("canvasRecto") === null )
   {document.getElementById("recto").innerHTML += `<span id="canvasRecto"
class="noteUp uidraggable"><br><div  id="rectoVerso" class="rightsqueezed">` +
Canvas.innerHTML + `</div> &nbsp;&nbsp;<span
onclick="mathDown('canvasRecto')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span><span
onclick="ToggleLocalFolds('canvasRecto')"
class="rightmidtop">&nbsp;&nbsp;<img
src="icons/goBottom.png" height=15></span>`;
    $(".uidraggable").draggable();
    var CC = document.getElementById("canvasRecto").innerHTML;
    var res1 = CC.replace(/bOdY/g,"bODy");
    var res2 = res1.replace(/cItE/g,"cITe");
    var res3 = res2.replace(/hEaD/g,"hEAd");
    document.getElementById("canvasRecto").innerHTML = res3;
    var bODyList = document.getElementsByClassName("bODy");
    for (var i=0; i<bODyList.length;i++){
    bODyList[i].classList.add("hide"); 
    };
      var headList = document.getElementsByClassName("hEAd");
    for (var i=0; i<headList.length;i++){
   headList[i].classList.remove("hide");
   };
}
else {  
    var rectoAll =  document.getElementById("canvasRecto");
     rectoAll.parentNode.removeChild(rectoAll);};
};

rectoBib = function() {
   var Bib=document.getElementById("bOdYBib");
   if(document.getElementById("frameBibRecto") === null )
   {document.getElementById("recto").innerHTML += `<span
id="frameBibRecto" class="noteUp uidraggable uiresizable">
<h2>Bibliography</h2>` +
Bib.innerHTML + ` &nbsp;&nbsp;<span
onclick="mathDown('frameBibRecto')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span>`;
$(".uidraggable").draggable();$(".uiresizable").resizable();}
   else{var RectoBib =  document.getElementById("frameBibRecto");
        RectoBib.parentNode.removeChild(RectoBib);};
};


rectoToc = function() {
   var Toc=document.getElementById("TOC");
   if(document.getElementById("frameTocRecto") === null )
   {document.getElementById("recto").innerHTML += `<div
id="frameTocRecto" class="toc uidraggable">` +
Toc.innerHTML + ` &nbsp;&nbsp;<span
onclick="mathDown('frameTocRecto')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span>
<span onclick="ToggleTocFolds('frameTocRecto')"
class="rightmidtop">&nbsp;&nbsp;<img
src="icons/goBottom.png" height=15></span></div>`;
     var CC = document.getElementById("frameTocRecto").innerHTML;
    var res = CC.replace(/tOc/g,"tOC");
    document.getElementById("frameTocRecto").innerHTML = res;
$(".uidraggable").draggable();$(".uiresizable").resizable();
 ToggleTocFolds('frameTocRecto');
}
   else{var RectoToc =  document.getElementById("frameTocRecto");
        RectoToc.parentNode.removeChild(RectoToc);};
};

function openAllIcons() {
    const icons = document.querySelectorAll('.caret-right');
    icons.forEach(icon => {
        openIcon(icon);
    });
}

function closeAllIcons() {
    const icons = document.querySelectorAll('.caret-right');
    icons.forEach(icon => {
        closeIcon(icon);
    });
   const element = document.getElementById("verso");
   element.scrollIntoView(true);
}

function closeIcon(iconId) {
     iconId.classList.remove('rotated')};

function openIcon(iconId) {
    iconId.classList.add('rotated');
}

function rotateIcon(spanElement) {
    const icon = spanElement.querySelector('.caret-right');
    icon.classList.toggle('rotated');
}

function toggleRtDn(x) {
    const Caret = document.getElementById(x);
    if (!Caret){
       return null; // Return null if there is no mark
     } 
    let currentCaret = Caret;
   var currentCaret1 = currentCaret.replace(/-right/g,"-DOWN");
   var currentCaret2 = currentCaret1.replace(/-down/g, "-RIGHT");
   var currentCaret3 = currentCaret2.replace(/-RIGHT/g, "-down");
   var currentCaret4 = currentCaret3.replace(/-DOWN/g, "-right");
   this.innerHTML = currentCaret4;
             }


function findParentDiv(anchor) {
    const elem = document.getElementById(anchor);
    if (!elem) {
        console.log('Element not found for ID:', anchor);
        return null; // Return null if the element does not exist
    }

    console.log('Element with ID:', anchor, elem);

    let currentElem = elem;

    // Traverse up the DOM tree until we find a <div> with an ID
    while (currentElem && (currentElem.tagName !== 'DIV' || !currentElem.id)) {
        currentElem = currentElem.parentElement;
    }

    if (currentElem) {
        console.log('Result of findParentDiv:', currentElem.id);
        return currentElem.id;
    } else {
        console.log('No parent div with an ID found.');
        return null; // Return null if no matching parent <div> was found
    }
}




Cp2Recto = function(orig) {
if (!orig) {
        console.error('No origin ID provided to Cp2Recto');
        return;
    }
     var DivContent = document.getElementById(orig);
{
if(document.getElementById("recto" + DivContent.id) === null)
{if(document.getElementById(DivContent.id).innerHTML.indexOf("bOdY")>-1)
{document.getElementById("recto").innerHTML += 
`<span id="recto` + DivContent.id + `" 
class="noteUp uidraggable uiresizable" >
<br><div class="rightsqueezed">` + DivContent.innerHTML + `</div> 
&nbsp;&nbsp;
<span onclick="mathDown('recto` + DivContent.id + `')" 
 class="righttop BoldLarge">&nbsp;&nbsp;&times;</span>
<span onclick="ToggleLocalFolds('recto` + DivContent.id + `')"
class="rightmidtop">
&nbsp;&nbsp;<img src="icons/goBottom.png" height=15\>
</span>`;}
else { document.getElementById("recto").innerHTML += `<span id="recto` + 
DivContent.id + `" 
class="noteUp uidraggable uiresizable" ><br><div class="rightsqueezed">` +
DivContent.innerHTML + `</div> &nbsp;&nbsp;<span
onclick="mathDown('recto` + DivContent.id + `')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span>
</span>`;};
$(".uidraggable").draggable();$(".uiresizable").resizable();
    var CC = document.getElementById("recto" + DivContent.id).innerHTML;
    var res1 = CC.replace(/bOdY/g,"bODDy");
    var res2 = res1.replace(/cItE/g,"cITe");
    var res3 = res2.replace(/hEaD/g,"hEAAd");
    document.getElementById("recto" + DivContent.id).innerHTML = res3;
    var bODDyList = document.getElementsByClassName("bODDy");
    for (var i=0; i<bODDyList.length;i++){
    bODDyList[i].classList.add("hide"); 
    };
      var headList = document.getElementsByClassName("hEAAd");
    for (var i=0; i<headList.length;i++){
   headList[i].classList.remove("hide");
   };
    var CCC = document.getElementById("recto" + DivContent.id).innerHTML;
   var res4 = CCC.replace(/bODDy/g,"bODy");
   var res5 = res4.replace(/hEAAd/g,"hEAd");
   var res6 = res5.replace(/rectolk/g,"hide");
   document.getElementById("recto" + DivContent.id).innerHTML = res6;
$(".uidraggable").draggable(); 
$(".uiresizable").resizable();
}
else {
      var cont =  document.getElementById("recto" + DivContent.id);
     cont.parentNode.removeChild(cont);}
};
};




function findElementInVerso(id) {
    const verso = document.getElementById('verso'); // Get the #verso container
    if (!verso) {
        console.log('No element with ID "verso" found.');
        return null;
    }

    // Search for the element inside the verso container
    let elements = verso.getElementsByTagName('*'); // Get all descendants
    for (let elem of elements) {
        if (elem.id === id) {
            return elem; // Return the first match
        }
    }

    return null; // Return null if not found
}


function lookUpRef(anchor) {
    // const elem = document.getElementById(anchor);
    const elem = findElementInVerso(anchor);
    if (!elem) {
        console.log('Element not found for ID:', anchor);
        return null; // Return null if the element does not exist
    }

    console.log('Element with ID:', anchor, elem);

    let currentElem = elem;

    // Traverse up the DOM tree until we find a <div> with an ID
    while (currentElem && (currentElem.tagName !== 'DIV' || !currentElem.id)) {
        currentElem = currentElem.parentElement;
    }

//    if (currentElem) {
//        console.log('Result of findParentDiv:', currentElem.id);
//        return currentElem.id;
//    } else {
//        console.log('No parent div with an ID found.');
//        return null; // Return null if no matching parent <div> was found
//    }
//}
//Cp2Recto = function(orig) {
//if (!orig) {
//        console.error('No origin ID provided to Cp2Recto');
//        return;
//    }
	var DivContent = currentElem;
	var orig = currentElem.id;
{
if(document.getElementById("recto" + DivContent.id) === null)
{if(document.getElementById(DivContent.id).innerHTML.indexOf("bOdY")>-1)
{document.getElementById("recto").innerHTML += 
`<span id="recto` + DivContent.id + `" 
class="rightUp uidraggable uiresizable" >
<br><div class="rightsqueezed">` + DivContent.innerHTML + `</div> 
&nbsp;&nbsp;
<span onclick="mathDown('recto` + DivContent.id + `')" 
 class="righttop BoldLarge">&nbsp;&nbsp;&times;</span>
<span onclick="ToggleLocalFolds('recto` + DivContent.id + `')"
class="rightmidtop">
&nbsp;&nbsp;<img src="icons/goBottom.png" height=15\>
</span>`;}
else { document.getElementById("recto").innerHTML += `<span id="recto` + 
DivContent.id + `" 
class="rightUp uidraggable uiresizable" ><br><div class="rightsqueezed">` +
DivContent.innerHTML + `</div> &nbsp;&nbsp;<span
onclick="mathDown('recto` + DivContent.id + `')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span>
</span>`;};
$(".uidraggable").draggable();$(".uiresizable").resizable();                
    var CC = document.getElementById("recto" + DivContent.id).innerHTML;   
    var res1 = CC.replace(/bOdY/g,"bODDy");
    var res2 = res1.replace(/cItE/g,"cITe");
    var res3 = res2.replace(/hEaD/g,"hEAAd");
    document.getElementById("recto" + DivContent.id).innerHTML = res3;
    var bODDyList = document.getElementsByClassName("bODDy");
    for (var i=0; i<bODDyList.length;i++){
    bODDyList[i].classList.add("hide"); 
    };
      var headList = document.getElementsByClassName("hEAAd");
    for (var i=0; i<headList.length;i++){
   headList[i].classList.remove("hide");
   };
    var CCC = document.getElementById("recto" + DivContent.id).innerHTML;
   var res4 = CCC.replace(/bODDy/g,"bODy");
   var res5 = res4.replace(/hEAAd/g,"hEAd");
   var res6 = res5.replace(/rectolk/g,"hide");
   document.getElementById("recto" + DivContent.id).innerHTML = res6;
$(".uidraggable").draggable(); 
$(".uiresizable").resizable();
}
else {
      var cont =  document.getElementById("recto" + DivContent.id);
     cont.parentNode.removeChild(cont);
};
};
};


// Keep track of current zoom level
let zoomLevel = 100;  // 100%

function adjustFontSize(increase = true) {
    // Change by 10% each time
    zoomLevel = increase ? zoomLevel + 10 : zoomLevel - 10;
    
    // Prevent going too small or too large
    zoomLevel = Math.min(Math.max(zoomLevel, 50), 200);
    
    document.body.style.fontSize = zoomLevel + '%';
};

function resetFontSize() {
    zoomLevel = 100;
    document.body.style.fontSize = '100%';
};

function widthVerso(increase = true) {
    const versoCell = document.getElementById('versoCell');
    if (!versoCell) return;  // Exit if element not found
    
    // Store original width if not already stored
    if (!versoCell.dataset.originalWidth) {
        const width = window.getComputedStyle(versoCell).width;
        versoCell.dataset.originalWidth = parseFloat(width);
    }
    
    // Get current width
    const currentWidth = parseFloat(window.getComputedStyle(versoCell).width);
    
    // Adjust by 10%
    const newWidth = increase ? currentWidth * 1.2 : currentWidth * 0.8;
    
    versoCell.style.width = newWidth + 'px';
}


function lineHeightVerso(increase = true) {
    const verso = document.getElementById('verso');
    if (!verso) return;  // Exit if element not found
    
    // Store original line-height if not already stored
    if (!verso.dataset.originalLineHeight) {
        const lineHeight = window.getComputedStyle(verso).lineHeight;
        verso.dataset.originalLineHeight = parseFloat(lineHeight);
    }
    
    // Get current line-height
    const currentLineHeight =
parseFloat(window.getComputedStyle(verso).lineHeight);
    
    // Adjust by 0.2px
    const newLineHeight = increase ? currentLineHeight + 5 :
currentLineHeight - 5;
    
    verso.style.lineHeight = newLineHeight + 'px';
};

function defaultHeightVerso() {
const verso = document.getElementById('verso');
    if (!verso) return;  // Exit if element not found
    
    // Store original line-height if not already stored
    if (!verso.dataset.originalLineHeight) {
        const lineHeight = window.getComputedStyle(verso).lineHeight;
        verso.dataset.originalLineHeight = parseFloat(lineHeight);
    };
verso.style.lineHeight = verso.dataset.originalLineHeight + 'px';
}


//const originalWidth = parseFloat(window.getComputedStyle(versoCell).width;
let originalWidth = 0;
window.onload = function() {
	originalWidth =
parseFloat(window.getComputedStyle(versoCell).width);
}
function defaultWidthVerso() {
     const versoCell = document.getElementById('versoCell');
     versoCell.style.width = originalWidth + 'px';
};

function toggleJustify() {
     const element = document.getElementById('verso');
     const current = getComputedStyle(element).textAlign;
     if (current === 'justify')
       {element.style.textAlign = 'left';
     }
     else  
       {element.style.textAlign = 'justify';
     }
};

//function toggleJustify() {
//  const element = document.getElementById('verso');
//  const current = getComputedStyle(element).textAlign;
//  
//  if (current === 'justify') {
//    element.style.textAlign = 'left';
//  } else {
//    element.style.textAlign = 'justify';
//  }
//};
