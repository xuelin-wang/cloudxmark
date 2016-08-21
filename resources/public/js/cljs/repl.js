// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40804){
var map__40829 = p__40804;
var map__40829__$1 = ((((!((map__40829 == null)))?((((map__40829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40829):map__40829);
var m = map__40829__$1;
var n = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6552__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6552__auto__)){
var ns = temp__6552__auto__;
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
var seq__40831_40853 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40832_40854 = null;
var count__40833_40855 = (0);
var i__40834_40856 = (0);
while(true){
if((i__40834_40856 < count__40833_40855)){
var f_40857 = cljs.core._nth.call(null,chunk__40832_40854,i__40834_40856);
cljs.core.println.call(null,"  ",f_40857);

var G__40858 = seq__40831_40853;
var G__40859 = chunk__40832_40854;
var G__40860 = count__40833_40855;
var G__40861 = (i__40834_40856 + (1));
seq__40831_40853 = G__40858;
chunk__40832_40854 = G__40859;
count__40833_40855 = G__40860;
i__40834_40856 = G__40861;
continue;
} else {
var temp__6552__auto___40862 = cljs.core.seq.call(null,seq__40831_40853);
if(temp__6552__auto___40862){
var seq__40831_40863__$1 = temp__6552__auto___40862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40831_40863__$1)){
var c__22493__auto___40864 = cljs.core.chunk_first.call(null,seq__40831_40863__$1);
var G__40865 = cljs.core.chunk_rest.call(null,seq__40831_40863__$1);
var G__40866 = c__22493__auto___40864;
var G__40867 = cljs.core.count.call(null,c__22493__auto___40864);
var G__40868 = (0);
seq__40831_40853 = G__40865;
chunk__40832_40854 = G__40866;
count__40833_40855 = G__40867;
i__40834_40856 = G__40868;
continue;
} else {
var f_40869 = cljs.core.first.call(null,seq__40831_40863__$1);
cljs.core.println.call(null,"  ",f_40869);

var G__40870 = cljs.core.next.call(null,seq__40831_40863__$1);
var G__40871 = null;
var G__40872 = (0);
var G__40873 = (0);
seq__40831_40853 = G__40870;
chunk__40832_40854 = G__40871;
count__40833_40855 = G__40872;
i__40834_40856 = G__40873;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40874 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21590__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40874);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40874)))?cljs.core.second.call(null,arglists_40874):arglists_40874));
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
var seq__40835_40875 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40836_40876 = null;
var count__40837_40877 = (0);
var i__40838_40878 = (0);
while(true){
if((i__40838_40878 < count__40837_40877)){
var vec__40839_40879 = cljs.core._nth.call(null,chunk__40836_40876,i__40838_40878);
var name_40880 = cljs.core.nth.call(null,vec__40839_40879,(0),null);
var map__40842_40881 = cljs.core.nth.call(null,vec__40839_40879,(1),null);
var map__40842_40882__$1 = ((((!((map__40842_40881 == null)))?((((map__40842_40881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40842_40881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40842_40881):map__40842_40881);
var doc_40883 = cljs.core.get.call(null,map__40842_40882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40884 = cljs.core.get.call(null,map__40842_40882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40880);

cljs.core.println.call(null," ",arglists_40884);

if(cljs.core.truth_(doc_40883)){
cljs.core.println.call(null," ",doc_40883);
} else {
}

var G__40885 = seq__40835_40875;
var G__40886 = chunk__40836_40876;
var G__40887 = count__40837_40877;
var G__40888 = (i__40838_40878 + (1));
seq__40835_40875 = G__40885;
chunk__40836_40876 = G__40886;
count__40837_40877 = G__40887;
i__40838_40878 = G__40888;
continue;
} else {
var temp__6552__auto___40889 = cljs.core.seq.call(null,seq__40835_40875);
if(temp__6552__auto___40889){
var seq__40835_40890__$1 = temp__6552__auto___40889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40835_40890__$1)){
var c__22493__auto___40891 = cljs.core.chunk_first.call(null,seq__40835_40890__$1);
var G__40892 = cljs.core.chunk_rest.call(null,seq__40835_40890__$1);
var G__40893 = c__22493__auto___40891;
var G__40894 = cljs.core.count.call(null,c__22493__auto___40891);
var G__40895 = (0);
seq__40835_40875 = G__40892;
chunk__40836_40876 = G__40893;
count__40837_40877 = G__40894;
i__40838_40878 = G__40895;
continue;
} else {
var vec__40844_40896 = cljs.core.first.call(null,seq__40835_40890__$1);
var name_40897 = cljs.core.nth.call(null,vec__40844_40896,(0),null);
var map__40847_40898 = cljs.core.nth.call(null,vec__40844_40896,(1),null);
var map__40847_40899__$1 = ((((!((map__40847_40898 == null)))?((((map__40847_40898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40847_40898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40847_40898):map__40847_40898);
var doc_40900 = cljs.core.get.call(null,map__40847_40899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40901 = cljs.core.get.call(null,map__40847_40899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40897);

cljs.core.println.call(null," ",arglists_40901);

if(cljs.core.truth_(doc_40900)){
cljs.core.println.call(null," ",doc_40900);
} else {
}

var G__40902 = cljs.core.next.call(null,seq__40835_40890__$1);
var G__40903 = null;
var G__40904 = (0);
var G__40905 = (0);
seq__40835_40875 = G__40902;
chunk__40836_40876 = G__40903;
count__40837_40877 = G__40904;
i__40838_40878 = G__40905;
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
var temp__6552__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6552__auto__)){
var fnspec = temp__6552__auto__;
cljs.core.print.call(null,"Spec");

var seq__40849 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40850 = null;
var count__40851 = (0);
var i__40852 = (0);
while(true){
if((i__40852 < count__40851)){
var role = cljs.core._nth.call(null,chunk__40850,i__40852);
var temp__6552__auto___40906__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___40906__$1)){
var spec_40907 = temp__6552__auto___40906__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40907));
} else {
}

var G__40908 = seq__40849;
var G__40909 = chunk__40850;
var G__40910 = count__40851;
var G__40911 = (i__40852 + (1));
seq__40849 = G__40908;
chunk__40850 = G__40909;
count__40851 = G__40910;
i__40852 = G__40911;
continue;
} else {
var temp__6552__auto____$1 = cljs.core.seq.call(null,seq__40849);
if(temp__6552__auto____$1){
var seq__40849__$1 = temp__6552__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40849__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__40849__$1);
var G__40912 = cljs.core.chunk_rest.call(null,seq__40849__$1);
var G__40913 = c__22493__auto__;
var G__40914 = cljs.core.count.call(null,c__22493__auto__);
var G__40915 = (0);
seq__40849 = G__40912;
chunk__40850 = G__40913;
count__40851 = G__40914;
i__40852 = G__40915;
continue;
} else {
var role = cljs.core.first.call(null,seq__40849__$1);
var temp__6552__auto___40916__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___40916__$2)){
var spec_40917 = temp__6552__auto___40916__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40917));
} else {
}

var G__40918 = cljs.core.next.call(null,seq__40849__$1);
var G__40919 = null;
var G__40920 = (0);
var G__40921 = (0);
seq__40849 = G__40918;
chunk__40850 = G__40919;
count__40851 = G__40920;
i__40852 = G__40921;
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

//# sourceMappingURL=repl.js.map?rel=1471653240620