/*
HTTP Host: static.ak.fbcdn.net
Generated: June 7th 2010 11:50:49 AM PDT
Machine: 10.16.139.107
Locale: nu_ll
Path: js/typeahead/renderers/SearchTypeaheadRenderer.js
*/

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("if (window.CavalryLogger) { CavalryLogger.start_js([\"js\\\/typeahead\\\/renderers\\\/SearchTypeaheadRenderer.js\"]); }\n\nadd_properties('TypeaheadRenderers',{search:function(c,d){var h=c.markup||htmlize(c.text),f=c.photo,g=c.subtext,a=c.category,e=c.is_external,b='';if(c.type)b=' class=\"'+c.type+'\"';return ['<li',b,'>',(f?'<img src=\"'+f+'\" alt=\"\" \/>':''),(h?'<span class=\"text\">'+h+'<\/span>':''),(a?'<div class=\"category\"><span class=\"categoryContents\">'+a+(e?'<span class=\"externalArrow\"><\/span>':'')+'<\/span><\/div>':''),(g?'<div class=\"subtext\">'+g+'<\/div>':''),'<\/li>'];}});\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/typeahead\\\/renderers\\\/SearchTypeaheadRenderer.js\"]); }")