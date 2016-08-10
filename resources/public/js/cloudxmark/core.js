// Compiled by ClojureScript 1.9.89 {}
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
var idx_90675 = (0);
while(true){
var len1_90676 = b1.length;
if((cljs.core._EQ_.call(null,idx_90675,len1_90676)) || (cljs.core._EQ_.call(null,idx_90675,max_len))){
} else {
(b1[idx_90675] = ((b1[idx_90675]) ^ (b2[idx_90675])));

var G__90677 = (idx_90675 + (1));
idx_90675 = G__90677;
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
var args90680 = [];
var len__22551__auto___90683 = arguments.length;
var i__22552__auto___90684 = (0);
while(true){
if((i__22552__auto___90684 < len__22551__auto___90683)){
args90680.push((arguments[i__22552__auto___90684]));

var G__90685 = (i__22552__auto___90684 + (1));
i__22552__auto___90684 = G__90685;
continue;
} else {
}
break;
}

var G__90682 = args90680.length;
switch (G__90682) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90680.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__90678_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__90678_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__90679_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__90679_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22391__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22392__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22393__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22394__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22395__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22395__auto__,method_table__22391__auto__,prefer_table__22392__auto__,method_cache__22393__auto__,cached_hierarchy__22394__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__90687,_,p__90688){
var map__90689 = p__90687;
var map__90689__$1 = ((((!((map__90689 == null)))?((((map__90689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90689):map__90689);
var env = map__90689__$1;
var state = cljs.core.get.call(null,map__90689__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__90689__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__90690 = p__90688;
var map__90690__$1 = ((((!((map__90690 == null)))?((((map__90690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90690):map__90690);
var query_ver = cljs.core.get.call(null,map__90690__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__90690__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__90693 = lst;
var map__90693__$1 = ((((!((map__90693 == null)))?((((map__90693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90693):map__90693);
var lsts = cljs.core.get.call(null,map__90693__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__90693__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__90693__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__90693__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__90693__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_90695 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_90695);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22391__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22392__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22393__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22394__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22395__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22395__auto__,method_table__22391__auto__,prefer_table__22392__auto__,method_cache__22393__auto__,cached_hierarchy__22394__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__90696,_,p__90697){
var map__90698 = p__90696;
var map__90698__$1 = ((((!((map__90698 == null)))?((((map__90698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90698):map__90698);
var env = map__90698__$1;
var state = cljs.core.get.call(null,map__90698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90699 = p__90697;
var map__90699__$1 = ((((!((map__90699 == null)))?((((map__90699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90699):map__90699);
var status = map__90699__$1;
var id = cljs.core.get.call(null,map__90699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90698,map__90698__$1,env,state,map__90699,map__90699__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__90698,map__90698__$1,env,state,map__90699,map__90699__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__90702,_,p__90703){
var map__90704 = p__90702;
var map__90704__$1 = ((((!((map__90704 == null)))?((((map__90704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90704):map__90704);
var env = map__90704__$1;
var state = cljs.core.get.call(null,map__90704__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90705 = p__90703;
var map__90705__$1 = ((((!((map__90705 == null)))?((((map__90705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90705):map__90705);
var path = cljs.core.get.call(null,map__90705__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__90705__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__90705__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90704,map__90704__$1,env,state,map__90705,map__90705__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__90704,map__90704__$1,env,state,map__90705,map__90705__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__90708,_,p__90709){
var map__90710 = p__90708;
var map__90710__$1 = ((((!((map__90710 == null)))?((((map__90710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90710):map__90710);
var env = map__90710__$1;
var state = cljs.core.get.call(null,map__90710__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90711 = p__90709;
var map__90711__$1 = ((((!((map__90711 == null)))?((((map__90711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90711):map__90711);
var data_map = map__90711__$1;
var lst_name = cljs.core.get.call(null,map__90711__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__90711__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__90711__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__90711__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90710,map__90710__$1,env,state,map__90711,map__90711__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__90710,map__90710__$1,env,state,map__90711,map__90711__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__90714,_,p__90715){
var map__90716 = p__90714;
var map__90716__$1 = ((((!((map__90716 == null)))?((((map__90716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90716):map__90716);
var env = map__90716__$1;
var state = cljs.core.get.call(null,map__90716__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90717 = p__90715;
var map__90717__$1 = ((((!((map__90717 == null)))?((((map__90717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90717):map__90717);
var field_id = cljs.core.get.call(null,map__90717__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__90717__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90716,map__90716__$1,env,state,map__90717,map__90717__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__90716,map__90716__$1,env,state,map__90717,map__90717__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__90720,_,p__90721){
var map__90722 = p__90720;
var map__90722__$1 = ((((!((map__90722 == null)))?((((map__90722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90722):map__90722);
var env = map__90722__$1;
var state = cljs.core.get.call(null,map__90722__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90723 = p__90721;
var map__90723__$1 = ((((!((map__90723 == null)))?((((map__90723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90723):map__90723);
var data_map = map__90723__$1;
var user_id = cljs.core.get.call(null,map__90723__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__90723__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__90723__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90722,map__90722__$1,env,state,map__90723,map__90723__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__90722,map__90722__$1,env,state,map__90723,map__90723__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__90726,_,p__90727){
var map__90728 = p__90726;
var map__90728__$1 = ((((!((map__90728 == null)))?((((map__90728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90728):map__90728);
var env = map__90728__$1;
var state = cljs.core.get.call(null,map__90728__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90729 = p__90727;
var map__90729__$1 = ((((!((map__90729 == null)))?((((map__90729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90729):map__90729);
var data_map = map__90729__$1;
var user_id = cljs.core.get.call(null,map__90729__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__90729__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90728,map__90728__$1,env,state,map__90729,map__90729__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__90728,map__90728__$1,env,state,map__90729,map__90729__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__90732,_,p__90733){
var map__90734 = p__90732;
var map__90734__$1 = ((((!((map__90734 == null)))?((((map__90734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90734):map__90734);
var env = map__90734__$1;
var state = cljs.core.get.call(null,map__90734__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90735 = p__90733;
var map__90735__$1 = ((((!((map__90735 == null)))?((((map__90735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90735):map__90735);
var data_map = map__90735__$1;
var type = cljs.core.get.call(null,map__90735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__90735__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90734,map__90734__$1,env,state,map__90735,map__90735__$1,data_map,type,fields){
return (function (){
return null;
});})(map__90734,map__90734__$1,env,state,map__90735,map__90735__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__90738,_,p__90739){
var map__90740 = p__90738;
var map__90740__$1 = ((((!((map__90740 == null)))?((((map__90740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90740):map__90740);
var env = map__90740__$1;
var state = cljs.core.get.call(null,map__90740__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90741 = p__90739;
var map__90741__$1 = ((((!((map__90741 == null)))?((((map__90741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90741):map__90741);
var data_map = map__90741__$1;
var name = cljs.core.get.call(null,map__90741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__90741__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90740,map__90740__$1,env,state,map__90741,map__90741__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__90740,map__90740__$1,env,state,map__90741,map__90741__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__90744,_,p__90745){
var map__90746 = p__90744;
var map__90746__$1 = ((((!((map__90746 == null)))?((((map__90746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90746):map__90746);
var env = map__90746__$1;
var state = cljs.core.get.call(null,map__90746__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90747 = p__90745;
var map__90747__$1 = ((((!((map__90747 == null)))?((((map__90747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90747):map__90747);
var data_map = map__90747__$1;
var name = cljs.core.get.call(null,map__90747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__90747__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90746,map__90746__$1,env,state,map__90747,map__90747__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr_lst_name = (function (){var or__21368__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null));
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,lsts),"name");
}
})();
var curr_lst = cloudxmark.core.get_by_map_val.call(null,"name",curr_lst_name,lsts);
var lst_id = cljs.core.get.call(null,curr_lst,"lst_id");
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__90746,map__90746__$1,env,state,map__90747,map__90747__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__90750,_,___$1){
var map__90751 = p__90750;
var map__90751__$1 = ((((!((map__90751 == null)))?((((map__90751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90751):map__90751);
var env = map__90751__$1;
var state = cljs.core.get.call(null,map__90751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90751,map__90751__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__90751,map__90751__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__90753,_,p__90754){
var map__90755 = p__90753;
var map__90755__$1 = ((((!((map__90755 == null)))?((((map__90755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90755):map__90755);
var env = map__90755__$1;
var state = cljs.core.get.call(null,map__90755__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__90756 = p__90754;
var map__90756__$1 = ((((!((map__90756 == null)))?((((map__90756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90756):map__90756);
var data_map = map__90756__$1;
var status = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__90756__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__90755,map__90755__$1,env,state,map__90756,map__90756__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
if(cljs.core.truth_((function (){var and__21356__auto__ = status;
if(cljs.core.truth_(and__21356__auto__)){
return status_id;
} else {
return and__21356__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__90755,map__90755__$1,env,state,map__90756,map__90756__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args90759 = [];
var len__22551__auto___90762 = arguments.length;
var i__22552__auto___90763 = (0);
while(true){
if((i__22552__auto___90763 < len__22551__auto___90762)){
args90759.push((arguments[i__22552__auto___90763]));

var G__90764 = (i__22552__auto___90763 + (1));
i__22552__auto___90763 = G__90764;
continue;
} else {
}
break;
}

var G__90761 = args90759.length;
switch (G__90761) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90759.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21368__auto__ = field_state;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22294__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22294__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_name,item,col_name){
var field_val = (function (){var or__21368__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return "";
}
})();
var item_name = cljs.core.get.call(null,item,"name");
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_name),cljs.core.str("-"),cljs.core.str(item_name),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val,item_name){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605)),(function (){var x__22294__auto__ = lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-name","item-name",1560972259)),(function (){var x__22294__auto__ = item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22294__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22294__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
});})(field_val,item_name))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__90766){
var map__90772 = p__90766;
var map__90772__$1 = ((((!((map__90772 == null)))?((((map__90772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90772):map__90772);
var info = cljs.core.get.call(null,map__90772__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__90772__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__90772__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__90774 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__90774,(0),null);
var msg = cljs.core.nth.call(null,vec__90774,(1),null);
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
var new_item_value = (function (){var or__21368__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22294__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22294__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22294__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add Item"))));
});
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,lst_name,curr_lst_name){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(lst_name)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,lst_name,curr_lst_name), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null);
var merge_QMARK_ = false;
var value = lst_name;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22294__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22294__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22294__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
} else {
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(lst_name)].join(''));
}
})});
});
cloudxmark.core.add_lst_button = (function cloudxmark$core$add_lst_button(comp){
return React.DOM.button({"type": "button", "key": "addLstButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_lst_name = new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_lst_description = (function (){var or__21368__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22294__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22294__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22294__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__90779 = lst;
var map__90779__$1 = ((((!((map__90779 == null)))?((((map__90779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90779):map__90779);
var lsts = cljs.core.get.call(null,map__90779__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__90779__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__90779,map__90779__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__90779,map__90779__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__90783 = lst;
var map__90783__$1 = ((((!((map__90783 == null)))?((((map__90783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90783):map__90783);
var status = cljs.core.get.call(null,map__90783__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_lst_name){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,(function (){var settings_lst = cloudxmark.core.get_by_map_val.call(null,"name",cloudxmark.common.lst_common.settings_lst_name,lsts);
var settings = cljs.core.get.call(null,settings_lst,"items");
var show_all_lsts = cljs.core._EQ_.call(null,"true",cljs.core.get.call(null,settings,cljs.core.get.call(null,cloudxmark.common.lst_common.setting_names,new cljs.core.Keyword(null,"show-all-lsts","show-all-lsts",-179827094))));
var display_lsts = ((show_all_lsts)?lsts:cljs.core.filter.call(null,((function (settings_lst,settings,show_all_lsts){
return (function (lst){
return cljs.core.not.call(null,cljs.core.get.call(null,lst,"name").startsWith("_-"));
});})(settings_lst,settings,show_all_lsts))
,lsts));
var selected_lst_name = (function (){var or__21368__auto__ = curr_lst_name;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,display_lsts),"name");
}
})();
if(cljs.core.seq.call(null,display_lsts)){
return cljs.core.map.call(null,((function (settings_lst,settings,show_all_lsts,display_lsts,selected_lst_name){
return (function (lst){
var lst_name = cljs.core.get.call(null,lst,"name");
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str("-"),cljs.core.str(cljs.core.get.call(null,lst,"name"))].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,lst_name,selected_lst_name)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str("lst-lst-"),cljs.core.str(lst_name),cljs.core.str("-span")].join('')},om.util.force_children.call(null,lst_name))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,lst_name,selected_lst_name))?cloudxmark.core.lst_edit_area.call(null,comp,selected_lst_name):null)));
});})(settings_lst,settings,show_all_lsts,display_lsts,selected_lst_name))
,display_lsts);
} else {
return null;
}
})()),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.settings_editor = (function cloudxmark$core$settings_editor(comp,settings_lst){
if(cljs.core.truth_(settings_lst)){
return React.DOM.div({"key": "settings-editor"},om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Settings"))),om.util.force_children.call(null,(function (){var items = cljs.core.get.call(null,settings_lst,"items");
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
var vec__90789 = (function (){var G__90792 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__90792) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__90789,(0),null);
var query_key = cljs.core.nth.call(null,vec__90789,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__90789,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__90789,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22294__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22294__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22294__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22294__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22294__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22294__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22294__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22294__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22294__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22294__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Add User"));
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
var this__28281__auto__ = this;
React.Component.apply(this__28281__auto__,arguments);

if(!((this__28281__auto__.initLocalState == null))){
this__28281__auto__.state = this__28281__auto__.initLocalState();
} else {
this__28281__auto__.state = {};
}

return this__28281__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x90798_90810 = cloudxmark.core.Lsts.prototype;
x90798_90810.componentWillUpdate = ((function (x90798_90810){
return (function (next_props__28183__auto__,next_state__28184__auto__){
var this__28182__auto__ = this;
if(((!((this__28182__auto__ == null)))?(((false) || (this__28182__auto__.om$next$Ident$))?true:false):false)){
var ident__28186__auto___90811 = om.next.ident.call(null,this__28182__auto__,om.next.props.call(null,this__28182__auto__));
var next_ident__28187__auto___90812 = om.next.ident.call(null,this__28182__auto__,om.next._next_props.call(null,next_props__28183__auto__,this__28182__auto__));
if(cljs.core.not_EQ_.call(null,ident__28186__auto___90811,next_ident__28187__auto___90812)){
var idxr__28188__auto___90813 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28188__auto___90813 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28188__auto___90813),((function (idxr__28188__auto___90813,ident__28186__auto___90811,next_ident__28187__auto___90812,this__28182__auto__,x90798_90810){
return (function (indexes__28189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28186__auto___90811], null),cljs.core.disj,this__28182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28187__auto___90812], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28182__auto__);
});})(idxr__28188__auto___90813,ident__28186__auto___90811,next_ident__28187__auto___90812,this__28182__auto__,x90798_90810))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28182__auto__);
});})(x90798_90810))
;

x90798_90810.shouldComponentUpdate = ((function (x90798_90810){
return (function (next_props__28183__auto__,next_state__28184__auto__){
var this__28182__auto__ = this;
var next_children__28185__auto__ = next_props__28183__auto__.children;
var next_props__28183__auto____$1 = goog.object.get(next_props__28183__auto__,"omcljs$value");
var next_props__28183__auto____$2 = (function (){var G__90800 = next_props__28183__auto____$1;
if((next_props__28183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__90800);
} else {
return G__90800;
}
})();
var or__21368__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28182__auto__),next_props__28183__auto____$2);
if(or__21368__auto__){
return or__21368__auto__;
} else {
var or__21368__auto____$1 = (function (){var and__21356__auto__ = this__28182__auto__.state;
if(cljs.core.truth_(and__21356__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28182__auto__.state,"omcljs$state"),goog.object.get(next_state__28184__auto__,"omcljs$state"));
} else {
return and__21356__auto__;
}
})();
if(cljs.core.truth_(or__21368__auto____$1)){
return or__21368__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28182__auto__.props.children,next_children__28185__auto__);
}
}
});})(x90798_90810))
;

x90798_90810.componentWillUnmount = ((function (x90798_90810){
return (function (){
var this__28182__auto__ = this;
var r__28193__auto__ = om.next.get_reconciler.call(null,this__28182__auto__);
var cfg__28194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28193__auto__);
var st__28195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28194__auto__);
var indexer__28192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28194__auto__);
if(cljs.core.truth_((function (){var and__21356__auto__ = !((st__28195__auto__ == null));
if(and__21356__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28182__auto__], null));
} else {
return and__21356__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28182__auto__);
} else {
}

if((indexer__28192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28192__auto__,this__28182__auto__);
}
});})(x90798_90810))
;

x90798_90810.componentDidUpdate = ((function (x90798_90810){
return (function (prev_props__28190__auto__,prev_state__28191__auto__){
var this__28182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28182__auto__);
});})(x90798_90810))
;

x90798_90810.isMounted = ((function (x90798_90810){
return (function (){
var this__28182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x90798_90810))
;

x90798_90810.componentWillMount = ((function (x90798_90810){
return (function (){
var this__28182__auto__ = this;
var indexer__28192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28192__auto__,this__28182__auto__);
}
});})(x90798_90810))
;

x90798_90810.render = ((function (x90798_90810){
return (function (){
var this__28181__auto__ = this;
var this$ = this__28181__auto__;
var _STAR_reconciler_STAR_90801 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_90802 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_90803 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_90804 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_90805 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28181__auto__);

om.next._STAR_parent_STAR_ = this__28181__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__90806 = lst;
var map__90806__$1 = ((((!((map__90806 == null)))?((((map__90806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90806):map__90806);
var lsts = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__90806__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_90805;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_90804;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_90803;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_90802;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_90801;
}});})(x90798_90810))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x90808_90814 = cloudxmark.core.Lsts;
x90808_90814.om$next$IQueryParams$ = true;

x90808_90814.om$next$IQueryParams$params$arity$1 = ((function (x90808_90814){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x90808_90814))
;

x90808_90814.om$next$IQuery$ = true;

x90808_90814.om$next$IQuery$query$arity$1 = ((function (x90808_90814){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x90808_90814))
;


var x90809_90815 = cloudxmark.core.Lsts.prototype;
x90809_90815.om$next$IQueryParams$ = true;

x90809_90815.om$next$IQueryParams$params$arity$1 = ((function (x90809_90815){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x90809_90815))
;

x90809_90815.om$next$IQuery$ = true;

x90809_90815.om$next$IQuery$query$arity$1 = ((function (x90809_90815){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x90809_90815))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28283__auto__,writer__28284__auto__,opt__28285__auto__){
return cljs.core._write.call(null,writer__28284__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__90824,cb){
var map__90825 = p__90824;
var map__90825__$1 = ((((!((map__90825 == null)))?((((map__90825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90825):map__90825);
var lst_search = cljs.core.get.call(null,map__90825__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__90827 = om.next.query__GT_ast.call(null,lst_search);
var map__90827__$1 = ((((!((map__90827 == null)))?((((map__90827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90827):map__90827);
var vec__90828 = cljs.core.get.call(null,map__90827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__90828,(0),null);
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
var map__90836 = result;
var map__90836__$1 = ((((!((map__90836 == null)))?((((map__90836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90836):map__90836);
var lsts = cljs.core.get.call(null,map__90836__$1,"lsts");
var user_id = cljs.core.get.call(null,map__90836__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__90836__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__90837 = json_status;
var map__90837__$1 = ((((!((map__90837 == null)))?((((map__90837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90837):map__90837);
var info = cljs.core.get.call(null,map__90837__$1,"info");
var warn = cljs.core.get.call(null,map__90837__$1,"warn");
var error = cljs.core.get.call(null,map__90837__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__90842 = json_status;
var map__90842__$1 = ((((!((map__90842 == null)))?((((map__90842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90842):map__90842);
var info = cljs.core.get.call(null,map__90842__$1,"info");
var warn = cljs.core.get.call(null,map__90842__$1,"warn");
var error = cljs.core.get.call(null,map__90842__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28050__auto__){
return (function (){
var f__28051__auto__ = (function (){var switch__28027__auto__ = ((function (c__28050__auto__){
return (function (state_91720){
var state_val_91721 = (state_91720[(1)]);
if((state_val_91721 === (65))){
var state_91720__$1 = state_91720;
var statearr_91722_91844 = state_91720__$1;
(statearr_91722_91844[(2)] = false);

(statearr_91722_91844[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (70))){
var inst_91362 = (state_91720[(7)]);
var inst_91612 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91723_91845 = state_91720__$1;
(statearr_91723_91845[(2)] = inst_91612);

(statearr_91723_91845[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (62))){
var inst_91361 = (state_91720[(8)]);
var inst_91648 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_91720__$1 = state_91720;
if(inst_91648){
var statearr_91724_91846 = state_91720__$1;
(statearr_91724_91846[(1)] = (74));

} else {
var statearr_91725_91847 = state_91720__$1;
(statearr_91725_91847[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (74))){
var inst_91362 = (state_91720[(7)]);
var inst_91651 = [cljs.core.str("lst query data:"),cljs.core.str(inst_91362)].join('');
var inst_91652 = cljs.core.println.call(null,inst_91651);
var inst_91654 = (inst_91362 == null);
var inst_91655 = cljs.core.not.call(null,inst_91654);
var state_91720__$1 = (function (){var statearr_91726 = state_91720;
(statearr_91726[(9)] = inst_91652);

return statearr_91726;
})();
if(inst_91655){
var statearr_91727_91848 = state_91720__$1;
(statearr_91727_91848[(1)] = (77));

} else {
var statearr_91728_91849 = state_91720__$1;
(statearr_91728_91849[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (7))){
var inst_91713 = (state_91720[(2)]);
var state_91720__$1 = (function (){var statearr_91729 = state_91720;
(statearr_91729[(10)] = inst_91713);

return statearr_91729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(90),c);
} else {
if((state_val_91721 === (59))){
var inst_91564 = (state_91720[(2)]);
var inst_91565 = cljs.core.get.call(null,inst_91564,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_91566 = cljs.core.get.call(null,inst_91564,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_91567 = cljs.core.get.call(null,inst_91564,new cljs.core.Keyword(null,"value","value",305978217));
var inst_91568 = encodeURIComponent(inst_91565);
var inst_91569 = encodeURIComponent(inst_91566);
var inst_91570 = encodeURIComponent(inst_91567);
var inst_91571 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_91568),cljs.core.str("&name="),cljs.core.str(inst_91569),cljs.core.str("&value="),cljs.core.str(inst_91570)].join('');
var inst_91572 = cloudxmark.core.jsonp.call(null,inst_91571);
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(60),inst_91572);
} else {
if((state_val_91721 === (86))){
var inst_91674 = (state_91720[(11)]);
var inst_91677 = (state_91720[(2)]);
var inst_91678 = cljs.core.js__GT_clj.call(null,inst_91677);
var inst_91679 = cloudxmark.core.convert_json_lsts_result.call(null,inst_91678,inst_91674,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_91680 = cljs.core.List.EMPTY;
var inst_91681 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_91682 = cljs.core._conj.call(null,inst_91680,inst_91681);
var inst_91683 = cljs.core.List.EMPTY;
var inst_91684 = cljs.core._conj.call(null,inst_91683,inst_91679);
var inst_91685 = cljs.core.concat.call(null,inst_91682,inst_91684);
var inst_91686 = cljs.core.seq.call(null,inst_91685);
var inst_91687 = cljs.core.sequence.call(null,inst_91686);
var inst_91688 = cljs.core.List.EMPTY;
var inst_91689 = cljs.core._conj.call(null,inst_91688,inst_91687);
var inst_91690 = cljs.core.concat.call(null,inst_91689);
var inst_91691 = cljs.core.seq.call(null,inst_91690);
var inst_91692 = cljs.core.sequence.call(null,inst_91691);
var inst_91693 = cljs.core.vec.call(null,inst_91692);
var inst_91694 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91693);
var state_91720__$1 = state_91720;
var statearr_91730_91850 = state_91720__$1;
(statearr_91730_91850[(2)] = inst_91694);

(statearr_91730_91850[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (20))){
var inst_91711 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91731_91851 = state_91720__$1;
(statearr_91731_91851[(2)] = inst_91711);

(statearr_91731_91851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (72))){
var inst_91615 = (state_91720[(2)]);
var inst_91616 = cljs.core.get.call(null,inst_91615,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_91617 = cljs.core.get.call(null,inst_91615,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_91618 = cljs.core.get.call(null,inst_91615,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_91619 = cljs.core.get.call(null,inst_91615,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_91620 = cljs.core.get.call(null,inst_91615,new cljs.core.Keyword(null,"value","value",305978217));
var inst_91621 = encodeURIComponent(inst_91616);
var inst_91622 = encodeURIComponent(inst_91617);
var inst_91623 = encodeURIComponent(inst_91618);
var inst_91624 = encodeURIComponent(inst_91619);
var inst_91625 = encodeURIComponent(inst_91620);
var inst_91626 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_91621),cljs.core.str("&lst-name="),cljs.core.str(inst_91622),cljs.core.str("&orig-name="),cljs.core.str(inst_91623),cljs.core.str("&col-name="),cljs.core.str(inst_91624),cljs.core.str("&value="),cljs.core.str(inst_91625)].join('');
var inst_91627 = cloudxmark.core.jsonp.call(null,inst_91626);
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(73),inst_91627);
} else {
if((state_val_91721 === (58))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91732_91852 = state_91720__$1;
(statearr_91732_91852[(2)] = inst_91362);

(statearr_91732_91852[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (60))){
var inst_91574 = (state_91720[(2)]);
var inst_91575 = cljs.core.js__GT_clj.call(null,inst_91574);
var inst_91576 = cloudxmark.core.convert_json_lsts_result.call(null,inst_91575,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_91577 = cljs.core.List.EMPTY;
var inst_91578 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_91579 = cljs.core._conj.call(null,inst_91577,inst_91578);
var inst_91580 = cljs.core.List.EMPTY;
var inst_91581 = cljs.core._conj.call(null,inst_91580,inst_91576);
var inst_91582 = cljs.core.concat.call(null,inst_91579,inst_91581);
var inst_91583 = cljs.core.seq.call(null,inst_91582);
var inst_91584 = cljs.core.sequence.call(null,inst_91583);
var inst_91585 = cljs.core.List.EMPTY;
var inst_91586 = cljs.core._conj.call(null,inst_91585,inst_91584);
var inst_91587 = cljs.core.concat.call(null,inst_91586);
var inst_91588 = cljs.core.seq.call(null,inst_91587);
var inst_91589 = cljs.core.sequence.call(null,inst_91588);
var inst_91590 = cljs.core.vec.call(null,inst_91589);
var inst_91591 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91590);
var state_91720__$1 = state_91720;
var statearr_91733_91853 = state_91720__$1;
(statearr_91733_91853[(2)] = inst_91591);

(statearr_91733_91853[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (27))){
var inst_91362 = (state_91720[(7)]);
var inst_91438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91734_91854 = state_91720__$1;
(statearr_91734_91854[(2)] = inst_91438);

(statearr_91734_91854[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (1))){
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(2),c);
} else {
if((state_val_91721 === (69))){
var inst_91607 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91735_91855 = state_91720__$1;
(statearr_91735_91855[(2)] = inst_91607);

(statearr_91735_91855[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (24))){
var state_91720__$1 = state_91720;
var statearr_91736_91856 = state_91720__$1;
(statearr_91736_91856[(2)] = true);

(statearr_91736_91856[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (55))){
var state_91720__$1 = state_91720;
var statearr_91737_91857 = state_91720__$1;
(statearr_91737_91857[(2)] = false);

(statearr_91737_91857[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (85))){
var inst_91672 = (state_91720[(2)]);
var inst_91673 = cljs.core.get.call(null,inst_91672,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_91674 = cljs.core.get.call(null,inst_91672,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_91675 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_91720__$1 = (function (){var statearr_91738 = state_91720;
(statearr_91738[(12)] = inst_91673);

(statearr_91738[(11)] = inst_91674);

return statearr_91738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(86),inst_91675);
} else {
if((state_val_91721 === (39))){
var state_91720__$1 = state_91720;
var statearr_91739_91858 = state_91720__$1;
(statearr_91739_91858[(2)] = false);

(statearr_91739_91858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (88))){
var state_91720__$1 = state_91720;
var statearr_91740_91859 = state_91720__$1;
(statearr_91740_91859[(2)] = null);

(statearr_91740_91859[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (46))){
var inst_91515 = (state_91720[(2)]);
var inst_91516 = cljs.core.get.call(null,inst_91515,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_91517 = cljs.core.get.call(null,inst_91515,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_91518 = encodeURIComponent(inst_91516);
var inst_91519 = encodeURIComponent(inst_91517);
var inst_91520 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_91518),cljs.core.str("&desc="),cljs.core.str(inst_91519)].join('');
var inst_91521 = cloudxmark.core.jsonp.call(null,inst_91520);
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(47),inst_91521);
} else {
if((state_val_91721 === (4))){
var inst_91718 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91720__$1,inst_91718);
} else {
if((state_val_91721 === (77))){
var inst_91362 = (state_91720[(7)]);
var inst_91657 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91658 = (inst_91657 & (64));
var inst_91659 = inst_91362.cljs$core$ISeq$;
var inst_91660 = (inst_91658) || (inst_91659);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91660)){
var statearr_91741_91860 = state_91720__$1;
(statearr_91741_91860[(1)] = (80));

} else {
var statearr_91742_91861 = state_91720__$1;
(statearr_91742_91861[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (54))){
var state_91720__$1 = state_91720;
var statearr_91743_91862 = state_91720__$1;
(statearr_91743_91862[(2)] = true);

(statearr_91743_91862[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (15))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91744_91863 = state_91720__$1;
(statearr_91744_91863[(2)] = inst_91362);

(statearr_91744_91863[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (48))){
var inst_91362 = (state_91720[(7)]);
var inst_91546 = (inst_91362 == null);
var inst_91547 = cljs.core.not.call(null,inst_91546);
var state_91720__$1 = state_91720;
if(inst_91547){
var statearr_91745_91864 = state_91720__$1;
(statearr_91745_91864[(1)] = (51));

} else {
var statearr_91746_91865 = state_91720__$1;
(statearr_91746_91865[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (50))){
var inst_91705 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91747_91866 = state_91720__$1;
(statearr_91747_91866[(2)] = inst_91705);

(statearr_91747_91866[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (75))){
var state_91720__$1 = state_91720;
var statearr_91748_91867 = state_91720__$1;
(statearr_91748_91867[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (21))){
var inst_91362 = (state_91720[(7)]);
var inst_91426 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91427 = (inst_91426 & (64));
var inst_91428 = inst_91362.cljs$core$ISeq$;
var inst_91429 = (inst_91427) || (inst_91428);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91429)){
var statearr_91750_91868 = state_91720__$1;
(statearr_91750_91868[(1)] = (24));

} else {
var statearr_91751_91869 = state_91720__$1;
(statearr_91751_91869[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (31))){
var inst_91472 = cloudxmark.core.jsonp.call(null,"/logout");
var state_91720__$1 = state_91720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(34),inst_91472);
} else {
if((state_val_91721 === (32))){
var inst_91361 = (state_91720[(8)]);
var inst_91493 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_91720__$1 = state_91720;
if(inst_91493){
var statearr_91752_91870 = state_91720__$1;
(statearr_91752_91870[(1)] = (35));

} else {
var statearr_91753_91871 = state_91720__$1;
(statearr_91753_91871[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (40))){
var inst_91510 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91510)){
var statearr_91754_91872 = state_91720__$1;
(statearr_91754_91872[(1)] = (44));

} else {
var statearr_91755_91873 = state_91720__$1;
(statearr_91755_91873[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (56))){
var inst_91556 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91756_91874 = state_91720__$1;
(statearr_91756_91874[(2)] = inst_91556);

(statearr_91756_91874[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (33))){
var inst_91709 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91757_91875 = state_91720__$1;
(statearr_91757_91875[(2)] = inst_91709);

(statearr_91757_91875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (13))){
var inst_91380 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91758_91876 = state_91720__$1;
(statearr_91758_91876[(2)] = inst_91380);

(statearr_91758_91876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (22))){
var state_91720__$1 = state_91720;
var statearr_91759_91877 = state_91720__$1;
(statearr_91759_91877[(2)] = false);

(statearr_91759_91877[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (90))){
var inst_91715 = (state_91720[(2)]);
var inst_91356 = inst_91715;
var state_91720__$1 = (function (){var statearr_91760 = state_91720;
(statearr_91760[(13)] = inst_91356);

return statearr_91760;
})();
var statearr_91761_91878 = state_91720__$1;
(statearr_91761_91878[(2)] = null);

(statearr_91761_91878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (36))){
var inst_91361 = (state_91720[(8)]);
var inst_91542 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_91720__$1 = state_91720;
if(inst_91542){
var statearr_91762_91879 = state_91720__$1;
(statearr_91762_91879[(1)] = (48));

} else {
var statearr_91763_91880 = state_91720__$1;
(statearr_91763_91880[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (41))){
var state_91720__$1 = state_91720;
var statearr_91764_91881 = state_91720__$1;
(statearr_91764_91881[(2)] = true);

(statearr_91764_91881[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (89))){
var inst_91699 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91765_91882 = state_91720__$1;
(statearr_91765_91882[(2)] = inst_91699);

(statearr_91765_91882[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (43))){
var inst_91507 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91766_91883 = state_91720__$1;
(statearr_91766_91883[(2)] = inst_91507);

(statearr_91766_91883[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (61))){
var inst_91362 = (state_91720[(7)]);
var inst_91597 = (inst_91362 == null);
var inst_91598 = cljs.core.not.call(null,inst_91597);
var state_91720__$1 = state_91720;
if(inst_91598){
var statearr_91767_91884 = state_91720__$1;
(statearr_91767_91884[(1)] = (64));

} else {
var statearr_91768_91885 = state_91720__$1;
(statearr_91768_91885[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (29))){
var inst_91441 = (state_91720[(2)]);
var inst_91442 = cljs.core.get.call(null,inst_91441,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_91443 = cljs.core.get.call(null,inst_91441,new cljs.core.Keyword(null,"password","password",417022471));
var inst_91444 = cljs.core.get.call(null,inst_91441,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_91445 = cloudxmark.core.enc_password.call(null,inst_91443);
var inst_91446 = encodeURIComponent(inst_91442);
var inst_91447 = encodeURIComponent(inst_91445);
var inst_91448 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_91446),cljs.core.str("&pass="),cljs.core.str(inst_91447)].join('');
var inst_91449 = cloudxmark.core.jsonp.call(null,inst_91448);
var state_91720__$1 = (function (){var statearr_91769 = state_91720;
(statearr_91769[(14)] = inst_91444);

return statearr_91769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(30),inst_91449);
} else {
if((state_val_91721 === (44))){
var inst_91362 = (state_91720[(7)]);
var inst_91512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91770_91886 = state_91720__$1;
(statearr_91770_91886[(2)] = inst_91512);

(statearr_91770_91886[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (6))){
var inst_91361 = (state_91720[(8)]);
var inst_91419 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_91720__$1 = state_91720;
if(inst_91419){
var statearr_91771_91887 = state_91720__$1;
(statearr_91771_91887[(1)] = (18));

} else {
var statearr_91772_91888 = state_91720__$1;
(statearr_91772_91888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (28))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91773_91889 = state_91720__$1;
(statearr_91773_91889[(2)] = inst_91362);

(statearr_91773_91889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (64))){
var inst_91362 = (state_91720[(7)]);
var inst_91600 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91601 = (inst_91600 & (64));
var inst_91602 = inst_91362.cljs$core$ISeq$;
var inst_91603 = (inst_91601) || (inst_91602);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91603)){
var statearr_91774_91890 = state_91720__$1;
(statearr_91774_91890[(1)] = (67));

} else {
var statearr_91775_91891 = state_91720__$1;
(statearr_91775_91891[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (51))){
var inst_91362 = (state_91720[(7)]);
var inst_91549 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91550 = (inst_91549 & (64));
var inst_91551 = inst_91362.cljs$core$ISeq$;
var inst_91552 = (inst_91550) || (inst_91551);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91552)){
var statearr_91776_91892 = state_91720__$1;
(statearr_91776_91892[(1)] = (54));

} else {
var statearr_91777_91893 = state_91720__$1;
(statearr_91777_91893[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (25))){
var state_91720__$1 = state_91720;
var statearr_91778_91894 = state_91720__$1;
(statearr_91778_91894[(2)] = false);

(statearr_91778_91894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (34))){
var inst_91474 = (state_91720[(2)]);
var inst_91475 = cljs.core.js__GT_clj.call(null,inst_91474);
var inst_91476 = cloudxmark.core.convert_json_status.call(null,inst_91475,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_91477 = cljs.core.List.EMPTY;
var inst_91478 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_91479 = cljs.core._conj.call(null,inst_91477,inst_91478);
var inst_91480 = cljs.core.List.EMPTY;
var inst_91481 = cljs.core._conj.call(null,inst_91480,inst_91476);
var inst_91482 = cljs.core.concat.call(null,inst_91479,inst_91481);
var inst_91483 = cljs.core.seq.call(null,inst_91482);
var inst_91484 = cljs.core.sequence.call(null,inst_91483);
var inst_91485 = cljs.core.List.EMPTY;
var inst_91486 = cljs.core._conj.call(null,inst_91485,inst_91484);
var inst_91487 = cljs.core.concat.call(null,inst_91486);
var inst_91488 = cljs.core.seq.call(null,inst_91487);
var inst_91489 = cljs.core.sequence.call(null,inst_91488);
var inst_91490 = cljs.core.vec.call(null,inst_91489);
var inst_91491 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91490);
var state_91720__$1 = state_91720;
var statearr_91779_91895 = state_91720__$1;
(statearr_91779_91895[(2)] = inst_91491);

(statearr_91779_91895[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (17))){
var inst_91390 = (state_91720[(15)]);
var inst_91391 = (state_91720[(16)]);
var inst_91397 = (state_91720[(2)]);
var inst_91398 = cljs.core.js__GT_clj.call(null,inst_91397);
var inst_91399 = cloudxmark.core.gen_key_bytes.call(null,inst_91390);
var inst_91400 = cloudxmark.core.create_aes_cbc.call(null,inst_91399);
var inst_91401 = cloudxmark.core.convert_json_lsts_result.call(null,inst_91398,inst_91391,new cljs.core.Keyword(null,"login","login",55217519));
var inst_91402 = cljs.core.assoc.call(null,inst_91401,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_91400);
var inst_91403 = cljs.core.List.EMPTY;
var inst_91404 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_91405 = cljs.core._conj.call(null,inst_91403,inst_91404);
var inst_91406 = cljs.core.List.EMPTY;
var inst_91407 = cljs.core._conj.call(null,inst_91406,inst_91402);
var inst_91408 = cljs.core.concat.call(null,inst_91405,inst_91407);
var inst_91409 = cljs.core.seq.call(null,inst_91408);
var inst_91410 = cljs.core.sequence.call(null,inst_91409);
var inst_91411 = cljs.core.List.EMPTY;
var inst_91412 = cljs.core._conj.call(null,inst_91411,inst_91410);
var inst_91413 = cljs.core.concat.call(null,inst_91412);
var inst_91414 = cljs.core.seq.call(null,inst_91413);
var inst_91415 = cljs.core.sequence.call(null,inst_91414);
var inst_91416 = cljs.core.vec.call(null,inst_91415);
var inst_91417 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91416);
var state_91720__$1 = state_91720;
var statearr_91780_91896 = state_91720__$1;
(statearr_91780_91896[(2)] = inst_91417);

(statearr_91780_91896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (3))){
var inst_91356 = (state_91720[(13)]);
var inst_91361 = (state_91720[(8)]);
var inst_91361__$1 = cljs.core.nth.call(null,inst_91356,(0),null);
var inst_91362 = cljs.core.nth.call(null,inst_91356,(1),null);
var inst_91363 = cljs.core.nth.call(null,inst_91356,(2),null);
var inst_91364 = cljs.core._EQ_.call(null,inst_91361__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_91720__$1 = (function (){var statearr_91781 = state_91720;
(statearr_91781[(8)] = inst_91361__$1);

(statearr_91781[(7)] = inst_91362);

(statearr_91781[(17)] = inst_91363);

return statearr_91781;
})();
if(inst_91364){
var statearr_91782_91897 = state_91720__$1;
(statearr_91782_91897[(1)] = (5));

} else {
var statearr_91783_91898 = state_91720__$1;
(statearr_91783_91898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (12))){
var state_91720__$1 = state_91720;
var statearr_91784_91899 = state_91720__$1;
(statearr_91784_91899[(2)] = false);

(statearr_91784_91899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (2))){
var inst_91352 = (state_91720[(2)]);
var inst_91353 = cljs.core.nth.call(null,inst_91352,(0),null);
var inst_91354 = cljs.core.nth.call(null,inst_91352,(1),null);
var inst_91355 = cljs.core.nth.call(null,inst_91352,(2),null);
var inst_91356 = inst_91352;
var state_91720__$1 = (function (){var statearr_91785 = state_91720;
(statearr_91785[(13)] = inst_91356);

(statearr_91785[(18)] = inst_91353);

(statearr_91785[(19)] = inst_91355);

(statearr_91785[(20)] = inst_91354);

return statearr_91785;
})();
var statearr_91786_91900 = state_91720__$1;
(statearr_91786_91900[(2)] = null);

(statearr_91786_91900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (66))){
var inst_91610 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91610)){
var statearr_91787_91901 = state_91720__$1;
(statearr_91787_91901[(1)] = (70));

} else {
var statearr_91788_91902 = state_91720__$1;
(statearr_91788_91902[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (23))){
var inst_91436 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91436)){
var statearr_91789_91903 = state_91720__$1;
(statearr_91789_91903[(1)] = (27));

} else {
var statearr_91790_91904 = state_91720__$1;
(statearr_91790_91904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (47))){
var inst_91523 = (state_91720[(2)]);
var inst_91524 = cljs.core.js__GT_clj.call(null,inst_91523);
var inst_91525 = cloudxmark.core.convert_json_lsts_result.call(null,inst_91524,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_91526 = cljs.core.List.EMPTY;
var inst_91527 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_91528 = cljs.core._conj.call(null,inst_91526,inst_91527);
var inst_91529 = cljs.core.List.EMPTY;
var inst_91530 = cljs.core._conj.call(null,inst_91529,inst_91525);
var inst_91531 = cljs.core.concat.call(null,inst_91528,inst_91530);
var inst_91532 = cljs.core.seq.call(null,inst_91531);
var inst_91533 = cljs.core.sequence.call(null,inst_91532);
var inst_91534 = cljs.core.List.EMPTY;
var inst_91535 = cljs.core._conj.call(null,inst_91534,inst_91533);
var inst_91536 = cljs.core.concat.call(null,inst_91535);
var inst_91537 = cljs.core.seq.call(null,inst_91536);
var inst_91538 = cljs.core.sequence.call(null,inst_91537);
var inst_91539 = cljs.core.vec.call(null,inst_91538);
var inst_91540 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91539);
var state_91720__$1 = state_91720;
var statearr_91791_91905 = state_91720__$1;
(statearr_91791_91905[(2)] = inst_91540);

(statearr_91791_91905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (35))){
var inst_91362 = (state_91720[(7)]);
var inst_91497 = (inst_91362 == null);
var inst_91498 = cljs.core.not.call(null,inst_91497);
var state_91720__$1 = state_91720;
if(inst_91498){
var statearr_91792_91906 = state_91720__$1;
(statearr_91792_91906[(1)] = (38));

} else {
var statearr_91793_91907 = state_91720__$1;
(statearr_91793_91907[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (82))){
var inst_91664 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91794_91908 = state_91720__$1;
(statearr_91794_91908[(2)] = inst_91664);

(statearr_91794_91908[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (76))){
var inst_91701 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91795_91909 = state_91720__$1;
(statearr_91795_91909[(2)] = inst_91701);

(statearr_91795_91909[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (19))){
var inst_91361 = (state_91720[(8)]);
var inst_91470 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_91720__$1 = state_91720;
if(inst_91470){
var statearr_91796_91910 = state_91720__$1;
(statearr_91796_91910[(1)] = (31));

} else {
var statearr_91797_91911 = state_91720__$1;
(statearr_91797_91911[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (57))){
var inst_91362 = (state_91720[(7)]);
var inst_91561 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91798_91912 = state_91720__$1;
(statearr_91798_91912[(2)] = inst_91561);

(statearr_91798_91912[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (68))){
var state_91720__$1 = state_91720;
var statearr_91799_91913 = state_91720__$1;
(statearr_91799_91913[(2)] = false);

(statearr_91799_91913[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (11))){
var state_91720__$1 = state_91720;
var statearr_91800_91914 = state_91720__$1;
(statearr_91800_91914[(2)] = true);

(statearr_91800_91914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (9))){
var state_91720__$1 = state_91720;
var statearr_91801_91915 = state_91720__$1;
(statearr_91801_91915[(2)] = false);

(statearr_91801_91915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (5))){
var inst_91362 = (state_91720[(7)]);
var inst_91367 = [cljs.core.str("lst login data:"),cljs.core.str(inst_91362)].join('');
var inst_91368 = cljs.core.println.call(null,inst_91367);
var inst_91370 = (inst_91362 == null);
var inst_91371 = cljs.core.not.call(null,inst_91370);
var state_91720__$1 = (function (){var statearr_91802 = state_91720;
(statearr_91802[(21)] = inst_91368);

return statearr_91802;
})();
if(inst_91371){
var statearr_91803_91916 = state_91720__$1;
(statearr_91803_91916[(1)] = (8));

} else {
var statearr_91804_91917 = state_91720__$1;
(statearr_91804_91917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (83))){
var inst_91362 = (state_91720[(7)]);
var inst_91669 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91805_91918 = state_91720__$1;
(statearr_91805_91918[(2)] = inst_91669);

(statearr_91805_91918[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (14))){
var inst_91362 = (state_91720[(7)]);
var inst_91385 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91362);
var state_91720__$1 = state_91720;
var statearr_91806_91919 = state_91720__$1;
(statearr_91806_91919[(2)] = inst_91385);

(statearr_91806_91919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (45))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91807_91920 = state_91720__$1;
(statearr_91807_91920[(2)] = inst_91362);

(statearr_91807_91920[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (53))){
var inst_91559 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91559)){
var statearr_91808_91921 = state_91720__$1;
(statearr_91808_91921[(1)] = (57));

} else {
var statearr_91809_91922 = state_91720__$1;
(statearr_91809_91922[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (78))){
var state_91720__$1 = state_91720;
var statearr_91810_91923 = state_91720__$1;
(statearr_91810_91923[(2)] = false);

(statearr_91810_91923[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (26))){
var inst_91433 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91811_91924 = state_91720__$1;
(statearr_91811_91924[(2)] = inst_91433);

(statearr_91811_91924[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (16))){
var inst_91390 = (state_91720[(15)]);
var inst_91388 = (state_91720[(2)]);
var inst_91389 = cljs.core.get.call(null,inst_91388,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_91390__$1 = cljs.core.get.call(null,inst_91388,new cljs.core.Keyword(null,"password","password",417022471));
var inst_91391 = cljs.core.get.call(null,inst_91388,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_91392 = encodeURIComponent(inst_91389);
var inst_91393 = encodeURIComponent(inst_91390__$1);
var inst_91394 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_91392),cljs.core.str("&pass="),cljs.core.str(inst_91393)].join('');
var inst_91395 = cloudxmark.core.jsonp.call(null,inst_91394);
var state_91720__$1 = (function (){var statearr_91812 = state_91720;
(statearr_91812[(15)] = inst_91390__$1);

(statearr_91812[(16)] = inst_91391);

return statearr_91812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91720__$1,(17),inst_91395);
} else {
if((state_val_91721 === (81))){
var state_91720__$1 = state_91720;
var statearr_91813_91925 = state_91720__$1;
(statearr_91813_91925[(2)] = false);

(statearr_91813_91925[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (79))){
var inst_91667 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91667)){
var statearr_91814_91926 = state_91720__$1;
(statearr_91814_91926[(1)] = (83));

} else {
var statearr_91815_91927 = state_91720__$1;
(statearr_91815_91927[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (38))){
var inst_91362 = (state_91720[(7)]);
var inst_91500 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91501 = (inst_91500 & (64));
var inst_91502 = inst_91362.cljs$core$ISeq$;
var inst_91503 = (inst_91501) || (inst_91502);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91503)){
var statearr_91816_91928 = state_91720__$1;
(statearr_91816_91928[(1)] = (41));

} else {
var statearr_91817_91929 = state_91720__$1;
(statearr_91817_91929[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (87))){
var state_91720__$1 = state_91720;
var statearr_91818_91930 = state_91720__$1;
(statearr_91818_91930[(2)] = null);

(statearr_91818_91930[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (30))){
var inst_91451 = (state_91720[(2)]);
var inst_91452 = cljs.core.js__GT_clj.call(null,inst_91451);
var inst_91453 = cloudxmark.core.convert_json_status.call(null,inst_91452,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_91454 = cljs.core.List.EMPTY;
var inst_91455 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_91456 = cljs.core._conj.call(null,inst_91454,inst_91455);
var inst_91457 = cljs.core.List.EMPTY;
var inst_91458 = cljs.core._conj.call(null,inst_91457,inst_91453);
var inst_91459 = cljs.core.concat.call(null,inst_91456,inst_91458);
var inst_91460 = cljs.core.seq.call(null,inst_91459);
var inst_91461 = cljs.core.sequence.call(null,inst_91460);
var inst_91462 = cljs.core.List.EMPTY;
var inst_91463 = cljs.core._conj.call(null,inst_91462,inst_91461);
var inst_91464 = cljs.core.concat.call(null,inst_91463);
var inst_91465 = cljs.core.seq.call(null,inst_91464);
var inst_91466 = cljs.core.sequence.call(null,inst_91465);
var inst_91467 = cljs.core.vec.call(null,inst_91466);
var inst_91468 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91467);
var state_91720__$1 = state_91720;
var statearr_91819_91931 = state_91720__$1;
(statearr_91819_91931[(2)] = inst_91468);

(statearr_91819_91931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (73))){
var inst_91629 = (state_91720[(2)]);
var inst_91630 = cljs.core.js__GT_clj.call(null,inst_91629);
var inst_91631 = cloudxmark.core.convert_json_lsts_result.call(null,inst_91630,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_91632 = cljs.core.List.EMPTY;
var inst_91633 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_91634 = cljs.core._conj.call(null,inst_91632,inst_91633);
var inst_91635 = cljs.core.List.EMPTY;
var inst_91636 = cljs.core._conj.call(null,inst_91635,inst_91631);
var inst_91637 = cljs.core.concat.call(null,inst_91634,inst_91636);
var inst_91638 = cljs.core.seq.call(null,inst_91637);
var inst_91639 = cljs.core.sequence.call(null,inst_91638);
var inst_91640 = cljs.core.List.EMPTY;
var inst_91641 = cljs.core._conj.call(null,inst_91640,inst_91639);
var inst_91642 = cljs.core.concat.call(null,inst_91641);
var inst_91643 = cljs.core.seq.call(null,inst_91642);
var inst_91644 = cljs.core.sequence.call(null,inst_91643);
var inst_91645 = cljs.core.vec.call(null,inst_91644);
var inst_91646 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_91645);
var state_91720__$1 = state_91720;
var statearr_91820_91932 = state_91720__$1;
(statearr_91820_91932[(2)] = inst_91646);

(statearr_91820_91932[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (10))){
var inst_91383 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91383)){
var statearr_91821_91933 = state_91720__$1;
(statearr_91821_91933[(1)] = (14));

} else {
var statearr_91822_91934 = state_91720__$1;
(statearr_91822_91934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (18))){
var inst_91362 = (state_91720[(7)]);
var inst_91423 = (inst_91362 == null);
var inst_91424 = cljs.core.not.call(null,inst_91423);
var state_91720__$1 = state_91720;
if(inst_91424){
var statearr_91823_91935 = state_91720__$1;
(statearr_91823_91935[(1)] = (21));

} else {
var statearr_91824_91936 = state_91720__$1;
(statearr_91824_91936[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (52))){
var state_91720__$1 = state_91720;
var statearr_91825_91937 = state_91720__$1;
(statearr_91825_91937[(2)] = false);

(statearr_91825_91937[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (67))){
var state_91720__$1 = state_91720;
var statearr_91826_91938 = state_91720__$1;
(statearr_91826_91938[(2)] = true);

(statearr_91826_91938[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (71))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91827_91939 = state_91720__$1;
(statearr_91827_91939[(2)] = inst_91362);

(statearr_91827_91939[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (42))){
var state_91720__$1 = state_91720;
var statearr_91828_91940 = state_91720__$1;
(statearr_91828_91940[(2)] = false);

(statearr_91828_91940[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (80))){
var state_91720__$1 = state_91720;
var statearr_91829_91941 = state_91720__$1;
(statearr_91829_91941[(2)] = true);

(statearr_91829_91941[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (37))){
var inst_91707 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91830_91942 = state_91720__$1;
(statearr_91830_91942[(2)] = inst_91707);

(statearr_91830_91942[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (63))){
var inst_91703 = (state_91720[(2)]);
var state_91720__$1 = state_91720;
var statearr_91831_91943 = state_91720__$1;
(statearr_91831_91943[(2)] = inst_91703);

(statearr_91831_91943[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (8))){
var inst_91362 = (state_91720[(7)]);
var inst_91373 = inst_91362.cljs$lang$protocol_mask$partition0$;
var inst_91374 = (inst_91373 & (64));
var inst_91375 = inst_91362.cljs$core$ISeq$;
var inst_91376 = (inst_91374) || (inst_91375);
var state_91720__$1 = state_91720;
if(cljs.core.truth_(inst_91376)){
var statearr_91832_91944 = state_91720__$1;
(statearr_91832_91944[(1)] = (11));

} else {
var statearr_91833_91945 = state_91720__$1;
(statearr_91833_91945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (49))){
var inst_91361 = (state_91720[(8)]);
var inst_91593 = cljs.core._EQ_.call(null,inst_91361,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_91720__$1 = state_91720;
if(inst_91593){
var statearr_91834_91946 = state_91720__$1;
(statearr_91834_91946[(1)] = (61));

} else {
var statearr_91835_91947 = state_91720__$1;
(statearr_91835_91947[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91721 === (84))){
var inst_91362 = (state_91720[(7)]);
var state_91720__$1 = state_91720;
var statearr_91836_91948 = state_91720__$1;
(statearr_91836_91948[(2)] = inst_91362);

(statearr_91836_91948[(1)] = (85));


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
});})(c__28050__auto__))
;
return ((function (switch__28027__auto__,c__28050__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28028__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28028__auto____0 = (function (){
var statearr_91840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91840[(0)] = cloudxmark$core$search_loop_$_state_machine__28028__auto__);

(statearr_91840[(1)] = (1));

return statearr_91840;
});
var cloudxmark$core$search_loop_$_state_machine__28028__auto____1 = (function (state_91720){
while(true){
var ret_value__28029__auto__ = (function (){try{while(true){
var result__28030__auto__ = switch__28027__auto__.call(null,state_91720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28030__auto__;
}
break;
}
}catch (e91841){if((e91841 instanceof Object)){
var ex__28031__auto__ = e91841;
var statearr_91842_91949 = state_91720;
(statearr_91842_91949[(5)] = ex__28031__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91950 = state_91720;
state_91720 = G__91950;
continue;
} else {
return ret_value__28029__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28028__auto__ = function(state_91720){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28028__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28028__auto____1.call(this,state_91720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28028__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28028__auto____0;
cloudxmark$core$search_loop_$_state_machine__28028__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28028__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28028__auto__;
})()
;})(switch__28027__auto__,c__28050__auto__))
})();
var state__28052__auto__ = (function (){var statearr_91843 = f__28051__auto__.call(null);
(statearr_91843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28050__auto__);

return statearr_91843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28052__auto__);
});})(c__28050__auto__))
);

return c__28050__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1470717112463