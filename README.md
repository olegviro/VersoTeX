# VersoTeX, a LaTeX style for producing a dynamic HTML #

## Oleg Viro ##

 VersoTeX prepares dynamical HTML documents for reading in a web browser. 
A source file looks like a usual source LaTeX file. 

This is a new version. It differs in two ways: 
1. the design has been developed and many new features added,
2. technically it got a new backend base, lwarp, which makes it applicable
   to wider set of LaTeX source files.  

 VersoTeX can be applied to an article written in a plain LaTeX article
style. If you write your articles in TeX, you can adjust any of them to
VersoTeX. Although most of more sophisticated styles are not yet supported,
virtually any LaTeX file after appropriate adjustments can be handled by
VersoTeX. Indeed, all the articles published in the 
[Arnold Mathematical Journal](http://armj.math.stonybrook.edu) in 2025
have been transformed into a dynamical HTML format by VersoTeX, and
most of articles published in the first three years in the Arnold Mathematical
Journal were transformed by a similar package. 

The output of VersoTeX belongs to a new type of interface. Let me call it
**TeXVizor**.  Technically, a TeXVizor file is an HTML file enhanced by some specific 
Java scripts. It can be handled by a web-browser.  The scripts add functionality 
which facilitates reading and understanding the content. The
main purpose of theis is to make convenient reading and a careful study of text. 
For this TeXVizor provides opportunities unavailable for publishing on paper or 
in the pdf format.

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
which I has come to and try to implement in VersoTeX and which have determine 
TeXVizor.

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

### 1.3. LaTeX for TeXVizor ###

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
and additions to TeX.

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
with Robert A. Beezer, David W. Farmer, Peter Krautzberger, Alexander 
Shumakovitch and Al Viro.


### 2. Instructions to a VersoTeX reader ###

#### 2.1. Three fields ####

A web browser window with a TeXVizor document,
has three major fields: **menu**, **verso** and **recto**. 
Verso and recto are the names of left and right pages in an open book,
see [Wikipedia, Recto and verso](https://en.wikipedia.org/wiki/Recto_and_verso).

If the browser window is not wide enough, the three fields overlap.

The *menu* field is a vertical strip about 40 pixels wide, it is positioned on the left hand 
side. The *verso* field is of about 740 pixels wide. 

 On the top of the menu field, there is an icon formed of three horizontal
lines. Usually such an icon hides a
drop-down menu. Indeed, clicking the icon unrolls a menu. 

 When a TeXVizor document first opens, the recto field is empty.

#### 2.2. Verso #### 

 The verso field looks like the beginning of a mathematical paper
(including its abstract) followed by a table of contents. 
In fact, this is not a table of contents, but rather the whole document
*folded down*. Its blue items are clickable. Click the triangle next 
to word "Abstract" to reveal its text; click again to collapse it.

Below are section titles. Click the triangle to expand a section. 
Subsections, if present, remain folded. You can unfold them with additional clicks.

This folding system — familiar from code editors or document viewers — lets 
you to keep out of sight parts of the text that are not of interest at the moment.

Unfolding everything manually takes time, but an impatient reader can expand or 
collapse the entire document with just two clicks: open the menu and select 
"open all" or "fold all."

By default, special sections like *References, Acknowledgements, Keywords, 
Mathematics Subject Classification,* and all *proofs* are folded.

Proofs are, of course, vital — but sometimes skipped during a first pass. 
Click the triangle before “Proof” to reveal it. Click the end-of-proof square 
to collapse it.

References appear in blue and are clickable. Clicking opens a floating window 
with full bibliographic info; click again to dismiss it.
These windows are draggable—a helpful feature when multiple references overlap. 
Just drag them apart.

Footnotes work similarly. Instead of jumping to the bottom of the page, a footnote 
appears right where you clicked — no scrolling needed.


#### 2.3. Recto ####

At first opening of a document, the recto is empty. It's your choice, 
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

Click "replicate" in the menu to copy the entire document into the recto. 
This allows you to read two different sections side by side.

Clicking "refs" opens the complete bibliography in the recto.

To close all floating windows at once, click "purge." You can also close 
individual windows via their top-right "×" icon.

Clicking "highlite" highlights all segments in the document marked by the LaTeX 
command \em. This can help you spot emphasized phrases or important ideas quickly.

#### 2.5. The environment for reading a TeXVizor article ####

 You'll need  a modern web-browser - Firefox or
any other clone of Mozilla, Chrome, Safari, Opera, Microsoft Edge, or even
Internet Explorer will do. To read a TeXVizor article, open the appropriate file
with extension .html in the web-browser.

The TeXVizor relies on MathJax, an open source display engine for
mathematical formulas. MathJax can work from a distributed network service,
but, in order to use it in this way, one needs a web access. Also, one can
install MathJax in a local computer. See 
 [www.mathjax.org](https://www.mathjax.org/)

To a much lesser extent, TeXVizor uses jquery javascript libraries. They
also can work directly from the web, or can be downloaded to computer and
work locally. [jquery.com](https://jquery.com/) and
[jqueryui.com](https://jqueryui.com/). 

In the setup provided here, we assume using content delivery networks.
In this version, displaying html files compiled by VersoTeX requires a 
web access. Besides, the following files are required:
- *vt.js*, a collection of javascript marcos; 
- *vt.css*, a Cascading Style Sheets for displaying html files 
produced by VersoTex; 
-  a directory *icons* with a few icons. 

They can be placed differently, but, in the configuration provided here,
they are placed in the same directory as the html file and, if one wants 
to have them somewhere else, then a minor change of configuration would 
be needed.

## 3. Instructions to a VersoTeX runner ##

This section is addressed to a person who wants to run the second version of
VersoTeX for making TeXVizor file. First, it was called *Instructions to an author*. 
But besides authors, other people also can find it useful. If you have
downloaded a paper from ArXiv with a serious intention to study it 
carefully, you may also want to improve its readability by coverting it to TeXVizor.

### 3.1. Adjust the source file ###

The source file may be virtually any LaTeX file. However, it should be adjusted.
A good part of adjustments has to be done at the beginning of the file.

The file is placed to its own directory. In what follows we assume that 
the parent directory contains directory jquery with javascript libraries,
files vt.css, vt.sty, vt.js of VersoTeX and a file myMathJax.txt from lwarp 
with references to java script files.

For the best result, the document class of the paper should be article.
In TeX compilation, it should use the package lwarp with option mathjax.
Two CSS files should be mentioned. Then the new VersoTeX package vt.sty
is necessagy. Overall, the source file should start with
```
\documentclass{article}
\usepackage[mathjax]{lwarp}
\CSSFilename{../jqueryui/jquery-ui.css}
\CSSFilename{../vt.css}
\MathJaxFilename{../myMathJax.txt}
\usepackage{../vt}

 Right after that you may put
\usepackage{} with the names of packages used in your TeX source file.
It makes sense to keep the list short. For example, amsthm is somehow
duplicated in vt.sty. Customization of it works without amsthm.sty,
but the \theoremstyle commands should be removed and the fonts for the title
and the text of theorem are to be specified for each type of theorems.
For example,
\newtheorem{Th}{Theorem}[section]{\bf}{\it}
\newtheorem{rem}[Th]{Remark}{\bf}{\rm}.

Due to requirement of lwarp, custom definitions used in mathematical formulas
should be repeated. The second copy should be the argument of the command
\CustomizeMathJax. For example, the original custom definition
\def\R{\mathbb R} is repeated as \CustomizeMathJax{\def\RR{\mathbb R}}

```
\begin{document}
``` 

The environment proof is taken care of by VersoTeX, hence you do not
need to define them here.

The syntax for the commands 
```
\title, \author, \date, \maketitle, \section, \subsection, \subsubsection,
\label, \ref, \footnote
```
is usual. Inside math formulas everything is usual, or, to be more
precise, as MathJax requires. 

LaTeX commands \cite and \item are to be replaced by \ocite and \oitem, respectively.
Each command \ocite must refer to a single bibliographic item. So, commands \cite{X,Y,...}
with several bibliographic items X,Y,... must be split to \ocite{X}, \ocite{Y}, ...
This splitting is annoying but unavoidable, because after compilation each \ocite
turns into a pop up command with a single reference.

The source LaTeX file is assumed to contain the bibliogrphy part and references made by bibtex.

The rest of preparations are done by several search-replace command. They are collected 
in a file vt.vim formed of macros in the VIM macro language.
Let me remind that Vim is a programmer's text editor, a
clone of Vi. Vim is freely available for any operating system, see 
[www.vim.org](http://www.vim.org). 

Answers to other TeX questions can be found in a few sample files of
articles by the author which you can find in this directory. 

Enjoy!

### 3.2. The environment needed for running VersoTeX ### 

First of all, the TeX should be installed and working. Any major TeX
distribution, like TeX Live, Mac TeX or MikTex, should work.  

Compiling a TeXVizor article by VersoTeX-2 requires an installed VIM editor and
two files:
- *vt.vim*, a collection of macros in the VIM macro language; 
- *vt.sty*, a LaTeX style file. 

### 3.3. Running VersoTeX ###

Compilation of a LaTeX source file is performed as follows. The source
file, say *article.tex*, ajusted as described above in section 3.1, is open in Vim. 
Then, the macros from *vt.vim* 
are to be run in Vim. You just need to type in the command mode
``` :source vt.vim``` 
Here we assume that vt.vim is located in the same directory as
the source TeX file. 

Then you have to run pdflatex on the result. Surely, this compilation 
would fail. It is needed for running lwarp. It can be done as described in 
lwarp documentation, see, e.g., https://latex.us/macros/latex/contrib/lwarp/lwarp.pdf. 
It can be done by lwarp commands:

lwarpmk print
lwarpmk htlm

The command *lwarpmk print* would not succeed, but it is necessary for running *lwarpmk html*.
The latter may succeed. If not, run *lwarpmk pdftohtml*. It should produce lots of files.
In particular, *article.html*. You may try to open it in a browser. 

In order to work with it in browser, you have to make a few changes in it.
1. Delete from article.html two commands containg  <nav  and </nav
2. Replace each character ’ with character '. This can be done in Vim by the command :%s/’/'/g.
3. Also in Vim apply the search-replace command  :%s/Home\%(.\{-}\)</</cg and say n (no) for the first two opportunities
   and a (all) to make all the subsequent substitutions.
4. Also in Vim apply the search-replace command :%s/index-0.html//cg.
5. Unity all lines. In Vim it can be done by the command  :%s/\n/ /g|w

After that the article.html file would open in a browser as TeXVizor file. Unless there was a crucial mistake in the
process of conversion described above. Lwarp has a wounderfull adaptation ability. So, repeated usage of 
*lwarpmk html* may fix some compilation problems. If not, read the section on troubleshooting below.
So far, all the article accepted to Arnold Mathematical Journal in 2025 was converted to TeXVizor files.


