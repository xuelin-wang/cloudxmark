// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34067){
var map__34092 = p__34067;
var map__34092__$1 = ((((!((map__34092 == null)))?((((map__34092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34092):map__34092);
var m = map__34092__$1;
var n = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6369__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6369__auto__)){
var ns = temp__6369__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34094_34116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34095_34117 = null;
var count__34096_34118 = (0);
var i__34097_34119 = (0);
while(true){
if((i__34097_34119 < count__34096_34118)){
var f_34120 = cljs.core._nth.call(null,chunk__34095_34117,i__34097_34119);
cljs.core.println.call(null,"  ",f_34120);

var G__34121 = seq__34094_34116;
var G__34122 = chunk__34095_34117;
var G__34123 = count__34096_34118;
var G__34124 = (i__34097_34119 + (1));
seq__34094_34116 = G__34121;
chunk__34095_34117 = G__34122;
count__34096_34118 = G__34123;
i__34097_34119 = G__34124;
continue;
} else {
var temp__6369__auto___34125 = cljs.core.seq.call(null,seq__34094_34116);
if(temp__6369__auto___34125){
var seq__34094_34126__$1 = temp__6369__auto___34125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34094_34126__$1)){
var c__22337__auto___34127 = cljs.core.chunk_first.call(null,seq__34094_34126__$1);
var G__34128 = cljs.core.chunk_rest.call(null,seq__34094_34126__$1);
var G__34129 = c__22337__auto___34127;
var G__34130 = cljs.core.count.call(null,c__22337__auto___34127);
var G__34131 = (0);
seq__34094_34116 = G__34128;
chunk__34095_34117 = G__34129;
count__34096_34118 = G__34130;
i__34097_34119 = G__34131;
continue;
} else {
var f_34132 = cljs.core.first.call(null,seq__34094_34126__$1);
cljs.core.println.call(null,"  ",f_34132);

var G__34133 = cljs.core.next.call(null,seq__34094_34126__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__34094_34116 = G__34133;
chunk__34095_34117 = G__34134;
count__34096_34118 = G__34135;
i__34097_34119 = G__34136;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34137 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21434__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34137);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34137)))?cljs.core.second.call(null,arglists_34137):arglists_34137));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34098_34138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34099_34139 = null;
var count__34100_34140 = (0);
var i__34101_34141 = (0);
while(true){
if((i__34101_34141 < count__34100_34140)){
var vec__34102_34142 = cljs.core._nth.call(null,chunk__34099_34139,i__34101_34141);
var name_34143 = cljs.core.nth.call(null,vec__34102_34142,(0),null);
var map__34105_34144 = cljs.core.nth.call(null,vec__34102_34142,(1),null);
var map__34105_34145__$1 = ((((!((map__34105_34144 == null)))?((((map__34105_34144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34105_34144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34105_34144):map__34105_34144);
var doc_34146 = cljs.core.get.call(null,map__34105_34145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34147 = cljs.core.get.call(null,map__34105_34145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34143);

cljs.core.println.call(null," ",arglists_34147);

if(cljs.core.truth_(doc_34146)){
cljs.core.println.call(null," ",doc_34146);
} else {
}

var G__34148 = seq__34098_34138;
var G__34149 = chunk__34099_34139;
var G__34150 = count__34100_34140;
var G__34151 = (i__34101_34141 + (1));
seq__34098_34138 = G__34148;
chunk__34099_34139 = G__34149;
count__34100_34140 = G__34150;
i__34101_34141 = G__34151;
continue;
} else {
var temp__6369__auto___34152 = cljs.core.seq.call(null,seq__34098_34138);
if(temp__6369__auto___34152){
var seq__34098_34153__$1 = temp__6369__auto___34152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34098_34153__$1)){
var c__22337__auto___34154 = cljs.core.chunk_first.call(null,seq__34098_34153__$1);
var G__34155 = cljs.core.chunk_rest.call(null,seq__34098_34153__$1);
var G__34156 = c__22337__auto___34154;
var G__34157 = cljs.core.count.call(null,c__22337__auto___34154);
var G__34158 = (0);
seq__34098_34138 = G__34155;
chunk__34099_34139 = G__34156;
count__34100_34140 = G__34157;
i__34101_34141 = G__34158;
continue;
} else {
var vec__34107_34159 = cljs.core.first.call(null,seq__34098_34153__$1);
var name_34160 = cljs.core.nth.call(null,vec__34107_34159,(0),null);
var map__34110_34161 = cljs.core.nth.call(null,vec__34107_34159,(1),null);
var map__34110_34162__$1 = ((((!((map__34110_34161 == null)))?((((map__34110_34161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34110_34161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34110_34161):map__34110_34161);
var doc_34163 = cljs.core.get.call(null,map__34110_34162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34164 = cljs.core.get.call(null,map__34110_34162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34160);

cljs.core.println.call(null," ",arglists_34164);

if(cljs.core.truth_(doc_34163)){
cljs.core.println.call(null," ",doc_34163);
} else {
}

var G__34165 = cljs.core.next.call(null,seq__34098_34153__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__34098_34138 = G__34165;
chunk__34099_34139 = G__34166;
count__34100_34140 = G__34167;
i__34101_34141 = G__34168;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6369__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6369__auto__)){
var fnspec = temp__6369__auto__;
cljs.core.print.call(null,"Spec");

var seq__34112 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34113 = null;
var count__34114 = (0);
var i__34115 = (0);
while(true){
if((i__34115 < count__34114)){
var role = cljs.core._nth.call(null,chunk__34113,i__34115);
var temp__6369__auto___34169__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___34169__$1)){
var spec_34170 = temp__6369__auto___34169__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34170));
} else {
}

var G__34171 = seq__34112;
var G__34172 = chunk__34113;
var G__34173 = count__34114;
var G__34174 = (i__34115 + (1));
seq__34112 = G__34171;
chunk__34113 = G__34172;
count__34114 = G__34173;
i__34115 = G__34174;
continue;
} else {
var temp__6369__auto____$1 = cljs.core.seq.call(null,seq__34112);
if(temp__6369__auto____$1){
var seq__34112__$1 = temp__6369__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34112__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__34112__$1);
var G__34175 = cljs.core.chunk_rest.call(null,seq__34112__$1);
var G__34176 = c__22337__auto__;
var G__34177 = cljs.core.count.call(null,c__22337__auto__);
var G__34178 = (0);
seq__34112 = G__34175;
chunk__34113 = G__34176;
count__34114 = G__34177;
i__34115 = G__34178;
continue;
} else {
var role = cljs.core.first.call(null,seq__34112__$1);
var temp__6369__auto___34179__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___34179__$2)){
var spec_34180 = temp__6369__auto___34179__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34180));
} else {
}

var G__34181 = cljs.core.next.call(null,seq__34112__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__34112 = G__34181;
chunk__34113 = G__34182;
count__34114 = G__34183;
i__34115 = G__34184;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467159066769