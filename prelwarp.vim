"Containers

:%s/\\begin{\([A-Za-z]*\)}\_s*\\label{\([^{]\+\)}\(\_.\{-}\)\\end{\1}/<div 
id="C-\2" class="container">\r\\begin{\1}\\label{\2}\3\\end{\1}\r<\/div>/g

:%s/\\begin{\([A-Za-z]*\)}\[\([^\[]\+\)\]\_s*\\label{\([^{]\+\)}\(\_.\{-}\)\\end{\1}/<div id="C-\3" class="container">\r\\begin{\1}\[\2\]\\label{\3}\4\\end{\1}\r<\/div>/g

:%s/\\begin{figure}\(\_.\{-}\)\\label{\(.\{-}\)}\_s*\\end{figure}/<div
id="C-\2" class="container" style="text-align:center">\r\\begin{figure}\1\\label{\2}\\end{figure}\r<\/div>/g

:%s/\\begin{table}\(\_.\{-}\)\\label{\(.\{-}\)}\(\_.\{-}\)\\end{table}/<div
id="C-\2"  class="container">\r\\begin{table}\1\\label{\2}\3\\end{table}\r<\/div>/g

:%s/\\section{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s\)*\\label{\(.\{-}\)}/\\section[\3]{\1}\\label{\3}/g

:%s/\\subsection{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s*\)\\label{\(.\{-}\)}/\\subsection[\3]{\1}\\label{\3}/g

:%s/\\subsubsection{\(\%(\a\|\d\|-\|\\'\|"\|\\`\|\_s\|\\\$\)*\)}\(\_s*\)\\label{\(.\{-}\)}/\\subsubsection[\3]{\1}\\label{\3}/g

:%s/\\item/\\oitem/g

:%s/\\subsection\*/\\subsectionX/g

"bibliography

:%s/\\begin{thebibliography}\(\_.\{-}\)\\end{thebibliography}/\\begin{thebibliography}\1\\end{thebibliography}\r\r\\begin{shadebibliography}\1\\end{shadebibliography}/g

/\\begin{shadebibliography}

:.,$s/\\bibitem{\%(\_.\{-}\)}/\\shadebibblock/g

/\\begin{shadebibliography}

:.,$s/\\bibitem/\\shadebibblock/g

:.,$s/\\cite/\\ocite/gc

:.,$s/,/}, \\ocite{/gc

