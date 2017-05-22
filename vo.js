ReverseDisplay = function(d) { if(d.length < 1) { return; }
else{document.getElementById(d).classList.toggle("hide");}};


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

Cp2Recto = function(orig) {
     var DivContent = document.getElementById(orig);
{
if(document.getElementById("recto" + DivContent.id) === null)
//{if(document.getElementById(DivContent.id).innerHTML.indexOf("bOdY")>-1)
//{document.getElementById("recto").innerHTML += 
//`<div id="recto` + DivContent.id + `" 
//class="noteUp uidraggable hresizable AlignFloatright">
//<div class="rightsqueezed">` + DivContent.innerHTML + `</div> 
//&nbsp;&nbsp;
//<span onclick="mathDown('recto` + DivContent.id + `')" 
// class="righttop BoldLarge">&nbsp;&nbsp;&times;</span>
//<span onclick="ToggleLocalFolds('recto` + DivContent.id + `')"
//class="rightmid">
//&nbsp;&nbsp;<img src="icons/goBottom.png" height=15>
//</span></div>`;
// $(".uidraggable").draggable();$(".uiresizable").resizable();
//}
//else {
{ document.getElementById("recto").innerHTML += `<div id="recto` + 
DivContent.id + `" 
class="noteUp uidraggable hresizable AlignFloatright" ><div class="rightsqueezed">` +
DivContent.innerHTML + `</div> &nbsp;&nbsp;<span
onclick="mathDown('recto` + DivContent.id + `')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span>
</div>`;
// $(".uidraggable").draggable();$(".uiresizable").resizable();
//};
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
}
else {
      var cont =  document.getElementById("recto" + DivContent.id);
     cont.parentNode.removeChild(cont);}
};
$(".uidraggable").draggable();$(".hresizable").resizable({ handles: "e, w"});
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

ToggleLocalRFolds = function (X) {
//      var C = document.getElementById(X).innerHTML;
//      var res1 = C.replace(/bODyR/g, "bODDyR");
 //     var res2 = res1.replace(/hEAdR/g, "hEAAdR");
//      document.getElementById(X).innerHTML=res2;
      var bODyRList = document.getElementsByClassName("bODyR");
    for (var i=0; i<bODyRList.length;i++){
    bODyRList[i].classList.toggle("hide"); 
    };
      var headRList = document.getElementsByClassName("hEAdR");
    for (var i=0; i<headRList.length;i++){
    headRList[i].classList.toggle("hide");
    };
//       var CC = document.getElementById(X).innerHTML;
//    var res3 = CC.replace(/bODDyR/g,"bODyR");
//    var res4 = res3.replace(/hEAAdR/g,"hEAdR");
//    this.innerHTML=res4;
}

ToggleTocFolds = function () {
      var tOCList = document.getElementsByClassName("tOC");
    for (var i=0; i<tOCList.length;i++){
    tOCList[i].classList.toggle("hide"); 
    };
}

ToggleSection = function(d,x) { if(d.length < 1) { return; }
else{document.getElementById(d).classList.toggle("hide");
     if(x.className === 'fa fa-angle-right fa-lg open')
     {x.className='fa fa-angle-down fa-lg open'}
     else{x.className='fa fa-angle-right fa-lg open'};
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
$(".hresizable").resizable({ handles: "e, w"});
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
class="mathUp uidraggable uiresizable" ><div id="recto` + DivContent.id +
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


rectoCopyAll = function() {
   var Canvas=document.getElementById("verso");
   if(document.getElementById("canvasRecto") === null )
   {document.getElementById("recto").innerHTML += `<div id="canvasRecto"
class="uidraggable hresizable"><div id="secondMain" ><div 
 id="rectoVerso" class="rightsqueezed">` +
Canvas.innerHTML + `</div> &nbsp;&nbsp;<span
onclick="mathDown('canvasRecto')"  class="righttop
BoldLarge">&nbsp;&nbsp;&times;</span><span
onclick="ToggleLocalRFolds('secondMain')"
class="rightmid">&nbsp;&nbsp;<img
src="icons/goBottom.png" height=15\></div>`;
    var CC = document.getElementById("secondMain").innerHTML;
    var res1 = CC.replace(/bOdY/g,"bODyR");
    var res2 = res1.replace(/cItE/g,"cITeR");
    var res3 = res2.replace(/hEaD/g,"hEAdR");
    document.getElementById("secondMain").innerHTML = res3;
    var bODyRList = document.getElementsByClassName("bODyR");
    for (var i=0; i<bODyRList.length;i++){
    bODyRList[i].classList.add("hide"); 
    };
      var headRList = document.getElementsByClassName("hEAdR");
    for (var i=0; i<headRList.length;i++){
   headRList[i].classList.remove("hide");
   };
    $(".uidraggable").draggable(); 
$(".hresizable").resizable({handles: "e, w"});
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
class="rightmid">&nbsp;&nbsp;<img
src="icons/goBottom.png" height=15\></span></div>`;
     var CC = document.getElementById("frameTocRecto").innerHTML;
    var res = CC.replace(/tOc/g,"tOC");
    document.getElementById("frameTocRecto").innerHTML = res;
$(".uidraggable").draggable();$(".uiresizable").resizable();}
   else{var RectoToc =  document.getElementById("frameTocRecto");
        RectoToc.parentNode.removeChild(RectoToc);};
};
