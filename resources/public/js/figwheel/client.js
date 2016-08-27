// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args41446 = [];
var len__22773__auto___41449 = arguments.length;
var i__22774__auto___41450 = (0);
while(true){
if((i__22774__auto___41450 < len__22773__auto___41449)){
args41446.push((arguments[i__22774__auto___41450]));

var G__41451 = (i__22774__auto___41450 + (1));
i__22774__auto___41450 = G__41451;
continue;
} else {
}
break;
}

var G__41448 = args41446.length;
switch (G__41448) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41446.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___41454 = arguments.length;
var i__22774__auto___41455 = (0);
while(true){
if((i__22774__auto___41455 < len__22773__auto___41454)){
args__22780__auto__.push((arguments[i__22774__auto___41455]));

var G__41456 = (i__22774__auto___41455 + (1));
i__22774__auto___41455 = G__41456;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41453){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41453));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___41458 = arguments.length;
var i__22774__auto___41459 = (0);
while(true){
if((i__22774__auto___41459 < len__22773__auto___41458)){
args__22780__auto__.push((arguments[i__22774__auto___41459]));

var G__41460 = (i__22774__auto___41459 + (1));
i__22774__auto___41459 = G__41460;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41457){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41457));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41461 = cljs.core._EQ_;
var expr__41462 = (function (){var or__21590__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41465){if((e41465 instanceof Error)){
var e = e41465;
return false;
} else {
throw e41465;

}
}})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41461.call(null,"true",expr__41462))){
return true;
} else {
if(cljs.core.truth_(pred__41461.call(null,"false",expr__41462))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41462)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e41467){if((e41467 instanceof Error)){
var e = e41467;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41467;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41468){
var map__41471 = p__41468;
var map__41471__$1 = ((((!((map__41471 == null)))?((((map__41471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41471):map__41471);
var message = cljs.core.get.call(null,map__41471__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41471__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21590__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21578__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21578__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21578__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31971__auto___41633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___41633,ch){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___41633,ch){
return (function (state_41602){
var state_val_41603 = (state_41602[(1)]);
if((state_val_41603 === (7))){
var inst_41598 = (state_41602[(2)]);
var state_41602__$1 = state_41602;
var statearr_41604_41634 = state_41602__$1;
(statearr_41604_41634[(2)] = inst_41598);

(statearr_41604_41634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (1))){
var state_41602__$1 = state_41602;
var statearr_41605_41635 = state_41602__$1;
(statearr_41605_41635[(2)] = null);

(statearr_41605_41635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (4))){
var inst_41555 = (state_41602[(7)]);
var inst_41555__$1 = (state_41602[(2)]);
var state_41602__$1 = (function (){var statearr_41606 = state_41602;
(statearr_41606[(7)] = inst_41555__$1);

return statearr_41606;
})();
if(cljs.core.truth_(inst_41555__$1)){
var statearr_41607_41636 = state_41602__$1;
(statearr_41607_41636[(1)] = (5));

} else {
var statearr_41608_41637 = state_41602__$1;
(statearr_41608_41637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (15))){
var inst_41562 = (state_41602[(8)]);
var inst_41577 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41562);
var inst_41578 = cljs.core.first.call(null,inst_41577);
var inst_41579 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41578);
var inst_41580 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41579)].join('');
var inst_41581 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41580);
var state_41602__$1 = state_41602;
var statearr_41609_41638 = state_41602__$1;
(statearr_41609_41638[(2)] = inst_41581);

(statearr_41609_41638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (13))){
var inst_41586 = (state_41602[(2)]);
var state_41602__$1 = state_41602;
var statearr_41610_41639 = state_41602__$1;
(statearr_41610_41639[(2)] = inst_41586);

(statearr_41610_41639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (6))){
var state_41602__$1 = state_41602;
var statearr_41611_41640 = state_41602__$1;
(statearr_41611_41640[(2)] = null);

(statearr_41611_41640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (17))){
var inst_41584 = (state_41602[(2)]);
var state_41602__$1 = state_41602;
var statearr_41612_41641 = state_41602__$1;
(statearr_41612_41641[(2)] = inst_41584);

(statearr_41612_41641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (3))){
var inst_41600 = (state_41602[(2)]);
var state_41602__$1 = state_41602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41602__$1,inst_41600);
} else {
if((state_val_41603 === (12))){
var inst_41561 = (state_41602[(9)]);
var inst_41575 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41561,opts);
var state_41602__$1 = state_41602;
if(cljs.core.truth_(inst_41575)){
var statearr_41613_41642 = state_41602__$1;
(statearr_41613_41642[(1)] = (15));

} else {
var statearr_41614_41643 = state_41602__$1;
(statearr_41614_41643[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (2))){
var state_41602__$1 = state_41602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41602__$1,(4),ch);
} else {
if((state_val_41603 === (11))){
var inst_41562 = (state_41602[(8)]);
var inst_41567 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41568 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41562);
var inst_41569 = cljs.core.async.timeout.call(null,(1000));
var inst_41570 = [inst_41568,inst_41569];
var inst_41571 = (new cljs.core.PersistentVector(null,2,(5),inst_41567,inst_41570,null));
var state_41602__$1 = state_41602;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41602__$1,(14),inst_41571);
} else {
if((state_val_41603 === (9))){
var inst_41562 = (state_41602[(8)]);
var inst_41588 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41589 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41562);
var inst_41590 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41589);
var inst_41591 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41590)].join('');
var inst_41592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41591);
var state_41602__$1 = (function (){var statearr_41615 = state_41602;
(statearr_41615[(10)] = inst_41588);

return statearr_41615;
})();
var statearr_41616_41644 = state_41602__$1;
(statearr_41616_41644[(2)] = inst_41592);

(statearr_41616_41644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (5))){
var inst_41555 = (state_41602[(7)]);
var inst_41557 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41558 = (new cljs.core.PersistentArrayMap(null,2,inst_41557,null));
var inst_41559 = (new cljs.core.PersistentHashSet(null,inst_41558,null));
var inst_41560 = figwheel.client.focus_msgs.call(null,inst_41559,inst_41555);
var inst_41561 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41560);
var inst_41562 = cljs.core.first.call(null,inst_41560);
var inst_41563 = figwheel.client.autoload_QMARK_.call(null);
var state_41602__$1 = (function (){var statearr_41617 = state_41602;
(statearr_41617[(8)] = inst_41562);

(statearr_41617[(9)] = inst_41561);

return statearr_41617;
})();
if(cljs.core.truth_(inst_41563)){
var statearr_41618_41645 = state_41602__$1;
(statearr_41618_41645[(1)] = (8));

} else {
var statearr_41619_41646 = state_41602__$1;
(statearr_41619_41646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (14))){
var inst_41573 = (state_41602[(2)]);
var state_41602__$1 = state_41602;
var statearr_41620_41647 = state_41602__$1;
(statearr_41620_41647[(2)] = inst_41573);

(statearr_41620_41647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (16))){
var state_41602__$1 = state_41602;
var statearr_41621_41648 = state_41602__$1;
(statearr_41621_41648[(2)] = null);

(statearr_41621_41648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (10))){
var inst_41594 = (state_41602[(2)]);
var state_41602__$1 = (function (){var statearr_41622 = state_41602;
(statearr_41622[(11)] = inst_41594);

return statearr_41622;
})();
var statearr_41623_41649 = state_41602__$1;
(statearr_41623_41649[(2)] = null);

(statearr_41623_41649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41603 === (8))){
var inst_41561 = (state_41602[(9)]);
var inst_41565 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41561,opts);
var state_41602__$1 = state_41602;
if(cljs.core.truth_(inst_41565)){
var statearr_41624_41650 = state_41602__$1;
(statearr_41624_41650[(1)] = (11));

} else {
var statearr_41625_41651 = state_41602__$1;
(statearr_41625_41651[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31971__auto___41633,ch))
;
return ((function (switch__31857__auto__,c__31971__auto___41633,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____0 = (function (){
var statearr_41629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41629[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__);

(statearr_41629[(1)] = (1));

return statearr_41629;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____1 = (function (state_41602){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_41602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e41630){if((e41630 instanceof Object)){
var ex__31861__auto__ = e41630;
var statearr_41631_41652 = state_41602;
(statearr_41631_41652[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41653 = state_41602;
state_41602 = G__41653;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__ = function(state_41602){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____1.call(this,state_41602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31858__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___41633,ch))
})();
var state__31973__auto__ = (function (){var statearr_41632 = f__31972__auto__.call(null);
(statearr_41632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___41633);

return statearr_41632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___41633,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41654_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41654_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41657 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41657){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41656){if((e41656 instanceof Error)){
var e = e41656;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41657], null));
} else {
var e = e41656;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41657))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41658){
var map__41667 = p__41658;
var map__41667__$1 = ((((!((map__41667 == null)))?((((map__41667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41667):map__41667);
var opts = map__41667__$1;
var build_id = cljs.core.get.call(null,map__41667__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41667,map__41667__$1,opts,build_id){
return (function (p__41669){
var vec__41670 = p__41669;
var seq__41671 = cljs.core.seq.call(null,vec__41670);
var first__41672 = cljs.core.first.call(null,seq__41671);
var seq__41671__$1 = cljs.core.next.call(null,seq__41671);
var map__41673 = first__41672;
var map__41673__$1 = ((((!((map__41673 == null)))?((((map__41673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41673):map__41673);
var msg = map__41673__$1;
var msg_name = cljs.core.get.call(null,map__41673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41671__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41670,seq__41671,first__41672,seq__41671__$1,map__41673,map__41673__$1,msg,msg_name,_,map__41667,map__41667__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41670,seq__41671,first__41672,seq__41671__$1,map__41673,map__41673__$1,msg,msg_name,_,map__41667,map__41667__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41667,map__41667__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41681){
var vec__41682 = p__41681;
var seq__41683 = cljs.core.seq.call(null,vec__41682);
var first__41684 = cljs.core.first.call(null,seq__41683);
var seq__41683__$1 = cljs.core.next.call(null,seq__41683);
var map__41685 = first__41684;
var map__41685__$1 = ((((!((map__41685 == null)))?((((map__41685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41685):map__41685);
var msg = map__41685__$1;
var msg_name = cljs.core.get.call(null,map__41685__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41683__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41687){
var map__41699 = p__41687;
var map__41699__$1 = ((((!((map__41699 == null)))?((((map__41699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41699):map__41699);
var on_compile_warning = cljs.core.get.call(null,map__41699__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41699__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41699,map__41699__$1,on_compile_warning,on_compile_fail){
return (function (p__41701){
var vec__41702 = p__41701;
var seq__41703 = cljs.core.seq.call(null,vec__41702);
var first__41704 = cljs.core.first.call(null,seq__41703);
var seq__41703__$1 = cljs.core.next.call(null,seq__41703);
var map__41705 = first__41704;
var map__41705__$1 = ((((!((map__41705 == null)))?((((map__41705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41705):map__41705);
var msg = map__41705__$1;
var msg_name = cljs.core.get.call(null,map__41705__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41703__$1;
var pred__41707 = cljs.core._EQ_;
var expr__41708 = msg_name;
if(cljs.core.truth_(pred__41707.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41708))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41707.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41708))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41699,map__41699__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__,msg_hist,msg_names,msg){
return (function (state_41916){
var state_val_41917 = (state_41916[(1)]);
if((state_val_41917 === (7))){
var inst_41844 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41844)){
var statearr_41918_41964 = state_41916__$1;
(statearr_41918_41964[(1)] = (8));

} else {
var statearr_41919_41965 = state_41916__$1;
(statearr_41919_41965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (20))){
var inst_41910 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41920_41966 = state_41916__$1;
(statearr_41920_41966[(2)] = inst_41910);

(statearr_41920_41966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (27))){
var inst_41906 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41921_41967 = state_41916__$1;
(statearr_41921_41967[(2)] = inst_41906);

(statearr_41921_41967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (1))){
var inst_41837 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41837)){
var statearr_41922_41968 = state_41916__$1;
(statearr_41922_41968[(1)] = (2));

} else {
var statearr_41923_41969 = state_41916__$1;
(statearr_41923_41969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (24))){
var inst_41908 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41924_41970 = state_41916__$1;
(statearr_41924_41970[(2)] = inst_41908);

(statearr_41924_41970[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (4))){
var inst_41914 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41916__$1,inst_41914);
} else {
if((state_val_41917 === (15))){
var inst_41912 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41925_41971 = state_41916__$1;
(statearr_41925_41971[(2)] = inst_41912);

(statearr_41925_41971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (21))){
var inst_41871 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41926_41972 = state_41916__$1;
(statearr_41926_41972[(2)] = inst_41871);

(statearr_41926_41972[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (31))){
var inst_41895 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41895)){
var statearr_41927_41973 = state_41916__$1;
(statearr_41927_41973[(1)] = (34));

} else {
var statearr_41928_41974 = state_41916__$1;
(statearr_41928_41974[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (32))){
var inst_41904 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41929_41975 = state_41916__$1;
(statearr_41929_41975[(2)] = inst_41904);

(statearr_41929_41975[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (33))){
var inst_41893 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41930_41976 = state_41916__$1;
(statearr_41930_41976[(2)] = inst_41893);

(statearr_41930_41976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (13))){
var inst_41858 = figwheel.client.heads_up.clear.call(null);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(16),inst_41858);
} else {
if((state_val_41917 === (22))){
var inst_41875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41876 = figwheel.client.heads_up.append_warning_message.call(null,inst_41875);
var state_41916__$1 = state_41916;
var statearr_41931_41977 = state_41916__$1;
(statearr_41931_41977[(2)] = inst_41876);

(statearr_41931_41977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (36))){
var inst_41902 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41932_41978 = state_41916__$1;
(statearr_41932_41978[(2)] = inst_41902);

(statearr_41932_41978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (29))){
var inst_41886 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41933_41979 = state_41916__$1;
(statearr_41933_41979[(2)] = inst_41886);

(statearr_41933_41979[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (6))){
var inst_41839 = (state_41916[(7)]);
var state_41916__$1 = state_41916;
var statearr_41934_41980 = state_41916__$1;
(statearr_41934_41980[(2)] = inst_41839);

(statearr_41934_41980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (28))){
var inst_41882 = (state_41916[(2)]);
var inst_41883 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41884 = figwheel.client.heads_up.display_warning.call(null,inst_41883);
var state_41916__$1 = (function (){var statearr_41935 = state_41916;
(statearr_41935[(8)] = inst_41882);

return statearr_41935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(29),inst_41884);
} else {
if((state_val_41917 === (25))){
var inst_41880 = figwheel.client.heads_up.clear.call(null);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(28),inst_41880);
} else {
if((state_val_41917 === (34))){
var inst_41897 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(37),inst_41897);
} else {
if((state_val_41917 === (17))){
var inst_41864 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41936_41981 = state_41916__$1;
(statearr_41936_41981[(2)] = inst_41864);

(statearr_41936_41981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (3))){
var inst_41856 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41856)){
var statearr_41937_41982 = state_41916__$1;
(statearr_41937_41982[(1)] = (13));

} else {
var statearr_41938_41983 = state_41916__$1;
(statearr_41938_41983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (12))){
var inst_41852 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41939_41984 = state_41916__$1;
(statearr_41939_41984[(2)] = inst_41852);

(statearr_41939_41984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (2))){
var inst_41839 = (state_41916[(7)]);
var inst_41839__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41916__$1 = (function (){var statearr_41940 = state_41916;
(statearr_41940[(7)] = inst_41839__$1);

return statearr_41940;
})();
if(cljs.core.truth_(inst_41839__$1)){
var statearr_41941_41985 = state_41916__$1;
(statearr_41941_41985[(1)] = (5));

} else {
var statearr_41942_41986 = state_41916__$1;
(statearr_41942_41986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (23))){
var inst_41878 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41878)){
var statearr_41943_41987 = state_41916__$1;
(statearr_41943_41987[(1)] = (25));

} else {
var statearr_41944_41988 = state_41916__$1;
(statearr_41944_41988[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (35))){
var state_41916__$1 = state_41916;
var statearr_41945_41989 = state_41916__$1;
(statearr_41945_41989[(2)] = null);

(statearr_41945_41989[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (19))){
var inst_41873 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41873)){
var statearr_41946_41990 = state_41916__$1;
(statearr_41946_41990[(1)] = (22));

} else {
var statearr_41947_41991 = state_41916__$1;
(statearr_41947_41991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (11))){
var inst_41848 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41948_41992 = state_41916__$1;
(statearr_41948_41992[(2)] = inst_41848);

(statearr_41948_41992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (9))){
var inst_41850 = figwheel.client.heads_up.clear.call(null);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(12),inst_41850);
} else {
if((state_val_41917 === (5))){
var inst_41841 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41916__$1 = state_41916;
var statearr_41949_41993 = state_41916__$1;
(statearr_41949_41993[(2)] = inst_41841);

(statearr_41949_41993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (14))){
var inst_41866 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41866)){
var statearr_41950_41994 = state_41916__$1;
(statearr_41950_41994[(1)] = (18));

} else {
var statearr_41951_41995 = state_41916__$1;
(statearr_41951_41995[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (26))){
var inst_41888 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41888)){
var statearr_41952_41996 = state_41916__$1;
(statearr_41952_41996[(1)] = (30));

} else {
var statearr_41953_41997 = state_41916__$1;
(statearr_41953_41997[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (16))){
var inst_41860 = (state_41916[(2)]);
var inst_41861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41862 = figwheel.client.heads_up.display_exception.call(null,inst_41861);
var state_41916__$1 = (function (){var statearr_41954 = state_41916;
(statearr_41954[(9)] = inst_41860);

return statearr_41954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(17),inst_41862);
} else {
if((state_val_41917 === (30))){
var inst_41890 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41891 = figwheel.client.heads_up.display_warning.call(null,inst_41890);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(33),inst_41891);
} else {
if((state_val_41917 === (10))){
var inst_41854 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41955_41998 = state_41916__$1;
(statearr_41955_41998[(2)] = inst_41854);

(statearr_41955_41998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (18))){
var inst_41868 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41869 = figwheel.client.heads_up.display_exception.call(null,inst_41868);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(21),inst_41869);
} else {
if((state_val_41917 === (37))){
var inst_41899 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41956_41999 = state_41916__$1;
(statearr_41956_41999[(2)] = inst_41899);

(statearr_41956_41999[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (8))){
var inst_41846 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(11),inst_41846);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31971__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31857__auto__,c__31971__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____0 = (function (){
var statearr_41960 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41960[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__);

(statearr_41960[(1)] = (1));

return statearr_41960;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____1 = (function (state_41916){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_41916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e41961){if((e41961 instanceof Object)){
var ex__31861__auto__ = e41961;
var statearr_41962_42000 = state_41916;
(statearr_41962_42000[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42001 = state_41916;
state_41916 = G__42001;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__ = function(state_41916){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____1.call(this,state_41916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__,msg_hist,msg_names,msg))
})();
var state__31973__auto__ = (function (){var statearr_41963 = f__31972__auto__.call(null);
(statearr_41963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_41963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__,msg_hist,msg_names,msg))
);

return c__31971__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31971__auto___42064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___42064,ch){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___42064,ch){
return (function (state_42047){
var state_val_42048 = (state_42047[(1)]);
if((state_val_42048 === (1))){
var state_42047__$1 = state_42047;
var statearr_42049_42065 = state_42047__$1;
(statearr_42049_42065[(2)] = null);

(statearr_42049_42065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (2))){
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42047__$1,(4),ch);
} else {
if((state_val_42048 === (3))){
var inst_42045 = (state_42047[(2)]);
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42047__$1,inst_42045);
} else {
if((state_val_42048 === (4))){
var inst_42035 = (state_42047[(7)]);
var inst_42035__$1 = (state_42047[(2)]);
var state_42047__$1 = (function (){var statearr_42050 = state_42047;
(statearr_42050[(7)] = inst_42035__$1);

return statearr_42050;
})();
if(cljs.core.truth_(inst_42035__$1)){
var statearr_42051_42066 = state_42047__$1;
(statearr_42051_42066[(1)] = (5));

} else {
var statearr_42052_42067 = state_42047__$1;
(statearr_42052_42067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (5))){
var inst_42035 = (state_42047[(7)]);
var inst_42037 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42035);
var state_42047__$1 = state_42047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42047__$1,(8),inst_42037);
} else {
if((state_val_42048 === (6))){
var state_42047__$1 = state_42047;
var statearr_42053_42068 = state_42047__$1;
(statearr_42053_42068[(2)] = null);

(statearr_42053_42068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (7))){
var inst_42043 = (state_42047[(2)]);
var state_42047__$1 = state_42047;
var statearr_42054_42069 = state_42047__$1;
(statearr_42054_42069[(2)] = inst_42043);

(statearr_42054_42069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42048 === (8))){
var inst_42039 = (state_42047[(2)]);
var state_42047__$1 = (function (){var statearr_42055 = state_42047;
(statearr_42055[(8)] = inst_42039);

return statearr_42055;
})();
var statearr_42056_42070 = state_42047__$1;
(statearr_42056_42070[(2)] = null);

(statearr_42056_42070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31971__auto___42064,ch))
;
return ((function (switch__31857__auto__,c__31971__auto___42064,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31858__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31858__auto____0 = (function (){
var statearr_42060 = [null,null,null,null,null,null,null,null,null];
(statearr_42060[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31858__auto__);

(statearr_42060[(1)] = (1));

return statearr_42060;
});
var figwheel$client$heads_up_plugin_$_state_machine__31858__auto____1 = (function (state_42047){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_42047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e42061){if((e42061 instanceof Object)){
var ex__31861__auto__ = e42061;
var statearr_42062_42071 = state_42047;
(statearr_42062_42071[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42072 = state_42047;
state_42047 = G__42072;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31858__auto__ = function(state_42047){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31858__auto____1.call(this,state_42047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31858__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31858__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___42064,ch))
})();
var state__31973__auto__ = (function (){var statearr_42063 = f__31972__auto__.call(null);
(statearr_42063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___42064);

return statearr_42063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___42064,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__){
return (function (state_42093){
var state_val_42094 = (state_42093[(1)]);
if((state_val_42094 === (1))){
var inst_42088 = cljs.core.async.timeout.call(null,(3000));
var state_42093__$1 = state_42093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42093__$1,(2),inst_42088);
} else {
if((state_val_42094 === (2))){
var inst_42090 = (state_42093[(2)]);
var inst_42091 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42093__$1 = (function (){var statearr_42095 = state_42093;
(statearr_42095[(7)] = inst_42090);

return statearr_42095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42093__$1,inst_42091);
} else {
return null;
}
}
});})(c__31971__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____0 = (function (){
var statearr_42099 = [null,null,null,null,null,null,null,null];
(statearr_42099[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__);

(statearr_42099[(1)] = (1));

return statearr_42099;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____1 = (function (state_42093){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_42093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e42100){if((e42100 instanceof Object)){
var ex__31861__auto__ = e42100;
var statearr_42101_42103 = state_42093;
(statearr_42101_42103[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42104 = state_42093;
state_42093 = G__42104;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__ = function(state_42093){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____1.call(this,state_42093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31858__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__))
})();
var state__31973__auto__ = (function (){var statearr_42102 = f__31972__auto__.call(null);
(statearr_42102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_42102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__))
);

return c__31971__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6552__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6552__auto__)){
var figwheel_version = temp__6552__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__,figwheel_version,temp__6552__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__,figwheel_version,temp__6552__auto__){
return (function (state_42127){
var state_val_42128 = (state_42127[(1)]);
if((state_val_42128 === (1))){
var inst_42121 = cljs.core.async.timeout.call(null,(2000));
var state_42127__$1 = state_42127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42127__$1,(2),inst_42121);
} else {
if((state_val_42128 === (2))){
var inst_42123 = (state_42127[(2)]);
var inst_42124 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_42125 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42124);
var state_42127__$1 = (function (){var statearr_42129 = state_42127;
(statearr_42129[(7)] = inst_42123);

return statearr_42129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42127__$1,inst_42125);
} else {
return null;
}
}
});})(c__31971__auto__,figwheel_version,temp__6552__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__,figwheel_version,temp__6552__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____0 = (function (){
var statearr_42133 = [null,null,null,null,null,null,null,null];
(statearr_42133[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__);

(statearr_42133[(1)] = (1));

return statearr_42133;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____1 = (function (state_42127){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_42127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e42134){if((e42134 instanceof Object)){
var ex__31861__auto__ = e42134;
var statearr_42135_42137 = state_42127;
(statearr_42135_42137[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42138 = state_42127;
state_42127 = G__42138;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__ = function(state_42127){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____1.call(this,state_42127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__,figwheel_version,temp__6552__auto__))
})();
var state__31973__auto__ = (function (){var statearr_42136 = f__31972__auto__.call(null);
(statearr_42136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_42136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__,figwheel_version,temp__6552__auto__))
);

return c__31971__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42139){
var map__42143 = p__42139;
var map__42143__$1 = ((((!((map__42143 == null)))?((((map__42143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42143):map__42143);
var file = cljs.core.get.call(null,map__42143__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42143__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42145 = "";
var G__42145__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__42145),cljs.core.str("file "),cljs.core.str(file)].join(''):G__42145);
var G__42145__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__42145__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__42145__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())){
return [cljs.core.str(G__42145__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__42145__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42146){
var map__42153 = p__42146;
var map__42153__$1 = ((((!((map__42153 == null)))?((((map__42153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42153):map__42153);
var ed = map__42153__$1;
var formatted_exception = cljs.core.get.call(null,map__42153__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42153__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42153__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42155_42159 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42156_42160 = null;
var count__42157_42161 = (0);
var i__42158_42162 = (0);
while(true){
if((i__42158_42162 < count__42157_42161)){
var msg_42163 = cljs.core._nth.call(null,chunk__42156_42160,i__42158_42162);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42163);

var G__42164 = seq__42155_42159;
var G__42165 = chunk__42156_42160;
var G__42166 = count__42157_42161;
var G__42167 = (i__42158_42162 + (1));
seq__42155_42159 = G__42164;
chunk__42156_42160 = G__42165;
count__42157_42161 = G__42166;
i__42158_42162 = G__42167;
continue;
} else {
var temp__6552__auto___42168 = cljs.core.seq.call(null,seq__42155_42159);
if(temp__6552__auto___42168){
var seq__42155_42169__$1 = temp__6552__auto___42168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42155_42169__$1)){
var c__22493__auto___42170 = cljs.core.chunk_first.call(null,seq__42155_42169__$1);
var G__42171 = cljs.core.chunk_rest.call(null,seq__42155_42169__$1);
var G__42172 = c__22493__auto___42170;
var G__42173 = cljs.core.count.call(null,c__22493__auto___42170);
var G__42174 = (0);
seq__42155_42159 = G__42171;
chunk__42156_42160 = G__42172;
count__42157_42161 = G__42173;
i__42158_42162 = G__42174;
continue;
} else {
var msg_42175 = cljs.core.first.call(null,seq__42155_42169__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42175);

var G__42176 = cljs.core.next.call(null,seq__42155_42169__$1);
var G__42177 = null;
var G__42178 = (0);
var G__42179 = (0);
seq__42155_42159 = G__42176;
chunk__42156_42160 = G__42177;
count__42157_42161 = G__42178;
i__42158_42162 = G__42179;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42180){
var map__42183 = p__42180;
var map__42183__$1 = ((((!((map__42183 == null)))?((((map__42183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42183):map__42183);
var w = map__42183__$1;
var message = cljs.core.get.call(null,map__42183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21578__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21578__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42195 = cljs.core.seq.call(null,plugins);
var chunk__42196 = null;
var count__42197 = (0);
var i__42198 = (0);
while(true){
if((i__42198 < count__42197)){
var vec__42199 = cljs.core._nth.call(null,chunk__42196,i__42198);
var k = cljs.core.nth.call(null,vec__42199,(0),null);
var plugin = cljs.core.nth.call(null,vec__42199,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42205 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42195,chunk__42196,count__42197,i__42198,pl_42205,vec__42199,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42205.call(null,msg_hist);
});})(seq__42195,chunk__42196,count__42197,i__42198,pl_42205,vec__42199,k,plugin))
);
} else {
}

var G__42206 = seq__42195;
var G__42207 = chunk__42196;
var G__42208 = count__42197;
var G__42209 = (i__42198 + (1));
seq__42195 = G__42206;
chunk__42196 = G__42207;
count__42197 = G__42208;
i__42198 = G__42209;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__42195);
if(temp__6552__auto__){
var seq__42195__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42195__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__42195__$1);
var G__42210 = cljs.core.chunk_rest.call(null,seq__42195__$1);
var G__42211 = c__22493__auto__;
var G__42212 = cljs.core.count.call(null,c__22493__auto__);
var G__42213 = (0);
seq__42195 = G__42210;
chunk__42196 = G__42211;
count__42197 = G__42212;
i__42198 = G__42213;
continue;
} else {
var vec__42202 = cljs.core.first.call(null,seq__42195__$1);
var k = cljs.core.nth.call(null,vec__42202,(0),null);
var plugin = cljs.core.nth.call(null,vec__42202,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42214 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42195,chunk__42196,count__42197,i__42198,pl_42214,vec__42202,k,plugin,seq__42195__$1,temp__6552__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42214.call(null,msg_hist);
});})(seq__42195,chunk__42196,count__42197,i__42198,pl_42214,vec__42202,k,plugin,seq__42195__$1,temp__6552__auto__))
);
} else {
}

var G__42215 = cljs.core.next.call(null,seq__42195__$1);
var G__42216 = null;
var G__42217 = (0);
var G__42218 = (0);
seq__42195 = G__42215;
chunk__42196 = G__42216;
count__42197 = G__42217;
i__42198 = G__42218;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42219 = [];
var len__22773__auto___42226 = arguments.length;
var i__22774__auto___42227 = (0);
while(true){
if((i__22774__auto___42227 < len__22773__auto___42226)){
args42219.push((arguments[i__22774__auto___42227]));

var G__42228 = (i__22774__auto___42227 + (1));
i__22774__auto___42227 = G__42228;
continue;
} else {
}
break;
}

var G__42221 = args42219.length;
switch (G__42221) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42219.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42222_42230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42223_42231 = null;
var count__42224_42232 = (0);
var i__42225_42233 = (0);
while(true){
if((i__42225_42233 < count__42224_42232)){
var msg_42234 = cljs.core._nth.call(null,chunk__42223_42231,i__42225_42233);
figwheel.client.socket.handle_incoming_message.call(null,msg_42234);

var G__42235 = seq__42222_42230;
var G__42236 = chunk__42223_42231;
var G__42237 = count__42224_42232;
var G__42238 = (i__42225_42233 + (1));
seq__42222_42230 = G__42235;
chunk__42223_42231 = G__42236;
count__42224_42232 = G__42237;
i__42225_42233 = G__42238;
continue;
} else {
var temp__6552__auto___42239 = cljs.core.seq.call(null,seq__42222_42230);
if(temp__6552__auto___42239){
var seq__42222_42240__$1 = temp__6552__auto___42239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42222_42240__$1)){
var c__22493__auto___42241 = cljs.core.chunk_first.call(null,seq__42222_42240__$1);
var G__42242 = cljs.core.chunk_rest.call(null,seq__42222_42240__$1);
var G__42243 = c__22493__auto___42241;
var G__42244 = cljs.core.count.call(null,c__22493__auto___42241);
var G__42245 = (0);
seq__42222_42230 = G__42242;
chunk__42223_42231 = G__42243;
count__42224_42232 = G__42244;
i__42225_42233 = G__42245;
continue;
} else {
var msg_42246 = cljs.core.first.call(null,seq__42222_42240__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42246);

var G__42247 = cljs.core.next.call(null,seq__42222_42240__$1);
var G__42248 = null;
var G__42249 = (0);
var G__42250 = (0);
seq__42222_42230 = G__42247;
chunk__42223_42231 = G__42248;
count__42224_42232 = G__42249;
i__42225_42233 = G__42250;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22780__auto__ = [];
var len__22773__auto___42255 = arguments.length;
var i__22774__auto___42256 = (0);
while(true){
if((i__22774__auto___42256 < len__22773__auto___42255)){
args__22780__auto__.push((arguments[i__22774__auto___42256]));

var G__42257 = (i__22774__auto___42256 + (1));
i__22774__auto___42256 = G__42257;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42252){
var map__42253 = p__42252;
var map__42253__$1 = ((((!((map__42253 == null)))?((((map__42253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42253):map__42253);
var opts = map__42253__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42251){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42251));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42259){if((e42259 instanceof Error)){
var e = e42259;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42259;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42263){
var map__42264 = p__42263;
var map__42264__$1 = ((((!((map__42264 == null)))?((((map__42264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42264):map__42264);
var msg_name = cljs.core.get.call(null,map__42264__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1472129949996