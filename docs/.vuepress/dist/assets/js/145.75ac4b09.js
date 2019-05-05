(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{183:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"api-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-client","aria-hidden":"true"}},[t._v("#")]),t._v(" Api Client "),s("seo")],1),t._v(" "),s("p",[s("code",[t._v("ApiClient")]),t._v(" is the class which extends "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/client/ApiClient/"}},[t._v("oatpp::web::client::ApiClient")]),t._v(". It provides convenient Retrofit-like interface over the\n"),s("router-link",{attrs:{to:"/api/latest/oatpp/web/client/RequestExecutor/"}},[t._v("oatpp::web::client::RequestExecutor")]),t._v(".")],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/oatpp/example-api-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/oatpp/example-api-client"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp-consul/blob/master/src/oatpp-consul/rest/Client.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/oatpp/oatpp-consul/blob/master/src/oatpp-consul/rest/Client.hpp"),s("OutboundLink")],1)])])])},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("All API-Calls generated by "),s("code",[t._v("API_CALL")]),t._v(" and "),s("code",[t._v("API_CALL_ASYNC")]),t._v(" macros in the end call the "),s("code",[t._v("oatpp::web::client::RequestExecutor::execute(...)")]),t._v("\nand "),s("code",[t._v("oatpp::web::client::RequestExecutor::executeAsync(...)")]),t._v("\nvirtual methods respectively which basically gives the possibility to substitute your own\n"),s("code",[t._v("RequestExecutor")]),t._v(" and use whatever library for HTTP Client API calls.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("ApiClient code generation section must begin with "),a("code",[this._v("#include OATPP_CODEGEN_BEGIN(ApiClient)")]),this._v(" and must be closed with\n"),a("code",[this._v("#include OATPP_CODEGEN_END(ApiClient)")]),this._v("."),a("br"),this._v(" "),a("em",[this._v("Do not forget to close code generation section in order to avoid macro conflicts later in the code!")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/web/client/ApiClient.hpp"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/core/macro/codegen.hpp"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApiClient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ApiClient "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_BEGIN(ApiClient) ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Begin code-gen section")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CLIENT_INIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyApiClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< generate constructor")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CALL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resource"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getResource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Example of API call")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CALL_ASYNC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/resource"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getResourceAsync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Example of Async API call")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Define your API calls here */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_END(ApiClient) ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< End code-gen section")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("API_CALL")]),this._v(", "),a("code",[this._v("API_CALL_ASYNC")]),this._v(" macros have the following params:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("API_CALL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<http-method>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<path>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("optional param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mappings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"possible-param-mappings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possible-param-mappings","aria-hidden":"true"}},[this._v("#")]),this._v(" Possible param mappings")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("Map method parameter to header:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HEADER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<optional header-name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Map method parameter to path variable:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<optional path-variable-name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Map method parameter to path's query parameter:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QUERY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<optional path-variable-name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Map method parameter to request's body. Data type must be String:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_STRING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Map method parameter to request's body. DTO will be serialized using ObjectMapper given to the ApiClient constructor:"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"examples-of-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples of code")])}],!1,null,null,null);a.default=r.exports}}]);