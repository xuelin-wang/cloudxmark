// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59601){
var map__59626 = p__59601;
var map__59626__$1 = ((((!((map__59626 == null)))?((((map__59626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59626):map__59626);
var m = map__59626__$1;
var n = cljs.core.get.call(null,map__59626__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59626__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59628_59650 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59629_59651 = null;
var count__59630_59652 = (0);
var i__59631_59653 = (0);
while(true){
if((i__59631_59653 < count__59630_59652)){
var f_59654 = cljs.core._nth.call(null,chunk__59629_59651,i__59631_59653);
cljs.core.println.call(null,"  ",f_59654);

var G__59655 = seq__59628_59650;
var G__59656 = chunk__59629_59651;
var G__59657 = count__59630_59652;
var G__59658 = (i__59631_59653 + (1));
seq__59628_59650 = G__59655;
chunk__59629_59651 = G__59656;
count__59630_59652 = G__59657;
i__59631_59653 = G__59658;
continue;
} else {
var temp__6552__auto___59659 = cljs.core.seq.call(null,seq__59628_59650);
if(temp__6552__auto___59659){
var seq__59628_59660__$1 = temp__6552__auto___59659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59628_59660__$1)){
var c__22493__auto___59661 = cljs.core.chunk_first.call(null,seq__59628_59660__$1);
var G__59662 = cljs.core.chunk_rest.call(null,seq__59628_59660__$1);
var G__59663 = c__22493__auto___59661;
var G__59664 = cljs.core.count.call(null,c__22493__auto___59661);
var G__59665 = (0);
seq__59628_59650 = G__59662;
chunk__59629_59651 = G__59663;
count__59630_59652 = G__59664;
i__59631_59653 = G__59665;
continue;
} else {
var f_59666 = cljs.core.first.call(null,seq__59628_59660__$1);
cljs.core.println.call(null,"  ",f_59666);

var G__59667 = cljs.core.next.call(null,seq__59628_59660__$1);
var G__59668 = null;
var G__59669 = (0);
var G__59670 = (0);
seq__59628_59650 = G__59667;
chunk__59629_59651 = G__59668;
count__59630_59652 = G__59669;
i__59631_59653 = G__59670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21590__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59671);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59671)))?cljs.core.second.call(null,arglists_59671):arglists_59671));
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
var seq__59632_59672 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59633_59673 = null;
var count__59634_59674 = (0);
var i__59635_59675 = (0);
while(true){
if((i__59635_59675 < count__59634_59674)){
var vec__59636_59676 = cljs.core._nth.call(null,chunk__59633_59673,i__59635_59675);
var name_59677 = cljs.core.nth.call(null,vec__59636_59676,(0),null);
var map__59639_59678 = cljs.core.nth.call(null,vec__59636_59676,(1),null);
var map__59639_59679__$1 = ((((!((map__59639_59678 == null)))?((((map__59639_59678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59639_59678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59639_59678):map__59639_59678);
var doc_59680 = cljs.core.get.call(null,map__59639_59679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59681 = cljs.core.get.call(null,map__59639_59679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59677);

cljs.core.println.call(null," ",arglists_59681);

if(cljs.core.truth_(doc_59680)){
cljs.core.println.call(null," ",doc_59680);
} else {
}

var G__59682 = seq__59632_59672;
var G__59683 = chunk__59633_59673;
var G__59684 = count__59634_59674;
var G__59685 = (i__59635_59675 + (1));
seq__59632_59672 = G__59682;
chunk__59633_59673 = G__59683;
count__59634_59674 = G__59684;
i__59635_59675 = G__59685;
continue;
} else {
var temp__6552__auto___59686 = cljs.core.seq.call(null,seq__59632_59672);
if(temp__6552__auto___59686){
var seq__59632_59687__$1 = temp__6552__auto___59686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59632_59687__$1)){
var c__22493__auto___59688 = cljs.core.chunk_first.call(null,seq__59632_59687__$1);
var G__59689 = cljs.core.chunk_rest.call(null,seq__59632_59687__$1);
var G__59690 = c__22493__auto___59688;
var G__59691 = cljs.core.count.call(null,c__22493__auto___59688);
var G__59692 = (0);
seq__59632_59672 = G__59689;
chunk__59633_59673 = G__59690;
count__59634_59674 = G__59691;
i__59635_59675 = G__59692;
continue;
} else {
var vec__59641_59693 = cljs.core.first.call(null,seq__59632_59687__$1);
var name_59694 = cljs.core.nth.call(null,vec__59641_59693,(0),null);
var map__59644_59695 = cljs.core.nth.call(null,vec__59641_59693,(1),null);
var map__59644_59696__$1 = ((((!((map__59644_59695 == null)))?((((map__59644_59695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59644_59695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59644_59695):map__59644_59695);
var doc_59697 = cljs.core.get.call(null,map__59644_59696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59698 = cljs.core.get.call(null,map__59644_59696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59694);

cljs.core.println.call(null," ",arglists_59698);

if(cljs.core.truth_(doc_59697)){
cljs.core.println.call(null," ",doc_59697);
} else {
}

var G__59699 = cljs.core.next.call(null,seq__59632_59687__$1);
var G__59700 = null;
var G__59701 = (0);
var G__59702 = (0);
seq__59632_59672 = G__59699;
chunk__59633_59673 = G__59700;
count__59634_59674 = G__59701;
i__59635_59675 = G__59702;
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

var seq__59646 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59647 = null;
var count__59648 = (0);
var i__59649 = (0);
while(true){
if((i__59649 < count__59648)){
var role = cljs.core._nth.call(null,chunk__59647,i__59649);
var temp__6552__auto___59703__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___59703__$1)){
var spec_59704 = temp__6552__auto___59703__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_59704));
} else {
}

var G__59705 = seq__59646;
var G__59706 = chunk__59647;
var G__59707 = count__59648;
var G__59708 = (i__59649 + (1));
seq__59646 = G__59705;
chunk__59647 = G__59706;
count__59648 = G__59707;
i__59649 = G__59708;
continue;
} else {
var temp__6552__auto____$1 = cljs.core.seq.call(null,seq__59646);
if(temp__6552__auto____$1){
var seq__59646__$1 = temp__6552__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59646__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__59646__$1);
var G__59709 = cljs.core.chunk_rest.call(null,seq__59646__$1);
var G__59710 = c__22493__auto__;
var G__59711 = cljs.core.count.call(null,c__22493__auto__);
var G__59712 = (0);
seq__59646 = G__59709;
chunk__59647 = G__59710;
count__59648 = G__59711;
i__59649 = G__59712;
continue;
} else {
var role = cljs.core.first.call(null,seq__59646__$1);
var temp__6552__auto___59713__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___59713__$2)){
var spec_59714 = temp__6552__auto___59713__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_59714));
} else {
}

var G__59715 = cljs.core.next.call(null,seq__59646__$1);
var G__59716 = null;
var G__59717 = (0);
var G__59718 = (0);
seq__59646 = G__59715;
chunk__59647 = G__59716;
count__59648 = G__59717;
i__59649 = G__59718;
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

//# sourceMappingURL=repl.js.map?rel=1471999081756