(self.webpackChunk=self.webpackChunk||[]).push([[4785,2330],{4785:(t,e,n)=>{var r;r=n(25747),n(82330),r.defineMode("yaml-frontmatter",(function(t,e){var n=r.getMode(t,"yaml"),i=r.getMode(t,e&&e.base||"gfm");function a(t){return 2==t.state?i:n}return{startState:function(){return{state:0,inner:r.startState(n)}},copyState:function(t){return{state:t.state,inner:r.copyState(a(t),t.inner)}},token:function(t,e){if(0==e.state)return t.match("---",!1)?(e.state=1,n.token(t,e.inner)):(e.state=2,e.inner=r.startState(i),i.token(t,e.inner));if(1==e.state){var a=t.sol()&&t.match(/(---|\.\.\.)/,!1),s=n.token(t,e.inner);return a&&(e.state=2,e.inner=r.startState(i)),s}return i.token(t,e.inner)},innerMode:function(t){return{mode:a(t),state:t.inner}},blankLine:function(t){var e=a(t);if(e.blankLine)return e.blankLine(t.inner)}}}))},82330:(t,e,n)=>{!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var r=e.peek(),i=n.escaped;if(n.escaped=!1,"#"==r&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==r?n.inlinePairs++:"}"==r?n.inlinePairs--:"["==r?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!i&&","==r)return e.next(),"meta";if(n.inlinePairs>0&&!i&&","==r)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==r,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(25747))}}]);
//# sourceMappingURL=4785.hotloader.js.map