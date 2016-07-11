// Compiled by ClojureScript 1.9.89 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('goog.crypt');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.crypt.Cbc');
goog.require('goog.crypt.base64');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.next');
goog.require('goog.crypt.Aes');
cljs.core.enable_console_print_BANG_.call(null);
cloudxmark.core.init_vector = goog.crypt.hexToByteArray("3ea1bae20d97b4a0b422da8b259f0c8c");
cloudxmark.core.key_bytes = goog.crypt.hexToByteArray("5zal214336bja15b716e0335341e1ba7");
cloudxmark.core.aes = (new goog.crypt.Aes(cloudxmark.core.key_bytes));
cloudxmark.core.cbc = (new goog.crypt.Cbc(cloudxmark.core.aes));
cloudxmark.core.enc_str = (function cloudxmark$core$enc_str(encoded){
var bytes = goog.crypt.stringToByteArray(encoded);
var tmp_len = cljs.core.rem.call(null,(- cljs.core.count.call(null,bytes)),(16));
var pad_len = (((tmp_len < (0)))?((16) + tmp_len):tmp_len);
var pad_str = clojure.string.join.call(null,cljs.core.repeat.call(null,pad_len," "));
var pad_bytes = goog.crypt.stringToByteArray(pad_str);
var used_bytes = bytes.concat(pad_bytes);
var enc_bytes = cloudxmark.core.cbc.encrypt(used_bytes,cloudxmark.core.init_vector);
return goog.crypt.base64.encodeByteArray(enc_bytes);
});
cloudxmark.core.dec_str = (function cloudxmark$core$dec_str(decoded){
var bytes = goog.crypt.base64.decodeStringToByteArray(decoded);
var dec_bytes = cloudxmark.core.cbc.decrypt(bytes,cloudxmark.core.init_vector);
return goog.crypt.byteArrayToString(dec_bytes);
});
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args27448 = [];
var len__22617__auto___27451 = arguments.length;
var i__22618__auto___27452 = (0);
while(true){
if((i__22618__auto___27452 < len__22617__auto___27451)){
args27448.push((arguments[i__22618__auto___27452]));

var G__27453 = (i__22618__auto___27452 + (1));
i__22618__auto___27452 = G__27453;
continue;
} else {
}
break;
}

