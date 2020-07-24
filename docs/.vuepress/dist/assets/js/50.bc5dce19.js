(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{421:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"simpleudpstreamprovider-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-hpp"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-ssdp/blob/master/src/oatpp-ssdp/SimpleUdpStreamProvider.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-ssdp/issues/new?title=API%20question&body=In%20file:%20oatpp-ssdp/SimpleUdpStreamProvider.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp-ssdp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp-ssdp/SimpleUdpStreamProvider.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"simpleudpstreamprovider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider")]),t._v(" "),a("p",[t._v("Simple implementation of provider of UDP streams.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" ssdp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleUdpStreamProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ServerConnectionProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("explicit")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simpleudpstreamprovider-simpleudpstreamprovider"}},[t._v("SimpleUdpStreamProvider")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simpleudpstreamprovider-close"}},[t._v("close")])]),t._v(" "),a("td",[t._v("Close accept-socket.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<IOStream>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simpleudpstreamprovider-getconnection"}},[t._v("getConnection")])]),t._v(" "),a("td",[t._v("Get incoming connection.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::CoroutineStarterForResult<const std::shared_ptr<oatpp::data::stream::IOStream>&>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simpleudpstreamprovider-getconnectionasync"}},[t._v("getConnectionAsync")])]),t._v(" "),a("td",[t._v("No need to implement this."),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#simpleudpstreamprovider-invalidateconnection"}},[t._v("invalidateConnection")])]),t._v(" "),a("td",[t._v("Call shutdown read and write on an underlying file descriptor.")])])])]),t._v(" "),a("h3",{attrs:{id:"simpleudpstreamprovider-simpleudpstreamprovider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-simpleudpstreamprovider"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider::SimpleUdpStreamProvider")]),t._v(" "),a("p",[t._v("Constructor. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" port ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explicit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleUdpStreamProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v_uint16 port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"simpleudpstreamprovider-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-close"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider::close")]),t._v(" "),a("p",[t._v("Close accept-socket.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"simpleudpstreamprovider-getconnection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-getconnection"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider::getConnection")]),t._v(" "),a("p",[t._v("Get incoming connection. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"simpleudpstreamprovider-getconnectionasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-getconnectionasync"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider::getConnectionAsync")]),t._v(" "),a("p",[t._v("No need to implement this."),a("br"),t._v(" For Asynchronous IO in oatpp it is considered to be a good practice to accept connections in a seperate thread with the blocking accept() and then process connections in Asynchronous manner with non-blocking read/write. "),a("br"),t._v(" "),a("em",[t._v("It may be implemented later")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarterForResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectionAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"simpleudpstreamprovider-invalidateconnection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpleudpstreamprovider-invalidateconnection"}},[t._v("#")]),t._v(" SimpleUdpStreamProvider::invalidateConnection")]),t._v(" "),a("p",[t._v("Call shutdown read and write on an underlying file descriptor. "),a("code",[t._v("connection")]),t._v(" "),a("strong",[t._v("MUST")]),t._v(" be an object previously obtained from "),a("strong",[t._v("THIS")]),t._v(" connection provider. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" connection ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invalidateConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IOStream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);