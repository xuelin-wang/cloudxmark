// Compiled by ClojureScript 1.9.225 {}
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
var idx_31343 = (0);
while(true){
var len1_31344 = b1.length;
if((cljs.core._EQ_.call(null,idx_31343,len1_31344)) || (cljs.core._EQ_.call(null,idx_31343,max_len))){
} else {
(b1[idx_31343] = ((b1[idx_31343]) ^ (b2[idx_31343])));

var G__31345 = (idx_31343 + (1));
idx_31343 = G__31345;
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
var args31348 = [];
var len__22773__auto___31351 = arguments.length;
var i__22774__auto___31352 = (0);
while(true){
if((i__22774__auto___31352 < len__22773__auto___31351)){
args31348.push((arguments[i__22774__auto___31352]));

var G__31353 = (i__22774__auto___31352 + (1));
i__22774__auto___31352 = G__31353;
continue;
} else {
}
break;
}

var G__31350 = args31348.length;
switch (G__31350) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31348.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__31346_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31346_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__31347_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__31347_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__31355,_,p__31356){
var map__31357 = p__31355;
var map__31357__$1 = ((((!((map__31357 == null)))?((((map__31357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31357):map__31357);
var env = map__31357__$1;
var state = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__31358 = p__31356;
var map__31358__$1 = ((((!((map__31358 == null)))?((((map__31358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31358):map__31358);
var query_ver = cljs.core.get.call(null,map__31358__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__31358__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__31361 = lst;
var map__31361__$1 = ((((!((map__31361 == null)))?((((map__31361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31361):map__31361);
var lsts = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_31363 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_31363);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__31364,_,p__31365){
var map__31366 = p__31364;
var map__31366__$1 = ((((!((map__31366 == null)))?((((map__31366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31366):map__31366);
var env = map__31366__$1;
var state = cljs.core.get.call(null,map__31366__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31367 = p__31365;
var map__31367__$1 = ((((!((map__31367 == null)))?((((map__31367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31367):map__31367);
var status = map__31367__$1;
var id = cljs.core.get.call(null,map__31367__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31366,map__31366__$1,env,state,map__31367,map__31367__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__31366,map__31366__$1,env,state,map__31367,map__31367__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__31370,_,p__31371){
var map__31372 = p__31370;
var map__31372__$1 = ((((!((map__31372 == null)))?((((map__31372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);
var env = map__31372__$1;
var state = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31373 = p__31371;
var map__31373__$1 = ((((!((map__31373 == null)))?((((map__31373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31373):map__31373);
var path = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31372,map__31372__$1,env,state,map__31373,map__31373__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__31372,map__31372__$1,env,state,map__31373,map__31373__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__31376,_,p__31377){
var map__31378 = p__31376;
var map__31378__$1 = ((((!((map__31378 == null)))?((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var env = map__31378__$1;
var state = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31379 = p__31377;
var map__31379__$1 = ((((!((map__31379 == null)))?((((map__31379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);
var data_map = map__31379__$1;
var lst_name = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31378,map__31378__$1,env,state,map__31379,map__31379__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__31378,map__31378__$1,env,state,map__31379,map__31379__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__31382,_,p__31383){
var map__31384 = p__31382;
var map__31384__$1 = ((((!((map__31384 == null)))?((((map__31384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31384):map__31384);
var env = map__31384__$1;
var state = cljs.core.get.call(null,map__31384__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31385 = p__31383;
var map__31385__$1 = ((((!((map__31385 == null)))?((((map__31385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);
var field_id = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31384,map__31384__$1,env,state,map__31385,map__31385__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__31384,map__31384__$1,env,state,map__31385,map__31385__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__31388,_,p__31389){
var map__31390 = p__31388;
var map__31390__$1 = ((((!((map__31390 == null)))?((((map__31390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31390):map__31390);
var env = map__31390__$1;
var state = cljs.core.get.call(null,map__31390__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31391 = p__31389;
var map__31391__$1 = ((((!((map__31391 == null)))?((((map__31391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);
var data_map = map__31391__$1;
var user_id = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31390,map__31390__$1,env,state,map__31391,map__31391__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__31390,map__31390__$1,env,state,map__31391,map__31391__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__31394,_,p__31395){
var map__31396 = p__31394;
var map__31396__$1 = ((((!((map__31396 == null)))?((((map__31396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31396):map__31396);
var env = map__31396__$1;
var state = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31397 = p__31395;
var map__31397__$1 = ((((!((map__31397 == null)))?((((map__31397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31397):map__31397);
var data_map = map__31397__$1;
var user_id = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31396,map__31396__$1,env,state,map__31397,map__31397__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__31396,map__31396__$1,env,state,map__31397,map__31397__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__31400,_,p__31401){
var map__31402 = p__31400;
var map__31402__$1 = ((((!((map__31402 == null)))?((((map__31402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31402):map__31402);
var env = map__31402__$1;
var state = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31403 = p__31401;
var map__31403__$1 = ((((!((map__31403 == null)))?((((map__31403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);
var data_map = map__31403__$1;
var type = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31402,map__31402__$1,env,state,map__31403,map__31403__$1,data_map,type,fields){
return (function (){
return null;
});})(map__31402,map__31402__$1,env,state,map__31403,map__31403__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__31406,_,p__31407){
var map__31408 = p__31406;
var map__31408__$1 = ((((!((map__31408 == null)))?((((map__31408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);
var env = map__31408__$1;
var state = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31409 = p__31407;
var map__31409__$1 = ((((!((map__31409 == null)))?((((map__31409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);
var data_map = map__31409__$1;
var name = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31408,map__31408__$1,env,state,map__31409,map__31409__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__31408,map__31408__$1,env,state,map__31409,map__31409__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__31412,_,p__31413){
var map__31414 = p__31412;
var map__31414__$1 = ((((!((map__31414 == null)))?((((map__31414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31414):map__31414);
var env = map__31414__$1;
var state = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31415 = p__31413;
var map__31415__$1 = ((((!((map__31415 == null)))?((((map__31415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31415):map__31415);
var data_map = map__31415__$1;
var name = cljs.core.get.call(null,map__31415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__31415__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31414,map__31414__$1,env,state,map__31415,map__31415__$1,data_map,name,value){
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
});})(map__31414,map__31414__$1,env,state,map__31415,map__31415__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__31418,_,___$1){
var map__31419 = p__31418;
var map__31419__$1 = ((((!((map__31419 == null)))?((((map__31419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31419):map__31419);
var env = map__31419__$1;
var state = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31419,map__31419__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__31419,map__31419__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__31421,_,p__31422){
var map__31423 = p__31421;
var map__31423__$1 = ((((!((map__31423 == null)))?((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var env = map__31423__$1;
var state = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31424 = p__31422;
var map__31424__$1 = ((((!((map__31424 == null)))?((((map__31424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31424):map__31424);
var data_map = map__31424__$1;
var status = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31423,map__31423__$1,env,state,map__31424,map__31424__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__31423,map__31423__$1,env,state,map__31424,map__31424__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args31427 = [];
var len__22773__auto___31430 = arguments.length;
var i__22774__auto___31431 = (0);
while(true){
if((i__22774__auto___31431 < len__22773__auto___31430)){
args31427.push((arguments[i__22774__auto___31431]));

var G__31432 = (i__22774__auto___31431 + (1));
i__22774__auto___31431 = G__31432;
continue;
} else {
}
break;
}

var G__31429 = args31427.length;
switch (G__31429) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31427.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__31434){
var map__31440 = p__31434;
var map__31440__$1 = ((((!((map__31440 == null)))?((((map__31440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31440):map__31440);
var info = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__31442 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__31442,(0),null);
var msg = cljs.core.nth.call(null,vec__31442,(1),null);
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
var map__31447 = lst;
var map__31447__$1 = ((((!((map__31447 == null)))?((((map__31447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31447):map__31447);
var lsts = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__31447,map__31447__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__31447,map__31447__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__31451 = lst;
var map__31451__$1 = ((((!((map__31451 == null)))?((((map__31451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31451):map__31451);
var status = cljs.core.get.call(null,map__31451__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__31457 = (function (){var G__31460 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31460) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__31457,(0),null);
var query_key = cljs.core.nth.call(null,vec__31457,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__31457,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__31457,elem_key,query_key))
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
var this__28855__auto__ = this;
React.Component.apply(this__28855__auto__,arguments);

if(!((this__28855__auto__.initLocalState == null))){
this__28855__auto__.state = this__28855__auto__.initLocalState();
} else {
this__28855__auto__.state = {};
}

return this__28855__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x31466_31478 = cloudxmark.core.Lsts.prototype;
x31466_31478.componentWillUpdate = ((function (x31466_31478){
return (function (next_props__28734__auto__,next_state__28735__auto__){
var this__28733__auto__ = this;
if(((!((this__28733__auto__ == null)))?(((false) || (this__28733__auto__.om$next$Ident$))?true:false):false)){
var ident__28737__auto___31479 = om.next.ident.call(null,this__28733__auto__,om.next.props.call(null,this__28733__auto__));
var next_ident__28738__auto___31480 = om.next.ident.call(null,this__28733__auto__,om.next._next_props.call(null,next_props__28734__auto__,this__28733__auto__));
if(cljs.core.not_EQ_.call(null,ident__28737__auto___31479,next_ident__28738__auto___31480)){
var idxr__28739__auto___31481 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28733__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28739__auto___31481 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28739__auto___31481),((function (idxr__28739__auto___31481,ident__28737__auto___31479,next_ident__28738__auto___31480,this__28733__auto__,x31466_31478){
return (function (indexes__28740__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28740__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28737__auto___31479], null),cljs.core.disj,this__28733__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28738__auto___31480], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28733__auto__);
});})(idxr__28739__auto___31481,ident__28737__auto___31479,next_ident__28738__auto___31480,this__28733__auto__,x31466_31478))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28733__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28733__auto__);
});})(x31466_31478))
;

x31466_31478.shouldComponentUpdate = ((function (x31466_31478){
return (function (next_props__28734__auto__,next_state__28735__auto__){
var this__28733__auto__ = this;
var next_children__28736__auto__ = next_props__28734__auto__.children;
var next_props__28734__auto____$1 = goog.object.get(next_props__28734__auto__,"omcljs$value");
var next_props__28734__auto____$2 = (function (){var G__31468 = next_props__28734__auto____$1;
if((next_props__28734__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31468);
} else {
return G__31468;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28733__auto__),next_props__28734__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__28733__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28733__auto__.state,"omcljs$state"),goog.object.get(next_state__28735__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28733__auto__.props.children,next_children__28736__auto__);
}
}
});})(x31466_31478))
;

x31466_31478.componentWillUnmount = ((function (x31466_31478){
return (function (){
var this__28733__auto__ = this;
var r__28744__auto__ = om.next.get_reconciler.call(null,this__28733__auto__);
var cfg__28745__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28744__auto__);
var st__28746__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28745__auto__);
var indexer__28743__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28745__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__28746__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28746__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28733__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28746__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28733__auto__);
} else {
}

if((indexer__28743__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28743__auto__,this__28733__auto__);
}
});})(x31466_31478))
;

x31466_31478.componentDidUpdate = ((function (x31466_31478){
return (function (prev_props__28741__auto__,prev_state__28742__auto__){
var this__28733__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28733__auto__);
});})(x31466_31478))
;

x31466_31478.isMounted = ((function (x31466_31478){
return (function (){
var this__28733__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28733__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31466_31478))
;

x31466_31478.componentWillMount = ((function (x31466_31478){
return (function (){
var this__28733__auto__ = this;
var indexer__28743__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28733__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28743__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28743__auto__,this__28733__auto__);
}
});})(x31466_31478))
;

x31466_31478.render = ((function (x31466_31478){
return (function (){
var this__28732__auto__ = this;
var this$ = this__28732__auto__;
var _STAR_reconciler_STAR_31469 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31470 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31471 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31472 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31473 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28732__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28732__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28732__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28732__auto__);

om.next._STAR_parent_STAR_ = this__28732__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__31474 = lst;
var map__31474__$1 = ((((!((map__31474 == null)))?((((map__31474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31474):map__31474);
var lsts = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__31474__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31473;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31472;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31471;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31470;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31469;
}});})(x31466_31478))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x31476_31482 = cloudxmark.core.Lsts;
/** @nocollapse */
x31476_31482.om$next$IQueryParams$ = true;

/** @nocollapse */
x31476_31482.om$next$IQueryParams$params$arity$1 = ((function (x31476_31482){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x31476_31482))
;

/** @nocollapse */
x31476_31482.om$next$IQuery$ = true;

/** @nocollapse */
x31476_31482.om$next$IQuery$query$arity$1 = ((function (x31476_31482){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x31476_31482))
;


var x31477_31483 = cloudxmark.core.Lsts.prototype;

x31477_31483.om$next$IQueryParams$ = true;


x31477_31483.om$next$IQueryParams$params$arity$1 = ((function (x31477_31483){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x31477_31483))
;


x31477_31483.om$next$IQuery$ = true;


x31477_31483.om$next$IQuery$query$arity$1 = ((function (x31477_31483){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x31477_31483))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28858__auto__,writer__28859__auto__,opt__28860__auto__){
return cljs.core._write.call(null,writer__28859__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__31492,cb){
var map__31493 = p__31492;
var map__31493__$1 = ((((!((map__31493 == null)))?((((map__31493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);
var lst_search = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__31495 = om.next.query__GT_ast.call(null,lst_search);
var map__31495__$1 = ((((!((map__31495 == null)))?((((map__31495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31495):map__31495);
var vec__31496 = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__31496,(0),null);
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
var map__31504 = result;
var map__31504__$1 = ((((!((map__31504 == null)))?((((map__31504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31504):map__31504);
var lsts = cljs.core.get.call(null,map__31504__$1,"lsts");
var user_id = cljs.core.get.call(null,map__31504__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__31504__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__31505 = json_status;
var map__31505__$1 = ((((!((map__31505 == null)))?((((map__31505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31505):map__31505);
var info = cljs.core.get.call(null,map__31505__$1,"info");
var warn = cljs.core.get.call(null,map__31505__$1,"warn");
var error = cljs.core.get.call(null,map__31505__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__31510 = json_status;
var map__31510__$1 = ((((!((map__31510 == null)))?((((map__31510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31510):map__31510);
var info = cljs.core.get.call(null,map__31510__$1,"info");
var warn = cljs.core.get.call(null,map__31510__$1,"warn");
var error = cljs.core.get.call(null,map__31510__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28601__auto__){
return (function (){
var f__28602__auto__ = (function (){var switch__28578__auto__ = ((function (c__28601__auto__){
return (function (state_32410){
var state_val_32411 = (state_32410[(1)]);
if((state_val_32411 === (65))){
var state_32410__$1 = state_32410;
var statearr_32412_32538 = state_32410__$1;
(statearr_32412_32538[(2)] = false);

(statearr_32412_32538[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (70))){
var inst_32043 = (state_32410[(7)]);
var inst_32293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32413_32539 = state_32410__$1;
(statearr_32413_32539[(2)] = inst_32293);

(statearr_32413_32539[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (62))){
var inst_32042 = (state_32410[(8)]);
var inst_32329 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_32410__$1 = state_32410;
if(inst_32329){
var statearr_32414_32540 = state_32410__$1;
(statearr_32414_32540[(1)] = (74));

} else {
var statearr_32415_32541 = state_32410__$1;
(statearr_32415_32541[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (74))){
var inst_32043 = (state_32410[(7)]);
var inst_32332 = [cljs.core.str("lst query data:"),cljs.core.str(inst_32043)].join('');
var inst_32333 = cljs.core.println.call(null,inst_32332);
var inst_32335 = (inst_32043 == null);
var inst_32336 = cljs.core.not.call(null,inst_32335);
var state_32410__$1 = (function (){var statearr_32416 = state_32410;
(statearr_32416[(9)] = inst_32333);

return statearr_32416;
})();
if(inst_32336){
var statearr_32417_32542 = state_32410__$1;
(statearr_32417_32542[(1)] = (77));

} else {
var statearr_32418_32543 = state_32410__$1;
(statearr_32418_32543[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (7))){
var inst_32403 = (state_32410[(2)]);
var state_32410__$1 = (function (){var statearr_32419 = state_32410;
(statearr_32419[(10)] = inst_32403);

return statearr_32419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(93),c);
} else {
if((state_val_32411 === (59))){
var inst_32245 = (state_32410[(2)]);
var inst_32246 = cljs.core.get.call(null,inst_32245,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_32247 = cljs.core.get.call(null,inst_32245,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_32248 = cljs.core.get.call(null,inst_32245,new cljs.core.Keyword(null,"value","value",305978217));
var inst_32249 = encodeURIComponent(inst_32246);
var inst_32250 = encodeURIComponent(inst_32247);
var inst_32251 = encodeURIComponent(inst_32248);
var inst_32252 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_32249),cljs.core.str("&name="),cljs.core.str(inst_32250),cljs.core.str("&value="),cljs.core.str(inst_32251)].join('');
var inst_32253 = cloudxmark.core.jsonp.call(null,inst_32252);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(60),inst_32253);
} else {
if((state_val_32411 === (86))){
var state_32410__$1 = state_32410;
var statearr_32420_32544 = state_32410__$1;
(statearr_32420_32544[(2)] = "");

(statearr_32420_32544[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (20))){
var inst_32401 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32421_32545 = state_32410__$1;
(statearr_32421_32545[(2)] = inst_32401);

(statearr_32421_32545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (72))){
var inst_32296 = (state_32410[(2)]);
var inst_32297 = cljs.core.get.call(null,inst_32296,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_32298 = cljs.core.get.call(null,inst_32296,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_32299 = cljs.core.get.call(null,inst_32296,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_32300 = cljs.core.get.call(null,inst_32296,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_32301 = cljs.core.get.call(null,inst_32296,new cljs.core.Keyword(null,"value","value",305978217));
var inst_32302 = encodeURIComponent(inst_32297);
var inst_32303 = encodeURIComponent(inst_32298);
var inst_32304 = encodeURIComponent(inst_32299);
var inst_32305 = encodeURIComponent(inst_32300);
var inst_32306 = encodeURIComponent(inst_32301);
var inst_32307 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_32302),cljs.core.str("&lst-name="),cljs.core.str(inst_32303),cljs.core.str("&orig-name="),cljs.core.str(inst_32304),cljs.core.str("&col-name="),cljs.core.str(inst_32305),cljs.core.str("&value="),cljs.core.str(inst_32306)].join('');
var inst_32308 = cloudxmark.core.jsonp.call(null,inst_32307);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(73),inst_32308);
} else {
if((state_val_32411 === (58))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32422_32546 = state_32410__$1;
(statearr_32422_32546[(2)] = inst_32043);

(statearr_32422_32546[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (60))){
var inst_32255 = (state_32410[(2)]);
var inst_32256 = cljs.core.js__GT_clj.call(null,inst_32255);
var inst_32257 = cloudxmark.core.convert_json_lsts_result.call(null,inst_32256,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_32258 = cljs.core.List.EMPTY;
var inst_32259 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_32260 = cljs.core._conj.call(null,inst_32258,inst_32259);
var inst_32261 = cljs.core.List.EMPTY;
var inst_32262 = cljs.core._conj.call(null,inst_32261,inst_32257);
var inst_32263 = cljs.core.concat.call(null,inst_32260,inst_32262);
var inst_32264 = cljs.core.seq.call(null,inst_32263);
var inst_32265 = cljs.core.sequence.call(null,inst_32264);
var inst_32266 = cljs.core.List.EMPTY;
var inst_32267 = cljs.core._conj.call(null,inst_32266,inst_32265);
var inst_32268 = cljs.core.concat.call(null,inst_32267);
var inst_32269 = cljs.core.seq.call(null,inst_32268);
var inst_32270 = cljs.core.sequence.call(null,inst_32269);
var inst_32271 = cljs.core.vec.call(null,inst_32270);
var inst_32272 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32271);
var state_32410__$1 = state_32410;
var statearr_32423_32547 = state_32410__$1;
(statearr_32423_32547[(2)] = inst_32272);

(statearr_32423_32547[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (27))){
var inst_32043 = (state_32410[(7)]);
var inst_32119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32424_32548 = state_32410__$1;
(statearr_32424_32548[(2)] = inst_32119);

(statearr_32424_32548[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (1))){
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(2),c);
} else {
if((state_val_32411 === (69))){
var inst_32288 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32425_32549 = state_32410__$1;
(statearr_32425_32549[(2)] = inst_32288);

(statearr_32425_32549[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (24))){
var state_32410__$1 = state_32410;
var statearr_32426_32550 = state_32410__$1;
(statearr_32426_32550[(2)] = true);

(statearr_32426_32550[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (55))){
var state_32410__$1 = state_32410;
var statearr_32427_32551 = state_32410__$1;
(statearr_32427_32551[(2)] = false);

(statearr_32427_32551[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (85))){
var inst_32356 = (state_32410[(11)]);
var inst_32353 = (state_32410[(2)]);
var inst_32354 = cljs.core.get.call(null,inst_32353,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_32355 = cljs.core.get.call(null,inst_32353,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_32356__$1 = cljs.core.get.call(null,inst_32353,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_32357 = cljs.core.empty_QMARK_.call(null,inst_32356__$1);
var state_32410__$1 = (function (){var statearr_32428 = state_32410;
(statearr_32428[(12)] = inst_32355);

(statearr_32428[(13)] = inst_32354);

(statearr_32428[(11)] = inst_32356__$1);

return statearr_32428;
})();
if(inst_32357){
var statearr_32429_32552 = state_32410__$1;
(statearr_32429_32552[(1)] = (86));

} else {
var statearr_32430_32553 = state_32410__$1;
(statearr_32430_32553[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (39))){
var state_32410__$1 = state_32410;
var statearr_32431_32554 = state_32410__$1;
(statearr_32431_32554[(2)] = false);

(statearr_32431_32554[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (88))){
var inst_32363 = (state_32410[(2)]);
var inst_32364 = [cljs.core.str("/getItems?"),cljs.core.str(inst_32363)].join('');
var inst_32365 = cloudxmark.core.jsonp.call(null,inst_32364);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(89),inst_32365);
} else {
if((state_val_32411 === (46))){
var inst_32196 = (state_32410[(2)]);
var inst_32197 = cljs.core.get.call(null,inst_32196,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_32198 = cljs.core.get.call(null,inst_32196,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_32199 = encodeURIComponent(inst_32197);
var inst_32200 = encodeURIComponent(inst_32198);
var inst_32201 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_32199),cljs.core.str("&desc="),cljs.core.str(inst_32200)].join('');
var inst_32202 = cloudxmark.core.jsonp.call(null,inst_32201);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(47),inst_32202);
} else {
if((state_val_32411 === (4))){
var inst_32408 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32410__$1,inst_32408);
} else {
if((state_val_32411 === (77))){
var inst_32043 = (state_32410[(7)]);
var inst_32338 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32339 = (inst_32338 & (64));
var inst_32340 = inst_32043.cljs$core$ISeq$;
var inst_32341 = (inst_32339) || (inst_32340);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32341)){
var statearr_32432_32555 = state_32410__$1;
(statearr_32432_32555[(1)] = (80));

} else {
var statearr_32433_32556 = state_32410__$1;
(statearr_32433_32556[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (54))){
var state_32410__$1 = state_32410;
var statearr_32434_32557 = state_32410__$1;
(statearr_32434_32557[(2)] = true);

(statearr_32434_32557[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (92))){
var inst_32389 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32435_32558 = state_32410__$1;
(statearr_32435_32558[(2)] = inst_32389);

(statearr_32435_32558[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (15))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32436_32559 = state_32410__$1;
(statearr_32436_32559[(2)] = inst_32043);

(statearr_32436_32559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (48))){
var inst_32043 = (state_32410[(7)]);
var inst_32227 = (inst_32043 == null);
var inst_32228 = cljs.core.not.call(null,inst_32227);
var state_32410__$1 = state_32410;
if(inst_32228){
var statearr_32437_32560 = state_32410__$1;
(statearr_32437_32560[(1)] = (51));

} else {
var statearr_32438_32561 = state_32410__$1;
(statearr_32438_32561[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (50))){
var inst_32395 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32439_32562 = state_32410__$1;
(statearr_32439_32562[(2)] = inst_32395);

(statearr_32439_32562[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (75))){
var state_32410__$1 = state_32410;
var statearr_32440_32563 = state_32410__$1;
(statearr_32440_32563[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (21))){
var inst_32043 = (state_32410[(7)]);
var inst_32107 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32108 = (inst_32107 & (64));
var inst_32109 = inst_32043.cljs$core$ISeq$;
var inst_32110 = (inst_32108) || (inst_32109);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32110)){
var statearr_32442_32564 = state_32410__$1;
(statearr_32442_32564[(1)] = (24));

} else {
var statearr_32443_32565 = state_32410__$1;
(statearr_32443_32565[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (31))){
var inst_32153 = cloudxmark.core.jsonp.call(null,"/logout");
var state_32410__$1 = state_32410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(34),inst_32153);
} else {
if((state_val_32411 === (32))){
var inst_32042 = (state_32410[(8)]);
var inst_32174 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_32410__$1 = state_32410;
if(inst_32174){
var statearr_32444_32566 = state_32410__$1;
(statearr_32444_32566[(1)] = (35));

} else {
var statearr_32445_32567 = state_32410__$1;
(statearr_32445_32567[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (40))){
var inst_32191 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32191)){
var statearr_32446_32568 = state_32410__$1;
(statearr_32446_32568[(1)] = (44));

} else {
var statearr_32447_32569 = state_32410__$1;
(statearr_32447_32569[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (91))){
var state_32410__$1 = state_32410;
var statearr_32448_32570 = state_32410__$1;
(statearr_32448_32570[(2)] = null);

(statearr_32448_32570[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (56))){
var inst_32237 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32449_32571 = state_32410__$1;
(statearr_32449_32571[(2)] = inst_32237);

(statearr_32449_32571[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (33))){
var inst_32399 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32450_32572 = state_32410__$1;
(statearr_32450_32572[(2)] = inst_32399);

(statearr_32450_32572[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (13))){
var inst_32061 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32451_32573 = state_32410__$1;
(statearr_32451_32573[(2)] = inst_32061);

(statearr_32451_32573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (22))){
var state_32410__$1 = state_32410;
var statearr_32452_32574 = state_32410__$1;
(statearr_32452_32574[(2)] = false);

(statearr_32452_32574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (90))){
var state_32410__$1 = state_32410;
var statearr_32453_32575 = state_32410__$1;
(statearr_32453_32575[(2)] = null);

(statearr_32453_32575[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (36))){
var inst_32042 = (state_32410[(8)]);
var inst_32223 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_32410__$1 = state_32410;
if(inst_32223){
var statearr_32454_32576 = state_32410__$1;
(statearr_32454_32576[(1)] = (48));

} else {
var statearr_32455_32577 = state_32410__$1;
(statearr_32455_32577[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (41))){
var state_32410__$1 = state_32410;
var statearr_32456_32578 = state_32410__$1;
(statearr_32456_32578[(2)] = true);

(statearr_32456_32578[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (89))){
var inst_32355 = (state_32410[(12)]);
var inst_32367 = (state_32410[(2)]);
var inst_32368 = cljs.core.js__GT_clj.call(null,inst_32367);
var inst_32369 = cloudxmark.core.convert_json_lsts_result.call(null,inst_32368,inst_32355,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_32370 = cljs.core.List.EMPTY;
var inst_32371 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_32372 = cljs.core._conj.call(null,inst_32370,inst_32371);
var inst_32373 = cljs.core.List.EMPTY;
var inst_32374 = cljs.core._conj.call(null,inst_32373,inst_32369);
var inst_32375 = cljs.core.concat.call(null,inst_32372,inst_32374);
var inst_32376 = cljs.core.seq.call(null,inst_32375);
var inst_32377 = cljs.core.sequence.call(null,inst_32376);
var inst_32378 = cljs.core.List.EMPTY;
var inst_32379 = cljs.core._conj.call(null,inst_32378,inst_32377);
var inst_32380 = cljs.core.concat.call(null,inst_32379);
var inst_32381 = cljs.core.seq.call(null,inst_32380);
var inst_32382 = cljs.core.sequence.call(null,inst_32381);
var inst_32383 = cljs.core.vec.call(null,inst_32382);
var inst_32384 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32383);
var state_32410__$1 = state_32410;
var statearr_32457_32579 = state_32410__$1;
(statearr_32457_32579[(2)] = inst_32384);

(statearr_32457_32579[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (43))){
var inst_32188 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32458_32580 = state_32410__$1;
(statearr_32458_32580[(2)] = inst_32188);

(statearr_32458_32580[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (61))){
var inst_32043 = (state_32410[(7)]);
var inst_32278 = (inst_32043 == null);
var inst_32279 = cljs.core.not.call(null,inst_32278);
var state_32410__$1 = state_32410;
if(inst_32279){
var statearr_32459_32581 = state_32410__$1;
(statearr_32459_32581[(1)] = (64));

} else {
var statearr_32460_32582 = state_32410__$1;
(statearr_32460_32582[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (29))){
var inst_32122 = (state_32410[(2)]);
var inst_32123 = cljs.core.get.call(null,inst_32122,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_32124 = cljs.core.get.call(null,inst_32122,new cljs.core.Keyword(null,"password","password",417022471));
var inst_32125 = cljs.core.get.call(null,inst_32122,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_32126 = cloudxmark.core.enc_password.call(null,inst_32124);
var inst_32127 = encodeURIComponent(inst_32123);
var inst_32128 = encodeURIComponent(inst_32126);
var inst_32129 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_32127),cljs.core.str("&pass="),cljs.core.str(inst_32128)].join('');
var inst_32130 = cloudxmark.core.jsonp.call(null,inst_32129);
var state_32410__$1 = (function (){var statearr_32461 = state_32410;
(statearr_32461[(14)] = inst_32125);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(30),inst_32130);
} else {
if((state_val_32411 === (44))){
var inst_32043 = (state_32410[(7)]);
var inst_32193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32462_32583 = state_32410__$1;
(statearr_32462_32583[(2)] = inst_32193);

(statearr_32462_32583[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (93))){
var inst_32405 = (state_32410[(2)]);
var inst_32037 = inst_32405;
var state_32410__$1 = (function (){var statearr_32463 = state_32410;
(statearr_32463[(15)] = inst_32037);

return statearr_32463;
})();
var statearr_32464_32584 = state_32410__$1;
(statearr_32464_32584[(2)] = null);

(statearr_32464_32584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (6))){
var inst_32042 = (state_32410[(8)]);
var inst_32100 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_32410__$1 = state_32410;
if(inst_32100){
var statearr_32465_32585 = state_32410__$1;
(statearr_32465_32585[(1)] = (18));

} else {
var statearr_32466_32586 = state_32410__$1;
(statearr_32466_32586[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (28))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32467_32587 = state_32410__$1;
(statearr_32467_32587[(2)] = inst_32043);

(statearr_32467_32587[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (64))){
var inst_32043 = (state_32410[(7)]);
var inst_32281 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32282 = (inst_32281 & (64));
var inst_32283 = inst_32043.cljs$core$ISeq$;
var inst_32284 = (inst_32282) || (inst_32283);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32284)){
var statearr_32468_32588 = state_32410__$1;
(statearr_32468_32588[(1)] = (67));

} else {
var statearr_32469_32589 = state_32410__$1;
(statearr_32469_32589[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (51))){
var inst_32043 = (state_32410[(7)]);
var inst_32230 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32231 = (inst_32230 & (64));
var inst_32232 = inst_32043.cljs$core$ISeq$;
var inst_32233 = (inst_32231) || (inst_32232);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32233)){
var statearr_32470_32590 = state_32410__$1;
(statearr_32470_32590[(1)] = (54));

} else {
var statearr_32471_32591 = state_32410__$1;
(statearr_32471_32591[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (25))){
var state_32410__$1 = state_32410;
var statearr_32472_32592 = state_32410__$1;
(statearr_32472_32592[(2)] = false);

(statearr_32472_32592[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (34))){
var inst_32155 = (state_32410[(2)]);
var inst_32156 = cljs.core.js__GT_clj.call(null,inst_32155);
var inst_32157 = cloudxmark.core.convert_json_status.call(null,inst_32156,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_32158 = cljs.core.List.EMPTY;
var inst_32159 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_32160 = cljs.core._conj.call(null,inst_32158,inst_32159);
var inst_32161 = cljs.core.List.EMPTY;
var inst_32162 = cljs.core._conj.call(null,inst_32161,inst_32157);
var inst_32163 = cljs.core.concat.call(null,inst_32160,inst_32162);
var inst_32164 = cljs.core.seq.call(null,inst_32163);
var inst_32165 = cljs.core.sequence.call(null,inst_32164);
var inst_32166 = cljs.core.List.EMPTY;
var inst_32167 = cljs.core._conj.call(null,inst_32166,inst_32165);
var inst_32168 = cljs.core.concat.call(null,inst_32167);
var inst_32169 = cljs.core.seq.call(null,inst_32168);
var inst_32170 = cljs.core.sequence.call(null,inst_32169);
var inst_32171 = cljs.core.vec.call(null,inst_32170);
var inst_32172 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32171);
var state_32410__$1 = state_32410;
var statearr_32473_32593 = state_32410__$1;
(statearr_32473_32593[(2)] = inst_32172);

(statearr_32473_32593[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (17))){
var inst_32072 = (state_32410[(16)]);
var inst_32071 = (state_32410[(17)]);
var inst_32078 = (state_32410[(2)]);
var inst_32079 = cljs.core.js__GT_clj.call(null,inst_32078);
var inst_32080 = cloudxmark.core.gen_key_bytes.call(null,inst_32071);
var inst_32081 = cloudxmark.core.create_aes_cbc.call(null,inst_32080);
var inst_32082 = cloudxmark.core.convert_json_lsts_result.call(null,inst_32079,inst_32072,new cljs.core.Keyword(null,"login","login",55217519));
var inst_32083 = cljs.core.assoc.call(null,inst_32082,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_32081);
var inst_32084 = cljs.core.List.EMPTY;
var inst_32085 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_32086 = cljs.core._conj.call(null,inst_32084,inst_32085);
var inst_32087 = cljs.core.List.EMPTY;
var inst_32088 = cljs.core._conj.call(null,inst_32087,inst_32083);
var inst_32089 = cljs.core.concat.call(null,inst_32086,inst_32088);
var inst_32090 = cljs.core.seq.call(null,inst_32089);
var inst_32091 = cljs.core.sequence.call(null,inst_32090);
var inst_32092 = cljs.core.List.EMPTY;
var inst_32093 = cljs.core._conj.call(null,inst_32092,inst_32091);
var inst_32094 = cljs.core.concat.call(null,inst_32093);
var inst_32095 = cljs.core.seq.call(null,inst_32094);
var inst_32096 = cljs.core.sequence.call(null,inst_32095);
var inst_32097 = cljs.core.vec.call(null,inst_32096);
var inst_32098 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32097);
var state_32410__$1 = state_32410;
var statearr_32474_32594 = state_32410__$1;
(statearr_32474_32594[(2)] = inst_32098);

(statearr_32474_32594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (3))){
var inst_32042 = (state_32410[(8)]);
var inst_32037 = (state_32410[(15)]);
var inst_32042__$1 = cljs.core.nth.call(null,inst_32037,(0),null);
var inst_32043 = cljs.core.nth.call(null,inst_32037,(1),null);
var inst_32044 = cljs.core.nth.call(null,inst_32037,(2),null);
var inst_32045 = cljs.core._EQ_.call(null,inst_32042__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_32410__$1 = (function (){var statearr_32475 = state_32410;
(statearr_32475[(7)] = inst_32043);

(statearr_32475[(18)] = inst_32044);

(statearr_32475[(8)] = inst_32042__$1);

return statearr_32475;
})();
if(inst_32045){
var statearr_32476_32595 = state_32410__$1;
(statearr_32476_32595[(1)] = (5));

} else {
var statearr_32477_32596 = state_32410__$1;
(statearr_32477_32596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (12))){
var state_32410__$1 = state_32410;
var statearr_32478_32597 = state_32410__$1;
(statearr_32478_32597[(2)] = false);

(statearr_32478_32597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (2))){
var inst_32033 = (state_32410[(2)]);
var inst_32034 = cljs.core.nth.call(null,inst_32033,(0),null);
var inst_32035 = cljs.core.nth.call(null,inst_32033,(1),null);
var inst_32036 = cljs.core.nth.call(null,inst_32033,(2),null);
var inst_32037 = inst_32033;
var state_32410__$1 = (function (){var statearr_32479 = state_32410;
(statearr_32479[(19)] = inst_32036);

(statearr_32479[(20)] = inst_32035);

(statearr_32479[(21)] = inst_32034);

(statearr_32479[(15)] = inst_32037);

return statearr_32479;
})();
var statearr_32480_32598 = state_32410__$1;
(statearr_32480_32598[(2)] = null);

(statearr_32480_32598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (66))){
var inst_32291 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32291)){
var statearr_32481_32599 = state_32410__$1;
(statearr_32481_32599[(1)] = (70));

} else {
var statearr_32482_32600 = state_32410__$1;
(statearr_32482_32600[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (23))){
var inst_32117 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32117)){
var statearr_32483_32601 = state_32410__$1;
(statearr_32483_32601[(1)] = (27));

} else {
var statearr_32484_32602 = state_32410__$1;
(statearr_32484_32602[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (47))){
var inst_32204 = (state_32410[(2)]);
var inst_32205 = cljs.core.js__GT_clj.call(null,inst_32204);
var inst_32206 = cloudxmark.core.convert_json_lsts_result.call(null,inst_32205,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_32207 = cljs.core.List.EMPTY;
var inst_32208 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_32209 = cljs.core._conj.call(null,inst_32207,inst_32208);
var inst_32210 = cljs.core.List.EMPTY;
var inst_32211 = cljs.core._conj.call(null,inst_32210,inst_32206);
var inst_32212 = cljs.core.concat.call(null,inst_32209,inst_32211);
var inst_32213 = cljs.core.seq.call(null,inst_32212);
var inst_32214 = cljs.core.sequence.call(null,inst_32213);
var inst_32215 = cljs.core.List.EMPTY;
var inst_32216 = cljs.core._conj.call(null,inst_32215,inst_32214);
var inst_32217 = cljs.core.concat.call(null,inst_32216);
var inst_32218 = cljs.core.seq.call(null,inst_32217);
var inst_32219 = cljs.core.sequence.call(null,inst_32218);
var inst_32220 = cljs.core.vec.call(null,inst_32219);
var inst_32221 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32220);
var state_32410__$1 = state_32410;
var statearr_32485_32603 = state_32410__$1;
(statearr_32485_32603[(2)] = inst_32221);

(statearr_32485_32603[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (35))){
var inst_32043 = (state_32410[(7)]);
var inst_32178 = (inst_32043 == null);
var inst_32179 = cljs.core.not.call(null,inst_32178);
var state_32410__$1 = state_32410;
if(inst_32179){
var statearr_32486_32604 = state_32410__$1;
(statearr_32486_32604[(1)] = (38));

} else {
var statearr_32487_32605 = state_32410__$1;
(statearr_32487_32605[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (82))){
var inst_32345 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32488_32606 = state_32410__$1;
(statearr_32488_32606[(2)] = inst_32345);

(statearr_32488_32606[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (76))){
var inst_32391 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32489_32607 = state_32410__$1;
(statearr_32489_32607[(2)] = inst_32391);

(statearr_32489_32607[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (19))){
var inst_32042 = (state_32410[(8)]);
var inst_32151 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_32410__$1 = state_32410;
if(inst_32151){
var statearr_32490_32608 = state_32410__$1;
(statearr_32490_32608[(1)] = (31));

} else {
var statearr_32491_32609 = state_32410__$1;
(statearr_32491_32609[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (57))){
var inst_32043 = (state_32410[(7)]);
var inst_32242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32492_32610 = state_32410__$1;
(statearr_32492_32610[(2)] = inst_32242);

(statearr_32492_32610[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (68))){
var state_32410__$1 = state_32410;
var statearr_32493_32611 = state_32410__$1;
(statearr_32493_32611[(2)] = false);

(statearr_32493_32611[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (11))){
var state_32410__$1 = state_32410;
var statearr_32494_32612 = state_32410__$1;
(statearr_32494_32612[(2)] = true);

(statearr_32494_32612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (9))){
var state_32410__$1 = state_32410;
var statearr_32495_32613 = state_32410__$1;
(statearr_32495_32613[(2)] = false);

(statearr_32495_32613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (5))){
var inst_32043 = (state_32410[(7)]);
var inst_32048 = [cljs.core.str("lst login data:"),cljs.core.str(inst_32043)].join('');
var inst_32049 = cljs.core.println.call(null,inst_32048);
var inst_32051 = (inst_32043 == null);
var inst_32052 = cljs.core.not.call(null,inst_32051);
var state_32410__$1 = (function (){var statearr_32496 = state_32410;
(statearr_32496[(22)] = inst_32049);

return statearr_32496;
})();
if(inst_32052){
var statearr_32497_32614 = state_32410__$1;
(statearr_32497_32614[(1)] = (8));

} else {
var statearr_32498_32615 = state_32410__$1;
(statearr_32498_32615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (83))){
var inst_32043 = (state_32410[(7)]);
var inst_32350 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32499_32616 = state_32410__$1;
(statearr_32499_32616[(2)] = inst_32350);

(statearr_32499_32616[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (14))){
var inst_32043 = (state_32410[(7)]);
var inst_32066 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32043);
var state_32410__$1 = state_32410;
var statearr_32500_32617 = state_32410__$1;
(statearr_32500_32617[(2)] = inst_32066);

(statearr_32500_32617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (45))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32501_32618 = state_32410__$1;
(statearr_32501_32618[(2)] = inst_32043);

(statearr_32501_32618[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (53))){
var inst_32240 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32240)){
var statearr_32502_32619 = state_32410__$1;
(statearr_32502_32619[(1)] = (57));

} else {
var statearr_32503_32620 = state_32410__$1;
(statearr_32503_32620[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (78))){
var state_32410__$1 = state_32410;
var statearr_32504_32621 = state_32410__$1;
(statearr_32504_32621[(2)] = false);

(statearr_32504_32621[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (26))){
var inst_32114 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32505_32622 = state_32410__$1;
(statearr_32505_32622[(2)] = inst_32114);

(statearr_32505_32622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (16))){
var inst_32071 = (state_32410[(17)]);
var inst_32069 = (state_32410[(2)]);
var inst_32070 = cljs.core.get.call(null,inst_32069,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_32071__$1 = cljs.core.get.call(null,inst_32069,new cljs.core.Keyword(null,"password","password",417022471));
var inst_32072 = cljs.core.get.call(null,inst_32069,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_32073 = encodeURIComponent(inst_32070);
var inst_32074 = encodeURIComponent(inst_32071__$1);
var inst_32075 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_32073),cljs.core.str("&pass="),cljs.core.str(inst_32074)].join('');
var inst_32076 = cloudxmark.core.jsonp.call(null,inst_32075);
var state_32410__$1 = (function (){var statearr_32506 = state_32410;
(statearr_32506[(16)] = inst_32072);

(statearr_32506[(17)] = inst_32071__$1);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32410__$1,(17),inst_32076);
} else {
if((state_val_32411 === (81))){
var state_32410__$1 = state_32410;
var statearr_32507_32623 = state_32410__$1;
(statearr_32507_32623[(2)] = false);

(statearr_32507_32623[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (79))){
var inst_32348 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32348)){
var statearr_32508_32624 = state_32410__$1;
(statearr_32508_32624[(1)] = (83));

} else {
var statearr_32509_32625 = state_32410__$1;
(statearr_32509_32625[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (38))){
var inst_32043 = (state_32410[(7)]);
var inst_32181 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32182 = (inst_32181 & (64));
var inst_32183 = inst_32043.cljs$core$ISeq$;
var inst_32184 = (inst_32182) || (inst_32183);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32184)){
var statearr_32510_32626 = state_32410__$1;
(statearr_32510_32626[(1)] = (41));

} else {
var statearr_32511_32627 = state_32410__$1;
(statearr_32511_32627[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (87))){
var inst_32356 = (state_32410[(11)]);
var inst_32360 = encodeURIComponent(inst_32356);
var inst_32361 = [cljs.core.str("query="),cljs.core.str(inst_32360)].join('');
var state_32410__$1 = state_32410;
var statearr_32512_32628 = state_32410__$1;
(statearr_32512_32628[(2)] = inst_32361);

(statearr_32512_32628[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (30))){
var inst_32132 = (state_32410[(2)]);
var inst_32133 = cljs.core.js__GT_clj.call(null,inst_32132);
var inst_32134 = cloudxmark.core.convert_json_status.call(null,inst_32133,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_32135 = cljs.core.List.EMPTY;
var inst_32136 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_32137 = cljs.core._conj.call(null,inst_32135,inst_32136);
var inst_32138 = cljs.core.List.EMPTY;
var inst_32139 = cljs.core._conj.call(null,inst_32138,inst_32134);
var inst_32140 = cljs.core.concat.call(null,inst_32137,inst_32139);
var inst_32141 = cljs.core.seq.call(null,inst_32140);
var inst_32142 = cljs.core.sequence.call(null,inst_32141);
var inst_32143 = cljs.core.List.EMPTY;
var inst_32144 = cljs.core._conj.call(null,inst_32143,inst_32142);
var inst_32145 = cljs.core.concat.call(null,inst_32144);
var inst_32146 = cljs.core.seq.call(null,inst_32145);
var inst_32147 = cljs.core.sequence.call(null,inst_32146);
var inst_32148 = cljs.core.vec.call(null,inst_32147);
var inst_32149 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32148);
var state_32410__$1 = state_32410;
var statearr_32513_32629 = state_32410__$1;
(statearr_32513_32629[(2)] = inst_32149);

(statearr_32513_32629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (73))){
var inst_32310 = (state_32410[(2)]);
var inst_32311 = cljs.core.js__GT_clj.call(null,inst_32310);
var inst_32312 = cloudxmark.core.convert_json_lsts_result.call(null,inst_32311,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_32313 = cljs.core.List.EMPTY;
var inst_32314 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_32315 = cljs.core._conj.call(null,inst_32313,inst_32314);
var inst_32316 = cljs.core.List.EMPTY;
var inst_32317 = cljs.core._conj.call(null,inst_32316,inst_32312);
var inst_32318 = cljs.core.concat.call(null,inst_32315,inst_32317);
var inst_32319 = cljs.core.seq.call(null,inst_32318);
var inst_32320 = cljs.core.sequence.call(null,inst_32319);
var inst_32321 = cljs.core.List.EMPTY;
var inst_32322 = cljs.core._conj.call(null,inst_32321,inst_32320);
var inst_32323 = cljs.core.concat.call(null,inst_32322);
var inst_32324 = cljs.core.seq.call(null,inst_32323);
var inst_32325 = cljs.core.sequence.call(null,inst_32324);
var inst_32326 = cljs.core.vec.call(null,inst_32325);
var inst_32327 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32326);
var state_32410__$1 = state_32410;
var statearr_32514_32630 = state_32410__$1;
(statearr_32514_32630[(2)] = inst_32327);

(statearr_32514_32630[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (10))){
var inst_32064 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32064)){
var statearr_32515_32631 = state_32410__$1;
(statearr_32515_32631[(1)] = (14));

} else {
var statearr_32516_32632 = state_32410__$1;
(statearr_32516_32632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (18))){
var inst_32043 = (state_32410[(7)]);
var inst_32104 = (inst_32043 == null);
var inst_32105 = cljs.core.not.call(null,inst_32104);
var state_32410__$1 = state_32410;
if(inst_32105){
var statearr_32517_32633 = state_32410__$1;
(statearr_32517_32633[(1)] = (21));

} else {
var statearr_32518_32634 = state_32410__$1;
(statearr_32518_32634[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (52))){
var state_32410__$1 = state_32410;
var statearr_32519_32635 = state_32410__$1;
(statearr_32519_32635[(2)] = false);

(statearr_32519_32635[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (67))){
var state_32410__$1 = state_32410;
var statearr_32520_32636 = state_32410__$1;
(statearr_32520_32636[(2)] = true);

(statearr_32520_32636[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (71))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32521_32637 = state_32410__$1;
(statearr_32521_32637[(2)] = inst_32043);

(statearr_32521_32637[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (42))){
var state_32410__$1 = state_32410;
var statearr_32522_32638 = state_32410__$1;
(statearr_32522_32638[(2)] = false);

(statearr_32522_32638[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (80))){
var state_32410__$1 = state_32410;
var statearr_32523_32639 = state_32410__$1;
(statearr_32523_32639[(2)] = true);

(statearr_32523_32639[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (37))){
var inst_32397 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32524_32640 = state_32410__$1;
(statearr_32524_32640[(2)] = inst_32397);

(statearr_32524_32640[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (63))){
var inst_32393 = (state_32410[(2)]);
var state_32410__$1 = state_32410;
var statearr_32525_32641 = state_32410__$1;
(statearr_32525_32641[(2)] = inst_32393);

(statearr_32525_32641[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (8))){
var inst_32043 = (state_32410[(7)]);
var inst_32054 = inst_32043.cljs$lang$protocol_mask$partition0$;
var inst_32055 = (inst_32054 & (64));
var inst_32056 = inst_32043.cljs$core$ISeq$;
var inst_32057 = (inst_32055) || (inst_32056);
var state_32410__$1 = state_32410;
if(cljs.core.truth_(inst_32057)){
var statearr_32526_32642 = state_32410__$1;
(statearr_32526_32642[(1)] = (11));

} else {
var statearr_32527_32643 = state_32410__$1;
(statearr_32527_32643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (49))){
var inst_32042 = (state_32410[(8)]);
var inst_32274 = cljs.core._EQ_.call(null,inst_32042,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_32410__$1 = state_32410;
if(inst_32274){
var statearr_32528_32644 = state_32410__$1;
(statearr_32528_32644[(1)] = (61));

} else {
var statearr_32529_32645 = state_32410__$1;
(statearr_32529_32645[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32411 === (84))){
var inst_32043 = (state_32410[(7)]);
var state_32410__$1 = state_32410;
var statearr_32530_32646 = state_32410__$1;
(statearr_32530_32646[(2)] = inst_32043);

(statearr_32530_32646[(1)] = (85));


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
});})(c__28601__auto__))
;
return ((function (switch__28578__auto__,c__28601__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28579__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28579__auto____0 = (function (){
var statearr_32534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32534[(0)] = cloudxmark$core$search_loop_$_state_machine__28579__auto__);

(statearr_32534[(1)] = (1));

return statearr_32534;
});
var cloudxmark$core$search_loop_$_state_machine__28579__auto____1 = (function (state_32410){
while(true){
var ret_value__28580__auto__ = (function (){try{while(true){
var result__28581__auto__ = switch__28578__auto__.call(null,state_32410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28581__auto__;
}
break;
}
}catch (e32535){if((e32535 instanceof Object)){
var ex__28582__auto__ = e32535;
var statearr_32536_32647 = state_32410;
(statearr_32536_32647[(5)] = ex__28582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32648 = state_32410;
state_32410 = G__32648;
continue;
} else {
return ret_value__28580__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28579__auto__ = function(state_32410){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28579__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28579__auto____1.call(this,state_32410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28579__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28579__auto____0;
cloudxmark$core$search_loop_$_state_machine__28579__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28579__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28579__auto__;
})()
;})(switch__28578__auto__,c__28601__auto__))
})();
var state__28603__auto__ = (function (){var statearr_32537 = f__28602__auto__.call(null);
(statearr_32537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28601__auto__);

return statearr_32537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28603__auto__);
});})(c__28601__auto__))
);

return c__28601__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471818956248