var G__27450 = args27448.length;
switch (G__27450) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27448.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__27446_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__27446_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__27447_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__27447_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__27455,_,p__27456){
var map__27457 = p__27455;
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var env = map__27457__$1;
var state = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__27458 = p__27456;
var map__27458__$1 = ((((!((map__27458 == null)))?((((map__27458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27458):map__27458);
var query_ver = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__27461 = lst;
var map__27461__$1 = ((((!((map__27461 == null)))?((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var lsts = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user)].join(''));

if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_27463 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_27463);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__27464,_,p__27465){
var map__27466 = p__27464;
var map__27466__$1 = ((((!((map__27466 == null)))?((((map__27466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27466):map__27466);
var env = map__27466__$1;
var state = cljs.core.get.call(null,map__27466__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27467 = p__27465;
var map__27467__$1 = ((((!((map__27467 == null)))?((((map__27467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27467):map__27467);
var status = map__27467__$1;
var id = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27466,map__27466__$1,env,state,map__27467,map__27467__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__27466,map__27466__$1,env,state,map__27467,map__27467__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__27470,_,p__27471){
var map__27472 = p__27470;
var map__27472__$1 = ((((!((map__27472 == null)))?((((map__27472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27472):map__27472);
var env = map__27472__$1;
var state = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27473 = p__27471;
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var path = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27472,map__27472__$1,env,state,map__27473,map__27473__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__27472,map__27472__$1,env,state,map__27473,map__27473__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__27476,_,p__27477){
var map__27478 = p__27476;
var map__27478__$1 = ((((!((map__27478 == null)))?((((map__27478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27478):map__27478);
var env = map__27478__$1;
var state = cljs.core.get.call(null,map__27478__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27479 = p__27477;
var map__27479__$1 = ((((!((map__27479 == null)))?((((map__27479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27479):map__27479);
var data_map = map__27479__$1;
var lst_idx = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27478,map__27478__$1,env,state,map__27479,map__27479__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lst = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var orig_name = cljs.core.get_in.call(null,lst,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",item_idx,"name"], null));
cljs.core.println.call(null,[cljs.core.str("data-map in set-item-col:"),cljs.core.str(data_map),cljs.core.str("lst-id:"),cljs.core.str(lst_id)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx,"items",item_idx,col_name], null),value);

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__27478,map__27478__$1,env,state,map__27479,map__27479__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__27482,_,p__27483){
var map__27484 = p__27482;
var map__27484__$1 = ((((!((map__27484 == null)))?((((map__27484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27484):map__27484);
var env = map__27484__$1;
var state = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27485 = p__27483;
var map__27485__$1 = ((((!((map__27485 == null)))?((((map__27485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);
var field_id = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27484,map__27484__$1,env,state,map__27485,map__27485__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__27484,map__27484__$1,env,state,map__27485,map__27485__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__27488,_,p__27489){
var map__27490 = p__27488;
var map__27490__$1 = ((((!((map__27490 == null)))?((((map__27490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27490):map__27490);
var env = map__27490__$1;
var state = cljs.core.get.call(null,map__27490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27491 = p__27489;
var map__27491__$1 = ((((!((map__27491 == null)))?((((map__27491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27491):map__27491);
var data_map = map__27491__$1;
var user_id = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27490,map__27490__$1,env,state,map__27491,map__27491__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__27490,map__27490__$1,env,state,map__27491,map__27491__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__27494,_,p__27495){
var map__27496 = p__27494;
var map__27496__$1 = ((((!((map__27496 == null)))?((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var env = map__27496__$1;
var state = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27497 = p__27495;
var map__27497__$1 = ((((!((map__27497 == null)))?((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var data_map = map__27497__$1;
var user_id = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27496,map__27496__$1,env,state,map__27497,map__27497__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__27496,map__27496__$1,env,state,map__27497,map__27497__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__27500,_,p__27501){
var map__27502 = p__27500;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var env = map__27502__$1;
var state = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27503 = p__27501;
var map__27503__$1 = ((((!((map__27503 == null)))?((((map__27503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27503):map__27503);
var data_map = map__27503__$1;
var name = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27502,map__27502__$1,env,state,map__27503,map__27503__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__27502,map__27502__$1,env,state,map__27503,map__27503__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__27506,_,p__27507){
var map__27508 = p__27506;
var map__27508__$1 = ((((!((map__27508 == null)))?((((map__27508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27508):map__27508);
var env = map__27508__$1;
var state = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27509 = p__27507;
var map__27509__$1 = ((((!((map__27509 == null)))?((((map__27509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var data_map = map__27509__$1;
var name = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27508,map__27508__$1,env,state,map__27509,map__27509__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var curr = (function (){var or__21434__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__27508,map__27508__$1,env,state,map__27509,map__27509__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__27512,_,___$1){
var map__27513 = p__27512;
var map__27513__$1 = ((((!((map__27513 == null)))?((((map__27513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27513):map__27513);
var env = map__27513__$1;
var state = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27513,map__27513__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__27513,map__27513__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__27515,_,p__27516){
var map__27517 = p__27515;
var map__27517__$1 = ((((!((map__27517 == null)))?((((map__27517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27517):map__27517);
var env = map__27517__$1;
var state = cljs.core.get.call(null,map__27517__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27518 = p__27516;
var map__27518__$1 = ((((!((map__27518 == null)))?((((map__27518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);
var data_map = map__27518__$1;
var status = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27517,map__27517__$1,env,state,map__27518,map__27518__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
if(cljs.core.truth_((function (){var and__21422__auto__ = status;
if(cljs.core.truth_(and__21422__auto__)){
return status_id;
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__27517,map__27517__$1,env,state,map__27518,map__27518__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args27521 = [];
var len__22617__auto___27524 = arguments.length;
var i__22618__auto___27525 = (0);
while(true){
if((i__22618__auto___27525 < len__22617__auto___27524)){
args27521.push((arguments[i__22618__auto___27525]));

var G__27526 = (i__22618__auto___27525 + (1));
i__22618__auto___27525 = G__27526;
continue;
} else {
}
break;
}

var G__27523 = args27521.length;
switch (G__27523) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27521.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21434__auto__ = field_state;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22360__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_idx,item_idx,item,col_name){
var field_val = (function (){var or__21434__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_idx),cljs.core.str("-"),cljs.core.str(item_idx),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330)),(function (){var x__22360__auto__ = lst_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161)),(function (){var x__22360__auto__ = item_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22360__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(field_val))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__27528){
var map__27534 = p__27528;
var map__27534__$1 = ((((!((map__27534 == null)))?((((map__27534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27534):map__27534);
var info = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__27536 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__27536,(0),null);
var msg = cljs.core.nth.call(null,vec__27536,(1),null);
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)),om.util.force_children.call(null,msg));
});
cloudxmark.core.refresh_lists_button = (function cloudxmark$core$refresh_lists_button(comp,user_id,lst_ver){
return React.DOM.button({"type": "button", "key": "refreshButton", "onClick": (function (e){
if((user_id == null)){
return cljs.core.swap_BANG_.call(null,cloudxmark.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Permission denied"], null));
} else {
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(lst_ver + (1))], null)], null));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Refresh List"))));
});
cloudxmark.core.add_item_button = (function cloudxmark$core$add_item_button(comp){
return React.DOM.button({"type": "button", "key": "addItemButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_item_name = new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_item_value = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add Item"))));
});
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null);
var merge_QMARK_ = false;
var value = idx;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22360__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22360__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(idx)].join(''));
}
})});
});
cloudxmark.core.add_lst_button = (function cloudxmark$core$add_lst_button(comp){
return React.DOM.button({"type": "button", "key": "addLstButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_lst_name = new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_lst_description = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22360__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__27541 = lst;
var map__27541__$1 = ((((!((map__27541 == null)))?((((map__27541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27541):map__27541);
var lsts = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__27541,map__27541__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__27541,map__27541__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__27545 = lst;
var map__27545__$1 = ((((!((map__27545 == null)))?((((map__27545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27545):map__27545);
var status = cljs.core.get.call(null,map__27545__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__27551 = (function (){var G__27554 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27554) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__27551,(0),null);
var query_key = cljs.core.nth.call(null,vec__27551,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__27551,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__27551,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
})},om.util.force_children.call(null,"Log out"));
});
cloudxmark.core.login_button = (function cloudxmark$core$login_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare0 = cljs.core.println.call(null,"lst-map",om.next.props.call(null,comp));
var ver = new cljs.core.Keyword(null,"ver","ver",1683769565).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_ver = (ver + (1));
var user_id = new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486).cljs$core$IFn$_invoke$arity$1(lst_map);
var password = new cljs.core.Keyword(null,"password-field","password-field",-1811673649).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,user_id))?"User name required":((clojure.string.blank_QMARK_.call(null,password))?"Password required":null
));
var dontcare = cljs.core.println.call(null,"error is:",error);
if(clojure.string.blank_QMARK_.call(null,error)){
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22360__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22360__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22360__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Login"));
});
cloudxmark.core.add_user_button = (function cloudxmark$core$add_user_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_user_id = new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_password = new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,new_user_id))?"New user name required":((clojure.string.blank_QMARK_.call(null,new_password))?"New password required":null
));
if(clojure.string.blank_QMARK_.call(null,error)){
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22360__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22360__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Add User"));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26956__auto__ = this;
React.Component.apply(this__26956__auto__,arguments);

if(!((this__26956__auto__.initLocalState == null))){
this__26956__auto__.state = this__26956__auto__.initLocalState();
} else {
this__26956__auto__.state = {};
}

return this__26956__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x27560_27572 = cloudxmark.core.Lsts.prototype;
x27560_27572.componentWillUpdate = ((function (x27560_27572){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___27573 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___27574 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___27573,next_ident__26862__auto___27574)){
var idxr__26863__auto___27575 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___27575 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___27575),((function (idxr__26863__auto___27575,ident__26861__auto___27573,next_ident__26862__auto___27574,this__26857__auto__,x27560_27572){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___27573], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___27574], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___27575,ident__26861__auto___27573,next_ident__26862__auto___27574,this__26857__auto__,x27560_27572))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x27560_27572))
;

x27560_27572.shouldComponentUpdate = ((function (x27560_27572){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__27562 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__27562);
} else {
return G__27562;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26857__auto__),next_props__26858__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26857__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26857__auto__.state,"omcljs$state"),goog.object.get(next_state__26859__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26857__auto__.props.children,next_children__26860__auto__);
}
}
});})(x27560_27572))
;

x27560_27572.componentWillUnmount = ((function (x27560_27572){
return (function (){
var this__26857__auto__ = this;
var r__26868__auto__ = om.next.get_reconciler.call(null,this__26857__auto__);
var cfg__26869__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26868__auto__);
var st__26870__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
var indexer__26867__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26870__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26857__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26870__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26857__auto__);
} else {
}

if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x27560_27572))
;

x27560_27572.componentDidUpdate = ((function (x27560_27572){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x27560_27572))
;

x27560_27572.isMounted = ((function (x27560_27572){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27560_27572))
;

x27560_27572.componentWillMount = ((function (x27560_27572){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x27560_27572))
;

x27560_27572.render = ((function (x27560_27572){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_27563 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27564 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27565 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27566 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27567 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__27568 = lst;
var map__27568__$1 = ((((!((map__27568 == null)))?((((map__27568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27568):map__27568);
var lsts = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__27568__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27567;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27566;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27565;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27564;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27563;
}});})(x27560_27572))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x27570_27576 = cloudxmark.core.Lsts;
x27570_27576.om$next$IQueryParams$ = true;

x27570_27576.om$next$IQueryParams$params$arity$1 = ((function (x27570_27576){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x27570_27576))
;

x27570_27576.om$next$IQuery$ = true;

x27570_27576.om$next$IQuery$query$arity$1 = ((function (x27570_27576){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x27570_27576))
;


var x27571_27577 = cloudxmark.core.Lsts.prototype;
x27571_27577.om$next$IQueryParams$ = true;

x27571_27577.om$next$IQueryParams$params$arity$1 = ((function (x27571_27577){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x27571_27577))
;

x27571_27577.om$next$IQuery$ = true;

x27571_27577.om$next$IQuery$query$arity$1 = ((function (x27571_27577){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x27571_27577))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__27586,cb){
var map__27587 = p__27586;
var map__27587__$1 = ((((!((map__27587 == null)))?((((map__27587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);
var lst_search = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__27589 = om.next.query__GT_ast.call(null,lst_search);
var map__27589__$1 = ((((!((map__27589 == null)))?((((map__27589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27589):map__27589);
var vec__27590 = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__27590,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(lst_search__$1)].join(''));
var query_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(lst_search__$1);
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),query_params,cb], null));
} else {
return null;
}
});
});
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),new cljs.core.Keyword(null,"lst-login","lst-login",246498853),new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521)], null)], null));
cloudxmark.core.convert_json_lsts_result = (function cloudxmark$core$convert_json_lsts_result(result,ver,status_id){
var map__27598 = result;
var map__27598__$1 = ((((!((map__27598 == null)))?((((map__27598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var lsts = cljs.core.get.call(null,map__27598__$1,"lsts");
var user_id = cljs.core.get.call(null,map__27598__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__27598__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__27599 = json_status;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var info = cljs.core.get.call(null,map__27599__$1,"info");
var warn = cljs.core.get.call(null,map__27599__$1,"warn");
var error = cljs.core.get.call(null,map__27599__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
var decoded_lsts = cljs.core.map.call(null,((function (map__27598,map__27598__$1,lsts,user_id,is_admin,dontcare,json_status,map__27599,map__27599__$1,info,warn,error,status){
return (function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,((function (map__27598,map__27598__$1,lsts,user_id,is_admin,dontcare,json_status,map__27599,map__27599__$1,info,warn,error,status){
return (function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.dec_str.call(null,cljs.core.get.call(null,item,"value")));
});})(map__27598,map__27598__$1,lsts,user_id,is_admin,dontcare,json_status,map__27599,map__27599__$1,info,warn,error,status))
,cljs.core.get.call(null,lst,"items")));
});})(map__27598,map__27598__$1,lsts,user_id,is_admin,dontcare,json_status,map__27599,map__27599__$1,info,warn,error,status))
,lsts);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),decoded_lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__27604 = json_status;
var map__27604__$1 = ((((!((map__27604 == null)))?((((map__27604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27604):map__27604);
var info = cljs.core.get.call(null,map__27604__$1,"info");
var warn = cljs.core.get.call(null,map__27604__$1,"warn");
var error = cljs.core.get.call(null,map__27604__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_28493){
var state_val_28494 = (state_28493[(1)]);
if((state_val_28494 === (65))){
var state_28493__$1 = state_28493;
var statearr_28495_28622 = state_28493__$1;
(statearr_28495_28622[(2)] = false);

(statearr_28495_28622[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (70))){
var inst_28132 = (state_28493[(7)]);
var inst_28381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28496_28623 = state_28493__$1;
(statearr_28496_28623[(2)] = inst_28381);

(statearr_28496_28623[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (62))){
var inst_28131 = (state_28493[(8)]);
var inst_28421 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_28493__$1 = state_28493;
if(inst_28421){
var statearr_28497_28624 = state_28493__$1;
(statearr_28497_28624[(1)] = (77));

} else {
var statearr_28498_28625 = state_28493__$1;
(statearr_28498_28625[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (74))){
var inst_28388 = (state_28493[(9)]);
var state_28493__$1 = state_28493;
var statearr_28499_28626 = state_28493__$1;
(statearr_28499_28626[(2)] = inst_28388);

(statearr_28499_28626[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (7))){
var inst_28486 = (state_28493[(2)]);
var state_28493__$1 = (function (){var statearr_28500 = state_28493;
(statearr_28500[(10)] = inst_28486);

return statearr_28500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(93),c);
} else {
if((state_val_28494 === (59))){
var inst_28332 = (state_28493[(2)]);
var inst_28333 = cljs.core.get.call(null,inst_28332,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_28334 = cljs.core.get.call(null,inst_28332,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_28335 = cljs.core.get.call(null,inst_28332,new cljs.core.Keyword(null,"value","value",305978217));
var inst_28336 = cloudxmark.core.enc_str.call(null,inst_28335);
var inst_28337 = encodeURIComponent(inst_28333);
var inst_28338 = encodeURIComponent(inst_28334);
var inst_28339 = encodeURIComponent(inst_28336);
var inst_28340 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_28337),cljs.core.str("&name="),cljs.core.str(inst_28338),cljs.core.str("&value="),cljs.core.str(inst_28339)].join('');
var inst_28341 = cloudxmark.core.jsonp.call(null,inst_28340);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(60),inst_28341);
} else {
if((state_val_28494 === (86))){
var inst_28132 = (state_28493[(7)]);
var inst_28442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28501_28627 = state_28493__$1;
(statearr_28501_28627[(2)] = inst_28442);

(statearr_28501_28627[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (20))){
var inst_28484 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28502_28628 = state_28493__$1;
(statearr_28502_28628[(2)] = inst_28484);

(statearr_28502_28628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (72))){
var inst_28387 = (state_28493[(11)]);
var inst_28384 = (state_28493[(2)]);
var inst_28385 = cljs.core.get.call(null,inst_28384,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_28386 = cljs.core.get.call(null,inst_28384,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_28387__$1 = cljs.core.get.call(null,inst_28384,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_28388 = cljs.core.get.call(null,inst_28384,new cljs.core.Keyword(null,"value","value",305978217));
var inst_28389 = cljs.core._EQ_.call(null,inst_28387__$1,"value");
var state_28493__$1 = (function (){var statearr_28503 = state_28493;
(statearr_28503[(12)] = inst_28385);

(statearr_28503[(13)] = inst_28386);

(statearr_28503[(9)] = inst_28388);

(statearr_28503[(11)] = inst_28387__$1);

return statearr_28503;
})();
if(inst_28389){
var statearr_28504_28629 = state_28493__$1;
(statearr_28504_28629[(1)] = (73));

} else {
var statearr_28505_28630 = state_28493__$1;
(statearr_28505_28630[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (58))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28506_28631 = state_28493__$1;
(statearr_28506_28631[(2)] = inst_28132);

(statearr_28506_28631[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (60))){
var inst_28343 = (state_28493[(2)]);
var inst_28344 = cljs.core.js__GT_clj.call(null,inst_28343);
var inst_28345 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28344,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_28346 = cljs.core.List.EMPTY;
var inst_28347 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28348 = cljs.core._conj.call(null,inst_28346,inst_28347);
var inst_28349 = cljs.core.List.EMPTY;
var inst_28350 = cljs.core._conj.call(null,inst_28349,inst_28345);
var inst_28351 = cljs.core.concat.call(null,inst_28348,inst_28350);
var inst_28352 = cljs.core.seq.call(null,inst_28351);
var inst_28353 = cljs.core.sequence.call(null,inst_28352);
var inst_28354 = cljs.core.List.EMPTY;
var inst_28355 = cljs.core._conj.call(null,inst_28354,inst_28353);
var inst_28356 = cljs.core.concat.call(null,inst_28355);
var inst_28357 = cljs.core.seq.call(null,inst_28356);
var inst_28358 = cljs.core.sequence.call(null,inst_28357);
var inst_28359 = cljs.core.vec.call(null,inst_28358);
var inst_28360 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28359);
var state_28493__$1 = state_28493;
var statearr_28507_28632 = state_28493__$1;
(statearr_28507_28632[(2)] = inst_28360);

(statearr_28507_28632[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (27))){
var inst_28132 = (state_28493[(7)]);
var inst_28206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28508_28633 = state_28493__$1;
(statearr_28508_28633[(2)] = inst_28206);

(statearr_28508_28633[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (1))){
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(2),c);
} else {
if((state_val_28494 === (69))){
var inst_28376 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28509_28634 = state_28493__$1;
(statearr_28509_28634[(2)] = inst_28376);

(statearr_28509_28634[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (24))){
var state_28493__$1 = state_28493;
var statearr_28510_28635 = state_28493__$1;
(statearr_28510_28635[(2)] = true);

(statearr_28510_28635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (55))){
var state_28493__$1 = state_28493;
var statearr_28511_28636 = state_28493__$1;
(statearr_28511_28636[(2)] = false);

(statearr_28511_28636[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (85))){
var inst_28437 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28512_28637 = state_28493__$1;
(statearr_28512_28637[(2)] = inst_28437);

(statearr_28512_28637[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (39))){
var state_28493__$1 = state_28493;
var statearr_28513_28638 = state_28493__$1;
(statearr_28513_28638[(2)] = false);

(statearr_28513_28638[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (88))){
var inst_28445 = (state_28493[(2)]);
var inst_28446 = cljs.core.get.call(null,inst_28445,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_28447 = cljs.core.get.call(null,inst_28445,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_28448 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_28493__$1 = (function (){var statearr_28514 = state_28493;
(statearr_28514[(14)] = inst_28446);

(statearr_28514[(15)] = inst_28447);

return statearr_28514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(89),inst_28448);
} else {
if((state_val_28494 === (46))){
var inst_28283 = (state_28493[(2)]);
var inst_28284 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_28285 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_28286 = encodeURIComponent(inst_28284);
var inst_28287 = encodeURIComponent(inst_28285);
var inst_28288 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_28286),cljs.core.str("&desc="),cljs.core.str(inst_28287)].join('');
var inst_28289 = cloudxmark.core.jsonp.call(null,inst_28288);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(47),inst_28289);
} else {
if((state_val_28494 === (4))){
var inst_28491 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28493__$1,inst_28491);
} else {
if((state_val_28494 === (77))){
var inst_28132 = (state_28493[(7)]);
var inst_28424 = [cljs.core.str("lst query data:"),cljs.core.str(inst_28132)].join('');
var inst_28425 = cljs.core.println.call(null,inst_28424);
var inst_28427 = (inst_28132 == null);
var inst_28428 = cljs.core.not.call(null,inst_28427);
var state_28493__$1 = (function (){var statearr_28515 = state_28493;
(statearr_28515[(16)] = inst_28425);

return statearr_28515;
})();
if(inst_28428){
var statearr_28516_28639 = state_28493__$1;
(statearr_28516_28639[(1)] = (80));

} else {
var statearr_28517_28640 = state_28493__$1;
(statearr_28517_28640[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (54))){
var state_28493__$1 = state_28493;
var statearr_28518_28641 = state_28493__$1;
(statearr_28518_28641[(2)] = true);

(statearr_28518_28641[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (92))){
var inst_28472 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28519_28642 = state_28493__$1;
(statearr_28519_28642[(2)] = inst_28472);

(statearr_28519_28642[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (15))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28520_28643 = state_28493__$1;
(statearr_28520_28643[(2)] = inst_28132);

(statearr_28520_28643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (48))){
var inst_28132 = (state_28493[(7)]);
var inst_28314 = (inst_28132 == null);
var inst_28315 = cljs.core.not.call(null,inst_28314);
var state_28493__$1 = state_28493;
if(inst_28315){
var statearr_28521_28644 = state_28493__$1;
(statearr_28521_28644[(1)] = (51));

} else {
var statearr_28522_28645 = state_28493__$1;
(statearr_28522_28645[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (50))){
var inst_28478 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28523_28646 = state_28493__$1;
(statearr_28523_28646[(2)] = inst_28478);

(statearr_28523_28646[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (75))){
var inst_28385 = (state_28493[(12)]);
var inst_28386 = (state_28493[(13)]);
var inst_28387 = (state_28493[(11)]);
var inst_28394 = (state_28493[(2)]);
var inst_28395 = encodeURIComponent(inst_28385);
var inst_28396 = encodeURIComponent(inst_28386);
var inst_28397 = encodeURIComponent(inst_28387);
var inst_28398 = encodeURIComponent(inst_28394);
var inst_28399 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_28395),cljs.core.str("&orig-name="),cljs.core.str(inst_28396),cljs.core.str("&col-name="),cljs.core.str(inst_28397),cljs.core.str("&value="),cljs.core.str(inst_28398)].join('');
var inst_28400 = cloudxmark.core.jsonp.call(null,inst_28399);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(76),inst_28400);
} else {
if((state_val_28494 === (21))){
var inst_28132 = (state_28493[(7)]);
var inst_28194 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28195 = (inst_28194 & (64));
var inst_28196 = inst_28132.cljs$core$ISeq$;
var inst_28197 = (inst_28195) || (inst_28196);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28197)){
var statearr_28524_28647 = state_28493__$1;
(statearr_28524_28647[(1)] = (24));

} else {
var statearr_28525_28648 = state_28493__$1;
(statearr_28525_28648[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (31))){
var inst_28240 = cloudxmark.core.jsonp.call(null,"/logout");
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(34),inst_28240);
} else {
if((state_val_28494 === (32))){
var inst_28131 = (state_28493[(8)]);
var inst_28261 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_28493__$1 = state_28493;
if(inst_28261){
var statearr_28526_28649 = state_28493__$1;
(statearr_28526_28649[(1)] = (35));

} else {
var statearr_28527_28650 = state_28493__$1;
(statearr_28527_28650[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (40))){
var inst_28278 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28278)){
var statearr_28528_28651 = state_28493__$1;
(statearr_28528_28651[(1)] = (44));

} else {
var statearr_28529_28652 = state_28493__$1;
(statearr_28529_28652[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (91))){
var state_28493__$1 = state_28493;
var statearr_28530_28653 = state_28493__$1;
(statearr_28530_28653[(2)] = null);

(statearr_28530_28653[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (56))){
var inst_28324 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28531_28654 = state_28493__$1;
(statearr_28531_28654[(2)] = inst_28324);

(statearr_28531_28654[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (33))){
var inst_28482 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28532_28655 = state_28493__$1;
(statearr_28532_28655[(2)] = inst_28482);

(statearr_28532_28655[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (13))){
var inst_28150 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28533_28656 = state_28493__$1;
(statearr_28533_28656[(2)] = inst_28150);

(statearr_28533_28656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (22))){
var state_28493__$1 = state_28493;
var statearr_28534_28657 = state_28493__$1;
(statearr_28534_28657[(2)] = false);

(statearr_28534_28657[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (90))){
var state_28493__$1 = state_28493;
var statearr_28535_28658 = state_28493__$1;
(statearr_28535_28658[(2)] = null);

(statearr_28535_28658[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (36))){
var inst_28131 = (state_28493[(8)]);
var inst_28310 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_28493__$1 = state_28493;
if(inst_28310){
var statearr_28536_28659 = state_28493__$1;
(statearr_28536_28659[(1)] = (48));

} else {
var statearr_28537_28660 = state_28493__$1;
(statearr_28537_28660[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (41))){
var state_28493__$1 = state_28493;
var statearr_28538_28661 = state_28493__$1;
(statearr_28538_28661[(2)] = true);

(statearr_28538_28661[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (89))){
var inst_28447 = (state_28493[(15)]);
var inst_28450 = (state_28493[(2)]);
var inst_28451 = cljs.core.js__GT_clj.call(null,inst_28450);
var inst_28452 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28451,inst_28447,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_28453 = cljs.core.List.EMPTY;
var inst_28454 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28455 = cljs.core._conj.call(null,inst_28453,inst_28454);
var inst_28456 = cljs.core.List.EMPTY;
var inst_28457 = cljs.core._conj.call(null,inst_28456,inst_28452);
var inst_28458 = cljs.core.concat.call(null,inst_28455,inst_28457);
var inst_28459 = cljs.core.seq.call(null,inst_28458);
var inst_28460 = cljs.core.sequence.call(null,inst_28459);
var inst_28461 = cljs.core.List.EMPTY;
var inst_28462 = cljs.core._conj.call(null,inst_28461,inst_28460);
var inst_28463 = cljs.core.concat.call(null,inst_28462);
var inst_28464 = cljs.core.seq.call(null,inst_28463);
var inst_28465 = cljs.core.sequence.call(null,inst_28464);
var inst_28466 = cljs.core.vec.call(null,inst_28465);
var inst_28467 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28466);
var state_28493__$1 = state_28493;
var statearr_28539_28662 = state_28493__$1;
(statearr_28539_28662[(2)] = inst_28467);

(statearr_28539_28662[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (43))){
var inst_28275 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28540_28663 = state_28493__$1;
(statearr_28540_28663[(2)] = inst_28275);

(statearr_28540_28663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (61))){
var inst_28132 = (state_28493[(7)]);
var inst_28366 = (inst_28132 == null);
var inst_28367 = cljs.core.not.call(null,inst_28366);
var state_28493__$1 = state_28493;
if(inst_28367){
var statearr_28541_28664 = state_28493__$1;
(statearr_28541_28664[(1)] = (64));

} else {
var statearr_28542_28665 = state_28493__$1;
(statearr_28542_28665[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (29))){
var inst_28209 = (state_28493[(2)]);
var inst_28210 = cljs.core.get.call(null,inst_28209,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_28211 = cljs.core.get.call(null,inst_28209,new cljs.core.Keyword(null,"password","password",417022471));
var inst_28212 = cljs.core.get.call(null,inst_28209,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_28213 = cloudxmark.core.enc_str.call(null,inst_28211);
var inst_28214 = encodeURIComponent(inst_28210);
var inst_28215 = encodeURIComponent(inst_28213);
var inst_28216 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_28214),cljs.core.str("&pass="),cljs.core.str(inst_28215)].join('');
var inst_28217 = cloudxmark.core.jsonp.call(null,inst_28216);
var state_28493__$1 = (function (){var statearr_28543 = state_28493;
(statearr_28543[(17)] = inst_28212);

return statearr_28543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(30),inst_28217);
} else {
if((state_val_28494 === (44))){
var inst_28132 = (state_28493[(7)]);
var inst_28280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28544_28666 = state_28493__$1;
(statearr_28544_28666[(2)] = inst_28280);

(statearr_28544_28666[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (93))){
var inst_28488 = (state_28493[(2)]);
var inst_28126 = inst_28488;
var state_28493__$1 = (function (){var statearr_28545 = state_28493;
(statearr_28545[(18)] = inst_28126);

return statearr_28545;
})();
var statearr_28546_28667 = state_28493__$1;
(statearr_28546_28667[(2)] = null);

(statearr_28546_28667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (6))){
var inst_28131 = (state_28493[(8)]);
var inst_28187 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_28493__$1 = state_28493;
if(inst_28187){
var statearr_28547_28668 = state_28493__$1;
(statearr_28547_28668[(1)] = (18));

} else {
var statearr_28548_28669 = state_28493__$1;
(statearr_28548_28669[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (28))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28549_28670 = state_28493__$1;
(statearr_28549_28670[(2)] = inst_28132);

(statearr_28549_28670[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (64))){
var inst_28132 = (state_28493[(7)]);
var inst_28369 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28370 = (inst_28369 & (64));
var inst_28371 = inst_28132.cljs$core$ISeq$;
var inst_28372 = (inst_28370) || (inst_28371);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28372)){
var statearr_28550_28671 = state_28493__$1;
(statearr_28550_28671[(1)] = (67));

} else {
var statearr_28551_28672 = state_28493__$1;
(statearr_28551_28672[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (51))){
var inst_28132 = (state_28493[(7)]);
var inst_28317 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28318 = (inst_28317 & (64));
var inst_28319 = inst_28132.cljs$core$ISeq$;
var inst_28320 = (inst_28318) || (inst_28319);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28320)){
var statearr_28552_28673 = state_28493__$1;
(statearr_28552_28673[(1)] = (54));

} else {
var statearr_28553_28674 = state_28493__$1;
(statearr_28553_28674[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (25))){
var state_28493__$1 = state_28493;
var statearr_28554_28675 = state_28493__$1;
(statearr_28554_28675[(2)] = false);

(statearr_28554_28675[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (34))){
var inst_28242 = (state_28493[(2)]);
var inst_28243 = cljs.core.js__GT_clj.call(null,inst_28242);
var inst_28244 = cloudxmark.core.convert_json_status.call(null,inst_28243,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_28245 = cljs.core.List.EMPTY;
var inst_28246 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_28247 = cljs.core._conj.call(null,inst_28245,inst_28246);
var inst_28248 = cljs.core.List.EMPTY;
var inst_28249 = cljs.core._conj.call(null,inst_28248,inst_28244);
var inst_28250 = cljs.core.concat.call(null,inst_28247,inst_28249);
var inst_28251 = cljs.core.seq.call(null,inst_28250);
var inst_28252 = cljs.core.sequence.call(null,inst_28251);
var inst_28253 = cljs.core.List.EMPTY;
var inst_28254 = cljs.core._conj.call(null,inst_28253,inst_28252);
var inst_28255 = cljs.core.concat.call(null,inst_28254);
var inst_28256 = cljs.core.seq.call(null,inst_28255);
var inst_28257 = cljs.core.sequence.call(null,inst_28256);
var inst_28258 = cljs.core.vec.call(null,inst_28257);
var inst_28259 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28258);
var state_28493__$1 = state_28493;
var statearr_28555_28676 = state_28493__$1;
(statearr_28555_28676[(2)] = inst_28259);

(statearr_28555_28676[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (17))){
var inst_28161 = (state_28493[(19)]);
var inst_28168 = (state_28493[(2)]);
var inst_28169 = cljs.core.js__GT_clj.call(null,inst_28168);
var inst_28170 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28169,inst_28161,new cljs.core.Keyword(null,"login","login",55217519));
var inst_28171 = cljs.core.List.EMPTY;
var inst_28172 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28173 = cljs.core._conj.call(null,inst_28171,inst_28172);
var inst_28174 = cljs.core.List.EMPTY;
var inst_28175 = cljs.core._conj.call(null,inst_28174,inst_28170);
var inst_28176 = cljs.core.concat.call(null,inst_28173,inst_28175);
var inst_28177 = cljs.core.seq.call(null,inst_28176);
var inst_28178 = cljs.core.sequence.call(null,inst_28177);
var inst_28179 = cljs.core.List.EMPTY;
var inst_28180 = cljs.core._conj.call(null,inst_28179,inst_28178);
var inst_28181 = cljs.core.concat.call(null,inst_28180);
var inst_28182 = cljs.core.seq.call(null,inst_28181);
var inst_28183 = cljs.core.sequence.call(null,inst_28182);
var inst_28184 = cljs.core.vec.call(null,inst_28183);
var inst_28185 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28184);
var state_28493__$1 = state_28493;
var statearr_28556_28677 = state_28493__$1;
(statearr_28556_28677[(2)] = inst_28185);

(statearr_28556_28677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (3))){
var inst_28126 = (state_28493[(18)]);
var inst_28131 = (state_28493[(8)]);
var inst_28131__$1 = cljs.core.nth.call(null,inst_28126,(0),null);
var inst_28132 = cljs.core.nth.call(null,inst_28126,(1),null);
var inst_28133 = cljs.core.nth.call(null,inst_28126,(2),null);
var inst_28134 = cljs.core._EQ_.call(null,inst_28131__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_28493__$1 = (function (){var statearr_28557 = state_28493;
(statearr_28557[(7)] = inst_28132);

(statearr_28557[(8)] = inst_28131__$1);

(statearr_28557[(20)] = inst_28133);

return statearr_28557;
})();
if(inst_28134){
var statearr_28558_28678 = state_28493__$1;
(statearr_28558_28678[(1)] = (5));

} else {
var statearr_28559_28679 = state_28493__$1;
(statearr_28559_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (12))){
var state_28493__$1 = state_28493;
var statearr_28560_28680 = state_28493__$1;
(statearr_28560_28680[(2)] = false);

(statearr_28560_28680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (2))){
var inst_28122 = (state_28493[(2)]);
var inst_28123 = cljs.core.nth.call(null,inst_28122,(0),null);
var inst_28124 = cljs.core.nth.call(null,inst_28122,(1),null);
var inst_28125 = cljs.core.nth.call(null,inst_28122,(2),null);
var inst_28126 = inst_28122;
var state_28493__$1 = (function (){var statearr_28561 = state_28493;
(statearr_28561[(21)] = inst_28123);

(statearr_28561[(18)] = inst_28126);

(statearr_28561[(22)] = inst_28124);

(statearr_28561[(23)] = inst_28125);

return statearr_28561;
})();
var statearr_28562_28681 = state_28493__$1;
(statearr_28562_28681[(2)] = null);

(statearr_28562_28681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (66))){
var inst_28379 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28379)){
var statearr_28563_28682 = state_28493__$1;
(statearr_28563_28682[(1)] = (70));

} else {
var statearr_28564_28683 = state_28493__$1;
(statearr_28564_28683[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (23))){
var inst_28204 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28204)){
var statearr_28565_28684 = state_28493__$1;
(statearr_28565_28684[(1)] = (27));

} else {
var statearr_28566_28685 = state_28493__$1;
(statearr_28566_28685[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (47))){
var inst_28291 = (state_28493[(2)]);
var inst_28292 = cljs.core.js__GT_clj.call(null,inst_28291);
var inst_28293 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28292,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_28294 = cljs.core.List.EMPTY;
var inst_28295 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28296 = cljs.core._conj.call(null,inst_28294,inst_28295);
var inst_28297 = cljs.core.List.EMPTY;
var inst_28298 = cljs.core._conj.call(null,inst_28297,inst_28293);
var inst_28299 = cljs.core.concat.call(null,inst_28296,inst_28298);
var inst_28300 = cljs.core.seq.call(null,inst_28299);
var inst_28301 = cljs.core.sequence.call(null,inst_28300);
var inst_28302 = cljs.core.List.EMPTY;
var inst_28303 = cljs.core._conj.call(null,inst_28302,inst_28301);
var inst_28304 = cljs.core.concat.call(null,inst_28303);
var inst_28305 = cljs.core.seq.call(null,inst_28304);
var inst_28306 = cljs.core.sequence.call(null,inst_28305);
var inst_28307 = cljs.core.vec.call(null,inst_28306);
var inst_28308 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28307);
var state_28493__$1 = state_28493;
var statearr_28567_28686 = state_28493__$1;
(statearr_28567_28686[(2)] = inst_28308);

(statearr_28567_28686[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (35))){
var inst_28132 = (state_28493[(7)]);
var inst_28265 = (inst_28132 == null);
var inst_28266 = cljs.core.not.call(null,inst_28265);
var state_28493__$1 = state_28493;
if(inst_28266){
var statearr_28568_28687 = state_28493__$1;
(statearr_28568_28687[(1)] = (38));

} else {
var statearr_28569_28688 = state_28493__$1;
(statearr_28569_28688[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (82))){
var inst_28440 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28440)){
var statearr_28570_28689 = state_28493__$1;
(statearr_28570_28689[(1)] = (86));

} else {
var statearr_28571_28690 = state_28493__$1;
(statearr_28571_28690[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (76))){
var inst_28402 = (state_28493[(2)]);
var inst_28403 = cljs.core.js__GT_clj.call(null,inst_28402);
var inst_28404 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28403,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_28405 = cljs.core.List.EMPTY;
var inst_28406 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28407 = cljs.core._conj.call(null,inst_28405,inst_28406);
var inst_28408 = cljs.core.List.EMPTY;
var inst_28409 = cljs.core._conj.call(null,inst_28408,inst_28404);
var inst_28410 = cljs.core.concat.call(null,inst_28407,inst_28409);
var inst_28411 = cljs.core.seq.call(null,inst_28410);
var inst_28412 = cljs.core.sequence.call(null,inst_28411);
var inst_28413 = cljs.core.List.EMPTY;
var inst_28414 = cljs.core._conj.call(null,inst_28413,inst_28412);
var inst_28415 = cljs.core.concat.call(null,inst_28414);
var inst_28416 = cljs.core.seq.call(null,inst_28415);
var inst_28417 = cljs.core.sequence.call(null,inst_28416);
var inst_28418 = cljs.core.vec.call(null,inst_28417);
var inst_28419 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28418);
var state_28493__$1 = state_28493;
var statearr_28572_28691 = state_28493__$1;
(statearr_28572_28691[(2)] = inst_28419);

(statearr_28572_28691[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (19))){
var inst_28131 = (state_28493[(8)]);
var inst_28238 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_28493__$1 = state_28493;
if(inst_28238){
var statearr_28573_28692 = state_28493__$1;
(statearr_28573_28692[(1)] = (31));

} else {
var statearr_28574_28693 = state_28493__$1;
(statearr_28574_28693[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (57))){
var inst_28132 = (state_28493[(7)]);
var inst_28329 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28575_28694 = state_28493__$1;
(statearr_28575_28694[(2)] = inst_28329);

(statearr_28575_28694[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (68))){
var state_28493__$1 = state_28493;
var statearr_28576_28695 = state_28493__$1;
(statearr_28576_28695[(2)] = false);

(statearr_28576_28695[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (11))){
var state_28493__$1 = state_28493;
var statearr_28577_28696 = state_28493__$1;
(statearr_28577_28696[(2)] = true);

(statearr_28577_28696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (9))){
var state_28493__$1 = state_28493;
var statearr_28578_28697 = state_28493__$1;
(statearr_28578_28697[(2)] = false);

(statearr_28578_28697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (5))){
var inst_28132 = (state_28493[(7)]);
var inst_28137 = [cljs.core.str("lst login data:"),cljs.core.str(inst_28132)].join('');
var inst_28138 = cljs.core.println.call(null,inst_28137);
var inst_28140 = (inst_28132 == null);
var inst_28141 = cljs.core.not.call(null,inst_28140);
var state_28493__$1 = (function (){var statearr_28579 = state_28493;
(statearr_28579[(24)] = inst_28138);

return statearr_28579;
})();
if(inst_28141){
var statearr_28580_28698 = state_28493__$1;
(statearr_28580_28698[(1)] = (8));

} else {
var statearr_28581_28699 = state_28493__$1;
(statearr_28581_28699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (83))){
var state_28493__$1 = state_28493;
var statearr_28582_28700 = state_28493__$1;
(statearr_28582_28700[(2)] = true);

(statearr_28582_28700[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (14))){
var inst_28132 = (state_28493[(7)]);
var inst_28155 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28132);
var state_28493__$1 = state_28493;
var statearr_28583_28701 = state_28493__$1;
(statearr_28583_28701[(2)] = inst_28155);

(statearr_28583_28701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (45))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28584_28702 = state_28493__$1;
(statearr_28584_28702[(2)] = inst_28132);

(statearr_28584_28702[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (53))){
var inst_28327 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28327)){
var statearr_28585_28703 = state_28493__$1;
(statearr_28585_28703[(1)] = (57));

} else {
var statearr_28586_28704 = state_28493__$1;
(statearr_28586_28704[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (78))){
var state_28493__$1 = state_28493;
var statearr_28587_28705 = state_28493__$1;
(statearr_28587_28705[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (26))){
var inst_28201 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28589_28706 = state_28493__$1;
(statearr_28589_28706[(2)] = inst_28201);

(statearr_28589_28706[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (16))){
var inst_28158 = (state_28493[(2)]);
var inst_28159 = cljs.core.get.call(null,inst_28158,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_28160 = cljs.core.get.call(null,inst_28158,new cljs.core.Keyword(null,"password","password",417022471));
var inst_28161 = cljs.core.get.call(null,inst_28158,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_28162 = cloudxmark.core.enc_str.call(null,inst_28160);
var inst_28163 = encodeURIComponent(inst_28159);
var inst_28164 = encodeURIComponent(inst_28162);
var inst_28165 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_28163),cljs.core.str("&pass="),cljs.core.str(inst_28164)].join('');
var inst_28166 = cloudxmark.core.jsonp.call(null,inst_28165);
var state_28493__$1 = (function (){var statearr_28590 = state_28493;
(statearr_28590[(19)] = inst_28161);

return statearr_28590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28493__$1,(17),inst_28166);
} else {
if((state_val_28494 === (81))){
var state_28493__$1 = state_28493;
var statearr_28591_28707 = state_28493__$1;
(statearr_28591_28707[(2)] = false);

(statearr_28591_28707[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (79))){
var inst_28474 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28592_28708 = state_28493__$1;
(statearr_28592_28708[(2)] = inst_28474);

(statearr_28592_28708[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (38))){
var inst_28132 = (state_28493[(7)]);
var inst_28268 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28269 = (inst_28268 & (64));
var inst_28270 = inst_28132.cljs$core$ISeq$;
var inst_28271 = (inst_28269) || (inst_28270);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28271)){
var statearr_28593_28709 = state_28493__$1;
(statearr_28593_28709[(1)] = (41));

} else {
var statearr_28594_28710 = state_28493__$1;
(statearr_28594_28710[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (87))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28595_28711 = state_28493__$1;
(statearr_28595_28711[(2)] = inst_28132);

(statearr_28595_28711[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (30))){
var inst_28219 = (state_28493[(2)]);
var inst_28220 = cljs.core.js__GT_clj.call(null,inst_28219);
var inst_28221 = cloudxmark.core.convert_json_status.call(null,inst_28220,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_28222 = cljs.core.List.EMPTY;
var inst_28223 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_28224 = cljs.core._conj.call(null,inst_28222,inst_28223);
var inst_28225 = cljs.core.List.EMPTY;
var inst_28226 = cljs.core._conj.call(null,inst_28225,inst_28221);
var inst_28227 = cljs.core.concat.call(null,inst_28224,inst_28226);
var inst_28228 = cljs.core.seq.call(null,inst_28227);
var inst_28229 = cljs.core.sequence.call(null,inst_28228);
var inst_28230 = cljs.core.List.EMPTY;
var inst_28231 = cljs.core._conj.call(null,inst_28230,inst_28229);
var inst_28232 = cljs.core.concat.call(null,inst_28231);
var inst_28233 = cljs.core.seq.call(null,inst_28232);
var inst_28234 = cljs.core.sequence.call(null,inst_28233);
var inst_28235 = cljs.core.vec.call(null,inst_28234);
var inst_28236 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28235);
var state_28493__$1 = state_28493;
var statearr_28596_28712 = state_28493__$1;
(statearr_28596_28712[(2)] = inst_28236);

(statearr_28596_28712[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (73))){
var inst_28388 = (state_28493[(9)]);
var inst_28391 = cloudxmark.core.enc_str.call(null,inst_28388);
var state_28493__$1 = state_28493;
var statearr_28597_28713 = state_28493__$1;
(statearr_28597_28713[(2)] = inst_28391);

(statearr_28597_28713[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (10))){
var inst_28153 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28153)){
var statearr_28598_28714 = state_28493__$1;
(statearr_28598_28714[(1)] = (14));

} else {
var statearr_28599_28715 = state_28493__$1;
(statearr_28599_28715[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (18))){
var inst_28132 = (state_28493[(7)]);
var inst_28191 = (inst_28132 == null);
var inst_28192 = cljs.core.not.call(null,inst_28191);
var state_28493__$1 = state_28493;
if(inst_28192){
var statearr_28600_28716 = state_28493__$1;
(statearr_28600_28716[(1)] = (21));

} else {
var statearr_28601_28717 = state_28493__$1;
(statearr_28601_28717[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (52))){
var state_28493__$1 = state_28493;
var statearr_28602_28718 = state_28493__$1;
(statearr_28602_28718[(2)] = false);

(statearr_28602_28718[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (67))){
var state_28493__$1 = state_28493;
var statearr_28603_28719 = state_28493__$1;
(statearr_28603_28719[(2)] = true);

(statearr_28603_28719[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (71))){
var inst_28132 = (state_28493[(7)]);
var state_28493__$1 = state_28493;
var statearr_28604_28720 = state_28493__$1;
(statearr_28604_28720[(2)] = inst_28132);

(statearr_28604_28720[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (42))){
var state_28493__$1 = state_28493;
var statearr_28605_28721 = state_28493__$1;
(statearr_28605_28721[(2)] = false);

(statearr_28605_28721[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (80))){
var inst_28132 = (state_28493[(7)]);
var inst_28430 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28431 = (inst_28430 & (64));
var inst_28432 = inst_28132.cljs$core$ISeq$;
var inst_28433 = (inst_28431) || (inst_28432);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28433)){
var statearr_28606_28722 = state_28493__$1;
(statearr_28606_28722[(1)] = (83));

} else {
var statearr_28607_28723 = state_28493__$1;
(statearr_28607_28723[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (37))){
var inst_28480 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28608_28724 = state_28493__$1;
(statearr_28608_28724[(2)] = inst_28480);

(statearr_28608_28724[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (63))){
var inst_28476 = (state_28493[(2)]);
var state_28493__$1 = state_28493;
var statearr_28609_28725 = state_28493__$1;
(statearr_28609_28725[(2)] = inst_28476);

(statearr_28609_28725[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (8))){
var inst_28132 = (state_28493[(7)]);
var inst_28143 = inst_28132.cljs$lang$protocol_mask$partition0$;
var inst_28144 = (inst_28143 & (64));
var inst_28145 = inst_28132.cljs$core$ISeq$;
var inst_28146 = (inst_28144) || (inst_28145);
var state_28493__$1 = state_28493;
if(cljs.core.truth_(inst_28146)){
var statearr_28610_28726 = state_28493__$1;
(statearr_28610_28726[(1)] = (11));

} else {
var statearr_28611_28727 = state_28493__$1;
(statearr_28611_28727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (49))){
var inst_28131 = (state_28493[(8)]);
var inst_28362 = cljs.core._EQ_.call(null,inst_28131,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_28493__$1 = state_28493;
if(inst_28362){
var statearr_28612_28728 = state_28493__$1;
(statearr_28612_28728[(1)] = (61));

} else {
var statearr_28613_28729 = state_28493__$1;
(statearr_28613_28729[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28494 === (84))){
var state_28493__$1 = state_28493;
var statearr_28614_28730 = state_28493__$1;
(statearr_28614_28730[(2)] = false);

(statearr_28614_28730[(1)] = (85));


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
}
}
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_28618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28618[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_28618[(1)] = (1));

return statearr_28618;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_28493){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_28493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e28619){if((e28619 instanceof Object)){
var ex__26706__auto__ = e28619;
var statearr_28620_28731 = state_28493;
(statearr_28620_28731[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28732 = state_28493;
state_28493 = G__28732;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_28493){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_28493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_28621 = f__26726__auto__.call(null);
(statearr_28621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468212293071