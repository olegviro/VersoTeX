# VersoTeX, a LaTeX style for producing a dynamic HTML #

## Oleg Viro ##

 VersoTeX prepares dynamical HTML documents for reading in a web browser. 
A source file looks like a usual source LaTeX file. 
 VersoTeX can be applied to an article written in a plain LaTeX article
style. If you write your articles in TeX, you can adjust any of them to
VersoTeX. Although most of more sophisticated styles are not yet supported,
virtually any LaTeX file after appropriate adjustments can be handled by
VersoTeX. Indeed, the last 15 articles published in the 
[Arnold Mathematical Journal](http://armj.math.stonybrook.edu)
have been transformed into a dynamical HTML format by VersoTeX, and
most of articles published in the first two years in the Arnold Mathematical
Journal were transformed by a similar package. 

VersoTeX has a number of features. They are described below. The
main purpose of them is to make reading and a careful study of text 
convenient. For this dynamic HTML provides opportunities 
unavailable for publishing on paper or in the pdf format.

When reading a mathematical text, we meet numerous references to remote 
parts of the text: to literature list, formulas, definitions, 
statements of theorems, etc. Often the reader wants to see some of 
them simultaneously with each other and the text which is currently 
read. On the other hand, at first reading we prefer to move out of 
the sight some details, like proofs. VersoTeX allows to do all of this.


## 1. Problems and Solutions ## 

### 1.1. Two problems ###

TeX/LaTeX is a lingua franca of the scientific world. Most of
mathematicians and physicists write their research articles and textbooks 
(and even private letters) in TeX/LaTeX. Most papers on ArXiv are prepared in
TeX. (Lack of a TeX source for a paper in ArXiv is a strong indication that
the author is not professional.) 

TeX and LaTeX are convenient for authors. Indeed, even, when
writing an email, if we need to include a mathematical formula, 
we use TeX codes, although it is not assumed to be processed by TeX. 

Now many documents are prepared for reading online from a computer
screen. The screens become more readable. New generations of readers are 
used to read from screen. 

Still, one can use typesetting by TeX/LaTeX, convert the output to the 
pdf format and for reading use Adobe Acrobat or other pdf-viewer. Although 
the picture that appears on a computer screen is almost identical to the 
picture printed on paper, in some ways a screen version is more 
convenient. It allows hyper-references and fast search of words. 

However the pdf format does not allow to use many other opportunities 
of the new media. It lacks most interactive capabilities of a simple web 
browser. 

The readers get used to appreciate advantages of interactive texts. It
seems that inevitably mathematics will find a way to publishing online 
dynamic interactive texts. 

For this two major problems are to be solved: 
- a convenient and useful dynamic design has to be developed; 
- writer-friendly tools for preparation dynamic documents have to 
be developed. 

### 1.2. Design ### 

Hundreds of years of publishing worked out standards of a design for
scientific papers. Just to make clear what I mean, let me mention a few
elements of the design. Normally a paper has to be sectioned, although the
number of levels in the sectioning may vary. Sections are equipped with 
titles. The list of bibliography is placed at the end of a paper. 
The words defined in a definition is emphasized (e.g, by italic). 
Statements of theorems are also distinguished with a font, equipped with 
titles and numbered. And so on...

For online dynamic publishing of scientific texts, the design principles
and specific tricks are still to be developed. Usually the traditions of 
paper publishing are respected and followed, but enhanced occasionally 
with new elements. For example, a table of contents is made easily 
available (either it is shown permanently, or there is a button for 
displaying it) and the items of the table work as hyper-references. 

I am not going to present a survey of works in this direction, but
restrict to a few references to those works which were the most inspiring for
me. 
- [MathBook](https://mathbook.pugetsound.edu/) by Robert A.Beezer is an
  ambitious project in this direction. 
- [AMS MathViewer](http://www.ams.org/publications/journals/journalsframework/AMSMathViewer)
- [LaTeXML](http://dlmf.nist.gov/LaTeXML/) by Bruce R.Miller and the primary 
instigator for this project, [the Digital Library of
Mathematical Functions](http://dlmf.nist.gov/)

I use and agree with some design solutions coined in these projects,
and disagree with others. Below I formulate a few of design principles 
which I has come to and try to implement in VersoTeX.

**Dynamic design.** The same mathematical text is read with different 
purposes, even by the same reader. For example, when you see a text for 
the first time, you do not want to see details of proofs, on the other hand, 
you want to have an easy access to definitions, major statements and the 
list of literature. A design should provide an opportunity to remove 
elements of the text off your sight at your wish, and emphasize other 
elements. This opportunity should be self-evident. A reader should not be 
overloaded or confused.

**Folding.** There is an old simple way of dynamical hiding parts of texts. 
It is implemented long ago in some programmer's text editors as folding, 
see [Wikipedia, Code Folding](https://en.wikipedia.org/wiki/Code_folding).
It allows to hide a part of the text (e.g., a section, a proof), and make
it visible by a click on its title. It makes sense to arrange the 
initial state of document such that only the title, authors, abstract
and a list of section headings is seen.

**The line lengths:**
- **keep lines sufficiently short**, so that it would be easy, 
after coming to the end of a line, to find the beginning of the next one. 
On the other hand,
- **keep lines sufficiently long** so that they accommodate mathematical 
formulas, which tend be long in some texts.

**Justify text fully.** The text should be aligned along both margins. 
This is a good option as long as lines are not too short.

**Inner references.** All references to other elements of the text 
(bibliographic references, references to formulas, footnotes, theorems, 
definitions, remarks, etc.) should be **available without scrolling** of the 
main text. The most practical mechanism for this is provided by **popup 
windows**. These windows should be **easy to open and close**. They 
should not stay on your way. Ideally, if the total width of the browser 
allows, they should be **placed in a separate area 
free of the main text**.

### 1.3. LaTeX for HTML ###

The tools for preparation of dynamic online documents are not
writer-friendly. The very notion of a writer-friendly tool depends on the
writer and has to be clarified.
Here I mean a writer who knows LaTeX and has an experience in writing
LaTeX source files. Journal publications require this anyway. 

The best solution for such a writer would be to write a text file in
the old good LaTeX, adding, when necessary, a few new commands for specific
elements of the text. In other words, it is desirable to have a LaTeX style
for preparing dynamic onscreen documents. The closer this style would be to
other commonly used styles for paper publication, the easier would be to move
between on-screen and on-paper publishing of the same document. 

A LaTeX source code contains almost all the information necessary for
creating dynamic HTML document fulfilling the design principles formulated
above. It is divided into sections, subsections, etc.; statements of theorems,
proofs, and definitions are distinguished; there is a built in system of 
internal and external references, etc. Besides, it is easy to add new 
functionality via adding new commands and environments. 

The tools available now require either learning the XML language or
use of converter programs like LaTeXML. 

A number of converters from LaTeX to dynamic html have been
written. The first of them, a PERL program LaTeX2HTML appeared in the
middle of nineties. 

Most of the existing LaTeX-HTML converters produce more or less
literal static HTML copies of the paper. They are configurable, but 
changes are not easy due to poor documentation. The most profound 
difficulty, which all
converters faced, is a huge amount of style packages providing modifications
and additions in TeX.

The most convenient converter that I could find so far is LaTeXML. I
used it for making online version of the first two volumes of
[Arnold Mathematical Journal.](http://armj.math.stonybrook.edu/contents.html)
The necessary adjustments were made by Vim macros applied first to the 
source TeX files and then to the resulting HTML files. Differences in the 
author styles forced to make individual changes to almost each article. 

VersoTeX is positioned as a style package for LaTeX rather than a TeX-to-HTML 
converter. It does not pursue the goal of automatic converting 
*any* TeX file to a valid HTML file. As other TeX styles, it is not 
a priori compatible with all other styles. 

Use the TeX itself as a parser and compiler is my original idea. It
came from experience. Like most mathematicians, I wrote mathematics in
TeX. I did this for about 30 years, and besides, in the beginning of this 
period, I happened to write style TeX files for publishing of Russian 
journal [Algebra and Analysis](http://www.pdmi.ras.ru/AA/), and later I
wrote style files for a textbook 
[Elementary Topology: Problem Textbook](http://bookstore.ams.org/mbk-54) 
and its Russian version. This experience 
convinced me that TeX is an adequate tool for drawing an HTML file as a 
picture based on a TeX file.

### Acknowledgements ### 

I am grateful to many people who helped. My daughter Polina Viro wrote the 
first javascripts for VersoTeX and successfully hunted numerous javascript 
bugs through the whole period of work. Raluca Tanase implemented canvas 
with justification of text and helped to maintain the web page of 
Arnold Mathematical Journal. At the first stage, I used LaTeXML 
developed by Bruce R. Miller. In the HTML design I use many design solution 
from his work. I am grateful for very inspiring and fruitful conversations 
with Robert A. Beezer, David W. Farmer, Peter Krautzberger and Alexander 
Shumakovitch.


### 2. Instructions to a VersoTeX reader ###

#### 2.1. Three fields ####

A web browser window with an
HTML document prepared as a TeX file with VersoTeX,
has three major fields: **menu**, **verso** and **recto**. 
Verso and recto are the names of left and right pages in an open book,
see [Wikipedia, Recto and verso](https://en.wikipedia.org/wiki/Recto_and_verso).

If the browser window is not wide enough, the three fields overlap.

The *menu* field is about 40 pixels wide, it is positioned on the left hand 
side. The *verso* field is of about 740 pixels wide. 

 On the top of the menu field, there is an icon formed of three horizontal
lines. Usually such an icon hides a
drop-down menu. Indeed, clicking the icon unrolls a menu. 


 When you open an HTML document, the recto field is empty.

#### 2.2. Verso #### 

 The verso field looks like the beginning of a mathematical paper
(including its abstract) followed by a table of contents. 
In fact, this is not a table of contents, but rather the whole article 
*folded down*. Its blue lines are clickable. 
A click on the word "Abstract" folds down the text of abstract
leaving visible out of it only the word Abstract.


The lines below the abstract are titles of sections. A click on each of
them unrolls the section. If the section contains subsections, 
then each of the subsections is still folded and is represented by its 
title. Clicking the title unfold their content. Clicking the title of an 
open fold folds it down. 

The folding format is broadly used in programmer editors and in online
tables of content. It allows to keep out of sight parts of the text that 
are not of interest at the moment. 

 It takes time to unfold a text section by section. An inpatient reader
may open all the folds by at most two mouse clicks by opening the menu (this
requires a click if the menu was not open) and clicking an appropriate
icon. The next icon closes all the folds (including the abstract) at a 
single click. 

 At the bottom of each open fold there is a thin (one pixel thick) blue
line. Under mouse it becomes thicker. When clicked, it folds down the fold
above it. So, if you have read a section (or a subsection) and want to 
close the fold, you can use this line instead of clicking the title of 
the section after going all the way up to it.

In addition to sections, subsections and subsubsections, there are other
parts of the text which can be folded and which by default are folded 
when you open the document. These are special sections, like 
*References, Acknowledgements, Keywords, Mathematics Subject Classification*, and, besides, folds of a different nature: *proofs*. 
Of course, proofs are very important, but at the first reading we often 
do not want to go into details.

The title of a proof is blue and clickable. The click unfolds the proof.
At the end of an unfolded proof, we see a square symbolizing the end of 
the proof. Clicking the square closes the text of the proof.

Literature references are also blue and clickable. A click at a reference 
raises a small window with the relevant bibliographical data. The next 
click at the same reference deletes the window. 

The window is draggable. Draggability is handy, because when you
click several references that are close to each other on the page the windows
may overlap, and you have to separate them by dragging.

A similar mechanism is implemented for footnotes. Thus a footnote
becomes a flying note and flies quite close to the place where you clicked 
to the reference (so, you do not need to look at the bottom of the page 
or even at the bottom of the next page).
    
#### 2.3. Recto ####

At the opening of a document, the recto is empty. It's your choice, 
what to bring there. 

##### 2.3.1. Table of Contents #####

 A click on the bottom icon ToC in the menu brings up a Table of Contents 
window at the right upper corner of the recto. The table of contents
is folded and can be unfolded either gradually by clicking on tiny 
triangles next to each item, or by a single click on the icon 
on the right hand side of the line. 

A click on an item of the table of contents effects the verso: it brings
up the title of the corresponding part to the article. 
If the part was hidden in a closed fold, then the click opens all the 
folds that hide this part. 

Besides sections, subsections and subsubsections, the table of contents
lists also all the theorems, lemmas, corollaries, figures, tables, etc.

##### 2.3.2. From verso to recto ##### 

On verso, there are elements colored with dark violet. These are the
numbers in references to sections, theorems, lemmas, and references to
mathematical formulas. Clicking at any violet element creates on the recto a
window with the copy of the corresponding part of the text. Those windows
are draggable and resizable. A repeated click on the same violet element 
of the verso closes the window on the recto. 

On the verso, at the end of a title of a section/subsection/subsubsection, 
there is an icon, a click on which creates on the recto a window with a 
copy of the section/subsection/subsubsection.
    
#### 2.4. Menu #### 

You can open a copy of the whole document on the recto, by clicking
an icon in the menu. This gives a useful opportunity to reed side by 
side different parts of the document.

The icon Bib in the menu creates on the recto a window with a copy
of the whole bibliography.

If you have got tired of these windows flying on recto or verso, you
may kill all of them by a single click on an icon in the
menu. Killing of a single window can be done also by clicking a cross 
icon on its upper right corner. 

A special menu icon highlights all the pieces emphasized in the source 
TeX file by the command \em

#### 2.5. The environment for reading VersoTeX html article ####

 Of course, a modern web-browser is needed. This may be Firefox or
any other clone of Mozilla, Chrome, Safari, Opera, Microsoft Edge, or even
Internet Explorer. 

The VersoTeX relies on MathJax, an open source display engine for
mathematical formulas. MathJax can work from a distributed network service,
but, in order to use it in this way, one needs a web access. Also, one can
install MathJax in a local computer. See 
 [www.mathjax.org](https://www.mathjax.org/)

To a much lesser extent, VersoTeX uses jquery javascript libraries. They
also can work directly from the web, or can be downloaded to computer and
work locally. [jquery.com](https://jquery.com/) and
[jqueryui.com](https://jqueryui.com/). 

In the setup provided here, we assume using content delivery networks.
In this version, displaying html files compiled by VersoTeX requires a 
web access. Besides, the following files are required:
- *vo.js*, a collection of javascript marcos; 
- *vo.css*, a Cascading Style Sheets for displaying html files 
produced by VersoTex; 
-  a directory *icons* with a few icons. 

They can be placed differently, but, in the configuration provided here,
they are placed in the same directory as the html file and, if one wants 
to have them somewhere else, then a minor change of configuration would 
be needed.

## 3. Instructions to a VersoTeX runner ##

This section is addressed to a person who wants to run VersoTeX. First, 
it was called *Instructions to an author*. 
But besides authors, other people also can find it useful. If you have
downloaded a paper from ArXiv with a serious intention to study it 
carefully, you may also want to improve its readability by VersoTeX.

### 3.1. Adjust the source file ###

For the best result, the document class of the paper should be article.
So the source file should start with
```
\documentclass{article}
\usepackage{verbatim,amssymb,amsmath,array}
\usepackage{vo}
\pagestyle{empty}
```
 Right after that you may put 
```
\begin{document}
```
Then it's a good place to introduce your customer commands for
mathematical formulas. Something like that:
```
\hide{\$ \newcommand{\Q}{\mathbb Q}\$}
\hide{\$ \newcommand\p{\partial}\$}
```

Contrary to the usual practice, these definitions must be surrounded
with the dollar signs. The command `\hide{}` is not necessary, but 
recommended. If you do not put it, the definitions will be seen while 
the MathJax will be loading.

Then it's a right place to define your Theorem environments. The
`amsthm.sty` is not yet supported. Instead, the original LaTeX commands can
be used. Something like that:
```
\spnewtheorem{Th}{Theorem}[section]{\bf}{\it}
\renewcommand{\theTh}{\thesection.\Alph{Th}}
\spnewtheorem{rem}[Th]{Remark}{\bf}{\rm}
``` 

The environment proof is taken care of by VersoTeX, hence you do not
need to define them here.

Abstract is a command rather than environment:
```
\abstract{The text of the abstract.}
```

The syntax for the commands 
```
\title, \author, \date, \maketitle, \section, \subsection, \subsubsection,
\label, \ref, \cite, \footnote
```
is usual. Inside math formulas everything is usual, or, to be more
precise, as MathJax requires. 

VersoTeX is good for handling files that are not too long. I plan to
work out a book version of VersoTeX, in which this restriction will be 
lifted. If a paper version of the file is about 50 pages or longer, then 
it's better to split it prior to feeding to the present VersoTeX. This 
restriction comes from MathJax. For a long files it takes too long to 
load MathJax. 

Answers to other TeX questions can be found in a few sample files of
articles by the author which you can find in this directory. 

Enjoy!

### 3.2. The environment neededcfor running VersoTeX ### 

First of all, the TeX should be installed and working. Any major TeX
distribution, like TeX Live, Mac TeX or MikTex, should work. 

A TeX distribution usually contains a little program 
*catdvi*. If this is not the case, install it separately: it is needed. 

The process of compilation is organized by macros written in the Vim
macro language. Let me remind that Vim is a programmer's text editor, a
clone of Vi. Vim is freely available for any operating system, see 
[www.vim.org](http://www.vim.org). 

Compiling a VersoTeX article requires an installed VIM editor and
two files:
- *vo.vim*, a collection of macros in the VIM macro language; 
- *vo.sty*, a LaTeX style file. 

### 3.3. Running VersoTeX ###

Compilation of a LaTeX source file is performed as follows. The source
file, say *article.tex*, is open in Vim. Then, the macros from *vo.vim* 
are to be run in Vim. You just need to type in the command mode
``` :source vo.vim``` 
Here we assume that vo.vim is located in the same directory as
the source TeX file. Then vo.vim organizes the whole compilation. We
consider the process of compilation in the next section. In a regular 
situation, the process of compilation does not require any user's action, 
except for pressing bar, when Vim says "more", and enter, when Vim 
requires.

Vim shows red complain lines, when it fails to find a regular expression,
which had to be replaced. The user should not care about these warnings. 
At the end of the process, we find Vim open with the resulting file 
*article.html* open and this file saved in the directory, where *article.tex*  was taken from.

## 4. Under the hood ## 

Technically, VersoTeX is a LaTeX style supplemented with a few macros in 
the Vim macro language. This choice of tools was determined by the 
experience and expertise of the author, who is not a programmer, but a 
mathematician. Perhaps, a programmer would use, instead of Vim, a more 
conventional engine, like PERL. As for the use of TeX engine, it has 
definite advantages. We will discuss them later. 

As was mentioned above, a VersoTeX compilation of a TeX source
file, say article.tex, starts with opening article.tex in Vim and typing
```:source vo.vim.``` 
The macros collected in *vo.vim* then do the following: 

1. Remove the files built by the preceding runs of *vo.vim* (if any). 
2. Remove or replace a few TeX commands. 
3. Localize mathematical formulas in *article.tex*, surround them
with a special markers, numerate formulas and insert in the beginning 
of each of them a special code containing the number of the formula. 
4. Save the result as two files, *M1-article.tex* and *T-article.tex*, 
identical to each other. 
5. Open file *M1-article.tex* and erase in it everything besides the formulas' codes and the formulas. 
6. Each line in *M1-article.tex* is converted to a Vim macro which would
replace the formula's code by the formula. After that the file consisting of
these Vim macros is saved as *M1-article.vim*. 
7. In *M1-article.tex*, all lines, which contain no label, are erased, 
each line with a label turned into a Vim macro for placing two copies of 
the label around the formula code. The result is saved as *M1-article.tex*. 
8. In *T-article.tex* the mathematical formulas are erased. Only the 
formula's code is left in the place of each of the formulas. The codes of 
formulas that were labeled are equipped with the copies of labels (using 
the macros prepared in *M1-article.tex*), 
9. In *T-article.tex*, around each environment with a label, *vo.vim* 
creates a germ of div container whose id is the environment's label. 
10. In T-article.tex, the tabular environment is enhanced by inserting 
the commands which will force TeX to insert into each cell the information 
about its HTML class. 
11. In *T-article.tex* the list of bibliography is duplicated and the TeX
commands in one of the lists are modified. 
12. Some of the low level TeX commands are replaced. In particular, the font 
type commands (like `\bf` and `\it`) are replaced with commands, whose 
arguments are surrounded with braces (like `\textbf` and `\textit`
). 
13. Then vo.vim three times executes latex on *T-article.tex. 
14. *vo.vim* executes the command *catdvi* on *T-article.dvi* and saves 
the result as *article.html*. 
15. In *article.html*, *vo.vim* makes the last cosmetic changes: unites the 
pages, removes unneeded brackets in references, insert the horizontal lines 
into tables.
16. Finally, *vo.vim* inserts mathematical formulas into *article.html* 
by running *M1-article.vim* on it. 


After this, the result is saved as *article.html* and stays open in Vim.
A number auxiliary files are left: `M1-article.tex, M1-article.vim, 
T-article.tex, T-article.toc, T-article.toc` and `T-article.log`. 
They may be useful only for debugging. 

Most of the job is done by TeX. The style file *vo.sty* redefines many
usual LaTeX commands, so that they force TeX to draw, instead of usual
typographical pages, an HTML file based on the same source file.

