// Compiled by ClojureScript 1.9.198 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22780__auto__ = [];
var len__22773__auto___40524 = arguments.length;
var i__22774__auto___40525 = (0);
while(true){
if((i__22774__auto___40525 < len__22773__auto___40524)){
args__22780__auto__.push((arguments[i__22774__auto___40525]));

var G__40526 = (i__22774__auto___40525 + (1));
i__22774__auto___40525 = G__40526;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((2) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22781__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40516_40527 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40517_40528 = null;
var count__40518_40529 = (0);
var i__40519_40530 = (0);
while(true){
if((i__40519_40530 < count__40518_40529)){
var k_40531 = cljs.core._nth.call(null,chunk__40517_40528,i__40519_40530);
e.setAttribute(cljs.core.name.call(null,k_40531),cljs.core.get.call(null,attrs,k_40531));

var G__40532 = seq__40516_40527;
var G__40533 = chunk__40517_40528;
var G__40534 = count__40518_40529;
var G__40535 = (i__40519_40530 + (1));
seq__40516_40527 = G__40532;
chunk__40517_40528 = G__40533;
count__40518_40529 = G__40534;
i__40519_40530 = G__40535;
continue;
} else {
var temp__6503__auto___40536 = cljs.core.seq.call(null,seq__40516_40527);
if(temp__6503__auto___40536){
var seq__40516_40537__$1 = temp__6503__auto___40536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40516_40537__$1)){
var c__22493__auto___40538 = cljs.core.chunk_first.call(null,seq__40516_40537__$1);
var G__40539 = cljs.core.chunk_rest.call(null,seq__40516_40537__$1);
var G__40540 = c__22493__auto___40538;
var G__40541 = cljs.core.count.call(null,c__22493__auto___40538);
var G__40542 = (0);
seq__40516_40527 = G__40539;
chunk__40517_40528 = G__40540;
count__40518_40529 = G__40541;
i__40519_40530 = G__40542;
continue;
} else {
var k_40543 = cljs.core.first.call(null,seq__40516_40537__$1);
e.setAttribute(cljs.core.name.call(null,k_40543),cljs.core.get.call(null,attrs,k_40543));

var G__40544 = cljs.core.next.call(null,seq__40516_40537__$1);
var G__40545 = null;
var G__40546 = (0);
var G__40547 = (0);
seq__40516_40527 = G__40544;
chunk__40517_40528 = G__40545;
count__40518_40529 = G__40546;
i__40519_40530 = G__40547;
continue;
}
} else {
}
}
break;
}

var seq__40520_40548 = cljs.core.seq.call(null,children);
var chunk__40521_40549 = null;
var count__40522_40550 = (0);
var i__40523_40551 = (0);
while(true){
if((i__40523_40551 < count__40522_40550)){
var ch_40552 = cljs.core._nth.call(null,chunk__40521_40549,i__40523_40551);
e.appendChild(ch_40552);

var G__40553 = seq__40520_40548;
var G__40554 = chunk__40521_40549;
var G__40555 = count__40522_40550;
var G__40556 = (i__40523_40551 + (1));
seq__40520_40548 = G__40553;
chunk__40521_40549 = G__40554;
count__40522_40550 = G__40555;
i__40523_40551 = G__40556;
continue;
} else {
var temp__6503__auto___40557 = cljs.core.seq.call(null,seq__40520_40548);
if(temp__6503__auto___40557){
var seq__40520_40558__$1 = temp__6503__auto___40557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40520_40558__$1)){
var c__22493__auto___40559 = cljs.core.chunk_first.call(null,seq__40520_40558__$1);
var G__40560 = cljs.core.chunk_rest.call(null,seq__40520_40558__$1);
var G__40561 = c__22493__auto___40559;
var G__40562 = cljs.core.count.call(null,c__22493__auto___40559);
var G__40563 = (0);
seq__40520_40548 = G__40560;
chunk__40521_40549 = G__40561;
count__40522_40550 = G__40562;
i__40523_40551 = G__40563;
continue;
} else {
var ch_40564 = cljs.core.first.call(null,seq__40520_40558__$1);
e.appendChild(ch_40564);

var G__40565 = cljs.core.next.call(null,seq__40520_40558__$1);
var G__40566 = null;
var G__40567 = (0);
var G__40568 = (0);
seq__40520_40548 = G__40565;
chunk__40521_40549 = G__40566;
count__40522_40550 = G__40567;
i__40523_40551 = G__40568;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40513){
var G__40514 = cljs.core.first.call(null,seq40513);
var seq40513__$1 = cljs.core.next.call(null,seq40513);
var G__40515 = cljs.core.first.call(null,seq40513__$1);
var seq40513__$2 = cljs.core.next.call(null,seq40513__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40514,G__40515,seq40513__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__,hierarchy__22617__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__,hierarchy__22617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22617__auto__,method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_40569 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_40569.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40569.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_40569.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40569);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40570,st_map){
var map__40577 = p__40570;
var map__40577__$1 = ((((!((map__40577 == null)))?((((map__40577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40577):map__40577);
var container_el = cljs.core.get.call(null,map__40577__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40577,map__40577__$1,container_el){
return (function (p__40579){
var vec__40580 = p__40579;
var k = cljs.core.nth.call(null,vec__40580,(0),null);
var v = cljs.core.nth.call(null,vec__40580,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__40577,map__40577__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40583,dom_str){
var map__40586 = p__40583;
var map__40586__$1 = ((((!((map__40586 == null)))?((((map__40586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40586):map__40586);
var c = map__40586__$1;
var content_area_el = cljs.core.get.call(null,map__40586__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40588){
var map__40591 = p__40588;
var map__40591__$1 = ((((!((map__40591 == null)))?((((map__40591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40591):map__40591);
var content_area_el = cljs.core.get.call(null,map__40591__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_40634){
var state_val_40635 = (state_40634[(1)]);
if((state_val_40635 === (1))){
var inst_40619 = (state_40634[(7)]);
var inst_40619__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40620 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40621 = ["10px","10px","100%","68px","1.0"];
var inst_40622 = cljs.core.PersistentHashMap.fromArrays(inst_40620,inst_40621);
var inst_40623 = cljs.core.merge.call(null,inst_40622,style);
var inst_40624 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40619__$1,inst_40623);
var inst_40625 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40619__$1,msg);
var inst_40626 = cljs.core.async.timeout.call(null,(300));
var state_40634__$1 = (function (){var statearr_40636 = state_40634;
(statearr_40636[(7)] = inst_40619__$1);

(statearr_40636[(8)] = inst_40624);

(statearr_40636[(9)] = inst_40625);

return statearr_40636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40634__$1,(2),inst_40626);
} else {
if((state_val_40635 === (2))){
var inst_40619 = (state_40634[(7)]);
var inst_40628 = (state_40634[(2)]);
var inst_40629 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_40630 = ["auto"];
var inst_40631 = cljs.core.PersistentHashMap.fromArrays(inst_40629,inst_40630);
var inst_40632 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40619,inst_40631);
var state_40634__$1 = (function (){var statearr_40637 = state_40634;
(statearr_40637[(10)] = inst_40628);

return statearr_40637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40634__$1,inst_40632);
} else {
return null;
}
}
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____0 = (function (){
var statearr_40641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40641[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__);

(statearr_40641[(1)] = (1));

return statearr_40641;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____1 = (function (state_40634){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_40634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e40642){if((e40642 instanceof Object)){
var ex__29638__auto__ = e40642;
var statearr_40643_40645 = state_40634;
(statearr_40643_40645[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40646 = state_40634;
state_40634 = G__40646;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__ = function(state_40634){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____1.call(this,state_40634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_40644 = f__29749__auto__.call(null);
(statearr_40644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_40644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args40647 = [];
var len__22773__auto___40650 = arguments.length;
var i__22774__auto___40651 = (0);
while(true){
if((i__22774__auto___40651 < len__22773__auto___40650)){
args40647.push((arguments[i__22774__auto___40651]));

var G__40652 = (i__22774__auto___40651 + (1));
i__22774__auto___40651 = G__40652;
continue;
} else {
}
break;
}

var G__40649 = args40647.length;
switch (G__40649) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40647.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__40654){
var map__40657 = p__40654;
var map__40657__$1 = ((((!((map__40657 == null)))?((((map__40657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40657):map__40657);
var file = cljs.core.get.call(null,map__40657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__21590__auto__ = file;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__40659){
var vec__40666 = p__40659;
var typ = cljs.core.nth.call(null,vec__40666,(0),null);
var line_number = cljs.core.nth.call(null,vec__40666,(1),null);
var line = cljs.core.nth.call(null,vec__40666,(2),null);
var pred__40669 = cljs.core._EQ_;
var expr__40670 = typ;
if(cljs.core.truth_(pred__40669.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__40670))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__40669.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__40670))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__40669.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__40670))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__40672_SHARP_){
return cljs.core.update_in.call(null,p1__40672_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; overflow: hidden; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__40675){
var map__40678 = p__40675;
var map__40678__$1 = ((((!((map__40678 == null)))?((((map__40678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40678):map__40678);
var exception = map__40678__$1;
var failed_compiling = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__40678__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__21578__auto__ = file;
if(cljs.core.truth_(and__21578__auto__)){
return line;
} else {
return and__21578__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__40678,map__40678__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__40673_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__40673_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__40678,map__40678__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__40678,map__40678__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__40674_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__40674_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__40674_SHARP_)))].join('');
});})(last_message,map__40678,map__40678__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__40683 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__40683__$1 = ((((!((map__40683 == null)))?((((map__40683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40683):map__40683);
var head = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40683__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__40686){
var map__40689 = p__40686;
var map__40689__$1 = ((((!((map__40689 == null)))?((((map__40689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40689):map__40689);
var warning_data = map__40689__$1;
var file = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__40689__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__21578__auto__ = file;
if(cljs.core.truth_(and__21578__auto__)){
return line;
} else {
return and__21578__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__40689,map__40689__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__40685_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__40685_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__40689,map__40689__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg,cljs.core.PersistentArrayMap.EMPTY))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__40693 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__40693__$1 = ((((!((map__40693 == null)))?((((map__40693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40693):map__40693);
var head = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__40695){
var map__40699 = p__40695;
var map__40699__$1 = ((((!((map__40699 == null)))?((((map__40699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40699):map__40699);
var warning_data = map__40699__$1;
var message = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40701 = message;
var G__40701__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__40701),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40701);
var G__40701__$2 = (cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())?[cljs.core.str(G__40701__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__40701__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__40701__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__40701__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__40702){
var map__40707 = p__40702;
var map__40707__$1 = ((((!((map__40707 == null)))?((((map__40707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40707):map__40707);
var warning_data = map__40707__$1;
var message = cljs.core.get.call(null,map__40707__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__40707__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40707__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40707__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__40709 = figwheel.client.heads_up.ensure_container.call(null);
var map__40709__$1 = ((((!((map__40709 == null)))?((((map__40709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40709):map__40709);
var content_area_el = cljs.core.get.call(null,map__40709__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
goog.dom.append(el,goog.dom.htmlToDocumentFragment(figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data)));

return goog.dom.append(content_area_el,el);
} else {
var temp__6503__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6503__auto__)){
var last_child = temp__6503__auto__;
var temp__6501__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6501__auto__)){
var message_count = temp__6501__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_40757){
var state_val_40758 = (state_40757[(1)]);
if((state_val_40758 === (1))){
var inst_40740 = (state_40757[(7)]);
var inst_40740__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40741 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40742 = ["0.0"];
var inst_40743 = cljs.core.PersistentHashMap.fromArrays(inst_40741,inst_40742);
var inst_40744 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40740__$1,inst_40743);
var inst_40745 = cljs.core.async.timeout.call(null,(300));
var state_40757__$1 = (function (){var statearr_40759 = state_40757;
(statearr_40759[(8)] = inst_40744);

(statearr_40759[(7)] = inst_40740__$1);

return statearr_40759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40757__$1,(2),inst_40745);
} else {
if((state_val_40758 === (2))){
var inst_40740 = (state_40757[(7)]);
var inst_40747 = (state_40757[(2)]);
var inst_40748 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_40749 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_40750 = cljs.core.PersistentHashMap.fromArrays(inst_40748,inst_40749);
var inst_40751 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40740,inst_40750);
var inst_40752 = cljs.core.async.timeout.call(null,(200));
var state_40757__$1 = (function (){var statearr_40760 = state_40757;
(statearr_40760[(9)] = inst_40747);

(statearr_40760[(10)] = inst_40751);

return statearr_40760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40757__$1,(3),inst_40752);
} else {
if((state_val_40758 === (3))){
var inst_40740 = (state_40757[(7)]);
var inst_40754 = (state_40757[(2)]);
var inst_40755 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40740,"");
var state_40757__$1 = (function (){var statearr_40761 = state_40757;
(statearr_40761[(11)] = inst_40754);

return statearr_40761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40757__$1,inst_40755);
} else {
return null;
}
}
}
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29635__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29635__auto____0 = (function (){
var statearr_40765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40765[(0)] = figwheel$client$heads_up$clear_$_state_machine__29635__auto__);

(statearr_40765[(1)] = (1));

return statearr_40765;
});
var figwheel$client$heads_up$clear_$_state_machine__29635__auto____1 = (function (state_40757){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_40757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e40766){if((e40766 instanceof Object)){
var ex__29638__auto__ = e40766;
var statearr_40767_40769 = state_40757;
(statearr_40767_40769[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40770 = state_40757;
state_40757 = G__40770;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29635__auto__ = function(state_40757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29635__auto____1.call(this,state_40757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29635__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29635__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_40768 = f__29749__auto__.call(null);
(statearr_40768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_40768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_40802){
var state_val_40803 = (state_40802[(1)]);
if((state_val_40803 === (1))){
var inst_40792 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40802__$1,(2),inst_40792);
} else {
if((state_val_40803 === (2))){
var inst_40794 = (state_40802[(2)]);
var inst_40795 = cljs.core.async.timeout.call(null,(400));
var state_40802__$1 = (function (){var statearr_40804 = state_40802;
(statearr_40804[(7)] = inst_40794);

return statearr_40804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40802__$1,(3),inst_40795);
} else {
if((state_val_40803 === (3))){
var inst_40797 = (state_40802[(2)]);
var inst_40798 = figwheel.client.heads_up.clear.call(null);
var state_40802__$1 = (function (){var statearr_40805 = state_40802;
(statearr_40805[(8)] = inst_40797);

return statearr_40805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40802__$1,(4),inst_40798);
} else {
if((state_val_40803 === (4))){
var inst_40800 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40802__$1,inst_40800);
} else {
return null;
}
}
}
}
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____0 = (function (){
var statearr_40809 = [null,null,null,null,null,null,null,null,null];
(statearr_40809[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__);

(statearr_40809[(1)] = (1));

return statearr_40809;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____1 = (function (state_40802){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_40802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e40810){if((e40810 instanceof Object)){
var ex__29638__auto__ = e40810;
var statearr_40811_40813 = state_40802;
(statearr_40811_40813[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40814 = state_40802;
state_40802 = G__40814;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__ = function(state_40802){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____1.call(this,state_40802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_40812 = f__29749__auto__.call(null);
(statearr_40812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_40812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6503__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6503__auto__)){
var el = temp__6503__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1471181962117