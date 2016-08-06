// Compiled by ClojureScript 1.9.89 {}
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
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39549 = [];
var len__22628__auto___39552 = arguments.length;
var i__22629__auto___39553 = (0);
while(true){
if((i__22629__auto___39553 < len__22628__auto___39552)){
args39549.push((arguments[i__22629__auto___39553]));

var G__39554 = (i__22629__auto___39553 + (1));
i__22629__auto___39553 = G__39554;
continue;
} else {
}
break;
}

var G__39551 = args39549.length;
switch (G__39551) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39549.length)].join('')));

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
var args__22635__auto__ = [];
var len__22628__auto___39557 = arguments.length;
var i__22629__auto___39558 = (0);
while(true){
if((i__22629__auto___39558 < len__22628__auto___39557)){
args__22635__auto__.push((arguments[i__22629__auto___39558]));

var G__39559 = (i__22629__auto___39558 + (1));
i__22629__auto___39558 = G__39559;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39556){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39556));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22635__auto__ = [];
var len__22628__auto___39561 = arguments.length;
var i__22629__auto___39562 = (0);
while(true){
if((i__22629__auto___39562 < len__22628__auto___39561)){
args__22635__auto__.push((arguments[i__22629__auto___39562]));

var G__39563 = (i__22629__auto___39562 + (1));
i__22629__auto___39562 = G__39563;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39560){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39560));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39564 = cljs.core._EQ_;
var expr__39565 = (function (){var or__21445__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39568){if((e39568 instanceof Error)){
var e = e39568;
return false;
} else {
throw e39568;

}
}})();
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39564.call(null,"true",expr__39565))){
return true;
} else {
if(cljs.core.truth_(pred__39564.call(null,"false",expr__39565))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39565)].join('')));
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
}catch (e39570){if((e39570 instanceof Error)){
var e = e39570;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39570;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39571){
var map__39574 = p__39571;
var map__39574__$1 = ((((!((map__39574 == null)))?((((map__39574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39574):map__39574);
var message = cljs.core.get.call(null,map__39574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39574__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21445__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21433__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21433__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21433__auto__;
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
var c__28412__auto___39736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___39736,ch){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___39736,ch){
return (function (state_39705){
var state_val_39706 = (state_39705[(1)]);
if((state_val_39706 === (7))){
var inst_39701 = (state_39705[(2)]);
var state_39705__$1 = state_39705;
var statearr_39707_39737 = state_39705__$1;
(statearr_39707_39737[(2)] = inst_39701);

(statearr_39707_39737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (1))){
var state_39705__$1 = state_39705;
var statearr_39708_39738 = state_39705__$1;
(statearr_39708_39738[(2)] = null);

(statearr_39708_39738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (4))){
var inst_39658 = (state_39705[(7)]);
var inst_39658__$1 = (state_39705[(2)]);
var state_39705__$1 = (function (){var statearr_39709 = state_39705;
(statearr_39709[(7)] = inst_39658__$1);

return statearr_39709;
})();
if(cljs.core.truth_(inst_39658__$1)){
var statearr_39710_39739 = state_39705__$1;
(statearr_39710_39739[(1)] = (5));

} else {
var statearr_39711_39740 = state_39705__$1;
(statearr_39711_39740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (15))){
var inst_39665 = (state_39705[(8)]);
var inst_39680 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39665);
var inst_39681 = cljs.core.first.call(null,inst_39680);
var inst_39682 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39681);
var inst_39683 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39682)].join('');
var inst_39684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39683);
var state_39705__$1 = state_39705;
var statearr_39712_39741 = state_39705__$1;
(statearr_39712_39741[(2)] = inst_39684);

(statearr_39712_39741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (13))){
var inst_39689 = (state_39705[(2)]);
var state_39705__$1 = state_39705;
var statearr_39713_39742 = state_39705__$1;
(statearr_39713_39742[(2)] = inst_39689);

(statearr_39713_39742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (6))){
var state_39705__$1 = state_39705;
var statearr_39714_39743 = state_39705__$1;
(statearr_39714_39743[(2)] = null);

(statearr_39714_39743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (17))){
var inst_39687 = (state_39705[(2)]);
var state_39705__$1 = state_39705;
var statearr_39715_39744 = state_39705__$1;
(statearr_39715_39744[(2)] = inst_39687);

(statearr_39715_39744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (3))){
var inst_39703 = (state_39705[(2)]);
var state_39705__$1 = state_39705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39705__$1,inst_39703);
} else {
if((state_val_39706 === (12))){
var inst_39664 = (state_39705[(9)]);
var inst_39678 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39664,opts);
var state_39705__$1 = state_39705;
if(cljs.core.truth_(inst_39678)){
var statearr_39716_39745 = state_39705__$1;
(statearr_39716_39745[(1)] = (15));

} else {
var statearr_39717_39746 = state_39705__$1;
(statearr_39717_39746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (2))){
var state_39705__$1 = state_39705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39705__$1,(4),ch);
} else {
if((state_val_39706 === (11))){
var inst_39665 = (state_39705[(8)]);
var inst_39670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39671 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39665);
var inst_39672 = cljs.core.async.timeout.call(null,(1000));
var inst_39673 = [inst_39671,inst_39672];
var inst_39674 = (new cljs.core.PersistentVector(null,2,(5),inst_39670,inst_39673,null));
var state_39705__$1 = state_39705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39705__$1,(14),inst_39674);
} else {
if((state_val_39706 === (9))){
var inst_39665 = (state_39705[(8)]);
var inst_39691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39692 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39665);
var inst_39693 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39692);
var inst_39694 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39693)].join('');
var inst_39695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39694);
var state_39705__$1 = (function (){var statearr_39718 = state_39705;
(statearr_39718[(10)] = inst_39691);

return statearr_39718;
})();
var statearr_39719_39747 = state_39705__$1;
(statearr_39719_39747[(2)] = inst_39695);

(statearr_39719_39747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (5))){
var inst_39658 = (state_39705[(7)]);
var inst_39660 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39661 = (new cljs.core.PersistentArrayMap(null,2,inst_39660,null));
var inst_39662 = (new cljs.core.PersistentHashSet(null,inst_39661,null));
var inst_39663 = figwheel.client.focus_msgs.call(null,inst_39662,inst_39658);
var inst_39664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39663);
var inst_39665 = cljs.core.first.call(null,inst_39663);
var inst_39666 = figwheel.client.autoload_QMARK_.call(null);
var state_39705__$1 = (function (){var statearr_39720 = state_39705;
(statearr_39720[(8)] = inst_39665);

(statearr_39720[(9)] = inst_39664);

return statearr_39720;
})();
if(cljs.core.truth_(inst_39666)){
var statearr_39721_39748 = state_39705__$1;
(statearr_39721_39748[(1)] = (8));

} else {
var statearr_39722_39749 = state_39705__$1;
(statearr_39722_39749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (14))){
var inst_39676 = (state_39705[(2)]);
var state_39705__$1 = state_39705;
var statearr_39723_39750 = state_39705__$1;
(statearr_39723_39750[(2)] = inst_39676);

(statearr_39723_39750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (16))){
var state_39705__$1 = state_39705;
var statearr_39724_39751 = state_39705__$1;
(statearr_39724_39751[(2)] = null);

(statearr_39724_39751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (10))){
var inst_39697 = (state_39705[(2)]);
var state_39705__$1 = (function (){var statearr_39725 = state_39705;
(statearr_39725[(11)] = inst_39697);

return statearr_39725;
})();
var statearr_39726_39752 = state_39705__$1;
(statearr_39726_39752[(2)] = null);

(statearr_39726_39752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39706 === (8))){
var inst_39664 = (state_39705[(9)]);
var inst_39668 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39664,opts);
var state_39705__$1 = state_39705;
if(cljs.core.truth_(inst_39668)){
var statearr_39727_39753 = state_39705__$1;
(statearr_39727_39753[(1)] = (11));

} else {
var statearr_39728_39754 = state_39705__$1;
(statearr_39728_39754[(1)] = (12));

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
});})(c__28412__auto___39736,ch))
;
return ((function (switch__28298__auto__,c__28412__auto___39736,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____0 = (function (){
var statearr_39732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39732[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__);

(statearr_39732[(1)] = (1));

return statearr_39732;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____1 = (function (state_39705){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_39705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e39733){if((e39733 instanceof Object)){
var ex__28302__auto__ = e39733;
var statearr_39734_39755 = state_39705;
(statearr_39734_39755[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39756 = state_39705;
state_39705 = G__39756;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__ = function(state_39705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____1.call(this,state_39705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28299__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___39736,ch))
})();
var state__28414__auto__ = (function (){var statearr_39735 = f__28413__auto__.call(null);
(statearr_39735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___39736);

return statearr_39735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___39736,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39757_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39757_SHARP_));
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
var base_path_39760 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39760){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39759){if((e39759 instanceof Error)){
var e = e39759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39760], null));
} else {
var e = e39759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39760))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39761){
var map__39770 = p__39761;
var map__39770__$1 = ((((!((map__39770 == null)))?((((map__39770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39770):map__39770);
var opts = map__39770__$1;
var build_id = cljs.core.get.call(null,map__39770__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39770,map__39770__$1,opts,build_id){
return (function (p__39772){
var vec__39773 = p__39772;
var seq__39774 = cljs.core.seq.call(null,vec__39773);
var first__39775 = cljs.core.first.call(null,seq__39774);
var seq__39774__$1 = cljs.core.next.call(null,seq__39774);
var map__39776 = first__39775;
var map__39776__$1 = ((((!((map__39776 == null)))?((((map__39776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39776):map__39776);
var msg = map__39776__$1;
var msg_name = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39774__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39773,seq__39774,first__39775,seq__39774__$1,map__39776,map__39776__$1,msg,msg_name,_,map__39770,map__39770__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39773,seq__39774,first__39775,seq__39774__$1,map__39776,map__39776__$1,msg,msg_name,_,map__39770,map__39770__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39770,map__39770__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39784){
var vec__39785 = p__39784;
var seq__39786 = cljs.core.seq.call(null,vec__39785);
var first__39787 = cljs.core.first.call(null,seq__39786);
var seq__39786__$1 = cljs.core.next.call(null,seq__39786);
var map__39788 = first__39787;
var map__39788__$1 = ((((!((map__39788 == null)))?((((map__39788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39788):map__39788);
var msg = map__39788__$1;
var msg_name = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39786__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39790){
var map__39802 = p__39790;
var map__39802__$1 = ((((!((map__39802 == null)))?((((map__39802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39802):map__39802);
var on_compile_warning = cljs.core.get.call(null,map__39802__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39802__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39802,map__39802__$1,on_compile_warning,on_compile_fail){
return (function (p__39804){
var vec__39805 = p__39804;
var seq__39806 = cljs.core.seq.call(null,vec__39805);
var first__39807 = cljs.core.first.call(null,seq__39806);
var seq__39806__$1 = cljs.core.next.call(null,seq__39806);
var map__39808 = first__39807;
var map__39808__$1 = ((((!((map__39808 == null)))?((((map__39808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39808):map__39808);
var msg = map__39808__$1;
var msg_name = cljs.core.get.call(null,map__39808__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39806__$1;
var pred__39810 = cljs.core._EQ_;
var expr__39811 = msg_name;
if(cljs.core.truth_(pred__39810.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39811))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39810.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39811))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39802,map__39802__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__,msg_hist,msg_names,msg){
return (function (state_40019){
var state_val_40020 = (state_40019[(1)]);
if((state_val_40020 === (7))){
var inst_39947 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39947)){
var statearr_40021_40067 = state_40019__$1;
(statearr_40021_40067[(1)] = (8));

} else {
var statearr_40022_40068 = state_40019__$1;
(statearr_40022_40068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (20))){
var inst_40013 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40023_40069 = state_40019__$1;
(statearr_40023_40069[(2)] = inst_40013);

(statearr_40023_40069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (27))){
var inst_40009 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40024_40070 = state_40019__$1;
(statearr_40024_40070[(2)] = inst_40009);

(statearr_40024_40070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (1))){
var inst_39940 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39940)){
var statearr_40025_40071 = state_40019__$1;
(statearr_40025_40071[(1)] = (2));

} else {
var statearr_40026_40072 = state_40019__$1;
(statearr_40026_40072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (24))){
var inst_40011 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40027_40073 = state_40019__$1;
(statearr_40027_40073[(2)] = inst_40011);

(statearr_40027_40073[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (4))){
var inst_40017 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40019__$1,inst_40017);
} else {
if((state_val_40020 === (15))){
var inst_40015 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40028_40074 = state_40019__$1;
(statearr_40028_40074[(2)] = inst_40015);

(statearr_40028_40074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (21))){
var inst_39974 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40029_40075 = state_40019__$1;
(statearr_40029_40075[(2)] = inst_39974);

(statearr_40029_40075[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (31))){
var inst_39998 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39998)){
var statearr_40030_40076 = state_40019__$1;
(statearr_40030_40076[(1)] = (34));

} else {
var statearr_40031_40077 = state_40019__$1;
(statearr_40031_40077[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (32))){
var inst_40007 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40032_40078 = state_40019__$1;
(statearr_40032_40078[(2)] = inst_40007);

(statearr_40032_40078[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (33))){
var inst_39996 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40033_40079 = state_40019__$1;
(statearr_40033_40079[(2)] = inst_39996);

(statearr_40033_40079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (13))){
var inst_39961 = figwheel.client.heads_up.clear.call(null);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(16),inst_39961);
} else {
if((state_val_40020 === (22))){
var inst_39978 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39979 = figwheel.client.heads_up.append_warning_message.call(null,inst_39978);
var state_40019__$1 = state_40019;
var statearr_40034_40080 = state_40019__$1;
(statearr_40034_40080[(2)] = inst_39979);

(statearr_40034_40080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (36))){
var inst_40005 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40035_40081 = state_40019__$1;
(statearr_40035_40081[(2)] = inst_40005);

(statearr_40035_40081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (29))){
var inst_39989 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40036_40082 = state_40019__$1;
(statearr_40036_40082[(2)] = inst_39989);

(statearr_40036_40082[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (6))){
var inst_39942 = (state_40019[(7)]);
var state_40019__$1 = state_40019;
var statearr_40037_40083 = state_40019__$1;
(statearr_40037_40083[(2)] = inst_39942);

(statearr_40037_40083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (28))){
var inst_39985 = (state_40019[(2)]);
var inst_39986 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39987 = figwheel.client.heads_up.display_warning.call(null,inst_39986);
var state_40019__$1 = (function (){var statearr_40038 = state_40019;
(statearr_40038[(8)] = inst_39985);

return statearr_40038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(29),inst_39987);
} else {
if((state_val_40020 === (25))){
var inst_39983 = figwheel.client.heads_up.clear.call(null);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(28),inst_39983);
} else {
if((state_val_40020 === (34))){
var inst_40000 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(37),inst_40000);
} else {
if((state_val_40020 === (17))){
var inst_39967 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40039_40084 = state_40019__$1;
(statearr_40039_40084[(2)] = inst_39967);

(statearr_40039_40084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (3))){
var inst_39959 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39959)){
var statearr_40040_40085 = state_40019__$1;
(statearr_40040_40085[(1)] = (13));

} else {
var statearr_40041_40086 = state_40019__$1;
(statearr_40041_40086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (12))){
var inst_39955 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40042_40087 = state_40019__$1;
(statearr_40042_40087[(2)] = inst_39955);

(statearr_40042_40087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (2))){
var inst_39942 = (state_40019[(7)]);
var inst_39942__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40019__$1 = (function (){var statearr_40043 = state_40019;
(statearr_40043[(7)] = inst_39942__$1);

return statearr_40043;
})();
if(cljs.core.truth_(inst_39942__$1)){
var statearr_40044_40088 = state_40019__$1;
(statearr_40044_40088[(1)] = (5));

} else {
var statearr_40045_40089 = state_40019__$1;
(statearr_40045_40089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (23))){
var inst_39981 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39981)){
var statearr_40046_40090 = state_40019__$1;
(statearr_40046_40090[(1)] = (25));

} else {
var statearr_40047_40091 = state_40019__$1;
(statearr_40047_40091[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (35))){
var state_40019__$1 = state_40019;
var statearr_40048_40092 = state_40019__$1;
(statearr_40048_40092[(2)] = null);

(statearr_40048_40092[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (19))){
var inst_39976 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39976)){
var statearr_40049_40093 = state_40019__$1;
(statearr_40049_40093[(1)] = (22));

} else {
var statearr_40050_40094 = state_40019__$1;
(statearr_40050_40094[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (11))){
var inst_39951 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40051_40095 = state_40019__$1;
(statearr_40051_40095[(2)] = inst_39951);

(statearr_40051_40095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (9))){
var inst_39953 = figwheel.client.heads_up.clear.call(null);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(12),inst_39953);
} else {
if((state_val_40020 === (5))){
var inst_39944 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40019__$1 = state_40019;
var statearr_40052_40096 = state_40019__$1;
(statearr_40052_40096[(2)] = inst_39944);

(statearr_40052_40096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (14))){
var inst_39969 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39969)){
var statearr_40053_40097 = state_40019__$1;
(statearr_40053_40097[(1)] = (18));

} else {
var statearr_40054_40098 = state_40019__$1;
(statearr_40054_40098[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (26))){
var inst_39991 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40019__$1 = state_40019;
if(cljs.core.truth_(inst_39991)){
var statearr_40055_40099 = state_40019__$1;
(statearr_40055_40099[(1)] = (30));

} else {
var statearr_40056_40100 = state_40019__$1;
(statearr_40056_40100[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (16))){
var inst_39963 = (state_40019[(2)]);
var inst_39964 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39965 = figwheel.client.heads_up.display_exception.call(null,inst_39964);
var state_40019__$1 = (function (){var statearr_40057 = state_40019;
(statearr_40057[(9)] = inst_39963);

return statearr_40057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(17),inst_39965);
} else {
if((state_val_40020 === (30))){
var inst_39993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39994 = figwheel.client.heads_up.display_warning.call(null,inst_39993);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(33),inst_39994);
} else {
if((state_val_40020 === (10))){
var inst_39957 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40058_40101 = state_40019__$1;
(statearr_40058_40101[(2)] = inst_39957);

(statearr_40058_40101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (18))){
var inst_39971 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39972 = figwheel.client.heads_up.display_exception.call(null,inst_39971);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(21),inst_39972);
} else {
if((state_val_40020 === (37))){
var inst_40002 = (state_40019[(2)]);
var state_40019__$1 = state_40019;
var statearr_40059_40102 = state_40019__$1;
(statearr_40059_40102[(2)] = inst_40002);

(statearr_40059_40102[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40020 === (8))){
var inst_39949 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40019__$1 = state_40019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40019__$1,(11),inst_39949);
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
});})(c__28412__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28298__auto__,c__28412__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____0 = (function (){
var statearr_40063 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40063[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__);

(statearr_40063[(1)] = (1));

return statearr_40063;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____1 = (function (state_40019){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_40019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e40064){if((e40064 instanceof Object)){
var ex__28302__auto__ = e40064;
var statearr_40065_40103 = state_40019;
(statearr_40065_40103[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40104 = state_40019;
state_40019 = G__40104;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__ = function(state_40019){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____1.call(this,state_40019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__,msg_hist,msg_names,msg))
})();
var state__28414__auto__ = (function (){var statearr_40066 = f__28413__auto__.call(null);
(statearr_40066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_40066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,msg_hist,msg_names,msg))
);

return c__28412__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28412__auto___40167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___40167,ch){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___40167,ch){
return (function (state_40150){
var state_val_40151 = (state_40150[(1)]);
if((state_val_40151 === (1))){
var state_40150__$1 = state_40150;
var statearr_40152_40168 = state_40150__$1;
(statearr_40152_40168[(2)] = null);

(statearr_40152_40168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40151 === (2))){
var state_40150__$1 = state_40150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40150__$1,(4),ch);
} else {
if((state_val_40151 === (3))){
var inst_40148 = (state_40150[(2)]);
var state_40150__$1 = state_40150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40150__$1,inst_40148);
} else {
if((state_val_40151 === (4))){
var inst_40138 = (state_40150[(7)]);
var inst_40138__$1 = (state_40150[(2)]);
var state_40150__$1 = (function (){var statearr_40153 = state_40150;
(statearr_40153[(7)] = inst_40138__$1);

return statearr_40153;
})();
if(cljs.core.truth_(inst_40138__$1)){
var statearr_40154_40169 = state_40150__$1;
(statearr_40154_40169[(1)] = (5));

} else {
var statearr_40155_40170 = state_40150__$1;
(statearr_40155_40170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40151 === (5))){
var inst_40138 = (state_40150[(7)]);
var inst_40140 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40138);
var state_40150__$1 = state_40150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40150__$1,(8),inst_40140);
} else {
if((state_val_40151 === (6))){
var state_40150__$1 = state_40150;
var statearr_40156_40171 = state_40150__$1;
(statearr_40156_40171[(2)] = null);

(statearr_40156_40171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40151 === (7))){
var inst_40146 = (state_40150[(2)]);
var state_40150__$1 = state_40150;
var statearr_40157_40172 = state_40150__$1;
(statearr_40157_40172[(2)] = inst_40146);

(statearr_40157_40172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40151 === (8))){
var inst_40142 = (state_40150[(2)]);
var state_40150__$1 = (function (){var statearr_40158 = state_40150;
(statearr_40158[(8)] = inst_40142);

return statearr_40158;
})();
var statearr_40159_40173 = state_40150__$1;
(statearr_40159_40173[(2)] = null);

(statearr_40159_40173[(1)] = (2));


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
});})(c__28412__auto___40167,ch))
;
return ((function (switch__28298__auto__,c__28412__auto___40167,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28299__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28299__auto____0 = (function (){
var statearr_40163 = [null,null,null,null,null,null,null,null,null];
(statearr_40163[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28299__auto__);

(statearr_40163[(1)] = (1));

return statearr_40163;
});
var figwheel$client$heads_up_plugin_$_state_machine__28299__auto____1 = (function (state_40150){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_40150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e40164){if((e40164 instanceof Object)){
var ex__28302__auto__ = e40164;
var statearr_40165_40174 = state_40150;
(statearr_40165_40174[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40175 = state_40150;
state_40150 = G__40175;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28299__auto__ = function(state_40150){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28299__auto____1.call(this,state_40150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28299__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28299__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___40167,ch))
})();
var state__28414__auto__ = (function (){var statearr_40166 = f__28413__auto__.call(null);
(statearr_40166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___40167);

return statearr_40166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___40167,ch))
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
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__){
return (function (state_40196){
var state_val_40197 = (state_40196[(1)]);
if((state_val_40197 === (1))){
var inst_40191 = cljs.core.async.timeout.call(null,(3000));
var state_40196__$1 = state_40196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40196__$1,(2),inst_40191);
} else {
if((state_val_40197 === (2))){
var inst_40193 = (state_40196[(2)]);
var inst_40194 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40196__$1 = (function (){var statearr_40198 = state_40196;
(statearr_40198[(7)] = inst_40193);

return statearr_40198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40196__$1,inst_40194);
} else {
return null;
}
}
});})(c__28412__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____0 = (function (){
var statearr_40202 = [null,null,null,null,null,null,null,null];
(statearr_40202[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__);

(statearr_40202[(1)] = (1));

return statearr_40202;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____1 = (function (state_40196){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_40196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e40203){if((e40203 instanceof Object)){
var ex__28302__auto__ = e40203;
var statearr_40204_40206 = state_40196;
(statearr_40204_40206[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40207 = state_40196;
state_40196 = G__40207;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__ = function(state_40196){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____1.call(this,state_40196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28299__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_40205 = f__28413__auto__.call(null);
(statearr_40205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_40205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
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
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__,figwheel_version,temp__6503__auto__){
return (function (state_40230){
var state_val_40231 = (state_40230[(1)]);
if((state_val_40231 === (1))){
var inst_40224 = cljs.core.async.timeout.call(null,(2000));
var state_40230__$1 = state_40230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40230__$1,(2),inst_40224);
} else {
if((state_val_40231 === (2))){
var inst_40226 = (state_40230[(2)]);
var inst_40227 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_40228 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40227);
var state_40230__$1 = (function (){var statearr_40232 = state_40230;
(statearr_40232[(7)] = inst_40226);

return statearr_40232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40230__$1,inst_40228);
} else {
return null;
}
}
});})(c__28412__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____0 = (function (){
var statearr_40236 = [null,null,null,null,null,null,null,null];
(statearr_40236[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__);

(statearr_40236[(1)] = (1));

return statearr_40236;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____1 = (function (state_40230){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_40230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e40237){if((e40237 instanceof Object)){
var ex__28302__auto__ = e40237;
var statearr_40238_40240 = state_40230;
(statearr_40238_40240[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40241 = state_40230;
state_40230 = G__40241;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__ = function(state_40230){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____1.call(this,state_40230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__,figwheel_version,temp__6503__auto__))
})();
var state__28414__auto__ = (function (){var statearr_40239 = f__28413__auto__.call(null);
(statearr_40239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_40239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,figwheel_version,temp__6503__auto__))
);

return c__28412__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40242){
var map__40246 = p__40242;
var map__40246__$1 = ((((!((map__40246 == null)))?((((map__40246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40246):map__40246);
var file = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40248 = "";
var G__40248__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__40248),cljs.core.str("file "),cljs.core.str(file)].join(''):G__40248);
var G__40248__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__40248__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40248__$1);
if(cljs.core.truth_((function (){var and__21433__auto__ = line;
if(cljs.core.truth_(and__21433__auto__)){
return column;
} else {
return and__21433__auto__;
}
})())){
return [cljs.core.str(G__40248__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__40248__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40249){
var map__40256 = p__40249;
var map__40256__$1 = ((((!((map__40256 == null)))?((((map__40256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40256):map__40256);
var ed = map__40256__$1;
var formatted_exception = cljs.core.get.call(null,map__40256__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40256__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40256__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40258_40262 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40259_40263 = null;
var count__40260_40264 = (0);
var i__40261_40265 = (0);
while(true){
if((i__40261_40265 < count__40260_40264)){
var msg_40266 = cljs.core._nth.call(null,chunk__40259_40263,i__40261_40265);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40266);

var G__40267 = seq__40258_40262;
var G__40268 = chunk__40259_40263;
var G__40269 = count__40260_40264;
var G__40270 = (i__40261_40265 + (1));
seq__40258_40262 = G__40267;
chunk__40259_40263 = G__40268;
count__40260_40264 = G__40269;
i__40261_40265 = G__40270;
continue;
} else {
var temp__6503__auto___40271 = cljs.core.seq.call(null,seq__40258_40262);
if(temp__6503__auto___40271){
var seq__40258_40272__$1 = temp__6503__auto___40271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40258_40272__$1)){
var c__22348__auto___40273 = cljs.core.chunk_first.call(null,seq__40258_40272__$1);
var G__40274 = cljs.core.chunk_rest.call(null,seq__40258_40272__$1);
var G__40275 = c__22348__auto___40273;
var G__40276 = cljs.core.count.call(null,c__22348__auto___40273);
var G__40277 = (0);
seq__40258_40262 = G__40274;
chunk__40259_40263 = G__40275;
count__40260_40264 = G__40276;
i__40261_40265 = G__40277;
continue;
} else {
var msg_40278 = cljs.core.first.call(null,seq__40258_40272__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40278);

var G__40279 = cljs.core.next.call(null,seq__40258_40272__$1);
var G__40280 = null;
var G__40281 = (0);
var G__40282 = (0);
seq__40258_40262 = G__40279;
chunk__40259_40263 = G__40280;
count__40260_40264 = G__40281;
i__40261_40265 = G__40282;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40283){
var map__40286 = p__40283;
var map__40286__$1 = ((((!((map__40286 == null)))?((((map__40286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40286):map__40286);
var w = map__40286__$1;
var message = cljs.core.get.call(null,map__40286__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__21433__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21433__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21433__auto__;
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
var seq__40298 = cljs.core.seq.call(null,plugins);
var chunk__40299 = null;
var count__40300 = (0);
var i__40301 = (0);
while(true){
if((i__40301 < count__40300)){
var vec__40302 = cljs.core._nth.call(null,chunk__40299,i__40301);
var k = cljs.core.nth.call(null,vec__40302,(0),null);
var plugin = cljs.core.nth.call(null,vec__40302,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40308 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40298,chunk__40299,count__40300,i__40301,pl_40308,vec__40302,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40308.call(null,msg_hist);
});})(seq__40298,chunk__40299,count__40300,i__40301,pl_40308,vec__40302,k,plugin))
);
} else {
}

var G__40309 = seq__40298;
var G__40310 = chunk__40299;
var G__40311 = count__40300;
var G__40312 = (i__40301 + (1));
seq__40298 = G__40309;
chunk__40299 = G__40310;
count__40300 = G__40311;
i__40301 = G__40312;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__40298);
if(temp__6503__auto__){
var seq__40298__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40298__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__40298__$1);
var G__40313 = cljs.core.chunk_rest.call(null,seq__40298__$1);
var G__40314 = c__22348__auto__;
var G__40315 = cljs.core.count.call(null,c__22348__auto__);
var G__40316 = (0);
seq__40298 = G__40313;
chunk__40299 = G__40314;
count__40300 = G__40315;
i__40301 = G__40316;
continue;
} else {
var vec__40305 = cljs.core.first.call(null,seq__40298__$1);
var k = cljs.core.nth.call(null,vec__40305,(0),null);
var plugin = cljs.core.nth.call(null,vec__40305,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40317 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40298,chunk__40299,count__40300,i__40301,pl_40317,vec__40305,k,plugin,seq__40298__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40317.call(null,msg_hist);
});})(seq__40298,chunk__40299,count__40300,i__40301,pl_40317,vec__40305,k,plugin,seq__40298__$1,temp__6503__auto__))
);
} else {
}

var G__40318 = cljs.core.next.call(null,seq__40298__$1);
var G__40319 = null;
var G__40320 = (0);
var G__40321 = (0);
seq__40298 = G__40318;
chunk__40299 = G__40319;
count__40300 = G__40320;
i__40301 = G__40321;
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
var args40322 = [];
var len__22628__auto___40329 = arguments.length;
var i__22629__auto___40330 = (0);
while(true){
if((i__22629__auto___40330 < len__22628__auto___40329)){
args40322.push((arguments[i__22629__auto___40330]));

var G__40331 = (i__22629__auto___40330 + (1));
i__22629__auto___40330 = G__40331;
continue;
} else {
}
break;
}

var G__40324 = args40322.length;
switch (G__40324) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40322.length)].join('')));

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

var seq__40325_40333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40326_40334 = null;
var count__40327_40335 = (0);
var i__40328_40336 = (0);
while(true){
if((i__40328_40336 < count__40327_40335)){
var msg_40337 = cljs.core._nth.call(null,chunk__40326_40334,i__40328_40336);
figwheel.client.socket.handle_incoming_message.call(null,msg_40337);

var G__40338 = seq__40325_40333;
var G__40339 = chunk__40326_40334;
var G__40340 = count__40327_40335;
var G__40341 = (i__40328_40336 + (1));
seq__40325_40333 = G__40338;
chunk__40326_40334 = G__40339;
count__40327_40335 = G__40340;
i__40328_40336 = G__40341;
continue;
} else {
var temp__6503__auto___40342 = cljs.core.seq.call(null,seq__40325_40333);
if(temp__6503__auto___40342){
var seq__40325_40343__$1 = temp__6503__auto___40342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40325_40343__$1)){
var c__22348__auto___40344 = cljs.core.chunk_first.call(null,seq__40325_40343__$1);
var G__40345 = cljs.core.chunk_rest.call(null,seq__40325_40343__$1);
var G__40346 = c__22348__auto___40344;
var G__40347 = cljs.core.count.call(null,c__22348__auto___40344);
var G__40348 = (0);
seq__40325_40333 = G__40345;
chunk__40326_40334 = G__40346;
count__40327_40335 = G__40347;
i__40328_40336 = G__40348;
continue;
} else {
var msg_40349 = cljs.core.first.call(null,seq__40325_40343__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40349);

var G__40350 = cljs.core.next.call(null,seq__40325_40343__$1);
var G__40351 = null;
var G__40352 = (0);
var G__40353 = (0);
seq__40325_40333 = G__40350;
chunk__40326_40334 = G__40351;
count__40327_40335 = G__40352;
i__40328_40336 = G__40353;
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
var args__22635__auto__ = [];
var len__22628__auto___40358 = arguments.length;
var i__22629__auto___40359 = (0);
while(true){
if((i__22629__auto___40359 < len__22628__auto___40358)){
args__22635__auto__.push((arguments[i__22629__auto___40359]));

var G__40360 = (i__22629__auto___40359 + (1));
i__22629__auto___40359 = G__40360;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40355){
var map__40356 = p__40355;
var map__40356__$1 = ((((!((map__40356 == null)))?((((map__40356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40356):map__40356);
var opts = map__40356__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40354){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40354));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40362){if((e40362 instanceof Error)){
var e = e40362;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40362;

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
return (function (p__40366){
var map__40367 = p__40366;
var map__40367__$1 = ((((!((map__40367 == null)))?((((map__40367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40367):map__40367);
var msg_name = cljs.core.get.call(null,map__40367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1470139200649