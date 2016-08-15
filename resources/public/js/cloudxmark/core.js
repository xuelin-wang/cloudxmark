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
var idx_49902 = (0);
while(true){
var len1_49903 = b1.length;
if((cljs.core._EQ_.call(null,idx_49902,len1_49903)) || (cljs.core._EQ_.call(null,idx_49902,max_len))){
} else {
(b1[idx_49902] = ((b1[idx_49902]) ^ (b2[idx_49902])));

var G__49904 = (idx_49902 + (1));
idx_49902 = G__49904;
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
var args49907 = [];
var len__22773__auto___49910 = arguments.length;
var i__22774__auto___49911 = (0);
while(true){
if((i__22774__auto___49911 < len__22773__auto___49910)){
args49907.push((arguments[i__22774__auto___49911]));

var G__49912 = (i__22774__auto___49911 + (1));
i__22774__auto___49911 = G__49912;
continue;
} else {
}
break;
}

var G__49909 = args49907.length;
switch (G__49909) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49907.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__49905_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__49905_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__49906_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__49906_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__49914,_,p__49915){
var map__49916 = p__49914;
var map__49916__$1 = ((((!((map__49916 == null)))?((((map__49916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49916):map__49916);
var env = map__49916__$1;
var state = cljs.core.get.call(null,map__49916__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__49916__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__49917 = p__49915;
var map__49917__$1 = ((((!((map__49917 == null)))?((((map__49917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49917):map__49917);
var query_ver = cljs.core.get.call(null,map__49917__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__49917__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__49920 = lst;
var map__49920__$1 = ((((!((map__49920 == null)))?((((map__49920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49920):map__49920);
var lsts = cljs.core.get.call(null,map__49920__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__49920__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__49920__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__49920__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__49920__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_49922 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_49922);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__49923,_,p__49924){
var map__49925 = p__49923;
var map__49925__$1 = ((((!((map__49925 == null)))?((((map__49925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49925):map__49925);
var env = map__49925__$1;
var state = cljs.core.get.call(null,map__49925__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49926 = p__49924;
var map__49926__$1 = ((((!((map__49926 == null)))?((((map__49926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49926):map__49926);
var status = map__49926__$1;
var id = cljs.core.get.call(null,map__49926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49925,map__49925__$1,env,state,map__49926,map__49926__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__49925,map__49925__$1,env,state,map__49926,map__49926__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__49929,_,p__49930){
var map__49931 = p__49929;
var map__49931__$1 = ((((!((map__49931 == null)))?((((map__49931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49931):map__49931);
var env = map__49931__$1;
var state = cljs.core.get.call(null,map__49931__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49932 = p__49930;
var map__49932__$1 = ((((!((map__49932 == null)))?((((map__49932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49932):map__49932);
var path = cljs.core.get.call(null,map__49932__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__49932__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__49932__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49931,map__49931__$1,env,state,map__49932,map__49932__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__49931,map__49931__$1,env,state,map__49932,map__49932__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__49935,_,p__49936){
var map__49937 = p__49935;
var map__49937__$1 = ((((!((map__49937 == null)))?((((map__49937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49937):map__49937);
var env = map__49937__$1;
var state = cljs.core.get.call(null,map__49937__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49938 = p__49936;
var map__49938__$1 = ((((!((map__49938 == null)))?((((map__49938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49938):map__49938);
var data_map = map__49938__$1;
var lst_name = cljs.core.get.call(null,map__49938__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__49938__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__49938__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__49938__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49937,map__49937__$1,env,state,map__49938,map__49938__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__49937,map__49937__$1,env,state,map__49938,map__49938__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__49941,_,p__49942){
var map__49943 = p__49941;
var map__49943__$1 = ((((!((map__49943 == null)))?((((map__49943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49943):map__49943);
var env = map__49943__$1;
var state = cljs.core.get.call(null,map__49943__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49944 = p__49942;
var map__49944__$1 = ((((!((map__49944 == null)))?((((map__49944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49944):map__49944);
var field_id = cljs.core.get.call(null,map__49944__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__49944__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49943,map__49943__$1,env,state,map__49944,map__49944__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__49943,map__49943__$1,env,state,map__49944,map__49944__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__49947,_,p__49948){
var map__49949 = p__49947;
var map__49949__$1 = ((((!((map__49949 == null)))?((((map__49949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49949):map__49949);
var env = map__49949__$1;
var state = cljs.core.get.call(null,map__49949__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49950 = p__49948;
var map__49950__$1 = ((((!((map__49950 == null)))?((((map__49950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49950):map__49950);
var data_map = map__49950__$1;
var user_id = cljs.core.get.call(null,map__49950__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__49950__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__49950__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49949,map__49949__$1,env,state,map__49950,map__49950__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__49949,map__49949__$1,env,state,map__49950,map__49950__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__49953,_,p__49954){
var map__49955 = p__49953;
var map__49955__$1 = ((((!((map__49955 == null)))?((((map__49955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49955):map__49955);
var env = map__49955__$1;
var state = cljs.core.get.call(null,map__49955__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49956 = p__49954;
var map__49956__$1 = ((((!((map__49956 == null)))?((((map__49956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49956):map__49956);
var data_map = map__49956__$1;
var user_id = cljs.core.get.call(null,map__49956__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__49956__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49955,map__49955__$1,env,state,map__49956,map__49956__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__49955,map__49955__$1,env,state,map__49956,map__49956__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__49959,_,p__49960){
var map__49961 = p__49959;
var map__49961__$1 = ((((!((map__49961 == null)))?((((map__49961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49961):map__49961);
var env = map__49961__$1;
var state = cljs.core.get.call(null,map__49961__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49962 = p__49960;
var map__49962__$1 = ((((!((map__49962 == null)))?((((map__49962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49962):map__49962);
var data_map = map__49962__$1;
var type = cljs.core.get.call(null,map__49962__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__49962__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49961,map__49961__$1,env,state,map__49962,map__49962__$1,data_map,type,fields){
return (function (){
return null;
});})(map__49961,map__49961__$1,env,state,map__49962,map__49962__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__49965,_,p__49966){
var map__49967 = p__49965;
var map__49967__$1 = ((((!((map__49967 == null)))?((((map__49967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49967):map__49967);
var env = map__49967__$1;
var state = cljs.core.get.call(null,map__49967__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49968 = p__49966;
var map__49968__$1 = ((((!((map__49968 == null)))?((((map__49968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49968):map__49968);
var data_map = map__49968__$1;
var name = cljs.core.get.call(null,map__49968__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__49968__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49967,map__49967__$1,env,state,map__49968,map__49968__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__49967,map__49967__$1,env,state,map__49968,map__49968__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__49971,_,p__49972){
var map__49973 = p__49971;
var map__49973__$1 = ((((!((map__49973 == null)))?((((map__49973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49973):map__49973);
var env = map__49973__$1;
var state = cljs.core.get.call(null,map__49973__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49974 = p__49972;
var map__49974__$1 = ((((!((map__49974 == null)))?((((map__49974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49974):map__49974);
var data_map = map__49974__$1;
var name = cljs.core.get.call(null,map__49974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__49974__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49973,map__49973__$1,env,state,map__49974,map__49974__$1,data_map,name,value){
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
});})(map__49973,map__49973__$1,env,state,map__49974,map__49974__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__49977,_,___$1){
var map__49978 = p__49977;
var map__49978__$1 = ((((!((map__49978 == null)))?((((map__49978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49978):map__49978);
var env = map__49978__$1;
var state = cljs.core.get.call(null,map__49978__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49978,map__49978__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__49978,map__49978__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__49980,_,p__49981){
var map__49982 = p__49980;
var map__49982__$1 = ((((!((map__49982 == null)))?((((map__49982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49982):map__49982);
var env = map__49982__$1;
var state = cljs.core.get.call(null,map__49982__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__49983 = p__49981;
var map__49983__$1 = ((((!((map__49983 == null)))?((((map__49983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49983):map__49983);
var data_map = map__49983__$1;
var status = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__49983__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49982,map__49982__$1,env,state,map__49983,map__49983__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__49982,map__49982__$1,env,state,map__49983,map__49983__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args49986 = [];
var len__22773__auto___49989 = arguments.length;
var i__22774__auto___49990 = (0);
while(true){
if((i__22774__auto___49990 < len__22773__auto___49989)){
args49986.push((arguments[i__22774__auto___49990]));

var G__49991 = (i__22774__auto___49990 + (1));
i__22774__auto___49990 = G__49991;
continue;
} else {
}
break;
}

var G__49988 = args49986.length;
switch (G__49988) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49986.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__49993){
var map__49999 = p__49993;
var map__49999__$1 = ((((!((map__49999 == null)))?((((map__49999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49999):map__49999);
var info = cljs.core.get.call(null,map__49999__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__49999__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__49999__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__50001 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__50001,(0),null);
var msg = cljs.core.nth.call(null,vec__50001,(1),null);
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
var map__50006 = lst;
var map__50006__$1 = ((((!((map__50006 == null)))?((((map__50006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50006):map__50006);
var lsts = cljs.core.get.call(null,map__50006__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__50006__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__50006,map__50006__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__50006,map__50006__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__50010 = lst;
var map__50010__$1 = ((((!((map__50010 == null)))?((((map__50010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50010):map__50010);
var status = cljs.core.get.call(null,map__50010__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__50016 = (function (){var G__50019 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50019) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__50016,(0),null);
var query_key = cljs.core.nth.call(null,vec__50016,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__50016,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__50016,elem_key,query_key))
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

var x50025_50037 = cloudxmark.core.Lsts.prototype;
x50025_50037.componentWillUpdate = ((function (x50025_50037){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
if(((!((this__28544__auto__ == null)))?(((false) || (this__28544__auto__.om$next$Ident$))?true:false):false)){
var ident__28548__auto___50038 = om.next.ident.call(null,this__28544__auto__,om.next.props.call(null,this__28544__auto__));
var next_ident__28549__auto___50039 = om.next.ident.call(null,this__28544__auto__,om.next._next_props.call(null,next_props__28545__auto__,this__28544__auto__));
if(cljs.core.not_EQ_.call(null,ident__28548__auto___50038,next_ident__28549__auto___50039)){
var idxr__28550__auto___50040 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28550__auto___50040 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28550__auto___50040),((function (idxr__28550__auto___50040,ident__28548__auto___50038,next_ident__28549__auto___50039,this__28544__auto__,x50025_50037){
return (function (indexes__28551__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28551__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28548__auto___50038], null),cljs.core.disj,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28549__auto___50039], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28544__auto__);
});})(idxr__28550__auto___50040,ident__28548__auto___50038,next_ident__28549__auto___50039,this__28544__auto__,x50025_50037))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28544__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28544__auto__);
});})(x50025_50037))
;

x50025_50037.shouldComponentUpdate = ((function (x50025_50037){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
var next_children__28547__auto__ = next_props__28545__auto__.children;
var next_props__28545__auto____$1 = goog.object.get(next_props__28545__auto__,"omcljs$value");
var next_props__28545__auto____$2 = (function (){var G__50027 = next_props__28545__auto____$1;
if((next_props__28545__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__50027);
} else {
return G__50027;
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
});})(x50025_50037))
;

x50025_50037.componentWillUnmount = ((function (x50025_50037){
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
});})(x50025_50037))
;

x50025_50037.componentDidUpdate = ((function (x50025_50037){
return (function (prev_props__28552__auto__,prev_state__28553__auto__){
var this__28544__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28544__auto__);
});})(x50025_50037))
;

x50025_50037.isMounted = ((function (x50025_50037){
return (function (){
var this__28544__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28544__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50025_50037))
;

x50025_50037.componentWillMount = ((function (x50025_50037){
return (function (){
var this__28544__auto__ = this;
var indexer__28554__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28554__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28554__auto__,this__28544__auto__);
}
});})(x50025_50037))
;

x50025_50037.render = ((function (x50025_50037){
return (function (){
var this__28543__auto__ = this;
var this$ = this__28543__auto__;
var _STAR_reconciler_STAR_50028 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50029 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50030 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50031 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50032 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28543__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28543__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28543__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28543__auto__);

om.next._STAR_parent_STAR_ = this__28543__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__50033 = lst;
var map__50033__$1 = ((((!((map__50033 == null)))?((((map__50033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50033):map__50033);
var lsts = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__50033__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50032;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50031;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50030;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50029;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50028;
}});})(x50025_50037))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x50035_50041 = cloudxmark.core.Lsts;
x50035_50041.om$next$IQueryParams$ = true;

x50035_50041.om$next$IQueryParams$params$arity$1 = ((function (x50035_50041){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x50035_50041))
;

x50035_50041.om$next$IQuery$ = true;

x50035_50041.om$next$IQuery$query$arity$1 = ((function (x50035_50041){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x50035_50041))
;


var x50036_50042 = cloudxmark.core.Lsts.prototype;
x50036_50042.om$next$IQueryParams$ = true;

x50036_50042.om$next$IQueryParams$params$arity$1 = ((function (x50036_50042){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x50036_50042))
;

x50036_50042.om$next$IQuery$ = true;

x50036_50042.om$next$IQuery$query$arity$1 = ((function (x50036_50042){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x50036_50042))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28645__auto__,writer__28646__auto__,opt__28647__auto__){
return cljs.core._write.call(null,writer__28646__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__50051,cb){
var map__50052 = p__50051;
var map__50052__$1 = ((((!((map__50052 == null)))?((((map__50052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50052):map__50052);
var lst_search = cljs.core.get.call(null,map__50052__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__50054 = om.next.query__GT_ast.call(null,lst_search);
var map__50054__$1 = ((((!((map__50054 == null)))?((((map__50054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50054):map__50054);
var vec__50055 = cljs.core.get.call(null,map__50054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__50055,(0),null);
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
var map__50063 = result;
var map__50063__$1 = ((((!((map__50063 == null)))?((((map__50063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50063):map__50063);
var lsts = cljs.core.get.call(null,map__50063__$1,"lsts");
var user_id = cljs.core.get.call(null,map__50063__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__50063__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__50064 = json_status;
var map__50064__$1 = ((((!((map__50064 == null)))?((((map__50064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50064):map__50064);
var info = cljs.core.get.call(null,map__50064__$1,"info");
var warn = cljs.core.get.call(null,map__50064__$1,"warn");
var error = cljs.core.get.call(null,map__50064__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__50069 = json_status;
var map__50069__$1 = ((((!((map__50069 == null)))?((((map__50069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50069):map__50069);
var info = cljs.core.get.call(null,map__50069__$1,"info");
var warn = cljs.core.get.call(null,map__50069__$1,"warn");
var error = cljs.core.get.call(null,map__50069__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__){
return (function (state_50969){
var state_val_50970 = (state_50969[(1)]);
if((state_val_50970 === (65))){
var state_50969__$1 = state_50969;
var statearr_50971_51097 = state_50969__$1;
(statearr_50971_51097[(2)] = false);

(statearr_50971_51097[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (70))){
var inst_50602 = (state_50969[(7)]);
var inst_50852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_50972_51098 = state_50969__$1;
(statearr_50972_51098[(2)] = inst_50852);

(statearr_50972_51098[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (62))){
var inst_50601 = (state_50969[(8)]);
var inst_50888 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_50969__$1 = state_50969;
if(inst_50888){
var statearr_50973_51099 = state_50969__$1;
(statearr_50973_51099[(1)] = (74));

} else {
var statearr_50974_51100 = state_50969__$1;
(statearr_50974_51100[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (74))){
var inst_50602 = (state_50969[(7)]);
var inst_50891 = [cljs.core.str("lst query data:"),cljs.core.str(inst_50602)].join('');
var inst_50892 = cljs.core.println.call(null,inst_50891);
var inst_50894 = (inst_50602 == null);
var inst_50895 = cljs.core.not.call(null,inst_50894);
var state_50969__$1 = (function (){var statearr_50975 = state_50969;
(statearr_50975[(9)] = inst_50892);

return statearr_50975;
})();
if(inst_50895){
var statearr_50976_51101 = state_50969__$1;
(statearr_50976_51101[(1)] = (77));

} else {
var statearr_50977_51102 = state_50969__$1;
(statearr_50977_51102[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (7))){
var inst_50962 = (state_50969[(2)]);
var state_50969__$1 = (function (){var statearr_50978 = state_50969;
(statearr_50978[(10)] = inst_50962);

return statearr_50978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(93),c);
} else {
if((state_val_50970 === (59))){
var inst_50804 = (state_50969[(2)]);
var inst_50805 = cljs.core.get.call(null,inst_50804,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_50806 = cljs.core.get.call(null,inst_50804,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_50807 = cljs.core.get.call(null,inst_50804,new cljs.core.Keyword(null,"value","value",305978217));
var inst_50808 = encodeURIComponent(inst_50805);
var inst_50809 = encodeURIComponent(inst_50806);
var inst_50810 = encodeURIComponent(inst_50807);
var inst_50811 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_50808),cljs.core.str("&name="),cljs.core.str(inst_50809),cljs.core.str("&value="),cljs.core.str(inst_50810)].join('');
var inst_50812 = cloudxmark.core.jsonp.call(null,inst_50811);
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(60),inst_50812);
} else {
if((state_val_50970 === (86))){
var state_50969__$1 = state_50969;
var statearr_50979_51103 = state_50969__$1;
(statearr_50979_51103[(2)] = "");

(statearr_50979_51103[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (20))){
var inst_50960 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_50980_51104 = state_50969__$1;
(statearr_50980_51104[(2)] = inst_50960);

(statearr_50980_51104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (72))){
var inst_50855 = (state_50969[(2)]);
var inst_50856 = cljs.core.get.call(null,inst_50855,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_50857 = cljs.core.get.call(null,inst_50855,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_50858 = cljs.core.get.call(null,inst_50855,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_50859 = cljs.core.get.call(null,inst_50855,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_50860 = cljs.core.get.call(null,inst_50855,new cljs.core.Keyword(null,"value","value",305978217));
var inst_50861 = encodeURIComponent(inst_50856);
var inst_50862 = encodeURIComponent(inst_50857);
var inst_50863 = encodeURIComponent(inst_50858);
var inst_50864 = encodeURIComponent(inst_50859);
var inst_50865 = encodeURIComponent(inst_50860);
var inst_50866 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_50861),cljs.core.str("&lst-name="),cljs.core.str(inst_50862),cljs.core.str("&orig-name="),cljs.core.str(inst_50863),cljs.core.str("&col-name="),cljs.core.str(inst_50864),cljs.core.str("&value="),cljs.core.str(inst_50865)].join('');
var inst_50867 = cloudxmark.core.jsonp.call(null,inst_50866);
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(73),inst_50867);
} else {
if((state_val_50970 === (58))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_50981_51105 = state_50969__$1;
(statearr_50981_51105[(2)] = inst_50602);

(statearr_50981_51105[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (60))){
var inst_50814 = (state_50969[(2)]);
var inst_50815 = cljs.core.js__GT_clj.call(null,inst_50814);
var inst_50816 = cloudxmark.core.convert_json_lsts_result.call(null,inst_50815,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_50817 = cljs.core.List.EMPTY;
var inst_50818 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_50819 = cljs.core._conj.call(null,inst_50817,inst_50818);
var inst_50820 = cljs.core.List.EMPTY;
var inst_50821 = cljs.core._conj.call(null,inst_50820,inst_50816);
var inst_50822 = cljs.core.concat.call(null,inst_50819,inst_50821);
var inst_50823 = cljs.core.seq.call(null,inst_50822);
var inst_50824 = cljs.core.sequence.call(null,inst_50823);
var inst_50825 = cljs.core.List.EMPTY;
var inst_50826 = cljs.core._conj.call(null,inst_50825,inst_50824);
var inst_50827 = cljs.core.concat.call(null,inst_50826);
var inst_50828 = cljs.core.seq.call(null,inst_50827);
var inst_50829 = cljs.core.sequence.call(null,inst_50828);
var inst_50830 = cljs.core.vec.call(null,inst_50829);
var inst_50831 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50830);
var state_50969__$1 = state_50969;
var statearr_50982_51106 = state_50969__$1;
(statearr_50982_51106[(2)] = inst_50831);

(statearr_50982_51106[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (27))){
var inst_50602 = (state_50969[(7)]);
var inst_50678 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_50983_51107 = state_50969__$1;
(statearr_50983_51107[(2)] = inst_50678);

(statearr_50983_51107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (1))){
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(2),c);
} else {
if((state_val_50970 === (69))){
var inst_50847 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_50984_51108 = state_50969__$1;
(statearr_50984_51108[(2)] = inst_50847);

(statearr_50984_51108[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (24))){
var state_50969__$1 = state_50969;
var statearr_50985_51109 = state_50969__$1;
(statearr_50985_51109[(2)] = true);

(statearr_50985_51109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (55))){
var state_50969__$1 = state_50969;
var statearr_50986_51110 = state_50969__$1;
(statearr_50986_51110[(2)] = false);

(statearr_50986_51110[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (85))){
var inst_50915 = (state_50969[(11)]);
var inst_50912 = (state_50969[(2)]);
var inst_50913 = cljs.core.get.call(null,inst_50912,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_50914 = cljs.core.get.call(null,inst_50912,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_50915__$1 = cljs.core.get.call(null,inst_50912,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_50916 = cljs.core.empty_QMARK_.call(null,inst_50915__$1);
var state_50969__$1 = (function (){var statearr_50987 = state_50969;
(statearr_50987[(12)] = inst_50914);

(statearr_50987[(13)] = inst_50913);

(statearr_50987[(11)] = inst_50915__$1);

return statearr_50987;
})();
if(inst_50916){
var statearr_50988_51111 = state_50969__$1;
(statearr_50988_51111[(1)] = (86));

} else {
var statearr_50989_51112 = state_50969__$1;
(statearr_50989_51112[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (39))){
var state_50969__$1 = state_50969;
var statearr_50990_51113 = state_50969__$1;
(statearr_50990_51113[(2)] = false);

(statearr_50990_51113[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (88))){
var inst_50922 = (state_50969[(2)]);
var inst_50923 = [cljs.core.str("/getItems?"),cljs.core.str(inst_50922)].join('');
var inst_50924 = cloudxmark.core.jsonp.call(null,inst_50923);
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(89),inst_50924);
} else {
if((state_val_50970 === (46))){
var inst_50755 = (state_50969[(2)]);
var inst_50756 = cljs.core.get.call(null,inst_50755,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_50757 = cljs.core.get.call(null,inst_50755,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_50758 = encodeURIComponent(inst_50756);
var inst_50759 = encodeURIComponent(inst_50757);
var inst_50760 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_50758),cljs.core.str("&desc="),cljs.core.str(inst_50759)].join('');
var inst_50761 = cloudxmark.core.jsonp.call(null,inst_50760);
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(47),inst_50761);
} else {
if((state_val_50970 === (4))){
var inst_50967 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50969__$1,inst_50967);
} else {
if((state_val_50970 === (77))){
var inst_50602 = (state_50969[(7)]);
var inst_50897 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50898 = (inst_50897 & (64));
var inst_50899 = inst_50602.cljs$core$ISeq$;
var inst_50900 = (inst_50898) || (inst_50899);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50900)){
var statearr_50991_51114 = state_50969__$1;
(statearr_50991_51114[(1)] = (80));

} else {
var statearr_50992_51115 = state_50969__$1;
(statearr_50992_51115[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (54))){
var state_50969__$1 = state_50969;
var statearr_50993_51116 = state_50969__$1;
(statearr_50993_51116[(2)] = true);

(statearr_50993_51116[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (92))){
var inst_50948 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_50994_51117 = state_50969__$1;
(statearr_50994_51117[(2)] = inst_50948);

(statearr_50994_51117[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (15))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_50995_51118 = state_50969__$1;
(statearr_50995_51118[(2)] = inst_50602);

(statearr_50995_51118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (48))){
var inst_50602 = (state_50969[(7)]);
var inst_50786 = (inst_50602 == null);
var inst_50787 = cljs.core.not.call(null,inst_50786);
var state_50969__$1 = state_50969;
if(inst_50787){
var statearr_50996_51119 = state_50969__$1;
(statearr_50996_51119[(1)] = (51));

} else {
var statearr_50997_51120 = state_50969__$1;
(statearr_50997_51120[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (50))){
var inst_50954 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_50998_51121 = state_50969__$1;
(statearr_50998_51121[(2)] = inst_50954);

(statearr_50998_51121[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (75))){
var state_50969__$1 = state_50969;
var statearr_50999_51122 = state_50969__$1;
(statearr_50999_51122[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (21))){
var inst_50602 = (state_50969[(7)]);
var inst_50666 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50667 = (inst_50666 & (64));
var inst_50668 = inst_50602.cljs$core$ISeq$;
var inst_50669 = (inst_50667) || (inst_50668);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50669)){
var statearr_51001_51123 = state_50969__$1;
(statearr_51001_51123[(1)] = (24));

} else {
var statearr_51002_51124 = state_50969__$1;
(statearr_51002_51124[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (31))){
var inst_50712 = cloudxmark.core.jsonp.call(null,"/logout");
var state_50969__$1 = state_50969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(34),inst_50712);
} else {
if((state_val_50970 === (32))){
var inst_50601 = (state_50969[(8)]);
var inst_50733 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_50969__$1 = state_50969;
if(inst_50733){
var statearr_51003_51125 = state_50969__$1;
(statearr_51003_51125[(1)] = (35));

} else {
var statearr_51004_51126 = state_50969__$1;
(statearr_51004_51126[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (40))){
var inst_50750 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50750)){
var statearr_51005_51127 = state_50969__$1;
(statearr_51005_51127[(1)] = (44));

} else {
var statearr_51006_51128 = state_50969__$1;
(statearr_51006_51128[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (91))){
var state_50969__$1 = state_50969;
var statearr_51007_51129 = state_50969__$1;
(statearr_51007_51129[(2)] = null);

(statearr_51007_51129[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (56))){
var inst_50796 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51008_51130 = state_50969__$1;
(statearr_51008_51130[(2)] = inst_50796);

(statearr_51008_51130[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (33))){
var inst_50958 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51009_51131 = state_50969__$1;
(statearr_51009_51131[(2)] = inst_50958);

(statearr_51009_51131[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (13))){
var inst_50620 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51010_51132 = state_50969__$1;
(statearr_51010_51132[(2)] = inst_50620);

(statearr_51010_51132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (22))){
var state_50969__$1 = state_50969;
var statearr_51011_51133 = state_50969__$1;
(statearr_51011_51133[(2)] = false);

(statearr_51011_51133[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (90))){
var state_50969__$1 = state_50969;
var statearr_51012_51134 = state_50969__$1;
(statearr_51012_51134[(2)] = null);

(statearr_51012_51134[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (36))){
var inst_50601 = (state_50969[(8)]);
var inst_50782 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_50969__$1 = state_50969;
if(inst_50782){
var statearr_51013_51135 = state_50969__$1;
(statearr_51013_51135[(1)] = (48));

} else {
var statearr_51014_51136 = state_50969__$1;
(statearr_51014_51136[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (41))){
var state_50969__$1 = state_50969;
var statearr_51015_51137 = state_50969__$1;
(statearr_51015_51137[(2)] = true);

(statearr_51015_51137[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (89))){
var inst_50914 = (state_50969[(12)]);
var inst_50926 = (state_50969[(2)]);
var inst_50927 = cljs.core.js__GT_clj.call(null,inst_50926);
var inst_50928 = cloudxmark.core.convert_json_lsts_result.call(null,inst_50927,inst_50914,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_50929 = cljs.core.List.EMPTY;
var inst_50930 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_50931 = cljs.core._conj.call(null,inst_50929,inst_50930);
var inst_50932 = cljs.core.List.EMPTY;
var inst_50933 = cljs.core._conj.call(null,inst_50932,inst_50928);
var inst_50934 = cljs.core.concat.call(null,inst_50931,inst_50933);
var inst_50935 = cljs.core.seq.call(null,inst_50934);
var inst_50936 = cljs.core.sequence.call(null,inst_50935);
var inst_50937 = cljs.core.List.EMPTY;
var inst_50938 = cljs.core._conj.call(null,inst_50937,inst_50936);
var inst_50939 = cljs.core.concat.call(null,inst_50938);
var inst_50940 = cljs.core.seq.call(null,inst_50939);
var inst_50941 = cljs.core.sequence.call(null,inst_50940);
var inst_50942 = cljs.core.vec.call(null,inst_50941);
var inst_50943 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50942);
var state_50969__$1 = state_50969;
var statearr_51016_51138 = state_50969__$1;
(statearr_51016_51138[(2)] = inst_50943);

(statearr_51016_51138[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (43))){
var inst_50747 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51017_51139 = state_50969__$1;
(statearr_51017_51139[(2)] = inst_50747);

(statearr_51017_51139[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (61))){
var inst_50602 = (state_50969[(7)]);
var inst_50837 = (inst_50602 == null);
var inst_50838 = cljs.core.not.call(null,inst_50837);
var state_50969__$1 = state_50969;
if(inst_50838){
var statearr_51018_51140 = state_50969__$1;
(statearr_51018_51140[(1)] = (64));

} else {
var statearr_51019_51141 = state_50969__$1;
(statearr_51019_51141[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (29))){
var inst_50681 = (state_50969[(2)]);
var inst_50682 = cljs.core.get.call(null,inst_50681,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_50683 = cljs.core.get.call(null,inst_50681,new cljs.core.Keyword(null,"password","password",417022471));
var inst_50684 = cljs.core.get.call(null,inst_50681,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_50685 = cloudxmark.core.enc_password.call(null,inst_50683);
var inst_50686 = encodeURIComponent(inst_50682);
var inst_50687 = encodeURIComponent(inst_50685);
var inst_50688 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_50686),cljs.core.str("&pass="),cljs.core.str(inst_50687)].join('');
var inst_50689 = cloudxmark.core.jsonp.call(null,inst_50688);
var state_50969__$1 = (function (){var statearr_51020 = state_50969;
(statearr_51020[(14)] = inst_50684);

return statearr_51020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(30),inst_50689);
} else {
if((state_val_50970 === (44))){
var inst_50602 = (state_50969[(7)]);
var inst_50752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_51021_51142 = state_50969__$1;
(statearr_51021_51142[(2)] = inst_50752);

(statearr_51021_51142[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (93))){
var inst_50964 = (state_50969[(2)]);
var inst_50596 = inst_50964;
var state_50969__$1 = (function (){var statearr_51022 = state_50969;
(statearr_51022[(15)] = inst_50596);

return statearr_51022;
})();
var statearr_51023_51143 = state_50969__$1;
(statearr_51023_51143[(2)] = null);

(statearr_51023_51143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (6))){
var inst_50601 = (state_50969[(8)]);
var inst_50659 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_50969__$1 = state_50969;
if(inst_50659){
var statearr_51024_51144 = state_50969__$1;
(statearr_51024_51144[(1)] = (18));

} else {
var statearr_51025_51145 = state_50969__$1;
(statearr_51025_51145[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (28))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_51026_51146 = state_50969__$1;
(statearr_51026_51146[(2)] = inst_50602);

(statearr_51026_51146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (64))){
var inst_50602 = (state_50969[(7)]);
var inst_50840 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50841 = (inst_50840 & (64));
var inst_50842 = inst_50602.cljs$core$ISeq$;
var inst_50843 = (inst_50841) || (inst_50842);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50843)){
var statearr_51027_51147 = state_50969__$1;
(statearr_51027_51147[(1)] = (67));

} else {
var statearr_51028_51148 = state_50969__$1;
(statearr_51028_51148[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (51))){
var inst_50602 = (state_50969[(7)]);
var inst_50789 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50790 = (inst_50789 & (64));
var inst_50791 = inst_50602.cljs$core$ISeq$;
var inst_50792 = (inst_50790) || (inst_50791);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50792)){
var statearr_51029_51149 = state_50969__$1;
(statearr_51029_51149[(1)] = (54));

} else {
var statearr_51030_51150 = state_50969__$1;
(statearr_51030_51150[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (25))){
var state_50969__$1 = state_50969;
var statearr_51031_51151 = state_50969__$1;
(statearr_51031_51151[(2)] = false);

(statearr_51031_51151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (34))){
var inst_50714 = (state_50969[(2)]);
var inst_50715 = cljs.core.js__GT_clj.call(null,inst_50714);
var inst_50716 = cloudxmark.core.convert_json_status.call(null,inst_50715,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_50717 = cljs.core.List.EMPTY;
var inst_50718 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_50719 = cljs.core._conj.call(null,inst_50717,inst_50718);
var inst_50720 = cljs.core.List.EMPTY;
var inst_50721 = cljs.core._conj.call(null,inst_50720,inst_50716);
var inst_50722 = cljs.core.concat.call(null,inst_50719,inst_50721);
var inst_50723 = cljs.core.seq.call(null,inst_50722);
var inst_50724 = cljs.core.sequence.call(null,inst_50723);
var inst_50725 = cljs.core.List.EMPTY;
var inst_50726 = cljs.core._conj.call(null,inst_50725,inst_50724);
var inst_50727 = cljs.core.concat.call(null,inst_50726);
var inst_50728 = cljs.core.seq.call(null,inst_50727);
var inst_50729 = cljs.core.sequence.call(null,inst_50728);
var inst_50730 = cljs.core.vec.call(null,inst_50729);
var inst_50731 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50730);
var state_50969__$1 = state_50969;
var statearr_51032_51152 = state_50969__$1;
(statearr_51032_51152[(2)] = inst_50731);

(statearr_51032_51152[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (17))){
var inst_50631 = (state_50969[(16)]);
var inst_50630 = (state_50969[(17)]);
var inst_50637 = (state_50969[(2)]);
var inst_50638 = cljs.core.js__GT_clj.call(null,inst_50637);
var inst_50639 = cloudxmark.core.gen_key_bytes.call(null,inst_50630);
var inst_50640 = cloudxmark.core.create_aes_cbc.call(null,inst_50639);
var inst_50641 = cloudxmark.core.convert_json_lsts_result.call(null,inst_50638,inst_50631,new cljs.core.Keyword(null,"login","login",55217519));
var inst_50642 = cljs.core.assoc.call(null,inst_50641,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_50640);
var inst_50643 = cljs.core.List.EMPTY;
var inst_50644 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_50645 = cljs.core._conj.call(null,inst_50643,inst_50644);
var inst_50646 = cljs.core.List.EMPTY;
var inst_50647 = cljs.core._conj.call(null,inst_50646,inst_50642);
var inst_50648 = cljs.core.concat.call(null,inst_50645,inst_50647);
var inst_50649 = cljs.core.seq.call(null,inst_50648);
var inst_50650 = cljs.core.sequence.call(null,inst_50649);
var inst_50651 = cljs.core.List.EMPTY;
var inst_50652 = cljs.core._conj.call(null,inst_50651,inst_50650);
var inst_50653 = cljs.core.concat.call(null,inst_50652);
var inst_50654 = cljs.core.seq.call(null,inst_50653);
var inst_50655 = cljs.core.sequence.call(null,inst_50654);
var inst_50656 = cljs.core.vec.call(null,inst_50655);
var inst_50657 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50656);
var state_50969__$1 = state_50969;
var statearr_51033_51153 = state_50969__$1;
(statearr_51033_51153[(2)] = inst_50657);

(statearr_51033_51153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (3))){
var inst_50601 = (state_50969[(8)]);
var inst_50596 = (state_50969[(15)]);
var inst_50601__$1 = cljs.core.nth.call(null,inst_50596,(0),null);
var inst_50602 = cljs.core.nth.call(null,inst_50596,(1),null);
var inst_50603 = cljs.core.nth.call(null,inst_50596,(2),null);
var inst_50604 = cljs.core._EQ_.call(null,inst_50601__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_50969__$1 = (function (){var statearr_51034 = state_50969;
(statearr_51034[(7)] = inst_50602);

(statearr_51034[(8)] = inst_50601__$1);

(statearr_51034[(18)] = inst_50603);

return statearr_51034;
})();
if(inst_50604){
var statearr_51035_51154 = state_50969__$1;
(statearr_51035_51154[(1)] = (5));

} else {
var statearr_51036_51155 = state_50969__$1;
(statearr_51036_51155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (12))){
var state_50969__$1 = state_50969;
var statearr_51037_51156 = state_50969__$1;
(statearr_51037_51156[(2)] = false);

(statearr_51037_51156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (2))){
var inst_50592 = (state_50969[(2)]);
var inst_50593 = cljs.core.nth.call(null,inst_50592,(0),null);
var inst_50594 = cljs.core.nth.call(null,inst_50592,(1),null);
var inst_50595 = cljs.core.nth.call(null,inst_50592,(2),null);
var inst_50596 = inst_50592;
var state_50969__$1 = (function (){var statearr_51038 = state_50969;
(statearr_51038[(19)] = inst_50593);

(statearr_51038[(20)] = inst_50594);

(statearr_51038[(21)] = inst_50595);

(statearr_51038[(15)] = inst_50596);

return statearr_51038;
})();
var statearr_51039_51157 = state_50969__$1;
(statearr_51039_51157[(2)] = null);

(statearr_51039_51157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (66))){
var inst_50850 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50850)){
var statearr_51040_51158 = state_50969__$1;
(statearr_51040_51158[(1)] = (70));

} else {
var statearr_51041_51159 = state_50969__$1;
(statearr_51041_51159[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (23))){
var inst_50676 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50676)){
var statearr_51042_51160 = state_50969__$1;
(statearr_51042_51160[(1)] = (27));

} else {
var statearr_51043_51161 = state_50969__$1;
(statearr_51043_51161[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (47))){
var inst_50763 = (state_50969[(2)]);
var inst_50764 = cljs.core.js__GT_clj.call(null,inst_50763);
var inst_50765 = cloudxmark.core.convert_json_lsts_result.call(null,inst_50764,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_50766 = cljs.core.List.EMPTY;
var inst_50767 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_50768 = cljs.core._conj.call(null,inst_50766,inst_50767);
var inst_50769 = cljs.core.List.EMPTY;
var inst_50770 = cljs.core._conj.call(null,inst_50769,inst_50765);
var inst_50771 = cljs.core.concat.call(null,inst_50768,inst_50770);
var inst_50772 = cljs.core.seq.call(null,inst_50771);
var inst_50773 = cljs.core.sequence.call(null,inst_50772);
var inst_50774 = cljs.core.List.EMPTY;
var inst_50775 = cljs.core._conj.call(null,inst_50774,inst_50773);
var inst_50776 = cljs.core.concat.call(null,inst_50775);
var inst_50777 = cljs.core.seq.call(null,inst_50776);
var inst_50778 = cljs.core.sequence.call(null,inst_50777);
var inst_50779 = cljs.core.vec.call(null,inst_50778);
var inst_50780 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50779);
var state_50969__$1 = state_50969;
var statearr_51044_51162 = state_50969__$1;
(statearr_51044_51162[(2)] = inst_50780);

(statearr_51044_51162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (35))){
var inst_50602 = (state_50969[(7)]);
var inst_50737 = (inst_50602 == null);
var inst_50738 = cljs.core.not.call(null,inst_50737);
var state_50969__$1 = state_50969;
if(inst_50738){
var statearr_51045_51163 = state_50969__$1;
(statearr_51045_51163[(1)] = (38));

} else {
var statearr_51046_51164 = state_50969__$1;
(statearr_51046_51164[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (82))){
var inst_50904 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51047_51165 = state_50969__$1;
(statearr_51047_51165[(2)] = inst_50904);

(statearr_51047_51165[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (76))){
var inst_50950 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51048_51166 = state_50969__$1;
(statearr_51048_51166[(2)] = inst_50950);

(statearr_51048_51166[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (19))){
var inst_50601 = (state_50969[(8)]);
var inst_50710 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_50969__$1 = state_50969;
if(inst_50710){
var statearr_51049_51167 = state_50969__$1;
(statearr_51049_51167[(1)] = (31));

} else {
var statearr_51050_51168 = state_50969__$1;
(statearr_51050_51168[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (57))){
var inst_50602 = (state_50969[(7)]);
var inst_50801 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_51051_51169 = state_50969__$1;
(statearr_51051_51169[(2)] = inst_50801);

(statearr_51051_51169[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (68))){
var state_50969__$1 = state_50969;
var statearr_51052_51170 = state_50969__$1;
(statearr_51052_51170[(2)] = false);

(statearr_51052_51170[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (11))){
var state_50969__$1 = state_50969;
var statearr_51053_51171 = state_50969__$1;
(statearr_51053_51171[(2)] = true);

(statearr_51053_51171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (9))){
var state_50969__$1 = state_50969;
var statearr_51054_51172 = state_50969__$1;
(statearr_51054_51172[(2)] = false);

(statearr_51054_51172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (5))){
var inst_50602 = (state_50969[(7)]);
var inst_50607 = [cljs.core.str("lst login data:"),cljs.core.str(inst_50602)].join('');
var inst_50608 = cljs.core.println.call(null,inst_50607);
var inst_50610 = (inst_50602 == null);
var inst_50611 = cljs.core.not.call(null,inst_50610);
var state_50969__$1 = (function (){var statearr_51055 = state_50969;
(statearr_51055[(22)] = inst_50608);

return statearr_51055;
})();
if(inst_50611){
var statearr_51056_51173 = state_50969__$1;
(statearr_51056_51173[(1)] = (8));

} else {
var statearr_51057_51174 = state_50969__$1;
(statearr_51057_51174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (83))){
var inst_50602 = (state_50969[(7)]);
var inst_50909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_51058_51175 = state_50969__$1;
(statearr_51058_51175[(2)] = inst_50909);

(statearr_51058_51175[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (14))){
var inst_50602 = (state_50969[(7)]);
var inst_50625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50602);
var state_50969__$1 = state_50969;
var statearr_51059_51176 = state_50969__$1;
(statearr_51059_51176[(2)] = inst_50625);

(statearr_51059_51176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (45))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_51060_51177 = state_50969__$1;
(statearr_51060_51177[(2)] = inst_50602);

(statearr_51060_51177[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (53))){
var inst_50799 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50799)){
var statearr_51061_51178 = state_50969__$1;
(statearr_51061_51178[(1)] = (57));

} else {
var statearr_51062_51179 = state_50969__$1;
(statearr_51062_51179[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (78))){
var state_50969__$1 = state_50969;
var statearr_51063_51180 = state_50969__$1;
(statearr_51063_51180[(2)] = false);

(statearr_51063_51180[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (26))){
var inst_50673 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51064_51181 = state_50969__$1;
(statearr_51064_51181[(2)] = inst_50673);

(statearr_51064_51181[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (16))){
var inst_50630 = (state_50969[(17)]);
var inst_50628 = (state_50969[(2)]);
var inst_50629 = cljs.core.get.call(null,inst_50628,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_50630__$1 = cljs.core.get.call(null,inst_50628,new cljs.core.Keyword(null,"password","password",417022471));
var inst_50631 = cljs.core.get.call(null,inst_50628,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_50632 = encodeURIComponent(inst_50629);
var inst_50633 = encodeURIComponent(inst_50630__$1);
var inst_50634 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_50632),cljs.core.str("&pass="),cljs.core.str(inst_50633)].join('');
var inst_50635 = cloudxmark.core.jsonp.call(null,inst_50634);
var state_50969__$1 = (function (){var statearr_51065 = state_50969;
(statearr_51065[(16)] = inst_50631);

(statearr_51065[(17)] = inst_50630__$1);

return statearr_51065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50969__$1,(17),inst_50635);
} else {
if((state_val_50970 === (81))){
var state_50969__$1 = state_50969;
var statearr_51066_51182 = state_50969__$1;
(statearr_51066_51182[(2)] = false);

(statearr_51066_51182[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (79))){
var inst_50907 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50907)){
var statearr_51067_51183 = state_50969__$1;
(statearr_51067_51183[(1)] = (83));

} else {
var statearr_51068_51184 = state_50969__$1;
(statearr_51068_51184[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (38))){
var inst_50602 = (state_50969[(7)]);
var inst_50740 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50741 = (inst_50740 & (64));
var inst_50742 = inst_50602.cljs$core$ISeq$;
var inst_50743 = (inst_50741) || (inst_50742);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50743)){
var statearr_51069_51185 = state_50969__$1;
(statearr_51069_51185[(1)] = (41));

} else {
var statearr_51070_51186 = state_50969__$1;
(statearr_51070_51186[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (87))){
var inst_50915 = (state_50969[(11)]);
var inst_50919 = encodeURIComponent(inst_50915);
var inst_50920 = [cljs.core.str("query="),cljs.core.str(inst_50919)].join('');
var state_50969__$1 = state_50969;
var statearr_51071_51187 = state_50969__$1;
(statearr_51071_51187[(2)] = inst_50920);

(statearr_51071_51187[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (30))){
var inst_50691 = (state_50969[(2)]);
var inst_50692 = cljs.core.js__GT_clj.call(null,inst_50691);
var inst_50693 = cloudxmark.core.convert_json_status.call(null,inst_50692,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_50694 = cljs.core.List.EMPTY;
var inst_50695 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_50696 = cljs.core._conj.call(null,inst_50694,inst_50695);
var inst_50697 = cljs.core.List.EMPTY;
var inst_50698 = cljs.core._conj.call(null,inst_50697,inst_50693);
var inst_50699 = cljs.core.concat.call(null,inst_50696,inst_50698);
var inst_50700 = cljs.core.seq.call(null,inst_50699);
var inst_50701 = cljs.core.sequence.call(null,inst_50700);
var inst_50702 = cljs.core.List.EMPTY;
var inst_50703 = cljs.core._conj.call(null,inst_50702,inst_50701);
var inst_50704 = cljs.core.concat.call(null,inst_50703);
var inst_50705 = cljs.core.seq.call(null,inst_50704);
var inst_50706 = cljs.core.sequence.call(null,inst_50705);
var inst_50707 = cljs.core.vec.call(null,inst_50706);
var inst_50708 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50707);
var state_50969__$1 = state_50969;
var statearr_51072_51188 = state_50969__$1;
(statearr_51072_51188[(2)] = inst_50708);

(statearr_51072_51188[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (73))){
var inst_50869 = (state_50969[(2)]);
var inst_50870 = cljs.core.js__GT_clj.call(null,inst_50869);
var inst_50871 = cloudxmark.core.convert_json_lsts_result.call(null,inst_50870,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_50872 = cljs.core.List.EMPTY;
var inst_50873 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_50874 = cljs.core._conj.call(null,inst_50872,inst_50873);
var inst_50875 = cljs.core.List.EMPTY;
var inst_50876 = cljs.core._conj.call(null,inst_50875,inst_50871);
var inst_50877 = cljs.core.concat.call(null,inst_50874,inst_50876);
var inst_50878 = cljs.core.seq.call(null,inst_50877);
var inst_50879 = cljs.core.sequence.call(null,inst_50878);
var inst_50880 = cljs.core.List.EMPTY;
var inst_50881 = cljs.core._conj.call(null,inst_50880,inst_50879);
var inst_50882 = cljs.core.concat.call(null,inst_50881);
var inst_50883 = cljs.core.seq.call(null,inst_50882);
var inst_50884 = cljs.core.sequence.call(null,inst_50883);
var inst_50885 = cljs.core.vec.call(null,inst_50884);
var inst_50886 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_50885);
var state_50969__$1 = state_50969;
var statearr_51073_51189 = state_50969__$1;
(statearr_51073_51189[(2)] = inst_50886);

(statearr_51073_51189[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (10))){
var inst_50623 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50623)){
var statearr_51074_51190 = state_50969__$1;
(statearr_51074_51190[(1)] = (14));

} else {
var statearr_51075_51191 = state_50969__$1;
(statearr_51075_51191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (18))){
var inst_50602 = (state_50969[(7)]);
var inst_50663 = (inst_50602 == null);
var inst_50664 = cljs.core.not.call(null,inst_50663);
var state_50969__$1 = state_50969;
if(inst_50664){
var statearr_51076_51192 = state_50969__$1;
(statearr_51076_51192[(1)] = (21));

} else {
var statearr_51077_51193 = state_50969__$1;
(statearr_51077_51193[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (52))){
var state_50969__$1 = state_50969;
var statearr_51078_51194 = state_50969__$1;
(statearr_51078_51194[(2)] = false);

(statearr_51078_51194[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (67))){
var state_50969__$1 = state_50969;
var statearr_51079_51195 = state_50969__$1;
(statearr_51079_51195[(2)] = true);

(statearr_51079_51195[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (71))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_51080_51196 = state_50969__$1;
(statearr_51080_51196[(2)] = inst_50602);

(statearr_51080_51196[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (42))){
var state_50969__$1 = state_50969;
var statearr_51081_51197 = state_50969__$1;
(statearr_51081_51197[(2)] = false);

(statearr_51081_51197[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (80))){
var state_50969__$1 = state_50969;
var statearr_51082_51198 = state_50969__$1;
(statearr_51082_51198[(2)] = true);

(statearr_51082_51198[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (37))){
var inst_50956 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51083_51199 = state_50969__$1;
(statearr_51083_51199[(2)] = inst_50956);

(statearr_51083_51199[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (63))){
var inst_50952 = (state_50969[(2)]);
var state_50969__$1 = state_50969;
var statearr_51084_51200 = state_50969__$1;
(statearr_51084_51200[(2)] = inst_50952);

(statearr_51084_51200[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (8))){
var inst_50602 = (state_50969[(7)]);
var inst_50613 = inst_50602.cljs$lang$protocol_mask$partition0$;
var inst_50614 = (inst_50613 & (64));
var inst_50615 = inst_50602.cljs$core$ISeq$;
var inst_50616 = (inst_50614) || (inst_50615);
var state_50969__$1 = state_50969;
if(cljs.core.truth_(inst_50616)){
var statearr_51085_51201 = state_50969__$1;
(statearr_51085_51201[(1)] = (11));

} else {
var statearr_51086_51202 = state_50969__$1;
(statearr_51086_51202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (49))){
var inst_50601 = (state_50969[(8)]);
var inst_50833 = cljs.core._EQ_.call(null,inst_50601,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_50969__$1 = state_50969;
if(inst_50833){
var statearr_51087_51203 = state_50969__$1;
(statearr_51087_51203[(1)] = (61));

} else {
var statearr_51088_51204 = state_50969__$1;
(statearr_51088_51204[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50970 === (84))){
var inst_50602 = (state_50969[(7)]);
var state_50969__$1 = state_50969;
var statearr_51089_51205 = state_50969__$1;
(statearr_51089_51205[(2)] = inst_50602);

(statearr_51089_51205[(1)] = (85));


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
var statearr_51093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51093[(0)] = cloudxmark$core$search_loop_$_state_machine__28390__auto__);

(statearr_51093[(1)] = (1));

return statearr_51093;
});
var cloudxmark$core$search_loop_$_state_machine__28390__auto____1 = (function (state_50969){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_50969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e51094){if((e51094 instanceof Object)){
var ex__28393__auto__ = e51094;
var statearr_51095_51206 = state_50969;
(statearr_51095_51206[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51207 = state_50969;
state_50969 = G__51207;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28390__auto__ = function(state_50969){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____1.call(this,state_50969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28390__auto____0;
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28390__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_51096 = f__28413__auto__.call(null);
(statearr_51096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_51096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471242643903