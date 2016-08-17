// Compiled by ClojureScript 1.9.211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40778){
var map__40803 = p__40778;
var map__40803__$1 = ((((!((map__40803 == null)))?((((map__40803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40803):map__40803);
var m = map__40803__$1;
var n = cljs.core.get.call(null,map__40803__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
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
var seq__40805_40827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40806_40828 = null;
var count__40807_40829 = (0);
var i__40808_40830 = (0);
while(true){
if((i__40808_40830 < count__40807_40829)){
var f_40831 = cljs.core._nth.call(null,chunk__40806_40828,i__40808_40830);
cljs.core.println.call(null,"  ",f_40831);

var G__40832 = seq__40805_40827;
var G__40833 = chunk__40806_40828;
var G__40834 = count__40807_40829;
var G__40835 = (i__40808_40830 + (1));
seq__40805_40827 = G__40832;
chunk__40806_40828 = G__40833;
count__40807_40829 = G__40834;
i__40808_40830 = G__40835;
continue;
} else {
var temp__6503__auto___40836 = cljs.core.seq.call(null,seq__40805_40827);
if(temp__6503__auto___40836){
var seq__40805_40837__$1 = temp__6503__auto___40836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40805_40837__$1)){
var c__22492__auto___40838 = cljs.core.chunk_first.call(null,seq__40805_40837__$1);
var G__40839 = cljs.core.chunk_rest.call(null,seq__40805_40837__$1);
var G__40840 = c__22492__auto___40838;
var G__40841 = cljs.core.count.call(null,c__22492__auto___40838);
var G__40842 = (0);
seq__40805_40827 = G__40839;
chunk__40806_40828 = G__40840;
count__40807_40829 = G__40841;
i__40808_40830 = G__40842;
continue;
} else {
var f_40843 = cljs.core.first.call(null,seq__40805_40837__$1);
cljs.core.println.call(null,"  ",f_40843);

var G__40844 = cljs.core.next.call(null,seq__40805_40837__$1);
var G__40845 = null;
var G__40846 = (0);
var G__40847 = (0);
seq__40805_40827 = G__40844;
chunk__40806_40828 = G__40845;
count__40807_40829 = G__40846;
i__40808_40830 = G__40847;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40848 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21589__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40848);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40848)))?cljs.core.second.call(null,arglists_40848):arglists_40848));
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
var seq__40809_40849 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40810_40850 = null;
var count__40811_40851 = (0);
var i__40812_40852 = (0);
while(true){
if((i__40812_40852 < count__40811_40851)){
var vec__40813_40853 = cljs.core._nth.call(null,chunk__40810_40850,i__40812_40852);
var name_40854 = cljs.core.nth.call(null,vec__40813_40853,(0),null);
var map__40816_40855 = cljs.core.nth.call(null,vec__40813_40853,(1),null);
var map__40816_40856__$1 = ((((!((map__40816_40855 == null)))?((((map__40816_40855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40816_40855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40816_40855):map__40816_40855);
var doc_40857 = cljs.core.get.call(null,map__40816_40856__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40858 = cljs.core.get.call(null,map__40816_40856__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40854);

cljs.core.println.call(null," ",arglists_40858);

if(cljs.core.truth_(doc_40857)){
cljs.core.println.call(null," ",doc_40857);
} else {
}

var G__40859 = seq__40809_40849;
var G__40860 = chunk__40810_40850;
var G__40861 = count__40811_40851;
var G__40862 = (i__40812_40852 + (1));
seq__40809_40849 = G__40859;
chunk__40810_40850 = G__40860;
count__40811_40851 = G__40861;
i__40812_40852 = G__40862;
continue;
} else {
var temp__6503__auto___40863 = cljs.core.seq.call(null,seq__40809_40849);
if(temp__6503__auto___40863){
var seq__40809_40864__$1 = temp__6503__auto___40863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40809_40864__$1)){
var c__22492__auto___40865 = cljs.core.chunk_first.call(null,seq__40809_40864__$1);
var G__40866 = cljs.core.chunk_rest.call(null,seq__40809_40864__$1);
var G__40867 = c__22492__auto___40865;
var G__40868 = cljs.core.count.call(null,c__22492__auto___40865);
var G__40869 = (0);
seq__40809_40849 = G__40866;
chunk__40810_40850 = G__40867;
count__40811_40851 = G__40868;
i__40812_40852 = G__40869;
continue;
} else {
var vec__40818_40870 = cljs.core.first.call(null,seq__40809_40864__$1);
var name_40871 = cljs.core.nth.call(null,vec__40818_40870,(0),null);
var map__40821_40872 = cljs.core.nth.call(null,vec__40818_40870,(1),null);
var map__40821_40873__$1 = ((((!((map__40821_40872 == null)))?((((map__40821_40872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40821_40872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821_40872):map__40821_40872);
var doc_40874 = cljs.core.get.call(null,map__40821_40873__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40875 = cljs.core.get.call(null,map__40821_40873__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40871);

cljs.core.println.call(null," ",arglists_40875);

if(cljs.core.truth_(doc_40874)){
cljs.core.println.call(null," ",doc_40874);
} else {
}

var G__40876 = cljs.core.next.call(null,seq__40809_40864__$1);
var G__40877 = null;
var G__40878 = (0);
var G__40879 = (0);
seq__40809_40849 = G__40876;
chunk__40810_40850 = G__40877;
count__40811_40851 = G__40878;
i__40812_40852 = G__40879;
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
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__40823 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40824 = null;
var count__40825 = (0);
var i__40826 = (0);
while(true){
if((i__40826 < count__40825)){
var role = cljs.core._nth.call(null,chunk__40824,i__40826);
var temp__6503__auto___40880__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___40880__$1)){
var spec_40881 = temp__6503__auto___40880__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40881));
} else {
}

var G__40882 = seq__40823;
var G__40883 = chunk__40824;
var G__40884 = count__40825;
var G__40885 = (i__40826 + (1));
seq__40823 = G__40882;
chunk__40824 = G__40883;
count__40825 = G__40884;
i__40826 = G__40885;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__40823);
if(temp__6503__auto____$1){
var seq__40823__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40823__$1)){
var c__22492__auto__ = cljs.core.chunk_first.call(null,seq__40823__$1);
var G__40886 = cljs.core.chunk_rest.call(null,seq__40823__$1);
var G__40887 = c__22492__auto__;
var G__40888 = cljs.core.count.call(null,c__22492__auto__);
var G__40889 = (0);
seq__40823 = G__40886;
chunk__40824 = G__40887;
count__40825 = G__40888;
i__40826 = G__40889;
continue;
} else {
var role = cljs.core.first.call(null,seq__40823__$1);
var temp__6503__auto___40890__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___40890__$2)){
var spec_40891 = temp__6503__auto___40890__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40891));
} else {
}

var G__40892 = cljs.core.next.call(null,seq__40823__$1);
var G__40893 = null;
var G__40894 = (0);
var G__40895 = (0);
seq__40823 = G__40892;
chunk__40824 = G__40893;
count__40825 = G__40894;
i__40826 = G__40895;
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

//# sourceMappingURL=repl.js.map?rel=1471419426278