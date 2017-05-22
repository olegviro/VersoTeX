"cleaning: erasing old auxiliary and output files

:!rm %:t:r.html

:!rm T-%:t:r.*

:!rm M?-%:t:r.*

" Cleaning of Springer preamble
 
"%s/^\\idline/%\\idline/g

":%s/^\\copyholdername/%\\copyholdername/g

":%s/^\\DOImsnr{/%\\DOImsnr/g

":%s/^\\OFyear{/%\\OFyear/g

":%s/^\\DOIyear{/%\\DOIyear/g

":%s/\\let\\ESM=N/%\\let\\ESM=N/g

":%s/\\journalname/%\\journalname/g

":%s/\\journalnumber/%\\journalnumber/g

":%s/\\orcid/%\\orcid/g

":%s/\\let\\revisionstage/%\\let\\revisionstage/g

":%s/\\let\\updationone/%\\let\\updationone/g

:%s/ \\and/,/g

":%s/\\titlerunning/%\\titlerunning/g

":%s/\\authorrunning/%\\authorrunning/g

:%s/\\citealt/\\cite/g
:%s/\\pagination{\(.\{-}\)}/ /g

:%s/\\pagination/ /g

:%s/\\pg/ /g

:%s/\\break/ /g

":%s/\\input{glov2/%\\input{glov2/g

:w


" Part 1: separating formulas in the initial file (say, X.tex). 
" The goal is to make file
" T-X.tex, in which the original math environments (including all
" inline formulas) are replaced by their names that pass to the 
" result of applying TeX without changes,
" and a few Mn-X.vim files, which are source files for replacing
" the names of formulas by the formulas

" step 1. marking formulas of the first group of math environments
" consisting of inline formulas and math environments which cannot
" be parts of each other


:%s/\\begin{\(equation\|eqnarray\|align\|flalign\|alignat\|gather\|multline\)\*\}/\\begin{math1}\\begin{\1\*}/g

:%s/\\end{\(equation\|eqnarray\|align\|flalign\|alignat\|gather\|multline\)\*\}/\\end{\1\*}\\end{math1}/g

:%s/\\\$/backslashdollar/g

:%s/\$\$\(\_.\{-}\)\$\$/\\begin{math1}\\begin{equation\*}\1\\end{equation\*}\\end{math1}/g

:%s/\$\(\_.\{-}\)\$/\\\$\\begin{math1}\1\\end{math1}\\\$/g

:%s/backslashdollar/\\\$/g

:%s/\\begin{\(multline\|equation\|eqnarray\|align\|alignat\)}/\\NuM{\\begin{math1}\\begin{\1}/g

:%s/\\end{\(multline\|equation\|eqnarray\|align\|flalign\|alignat\)}/\\end{\1}\\end{math1}}/g

:%s/\\begin{onlyHTML}\(\_.\{-}\)\\end{onlyHTML}/\\begin{math1}\1\\end{math1}/g


":%s/\\eqref{\(.\{-}\)}/\\begin{math1}\\eqref{\1}\\end{math1}\\oeqref{\1}/g

"insert templates Oo1ooO for the formula's names of the first group 

:%s/\\begin{math1}/\\begin{math1}Oo1ooO\r/g

"numbering

:let i=1 | g/\\begin{math1}Oo1o/s//\='\begin{math1}Oo1o'.i/g |let i=i+1

"make file M1-X.tex for work with the formulas of the first group

:w M1-%

"make the working version of the main file T-X.tex

:w T-%:s?M1-??

":w! stage0.tex

" and now we switch to M1-X.tex

:n! M1-%

"in M1-X.tex the line is unlimitted

:set textwidth=0

"go to the first line

:execute "normal gg0"

"put marker

:execute "normal cwOo1o0"

"delete the beginning of file till the first formula 

:%s/Oo1o0\%(\_.\{-}\)Oo1o1oO/Oo1o1oO/g

"remove text between the marked formulas 

:%s/\\end{math1}\%(\_.\{-}\)\\begin{math1}/\\endmath1/g

"go to the last line

:execute "normal G$"

"mark it (say the last word)

:execute "normal oLLLAAASSSTTT"

"remove the segment after the last marked formula

:%s/\\end{math1}\%(\_.\{-}\)LLLAAASSSTTT/\\endmath1/g

"unite all the lines (replace the ends of lines with space characters)

:%s/\n/ /g

"escape the characters for making regex commands

:%s/\\/\\\\/g

