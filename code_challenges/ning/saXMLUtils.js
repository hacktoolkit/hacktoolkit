/*
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
	Author: Sam Tsvilik
	Version: 3.0 Beta
	Last Modified: 10/31/2008
*/
var XMLObjectifier = (function() {
	var _nodeHandler = null;
	var _features = null;
	var _outputTypes = {complex: 0, lite: 1};
	//Helper functions
	var clone = function(obj){
		if(!!obj && typeof(obj)==="object"){
			function F(){}
			F.prototype = obj;
			return new F();
		}		
	};
	//Trim function
	var trim = function(s) {
		return s.replace(/^\s+|\s+$/gm,'');
	};
	var isNumeric = function(s) {
		var testStr = "";
		if(s && typeof s == "string") { testStr = s; }
		var pattern = /^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/;
		return pattern.test(testStr);
	};	
	var formatName = function(name) {
		var regEx = /-/g;
		var tName = String(name).replace(regEx,"_");
		return tName;
	};//Alters attribute and collection names to comply with JS
	//Node Prototype
	var _node = (function() {
		var _self = {
			activate: function() {
				var nodes = [];
				if(!!nodes && _features.outputType === _outputTypes.complex) {
					nodes.getNodesByAttribute = function(attr, obj) {
						if(!!nodes && nodes.length > 0) {
							var out = [];
							var cNode;
							var maxLen = nodes.length -1;
							if(maxLen>=0){
								do {
									cNode = nodes[maxLen];
									if(!!cNode && cNode[attr] === obj){out.push(cNode);}
								} while(maxLen--);												
							}
							out.reverse();
							return out;
						}
					};
					nodes.getNodeByAttribute = function(attr, obj) {
						if(!!nodes && nodes.length > 0) {
							var cNode = null;
							var maxLen = nodes.length -1;
							if(maxLen>=0){
								do {
									cNode = nodes[maxLen];
									if(!!cNode && cNode[attr] === obj){break;}
								} while(maxLen--);
							}
							return cNode;
						}
					};
					nodes.getNodesByValue = function(obj) {
						if(!!nodes && nodes.length > 0) {
							var out = [];
							var cNode;
							var maxLen = nodes.length -1;
							if(maxLen>=0){
								do {
									cNode = nodes[maxLen];
									if(!!cNode && !!cNode.Text && cNode.Text === obj){out.push(cNode);}
								} while(maxLen--);																								
							}
							out.reverse();
							return out;
						}
					};
					nodes.contains = function(attr, obj) {
						if(!!nodes && nodes.length > 0) {
							var out = false;
							var maxLen = nodes.length -1;
							if(maxLen>=0){
								do {
									if(nodes[maxLen][attr] === obj){out = true; break;}
								} while(maxLen--);
							}
							return out;
						}
					};
					nodes.indexOf = function(attr, obj) {
						var pos = -1;
						if(!!nodes && nodes.length > 0) {
							var maxLen = nodes.length-1;
							if(maxLen>=0){
								do {
									if(nodes[maxLen][attr] === obj) {pos = maxLen; break;}
								} while(maxLen--);
							}
							return pos;
						}
					};
					nodes.SortByAttribute = function(col, dir) {
						if(!!nodes && nodes.length > 0) {
							nodes.sort(function(a,b) {
								var _a = (a[col]), 
									_b = (b[col]);
								_a = isNumeric(_a)?parseFloat(_a):_a;
								_b = isNumeric(_b)?parseFloat(_b):_b;
								var _out = (_a<_b)?-1:(_b<_a)?1:0;
									_out = (!!dir && dir.toUpperCase() === "DESC")?(0-_out):_out;
								return _out;
							});
						}
					};
					nodes.SortByValue = function(dir) {
						if(!!nodes && nodes.length > 0) {
							nodes.sort(function(a,b) {
								var _a = (a.Text), 
									_b = (b.Text);
								_a = isNumeric(_a)?parseFloat(_a):_a;
								_b = isNumeric(_b)?parseFloat(_b):_b;
								var _out = (_a<_b)?-1:(_b<_a)?1:0;
									_out = (!!dir && dir.toUpperCase() === "DESC")?(0-_out):_out;
								return _out;
							});
						}
					};
					nodes.SortByNode = function(node, dir) {
						if(!!nodes && nodes.length > 0) {
							nodes.sort(function(a,b) {
								var _a = (a[node][0].Text), 
									_b = (b[node][0].Text);
								_a = isNumeric(_a)?parseFloat(_a):_a;
								_b = isNumeric(_b)?parseFloat(_b):_b;
								var _out = (_a<_b)?-1:(_b<_a)?1:0;
									_out = (!!dir && dir.toUpperCase() === "DESC")?(0-_out):_out;
								return _out;
							});
						}
				  };								    
				}
				return nodes;
			}
		};
		return _self;
	})();
	//Makes a new node of type _node;
	//Creates a nodes collection
	var makeNodeContainer = function() {
		var _fn = clone(_node);					
		return _fn.activate();
	};			
	//Creates a single node component
	var makeNode = function(node) {
		var _self = {Text:"", _processChildren: true, _processAttributes: true};
		var _customNode = null;
		if(typeof(_nodeHandler) === "function"){ //Check to see if custom node handler is present
			try {_customNode = _nodeHandler(node);}catch(e){}					
		}
		if(!!_customNode && _customNode === -1) { //Skip node entirely
			_self = null; 
		} else if(!!_customNode){ //Use custom node
			_self = _customNode;
			_self._processChildren = (typeof(_self._processChildren) === "undefined")?true:_self._processChildren;
			_self._processAttributes = (typeof(_self._processAttributes) === "undefined")?true:_self._processAttributes;
			if(!_self.Text){ _self.Text = ""; }
			if(!_self._namespace){ if(!!node.prefix && _features.outputType === _outputTypes.complex){_self._namespace=node.prefix;} }					
		} else { //Normal operation
			//SOAP XML FIX to remove namespaces (i.e. soapenv:)
			var elemName = (!!node.localName)?node.localName:node.baseName;
				elemName = formatName(elemName);
				_self._nodeName = elemName;
			if(!!node.prefix){_self._namespace=node.prefix;}					
		}
		return _self;
	};
	//Sets node attributes
	var setAttributes = function(jNode, xNode) { //Set Attributes of an object
		if(xNode.attributes.length > 0) {
			if(_features.outputType === _outputTypes.complex){jNode._attributes = [];}
			var a = xNode.attributes.length-1, attName = null, jParent = null;
			do { //Order is irrelevant (speed-up)
				attName = String(formatName(xNode.attributes[a].name));
				jParent = jNode._parent || false;
				//Prevents name collisions with node names
				if(!!jParent && !!jParent[jNode._nodeName][0][attName] && typeof(jParent[jNode._nodeName][0][attName]) === "object"){attName = "attr_"+attName;}
				if(_features.outputType === _outputTypes.complex){jNode._attributes.push(attName);}
				jNode[attName] = trim(xNode.attributes[a].value);
			} while(a--);
		}
	};
	var _self = {
		JSONOutputType: _outputTypes,
		xmlToJSON: function(xdoc, features) {
			_features = features || {outputType: _self.JSONOutputType.complex};
			_nodeHandler = _features && _features.nodeHandler;
			var _xdoc = null; //xdoc now accepts xml string and xml dom object
			if(typeof(xdoc) === "string"){_xdoc = _self.textToXML(xdoc);} else if(typeof(xdoc) === "object" && !!xdoc.nodeType){_xdoc = xdoc;} else {_xdoc = null;}
			if(!_xdoc){ return null; }
			var xroot = (_xdoc.nodeType == 9)?_xdoc.documentElement:_xdoc;
			//JSON Object holder
			var tmpObj = makeNode(xroot);
				tmpObj.typeOf = "JSXBObject";
				tmpObj.RootName = tmpObj._nodeName; //Backwards compat.						
			if(_xdoc.nodeType == 3 || _xdoc.nodeType == 4) {
				return _xdoc.nodeValue;
			}																				
			//Recursive JSON Assembler
			function setObjects(obj, node) {
				var cnode;	//Current Node
				var tObj;	//New subnode
				var cName = "";
				if(!node){return null;}
				if(node.hasChildNodes()) {
					var nodeCount = node.childNodes.length - 1;
					var n = 0;
					do {
						cnode = node.childNodes[n];
						switch(cnode.nodeType) {
							case 1: //Node									
							//Process child nodes
							if(_features.outputType === _outputTypes.complex){obj._children = (!!obj._children)?obj._children:[];}
							//Create a single node
							tObj = makeNode(cnode);
							if(!!tObj) {
								if(_features.outputType === _outputTypes.complex){tObj._parent = obj;if(cName !== tObj._nodeName){obj._children.push(tObj._nodeName);}}
								//Create sub elemns array
								if(!obj[tObj._nodeName]) { //If node is new then create a new container for nodes
									obj[tObj._nodeName] = makeNodeContainer(); //Create Collection
								}
								//Add empty node holder to the container
								obj[tObj._nodeName].push(tObj);
								//Recursive call if node contains children										
								if(!!tObj._processChildren && cnode.hasChildNodes()){setObjects(tObj, cnode);} delete tObj._processChildren;
								//Set node attributes after children are added
								if(!!tObj._processAttributes){setAttributes(tObj, cnode);} delete tObj._processAttributes;
								cName = tObj._nodeName;
								if(_features.outputType === _outputTypes.lite){delete tObj._nodeName;}
							}
							break;
							case 3: //Text Value
							obj.Text += trim(cnode.nodeValue);
							break;
							case 4: //CDATA
							obj.Text += (!!cnode.text)?trim(cnode.text):trim(cnode.nodeValue);
							break;
						}
					} while(n++ < nodeCount);
				}						
			}
			//Set root attributes if any
			setAttributes(tmpObj, xroot);
			//Start assembling JSON
			setObjects(tmpObj, xroot);
			//Clean-up memmory
			if(_features.outputType === _outputTypes.lite){delete tmpObj._nodeName;}
			delete tmpObj._processChildren;
			delete tmpObj._processAttributes;
			_xdoc = null;
			xroot = null;
			return tmpObj;					
		},
		//Converts Text to XML DOM
		textToXML: function(strXML) {
			var xmlDoc = null;
			try {
				xmlDoc = (!!document.all)?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
				xmlDoc.async = false;
			} catch(e) {throw new Error("XML Parser could not be instantiated");}
			var out = null, isParsed = true;
			if(!!document.all) {
				isParsed = xmlDoc.loadXML(strXML);
				out = (isParsed)?xmlDoc:false;
			} else {		
				out = xmlDoc.parseFromString(strXML, "text/xml");
				isParsed = (out.documentElement.tagName !== "parsererror");
			}
			if(!isParsed){throw new Error("Error parsing XML string");}					
			return out;
		}
	};
	return _self;
})();