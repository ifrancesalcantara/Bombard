(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["SearchAutocorrectCommon"],{UWdn:function(e,r,o){"use strict";o.r(r);var c=o("GyhR"),t=o("Qo1m"),n=o("iJ35"),i=(o("hvnN"),o("Irlq")),a=o("+U6O");r.default=function(e){var r=e.scope,o=e.typo,s=o.corrected,l=o.correction,m=o.original,d=s?"/search/".concat(r,"/?q=").concat(encodeURIComponent(m),"&rs=typo_auto_original&auto_correction_disabled=true"):"/search/".concat(r,"/?q=").concat(encodeURIComponent(l),"&rs=typo_suggestion&auto_correction_disabled=true");return c.createElement(a.K,{smSize:"xs",mdSize:"sm",lgSize:"md"},s?Object(i.b)(t.a._("Here's what we found for {{ correctionLink }}. Search {{ originalLink }} instead?","Misspelled search query has been auto-corrected. Offer to search for the original query."),{correctionLink:c.createElement(a.K,{inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md",key:"correctionLink"},l),originalLink:c.createElement(n.b,{className:"searchAutocorrectLink",key:"originalLink",to:d},c.createElement(a.K,{bold:!0,inline:!0,smSize:"xs",mdSize:"sm",lgSize:"md"},m))}):Object(i.b)(t.a._("Did you mean {{ correctionLink }}?","Search term seems to be misspelled. Offer to search for the correct spelling."),{correctionLink:c.createElement(n.b,{className:"searchAutocorrectLink",key:"correctionLink",to:d},l)}))}}}]);
//# sourceMappingURL=pjs-SearchAutocorrectCommon-bb91ce17c853a4053c75.js.map