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
var args37926 = [];
var len__22773__auto___37929 = arguments.length;
var i__22774__auto___37930 = (0);
while(true){
if((i__22774__auto___37930 < len__22773__auto___37929)){
args37926.push((arguments[i__22774__auto___37930]));

var G__37931 = (i__22774__auto___37930 + (1));
i__22774__auto___37930 = G__37931;
continue;
} else {
}
break;
}

var G__37928 = args37926.length;
switch (G__37928) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37926.length)].join('')));

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
var len__22773__auto___37934 = arguments.length;
var i__22774__auto___37935 = (0);
while(true){
if((i__22774__auto___37935 < len__22773__auto___37934)){
args__22780__auto__.push((arguments[i__22774__auto___37935]));

var G__37936 = (i__22774__auto___37935 + (1));
i__22774__auto___37935 = G__37936;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37933){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37933));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___37938 = arguments.length;
var i__22774__auto___37939 = (0);
while(true){
if((i__22774__auto___37939 < len__22773__auto___37938)){
args__22780__auto__.push((arguments[i__22774__auto___37939]));

var G__37940 = (i__22774__auto___37939 + (1));
i__22774__auto___37939 = G__37940;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37937){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37937));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37941 = cljs.core._EQ_;
var expr__37942 = (function (){var or__21590__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37945){if((e37945 instanceof Error)){
var e = e37945;
return false;
} else {
throw e37945;

}
}})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37941.call(null,"true",expr__37942))){
return true;
} else {
if(cljs.core.truth_(pred__37941.call(null,"false",expr__37942))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37942)].join('')));
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
}catch (e37947){if((e37947 instanceof Error)){
var e = e37947;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37947;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37948){
var map__37951 = p__37948;
var map__37951__$1 = ((((!((map__37951 == null)))?((((map__37951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37951):map__37951);
var message = cljs.core.get.call(null,map__37951__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37951__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24265__auto___38113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___38113,ch){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___38113,ch){
return (function (state_38082){
var state_val_38083 = (state_38082[(1)]);
if((state_val_38083 === (7))){
var inst_38078 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38084_38114 = state_38082__$1;
(statearr_38084_38114[(2)] = inst_38078);

(statearr_38084_38114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (1))){
var state_38082__$1 = state_38082;
var statearr_38085_38115 = state_38082__$1;
(statearr_38085_38115[(2)] = null);

(statearr_38085_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (4))){
var inst_38035 = (state_38082[(7)]);
var inst_38035__$1 = (state_38082[(2)]);
var state_38082__$1 = (function (){var statearr_38086 = state_38082;
(statearr_38086[(7)] = inst_38035__$1);

return statearr_38086;
})();
if(cljs.core.truth_(inst_38035__$1)){
var statearr_38087_38116 = state_38082__$1;
(statearr_38087_38116[(1)] = (5));

} else {
var statearr_38088_38117 = state_38082__$1;
(statearr_38088_38117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (15))){
var inst_38042 = (state_38082[(8)]);
var inst_38057 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38042);
var inst_38058 = cljs.core.first.call(null,inst_38057);
var inst_38059 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38058);
var inst_38060 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38059)].join('');
var inst_38061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38060);
var state_38082__$1 = state_38082;
var statearr_38089_38118 = state_38082__$1;
(statearr_38089_38118[(2)] = inst_38061);

(statearr_38089_38118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (13))){
var inst_38066 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38090_38119 = state_38082__$1;
(statearr_38090_38119[(2)] = inst_38066);

(statearr_38090_38119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (6))){
var state_38082__$1 = state_38082;
var statearr_38091_38120 = state_38082__$1;
(statearr_38091_38120[(2)] = null);

(statearr_38091_38120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (17))){
var inst_38064 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38092_38121 = state_38082__$1;
(statearr_38092_38121[(2)] = inst_38064);

(statearr_38092_38121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (3))){
var inst_38080 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38082__$1,inst_38080);
} else {
if((state_val_38083 === (12))){
var inst_38041 = (state_38082[(9)]);
var inst_38055 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38041,opts);
var state_38082__$1 = state_38082;
if(cljs.core.truth_(inst_38055)){
var statearr_38093_38122 = state_38082__$1;
(statearr_38093_38122[(1)] = (15));

} else {
var statearr_38094_38123 = state_38082__$1;
(statearr_38094_38123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (2))){
var state_38082__$1 = state_38082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38082__$1,(4),ch);
} else {
if((state_val_38083 === (11))){
var inst_38042 = (state_38082[(8)]);
var inst_38047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38048 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38042);
var inst_38049 = cljs.core.async.timeout.call(null,(1000));
var inst_38050 = [inst_38048,inst_38049];
var inst_38051 = (new cljs.core.PersistentVector(null,2,(5),inst_38047,inst_38050,null));
var state_38082__$1 = state_38082;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38082__$1,(14),inst_38051);
} else {
if((state_val_38083 === (9))){
var inst_38042 = (state_38082[(8)]);
var inst_38068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38069 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38042);
var inst_38070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38069);
var inst_38071 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38070)].join('');
var inst_38072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38071);
var state_38082__$1 = (function (){var statearr_38095 = state_38082;
(statearr_38095[(10)] = inst_38068);

return statearr_38095;
})();
var statearr_38096_38124 = state_38082__$1;
(statearr_38096_38124[(2)] = inst_38072);

(statearr_38096_38124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (5))){
var inst_38035 = (state_38082[(7)]);
var inst_38037 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38038 = (new cljs.core.PersistentArrayMap(null,2,inst_38037,null));
var inst_38039 = (new cljs.core.PersistentHashSet(null,inst_38038,null));
var inst_38040 = figwheel.client.focus_msgs.call(null,inst_38039,inst_38035);
var inst_38041 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38040);
var inst_38042 = cljs.core.first.call(null,inst_38040);
var inst_38043 = figwheel.client.autoload_QMARK_.call(null);
var state_38082__$1 = (function (){var statearr_38097 = state_38082;
(statearr_38097[(8)] = inst_38042);

(statearr_38097[(9)] = inst_38041);

return statearr_38097;
})();
if(cljs.core.truth_(inst_38043)){
var statearr_38098_38125 = state_38082__$1;
(statearr_38098_38125[(1)] = (8));

} else {
var statearr_38099_38126 = state_38082__$1;
(statearr_38099_38126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (14))){
var inst_38053 = (state_38082[(2)]);
var state_38082__$1 = state_38082;
var statearr_38100_38127 = state_38082__$1;
(statearr_38100_38127[(2)] = inst_38053);

(statearr_38100_38127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (16))){
var state_38082__$1 = state_38082;
var statearr_38101_38128 = state_38082__$1;
(statearr_38101_38128[(2)] = null);

(statearr_38101_38128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (10))){
var inst_38074 = (state_38082[(2)]);
var state_38082__$1 = (function (){var statearr_38102 = state_38082;
(statearr_38102[(11)] = inst_38074);

return statearr_38102;
})();
var statearr_38103_38129 = state_38082__$1;
(statearr_38103_38129[(2)] = null);

(statearr_38103_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38083 === (8))){
var inst_38041 = (state_38082[(9)]);
var inst_38045 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38041,opts);
var state_38082__$1 = state_38082;
if(cljs.core.truth_(inst_38045)){
var statearr_38104_38130 = state_38082__$1;
(statearr_38104_38130[(1)] = (11));

} else {
var statearr_38105_38131 = state_38082__$1;
(statearr_38105_38131[(1)] = (12));

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
});})(c__24265__auto___38113,ch))
;
return ((function (switch__24151__auto__,c__24265__auto___38113,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____0 = (function (){
var statearr_38109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38109[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__);

(statearr_38109[(1)] = (1));

return statearr_38109;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____1 = (function (state_38082){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_38082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e38110){if((e38110 instanceof Object)){
var ex__24155__auto__ = e38110;
var statearr_38111_38132 = state_38082;
(statearr_38111_38132[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38133 = state_38082;
state_38082 = G__38133;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__ = function(state_38082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____1.call(this,state_38082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24152__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___38113,ch))
})();
var state__24267__auto__ = (function (){var statearr_38112 = f__24266__auto__.call(null);
(statearr_38112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___38113);

return statearr_38112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___38113,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38134_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38134_SHARP_));
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
var base_path_38137 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38137){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38136){if((e38136 instanceof Error)){
var e = e38136;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38137], null));
} else {
var e = e38136;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38137))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38138){
var map__38147 = p__38138;
var map__38147__$1 = ((((!((map__38147 == null)))?((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38147):map__38147);
var opts = map__38147__$1;
var build_id = cljs.core.get.call(null,map__38147__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38147,map__38147__$1,opts,build_id){
return (function (p__38149){
var vec__38150 = p__38149;
var seq__38151 = cljs.core.seq.call(null,vec__38150);
var first__38152 = cljs.core.first.call(null,seq__38151);
var seq__38151__$1 = cljs.core.next.call(null,seq__38151);
var map__38153 = first__38152;
var map__38153__$1 = ((((!((map__38153 == null)))?((((map__38153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38153):map__38153);
var msg = map__38153__$1;
var msg_name = cljs.core.get.call(null,map__38153__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38151__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38150,seq__38151,first__38152,seq__38151__$1,map__38153,map__38153__$1,msg,msg_name,_,map__38147,map__38147__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38150,seq__38151,first__38152,seq__38151__$1,map__38153,map__38153__$1,msg,msg_name,_,map__38147,map__38147__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38147,map__38147__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38161){
var vec__38162 = p__38161;
var seq__38163 = cljs.core.seq.call(null,vec__38162);
var first__38164 = cljs.core.first.call(null,seq__38163);
var seq__38163__$1 = cljs.core.next.call(null,seq__38163);
var map__38165 = first__38164;
var map__38165__$1 = ((((!((map__38165 == null)))?((((map__38165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38165):map__38165);
var msg = map__38165__$1;
var msg_name = cljs.core.get.call(null,map__38165__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38163__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38167){
var map__38179 = p__38167;
var map__38179__$1 = ((((!((map__38179 == null)))?((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38179):map__38179);
var on_compile_warning = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38179,map__38179__$1,on_compile_warning,on_compile_fail){
return (function (p__38181){
var vec__38182 = p__38181;
var seq__38183 = cljs.core.seq.call(null,vec__38182);
var first__38184 = cljs.core.first.call(null,seq__38183);
var seq__38183__$1 = cljs.core.next.call(null,seq__38183);
var map__38185 = first__38184;
var map__38185__$1 = ((((!((map__38185 == null)))?((((map__38185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38185):map__38185);
var msg = map__38185__$1;
var msg_name = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38183__$1;
var pred__38187 = cljs.core._EQ_;
var expr__38188 = msg_name;
if(cljs.core.truth_(pred__38187.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38188))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38187.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38188))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38179,map__38179__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__,msg_hist,msg_names,msg){
return (function (state_38396){
var state_val_38397 = (state_38396[(1)]);
if((state_val_38397 === (7))){
var inst_38324 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38324)){
var statearr_38398_38444 = state_38396__$1;
(statearr_38398_38444[(1)] = (8));

} else {
var statearr_38399_38445 = state_38396__$1;
(statearr_38399_38445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (20))){
var inst_38390 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38400_38446 = state_38396__$1;
(statearr_38400_38446[(2)] = inst_38390);

(statearr_38400_38446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (27))){
var inst_38386 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38401_38447 = state_38396__$1;
(statearr_38401_38447[(2)] = inst_38386);

(statearr_38401_38447[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (1))){
var inst_38317 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38317)){
var statearr_38402_38448 = state_38396__$1;
(statearr_38402_38448[(1)] = (2));

} else {
var statearr_38403_38449 = state_38396__$1;
(statearr_38403_38449[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (24))){
var inst_38388 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38404_38450 = state_38396__$1;
(statearr_38404_38450[(2)] = inst_38388);

(statearr_38404_38450[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (4))){
var inst_38394 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38396__$1,inst_38394);
} else {
if((state_val_38397 === (15))){
var inst_38392 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38405_38451 = state_38396__$1;
(statearr_38405_38451[(2)] = inst_38392);

(statearr_38405_38451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (21))){
var inst_38351 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38406_38452 = state_38396__$1;
(statearr_38406_38452[(2)] = inst_38351);

(statearr_38406_38452[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (31))){
var inst_38375 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38375)){
var statearr_38407_38453 = state_38396__$1;
(statearr_38407_38453[(1)] = (34));

} else {
var statearr_38408_38454 = state_38396__$1;
(statearr_38408_38454[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (32))){
var inst_38384 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38409_38455 = state_38396__$1;
(statearr_38409_38455[(2)] = inst_38384);

(statearr_38409_38455[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (33))){
var inst_38373 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38410_38456 = state_38396__$1;
(statearr_38410_38456[(2)] = inst_38373);

(statearr_38410_38456[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (13))){
var inst_38338 = figwheel.client.heads_up.clear.call(null);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(16),inst_38338);
} else {
if((state_val_38397 === (22))){
var inst_38355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38356 = figwheel.client.heads_up.append_warning_message.call(null,inst_38355);
var state_38396__$1 = state_38396;
var statearr_38411_38457 = state_38396__$1;
(statearr_38411_38457[(2)] = inst_38356);

(statearr_38411_38457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (36))){
var inst_38382 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38412_38458 = state_38396__$1;
(statearr_38412_38458[(2)] = inst_38382);

(statearr_38412_38458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (29))){
var inst_38366 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38413_38459 = state_38396__$1;
(statearr_38413_38459[(2)] = inst_38366);

(statearr_38413_38459[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (6))){
var inst_38319 = (state_38396[(7)]);
var state_38396__$1 = state_38396;
var statearr_38414_38460 = state_38396__$1;
(statearr_38414_38460[(2)] = inst_38319);

(statearr_38414_38460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (28))){
var inst_38362 = (state_38396[(2)]);
var inst_38363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38364 = figwheel.client.heads_up.display_warning.call(null,inst_38363);
var state_38396__$1 = (function (){var statearr_38415 = state_38396;
(statearr_38415[(8)] = inst_38362);

return statearr_38415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(29),inst_38364);
} else {
if((state_val_38397 === (25))){
var inst_38360 = figwheel.client.heads_up.clear.call(null);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(28),inst_38360);
} else {
if((state_val_38397 === (34))){
var inst_38377 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(37),inst_38377);
} else {
if((state_val_38397 === (17))){
var inst_38344 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38416_38461 = state_38396__$1;
(statearr_38416_38461[(2)] = inst_38344);

(statearr_38416_38461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (3))){
var inst_38336 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38336)){
var statearr_38417_38462 = state_38396__$1;
(statearr_38417_38462[(1)] = (13));

} else {
var statearr_38418_38463 = state_38396__$1;
(statearr_38418_38463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (12))){
var inst_38332 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38419_38464 = state_38396__$1;
(statearr_38419_38464[(2)] = inst_38332);

(statearr_38419_38464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (2))){
var inst_38319 = (state_38396[(7)]);
var inst_38319__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38396__$1 = (function (){var statearr_38420 = state_38396;
(statearr_38420[(7)] = inst_38319__$1);

return statearr_38420;
})();
if(cljs.core.truth_(inst_38319__$1)){
var statearr_38421_38465 = state_38396__$1;
(statearr_38421_38465[(1)] = (5));

} else {
var statearr_38422_38466 = state_38396__$1;
(statearr_38422_38466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (23))){
var inst_38358 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38358)){
var statearr_38423_38467 = state_38396__$1;
(statearr_38423_38467[(1)] = (25));

} else {
var statearr_38424_38468 = state_38396__$1;
(statearr_38424_38468[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (35))){
var state_38396__$1 = state_38396;
var statearr_38425_38469 = state_38396__$1;
(statearr_38425_38469[(2)] = null);

(statearr_38425_38469[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (19))){
var inst_38353 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38353)){
var statearr_38426_38470 = state_38396__$1;
(statearr_38426_38470[(1)] = (22));

} else {
var statearr_38427_38471 = state_38396__$1;
(statearr_38427_38471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (11))){
var inst_38328 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38428_38472 = state_38396__$1;
(statearr_38428_38472[(2)] = inst_38328);

(statearr_38428_38472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (9))){
var inst_38330 = figwheel.client.heads_up.clear.call(null);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(12),inst_38330);
} else {
if((state_val_38397 === (5))){
var inst_38321 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38396__$1 = state_38396;
var statearr_38429_38473 = state_38396__$1;
(statearr_38429_38473[(2)] = inst_38321);

(statearr_38429_38473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (14))){
var inst_38346 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38346)){
var statearr_38430_38474 = state_38396__$1;
(statearr_38430_38474[(1)] = (18));

} else {
var statearr_38431_38475 = state_38396__$1;
(statearr_38431_38475[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (26))){
var inst_38368 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38396__$1 = state_38396;
if(cljs.core.truth_(inst_38368)){
var statearr_38432_38476 = state_38396__$1;
(statearr_38432_38476[(1)] = (30));

} else {
var statearr_38433_38477 = state_38396__$1;
(statearr_38433_38477[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (16))){
var inst_38340 = (state_38396[(2)]);
var inst_38341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38342 = figwheel.client.heads_up.display_exception.call(null,inst_38341);
var state_38396__$1 = (function (){var statearr_38434 = state_38396;
(statearr_38434[(9)] = inst_38340);

return statearr_38434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(17),inst_38342);
} else {
if((state_val_38397 === (30))){
var inst_38370 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38371 = figwheel.client.heads_up.display_warning.call(null,inst_38370);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(33),inst_38371);
} else {
if((state_val_38397 === (10))){
var inst_38334 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38435_38478 = state_38396__$1;
(statearr_38435_38478[(2)] = inst_38334);

(statearr_38435_38478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (18))){
var inst_38348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38349 = figwheel.client.heads_up.display_exception.call(null,inst_38348);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(21),inst_38349);
} else {
if((state_val_38397 === (37))){
var inst_38379 = (state_38396[(2)]);
var state_38396__$1 = state_38396;
var statearr_38436_38479 = state_38396__$1;
(statearr_38436_38479[(2)] = inst_38379);

(statearr_38436_38479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38397 === (8))){
var inst_38326 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38396__$1 = state_38396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38396__$1,(11),inst_38326);
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
});})(c__24265__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24151__auto__,c__24265__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____0 = (function (){
var statearr_38440 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38440[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__);

(statearr_38440[(1)] = (1));

return statearr_38440;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____1 = (function (state_38396){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_38396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e38441){if((e38441 instanceof Object)){
var ex__24155__auto__ = e38441;
var statearr_38442_38480 = state_38396;
(statearr_38442_38480[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38481 = state_38396;
state_38396 = G__38481;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__ = function(state_38396){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____1.call(this,state_38396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__,msg_hist,msg_names,msg))
})();
var state__24267__auto__ = (function (){var statearr_38443 = f__24266__auto__.call(null);
(statearr_38443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_38443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__,msg_hist,msg_names,msg))
);

return c__24265__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24265__auto___38544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___38544,ch){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___38544,ch){
return (function (state_38527){
var state_val_38528 = (state_38527[(1)]);
if((state_val_38528 === (1))){
var state_38527__$1 = state_38527;
var statearr_38529_38545 = state_38527__$1;
(statearr_38529_38545[(2)] = null);

(statearr_38529_38545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (2))){
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38527__$1,(4),ch);
} else {
if((state_val_38528 === (3))){
var inst_38525 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38527__$1,inst_38525);
} else {
if((state_val_38528 === (4))){
var inst_38515 = (state_38527[(7)]);
var inst_38515__$1 = (state_38527[(2)]);
var state_38527__$1 = (function (){var statearr_38530 = state_38527;
(statearr_38530[(7)] = inst_38515__$1);

return statearr_38530;
})();
if(cljs.core.truth_(inst_38515__$1)){
var statearr_38531_38546 = state_38527__$1;
(statearr_38531_38546[(1)] = (5));

} else {
var statearr_38532_38547 = state_38527__$1;
(statearr_38532_38547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (5))){
var inst_38515 = (state_38527[(7)]);
var inst_38517 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38515);
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38527__$1,(8),inst_38517);
} else {
if((state_val_38528 === (6))){
var state_38527__$1 = state_38527;
var statearr_38533_38548 = state_38527__$1;
(statearr_38533_38548[(2)] = null);

(statearr_38533_38548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (7))){
var inst_38523 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38534_38549 = state_38527__$1;
(statearr_38534_38549[(2)] = inst_38523);

(statearr_38534_38549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (8))){
var inst_38519 = (state_38527[(2)]);
var state_38527__$1 = (function (){var statearr_38535 = state_38527;
(statearr_38535[(8)] = inst_38519);

return statearr_38535;
})();
var statearr_38536_38550 = state_38527__$1;
(statearr_38536_38550[(2)] = null);

(statearr_38536_38550[(1)] = (2));


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
});})(c__24265__auto___38544,ch))
;
return ((function (switch__24151__auto__,c__24265__auto___38544,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24152__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24152__auto____0 = (function (){
var statearr_38540 = [null,null,null,null,null,null,null,null,null];
(statearr_38540[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24152__auto__);

(statearr_38540[(1)] = (1));

return statearr_38540;
});
var figwheel$client$heads_up_plugin_$_state_machine__24152__auto____1 = (function (state_38527){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_38527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e38541){if((e38541 instanceof Object)){
var ex__24155__auto__ = e38541;
var statearr_38542_38551 = state_38527;
(statearr_38542_38551[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38552 = state_38527;
state_38527 = G__38552;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24152__auto__ = function(state_38527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24152__auto____1.call(this,state_38527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24152__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24152__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___38544,ch))
})();
var state__24267__auto__ = (function (){var statearr_38543 = f__24266__auto__.call(null);
(statearr_38543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___38544);

return statearr_38543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___38544,ch))
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
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_38573){
var state_val_38574 = (state_38573[(1)]);
if((state_val_38574 === (1))){
var inst_38568 = cljs.core.async.timeout.call(null,(3000));
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38573__$1,(2),inst_38568);
} else {
if((state_val_38574 === (2))){
var inst_38570 = (state_38573[(2)]);
var inst_38571 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38573__$1 = (function (){var statearr_38575 = state_38573;
(statearr_38575[(7)] = inst_38570);

return statearr_38575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38573__$1,inst_38571);
} else {
return null;
}
}
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____0 = (function (){
var statearr_38579 = [null,null,null,null,null,null,null,null];
(statearr_38579[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__);

(statearr_38579[(1)] = (1));

return statearr_38579;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____1 = (function (state_38573){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_38573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e38580){if((e38580 instanceof Object)){
var ex__24155__auto__ = e38580;
var statearr_38581_38583 = state_38573;
(statearr_38581_38583[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38584 = state_38573;
state_38573 = G__38584;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__ = function(state_38573){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____1.call(this,state_38573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24152__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_38582 = f__24266__auto__.call(null);
(statearr_38582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_38582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
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
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__,figwheel_version,temp__6552__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__,figwheel_version,temp__6552__auto__){
return (function (state_38607){
var state_val_38608 = (state_38607[(1)]);
if((state_val_38608 === (1))){
var inst_38601 = cljs.core.async.timeout.call(null,(2000));
var state_38607__$1 = state_38607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38607__$1,(2),inst_38601);
} else {
if((state_val_38608 === (2))){
var inst_38603 = (state_38607[(2)]);
var inst_38604 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_38605 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38604);
var state_38607__$1 = (function (){var statearr_38609 = state_38607;
(statearr_38609[(7)] = inst_38603);

return statearr_38609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38607__$1,inst_38605);
} else {
return null;
}
}
});})(c__24265__auto__,figwheel_version,temp__6552__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__,figwheel_version,temp__6552__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____0 = (function (){
var statearr_38613 = [null,null,null,null,null,null,null,null];
(statearr_38613[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__);

(statearr_38613[(1)] = (1));

return statearr_38613;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____1 = (function (state_38607){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_38607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e38614){if((e38614 instanceof Object)){
var ex__24155__auto__ = e38614;
var statearr_38615_38617 = state_38607;
(statearr_38615_38617[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38618 = state_38607;
state_38607 = G__38618;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__ = function(state_38607){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____1.call(this,state_38607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__,figwheel_version,temp__6552__auto__))
})();
var state__24267__auto__ = (function (){var statearr_38616 = f__24266__auto__.call(null);
(statearr_38616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_38616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__,figwheel_version,temp__6552__auto__))
);

return c__24265__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38619){
var map__38623 = p__38619;
var map__38623__$1 = ((((!((map__38623 == null)))?((((map__38623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38623):map__38623);
var file = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38625 = "";
var G__38625__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38625),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38625);
var G__38625__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38625__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38625__$1);
if(cljs.core.truth_((function (){var and__21578__auto__ = line;
if(cljs.core.truth_(and__21578__auto__)){
return column;
} else {
return and__21578__auto__;
}
})())){
return [cljs.core.str(G__38625__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38625__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38626){
var map__38633 = p__38626;
var map__38633__$1 = ((((!((map__38633 == null)))?((((map__38633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38633):map__38633);
var ed = map__38633__$1;
var formatted_exception = cljs.core.get.call(null,map__38633__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38633__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38633__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38635_38639 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38636_38640 = null;
var count__38637_38641 = (0);
var i__38638_38642 = (0);
while(true){
if((i__38638_38642 < count__38637_38641)){
var msg_38643 = cljs.core._nth.call(null,chunk__38636_38640,i__38638_38642);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38643);

var G__38644 = seq__38635_38639;
var G__38645 = chunk__38636_38640;
var G__38646 = count__38637_38641;
var G__38647 = (i__38638_38642 + (1));
seq__38635_38639 = G__38644;
chunk__38636_38640 = G__38645;
count__38637_38641 = G__38646;
i__38638_38642 = G__38647;
continue;
} else {
var temp__6552__auto___38648 = cljs.core.seq.call(null,seq__38635_38639);
if(temp__6552__auto___38648){
var seq__38635_38649__$1 = temp__6552__auto___38648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38635_38649__$1)){
var c__22493__auto___38650 = cljs.core.chunk_first.call(null,seq__38635_38649__$1);
var G__38651 = cljs.core.chunk_rest.call(null,seq__38635_38649__$1);
var G__38652 = c__22493__auto___38650;
var G__38653 = cljs.core.count.call(null,c__22493__auto___38650);
var G__38654 = (0);
seq__38635_38639 = G__38651;
chunk__38636_38640 = G__38652;
count__38637_38641 = G__38653;
i__38638_38642 = G__38654;
continue;
} else {
var msg_38655 = cljs.core.first.call(null,seq__38635_38649__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38655);

var G__38656 = cljs.core.next.call(null,seq__38635_38649__$1);
var G__38657 = null;
var G__38658 = (0);
var G__38659 = (0);
seq__38635_38639 = G__38656;
chunk__38636_38640 = G__38657;
count__38637_38641 = G__38658;
i__38638_38642 = G__38659;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38660){
var map__38663 = p__38660;
var map__38663__$1 = ((((!((map__38663 == null)))?((((map__38663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38663):map__38663);
var w = map__38663__$1;
var message = cljs.core.get.call(null,map__38663__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38675 = cljs.core.seq.call(null,plugins);
var chunk__38676 = null;
var count__38677 = (0);
var i__38678 = (0);
while(true){
if((i__38678 < count__38677)){
var vec__38679 = cljs.core._nth.call(null,chunk__38676,i__38678);
var k = cljs.core.nth.call(null,vec__38679,(0),null);
var plugin = cljs.core.nth.call(null,vec__38679,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38685 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38675,chunk__38676,count__38677,i__38678,pl_38685,vec__38679,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38685.call(null,msg_hist);
});})(seq__38675,chunk__38676,count__38677,i__38678,pl_38685,vec__38679,k,plugin))
);
} else {
}

var G__38686 = seq__38675;
var G__38687 = chunk__38676;
var G__38688 = count__38677;
var G__38689 = (i__38678 + (1));
seq__38675 = G__38686;
chunk__38676 = G__38687;
count__38677 = G__38688;
i__38678 = G__38689;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__38675);
if(temp__6552__auto__){
var seq__38675__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38675__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38675__$1);
var G__38690 = cljs.core.chunk_rest.call(null,seq__38675__$1);
var G__38691 = c__22493__auto__;
var G__38692 = cljs.core.count.call(null,c__22493__auto__);
var G__38693 = (0);
seq__38675 = G__38690;
chunk__38676 = G__38691;
count__38677 = G__38692;
i__38678 = G__38693;
continue;
} else {
var vec__38682 = cljs.core.first.call(null,seq__38675__$1);
var k = cljs.core.nth.call(null,vec__38682,(0),null);
var plugin = cljs.core.nth.call(null,vec__38682,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38675,chunk__38676,count__38677,i__38678,pl_38694,vec__38682,k,plugin,seq__38675__$1,temp__6552__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38694.call(null,msg_hist);
});})(seq__38675,chunk__38676,count__38677,i__38678,pl_38694,vec__38682,k,plugin,seq__38675__$1,temp__6552__auto__))
);
} else {
}

var G__38695 = cljs.core.next.call(null,seq__38675__$1);
var G__38696 = null;
var G__38697 = (0);
var G__38698 = (0);
seq__38675 = G__38695;
chunk__38676 = G__38696;
count__38677 = G__38697;
i__38678 = G__38698;
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
var args38699 = [];
var len__22773__auto___38706 = arguments.length;
var i__22774__auto___38707 = (0);
while(true){
if((i__22774__auto___38707 < len__22773__auto___38706)){
args38699.push((arguments[i__22774__auto___38707]));

var G__38708 = (i__22774__auto___38707 + (1));
i__22774__auto___38707 = G__38708;
continue;
} else {
}
break;
}

var G__38701 = args38699.length;
switch (G__38701) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38699.length)].join('')));

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

var seq__38702_38710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38703_38711 = null;
var count__38704_38712 = (0);
var i__38705_38713 = (0);
while(true){
if((i__38705_38713 < count__38704_38712)){
var msg_38714 = cljs.core._nth.call(null,chunk__38703_38711,i__38705_38713);
figwheel.client.socket.handle_incoming_message.call(null,msg_38714);

var G__38715 = seq__38702_38710;
var G__38716 = chunk__38703_38711;
var G__38717 = count__38704_38712;
var G__38718 = (i__38705_38713 + (1));
seq__38702_38710 = G__38715;
chunk__38703_38711 = G__38716;
count__38704_38712 = G__38717;
i__38705_38713 = G__38718;
continue;
} else {
var temp__6552__auto___38719 = cljs.core.seq.call(null,seq__38702_38710);
if(temp__6552__auto___38719){
var seq__38702_38720__$1 = temp__6552__auto___38719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38702_38720__$1)){
var c__22493__auto___38721 = cljs.core.chunk_first.call(null,seq__38702_38720__$1);
var G__38722 = cljs.core.chunk_rest.call(null,seq__38702_38720__$1);
var G__38723 = c__22493__auto___38721;
var G__38724 = cljs.core.count.call(null,c__22493__auto___38721);
var G__38725 = (0);
seq__38702_38710 = G__38722;
chunk__38703_38711 = G__38723;
count__38704_38712 = G__38724;
i__38705_38713 = G__38725;
continue;
} else {
var msg_38726 = cljs.core.first.call(null,seq__38702_38720__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38726);

var G__38727 = cljs.core.next.call(null,seq__38702_38720__$1);
var G__38728 = null;
var G__38729 = (0);
var G__38730 = (0);
seq__38702_38710 = G__38727;
chunk__38703_38711 = G__38728;
count__38704_38712 = G__38729;
i__38705_38713 = G__38730;
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
var len__22773__auto___38735 = arguments.length;
var i__22774__auto___38736 = (0);
while(true){
if((i__22774__auto___38736 < len__22773__auto___38735)){
args__22780__auto__.push((arguments[i__22774__auto___38736]));

var G__38737 = (i__22774__auto___38736 + (1));
i__22774__auto___38736 = G__38737;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38732){
var map__38733 = p__38732;
var map__38733__$1 = ((((!((map__38733 == null)))?((((map__38733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38733):map__38733);
var opts = map__38733__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38731){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38731));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38739){if((e38739 instanceof Error)){
var e = e38739;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38739;

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
return (function (p__38743){
var map__38744 = p__38743;
var map__38744__$1 = ((((!((map__38744 == null)))?((((map__38744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38744):map__38744);
var msg_name = cljs.core.get.call(null,map__38744__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1472381718160