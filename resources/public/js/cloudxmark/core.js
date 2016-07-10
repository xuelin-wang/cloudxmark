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
var args31052 = [];
var len__22617__auto___31055 = arguments.length;
var i__22618__auto___31056 = (0);
while(true){
if((i__22618__auto___31056 < len__22617__auto___31055)){
args31052.push((arguments[i__22618__auto___31056]));

var G__31057 = (i__22618__auto___31056 + (1));
i__22618__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var G__31054 = args31052.length;
switch (G__31054) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31052.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__31050_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31050_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__31051_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__31051_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__31059,_,p__31060){
var map__31061 = p__31059;
var map__31061__$1 = ((((!((map__31061 == null)))?((((map__31061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31061):map__31061);
var env = map__31061__$1;
var state = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__31062 = p__31060;
var map__31062__$1 = ((((!((map__31062 == null)))?((((map__31062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31062):map__31062);
var query_ver = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__31065 = lst;
var map__31065__$1 = ((((!((map__31065 == null)))?((((map__31065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);
var lsts = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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

var new_value_31067 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_31067);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__31068,_,p__31069){
var map__31070 = p__31068;
var map__31070__$1 = ((((!((map__31070 == null)))?((((map__31070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);
var env = map__31070__$1;
var state = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31071 = p__31069;
var map__31071__$1 = ((((!((map__31071 == null)))?((((map__31071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var status = map__31071__$1;
var id = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31070,map__31070__$1,env,state,map__31071,map__31071__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__31070,map__31070__$1,env,state,map__31071,map__31071__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__31074,_,p__31075){
var map__31076 = p__31074;
var map__31076__$1 = ((((!((map__31076 == null)))?((((map__31076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31076):map__31076);
var env = map__31076__$1;
var state = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31077 = p__31075;
var map__31077__$1 = ((((!((map__31077 == null)))?((((map__31077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var path = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31076,map__31076__$1,env,state,map__31077,map__31077__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__31076,map__31076__$1,env,state,map__31077,map__31077__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__31080,_,p__31081){
var map__31082 = p__31080;
var map__31082__$1 = ((((!((map__31082 == null)))?((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var env = map__31082__$1;
var state = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31083 = p__31081;
var map__31083__$1 = ((((!((map__31083 == null)))?((((map__31083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31083):map__31083);
var data_map = map__31083__$1;
var lst_idx = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31082,map__31082__$1,env,state,map__31083,map__31083__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lst = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var orig_name = cljs.core.get_in.call(null,lst,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",item_idx,"name"], null));
cljs.core.println.call(null,[cljs.core.str("data-map in set-item-col:"),cljs.core.str(data_map),cljs.core.str("lst-id:"),cljs.core.str(lst_id)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx,"items",item_idx,col_name], null),value);

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__31082,map__31082__$1,env,state,map__31083,map__31083__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__31086,_,p__31087){
var map__31088 = p__31086;
var map__31088__$1 = ((((!((map__31088 == null)))?((((map__31088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31088):map__31088);
var env = map__31088__$1;
var state = cljs.core.get.call(null,map__31088__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31089 = p__31087;
var map__31089__$1 = ((((!((map__31089 == null)))?((((map__31089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31089):map__31089);
var field_id = cljs.core.get.call(null,map__31089__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__31089__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31088,map__31088__$1,env,state,map__31089,map__31089__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__31088,map__31088__$1,env,state,map__31089,map__31089__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__31092,_,p__31093){
var map__31094 = p__31092;
var map__31094__$1 = ((((!((map__31094 == null)))?((((map__31094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31094):map__31094);
var env = map__31094__$1;
var state = cljs.core.get.call(null,map__31094__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31095 = p__31093;
var map__31095__$1 = ((((!((map__31095 == null)))?((((map__31095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var data_map = map__31095__$1;
var user_id = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31094,map__31094__$1,env,state,map__31095,map__31095__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__31094,map__31094__$1,env,state,map__31095,map__31095__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__31098,_,p__31099){
var map__31100 = p__31098;
var map__31100__$1 = ((((!((map__31100 == null)))?((((map__31100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31100):map__31100);
var env = map__31100__$1;
var state = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31101 = p__31099;
var map__31101__$1 = ((((!((map__31101 == null)))?((((map__31101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31101):map__31101);
var data_map = map__31101__$1;
var name = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31100,map__31100__$1,env,state,map__31101,map__31101__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__31100,map__31100__$1,env,state,map__31101,map__31101__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__31104,_,p__31105){
var map__31106 = p__31104;
var map__31106__$1 = ((((!((map__31106 == null)))?((((map__31106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);
var env = map__31106__$1;
var state = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31107 = p__31105;
var map__31107__$1 = ((((!((map__31107 == null)))?((((map__31107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31107):map__31107);
var data_map = map__31107__$1;
var name = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31106,map__31106__$1,env,state,map__31107,map__31107__$1,data_map,name,value){
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
});})(map__31106,map__31106__$1,env,state,map__31107,map__31107__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__31110,_,___$1){
var map__31111 = p__31110;
var map__31111__$1 = ((((!((map__31111 == null)))?((((map__31111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31111):map__31111);
var env = map__31111__$1;
var state = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31111,map__31111__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__31111,map__31111__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__31113,_,p__31114){
var map__31115 = p__31113;
var map__31115__$1 = ((((!((map__31115 == null)))?((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31115):map__31115);
var env = map__31115__$1;
var state = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31116 = p__31114;
var map__31116__$1 = ((((!((map__31116 == null)))?((((map__31116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var data_map = map__31116__$1;
var status = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var ver = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31115,map__31115__$1,env,state,map__31116,map__31116__$1,data_map,status,lsts,user_id,ver){
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

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__31115,map__31115__$1,env,state,map__31116,map__31116__$1,data_map,status,lsts,user_id,ver))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args31119 = [];
var len__22617__auto___31122 = arguments.length;
var i__22618__auto___31123 = (0);
while(true){
if((i__22618__auto___31123 < len__22617__auto___31122)){
args31119.push((arguments[i__22618__auto___31123]));

var G__31124 = (i__22618__auto___31123 + (1));
i__22618__auto___31123 = G__31124;
continue;
} else {
}
break;
}

var G__31121 = args31119.length;
switch (G__31121) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31119.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__31126){
var map__31132 = p__31126;
var map__31132__$1 = ((((!((map__31132 == null)))?((((map__31132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31132):map__31132);
var info = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__31134 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__31134,(0),null);
var msg = cljs.core.nth.call(null,vec__31134,(1),null);
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
var map__31139 = lst;
var map__31139__$1 = ((((!((map__31139 == null)))?((((map__31139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);
var lsts = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__31139,map__31139__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__31139,map__31139__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__31143 = lst;
var map__31143__$1 = ((((!((map__31143 == null)))?((((map__31143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31143):map__31143);
var status = cljs.core.get.call(null,map__31143__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__31149 = (function (){var G__31152 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31152) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__31149,(0),null);
var query_key = cljs.core.nth.call(null,vec__31149,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__31149,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__31149,elem_key,query_key))
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

var x31158_31170 = cloudxmark.core.Lsts.prototype;
x31158_31170.componentWillUpdate = ((function (x31158_31170){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___31171 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___31172 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___31171,next_ident__26862__auto___31172)){
var idxr__26863__auto___31173 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___31173 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___31173),((function (idxr__26863__auto___31173,ident__26861__auto___31171,next_ident__26862__auto___31172,this__26857__auto__,x31158_31170){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___31171], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___31172], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___31173,ident__26861__auto___31171,next_ident__26862__auto___31172,this__26857__auto__,x31158_31170))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x31158_31170))
;

x31158_31170.shouldComponentUpdate = ((function (x31158_31170){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__31160 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31160);
} else {
return G__31160;
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
});})(x31158_31170))
;

x31158_31170.componentWillUnmount = ((function (x31158_31170){
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
});})(x31158_31170))
;

x31158_31170.componentDidUpdate = ((function (x31158_31170){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x31158_31170))
;

x31158_31170.isMounted = ((function (x31158_31170){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31158_31170))
;

x31158_31170.componentWillMount = ((function (x31158_31170){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x31158_31170))
;

x31158_31170.render = ((function (x31158_31170){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_31161 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31162 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31163 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31164 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31165 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__31166 = lst;
var map__31166__$1 = ((((!((map__31166 == null)))?((((map__31166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);
var lsts = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31165;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31164;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31163;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31162;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31161;
}});})(x31158_31170))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x31168_31174 = cloudxmark.core.Lsts;
x31168_31174.om$next$IQueryParams$ = true;

x31168_31174.om$next$IQueryParams$params$arity$1 = ((function (x31168_31174){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x31168_31174))
;

x31168_31174.om$next$IQuery$ = true;

x31168_31174.om$next$IQuery$query$arity$1 = ((function (x31168_31174){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x31168_31174))
;


var x31169_31175 = cloudxmark.core.Lsts.prototype;
x31169_31175.om$next$IQueryParams$ = true;

x31169_31175.om$next$IQueryParams$params$arity$1 = ((function (x31169_31175){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x31169_31175))
;

x31169_31175.om$next$IQuery$ = true;

x31169_31175.om$next$IQuery$query$arity$1 = ((function (x31169_31175){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x31169_31175))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__31184,cb){
var map__31185 = p__31184;
var map__31185__$1 = ((((!((map__31185 == null)))?((((map__31185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);
var lst_search = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__31187 = om.next.query__GT_ast.call(null,lst_search);
var map__31187__$1 = ((((!((map__31187 == null)))?((((map__31187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31187):map__31187);
var vec__31188 = cljs.core.get.call(null,map__31187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__31188,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(lst_search__$1)].join(''));
var query_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(lst_search__$1);
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),query_params,cb], null));
} else {
return null;
}
});
});
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),new cljs.core.Keyword(null,"lst-login","lst-login",246498853),new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521)], null)], null));
cloudxmark.core.convert_json_lsts_result = (function cloudxmark$core$convert_json_lsts_result(result,ver,status_id){
var map__31196 = result;
var map__31196__$1 = ((((!((map__31196 == null)))?((((map__31196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31196):map__31196);
var lsts = cljs.core.get.call(null,map__31196__$1,"lsts");
var user_id = cljs.core.get.call(null,map__31196__$1,"user_id");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__31197 = json_status;
var map__31197__$1 = ((((!((map__31197 == null)))?((((map__31197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31197):map__31197);
var info = cljs.core.get.call(null,map__31197__$1,"info");
var warn = cljs.core.get.call(null,map__31197__$1,"warn");
var error = cljs.core.get.call(null,map__31197__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
var decoded_lsts = cljs.core.map.call(null,((function (map__31196,map__31196__$1,lsts,user_id,dontcare,json_status,map__31197,map__31197__$1,info,warn,error,status){
return (function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,((function (map__31196,map__31196__$1,lsts,user_id,dontcare,json_status,map__31197,map__31197__$1,info,warn,error,status){
return (function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.dec_str.call(null,cljs.core.get.call(null,item,"value")));
});})(map__31196,map__31196__$1,lsts,user_id,dontcare,json_status,map__31197,map__31197__$1,info,warn,error,status))
,cljs.core.get.call(null,lst,"items")));
});})(map__31196,map__31196__$1,lsts,user_id,dontcare,json_status,map__31197,map__31197__$1,info,warn,error,status))
,lsts);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),decoded_lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (65))){
var inst_31916 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32033_32156 = state_32031__$1;
(statearr_32033_32156[(2)] = inst_31916);

(statearr_32033_32156[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (70))){
var inst_31928 = (state_32031[(7)]);
var state_32031__$1 = state_32031;
var statearr_32034_32157 = state_32031__$1;
(statearr_32034_32157[(2)] = inst_31928);

(statearr_32034_32157[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (62))){
var inst_31919 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31919)){
var statearr_32035_32158 = state_32031__$1;
(statearr_32035_32158[(1)] = (66));

} else {
var statearr_32036_32159 = state_32031__$1;
(statearr_32036_32159[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (74))){
var state_32031__$1 = state_32031;
var statearr_32037_32160 = state_32031__$1;
(statearr_32037_32160[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (7))){
var inst_32024 = (state_32031[(2)]);
var state_32031__$1 = (function (){var statearr_32039 = state_32031;
(statearr_32039[(8)] = inst_32024);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(89),c);
} else {
if((state_val_32032 === (59))){
var inst_32016 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32040_32161 = state_32031__$1;
(statearr_32040_32161[(2)] = inst_32016);

(statearr_32040_32161[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (86))){
var state_32031__$1 = state_32031;
var statearr_32041_32162 = state_32031__$1;
(statearr_32041_32162[(2)] = null);

(statearr_32041_32162[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (20))){
var inst_32022 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32042_32163 = state_32031__$1;
(statearr_32042_32163[(2)] = inst_32022);

(statearr_32042_32163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (72))){
var inst_31942 = (state_32031[(2)]);
var inst_31943 = cljs.core.js__GT_clj.call(null,inst_31942);
var inst_31944 = cloudxmark.core.convert_json_lsts_result.call(null,inst_31943,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_31945 = cljs.core.List.EMPTY;
var inst_31946 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31947 = cljs.core._conj.call(null,inst_31945,inst_31946);
var inst_31948 = cljs.core.List.EMPTY;
var inst_31949 = cljs.core._conj.call(null,inst_31948,inst_31944);
var inst_31950 = cljs.core.concat.call(null,inst_31947,inst_31949);
var inst_31951 = cljs.core.seq.call(null,inst_31950);
var inst_31952 = cljs.core.sequence.call(null,inst_31951);
var inst_31953 = cljs.core.List.EMPTY;
var inst_31954 = cljs.core._conj.call(null,inst_31953,inst_31952);
var inst_31955 = cljs.core.concat.call(null,inst_31954);
var inst_31956 = cljs.core.seq.call(null,inst_31955);
var inst_31957 = cljs.core.sequence.call(null,inst_31956);
var inst_31958 = cljs.core.vec.call(null,inst_31957);
var inst_31959 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31958);
var state_32031__$1 = state_32031;
var statearr_32043_32164 = state_32031__$1;
(statearr_32043_32164[(2)] = inst_31959);

(statearr_32043_32164[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (58))){
var inst_31695 = (state_32031[(9)]);
var inst_31961 = cljs.core._EQ_.call(null,inst_31695,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_32031__$1 = state_32031;
if(inst_31961){
var statearr_32044_32165 = state_32031__$1;
(statearr_32044_32165[(1)] = (73));

} else {
var statearr_32045_32166 = state_32031__$1;
(statearr_32045_32166[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (60))){
var inst_31696 = (state_32031[(10)]);
var inst_31909 = inst_31696.cljs$lang$protocol_mask$partition0$;
var inst_31910 = (inst_31909 & (64));
var inst_31911 = inst_31696.cljs$core$ISeq$;
var inst_31912 = (inst_31910) || (inst_31911);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31912)){
var statearr_32046_32167 = state_32031__$1;
(statearr_32046_32167[(1)] = (63));

} else {
var statearr_32047_32168 = state_32031__$1;
(statearr_32047_32168[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (27))){
var inst_31770 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32048_32169 = state_32031__$1;
(statearr_32048_32169[(2)] = inst_31770);

(statearr_32048_32169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (1))){
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(2),c);
} else {
if((state_val_32032 === (69))){
var inst_31928 = (state_32031[(7)]);
var inst_31931 = cloudxmark.core.enc_str.call(null,inst_31928);
var state_32031__$1 = state_32031;
var statearr_32049_32170 = state_32031__$1;
(statearr_32049_32170[(2)] = inst_31931);

(statearr_32049_32170[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (24))){
var inst_31773 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31773)){
var statearr_32050_32171 = state_32031__$1;
(statearr_32050_32171[(1)] = (28));

} else {
var statearr_32051_32172 = state_32031__$1;
(statearr_32051_32172[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (55))){
var inst_31872 = (state_32031[(2)]);
var inst_31873 = cljs.core.get.call(null,inst_31872,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_31874 = cljs.core.get.call(null,inst_31872,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_31875 = cljs.core.get.call(null,inst_31872,new cljs.core.Keyword(null,"value","value",305978217));
var inst_31876 = cloudxmark.core.enc_str.call(null,inst_31875);
var inst_31877 = encodeURIComponent(inst_31873);
var inst_31878 = encodeURIComponent(inst_31874);
var inst_31879 = encodeURIComponent(inst_31876);
var inst_31880 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_31877),cljs.core.str("&name="),cljs.core.str(inst_31878),cljs.core.str("&value="),cljs.core.str(inst_31879)].join('');
var inst_31881 = cloudxmark.core.jsonp.call(null,inst_31880);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(56),inst_31881);
} else {
if((state_val_32032 === (85))){
var inst_31987 = (state_32031[(11)]);
var inst_31990 = (state_32031[(2)]);
var inst_31991 = cljs.core.js__GT_clj.call(null,inst_31990);
var inst_31992 = cloudxmark.core.convert_json_lsts_result.call(null,inst_31991,inst_31987,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_31993 = cljs.core.List.EMPTY;
var inst_31994 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31995 = cljs.core._conj.call(null,inst_31993,inst_31994);
var inst_31996 = cljs.core.List.EMPTY;
var inst_31997 = cljs.core._conj.call(null,inst_31996,inst_31992);
var inst_31998 = cljs.core.concat.call(null,inst_31995,inst_31997);
var inst_31999 = cljs.core.seq.call(null,inst_31998);
var inst_32000 = cljs.core.sequence.call(null,inst_31999);
var inst_32001 = cljs.core.List.EMPTY;
var inst_32002 = cljs.core._conj.call(null,inst_32001,inst_32000);
var inst_32003 = cljs.core.concat.call(null,inst_32002);
var inst_32004 = cljs.core.seq.call(null,inst_32003);
var inst_32005 = cljs.core.sequence.call(null,inst_32004);
var inst_32006 = cljs.core.vec.call(null,inst_32005);
var inst_32007 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32006);
var state_32031__$1 = state_32031;
var statearr_32052_32173 = state_32031__$1;
(statearr_32052_32173[(2)] = inst_32007);

(statearr_32052_32173[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (39))){
var inst_31815 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32053_32174 = state_32031__$1;
(statearr_32053_32174[(2)] = inst_31815);

(statearr_32053_32174[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (88))){
var inst_32012 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32054_32175 = state_32031__$1;
(statearr_32054_32175[(2)] = inst_32012);

(statearr_32054_32175[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (46))){
var inst_32018 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32055_32176 = state_32031__$1;
(statearr_32055_32176[(2)] = inst_32018);

(statearr_32055_32176[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (4))){
var inst_32029 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (77))){
var state_32031__$1 = state_32031;
var statearr_32056_32177 = state_32031__$1;
(statearr_32056_32177[(2)] = false);

(statearr_32056_32177[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (54))){
var inst_31696 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
var statearr_32057_32178 = state_32031__$1;
(statearr_32057_32178[(2)] = inst_31696);

(statearr_32057_32178[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (15))){
var inst_31696 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
var statearr_32058_32179 = state_32031__$1;
(statearr_32058_32179[(2)] = inst_31696);

(statearr_32058_32179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (48))){
var state_32031__$1 = state_32031;
var statearr_32059_32180 = state_32031__$1;
(statearr_32059_32180[(2)] = false);

(statearr_32059_32180[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (50))){
var state_32031__$1 = state_32031;
var statearr_32060_32181 = state_32031__$1;
(statearr_32060_32181[(2)] = true);

(statearr_32060_32181[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (75))){
var inst_32014 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32061_32182 = state_32031__$1;
(statearr_32061_32182[(2)] = inst_32014);

(statearr_32061_32182[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (21))){
var inst_31758 = (state_32031[(12)]);
var inst_31756 = (state_32031[(2)]);
var inst_31757 = cljs.core.js__GT_clj.call(null,inst_31756);
var inst_31758__$1 = cljs.core.get.call(null,inst_31757,"status");
var inst_31760 = (inst_31758__$1 == null);
var inst_31761 = cljs.core.not.call(null,inst_31760);
var state_32031__$1 = (function (){var statearr_32062 = state_32031;
(statearr_32062[(12)] = inst_31758__$1);

return statearr_32062;
})();
if(inst_31761){
var statearr_32063_32183 = state_32031__$1;
(statearr_32063_32183[(1)] = (22));

} else {
var statearr_32064_32184 = state_32031__$1;
(statearr_32064_32184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (31))){
var inst_31696 = (state_32031[(10)]);
var inst_31805 = (inst_31696 == null);
var inst_31806 = cljs.core.not.call(null,inst_31805);
var state_32031__$1 = state_32031;
if(inst_31806){
var statearr_32065_32185 = state_32031__$1;
(statearr_32065_32185[(1)] = (34));

} else {
var statearr_32066_32186 = state_32031__$1;
(statearr_32066_32186[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (32))){
var inst_31695 = (state_32031[(9)]);
var inst_31850 = cljs.core._EQ_.call(null,inst_31695,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_32031__$1 = state_32031;
if(inst_31850){
var statearr_32067_32187 = state_32031__$1;
(statearr_32067_32187[(1)] = (44));

} else {
var statearr_32068_32188 = state_32031__$1;
(statearr_32068_32188[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (40))){
var inst_31696 = (state_32031[(10)]);
var inst_31820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31696);
var state_32031__$1 = state_32031;
var statearr_32069_32189 = state_32031__$1;
(statearr_32069_32189[(2)] = inst_31820);

(statearr_32069_32189[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (56))){
var inst_31883 = (state_32031[(2)]);
var inst_31884 = cljs.core.js__GT_clj.call(null,inst_31883);
var inst_31885 = cloudxmark.core.convert_json_lsts_result.call(null,inst_31884,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_31886 = cljs.core.List.EMPTY;
var inst_31887 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31888 = cljs.core._conj.call(null,inst_31886,inst_31887);
var inst_31889 = cljs.core.List.EMPTY;
var inst_31890 = cljs.core._conj.call(null,inst_31889,inst_31885);
var inst_31891 = cljs.core.concat.call(null,inst_31888,inst_31890);
var inst_31892 = cljs.core.seq.call(null,inst_31891);
var inst_31893 = cljs.core.sequence.call(null,inst_31892);
var inst_31894 = cljs.core.List.EMPTY;
var inst_31895 = cljs.core._conj.call(null,inst_31894,inst_31893);
var inst_31896 = cljs.core.concat.call(null,inst_31895);
var inst_31897 = cljs.core.seq.call(null,inst_31896);
var inst_31898 = cljs.core.sequence.call(null,inst_31897);
var inst_31899 = cljs.core.vec.call(null,inst_31898);
var inst_31900 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31899);
var state_32031__$1 = state_32031;
var statearr_32070_32190 = state_32031__$1;
(statearr_32070_32190[(2)] = inst_31900);

(statearr_32070_32190[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (33))){
var inst_32020 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32071_32191 = state_32031__$1;
(statearr_32071_32191[(2)] = inst_32020);

(statearr_32071_32191[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (13))){
var inst_31714 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32072_32192 = state_32031__$1;
(statearr_32072_32192[(2)] = inst_31714);

(statearr_32072_32192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (22))){
var inst_31758 = (state_32031[(12)]);
var inst_31763 = inst_31758.cljs$lang$protocol_mask$partition0$;
var inst_31764 = (inst_31763 & (64));
var inst_31765 = inst_31758.cljs$core$ISeq$;
var inst_31766 = (inst_31764) || (inst_31765);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31766)){
var statearr_32073_32193 = state_32031__$1;
(statearr_32073_32193[(1)] = (25));

} else {
var statearr_32074_32194 = state_32031__$1;
(statearr_32074_32194[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (36))){
var inst_31818 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31818)){
var statearr_32075_32195 = state_32031__$1;
(statearr_32075_32195[(1)] = (40));

} else {
var statearr_32076_32196 = state_32031__$1;
(statearr_32076_32196[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (41))){
var inst_31696 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
var statearr_32077_32197 = state_32031__$1;
(statearr_32077_32197[(2)] = inst_31696);

(statearr_32077_32197[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (89))){
var inst_32026 = (state_32031[(2)]);
var inst_31690 = inst_32026;
var state_32031__$1 = (function (){var statearr_32078 = state_32031;
(statearr_32078[(13)] = inst_31690);

return statearr_32078;
})();
var statearr_32079_32198 = state_32031__$1;
(statearr_32079_32198[(2)] = null);

(statearr_32079_32198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (43))){
var inst_31831 = (state_32031[(2)]);
var inst_31832 = cljs.core.js__GT_clj.call(null,inst_31831);
var inst_31833 = cloudxmark.core.convert_json_lsts_result.call(null,inst_31832,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_31834 = cljs.core.List.EMPTY;
var inst_31835 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31836 = cljs.core._conj.call(null,inst_31834,inst_31835);
var inst_31837 = cljs.core.List.EMPTY;
var inst_31838 = cljs.core._conj.call(null,inst_31837,inst_31833);
var inst_31839 = cljs.core.concat.call(null,inst_31836,inst_31838);
var inst_31840 = cljs.core.seq.call(null,inst_31839);
var inst_31841 = cljs.core.sequence.call(null,inst_31840);
var inst_31842 = cljs.core.List.EMPTY;
var inst_31843 = cljs.core._conj.call(null,inst_31842,inst_31841);
var inst_31844 = cljs.core.concat.call(null,inst_31843);
var inst_31845 = cljs.core.seq.call(null,inst_31844);
var inst_31846 = cljs.core.sequence.call(null,inst_31845);
var inst_31847 = cljs.core.vec.call(null,inst_31846);
var inst_31848 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31847);
var state_32031__$1 = state_32031;
var statearr_32080_32199 = state_32031__$1;
(statearr_32080_32199[(2)] = inst_31848);

(statearr_32080_32199[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (61))){
var state_32031__$1 = state_32031;
var statearr_32081_32200 = state_32031__$1;
(statearr_32081_32200[(2)] = false);

(statearr_32081_32200[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (29))){
var inst_31758 = (state_32031[(12)]);
var state_32031__$1 = state_32031;
var statearr_32082_32201 = state_32031__$1;
(statearr_32082_32201[(2)] = inst_31758);

(statearr_32082_32201[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (44))){
var inst_31696 = (state_32031[(10)]);
var inst_31854 = (inst_31696 == null);
var inst_31855 = cljs.core.not.call(null,inst_31854);
var state_32031__$1 = state_32031;
if(inst_31855){
var statearr_32083_32202 = state_32031__$1;
(statearr_32083_32202[(1)] = (47));

} else {
var statearr_32084_32203 = state_32031__$1;
(statearr_32084_32203[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (6))){
var inst_31695 = (state_32031[(9)]);
var inst_31751 = cljs.core._EQ_.call(null,inst_31695,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_32031__$1 = state_32031;
if(inst_31751){
var statearr_32085_32204 = state_32031__$1;
(statearr_32085_32204[(1)] = (18));

} else {
var statearr_32086_32205 = state_32031__$1;
(statearr_32086_32205[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (28))){
var inst_31758 = (state_32031[(12)]);
var inst_31775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31758);
var state_32031__$1 = state_32031;
var statearr_32087_32206 = state_32031__$1;
(statearr_32087_32206[(2)] = inst_31775);

(statearr_32087_32206[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (64))){
var state_32031__$1 = state_32031;
var statearr_32088_32207 = state_32031__$1;
(statearr_32088_32207[(2)] = false);

(statearr_32088_32207[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (51))){
var state_32031__$1 = state_32031;
var statearr_32089_32208 = state_32031__$1;
(statearr_32089_32208[(2)] = false);

(statearr_32089_32208[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (25))){
var state_32031__$1 = state_32031;
var statearr_32090_32209 = state_32031__$1;
(statearr_32090_32209[(2)] = true);

(statearr_32090_32209[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (34))){
var inst_31696 = (state_32031[(10)]);
var inst_31808 = inst_31696.cljs$lang$protocol_mask$partition0$;
var inst_31809 = (inst_31808 & (64));
var inst_31810 = inst_31696.cljs$core$ISeq$;
var inst_31811 = (inst_31809) || (inst_31810);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31811)){
var statearr_32091_32210 = state_32031__$1;
(statearr_32091_32210[(1)] = (37));

} else {
var statearr_32092_32211 = state_32031__$1;
(statearr_32092_32211[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (17))){
var inst_31725 = (state_32031[(14)]);
var inst_31732 = (state_32031[(2)]);
var inst_31733 = cljs.core.js__GT_clj.call(null,inst_31732);
var inst_31734 = cloudxmark.core.convert_json_lsts_result.call(null,inst_31733,inst_31725,new cljs.core.Keyword(null,"login","login",55217519));
var inst_31735 = cljs.core.List.EMPTY;
var inst_31736 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31737 = cljs.core._conj.call(null,inst_31735,inst_31736);
var inst_31738 = cljs.core.List.EMPTY;
var inst_31739 = cljs.core._conj.call(null,inst_31738,inst_31734);
var inst_31740 = cljs.core.concat.call(null,inst_31737,inst_31739);
var inst_31741 = cljs.core.seq.call(null,inst_31740);
var inst_31742 = cljs.core.sequence.call(null,inst_31741);
var inst_31743 = cljs.core.List.EMPTY;
var inst_31744 = cljs.core._conj.call(null,inst_31743,inst_31742);
var inst_31745 = cljs.core.concat.call(null,inst_31744);
var inst_31746 = cljs.core.seq.call(null,inst_31745);
var inst_31747 = cljs.core.sequence.call(null,inst_31746);
var inst_31748 = cljs.core.vec.call(null,inst_31747);
var inst_31749 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31748);
var state_32031__$1 = state_32031;
var statearr_32093_32212 = state_32031__$1;
(statearr_32093_32212[(2)] = inst_31749);

(statearr_32093_32212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (3))){
var inst_31690 = (state_32031[(13)]);
var inst_31695 = (state_32031[(9)]);
var inst_31695__$1 = cljs.core.nth.call(null,inst_31690,(0),null);
var inst_31696 = cljs.core.nth.call(null,inst_31690,(1),null);
var inst_31697 = cljs.core.nth.call(null,inst_31690,(2),null);
var inst_31698 = cljs.core._EQ_.call(null,inst_31695__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_32031__$1 = (function (){var statearr_32094 = state_32031;
(statearr_32094[(10)] = inst_31696);

(statearr_32094[(15)] = inst_31697);

(statearr_32094[(9)] = inst_31695__$1);

return statearr_32094;
})();
if(inst_31698){
var statearr_32095_32213 = state_32031__$1;
(statearr_32095_32213[(1)] = (5));

} else {
var statearr_32096_32214 = state_32031__$1;
(statearr_32096_32214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (12))){
var state_32031__$1 = state_32031;
var statearr_32097_32215 = state_32031__$1;
(statearr_32097_32215[(2)] = false);

(statearr_32097_32215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (2))){
var inst_31686 = (state_32031[(2)]);
var inst_31687 = cljs.core.nth.call(null,inst_31686,(0),null);
var inst_31688 = cljs.core.nth.call(null,inst_31686,(1),null);
var inst_31689 = cljs.core.nth.call(null,inst_31686,(2),null);
var inst_31690 = inst_31686;
var state_32031__$1 = (function (){var statearr_32098 = state_32031;
(statearr_32098[(13)] = inst_31690);

(statearr_32098[(16)] = inst_31687);

(statearr_32098[(17)] = inst_31689);

(statearr_32098[(18)] = inst_31688);

return statearr_32098;
})();
var statearr_32099_32216 = state_32031__$1;
(statearr_32099_32216[(2)] = null);

(statearr_32099_32216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (66))){
var inst_31696 = (state_32031[(10)]);
var inst_31921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31696);
var state_32031__$1 = state_32031;
var statearr_32100_32217 = state_32031__$1;
(statearr_32100_32217[(2)] = inst_31921);

(statearr_32100_32217[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (23))){
var state_32031__$1 = state_32031;
var statearr_32101_32218 = state_32031__$1;
(statearr_32101_32218[(2)] = false);

(statearr_32101_32218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (47))){
var inst_31696 = (state_32031[(10)]);
var inst_31857 = inst_31696.cljs$lang$protocol_mask$partition0$;
var inst_31858 = (inst_31857 & (64));
var inst_31859 = inst_31696.cljs$core$ISeq$;
var inst_31860 = (inst_31858) || (inst_31859);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31860)){
var statearr_32102_32219 = state_32031__$1;
(statearr_32102_32219[(1)] = (50));

} else {
var statearr_32103_32220 = state_32031__$1;
(statearr_32103_32220[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (35))){
var state_32031__$1 = state_32031;
var statearr_32104_32221 = state_32031__$1;
(statearr_32104_32221[(2)] = false);

(statearr_32104_32221[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (82))){
var inst_31696 = (state_32031[(10)]);
var inst_31982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31696);
var state_32031__$1 = state_32031;
var statearr_32105_32222 = state_32031__$1;
(statearr_32105_32222[(2)] = inst_31982);

(statearr_32105_32222[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (76))){
var inst_31696 = (state_32031[(10)]);
var inst_31970 = inst_31696.cljs$lang$protocol_mask$partition0$;
var inst_31971 = (inst_31970 & (64));
var inst_31972 = inst_31696.cljs$core$ISeq$;
var inst_31973 = (inst_31971) || (inst_31972);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31973)){
var statearr_32106_32223 = state_32031__$1;
(statearr_32106_32223[(1)] = (79));

} else {
var statearr_32107_32224 = state_32031__$1;
(statearr_32107_32224[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (19))){
var inst_31695 = (state_32031[(9)]);
var inst_31801 = cljs.core._EQ_.call(null,inst_31695,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_32031__$1 = state_32031;
if(inst_31801){
var statearr_32108_32225 = state_32031__$1;
(statearr_32108_32225[(1)] = (31));

} else {
var statearr_32109_32226 = state_32031__$1;
(statearr_32109_32226[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (57))){
var inst_31696 = (state_32031[(10)]);
var inst_31906 = (inst_31696 == null);
var inst_31907 = cljs.core.not.call(null,inst_31906);
var state_32031__$1 = state_32031;
if(inst_31907){
var statearr_32110_32227 = state_32031__$1;
(statearr_32110_32227[(1)] = (60));

} else {
var statearr_32111_32228 = state_32031__$1;
(statearr_32111_32228[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (68))){
var inst_31927 = (state_32031[(19)]);
var inst_31924 = (state_32031[(2)]);
var inst_31925 = cljs.core.get.call(null,inst_31924,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_31926 = cljs.core.get.call(null,inst_31924,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_31927__$1 = cljs.core.get.call(null,inst_31924,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_31928 = cljs.core.get.call(null,inst_31924,new cljs.core.Keyword(null,"value","value",305978217));
var inst_31929 = cljs.core._EQ_.call(null,inst_31927__$1,"value");
var state_32031__$1 = (function (){var statearr_32112 = state_32031;
(statearr_32112[(19)] = inst_31927__$1);

(statearr_32112[(20)] = inst_31926);

(statearr_32112[(7)] = inst_31928);

(statearr_32112[(21)] = inst_31925);

return statearr_32112;
})();
if(inst_31929){
var statearr_32113_32229 = state_32031__$1;
(statearr_32113_32229[(1)] = (69));

} else {
var statearr_32114_32230 = state_32031__$1;
(statearr_32114_32230[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (11))){
var state_32031__$1 = state_32031;
var statearr_32115_32231 = state_32031__$1;
(statearr_32115_32231[(2)] = true);

(statearr_32115_32231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (9))){
var state_32031__$1 = state_32031;
var statearr_32116_32232 = state_32031__$1;
(statearr_32116_32232[(2)] = false);

(statearr_32116_32232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (5))){
var inst_31696 = (state_32031[(10)]);
var inst_31701 = [cljs.core.str("lst login data:"),cljs.core.str(inst_31696)].join('');
var inst_31702 = cljs.core.println.call(null,inst_31701);
var inst_31704 = (inst_31696 == null);
var inst_31705 = cljs.core.not.call(null,inst_31704);
var state_32031__$1 = (function (){var statearr_32117 = state_32031;
(statearr_32117[(22)] = inst_31702);

return statearr_32117;
})();
if(inst_31705){
var statearr_32118_32233 = state_32031__$1;
(statearr_32118_32233[(1)] = (8));

} else {
var statearr_32119_32234 = state_32031__$1;
(statearr_32119_32234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (83))){
var inst_31696 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
var statearr_32120_32235 = state_32031__$1;
(statearr_32120_32235[(2)] = inst_31696);

(statearr_32120_32235[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (14))){
var inst_31696 = (state_32031[(10)]);
var inst_31719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31696);
var state_32031__$1 = state_32031;
var statearr_32121_32236 = state_32031__$1;
(statearr_32121_32236[(2)] = inst_31719);

(statearr_32121_32236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (45))){
var inst_31695 = (state_32031[(9)]);
var inst_31902 = cljs.core._EQ_.call(null,inst_31695,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_32031__$1 = state_32031;
if(inst_31902){
var statearr_32122_32237 = state_32031__$1;
(statearr_32122_32237[(1)] = (57));

} else {
var statearr_32123_32238 = state_32031__$1;
(statearr_32123_32238[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (53))){
var inst_31696 = (state_32031[(10)]);
var inst_31869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31696);
var state_32031__$1 = state_32031;
var statearr_32124_32239 = state_32031__$1;
(statearr_32124_32239[(2)] = inst_31869);

(statearr_32124_32239[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (78))){
var inst_31980 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31980)){
var statearr_32125_32240 = state_32031__$1;
(statearr_32125_32240[(1)] = (82));

} else {
var statearr_32126_32241 = state_32031__$1;
(statearr_32126_32241[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (26))){
var state_32031__$1 = state_32031;
var statearr_32127_32242 = state_32031__$1;
(statearr_32127_32242[(2)] = false);

(statearr_32127_32242[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (16))){
var inst_31722 = (state_32031[(2)]);
var inst_31723 = cljs.core.get.call(null,inst_31722,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_31724 = cljs.core.get.call(null,inst_31722,new cljs.core.Keyword(null,"password","password",417022471));
var inst_31725 = cljs.core.get.call(null,inst_31722,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_31726 = cloudxmark.core.enc_str.call(null,inst_31724);
var inst_31727 = encodeURIComponent(inst_31723);
var inst_31728 = encodeURIComponent(inst_31726);
var inst_31729 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_31727),cljs.core.str("&pass="),cljs.core.str(inst_31728)].join('');
var inst_31730 = cloudxmark.core.jsonp.call(null,inst_31729);
var state_32031__$1 = (function (){var statearr_32128 = state_32031;
(statearr_32128[(14)] = inst_31725);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(17),inst_31730);
} else {
if((state_val_32032 === (81))){
var inst_31977 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32129_32243 = state_32031__$1;
(statearr_32129_32243[(2)] = inst_31977);

(statearr_32129_32243[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (79))){
var state_32031__$1 = state_32031;
var statearr_32130_32244 = state_32031__$1;
(statearr_32130_32244[(2)] = true);

(statearr_32130_32244[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (38))){
var state_32031__$1 = state_32031;
var statearr_32131_32245 = state_32031__$1;
(statearr_32131_32245[(2)] = false);

(statearr_32131_32245[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (87))){
var state_32031__$1 = state_32031;
var statearr_32132_32246 = state_32031__$1;
(statearr_32132_32246[(2)] = null);

(statearr_32132_32246[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (30))){
var inst_31778 = (state_32031[(2)]);
var inst_31779 = cljs.core.get.call(null,inst_31778,"info");
var inst_31780 = cljs.core.get.call(null,inst_31778,"warn");
var inst_31781 = cljs.core.get.call(null,inst_31778,"error");
var inst_31782 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_31783 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_31779,inst_31780,inst_31781];
var inst_31784 = cljs.core.PersistentHashMap.fromArrays(inst_31782,inst_31783);
var inst_31785 = cljs.core.List.EMPTY;
var inst_31786 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_31787 = cljs.core._conj.call(null,inst_31785,inst_31786);
var inst_31788 = cljs.core.List.EMPTY;
var inst_31789 = cljs.core._conj.call(null,inst_31788,inst_31784);
var inst_31790 = cljs.core.concat.call(null,inst_31787,inst_31789);
var inst_31791 = cljs.core.seq.call(null,inst_31790);
var inst_31792 = cljs.core.sequence.call(null,inst_31791);
var inst_31793 = cljs.core.List.EMPTY;
var inst_31794 = cljs.core._conj.call(null,inst_31793,inst_31792);
var inst_31795 = cljs.core.concat.call(null,inst_31794);
var inst_31796 = cljs.core.seq.call(null,inst_31795);
var inst_31797 = cljs.core.sequence.call(null,inst_31796);
var inst_31798 = cljs.core.vec.call(null,inst_31797);
var inst_31799 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31798);
var state_32031__$1 = state_32031;
var statearr_32133_32247 = state_32031__$1;
(statearr_32133_32247[(2)] = inst_31799);

(statearr_32133_32247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (73))){
var inst_31696 = (state_32031[(10)]);
var inst_31964 = [cljs.core.str("lst query data:"),cljs.core.str(inst_31696)].join('');
var inst_31965 = cljs.core.println.call(null,inst_31964);
var inst_31967 = (inst_31696 == null);
var inst_31968 = cljs.core.not.call(null,inst_31967);
var state_32031__$1 = (function (){var statearr_32134 = state_32031;
(statearr_32134[(23)] = inst_31965);

return statearr_32134;
})();
if(inst_31968){
var statearr_32135_32248 = state_32031__$1;
(statearr_32135_32248[(1)] = (76));

} else {
var statearr_32136_32249 = state_32031__$1;
(statearr_32136_32249[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (10))){
var inst_31717 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31717)){
var statearr_32137_32250 = state_32031__$1;
(statearr_32137_32250[(1)] = (14));

} else {
var statearr_32138_32251 = state_32031__$1;
(statearr_32138_32251[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (18))){
var inst_31754 = cloudxmark.core.jsonp.call(null,"/logout");
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(21),inst_31754);
} else {
if((state_val_32032 === (52))){
var inst_31864 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32139_32252 = state_32031__$1;
(statearr_32139_32252[(2)] = inst_31864);

(statearr_32139_32252[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (67))){
var inst_31696 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
var statearr_32140_32253 = state_32031__$1;
(statearr_32140_32253[(2)] = inst_31696);

(statearr_32140_32253[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (71))){
var inst_31927 = (state_32031[(19)]);
var inst_31926 = (state_32031[(20)]);
var inst_31925 = (state_32031[(21)]);
var inst_31934 = (state_32031[(2)]);
var inst_31935 = encodeURIComponent(inst_31925);
var inst_31936 = encodeURIComponent(inst_31926);
var inst_31937 = encodeURIComponent(inst_31927);
var inst_31938 = encodeURIComponent(inst_31934);
var inst_31939 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_31935),cljs.core.str("&orig-name="),cljs.core.str(inst_31936),cljs.core.str("&col-name="),cljs.core.str(inst_31937),cljs.core.str("&value="),cljs.core.str(inst_31938)].join('');
var inst_31940 = cloudxmark.core.jsonp.call(null,inst_31939);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(72),inst_31940);
} else {
if((state_val_32032 === (42))){
var inst_31823 = (state_32031[(2)]);
var inst_31824 = cljs.core.get.call(null,inst_31823,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_31825 = cljs.core.get.call(null,inst_31823,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_31826 = encodeURIComponent(inst_31824);
var inst_31827 = encodeURIComponent(inst_31825);
var inst_31828 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_31826),cljs.core.str("&desc="),cljs.core.str(inst_31827)].join('');
var inst_31829 = cloudxmark.core.jsonp.call(null,inst_31828);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(43),inst_31829);
} else {
if((state_val_32032 === (80))){
var state_32031__$1 = state_32031;
var statearr_32141_32254 = state_32031__$1;
(statearr_32141_32254[(2)] = false);

(statearr_32141_32254[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (37))){
var state_32031__$1 = state_32031;
var statearr_32142_32255 = state_32031__$1;
(statearr_32142_32255[(2)] = true);

(statearr_32142_32255[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (63))){
var state_32031__$1 = state_32031;
var statearr_32143_32256 = state_32031__$1;
(statearr_32143_32256[(2)] = true);

(statearr_32143_32256[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (8))){
var inst_31696 = (state_32031[(10)]);
var inst_31707 = inst_31696.cljs$lang$protocol_mask$partition0$;
var inst_31708 = (inst_31707 & (64));
var inst_31709 = inst_31696.cljs$core$ISeq$;
var inst_31710 = (inst_31708) || (inst_31709);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31710)){
var statearr_32144_32257 = state_32031__$1;
(statearr_32144_32257[(1)] = (11));

} else {
var statearr_32145_32258 = state_32031__$1;
(statearr_32145_32258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (49))){
var inst_31867 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_31867)){
var statearr_32146_32259 = state_32031__$1;
(statearr_32146_32259[(1)] = (53));

} else {
var statearr_32147_32260 = state_32031__$1;
(statearr_32147_32260[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (84))){
var inst_31985 = (state_32031[(2)]);
var inst_31986 = cljs.core.get.call(null,inst_31985,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_31987 = cljs.core.get.call(null,inst_31985,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_31988 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_32031__$1 = (function (){var statearr_32148 = state_32031;
(statearr_32148[(24)] = inst_31986);

(statearr_32148[(11)] = inst_31987);

return statearr_32148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(85),inst_31988);
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
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_32152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32152[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_32152[(1)] = (1));

return statearr_32152;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_32031){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_32031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e32153){if((e32153 instanceof Object)){
var ex__26706__auto__ = e32153;
var statearr_32154_32261 = state_32031;
(statearr_32154_32261[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32262 = state_32031;
state_32031 = G__32262;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_32155 = f__26726__auto__.call(null);
(statearr_32155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_32155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468192975513