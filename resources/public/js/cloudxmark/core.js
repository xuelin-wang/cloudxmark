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
var idx_38893 = (0);
while(true){
var len1_38894 = b1.length;
if((cljs.core._EQ_.call(null,idx_38893,len1_38894)) || (cljs.core._EQ_.call(null,idx_38893,max_len))){
} else {
(b1[idx_38893] = ((b1[idx_38893]) ^ (b2[idx_38893])));

var G__38895 = (idx_38893 + (1));
idx_38893 = G__38895;
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
var args38898 = [];
var len__22618__auto___38901 = arguments.length;
var i__22619__auto___38902 = (0);
while(true){
if((i__22619__auto___38902 < len__22618__auto___38901)){
args38898.push((arguments[i__22619__auto___38902]));

var G__38903 = (i__22619__auto___38902 + (1));
i__22619__auto___38902 = G__38903;
continue;
} else {
}
break;
}

var G__38900 = args38898.length;
switch (G__38900) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38898.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__38896_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__38896_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__38897_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__38897_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__38905,_,p__38906){
var map__38907 = p__38905;
var map__38907__$1 = ((((!((map__38907 == null)))?((((map__38907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38907):map__38907);
var env = map__38907__$1;
var state = cljs.core.get.call(null,map__38907__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__38907__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__38908 = p__38906;
var map__38908__$1 = ((((!((map__38908 == null)))?((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38908):map__38908);
var query_ver = cljs.core.get.call(null,map__38908__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__38908__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__38911 = lst;
var map__38911__$1 = ((((!((map__38911 == null)))?((((map__38911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38911):map__38911);
var lsts = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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

var new_value_38913 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_38913);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__38914,_,p__38915){
var map__38916 = p__38914;
var map__38916__$1 = ((((!((map__38916 == null)))?((((map__38916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38916):map__38916);
var env = map__38916__$1;
var state = cljs.core.get.call(null,map__38916__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38917 = p__38915;
var map__38917__$1 = ((((!((map__38917 == null)))?((((map__38917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38917):map__38917);
var status = map__38917__$1;
var id = cljs.core.get.call(null,map__38917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38916,map__38916__$1,env,state,map__38917,map__38917__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__38916,map__38916__$1,env,state,map__38917,map__38917__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__38920,_,p__38921){
var map__38922 = p__38920;
var map__38922__$1 = ((((!((map__38922 == null)))?((((map__38922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38922):map__38922);
var env = map__38922__$1;
var state = cljs.core.get.call(null,map__38922__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38923 = p__38921;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var path = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38922,map__38922__$1,env,state,map__38923,map__38923__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__38922,map__38922__$1,env,state,map__38923,map__38923__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__38926,_,p__38927){
var map__38928 = p__38926;
var map__38928__$1 = ((((!((map__38928 == null)))?((((map__38928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38928):map__38928);
var env = map__38928__$1;
var state = cljs.core.get.call(null,map__38928__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38929 = p__38927;
var map__38929__$1 = ((((!((map__38929 == null)))?((((map__38929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38929):map__38929);
var data_map = map__38929__$1;
var lst_idx = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38928,map__38928__$1,env,state,map__38929,map__38929__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cljs.core.nth.call(null,lsts,lst_idx);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cljs.core.nth.call(null,cljs.core.get.call(null,lst,"items"),item_idx);
var orig_name = cljs.core.get.call(null,item,"name");
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,orig_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__38928,map__38928__$1,env,state,map__38929,map__38929__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__38932,_,p__38933){
var map__38934 = p__38932;
var map__38934__$1 = ((((!((map__38934 == null)))?((((map__38934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38934):map__38934);
var env = map__38934__$1;
var state = cljs.core.get.call(null,map__38934__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38935 = p__38933;
var map__38935__$1 = ((((!((map__38935 == null)))?((((map__38935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38935):map__38935);
var field_id = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38934,map__38934__$1,env,state,map__38935,map__38935__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__38934,map__38934__$1,env,state,map__38935,map__38935__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__38938,_,p__38939){
var map__38940 = p__38938;
var map__38940__$1 = ((((!((map__38940 == null)))?((((map__38940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38940):map__38940);
var env = map__38940__$1;
var state = cljs.core.get.call(null,map__38940__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38941 = p__38939;
var map__38941__$1 = ((((!((map__38941 == null)))?((((map__38941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38941):map__38941);
var data_map = map__38941__$1;
var user_id = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38940,map__38940__$1,env,state,map__38941,map__38941__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__38940,map__38940__$1,env,state,map__38941,map__38941__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__38944,_,p__38945){
var map__38946 = p__38944;
var map__38946__$1 = ((((!((map__38946 == null)))?((((map__38946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38946):map__38946);
var env = map__38946__$1;
var state = cljs.core.get.call(null,map__38946__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38947 = p__38945;
var map__38947__$1 = ((((!((map__38947 == null)))?((((map__38947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38947):map__38947);
var data_map = map__38947__$1;
var user_id = cljs.core.get.call(null,map__38947__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__38947__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38946,map__38946__$1,env,state,map__38947,map__38947__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__38946,map__38946__$1,env,state,map__38947,map__38947__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__38950,_,p__38951){
var map__38952 = p__38950;
var map__38952__$1 = ((((!((map__38952 == null)))?((((map__38952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38952):map__38952);
var env = map__38952__$1;
var state = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38953 = p__38951;
var map__38953__$1 = ((((!((map__38953 == null)))?((((map__38953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38953):map__38953);
var data_map = map__38953__$1;
var name = cljs.core.get.call(null,map__38953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__38953__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38952,map__38952__$1,env,state,map__38953,map__38953__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__38952,map__38952__$1,env,state,map__38953,map__38953__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__38956,_,p__38957){
var map__38958 = p__38956;
var map__38958__$1 = ((((!((map__38958 == null)))?((((map__38958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38958):map__38958);
var env = map__38958__$1;
var state = cljs.core.get.call(null,map__38958__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38959 = p__38957;
var map__38959__$1 = ((((!((map__38959 == null)))?((((map__38959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38959):map__38959);
var data_map = map__38959__$1;
var name = cljs.core.get.call(null,map__38959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__38959__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38958,map__38958__$1,env,state,map__38959,map__38959__$1,data_map,name,value){
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
});})(map__38958,map__38958__$1,env,state,map__38959,map__38959__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__38962,_,___$1){
var map__38963 = p__38962;
var map__38963__$1 = ((((!((map__38963 == null)))?((((map__38963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38963):map__38963);
var env = map__38963__$1;
var state = cljs.core.get.call(null,map__38963__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38963,map__38963__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__38963,map__38963__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__38965,_,p__38966){
var map__38967 = p__38965;
var map__38967__$1 = ((((!((map__38967 == null)))?((((map__38967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38967):map__38967);
var env = map__38967__$1;
var state = cljs.core.get.call(null,map__38967__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38968 = p__38966;
var map__38968__$1 = ((((!((map__38968 == null)))?((((map__38968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38968):map__38968);
var data_map = map__38968__$1;
var status = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__38967,map__38967__$1,env,state,map__38968,map__38968__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__38967,map__38967__$1,env,state,map__38968,map__38968__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args38971 = [];
var len__22618__auto___38974 = arguments.length;
var i__22619__auto___38975 = (0);
while(true){
if((i__22619__auto___38975 < len__22618__auto___38974)){
args38971.push((arguments[i__22619__auto___38975]));

var G__38976 = (i__22619__auto___38975 + (1));
i__22619__auto___38975 = G__38976;
continue;
} else {
}
break;
}

var G__38973 = args38971.length;
switch (G__38973) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38971.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__38978){
var map__38984 = p__38978;
var map__38984__$1 = ((((!((map__38984 == null)))?((((map__38984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38984):map__38984);
var info = cljs.core.get.call(null,map__38984__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__38984__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__38984__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__38986 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__38986,(0),null);
var msg = cljs.core.nth.call(null,vec__38986,(1),null);
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
var map__38991 = lst;
var map__38991__$1 = ((((!((map__38991 == null)))?((((map__38991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38991):map__38991);
var lsts = cljs.core.get.call(null,map__38991__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__38991__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__38991__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__38991,map__38991__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__38991,map__38991__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__38995 = lst;
var map__38995__$1 = ((((!((map__38995 == null)))?((((map__38995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38995):map__38995);
var status = cljs.core.get.call(null,map__38995__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__39001 = (function (){var G__39004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39004) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__39001,(0),null);
var query_key = cljs.core.nth.call(null,vec__39001,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__39001,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__39001,elem_key,query_key))
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

var x39010_39022 = cloudxmark.core.Lsts.prototype;
x39010_39022.componentWillUpdate = ((function (x39010_39022){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
if(((!((this__26858__auto__ == null)))?(((false) || (this__26858__auto__.om$next$Ident$))?true:false):false)){
var ident__26862__auto___39023 = om.next.ident.call(null,this__26858__auto__,om.next.props.call(null,this__26858__auto__));
var next_ident__26863__auto___39024 = om.next.ident.call(null,this__26858__auto__,om.next._next_props.call(null,next_props__26859__auto__,this__26858__auto__));
if(cljs.core.not_EQ_.call(null,ident__26862__auto___39023,next_ident__26863__auto___39024)){
var idxr__26864__auto___39025 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26864__auto___39025 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26864__auto___39025),((function (idxr__26864__auto___39025,ident__26862__auto___39023,next_ident__26863__auto___39024,this__26858__auto__,x39010_39022){
return (function (indexes__26865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26862__auto___39023], null),cljs.core.disj,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26863__auto___39024], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26858__auto__);
});})(idxr__26864__auto___39025,ident__26862__auto___39023,next_ident__26863__auto___39024,this__26858__auto__,x39010_39022))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26858__auto__);
});})(x39010_39022))
;

x39010_39022.shouldComponentUpdate = ((function (x39010_39022){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
var next_children__26861__auto__ = next_props__26859__auto__.children;
var next_props__26859__auto____$1 = goog.object.get(next_props__26859__auto__,"omcljs$value");
var next_props__26859__auto____$2 = (function (){var G__39012 = next_props__26859__auto____$1;
if((next_props__26859__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__39012);
} else {
return G__39012;
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
});})(x39010_39022))
;

x39010_39022.componentWillUnmount = ((function (x39010_39022){
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
});})(x39010_39022))
;

x39010_39022.componentDidUpdate = ((function (x39010_39022){
return (function (prev_props__26866__auto__,prev_state__26867__auto__){
var this__26858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26858__auto__);
});})(x39010_39022))
;

x39010_39022.isMounted = ((function (x39010_39022){
return (function (){
var this__26858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39010_39022))
;

x39010_39022.componentWillMount = ((function (x39010_39022){
return (function (){
var this__26858__auto__ = this;
var indexer__26868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x39010_39022))
;

x39010_39022.render = ((function (x39010_39022){
return (function (){
var this__26857__auto__ = this;
var this$ = this__26857__auto__;
var _STAR_reconciler_STAR_39013 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39014 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39015 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39016 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39017 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26857__auto__);

om.next._STAR_parent_STAR_ = this__26857__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__39018 = lst;
var map__39018__$1 = ((((!((map__39018 == null)))?((((map__39018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39018):map__39018);
var lsts = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__39018__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39017;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39016;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39015;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39014;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39013;
}});})(x39010_39022))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x39020_39026 = cloudxmark.core.Lsts;
x39020_39026.om$next$IQueryParams$ = true;

x39020_39026.om$next$IQueryParams$params$arity$1 = ((function (x39020_39026){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x39020_39026))
;

x39020_39026.om$next$IQuery$ = true;

x39020_39026.om$next$IQuery$query$arity$1 = ((function (x39020_39026){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x39020_39026))
;


var x39021_39027 = cloudxmark.core.Lsts.prototype;
x39021_39027.om$next$IQueryParams$ = true;

x39021_39027.om$next$IQueryParams$params$arity$1 = ((function (x39021_39027){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x39021_39027))
;

x39021_39027.om$next$IQuery$ = true;

x39021_39027.om$next$IQuery$query$arity$1 = ((function (x39021_39027){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x39021_39027))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26959__auto__,writer__26960__auto__,opt__26961__auto__){
return cljs.core._write.call(null,writer__26960__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__39036,cb){
var map__39037 = p__39036;
var map__39037__$1 = ((((!((map__39037 == null)))?((((map__39037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39037):map__39037);
var lst_search = cljs.core.get.call(null,map__39037__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__39039 = om.next.query__GT_ast.call(null,lst_search);
var map__39039__$1 = ((((!((map__39039 == null)))?((((map__39039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39039):map__39039);
var vec__39040 = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__39040,(0),null);
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
var map__39048 = result;
var map__39048__$1 = ((((!((map__39048 == null)))?((((map__39048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39048):map__39048);
var lsts = cljs.core.get.call(null,map__39048__$1,"lsts");
var user_id = cljs.core.get.call(null,map__39048__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__39048__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__39049 = json_status;
var map__39049__$1 = ((((!((map__39049 == null)))?((((map__39049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39049):map__39049);
var info = cljs.core.get.call(null,map__39049__$1,"info");
var warn = cljs.core.get.call(null,map__39049__$1,"warn");
var error = cljs.core.get.call(null,map__39049__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__39054 = json_status;
var map__39054__$1 = ((((!((map__39054 == null)))?((((map__39054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39054):map__39054);
var info = cljs.core.get.call(null,map__39054__$1,"info");
var warn = cljs.core.get.call(null,map__39054__$1,"warn");
var error = cljs.core.get.call(null,map__39054__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26726__auto__){
return (function (){
var f__26727__auto__ = (function (){var switch__26703__auto__ = ((function (c__26726__auto__){
return (function (state_39928){
var state_val_39929 = (state_39928[(1)]);
if((state_val_39929 === (65))){
var state_39928__$1 = state_39928;
var statearr_39930_40052 = state_39928__$1;
(statearr_39930_40052[(2)] = false);

(statearr_39930_40052[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (70))){
var inst_39572 = (state_39928[(7)]);
var inst_39822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_39931_40053 = state_39928__$1;
(statearr_39931_40053[(2)] = inst_39822);

(statearr_39931_40053[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (62))){
var inst_39571 = (state_39928[(8)]);
var inst_39856 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_39928__$1 = state_39928;
if(inst_39856){
var statearr_39932_40054 = state_39928__$1;
(statearr_39932_40054[(1)] = (74));

} else {
var statearr_39933_40055 = state_39928__$1;
(statearr_39933_40055[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (74))){
var inst_39572 = (state_39928[(7)]);
var inst_39859 = [cljs.core.str("lst query data:"),cljs.core.str(inst_39572)].join('');
var inst_39860 = cljs.core.println.call(null,inst_39859);
var inst_39862 = (inst_39572 == null);
var inst_39863 = cljs.core.not.call(null,inst_39862);
var state_39928__$1 = (function (){var statearr_39934 = state_39928;
(statearr_39934[(9)] = inst_39860);

return statearr_39934;
})();
if(inst_39863){
var statearr_39935_40056 = state_39928__$1;
(statearr_39935_40056[(1)] = (77));

} else {
var statearr_39936_40057 = state_39928__$1;
(statearr_39936_40057[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (7))){
var inst_39921 = (state_39928[(2)]);
var state_39928__$1 = (function (){var statearr_39937 = state_39928;
(statearr_39937[(10)] = inst_39921);

return statearr_39937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(90),c);
} else {
if((state_val_39929 === (59))){
var inst_39774 = (state_39928[(2)]);
var inst_39775 = cljs.core.get.call(null,inst_39774,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_39776 = cljs.core.get.call(null,inst_39774,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_39777 = cljs.core.get.call(null,inst_39774,new cljs.core.Keyword(null,"value","value",305978217));
var inst_39778 = encodeURIComponent(inst_39775);
var inst_39779 = encodeURIComponent(inst_39776);
var inst_39780 = encodeURIComponent(inst_39777);
var inst_39781 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_39778),cljs.core.str("&name="),cljs.core.str(inst_39779),cljs.core.str("&value="),cljs.core.str(inst_39780)].join('');
var inst_39782 = cloudxmark.core.jsonp.call(null,inst_39781);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(60),inst_39782);
} else {
if((state_val_39929 === (86))){
var inst_39882 = (state_39928[(11)]);
var inst_39885 = (state_39928[(2)]);
var inst_39886 = cljs.core.js__GT_clj.call(null,inst_39885);
var inst_39887 = cloudxmark.core.convert_json_lsts_result.call(null,inst_39886,inst_39882,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_39888 = cljs.core.List.EMPTY;
var inst_39889 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_39890 = cljs.core._conj.call(null,inst_39888,inst_39889);
var inst_39891 = cljs.core.List.EMPTY;
var inst_39892 = cljs.core._conj.call(null,inst_39891,inst_39887);
var inst_39893 = cljs.core.concat.call(null,inst_39890,inst_39892);
var inst_39894 = cljs.core.seq.call(null,inst_39893);
var inst_39895 = cljs.core.sequence.call(null,inst_39894);
var inst_39896 = cljs.core.List.EMPTY;
var inst_39897 = cljs.core._conj.call(null,inst_39896,inst_39895);
var inst_39898 = cljs.core.concat.call(null,inst_39897);
var inst_39899 = cljs.core.seq.call(null,inst_39898);
var inst_39900 = cljs.core.sequence.call(null,inst_39899);
var inst_39901 = cljs.core.vec.call(null,inst_39900);
var inst_39902 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39901);
var state_39928__$1 = state_39928;
var statearr_39938_40058 = state_39928__$1;
(statearr_39938_40058[(2)] = inst_39902);

(statearr_39938_40058[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (20))){
var inst_39919 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39939_40059 = state_39928__$1;
(statearr_39939_40059[(2)] = inst_39919);

(statearr_39939_40059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (72))){
var inst_39825 = (state_39928[(2)]);
var inst_39826 = cljs.core.get.call(null,inst_39825,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_39827 = cljs.core.get.call(null,inst_39825,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_39828 = cljs.core.get.call(null,inst_39825,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_39829 = cljs.core.get.call(null,inst_39825,new cljs.core.Keyword(null,"value","value",305978217));
var inst_39830 = encodeURIComponent(inst_39826);
var inst_39831 = encodeURIComponent(inst_39827);
var inst_39832 = encodeURIComponent(inst_39828);
var inst_39833 = encodeURIComponent(inst_39829);
var inst_39834 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_39830),cljs.core.str("&orig-name="),cljs.core.str(inst_39831),cljs.core.str("&col-name="),cljs.core.str(inst_39832),cljs.core.str("&value="),cljs.core.str(inst_39833)].join('');
var inst_39835 = cloudxmark.core.jsonp.call(null,inst_39834);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(73),inst_39835);
} else {
if((state_val_39929 === (58))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_39940_40060 = state_39928__$1;
(statearr_39940_40060[(2)] = inst_39572);

(statearr_39940_40060[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (60))){
var inst_39784 = (state_39928[(2)]);
var inst_39785 = cljs.core.js__GT_clj.call(null,inst_39784);
var inst_39786 = cloudxmark.core.convert_json_lsts_result.call(null,inst_39785,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_39787 = cljs.core.List.EMPTY;
var inst_39788 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_39789 = cljs.core._conj.call(null,inst_39787,inst_39788);
var inst_39790 = cljs.core.List.EMPTY;
var inst_39791 = cljs.core._conj.call(null,inst_39790,inst_39786);
var inst_39792 = cljs.core.concat.call(null,inst_39789,inst_39791);
var inst_39793 = cljs.core.seq.call(null,inst_39792);
var inst_39794 = cljs.core.sequence.call(null,inst_39793);
var inst_39795 = cljs.core.List.EMPTY;
var inst_39796 = cljs.core._conj.call(null,inst_39795,inst_39794);
var inst_39797 = cljs.core.concat.call(null,inst_39796);
var inst_39798 = cljs.core.seq.call(null,inst_39797);
var inst_39799 = cljs.core.sequence.call(null,inst_39798);
var inst_39800 = cljs.core.vec.call(null,inst_39799);
var inst_39801 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39800);
var state_39928__$1 = state_39928;
var statearr_39941_40061 = state_39928__$1;
(statearr_39941_40061[(2)] = inst_39801);

(statearr_39941_40061[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (27))){
var inst_39572 = (state_39928[(7)]);
var inst_39648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_39942_40062 = state_39928__$1;
(statearr_39942_40062[(2)] = inst_39648);

(statearr_39942_40062[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (1))){
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(2),c);
} else {
if((state_val_39929 === (69))){
var inst_39817 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39943_40063 = state_39928__$1;
(statearr_39943_40063[(2)] = inst_39817);

(statearr_39943_40063[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (24))){
var state_39928__$1 = state_39928;
var statearr_39944_40064 = state_39928__$1;
(statearr_39944_40064[(2)] = true);

(statearr_39944_40064[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (55))){
var state_39928__$1 = state_39928;
var statearr_39945_40065 = state_39928__$1;
(statearr_39945_40065[(2)] = false);

(statearr_39945_40065[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (85))){
var inst_39880 = (state_39928[(2)]);
var inst_39881 = cljs.core.get.call(null,inst_39880,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_39882 = cljs.core.get.call(null,inst_39880,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_39883 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_39928__$1 = (function (){var statearr_39946 = state_39928;
(statearr_39946[(11)] = inst_39882);

(statearr_39946[(12)] = inst_39881);

return statearr_39946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(86),inst_39883);
} else {
if((state_val_39929 === (39))){
var state_39928__$1 = state_39928;
var statearr_39947_40066 = state_39928__$1;
(statearr_39947_40066[(2)] = false);

(statearr_39947_40066[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (88))){
var state_39928__$1 = state_39928;
var statearr_39948_40067 = state_39928__$1;
(statearr_39948_40067[(2)] = null);

(statearr_39948_40067[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (46))){
var inst_39725 = (state_39928[(2)]);
var inst_39726 = cljs.core.get.call(null,inst_39725,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_39727 = cljs.core.get.call(null,inst_39725,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_39728 = encodeURIComponent(inst_39726);
var inst_39729 = encodeURIComponent(inst_39727);
var inst_39730 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_39728),cljs.core.str("&desc="),cljs.core.str(inst_39729)].join('');
var inst_39731 = cloudxmark.core.jsonp.call(null,inst_39730);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(47),inst_39731);
} else {
if((state_val_39929 === (4))){
var inst_39926 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39928__$1,inst_39926);
} else {
if((state_val_39929 === (77))){
var inst_39572 = (state_39928[(7)]);
var inst_39865 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39866 = (inst_39865 & (64));
var inst_39867 = inst_39572.cljs$core$ISeq$;
var inst_39868 = (inst_39866) || (inst_39867);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39868)){
var statearr_39949_40068 = state_39928__$1;
(statearr_39949_40068[(1)] = (80));

} else {
var statearr_39950_40069 = state_39928__$1;
(statearr_39950_40069[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (54))){
var state_39928__$1 = state_39928;
var statearr_39951_40070 = state_39928__$1;
(statearr_39951_40070[(2)] = true);

(statearr_39951_40070[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (15))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_39952_40071 = state_39928__$1;
(statearr_39952_40071[(2)] = inst_39572);

(statearr_39952_40071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (48))){
var inst_39572 = (state_39928[(7)]);
var inst_39756 = (inst_39572 == null);
var inst_39757 = cljs.core.not.call(null,inst_39756);
var state_39928__$1 = state_39928;
if(inst_39757){
var statearr_39953_40072 = state_39928__$1;
(statearr_39953_40072[(1)] = (51));

} else {
var statearr_39954_40073 = state_39928__$1;
(statearr_39954_40073[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (50))){
var inst_39913 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39955_40074 = state_39928__$1;
(statearr_39955_40074[(2)] = inst_39913);

(statearr_39955_40074[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (75))){
var state_39928__$1 = state_39928;
var statearr_39956_40075 = state_39928__$1;
(statearr_39956_40075[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (21))){
var inst_39572 = (state_39928[(7)]);
var inst_39636 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39637 = (inst_39636 & (64));
var inst_39638 = inst_39572.cljs$core$ISeq$;
var inst_39639 = (inst_39637) || (inst_39638);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39639)){
var statearr_39958_40076 = state_39928__$1;
(statearr_39958_40076[(1)] = (24));

} else {
var statearr_39959_40077 = state_39928__$1;
(statearr_39959_40077[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (31))){
var inst_39682 = cloudxmark.core.jsonp.call(null,"/logout");
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(34),inst_39682);
} else {
if((state_val_39929 === (32))){
var inst_39571 = (state_39928[(8)]);
var inst_39703 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_39928__$1 = state_39928;
if(inst_39703){
var statearr_39960_40078 = state_39928__$1;
(statearr_39960_40078[(1)] = (35));

} else {
var statearr_39961_40079 = state_39928__$1;
(statearr_39961_40079[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (40))){
var inst_39720 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39720)){
var statearr_39962_40080 = state_39928__$1;
(statearr_39962_40080[(1)] = (44));

} else {
var statearr_39963_40081 = state_39928__$1;
(statearr_39963_40081[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (56))){
var inst_39766 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39964_40082 = state_39928__$1;
(statearr_39964_40082[(2)] = inst_39766);

(statearr_39964_40082[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (33))){
var inst_39917 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39965_40083 = state_39928__$1;
(statearr_39965_40083[(2)] = inst_39917);

(statearr_39965_40083[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (13))){
var inst_39590 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39966_40084 = state_39928__$1;
(statearr_39966_40084[(2)] = inst_39590);

(statearr_39966_40084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (22))){
var state_39928__$1 = state_39928;
var statearr_39967_40085 = state_39928__$1;
(statearr_39967_40085[(2)] = false);

(statearr_39967_40085[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (90))){
var inst_39923 = (state_39928[(2)]);
var inst_39566 = inst_39923;
var state_39928__$1 = (function (){var statearr_39968 = state_39928;
(statearr_39968[(13)] = inst_39566);

return statearr_39968;
})();
var statearr_39969_40086 = state_39928__$1;
(statearr_39969_40086[(2)] = null);

(statearr_39969_40086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (36))){
var inst_39571 = (state_39928[(8)]);
var inst_39752 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_39928__$1 = state_39928;
if(inst_39752){
var statearr_39970_40087 = state_39928__$1;
(statearr_39970_40087[(1)] = (48));

} else {
var statearr_39971_40088 = state_39928__$1;
(statearr_39971_40088[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (41))){
var state_39928__$1 = state_39928;
var statearr_39972_40089 = state_39928__$1;
(statearr_39972_40089[(2)] = true);

(statearr_39972_40089[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (89))){
var inst_39907 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39973_40090 = state_39928__$1;
(statearr_39973_40090[(2)] = inst_39907);

(statearr_39973_40090[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (43))){
var inst_39717 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39974_40091 = state_39928__$1;
(statearr_39974_40091[(2)] = inst_39717);

(statearr_39974_40091[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (61))){
var inst_39572 = (state_39928[(7)]);
var inst_39807 = (inst_39572 == null);
var inst_39808 = cljs.core.not.call(null,inst_39807);
var state_39928__$1 = state_39928;
if(inst_39808){
var statearr_39975_40092 = state_39928__$1;
(statearr_39975_40092[(1)] = (64));

} else {
var statearr_39976_40093 = state_39928__$1;
(statearr_39976_40093[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (29))){
var inst_39651 = (state_39928[(2)]);
var inst_39652 = cljs.core.get.call(null,inst_39651,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_39653 = cljs.core.get.call(null,inst_39651,new cljs.core.Keyword(null,"password","password",417022471));
var inst_39654 = cljs.core.get.call(null,inst_39651,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_39655 = cloudxmark.core.enc_password.call(null,inst_39653);
var inst_39656 = encodeURIComponent(inst_39652);
var inst_39657 = encodeURIComponent(inst_39655);
var inst_39658 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_39656),cljs.core.str("&pass="),cljs.core.str(inst_39657)].join('');
var inst_39659 = cloudxmark.core.jsonp.call(null,inst_39658);
var state_39928__$1 = (function (){var statearr_39977 = state_39928;
(statearr_39977[(14)] = inst_39654);

return statearr_39977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(30),inst_39659);
} else {
if((state_val_39929 === (44))){
var inst_39572 = (state_39928[(7)]);
var inst_39722 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_39978_40094 = state_39928__$1;
(statearr_39978_40094[(2)] = inst_39722);

(statearr_39978_40094[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (6))){
var inst_39571 = (state_39928[(8)]);
var inst_39629 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_39928__$1 = state_39928;
if(inst_39629){
var statearr_39979_40095 = state_39928__$1;
(statearr_39979_40095[(1)] = (18));

} else {
var statearr_39980_40096 = state_39928__$1;
(statearr_39980_40096[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (28))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_39981_40097 = state_39928__$1;
(statearr_39981_40097[(2)] = inst_39572);

(statearr_39981_40097[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (64))){
var inst_39572 = (state_39928[(7)]);
var inst_39810 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39811 = (inst_39810 & (64));
var inst_39812 = inst_39572.cljs$core$ISeq$;
var inst_39813 = (inst_39811) || (inst_39812);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39813)){
var statearr_39982_40098 = state_39928__$1;
(statearr_39982_40098[(1)] = (67));

} else {
var statearr_39983_40099 = state_39928__$1;
(statearr_39983_40099[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (51))){
var inst_39572 = (state_39928[(7)]);
var inst_39759 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39760 = (inst_39759 & (64));
var inst_39761 = inst_39572.cljs$core$ISeq$;
var inst_39762 = (inst_39760) || (inst_39761);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39762)){
var statearr_39984_40100 = state_39928__$1;
(statearr_39984_40100[(1)] = (54));

} else {
var statearr_39985_40101 = state_39928__$1;
(statearr_39985_40101[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (25))){
var state_39928__$1 = state_39928;
var statearr_39986_40102 = state_39928__$1;
(statearr_39986_40102[(2)] = false);

(statearr_39986_40102[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (34))){
var inst_39684 = (state_39928[(2)]);
var inst_39685 = cljs.core.js__GT_clj.call(null,inst_39684);
var inst_39686 = cloudxmark.core.convert_json_status.call(null,inst_39685,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_39687 = cljs.core.List.EMPTY;
var inst_39688 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_39689 = cljs.core._conj.call(null,inst_39687,inst_39688);
var inst_39690 = cljs.core.List.EMPTY;
var inst_39691 = cljs.core._conj.call(null,inst_39690,inst_39686);
var inst_39692 = cljs.core.concat.call(null,inst_39689,inst_39691);
var inst_39693 = cljs.core.seq.call(null,inst_39692);
var inst_39694 = cljs.core.sequence.call(null,inst_39693);
var inst_39695 = cljs.core.List.EMPTY;
var inst_39696 = cljs.core._conj.call(null,inst_39695,inst_39694);
var inst_39697 = cljs.core.concat.call(null,inst_39696);
var inst_39698 = cljs.core.seq.call(null,inst_39697);
var inst_39699 = cljs.core.sequence.call(null,inst_39698);
var inst_39700 = cljs.core.vec.call(null,inst_39699);
var inst_39701 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39700);
var state_39928__$1 = state_39928;
var statearr_39987_40103 = state_39928__$1;
(statearr_39987_40103[(2)] = inst_39701);

(statearr_39987_40103[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (17))){
var inst_39600 = (state_39928[(15)]);
var inst_39601 = (state_39928[(16)]);
var inst_39607 = (state_39928[(2)]);
var inst_39608 = cljs.core.js__GT_clj.call(null,inst_39607);
var inst_39609 = cloudxmark.core.gen_key_bytes.call(null,inst_39600);
var inst_39610 = cloudxmark.core.create_aes_cbc.call(null,inst_39609);
var inst_39611 = cloudxmark.core.convert_json_lsts_result.call(null,inst_39608,inst_39601,new cljs.core.Keyword(null,"login","login",55217519));
var inst_39612 = cljs.core.assoc.call(null,inst_39611,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_39610);
var inst_39613 = cljs.core.List.EMPTY;
var inst_39614 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_39615 = cljs.core._conj.call(null,inst_39613,inst_39614);
var inst_39616 = cljs.core.List.EMPTY;
var inst_39617 = cljs.core._conj.call(null,inst_39616,inst_39612);
var inst_39618 = cljs.core.concat.call(null,inst_39615,inst_39617);
var inst_39619 = cljs.core.seq.call(null,inst_39618);
var inst_39620 = cljs.core.sequence.call(null,inst_39619);
var inst_39621 = cljs.core.List.EMPTY;
var inst_39622 = cljs.core._conj.call(null,inst_39621,inst_39620);
var inst_39623 = cljs.core.concat.call(null,inst_39622);
var inst_39624 = cljs.core.seq.call(null,inst_39623);
var inst_39625 = cljs.core.sequence.call(null,inst_39624);
var inst_39626 = cljs.core.vec.call(null,inst_39625);
var inst_39627 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39626);
var state_39928__$1 = state_39928;
var statearr_39988_40104 = state_39928__$1;
(statearr_39988_40104[(2)] = inst_39627);

(statearr_39988_40104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (3))){
var inst_39571 = (state_39928[(8)]);
var inst_39566 = (state_39928[(13)]);
var inst_39571__$1 = cljs.core.nth.call(null,inst_39566,(0),null);
var inst_39572 = cljs.core.nth.call(null,inst_39566,(1),null);
var inst_39573 = cljs.core.nth.call(null,inst_39566,(2),null);
var inst_39574 = cljs.core._EQ_.call(null,inst_39571__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_39928__$1 = (function (){var statearr_39989 = state_39928;
(statearr_39989[(8)] = inst_39571__$1);

(statearr_39989[(7)] = inst_39572);

(statearr_39989[(17)] = inst_39573);

return statearr_39989;
})();
if(inst_39574){
var statearr_39990_40105 = state_39928__$1;
(statearr_39990_40105[(1)] = (5));

} else {
var statearr_39991_40106 = state_39928__$1;
(statearr_39991_40106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (12))){
var state_39928__$1 = state_39928;
var statearr_39992_40107 = state_39928__$1;
(statearr_39992_40107[(2)] = false);

(statearr_39992_40107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (2))){
var inst_39562 = (state_39928[(2)]);
var inst_39563 = cljs.core.nth.call(null,inst_39562,(0),null);
var inst_39564 = cljs.core.nth.call(null,inst_39562,(1),null);
var inst_39565 = cljs.core.nth.call(null,inst_39562,(2),null);
var inst_39566 = inst_39562;
var state_39928__$1 = (function (){var statearr_39993 = state_39928;
(statearr_39993[(18)] = inst_39563);

(statearr_39993[(13)] = inst_39566);

(statearr_39993[(19)] = inst_39565);

(statearr_39993[(20)] = inst_39564);

return statearr_39993;
})();
var statearr_39994_40108 = state_39928__$1;
(statearr_39994_40108[(2)] = null);

(statearr_39994_40108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (66))){
var inst_39820 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39820)){
var statearr_39995_40109 = state_39928__$1;
(statearr_39995_40109[(1)] = (70));

} else {
var statearr_39996_40110 = state_39928__$1;
(statearr_39996_40110[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (23))){
var inst_39646 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39646)){
var statearr_39997_40111 = state_39928__$1;
(statearr_39997_40111[(1)] = (27));

} else {
var statearr_39998_40112 = state_39928__$1;
(statearr_39998_40112[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (47))){
var inst_39733 = (state_39928[(2)]);
var inst_39734 = cljs.core.js__GT_clj.call(null,inst_39733);
var inst_39735 = cloudxmark.core.convert_json_lsts_result.call(null,inst_39734,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_39736 = cljs.core.List.EMPTY;
var inst_39737 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_39738 = cljs.core._conj.call(null,inst_39736,inst_39737);
var inst_39739 = cljs.core.List.EMPTY;
var inst_39740 = cljs.core._conj.call(null,inst_39739,inst_39735);
var inst_39741 = cljs.core.concat.call(null,inst_39738,inst_39740);
var inst_39742 = cljs.core.seq.call(null,inst_39741);
var inst_39743 = cljs.core.sequence.call(null,inst_39742);
var inst_39744 = cljs.core.List.EMPTY;
var inst_39745 = cljs.core._conj.call(null,inst_39744,inst_39743);
var inst_39746 = cljs.core.concat.call(null,inst_39745);
var inst_39747 = cljs.core.seq.call(null,inst_39746);
var inst_39748 = cljs.core.sequence.call(null,inst_39747);
var inst_39749 = cljs.core.vec.call(null,inst_39748);
var inst_39750 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39749);
var state_39928__$1 = state_39928;
var statearr_39999_40113 = state_39928__$1;
(statearr_39999_40113[(2)] = inst_39750);

(statearr_39999_40113[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (35))){
var inst_39572 = (state_39928[(7)]);
var inst_39707 = (inst_39572 == null);
var inst_39708 = cljs.core.not.call(null,inst_39707);
var state_39928__$1 = state_39928;
if(inst_39708){
var statearr_40000_40114 = state_39928__$1;
(statearr_40000_40114[(1)] = (38));

} else {
var statearr_40001_40115 = state_39928__$1;
(statearr_40001_40115[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (82))){
var inst_39872 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_40002_40116 = state_39928__$1;
(statearr_40002_40116[(2)] = inst_39872);

(statearr_40002_40116[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (76))){
var inst_39909 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_40003_40117 = state_39928__$1;
(statearr_40003_40117[(2)] = inst_39909);

(statearr_40003_40117[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (19))){
var inst_39571 = (state_39928[(8)]);
var inst_39680 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_39928__$1 = state_39928;
if(inst_39680){
var statearr_40004_40118 = state_39928__$1;
(statearr_40004_40118[(1)] = (31));

} else {
var statearr_40005_40119 = state_39928__$1;
(statearr_40005_40119[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (57))){
var inst_39572 = (state_39928[(7)]);
var inst_39771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_40006_40120 = state_39928__$1;
(statearr_40006_40120[(2)] = inst_39771);

(statearr_40006_40120[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (68))){
var state_39928__$1 = state_39928;
var statearr_40007_40121 = state_39928__$1;
(statearr_40007_40121[(2)] = false);

(statearr_40007_40121[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (11))){
var state_39928__$1 = state_39928;
var statearr_40008_40122 = state_39928__$1;
(statearr_40008_40122[(2)] = true);

(statearr_40008_40122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (9))){
var state_39928__$1 = state_39928;
var statearr_40009_40123 = state_39928__$1;
(statearr_40009_40123[(2)] = false);

(statearr_40009_40123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (5))){
var inst_39572 = (state_39928[(7)]);
var inst_39577 = [cljs.core.str("lst login data:"),cljs.core.str(inst_39572)].join('');
var inst_39578 = cljs.core.println.call(null,inst_39577);
var inst_39580 = (inst_39572 == null);
var inst_39581 = cljs.core.not.call(null,inst_39580);
var state_39928__$1 = (function (){var statearr_40010 = state_39928;
(statearr_40010[(21)] = inst_39578);

return statearr_40010;
})();
if(inst_39581){
var statearr_40011_40124 = state_39928__$1;
(statearr_40011_40124[(1)] = (8));

} else {
var statearr_40012_40125 = state_39928__$1;
(statearr_40012_40125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (83))){
var inst_39572 = (state_39928[(7)]);
var inst_39877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_40013_40126 = state_39928__$1;
(statearr_40013_40126[(2)] = inst_39877);

(statearr_40013_40126[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (14))){
var inst_39572 = (state_39928[(7)]);
var inst_39595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39572);
var state_39928__$1 = state_39928;
var statearr_40014_40127 = state_39928__$1;
(statearr_40014_40127[(2)] = inst_39595);

(statearr_40014_40127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (45))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_40015_40128 = state_39928__$1;
(statearr_40015_40128[(2)] = inst_39572);

(statearr_40015_40128[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (53))){
var inst_39769 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39769)){
var statearr_40016_40129 = state_39928__$1;
(statearr_40016_40129[(1)] = (57));

} else {
var statearr_40017_40130 = state_39928__$1;
(statearr_40017_40130[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (78))){
var state_39928__$1 = state_39928;
var statearr_40018_40131 = state_39928__$1;
(statearr_40018_40131[(2)] = false);

(statearr_40018_40131[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (26))){
var inst_39643 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_40019_40132 = state_39928__$1;
(statearr_40019_40132[(2)] = inst_39643);

(statearr_40019_40132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (16))){
var inst_39600 = (state_39928[(15)]);
var inst_39598 = (state_39928[(2)]);
var inst_39599 = cljs.core.get.call(null,inst_39598,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_39600__$1 = cljs.core.get.call(null,inst_39598,new cljs.core.Keyword(null,"password","password",417022471));
var inst_39601 = cljs.core.get.call(null,inst_39598,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_39602 = encodeURIComponent(inst_39599);
var inst_39603 = encodeURIComponent(inst_39600__$1);
var inst_39604 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_39602),cljs.core.str("&pass="),cljs.core.str(inst_39603)].join('');
var inst_39605 = cloudxmark.core.jsonp.call(null,inst_39604);
var state_39928__$1 = (function (){var statearr_40020 = state_39928;
(statearr_40020[(15)] = inst_39600__$1);

(statearr_40020[(16)] = inst_39601);

return statearr_40020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39928__$1,(17),inst_39605);
} else {
if((state_val_39929 === (81))){
var state_39928__$1 = state_39928;
var statearr_40021_40133 = state_39928__$1;
(statearr_40021_40133[(2)] = false);

(statearr_40021_40133[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (79))){
var inst_39875 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39875)){
var statearr_40022_40134 = state_39928__$1;
(statearr_40022_40134[(1)] = (83));

} else {
var statearr_40023_40135 = state_39928__$1;
(statearr_40023_40135[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (38))){
var inst_39572 = (state_39928[(7)]);
var inst_39710 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39711 = (inst_39710 & (64));
var inst_39712 = inst_39572.cljs$core$ISeq$;
var inst_39713 = (inst_39711) || (inst_39712);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39713)){
var statearr_40024_40136 = state_39928__$1;
(statearr_40024_40136[(1)] = (41));

} else {
var statearr_40025_40137 = state_39928__$1;
(statearr_40025_40137[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (87))){
var state_39928__$1 = state_39928;
var statearr_40026_40138 = state_39928__$1;
(statearr_40026_40138[(2)] = null);

(statearr_40026_40138[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (30))){
var inst_39661 = (state_39928[(2)]);
var inst_39662 = cljs.core.js__GT_clj.call(null,inst_39661);
var inst_39663 = cloudxmark.core.convert_json_status.call(null,inst_39662,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_39664 = cljs.core.List.EMPTY;
var inst_39665 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_39666 = cljs.core._conj.call(null,inst_39664,inst_39665);
var inst_39667 = cljs.core.List.EMPTY;
var inst_39668 = cljs.core._conj.call(null,inst_39667,inst_39663);
var inst_39669 = cljs.core.concat.call(null,inst_39666,inst_39668);
var inst_39670 = cljs.core.seq.call(null,inst_39669);
var inst_39671 = cljs.core.sequence.call(null,inst_39670);
var inst_39672 = cljs.core.List.EMPTY;
var inst_39673 = cljs.core._conj.call(null,inst_39672,inst_39671);
var inst_39674 = cljs.core.concat.call(null,inst_39673);
var inst_39675 = cljs.core.seq.call(null,inst_39674);
var inst_39676 = cljs.core.sequence.call(null,inst_39675);
var inst_39677 = cljs.core.vec.call(null,inst_39676);
var inst_39678 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39677);
var state_39928__$1 = state_39928;
var statearr_40027_40139 = state_39928__$1;
(statearr_40027_40139[(2)] = inst_39678);

(statearr_40027_40139[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (73))){
var inst_39837 = (state_39928[(2)]);
var inst_39838 = cljs.core.js__GT_clj.call(null,inst_39837);
var inst_39839 = cloudxmark.core.convert_json_lsts_result.call(null,inst_39838,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_39840 = cljs.core.List.EMPTY;
var inst_39841 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_39842 = cljs.core._conj.call(null,inst_39840,inst_39841);
var inst_39843 = cljs.core.List.EMPTY;
var inst_39844 = cljs.core._conj.call(null,inst_39843,inst_39839);
var inst_39845 = cljs.core.concat.call(null,inst_39842,inst_39844);
var inst_39846 = cljs.core.seq.call(null,inst_39845);
var inst_39847 = cljs.core.sequence.call(null,inst_39846);
var inst_39848 = cljs.core.List.EMPTY;
var inst_39849 = cljs.core._conj.call(null,inst_39848,inst_39847);
var inst_39850 = cljs.core.concat.call(null,inst_39849);
var inst_39851 = cljs.core.seq.call(null,inst_39850);
var inst_39852 = cljs.core.sequence.call(null,inst_39851);
var inst_39853 = cljs.core.vec.call(null,inst_39852);
var inst_39854 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_39853);
var state_39928__$1 = state_39928;
var statearr_40028_40140 = state_39928__$1;
(statearr_40028_40140[(2)] = inst_39854);

(statearr_40028_40140[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (10))){
var inst_39593 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39593)){
var statearr_40029_40141 = state_39928__$1;
(statearr_40029_40141[(1)] = (14));

} else {
var statearr_40030_40142 = state_39928__$1;
(statearr_40030_40142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (18))){
var inst_39572 = (state_39928[(7)]);
var inst_39633 = (inst_39572 == null);
var inst_39634 = cljs.core.not.call(null,inst_39633);
var state_39928__$1 = state_39928;
if(inst_39634){
var statearr_40031_40143 = state_39928__$1;
(statearr_40031_40143[(1)] = (21));

} else {
var statearr_40032_40144 = state_39928__$1;
(statearr_40032_40144[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (52))){
var state_39928__$1 = state_39928;
var statearr_40033_40145 = state_39928__$1;
(statearr_40033_40145[(2)] = false);

(statearr_40033_40145[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (67))){
var state_39928__$1 = state_39928;
var statearr_40034_40146 = state_39928__$1;
(statearr_40034_40146[(2)] = true);

(statearr_40034_40146[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (71))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_40035_40147 = state_39928__$1;
(statearr_40035_40147[(2)] = inst_39572);

(statearr_40035_40147[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (42))){
var state_39928__$1 = state_39928;
var statearr_40036_40148 = state_39928__$1;
(statearr_40036_40148[(2)] = false);

(statearr_40036_40148[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (80))){
var state_39928__$1 = state_39928;
var statearr_40037_40149 = state_39928__$1;
(statearr_40037_40149[(2)] = true);

(statearr_40037_40149[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (37))){
var inst_39915 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_40038_40150 = state_39928__$1;
(statearr_40038_40150[(2)] = inst_39915);

(statearr_40038_40150[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (63))){
var inst_39911 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_40039_40151 = state_39928__$1;
(statearr_40039_40151[(2)] = inst_39911);

(statearr_40039_40151[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (8))){
var inst_39572 = (state_39928[(7)]);
var inst_39583 = inst_39572.cljs$lang$protocol_mask$partition0$;
var inst_39584 = (inst_39583 & (64));
var inst_39585 = inst_39572.cljs$core$ISeq$;
var inst_39586 = (inst_39584) || (inst_39585);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39586)){
var statearr_40040_40152 = state_39928__$1;
(statearr_40040_40152[(1)] = (11));

} else {
var statearr_40041_40153 = state_39928__$1;
(statearr_40041_40153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (49))){
var inst_39571 = (state_39928[(8)]);
var inst_39803 = cljs.core._EQ_.call(null,inst_39571,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_39928__$1 = state_39928;
if(inst_39803){
var statearr_40042_40154 = state_39928__$1;
(statearr_40042_40154[(1)] = (61));

} else {
var statearr_40043_40155 = state_39928__$1;
(statearr_40043_40155[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (84))){
var inst_39572 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
var statearr_40044_40156 = state_39928__$1;
(statearr_40044_40156[(2)] = inst_39572);

(statearr_40044_40156[(1)] = (85));


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
var statearr_40048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40048[(0)] = cloudxmark$core$search_loop_$_state_machine__26704__auto__);

(statearr_40048[(1)] = (1));

return statearr_40048;
});
var cloudxmark$core$search_loop_$_state_machine__26704__auto____1 = (function (state_39928){
while(true){
var ret_value__26705__auto__ = (function (){try{while(true){
var result__26706__auto__ = switch__26703__auto__.call(null,state_39928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26706__auto__;
}
break;
}
}catch (e40049){if((e40049 instanceof Object)){
var ex__26707__auto__ = e40049;
var statearr_40050_40157 = state_39928;
(statearr_40050_40157[(5)] = ex__26707__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40158 = state_39928;
state_39928 = G__40158;
continue;
} else {
return ret_value__26705__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26704__auto__ = function(state_39928){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____1.call(this,state_39928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26704__auto____0;
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26704__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26704__auto__;
})()
;})(switch__26703__auto__,c__26726__auto__))
})();
var state__26728__auto__ = (function (){var statearr_40051 = f__26727__auto__.call(null);
(statearr_40051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26726__auto__);

return statearr_40051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26728__auto__);
});})(c__26726__auto__))
);

return c__26726__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468462337743