(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{408:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"不用加减乘除做加法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不用加减乘除做加法"}},[s._v("#")]),s._v(" 不用加减乘除做加法")]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。")]),s._v(" "),a("h2",{attrs:{id:"题目解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目解答"}},[s._v("#")]),s._v(" 题目解答")]),s._v(" "),a("p",[s._v("不用加减乘除做加法，我第一时间想到的就是用位运算，毕竟计算机是二进制的，所有的操作都是以位运算为基础。")]),s._v(" "),a("p",[s._v("那么假设我们要求7+5=12，二进制就是111+101=1100，我们发现也就是需要处理二进制进位的问题，可是如何处理二进制进位呢？")]),s._v(" "),a("p",[s._v("如果学过计算机体系结构中的进位器就知道怎么做了，不过没学过也没关系，我们可以一步一步的实验，反正位运算就那几种。")]),s._v(" "),a("p",[s._v("先实验下异或："),a("code",[s._v("res1=111^101=010")]),s._v("，(2)（单纯地相加各位的值，没有算进位。）")]),s._v(" "),a("p",[s._v("再实验下与："),a("code",[s._v("res2=111&101=101")]),s._v("，（判断是否有同1操作，同1操作需要进位。）")]),s._v(" "),a("p",[s._v("或就不用试了，因为与和或是相对的。")]),s._v(" "),a("p",[s._v("好像没什么头绪呀，都只是在这几位操作。")]),s._v(" "),a("p",[s._v("我们发现要产生进位必不可少的就是要使用移位（这里需要使用左移<<）操作符，否则永远都是那几位在运算。")]),s._v(" "),a("p",[s._v("我们知道同1时才需要进位，也就是我们先需要通过与判断同1，再左移一位来实现进位，（这个进位操作是对于所有位。）。")]),s._v(" "),a("p",[a("code",[s._v("res2<<1=1010")]),s._v(",（10）")]),s._v(" "),a("p",[a("code",[s._v("res3=1010^010=1000")]),s._v("，（8）")]),s._v(" "),a("p",[a("code",[s._v("res4=1010&010=010")]),s._v(";（再次判断是否有同1操作需要进位。）")]),s._v(" "),a("p",[s._v("我们好像得到了最高位的最终结果（从右数111的第三位和101的第三位的相加进位），但是好像其他位还可以进位。")]),s._v(" "),a("p",[s._v("（进位相当于冒泡操作，还可以进位代表泡泡还没有全部冒上来）")]),s._v(" "),a("p",[a("code",[s._v("res4<<1=100")]),s._v(",（4）")]),s._v(" "),a("p",[a("code",[s._v("res5=1000^100=1100")]),s._v("，（我们最终要的结果。）")]),s._v(" "),a("p",[a("code",[s._v("res6=1000&100=0")]),s._v("(代表没有同1操作了，也就是不用进位了)")]),s._v(" "),a("p",[a("code",[s._v("res6<<1=0")]),s._v(";")]),s._v(" "),a("p",[s._v("细心的读者已经发现了一点就是"),a("code",[s._v("（5+7=10+2=8+4）")]),s._v("，也就是我们最终把"),a("code",[s._v("5+7")]),s._v("转化为了"),a("code",[s._v("8+4")]),s._v("，就是如此神奇。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" tmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);