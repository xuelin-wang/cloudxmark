// Compiled by ClojureScript 1.9.198 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.display_name[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.display_name["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.init_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.init_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.should_update[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,next_props,next_state);
} else {
var m__22304__auto____$1 = (om.core.should_update["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.will_mount[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.will_mount["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.did_mount[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.did_mount["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.will_unmount[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.will_update[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,next_props,next_state);
} else {
var m__22304__auto____$1 = (om.core.will_update["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.did_update[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__22304__auto____$1 = (om.core.did_update["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.will_receive_props[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,next_props);
} else {
var m__22304__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.render[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core.render["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.render_props[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,props,state);
} else {
var m__22304__auto____$1 = (om.core.render_props["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core.render_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,state);
} else {
var m__22304__auto____$1 = (om.core.render_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__22304__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args32574 = [];
var len__22773__auto___32577 = arguments.length;
var i__22774__auto___32578 = (0);
while(true){
if((i__22774__auto___32578 < len__22773__auto___32577)){
args32574.push((arguments[i__22774__auto___32578]));

var G__32579 = (i__22774__auto___32578 + (1));
i__22774__auto___32578 = G__32579;
continue;
} else {
}
break;
}

var G__32576 = args32574.length;
switch (G__32576) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32574.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._get_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,ks);
} else {
var m__22304__auto____$1 = (om.core._get_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args32581 = [];
var len__22773__auto___32584 = arguments.length;
var i__22774__auto___32585 = (0);
while(true){
if((i__22774__auto___32585 < len__22773__auto___32584)){
args32581.push((arguments[i__22774__auto___32585]));

var G__32586 = (i__22774__auto___32585 + (1));
i__22774__auto___32585 = G__32586;
continue;
} else {
}
break;
}

var G__32583 = args32581.length;
switch (G__32583) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32581.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_render_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_render_state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,ks);
} else {
var m__22304__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args32588 = [];
var len__22773__auto___32591 = arguments.length;
var i__22774__auto___32592 = (0);
while(true){
if((i__22774__auto___32592 < len__22773__auto___32591)){
args32588.push((arguments[i__22774__auto___32592]));

var G__32593 = (i__22774__auto___32592 + (1));
i__22774__auto___32592 = G__32593;
continue;
} else {
}
break;
}

var G__32590 = args32588.length;
switch (G__32590) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32588.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,val,render);
} else {
var m__22304__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,ks,val,render);
} else {
var m__22304__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_queue[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._get_queue["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,c);
} else {
var m__22304__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__22303__auto__ = (((x == null))?null:x);
var m__22304__auto__ = (om.core._value[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,x);
} else {
var m__22304__auto____$1 = (om.core._value["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__22303__auto__ = (((cursor == null))?null:cursor);
var m__22304__auto__ = (om.core._path[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cursor);
} else {
var m__22304__auto____$1 = (om.core._path["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__22303__auto__ = (((cursor == null))?null:cursor);
var m__22304__auto__ = (om.core._state[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cursor);
} else {
var m__22304__auto____$1 = (om.core._state["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args32595 = [];
var len__22773__auto___32598 = arguments.length;
var i__22774__auto___32599 = (0);
while(true){
if((i__22774__auto___32599 < len__22773__auto___32598)){
args32595.push((arguments[i__22774__auto___32599]));

var G__32600 = (i__22774__auto___32599 + (1));
i__22774__auto___32599 = G__32600;
continue;
} else {
}
break;
}

var G__32597 = args32595.length;
switch (G__32597) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32595.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__22303__auto__ = (((value == null))?null:value);
var m__22304__auto__ = (om.core._to_cursor[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,value,state);
} else {
var m__22304__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__22303__auto__ = (((value == null))?null:value);
var m__22304__auto__ = (om.core._to_cursor[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,value,state,path);
} else {
var m__22304__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__22303__auto__ = (((cursor == null))?null:cursor);
var m__22304__auto__ = (om.core._derive[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cursor,derived,state,path);
} else {
var m__22304__auto____$1 = (om.core._derive["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__22303__auto__ = (((cursor == null))?null:cursor);
var m__22304__auto__ = (om.core._transact_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cursor,korks,f,tag);
} else {
var m__22304__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__22303__auto__ = (((x == null))?null:x);
var m__22304__auto__ = (om.core._listen_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,x,key,tx_listen);
} else {
var m__22304__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__22303__auto__ = (((x == null))?null:x);
var m__22304__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,x,key);
} else {
var m__22304__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__22303__auto__ = (((x == null))?null:x);
var m__22304__auto__ = (om.core._notify_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__22304__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,id,p,val);
} else {
var m__22304__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,id,p);
} else {
var m__22304__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,id);
} else {
var m__22304__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_property[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,id,p);
} else {
var m__22304__auto____$1 = (om.core._get_property["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__22303__auto__ = (((cursor == null))?null:cursor);
var m__22304__auto__ = (om.core._root_key[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cursor);
} else {
var m__22304__auto____$1 = (om.core._root_key["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._adapt[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,other);
} else {
var m__22304__auto____$1 = (om.core._adapt["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,c);
} else {
var m__22304__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$,c);
} else {
var m__22304__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (om.core._get_deps[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (om.core._get_deps["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args32606 = [];
var len__22773__auto___32610 = arguments.length;
var i__22774__auto___32611 = (0);
while(true){
if((i__22774__auto___32611 < len__22773__auto___32610)){
args32606.push((arguments[i__22774__auto___32611]));

var G__32612 = (i__22774__auto___32611 + (1));
i__22774__auto___32611 = G__32612;
continue;
} else {
}
break;
}

var G__32608 = args32606.length;
switch (G__32608) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32606.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__32609 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__32609,korks__$1);
} else {
return G__32609;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args32614 = [];
var len__22773__auto___32617 = arguments.length;
var i__22774__auto___32618 = (0);
while(true){
if((i__22774__auto___32618 < len__22773__auto___32617)){
args32614.push((arguments[i__22774__auto___32618]));

var G__32619 = (i__22774__auto___32618 + (1));
i__22774__auto___32618 = G__32619;
continue;
} else {
}
break;
}

var G__32616 = args32614.length;
switch (G__32616) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32614.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args32621 = [];
var len__22773__auto___32624 = arguments.length;
var i__22774__auto___32625 = (0);
while(true){
if((i__22774__auto___32625 < len__22773__auto___32624)){
args32621.push((arguments[i__22774__auto___32625]));

var G__32626 = (i__22774__auto___32625 + (1));
i__22774__auto___32625 = G__32626;
continue;
} else {
}
break;
}

var G__32623 = args32621.length;
switch (G__32623) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32621.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__6503__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__6503__auto__)){
var pending_state = temp__6503__auto__;
var G__32629 = state;
(G__32629["__om_prev_state"] = (state["__om_state"]));

(G__32629["__om_state"] = pending_state);

(G__32629["__om_pending_state"] = null);

return G__32629;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args32630 = [];
var len__22773__auto___32633 = arguments.length;
var i__22774__auto___32634 = (0);
while(true){
if((i__22774__auto___32634 < len__22773__auto___32633)){
args32630.push((arguments[i__22774__auto___32634]));

var G__32635 = (i__22774__auto___32634 + (1));
i__22774__auto___32634 = G__32635;
continue;
} else {
}
break;
}

var G__32632 = args32630.length;
switch (G__32632) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32630.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__21590__auto__ = props;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return owner.props;
}
})();
var temp__6503__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__6503__auto__)){
var props_state = temp__6503__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__21590__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32659 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__21590__auto__ = (state_32659["__om_prev_state"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (state_32659["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__6503__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__6503__auto__){
var refs = temp__6503__auto__;
var seq__32640 = cljs.core.seq.call(null,refs);
var chunk__32641 = null;
var count__32642 = (0);
var i__32643 = (0);
while(true){
if((i__32643 < count__32642)){
var ref = cljs.core._nth.call(null,chunk__32641,i__32643);
om.core.unobserve.call(null,this$,ref);

var G__32660 = seq__32640;
var G__32661 = chunk__32641;
var G__32662 = count__32642;
var G__32663 = (i__32643 + (1));
seq__32640 = G__32660;
chunk__32641 = G__32661;
count__32642 = G__32662;
i__32643 = G__32663;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__32640);
if(temp__6503__auto____$1){
var seq__32640__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32640__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__32640__$1);
var G__32664 = cljs.core.chunk_rest.call(null,seq__32640__$1);
var G__32665 = c__22493__auto__;
var G__32666 = cljs.core.count.call(null,c__22493__auto__);
var G__32667 = (0);
seq__32640 = G__32664;
chunk__32641 = G__32665;
count__32642 = G__32666;
i__32643 = G__32667;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32640__$1);
om.core.unobserve.call(null,this$,ref);

var G__32668 = cljs.core.next.call(null,seq__32640__$1);
var G__32669 = null;
var G__32670 = (0);
var G__32671 = (0);
seq__32640 = G__32668;
chunk__32641 = G__32669;
count__32642 = G__32670;
i__32643 = G__32671;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__21578__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__21578__auto__){
return cljs.core.some.call(null,((function (and__21578__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32637_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__32637_SHARP_);
});})(and__21578__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_32646 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32647 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32648 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32649 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32650 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32650;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32649;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32648;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32647;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32646;
}}),(function (next_props,next_state){
var this$ = this;
var c_32672 = om.core.children.call(null,this$);
if(((!((c_32672 == null)))?(((false) || (c_32672.om$core$IWillUpdate$))?true:(((!c_32672.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32672):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32672))){
var state_32673 = this$.state;
om.core.will_update.call(null,c_32672,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__21590__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__21590__auto__ = id;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32674 = om.core.children.call(null,this$);
if(((!((c_32674 == null)))?(((false) || (c_32674.om$core$IWillMount$))?true:(((!c_32674.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32674):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32674))){
om.core.will_mount.call(null,c_32674);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x32676 = obj;
x32676.om$core$ISetState$ = true;

x32676.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32676){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__21578__auto__ = !((app_state == null));
if(and__21578__auto__){
return render;
} else {
return and__21578__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32676))
;

x32676.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32676){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__21578__auto__ = !((app_state == null));
if(and__21578__auto__){
return render;
} else {
return and__21578__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32676))
;

x32676.om$core$IGetRenderState$ = true;

x32676.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32676){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32676))
;

x32676.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32676){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32676))
;

x32676.om$core$IGetState$ = true;

x32676.om$core$IGetState$_get_state$arity$1 = ((function (x32676){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__21590__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (state["__om_state"]);
}
});})(x32676))
;

x32676.om$core$IGetState$_get_state$arity$2 = ((function (x32676){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32676))
;

return x32676;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__21590__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__21590__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32687 = om.core.children.call(null,this$);
if(((!((c_32687 == null)))?(((false) || (c_32687.om$core$IWillMount$))?true:(((!c_32687.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32687):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32687))){
om.core.will_mount.call(null,c_32687);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__6503__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__6503__auto__){
var refs = temp__6503__auto__;
var seq__32681 = cljs.core.seq.call(null,refs);
var chunk__32682 = null;
var count__32683 = (0);
var i__32684 = (0);
while(true){
if((i__32684 < count__32683)){
var ref = cljs.core._nth.call(null,chunk__32682,i__32684);
om.core.unobserve.call(null,this$,ref);

var G__32688 = seq__32681;
var G__32689 = chunk__32682;
var G__32690 = count__32683;
var G__32691 = (i__32684 + (1));
seq__32681 = G__32688;
chunk__32682 = G__32689;
count__32683 = G__32690;
i__32684 = G__32691;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__32681);
if(temp__6503__auto____$1){
var seq__32681__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32681__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__32681__$1);
var G__32692 = cljs.core.chunk_rest.call(null,seq__32681__$1);
var G__32693 = c__22493__auto__;
var G__32694 = cljs.core.count.call(null,c__22493__auto__);
var G__32695 = (0);
seq__32681 = G__32692;
chunk__32682 = G__32693;
count__32683 = G__32694;
i__32684 = G__32695;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32681__$1);
om.core.unobserve.call(null,this$,ref);

var G__32696 = cljs.core.next.call(null,seq__32681__$1);
var G__32697 = null;
var G__32698 = (0);
var G__32699 = (0);
seq__32681 = G__32696;
chunk__32682 = G__32697;
count__32683 = G__32698;
i__32684 = G__32699;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_32700 = this$.props;
var c_32701 = om.core.children.call(null,this$);
if(((!((c_32701 == null)))?(((false) || (c_32701.om$core$IWillUpdate$))?true:(((!c_32701.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32701):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32701))){
var state_32702 = this$.state;
om.core.will_update.call(null,c_32701,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32703 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x32705 = cljs.core.clj__GT_js.call(null,methods$);
x32705.om$core$ISetState$ = true;

x32705.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32705){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__21578__auto__ = !((gstate == null));
if(and__21578__auto__){
return render;
} else {
return and__21578__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x32705))
;

x32705.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32705){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x32705))
;

x32705.om$core$IGetRenderState$ = true;

x32705.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32705){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x32705))
;

x32705.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32705){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32705))
;

x32705.om$core$IGetState$ = true;

x32705.om$core$IGetState$_get_state$arity$1 = ((function (x32705){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__21590__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x32705))
;

x32705.om$core$IGetState$_get_state$arity$2 = ((function (x32705){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32705))
;

return x32705;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__32709){
var vec__32710 = p__32709;
var k = cljs.core.nth.call(null,vec__32710,(0),null);
var v = cljs.core.nth.call(null,vec__32710,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32713 = null;
var G__32713__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32713__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32713 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32713__2.call(this,self__,k);
case 3:
return G__32713__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32713.cljs$core$IFn$_invoke$arity$2 = G__32713__2;
G__32713.cljs$core$IFn$_invoke$arity$3 = G__32713__3;
return G__32713;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32708){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32708)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32715 = null;
var G__32715__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32715__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32715 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32715__2.call(this,self__,k);
case 3:
return G__32715__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32715.cljs$core$IFn$_invoke$arity$2 = G__32715__2;
G__32715.cljs$core$IFn$_invoke$arity$3 = G__32715__3;
return G__32715;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32714){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32714)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x32717 = cljs.core.clone.call(null,val);
x32717.cljs$core$IDeref$ = true;

x32717.cljs$core$IDeref$_deref$arity$1 = ((function (x32717){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x32717))
;

x32717.om$core$ICursor$ = true;

x32717.om$core$ICursor$_path$arity$1 = ((function (x32717){
return (function (_){
var ___$1 = this;
return path;
});})(x32717))
;

x32717.om$core$ICursor$_state$arity$1 = ((function (x32717){
return (function (_){
var ___$1 = this;
return state;
});})(x32717))
;

x32717.om$core$ITransact$ = true;

x32717.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32717){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x32717))
;

x32717.cljs$core$IEquiv$ = true;

x32717.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32717){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x32717))
;

return x32717;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args32718 = [];
var len__22773__auto___32723 = arguments.length;
var i__22774__auto___32724 = (0);
while(true){
if((i__22774__auto___32724 < len__22773__auto___32723)){
args32718.push((arguments[i__22774__auto___32724]));

var G__32725 = (i__22774__auto___32724 + (1));
i__22774__auto___32724 = G__32725;
continue;
} else {
}
break;
}

var G__32720 = args32718.length;
switch (G__32720) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32718.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x32730 = cljs.core.clone.call(null,x);
x32730.cljs$core$ICloneable$ = true;

x32730.cljs$core$ICloneable$_clone$arity$1 = ((function (x32730){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x32730))
;

x32730.om$core$IAdapt$ = true;

x32730.om$core$IAdapt$_adapt$arity$2 = ((function (x32730){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x32730))
;

x32730.om$core$ICursorDerive$ = true;

x32730.om$core$ICursorDerive$_derive$arity$4 = ((function (x32730){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32730))
;

x32730.om$core$ITransact$ = true;

x32730.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32730){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x32730))
;

return x32730;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x32738 = cljs.core.clone.call(null,cursor);
x32738.om$core$ICursorDerive$ = true;

x32738.om$core$ICursorDerive$_derive$arity$4 = ((function (x32738,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32738,path,storage))
;

x32738.om$core$IOmRef$ = true;

x32738.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32738,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x32738,path,storage))
;

x32738.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32738,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32738,path,storage))
;

x32738.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32738,path,storage){
return (function (_){
var ___$1 = this;
var seq__32739 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__32740 = null;
var count__32741 = (0);
var i__32742 = (0);
while(true){
if((i__32742 < count__32741)){
var c = cljs.core._nth.call(null,chunk__32740,i__32742);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32743 = seq__32739;
var G__32744 = chunk__32740;
var G__32745 = count__32741;
var G__32746 = (i__32742 + (1));
seq__32739 = G__32743;
chunk__32740 = G__32744;
count__32741 = G__32745;
i__32742 = G__32746;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__32739);
if(temp__6503__auto__){
var seq__32739__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32739__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__32739__$1);
var G__32747 = cljs.core.chunk_rest.call(null,seq__32739__$1);
var G__32748 = c__22493__auto__;
var G__32749 = cljs.core.count.call(null,c__22493__auto__);
var G__32750 = (0);
seq__32739 = G__32747;
chunk__32740 = G__32748;
count__32741 = G__32749;
i__32742 = G__32750;
continue;
} else {
var c = cljs.core.first.call(null,seq__32739__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32751 = cljs.core.next.call(null,seq__32739__$1);
var G__32752 = null;
var G__32753 = (0);
var G__32754 = (0);
seq__32739 = G__32751;
chunk__32740 = G__32752;
count__32741 = G__32753;
i__32742 = G__32754;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32738,path,storage))
;

x32738.om$core$IOmRef$_get_deps$arity$1 = ((function (x32738,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x32738,path,storage))
;

x32738.om$core$ITransact$ = true;

x32738.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32738,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x32738,path,storage))
;

return x32738;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__21590__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__21590__auto__ = state.om$render$T;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args32755 = [];
var len__22773__auto___32762 = arguments.length;
var i__22774__auto___32763 = (0);
while(true){
if((i__22774__auto___32763 < len__22773__auto___32762)){
args32755.push((arguments[i__22774__auto___32763]));

var G__32764 = (i__22774__auto___32763 + (1));
i__22774__auto___32763 = G__32764;
continue;
} else {
}
break;
}

var G__32757 = args32755.length;
switch (G__32757) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32755.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__32758_32766 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__32759_32767 = null;
var count__32760_32768 = (0);
var i__32761_32769 = (0);
while(true){
if((i__32761_32769 < count__32760_32768)){
var f_32770 = cljs.core._nth.call(null,chunk__32759_32767,i__32761_32769);
f_32770.call(null);

var G__32771 = seq__32758_32766;
var G__32772 = chunk__32759_32767;
var G__32773 = count__32760_32768;
var G__32774 = (i__32761_32769 + (1));
seq__32758_32766 = G__32771;
chunk__32759_32767 = G__32772;
count__32760_32768 = G__32773;
i__32761_32769 = G__32774;
continue;
} else {
var temp__6503__auto___32775 = cljs.core.seq.call(null,seq__32758_32766);
if(temp__6503__auto___32775){
var seq__32758_32776__$1 = temp__6503__auto___32775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32758_32776__$1)){
var c__22493__auto___32777 = cljs.core.chunk_first.call(null,seq__32758_32776__$1);
var G__32778 = cljs.core.chunk_rest.call(null,seq__32758_32776__$1);
var G__32779 = c__22493__auto___32777;
var G__32780 = cljs.core.count.call(null,c__22493__auto___32777);
var G__32781 = (0);
seq__32758_32766 = G__32778;
chunk__32759_32767 = G__32779;
count__32760_32768 = G__32780;
i__32761_32769 = G__32781;
continue;
} else {
var f_32782 = cljs.core.first.call(null,seq__32758_32776__$1);
f_32782.call(null);

var G__32783 = cljs.core.next.call(null,seq__32758_32776__$1);
var G__32784 = null;
var G__32785 = (0);
var G__32786 = (0);
seq__32758_32766 = G__32783;
chunk__32759_32767 = G__32784;
count__32760_32768 = G__32785;
i__32761_32769 = G__32786;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__21590__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__21590__auto____$1){
return or__21590__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args32797 = [];
var len__22773__auto___32800 = arguments.length;
var i__22774__auto___32801 = (0);
while(true){
if((i__22774__auto___32801 < len__22773__auto___32800)){
args32797.push((arguments[i__22774__auto___32801]));

var G__32802 = (i__22774__auto___32801 + (1));
i__22774__auto___32801 = G__32802;
continue;
} else {
}
break;
}

var G__32799 = args32797.length;
switch (G__32799) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32797.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_32804 = (function (){var or__21590__auto__ = descriptor;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_32804 === goog.object.get(f,"om$tag"))))){
var factory_32805 = React.createFactory(React.createClass(rdesc_32804));
goog.object.set(f,"om$descriptor",factory_32805);

goog.object.set(f,"om$tag",rdesc_32804);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args32806 = [];
var len__22773__auto___32809 = arguments.length;
var i__22774__auto___32810 = (0);
while(true){
if((i__22774__auto___32810 < len__22773__auto___32809)){
args32806.push((arguments[i__22774__auto___32810]));

var G__32811 = (i__22774__auto___32810 + (1));
i__22774__auto___32810 = G__32811;
continue;
} else {
}
break;
}

var G__32808 = args32806.length;
switch (G__32808) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32806.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args32813 = [];
var len__22773__auto___32818 = arguments.length;
var i__22774__auto___32819 = (0);
while(true){
if((i__22774__auto___32819 < len__22773__auto___32818)){
args32813.push((arguments[i__22774__auto___32819]));

var G__32820 = (i__22774__auto___32819 + (1));
i__22774__auto___32819 = G__32820;
continue;
} else {
}
break;
}

var G__32815 = args32813.length;
switch (G__32815) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32813.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__32816 = m;
var map__32816__$1 = ((((!((map__32816 == null)))?((((map__32816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32816):map__32816);
var key = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__6501__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6501__auto__)){
var i = temp__6501__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__21590__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32816,map__32816__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32816,map__32816__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32816,map__32816__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32816,map__32816__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__21590__auto__ = rkey;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args32822 = [];
var len__22773__auto___32825 = arguments.length;
var i__22774__auto___32826 = (0);
while(true){
if((i__22774__auto___32826 < len__22773__auto___32825)){
args32822.push((arguments[i__22774__auto___32826]));

var G__32827 = (i__22774__auto___32826 + (1));
i__22774__auto___32826 = G__32827;
continue;
} else {
}
break;
}

var G__32824 = args32822.length;
switch (G__32824) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32822.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args32829 = [];
var len__22773__auto___32832 = arguments.length;
var i__22774__auto___32833 = (0);
while(true){
if((i__22774__auto___32833 < len__22773__auto___32832)){
args32829.push((arguments[i__22774__auto___32833]));

var G__32834 = (i__22774__auto___32833 + (1));
i__22774__auto___32833 = G__32834;
continue;
} else {
}
break;
}

var G__32831 = args32829.length;
switch (G__32831) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32829.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_32860 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_32861 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_32862 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x32849_32863 = state;
x32849_32863.om$core$IRootProperties$ = true;

x32849_32863.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32860,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32860,cljs.core.dissoc,id,k);
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32860,cljs.core.dissoc,id);
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRootProperties$_get_property$arity$3 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_32860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$INotify$ = true;

x32849_32863.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_32861,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_32861,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32850_32864 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_32861));
var chunk__32851_32865 = null;
var count__32852_32866 = (0);
var i__32853_32867 = (0);
while(true){
if((i__32853_32867 < count__32852_32866)){
var vec__32854_32868 = cljs.core._nth.call(null,chunk__32851_32865,i__32853_32867);
var __32869 = cljs.core.nth.call(null,vec__32854_32868,(0),null);
var f_32870 = cljs.core.nth.call(null,vec__32854_32868,(1),null);
f_32870.call(null,tx_data,root_cursor);

var G__32871 = seq__32850_32864;
var G__32872 = chunk__32851_32865;
var G__32873 = count__32852_32866;
var G__32874 = (i__32853_32867 + (1));
seq__32850_32864 = G__32871;
chunk__32851_32865 = G__32872;
count__32852_32866 = G__32873;
i__32853_32867 = G__32874;
continue;
} else {
var temp__6503__auto___32875 = cljs.core.seq.call(null,seq__32850_32864);
if(temp__6503__auto___32875){
var seq__32850_32876__$1 = temp__6503__auto___32875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32850_32876__$1)){
var c__22493__auto___32877 = cljs.core.chunk_first.call(null,seq__32850_32876__$1);
var G__32878 = cljs.core.chunk_rest.call(null,seq__32850_32876__$1);
var G__32879 = c__22493__auto___32877;
var G__32880 = cljs.core.count.call(null,c__22493__auto___32877);
var G__32881 = (0);
seq__32850_32864 = G__32878;
chunk__32851_32865 = G__32879;
count__32852_32866 = G__32880;
i__32853_32867 = G__32881;
continue;
} else {
var vec__32857_32882 = cljs.core.first.call(null,seq__32850_32876__$1);
var __32883 = cljs.core.nth.call(null,vec__32857_32882,(0),null);
var f_32884 = cljs.core.nth.call(null,vec__32857_32882,(1),null);
f_32884.call(null,tx_data,root_cursor);

var G__32885 = cljs.core.next.call(null,seq__32850_32876__$1);
var G__32886 = null;
var G__32887 = (0);
var G__32888 = (0);
seq__32850_32864 = G__32885;
chunk__32851_32865 = G__32886;
count__32852_32866 = G__32887;
i__32853_32867 = G__32888;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRenderQueue$ = true;

x32849_32863.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_32862);
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_32862),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_32862,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

x32849_32863.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32849_32863,properties_32860,listeners_32861,render_queue_32862){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_32862,cljs.core.empty);
});})(x32849_32863,properties_32860,listeners_32861,render_queue_32862))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x32890 = cljs.core.clone.call(null,cursor);
x32890.cljs$core$ICloneable$ = true;

x32890.cljs$core$ICloneable$_clone$arity$1 = ((function (x32890){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x32890))
;

x32890.om$core$IAdapt$ = true;

x32890.om$core$IAdapt$_adapt$arity$2 = ((function (x32890){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x32890))
;

x32890.om$core$IRootKey$ = true;

x32890.om$core$IRootKey$_root_key$arity$1 = ((function (x32890){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32890))
;

return x32890;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__32891){
var map__32979 = p__32891;
var map__32979__$1 = ((((!((map__32979 == null)))?((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var options = map__32979__$1;
var target = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__33066 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__33066,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__33066,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__21590__auto__ = adapt;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_33067 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_33024 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_33025 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_33026 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_33027 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_33027;

om.core._STAR_state_STAR_ = _STAR_state_STAR_33026;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33025;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_33024;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_33067);
} else {
}
}

var queue_33068 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_33068)){
} else {
var seq__33028_33069 = cljs.core.seq.call(null,queue_33068);
var chunk__33029_33070 = null;
var count__33030_33071 = (0);
var i__33031_33072 = (0);
while(true){
if((i__33031_33072 < count__33030_33071)){
var c_33073 = cljs.core._nth.call(null,chunk__33029_33070,i__33031_33072);
if(cljs.core.truth_(c_33073.isMounted())){
var temp__6503__auto___33074 = (c_33073.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__6503__auto___33074)){
var next_props_33075 = temp__6503__auto___33074;
(c_33073.props["__om_cursor"] = next_props_33075);

(c_33073.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21590__auto__ = !((function (){var G__33033 = om.core.children.call(null,c_33073);
if(!((G__33033 == null))){
if((false) || (G__33033.om$core$ICheckState$)){
return true;
} else {
if((!G__33033.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33033);
}
})());
if(or__21590__auto__){
return or__21590__auto__;
} else {
return c_33073.shouldComponentUpdate(c_33073.props,c_33073.state);
}
})())){
c_33073.forceUpdate();
} else {
}
} else {
}

var G__33076 = seq__33028_33069;
var G__33077 = chunk__33029_33070;
var G__33078 = count__33030_33071;
var G__33079 = (i__33031_33072 + (1));
seq__33028_33069 = G__33076;
chunk__33029_33070 = G__33077;
count__33030_33071 = G__33078;
i__33031_33072 = G__33079;
continue;
} else {
var temp__6503__auto___33080 = cljs.core.seq.call(null,seq__33028_33069);
if(temp__6503__auto___33080){
var seq__33028_33081__$1 = temp__6503__auto___33080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33028_33081__$1)){
var c__22493__auto___33082 = cljs.core.chunk_first.call(null,seq__33028_33081__$1);
var G__33083 = cljs.core.chunk_rest.call(null,seq__33028_33081__$1);
var G__33084 = c__22493__auto___33082;
var G__33085 = cljs.core.count.call(null,c__22493__auto___33082);
var G__33086 = (0);
seq__33028_33069 = G__33083;
chunk__33029_33070 = G__33084;
count__33030_33071 = G__33085;
i__33031_33072 = G__33086;
continue;
} else {
var c_33087 = cljs.core.first.call(null,seq__33028_33081__$1);
if(cljs.core.truth_(c_33087.isMounted())){
var temp__6503__auto___33088__$1 = (c_33087.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__6503__auto___33088__$1)){
var next_props_33089 = temp__6503__auto___33088__$1;
(c_33087.props["__om_cursor"] = next_props_33089);

(c_33087.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21590__auto__ = !((function (){var G__33035 = om.core.children.call(null,c_33087);
if(!((G__33035 == null))){
if((false) || (G__33035.om$core$ICheckState$)){
return true;
} else {
if((!G__33035.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33035);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33035);
}
})());
if(or__21590__auto__){
return or__21590__auto__;
} else {
return c_33087.shouldComponentUpdate(c_33087.props,c_33087.state);
}
})())){
c_33087.forceUpdate();
} else {
}
} else {
}

var G__33090 = cljs.core.next.call(null,seq__33028_33081__$1);
var G__33091 = null;
var G__33092 = (0);
var G__33093 = (0);
seq__33028_33069 = G__33090;
chunk__33029_33070 = G__33091;
count__33030_33071 = G__33092;
i__33031_33072 = G__33093;
continue;
}
} else {
}
}
break;
}
}

var _refs_33094 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_33094)){
} else {
var seq__33036_33095 = cljs.core.seq.call(null,_refs_33094);
var chunk__33037_33096 = null;
var count__33038_33097 = (0);
var i__33039_33098 = (0);
while(true){
if((i__33039_33098 < count__33038_33097)){
var vec__33040_33099 = cljs.core._nth.call(null,chunk__33037_33096,i__33039_33098);
var path_33100__$1 = cljs.core.nth.call(null,vec__33040_33099,(0),null);
var cs_33101 = cljs.core.nth.call(null,vec__33040_33099,(1),null);
var cs_33102__$1 = cljs.core.deref.call(null,cs_33101);
var seq__33043_33103 = cljs.core.seq.call(null,cs_33102__$1);
var chunk__33044_33104 = null;
var count__33045_33105 = (0);
var i__33046_33106 = (0);
while(true){
if((i__33046_33106 < count__33045_33105)){
var vec__33047_33107 = cljs.core._nth.call(null,chunk__33044_33104,i__33046_33106);
var id_33108 = cljs.core.nth.call(null,vec__33047_33107,(0),null);
var c_33109 = cljs.core.nth.call(null,vec__33047_33107,(1),null);
if(cljs.core.truth_(c_33109.shouldComponentUpdate(c_33109.props,c_33109.state))){
c_33109.forceUpdate();
} else {
}

var G__33110 = seq__33043_33103;
var G__33111 = chunk__33044_33104;
var G__33112 = count__33045_33105;
var G__33113 = (i__33046_33106 + (1));
seq__33043_33103 = G__33110;
chunk__33044_33104 = G__33111;
count__33045_33105 = G__33112;
i__33046_33106 = G__33113;
continue;
} else {
var temp__6503__auto___33114 = cljs.core.seq.call(null,seq__33043_33103);
if(temp__6503__auto___33114){
var seq__33043_33115__$1 = temp__6503__auto___33114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33043_33115__$1)){
var c__22493__auto___33116 = cljs.core.chunk_first.call(null,seq__33043_33115__$1);
var G__33117 = cljs.core.chunk_rest.call(null,seq__33043_33115__$1);
var G__33118 = c__22493__auto___33116;
var G__33119 = cljs.core.count.call(null,c__22493__auto___33116);
var G__33120 = (0);
seq__33043_33103 = G__33117;
chunk__33044_33104 = G__33118;
count__33045_33105 = G__33119;
i__33046_33106 = G__33120;
continue;
} else {
var vec__33050_33121 = cljs.core.first.call(null,seq__33043_33115__$1);
var id_33122 = cljs.core.nth.call(null,vec__33050_33121,(0),null);
var c_33123 = cljs.core.nth.call(null,vec__33050_33121,(1),null);
if(cljs.core.truth_(c_33123.shouldComponentUpdate(c_33123.props,c_33123.state))){
c_33123.forceUpdate();
} else {
}

var G__33124 = cljs.core.next.call(null,seq__33043_33115__$1);
var G__33125 = null;
var G__33126 = (0);
var G__33127 = (0);
seq__33043_33103 = G__33124;
chunk__33044_33104 = G__33125;
count__33045_33105 = G__33126;
i__33046_33106 = G__33127;
continue;
}
} else {
}
}
break;
}

var G__33128 = seq__33036_33095;
var G__33129 = chunk__33037_33096;
var G__33130 = count__33038_33097;
var G__33131 = (i__33039_33098 + (1));
seq__33036_33095 = G__33128;
chunk__33037_33096 = G__33129;
count__33038_33097 = G__33130;
i__33039_33098 = G__33131;
continue;
} else {
var temp__6503__auto___33132 = cljs.core.seq.call(null,seq__33036_33095);
if(temp__6503__auto___33132){
var seq__33036_33133__$1 = temp__6503__auto___33132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33036_33133__$1)){
var c__22493__auto___33134 = cljs.core.chunk_first.call(null,seq__33036_33133__$1);
var G__33135 = cljs.core.chunk_rest.call(null,seq__33036_33133__$1);
var G__33136 = c__22493__auto___33134;
var G__33137 = cljs.core.count.call(null,c__22493__auto___33134);
var G__33138 = (0);
seq__33036_33095 = G__33135;
chunk__33037_33096 = G__33136;
count__33038_33097 = G__33137;
i__33039_33098 = G__33138;
continue;
} else {
var vec__33053_33139 = cljs.core.first.call(null,seq__33036_33133__$1);
var path_33140__$1 = cljs.core.nth.call(null,vec__33053_33139,(0),null);
var cs_33141 = cljs.core.nth.call(null,vec__33053_33139,(1),null);
var cs_33142__$1 = cljs.core.deref.call(null,cs_33141);
var seq__33056_33143 = cljs.core.seq.call(null,cs_33142__$1);
var chunk__33057_33144 = null;
var count__33058_33145 = (0);
var i__33059_33146 = (0);
while(true){
if((i__33059_33146 < count__33058_33145)){
var vec__33060_33147 = cljs.core._nth.call(null,chunk__33057_33144,i__33059_33146);
var id_33148 = cljs.core.nth.call(null,vec__33060_33147,(0),null);
var c_33149 = cljs.core.nth.call(null,vec__33060_33147,(1),null);
if(cljs.core.truth_(c_33149.shouldComponentUpdate(c_33149.props,c_33149.state))){
c_33149.forceUpdate();
} else {
}

var G__33150 = seq__33056_33143;
var G__33151 = chunk__33057_33144;
var G__33152 = count__33058_33145;
var G__33153 = (i__33059_33146 + (1));
seq__33056_33143 = G__33150;
chunk__33057_33144 = G__33151;
count__33058_33145 = G__33152;
i__33059_33146 = G__33153;
continue;
} else {
var temp__6503__auto___33154__$1 = cljs.core.seq.call(null,seq__33056_33143);
if(temp__6503__auto___33154__$1){
var seq__33056_33155__$1 = temp__6503__auto___33154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33056_33155__$1)){
var c__22493__auto___33156 = cljs.core.chunk_first.call(null,seq__33056_33155__$1);
var G__33157 = cljs.core.chunk_rest.call(null,seq__33056_33155__$1);
var G__33158 = c__22493__auto___33156;
var G__33159 = cljs.core.count.call(null,c__22493__auto___33156);
var G__33160 = (0);
seq__33056_33143 = G__33157;
chunk__33057_33144 = G__33158;
count__33058_33145 = G__33159;
i__33059_33146 = G__33160;
continue;
} else {
var vec__33063_33161 = cljs.core.first.call(null,seq__33056_33155__$1);
var id_33162 = cljs.core.nth.call(null,vec__33063_33161,(0),null);
var c_33163 = cljs.core.nth.call(null,vec__33063_33161,(1),null);
if(cljs.core.truth_(c_33163.shouldComponentUpdate(c_33163.props,c_33163.state))){
c_33163.forceUpdate();
} else {
}

var G__33164 = cljs.core.next.call(null,seq__33056_33155__$1);
var G__33165 = null;
var G__33166 = (0);
var G__33167 = (0);
seq__33056_33143 = G__33164;
chunk__33057_33144 = G__33165;
count__33058_33145 = G__33166;
i__33059_33146 = G__33167;
continue;
}
} else {
}
}
break;
}

var G__33168 = cljs.core.next.call(null,seq__33036_33133__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__33036_33095 = G__33168;
chunk__33037_33096 = G__33169;
count__33038_33097 = G__33170;
i__33039_33098 = G__33171;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32979,map__32979__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__6503__auto__)){
var f = temp__6503__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args33174 = [];
var len__22773__auto___33177 = arguments.length;
var i__22774__auto___33178 = (0);
while(true){
if((i__22774__auto___33178 < len__22773__auto___33177)){
args33174.push((arguments[i__22774__auto___33178]));

var G__33179 = (i__22774__auto___33178 + (1));
i__22774__auto___33178 = G__33179;
continue;
} else {
}
break;
}

var G__33176 = args33174.length;
switch (G__33176) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33174.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args33181 = [];
var len__22773__auto___33184 = arguments.length;
var i__22774__auto___33185 = (0);
while(true){
if((i__22774__auto___33185 < len__22773__auto___33184)){
args33181.push((arguments[i__22774__auto___33185]));

var G__33186 = (i__22774__auto___33185 + (1));
i__22774__auto___33185 = G__33186;
continue;
} else {
}
break;
}

var G__33183 = args33181.length;
switch (G__33183) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33181.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args33190 = [];
var len__22773__auto___33194 = arguments.length;
var i__22774__auto___33195 = (0);
while(true){
if((i__22774__auto___33195 < len__22773__auto___33194)){
args33190.push((arguments[i__22774__auto___33195]));

var G__33196 = (i__22774__auto___33195 + (1));
i__22774__auto___33195 = G__33196;
continue;
} else {
}
break;
}

var G__33192 = args33190.length;
switch (G__33192) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33190.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__33193 = owner.refs;
var G__33193__$1 = (((G__33193 == null))?null:(G__33193[name]));
if((G__33193__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__33193__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__33199 = owner.refs;
if((G__33199 == null)){
return null;
} else {
return goog.object.get(G__33199,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args33200 = [];
var len__22773__auto___33203 = arguments.length;
var i__22774__auto___33204 = (0);
while(true){
if((i__22774__auto___33204 < len__22773__auto___33203)){
args33200.push((arguments[i__22774__auto___33204]));

var G__33205 = (i__22774__auto___33204 + (1));
i__22774__auto___33204 = G__33205;
continue;
} else {
}
break;
}

var G__33202 = args33200.length;
switch (G__33202) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33200.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args33207 = [];
var len__22773__auto___33210 = arguments.length;
var i__22774__auto___33211 = (0);
while(true){
if((i__22774__auto___33211 < len__22773__auto___33210)){
args33207.push((arguments[i__22774__auto___33211]));

var G__33212 = (i__22774__auto___33211 + (1));
i__22774__auto___33211 = G__33212;
continue;
} else {
}
break;
}

var G__33209 = args33207.length;
switch (G__33209) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33207.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args33214 = [];
var len__22773__auto___33217 = arguments.length;
var i__22774__auto___33218 = (0);
while(true){
if((i__22774__auto___33218 < len__22773__auto___33217)){
args33214.push((arguments[i__22774__auto___33218]));

var G__33219 = (i__22774__auto___33218 + (1));
i__22774__auto___33218 = G__33219;
continue;
} else {
}
break;
}

var G__33216 = args33214.length;
switch (G__33216) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33214.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args33221 = [];
var len__22773__auto___33224 = arguments.length;
var i__22774__auto___33225 = (0);
while(true){
if((i__22774__auto___33225 < len__22773__auto___33224)){
args33221.push((arguments[i__22774__auto___33225]));

var G__33226 = (i__22774__auto___33225 + (1));
i__22774__auto___33225 = G__33226;
continue;
} else {
}
break;
}

var G__33223 = args33221.length;
switch (G__33223) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33221.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args33228 = [];
var len__22773__auto___33231 = arguments.length;
var i__22774__auto___33232 = (0);
while(true){
if((i__22774__auto___33232 < len__22773__auto___33231)){
args33228.push((arguments[i__22774__auto___33232]));

var G__33233 = (i__22774__auto___33232 + (1));
i__22774__auto___33232 = G__33233;
continue;
} else {
}
break;
}

var G__33230 = args33228.length;
switch (G__33230) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33228.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1471181951409