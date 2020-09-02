import Vue from 'vue';
// @ts-ignore
import VueCodemirror from 'vue-codemirror';

// import base style
// import 'codemirror/lib/codemirror.css';

// import more codemirror resource...


import 'codemirror/lib/codemirror.css';
// require active-line.js
import 'codemirror/addon/selection/active-line.js';
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js';
// hint
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/match-highlighter.js';
// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/keymap/sublime.js';
// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';
// 编辑的主题文件
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/base16-light.css';


// language
import 'codemirror/mode/apl/apl.js';
import 'codemirror/mode/asciiarmor/asciiarmor.js';
import 'codemirror/mode/asn.1/asn.1.js';
import 'codemirror/mode/asterisk/asterisk.js';
import 'codemirror/mode/brainfuck/brainfuck.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/clojure/clojure.js';
import 'codemirror/mode/cmake/cmake.js';
import 'codemirror/mode/cobol/cobol.js';
import 'codemirror/mode/coffeescript/coffeescript.js';
import 'codemirror/mode/commonlisp/commonlisp.js';
import 'codemirror/mode/crystal/crystal.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/cypher/cypher.js';
import 'codemirror/mode/d/d.js';
import 'codemirror/mode/dart/dart.js';
import 'codemirror/mode/diff/diff.js';
import 'codemirror/mode/django/django.js';
import 'codemirror/mode/dockerfile/dockerfile.js';
import 'codemirror/mode/dtd/dtd.js';
import 'codemirror/mode/dylan/dylan.js';
import 'codemirror/mode/ebnf/ebnf.js';
import 'codemirror/mode/ecl/ecl.js';
import 'codemirror/mode/eiffel/eiffel.js';
import 'codemirror/mode/elm/elm.js';
import 'codemirror/mode/erlang/erlang.js';
import 'codemirror/mode/factor/factor.js';
import 'codemirror/mode/fcl/fcl.js';
import 'codemirror/mode/forth/forth.js';
import 'codemirror/mode/fortran/fortran.js';
import 'codemirror/mode/gas/gas.js';
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/gherkin/gherkin.js';
import 'codemirror/mode/go/go.js';
import 'codemirror/mode/groovy/groovy.js';
import 'codemirror/mode/haml/haml.js';
import 'codemirror/mode/handlebars/handlebars.js';
import 'codemirror/mode/haskell-literate/haskell-literate.js';
import 'codemirror/mode/haskell/haskell.js';
import 'codemirror/mode/haxe/haxe.js';
import 'codemirror/mode/htmlembedded/htmlembedded.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/idl/idl.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jinja2/jinja2.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/julia/julia.js';
import 'codemirror/mode/livescript/livescript.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/mathematica/mathematica.js';
import 'codemirror/mode/mbox/mbox.js';
import 'codemirror/mode/meta.js';
import 'codemirror/mode/mirc/mirc.js';
import 'codemirror/mode/mllike/mllike.js';
import 'codemirror/mode/modelica/modelica.js';
import 'codemirror/mode/mscgen/mscgen.js';
import 'codemirror/mode/mumps/mumps.js';
import 'codemirror/mode/nginx/nginx.js';
import 'codemirror/mode/nsis/nsis.js';
import 'codemirror/mode/ntriples/ntriples.js';
import 'codemirror/mode/octave/octave.js';
import 'codemirror/mode/oz/oz.js';
import 'codemirror/mode/pascal/pascal.js';
import 'codemirror/mode/pegjs/pegjs.js';
import 'codemirror/mode/perl/perl.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/pig/pig.js';
import 'codemirror/mode/powershell/powershell.js';
import 'codemirror/mode/properties/properties.js';
import 'codemirror/mode/protobuf/protobuf.js';
import 'codemirror/mode/pug/pug.js';
import 'codemirror/mode/puppet/puppet.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/q/q.js';
import 'codemirror/mode/r/r.js';
import 'codemirror/mode/rpm/rpm.js';
import 'codemirror/mode/rst/rst.js';
import 'codemirror/mode/ruby/ruby.js';
import 'codemirror/mode/rust/rust.js';
import 'codemirror/mode/sas/sas.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/scheme/scheme.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/sieve/sieve.js';
import 'codemirror/mode/slim/slim.js';
import 'codemirror/mode/smalltalk/smalltalk.js';
import 'codemirror/mode/smarty/smarty.js';
import 'codemirror/mode/solr/solr.js';
import 'codemirror/mode/soy/soy.js';
import 'codemirror/mode/sparql/sparql.js';
import 'codemirror/mode/spreadsheet/spreadsheet.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/stex/stex.js';
import 'codemirror/mode/stylus/stylus.js';
import 'codemirror/mode/swift/swift.js';
import 'codemirror/mode/tcl/tcl.js';
import 'codemirror/mode/textile/textile.js';
import 'codemirror/mode/tiddlywiki/tiddlywiki.js';
import 'codemirror/mode/tiki/tiki.js';
import 'codemirror/mode/toml/toml.js';
import 'codemirror/mode/tornado/tornado.js';
import 'codemirror/mode/troff/troff.js';
import 'codemirror/mode/ttcn-cfg/ttcn-cfg.js';
import 'codemirror/mode/ttcn/ttcn.js';
import 'codemirror/mode/turtle/turtle.js';
import 'codemirror/mode/twig/twig.js';
import 'codemirror/mode/vb/vb.js';
import 'codemirror/mode/vbscript/vbscript.js';
import 'codemirror/mode/velocity/velocity.js';
import 'codemirror/mode/verilog/verilog.js';
import 'codemirror/mode/vhdl/vhdl.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/wast/wast.js';
import 'codemirror/mode/webidl/webidl.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/xquery/xquery.js';
import 'codemirror/mode/yacas/yacas.js';
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter.js';
import 'codemirror/mode/yaml/yaml.js';
import 'codemirror/mode/z80/z80.js';
// you can set default global options and events when Vue.use
Vue.use(VueCodemirror,
    /* {
      options: { theme: 'base16-dark', ... },
      events: ['scroll', ...]
    } */
);
