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
var idx_37009 = (0);
while(true){
var len1_37010 = b1.length;
if((cljs.core._EQ_.call(null,idx_37009,len1_37010)) || (cljs.core._EQ_.call(null,idx_37009,max_len))){
} else {
(b1[idx_37009] = ((b1[idx_37009]) ^ (b2[idx_37009])));

var G__37011 = (idx_37009 + (1));
idx_37009 = G__37011;
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
var args37014 = [];
var len__22774__auto___37017 = arguments.length;
var i__22775__auto___37018 = (0);
while(true){
if((i__22775__auto___37018 < len__22774__auto___37017)){
args37014.push((arguments[i__22775__auto___37018]));

var G__37019 = (i__22775__auto___37018 + (1));
i__22775__auto___37018 = G__37019;
continue;
} else {
}
break;
}

var G__37016 = args37014.length;
switch (G__37016) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37014.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__37012_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__37012_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__37013_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__37013_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22618__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22618__auto__,method_table__22614__auto__,prefer_table__22615__auto__,method_cache__22616__auto__,cached_hierarchy__22617__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__37021,_,p__37022){
var map__37023 = p__37021;
var map__37023__$1 = ((((!((map__37023 == null)))?((((map__37023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37023):map__37023);
var env = map__37023__$1;
var state = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__37024 = p__37022;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var query_ver = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__37027 = lst;
var map__37027__$1 = ((((!((map__37027 == null)))?((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37027):map__37027);
var lsts = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_37029 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_37029);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22618__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22618__auto__,method_table__22614__auto__,prefer_table__22615__auto__,method_cache__22616__auto__,cached_hierarchy__22617__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__37030,_,p__37031){
var map__37032 = p__37030;
var map__37032__$1 = ((((!((map__37032 == null)))?((((map__37032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37032):map__37032);
var env = map__37032__$1;
var state = cljs.core.get.call(null,map__37032__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37033 = p__37031;
var map__37033__$1 = ((((!((map__37033 == null)))?((((map__37033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37033):map__37033);
var status = map__37033__$1;
var id = cljs.core.get.call(null,map__37033__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37032,map__37032__$1,env,state,map__37033,map__37033__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__37032,map__37032__$1,env,state,map__37033,map__37033__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__37036,_,p__37037){
var map__37038 = p__37036;
var map__37038__$1 = ((((!((map__37038 == null)))?((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37038):map__37038);
var env = map__37038__$1;
var state = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37039 = p__37037;
var map__37039__$1 = ((((!((map__37039 == null)))?((((map__37039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37039):map__37039);
var path = cljs.core.get.call(null,map__37039__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__37039__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__37039__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37038,map__37038__$1,env,state,map__37039,map__37039__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__37038,map__37038__$1,env,state,map__37039,map__37039__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__37042,_,p__37043){
var map__37044 = p__37042;
var map__37044__$1 = ((((!((map__37044 == null)))?((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37044):map__37044);
var env = map__37044__$1;
var state = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37045 = p__37043;
var map__37045__$1 = ((((!((map__37045 == null)))?((((map__37045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37045):map__37045);
var data_map = map__37045__$1;
var lst_name = cljs.core.get.call(null,map__37045__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__37045__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__37045__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__37045__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37044,map__37044__$1,env,state,map__37045,map__37045__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__37044,map__37044__$1,env,state,map__37045,map__37045__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__37048,_,p__37049){
var map__37050 = p__37048;
var map__37050__$1 = ((((!((map__37050 == null)))?((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37050):map__37050);
var env = map__37050__$1;
var state = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37051 = p__37049;
var map__37051__$1 = ((((!((map__37051 == null)))?((((map__37051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37051):map__37051);
var field_id = cljs.core.get.call(null,map__37051__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__37051__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37050,map__37050__$1,env,state,map__37051,map__37051__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__37050,map__37050__$1,env,state,map__37051,map__37051__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__37054,_,p__37055){
var map__37056 = p__37054;
var map__37056__$1 = ((((!((map__37056 == null)))?((((map__37056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37056):map__37056);
var env = map__37056__$1;
var state = cljs.core.get.call(null,map__37056__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37057 = p__37055;
var map__37057__$1 = ((((!((map__37057 == null)))?((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37057):map__37057);
var data_map = map__37057__$1;
var user_id = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37056,map__37056__$1,env,state,map__37057,map__37057__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__37056,map__37056__$1,env,state,map__37057,map__37057__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__37060,_,p__37061){
var map__37062 = p__37060;
var map__37062__$1 = ((((!((map__37062 == null)))?((((map__37062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062):map__37062);
var env = map__37062__$1;
var state = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37063 = p__37061;
var map__37063__$1 = ((((!((map__37063 == null)))?((((map__37063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37063):map__37063);
var data_map = map__37063__$1;
var user_id = cljs.core.get.call(null,map__37063__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__37063__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37062,map__37062__$1,env,state,map__37063,map__37063__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__37062,map__37062__$1,env,state,map__37063,map__37063__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__37066,_,p__37067){
var map__37068 = p__37066;
var map__37068__$1 = ((((!((map__37068 == null)))?((((map__37068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37068):map__37068);
var env = map__37068__$1;
var state = cljs.core.get.call(null,map__37068__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37069 = p__37067;
var map__37069__$1 = ((((!((map__37069 == null)))?((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37069):map__37069);
var data_map = map__37069__$1;
var type = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37068,map__37068__$1,env,state,map__37069,map__37069__$1,data_map,type,fields){
return (function (){
return null;
});})(map__37068,map__37068__$1,env,state,map__37069,map__37069__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__37072,_,p__37073){
var map__37074 = p__37072;
var map__37074__$1 = ((((!((map__37074 == null)))?((((map__37074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37074):map__37074);
var env = map__37074__$1;
var state = cljs.core.get.call(null,map__37074__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37075 = p__37073;
var map__37075__$1 = ((((!((map__37075 == null)))?((((map__37075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37075):map__37075);
var data_map = map__37075__$1;
var name = cljs.core.get.call(null,map__37075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__37075__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37074,map__37074__$1,env,state,map__37075,map__37075__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__37074,map__37074__$1,env,state,map__37075,map__37075__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__37078,_,p__37079){
var map__37080 = p__37078;
var map__37080__$1 = ((((!((map__37080 == null)))?((((map__37080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37080):map__37080);
var env = map__37080__$1;
var state = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37081 = p__37079;
var map__37081__$1 = ((((!((map__37081 == null)))?((((map__37081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37081):map__37081);
var data_map = map__37081__$1;
var name = cljs.core.get.call(null,map__37081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__37081__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37080,map__37080__$1,env,state,map__37081,map__37081__$1,data_map,name,value){
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
});})(map__37080,map__37080__$1,env,state,map__37081,map__37081__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__37084,_,___$1){
var map__37085 = p__37084;
var map__37085__$1 = ((((!((map__37085 == null)))?((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37085):map__37085);
var env = map__37085__$1;
var state = cljs.core.get.call(null,map__37085__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37085,map__37085__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__37085,map__37085__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__37087,_,p__37088){
var map__37089 = p__37087;
var map__37089__$1 = ((((!((map__37089 == null)))?((((map__37089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37089):map__37089);
var env = map__37089__$1;
var state = cljs.core.get.call(null,map__37089__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37090 = p__37088;
var map__37090__$1 = ((((!((map__37090 == null)))?((((map__37090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37090):map__37090);
var data_map = map__37090__$1;
var status = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__37090__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37089,map__37089__$1,env,state,map__37090,map__37090__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__37089,map__37089__$1,env,state,map__37090,map__37090__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args37093 = [];
var len__22774__auto___37096 = arguments.length;
var i__22775__auto___37097 = (0);
while(true){
if((i__22775__auto___37097 < len__22774__auto___37096)){
args37093.push((arguments[i__22775__auto___37097]));

var G__37098 = (i__22775__auto___37097 + (1));
i__22775__auto___37097 = G__37098;
continue;
} else {
}
break;
}

var G__37095 = args37093.length;
switch (G__37095) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37093.length)].join('')));

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

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22517__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22517__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605)),(function (){var x__22517__auto__ = lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-name","item-name",1560972259)),(function (){var x__22517__auto__ = item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22517__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22517__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
});})(field_val,item_name))
}));
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul(({"key": "result-list"}),om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li(({"key": idx}),om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__37100){
var map__37106 = p__37100;
var map__37106__$1 = ((((!((map__37106 == null)))?((((map__37106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37106):map__37106);
var info = cljs.core.get.call(null,map__37106__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__37106__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__37106__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__37108 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__37108,(0),null);
var msg = cljs.core.nth.call(null,vec__37108,(1),null);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22517__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22517__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22517__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22517__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22517__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22517__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22517__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22517__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22517__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__37113 = lst;
var map__37113__$1 = ((((!((map__37113 == null)))?((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37113):map__37113);
var lsts = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__37113,map__37113__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__37113,map__37113__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__37117 = lst;
var map__37117__$1 = ((((!((map__37117 == null)))?((((map__37117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37117):map__37117);
var status = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__37123 = (function (){var G__37126 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37126) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__37123,(0),null);
var query_key = cljs.core.nth.call(null,vec__37123,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__37123,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__37123,elem_key,query_key))
}));
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22517__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22517__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22517__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22517__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22517__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22517__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22517__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22517__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22517__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22517__auto__);
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
var this__28634__auto__ = this;
React.Component.apply(this__28634__auto__,arguments);

if(!((this__28634__auto__.initLocalState == null))){
this__28634__auto__.state = this__28634__auto__.initLocalState();
} else {
this__28634__auto__.state = {};
}

return this__28634__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x37132_37144 = cloudxmark.core.Lsts.prototype;
x37132_37144.componentWillUpdate = ((function (x37132_37144){
return (function (next_props__28513__auto__,next_state__28514__auto__){
var this__28512__auto__ = this;
if(((!((this__28512__auto__ == null)))?(((false) || (this__28512__auto__.om$next$Ident$))?true:false):false)){
var ident__28516__auto___37145 = om.next.ident.call(null,this__28512__auto__,om.next.props.call(null,this__28512__auto__));
var next_ident__28517__auto___37146 = om.next.ident.call(null,this__28512__auto__,om.next._next_props.call(null,next_props__28513__auto__,this__28512__auto__));
if(cljs.core.not_EQ_.call(null,ident__28516__auto___37145,next_ident__28517__auto___37146)){
var idxr__28518__auto___37147 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28512__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28518__auto___37147 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28518__auto___37147),((function (idxr__28518__auto___37147,ident__28516__auto___37145,next_ident__28517__auto___37146,this__28512__auto__,x37132_37144){
return (function (indexes__28519__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28519__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28516__auto___37145], null),cljs.core.disj,this__28512__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28517__auto___37146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28512__auto__);
});})(idxr__28518__auto___37147,ident__28516__auto___37145,next_ident__28517__auto___37146,this__28512__auto__,x37132_37144))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28512__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28512__auto__);
});})(x37132_37144))
;

x37132_37144.shouldComponentUpdate = ((function (x37132_37144){
return (function (next_props__28513__auto__,next_state__28514__auto__){
var this__28512__auto__ = this;
var next_children__28515__auto__ = next_props__28513__auto__.children;
var next_props__28513__auto____$1 = goog.object.get(next_props__28513__auto__,"omcljs$value");
var next_props__28513__auto____$2 = (function (){var G__37134 = next_props__28513__auto____$1;
if((next_props__28513__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37134);
} else {
return G__37134;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28512__auto__),next_props__28513__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__28512__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28512__auto__.state,"omcljs$state"),goog.object.get(next_state__28514__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28512__auto__.props.children,next_children__28515__auto__);
}
}
});})(x37132_37144))
;

x37132_37144.componentWillUnmount = ((function (x37132_37144){
return (function (){
var this__28512__auto__ = this;
var r__28523__auto__ = om.next.get_reconciler.call(null,this__28512__auto__);
var cfg__28524__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28523__auto__);
var st__28525__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28524__auto__);
var indexer__28522__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28524__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__28525__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28525__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28512__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28525__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28512__auto__);
} else {
}

if((indexer__28522__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28522__auto__,this__28512__auto__);
}
});})(x37132_37144))
;

x37132_37144.componentDidUpdate = ((function (x37132_37144){
return (function (prev_props__28520__auto__,prev_state__28521__auto__){
var this__28512__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28512__auto__);
});})(x37132_37144))
;

x37132_37144.isMounted = ((function (x37132_37144){
return (function (){
var this__28512__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28512__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37132_37144))
;

x37132_37144.componentWillMount = ((function (x37132_37144){
return (function (){
var this__28512__auto__ = this;
var indexer__28522__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28512__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28522__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28522__auto__,this__28512__auto__);
}
});})(x37132_37144))
;

x37132_37144.render = ((function (x37132_37144){
return (function (){
var this__28511__auto__ = this;
var this$ = this__28511__auto__;
var _STAR_reconciler_STAR_37135 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37136 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37137 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37138 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37139 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28511__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28511__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28511__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28511__auto__);

om.next._STAR_parent_STAR_ = this__28511__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__37140 = lst;
var map__37140__$1 = ((((!((map__37140 == null)))?((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var lsts = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37139;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37138;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37137;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37136;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37135;
}});})(x37132_37144))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x37142_37148 = cloudxmark.core.Lsts;
/** @nocollapse */
x37142_37148.om$next$IQueryParams$ = true;

/** @nocollapse */
x37142_37148.om$next$IQueryParams$params$arity$1 = ((function (x37142_37148){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x37142_37148))
;

/** @nocollapse */
x37142_37148.om$next$IQuery$ = true;

/** @nocollapse */
x37142_37148.om$next$IQuery$query$arity$1 = ((function (x37142_37148){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x37142_37148))
;


var x37143_37149 = cloudxmark.core.Lsts.prototype;

x37143_37149.om$next$IQueryParams$ = true;


x37143_37149.om$next$IQueryParams$params$arity$1 = ((function (x37143_37149){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x37143_37149))
;


x37143_37149.om$next$IQuery$ = true;


x37143_37149.om$next$IQuery$query$arity$1 = ((function (x37143_37149){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x37143_37149))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28637__auto__,writer__28638__auto__,opt__28639__auto__){
return cljs.core._write.call(null,writer__28638__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__37158,cb){
var map__37159 = p__37158;
var map__37159__$1 = ((((!((map__37159 == null)))?((((map__37159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37159):map__37159);
var lst_search = cljs.core.get.call(null,map__37159__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__37161 = om.next.query__GT_ast.call(null,lst_search);
var map__37161__$1 = ((((!((map__37161 == null)))?((((map__37161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37161):map__37161);
var vec__37162 = cljs.core.get.call(null,map__37161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__37162,(0),null);
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
var map__37170 = result;
var map__37170__$1 = ((((!((map__37170 == null)))?((((map__37170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);
var lsts = cljs.core.get.call(null,map__37170__$1,"lsts");
var user_id = cljs.core.get.call(null,map__37170__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__37170__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__37171 = json_status;
var map__37171__$1 = ((((!((map__37171 == null)))?((((map__37171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37171):map__37171);
var info = cljs.core.get.call(null,map__37171__$1,"info");
var warn = cljs.core.get.call(null,map__37171__$1,"warn");
var error = cljs.core.get.call(null,map__37171__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__37176 = json_status;
var map__37176__$1 = ((((!((map__37176 == null)))?((((map__37176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37176):map__37176);
var info = cljs.core.get.call(null,map__37176__$1,"info");
var warn = cljs.core.get.call(null,map__37176__$1,"warn");
var error = cljs.core.get.call(null,map__37176__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28380__auto__){
return (function (){
var f__28381__auto__ = (function (){var switch__28357__auto__ = ((function (c__28380__auto__){
return (function (state_38076){
var state_val_38077 = (state_38076[(1)]);
if((state_val_38077 === (65))){
var state_38076__$1 = state_38076;
var statearr_38078_38204 = state_38076__$1;
(statearr_38078_38204[(2)] = false);

(statearr_38078_38204[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (70))){
var inst_37709 = (state_38076[(7)]);
var inst_37959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38079_38205 = state_38076__$1;
(statearr_38079_38205[(2)] = inst_37959);

(statearr_38079_38205[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (62))){
var inst_37708 = (state_38076[(8)]);
var inst_37995 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_38076__$1 = state_38076;
if(inst_37995){
var statearr_38080_38206 = state_38076__$1;
(statearr_38080_38206[(1)] = (74));

} else {
var statearr_38081_38207 = state_38076__$1;
(statearr_38081_38207[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (74))){
var inst_37709 = (state_38076[(7)]);
var inst_37998 = [cljs.core.str("lst query data:"),cljs.core.str(inst_37709)].join('');
var inst_37999 = cljs.core.println.call(null,inst_37998);
var inst_38001 = (inst_37709 == null);
var inst_38002 = cljs.core.not.call(null,inst_38001);
var state_38076__$1 = (function (){var statearr_38082 = state_38076;
(statearr_38082[(9)] = inst_37999);

return statearr_38082;
})();
if(inst_38002){
var statearr_38083_38208 = state_38076__$1;
(statearr_38083_38208[(1)] = (77));

} else {
var statearr_38084_38209 = state_38076__$1;
(statearr_38084_38209[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (7))){
var inst_38069 = (state_38076[(2)]);
var state_38076__$1 = (function (){var statearr_38085 = state_38076;
(statearr_38085[(10)] = inst_38069);

return statearr_38085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(93),c);
} else {
if((state_val_38077 === (59))){
var inst_37911 = (state_38076[(2)]);
var inst_37912 = cljs.core.get.call(null,inst_37911,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_37913 = cljs.core.get.call(null,inst_37911,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_37914 = cljs.core.get.call(null,inst_37911,new cljs.core.Keyword(null,"value","value",305978217));
var inst_37915 = encodeURIComponent(inst_37912);
var inst_37916 = encodeURIComponent(inst_37913);
var inst_37917 = encodeURIComponent(inst_37914);
var inst_37918 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_37915),cljs.core.str("&name="),cljs.core.str(inst_37916),cljs.core.str("&value="),cljs.core.str(inst_37917)].join('');
var inst_37919 = cloudxmark.core.jsonp.call(null,inst_37918);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(60),inst_37919);
} else {
if((state_val_38077 === (86))){
var state_38076__$1 = state_38076;
var statearr_38086_38210 = state_38076__$1;
(statearr_38086_38210[(2)] = "");

(statearr_38086_38210[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (20))){
var inst_38067 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38087_38211 = state_38076__$1;
(statearr_38087_38211[(2)] = inst_38067);

(statearr_38087_38211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (72))){
var inst_37962 = (state_38076[(2)]);
var inst_37963 = cljs.core.get.call(null,inst_37962,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_37964 = cljs.core.get.call(null,inst_37962,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_37965 = cljs.core.get.call(null,inst_37962,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_37966 = cljs.core.get.call(null,inst_37962,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_37967 = cljs.core.get.call(null,inst_37962,new cljs.core.Keyword(null,"value","value",305978217));
var inst_37968 = encodeURIComponent(inst_37963);
var inst_37969 = encodeURIComponent(inst_37964);
var inst_37970 = encodeURIComponent(inst_37965);
var inst_37971 = encodeURIComponent(inst_37966);
var inst_37972 = encodeURIComponent(inst_37967);
var inst_37973 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_37968),cljs.core.str("&lst-name="),cljs.core.str(inst_37969),cljs.core.str("&orig-name="),cljs.core.str(inst_37970),cljs.core.str("&col-name="),cljs.core.str(inst_37971),cljs.core.str("&value="),cljs.core.str(inst_37972)].join('');
var inst_37974 = cloudxmark.core.jsonp.call(null,inst_37973);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(73),inst_37974);
} else {
if((state_val_38077 === (58))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38088_38212 = state_38076__$1;
(statearr_38088_38212[(2)] = inst_37709);

(statearr_38088_38212[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (60))){
var inst_37921 = (state_38076[(2)]);
var inst_37922 = cljs.core.js__GT_clj.call(null,inst_37921);
var inst_37923 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37922,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_37924 = cljs.core.List.EMPTY;
var inst_37925 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37926 = cljs.core._conj.call(null,inst_37924,inst_37925);
var inst_37927 = cljs.core.List.EMPTY;
var inst_37928 = cljs.core._conj.call(null,inst_37927,inst_37923);
var inst_37929 = cljs.core.concat.call(null,inst_37926,inst_37928);
var inst_37930 = cljs.core.seq.call(null,inst_37929);
var inst_37931 = cljs.core.sequence.call(null,inst_37930);
var inst_37932 = cljs.core.List.EMPTY;
var inst_37933 = cljs.core._conj.call(null,inst_37932,inst_37931);
var inst_37934 = cljs.core.concat.call(null,inst_37933);
var inst_37935 = cljs.core.seq.call(null,inst_37934);
var inst_37936 = cljs.core.sequence.call(null,inst_37935);
var inst_37937 = cljs.core.vec.call(null,inst_37936);
var inst_37938 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37937);
var state_38076__$1 = state_38076;
var statearr_38089_38213 = state_38076__$1;
(statearr_38089_38213[(2)] = inst_37938);

(statearr_38089_38213[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (27))){
var inst_37709 = (state_38076[(7)]);
var inst_37785 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38090_38214 = state_38076__$1;
(statearr_38090_38214[(2)] = inst_37785);

(statearr_38090_38214[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (1))){
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(2),c);
} else {
if((state_val_38077 === (69))){
var inst_37954 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38091_38215 = state_38076__$1;
(statearr_38091_38215[(2)] = inst_37954);

(statearr_38091_38215[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (24))){
var state_38076__$1 = state_38076;
var statearr_38092_38216 = state_38076__$1;
(statearr_38092_38216[(2)] = true);

(statearr_38092_38216[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (55))){
var state_38076__$1 = state_38076;
var statearr_38093_38217 = state_38076__$1;
(statearr_38093_38217[(2)] = false);

(statearr_38093_38217[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (85))){
var inst_38022 = (state_38076[(11)]);
var inst_38019 = (state_38076[(2)]);
var inst_38020 = cljs.core.get.call(null,inst_38019,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_38021 = cljs.core.get.call(null,inst_38019,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_38022__$1 = cljs.core.get.call(null,inst_38019,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_38023 = cljs.core.empty_QMARK_.call(null,inst_38022__$1);
var state_38076__$1 = (function (){var statearr_38094 = state_38076;
(statearr_38094[(12)] = inst_38021);

(statearr_38094[(11)] = inst_38022__$1);

(statearr_38094[(13)] = inst_38020);

return statearr_38094;
})();
if(inst_38023){
var statearr_38095_38218 = state_38076__$1;
(statearr_38095_38218[(1)] = (86));

} else {
var statearr_38096_38219 = state_38076__$1;
(statearr_38096_38219[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (39))){
var state_38076__$1 = state_38076;
var statearr_38097_38220 = state_38076__$1;
(statearr_38097_38220[(2)] = false);

(statearr_38097_38220[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (88))){
var inst_38029 = (state_38076[(2)]);
var inst_38030 = [cljs.core.str("/getItems?"),cljs.core.str(inst_38029)].join('');
var inst_38031 = cloudxmark.core.jsonp.call(null,inst_38030);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(89),inst_38031);
} else {
if((state_val_38077 === (46))){
var inst_37862 = (state_38076[(2)]);
var inst_37863 = cljs.core.get.call(null,inst_37862,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_37864 = cljs.core.get.call(null,inst_37862,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_37865 = encodeURIComponent(inst_37863);
var inst_37866 = encodeURIComponent(inst_37864);
var inst_37867 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_37865),cljs.core.str("&desc="),cljs.core.str(inst_37866)].join('');
var inst_37868 = cloudxmark.core.jsonp.call(null,inst_37867);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(47),inst_37868);
} else {
if((state_val_38077 === (4))){
var inst_38074 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38076__$1,inst_38074);
} else {
if((state_val_38077 === (77))){
var inst_37709 = (state_38076[(7)]);
var inst_38004 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_38005 = (inst_38004 & (64));
var inst_38006 = inst_37709.cljs$core$ISeq$;
var inst_38007 = (inst_38005) || (inst_38006);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38007)){
var statearr_38098_38221 = state_38076__$1;
(statearr_38098_38221[(1)] = (80));

} else {
var statearr_38099_38222 = state_38076__$1;
(statearr_38099_38222[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (54))){
var state_38076__$1 = state_38076;
var statearr_38100_38223 = state_38076__$1;
(statearr_38100_38223[(2)] = true);

(statearr_38100_38223[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (92))){
var inst_38055 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38101_38224 = state_38076__$1;
(statearr_38101_38224[(2)] = inst_38055);

(statearr_38101_38224[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (15))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38102_38225 = state_38076__$1;
(statearr_38102_38225[(2)] = inst_37709);

(statearr_38102_38225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (48))){
var inst_37709 = (state_38076[(7)]);
var inst_37893 = (inst_37709 == null);
var inst_37894 = cljs.core.not.call(null,inst_37893);
var state_38076__$1 = state_38076;
if(inst_37894){
var statearr_38103_38226 = state_38076__$1;
(statearr_38103_38226[(1)] = (51));

} else {
var statearr_38104_38227 = state_38076__$1;
(statearr_38104_38227[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (50))){
var inst_38061 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38105_38228 = state_38076__$1;
(statearr_38105_38228[(2)] = inst_38061);

(statearr_38105_38228[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (75))){
var state_38076__$1 = state_38076;
var statearr_38106_38229 = state_38076__$1;
(statearr_38106_38229[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (21))){
var inst_37709 = (state_38076[(7)]);
var inst_37773 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37774 = (inst_37773 & (64));
var inst_37775 = inst_37709.cljs$core$ISeq$;
var inst_37776 = (inst_37774) || (inst_37775);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37776)){
var statearr_38108_38230 = state_38076__$1;
(statearr_38108_38230[(1)] = (24));

} else {
var statearr_38109_38231 = state_38076__$1;
(statearr_38109_38231[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (31))){
var inst_37819 = cloudxmark.core.jsonp.call(null,"/logout");
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(34),inst_37819);
} else {
if((state_val_38077 === (32))){
var inst_37708 = (state_38076[(8)]);
var inst_37840 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_38076__$1 = state_38076;
if(inst_37840){
var statearr_38110_38232 = state_38076__$1;
(statearr_38110_38232[(1)] = (35));

} else {
var statearr_38111_38233 = state_38076__$1;
(statearr_38111_38233[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (40))){
var inst_37857 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37857)){
var statearr_38112_38234 = state_38076__$1;
(statearr_38112_38234[(1)] = (44));

} else {
var statearr_38113_38235 = state_38076__$1;
(statearr_38113_38235[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (91))){
var state_38076__$1 = state_38076;
var statearr_38114_38236 = state_38076__$1;
(statearr_38114_38236[(2)] = null);

(statearr_38114_38236[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (56))){
var inst_37903 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38115_38237 = state_38076__$1;
(statearr_38115_38237[(2)] = inst_37903);

(statearr_38115_38237[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (33))){
var inst_38065 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38116_38238 = state_38076__$1;
(statearr_38116_38238[(2)] = inst_38065);

(statearr_38116_38238[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (13))){
var inst_37727 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38117_38239 = state_38076__$1;
(statearr_38117_38239[(2)] = inst_37727);

(statearr_38117_38239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (22))){
var state_38076__$1 = state_38076;
var statearr_38118_38240 = state_38076__$1;
(statearr_38118_38240[(2)] = false);

(statearr_38118_38240[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (90))){
var state_38076__$1 = state_38076;
var statearr_38119_38241 = state_38076__$1;
(statearr_38119_38241[(2)] = null);

(statearr_38119_38241[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (36))){
var inst_37708 = (state_38076[(8)]);
var inst_37889 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_38076__$1 = state_38076;
if(inst_37889){
var statearr_38120_38242 = state_38076__$1;
(statearr_38120_38242[(1)] = (48));

} else {
var statearr_38121_38243 = state_38076__$1;
(statearr_38121_38243[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (41))){
var state_38076__$1 = state_38076;
var statearr_38122_38244 = state_38076__$1;
(statearr_38122_38244[(2)] = true);

(statearr_38122_38244[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (89))){
var inst_38021 = (state_38076[(12)]);
var inst_38033 = (state_38076[(2)]);
var inst_38034 = cljs.core.js__GT_clj.call(null,inst_38033);
var inst_38035 = cloudxmark.core.convert_json_lsts_result.call(null,inst_38034,inst_38021,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_38036 = cljs.core.List.EMPTY;
var inst_38037 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_38038 = cljs.core._conj.call(null,inst_38036,inst_38037);
var inst_38039 = cljs.core.List.EMPTY;
var inst_38040 = cljs.core._conj.call(null,inst_38039,inst_38035);
var inst_38041 = cljs.core.concat.call(null,inst_38038,inst_38040);
var inst_38042 = cljs.core.seq.call(null,inst_38041);
var inst_38043 = cljs.core.sequence.call(null,inst_38042);
var inst_38044 = cljs.core.List.EMPTY;
var inst_38045 = cljs.core._conj.call(null,inst_38044,inst_38043);
var inst_38046 = cljs.core.concat.call(null,inst_38045);
var inst_38047 = cljs.core.seq.call(null,inst_38046);
var inst_38048 = cljs.core.sequence.call(null,inst_38047);
var inst_38049 = cljs.core.vec.call(null,inst_38048);
var inst_38050 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_38049);
var state_38076__$1 = state_38076;
var statearr_38123_38245 = state_38076__$1;
(statearr_38123_38245[(2)] = inst_38050);

(statearr_38123_38245[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (43))){
var inst_37854 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38124_38246 = state_38076__$1;
(statearr_38124_38246[(2)] = inst_37854);

(statearr_38124_38246[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (61))){
var inst_37709 = (state_38076[(7)]);
var inst_37944 = (inst_37709 == null);
var inst_37945 = cljs.core.not.call(null,inst_37944);
var state_38076__$1 = state_38076;
if(inst_37945){
var statearr_38125_38247 = state_38076__$1;
(statearr_38125_38247[(1)] = (64));

} else {
var statearr_38126_38248 = state_38076__$1;
(statearr_38126_38248[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (29))){
var inst_37788 = (state_38076[(2)]);
var inst_37789 = cljs.core.get.call(null,inst_37788,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_37790 = cljs.core.get.call(null,inst_37788,new cljs.core.Keyword(null,"password","password",417022471));
var inst_37791 = cljs.core.get.call(null,inst_37788,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_37792 = cloudxmark.core.enc_password.call(null,inst_37790);
var inst_37793 = encodeURIComponent(inst_37789);
var inst_37794 = encodeURIComponent(inst_37792);
var inst_37795 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_37793),cljs.core.str("&pass="),cljs.core.str(inst_37794)].join('');
var inst_37796 = cloudxmark.core.jsonp.call(null,inst_37795);
var state_38076__$1 = (function (){var statearr_38127 = state_38076;
(statearr_38127[(14)] = inst_37791);

return statearr_38127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(30),inst_37796);
} else {
if((state_val_38077 === (44))){
var inst_37709 = (state_38076[(7)]);
var inst_37859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38128_38249 = state_38076__$1;
(statearr_38128_38249[(2)] = inst_37859);

(statearr_38128_38249[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (93))){
var inst_38071 = (state_38076[(2)]);
var inst_37703 = inst_38071;
var state_38076__$1 = (function (){var statearr_38129 = state_38076;
(statearr_38129[(15)] = inst_37703);

return statearr_38129;
})();
var statearr_38130_38250 = state_38076__$1;
(statearr_38130_38250[(2)] = null);

(statearr_38130_38250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (6))){
var inst_37708 = (state_38076[(8)]);
var inst_37766 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_38076__$1 = state_38076;
if(inst_37766){
var statearr_38131_38251 = state_38076__$1;
(statearr_38131_38251[(1)] = (18));

} else {
var statearr_38132_38252 = state_38076__$1;
(statearr_38132_38252[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (28))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38133_38253 = state_38076__$1;
(statearr_38133_38253[(2)] = inst_37709);

(statearr_38133_38253[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (64))){
var inst_37709 = (state_38076[(7)]);
var inst_37947 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37948 = (inst_37947 & (64));
var inst_37949 = inst_37709.cljs$core$ISeq$;
var inst_37950 = (inst_37948) || (inst_37949);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37950)){
var statearr_38134_38254 = state_38076__$1;
(statearr_38134_38254[(1)] = (67));

} else {
var statearr_38135_38255 = state_38076__$1;
(statearr_38135_38255[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (51))){
var inst_37709 = (state_38076[(7)]);
var inst_37896 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37897 = (inst_37896 & (64));
var inst_37898 = inst_37709.cljs$core$ISeq$;
var inst_37899 = (inst_37897) || (inst_37898);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37899)){
var statearr_38136_38256 = state_38076__$1;
(statearr_38136_38256[(1)] = (54));

} else {
var statearr_38137_38257 = state_38076__$1;
(statearr_38137_38257[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (25))){
var state_38076__$1 = state_38076;
var statearr_38138_38258 = state_38076__$1;
(statearr_38138_38258[(2)] = false);

(statearr_38138_38258[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (34))){
var inst_37821 = (state_38076[(2)]);
var inst_37822 = cljs.core.js__GT_clj.call(null,inst_37821);
var inst_37823 = cloudxmark.core.convert_json_status.call(null,inst_37822,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_37824 = cljs.core.List.EMPTY;
var inst_37825 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_37826 = cljs.core._conj.call(null,inst_37824,inst_37825);
var inst_37827 = cljs.core.List.EMPTY;
var inst_37828 = cljs.core._conj.call(null,inst_37827,inst_37823);
var inst_37829 = cljs.core.concat.call(null,inst_37826,inst_37828);
var inst_37830 = cljs.core.seq.call(null,inst_37829);
var inst_37831 = cljs.core.sequence.call(null,inst_37830);
var inst_37832 = cljs.core.List.EMPTY;
var inst_37833 = cljs.core._conj.call(null,inst_37832,inst_37831);
var inst_37834 = cljs.core.concat.call(null,inst_37833);
var inst_37835 = cljs.core.seq.call(null,inst_37834);
var inst_37836 = cljs.core.sequence.call(null,inst_37835);
var inst_37837 = cljs.core.vec.call(null,inst_37836);
var inst_37838 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37837);
var state_38076__$1 = state_38076;
var statearr_38139_38259 = state_38076__$1;
(statearr_38139_38259[(2)] = inst_37838);

(statearr_38139_38259[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (17))){
var inst_37738 = (state_38076[(16)]);
var inst_37737 = (state_38076[(17)]);
var inst_37744 = (state_38076[(2)]);
var inst_37745 = cljs.core.js__GT_clj.call(null,inst_37744);
var inst_37746 = cloudxmark.core.gen_key_bytes.call(null,inst_37737);
var inst_37747 = cloudxmark.core.create_aes_cbc.call(null,inst_37746);
var inst_37748 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37745,inst_37738,new cljs.core.Keyword(null,"login","login",55217519));
var inst_37749 = cljs.core.assoc.call(null,inst_37748,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_37747);
var inst_37750 = cljs.core.List.EMPTY;
var inst_37751 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37752 = cljs.core._conj.call(null,inst_37750,inst_37751);
var inst_37753 = cljs.core.List.EMPTY;
var inst_37754 = cljs.core._conj.call(null,inst_37753,inst_37749);
var inst_37755 = cljs.core.concat.call(null,inst_37752,inst_37754);
var inst_37756 = cljs.core.seq.call(null,inst_37755);
var inst_37757 = cljs.core.sequence.call(null,inst_37756);
var inst_37758 = cljs.core.List.EMPTY;
var inst_37759 = cljs.core._conj.call(null,inst_37758,inst_37757);
var inst_37760 = cljs.core.concat.call(null,inst_37759);
var inst_37761 = cljs.core.seq.call(null,inst_37760);
var inst_37762 = cljs.core.sequence.call(null,inst_37761);
var inst_37763 = cljs.core.vec.call(null,inst_37762);
var inst_37764 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37763);
var state_38076__$1 = state_38076;
var statearr_38140_38260 = state_38076__$1;
(statearr_38140_38260[(2)] = inst_37764);

(statearr_38140_38260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (3))){
var inst_37708 = (state_38076[(8)]);
var inst_37703 = (state_38076[(15)]);
var inst_37708__$1 = cljs.core.nth.call(null,inst_37703,(0),null);
var inst_37709 = cljs.core.nth.call(null,inst_37703,(1),null);
var inst_37710 = cljs.core.nth.call(null,inst_37703,(2),null);
var inst_37711 = cljs.core._EQ_.call(null,inst_37708__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_38076__$1 = (function (){var statearr_38141 = state_38076;
(statearr_38141[(8)] = inst_37708__$1);

(statearr_38141[(18)] = inst_37710);

(statearr_38141[(7)] = inst_37709);

return statearr_38141;
})();
if(inst_37711){
var statearr_38142_38261 = state_38076__$1;
(statearr_38142_38261[(1)] = (5));

} else {
var statearr_38143_38262 = state_38076__$1;
(statearr_38143_38262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (12))){
var state_38076__$1 = state_38076;
var statearr_38144_38263 = state_38076__$1;
(statearr_38144_38263[(2)] = false);

(statearr_38144_38263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (2))){
var inst_37699 = (state_38076[(2)]);
var inst_37700 = cljs.core.nth.call(null,inst_37699,(0),null);
var inst_37701 = cljs.core.nth.call(null,inst_37699,(1),null);
var inst_37702 = cljs.core.nth.call(null,inst_37699,(2),null);
var inst_37703 = inst_37699;
var state_38076__$1 = (function (){var statearr_38145 = state_38076;
(statearr_38145[(19)] = inst_37702);

(statearr_38145[(20)] = inst_37701);

(statearr_38145[(15)] = inst_37703);

(statearr_38145[(21)] = inst_37700);

return statearr_38145;
})();
var statearr_38146_38264 = state_38076__$1;
(statearr_38146_38264[(2)] = null);

(statearr_38146_38264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (66))){
var inst_37957 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37957)){
var statearr_38147_38265 = state_38076__$1;
(statearr_38147_38265[(1)] = (70));

} else {
var statearr_38148_38266 = state_38076__$1;
(statearr_38148_38266[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (23))){
var inst_37783 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37783)){
var statearr_38149_38267 = state_38076__$1;
(statearr_38149_38267[(1)] = (27));

} else {
var statearr_38150_38268 = state_38076__$1;
(statearr_38150_38268[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (47))){
var inst_37870 = (state_38076[(2)]);
var inst_37871 = cljs.core.js__GT_clj.call(null,inst_37870);
var inst_37872 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37871,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_37873 = cljs.core.List.EMPTY;
var inst_37874 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37875 = cljs.core._conj.call(null,inst_37873,inst_37874);
var inst_37876 = cljs.core.List.EMPTY;
var inst_37877 = cljs.core._conj.call(null,inst_37876,inst_37872);
var inst_37878 = cljs.core.concat.call(null,inst_37875,inst_37877);
var inst_37879 = cljs.core.seq.call(null,inst_37878);
var inst_37880 = cljs.core.sequence.call(null,inst_37879);
var inst_37881 = cljs.core.List.EMPTY;
var inst_37882 = cljs.core._conj.call(null,inst_37881,inst_37880);
var inst_37883 = cljs.core.concat.call(null,inst_37882);
var inst_37884 = cljs.core.seq.call(null,inst_37883);
var inst_37885 = cljs.core.sequence.call(null,inst_37884);
var inst_37886 = cljs.core.vec.call(null,inst_37885);
var inst_37887 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37886);
var state_38076__$1 = state_38076;
var statearr_38151_38269 = state_38076__$1;
(statearr_38151_38269[(2)] = inst_37887);

(statearr_38151_38269[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (35))){
var inst_37709 = (state_38076[(7)]);
var inst_37844 = (inst_37709 == null);
var inst_37845 = cljs.core.not.call(null,inst_37844);
var state_38076__$1 = state_38076;
if(inst_37845){
var statearr_38152_38270 = state_38076__$1;
(statearr_38152_38270[(1)] = (38));

} else {
var statearr_38153_38271 = state_38076__$1;
(statearr_38153_38271[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (82))){
var inst_38011 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38154_38272 = state_38076__$1;
(statearr_38154_38272[(2)] = inst_38011);

(statearr_38154_38272[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (76))){
var inst_38057 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38155_38273 = state_38076__$1;
(statearr_38155_38273[(2)] = inst_38057);

(statearr_38155_38273[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (19))){
var inst_37708 = (state_38076[(8)]);
var inst_37817 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_38076__$1 = state_38076;
if(inst_37817){
var statearr_38156_38274 = state_38076__$1;
(statearr_38156_38274[(1)] = (31));

} else {
var statearr_38157_38275 = state_38076__$1;
(statearr_38157_38275[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (57))){
var inst_37709 = (state_38076[(7)]);
var inst_37908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38158_38276 = state_38076__$1;
(statearr_38158_38276[(2)] = inst_37908);

(statearr_38158_38276[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (68))){
var state_38076__$1 = state_38076;
var statearr_38159_38277 = state_38076__$1;
(statearr_38159_38277[(2)] = false);

(statearr_38159_38277[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (11))){
var state_38076__$1 = state_38076;
var statearr_38160_38278 = state_38076__$1;
(statearr_38160_38278[(2)] = true);

(statearr_38160_38278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (9))){
var state_38076__$1 = state_38076;
var statearr_38161_38279 = state_38076__$1;
(statearr_38161_38279[(2)] = false);

(statearr_38161_38279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (5))){
var inst_37709 = (state_38076[(7)]);
var inst_37714 = [cljs.core.str("lst login data:"),cljs.core.str(inst_37709)].join('');
var inst_37715 = cljs.core.println.call(null,inst_37714);
var inst_37717 = (inst_37709 == null);
var inst_37718 = cljs.core.not.call(null,inst_37717);
var state_38076__$1 = (function (){var statearr_38162 = state_38076;
(statearr_38162[(22)] = inst_37715);

return statearr_38162;
})();
if(inst_37718){
var statearr_38163_38280 = state_38076__$1;
(statearr_38163_38280[(1)] = (8));

} else {
var statearr_38164_38281 = state_38076__$1;
(statearr_38164_38281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (83))){
var inst_37709 = (state_38076[(7)]);
var inst_38016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38165_38282 = state_38076__$1;
(statearr_38165_38282[(2)] = inst_38016);

(statearr_38165_38282[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (14))){
var inst_37709 = (state_38076[(7)]);
var inst_37732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37709);
var state_38076__$1 = state_38076;
var statearr_38166_38283 = state_38076__$1;
(statearr_38166_38283[(2)] = inst_37732);

(statearr_38166_38283[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (45))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38167_38284 = state_38076__$1;
(statearr_38167_38284[(2)] = inst_37709);

(statearr_38167_38284[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (53))){
var inst_37906 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37906)){
var statearr_38168_38285 = state_38076__$1;
(statearr_38168_38285[(1)] = (57));

} else {
var statearr_38169_38286 = state_38076__$1;
(statearr_38169_38286[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (78))){
var state_38076__$1 = state_38076;
var statearr_38170_38287 = state_38076__$1;
(statearr_38170_38287[(2)] = false);

(statearr_38170_38287[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (26))){
var inst_37780 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38171_38288 = state_38076__$1;
(statearr_38171_38288[(2)] = inst_37780);

(statearr_38171_38288[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (16))){
var inst_37737 = (state_38076[(17)]);
var inst_37735 = (state_38076[(2)]);
var inst_37736 = cljs.core.get.call(null,inst_37735,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_37737__$1 = cljs.core.get.call(null,inst_37735,new cljs.core.Keyword(null,"password","password",417022471));
var inst_37738 = cljs.core.get.call(null,inst_37735,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_37739 = encodeURIComponent(inst_37736);
var inst_37740 = encodeURIComponent(inst_37737__$1);
var inst_37741 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_37739),cljs.core.str("&pass="),cljs.core.str(inst_37740)].join('');
var inst_37742 = cloudxmark.core.jsonp.call(null,inst_37741);
var state_38076__$1 = (function (){var statearr_38172 = state_38076;
(statearr_38172[(16)] = inst_37738);

(statearr_38172[(17)] = inst_37737__$1);

return statearr_38172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(17),inst_37742);
} else {
if((state_val_38077 === (81))){
var state_38076__$1 = state_38076;
var statearr_38173_38289 = state_38076__$1;
(statearr_38173_38289[(2)] = false);

(statearr_38173_38289[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (79))){
var inst_38014 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38014)){
var statearr_38174_38290 = state_38076__$1;
(statearr_38174_38290[(1)] = (83));

} else {
var statearr_38175_38291 = state_38076__$1;
(statearr_38175_38291[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (38))){
var inst_37709 = (state_38076[(7)]);
var inst_37847 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37848 = (inst_37847 & (64));
var inst_37849 = inst_37709.cljs$core$ISeq$;
var inst_37850 = (inst_37848) || (inst_37849);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37850)){
var statearr_38176_38292 = state_38076__$1;
(statearr_38176_38292[(1)] = (41));

} else {
var statearr_38177_38293 = state_38076__$1;
(statearr_38177_38293[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (87))){
var inst_38022 = (state_38076[(11)]);
var inst_38026 = encodeURIComponent(inst_38022);
var inst_38027 = [cljs.core.str("query="),cljs.core.str(inst_38026)].join('');
var state_38076__$1 = state_38076;
var statearr_38178_38294 = state_38076__$1;
(statearr_38178_38294[(2)] = inst_38027);

(statearr_38178_38294[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (30))){
var inst_37798 = (state_38076[(2)]);
var inst_37799 = cljs.core.js__GT_clj.call(null,inst_37798);
var inst_37800 = cloudxmark.core.convert_json_status.call(null,inst_37799,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_37801 = cljs.core.List.EMPTY;
var inst_37802 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_37803 = cljs.core._conj.call(null,inst_37801,inst_37802);
var inst_37804 = cljs.core.List.EMPTY;
var inst_37805 = cljs.core._conj.call(null,inst_37804,inst_37800);
var inst_37806 = cljs.core.concat.call(null,inst_37803,inst_37805);
var inst_37807 = cljs.core.seq.call(null,inst_37806);
var inst_37808 = cljs.core.sequence.call(null,inst_37807);
var inst_37809 = cljs.core.List.EMPTY;
var inst_37810 = cljs.core._conj.call(null,inst_37809,inst_37808);
var inst_37811 = cljs.core.concat.call(null,inst_37810);
var inst_37812 = cljs.core.seq.call(null,inst_37811);
var inst_37813 = cljs.core.sequence.call(null,inst_37812);
var inst_37814 = cljs.core.vec.call(null,inst_37813);
var inst_37815 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37814);
var state_38076__$1 = state_38076;
var statearr_38179_38295 = state_38076__$1;
(statearr_38179_38295[(2)] = inst_37815);

(statearr_38179_38295[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (73))){
var inst_37976 = (state_38076[(2)]);
var inst_37977 = cljs.core.js__GT_clj.call(null,inst_37976);
var inst_37978 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37977,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_37979 = cljs.core.List.EMPTY;
var inst_37980 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37981 = cljs.core._conj.call(null,inst_37979,inst_37980);
var inst_37982 = cljs.core.List.EMPTY;
var inst_37983 = cljs.core._conj.call(null,inst_37982,inst_37978);
var inst_37984 = cljs.core.concat.call(null,inst_37981,inst_37983);
var inst_37985 = cljs.core.seq.call(null,inst_37984);
var inst_37986 = cljs.core.sequence.call(null,inst_37985);
var inst_37987 = cljs.core.List.EMPTY;
var inst_37988 = cljs.core._conj.call(null,inst_37987,inst_37986);
var inst_37989 = cljs.core.concat.call(null,inst_37988);
var inst_37990 = cljs.core.seq.call(null,inst_37989);
var inst_37991 = cljs.core.sequence.call(null,inst_37990);
var inst_37992 = cljs.core.vec.call(null,inst_37991);
var inst_37993 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37992);
var state_38076__$1 = state_38076;
var statearr_38180_38296 = state_38076__$1;
(statearr_38180_38296[(2)] = inst_37993);

(statearr_38180_38296[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (10))){
var inst_37730 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37730)){
var statearr_38181_38297 = state_38076__$1;
(statearr_38181_38297[(1)] = (14));

} else {
var statearr_38182_38298 = state_38076__$1;
(statearr_38182_38298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (18))){
var inst_37709 = (state_38076[(7)]);
var inst_37770 = (inst_37709 == null);
var inst_37771 = cljs.core.not.call(null,inst_37770);
var state_38076__$1 = state_38076;
if(inst_37771){
var statearr_38183_38299 = state_38076__$1;
(statearr_38183_38299[(1)] = (21));

} else {
var statearr_38184_38300 = state_38076__$1;
(statearr_38184_38300[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (52))){
var state_38076__$1 = state_38076;
var statearr_38185_38301 = state_38076__$1;
(statearr_38185_38301[(2)] = false);

(statearr_38185_38301[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (67))){
var state_38076__$1 = state_38076;
var statearr_38186_38302 = state_38076__$1;
(statearr_38186_38302[(2)] = true);

(statearr_38186_38302[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (71))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38187_38303 = state_38076__$1;
(statearr_38187_38303[(2)] = inst_37709);

(statearr_38187_38303[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (42))){
var state_38076__$1 = state_38076;
var statearr_38188_38304 = state_38076__$1;
(statearr_38188_38304[(2)] = false);

(statearr_38188_38304[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (80))){
var state_38076__$1 = state_38076;
var statearr_38189_38305 = state_38076__$1;
(statearr_38189_38305[(2)] = true);

(statearr_38189_38305[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (37))){
var inst_38063 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38190_38306 = state_38076__$1;
(statearr_38190_38306[(2)] = inst_38063);

(statearr_38190_38306[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (63))){
var inst_38059 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38191_38307 = state_38076__$1;
(statearr_38191_38307[(2)] = inst_38059);

(statearr_38191_38307[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (8))){
var inst_37709 = (state_38076[(7)]);
var inst_37720 = inst_37709.cljs$lang$protocol_mask$partition0$;
var inst_37721 = (inst_37720 & (64));
var inst_37722 = inst_37709.cljs$core$ISeq$;
var inst_37723 = (inst_37721) || (inst_37722);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37723)){
var statearr_38192_38308 = state_38076__$1;
(statearr_38192_38308[(1)] = (11));

} else {
var statearr_38193_38309 = state_38076__$1;
(statearr_38193_38309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (49))){
var inst_37708 = (state_38076[(8)]);
var inst_37940 = cljs.core._EQ_.call(null,inst_37708,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_38076__$1 = state_38076;
if(inst_37940){
var statearr_38194_38310 = state_38076__$1;
(statearr_38194_38310[(1)] = (61));

} else {
var statearr_38195_38311 = state_38076__$1;
(statearr_38195_38311[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (84))){
var inst_37709 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38196_38312 = state_38076__$1;
(statearr_38196_38312[(2)] = inst_37709);

(statearr_38196_38312[(1)] = (85));


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
});})(c__28380__auto__))
;
return ((function (switch__28357__auto__,c__28380__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28358__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28358__auto____0 = (function (){
var statearr_38200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38200[(0)] = cloudxmark$core$search_loop_$_state_machine__28358__auto__);

(statearr_38200[(1)] = (1));

return statearr_38200;
});
var cloudxmark$core$search_loop_$_state_machine__28358__auto____1 = (function (state_38076){
while(true){
var ret_value__28359__auto__ = (function (){try{while(true){
var result__28360__auto__ = switch__28357__auto__.call(null,state_38076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28360__auto__;
}
break;
}
}catch (e38201){if((e38201 instanceof Object)){
var ex__28361__auto__ = e38201;
var statearr_38202_38313 = state_38076;
(statearr_38202_38313[(5)] = ex__28361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38314 = state_38076;
state_38076 = G__38314;
continue;
} else {
return ret_value__28359__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28358__auto__ = function(state_38076){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28358__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28358__auto____1.call(this,state_38076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28358__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28358__auto____0;
cloudxmark$core$search_loop_$_state_machine__28358__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28358__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28358__auto__;
})()
;})(switch__28357__auto__,c__28380__auto__))
})();
var state__28382__auto__ = (function (){var statearr_38203 = f__28381__auto__.call(null);
(statearr_38203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28380__auto__);

return statearr_38203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28382__auto__);
});})(c__28380__auto__))
);

return c__28380__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1472326863163