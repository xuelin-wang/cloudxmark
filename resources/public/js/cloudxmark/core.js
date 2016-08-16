// Compiled by ClojureScript 1.9.198 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('cloudxmark.common.lst_common');
goog.require('goog.crypt');
goog.require('cloudxmark.common.ql');
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
cloudxmark.core.block_size = (16);
cloudxmark.core.seed_init_vector = goog.crypt.hexToByteArray("3ea1bae20d97b4a0b422da8b259f0c8c");
cloudxmark.core.seed_key_bytes = goog.crypt.hexToByteArray("5zal214336bja15b716e0335341e1ba7");
cloudxmark.core.xxx = (function cloudxmark$core$xxx(sss){
return cloudxmark.common.ql.kebab.call(null,sss);
});
cloudxmark.core.create_aes = (function cloudxmark$core$create_aes(key_bytes){
return (new goog.crypt.Aes(key_bytes));
});
cloudxmark.core.create_aes_cbc = (function cloudxmark$core$create_aes_cbc(key_bytes){
return (new goog.crypt.Cbc((new goog.crypt.Aes(key_bytes))));
});
cloudxmark.core.pad_bytes = (function cloudxmark$core$pad_bytes(bytes,target_len,ch){
var yyy = cloudxmark.core.xxx.call(null,"a");
var tmp_len = cljs.core.rem.call(null,(- bytes.length),target_len);
var pad_len = (((tmp_len < (0)))?(target_len + tmp_len):tmp_len);
var pad_str = clojure.string.join.call(null,cljs.core.repeat.call(null,pad_len,ch));
var padded_bytes = goog.crypt.stringToByteArray(pad_str);
return bytes.concat(padded_bytes);
});
cloudxmark.core.cbc_enc_str = (function cloudxmark$core$cbc_enc_str(plain_text,cbc,init_vector){
var plain_bytes = goog.crypt.stringToByteArray(plain_text);
var padded_bytes = cloudxmark.core.pad_bytes.call(null,plain_bytes,cloudxmark.core.block_size," ");
var enc_bytes = cbc.encrypt(padded_bytes,init_vector);
return goog.crypt.byteArrayToString(enc_bytes);
});
cloudxmark.core.aes_enc_str = (function cloudxmark$core$aes_enc_str(plain_text,aes){
var plain_bytes = goog.crypt.stringToByteArray(plain_text);
var padded_bytes = cloudxmark.core.pad_bytes.call(null,plain_bytes,cloudxmark.core.block_size," ");
return goog.crypt.byteArrayToString(aes.encrypt(padded_bytes));
});
cloudxmark.core.aes_dec_str = (function cloudxmark$core$aes_dec_str(cypher_text,aes){
return goog.crypt.byteArrayToString(aes.decrypt(goog.crypt.stringToByteArray(cypher_text)));
});
cloudxmark.core.xor_bytes = (function cloudxmark$core$xor_bytes(b1,b2,max_len){
var idx_53348 = (0);
while(true){
var len1_53349 = b1.length;
if((cljs.core._EQ_.call(null,idx_53348,len1_53349)) || (cljs.core._EQ_.call(null,idx_53348,max_len))){
} else {
(b1[idx_53348] = ((b1[idx_53348]) ^ (b2[idx_53348])));

var G__53350 = (idx_53348 + (1));
idx_53348 = G__53350;
continue;
}
break;
}

return b1;
});
cloudxmark.core.gen_bytes = (function cloudxmark$core$gen_bytes(from_str,seed_bytes){
var bytes = goog.crypt.stringToByteArray(from_str);
var padded_bytes = cloudxmark.core.pad_bytes.call(null,bytes,cloudxmark.core.block_size," ");
var xored_bytes = cloudxmark.core.xor_bytes.call(null,padded_bytes,seed_bytes,cloudxmark.core.block_size);
if(cljs.core._EQ_.call(null,xored_bytes.length,cloudxmark.core.block_size)){
return xored_bytes;
} else {
return xored_bytes.slice((0),cloudxmark.core.block_size);
}
});
cloudxmark.core.gen_key_bytes = (function cloudxmark$core$gen_key_bytes(from_str){
return cloudxmark.core.gen_bytes.call(null,from_str,cloudxmark.core.seed_key_bytes);
});
cloudxmark.core.gen_init_vector = (function cloudxmark$core$gen_init_vector(from_str){
return cloudxmark.core.gen_bytes.call(null,from_str,cloudxmark.core.seed_init_vector);
});
cloudxmark.core.enc_password = (function cloudxmark$core$enc_password(password){
var key_bytes = cloudxmark.core.gen_key_bytes.call(null,password);
var cbc = cloudxmark.core.create_aes_cbc.call(null,key_bytes);
return cloudxmark.core.cbc_enc_str.call(null,password,cbc,cloudxmark.core.seed_init_vector);
});
cloudxmark.core.cbc_dec_str = (function cloudxmark$core$cbc_dec_str(cypher_text,cbc,init_vector){
var cypher_bytes = goog.crypt.stringToByteArray(cypher_text);
var plain_bytes = cbc.decrypt(cypher_bytes,init_vector);
return goog.crypt.byteArrayToString(plain_bytes).trim();
});
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args53353 = [];
var len__22773__auto___53356 = arguments.length;
var i__22774__auto___53357 = (0);
while(true){
if((i__22774__auto___53357 < len__22773__auto___53356)){
args53353.push((arguments[i__22774__auto___53357]));

var G__53358 = (i__22774__auto___53357 + (1));
i__22774__auto___53357 = G__53358;
continue;
} else {
}
break;
}

