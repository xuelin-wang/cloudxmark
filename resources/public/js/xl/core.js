// Compiled by ClojureScript 1.9.225 {}
goog.provide('xl.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('goog.crypt');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('xl.common.lst_common');
goog.require('goog.crypt.Cbc');
goog.require('goog.crypt.base64');
goog.require('goog.net.Jsonp');
goog.require('xl.common.ql');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.next');
goog.require('goog.crypt.Aes');
cljs.core.enable_console_print_BANG_.call(null);
xl.core.block_size = (16);
xl.core.seed_init_vector = goog.crypt.hexToByteArray("3ea1bae20d97b4a0b422da8b259f0c8c");
xl.core.seed_key_bytes = goog.crypt.hexToByteArray("5zal214336bja15b716e0335341e1ba7");
xl.core.xxx = (function xl$core$xxx(sss){
return xl.common.ql.kebab.call(null,sss);
});
xl.core.create_aes = (function xl$core$create_aes(key_bytes){
return (new goog.crypt.Aes(key_bytes));
});
xl.core.create_aes_cbc = (function xl$core$create_aes_cbc(key_bytes){
return (new goog.crypt.Cbc((new goog.crypt.Aes(key_bytes))));
});
xl.core.pad_bytes = (function xl$core$pad_bytes(bytes,target_len,ch){
var yyy = xl.core.xxx.call(null,"a");
var tmp_len = cljs.core.rem.call(null,(- bytes.length),target_len);
var pad_len = (((tmp_len < (0)))?(target_len + tmp_len):tmp_len);
var pad_str = clojure.string.join.call(null,cljs.core.repeat.call(null,pad_len,ch));
var padded_bytes = goog.crypt.stringToByteArray(pad_str);
return bytes.concat(padded_bytes);
});
xl.core.cbc_enc_str = (function xl$core$cbc_enc_str(plain_text,cbc,init_vector){
var plain_bytes = goog.crypt.stringToByteArray(plain_text);
var padded_bytes = xl.core.pad_bytes.call(null,plain_bytes,xl.core.block_size," ");
var enc_bytes = cbc.encrypt(padded_bytes,init_vector);
return goog.crypt.byteArrayToString(enc_bytes);
});
xl.core.aes_enc_str = (function xl$core$aes_enc_str(plain_text,aes){
var plain_bytes = goog.crypt.stringToByteArray(plain_text);
var padded_bytes = xl.core.pad_bytes.call(null,plain_bytes,xl.core.block_size," ");
return goog.crypt.byteArrayToString(aes.encrypt(padded_bytes));
});
xl.core.aes_dec_str = (function xl$core$aes_dec_str(cypher_text,aes){
return goog.crypt.byteArrayToString(aes.decrypt(goog.crypt.stringToByteArray(cypher_text)));
});
xl.core.xor_bytes = (function xl$core$xor_bytes(b1,b2,max_len){
var idx_33546 = (0);
while(true){
var len1_33547 = b1.length;
if((cljs.core._EQ_.call(null,idx_33546,len1_33547)) || (cljs.core._EQ_.call(null,idx_33546,max_len))){
} else {
(b1[idx_33546] = ((b1[idx_33546]) ^ (b2[idx_33546])));

var G__33548 = (idx_33546 + (1));
idx_33546 = G__33548;
continue;
}
break;
}

return b1;
});
xl.core.gen_bytes = (function xl$core$gen_bytes(from_str,seed_bytes){
var bytes = goog.crypt.stringToByteArray(from_str);
var padded_bytes = xl.core.pad_bytes.call(null,bytes,xl.core.block_size," ");
var xored_bytes = xl.core.xor_bytes.call(null,padded_bytes,seed_bytes,xl.core.block_size);
if(cljs.core._EQ_.call(null,xored_bytes.length,xl.core.block_size)){
return xored_bytes;
} else {
return xored_bytes.slice((0),xl.core.block_size);
}
});
xl.core.gen_key_bytes = (function xl$core$gen_key_bytes(from_str){
return xl.core.gen_bytes.call(null,from_str,xl.core.seed_key_bytes);
});
xl.core.gen_init_vector = (function xl$core$gen_init_vector(from_str){
return xl.core.gen_bytes.call(null,from_str,xl.core.seed_init_vector);
});
xl.core.enc_password = (function xl$core$enc_password(password){
var key_bytes = xl.core.gen_key_bytes.call(null,password);
var cbc = xl.core.create_aes_cbc.call(null,key_bytes);
return xl.core.cbc_enc_str.call(null,password,cbc,xl.core.seed_init_vector);
});
xl.core.cbc_dec_str = (function xl$core$cbc_dec_str(cypher_text,cbc,init_vector){
var cypher_bytes = goog.crypt.stringToByteArray(cypher_text);
var plain_bytes = cbc.decrypt(cypher_bytes,init_vector);
return goog.crypt.byteArrayToString(plain_bytes).trim();
});
xl.core.jsonp = (function xl$core$jsonp(var_args){
var args33551 = [];
var len__22773__auto___33554 = arguments.length;
var i__22774__auto___33555 = (0);
while(true){
if((i__22774__auto___33555 < len__22773__auto___33554)){
args33551.push((arguments[i__22774__auto___33555]));

var G__33556 = (i__22774__auto___33555 + (1));
i__22774__auto___33555 = G__33556;
continue;
} else {
}
break;
}

var G__33553 = args33551.length;
switch (G__33553) {
case 1:
return xl.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return xl.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33551.length)].join('')));

}
});

xl.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return xl.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

xl.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__33549_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__33549_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__33550_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__33550_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

xl.core.jsonp.cljs$lang$maxFixedArity = 2;

