(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{404:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"socket-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Socket.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/network/virtual_/Socket.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/network/virtual_/Socket.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Virtual socket implementation. Can be used as a bidirectional data transfer between different threads of the same process. "),a("br"),t._v(" Under the hood it uses a pair of "),a("router-link",{attrs:{to:"/api/latest/oatpp/network/virtual_/Pipe/#pipe"}},[t._v("oatpp::network::virtual_::Pipe")]),t._v(". One to write data to, and one to read data from. Extends "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/base/Countable/#countable"}},[t._v("oatpp::base::Countable")]),t._v(" and "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("Virtual destructor. Close corresponding pipes.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("Read data from socket. "),a("ul",[t._m(17),t._m(18),a("li",[a("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),t._m(19)])]),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("Write data to socket. "),a("ul",[t._m(22),t._m(23),a("li",[a("strong",[t._v("@param")]),t._v(" action - async specific action. If action is NOT "),a("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action-type-none"}},[t._v("oatpp::async::Action::TYPE_NONE")]),t._v(", then caller MUST return this action on coroutine iteration. ")],1),t._m(24)])]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),a("p",[t._v("Close socket pipes.")]),t._v(" "),t._m(45)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/network/virtual_/Socket.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" virtual_ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-socket"}},[t._v("Socket")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Socket>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-createshared"}},[t._v("createShared")])]),t._v(" "),a("td",[t._v("Create shared socket.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-~socket"}},[t._v("~Socket")])]),t._v(" "),a("td",[t._v("Virtual destructor. Close corresponding pipes.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-setmaxavailabletoreadwrtie"}},[t._v("setMaxAvailableToReadWrtie")])]),t._v(" "),a("td",[t._v("Limit the available amount of bytes to read from socket and limit the available amount of bytes to write to socket. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("v_io_size")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-read"}},[t._v("read")])]),t._v(" "),a("td",[t._v("Read data from socket.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("v_io_size")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-write"}},[t._v("write")])]),t._v(" "),a("td",[t._v("Write data to socket.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-setoutputstreamiomode"}},[t._v("setOutputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-getoutputstreamiomode"}},[t._v("getOutputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set OutputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-setinputstreamiomode"}},[t._v("setInputStreamIOMode")])]),t._v(" "),a("td",[t._v("Set InputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::IOMode")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-getinputstreamiomode"}},[t._v("getInputStreamIOMode")])]),t._v(" "),a("td",[t._v("Get InputStream I/O mode.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-getoutputstreamcontext"}},[t._v("getOutputStreamContext")])]),t._v(" "),a("td",[t._v("Get output stream context.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::Context&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-getinputstreamcontext"}},[t._v("getInputStreamContext")])]),t._v(" "),a("td",[t._v("Get input stream context.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#socket-close"}},[t._v("close")])]),t._v(" "),a("td",[t._v("Close socket pipes.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-socket","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::Socket")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" pipeIn - pipe to read data from. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" pipeOut - pipe to write data to. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::createShared")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Create shared socket. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" pipeIn - pipe to read data from. ")]),a("li",[a("strong",[t._v("@param")]),t._v(" pipeOut - pipe to write data to. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("code",[t._v("std::shared_ptr")]),t._v(" to Socket. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Socket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Pipe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" pipeOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-socket-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-socket-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::~Socket")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("Socket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-setmaxavailabletoreadwrtie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setmaxavailabletoreadwrtie","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::setMaxAvailableToReadWrtie")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Limit the available amount of bytes to read from socket and limit the available amount of bytes to write to socket. "),e("br"),this._v(" This method is used for testing purposes only."),e("br"),this._v(" "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" maxToRead - maximum available amount of bytes to read. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" maxToWrite - maximum available amount of bytes to write. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAvailableToReadWrtie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_io_size maxToRead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_io_size maxToWrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-read","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::read")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" data - buffer to read data to. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - buffer size. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - actual amount of data read from socket. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-write","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::write")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" data - data to write to socket. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" count - data size. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - actual amount of data written to socket. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_io_size "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_buff_size count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-setoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::setOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOutputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-getoutputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getoutputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::getOutputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set OutputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-setinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-setinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::setInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" ioMode ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode ioMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-getinputstreamiomode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getinputstreamiomode","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::getInputStreamIOMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get InputStream I/O mode. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOMode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamIOMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-getoutputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getoutputstreamcontext","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::getOutputStreamContext")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get output stream context. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOutputStreamContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-getinputstreamcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-getinputstreamcontext","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::getInputStreamContext")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get input stream context. "),e("ul",[e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStreamContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"socket-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socket-close","aria-hidden":"true"}},[this._v("#")]),this._v(" Socket::close")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);