var G__53355 = args53353.length;
switch (G__53355) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53353.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__53351_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__53351_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__53352_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__53352_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22617__auto__,method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__53360,_,p__53361){
var map__53362 = p__53360;
var map__53362__$1 = ((((!((map__53362 == null)))?((((map__53362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53362):map__53362);
var env = map__53362__$1;
var state = cljs.core.get.call(null,map__53362__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__53362__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__53363 = p__53361;
var map__53363__$1 = ((((!((map__53363 == null)))?((((map__53363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53363):map__53363);
var query_ver = cljs.core.get.call(null,map__53363__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__53363__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__53366 = lst;
var map__53366__$1 = ((((!((map__53366 == null)))?((((map__53366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53366):map__53366);
var lsts = cljs.core.get.call(null,map__53366__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__53366__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__53366__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__53366__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__53366__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_53368 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_53368);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22617__auto__,method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__53369,_,p__53370){
var map__53371 = p__53369;
var map__53371__$1 = ((((!((map__53371 == null)))?((((map__53371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53371):map__53371);
var env = map__53371__$1;
var state = cljs.core.get.call(null,map__53371__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53372 = p__53370;
var map__53372__$1 = ((((!((map__53372 == null)))?((((map__53372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53372):map__53372);
var status = map__53372__$1;
var id = cljs.core.get.call(null,map__53372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53371,map__53371__$1,env,state,map__53372,map__53372__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__53371,map__53371__$1,env,state,map__53372,map__53372__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__53375,_,p__53376){
var map__53377 = p__53375;
var map__53377__$1 = ((((!((map__53377 == null)))?((((map__53377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53377):map__53377);
var env = map__53377__$1;
var state = cljs.core.get.call(null,map__53377__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53378 = p__53376;
var map__53378__$1 = ((((!((map__53378 == null)))?((((map__53378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53378):map__53378);
var path = cljs.core.get.call(null,map__53378__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__53378__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__53378__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53377,map__53377__$1,env,state,map__53378,map__53378__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__53377,map__53377__$1,env,state,map__53378,map__53378__$1,path,merge_QMARK_,value))
], null);
}));
cloudxmark.core.get_by_map_val = (function cloudxmark$core$get_by_map_val(key,val,coll){
if(cljs.core.seq.call(null,coll)){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (elem){
return cljs.core._EQ_.call(null,val,cljs.core.get.call(null,elem,key));
}),coll));
} else {
return null;
}
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__53381,_,p__53382){
var map__53383 = p__53381;
var map__53383__$1 = ((((!((map__53383 == null)))?((((map__53383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53383):map__53383);
var env = map__53383__$1;
var state = cljs.core.get.call(null,map__53383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53384 = p__53382;
var map__53384__$1 = ((((!((map__53384 == null)))?((((map__53384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53384):map__53384);
var data_map = map__53384__$1;
var lst_name = cljs.core.get.call(null,map__53384__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__53384__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__53384__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__53384__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53383,map__53383__$1,env,state,map__53384,map__53384__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__53383,map__53383__$1,env,state,map__53384,map__53384__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__53387,_,p__53388){
var map__53389 = p__53387;
var map__53389__$1 = ((((!((map__53389 == null)))?((((map__53389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53389):map__53389);
var env = map__53389__$1;
var state = cljs.core.get.call(null,map__53389__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53390 = p__53388;
var map__53390__$1 = ((((!((map__53390 == null)))?((((map__53390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53390):map__53390);
var field_id = cljs.core.get.call(null,map__53390__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__53390__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53389,map__53389__$1,env,state,map__53390,map__53390__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__53389,map__53389__$1,env,state,map__53390,map__53390__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__53393,_,p__53394){
var map__53395 = p__53393;
var map__53395__$1 = ((((!((map__53395 == null)))?((((map__53395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53395):map__53395);
var env = map__53395__$1;
var state = cljs.core.get.call(null,map__53395__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53396 = p__53394;
var map__53396__$1 = ((((!((map__53396 == null)))?((((map__53396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53396):map__53396);
var data_map = map__53396__$1;
var user_id = cljs.core.get.call(null,map__53396__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__53396__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__53396__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53395,map__53395__$1,env,state,map__53396,map__53396__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__53395,map__53395__$1,env,state,map__53396,map__53396__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__53399,_,p__53400){
var map__53401 = p__53399;
var map__53401__$1 = ((((!((map__53401 == null)))?((((map__53401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53401):map__53401);
var env = map__53401__$1;
var state = cljs.core.get.call(null,map__53401__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53402 = p__53400;
var map__53402__$1 = ((((!((map__53402 == null)))?((((map__53402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53402):map__53402);
var data_map = map__53402__$1;
var user_id = cljs.core.get.call(null,map__53402__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__53402__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53401,map__53401__$1,env,state,map__53402,map__53402__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__53401,map__53401__$1,env,state,map__53402,map__53402__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__53405,_,p__53406){
var map__53407 = p__53405;
var map__53407__$1 = ((((!((map__53407 == null)))?((((map__53407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53407):map__53407);
var env = map__53407__$1;
var state = cljs.core.get.call(null,map__53407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53408 = p__53406;
var map__53408__$1 = ((((!((map__53408 == null)))?((((map__53408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53408):map__53408);
var data_map = map__53408__$1;
var type = cljs.core.get.call(null,map__53408__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__53408__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53407,map__53407__$1,env,state,map__53408,map__53408__$1,data_map,type,fields){
return (function (){
return null;
});})(map__53407,map__53407__$1,env,state,map__53408,map__53408__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__53411,_,p__53412){
var map__53413 = p__53411;
var map__53413__$1 = ((((!((map__53413 == null)))?((((map__53413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53413):map__53413);
var env = map__53413__$1;
var state = cljs.core.get.call(null,map__53413__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53414 = p__53412;
var map__53414__$1 = ((((!((map__53414 == null)))?((((map__53414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53414):map__53414);
var data_map = map__53414__$1;
var name = cljs.core.get.call(null,map__53414__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__53414__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53413,map__53413__$1,env,state,map__53414,map__53414__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__53413,map__53413__$1,env,state,map__53414,map__53414__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__53417,_,p__53418){
var map__53419 = p__53417;
var map__53419__$1 = ((((!((map__53419 == null)))?((((map__53419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53419):map__53419);
var env = map__53419__$1;
var state = cljs.core.get.call(null,map__53419__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53420 = p__53418;
var map__53420__$1 = ((((!((map__53420 == null)))?((((map__53420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53420):map__53420);
var data_map = map__53420__$1;
var name = cljs.core.get.call(null,map__53420__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__53420__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53419,map__53419__$1,env,state,map__53420,map__53420__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr_lst_name = (function (){var or__21590__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null));
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,lsts),"name");
}
})();
var curr_lst = cloudxmark.core.get_by_map_val.call(null,"name",curr_lst_name,lsts);
var lst_id = cljs.core.get.call(null,curr_lst,"lst_id");
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__53419,map__53419__$1,env,state,map__53420,map__53420__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__53423,_,___$1){
var map__53424 = p__53423;
var map__53424__$1 = ((((!((map__53424 == null)))?((((map__53424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53424):map__53424);
var env = map__53424__$1;
var state = cljs.core.get.call(null,map__53424__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53424,map__53424__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__53424,map__53424__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__53426,_,p__53427){
var map__53428 = p__53426;
var map__53428__$1 = ((((!((map__53428 == null)))?((((map__53428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53428):map__53428);
var env = map__53428__$1;
var state = cljs.core.get.call(null,map__53428__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__53429 = p__53427;
var map__53429__$1 = ((((!((map__53429 == null)))?((((map__53429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53429):map__53429);
var data_map = map__53429__$1;
var status = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__53429__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__53428,map__53428__$1,env,state,map__53429,map__53429__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
if(cljs.core.truth_((function (){var and__21578__auto__ = status;
if(cljs.core.truth_(and__21578__auto__)){
return status_id;
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__53428,map__53428__$1,env,state,map__53429,map__53429__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args53432 = [];
var len__22773__auto___53435 = arguments.length;
var i__22774__auto___53436 = (0);
while(true){
if((i__22774__auto___53436 < len__22773__auto___53435)){
args53432.push((arguments[i__22774__auto___53436]));

var G__53437 = (i__22774__auto___53436 + (1));
i__22774__auto___53436 = G__53437;
continue;
} else {
}
break;
}

var G__53434 = args53432.length;
switch (G__53434) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53432.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,({"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21590__auto__ = field_state;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22516__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22516__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
}));
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_name,item,col_name){
var field_val = (function (){var or__21590__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "";
}
})();
var item_name = cljs.core.get.call(null,item,"name");
return om.dom.input.call(null,({"key": [cljs.core.str("item-field-"),cljs.core.str(lst_name),cljs.core.str("-"),cljs.core.str(item_name),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val,item_name){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605)),(function (){var x__22516__auto__ = lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-name","item-name",1560972259)),(function (){var x__22516__auto__ = item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22516__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22516__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
});})(field_val,item_name))
}));
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul(({"key": "result-list"}),om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li(({"key": idx}),om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__53439){
var map__53445 = p__53439;
var map__53445__$1 = ((((!((map__53445 == null)))?((((map__53445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53445):map__53445);
var info = cljs.core.get.call(null,map__53445__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__53445__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__53445__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__53447 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__53447,(0),null);
var msg = cljs.core.nth.call(null,vec__53447,(1),null);
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)),om.util.force_children.call(null,msg));
});
cloudxmark.core.refresh_lists_button = (function cloudxmark$core$refresh_lists_button(comp,user_id,lst_ver){
return React.DOM.button(({"type": "button", "key": "refreshButton", "onClick": (function (e){
if((user_id == null)){
return cljs.core.swap_BANG_.call(null,cloudxmark.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Permission denied"], null));
} else {
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(lst_ver + (1))], null)], null));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Refresh List"))));
});
cloudxmark.core.add_item_button = (function cloudxmark$core$add_item_button(comp){
return React.DOM.button(({"type": "button", "key": "addItemButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_item_name = new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_item_value = (function (){var or__21590__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22516__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22516__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22516__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add Item"))));
});
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,lst_name,curr_lst_name){
return om.dom.input.call(null,({"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(lst_name)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,lst_name,curr_lst_name), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null);
var merge_QMARK_ = false;
var value = lst_name;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22516__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22516__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22516__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
} else {
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(lst_name)].join(''));
}
})}));
});
cloudxmark.core.add_lst_button = (function cloudxmark$core$add_lst_button(comp){
return React.DOM.button(({"type": "button", "key": "addLstButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_lst_name = new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_lst_description = (function (){var or__21590__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22516__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22516__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22516__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__53452 = lst;
var map__53452__$1 = ((((!((map__53452 == null)))?((((map__53452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53452):map__53452);
var lsts = cljs.core.get.call(null,map__53452__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__53452__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__53452,map__53452__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__53452,map__53452__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__53456 = lst;
var map__53456__$1 = ((((!((map__53456 == null)))?((((map__53456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53456):map__53456);
var status = cljs.core.get.call(null,map__53456__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')}),om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_lst_name){
return React.DOM.div(({"key": "lst-lst"}),om.util.force_children.call(null,(function (){var settings_lst = cloudxmark.core.get_by_map_val.call(null,"name",cloudxmark.common.lst_common.settings_lst_name,lsts);
var settings = cljs.core.get.call(null,settings_lst,"items");
var show_all_lsts = cljs.core._EQ_.call(null,"true",cljs.core.get.call(null,settings,cljs.core.get.call(null,cloudxmark.common.lst_common.setting_names,new cljs.core.Keyword(null,"show-all-lsts","show-all-lsts",-179827094))));
var display_lsts = ((show_all_lsts)?lsts:cljs.core.filter.call(null,((function (settings_lst,settings,show_all_lsts){
return (function (lst){
return cljs.core.not.call(null,cljs.core.get.call(null,lst,"name").startsWith("_-"));
});})(settings_lst,settings,show_all_lsts))
,lsts));
var selected_lst_name = (function (){var or__21590__auto__ = curr_lst_name;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,display_lsts),"name");
}
})();
if(cljs.core.seq.call(null,display_lsts)){
return cljs.core.map.call(null,((function (settings_lst,settings,show_all_lsts,display_lsts,selected_lst_name){
return (function (lst){
var lst_name = cljs.core.get.call(null,lst,"name");
return React.DOM.div(({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str("-"),cljs.core.str(cljs.core.get.call(null,lst,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,lst_name,selected_lst_name)),om.util.force_children.call(null,React.DOM.span(({"key": [cljs.core.str("lst-lst-"),cljs.core.str(lst_name),cljs.core.str("-span")].join('')}),om.util.force_children.call(null,lst_name))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,lst_name,selected_lst_name))?cloudxmark.core.lst_edit_area.call(null,comp,selected_lst_name):null)));
});})(settings_lst,settings,show_all_lsts,display_lsts,selected_lst_name))
,display_lsts);
} else {
return null;
}
})()),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.settings_editor = (function cloudxmark$core$settings_editor(comp,settings_lst){
if(cljs.core.truth_(settings_lst)){
return React.DOM.div(({"key": "settings-editor"}),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Settings"))),om.util.force_children.call(null,(function (){var items = cljs.core.get.call(null,settings_lst,"items");
cljs.core.reduce_kv.call(null,((function (items){
return (function (result,setting_key,setting_name){
var setting_editor = React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,setting_name))),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,cloudxmark.common.lst_common.settings_lst_name,cloudxmark.core.get_by_map_val.call(null,"name",setting_name,items),"value")));
return cljs.core.conj.call(null,result,setting_editor);
});})(items))
,cljs.core.PersistentVector.EMPTY,cloudxmark.common.lst_common.setting_names);

return cljs.core.map.call(null,((function (items){
return (function (setting_name){
React.DOM.span(null,om.util.force_children.call(null,setting_name));

cloudxmark.core.lst_field.call(null,comp,[cljs.core.str("setting-"),cljs.core.str(setting_name)].join(''));

return React.DOM.br(null);
});})(items))
,cloudxmark.common.lst_common.setting_names);
})()));
} else {
return null;
}
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__53462 = (function (){var G__53465 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__53465) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__53462,(0),null);
var query_key = cljs.core.nth.call(null,vec__53462,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__53462,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__53462,elem_key,query_key))
}));
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
})}),om.util.force_children.call(null,"Log out"));
});
cloudxmark.core.login_button = (function cloudxmark$core$login_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22516__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22516__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22516__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22516__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})}),om.util.force_children.call(null,"Login"));
});
cloudxmark.core.add_user_button = (function cloudxmark$core$add_user_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_user_id = new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_password = new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,new_user_id))?"New user name required":((clojure.string.blank_QMARK_.call(null,new_password))?"New password required":null
));
if(clojure.string.blank_QMARK_.call(null,error)){
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22516__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22516__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22516__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})}),om.util.force_children.call(null,"Add User"));
});
cloudxmark.core.get_settings = (function cloudxmark$core$get_settings(lsts){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (lst){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,lst,"name"),cloudxmark.common.lst_common.settings_lst_name);
}),lsts));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__28643__auto__ = this;
React.Component.apply(this__28643__auto__,arguments);

if(!((this__28643__auto__.initLocalState == null))){
this__28643__auto__.state = this__28643__auto__.initLocalState();
} else {
this__28643__auto__.state = {};
}

return this__28643__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x53471_53483 = cloudxmark.core.Lsts.prototype;
x53471_53483.componentWillUpdate = ((function (x53471_53483){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
if(((!((this__28544__auto__ == null)))?(((false) || (this__28544__auto__.om$next$Ident$))?true:false):false)){
var ident__28548__auto___53484 = om.next.ident.call(null,this__28544__auto__,om.next.props.call(null,this__28544__auto__));
var next_ident__28549__auto___53485 = om.next.ident.call(null,this__28544__auto__,om.next._next_props.call(null,next_props__28545__auto__,this__28544__auto__));
if(cljs.core.not_EQ_.call(null,ident__28548__auto___53484,next_ident__28549__auto___53485)){
var idxr__28550__auto___53486 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28550__auto___53486 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28550__auto___53486),((function (idxr__28550__auto___53486,ident__28548__auto___53484,next_ident__28549__auto___53485,this__28544__auto__,x53471_53483){
return (function (indexes__28551__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28551__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28548__auto___53484], null),cljs.core.disj,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28549__auto___53485], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28544__auto__);
});})(idxr__28550__auto___53486,ident__28548__auto___53484,next_ident__28549__auto___53485,this__28544__auto__,x53471_53483))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28544__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28544__auto__);
});})(x53471_53483))
;

x53471_53483.shouldComponentUpdate = ((function (x53471_53483){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
var next_children__28547__auto__ = next_props__28545__auto__.children;
var next_props__28545__auto____$1 = goog.object.get(next_props__28545__auto__,"omcljs$value");
var next_props__28545__auto____$2 = (function (){var G__53473 = next_props__28545__auto____$1;
if((next_props__28545__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__53473);
} else {
return G__53473;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28544__auto__),next_props__28545__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__28544__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28544__auto__.state,"omcljs$state"),goog.object.get(next_state__28546__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28544__auto__.props.children,next_children__28547__auto__);
}
}
});})(x53471_53483))
;

x53471_53483.componentWillUnmount = ((function (x53471_53483){
return (function (){
var this__28544__auto__ = this;
var r__28555__auto__ = om.next.get_reconciler.call(null,this__28544__auto__);
var cfg__28556__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28555__auto__);
var st__28557__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28556__auto__);
var indexer__28554__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28556__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__28557__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28557__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28544__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28557__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28544__auto__);
} else {
}

if((indexer__28554__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28554__auto__,this__28544__auto__);
}
});})(x53471_53483))
;

x53471_53483.componentDidUpdate = ((function (x53471_53483){
return (function (prev_props__28552__auto__,prev_state__28553__auto__){
var this__28544__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28544__auto__);
});})(x53471_53483))
;

x53471_53483.isMounted = ((function (x53471_53483){
return (function (){
var this__28544__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28544__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x53471_53483))
;

x53471_53483.componentWillMount = ((function (x53471_53483){
return (function (){
var this__28544__auto__ = this;
var indexer__28554__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28554__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28554__auto__,this__28544__auto__);
}
});})(x53471_53483))
;

x53471_53483.render = ((function (x53471_53483){
return (function (){
var this__28543__auto__ = this;
var this$ = this__28543__auto__;
var _STAR_reconciler_STAR_53474 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_53475 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_53476 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_53477 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_53478 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28543__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28543__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28543__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28543__auto__);

om.next._STAR_parent_STAR_ = this__28543__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__53479 = lst;
var map__53479__$1 = ((((!((map__53479 == null)))?((((map__53479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53479):map__53479);
var lsts = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__53479__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_53478;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53477;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_53476;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_53475;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_53474;
}});})(x53471_53483))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x53481_53487 = cloudxmark.core.Lsts;
x53481_53487.om$next$IQueryParams$ = true;

x53481_53487.om$next$IQueryParams$params$arity$1 = ((function (x53481_53487){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x53481_53487))
;

x53481_53487.om$next$IQuery$ = true;

x53481_53487.om$next$IQuery$query$arity$1 = ((function (x53481_53487){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x53481_53487))
;


var x53482_53488 = cloudxmark.core.Lsts.prototype;
x53482_53488.om$next$IQueryParams$ = true;

x53482_53488.om$next$IQueryParams$params$arity$1 = ((function (x53482_53488){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x53482_53488))
;

x53482_53488.om$next$IQuery$ = true;

x53482_53488.om$next$IQuery$query$arity$1 = ((function (x53482_53488){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x53482_53488))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28645__auto__,writer__28646__auto__,opt__28647__auto__){
return cljs.core._write.call(null,writer__28646__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__53497,cb){
var map__53498 = p__53497;
var map__53498__$1 = ((((!((map__53498 == null)))?((((map__53498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53498):map__53498);
var lst_search = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__53500 = om.next.query__GT_ast.call(null,lst_search);
var map__53500__$1 = ((((!((map__53500 == null)))?((((map__53500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53500):map__53500);
var vec__53501 = cljs.core.get.call(null,map__53500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__53501,(0),null);
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
var map__53509 = result;
var map__53509__$1 = ((((!((map__53509 == null)))?((((map__53509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53509):map__53509);
var lsts = cljs.core.get.call(null,map__53509__$1,"lsts");
var user_id = cljs.core.get.call(null,map__53509__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__53509__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__53510 = json_status;
var map__53510__$1 = ((((!((map__53510 == null)))?((((map__53510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53510):map__53510);
var info = cljs.core.get.call(null,map__53510__$1,"info");
var warn = cljs.core.get.call(null,map__53510__$1,"warn");
var error = cljs.core.get.call(null,map__53510__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__53515 = json_status;
var map__53515__$1 = ((((!((map__53515 == null)))?((((map__53515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53515):map__53515);
var info = cljs.core.get.call(null,map__53515__$1,"info");
var warn = cljs.core.get.call(null,map__53515__$1,"warn");
var error = cljs.core.get.call(null,map__53515__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__){
return (function (state_54415){
var state_val_54416 = (state_54415[(1)]);
if((state_val_54416 === (65))){
var state_54415__$1 = state_54415;
var statearr_54417_54543 = state_54415__$1;
(statearr_54417_54543[(2)] = false);

(statearr_54417_54543[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (70))){
var inst_54048 = (state_54415[(7)]);
var inst_54298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54418_54544 = state_54415__$1;
(statearr_54418_54544[(2)] = inst_54298);

(statearr_54418_54544[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (62))){
var inst_54047 = (state_54415[(8)]);
var inst_54334 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_54415__$1 = state_54415;
if(inst_54334){
var statearr_54419_54545 = state_54415__$1;
(statearr_54419_54545[(1)] = (74));

} else {
var statearr_54420_54546 = state_54415__$1;
(statearr_54420_54546[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (74))){
var inst_54048 = (state_54415[(7)]);
var inst_54337 = [cljs.core.str("lst query data:"),cljs.core.str(inst_54048)].join('');
var inst_54338 = cljs.core.println.call(null,inst_54337);
var inst_54340 = (inst_54048 == null);
var inst_54341 = cljs.core.not.call(null,inst_54340);
var state_54415__$1 = (function (){var statearr_54421 = state_54415;
(statearr_54421[(9)] = inst_54338);

return statearr_54421;
})();
if(inst_54341){
var statearr_54422_54547 = state_54415__$1;
(statearr_54422_54547[(1)] = (77));

} else {
var statearr_54423_54548 = state_54415__$1;
(statearr_54423_54548[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (7))){
var inst_54408 = (state_54415[(2)]);
var state_54415__$1 = (function (){var statearr_54424 = state_54415;
(statearr_54424[(10)] = inst_54408);

return statearr_54424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(93),c);
} else {
if((state_val_54416 === (59))){
var inst_54250 = (state_54415[(2)]);
var inst_54251 = cljs.core.get.call(null,inst_54250,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_54252 = cljs.core.get.call(null,inst_54250,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_54253 = cljs.core.get.call(null,inst_54250,new cljs.core.Keyword(null,"value","value",305978217));
var inst_54254 = encodeURIComponent(inst_54251);
var inst_54255 = encodeURIComponent(inst_54252);
var inst_54256 = encodeURIComponent(inst_54253);
var inst_54257 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_54254),cljs.core.str("&name="),cljs.core.str(inst_54255),cljs.core.str("&value="),cljs.core.str(inst_54256)].join('');
var inst_54258 = cloudxmark.core.jsonp.call(null,inst_54257);
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(60),inst_54258);
} else {
if((state_val_54416 === (86))){
var state_54415__$1 = state_54415;
var statearr_54425_54549 = state_54415__$1;
(statearr_54425_54549[(2)] = "");

(statearr_54425_54549[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (20))){
var inst_54406 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54426_54550 = state_54415__$1;
(statearr_54426_54550[(2)] = inst_54406);

(statearr_54426_54550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (72))){
var inst_54301 = (state_54415[(2)]);
var inst_54302 = cljs.core.get.call(null,inst_54301,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_54303 = cljs.core.get.call(null,inst_54301,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_54304 = cljs.core.get.call(null,inst_54301,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_54305 = cljs.core.get.call(null,inst_54301,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_54306 = cljs.core.get.call(null,inst_54301,new cljs.core.Keyword(null,"value","value",305978217));
var inst_54307 = encodeURIComponent(inst_54302);
var inst_54308 = encodeURIComponent(inst_54303);
var inst_54309 = encodeURIComponent(inst_54304);
var inst_54310 = encodeURIComponent(inst_54305);
var inst_54311 = encodeURIComponent(inst_54306);
var inst_54312 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_54307),cljs.core.str("&lst-name="),cljs.core.str(inst_54308),cljs.core.str("&orig-name="),cljs.core.str(inst_54309),cljs.core.str("&col-name="),cljs.core.str(inst_54310),cljs.core.str("&value="),cljs.core.str(inst_54311)].join('');
var inst_54313 = cloudxmark.core.jsonp.call(null,inst_54312);
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(73),inst_54313);
} else {
if((state_val_54416 === (58))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54427_54551 = state_54415__$1;
(statearr_54427_54551[(2)] = inst_54048);

(statearr_54427_54551[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (60))){
var inst_54260 = (state_54415[(2)]);
var inst_54261 = cljs.core.js__GT_clj.call(null,inst_54260);
var inst_54262 = cloudxmark.core.convert_json_lsts_result.call(null,inst_54261,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_54263 = cljs.core.List.EMPTY;
var inst_54264 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_54265 = cljs.core._conj.call(null,inst_54263,inst_54264);
var inst_54266 = cljs.core.List.EMPTY;
var inst_54267 = cljs.core._conj.call(null,inst_54266,inst_54262);
var inst_54268 = cljs.core.concat.call(null,inst_54265,inst_54267);
var inst_54269 = cljs.core.seq.call(null,inst_54268);
var inst_54270 = cljs.core.sequence.call(null,inst_54269);
var inst_54271 = cljs.core.List.EMPTY;
var inst_54272 = cljs.core._conj.call(null,inst_54271,inst_54270);
var inst_54273 = cljs.core.concat.call(null,inst_54272);
var inst_54274 = cljs.core.seq.call(null,inst_54273);
var inst_54275 = cljs.core.sequence.call(null,inst_54274);
var inst_54276 = cljs.core.vec.call(null,inst_54275);
var inst_54277 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54276);
var state_54415__$1 = state_54415;
var statearr_54428_54552 = state_54415__$1;
(statearr_54428_54552[(2)] = inst_54277);

(statearr_54428_54552[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (27))){
var inst_54048 = (state_54415[(7)]);
var inst_54124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54429_54553 = state_54415__$1;
(statearr_54429_54553[(2)] = inst_54124);

(statearr_54429_54553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (1))){
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(2),c);
} else {
if((state_val_54416 === (69))){
var inst_54293 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54430_54554 = state_54415__$1;
(statearr_54430_54554[(2)] = inst_54293);

(statearr_54430_54554[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (24))){
var state_54415__$1 = state_54415;
var statearr_54431_54555 = state_54415__$1;
(statearr_54431_54555[(2)] = true);

(statearr_54431_54555[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (55))){
var state_54415__$1 = state_54415;
var statearr_54432_54556 = state_54415__$1;
(statearr_54432_54556[(2)] = false);

(statearr_54432_54556[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (85))){
var inst_54361 = (state_54415[(11)]);
var inst_54358 = (state_54415[(2)]);
var inst_54359 = cljs.core.get.call(null,inst_54358,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_54360 = cljs.core.get.call(null,inst_54358,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_54361__$1 = cljs.core.get.call(null,inst_54358,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_54362 = cljs.core.empty_QMARK_.call(null,inst_54361__$1);
var state_54415__$1 = (function (){var statearr_54433 = state_54415;
(statearr_54433[(12)] = inst_54360);

(statearr_54433[(13)] = inst_54359);

(statearr_54433[(11)] = inst_54361__$1);

return statearr_54433;
})();
if(inst_54362){
var statearr_54434_54557 = state_54415__$1;
(statearr_54434_54557[(1)] = (86));

} else {
var statearr_54435_54558 = state_54415__$1;
(statearr_54435_54558[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (39))){
var state_54415__$1 = state_54415;
var statearr_54436_54559 = state_54415__$1;
(statearr_54436_54559[(2)] = false);

(statearr_54436_54559[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (88))){
var inst_54368 = (state_54415[(2)]);
var inst_54369 = [cljs.core.str("/getItems?"),cljs.core.str(inst_54368)].join('');
var inst_54370 = cloudxmark.core.jsonp.call(null,inst_54369);
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(89),inst_54370);
} else {
if((state_val_54416 === (46))){
var inst_54201 = (state_54415[(2)]);
var inst_54202 = cljs.core.get.call(null,inst_54201,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_54203 = cljs.core.get.call(null,inst_54201,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_54204 = encodeURIComponent(inst_54202);
var inst_54205 = encodeURIComponent(inst_54203);
var inst_54206 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_54204),cljs.core.str("&desc="),cljs.core.str(inst_54205)].join('');
var inst_54207 = cloudxmark.core.jsonp.call(null,inst_54206);
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(47),inst_54207);
} else {
if((state_val_54416 === (4))){
var inst_54413 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54415__$1,inst_54413);
} else {
if((state_val_54416 === (77))){
var inst_54048 = (state_54415[(7)]);
var inst_54343 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54344 = (inst_54343 & (64));
var inst_54345 = inst_54048.cljs$core$ISeq$;
var inst_54346 = (inst_54344) || (inst_54345);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54346)){
var statearr_54437_54560 = state_54415__$1;
(statearr_54437_54560[(1)] = (80));

} else {
var statearr_54438_54561 = state_54415__$1;
(statearr_54438_54561[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (54))){
var state_54415__$1 = state_54415;
var statearr_54439_54562 = state_54415__$1;
(statearr_54439_54562[(2)] = true);

(statearr_54439_54562[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (92))){
var inst_54394 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54440_54563 = state_54415__$1;
(statearr_54440_54563[(2)] = inst_54394);

(statearr_54440_54563[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (15))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54441_54564 = state_54415__$1;
(statearr_54441_54564[(2)] = inst_54048);

(statearr_54441_54564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (48))){
var inst_54048 = (state_54415[(7)]);
var inst_54232 = (inst_54048 == null);
var inst_54233 = cljs.core.not.call(null,inst_54232);
var state_54415__$1 = state_54415;
if(inst_54233){
var statearr_54442_54565 = state_54415__$1;
(statearr_54442_54565[(1)] = (51));

} else {
var statearr_54443_54566 = state_54415__$1;
(statearr_54443_54566[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (50))){
var inst_54400 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54444_54567 = state_54415__$1;
(statearr_54444_54567[(2)] = inst_54400);

(statearr_54444_54567[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (75))){
var state_54415__$1 = state_54415;
var statearr_54445_54568 = state_54415__$1;
(statearr_54445_54568[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (21))){
var inst_54048 = (state_54415[(7)]);
var inst_54112 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54113 = (inst_54112 & (64));
var inst_54114 = inst_54048.cljs$core$ISeq$;
var inst_54115 = (inst_54113) || (inst_54114);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54115)){
var statearr_54447_54569 = state_54415__$1;
(statearr_54447_54569[(1)] = (24));

} else {
var statearr_54448_54570 = state_54415__$1;
(statearr_54448_54570[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (31))){
var inst_54158 = cloudxmark.core.jsonp.call(null,"/logout");
var state_54415__$1 = state_54415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(34),inst_54158);
} else {
if((state_val_54416 === (32))){
var inst_54047 = (state_54415[(8)]);
var inst_54179 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_54415__$1 = state_54415;
if(inst_54179){
var statearr_54449_54571 = state_54415__$1;
(statearr_54449_54571[(1)] = (35));

} else {
var statearr_54450_54572 = state_54415__$1;
(statearr_54450_54572[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (40))){
var inst_54196 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54196)){
var statearr_54451_54573 = state_54415__$1;
(statearr_54451_54573[(1)] = (44));

} else {
var statearr_54452_54574 = state_54415__$1;
(statearr_54452_54574[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (91))){
var state_54415__$1 = state_54415;
var statearr_54453_54575 = state_54415__$1;
(statearr_54453_54575[(2)] = null);

(statearr_54453_54575[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (56))){
var inst_54242 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54454_54576 = state_54415__$1;
(statearr_54454_54576[(2)] = inst_54242);

(statearr_54454_54576[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (33))){
var inst_54404 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54455_54577 = state_54415__$1;
(statearr_54455_54577[(2)] = inst_54404);

(statearr_54455_54577[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (13))){
var inst_54066 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54456_54578 = state_54415__$1;
(statearr_54456_54578[(2)] = inst_54066);

(statearr_54456_54578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (22))){
var state_54415__$1 = state_54415;
var statearr_54457_54579 = state_54415__$1;
(statearr_54457_54579[(2)] = false);

(statearr_54457_54579[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (90))){
var state_54415__$1 = state_54415;
var statearr_54458_54580 = state_54415__$1;
(statearr_54458_54580[(2)] = null);

(statearr_54458_54580[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (36))){
var inst_54047 = (state_54415[(8)]);
var inst_54228 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_54415__$1 = state_54415;
if(inst_54228){
var statearr_54459_54581 = state_54415__$1;
(statearr_54459_54581[(1)] = (48));

} else {
var statearr_54460_54582 = state_54415__$1;
(statearr_54460_54582[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (41))){
var state_54415__$1 = state_54415;
var statearr_54461_54583 = state_54415__$1;
(statearr_54461_54583[(2)] = true);

(statearr_54461_54583[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (89))){
var inst_54360 = (state_54415[(12)]);
var inst_54372 = (state_54415[(2)]);
var inst_54373 = cljs.core.js__GT_clj.call(null,inst_54372);
var inst_54374 = cloudxmark.core.convert_json_lsts_result.call(null,inst_54373,inst_54360,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_54375 = cljs.core.List.EMPTY;
var inst_54376 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_54377 = cljs.core._conj.call(null,inst_54375,inst_54376);
var inst_54378 = cljs.core.List.EMPTY;
var inst_54379 = cljs.core._conj.call(null,inst_54378,inst_54374);
var inst_54380 = cljs.core.concat.call(null,inst_54377,inst_54379);
var inst_54381 = cljs.core.seq.call(null,inst_54380);
var inst_54382 = cljs.core.sequence.call(null,inst_54381);
var inst_54383 = cljs.core.List.EMPTY;
var inst_54384 = cljs.core._conj.call(null,inst_54383,inst_54382);
var inst_54385 = cljs.core.concat.call(null,inst_54384);
var inst_54386 = cljs.core.seq.call(null,inst_54385);
var inst_54387 = cljs.core.sequence.call(null,inst_54386);
var inst_54388 = cljs.core.vec.call(null,inst_54387);
var inst_54389 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54388);
var state_54415__$1 = state_54415;
var statearr_54462_54584 = state_54415__$1;
(statearr_54462_54584[(2)] = inst_54389);

(statearr_54462_54584[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (43))){
var inst_54193 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54463_54585 = state_54415__$1;
(statearr_54463_54585[(2)] = inst_54193);

(statearr_54463_54585[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (61))){
var inst_54048 = (state_54415[(7)]);
var inst_54283 = (inst_54048 == null);
var inst_54284 = cljs.core.not.call(null,inst_54283);
var state_54415__$1 = state_54415;
if(inst_54284){
var statearr_54464_54586 = state_54415__$1;
(statearr_54464_54586[(1)] = (64));

} else {
var statearr_54465_54587 = state_54415__$1;
(statearr_54465_54587[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (29))){
var inst_54127 = (state_54415[(2)]);
var inst_54128 = cljs.core.get.call(null,inst_54127,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_54129 = cljs.core.get.call(null,inst_54127,new cljs.core.Keyword(null,"password","password",417022471));
var inst_54130 = cljs.core.get.call(null,inst_54127,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_54131 = cloudxmark.core.enc_password.call(null,inst_54129);
var inst_54132 = encodeURIComponent(inst_54128);
var inst_54133 = encodeURIComponent(inst_54131);
var inst_54134 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_54132),cljs.core.str("&pass="),cljs.core.str(inst_54133)].join('');
var inst_54135 = cloudxmark.core.jsonp.call(null,inst_54134);
var state_54415__$1 = (function (){var statearr_54466 = state_54415;
(statearr_54466[(14)] = inst_54130);

return statearr_54466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(30),inst_54135);
} else {
if((state_val_54416 === (44))){
var inst_54048 = (state_54415[(7)]);
var inst_54198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54467_54588 = state_54415__$1;
(statearr_54467_54588[(2)] = inst_54198);

(statearr_54467_54588[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (93))){
var inst_54410 = (state_54415[(2)]);
var inst_54042 = inst_54410;
var state_54415__$1 = (function (){var statearr_54468 = state_54415;
(statearr_54468[(15)] = inst_54042);

return statearr_54468;
})();
var statearr_54469_54589 = state_54415__$1;
(statearr_54469_54589[(2)] = null);

(statearr_54469_54589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (6))){
var inst_54047 = (state_54415[(8)]);
var inst_54105 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_54415__$1 = state_54415;
if(inst_54105){
var statearr_54470_54590 = state_54415__$1;
(statearr_54470_54590[(1)] = (18));

} else {
var statearr_54471_54591 = state_54415__$1;
(statearr_54471_54591[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (28))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54472_54592 = state_54415__$1;
(statearr_54472_54592[(2)] = inst_54048);

(statearr_54472_54592[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (64))){
var inst_54048 = (state_54415[(7)]);
var inst_54286 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54287 = (inst_54286 & (64));
var inst_54288 = inst_54048.cljs$core$ISeq$;
var inst_54289 = (inst_54287) || (inst_54288);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54289)){
var statearr_54473_54593 = state_54415__$1;
(statearr_54473_54593[(1)] = (67));

} else {
var statearr_54474_54594 = state_54415__$1;
(statearr_54474_54594[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (51))){
var inst_54048 = (state_54415[(7)]);
var inst_54235 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54236 = (inst_54235 & (64));
var inst_54237 = inst_54048.cljs$core$ISeq$;
var inst_54238 = (inst_54236) || (inst_54237);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54238)){
var statearr_54475_54595 = state_54415__$1;
(statearr_54475_54595[(1)] = (54));

} else {
var statearr_54476_54596 = state_54415__$1;
(statearr_54476_54596[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (25))){
var state_54415__$1 = state_54415;
var statearr_54477_54597 = state_54415__$1;
(statearr_54477_54597[(2)] = false);

(statearr_54477_54597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (34))){
var inst_54160 = (state_54415[(2)]);
var inst_54161 = cljs.core.js__GT_clj.call(null,inst_54160);
var inst_54162 = cloudxmark.core.convert_json_status.call(null,inst_54161,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_54163 = cljs.core.List.EMPTY;
var inst_54164 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_54165 = cljs.core._conj.call(null,inst_54163,inst_54164);
var inst_54166 = cljs.core.List.EMPTY;
var inst_54167 = cljs.core._conj.call(null,inst_54166,inst_54162);
var inst_54168 = cljs.core.concat.call(null,inst_54165,inst_54167);
var inst_54169 = cljs.core.seq.call(null,inst_54168);
var inst_54170 = cljs.core.sequence.call(null,inst_54169);
var inst_54171 = cljs.core.List.EMPTY;
var inst_54172 = cljs.core._conj.call(null,inst_54171,inst_54170);
var inst_54173 = cljs.core.concat.call(null,inst_54172);
var inst_54174 = cljs.core.seq.call(null,inst_54173);
var inst_54175 = cljs.core.sequence.call(null,inst_54174);
var inst_54176 = cljs.core.vec.call(null,inst_54175);
var inst_54177 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54176);
var state_54415__$1 = state_54415;
var statearr_54478_54598 = state_54415__$1;
(statearr_54478_54598[(2)] = inst_54177);

(statearr_54478_54598[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (17))){
var inst_54077 = (state_54415[(16)]);
var inst_54076 = (state_54415[(17)]);
var inst_54083 = (state_54415[(2)]);
var inst_54084 = cljs.core.js__GT_clj.call(null,inst_54083);
var inst_54085 = cloudxmark.core.gen_key_bytes.call(null,inst_54076);
var inst_54086 = cloudxmark.core.create_aes_cbc.call(null,inst_54085);
var inst_54087 = cloudxmark.core.convert_json_lsts_result.call(null,inst_54084,inst_54077,new cljs.core.Keyword(null,"login","login",55217519));
var inst_54088 = cljs.core.assoc.call(null,inst_54087,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_54086);
var inst_54089 = cljs.core.List.EMPTY;
var inst_54090 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_54091 = cljs.core._conj.call(null,inst_54089,inst_54090);
var inst_54092 = cljs.core.List.EMPTY;
var inst_54093 = cljs.core._conj.call(null,inst_54092,inst_54088);
var inst_54094 = cljs.core.concat.call(null,inst_54091,inst_54093);
var inst_54095 = cljs.core.seq.call(null,inst_54094);
var inst_54096 = cljs.core.sequence.call(null,inst_54095);
var inst_54097 = cljs.core.List.EMPTY;
var inst_54098 = cljs.core._conj.call(null,inst_54097,inst_54096);
var inst_54099 = cljs.core.concat.call(null,inst_54098);
var inst_54100 = cljs.core.seq.call(null,inst_54099);
var inst_54101 = cljs.core.sequence.call(null,inst_54100);
var inst_54102 = cljs.core.vec.call(null,inst_54101);
var inst_54103 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54102);
var state_54415__$1 = state_54415;
var statearr_54479_54599 = state_54415__$1;
(statearr_54479_54599[(2)] = inst_54103);

(statearr_54479_54599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (3))){
var inst_54042 = (state_54415[(15)]);
var inst_54047 = (state_54415[(8)]);
var inst_54047__$1 = cljs.core.nth.call(null,inst_54042,(0),null);
var inst_54048 = cljs.core.nth.call(null,inst_54042,(1),null);
var inst_54049 = cljs.core.nth.call(null,inst_54042,(2),null);
var inst_54050 = cljs.core._EQ_.call(null,inst_54047__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_54415__$1 = (function (){var statearr_54480 = state_54415;
(statearr_54480[(7)] = inst_54048);

(statearr_54480[(18)] = inst_54049);

(statearr_54480[(8)] = inst_54047__$1);

return statearr_54480;
})();
if(inst_54050){
var statearr_54481_54600 = state_54415__$1;
(statearr_54481_54600[(1)] = (5));

} else {
var statearr_54482_54601 = state_54415__$1;
(statearr_54482_54601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (12))){
var state_54415__$1 = state_54415;
var statearr_54483_54602 = state_54415__$1;
(statearr_54483_54602[(2)] = false);

(statearr_54483_54602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (2))){
var inst_54038 = (state_54415[(2)]);
var inst_54039 = cljs.core.nth.call(null,inst_54038,(0),null);
var inst_54040 = cljs.core.nth.call(null,inst_54038,(1),null);
var inst_54041 = cljs.core.nth.call(null,inst_54038,(2),null);
var inst_54042 = inst_54038;
var state_54415__$1 = (function (){var statearr_54484 = state_54415;
(statearr_54484[(19)] = inst_54040);

(statearr_54484[(20)] = inst_54039);

(statearr_54484[(21)] = inst_54041);

(statearr_54484[(15)] = inst_54042);

return statearr_54484;
})();
var statearr_54485_54603 = state_54415__$1;
(statearr_54485_54603[(2)] = null);

(statearr_54485_54603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (66))){
var inst_54296 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54296)){
var statearr_54486_54604 = state_54415__$1;
(statearr_54486_54604[(1)] = (70));

} else {
var statearr_54487_54605 = state_54415__$1;
(statearr_54487_54605[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (23))){
var inst_54122 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54122)){
var statearr_54488_54606 = state_54415__$1;
(statearr_54488_54606[(1)] = (27));

} else {
var statearr_54489_54607 = state_54415__$1;
(statearr_54489_54607[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (47))){
var inst_54209 = (state_54415[(2)]);
var inst_54210 = cljs.core.js__GT_clj.call(null,inst_54209);
var inst_54211 = cloudxmark.core.convert_json_lsts_result.call(null,inst_54210,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_54212 = cljs.core.List.EMPTY;
var inst_54213 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_54214 = cljs.core._conj.call(null,inst_54212,inst_54213);
var inst_54215 = cljs.core.List.EMPTY;
var inst_54216 = cljs.core._conj.call(null,inst_54215,inst_54211);
var inst_54217 = cljs.core.concat.call(null,inst_54214,inst_54216);
var inst_54218 = cljs.core.seq.call(null,inst_54217);
var inst_54219 = cljs.core.sequence.call(null,inst_54218);
var inst_54220 = cljs.core.List.EMPTY;
var inst_54221 = cljs.core._conj.call(null,inst_54220,inst_54219);
var inst_54222 = cljs.core.concat.call(null,inst_54221);
var inst_54223 = cljs.core.seq.call(null,inst_54222);
var inst_54224 = cljs.core.sequence.call(null,inst_54223);
var inst_54225 = cljs.core.vec.call(null,inst_54224);
var inst_54226 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54225);
var state_54415__$1 = state_54415;
var statearr_54490_54608 = state_54415__$1;
(statearr_54490_54608[(2)] = inst_54226);

(statearr_54490_54608[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (35))){
var inst_54048 = (state_54415[(7)]);
var inst_54183 = (inst_54048 == null);
var inst_54184 = cljs.core.not.call(null,inst_54183);
var state_54415__$1 = state_54415;
if(inst_54184){
var statearr_54491_54609 = state_54415__$1;
(statearr_54491_54609[(1)] = (38));

} else {
var statearr_54492_54610 = state_54415__$1;
(statearr_54492_54610[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (82))){
var inst_54350 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54493_54611 = state_54415__$1;
(statearr_54493_54611[(2)] = inst_54350);

(statearr_54493_54611[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (76))){
var inst_54396 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54494_54612 = state_54415__$1;
(statearr_54494_54612[(2)] = inst_54396);

(statearr_54494_54612[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (19))){
var inst_54047 = (state_54415[(8)]);
var inst_54156 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_54415__$1 = state_54415;
if(inst_54156){
var statearr_54495_54613 = state_54415__$1;
(statearr_54495_54613[(1)] = (31));

} else {
var statearr_54496_54614 = state_54415__$1;
(statearr_54496_54614[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (57))){
var inst_54048 = (state_54415[(7)]);
var inst_54247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54497_54615 = state_54415__$1;
(statearr_54497_54615[(2)] = inst_54247);

(statearr_54497_54615[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (68))){
var state_54415__$1 = state_54415;
var statearr_54498_54616 = state_54415__$1;
(statearr_54498_54616[(2)] = false);

(statearr_54498_54616[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (11))){
var state_54415__$1 = state_54415;
var statearr_54499_54617 = state_54415__$1;
(statearr_54499_54617[(2)] = true);

(statearr_54499_54617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (9))){
var state_54415__$1 = state_54415;
var statearr_54500_54618 = state_54415__$1;
(statearr_54500_54618[(2)] = false);

(statearr_54500_54618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (5))){
var inst_54048 = (state_54415[(7)]);
var inst_54053 = [cljs.core.str("lst login data:"),cljs.core.str(inst_54048)].join('');
var inst_54054 = cljs.core.println.call(null,inst_54053);
var inst_54056 = (inst_54048 == null);
var inst_54057 = cljs.core.not.call(null,inst_54056);
var state_54415__$1 = (function (){var statearr_54501 = state_54415;
(statearr_54501[(22)] = inst_54054);

return statearr_54501;
})();
if(inst_54057){
var statearr_54502_54619 = state_54415__$1;
(statearr_54502_54619[(1)] = (8));

} else {
var statearr_54503_54620 = state_54415__$1;
(statearr_54503_54620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (83))){
var inst_54048 = (state_54415[(7)]);
var inst_54355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54504_54621 = state_54415__$1;
(statearr_54504_54621[(2)] = inst_54355);

(statearr_54504_54621[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (14))){
var inst_54048 = (state_54415[(7)]);
var inst_54071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54048);
var state_54415__$1 = state_54415;
var statearr_54505_54622 = state_54415__$1;
(statearr_54505_54622[(2)] = inst_54071);

(statearr_54505_54622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (45))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54506_54623 = state_54415__$1;
(statearr_54506_54623[(2)] = inst_54048);

(statearr_54506_54623[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (53))){
var inst_54245 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54245)){
var statearr_54507_54624 = state_54415__$1;
(statearr_54507_54624[(1)] = (57));

} else {
var statearr_54508_54625 = state_54415__$1;
(statearr_54508_54625[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (78))){
var state_54415__$1 = state_54415;
var statearr_54509_54626 = state_54415__$1;
(statearr_54509_54626[(2)] = false);

(statearr_54509_54626[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (26))){
var inst_54119 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54510_54627 = state_54415__$1;
(statearr_54510_54627[(2)] = inst_54119);

(statearr_54510_54627[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (16))){
var inst_54076 = (state_54415[(17)]);
var inst_54074 = (state_54415[(2)]);
var inst_54075 = cljs.core.get.call(null,inst_54074,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_54076__$1 = cljs.core.get.call(null,inst_54074,new cljs.core.Keyword(null,"password","password",417022471));
var inst_54077 = cljs.core.get.call(null,inst_54074,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_54078 = encodeURIComponent(inst_54075);
var inst_54079 = encodeURIComponent(inst_54076__$1);
var inst_54080 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_54078),cljs.core.str("&pass="),cljs.core.str(inst_54079)].join('');
var inst_54081 = cloudxmark.core.jsonp.call(null,inst_54080);
var state_54415__$1 = (function (){var statearr_54511 = state_54415;
(statearr_54511[(16)] = inst_54077);

(statearr_54511[(17)] = inst_54076__$1);

return statearr_54511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54415__$1,(17),inst_54081);
} else {
if((state_val_54416 === (81))){
var state_54415__$1 = state_54415;
var statearr_54512_54628 = state_54415__$1;
(statearr_54512_54628[(2)] = false);

(statearr_54512_54628[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (79))){
var inst_54353 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54353)){
var statearr_54513_54629 = state_54415__$1;
(statearr_54513_54629[(1)] = (83));

} else {
var statearr_54514_54630 = state_54415__$1;
(statearr_54514_54630[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (38))){
var inst_54048 = (state_54415[(7)]);
var inst_54186 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54187 = (inst_54186 & (64));
var inst_54188 = inst_54048.cljs$core$ISeq$;
var inst_54189 = (inst_54187) || (inst_54188);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54189)){
var statearr_54515_54631 = state_54415__$1;
(statearr_54515_54631[(1)] = (41));

} else {
var statearr_54516_54632 = state_54415__$1;
(statearr_54516_54632[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (87))){
var inst_54361 = (state_54415[(11)]);
var inst_54365 = encodeURIComponent(inst_54361);
var inst_54366 = [cljs.core.str("query="),cljs.core.str(inst_54365)].join('');
var state_54415__$1 = state_54415;
var statearr_54517_54633 = state_54415__$1;
(statearr_54517_54633[(2)] = inst_54366);

(statearr_54517_54633[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (30))){
var inst_54137 = (state_54415[(2)]);
var inst_54138 = cljs.core.js__GT_clj.call(null,inst_54137);
var inst_54139 = cloudxmark.core.convert_json_status.call(null,inst_54138,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_54140 = cljs.core.List.EMPTY;
var inst_54141 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_54142 = cljs.core._conj.call(null,inst_54140,inst_54141);
var inst_54143 = cljs.core.List.EMPTY;
var inst_54144 = cljs.core._conj.call(null,inst_54143,inst_54139);
var inst_54145 = cljs.core.concat.call(null,inst_54142,inst_54144);
var inst_54146 = cljs.core.seq.call(null,inst_54145);
var inst_54147 = cljs.core.sequence.call(null,inst_54146);
var inst_54148 = cljs.core.List.EMPTY;
var inst_54149 = cljs.core._conj.call(null,inst_54148,inst_54147);
var inst_54150 = cljs.core.concat.call(null,inst_54149);
var inst_54151 = cljs.core.seq.call(null,inst_54150);
var inst_54152 = cljs.core.sequence.call(null,inst_54151);
var inst_54153 = cljs.core.vec.call(null,inst_54152);
var inst_54154 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54153);
var state_54415__$1 = state_54415;
var statearr_54518_54634 = state_54415__$1;
(statearr_54518_54634[(2)] = inst_54154);

(statearr_54518_54634[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (73))){
var inst_54315 = (state_54415[(2)]);
var inst_54316 = cljs.core.js__GT_clj.call(null,inst_54315);
var inst_54317 = cloudxmark.core.convert_json_lsts_result.call(null,inst_54316,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_54318 = cljs.core.List.EMPTY;
var inst_54319 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_54320 = cljs.core._conj.call(null,inst_54318,inst_54319);
var inst_54321 = cljs.core.List.EMPTY;
var inst_54322 = cljs.core._conj.call(null,inst_54321,inst_54317);
var inst_54323 = cljs.core.concat.call(null,inst_54320,inst_54322);
var inst_54324 = cljs.core.seq.call(null,inst_54323);
var inst_54325 = cljs.core.sequence.call(null,inst_54324);
var inst_54326 = cljs.core.List.EMPTY;
var inst_54327 = cljs.core._conj.call(null,inst_54326,inst_54325);
var inst_54328 = cljs.core.concat.call(null,inst_54327);
var inst_54329 = cljs.core.seq.call(null,inst_54328);
var inst_54330 = cljs.core.sequence.call(null,inst_54329);
var inst_54331 = cljs.core.vec.call(null,inst_54330);
var inst_54332 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_54331);
var state_54415__$1 = state_54415;
var statearr_54519_54635 = state_54415__$1;
(statearr_54519_54635[(2)] = inst_54332);

(statearr_54519_54635[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (10))){
var inst_54069 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54069)){
var statearr_54520_54636 = state_54415__$1;
(statearr_54520_54636[(1)] = (14));

} else {
var statearr_54521_54637 = state_54415__$1;
(statearr_54521_54637[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (18))){
var inst_54048 = (state_54415[(7)]);
var inst_54109 = (inst_54048 == null);
var inst_54110 = cljs.core.not.call(null,inst_54109);
var state_54415__$1 = state_54415;
if(inst_54110){
var statearr_54522_54638 = state_54415__$1;
(statearr_54522_54638[(1)] = (21));

} else {
var statearr_54523_54639 = state_54415__$1;
(statearr_54523_54639[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (52))){
var state_54415__$1 = state_54415;
var statearr_54524_54640 = state_54415__$1;
(statearr_54524_54640[(2)] = false);

(statearr_54524_54640[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (67))){
var state_54415__$1 = state_54415;
var statearr_54525_54641 = state_54415__$1;
(statearr_54525_54641[(2)] = true);

(statearr_54525_54641[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (71))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54526_54642 = state_54415__$1;
(statearr_54526_54642[(2)] = inst_54048);

(statearr_54526_54642[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (42))){
var state_54415__$1 = state_54415;
var statearr_54527_54643 = state_54415__$1;
(statearr_54527_54643[(2)] = false);

(statearr_54527_54643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (80))){
var state_54415__$1 = state_54415;
var statearr_54528_54644 = state_54415__$1;
(statearr_54528_54644[(2)] = true);

(statearr_54528_54644[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (37))){
var inst_54402 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54529_54645 = state_54415__$1;
(statearr_54529_54645[(2)] = inst_54402);

(statearr_54529_54645[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (63))){
var inst_54398 = (state_54415[(2)]);
var state_54415__$1 = state_54415;
var statearr_54530_54646 = state_54415__$1;
(statearr_54530_54646[(2)] = inst_54398);

(statearr_54530_54646[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (8))){
var inst_54048 = (state_54415[(7)]);
var inst_54059 = inst_54048.cljs$lang$protocol_mask$partition0$;
var inst_54060 = (inst_54059 & (64));
var inst_54061 = inst_54048.cljs$core$ISeq$;
var inst_54062 = (inst_54060) || (inst_54061);
var state_54415__$1 = state_54415;
if(cljs.core.truth_(inst_54062)){
var statearr_54531_54647 = state_54415__$1;
(statearr_54531_54647[(1)] = (11));

} else {
var statearr_54532_54648 = state_54415__$1;
(statearr_54532_54648[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (49))){
var inst_54047 = (state_54415[(8)]);
var inst_54279 = cljs.core._EQ_.call(null,inst_54047,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_54415__$1 = state_54415;
if(inst_54279){
var statearr_54533_54649 = state_54415__$1;
(statearr_54533_54649[(1)] = (61));

} else {
var statearr_54534_54650 = state_54415__$1;
(statearr_54534_54650[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54416 === (84))){
var inst_54048 = (state_54415[(7)]);
var state_54415__$1 = state_54415;
var statearr_54535_54651 = state_54415__$1;
(statearr_54535_54651[(2)] = inst_54048);

(statearr_54535_54651[(1)] = (85));


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
});})(c__28412__auto__))
;
return ((function (switch__28389__auto__,c__28412__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28390__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28390__auto____0 = (function (){
var statearr_54539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54539[(0)] = cloudxmark$core$search_loop_$_state_machine__28390__auto__);

(statearr_54539[(1)] = (1));

return statearr_54539;
});
var cloudxmark$core$search_loop_$_state_machine__28390__auto____1 = (function (state_54415){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_54415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e54540){if((e54540 instanceof Object)){
var ex__28393__auto__ = e54540;
var statearr_54541_54652 = state_54415;
(statearr_54541_54652[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54653 = state_54415;
state_54415 = G__54653;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28390__auto__ = function(state_54415){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____1.call(this,state_54415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28390__auto____0;
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28390__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_54542 = f__28413__auto__.call(null);
(statearr_54542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_54542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471269442649