xl.core.event_chan = cljs.core.async.chan.call(null);
if(typeof xl.core.read !== 'undefined'){
} else {
xl.core.read = (function (){var method_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"xl.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22617__auto__,method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__));
})();
}
cljs.core._add_method.call(null,xl.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__33558,_,p__33559){
var map__33560 = p__33558;
var map__33560__$1 = ((((!((map__33560 == null)))?((((map__33560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33560):map__33560);
var env = map__33560__$1;
var state = cljs.core.get.call(null,map__33560__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__33560__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__33561 = p__33559;
var map__33561__$1 = ((((!((map__33561 == null)))?((((map__33561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33561):map__33561);
var query_ver = cljs.core.get.call(null,map__33561__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__33561__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__33564 = lst;
var map__33564__$1 = ((((!((map__33564 == null)))?((((map__33564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33564):map__33564);
var lsts = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
xl.core.update_state_by_path = (function xl$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_33566 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_33566);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof xl.core.mutate !== 'undefined'){
} else {
xl.core.mutate = (function (){var method_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"xl.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22617__auto__,method_table__22613__auto__,prefer_table__22614__auto__,method_cache__22615__auto__,cached_hierarchy__22616__auto__));
})();
}
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__33567,_,p__33568){
var map__33569 = p__33567;
var map__33569__$1 = ((((!((map__33569 == null)))?((((map__33569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33569):map__33569);
var env = map__33569__$1;
var state = cljs.core.get.call(null,map__33569__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33570 = p__33568;
var map__33570__$1 = ((((!((map__33570 == null)))?((((map__33570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33570):map__33570);
var status = map__33570__$1;
var id = cljs.core.get.call(null,map__33570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33569,map__33569__$1,env,state,map__33570,map__33570__$1,status,id){
return (function (){
return xl.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__33569,map__33569__$1,env,state,map__33570,map__33570__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__33573,_,p__33574){
var map__33575 = p__33573;
var map__33575__$1 = ((((!((map__33575 == null)))?((((map__33575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33575):map__33575);
var env = map__33575__$1;
var state = cljs.core.get.call(null,map__33575__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33576 = p__33574;
var map__33576__$1 = ((((!((map__33576 == null)))?((((map__33576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33576):map__33576);
var path = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33575,map__33575__$1,env,state,map__33576,map__33576__$1,path,merge_QMARK_,value){
return (function (){
return xl.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__33575,map__33575__$1,env,state,map__33576,map__33576__$1,path,merge_QMARK_,value))
], null);
}));
xl.core.get_by_map_val = (function xl$core$get_by_map_val(key,val,coll){
if(cljs.core.seq.call(null,coll)){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (elem){
return cljs.core._EQ_.call(null,val,cljs.core.get.call(null,elem,key));
}),coll));
} else {
return null;
}
});
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__33579,_,p__33580){
var map__33581 = p__33579;
var map__33581__$1 = ((((!((map__33581 == null)))?((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33581):map__33581);
var env = map__33581__$1;
var state = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33582 = p__33580;
var map__33582__$1 = ((((!((map__33582 == null)))?((((map__33582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33582):map__33582);
var data_map = map__33582__$1;
var lst_name = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__33582__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33581,map__33581__$1,env,state,map__33582,map__33582__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = xl.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = xl.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?xl.core.cbc_enc_str.call(null,value,cbc,xl.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__33581,map__33581__$1,env,state,map__33582,map__33582__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__33585,_,p__33586){
var map__33587 = p__33585;
var map__33587__$1 = ((((!((map__33587 == null)))?((((map__33587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33587):map__33587);
var env = map__33587__$1;
var state = cljs.core.get.call(null,map__33587__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33588 = p__33586;
var map__33588__$1 = ((((!((map__33588 == null)))?((((map__33588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33588):map__33588);
var field_id = cljs.core.get.call(null,map__33588__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__33588__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33587,map__33587__$1,env,state,map__33588,map__33588__$1,field_id,value){
return (function (){
return xl.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__33587,map__33587__$1,env,state,map__33588,map__33588__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__33591,_,p__33592){
var map__33593 = p__33591;
var map__33593__$1 = ((((!((map__33593 == null)))?((((map__33593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33593):map__33593);
var env = map__33593__$1;
var state = cljs.core.get.call(null,map__33593__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33594 = p__33592;
var map__33594__$1 = ((((!((map__33594 == null)))?((((map__33594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33594):map__33594);
var data_map = map__33594__$1;
var user_id = cljs.core.get.call(null,map__33594__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__33594__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__33594__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33593,map__33593__$1,env,state,map__33594,map__33594__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),xl.core.enc_password.call(null,password)),null], null));
});})(map__33593,map__33593__$1,env,state,map__33594,map__33594__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__33597,_,p__33598){
var map__33599 = p__33597;
var map__33599__$1 = ((((!((map__33599 == null)))?((((map__33599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33599):map__33599);
var env = map__33599__$1;
var state = cljs.core.get.call(null,map__33599__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33600 = p__33598;
var map__33600__$1 = ((((!((map__33600 == null)))?((((map__33600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33600):map__33600);
var data_map = map__33600__$1;
var user_id = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33599,map__33599__$1,env,state,map__33600,map__33600__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__33599,map__33599__$1,env,state,map__33600,map__33600__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__33603,_,p__33604){
var map__33605 = p__33603;
var map__33605__$1 = ((((!((map__33605 == null)))?((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33605):map__33605);
var env = map__33605__$1;
var state = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33606 = p__33604;
var map__33606__$1 = ((((!((map__33606 == null)))?((((map__33606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33606):map__33606);
var data_map = map__33606__$1;
var type = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__33606__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33605,map__33605__$1,env,state,map__33606,map__33606__$1,data_map,type,fields){
return (function (){
return null;
});})(map__33605,map__33605__$1,env,state,map__33606,map__33606__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__33609,_,p__33610){
var map__33611 = p__33609;
var map__33611__$1 = ((((!((map__33611 == null)))?((((map__33611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33611):map__33611);
var env = map__33611__$1;
var state = cljs.core.get.call(null,map__33611__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33612 = p__33610;
var map__33612__$1 = ((((!((map__33612 == null)))?((((map__33612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33612):map__33612);
var data_map = map__33612__$1;
var name = cljs.core.get.call(null,map__33612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__33612__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33611,map__33611__$1,env,state,map__33612,map__33612__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__33611,map__33611__$1,env,state,map__33612,map__33612__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__33615,_,p__33616){
var map__33617 = p__33615;
var map__33617__$1 = ((((!((map__33617 == null)))?((((map__33617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33617):map__33617);
var env = map__33617__$1;
var state = cljs.core.get.call(null,map__33617__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33618 = p__33616;
var map__33618__$1 = ((((!((map__33618 == null)))?((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var data_map = map__33618__$1;
var name = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33617,map__33617__$1,env,state,map__33618,map__33618__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = xl.core.cbc_enc_str.call(null,value,cbc,xl.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr_lst_name = (function (){var or__21590__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null));
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,lsts),"name");
}
})();
var curr_lst = xl.core.get_by_map_val.call(null,"name",curr_lst_name,lsts);
var lst_id = cljs.core.get.call(null,curr_lst,"lst_id");
return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__33617,map__33617__$1,env,state,map__33618,map__33618__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__33621,_,___$1){
var map__33622 = p__33621;
var map__33622__$1 = ((((!((map__33622 == null)))?((((map__33622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33622):map__33622);
var env = map__33622__$1;
var state = cljs.core.get.call(null,map__33622__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33622,map__33622__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,xl.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__33622,map__33622__$1,env,state))
], null);
}));
xl.core.dec_items_vals = (function xl$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",xl.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,xl.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,xl.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__33624,_,p__33625){
var map__33626 = p__33624;
var map__33626__$1 = ((((!((map__33626 == null)))?((((map__33626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33626):map__33626);
var env = map__33626__$1;
var state = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33627 = p__33625;
var map__33627__$1 = ((((!((map__33627 == null)))?((((map__33627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627):map__33627);
var data_map = map__33627__$1;
var status = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33626,map__33626__$1,env,state,map__33627,map__33627__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = xl.core.dec_items_vals.call(null,lsts,new_cbc);
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
});})(map__33626,map__33626__$1,env,state,map__33627,map__33627__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
xl.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
xl.core.lst_field = (function xl$core$lst_field(var_args){
var args33630 = [];
var len__22773__auto___33633 = arguments.length;
var i__22774__auto___33634 = (0);
while(true){
if((i__22774__auto___33634 < len__22773__auto___33633)){
args33630.push((arguments[i__22774__auto___33634]));

var G__33635 = (i__22774__auto___33634 + (1));
i__22774__auto___33634 = G__33635;
continue;
} else {
}
break;
}

var G__33632 = args33630.length;
switch (G__33632) {
case 2:
return xl.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return xl.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33630.length)].join('')));

}
});

xl.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return xl.core.lst_field.call(null,comp,field_id,"text");
});

xl.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
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

xl.core.lst_field.cljs$lang$maxFixedArity = 3;

xl.core.item_field = (function xl$core$item_field(comp,lst_name,item,col_name){
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
xl.core.result_list = (function xl$core$result_list(results){
return React.DOM.ul(({"key": "result-list"}),om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li(({"key": idx}),om.util.force_children.call(null,itm));
}),results)));
});
xl.core.status_line = (function xl$core$status_line(p__33637){
var map__33643 = p__33637;
var map__33643__$1 = ((((!((map__33643 == null)))?((((map__33643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33643):map__33643);
var info = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__33643__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__33645 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__33645,(0),null);
var msg = cljs.core.nth.call(null,vec__33645,(1),null);
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)),om.util.force_children.call(null,msg));
});
xl.core.refresh_lists_button = (function xl$core$refresh_lists_button(comp,user_id,lst_ver){
return React.DOM.button(({"type": "button", "key": "refreshButton", "onClick": (function (e){
if((user_id == null)){
return cljs.core.swap_BANG_.call(null,xl.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Permission denied"], null));
} else {
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(lst_ver + (1))], null)], null));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Refresh List"))));
});
xl.core.add_item_button = (function xl$core$add_item_button(comp){
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
xl.core.lst_select_field = (function xl$core$lst_select_field(comp,lst_name,curr_lst_name){
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
xl.core.add_lst_button = (function xl$core$add_lst_button(comp){
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
xl.core.lst_edit_area = (function xl$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__33650 = lst;
var map__33650__$1 = ((((!((map__33650 == null)))?((((map__33650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33650):map__33650);
var lsts = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = xl.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__33650,map__33650__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,xl.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,xl.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__33650,map__33650__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,xl.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,xl.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,xl.core.add_item_button.call(null,comp)),om.util.force_children.call(null,xl.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
xl.core.lst_add_area = (function xl$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__33654 = lst;
var map__33654__$1 = ((((!((map__33654 == null)))?((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var status = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')}),om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,xl.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,xl.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,xl.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,xl.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
xl.core.lst_lst = (function xl$core$lst_lst(comp,lsts,curr_lst_name){
return React.DOM.div(({"key": "lst-lst"}),om.util.force_children.call(null,(function (){var settings_lst = xl.core.get_by_map_val.call(null,"name",xl.common.lst_common.settings_lst_name,lsts);
var settings = cljs.core.get.call(null,settings_lst,"items");
var show_all_lsts = cljs.core._EQ_.call(null,"true",cljs.core.get.call(null,settings,cljs.core.get.call(null,xl.common.lst_common.setting_names,new cljs.core.Keyword(null,"show-all-lsts","show-all-lsts",-179827094))));
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
return React.DOM.div(({"key": [cljs.core.str(xl$core$lst_lst),cljs.core.str("-"),cljs.core.str(cljs.core.get.call(null,lst,"name"))].join('')}),om.util.force_children.call(null,xl.core.lst_select_field.call(null,comp,lst_name,selected_lst_name)),om.util.force_children.call(null,React.DOM.span(({"key": [cljs.core.str("lst-lst-"),cljs.core.str(lst_name),cljs.core.str("-span")].join('')}),om.util.force_children.call(null,lst_name))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,lst_name,selected_lst_name))?xl.core.lst_edit_area.call(null,comp,selected_lst_name):null)));
});})(settings_lst,settings,show_all_lsts,display_lsts,selected_lst_name))
,display_lsts);
} else {
return null;
}
})()),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,xl.core.lst_add_area.call(null,comp)));
});
xl.core.settings_editor = (function xl$core$settings_editor(comp,settings_lst){
if(cljs.core.truth_(settings_lst)){
return React.DOM.div(({"key": "settings-editor"}),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Settings"))),om.util.force_children.call(null,(function (){var items = cljs.core.get.call(null,settings_lst,"items");
cljs.core.reduce_kv.call(null,((function (items){
return (function (result,setting_key,setting_name){
var setting_editor = React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,setting_name))),om.util.force_children.call(null,xl.core.item_field.call(null,comp,xl.common.lst_common.settings_lst_name,xl.core.get_by_map_val.call(null,"name",setting_name,items),"value")));
return cljs.core.conj.call(null,result,setting_editor);
});})(items))
,cljs.core.PersistentVector.EMPTY,xl.common.lst_common.setting_names);

return cljs.core.map.call(null,((function (items){
return (function (setting_name){
React.DOM.span(null,om.util.force_children.call(null,setting_name));

xl.core.lst_field.call(null,comp,[cljs.core.str("setting-"),cljs.core.str(setting_name)].join(''));

return React.DOM.br(null);
});})(items))
,xl.common.lst_common.setting_names);
})()));
} else {
return null;
}
});
xl.core.search_field = (function xl$core$search_field(comp,query,type){
var vec__33660 = (function (){var G__33663 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33663) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__33660,(0),null);
var query_key = cljs.core.nth.call(null,vec__33660,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__33660,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__33660,elem_key,query_key))
}));
});
xl.core.logout_button = (function xl$core$logout_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22516__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))));
})}),om.util.force_children.call(null,"Log out"));
});
xl.core.login_button = (function xl$core$login_button(comp){
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

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,xl.core.app_state))].join(''));
})}),om.util.force_children.call(null,"Login"));
});
xl.core.add_user_button = (function xl$core$add_user_button(comp){
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

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,xl.core.app_state))].join(''));
})}),om.util.force_children.call(null,"Add User"));
});
xl.core.get_settings = (function xl$core$get_settings(lsts){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (lst){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,lst,"name"),xl.common.lst_common.settings_lst_name);
}),lsts));
});
/**
 * @constructor
 */
xl.core.Lsts = (function xl$core$Lsts(){
var this__30647__auto__ = this;
React.Component.apply(this__30647__auto__,arguments);

if(!((this__30647__auto__.initLocalState == null))){
this__30647__auto__.state = this__30647__auto__.initLocalState();
} else {
this__30647__auto__.state = {};
}

return this__30647__auto__;
});

xl.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x33669_33681 = xl.core.Lsts.prototype;
x33669_33681.componentWillUpdate = ((function (x33669_33681){
return (function (next_props__30526__auto__,next_state__30527__auto__){
var this__30525__auto__ = this;
if(((!((this__30525__auto__ == null)))?(((false) || (this__30525__auto__.om$next$Ident$))?true:false):false)){
var ident__30529__auto___33682 = om.next.ident.call(null,this__30525__auto__,om.next.props.call(null,this__30525__auto__));
var next_ident__30530__auto___33683 = om.next.ident.call(null,this__30525__auto__,om.next._next_props.call(null,next_props__30526__auto__,this__30525__auto__));
if(cljs.core.not_EQ_.call(null,ident__30529__auto___33682,next_ident__30530__auto___33683)){
var idxr__30531__auto___33684 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30525__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30531__auto___33684 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30531__auto___33684),((function (idxr__30531__auto___33684,ident__30529__auto___33682,next_ident__30530__auto___33683,this__30525__auto__,x33669_33681){
return (function (indexes__30532__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30532__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30529__auto___33682], null),cljs.core.disj,this__30525__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30530__auto___33683], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30525__auto__);
});})(idxr__30531__auto___33684,ident__30529__auto___33682,next_ident__30530__auto___33683,this__30525__auto__,x33669_33681))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30525__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30525__auto__);
});})(x33669_33681))
;

x33669_33681.shouldComponentUpdate = ((function (x33669_33681){
return (function (next_props__30526__auto__,next_state__30527__auto__){
var this__30525__auto__ = this;
var next_children__30528__auto__ = next_props__30526__auto__.children;
var next_props__30526__auto____$1 = goog.object.get(next_props__30526__auto__,"omcljs$value");
var next_props__30526__auto____$2 = (function (){var G__33671 = next_props__30526__auto____$1;
if((next_props__30526__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__33671);
} else {
return G__33671;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30525__auto__),next_props__30526__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__30525__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30525__auto__.state,"omcljs$state"),goog.object.get(next_state__30527__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30525__auto__.props.children,next_children__30528__auto__);
}
}
});})(x33669_33681))
;

x33669_33681.componentWillUnmount = ((function (x33669_33681){
return (function (){
var this__30525__auto__ = this;
var r__30536__auto__ = om.next.get_reconciler.call(null,this__30525__auto__);
var cfg__30537__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30536__auto__);
var st__30538__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30537__auto__);
var indexer__30535__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30537__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__30538__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30538__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30525__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30538__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30525__auto__);
} else {
}

if((indexer__30535__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30535__auto__,this__30525__auto__);
}
});})(x33669_33681))
;

x33669_33681.componentDidUpdate = ((function (x33669_33681){
return (function (prev_props__30533__auto__,prev_state__30534__auto__){
var this__30525__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30525__auto__);
});})(x33669_33681))
;

x33669_33681.isMounted = ((function (x33669_33681){
return (function (){
var this__30525__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30525__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33669_33681))
;

x33669_33681.componentWillMount = ((function (x33669_33681){
return (function (){
var this__30525__auto__ = this;
var indexer__30535__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30525__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30535__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30535__auto__,this__30525__auto__);
}
});})(x33669_33681))
;

x33669_33681.render = ((function (x33669_33681){
return (function (){
var this__30524__auto__ = this;
var this$ = this__30524__auto__;
var _STAR_reconciler_STAR_33672 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33673 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33674 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33675 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33676 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30524__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30524__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30524__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30524__auto__);

om.next._STAR_parent_STAR_ = this__30524__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__33677 = lst;
var map__33677__$1 = ((((!((map__33677 == null)))?((((map__33677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33677):map__33677);
var lsts = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = xl.core.get_settings.call(null,lsts);
var settings_lst = xl.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,xl.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,xl.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,xl.core.login_button.call(null,this$)),om.util.force_children.call(null,xl.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,xl.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,xl.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,xl.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,xl.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,xl.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,xl.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,xl.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,xl.core.add_user_button.call(null,this$)),om.util.force_children.call(null,xl.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33676;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33675;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33674;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33673;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33672;
}});})(x33669_33681))
;


xl.core.Lsts.prototype.constructor = xl.core.Lsts;

xl.core.Lsts.prototype.constructor.displayName = "xl.core/Lsts";

xl.core.Lsts.prototype.om$isComponent = true;

var x33679_33685 = xl.core.Lsts;
/** @nocollapse */
x33679_33685.om$next$IQueryParams$ = true;

/** @nocollapse */
x33679_33685.om$next$IQueryParams$params$arity$1 = ((function (x33679_33685){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x33679_33685))
;

/** @nocollapse */
x33679_33685.om$next$IQuery$ = true;

/** @nocollapse */
x33679_33685.om$next$IQuery$query$arity$1 = ((function (x33679_33685){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x33679_33685))
;


var x33680_33686 = xl.core.Lsts.prototype;

x33680_33686.om$next$IQueryParams$ = true;


x33680_33686.om$next$IQueryParams$params$arity$1 = ((function (x33680_33686){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x33680_33686))
;


x33680_33686.om$next$IQuery$ = true;


x33680_33686.om$next$IQuery$query$arity$1 = ((function (x33680_33686){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x33680_33686))
;


xl.core.Lsts.cljs$lang$type = true;

xl.core.Lsts.cljs$lang$ctorStr = "xl.core/Lsts";

xl.core.Lsts.cljs$lang$ctorPrWriter = (function (this__30650__auto__,writer__30651__auto__,opt__30652__auto__){
return cljs.core._write.call(null,writer__30651__auto__,"xl.core/Lsts");
});
xl.core.send_to_chan = (function xl$core$send_to_chan(c){
return (function (p__33695,cb){
var map__33696 = p__33695;
var map__33696__$1 = ((((!((map__33696 == null)))?((((map__33696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33696):map__33696);
var lst_search = cljs.core.get.call(null,map__33696__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__33698 = om.next.query__GT_ast.call(null,lst_search);
var map__33698__$1 = ((((!((map__33698 == null)))?((((map__33698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33698):map__33698);
var vec__33699 = cljs.core.get.call(null,map__33698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__33699,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(lst_search__$1)].join(''));
var query_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(lst_search__$1);
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),query_params,cb], null));
} else {
return null;
}
});
});
xl.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),xl.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),xl.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),xl.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),xl.core.send_to_chan.call(null,xl.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),new cljs.core.Keyword(null,"lst-login","lst-login",246498853),new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521)], null)], null));
xl.core.convert_json_lsts_result = (function xl$core$convert_json_lsts_result(result,ver,status_id){
var map__33707 = result;
var map__33707__$1 = ((((!((map__33707 == null)))?((((map__33707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33707):map__33707);
var lsts = cljs.core.get.call(null,map__33707__$1,"lsts");
var user_id = cljs.core.get.call(null,map__33707__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__33707__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__33708 = json_status;
var map__33708__$1 = ((((!((map__33708 == null)))?((((map__33708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33708):map__33708);
var info = cljs.core.get.call(null,map__33708__$1,"info");
var warn = cljs.core.get.call(null,map__33708__$1,"warn");
var error = cljs.core.get.call(null,map__33708__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
xl.core.convert_json_status = (function xl$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__33713 = json_status;
var map__33713__$1 = ((((!((map__33713 == null)))?((((map__33713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33713):map__33713);
var info = cljs.core.get.call(null,map__33713__$1,"info");
var warn = cljs.core.get.call(null,map__33713__$1,"warn");
var error = cljs.core.get.call(null,map__33713__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
xl.core.search_loop = (function xl$core$search_loop(c){
var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_34613){
var state_val_34614 = (state_34613[(1)]);
if((state_val_34614 === (65))){
var state_34613__$1 = state_34613;
var statearr_34615_34741 = state_34613__$1;
(statearr_34615_34741[(2)] = false);

(statearr_34615_34741[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (70))){
var inst_34246 = (state_34613[(7)]);
var inst_34496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34616_34742 = state_34613__$1;
(statearr_34616_34742[(2)] = inst_34496);

(statearr_34616_34742[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (62))){
var inst_34245 = (state_34613[(8)]);
var inst_34532 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_34613__$1 = state_34613;
if(inst_34532){
var statearr_34617_34743 = state_34613__$1;
(statearr_34617_34743[(1)] = (74));

} else {
var statearr_34618_34744 = state_34613__$1;
(statearr_34618_34744[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (74))){
var inst_34246 = (state_34613[(7)]);
var inst_34535 = [cljs.core.str("lst query data:"),cljs.core.str(inst_34246)].join('');
var inst_34536 = cljs.core.println.call(null,inst_34535);
var inst_34538 = (inst_34246 == null);
var inst_34539 = cljs.core.not.call(null,inst_34538);
var state_34613__$1 = (function (){var statearr_34619 = state_34613;
(statearr_34619[(9)] = inst_34536);

return statearr_34619;
})();
if(inst_34539){
var statearr_34620_34745 = state_34613__$1;
(statearr_34620_34745[(1)] = (77));

} else {
var statearr_34621_34746 = state_34613__$1;
(statearr_34621_34746[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (7))){
var inst_34606 = (state_34613[(2)]);
var state_34613__$1 = (function (){var statearr_34622 = state_34613;
(statearr_34622[(10)] = inst_34606);

return statearr_34622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(93),c);
} else {
if((state_val_34614 === (59))){
var inst_34448 = (state_34613[(2)]);
var inst_34449 = cljs.core.get.call(null,inst_34448,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_34450 = cljs.core.get.call(null,inst_34448,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_34451 = cljs.core.get.call(null,inst_34448,new cljs.core.Keyword(null,"value","value",305978217));
var inst_34452 = encodeURIComponent(inst_34449);
var inst_34453 = encodeURIComponent(inst_34450);
var inst_34454 = encodeURIComponent(inst_34451);
var inst_34455 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_34452),cljs.core.str("&name="),cljs.core.str(inst_34453),cljs.core.str("&value="),cljs.core.str(inst_34454)].join('');
var inst_34456 = xl.core.jsonp.call(null,inst_34455);
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(60),inst_34456);
} else {
if((state_val_34614 === (86))){
var state_34613__$1 = state_34613;
var statearr_34623_34747 = state_34613__$1;
(statearr_34623_34747[(2)] = "");

(statearr_34623_34747[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (20))){
var inst_34604 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34624_34748 = state_34613__$1;
(statearr_34624_34748[(2)] = inst_34604);

(statearr_34624_34748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (72))){
var inst_34499 = (state_34613[(2)]);
var inst_34500 = cljs.core.get.call(null,inst_34499,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_34501 = cljs.core.get.call(null,inst_34499,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_34502 = cljs.core.get.call(null,inst_34499,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_34503 = cljs.core.get.call(null,inst_34499,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_34504 = cljs.core.get.call(null,inst_34499,new cljs.core.Keyword(null,"value","value",305978217));
var inst_34505 = encodeURIComponent(inst_34500);
var inst_34506 = encodeURIComponent(inst_34501);
var inst_34507 = encodeURIComponent(inst_34502);
var inst_34508 = encodeURIComponent(inst_34503);
var inst_34509 = encodeURIComponent(inst_34504);
var inst_34510 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_34505),cljs.core.str("&lst-name="),cljs.core.str(inst_34506),cljs.core.str("&orig-name="),cljs.core.str(inst_34507),cljs.core.str("&col-name="),cljs.core.str(inst_34508),cljs.core.str("&value="),cljs.core.str(inst_34509)].join('');
var inst_34511 = xl.core.jsonp.call(null,inst_34510);
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(73),inst_34511);
} else {
if((state_val_34614 === (58))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34625_34749 = state_34613__$1;
(statearr_34625_34749[(2)] = inst_34246);

(statearr_34625_34749[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (60))){
var inst_34458 = (state_34613[(2)]);
var inst_34459 = cljs.core.js__GT_clj.call(null,inst_34458);
var inst_34460 = xl.core.convert_json_lsts_result.call(null,inst_34459,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_34461 = cljs.core.List.EMPTY;
var inst_34462 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_34463 = cljs.core._conj.call(null,inst_34461,inst_34462);
var inst_34464 = cljs.core.List.EMPTY;
var inst_34465 = cljs.core._conj.call(null,inst_34464,inst_34460);
var inst_34466 = cljs.core.concat.call(null,inst_34463,inst_34465);
var inst_34467 = cljs.core.seq.call(null,inst_34466);
var inst_34468 = cljs.core.sequence.call(null,inst_34467);
var inst_34469 = cljs.core.List.EMPTY;
var inst_34470 = cljs.core._conj.call(null,inst_34469,inst_34468);
var inst_34471 = cljs.core.concat.call(null,inst_34470);
var inst_34472 = cljs.core.seq.call(null,inst_34471);
var inst_34473 = cljs.core.sequence.call(null,inst_34472);
var inst_34474 = cljs.core.vec.call(null,inst_34473);
var inst_34475 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34474);
var state_34613__$1 = state_34613;
var statearr_34626_34750 = state_34613__$1;
(statearr_34626_34750[(2)] = inst_34475);

(statearr_34626_34750[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (27))){
var inst_34246 = (state_34613[(7)]);
var inst_34322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34627_34751 = state_34613__$1;
(statearr_34627_34751[(2)] = inst_34322);

(statearr_34627_34751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (1))){
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(2),c);
} else {
if((state_val_34614 === (69))){
var inst_34491 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34628_34752 = state_34613__$1;
(statearr_34628_34752[(2)] = inst_34491);

(statearr_34628_34752[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (24))){
var state_34613__$1 = state_34613;
var statearr_34629_34753 = state_34613__$1;
(statearr_34629_34753[(2)] = true);

(statearr_34629_34753[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (55))){
var state_34613__$1 = state_34613;
var statearr_34630_34754 = state_34613__$1;
(statearr_34630_34754[(2)] = false);

(statearr_34630_34754[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (85))){
var inst_34559 = (state_34613[(11)]);
var inst_34556 = (state_34613[(2)]);
var inst_34557 = cljs.core.get.call(null,inst_34556,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_34558 = cljs.core.get.call(null,inst_34556,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_34559__$1 = cljs.core.get.call(null,inst_34556,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_34560 = cljs.core.empty_QMARK_.call(null,inst_34559__$1);
var state_34613__$1 = (function (){var statearr_34631 = state_34613;
(statearr_34631[(12)] = inst_34558);

(statearr_34631[(11)] = inst_34559__$1);

(statearr_34631[(13)] = inst_34557);

return statearr_34631;
})();
if(inst_34560){
var statearr_34632_34755 = state_34613__$1;
(statearr_34632_34755[(1)] = (86));

} else {
var statearr_34633_34756 = state_34613__$1;
(statearr_34633_34756[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (39))){
var state_34613__$1 = state_34613;
var statearr_34634_34757 = state_34613__$1;
(statearr_34634_34757[(2)] = false);

(statearr_34634_34757[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (88))){
var inst_34566 = (state_34613[(2)]);
var inst_34567 = [cljs.core.str("/getItems?"),cljs.core.str(inst_34566)].join('');
var inst_34568 = xl.core.jsonp.call(null,inst_34567);
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(89),inst_34568);
} else {
if((state_val_34614 === (46))){
var inst_34399 = (state_34613[(2)]);
var inst_34400 = cljs.core.get.call(null,inst_34399,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_34401 = cljs.core.get.call(null,inst_34399,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_34402 = encodeURIComponent(inst_34400);
var inst_34403 = encodeURIComponent(inst_34401);
var inst_34404 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_34402),cljs.core.str("&desc="),cljs.core.str(inst_34403)].join('');
var inst_34405 = xl.core.jsonp.call(null,inst_34404);
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(47),inst_34405);
} else {
if((state_val_34614 === (4))){
var inst_34611 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34613__$1,inst_34611);
} else {
if((state_val_34614 === (77))){
var inst_34246 = (state_34613[(7)]);
var inst_34541 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34542 = (inst_34541 & (64));
var inst_34543 = inst_34246.cljs$core$ISeq$;
var inst_34544 = (inst_34542) || (inst_34543);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34544)){
var statearr_34635_34758 = state_34613__$1;
(statearr_34635_34758[(1)] = (80));

} else {
var statearr_34636_34759 = state_34613__$1;
(statearr_34636_34759[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (54))){
var state_34613__$1 = state_34613;
var statearr_34637_34760 = state_34613__$1;
(statearr_34637_34760[(2)] = true);

(statearr_34637_34760[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (92))){
var inst_34592 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34638_34761 = state_34613__$1;
(statearr_34638_34761[(2)] = inst_34592);

(statearr_34638_34761[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (15))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34639_34762 = state_34613__$1;
(statearr_34639_34762[(2)] = inst_34246);

(statearr_34639_34762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (48))){
var inst_34246 = (state_34613[(7)]);
var inst_34430 = (inst_34246 == null);
var inst_34431 = cljs.core.not.call(null,inst_34430);
var state_34613__$1 = state_34613;
if(inst_34431){
var statearr_34640_34763 = state_34613__$1;
(statearr_34640_34763[(1)] = (51));

} else {
var statearr_34641_34764 = state_34613__$1;
(statearr_34641_34764[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (50))){
var inst_34598 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34642_34765 = state_34613__$1;
(statearr_34642_34765[(2)] = inst_34598);

(statearr_34642_34765[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (75))){
var state_34613__$1 = state_34613;
var statearr_34643_34766 = state_34613__$1;
(statearr_34643_34766[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (21))){
var inst_34246 = (state_34613[(7)]);
var inst_34310 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34311 = (inst_34310 & (64));
var inst_34312 = inst_34246.cljs$core$ISeq$;
var inst_34313 = (inst_34311) || (inst_34312);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34313)){
var statearr_34645_34767 = state_34613__$1;
(statearr_34645_34767[(1)] = (24));

} else {
var statearr_34646_34768 = state_34613__$1;
(statearr_34646_34768[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (31))){
var inst_34356 = xl.core.jsonp.call(null,"/logout");
var state_34613__$1 = state_34613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(34),inst_34356);
} else {
if((state_val_34614 === (32))){
var inst_34245 = (state_34613[(8)]);
var inst_34377 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_34613__$1 = state_34613;
if(inst_34377){
var statearr_34647_34769 = state_34613__$1;
(statearr_34647_34769[(1)] = (35));

} else {
var statearr_34648_34770 = state_34613__$1;
(statearr_34648_34770[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (40))){
var inst_34394 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34394)){
var statearr_34649_34771 = state_34613__$1;
(statearr_34649_34771[(1)] = (44));

} else {
var statearr_34650_34772 = state_34613__$1;
(statearr_34650_34772[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (91))){
var state_34613__$1 = state_34613;
var statearr_34651_34773 = state_34613__$1;
(statearr_34651_34773[(2)] = null);

(statearr_34651_34773[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (56))){
var inst_34440 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34652_34774 = state_34613__$1;
(statearr_34652_34774[(2)] = inst_34440);

(statearr_34652_34774[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (33))){
var inst_34602 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34653_34775 = state_34613__$1;
(statearr_34653_34775[(2)] = inst_34602);

(statearr_34653_34775[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (13))){
var inst_34264 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34654_34776 = state_34613__$1;
(statearr_34654_34776[(2)] = inst_34264);

(statearr_34654_34776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (22))){
var state_34613__$1 = state_34613;
var statearr_34655_34777 = state_34613__$1;
(statearr_34655_34777[(2)] = false);

(statearr_34655_34777[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (90))){
var state_34613__$1 = state_34613;
var statearr_34656_34778 = state_34613__$1;
(statearr_34656_34778[(2)] = null);

(statearr_34656_34778[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (36))){
var inst_34245 = (state_34613[(8)]);
var inst_34426 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_34613__$1 = state_34613;
if(inst_34426){
var statearr_34657_34779 = state_34613__$1;
(statearr_34657_34779[(1)] = (48));

} else {
var statearr_34658_34780 = state_34613__$1;
(statearr_34658_34780[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (41))){
var state_34613__$1 = state_34613;
var statearr_34659_34781 = state_34613__$1;
(statearr_34659_34781[(2)] = true);

(statearr_34659_34781[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (89))){
var inst_34558 = (state_34613[(12)]);
var inst_34570 = (state_34613[(2)]);
var inst_34571 = cljs.core.js__GT_clj.call(null,inst_34570);
var inst_34572 = xl.core.convert_json_lsts_result.call(null,inst_34571,inst_34558,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_34573 = cljs.core.List.EMPTY;
var inst_34574 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_34575 = cljs.core._conj.call(null,inst_34573,inst_34574);
var inst_34576 = cljs.core.List.EMPTY;
var inst_34577 = cljs.core._conj.call(null,inst_34576,inst_34572);
var inst_34578 = cljs.core.concat.call(null,inst_34575,inst_34577);
var inst_34579 = cljs.core.seq.call(null,inst_34578);
var inst_34580 = cljs.core.sequence.call(null,inst_34579);
var inst_34581 = cljs.core.List.EMPTY;
var inst_34582 = cljs.core._conj.call(null,inst_34581,inst_34580);
var inst_34583 = cljs.core.concat.call(null,inst_34582);
var inst_34584 = cljs.core.seq.call(null,inst_34583);
var inst_34585 = cljs.core.sequence.call(null,inst_34584);
var inst_34586 = cljs.core.vec.call(null,inst_34585);
var inst_34587 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34586);
var state_34613__$1 = state_34613;
var statearr_34660_34782 = state_34613__$1;
(statearr_34660_34782[(2)] = inst_34587);

(statearr_34660_34782[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (43))){
var inst_34391 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34661_34783 = state_34613__$1;
(statearr_34661_34783[(2)] = inst_34391);

(statearr_34661_34783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (61))){
var inst_34246 = (state_34613[(7)]);
var inst_34481 = (inst_34246 == null);
var inst_34482 = cljs.core.not.call(null,inst_34481);
var state_34613__$1 = state_34613;
if(inst_34482){
var statearr_34662_34784 = state_34613__$1;
(statearr_34662_34784[(1)] = (64));

} else {
var statearr_34663_34785 = state_34613__$1;
(statearr_34663_34785[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (29))){
var inst_34325 = (state_34613[(2)]);
var inst_34326 = cljs.core.get.call(null,inst_34325,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_34327 = cljs.core.get.call(null,inst_34325,new cljs.core.Keyword(null,"password","password",417022471));
var inst_34328 = cljs.core.get.call(null,inst_34325,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_34329 = xl.core.enc_password.call(null,inst_34327);
var inst_34330 = encodeURIComponent(inst_34326);
var inst_34331 = encodeURIComponent(inst_34329);
var inst_34332 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_34330),cljs.core.str("&pass="),cljs.core.str(inst_34331)].join('');
var inst_34333 = xl.core.jsonp.call(null,inst_34332);
var state_34613__$1 = (function (){var statearr_34664 = state_34613;
(statearr_34664[(14)] = inst_34328);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(30),inst_34333);
} else {
if((state_val_34614 === (44))){
var inst_34246 = (state_34613[(7)]);
var inst_34396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34665_34786 = state_34613__$1;
(statearr_34665_34786[(2)] = inst_34396);

(statearr_34665_34786[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (93))){
var inst_34608 = (state_34613[(2)]);
var inst_34240 = inst_34608;
var state_34613__$1 = (function (){var statearr_34666 = state_34613;
(statearr_34666[(15)] = inst_34240);

return statearr_34666;
})();
var statearr_34667_34787 = state_34613__$1;
(statearr_34667_34787[(2)] = null);

(statearr_34667_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (6))){
var inst_34245 = (state_34613[(8)]);
var inst_34303 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_34613__$1 = state_34613;
if(inst_34303){
var statearr_34668_34788 = state_34613__$1;
(statearr_34668_34788[(1)] = (18));

} else {
var statearr_34669_34789 = state_34613__$1;
(statearr_34669_34789[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (28))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34670_34790 = state_34613__$1;
(statearr_34670_34790[(2)] = inst_34246);

(statearr_34670_34790[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (64))){
var inst_34246 = (state_34613[(7)]);
var inst_34484 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34485 = (inst_34484 & (64));
var inst_34486 = inst_34246.cljs$core$ISeq$;
var inst_34487 = (inst_34485) || (inst_34486);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34487)){
var statearr_34671_34791 = state_34613__$1;
(statearr_34671_34791[(1)] = (67));

} else {
var statearr_34672_34792 = state_34613__$1;
(statearr_34672_34792[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (51))){
var inst_34246 = (state_34613[(7)]);
var inst_34433 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34434 = (inst_34433 & (64));
var inst_34435 = inst_34246.cljs$core$ISeq$;
var inst_34436 = (inst_34434) || (inst_34435);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34436)){
var statearr_34673_34793 = state_34613__$1;
(statearr_34673_34793[(1)] = (54));

} else {
var statearr_34674_34794 = state_34613__$1;
(statearr_34674_34794[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (25))){
var state_34613__$1 = state_34613;
var statearr_34675_34795 = state_34613__$1;
(statearr_34675_34795[(2)] = false);

(statearr_34675_34795[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (34))){
var inst_34358 = (state_34613[(2)]);
var inst_34359 = cljs.core.js__GT_clj.call(null,inst_34358);
var inst_34360 = xl.core.convert_json_status.call(null,inst_34359,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_34361 = cljs.core.List.EMPTY;
var inst_34362 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_34363 = cljs.core._conj.call(null,inst_34361,inst_34362);
var inst_34364 = cljs.core.List.EMPTY;
var inst_34365 = cljs.core._conj.call(null,inst_34364,inst_34360);
var inst_34366 = cljs.core.concat.call(null,inst_34363,inst_34365);
var inst_34367 = cljs.core.seq.call(null,inst_34366);
var inst_34368 = cljs.core.sequence.call(null,inst_34367);
var inst_34369 = cljs.core.List.EMPTY;
var inst_34370 = cljs.core._conj.call(null,inst_34369,inst_34368);
var inst_34371 = cljs.core.concat.call(null,inst_34370);
var inst_34372 = cljs.core.seq.call(null,inst_34371);
var inst_34373 = cljs.core.sequence.call(null,inst_34372);
var inst_34374 = cljs.core.vec.call(null,inst_34373);
var inst_34375 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34374);
var state_34613__$1 = state_34613;
var statearr_34676_34796 = state_34613__$1;
(statearr_34676_34796[(2)] = inst_34375);

(statearr_34676_34796[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (17))){
var inst_34274 = (state_34613[(16)]);
var inst_34275 = (state_34613[(17)]);
var inst_34281 = (state_34613[(2)]);
var inst_34282 = cljs.core.js__GT_clj.call(null,inst_34281);
var inst_34283 = xl.core.gen_key_bytes.call(null,inst_34274);
var inst_34284 = xl.core.create_aes_cbc.call(null,inst_34283);
var inst_34285 = xl.core.convert_json_lsts_result.call(null,inst_34282,inst_34275,new cljs.core.Keyword(null,"login","login",55217519));
var inst_34286 = cljs.core.assoc.call(null,inst_34285,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_34284);
var inst_34287 = cljs.core.List.EMPTY;
var inst_34288 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_34289 = cljs.core._conj.call(null,inst_34287,inst_34288);
var inst_34290 = cljs.core.List.EMPTY;
var inst_34291 = cljs.core._conj.call(null,inst_34290,inst_34286);
var inst_34292 = cljs.core.concat.call(null,inst_34289,inst_34291);
var inst_34293 = cljs.core.seq.call(null,inst_34292);
var inst_34294 = cljs.core.sequence.call(null,inst_34293);
var inst_34295 = cljs.core.List.EMPTY;
var inst_34296 = cljs.core._conj.call(null,inst_34295,inst_34294);
var inst_34297 = cljs.core.concat.call(null,inst_34296);
var inst_34298 = cljs.core.seq.call(null,inst_34297);
var inst_34299 = cljs.core.sequence.call(null,inst_34298);
var inst_34300 = cljs.core.vec.call(null,inst_34299);
var inst_34301 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34300);
var state_34613__$1 = state_34613;
var statearr_34677_34797 = state_34613__$1;
(statearr_34677_34797[(2)] = inst_34301);

(statearr_34677_34797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (3))){
var inst_34240 = (state_34613[(15)]);
var inst_34245 = (state_34613[(8)]);
var inst_34245__$1 = cljs.core.nth.call(null,inst_34240,(0),null);
var inst_34246 = cljs.core.nth.call(null,inst_34240,(1),null);
var inst_34247 = cljs.core.nth.call(null,inst_34240,(2),null);
var inst_34248 = cljs.core._EQ_.call(null,inst_34245__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_34613__$1 = (function (){var statearr_34678 = state_34613;
(statearr_34678[(8)] = inst_34245__$1);

(statearr_34678[(18)] = inst_34247);

(statearr_34678[(7)] = inst_34246);

return statearr_34678;
})();
if(inst_34248){
var statearr_34679_34798 = state_34613__$1;
(statearr_34679_34798[(1)] = (5));

} else {
var statearr_34680_34799 = state_34613__$1;
(statearr_34680_34799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (12))){
var state_34613__$1 = state_34613;
var statearr_34681_34800 = state_34613__$1;
(statearr_34681_34800[(2)] = false);

(statearr_34681_34800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (2))){
var inst_34236 = (state_34613[(2)]);
var inst_34237 = cljs.core.nth.call(null,inst_34236,(0),null);
var inst_34238 = cljs.core.nth.call(null,inst_34236,(1),null);
var inst_34239 = cljs.core.nth.call(null,inst_34236,(2),null);
var inst_34240 = inst_34236;
var state_34613__$1 = (function (){var statearr_34682 = state_34613;
(statearr_34682[(15)] = inst_34240);

(statearr_34682[(19)] = inst_34238);

(statearr_34682[(20)] = inst_34239);

(statearr_34682[(21)] = inst_34237);

return statearr_34682;
})();
var statearr_34683_34801 = state_34613__$1;
(statearr_34683_34801[(2)] = null);

(statearr_34683_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (66))){
var inst_34494 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34494)){
var statearr_34684_34802 = state_34613__$1;
(statearr_34684_34802[(1)] = (70));

} else {
var statearr_34685_34803 = state_34613__$1;
(statearr_34685_34803[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (23))){
var inst_34320 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34320)){
var statearr_34686_34804 = state_34613__$1;
(statearr_34686_34804[(1)] = (27));

} else {
var statearr_34687_34805 = state_34613__$1;
(statearr_34687_34805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (47))){
var inst_34407 = (state_34613[(2)]);
var inst_34408 = cljs.core.js__GT_clj.call(null,inst_34407);
var inst_34409 = xl.core.convert_json_lsts_result.call(null,inst_34408,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_34410 = cljs.core.List.EMPTY;
var inst_34411 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_34412 = cljs.core._conj.call(null,inst_34410,inst_34411);
var inst_34413 = cljs.core.List.EMPTY;
var inst_34414 = cljs.core._conj.call(null,inst_34413,inst_34409);
var inst_34415 = cljs.core.concat.call(null,inst_34412,inst_34414);
var inst_34416 = cljs.core.seq.call(null,inst_34415);
var inst_34417 = cljs.core.sequence.call(null,inst_34416);
var inst_34418 = cljs.core.List.EMPTY;
var inst_34419 = cljs.core._conj.call(null,inst_34418,inst_34417);
var inst_34420 = cljs.core.concat.call(null,inst_34419);
var inst_34421 = cljs.core.seq.call(null,inst_34420);
var inst_34422 = cljs.core.sequence.call(null,inst_34421);
var inst_34423 = cljs.core.vec.call(null,inst_34422);
var inst_34424 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34423);
var state_34613__$1 = state_34613;
var statearr_34688_34806 = state_34613__$1;
(statearr_34688_34806[(2)] = inst_34424);

(statearr_34688_34806[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (35))){
var inst_34246 = (state_34613[(7)]);
var inst_34381 = (inst_34246 == null);
var inst_34382 = cljs.core.not.call(null,inst_34381);
var state_34613__$1 = state_34613;
if(inst_34382){
var statearr_34689_34807 = state_34613__$1;
(statearr_34689_34807[(1)] = (38));

} else {
var statearr_34690_34808 = state_34613__$1;
(statearr_34690_34808[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (82))){
var inst_34548 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34691_34809 = state_34613__$1;
(statearr_34691_34809[(2)] = inst_34548);

(statearr_34691_34809[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (76))){
var inst_34594 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34692_34810 = state_34613__$1;
(statearr_34692_34810[(2)] = inst_34594);

(statearr_34692_34810[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (19))){
var inst_34245 = (state_34613[(8)]);
var inst_34354 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_34613__$1 = state_34613;
if(inst_34354){
var statearr_34693_34811 = state_34613__$1;
(statearr_34693_34811[(1)] = (31));

} else {
var statearr_34694_34812 = state_34613__$1;
(statearr_34694_34812[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (57))){
var inst_34246 = (state_34613[(7)]);
var inst_34445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34695_34813 = state_34613__$1;
(statearr_34695_34813[(2)] = inst_34445);

(statearr_34695_34813[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (68))){
var state_34613__$1 = state_34613;
var statearr_34696_34814 = state_34613__$1;
(statearr_34696_34814[(2)] = false);

(statearr_34696_34814[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (11))){
var state_34613__$1 = state_34613;
var statearr_34697_34815 = state_34613__$1;
(statearr_34697_34815[(2)] = true);

(statearr_34697_34815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (9))){
var state_34613__$1 = state_34613;
var statearr_34698_34816 = state_34613__$1;
(statearr_34698_34816[(2)] = false);

(statearr_34698_34816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (5))){
var inst_34246 = (state_34613[(7)]);
var inst_34251 = [cljs.core.str("lst login data:"),cljs.core.str(inst_34246)].join('');
var inst_34252 = cljs.core.println.call(null,inst_34251);
var inst_34254 = (inst_34246 == null);
var inst_34255 = cljs.core.not.call(null,inst_34254);
var state_34613__$1 = (function (){var statearr_34699 = state_34613;
(statearr_34699[(22)] = inst_34252);

return statearr_34699;
})();
if(inst_34255){
var statearr_34700_34817 = state_34613__$1;
(statearr_34700_34817[(1)] = (8));

} else {
var statearr_34701_34818 = state_34613__$1;
(statearr_34701_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (83))){
var inst_34246 = (state_34613[(7)]);
var inst_34553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34702_34819 = state_34613__$1;
(statearr_34702_34819[(2)] = inst_34553);

(statearr_34702_34819[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (14))){
var inst_34246 = (state_34613[(7)]);
var inst_34269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34246);
var state_34613__$1 = state_34613;
var statearr_34703_34820 = state_34613__$1;
(statearr_34703_34820[(2)] = inst_34269);

(statearr_34703_34820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (45))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34704_34821 = state_34613__$1;
(statearr_34704_34821[(2)] = inst_34246);

(statearr_34704_34821[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (53))){
var inst_34443 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34443)){
var statearr_34705_34822 = state_34613__$1;
(statearr_34705_34822[(1)] = (57));

} else {
var statearr_34706_34823 = state_34613__$1;
(statearr_34706_34823[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (78))){
var state_34613__$1 = state_34613;
var statearr_34707_34824 = state_34613__$1;
(statearr_34707_34824[(2)] = false);

(statearr_34707_34824[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (26))){
var inst_34317 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34708_34825 = state_34613__$1;
(statearr_34708_34825[(2)] = inst_34317);

(statearr_34708_34825[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (16))){
var inst_34274 = (state_34613[(16)]);
var inst_34272 = (state_34613[(2)]);
var inst_34273 = cljs.core.get.call(null,inst_34272,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_34274__$1 = cljs.core.get.call(null,inst_34272,new cljs.core.Keyword(null,"password","password",417022471));
var inst_34275 = cljs.core.get.call(null,inst_34272,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_34276 = encodeURIComponent(inst_34273);
var inst_34277 = encodeURIComponent(inst_34274__$1);
var inst_34278 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_34276),cljs.core.str("&pass="),cljs.core.str(inst_34277)].join('');
var inst_34279 = xl.core.jsonp.call(null,inst_34278);
var state_34613__$1 = (function (){var statearr_34709 = state_34613;
(statearr_34709[(16)] = inst_34274__$1);

(statearr_34709[(17)] = inst_34275);

return statearr_34709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34613__$1,(17),inst_34279);
} else {
if((state_val_34614 === (81))){
var state_34613__$1 = state_34613;
var statearr_34710_34826 = state_34613__$1;
(statearr_34710_34826[(2)] = false);

(statearr_34710_34826[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (79))){
var inst_34551 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34551)){
var statearr_34711_34827 = state_34613__$1;
(statearr_34711_34827[(1)] = (83));

} else {
var statearr_34712_34828 = state_34613__$1;
(statearr_34712_34828[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (38))){
var inst_34246 = (state_34613[(7)]);
var inst_34384 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34385 = (inst_34384 & (64));
var inst_34386 = inst_34246.cljs$core$ISeq$;
var inst_34387 = (inst_34385) || (inst_34386);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34387)){
var statearr_34713_34829 = state_34613__$1;
(statearr_34713_34829[(1)] = (41));

} else {
var statearr_34714_34830 = state_34613__$1;
(statearr_34714_34830[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (87))){
var inst_34559 = (state_34613[(11)]);
var inst_34563 = encodeURIComponent(inst_34559);
var inst_34564 = [cljs.core.str("query="),cljs.core.str(inst_34563)].join('');
var state_34613__$1 = state_34613;
var statearr_34715_34831 = state_34613__$1;
(statearr_34715_34831[(2)] = inst_34564);

(statearr_34715_34831[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (30))){
var inst_34335 = (state_34613[(2)]);
var inst_34336 = cljs.core.js__GT_clj.call(null,inst_34335);
var inst_34337 = xl.core.convert_json_status.call(null,inst_34336,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_34338 = cljs.core.List.EMPTY;
var inst_34339 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_34340 = cljs.core._conj.call(null,inst_34338,inst_34339);
var inst_34341 = cljs.core.List.EMPTY;
var inst_34342 = cljs.core._conj.call(null,inst_34341,inst_34337);
var inst_34343 = cljs.core.concat.call(null,inst_34340,inst_34342);
var inst_34344 = cljs.core.seq.call(null,inst_34343);
var inst_34345 = cljs.core.sequence.call(null,inst_34344);
var inst_34346 = cljs.core.List.EMPTY;
var inst_34347 = cljs.core._conj.call(null,inst_34346,inst_34345);
var inst_34348 = cljs.core.concat.call(null,inst_34347);
var inst_34349 = cljs.core.seq.call(null,inst_34348);
var inst_34350 = cljs.core.sequence.call(null,inst_34349);
var inst_34351 = cljs.core.vec.call(null,inst_34350);
var inst_34352 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34351);
var state_34613__$1 = state_34613;
var statearr_34716_34832 = state_34613__$1;
(statearr_34716_34832[(2)] = inst_34352);

(statearr_34716_34832[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (73))){
var inst_34513 = (state_34613[(2)]);
var inst_34514 = cljs.core.js__GT_clj.call(null,inst_34513);
var inst_34515 = xl.core.convert_json_lsts_result.call(null,inst_34514,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_34516 = cljs.core.List.EMPTY;
var inst_34517 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_34518 = cljs.core._conj.call(null,inst_34516,inst_34517);
var inst_34519 = cljs.core.List.EMPTY;
var inst_34520 = cljs.core._conj.call(null,inst_34519,inst_34515);
var inst_34521 = cljs.core.concat.call(null,inst_34518,inst_34520);
var inst_34522 = cljs.core.seq.call(null,inst_34521);
var inst_34523 = cljs.core.sequence.call(null,inst_34522);
var inst_34524 = cljs.core.List.EMPTY;
var inst_34525 = cljs.core._conj.call(null,inst_34524,inst_34523);
var inst_34526 = cljs.core.concat.call(null,inst_34525);
var inst_34527 = cljs.core.seq.call(null,inst_34526);
var inst_34528 = cljs.core.sequence.call(null,inst_34527);
var inst_34529 = cljs.core.vec.call(null,inst_34528);
var inst_34530 = om.next.transact_BANG_.call(null,xl.core.lst_reconciler,inst_34529);
var state_34613__$1 = state_34613;
var statearr_34717_34833 = state_34613__$1;
(statearr_34717_34833[(2)] = inst_34530);

(statearr_34717_34833[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (10))){
var inst_34267 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34267)){
var statearr_34718_34834 = state_34613__$1;
(statearr_34718_34834[(1)] = (14));

} else {
var statearr_34719_34835 = state_34613__$1;
(statearr_34719_34835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (18))){
var inst_34246 = (state_34613[(7)]);
var inst_34307 = (inst_34246 == null);
var inst_34308 = cljs.core.not.call(null,inst_34307);
var state_34613__$1 = state_34613;
if(inst_34308){
var statearr_34720_34836 = state_34613__$1;
(statearr_34720_34836[(1)] = (21));

} else {
var statearr_34721_34837 = state_34613__$1;
(statearr_34721_34837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (52))){
var state_34613__$1 = state_34613;
var statearr_34722_34838 = state_34613__$1;
(statearr_34722_34838[(2)] = false);

(statearr_34722_34838[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (67))){
var state_34613__$1 = state_34613;
var statearr_34723_34839 = state_34613__$1;
(statearr_34723_34839[(2)] = true);

(statearr_34723_34839[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (71))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34724_34840 = state_34613__$1;
(statearr_34724_34840[(2)] = inst_34246);

(statearr_34724_34840[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (42))){
var state_34613__$1 = state_34613;
var statearr_34725_34841 = state_34613__$1;
(statearr_34725_34841[(2)] = false);

(statearr_34725_34841[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (80))){
var state_34613__$1 = state_34613;
var statearr_34726_34842 = state_34613__$1;
(statearr_34726_34842[(2)] = true);

(statearr_34726_34842[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (37))){
var inst_34600 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34727_34843 = state_34613__$1;
(statearr_34727_34843[(2)] = inst_34600);

(statearr_34727_34843[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (63))){
var inst_34596 = (state_34613[(2)]);
var state_34613__$1 = state_34613;
var statearr_34728_34844 = state_34613__$1;
(statearr_34728_34844[(2)] = inst_34596);

(statearr_34728_34844[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (8))){
var inst_34246 = (state_34613[(7)]);
var inst_34257 = inst_34246.cljs$lang$protocol_mask$partition0$;
var inst_34258 = (inst_34257 & (64));
var inst_34259 = inst_34246.cljs$core$ISeq$;
var inst_34260 = (inst_34258) || (inst_34259);
var state_34613__$1 = state_34613;
if(cljs.core.truth_(inst_34260)){
var statearr_34729_34845 = state_34613__$1;
(statearr_34729_34845[(1)] = (11));

} else {
var statearr_34730_34846 = state_34613__$1;
(statearr_34730_34846[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (49))){
var inst_34245 = (state_34613[(8)]);
var inst_34477 = cljs.core._EQ_.call(null,inst_34245,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_34613__$1 = state_34613;
if(inst_34477){
var statearr_34731_34847 = state_34613__$1;
(statearr_34731_34847[(1)] = (61));

} else {
var statearr_34732_34848 = state_34613__$1;
(statearr_34732_34848[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34614 === (84))){
var inst_34246 = (state_34613[(7)]);
var state_34613__$1 = state_34613;
var statearr_34733_34849 = state_34613__$1;
(statearr_34733_34849[(2)] = inst_34246);

(statearr_34733_34849[(1)] = (85));


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
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var xl$core$search_loop_$_state_machine__24152__auto__ = null;
var xl$core$search_loop_$_state_machine__24152__auto____0 = (function (){
var statearr_34737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34737[(0)] = xl$core$search_loop_$_state_machine__24152__auto__);

(statearr_34737[(1)] = (1));

return statearr_34737;
});
var xl$core$search_loop_$_state_machine__24152__auto____1 = (function (state_34613){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_34613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e34738){if((e34738 instanceof Object)){
var ex__24155__auto__ = e34738;
var statearr_34739_34850 = state_34613;
(statearr_34739_34850[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34851 = state_34613;
state_34613 = G__34851;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
xl$core$search_loop_$_state_machine__24152__auto__ = function(state_34613){
switch(arguments.length){
case 0:
return xl$core$search_loop_$_state_machine__24152__auto____0.call(this);
case 1:
return xl$core$search_loop_$_state_machine__24152__auto____1.call(this,state_34613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xl$core$search_loop_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = xl$core$search_loop_$_state_machine__24152__auto____0;
xl$core$search_loop_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = xl$core$search_loop_$_state_machine__24152__auto____1;
return xl$core$search_loop_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_34740 = f__24266__auto__.call(null);
(statearr_34740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_34740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
});
xl.core.search_loop.call(null,xl.core.event_chan);
om.next.add_root_BANG_.call(null,xl.core.lst_reconciler,xl.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1472381713803