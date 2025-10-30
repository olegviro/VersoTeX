"In html file after compilation:

/nav
"for killing lines with <nav> and </nav>

:%s/’/'/cg

:%s/Home\%(.\{-}\)</</cg

:%s/\n/ /g|w

:%s/index-0.html//cg


