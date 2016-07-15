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
cloudxmark.core.block_size = (16);
cloudxmark.core.seed_init_vector = goog.crypt.hexToByteArray("3ea1bae20d97b4a0b422da8b259f0c8c");
cloudxmark.core.seed_key_bytes = goog.crypt.hexToByteArray("5zal214336bja15b716e0335341e1ba7");
cloudxmark.core.create_aes = (function cloudxmark$core$create_aes(key_bytes){
return (new goog.crypt.Aes(key_bytes));
});
cloudxmark.core.create_aes_cbc = (function cloudxmark$core$create_aes_cbc(key_bytes){
return (new goog.crypt.Cbc((new goog.crypt.Aes(key_bytes))));
});
cloudxmark.core.pad_bytes = (function cloudxmark$core$pad_bytes(bytes,target_len,ch){
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
var idx_27001 = (0);
while(true){
var len1_27002 = b1.length;
if((cljs.core._EQ_.call(null,idx_27001,len1_27002)) || (cljs.core._EQ_.call(null,idx_27001,max_len))){
} else {
(b1[idx_27001] = ((b1[idx_27001]) ^ (b2[idx_27001])));

var G__27003 = (idx_27001 + (1));
idx_27001 = G__27003;
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
var args27006 = [];
var len__22627__auto___27009 = arguments.length;
var i__22628__auto___27010 = (0);
while(true){
if((i__22628__auto___27010 < len__22627__auto___27009)){
args27006.push((arguments[i__22628__auto___27010]));

var G__27011 = (i__22628__auto___27010 + (1));
i__22628__auto___27010 = G__27011;
continue;
} else {
}
break;
}

var G__27008 = args27006.length;
switch (G__27008) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27006.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__27004_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__27004_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__27005_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__27005_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22468__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22469__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22470__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22471__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22471__auto__,method_table__22467__auto__,prefer_table__22468__auto__,method_cache__22469__auto__,cached_hierarchy__22470__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__27013,_,p__27014){
var map__27015 = p__27013;
var map__27015__$1 = ((((!((map__27015 == null)))?((((map__27015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27015):map__27015);
var env = map__27015__$1;
var state = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__27016 = p__27014;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var query_ver = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__27019 = lst;
var map__27019__$1 = ((((!((map__27019 == null)))?((((map__27019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27019):map__27019);
var lsts = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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

var new_value_27021 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_27021);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22467__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22468__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22469__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22470__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22471__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22471__auto__,method_table__22467__auto__,prefer_table__22468__auto__,method_cache__22469__auto__,cached_hierarchy__22470__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__27022,_,p__27023){
var map__27024 = p__27022;
var map__27024__$1 = ((((!((map__27024 == null)))?((((map__27024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27024):map__27024);
var env = map__27024__$1;
var state = cljs.core.get.call(null,map__27024__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27025 = p__27023;
var map__27025__$1 = ((((!((map__27025 == null)))?((((map__27025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27025):map__27025);
var status = map__27025__$1;
var id = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27024,map__27024__$1,env,state,map__27025,map__27025__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__27024,map__27024__$1,env,state,map__27025,map__27025__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__27028,_,p__27029){
var map__27030 = p__27028;
var map__27030__$1 = ((((!((map__27030 == null)))?((((map__27030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27030):map__27030);
var env = map__27030__$1;
var state = cljs.core.get.call(null,map__27030__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27031 = p__27029;
var map__27031__$1 = ((((!((map__27031 == null)))?((((map__27031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27031):map__27031);
var path = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27030,map__27030__$1,env,state,map__27031,map__27031__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__27030,map__27030__$1,env,state,map__27031,map__27031__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__27034,_,p__27035){
var map__27036 = p__27034;
var map__27036__$1 = ((((!((map__27036 == null)))?((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var env = map__27036__$1;
var state = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27037 = p__27035;
var map__27037__$1 = ((((!((map__27037 == null)))?((((map__27037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27037):map__27037);
var data_map = map__27037__$1;
var lst_idx = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27036,map__27036__$1,env,state,map__27037,map__27037__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cljs.core.nth.call(null,lsts,lst_idx);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cljs.core.nth.call(null,cljs.core.get.call(null,lst,"items"),item_idx);
var orig_name = cljs.core.get.call(null,item,"name");
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,orig_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__27036,map__27036__$1,env,state,map__27037,map__27037__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__27040,_,p__27041){
var map__27042 = p__27040;
var map__27042__$1 = ((((!((map__27042 == null)))?((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27042):map__27042);
var env = map__27042__$1;
var state = cljs.core.get.call(null,map__27042__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27043 = p__27041;
var map__27043__$1 = ((((!((map__27043 == null)))?((((map__27043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27043):map__27043);
var field_id = cljs.core.get.call(null,map__27043__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__27043__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27042,map__27042__$1,env,state,map__27043,map__27043__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__27042,map__27042__$1,env,state,map__27043,map__27043__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__27046,_,p__27047){
var map__27048 = p__27046;
var map__27048__$1 = ((((!((map__27048 == null)))?((((map__27048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27048):map__27048);
var env = map__27048__$1;
var state = cljs.core.get.call(null,map__27048__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27049 = p__27047;
var map__27049__$1 = ((((!((map__27049 == null)))?((((map__27049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27049):map__27049);
var data_map = map__27049__$1;
var user_id = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27048,map__27048__$1,env,state,map__27049,map__27049__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__27048,map__27048__$1,env,state,map__27049,map__27049__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__27052,_,p__27053){
var map__27054 = p__27052;
var map__27054__$1 = ((((!((map__27054 == null)))?((((map__27054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27054):map__27054);
var env = map__27054__$1;
var state = cljs.core.get.call(null,map__27054__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27055 = p__27053;
var map__27055__$1 = ((((!((map__27055 == null)))?((((map__27055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27055):map__27055);
var data_map = map__27055__$1;
var user_id = cljs.core.get.call(null,map__27055__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__27055__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27054,map__27054__$1,env,state,map__27055,map__27055__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__27054,map__27054__$1,env,state,map__27055,map__27055__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__27058,_,p__27059){
var map__27060 = p__27058;
var map__27060__$1 = ((((!((map__27060 == null)))?((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var env = map__27060__$1;
var state = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27061 = p__27059;
var map__27061__$1 = ((((!((map__27061 == null)))?((((map__27061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27061):map__27061);
var data_map = map__27061__$1;
var name = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27060,map__27060__$1,env,state,map__27061,map__27061__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__27060,map__27060__$1,env,state,map__27061,map__27061__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__27064,_,p__27065){
var map__27066 = p__27064;
var map__27066__$1 = ((((!((map__27066 == null)))?((((map__27066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27066):map__27066);
var env = map__27066__$1;
var state = cljs.core.get.call(null,map__27066__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27067 = p__27065;
var map__27067__$1 = ((((!((map__27067 == null)))?((((map__27067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27067):map__27067);
var data_map = map__27067__$1;
var name = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27066,map__27066__$1,env,state,map__27067,map__27067__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr = (function (){var or__21444__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__27066,map__27066__$1,env,state,map__27067,map__27067__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__27070,_,___$1){
var map__27071 = p__27070;
var map__27071__$1 = ((((!((map__27071 == null)))?((((map__27071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27071):map__27071);
var env = map__27071__$1;
var state = cljs.core.get.call(null,map__27071__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27071,map__27071__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__27071,map__27071__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__27073,_,p__27074){
var map__27075 = p__27073;
var map__27075__$1 = ((((!((map__27075 == null)))?((((map__27075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var env = map__27075__$1;
var state = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27076 = p__27074;
var map__27076__$1 = ((((!((map__27076 == null)))?((((map__27076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27076):map__27076);
var data_map = map__27076__$1;
var status = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27075,map__27075__$1,env,state,map__27076,map__27076__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
if(cljs.core.truth_((function (){var and__21432__auto__ = status;
if(cljs.core.truth_(and__21432__auto__)){
return status_id;
} else {
return and__21432__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__27075,map__27075__$1,env,state,map__27076,map__27076__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args27079 = [];
var len__22627__auto___27082 = arguments.length;
var i__22628__auto___27083 = (0);
while(true){
if((i__22628__auto___27083 < len__22627__auto___27082)){
args27079.push((arguments[i__22628__auto___27083]));

var G__27084 = (i__22628__auto___27083 + (1));
i__22628__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var G__27081 = args27079.length;
switch (G__27081) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27079.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21444__auto__ = field_state;
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22370__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22370__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_idx,item_idx,item,col_name){
var field_val = (function (){var or__21444__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})();
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_idx),cljs.core.str("-"),cljs.core.str(item_idx),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330)),(function (){var x__22370__auto__ = lst_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161)),(function (){var x__22370__auto__ = item_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22370__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22370__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
});})(field_val))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__27086){
var map__27092 = p__27086;
var map__27092__$1 = ((((!((map__27092 == null)))?((((map__27092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27092):map__27092);
var info = cljs.core.get.call(null,map__27092__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__27092__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__27092__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__27094 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__27094,(0),null);
var msg = cljs.core.nth.call(null,vec__27094,(1),null);
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
var new_item_value = (function (){var or__21444__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22370__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22370__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22370__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22370__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22370__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22370__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
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
var new_lst_description = (function (){var or__21444__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22370__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22370__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22370__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__27099 = lst;
var map__27099__$1 = ((((!((map__27099 == null)))?((((map__27099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27099):map__27099);
var lsts = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__27099__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21444__auto__ = curr;
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__27099,map__27099__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__27099,map__27099__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__27103 = lst;
var map__27103__$1 = ((((!((map__27103 == null)))?((((map__27103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27103):map__27103);
var status = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__27109 = (function (){var G__27112 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27112) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__27109,(0),null);
var query_key = cljs.core.nth.call(null,vec__27109,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__27109,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__27109,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22370__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22370__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22370__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22370__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22370__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22370__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22370__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Add User"));
});
cloudxmark.core.get_settings = (function cloudxmark$core$get_settings(lsts){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (lst){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,lst,"name"),"_-settings");
}),lsts));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26966__auto__ = this;
React.Component.apply(this__26966__auto__,arguments);

if(!((this__26966__auto__.initLocalState == null))){
this__26966__auto__.state = this__26966__auto__.initLocalState();
} else {
this__26966__auto__.state = {};
}

return this__26966__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x27118_27130 = cloudxmark.core.Lsts.prototype;
x27118_27130.componentWillUpdate = ((function (x27118_27130){
return (function (next_props__26868__auto__,next_state__26869__auto__){
var this__26867__auto__ = this;
if(((!((this__26867__auto__ == null)))?(((false) || (this__26867__auto__.om$next$Ident$))?true:false):false)){
var ident__26871__auto___27131 = om.next.ident.call(null,this__26867__auto__,om.next.props.call(null,this__26867__auto__));
var next_ident__26872__auto___27132 = om.next.ident.call(null,this__26867__auto__,om.next._next_props.call(null,next_props__26868__auto__,this__26867__auto__));
if(cljs.core.not_EQ_.call(null,ident__26871__auto___27131,next_ident__26872__auto___27132)){
var idxr__26873__auto___27133 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26873__auto___27133 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26873__auto___27133),((function (idxr__26873__auto___27133,ident__26871__auto___27131,next_ident__26872__auto___27132,this__26867__auto__,x27118_27130){
return (function (indexes__26874__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26874__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26871__auto___27131], null),cljs.core.disj,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26872__auto___27132], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26867__auto__);
});})(idxr__26873__auto___27133,ident__26871__auto___27131,next_ident__26872__auto___27132,this__26867__auto__,x27118_27130))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26867__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26867__auto__);
});})(x27118_27130))
;

x27118_27130.shouldComponentUpdate = ((function (x27118_27130){
return (function (next_props__26868__auto__,next_state__26869__auto__){
var this__26867__auto__ = this;
var next_children__26870__auto__ = next_props__26868__auto__.children;
var next_props__26868__auto____$1 = goog.object.get(next_props__26868__auto__,"omcljs$value");
var next_props__26868__auto____$2 = (function (){var G__27120 = next_props__26868__auto____$1;
if((next_props__26868__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__27120);
} else {
return G__27120;
}
})();
var or__21444__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26867__auto__),next_props__26868__auto____$2);
if(or__21444__auto__){
return or__21444__auto__;
} else {
var or__21444__auto____$1 = (function (){var and__21432__auto__ = this__26867__auto__.state;
if(cljs.core.truth_(and__21432__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26867__auto__.state,"omcljs$state"),goog.object.get(next_state__26869__auto__,"omcljs$state"));
} else {
return and__21432__auto__;
}
})();
if(cljs.core.truth_(or__21444__auto____$1)){
return or__21444__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26867__auto__.props.children,next_children__26870__auto__);
}
}
});})(x27118_27130))
;

x27118_27130.componentWillUnmount = ((function (x27118_27130){
return (function (){
var this__26867__auto__ = this;
var r__26878__auto__ = om.next.get_reconciler.call(null,this__26867__auto__);
var cfg__26879__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26878__auto__);
var st__26880__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26879__auto__);
var indexer__26877__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26879__auto__);
if(cljs.core.truth_((function (){var and__21432__auto__ = !((st__26880__auto__ == null));
if(and__21432__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26880__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26867__auto__], null));
} else {
return and__21432__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26880__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26867__auto__);
} else {
}

if((indexer__26877__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26877__auto__,this__26867__auto__);
}
});})(x27118_27130))
;

x27118_27130.componentDidUpdate = ((function (x27118_27130){
return (function (prev_props__26875__auto__,prev_state__26876__auto__){
var this__26867__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26867__auto__);
});})(x27118_27130))
;

x27118_27130.isMounted = ((function (x27118_27130){
return (function (){
var this__26867__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26867__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27118_27130))
;

x27118_27130.componentWillMount = ((function (x27118_27130){
return (function (){
var this__26867__auto__ = this;
var indexer__26877__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26877__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26877__auto__,this__26867__auto__);
}
});})(x27118_27130))
;

x27118_27130.render = ((function (x27118_27130){
return (function (){
var this__26866__auto__ = this;
var this$ = this__26866__auto__;
var _STAR_reconciler_STAR_27121 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27122 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27123 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27124 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27125 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26866__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26866__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26866__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26866__auto__);

om.next._STAR_parent_STAR_ = this__26866__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__27126 = lst;
var map__27126__$1 = ((((!((map__27126 == null)))?((((map__27126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27126):map__27126);
var lsts = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var display_lsts = (cljs.core.truth_(cljs.core.get.call(null,settings,"show_all_lsts"))?lsts:cljs.core.filter.call(null,((function (lst,dontcare,map__27126,map__27126__$1,lsts,curr,ver,user_id,is_admin_QMARK_,status,settings,_STAR_reconciler_STAR_27121,_STAR_depth_STAR_27122,_STAR_shared_STAR_27123,_STAR_instrument_STAR_27124,_STAR_parent_STAR_27125,this$,this__26866__auto__,x27118_27130){
return (function (lst__$1){
return cljs.core.not.call(null,cljs.core.get.call(null,lst__$1,"name").startsWith("_-"));
});})(lst,dontcare,map__27126,map__27126__$1,lsts,curr,ver,user_id,is_admin_QMARK_,status,settings,_STAR_reconciler_STAR_27121,_STAR_depth_STAR_27122,_STAR_shared_STAR_27123,_STAR_instrument_STAR_27124,_STAR_parent_STAR_27125,this$,this__26866__auto__,x27118_27130))
,lsts));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27125;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27124;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27123;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27122;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27121;
}});})(x27118_27130))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x27128_27134 = cloudxmark.core.Lsts;
x27128_27134.om$next$IQueryParams$ = true;

x27128_27134.om$next$IQueryParams$params$arity$1 = ((function (x27128_27134){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x27128_27134))
;

x27128_27134.om$next$IQuery$ = true;

x27128_27134.om$next$IQuery$query$arity$1 = ((function (x27128_27134){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x27128_27134))
;


var x27129_27135 = cloudxmark.core.Lsts.prototype;
x27129_27135.om$next$IQueryParams$ = true;

x27129_27135.om$next$IQueryParams$params$arity$1 = ((function (x27129_27135){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x27129_27135))
;

x27129_27135.om$next$IQuery$ = true;

x27129_27135.om$next$IQuery$query$arity$1 = ((function (x27129_27135){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x27129_27135))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26968__auto__,writer__26969__auto__,opt__26970__auto__){
return cljs.core._write.call(null,writer__26969__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__27144,cb){
var map__27145 = p__27144;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var lst_search = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__27147 = om.next.query__GT_ast.call(null,lst_search);
var map__27147__$1 = ((((!((map__27147 == null)))?((((map__27147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27147):map__27147);
var vec__27148 = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__27148,(0),null);
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
var map__27156 = result;
var map__27156__$1 = ((((!((map__27156 == null)))?((((map__27156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var lsts = cljs.core.get.call(null,map__27156__$1,"lsts");
var user_id = cljs.core.get.call(null,map__27156__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__27156__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__27157 = json_status;
var map__27157__$1 = ((((!((map__27157 == null)))?((((map__27157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27157):map__27157);
var info = cljs.core.get.call(null,map__27157__$1,"info");
var warn = cljs.core.get.call(null,map__27157__$1,"warn");
var error = cljs.core.get.call(null,map__27157__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__27162 = json_status;
var map__27162__$1 = ((((!((map__27162 == null)))?((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var info = cljs.core.get.call(null,map__27162__$1,"info");
var warn = cljs.core.get.call(null,map__27162__$1,"warn");
var error = cljs.core.get.call(null,map__27162__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26735__auto__){
return (function (){
var f__26736__auto__ = (function (){var switch__26712__auto__ = ((function (c__26735__auto__){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (65))){
var state_28036__$1 = state_28036;
var statearr_28038_28160 = state_28036__$1;
(statearr_28038_28160[(2)] = false);

(statearr_28038_28160[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (70))){
var inst_27680 = (state_28036[(7)]);
var inst_27930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28039_28161 = state_28036__$1;
(statearr_28039_28161[(2)] = inst_27930);

(statearr_28039_28161[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (62))){
var inst_27679 = (state_28036[(8)]);
var inst_27964 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_28036__$1 = state_28036;
if(inst_27964){
var statearr_28040_28162 = state_28036__$1;
(statearr_28040_28162[(1)] = (74));

} else {
var statearr_28041_28163 = state_28036__$1;
(statearr_28041_28163[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (74))){
var inst_27680 = (state_28036[(7)]);
var inst_27967 = [cljs.core.str("lst query data:"),cljs.core.str(inst_27680)].join('');
var inst_27968 = cljs.core.println.call(null,inst_27967);
var inst_27970 = (inst_27680 == null);
var inst_27971 = cljs.core.not.call(null,inst_27970);
var state_28036__$1 = (function (){var statearr_28042 = state_28036;
(statearr_28042[(9)] = inst_27968);

return statearr_28042;
})();
if(inst_27971){
var statearr_28043_28164 = state_28036__$1;
(statearr_28043_28164[(1)] = (77));

} else {
var statearr_28044_28165 = state_28036__$1;
(statearr_28044_28165[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (7))){
var inst_28029 = (state_28036[(2)]);
var state_28036__$1 = (function (){var statearr_28045 = state_28036;
(statearr_28045[(10)] = inst_28029);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(90),c);
} else {
if((state_val_28037 === (59))){
var inst_27882 = (state_28036[(2)]);
var inst_27883 = cljs.core.get.call(null,inst_27882,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_27884 = cljs.core.get.call(null,inst_27882,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_27885 = cljs.core.get.call(null,inst_27882,new cljs.core.Keyword(null,"value","value",305978217));
var inst_27886 = encodeURIComponent(inst_27883);
var inst_27887 = encodeURIComponent(inst_27884);
var inst_27888 = encodeURIComponent(inst_27885);
var inst_27889 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_27886),cljs.core.str("&name="),cljs.core.str(inst_27887),cljs.core.str("&value="),cljs.core.str(inst_27888)].join('');
var inst_27890 = cloudxmark.core.jsonp.call(null,inst_27889);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(60),inst_27890);
} else {
if((state_val_28037 === (86))){
var inst_27990 = (state_28036[(11)]);
var inst_27993 = (state_28036[(2)]);
var inst_27994 = cljs.core.js__GT_clj.call(null,inst_27993);
var inst_27995 = cloudxmark.core.convert_json_lsts_result.call(null,inst_27994,inst_27990,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_27996 = cljs.core.List.EMPTY;
var inst_27997 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_27998 = cljs.core._conj.call(null,inst_27996,inst_27997);
var inst_27999 = cljs.core.List.EMPTY;
var inst_28000 = cljs.core._conj.call(null,inst_27999,inst_27995);
var inst_28001 = cljs.core.concat.call(null,inst_27998,inst_28000);
var inst_28002 = cljs.core.seq.call(null,inst_28001);
var inst_28003 = cljs.core.sequence.call(null,inst_28002);
var inst_28004 = cljs.core.List.EMPTY;
var inst_28005 = cljs.core._conj.call(null,inst_28004,inst_28003);
var inst_28006 = cljs.core.concat.call(null,inst_28005);
var inst_28007 = cljs.core.seq.call(null,inst_28006);
var inst_28008 = cljs.core.sequence.call(null,inst_28007);
var inst_28009 = cljs.core.vec.call(null,inst_28008);
var inst_28010 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28009);
var state_28036__$1 = state_28036;
var statearr_28046_28166 = state_28036__$1;
(statearr_28046_28166[(2)] = inst_28010);

(statearr_28046_28166[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (20))){
var inst_28027 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28047_28167 = state_28036__$1;
(statearr_28047_28167[(2)] = inst_28027);

(statearr_28047_28167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (72))){
var inst_27933 = (state_28036[(2)]);
var inst_27934 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_27935 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_27936 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_27937 = cljs.core.get.call(null,inst_27933,new cljs.core.Keyword(null,"value","value",305978217));
var inst_27938 = encodeURIComponent(inst_27934);
var inst_27939 = encodeURIComponent(inst_27935);
var inst_27940 = encodeURIComponent(inst_27936);
var inst_27941 = encodeURIComponent(inst_27937);
var inst_27942 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_27938),cljs.core.str("&orig-name="),cljs.core.str(inst_27939),cljs.core.str("&col-name="),cljs.core.str(inst_27940),cljs.core.str("&value="),cljs.core.str(inst_27941)].join('');
var inst_27943 = cloudxmark.core.jsonp.call(null,inst_27942);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(73),inst_27943);
} else {
if((state_val_28037 === (58))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28048_28168 = state_28036__$1;
(statearr_28048_28168[(2)] = inst_27680);

(statearr_28048_28168[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (60))){
var inst_27892 = (state_28036[(2)]);
var inst_27893 = cljs.core.js__GT_clj.call(null,inst_27892);
var inst_27894 = cloudxmark.core.convert_json_lsts_result.call(null,inst_27893,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_27895 = cljs.core.List.EMPTY;
var inst_27896 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_27897 = cljs.core._conj.call(null,inst_27895,inst_27896);
var inst_27898 = cljs.core.List.EMPTY;
var inst_27899 = cljs.core._conj.call(null,inst_27898,inst_27894);
var inst_27900 = cljs.core.concat.call(null,inst_27897,inst_27899);
var inst_27901 = cljs.core.seq.call(null,inst_27900);
var inst_27902 = cljs.core.sequence.call(null,inst_27901);
var inst_27903 = cljs.core.List.EMPTY;
var inst_27904 = cljs.core._conj.call(null,inst_27903,inst_27902);
var inst_27905 = cljs.core.concat.call(null,inst_27904);
var inst_27906 = cljs.core.seq.call(null,inst_27905);
var inst_27907 = cljs.core.sequence.call(null,inst_27906);
var inst_27908 = cljs.core.vec.call(null,inst_27907);
var inst_27909 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27908);
var state_28036__$1 = state_28036;
var statearr_28049_28169 = state_28036__$1;
(statearr_28049_28169[(2)] = inst_27909);

(statearr_28049_28169[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (27))){
var inst_27680 = (state_28036[(7)]);
var inst_27756 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28050_28170 = state_28036__$1;
(statearr_28050_28170[(2)] = inst_27756);

(statearr_28050_28170[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (1))){
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(2),c);
} else {
if((state_val_28037 === (69))){
var inst_27925 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28051_28171 = state_28036__$1;
(statearr_28051_28171[(2)] = inst_27925);

(statearr_28051_28171[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (24))){
var state_28036__$1 = state_28036;
var statearr_28052_28172 = state_28036__$1;
(statearr_28052_28172[(2)] = true);

(statearr_28052_28172[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (55))){
var state_28036__$1 = state_28036;
var statearr_28053_28173 = state_28036__$1;
(statearr_28053_28173[(2)] = false);

(statearr_28053_28173[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (85))){
var inst_27988 = (state_28036[(2)]);
var inst_27989 = cljs.core.get.call(null,inst_27988,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_27990 = cljs.core.get.call(null,inst_27988,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_27991 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_28036__$1 = (function (){var statearr_28054 = state_28036;
(statearr_28054[(12)] = inst_27989);

(statearr_28054[(11)] = inst_27990);

return statearr_28054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(86),inst_27991);
} else {
if((state_val_28037 === (39))){
var state_28036__$1 = state_28036;
var statearr_28055_28174 = state_28036__$1;
(statearr_28055_28174[(2)] = false);

(statearr_28055_28174[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (88))){
var state_28036__$1 = state_28036;
var statearr_28056_28175 = state_28036__$1;
(statearr_28056_28175[(2)] = null);

(statearr_28056_28175[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (46))){
var inst_27833 = (state_28036[(2)]);
var inst_27834 = cljs.core.get.call(null,inst_27833,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_27835 = cljs.core.get.call(null,inst_27833,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_27836 = encodeURIComponent(inst_27834);
var inst_27837 = encodeURIComponent(inst_27835);
var inst_27838 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_27836),cljs.core.str("&desc="),cljs.core.str(inst_27837)].join('');
var inst_27839 = cloudxmark.core.jsonp.call(null,inst_27838);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(47),inst_27839);
} else {
if((state_val_28037 === (4))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (77))){
var inst_27680 = (state_28036[(7)]);
var inst_27973 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27974 = (inst_27973 & (64));
var inst_27975 = inst_27680.cljs$core$ISeq$;
var inst_27976 = (inst_27974) || (inst_27975);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27976)){
var statearr_28057_28176 = state_28036__$1;
(statearr_28057_28176[(1)] = (80));

} else {
var statearr_28058_28177 = state_28036__$1;
(statearr_28058_28177[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (54))){
var state_28036__$1 = state_28036;
var statearr_28059_28178 = state_28036__$1;
(statearr_28059_28178[(2)] = true);

(statearr_28059_28178[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (15))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28060_28179 = state_28036__$1;
(statearr_28060_28179[(2)] = inst_27680);

(statearr_28060_28179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (48))){
var inst_27680 = (state_28036[(7)]);
var inst_27864 = (inst_27680 == null);
var inst_27865 = cljs.core.not.call(null,inst_27864);
var state_28036__$1 = state_28036;
if(inst_27865){
var statearr_28061_28180 = state_28036__$1;
(statearr_28061_28180[(1)] = (51));

} else {
var statearr_28062_28181 = state_28036__$1;
(statearr_28062_28181[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (50))){
var inst_28021 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28063_28182 = state_28036__$1;
(statearr_28063_28182[(2)] = inst_28021);

(statearr_28063_28182[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (75))){
var state_28036__$1 = state_28036;
var statearr_28064_28183 = state_28036__$1;
(statearr_28064_28183[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (21))){
var inst_27680 = (state_28036[(7)]);
var inst_27744 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27745 = (inst_27744 & (64));
var inst_27746 = inst_27680.cljs$core$ISeq$;
var inst_27747 = (inst_27745) || (inst_27746);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27747)){
var statearr_28066_28184 = state_28036__$1;
(statearr_28066_28184[(1)] = (24));

} else {
var statearr_28067_28185 = state_28036__$1;
(statearr_28067_28185[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (31))){
var inst_27790 = cloudxmark.core.jsonp.call(null,"/logout");
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(34),inst_27790);
} else {
if((state_val_28037 === (32))){
var inst_27679 = (state_28036[(8)]);
var inst_27811 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_28036__$1 = state_28036;
if(inst_27811){
var statearr_28068_28186 = state_28036__$1;
(statearr_28068_28186[(1)] = (35));

} else {
var statearr_28069_28187 = state_28036__$1;
(statearr_28069_28187[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (40))){
var inst_27828 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27828)){
var statearr_28070_28188 = state_28036__$1;
(statearr_28070_28188[(1)] = (44));

} else {
var statearr_28071_28189 = state_28036__$1;
(statearr_28071_28189[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (56))){
var inst_27874 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28072_28190 = state_28036__$1;
(statearr_28072_28190[(2)] = inst_27874);

(statearr_28072_28190[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (33))){
var inst_28025 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28073_28191 = state_28036__$1;
(statearr_28073_28191[(2)] = inst_28025);

(statearr_28073_28191[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (13))){
var inst_27698 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28074_28192 = state_28036__$1;
(statearr_28074_28192[(2)] = inst_27698);

(statearr_28074_28192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (22))){
var state_28036__$1 = state_28036;
var statearr_28075_28193 = state_28036__$1;
(statearr_28075_28193[(2)] = false);

(statearr_28075_28193[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (90))){
var inst_28031 = (state_28036[(2)]);
var inst_27674 = inst_28031;
var state_28036__$1 = (function (){var statearr_28076 = state_28036;
(statearr_28076[(13)] = inst_27674);

return statearr_28076;
})();
var statearr_28077_28194 = state_28036__$1;
(statearr_28077_28194[(2)] = null);

(statearr_28077_28194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (36))){
var inst_27679 = (state_28036[(8)]);
var inst_27860 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_28036__$1 = state_28036;
if(inst_27860){
var statearr_28078_28195 = state_28036__$1;
(statearr_28078_28195[(1)] = (48));

} else {
var statearr_28079_28196 = state_28036__$1;
(statearr_28079_28196[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (41))){
var state_28036__$1 = state_28036;
var statearr_28080_28197 = state_28036__$1;
(statearr_28080_28197[(2)] = true);

(statearr_28080_28197[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (89))){
var inst_28015 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28081_28198 = state_28036__$1;
(statearr_28081_28198[(2)] = inst_28015);

(statearr_28081_28198[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (43))){
var inst_27825 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28082_28199 = state_28036__$1;
(statearr_28082_28199[(2)] = inst_27825);

(statearr_28082_28199[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (61))){
var inst_27680 = (state_28036[(7)]);
var inst_27915 = (inst_27680 == null);
var inst_27916 = cljs.core.not.call(null,inst_27915);
var state_28036__$1 = state_28036;
if(inst_27916){
var statearr_28083_28200 = state_28036__$1;
(statearr_28083_28200[(1)] = (64));

} else {
var statearr_28084_28201 = state_28036__$1;
(statearr_28084_28201[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (29))){
var inst_27759 = (state_28036[(2)]);
var inst_27760 = cljs.core.get.call(null,inst_27759,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_27761 = cljs.core.get.call(null,inst_27759,new cljs.core.Keyword(null,"password","password",417022471));
var inst_27762 = cljs.core.get.call(null,inst_27759,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_27763 = cloudxmark.core.enc_password.call(null,inst_27761);
var inst_27764 = encodeURIComponent(inst_27760);
var inst_27765 = encodeURIComponent(inst_27763);
var inst_27766 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_27764),cljs.core.str("&pass="),cljs.core.str(inst_27765)].join('');
var inst_27767 = cloudxmark.core.jsonp.call(null,inst_27766);
var state_28036__$1 = (function (){var statearr_28085 = state_28036;
(statearr_28085[(14)] = inst_27762);

return statearr_28085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(30),inst_27767);
} else {
if((state_val_28037 === (44))){
var inst_27680 = (state_28036[(7)]);
var inst_27830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28086_28202 = state_28036__$1;
(statearr_28086_28202[(2)] = inst_27830);

(statearr_28086_28202[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var inst_27679 = (state_28036[(8)]);
var inst_27737 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_28036__$1 = state_28036;
if(inst_27737){
var statearr_28087_28203 = state_28036__$1;
(statearr_28087_28203[(1)] = (18));

} else {
var statearr_28088_28204 = state_28036__$1;
(statearr_28088_28204[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (28))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28089_28205 = state_28036__$1;
(statearr_28089_28205[(2)] = inst_27680);

(statearr_28089_28205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (64))){
var inst_27680 = (state_28036[(7)]);
var inst_27918 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27919 = (inst_27918 & (64));
var inst_27920 = inst_27680.cljs$core$ISeq$;
var inst_27921 = (inst_27919) || (inst_27920);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27921)){
var statearr_28090_28206 = state_28036__$1;
(statearr_28090_28206[(1)] = (67));

} else {
var statearr_28091_28207 = state_28036__$1;
(statearr_28091_28207[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (51))){
var inst_27680 = (state_28036[(7)]);
var inst_27867 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27868 = (inst_27867 & (64));
var inst_27869 = inst_27680.cljs$core$ISeq$;
var inst_27870 = (inst_27868) || (inst_27869);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27870)){
var statearr_28092_28208 = state_28036__$1;
(statearr_28092_28208[(1)] = (54));

} else {
var statearr_28093_28209 = state_28036__$1;
(statearr_28093_28209[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (25))){
var state_28036__$1 = state_28036;
var statearr_28094_28210 = state_28036__$1;
(statearr_28094_28210[(2)] = false);

(statearr_28094_28210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (34))){
var inst_27792 = (state_28036[(2)]);
var inst_27793 = cljs.core.js__GT_clj.call(null,inst_27792);
var inst_27794 = cloudxmark.core.convert_json_status.call(null,inst_27793,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_27795 = cljs.core.List.EMPTY;
var inst_27796 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_27797 = cljs.core._conj.call(null,inst_27795,inst_27796);
var inst_27798 = cljs.core.List.EMPTY;
var inst_27799 = cljs.core._conj.call(null,inst_27798,inst_27794);
var inst_27800 = cljs.core.concat.call(null,inst_27797,inst_27799);
var inst_27801 = cljs.core.seq.call(null,inst_27800);
var inst_27802 = cljs.core.sequence.call(null,inst_27801);
var inst_27803 = cljs.core.List.EMPTY;
var inst_27804 = cljs.core._conj.call(null,inst_27803,inst_27802);
var inst_27805 = cljs.core.concat.call(null,inst_27804);
var inst_27806 = cljs.core.seq.call(null,inst_27805);
var inst_27807 = cljs.core.sequence.call(null,inst_27806);
var inst_27808 = cljs.core.vec.call(null,inst_27807);
var inst_27809 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27808);
var state_28036__$1 = state_28036;
var statearr_28095_28211 = state_28036__$1;
(statearr_28095_28211[(2)] = inst_27809);

(statearr_28095_28211[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (17))){
var inst_27708 = (state_28036[(15)]);
var inst_27709 = (state_28036[(16)]);
var inst_27715 = (state_28036[(2)]);
var inst_27716 = cljs.core.js__GT_clj.call(null,inst_27715);
var inst_27717 = cloudxmark.core.gen_key_bytes.call(null,inst_27708);
var inst_27718 = cloudxmark.core.create_aes_cbc.call(null,inst_27717);
var inst_27719 = cloudxmark.core.convert_json_lsts_result.call(null,inst_27716,inst_27709,new cljs.core.Keyword(null,"login","login",55217519));
var inst_27720 = cljs.core.assoc.call(null,inst_27719,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_27718);
var inst_27721 = cljs.core.List.EMPTY;
var inst_27722 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_27723 = cljs.core._conj.call(null,inst_27721,inst_27722);
var inst_27724 = cljs.core.List.EMPTY;
var inst_27725 = cljs.core._conj.call(null,inst_27724,inst_27720);
var inst_27726 = cljs.core.concat.call(null,inst_27723,inst_27725);
var inst_27727 = cljs.core.seq.call(null,inst_27726);
var inst_27728 = cljs.core.sequence.call(null,inst_27727);
var inst_27729 = cljs.core.List.EMPTY;
var inst_27730 = cljs.core._conj.call(null,inst_27729,inst_27728);
var inst_27731 = cljs.core.concat.call(null,inst_27730);
var inst_27732 = cljs.core.seq.call(null,inst_27731);
var inst_27733 = cljs.core.sequence.call(null,inst_27732);
var inst_27734 = cljs.core.vec.call(null,inst_27733);
var inst_27735 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27734);
var state_28036__$1 = state_28036;
var statearr_28096_28212 = state_28036__$1;
(statearr_28096_28212[(2)] = inst_27735);

(statearr_28096_28212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_27674 = (state_28036[(13)]);
var inst_27679 = (state_28036[(8)]);
var inst_27679__$1 = cljs.core.nth.call(null,inst_27674,(0),null);
var inst_27680 = cljs.core.nth.call(null,inst_27674,(1),null);
var inst_27681 = cljs.core.nth.call(null,inst_27674,(2),null);
var inst_27682 = cljs.core._EQ_.call(null,inst_27679__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_28036__$1 = (function (){var statearr_28097 = state_28036;
(statearr_28097[(17)] = inst_27681);

(statearr_28097[(8)] = inst_27679__$1);

(statearr_28097[(7)] = inst_27680);

return statearr_28097;
})();
if(inst_27682){
var statearr_28098_28213 = state_28036__$1;
(statearr_28098_28213[(1)] = (5));

} else {
var statearr_28099_28214 = state_28036__$1;
(statearr_28099_28214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (12))){
var state_28036__$1 = state_28036;
var statearr_28100_28215 = state_28036__$1;
(statearr_28100_28215[(2)] = false);

(statearr_28100_28215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var inst_27670 = (state_28036[(2)]);
var inst_27671 = cljs.core.nth.call(null,inst_27670,(0),null);
var inst_27672 = cljs.core.nth.call(null,inst_27670,(1),null);
var inst_27673 = cljs.core.nth.call(null,inst_27670,(2),null);
var inst_27674 = inst_27670;
var state_28036__$1 = (function (){var statearr_28101 = state_28036;
(statearr_28101[(13)] = inst_27674);

(statearr_28101[(18)] = inst_27673);

(statearr_28101[(19)] = inst_27672);

(statearr_28101[(20)] = inst_27671);

return statearr_28101;
})();
var statearr_28102_28216 = state_28036__$1;
(statearr_28102_28216[(2)] = null);

(statearr_28102_28216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (66))){
var inst_27928 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27928)){
var statearr_28103_28217 = state_28036__$1;
(statearr_28103_28217[(1)] = (70));

} else {
var statearr_28104_28218 = state_28036__$1;
(statearr_28104_28218[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (23))){
var inst_27754 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27754)){
var statearr_28105_28219 = state_28036__$1;
(statearr_28105_28219[(1)] = (27));

} else {
var statearr_28106_28220 = state_28036__$1;
(statearr_28106_28220[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (47))){
var inst_27841 = (state_28036[(2)]);
var inst_27842 = cljs.core.js__GT_clj.call(null,inst_27841);
var inst_27843 = cloudxmark.core.convert_json_lsts_result.call(null,inst_27842,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_27844 = cljs.core.List.EMPTY;
var inst_27845 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_27846 = cljs.core._conj.call(null,inst_27844,inst_27845);
var inst_27847 = cljs.core.List.EMPTY;
var inst_27848 = cljs.core._conj.call(null,inst_27847,inst_27843);
var inst_27849 = cljs.core.concat.call(null,inst_27846,inst_27848);
var inst_27850 = cljs.core.seq.call(null,inst_27849);
var inst_27851 = cljs.core.sequence.call(null,inst_27850);
var inst_27852 = cljs.core.List.EMPTY;
var inst_27853 = cljs.core._conj.call(null,inst_27852,inst_27851);
var inst_27854 = cljs.core.concat.call(null,inst_27853);
var inst_27855 = cljs.core.seq.call(null,inst_27854);
var inst_27856 = cljs.core.sequence.call(null,inst_27855);
var inst_27857 = cljs.core.vec.call(null,inst_27856);
var inst_27858 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27857);
var state_28036__$1 = state_28036;
var statearr_28107_28221 = state_28036__$1;
(statearr_28107_28221[(2)] = inst_27858);

(statearr_28107_28221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (35))){
var inst_27680 = (state_28036[(7)]);
var inst_27815 = (inst_27680 == null);
var inst_27816 = cljs.core.not.call(null,inst_27815);
var state_28036__$1 = state_28036;
if(inst_27816){
var statearr_28108_28222 = state_28036__$1;
(statearr_28108_28222[(1)] = (38));

} else {
var statearr_28109_28223 = state_28036__$1;
(statearr_28109_28223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (82))){
var inst_27980 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28110_28224 = state_28036__$1;
(statearr_28110_28224[(2)] = inst_27980);

(statearr_28110_28224[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (76))){
var inst_28017 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28111_28225 = state_28036__$1;
(statearr_28111_28225[(2)] = inst_28017);

(statearr_28111_28225[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (19))){
var inst_27679 = (state_28036[(8)]);
var inst_27788 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_28036__$1 = state_28036;
if(inst_27788){
var statearr_28112_28226 = state_28036__$1;
(statearr_28112_28226[(1)] = (31));

} else {
var statearr_28113_28227 = state_28036__$1;
(statearr_28113_28227[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (57))){
var inst_27680 = (state_28036[(7)]);
var inst_27879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28114_28228 = state_28036__$1;
(statearr_28114_28228[(2)] = inst_27879);

(statearr_28114_28228[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (68))){
var state_28036__$1 = state_28036;
var statearr_28115_28229 = state_28036__$1;
(statearr_28115_28229[(2)] = false);

(statearr_28115_28229[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (11))){
var state_28036__$1 = state_28036;
var statearr_28116_28230 = state_28036__$1;
(statearr_28116_28230[(2)] = true);

(statearr_28116_28230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (9))){
var state_28036__$1 = state_28036;
var statearr_28117_28231 = state_28036__$1;
(statearr_28117_28231[(2)] = false);

(statearr_28117_28231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_27680 = (state_28036[(7)]);
var inst_27685 = [cljs.core.str("lst login data:"),cljs.core.str(inst_27680)].join('');
var inst_27686 = cljs.core.println.call(null,inst_27685);
var inst_27688 = (inst_27680 == null);
var inst_27689 = cljs.core.not.call(null,inst_27688);
var state_28036__$1 = (function (){var statearr_28118 = state_28036;
(statearr_28118[(21)] = inst_27686);

return statearr_28118;
})();
if(inst_27689){
var statearr_28119_28232 = state_28036__$1;
(statearr_28119_28232[(1)] = (8));

} else {
var statearr_28120_28233 = state_28036__$1;
(statearr_28120_28233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (83))){
var inst_27680 = (state_28036[(7)]);
var inst_27985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28121_28234 = state_28036__$1;
(statearr_28121_28234[(2)] = inst_27985);

(statearr_28121_28234[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (14))){
var inst_27680 = (state_28036[(7)]);
var inst_27703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27680);
var state_28036__$1 = state_28036;
var statearr_28122_28235 = state_28036__$1;
(statearr_28122_28235[(2)] = inst_27703);

(statearr_28122_28235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (45))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28123_28236 = state_28036__$1;
(statearr_28123_28236[(2)] = inst_27680);

(statearr_28123_28236[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (53))){
var inst_27877 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27877)){
var statearr_28124_28237 = state_28036__$1;
(statearr_28124_28237[(1)] = (57));

} else {
var statearr_28125_28238 = state_28036__$1;
(statearr_28125_28238[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (78))){
var state_28036__$1 = state_28036;
var statearr_28126_28239 = state_28036__$1;
(statearr_28126_28239[(2)] = false);

(statearr_28126_28239[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (26))){
var inst_27751 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28127_28240 = state_28036__$1;
(statearr_28127_28240[(2)] = inst_27751);

(statearr_28127_28240[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (16))){
var inst_27708 = (state_28036[(15)]);
var inst_27706 = (state_28036[(2)]);
var inst_27707 = cljs.core.get.call(null,inst_27706,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_27708__$1 = cljs.core.get.call(null,inst_27706,new cljs.core.Keyword(null,"password","password",417022471));
var inst_27709 = cljs.core.get.call(null,inst_27706,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_27710 = encodeURIComponent(inst_27707);
var inst_27711 = encodeURIComponent(inst_27708__$1);
var inst_27712 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_27710),cljs.core.str("&pass="),cljs.core.str(inst_27711)].join('');
var inst_27713 = cloudxmark.core.jsonp.call(null,inst_27712);
var state_28036__$1 = (function (){var statearr_28128 = state_28036;
(statearr_28128[(15)] = inst_27708__$1);

(statearr_28128[(16)] = inst_27709);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(17),inst_27713);
} else {
if((state_val_28037 === (81))){
var state_28036__$1 = state_28036;
var statearr_28129_28241 = state_28036__$1;
(statearr_28129_28241[(2)] = false);

(statearr_28129_28241[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (79))){
var inst_27983 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27983)){
var statearr_28130_28242 = state_28036__$1;
(statearr_28130_28242[(1)] = (83));

} else {
var statearr_28131_28243 = state_28036__$1;
(statearr_28131_28243[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (38))){
var inst_27680 = (state_28036[(7)]);
var inst_27818 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27819 = (inst_27818 & (64));
var inst_27820 = inst_27680.cljs$core$ISeq$;
var inst_27821 = (inst_27819) || (inst_27820);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27821)){
var statearr_28132_28244 = state_28036__$1;
(statearr_28132_28244[(1)] = (41));

} else {
var statearr_28133_28245 = state_28036__$1;
(statearr_28133_28245[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (87))){
var state_28036__$1 = state_28036;
var statearr_28134_28246 = state_28036__$1;
(statearr_28134_28246[(2)] = null);

(statearr_28134_28246[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (30))){
var inst_27769 = (state_28036[(2)]);
var inst_27770 = cljs.core.js__GT_clj.call(null,inst_27769);
var inst_27771 = cloudxmark.core.convert_json_status.call(null,inst_27770,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_27772 = cljs.core.List.EMPTY;
var inst_27773 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_27774 = cljs.core._conj.call(null,inst_27772,inst_27773);
var inst_27775 = cljs.core.List.EMPTY;
var inst_27776 = cljs.core._conj.call(null,inst_27775,inst_27771);
var inst_27777 = cljs.core.concat.call(null,inst_27774,inst_27776);
var inst_27778 = cljs.core.seq.call(null,inst_27777);
var inst_27779 = cljs.core.sequence.call(null,inst_27778);
var inst_27780 = cljs.core.List.EMPTY;
var inst_27781 = cljs.core._conj.call(null,inst_27780,inst_27779);
var inst_27782 = cljs.core.concat.call(null,inst_27781);
var inst_27783 = cljs.core.seq.call(null,inst_27782);
var inst_27784 = cljs.core.sequence.call(null,inst_27783);
var inst_27785 = cljs.core.vec.call(null,inst_27784);
var inst_27786 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27785);
var state_28036__$1 = state_28036;
var statearr_28135_28247 = state_28036__$1;
(statearr_28135_28247[(2)] = inst_27786);

(statearr_28135_28247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (73))){
var inst_27945 = (state_28036[(2)]);
var inst_27946 = cljs.core.js__GT_clj.call(null,inst_27945);
var inst_27947 = cloudxmark.core.convert_json_lsts_result.call(null,inst_27946,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_27948 = cljs.core.List.EMPTY;
var inst_27949 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_27950 = cljs.core._conj.call(null,inst_27948,inst_27949);
var inst_27951 = cljs.core.List.EMPTY;
var inst_27952 = cljs.core._conj.call(null,inst_27951,inst_27947);
var inst_27953 = cljs.core.concat.call(null,inst_27950,inst_27952);
var inst_27954 = cljs.core.seq.call(null,inst_27953);
var inst_27955 = cljs.core.sequence.call(null,inst_27954);
var inst_27956 = cljs.core.List.EMPTY;
var inst_27957 = cljs.core._conj.call(null,inst_27956,inst_27955);
var inst_27958 = cljs.core.concat.call(null,inst_27957);
var inst_27959 = cljs.core.seq.call(null,inst_27958);
var inst_27960 = cljs.core.sequence.call(null,inst_27959);
var inst_27961 = cljs.core.vec.call(null,inst_27960);
var inst_27962 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27961);
var state_28036__$1 = state_28036;
var statearr_28136_28248 = state_28036__$1;
(statearr_28136_28248[(2)] = inst_27962);

(statearr_28136_28248[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var inst_27701 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27701)){
var statearr_28137_28249 = state_28036__$1;
(statearr_28137_28249[(1)] = (14));

} else {
var statearr_28138_28250 = state_28036__$1;
(statearr_28138_28250[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (18))){
var inst_27680 = (state_28036[(7)]);
var inst_27741 = (inst_27680 == null);
var inst_27742 = cljs.core.not.call(null,inst_27741);
var state_28036__$1 = state_28036;
if(inst_27742){
var statearr_28139_28251 = state_28036__$1;
(statearr_28139_28251[(1)] = (21));

} else {
var statearr_28140_28252 = state_28036__$1;
(statearr_28140_28252[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (52))){
var state_28036__$1 = state_28036;
var statearr_28141_28253 = state_28036__$1;
(statearr_28141_28253[(2)] = false);

(statearr_28141_28253[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (67))){
var state_28036__$1 = state_28036;
var statearr_28142_28254 = state_28036__$1;
(statearr_28142_28254[(2)] = true);

(statearr_28142_28254[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (71))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28143_28255 = state_28036__$1;
(statearr_28143_28255[(2)] = inst_27680);

(statearr_28143_28255[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (42))){
var state_28036__$1 = state_28036;
var statearr_28144_28256 = state_28036__$1;
(statearr_28144_28256[(2)] = false);

(statearr_28144_28256[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (80))){
var state_28036__$1 = state_28036;
var statearr_28145_28257 = state_28036__$1;
(statearr_28145_28257[(2)] = true);

(statearr_28145_28257[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (37))){
var inst_28023 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28146_28258 = state_28036__$1;
(statearr_28146_28258[(2)] = inst_28023);

(statearr_28146_28258[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (63))){
var inst_28019 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28147_28259 = state_28036__$1;
(statearr_28147_28259[(2)] = inst_28019);

(statearr_28147_28259[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_27680 = (state_28036[(7)]);
var inst_27691 = inst_27680.cljs$lang$protocol_mask$partition0$;
var inst_27692 = (inst_27691 & (64));
var inst_27693 = inst_27680.cljs$core$ISeq$;
var inst_27694 = (inst_27692) || (inst_27693);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_27694)){
var statearr_28148_28260 = state_28036__$1;
(statearr_28148_28260[(1)] = (11));

} else {
var statearr_28149_28261 = state_28036__$1;
(statearr_28149_28261[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (49))){
var inst_27679 = (state_28036[(8)]);
var inst_27911 = cljs.core._EQ_.call(null,inst_27679,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_28036__$1 = state_28036;
if(inst_27911){
var statearr_28150_28262 = state_28036__$1;
(statearr_28150_28262[(1)] = (61));

} else {
var statearr_28151_28263 = state_28036__$1;
(statearr_28151_28263[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (84))){
var inst_27680 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
var statearr_28152_28264 = state_28036__$1;
(statearr_28152_28264[(2)] = inst_27680);

(statearr_28152_28264[(1)] = (85));


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
});})(c__26735__auto__))
;
return ((function (switch__26712__auto__,c__26735__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26713__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26713__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28156[(0)] = cloudxmark$core$search_loop_$_state_machine__26713__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var cloudxmark$core$search_loop_$_state_machine__26713__auto____1 = (function (state_28036){
while(true){
var ret_value__26714__auto__ = (function (){try{while(true){
var result__26715__auto__ = switch__26712__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26715__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__26716__auto__ = e28157;
var statearr_28158_28265 = state_28036;
(statearr_28158_28265[(5)] = ex__26716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28266 = state_28036;
state_28036 = G__28266;
continue;
} else {
return ret_value__26714__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26713__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26713__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26713__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26713__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26713__auto____0;
cloudxmark$core$search_loop_$_state_machine__26713__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26713__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26713__auto__;
})()
;})(switch__26712__auto__,c__26735__auto__))
})();
var state__26737__auto__ = (function (){var statearr_28159 = f__26736__auto__.call(null);
(statearr_28159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26735__auto__);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26737__auto__);
});})(c__26735__auto__))
);

return c__26735__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468559739663