:%s/&/\\&/g

:%s/\//\\\//g

:%s/\./\\\./g

:%s/\^/\\\^/g

:%s/</\\\&lt; /g

:%s/>/\\\&gt; /g

"build regex substitute commands

:%s/Oo1o\(\d\+\)oO\(\_.\{-}\)\\\\endmath1/:%s\/Oo1o\1oO\/\2\/g\r/g

"save M1-X.tex as unix file

:w ++ff=unix

"copy the current file M1-X.tex to the first group replacement file

:!cp % %:t:r.vim

"the end of olatex-1.vim, start of olatex-2.vim 

"make yet another set of replacement commands for moving labels from
"the formulas of the first stage to the main tex-file

:%g!/label/d

"add to each label \end{label}:

:%s/\\label{\([^}]\+\)}/\\\\label{\1}\\end{label}/g

"erase the part of the equation in front of label:

:%s/Oo1o\(\d\+\)oO\/\%(.\{-}\)\\\\label/Oo1o\1oO\/\\\\label/g

"erase the part of the equation between two labels

:%s/\\end{label}\%(.\{-}\)\\\\label/\\endlabel\\\\label/g

"erase the part of the equation behind the last label

:%s/\\end{label}\%(.\{-}\)\/g/\\endlabel\/g/g

"after this each line looks as follows: 
" :%s/Oo1o\1oO/\\label{MATH\2}\\endlabel\\label{"MATH\3}...\\endlabel\/g/g

"":%s/\\label{\(.\{-}\)}\\endlabel/<div id=\\\"\1\\\">/g
""
"""after this each line looks as follows: 
""" :%s/Oo1o\1oO/<div id=\\\"MATH\2\\\"><div id=\\\"MATH\3\\\">.../g
""
"":%s/:%s\/Oo1o\(\d\+\)oO\/\(.\{-}\)\/g/%s\/Oo1o\1oO\/\2\rOo1o\1oO\2\/g/g
""
"":execute "normal gg0"
""
"":exec "normal j"
""
"":let lnum =2
"":while lnum<=line('$')
"":.,.s/<div \(.\{-}\)>/<\\\/div>/g
"":exec "normal 2j" 
"":let lnum = lnum + 2 
"":endwhile
""
"":%s/>\_s*Oo1o/>Oo1o              
""
:%s/\\endlabel//g

":%s/\\label/\\Label/g

"prepare substitution placing Label in front of equation's code

:%s/:%s\/Oo1o\(\d\+\)oO\/\(.\{-}\)\/g/:%s\/Oo1o\1oO\/\2{Oo1o\1oO}\2\/g/g

