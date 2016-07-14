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
var idx_35081 = (0);
while(true){
var len1_35082 = b1.length;
if((cljs.core._EQ_.call(null,idx_35081,len1_35082)) || (cljs.core._EQ_.call(null,idx_35081,max_len))){
} else {
(b1[idx_35081] = ((b1[idx_35081]) ^ (b2[idx_35081])));

var G__35083 = (idx_35081 + (1));
idx_35081 = G__35083;
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
var args35086 = [];
var len__22618__auto___35089 = arguments.length;
var i__22619__auto___35090 = (0);
while(true){
if((i__22619__auto___35090 < len__22618__auto___35089)){
args35086.push((arguments[i__22619__auto___35090]));

var G__35091 = (i__22619__auto___35090 + (1));
i__22619__auto___35090 = G__35091;
continue;
} else {
}
break;
}

var G__35088 = args35086.length;
switch (G__35088) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35086.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__35084_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35084_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__35085_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__35085_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__35093,_,p__35094){
var map__35095 = p__35093;
var map__35095__$1 = ((((!((map__35095 == null)))?((((map__35095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35095):map__35095);
var env = map__35095__$1;
var state = cljs.core.get.call(null,map__35095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__35095__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__35096 = p__35094;
var map__35096__$1 = ((((!((map__35096 == null)))?((((map__35096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35096):map__35096);
var query_ver = cljs.core.get.call(null,map__35096__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__35096__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__35099 = lst;
var map__35099__$1 = ((((!((map__35099 == null)))?((((map__35099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35099):map__35099);
var lsts = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__35099__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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

var new_value_35101 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_35101);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__35102,_,p__35103){
var map__35104 = p__35102;
var map__35104__$1 = ((((!((map__35104 == null)))?((((map__35104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35104):map__35104);
var env = map__35104__$1;
var state = cljs.core.get.call(null,map__35104__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35105 = p__35103;
var map__35105__$1 = ((((!((map__35105 == null)))?((((map__35105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35105):map__35105);
var status = map__35105__$1;
var id = cljs.core.get.call(null,map__35105__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35104,map__35104__$1,env,state,map__35105,map__35105__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__35104,map__35104__$1,env,state,map__35105,map__35105__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__35108,_,p__35109){
var map__35110 = p__35108;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var env = map__35110__$1;
var state = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35111 = p__35109;
var map__35111__$1 = ((((!((map__35111 == null)))?((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var path = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35110,map__35110__$1,env,state,map__35111,map__35111__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__35110,map__35110__$1,env,state,map__35111,map__35111__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__35114,_,p__35115){
var map__35116 = p__35114;
var map__35116__$1 = ((((!((map__35116 == null)))?((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var env = map__35116__$1;
var state = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35117 = p__35115;
var map__35117__$1 = ((((!((map__35117 == null)))?((((map__35117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35117):map__35117);
var data_map = map__35117__$1;
var lst_idx = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35116,map__35116__$1,env,state,map__35117,map__35117__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var aaa = cljs.core.println.call(null,[cljs.core.str("lst-idx"),cljs.core.str(lst_idx),cljs.core.str("statebefore set item col:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cljs.core.nth.call(null,lsts,lst_idx);
var xxx = cljs.core.println.call(null,[cljs.core.str("lst:"),cljs.core.str(lst)].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var yyy = cljs.core.println.call(null,[cljs.core.str("lstid:"),cljs.core.str(lst_id)].join(''));
var item = cljs.core.nth.call(null,cljs.core.get.call(null,lst,"items"),item_idx);
var orig_name = cljs.core.get.call(null,item,"name");
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,orig_name)):value);
cljs.core.println.call(null,[cljs.core.str("data-map in set-item-col:"),cljs.core.str(data_map),cljs.core.str("lst-id:"),cljs.core.str(lst_id)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__35116,map__35116__$1,env,state,map__35117,map__35117__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__35120,_,p__35121){
var map__35122 = p__35120;
var map__35122__$1 = ((((!((map__35122 == null)))?((((map__35122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35122):map__35122);
var env = map__35122__$1;
var state = cljs.core.get.call(null,map__35122__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35123 = p__35121;
var map__35123__$1 = ((((!((map__35123 == null)))?((((map__35123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var field_id = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35122,map__35122__$1,env,state,map__35123,map__35123__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__35122,map__35122__$1,env,state,map__35123,map__35123__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__35126,_,p__35127){
var map__35128 = p__35126;
var map__35128__$1 = ((((!((map__35128 == null)))?((((map__35128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35128):map__35128);
var env = map__35128__$1;
var state = cljs.core.get.call(null,map__35128__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35129 = p__35127;
var map__35129__$1 = ((((!((map__35129 == null)))?((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var data_map = map__35129__$1;
var user_id = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35128,map__35128__$1,env,state,map__35129,map__35129__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__35128,map__35128__$1,env,state,map__35129,map__35129__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__35132,_,p__35133){
var map__35134 = p__35132;
var map__35134__$1 = ((((!((map__35134 == null)))?((((map__35134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var env = map__35134__$1;
var state = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35135 = p__35133;
var map__35135__$1 = ((((!((map__35135 == null)))?((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35135):map__35135);
var data_map = map__35135__$1;
var user_id = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35134,map__35134__$1,env,state,map__35135,map__35135__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__35134,map__35134__$1,env,state,map__35135,map__35135__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__35138,_,p__35139){
var map__35140 = p__35138;
var map__35140__$1 = ((((!((map__35140 == null)))?((((map__35140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35140):map__35140);
var env = map__35140__$1;
var state = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35141 = p__35139;
var map__35141__$1 = ((((!((map__35141 == null)))?((((map__35141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35141):map__35141);
var data_map = map__35141__$1;
var name = cljs.core.get.call(null,map__35141__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__35141__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35140,map__35140__$1,env,state,map__35141,map__35141__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__35140,map__35140__$1,env,state,map__35141,map__35141__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__35144,_,p__35145){
var map__35146 = p__35144;
var map__35146__$1 = ((((!((map__35146 == null)))?((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var env = map__35146__$1;
var state = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35147 = p__35145;
var map__35147__$1 = ((((!((map__35147 == null)))?((((map__35147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35147):map__35147);
var data_map = map__35147__$1;
var name = cljs.core.get.call(null,map__35147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__35147__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35146,map__35146__$1,env,state,map__35147,map__35147__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr = (function (){var or__21434__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__35146,map__35146__$1,env,state,map__35147,map__35147__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__35150,_,___$1){
var map__35151 = p__35150;
var map__35151__$1 = ((((!((map__35151 == null)))?((((map__35151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35151):map__35151);
var env = map__35151__$1;
var state = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35151,map__35151__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__35151,map__35151__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__35153,_,p__35154){
var map__35155 = p__35153;
var map__35155__$1 = ((((!((map__35155 == null)))?((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var env = map__35155__$1;
var state = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35156 = p__35154;
var map__35156__$1 = ((((!((map__35156 == null)))?((((map__35156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35156):map__35156);
var data_map = map__35156__$1;
var status = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35155,map__35155__$1,env,state,map__35156,map__35156__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
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

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__35155,map__35155__$1,env,state,map__35156,map__35156__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args35159 = [];
var len__22618__auto___35162 = arguments.length;
var i__22619__auto___35163 = (0);
while(true){
if((i__22619__auto___35163 < len__22618__auto___35162)){
args35159.push((arguments[i__22619__auto___35163]));

var G__35164 = (i__22619__auto___35163 + (1));
i__22619__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var G__35161 = args35159.length;
switch (G__35161) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35159.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__35166){
var map__35172 = p__35166;
var map__35172__$1 = ((((!((map__35172 == null)))?((((map__35172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35172):map__35172);
var info = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__35174 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__35174,(0),null);
var msg = cljs.core.nth.call(null,vec__35174,(1),null);
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
var map__35179 = lst;
var map__35179__$1 = ((((!((map__35179 == null)))?((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var lsts = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__35179,map__35179__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__35179,map__35179__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35183 = lst;
var map__35183__$1 = ((((!((map__35183 == null)))?((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35183):map__35183);
var status = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__35189 = (function (){var G__35192 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35192) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__35189,(0),null);
var query_key = cljs.core.nth.call(null,vec__35189,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__35189,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__35189,elem_key,query_key))
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
var this__26957__auto__ = this;
React.Component.apply(this__26957__auto__,arguments);

if(!((this__26957__auto__.initLocalState == null))){
this__26957__auto__.state = this__26957__auto__.initLocalState();
} else {
this__26957__auto__.state = {};
}

return this__26957__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x35198_35210 = cloudxmark.core.Lsts.prototype;
x35198_35210.componentWillUpdate = ((function (x35198_35210){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
if(((!((this__26858__auto__ == null)))?(((false) || (this__26858__auto__.om$next$Ident$))?true:false):false)){
var ident__26862__auto___35211 = om.next.ident.call(null,this__26858__auto__,om.next.props.call(null,this__26858__auto__));
var next_ident__26863__auto___35212 = om.next.ident.call(null,this__26858__auto__,om.next._next_props.call(null,next_props__26859__auto__,this__26858__auto__));
if(cljs.core.not_EQ_.call(null,ident__26862__auto___35211,next_ident__26863__auto___35212)){
var idxr__26864__auto___35213 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26864__auto___35213 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26864__auto___35213),((function (idxr__26864__auto___35213,ident__26862__auto___35211,next_ident__26863__auto___35212,this__26858__auto__,x35198_35210){
return (function (indexes__26865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26862__auto___35211], null),cljs.core.disj,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26863__auto___35212], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26858__auto__);
});})(idxr__26864__auto___35213,ident__26862__auto___35211,next_ident__26863__auto___35212,this__26858__auto__,x35198_35210))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26858__auto__);
});})(x35198_35210))
;

x35198_35210.shouldComponentUpdate = ((function (x35198_35210){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
var next_children__26861__auto__ = next_props__26859__auto__.children;
var next_props__26859__auto____$1 = goog.object.get(next_props__26859__auto__,"omcljs$value");
var next_props__26859__auto____$2 = (function (){var G__35200 = next_props__26859__auto____$1;
if((next_props__26859__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35200);
} else {
return G__35200;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26858__auto__),next_props__26859__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26858__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26858__auto__.state,"omcljs$state"),goog.object.get(next_state__26860__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26858__auto__.props.children,next_children__26861__auto__);
}
}
});})(x35198_35210))
;

x35198_35210.componentWillUnmount = ((function (x35198_35210){
return (function (){
var this__26858__auto__ = this;
var r__26869__auto__ = om.next.get_reconciler.call(null,this__26858__auto__);
var cfg__26870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26869__auto__);
var st__26871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
var indexer__26868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26871__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26858__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26858__auto__);
} else {
}

if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x35198_35210))
;

x35198_35210.componentDidUpdate = ((function (x35198_35210){
return (function (prev_props__26866__auto__,prev_state__26867__auto__){
var this__26858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26858__auto__);
});})(x35198_35210))
;

x35198_35210.isMounted = ((function (x35198_35210){
return (function (){
var this__26858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35198_35210))
;

x35198_35210.componentWillMount = ((function (x35198_35210){
return (function (){
var this__26858__auto__ = this;
var indexer__26868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x35198_35210))
;

x35198_35210.render = ((function (x35198_35210){
return (function (){
var this__26857__auto__ = this;
var this$ = this__26857__auto__;
var _STAR_reconciler_STAR_35201 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35202 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35203 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35204 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35205 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26857__auto__);

om.next._STAR_parent_STAR_ = this__26857__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35206 = lst;
var map__35206__$1 = ((((!((map__35206 == null)))?((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35206):map__35206);
var lsts = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35205;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35204;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35203;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35202;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35201;
}});})(x35198_35210))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x35208_35214 = cloudxmark.core.Lsts;
x35208_35214.om$next$IQueryParams$ = true;

x35208_35214.om$next$IQueryParams$params$arity$1 = ((function (x35208_35214){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x35208_35214))
;

x35208_35214.om$next$IQuery$ = true;

x35208_35214.om$next$IQuery$query$arity$1 = ((function (x35208_35214){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x35208_35214))
;


var x35209_35215 = cloudxmark.core.Lsts.prototype;
x35209_35215.om$next$IQueryParams$ = true;

x35209_35215.om$next$IQueryParams$params$arity$1 = ((function (x35209_35215){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x35209_35215))
;

x35209_35215.om$next$IQuery$ = true;

x35209_35215.om$next$IQuery$query$arity$1 = ((function (x35209_35215){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x35209_35215))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26959__auto__,writer__26960__auto__,opt__26961__auto__){
return cljs.core._write.call(null,writer__26960__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__35224,cb){
var map__35225 = p__35224;
var map__35225__$1 = ((((!((map__35225 == null)))?((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35225):map__35225);
var lst_search = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__35227 = om.next.query__GT_ast.call(null,lst_search);
var map__35227__$1 = ((((!((map__35227 == null)))?((((map__35227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35227):map__35227);
var vec__35228 = cljs.core.get.call(null,map__35227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__35228,(0),null);
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
var map__35236 = result;
var map__35236__$1 = ((((!((map__35236 == null)))?((((map__35236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236):map__35236);
var lsts = cljs.core.get.call(null,map__35236__$1,"lsts");
var user_id = cljs.core.get.call(null,map__35236__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__35236__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__35237 = json_status;
var map__35237__$1 = ((((!((map__35237 == null)))?((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var info = cljs.core.get.call(null,map__35237__$1,"info");
var warn = cljs.core.get.call(null,map__35237__$1,"warn");
var error = cljs.core.get.call(null,map__35237__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__35242 = json_status;
var map__35242__$1 = ((((!((map__35242 == null)))?((((map__35242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35242):map__35242);
var info = cljs.core.get.call(null,map__35242__$1,"info");
var warn = cljs.core.get.call(null,map__35242__$1,"warn");
var error = cljs.core.get.call(null,map__35242__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26726__auto__){
return (function (){
var f__26727__auto__ = (function (){var switch__26703__auto__ = ((function (c__26726__auto__){
return (function (state_36116){
var state_val_36117 = (state_36116[(1)]);
if((state_val_36117 === (65))){
var state_36116__$1 = state_36116;
var statearr_36118_36240 = state_36116__$1;
(statearr_36118_36240[(2)] = false);

(statearr_36118_36240[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (70))){
var inst_35760 = (state_36116[(7)]);
var inst_36010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36119_36241 = state_36116__$1;
(statearr_36119_36241[(2)] = inst_36010);

(statearr_36119_36241[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (62))){
var inst_35759 = (state_36116[(8)]);
var inst_36044 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_36116__$1 = state_36116;
if(inst_36044){
var statearr_36120_36242 = state_36116__$1;
(statearr_36120_36242[(1)] = (74));

} else {
var statearr_36121_36243 = state_36116__$1;
(statearr_36121_36243[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (74))){
var inst_35760 = (state_36116[(7)]);
var inst_36047 = [cljs.core.str("lst query data:"),cljs.core.str(inst_35760)].join('');
var inst_36048 = cljs.core.println.call(null,inst_36047);
var inst_36050 = (inst_35760 == null);
var inst_36051 = cljs.core.not.call(null,inst_36050);
var state_36116__$1 = (function (){var statearr_36122 = state_36116;
(statearr_36122[(9)] = inst_36048);

return statearr_36122;
})();
if(inst_36051){
var statearr_36123_36244 = state_36116__$1;
(statearr_36123_36244[(1)] = (77));

} else {
var statearr_36124_36245 = state_36116__$1;
(statearr_36124_36245[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (7))){
var inst_36109 = (state_36116[(2)]);
var state_36116__$1 = (function (){var statearr_36125 = state_36116;
(statearr_36125[(10)] = inst_36109);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(90),c);
} else {
if((state_val_36117 === (59))){
var inst_35962 = (state_36116[(2)]);
var inst_35963 = cljs.core.get.call(null,inst_35962,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_35964 = cljs.core.get.call(null,inst_35962,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35965 = cljs.core.get.call(null,inst_35962,new cljs.core.Keyword(null,"value","value",305978217));
var inst_35966 = encodeURIComponent(inst_35963);
var inst_35967 = encodeURIComponent(inst_35964);
var inst_35968 = encodeURIComponent(inst_35965);
var inst_35969 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_35966),cljs.core.str("&name="),cljs.core.str(inst_35967),cljs.core.str("&value="),cljs.core.str(inst_35968)].join('');
var inst_35970 = cloudxmark.core.jsonp.call(null,inst_35969);
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(60),inst_35970);
} else {
if((state_val_36117 === (86))){
var inst_36070 = (state_36116[(11)]);
var inst_36073 = (state_36116[(2)]);
var inst_36074 = cljs.core.js__GT_clj.call(null,inst_36073);
var inst_36075 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36074,inst_36070,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_36076 = cljs.core.List.EMPTY;
var inst_36077 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36078 = cljs.core._conj.call(null,inst_36076,inst_36077);
var inst_36079 = cljs.core.List.EMPTY;
var inst_36080 = cljs.core._conj.call(null,inst_36079,inst_36075);
var inst_36081 = cljs.core.concat.call(null,inst_36078,inst_36080);
var inst_36082 = cljs.core.seq.call(null,inst_36081);
var inst_36083 = cljs.core.sequence.call(null,inst_36082);
var inst_36084 = cljs.core.List.EMPTY;
var inst_36085 = cljs.core._conj.call(null,inst_36084,inst_36083);
var inst_36086 = cljs.core.concat.call(null,inst_36085);
var inst_36087 = cljs.core.seq.call(null,inst_36086);
var inst_36088 = cljs.core.sequence.call(null,inst_36087);
var inst_36089 = cljs.core.vec.call(null,inst_36088);
var inst_36090 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36089);
var state_36116__$1 = state_36116;
var statearr_36126_36246 = state_36116__$1;
(statearr_36126_36246[(2)] = inst_36090);

(statearr_36126_36246[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (20))){
var inst_36107 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36127_36247 = state_36116__$1;
(statearr_36127_36247[(2)] = inst_36107);

(statearr_36127_36247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (72))){
var inst_36013 = (state_36116[(2)]);
var inst_36014 = cljs.core.get.call(null,inst_36013,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_36015 = cljs.core.get.call(null,inst_36013,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_36016 = cljs.core.get.call(null,inst_36013,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_36017 = cljs.core.get.call(null,inst_36013,new cljs.core.Keyword(null,"value","value",305978217));
var inst_36018 = encodeURIComponent(inst_36014);
var inst_36019 = encodeURIComponent(inst_36015);
var inst_36020 = encodeURIComponent(inst_36016);
var inst_36021 = encodeURIComponent(inst_36017);
var inst_36022 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_36018),cljs.core.str("&orig-name="),cljs.core.str(inst_36019),cljs.core.str("&col-name="),cljs.core.str(inst_36020),cljs.core.str("&value="),cljs.core.str(inst_36021)].join('');
var inst_36023 = cloudxmark.core.jsonp.call(null,inst_36022);
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(73),inst_36023);
} else {
if((state_val_36117 === (58))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36128_36248 = state_36116__$1;
(statearr_36128_36248[(2)] = inst_35760);

(statearr_36128_36248[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (60))){
var inst_35972 = (state_36116[(2)]);
var inst_35973 = cljs.core.js__GT_clj.call(null,inst_35972);
var inst_35974 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35973,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_35975 = cljs.core.List.EMPTY;
var inst_35976 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35977 = cljs.core._conj.call(null,inst_35975,inst_35976);
var inst_35978 = cljs.core.List.EMPTY;
var inst_35979 = cljs.core._conj.call(null,inst_35978,inst_35974);
var inst_35980 = cljs.core.concat.call(null,inst_35977,inst_35979);
var inst_35981 = cljs.core.seq.call(null,inst_35980);
var inst_35982 = cljs.core.sequence.call(null,inst_35981);
var inst_35983 = cljs.core.List.EMPTY;
var inst_35984 = cljs.core._conj.call(null,inst_35983,inst_35982);
var inst_35985 = cljs.core.concat.call(null,inst_35984);
var inst_35986 = cljs.core.seq.call(null,inst_35985);
var inst_35987 = cljs.core.sequence.call(null,inst_35986);
var inst_35988 = cljs.core.vec.call(null,inst_35987);
var inst_35989 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35988);
var state_36116__$1 = state_36116;
var statearr_36129_36249 = state_36116__$1;
(statearr_36129_36249[(2)] = inst_35989);

(statearr_36129_36249[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (27))){
var inst_35760 = (state_36116[(7)]);
var inst_35836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36130_36250 = state_36116__$1;
(statearr_36130_36250[(2)] = inst_35836);

(statearr_36130_36250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (1))){
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(2),c);
} else {
if((state_val_36117 === (69))){
var inst_36005 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36131_36251 = state_36116__$1;
(statearr_36131_36251[(2)] = inst_36005);

(statearr_36131_36251[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (24))){
var state_36116__$1 = state_36116;
var statearr_36132_36252 = state_36116__$1;
(statearr_36132_36252[(2)] = true);

(statearr_36132_36252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (55))){
var state_36116__$1 = state_36116;
var statearr_36133_36253 = state_36116__$1;
(statearr_36133_36253[(2)] = false);

(statearr_36133_36253[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (85))){
var inst_36068 = (state_36116[(2)]);
var inst_36069 = cljs.core.get.call(null,inst_36068,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_36070 = cljs.core.get.call(null,inst_36068,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_36071 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_36116__$1 = (function (){var statearr_36134 = state_36116;
(statearr_36134[(11)] = inst_36070);

(statearr_36134[(12)] = inst_36069);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(86),inst_36071);
} else {
if((state_val_36117 === (39))){
var state_36116__$1 = state_36116;
var statearr_36135_36254 = state_36116__$1;
(statearr_36135_36254[(2)] = false);

(statearr_36135_36254[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (88))){
var state_36116__$1 = state_36116;
var statearr_36136_36255 = state_36116__$1;
(statearr_36136_36255[(2)] = null);

(statearr_36136_36255[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (46))){
var inst_35913 = (state_36116[(2)]);
var inst_35914 = cljs.core.get.call(null,inst_35913,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35915 = cljs.core.get.call(null,inst_35913,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_35916 = encodeURIComponent(inst_35914);
var inst_35917 = encodeURIComponent(inst_35915);
var inst_35918 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_35916),cljs.core.str("&desc="),cljs.core.str(inst_35917)].join('');
var inst_35919 = cloudxmark.core.jsonp.call(null,inst_35918);
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(47),inst_35919);
} else {
if((state_val_36117 === (4))){
var inst_36114 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36116__$1,inst_36114);
} else {
if((state_val_36117 === (77))){
var inst_35760 = (state_36116[(7)]);
var inst_36053 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_36054 = (inst_36053 & (64));
var inst_36055 = inst_35760.cljs$core$ISeq$;
var inst_36056 = (inst_36054) || (inst_36055);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_36056)){
var statearr_36137_36256 = state_36116__$1;
(statearr_36137_36256[(1)] = (80));

} else {
var statearr_36138_36257 = state_36116__$1;
(statearr_36138_36257[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (54))){
var state_36116__$1 = state_36116;
var statearr_36139_36258 = state_36116__$1;
(statearr_36139_36258[(2)] = true);

(statearr_36139_36258[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (15))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36140_36259 = state_36116__$1;
(statearr_36140_36259[(2)] = inst_35760);

(statearr_36140_36259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (48))){
var inst_35760 = (state_36116[(7)]);
var inst_35944 = (inst_35760 == null);
var inst_35945 = cljs.core.not.call(null,inst_35944);
var state_36116__$1 = state_36116;
if(inst_35945){
var statearr_36141_36260 = state_36116__$1;
(statearr_36141_36260[(1)] = (51));

} else {
var statearr_36142_36261 = state_36116__$1;
(statearr_36142_36261[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (50))){
var inst_36101 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36143_36262 = state_36116__$1;
(statearr_36143_36262[(2)] = inst_36101);

(statearr_36143_36262[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (75))){
var state_36116__$1 = state_36116;
var statearr_36144_36263 = state_36116__$1;
(statearr_36144_36263[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (21))){
var inst_35760 = (state_36116[(7)]);
var inst_35824 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_35825 = (inst_35824 & (64));
var inst_35826 = inst_35760.cljs$core$ISeq$;
var inst_35827 = (inst_35825) || (inst_35826);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35827)){
var statearr_36146_36264 = state_36116__$1;
(statearr_36146_36264[(1)] = (24));

} else {
var statearr_36147_36265 = state_36116__$1;
(statearr_36147_36265[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (31))){
var inst_35870 = cloudxmark.core.jsonp.call(null,"/logout");
var state_36116__$1 = state_36116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(34),inst_35870);
} else {
if((state_val_36117 === (32))){
var inst_35759 = (state_36116[(8)]);
var inst_35891 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_36116__$1 = state_36116;
if(inst_35891){
var statearr_36148_36266 = state_36116__$1;
(statearr_36148_36266[(1)] = (35));

} else {
var statearr_36149_36267 = state_36116__$1;
(statearr_36149_36267[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (40))){
var inst_35908 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35908)){
var statearr_36150_36268 = state_36116__$1;
(statearr_36150_36268[(1)] = (44));

} else {
var statearr_36151_36269 = state_36116__$1;
(statearr_36151_36269[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (56))){
var inst_35954 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36152_36270 = state_36116__$1;
(statearr_36152_36270[(2)] = inst_35954);

(statearr_36152_36270[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (33))){
var inst_36105 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36153_36271 = state_36116__$1;
(statearr_36153_36271[(2)] = inst_36105);

(statearr_36153_36271[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (13))){
var inst_35778 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36154_36272 = state_36116__$1;
(statearr_36154_36272[(2)] = inst_35778);

(statearr_36154_36272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (22))){
var state_36116__$1 = state_36116;
var statearr_36155_36273 = state_36116__$1;
(statearr_36155_36273[(2)] = false);

(statearr_36155_36273[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (90))){
var inst_36111 = (state_36116[(2)]);
var inst_35754 = inst_36111;
var state_36116__$1 = (function (){var statearr_36156 = state_36116;
(statearr_36156[(13)] = inst_35754);

return statearr_36156;
})();
var statearr_36157_36274 = state_36116__$1;
(statearr_36157_36274[(2)] = null);

(statearr_36157_36274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (36))){
var inst_35759 = (state_36116[(8)]);
var inst_35940 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_36116__$1 = state_36116;
if(inst_35940){
var statearr_36158_36275 = state_36116__$1;
(statearr_36158_36275[(1)] = (48));

} else {
var statearr_36159_36276 = state_36116__$1;
(statearr_36159_36276[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (41))){
var state_36116__$1 = state_36116;
var statearr_36160_36277 = state_36116__$1;
(statearr_36160_36277[(2)] = true);

(statearr_36160_36277[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (89))){
var inst_36095 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36161_36278 = state_36116__$1;
(statearr_36161_36278[(2)] = inst_36095);

(statearr_36161_36278[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (43))){
var inst_35905 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36162_36279 = state_36116__$1;
(statearr_36162_36279[(2)] = inst_35905);

(statearr_36162_36279[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (61))){
var inst_35760 = (state_36116[(7)]);
var inst_35995 = (inst_35760 == null);
var inst_35996 = cljs.core.not.call(null,inst_35995);
var state_36116__$1 = state_36116;
if(inst_35996){
var statearr_36163_36280 = state_36116__$1;
(statearr_36163_36280[(1)] = (64));

} else {
var statearr_36164_36281 = state_36116__$1;
(statearr_36164_36281[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (29))){
var inst_35839 = (state_36116[(2)]);
var inst_35840 = cljs.core.get.call(null,inst_35839,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35841 = cljs.core.get.call(null,inst_35839,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35842 = cljs.core.get.call(null,inst_35839,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35843 = cloudxmark.core.enc_password.call(null,inst_35841);
var inst_35844 = encodeURIComponent(inst_35840);
var inst_35845 = encodeURIComponent(inst_35843);
var inst_35846 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_35844),cljs.core.str("&pass="),cljs.core.str(inst_35845)].join('');
var inst_35847 = cloudxmark.core.jsonp.call(null,inst_35846);
var state_36116__$1 = (function (){var statearr_36165 = state_36116;
(statearr_36165[(14)] = inst_35842);

return statearr_36165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(30),inst_35847);
} else {
if((state_val_36117 === (44))){
var inst_35760 = (state_36116[(7)]);
var inst_35910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36166_36282 = state_36116__$1;
(statearr_36166_36282[(2)] = inst_35910);

(statearr_36166_36282[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (6))){
var inst_35759 = (state_36116[(8)]);
var inst_35817 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_36116__$1 = state_36116;
if(inst_35817){
var statearr_36167_36283 = state_36116__$1;
(statearr_36167_36283[(1)] = (18));

} else {
var statearr_36168_36284 = state_36116__$1;
(statearr_36168_36284[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (28))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36169_36285 = state_36116__$1;
(statearr_36169_36285[(2)] = inst_35760);

(statearr_36169_36285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (64))){
var inst_35760 = (state_36116[(7)]);
var inst_35998 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_35999 = (inst_35998 & (64));
var inst_36000 = inst_35760.cljs$core$ISeq$;
var inst_36001 = (inst_35999) || (inst_36000);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_36001)){
var statearr_36170_36286 = state_36116__$1;
(statearr_36170_36286[(1)] = (67));

} else {
var statearr_36171_36287 = state_36116__$1;
(statearr_36171_36287[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (51))){
var inst_35760 = (state_36116[(7)]);
var inst_35947 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_35948 = (inst_35947 & (64));
var inst_35949 = inst_35760.cljs$core$ISeq$;
var inst_35950 = (inst_35948) || (inst_35949);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35950)){
var statearr_36172_36288 = state_36116__$1;
(statearr_36172_36288[(1)] = (54));

} else {
var statearr_36173_36289 = state_36116__$1;
(statearr_36173_36289[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (25))){
var state_36116__$1 = state_36116;
var statearr_36174_36290 = state_36116__$1;
(statearr_36174_36290[(2)] = false);

(statearr_36174_36290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (34))){
var inst_35872 = (state_36116[(2)]);
var inst_35873 = cljs.core.js__GT_clj.call(null,inst_35872);
var inst_35874 = cloudxmark.core.convert_json_status.call(null,inst_35873,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_35875 = cljs.core.List.EMPTY;
var inst_35876 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35877 = cljs.core._conj.call(null,inst_35875,inst_35876);
var inst_35878 = cljs.core.List.EMPTY;
var inst_35879 = cljs.core._conj.call(null,inst_35878,inst_35874);
var inst_35880 = cljs.core.concat.call(null,inst_35877,inst_35879);
var inst_35881 = cljs.core.seq.call(null,inst_35880);
var inst_35882 = cljs.core.sequence.call(null,inst_35881);
var inst_35883 = cljs.core.List.EMPTY;
var inst_35884 = cljs.core._conj.call(null,inst_35883,inst_35882);
var inst_35885 = cljs.core.concat.call(null,inst_35884);
var inst_35886 = cljs.core.seq.call(null,inst_35885);
var inst_35887 = cljs.core.sequence.call(null,inst_35886);
var inst_35888 = cljs.core.vec.call(null,inst_35887);
var inst_35889 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35888);
var state_36116__$1 = state_36116;
var statearr_36175_36291 = state_36116__$1;
(statearr_36175_36291[(2)] = inst_35889);

(statearr_36175_36291[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (17))){
var inst_35788 = (state_36116[(15)]);
var inst_35789 = (state_36116[(16)]);
var inst_35795 = (state_36116[(2)]);
var inst_35796 = cljs.core.js__GT_clj.call(null,inst_35795);
var inst_35797 = cloudxmark.core.gen_key_bytes.call(null,inst_35788);
var inst_35798 = cloudxmark.core.create_aes_cbc.call(null,inst_35797);
var inst_35799 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35796,inst_35789,new cljs.core.Keyword(null,"login","login",55217519));
var inst_35800 = cljs.core.assoc.call(null,inst_35799,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_35798);
var inst_35801 = cljs.core.List.EMPTY;
var inst_35802 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35803 = cljs.core._conj.call(null,inst_35801,inst_35802);
var inst_35804 = cljs.core.List.EMPTY;
var inst_35805 = cljs.core._conj.call(null,inst_35804,inst_35800);
var inst_35806 = cljs.core.concat.call(null,inst_35803,inst_35805);
var inst_35807 = cljs.core.seq.call(null,inst_35806);
var inst_35808 = cljs.core.sequence.call(null,inst_35807);
var inst_35809 = cljs.core.List.EMPTY;
var inst_35810 = cljs.core._conj.call(null,inst_35809,inst_35808);
var inst_35811 = cljs.core.concat.call(null,inst_35810);
var inst_35812 = cljs.core.seq.call(null,inst_35811);
var inst_35813 = cljs.core.sequence.call(null,inst_35812);
var inst_35814 = cljs.core.vec.call(null,inst_35813);
var inst_35815 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35814);
var state_36116__$1 = state_36116;
var statearr_36176_36292 = state_36116__$1;
(statearr_36176_36292[(2)] = inst_35815);

(statearr_36176_36292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (3))){
var inst_35759 = (state_36116[(8)]);
var inst_35754 = (state_36116[(13)]);
var inst_35759__$1 = cljs.core.nth.call(null,inst_35754,(0),null);
var inst_35760 = cljs.core.nth.call(null,inst_35754,(1),null);
var inst_35761 = cljs.core.nth.call(null,inst_35754,(2),null);
var inst_35762 = cljs.core._EQ_.call(null,inst_35759__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_36116__$1 = (function (){var statearr_36177 = state_36116;
(statearr_36177[(7)] = inst_35760);

(statearr_36177[(8)] = inst_35759__$1);

(statearr_36177[(17)] = inst_35761);

return statearr_36177;
})();
if(inst_35762){
var statearr_36178_36293 = state_36116__$1;
(statearr_36178_36293[(1)] = (5));

} else {
var statearr_36179_36294 = state_36116__$1;
(statearr_36179_36294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (12))){
var state_36116__$1 = state_36116;
var statearr_36180_36295 = state_36116__$1;
(statearr_36180_36295[(2)] = false);

(statearr_36180_36295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (2))){
var inst_35750 = (state_36116[(2)]);
var inst_35751 = cljs.core.nth.call(null,inst_35750,(0),null);
var inst_35752 = cljs.core.nth.call(null,inst_35750,(1),null);
var inst_35753 = cljs.core.nth.call(null,inst_35750,(2),null);
var inst_35754 = inst_35750;
var state_36116__$1 = (function (){var statearr_36181 = state_36116;
(statearr_36181[(18)] = inst_35753);

(statearr_36181[(13)] = inst_35754);

(statearr_36181[(19)] = inst_35752);

(statearr_36181[(20)] = inst_35751);

return statearr_36181;
})();
var statearr_36182_36296 = state_36116__$1;
(statearr_36182_36296[(2)] = null);

(statearr_36182_36296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (66))){
var inst_36008 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_36008)){
var statearr_36183_36297 = state_36116__$1;
(statearr_36183_36297[(1)] = (70));

} else {
var statearr_36184_36298 = state_36116__$1;
(statearr_36184_36298[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (23))){
var inst_35834 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35834)){
var statearr_36185_36299 = state_36116__$1;
(statearr_36185_36299[(1)] = (27));

} else {
var statearr_36186_36300 = state_36116__$1;
(statearr_36186_36300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (47))){
var inst_35921 = (state_36116[(2)]);
var inst_35922 = cljs.core.js__GT_clj.call(null,inst_35921);
var inst_35923 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35922,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_35924 = cljs.core.List.EMPTY;
var inst_35925 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35926 = cljs.core._conj.call(null,inst_35924,inst_35925);
var inst_35927 = cljs.core.List.EMPTY;
var inst_35928 = cljs.core._conj.call(null,inst_35927,inst_35923);
var inst_35929 = cljs.core.concat.call(null,inst_35926,inst_35928);
var inst_35930 = cljs.core.seq.call(null,inst_35929);
var inst_35931 = cljs.core.sequence.call(null,inst_35930);
var inst_35932 = cljs.core.List.EMPTY;
var inst_35933 = cljs.core._conj.call(null,inst_35932,inst_35931);
var inst_35934 = cljs.core.concat.call(null,inst_35933);
var inst_35935 = cljs.core.seq.call(null,inst_35934);
var inst_35936 = cljs.core.sequence.call(null,inst_35935);
var inst_35937 = cljs.core.vec.call(null,inst_35936);
var inst_35938 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35937);
var state_36116__$1 = state_36116;
var statearr_36187_36301 = state_36116__$1;
(statearr_36187_36301[(2)] = inst_35938);

(statearr_36187_36301[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (35))){
var inst_35760 = (state_36116[(7)]);
var inst_35895 = (inst_35760 == null);
var inst_35896 = cljs.core.not.call(null,inst_35895);
var state_36116__$1 = state_36116;
if(inst_35896){
var statearr_36188_36302 = state_36116__$1;
(statearr_36188_36302[(1)] = (38));

} else {
var statearr_36189_36303 = state_36116__$1;
(statearr_36189_36303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (82))){
var inst_36060 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36190_36304 = state_36116__$1;
(statearr_36190_36304[(2)] = inst_36060);

(statearr_36190_36304[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (76))){
var inst_36097 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36191_36305 = state_36116__$1;
(statearr_36191_36305[(2)] = inst_36097);

(statearr_36191_36305[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (19))){
var inst_35759 = (state_36116[(8)]);
var inst_35868 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_36116__$1 = state_36116;
if(inst_35868){
var statearr_36192_36306 = state_36116__$1;
(statearr_36192_36306[(1)] = (31));

} else {
var statearr_36193_36307 = state_36116__$1;
(statearr_36193_36307[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (57))){
var inst_35760 = (state_36116[(7)]);
var inst_35959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36194_36308 = state_36116__$1;
(statearr_36194_36308[(2)] = inst_35959);

(statearr_36194_36308[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (68))){
var state_36116__$1 = state_36116;
var statearr_36195_36309 = state_36116__$1;
(statearr_36195_36309[(2)] = false);

(statearr_36195_36309[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (11))){
var state_36116__$1 = state_36116;
var statearr_36196_36310 = state_36116__$1;
(statearr_36196_36310[(2)] = true);

(statearr_36196_36310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (9))){
var state_36116__$1 = state_36116;
var statearr_36197_36311 = state_36116__$1;
(statearr_36197_36311[(2)] = false);

(statearr_36197_36311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (5))){
var inst_35760 = (state_36116[(7)]);
var inst_35765 = [cljs.core.str("lst login data:"),cljs.core.str(inst_35760)].join('');
var inst_35766 = cljs.core.println.call(null,inst_35765);
var inst_35768 = (inst_35760 == null);
var inst_35769 = cljs.core.not.call(null,inst_35768);
var state_36116__$1 = (function (){var statearr_36198 = state_36116;
(statearr_36198[(21)] = inst_35766);

return statearr_36198;
})();
if(inst_35769){
var statearr_36199_36312 = state_36116__$1;
(statearr_36199_36312[(1)] = (8));

} else {
var statearr_36200_36313 = state_36116__$1;
(statearr_36200_36313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (83))){
var inst_35760 = (state_36116[(7)]);
var inst_36065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36201_36314 = state_36116__$1;
(statearr_36201_36314[(2)] = inst_36065);

(statearr_36201_36314[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (14))){
var inst_35760 = (state_36116[(7)]);
var inst_35783 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35760);
var state_36116__$1 = state_36116;
var statearr_36202_36315 = state_36116__$1;
(statearr_36202_36315[(2)] = inst_35783);

(statearr_36202_36315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (45))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36203_36316 = state_36116__$1;
(statearr_36203_36316[(2)] = inst_35760);

(statearr_36203_36316[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (53))){
var inst_35957 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35957)){
var statearr_36204_36317 = state_36116__$1;
(statearr_36204_36317[(1)] = (57));

} else {
var statearr_36205_36318 = state_36116__$1;
(statearr_36205_36318[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (78))){
var state_36116__$1 = state_36116;
var statearr_36206_36319 = state_36116__$1;
(statearr_36206_36319[(2)] = false);

(statearr_36206_36319[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (26))){
var inst_35831 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36207_36320 = state_36116__$1;
(statearr_36207_36320[(2)] = inst_35831);

(statearr_36207_36320[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (16))){
var inst_35788 = (state_36116[(15)]);
var inst_35786 = (state_36116[(2)]);
var inst_35787 = cljs.core.get.call(null,inst_35786,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35788__$1 = cljs.core.get.call(null,inst_35786,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35789 = cljs.core.get.call(null,inst_35786,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35790 = encodeURIComponent(inst_35787);
var inst_35791 = encodeURIComponent(inst_35788__$1);
var inst_35792 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_35790),cljs.core.str("&pass="),cljs.core.str(inst_35791)].join('');
var inst_35793 = cloudxmark.core.jsonp.call(null,inst_35792);
var state_36116__$1 = (function (){var statearr_36208 = state_36116;
(statearr_36208[(15)] = inst_35788__$1);

(statearr_36208[(16)] = inst_35789);

return statearr_36208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36116__$1,(17),inst_35793);
} else {
if((state_val_36117 === (81))){
var state_36116__$1 = state_36116;
var statearr_36209_36321 = state_36116__$1;
(statearr_36209_36321[(2)] = false);

(statearr_36209_36321[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (79))){
var inst_36063 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_36063)){
var statearr_36210_36322 = state_36116__$1;
(statearr_36210_36322[(1)] = (83));

} else {
var statearr_36211_36323 = state_36116__$1;
(statearr_36211_36323[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (38))){
var inst_35760 = (state_36116[(7)]);
var inst_35898 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_35899 = (inst_35898 & (64));
var inst_35900 = inst_35760.cljs$core$ISeq$;
var inst_35901 = (inst_35899) || (inst_35900);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35901)){
var statearr_36212_36324 = state_36116__$1;
(statearr_36212_36324[(1)] = (41));

} else {
var statearr_36213_36325 = state_36116__$1;
(statearr_36213_36325[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (87))){
var state_36116__$1 = state_36116;
var statearr_36214_36326 = state_36116__$1;
(statearr_36214_36326[(2)] = null);

(statearr_36214_36326[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (30))){
var inst_35849 = (state_36116[(2)]);
var inst_35850 = cljs.core.js__GT_clj.call(null,inst_35849);
var inst_35851 = cloudxmark.core.convert_json_status.call(null,inst_35850,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_35852 = cljs.core.List.EMPTY;
var inst_35853 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35854 = cljs.core._conj.call(null,inst_35852,inst_35853);
var inst_35855 = cljs.core.List.EMPTY;
var inst_35856 = cljs.core._conj.call(null,inst_35855,inst_35851);
var inst_35857 = cljs.core.concat.call(null,inst_35854,inst_35856);
var inst_35858 = cljs.core.seq.call(null,inst_35857);
var inst_35859 = cljs.core.sequence.call(null,inst_35858);
var inst_35860 = cljs.core.List.EMPTY;
var inst_35861 = cljs.core._conj.call(null,inst_35860,inst_35859);
var inst_35862 = cljs.core.concat.call(null,inst_35861);
var inst_35863 = cljs.core.seq.call(null,inst_35862);
var inst_35864 = cljs.core.sequence.call(null,inst_35863);
var inst_35865 = cljs.core.vec.call(null,inst_35864);
var inst_35866 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35865);
var state_36116__$1 = state_36116;
var statearr_36215_36327 = state_36116__$1;
(statearr_36215_36327[(2)] = inst_35866);

(statearr_36215_36327[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (73))){
var inst_36025 = (state_36116[(2)]);
var inst_36026 = cljs.core.js__GT_clj.call(null,inst_36025);
var inst_36027 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36026,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_36028 = cljs.core.List.EMPTY;
var inst_36029 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36030 = cljs.core._conj.call(null,inst_36028,inst_36029);
var inst_36031 = cljs.core.List.EMPTY;
var inst_36032 = cljs.core._conj.call(null,inst_36031,inst_36027);
var inst_36033 = cljs.core.concat.call(null,inst_36030,inst_36032);
var inst_36034 = cljs.core.seq.call(null,inst_36033);
var inst_36035 = cljs.core.sequence.call(null,inst_36034);
var inst_36036 = cljs.core.List.EMPTY;
var inst_36037 = cljs.core._conj.call(null,inst_36036,inst_36035);
var inst_36038 = cljs.core.concat.call(null,inst_36037);
var inst_36039 = cljs.core.seq.call(null,inst_36038);
var inst_36040 = cljs.core.sequence.call(null,inst_36039);
var inst_36041 = cljs.core.vec.call(null,inst_36040);
var inst_36042 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36041);
var state_36116__$1 = state_36116;
var statearr_36216_36328 = state_36116__$1;
(statearr_36216_36328[(2)] = inst_36042);

(statearr_36216_36328[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (10))){
var inst_35781 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35781)){
var statearr_36217_36329 = state_36116__$1;
(statearr_36217_36329[(1)] = (14));

} else {
var statearr_36218_36330 = state_36116__$1;
(statearr_36218_36330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (18))){
var inst_35760 = (state_36116[(7)]);
var inst_35821 = (inst_35760 == null);
var inst_35822 = cljs.core.not.call(null,inst_35821);
var state_36116__$1 = state_36116;
if(inst_35822){
var statearr_36219_36331 = state_36116__$1;
(statearr_36219_36331[(1)] = (21));

} else {
var statearr_36220_36332 = state_36116__$1;
(statearr_36220_36332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (52))){
var state_36116__$1 = state_36116;
var statearr_36221_36333 = state_36116__$1;
(statearr_36221_36333[(2)] = false);

(statearr_36221_36333[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (67))){
var state_36116__$1 = state_36116;
var statearr_36222_36334 = state_36116__$1;
(statearr_36222_36334[(2)] = true);

(statearr_36222_36334[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (71))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36223_36335 = state_36116__$1;
(statearr_36223_36335[(2)] = inst_35760);

(statearr_36223_36335[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (42))){
var state_36116__$1 = state_36116;
var statearr_36224_36336 = state_36116__$1;
(statearr_36224_36336[(2)] = false);

(statearr_36224_36336[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (80))){
var state_36116__$1 = state_36116;
var statearr_36225_36337 = state_36116__$1;
(statearr_36225_36337[(2)] = true);

(statearr_36225_36337[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (37))){
var inst_36103 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36226_36338 = state_36116__$1;
(statearr_36226_36338[(2)] = inst_36103);

(statearr_36226_36338[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (63))){
var inst_36099 = (state_36116[(2)]);
var state_36116__$1 = state_36116;
var statearr_36227_36339 = state_36116__$1;
(statearr_36227_36339[(2)] = inst_36099);

(statearr_36227_36339[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (8))){
var inst_35760 = (state_36116[(7)]);
var inst_35771 = inst_35760.cljs$lang$protocol_mask$partition0$;
var inst_35772 = (inst_35771 & (64));
var inst_35773 = inst_35760.cljs$core$ISeq$;
var inst_35774 = (inst_35772) || (inst_35773);
var state_36116__$1 = state_36116;
if(cljs.core.truth_(inst_35774)){
var statearr_36228_36340 = state_36116__$1;
(statearr_36228_36340[(1)] = (11));

} else {
var statearr_36229_36341 = state_36116__$1;
(statearr_36229_36341[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (49))){
var inst_35759 = (state_36116[(8)]);
var inst_35991 = cljs.core._EQ_.call(null,inst_35759,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_36116__$1 = state_36116;
if(inst_35991){
var statearr_36230_36342 = state_36116__$1;
(statearr_36230_36342[(1)] = (61));

} else {
var statearr_36231_36343 = state_36116__$1;
(statearr_36231_36343[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36117 === (84))){
var inst_35760 = (state_36116[(7)]);
var state_36116__$1 = state_36116;
var statearr_36232_36344 = state_36116__$1;
(statearr_36232_36344[(2)] = inst_35760);

(statearr_36232_36344[(1)] = (85));


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
});})(c__26726__auto__))
;
return ((function (switch__26703__auto__,c__26726__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26704__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26704__auto____0 = (function (){
var statearr_36236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36236[(0)] = cloudxmark$core$search_loop_$_state_machine__26704__auto__);

(statearr_36236[(1)] = (1));

return statearr_36236;
});
var cloudxmark$core$search_loop_$_state_machine__26704__auto____1 = (function (state_36116){
while(true){
var ret_value__26705__auto__ = (function (){try{while(true){
var result__26706__auto__ = switch__26703__auto__.call(null,state_36116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26706__auto__;
}
break;
}
}catch (e36237){if((e36237 instanceof Object)){
var ex__26707__auto__ = e36237;
var statearr_36238_36345 = state_36116;
(statearr_36238_36345[(5)] = ex__26707__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36346 = state_36116;
state_36116 = G__36346;
continue;
} else {
return ret_value__26705__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26704__auto__ = function(state_36116){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____1.call(this,state_36116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26704__auto____0;
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26704__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26704__auto__;
})()
;})(switch__26703__auto__,c__26726__auto__))
})();
var state__26728__auto__ = (function (){var statearr_36239 = f__26727__auto__.call(null);
(statearr_36239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26726__auto__);

return statearr_36239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26728__auto__);
});})(c__26726__auto__))
);

return c__26726__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468457854274