:%s/\\\\label{\([^{]\+\)}{Oo/\\\\Label{\1}{Oo/g

:%s/\\\\label{\([^{]\+\)}\\\\Label/\\\\Label{\1}\\\\Label/g

"now each line looks like that
" :%s/Oo1onoO/\\Label{ll}{Oo1onoO}\\label{ll}/g

""
"""save the file (still as M1-X.tex)  

:w ++ff=unix


"load again the main file

:n! T-%:s?M1-??

" Remove the first stage formulas from it, together with math1 
" pseudoenvironment, leaving only Oo1onoO, 
" where n is the number of the formula

:%s/\\begin{math1}\%(\_.\{-}\)Oo1o\(\d\+\)oO\%(\_.\{-}\)\\end{math1}/Oo1o\1oO/g

:w
"the end of olatex-2.vim

"insert the Labels and labels for equations with labels


:source %:s?T-?M1-?

:%s/\\NuM{\\Label{\([^{]\+\)}/\\Label{\1}{\\NuM/g

:%s/\\NuM{\\Label{\([^{]\+\)}/\\Label{\1}{\\NuM/g

:%s/\\NuM{\\Label{\([^{]\+\)}/\\Label{\1}{\\NuM/g

"assume that there are no equations with more then three labels :)

":%s/\\Label{\([^{]\+\)}\([^{]\)\(.\{-}\)oO/\\Label{\1}{\2\3oO}/g   

":%s/\\Label{\([^{]\+\)}\([^{]\)\(.\{-}\)oO/\\Label{\1}{\2\3oO}/g   

":%s/\\Label{\([^{]\+\)}\([^{]\)\(.\{-}\)oO/\\Label{\1}{\2\3oO}/g   


"replace \\ with <br>

:%s/\\newline/\\<br\\>/g

"removing gaps >1 between non-empty rows

:g/^$/,/./-j

"Insert paragraphs:

:%s/^\_$\_s\(\w\)/\\<\/p\\>\r\r\\<p\\>\r\1/g

"Convert items to environments and modifying the lists:
"itemize


":%s/\\begin{itemize}\_s*\\item/\\begin{oitemize}\r\\begin{oitem}/g

":%s/\\end{itemize}/\\end{oitem}\r\\end{oitemize}/g

"enumerate

":%s/\\begin{enumerate}\_s*\\item/\\begin{oenumerate}\r\\begin{oitem}/g

":%s/\\end{enumerate}/\\end{oitem}\r\\end{oenumerate}/g


:%s/\\begin{\(.\{-}\)}\_s*\\label{\(.\{-}\)}\(\_.\{-}\)\\end{\1}/\\<div id="\2" class="container"\\>\r\\begin{\1}\\label{\2}\3\\end{\1}\r\\<\/div\\>/g

:%s/\\begin{\(.\{-}\)}\[\([^\[]\+\)\]\_s*\\label{\(.\{-}\)}\(\_.\{-}\)\\end{\1}/\\<div id="\3" class="container"\\>\r\\begin{\1}\[\2\]\\label{\3}\4\\end{\1}\r\\<\/div\\>/g

:%s/\\begin{figure}\(\_.\{-}\)\\label{\(.\{-}\)}\_s*\\end{figure}/\\<div id="\2" class="container"\\>\r\\begin{figure}\1\\label{\2}\\end{figure}\r\\<\/div\\>/g

:%s/\\begin{table}\(\_.\{-}\)\\label{\(.\{-}\)}\(\_.\{-}\)\\end{table}/\\<div  id="\2"  class="container"\\>\r\\begin{table}\1\\label{\2}\3\\end{table}\r\\<\/div\\>/g

:%s/\\section{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s\)*\\label{\(.\{-}\)}/\\section[\3]{\1}\\label{\3}/g

:%s/\\subsection{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s*\)\\label{\(.\{-}\)}/\\subsection[\3]{\1}\\label{\3}/g

:%s/\\subsubsection{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s*\)\\label{\(.\{-}\)}/\\subsubsection[\3]{\1}\\label{\3}/g

:%s/\\item/\\oitem/g

:%s/\\qed\_s*/\\<span class="ltxAlignFloatright"\\>\r\\begin{verbatim}$\\square$\\end{verbatim}\r\\<\\\/span\\>/g

:%s/\\subsection\*/\\subsectionX/g

:%s/\\section\*/\\sectionX/g

"convert tabular using the array package


:let s=search('\\begin{tabular}{[l,r,c,|]*\([c,r,l]\)[|,},>]')
:while s>0
:%s/\\begin{tabular}{\([l,r,c,|]*\)\([l,c,r]\)\([|,},>]\)/\\begin{tabular}{\1>{\\<td class="Td Align\2 "\\>}\2<{\\<\/td\\>}\3/g
:let s=search('\\begin{tabular}{[l,r,c,|]*[c,r,l][|,},>]')
:endwhile

:%s/\\>}|>{\\<td class="Td /\\>}>{\\<td class="Td BorderL /g

:%s/"\\>}\([c,l,r]\)<{\\<\/td\\>}|}/BorderR"\\>}\1<{\\<\/td\\>}}/g

:%s/tabular}{|>{\\<td class="Td /tabular}{>{\\<td class="Td BorderL /g 

:%s/\\end{tabular}/\\end{tabular}\r\\<\/table\\>

:%s/\\begin{tabular}{/\\<table class="Tabular"\\>\r\\begin{tabular}{/g

:%s/\\begin{tabular}{>{\\<td class="Td /\\begin{tabular}{>{\\<tr class="Tr"\\>\\<td class="Td /g

:%s/\\begin{tabular}{|>{\\<td class="Td /\\begin{tabular}{>{\\<tr class="Tr"\\>\\<td class="Td BorderL /g


:%s/\\<\/td\\>}}/\\<\/td\\>\\<\/tr\\>}}/g


:%s/Alignl /AlignLeft /g

:%s/Alignc /AlignCenter /g

:%s/Alignr /AlignRight /g

:%s/\\\\\(\_s*\)\\hline\(\_s*\)\\end{tabular}/BorderB\\end{tabular}\r/g

:%s/\\hline/BorderT/g

"it will be finished at the html-stage

":%s/\\begin{\(figure\)}\(\_.\{-}\(\\end\)\@!\)\\label{\(.\{-}\)}\(\_.\{-}\(\\begin\)\@!\)\\end{\1}/\\begin{container}{\4}\r\\begin{\1}\2\\label{\4}\5\\end{\1}\r\\end{container}/g


"bibliography


:%s/\\begin{thebibliography}\(\_.\{-}\)\\end{thebibliography}/\\begin{thebibliography}\1\\end{thebibliography}\r\r\\begin{shadebibliography}\1\\end{shadebibliography}/g


/\\begin{shadebibliography}

:.,$s/\\bibitem{\%(\_.\{-}\)}/\\shadebibblock/g

/\\begin{shadebibliography}

:.,$s/\\bibitem/\\shadebibblock/g

/\\begin{thebibliography}

/\\bibitem

/\\bibitem

:.,$s/\\bibitem/\\<br\\>\r\\bibitem

":%s/\\caption{/\\Caption{/g

:%s/\\cite{/\\ocite{/g

:%s/{\\bf\_s/\\textbf{/g

:%s/{\\em\_s/\\emph{/g

:%s/{\\it\_s/\\textit{/g

:%s/{\\rm\_s/\\textrm{/g

:%s/{\\sfit\_s/\\emph{/g

:%s/{\\bfit\_s/\\textbf{/g

:%s/\\`\(\a\)/{\1\\\&\\\#768;}/g
:%s/\\`{\(\a\)}/{\1\\\&\\\#768;}/g

:%s/\\'{\(\a\)}/{\1\\\&\\\#769;}/g
:%s/\\'\(\a\)/{\1\\\&\\\#769;}/g

:%s/\\^\(\a\)/{\1\\\&\\\#770;}/g
:%s/\\^{\(\a\)}/{\1\\\&\\\#770;}/g

:%s/\\\~\(\a\)/{\1\\\&\\\#771;}/g
:%s/\\\~{\(\a\)}/{\1\\\&\\\#771;}/g

:%s/\\u{\(\a\)}/{\1\\\&\\\#774;}/g

:%s/\\D{\(\a\)}/{\1\\\&\\\#775;}/g

:%s/\\"\(\a\)/{\1\\\&\\\#776;}/g
:%s/\\"{\(\a\)}/{\1\\\&\\\#776;}/g


:%s/\\v{\(\a\)}/{\1\\\&\\\#780;}/g

:%s/\\c{\(\a\)}/{\1\\\&\\\#807;}/g


:%s/---/{\\\&mdash;}/g
:%s/--/{\\\&ndash;}/g


:%s/{\\l}/{\\\&lstrok;}/g

:%s/\\c{a}/{\\\&aogon;}/g

:%s/\\u{i}/{\\\&\\\#301;}/g


":%s/\\ref{\([^}]*\)}/\\ref{\1}\\oref{\1}/g

":%s/\\eqref{/\\oeqref{/g

":%s/{Th}/{oTh}/g

":%s/{Jst}/{oJst}/g

":%s/{prop}/{oprop}/g

":%s/{Sm}/{oSm}/g

":%s/{Pz}/{oPz}/g

:w
"the end of olatex-4.vim

:!latex %
" -interaction=batchmode %

:!latex %
"-interaction=batchmode  %

:!latex %
"-interaction=batchmode %

:!catdvi -e 1 -U %:t:r.dvi | sed -re "s/([^^[:space:]])\s+/\1 /g" > %:t:r:s?T-??.html


"open this html file

:e! %:t:r:s?T-??.html

"remove page numbers

":%s/\(\d\+\)//g

:%s///g

:%s/\(\a\)-\n\(a\)/\1-\2/g

" remove brackets in references

:%s/shadebib.\[\(\_.\{-}\)\]/shadebib.\1/g

"put horizontal lines in tables

:%s/Tr\(\s\)*\"><td\(\_.[^<]\{-}\)BorderT/Tr BorderT\"><td\2/g 
:%s/Tr\(\s\)*\">\(.\{-}\)BorderB/Tr BorderB\">\2/g

":%s/BorderT\(\s\)*\">\(\_s\)*<td\(\_.[^<]\{-}\)>\(\_s\)*<\/td>\_s*<\/table>/BorderT\"><\/table>/g

"insert formulas


""":source M2-%:t:r.vim


:source M1-%:t:r.vim

:%s/MML-HTML/MML_HTML/g 

:w



