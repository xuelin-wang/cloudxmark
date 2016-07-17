// Compiled by ClojureScript 1.9.89 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('cloudxmark.common.lst_common');
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
var idx_59303 = (0);
while(true){
var len1_59304 = b1.length;
if((cljs.core._EQ_.call(null,idx_59303,len1_59304)) || (cljs.core._EQ_.call(null,idx_59303,max_len))){
} else {
(b1[idx_59303] = ((b1[idx_59303]) ^ (b2[idx_59303])));

var G__59305 = (idx_59303 + (1));
idx_59303 = G__59305;
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
var args59308 = [];
var len__22627__auto___59311 = arguments.length;
var i__22628__auto___59312 = (0);
while(true){
if((i__22628__auto___59312 < len__22627__auto___59311)){
args59308.push((arguments[i__22628__auto___59312]));

var G__59313 = (i__22628__auto___59312 + (1));
i__22628__auto___59312 = G__59313;
continue;
} else {
}
break;
}

var G__59310 = args59308.length;
switch (G__59310) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59308.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__59306_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__59306_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__59307_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__59307_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__59315,_,p__59316){
var map__59317 = p__59315;
var map__59317__$1 = ((((!((map__59317 == null)))?((((map__59317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59317):map__59317);
var env = map__59317__$1;
var state = cljs.core.get.call(null,map__59317__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__59317__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__59318 = p__59316;
var map__59318__$1 = ((((!((map__59318 == null)))?((((map__59318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59318):map__59318);
var query_ver = cljs.core.get.call(null,map__59318__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__59318__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__59321 = lst;
var map__59321__$1 = ((((!((map__59321 == null)))?((((map__59321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59321):map__59321);
var lsts = cljs.core.get.call(null,map__59321__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__59321__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__59321__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__59321__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__59321__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_59323 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_59323);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__59324,_,p__59325){
var map__59326 = p__59324;
var map__59326__$1 = ((((!((map__59326 == null)))?((((map__59326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59326):map__59326);
var env = map__59326__$1;
var state = cljs.core.get.call(null,map__59326__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59327 = p__59325;
var map__59327__$1 = ((((!((map__59327 == null)))?((((map__59327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59327):map__59327);
var status = map__59327__$1;
var id = cljs.core.get.call(null,map__59327__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59326,map__59326__$1,env,state,map__59327,map__59327__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__59326,map__59326__$1,env,state,map__59327,map__59327__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__59330,_,p__59331){
var map__59332 = p__59330;
var map__59332__$1 = ((((!((map__59332 == null)))?((((map__59332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59332):map__59332);
var env = map__59332__$1;
var state = cljs.core.get.call(null,map__59332__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59333 = p__59331;
var map__59333__$1 = ((((!((map__59333 == null)))?((((map__59333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59333):map__59333);
var path = cljs.core.get.call(null,map__59333__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__59333__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__59333__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59332,map__59332__$1,env,state,map__59333,map__59333__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__59332,map__59332__$1,env,state,map__59333,map__59333__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__59336,_,p__59337){
var map__59338 = p__59336;
var map__59338__$1 = ((((!((map__59338 == null)))?((((map__59338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59338):map__59338);
var env = map__59338__$1;
var state = cljs.core.get.call(null,map__59338__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59339 = p__59337;
var map__59339__$1 = ((((!((map__59339 == null)))?((((map__59339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59339):map__59339);
var data_map = map__59339__$1;
var lst_name = cljs.core.get.call(null,map__59339__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__59339__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__59339__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__59339__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59338,map__59338__$1,env,state,map__59339,map__59339__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__59338,map__59338__$1,env,state,map__59339,map__59339__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__59342,_,p__59343){
var map__59344 = p__59342;
var map__59344__$1 = ((((!((map__59344 == null)))?((((map__59344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59344):map__59344);
var env = map__59344__$1;
var state = cljs.core.get.call(null,map__59344__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59345 = p__59343;
var map__59345__$1 = ((((!((map__59345 == null)))?((((map__59345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59345):map__59345);
var field_id = cljs.core.get.call(null,map__59345__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__59345__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59344,map__59344__$1,env,state,map__59345,map__59345__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__59344,map__59344__$1,env,state,map__59345,map__59345__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__59348,_,p__59349){
var map__59350 = p__59348;
var map__59350__$1 = ((((!((map__59350 == null)))?((((map__59350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59350):map__59350);
var env = map__59350__$1;
var state = cljs.core.get.call(null,map__59350__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59351 = p__59349;
var map__59351__$1 = ((((!((map__59351 == null)))?((((map__59351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59351):map__59351);
var data_map = map__59351__$1;
var user_id = cljs.core.get.call(null,map__59351__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__59351__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__59351__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59350,map__59350__$1,env,state,map__59351,map__59351__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__59350,map__59350__$1,env,state,map__59351,map__59351__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__59354,_,p__59355){
var map__59356 = p__59354;
var map__59356__$1 = ((((!((map__59356 == null)))?((((map__59356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59356):map__59356);
var env = map__59356__$1;
var state = cljs.core.get.call(null,map__59356__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59357 = p__59355;
var map__59357__$1 = ((((!((map__59357 == null)))?((((map__59357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59357):map__59357);
var data_map = map__59357__$1;
var user_id = cljs.core.get.call(null,map__59357__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__59357__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59356,map__59356__$1,env,state,map__59357,map__59357__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__59356,map__59356__$1,env,state,map__59357,map__59357__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__59360,_,p__59361){
var map__59362 = p__59360;
var map__59362__$1 = ((((!((map__59362 == null)))?((((map__59362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59362):map__59362);
var env = map__59362__$1;
var state = cljs.core.get.call(null,map__59362__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59363 = p__59361;
var map__59363__$1 = ((((!((map__59363 == null)))?((((map__59363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59363):map__59363);
var data_map = map__59363__$1;
var name = cljs.core.get.call(null,map__59363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__59363__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59362,map__59362__$1,env,state,map__59363,map__59363__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__59362,map__59362__$1,env,state,map__59363,map__59363__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__59366,_,p__59367){
var map__59368 = p__59366;
var map__59368__$1 = ((((!((map__59368 == null)))?((((map__59368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59368):map__59368);
var env = map__59368__$1;
var state = cljs.core.get.call(null,map__59368__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59369 = p__59367;
var map__59369__$1 = ((((!((map__59369 == null)))?((((map__59369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59369):map__59369);
var data_map = map__59369__$1;
var name = cljs.core.get.call(null,map__59369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__59369__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59368,map__59368__$1,env,state,map__59369,map__59369__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr_lst_name = (function (){var or__21444__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null));
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,lsts),"name");
}
})();
var curr_lst = cloudxmark.core.get_by_map_val.call(null,"name",curr_lst_name,lsts);
var lst_id = cljs.core.get.call(null,curr_lst,"lst_id");
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__59368,map__59368__$1,env,state,map__59369,map__59369__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__59372,_,___$1){
var map__59373 = p__59372;
var map__59373__$1 = ((((!((map__59373 == null)))?((((map__59373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59373):map__59373);
var env = map__59373__$1;
var state = cljs.core.get.call(null,map__59373__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59373,map__59373__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__59373,map__59373__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__59375,_,p__59376){
var map__59377 = p__59375;
var map__59377__$1 = ((((!((map__59377 == null)))?((((map__59377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59377):map__59377);
var env = map__59377__$1;
var state = cljs.core.get.call(null,map__59377__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59378 = p__59376;
var map__59378__$1 = ((((!((map__59378 == null)))?((((map__59378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59378):map__59378);
var data_map = map__59378__$1;
var status = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__59378__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59377,map__59377__$1,env,state,map__59378,map__59378__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__59377,map__59377__$1,env,state,map__59378,map__59378__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args59381 = [];
var len__22627__auto___59384 = arguments.length;
var i__22628__auto___59385 = (0);
while(true){
if((i__22628__auto___59385 < len__22627__auto___59384)){
args59381.push((arguments[i__22628__auto___59385]));

var G__59386 = (i__22628__auto___59385 + (1));
i__22628__auto___59385 = G__59386;
continue;
} else {
}
break;
}

var G__59383 = args59381.length;
switch (G__59383) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59381.length)].join('')));

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

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_name,item,col_name){
var field_val = (function (){var or__21444__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})();
var item_name = cljs.core.get.call(null,item,"name");
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_name),cljs.core.str("-"),cljs.core.str(item_name),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val,item_name){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605)),(function (){var x__22370__auto__ = lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-name","item-name",1560972259)),(function (){var x__22370__auto__ = item_name;
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
});})(field_val,item_name))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__59388){
var map__59394 = p__59388;
var map__59394__$1 = ((((!((map__59394 == null)))?((((map__59394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59394):map__59394);
var info = cljs.core.get.call(null,map__59394__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__59394__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__59394__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__59396 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__59396,(0),null);
var msg = cljs.core.nth.call(null,vec__59396,(1),null);
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
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,lst_name,curr_lst_name){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(lst_name)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,lst_name,curr_lst_name), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null);
var merge_QMARK_ = false;
var value = lst_name;
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
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(lst_name)].join(''));
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
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__59401 = lst;
var map__59401__$1 = ((((!((map__59401 == null)))?((((map__59401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59401):map__59401);
var lsts = cljs.core.get.call(null,map__59401__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__59401__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__59401,map__59401__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__59401,map__59401__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__59405 = lst;
var map__59405__$1 = ((((!((map__59405 == null)))?((((map__59405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59405):map__59405);
var status = cljs.core.get.call(null,map__59405__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var selected_lst_name = (function (){var or__21444__auto__ = curr_lst_name;
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
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
var vec__59411 = (function (){var G__59414 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59414) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__59411,(0),null);
var query_key = cljs.core.nth.call(null,vec__59411,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__59411,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__59411,elem_key,query_key))
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
return cljs.core._EQ_.call(null,cljs.core.get.call(null,lst,"name"),cloudxmark.common.lst_common.settings_lst_name);
}),lsts));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26969__auto__ = this;
React.Component.apply(this__26969__auto__,arguments);

if(!((this__26969__auto__.initLocalState == null))){
this__26969__auto__.state = this__26969__auto__.initLocalState();
} else {
this__26969__auto__.state = {};
}

return this__26969__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x59420_59432 = cloudxmark.core.Lsts.prototype;
x59420_59432.componentWillUpdate = ((function (x59420_59432){
return (function (next_props__26871__auto__,next_state__26872__auto__){
var this__26870__auto__ = this;
if(((!((this__26870__auto__ == null)))?(((false) || (this__26870__auto__.om$next$Ident$))?true:false):false)){
var ident__26874__auto___59433 = om.next.ident.call(null,this__26870__auto__,om.next.props.call(null,this__26870__auto__));
var next_ident__26875__auto___59434 = om.next.ident.call(null,this__26870__auto__,om.next._next_props.call(null,next_props__26871__auto__,this__26870__auto__));
if(cljs.core.not_EQ_.call(null,ident__26874__auto___59433,next_ident__26875__auto___59434)){
var idxr__26876__auto___59435 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26876__auto___59435 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26876__auto___59435),((function (idxr__26876__auto___59435,ident__26874__auto___59433,next_ident__26875__auto___59434,this__26870__auto__,x59420_59432){
return (function (indexes__26877__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26877__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26874__auto___59433], null),cljs.core.disj,this__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26875__auto___59434], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26870__auto__);
});})(idxr__26876__auto___59435,ident__26874__auto___59433,next_ident__26875__auto___59434,this__26870__auto__,x59420_59432))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26870__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26870__auto__);
});})(x59420_59432))
;

x59420_59432.shouldComponentUpdate = ((function (x59420_59432){
return (function (next_props__26871__auto__,next_state__26872__auto__){
var this__26870__auto__ = this;
var next_children__26873__auto__ = next_props__26871__auto__.children;
var next_props__26871__auto____$1 = goog.object.get(next_props__26871__auto__,"omcljs$value");
var next_props__26871__auto____$2 = (function (){var G__59422 = next_props__26871__auto____$1;
if((next_props__26871__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__59422);
} else {
return G__59422;
}
})();
var or__21444__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26870__auto__),next_props__26871__auto____$2);
if(or__21444__auto__){
return or__21444__auto__;
} else {
var or__21444__auto____$1 = (function (){var and__21432__auto__ = this__26870__auto__.state;
if(cljs.core.truth_(and__21432__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26870__auto__.state,"omcljs$state"),goog.object.get(next_state__26872__auto__,"omcljs$state"));
} else {
return and__21432__auto__;
}
})();
if(cljs.core.truth_(or__21444__auto____$1)){
return or__21444__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26870__auto__.props.children,next_children__26873__auto__);
}
}
});})(x59420_59432))
;

x59420_59432.componentWillUnmount = ((function (x59420_59432){
return (function (){
var this__26870__auto__ = this;
var r__26881__auto__ = om.next.get_reconciler.call(null,this__26870__auto__);
var cfg__26882__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26881__auto__);
var st__26883__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26882__auto__);
var indexer__26880__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26882__auto__);
if(cljs.core.truth_((function (){var and__21432__auto__ = !((st__26883__auto__ == null));
if(and__21432__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26883__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26870__auto__], null));
} else {
return and__21432__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26883__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26870__auto__);
} else {
}

if((indexer__26880__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26880__auto__,this__26870__auto__);
}
});})(x59420_59432))
;

x59420_59432.componentDidUpdate = ((function (x59420_59432){
return (function (prev_props__26878__auto__,prev_state__26879__auto__){
var this__26870__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26870__auto__);
});})(x59420_59432))
;

x59420_59432.isMounted = ((function (x59420_59432){
return (function (){
var this__26870__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26870__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x59420_59432))
;

x59420_59432.componentWillMount = ((function (x59420_59432){
return (function (){
var this__26870__auto__ = this;
var indexer__26880__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26880__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26880__auto__,this__26870__auto__);
}
});})(x59420_59432))
;

x59420_59432.render = ((function (x59420_59432){
return (function (){
var this__26869__auto__ = this;
var this$ = this__26869__auto__;
var _STAR_reconciler_STAR_59423 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_59424 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_59425 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_59426 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_59427 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26869__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26869__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26869__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26869__auto__);

om.next._STAR_parent_STAR_ = this__26869__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__59428 = lst;
var map__59428__$1 = ((((!((map__59428 == null)))?((((map__59428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59428):map__59428);
var lsts = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__59428__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_59427;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_59426;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_59425;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_59424;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_59423;
}});})(x59420_59432))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x59430_59436 = cloudxmark.core.Lsts;
x59430_59436.om$next$IQueryParams$ = true;

x59430_59436.om$next$IQueryParams$params$arity$1 = ((function (x59430_59436){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x59430_59436))
;

x59430_59436.om$next$IQuery$ = true;

x59430_59436.om$next$IQuery$query$arity$1 = ((function (x59430_59436){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x59430_59436))
;


var x59431_59437 = cloudxmark.core.Lsts.prototype;
x59431_59437.om$next$IQueryParams$ = true;

x59431_59437.om$next$IQueryParams$params$arity$1 = ((function (x59431_59437){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x59431_59437))
;

x59431_59437.om$next$IQuery$ = true;

x59431_59437.om$next$IQuery$query$arity$1 = ((function (x59431_59437){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x59431_59437))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26971__auto__,writer__26972__auto__,opt__26973__auto__){
return cljs.core._write.call(null,writer__26972__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__59446,cb){
var map__59447 = p__59446;
var map__59447__$1 = ((((!((map__59447 == null)))?((((map__59447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59447):map__59447);
var lst_search = cljs.core.get.call(null,map__59447__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__59449 = om.next.query__GT_ast.call(null,lst_search);
var map__59449__$1 = ((((!((map__59449 == null)))?((((map__59449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59449):map__59449);
var vec__59450 = cljs.core.get.call(null,map__59449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__59450,(0),null);
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
var map__59458 = result;
var map__59458__$1 = ((((!((map__59458 == null)))?((((map__59458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59458):map__59458);
var lsts = cljs.core.get.call(null,map__59458__$1,"lsts");
var user_id = cljs.core.get.call(null,map__59458__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__59458__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__59459 = json_status;
var map__59459__$1 = ((((!((map__59459 == null)))?((((map__59459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59459):map__59459);
var info = cljs.core.get.call(null,map__59459__$1,"info");
var warn = cljs.core.get.call(null,map__59459__$1,"warn");
var error = cljs.core.get.call(null,map__59459__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__59464 = json_status;
var map__59464__$1 = ((((!((map__59464 == null)))?((((map__59464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59464):map__59464);
var info = cljs.core.get.call(null,map__59464__$1,"info");
var warn = cljs.core.get.call(null,map__59464__$1,"warn");
var error = cljs.core.get.call(null,map__59464__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26738__auto__){
return (function (){
var f__26739__auto__ = (function (){var switch__26715__auto__ = ((function (c__26738__auto__){
return (function (state_60342){
var state_val_60343 = (state_60342[(1)]);
if((state_val_60343 === (65))){
var state_60342__$1 = state_60342;
var statearr_60344_60466 = state_60342__$1;
(statearr_60344_60466[(2)] = false);

(statearr_60344_60466[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (70))){
var inst_59984 = (state_60342[(7)]);
var inst_60234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60345_60467 = state_60342__$1;
(statearr_60345_60467[(2)] = inst_60234);

(statearr_60345_60467[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (62))){
var inst_59983 = (state_60342[(8)]);
var inst_60270 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_60342__$1 = state_60342;
if(inst_60270){
var statearr_60346_60468 = state_60342__$1;
(statearr_60346_60468[(1)] = (74));

} else {
var statearr_60347_60469 = state_60342__$1;
(statearr_60347_60469[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (74))){
var inst_59984 = (state_60342[(7)]);
var inst_60273 = [cljs.core.str("lst query data:"),cljs.core.str(inst_59984)].join('');
var inst_60274 = cljs.core.println.call(null,inst_60273);
var inst_60276 = (inst_59984 == null);
var inst_60277 = cljs.core.not.call(null,inst_60276);
var state_60342__$1 = (function (){var statearr_60348 = state_60342;
(statearr_60348[(9)] = inst_60274);

return statearr_60348;
})();
if(inst_60277){
var statearr_60349_60470 = state_60342__$1;
(statearr_60349_60470[(1)] = (77));

} else {
var statearr_60350_60471 = state_60342__$1;
(statearr_60350_60471[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (7))){
var inst_60335 = (state_60342[(2)]);
var state_60342__$1 = (function (){var statearr_60351 = state_60342;
(statearr_60351[(10)] = inst_60335);

return statearr_60351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(90),c);
} else {
if((state_val_60343 === (59))){
var inst_60186 = (state_60342[(2)]);
var inst_60187 = cljs.core.get.call(null,inst_60186,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_60188 = cljs.core.get.call(null,inst_60186,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_60189 = cljs.core.get.call(null,inst_60186,new cljs.core.Keyword(null,"value","value",305978217));
var inst_60190 = encodeURIComponent(inst_60187);
var inst_60191 = encodeURIComponent(inst_60188);
var inst_60192 = encodeURIComponent(inst_60189);
var inst_60193 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_60190),cljs.core.str("&name="),cljs.core.str(inst_60191),cljs.core.str("&value="),cljs.core.str(inst_60192)].join('');
var inst_60194 = cloudxmark.core.jsonp.call(null,inst_60193);
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(60),inst_60194);
} else {
if((state_val_60343 === (86))){
var inst_60296 = (state_60342[(11)]);
var inst_60299 = (state_60342[(2)]);
var inst_60300 = cljs.core.js__GT_clj.call(null,inst_60299);
var inst_60301 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60300,inst_60296,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_60302 = cljs.core.List.EMPTY;
var inst_60303 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60304 = cljs.core._conj.call(null,inst_60302,inst_60303);
var inst_60305 = cljs.core.List.EMPTY;
var inst_60306 = cljs.core._conj.call(null,inst_60305,inst_60301);
var inst_60307 = cljs.core.concat.call(null,inst_60304,inst_60306);
var inst_60308 = cljs.core.seq.call(null,inst_60307);
var inst_60309 = cljs.core.sequence.call(null,inst_60308);
var inst_60310 = cljs.core.List.EMPTY;
var inst_60311 = cljs.core._conj.call(null,inst_60310,inst_60309);
var inst_60312 = cljs.core.concat.call(null,inst_60311);
var inst_60313 = cljs.core.seq.call(null,inst_60312);
var inst_60314 = cljs.core.sequence.call(null,inst_60313);
var inst_60315 = cljs.core.vec.call(null,inst_60314);
var inst_60316 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60315);
var state_60342__$1 = state_60342;
var statearr_60352_60472 = state_60342__$1;
(statearr_60352_60472[(2)] = inst_60316);

(statearr_60352_60472[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (20))){
var inst_60333 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60353_60473 = state_60342__$1;
(statearr_60353_60473[(2)] = inst_60333);

(statearr_60353_60473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (72))){
var inst_60237 = (state_60342[(2)]);
var inst_60238 = cljs.core.get.call(null,inst_60237,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_60239 = cljs.core.get.call(null,inst_60237,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_60240 = cljs.core.get.call(null,inst_60237,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_60241 = cljs.core.get.call(null,inst_60237,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_60242 = cljs.core.get.call(null,inst_60237,new cljs.core.Keyword(null,"value","value",305978217));
var inst_60243 = encodeURIComponent(inst_60238);
var inst_60244 = encodeURIComponent(inst_60239);
var inst_60245 = encodeURIComponent(inst_60240);
var inst_60246 = encodeURIComponent(inst_60241);
var inst_60247 = encodeURIComponent(inst_60242);
var inst_60248 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_60243),cljs.core.str("&lst-name="),cljs.core.str(inst_60244),cljs.core.str("&orig-name="),cljs.core.str(inst_60245),cljs.core.str("&col-name="),cljs.core.str(inst_60246),cljs.core.str("&value="),cljs.core.str(inst_60247)].join('');
var inst_60249 = cloudxmark.core.jsonp.call(null,inst_60248);
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(73),inst_60249);
} else {
if((state_val_60343 === (58))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60354_60474 = state_60342__$1;
(statearr_60354_60474[(2)] = inst_59984);

(statearr_60354_60474[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (60))){
var inst_60196 = (state_60342[(2)]);
var inst_60197 = cljs.core.js__GT_clj.call(null,inst_60196);
var inst_60198 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60197,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_60199 = cljs.core.List.EMPTY;
var inst_60200 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60201 = cljs.core._conj.call(null,inst_60199,inst_60200);
var inst_60202 = cljs.core.List.EMPTY;
var inst_60203 = cljs.core._conj.call(null,inst_60202,inst_60198);
var inst_60204 = cljs.core.concat.call(null,inst_60201,inst_60203);
var inst_60205 = cljs.core.seq.call(null,inst_60204);
var inst_60206 = cljs.core.sequence.call(null,inst_60205);
var inst_60207 = cljs.core.List.EMPTY;
var inst_60208 = cljs.core._conj.call(null,inst_60207,inst_60206);
var inst_60209 = cljs.core.concat.call(null,inst_60208);
var inst_60210 = cljs.core.seq.call(null,inst_60209);
var inst_60211 = cljs.core.sequence.call(null,inst_60210);
var inst_60212 = cljs.core.vec.call(null,inst_60211);
var inst_60213 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60212);
var state_60342__$1 = state_60342;
var statearr_60355_60475 = state_60342__$1;
(statearr_60355_60475[(2)] = inst_60213);

(statearr_60355_60475[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (27))){
var inst_59984 = (state_60342[(7)]);
var inst_60060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60356_60476 = state_60342__$1;
(statearr_60356_60476[(2)] = inst_60060);

(statearr_60356_60476[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (1))){
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(2),c);
} else {
if((state_val_60343 === (69))){
var inst_60229 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60357_60477 = state_60342__$1;
(statearr_60357_60477[(2)] = inst_60229);

(statearr_60357_60477[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (24))){
var state_60342__$1 = state_60342;
var statearr_60358_60478 = state_60342__$1;
(statearr_60358_60478[(2)] = true);

(statearr_60358_60478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (55))){
var state_60342__$1 = state_60342;
var statearr_60359_60479 = state_60342__$1;
(statearr_60359_60479[(2)] = false);

(statearr_60359_60479[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (85))){
var inst_60294 = (state_60342[(2)]);
var inst_60295 = cljs.core.get.call(null,inst_60294,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_60296 = cljs.core.get.call(null,inst_60294,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_60297 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_60342__$1 = (function (){var statearr_60360 = state_60342;
(statearr_60360[(11)] = inst_60296);

(statearr_60360[(12)] = inst_60295);

return statearr_60360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(86),inst_60297);
} else {
if((state_val_60343 === (39))){
var state_60342__$1 = state_60342;
var statearr_60361_60480 = state_60342__$1;
(statearr_60361_60480[(2)] = false);

(statearr_60361_60480[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (88))){
var state_60342__$1 = state_60342;
var statearr_60362_60481 = state_60342__$1;
(statearr_60362_60481[(2)] = null);

(statearr_60362_60481[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (46))){
var inst_60137 = (state_60342[(2)]);
var inst_60138 = cljs.core.get.call(null,inst_60137,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_60139 = cljs.core.get.call(null,inst_60137,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_60140 = encodeURIComponent(inst_60138);
var inst_60141 = encodeURIComponent(inst_60139);
var inst_60142 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_60140),cljs.core.str("&desc="),cljs.core.str(inst_60141)].join('');
var inst_60143 = cloudxmark.core.jsonp.call(null,inst_60142);
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(47),inst_60143);
} else {
if((state_val_60343 === (4))){
var inst_60340 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60342__$1,inst_60340);
} else {
if((state_val_60343 === (77))){
var inst_59984 = (state_60342[(7)]);
var inst_60279 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_60280 = (inst_60279 & (64));
var inst_60281 = inst_59984.cljs$core$ISeq$;
var inst_60282 = (inst_60280) || (inst_60281);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60282)){
var statearr_60363_60482 = state_60342__$1;
(statearr_60363_60482[(1)] = (80));

} else {
var statearr_60364_60483 = state_60342__$1;
(statearr_60364_60483[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (54))){
var state_60342__$1 = state_60342;
var statearr_60365_60484 = state_60342__$1;
(statearr_60365_60484[(2)] = true);

(statearr_60365_60484[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (15))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60366_60485 = state_60342__$1;
(statearr_60366_60485[(2)] = inst_59984);

(statearr_60366_60485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (48))){
var inst_59984 = (state_60342[(7)]);
var inst_60168 = (inst_59984 == null);
var inst_60169 = cljs.core.not.call(null,inst_60168);
var state_60342__$1 = state_60342;
if(inst_60169){
var statearr_60367_60486 = state_60342__$1;
(statearr_60367_60486[(1)] = (51));

} else {
var statearr_60368_60487 = state_60342__$1;
(statearr_60368_60487[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (50))){
var inst_60327 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60369_60488 = state_60342__$1;
(statearr_60369_60488[(2)] = inst_60327);

(statearr_60369_60488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (75))){
var state_60342__$1 = state_60342;
var statearr_60370_60489 = state_60342__$1;
(statearr_60370_60489[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (21))){
var inst_59984 = (state_60342[(7)]);
var inst_60048 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_60049 = (inst_60048 & (64));
var inst_60050 = inst_59984.cljs$core$ISeq$;
var inst_60051 = (inst_60049) || (inst_60050);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60051)){
var statearr_60372_60490 = state_60342__$1;
(statearr_60372_60490[(1)] = (24));

} else {
var statearr_60373_60491 = state_60342__$1;
(statearr_60373_60491[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (31))){
var inst_60094 = cloudxmark.core.jsonp.call(null,"/logout");
var state_60342__$1 = state_60342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(34),inst_60094);
} else {
if((state_val_60343 === (32))){
var inst_59983 = (state_60342[(8)]);
var inst_60115 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_60342__$1 = state_60342;
if(inst_60115){
var statearr_60374_60492 = state_60342__$1;
(statearr_60374_60492[(1)] = (35));

} else {
var statearr_60375_60493 = state_60342__$1;
(statearr_60375_60493[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (40))){
var inst_60132 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60132)){
var statearr_60376_60494 = state_60342__$1;
(statearr_60376_60494[(1)] = (44));

} else {
var statearr_60377_60495 = state_60342__$1;
(statearr_60377_60495[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (56))){
var inst_60178 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60378_60496 = state_60342__$1;
(statearr_60378_60496[(2)] = inst_60178);

(statearr_60378_60496[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (33))){
var inst_60331 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60379_60497 = state_60342__$1;
(statearr_60379_60497[(2)] = inst_60331);

(statearr_60379_60497[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (13))){
var inst_60002 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60380_60498 = state_60342__$1;
(statearr_60380_60498[(2)] = inst_60002);

(statearr_60380_60498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (22))){
var state_60342__$1 = state_60342;
var statearr_60381_60499 = state_60342__$1;
(statearr_60381_60499[(2)] = false);

(statearr_60381_60499[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (90))){
var inst_60337 = (state_60342[(2)]);
var inst_59978 = inst_60337;
var state_60342__$1 = (function (){var statearr_60382 = state_60342;
(statearr_60382[(13)] = inst_59978);

return statearr_60382;
})();
var statearr_60383_60500 = state_60342__$1;
(statearr_60383_60500[(2)] = null);

(statearr_60383_60500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (36))){
var inst_59983 = (state_60342[(8)]);
var inst_60164 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_60342__$1 = state_60342;
if(inst_60164){
var statearr_60384_60501 = state_60342__$1;
(statearr_60384_60501[(1)] = (48));

} else {
var statearr_60385_60502 = state_60342__$1;
(statearr_60385_60502[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (41))){
var state_60342__$1 = state_60342;
var statearr_60386_60503 = state_60342__$1;
(statearr_60386_60503[(2)] = true);

(statearr_60386_60503[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (89))){
var inst_60321 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60387_60504 = state_60342__$1;
(statearr_60387_60504[(2)] = inst_60321);

(statearr_60387_60504[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (43))){
var inst_60129 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60388_60505 = state_60342__$1;
(statearr_60388_60505[(2)] = inst_60129);

(statearr_60388_60505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (61))){
var inst_59984 = (state_60342[(7)]);
var inst_60219 = (inst_59984 == null);
var inst_60220 = cljs.core.not.call(null,inst_60219);
var state_60342__$1 = state_60342;
if(inst_60220){
var statearr_60389_60506 = state_60342__$1;
(statearr_60389_60506[(1)] = (64));

} else {
var statearr_60390_60507 = state_60342__$1;
(statearr_60390_60507[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (29))){
var inst_60063 = (state_60342[(2)]);
var inst_60064 = cljs.core.get.call(null,inst_60063,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_60065 = cljs.core.get.call(null,inst_60063,new cljs.core.Keyword(null,"password","password",417022471));
var inst_60066 = cljs.core.get.call(null,inst_60063,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_60067 = cloudxmark.core.enc_password.call(null,inst_60065);
var inst_60068 = encodeURIComponent(inst_60064);
var inst_60069 = encodeURIComponent(inst_60067);
var inst_60070 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_60068),cljs.core.str("&pass="),cljs.core.str(inst_60069)].join('');
var inst_60071 = cloudxmark.core.jsonp.call(null,inst_60070);
var state_60342__$1 = (function (){var statearr_60391 = state_60342;
(statearr_60391[(14)] = inst_60066);

return statearr_60391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(30),inst_60071);
} else {
if((state_val_60343 === (44))){
var inst_59984 = (state_60342[(7)]);
var inst_60134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60392_60508 = state_60342__$1;
(statearr_60392_60508[(2)] = inst_60134);

(statearr_60392_60508[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (6))){
var inst_59983 = (state_60342[(8)]);
var inst_60041 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_60342__$1 = state_60342;
if(inst_60041){
var statearr_60393_60509 = state_60342__$1;
(statearr_60393_60509[(1)] = (18));

} else {
var statearr_60394_60510 = state_60342__$1;
(statearr_60394_60510[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (28))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60395_60511 = state_60342__$1;
(statearr_60395_60511[(2)] = inst_59984);

(statearr_60395_60511[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (64))){
var inst_59984 = (state_60342[(7)]);
var inst_60222 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_60223 = (inst_60222 & (64));
var inst_60224 = inst_59984.cljs$core$ISeq$;
var inst_60225 = (inst_60223) || (inst_60224);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60225)){
var statearr_60396_60512 = state_60342__$1;
(statearr_60396_60512[(1)] = (67));

} else {
var statearr_60397_60513 = state_60342__$1;
(statearr_60397_60513[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (51))){
var inst_59984 = (state_60342[(7)]);
var inst_60171 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_60172 = (inst_60171 & (64));
var inst_60173 = inst_59984.cljs$core$ISeq$;
var inst_60174 = (inst_60172) || (inst_60173);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60174)){
var statearr_60398_60514 = state_60342__$1;
(statearr_60398_60514[(1)] = (54));

} else {
var statearr_60399_60515 = state_60342__$1;
(statearr_60399_60515[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (25))){
var state_60342__$1 = state_60342;
var statearr_60400_60516 = state_60342__$1;
(statearr_60400_60516[(2)] = false);

(statearr_60400_60516[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (34))){
var inst_60096 = (state_60342[(2)]);
var inst_60097 = cljs.core.js__GT_clj.call(null,inst_60096);
var inst_60098 = cloudxmark.core.convert_json_status.call(null,inst_60097,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_60099 = cljs.core.List.EMPTY;
var inst_60100 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_60101 = cljs.core._conj.call(null,inst_60099,inst_60100);
var inst_60102 = cljs.core.List.EMPTY;
var inst_60103 = cljs.core._conj.call(null,inst_60102,inst_60098);
var inst_60104 = cljs.core.concat.call(null,inst_60101,inst_60103);
var inst_60105 = cljs.core.seq.call(null,inst_60104);
var inst_60106 = cljs.core.sequence.call(null,inst_60105);
var inst_60107 = cljs.core.List.EMPTY;
var inst_60108 = cljs.core._conj.call(null,inst_60107,inst_60106);
var inst_60109 = cljs.core.concat.call(null,inst_60108);
var inst_60110 = cljs.core.seq.call(null,inst_60109);
var inst_60111 = cljs.core.sequence.call(null,inst_60110);
var inst_60112 = cljs.core.vec.call(null,inst_60111);
var inst_60113 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60112);
var state_60342__$1 = state_60342;
var statearr_60401_60517 = state_60342__$1;
(statearr_60401_60517[(2)] = inst_60113);

(statearr_60401_60517[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (17))){
var inst_60013 = (state_60342[(15)]);
var inst_60012 = (state_60342[(16)]);
var inst_60019 = (state_60342[(2)]);
var inst_60020 = cljs.core.js__GT_clj.call(null,inst_60019);
var inst_60021 = cloudxmark.core.gen_key_bytes.call(null,inst_60012);
var inst_60022 = cloudxmark.core.create_aes_cbc.call(null,inst_60021);
var inst_60023 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60020,inst_60013,new cljs.core.Keyword(null,"login","login",55217519));
var inst_60024 = cljs.core.assoc.call(null,inst_60023,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_60022);
var inst_60025 = cljs.core.List.EMPTY;
var inst_60026 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60027 = cljs.core._conj.call(null,inst_60025,inst_60026);
var inst_60028 = cljs.core.List.EMPTY;
var inst_60029 = cljs.core._conj.call(null,inst_60028,inst_60024);
var inst_60030 = cljs.core.concat.call(null,inst_60027,inst_60029);
var inst_60031 = cljs.core.seq.call(null,inst_60030);
var inst_60032 = cljs.core.sequence.call(null,inst_60031);
var inst_60033 = cljs.core.List.EMPTY;
var inst_60034 = cljs.core._conj.call(null,inst_60033,inst_60032);
var inst_60035 = cljs.core.concat.call(null,inst_60034);
var inst_60036 = cljs.core.seq.call(null,inst_60035);
var inst_60037 = cljs.core.sequence.call(null,inst_60036);
var inst_60038 = cljs.core.vec.call(null,inst_60037);
var inst_60039 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60038);
var state_60342__$1 = state_60342;
var statearr_60402_60518 = state_60342__$1;
(statearr_60402_60518[(2)] = inst_60039);

(statearr_60402_60518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (3))){
var inst_59978 = (state_60342[(13)]);
var inst_59983 = (state_60342[(8)]);
var inst_59983__$1 = cljs.core.nth.call(null,inst_59978,(0),null);
var inst_59984 = cljs.core.nth.call(null,inst_59978,(1),null);
var inst_59985 = cljs.core.nth.call(null,inst_59978,(2),null);
var inst_59986 = cljs.core._EQ_.call(null,inst_59983__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_60342__$1 = (function (){var statearr_60403 = state_60342;
(statearr_60403[(17)] = inst_59985);

(statearr_60403[(7)] = inst_59984);

(statearr_60403[(8)] = inst_59983__$1);

return statearr_60403;
})();
if(inst_59986){
var statearr_60404_60519 = state_60342__$1;
(statearr_60404_60519[(1)] = (5));

} else {
var statearr_60405_60520 = state_60342__$1;
(statearr_60405_60520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (12))){
var state_60342__$1 = state_60342;
var statearr_60406_60521 = state_60342__$1;
(statearr_60406_60521[(2)] = false);

(statearr_60406_60521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (2))){
var inst_59974 = (state_60342[(2)]);
var inst_59975 = cljs.core.nth.call(null,inst_59974,(0),null);
var inst_59976 = cljs.core.nth.call(null,inst_59974,(1),null);
var inst_59977 = cljs.core.nth.call(null,inst_59974,(2),null);
var inst_59978 = inst_59974;
var state_60342__$1 = (function (){var statearr_60407 = state_60342;
(statearr_60407[(13)] = inst_59978);

(statearr_60407[(18)] = inst_59975);

(statearr_60407[(19)] = inst_59977);

(statearr_60407[(20)] = inst_59976);

return statearr_60407;
})();
var statearr_60408_60522 = state_60342__$1;
(statearr_60408_60522[(2)] = null);

(statearr_60408_60522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (66))){
var inst_60232 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60232)){
var statearr_60409_60523 = state_60342__$1;
(statearr_60409_60523[(1)] = (70));

} else {
var statearr_60410_60524 = state_60342__$1;
(statearr_60410_60524[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (23))){
var inst_60058 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60058)){
var statearr_60411_60525 = state_60342__$1;
(statearr_60411_60525[(1)] = (27));

} else {
var statearr_60412_60526 = state_60342__$1;
(statearr_60412_60526[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (47))){
var inst_60145 = (state_60342[(2)]);
var inst_60146 = cljs.core.js__GT_clj.call(null,inst_60145);
var inst_60147 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60146,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_60148 = cljs.core.List.EMPTY;
var inst_60149 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60150 = cljs.core._conj.call(null,inst_60148,inst_60149);
var inst_60151 = cljs.core.List.EMPTY;
var inst_60152 = cljs.core._conj.call(null,inst_60151,inst_60147);
var inst_60153 = cljs.core.concat.call(null,inst_60150,inst_60152);
var inst_60154 = cljs.core.seq.call(null,inst_60153);
var inst_60155 = cljs.core.sequence.call(null,inst_60154);
var inst_60156 = cljs.core.List.EMPTY;
var inst_60157 = cljs.core._conj.call(null,inst_60156,inst_60155);
var inst_60158 = cljs.core.concat.call(null,inst_60157);
var inst_60159 = cljs.core.seq.call(null,inst_60158);
var inst_60160 = cljs.core.sequence.call(null,inst_60159);
var inst_60161 = cljs.core.vec.call(null,inst_60160);
var inst_60162 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60161);
var state_60342__$1 = state_60342;
var statearr_60413_60527 = state_60342__$1;
(statearr_60413_60527[(2)] = inst_60162);

(statearr_60413_60527[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (35))){
var inst_59984 = (state_60342[(7)]);
var inst_60119 = (inst_59984 == null);
var inst_60120 = cljs.core.not.call(null,inst_60119);
var state_60342__$1 = state_60342;
if(inst_60120){
var statearr_60414_60528 = state_60342__$1;
(statearr_60414_60528[(1)] = (38));

} else {
var statearr_60415_60529 = state_60342__$1;
(statearr_60415_60529[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (82))){
var inst_60286 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60416_60530 = state_60342__$1;
(statearr_60416_60530[(2)] = inst_60286);

(statearr_60416_60530[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (76))){
var inst_60323 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60417_60531 = state_60342__$1;
(statearr_60417_60531[(2)] = inst_60323);

(statearr_60417_60531[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (19))){
var inst_59983 = (state_60342[(8)]);
var inst_60092 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_60342__$1 = state_60342;
if(inst_60092){
var statearr_60418_60532 = state_60342__$1;
(statearr_60418_60532[(1)] = (31));

} else {
var statearr_60419_60533 = state_60342__$1;
(statearr_60419_60533[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (57))){
var inst_59984 = (state_60342[(7)]);
var inst_60183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60420_60534 = state_60342__$1;
(statearr_60420_60534[(2)] = inst_60183);

(statearr_60420_60534[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (68))){
var state_60342__$1 = state_60342;
var statearr_60421_60535 = state_60342__$1;
(statearr_60421_60535[(2)] = false);

(statearr_60421_60535[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (11))){
var state_60342__$1 = state_60342;
var statearr_60422_60536 = state_60342__$1;
(statearr_60422_60536[(2)] = true);

(statearr_60422_60536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (9))){
var state_60342__$1 = state_60342;
var statearr_60423_60537 = state_60342__$1;
(statearr_60423_60537[(2)] = false);

(statearr_60423_60537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (5))){
var inst_59984 = (state_60342[(7)]);
var inst_59989 = [cljs.core.str("lst login data:"),cljs.core.str(inst_59984)].join('');
var inst_59990 = cljs.core.println.call(null,inst_59989);
var inst_59992 = (inst_59984 == null);
var inst_59993 = cljs.core.not.call(null,inst_59992);
var state_60342__$1 = (function (){var statearr_60424 = state_60342;
(statearr_60424[(21)] = inst_59990);

return statearr_60424;
})();
if(inst_59993){
var statearr_60425_60538 = state_60342__$1;
(statearr_60425_60538[(1)] = (8));

} else {
var statearr_60426_60539 = state_60342__$1;
(statearr_60426_60539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (83))){
var inst_59984 = (state_60342[(7)]);
var inst_60291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60427_60540 = state_60342__$1;
(statearr_60427_60540[(2)] = inst_60291);

(statearr_60427_60540[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (14))){
var inst_59984 = (state_60342[(7)]);
var inst_60007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59984);
var state_60342__$1 = state_60342;
var statearr_60428_60541 = state_60342__$1;
(statearr_60428_60541[(2)] = inst_60007);

(statearr_60428_60541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (45))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60429_60542 = state_60342__$1;
(statearr_60429_60542[(2)] = inst_59984);

(statearr_60429_60542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (53))){
var inst_60181 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60181)){
var statearr_60430_60543 = state_60342__$1;
(statearr_60430_60543[(1)] = (57));

} else {
var statearr_60431_60544 = state_60342__$1;
(statearr_60431_60544[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (78))){
var state_60342__$1 = state_60342;
var statearr_60432_60545 = state_60342__$1;
(statearr_60432_60545[(2)] = false);

(statearr_60432_60545[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (26))){
var inst_60055 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60433_60546 = state_60342__$1;
(statearr_60433_60546[(2)] = inst_60055);

(statearr_60433_60546[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (16))){
var inst_60012 = (state_60342[(16)]);
var inst_60010 = (state_60342[(2)]);
var inst_60011 = cljs.core.get.call(null,inst_60010,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_60012__$1 = cljs.core.get.call(null,inst_60010,new cljs.core.Keyword(null,"password","password",417022471));
var inst_60013 = cljs.core.get.call(null,inst_60010,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_60014 = encodeURIComponent(inst_60011);
var inst_60015 = encodeURIComponent(inst_60012__$1);
var inst_60016 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_60014),cljs.core.str("&pass="),cljs.core.str(inst_60015)].join('');
var inst_60017 = cloudxmark.core.jsonp.call(null,inst_60016);
var state_60342__$1 = (function (){var statearr_60434 = state_60342;
(statearr_60434[(15)] = inst_60013);

(statearr_60434[(16)] = inst_60012__$1);

return statearr_60434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60342__$1,(17),inst_60017);
} else {
if((state_val_60343 === (81))){
var state_60342__$1 = state_60342;
var statearr_60435_60547 = state_60342__$1;
(statearr_60435_60547[(2)] = false);

(statearr_60435_60547[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (79))){
var inst_60289 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60289)){
var statearr_60436_60548 = state_60342__$1;
(statearr_60436_60548[(1)] = (83));

} else {
var statearr_60437_60549 = state_60342__$1;
(statearr_60437_60549[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (38))){
var inst_59984 = (state_60342[(7)]);
var inst_60122 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_60123 = (inst_60122 & (64));
var inst_60124 = inst_59984.cljs$core$ISeq$;
var inst_60125 = (inst_60123) || (inst_60124);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60125)){
var statearr_60438_60550 = state_60342__$1;
(statearr_60438_60550[(1)] = (41));

} else {
var statearr_60439_60551 = state_60342__$1;
(statearr_60439_60551[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (87))){
var state_60342__$1 = state_60342;
var statearr_60440_60552 = state_60342__$1;
(statearr_60440_60552[(2)] = null);

(statearr_60440_60552[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (30))){
var inst_60073 = (state_60342[(2)]);
var inst_60074 = cljs.core.js__GT_clj.call(null,inst_60073);
var inst_60075 = cloudxmark.core.convert_json_status.call(null,inst_60074,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_60076 = cljs.core.List.EMPTY;
var inst_60077 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_60078 = cljs.core._conj.call(null,inst_60076,inst_60077);
var inst_60079 = cljs.core.List.EMPTY;
var inst_60080 = cljs.core._conj.call(null,inst_60079,inst_60075);
var inst_60081 = cljs.core.concat.call(null,inst_60078,inst_60080);
var inst_60082 = cljs.core.seq.call(null,inst_60081);
var inst_60083 = cljs.core.sequence.call(null,inst_60082);
var inst_60084 = cljs.core.List.EMPTY;
var inst_60085 = cljs.core._conj.call(null,inst_60084,inst_60083);
var inst_60086 = cljs.core.concat.call(null,inst_60085);
var inst_60087 = cljs.core.seq.call(null,inst_60086);
var inst_60088 = cljs.core.sequence.call(null,inst_60087);
var inst_60089 = cljs.core.vec.call(null,inst_60088);
var inst_60090 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60089);
var state_60342__$1 = state_60342;
var statearr_60441_60553 = state_60342__$1;
(statearr_60441_60553[(2)] = inst_60090);

(statearr_60441_60553[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (73))){
var inst_60251 = (state_60342[(2)]);
var inst_60252 = cljs.core.js__GT_clj.call(null,inst_60251);
var inst_60253 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60252,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_60254 = cljs.core.List.EMPTY;
var inst_60255 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60256 = cljs.core._conj.call(null,inst_60254,inst_60255);
var inst_60257 = cljs.core.List.EMPTY;
var inst_60258 = cljs.core._conj.call(null,inst_60257,inst_60253);
var inst_60259 = cljs.core.concat.call(null,inst_60256,inst_60258);
var inst_60260 = cljs.core.seq.call(null,inst_60259);
var inst_60261 = cljs.core.sequence.call(null,inst_60260);
var inst_60262 = cljs.core.List.EMPTY;
var inst_60263 = cljs.core._conj.call(null,inst_60262,inst_60261);
var inst_60264 = cljs.core.concat.call(null,inst_60263);
var inst_60265 = cljs.core.seq.call(null,inst_60264);
var inst_60266 = cljs.core.sequence.call(null,inst_60265);
var inst_60267 = cljs.core.vec.call(null,inst_60266);
var inst_60268 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60267);
var state_60342__$1 = state_60342;
var statearr_60442_60554 = state_60342__$1;
(statearr_60442_60554[(2)] = inst_60268);

(statearr_60442_60554[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (10))){
var inst_60005 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_60005)){
var statearr_60443_60555 = state_60342__$1;
(statearr_60443_60555[(1)] = (14));

} else {
var statearr_60444_60556 = state_60342__$1;
(statearr_60444_60556[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (18))){
var inst_59984 = (state_60342[(7)]);
var inst_60045 = (inst_59984 == null);
var inst_60046 = cljs.core.not.call(null,inst_60045);
var state_60342__$1 = state_60342;
if(inst_60046){
var statearr_60445_60557 = state_60342__$1;
(statearr_60445_60557[(1)] = (21));

} else {
var statearr_60446_60558 = state_60342__$1;
(statearr_60446_60558[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (52))){
var state_60342__$1 = state_60342;
var statearr_60447_60559 = state_60342__$1;
(statearr_60447_60559[(2)] = false);

(statearr_60447_60559[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (67))){
var state_60342__$1 = state_60342;
var statearr_60448_60560 = state_60342__$1;
(statearr_60448_60560[(2)] = true);

(statearr_60448_60560[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (71))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60449_60561 = state_60342__$1;
(statearr_60449_60561[(2)] = inst_59984);

(statearr_60449_60561[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (42))){
var state_60342__$1 = state_60342;
var statearr_60450_60562 = state_60342__$1;
(statearr_60450_60562[(2)] = false);

(statearr_60450_60562[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (80))){
var state_60342__$1 = state_60342;
var statearr_60451_60563 = state_60342__$1;
(statearr_60451_60563[(2)] = true);

(statearr_60451_60563[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (37))){
var inst_60329 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60452_60564 = state_60342__$1;
(statearr_60452_60564[(2)] = inst_60329);

(statearr_60452_60564[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (63))){
var inst_60325 = (state_60342[(2)]);
var state_60342__$1 = state_60342;
var statearr_60453_60565 = state_60342__$1;
(statearr_60453_60565[(2)] = inst_60325);

(statearr_60453_60565[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (8))){
var inst_59984 = (state_60342[(7)]);
var inst_59995 = inst_59984.cljs$lang$protocol_mask$partition0$;
var inst_59996 = (inst_59995 & (64));
var inst_59997 = inst_59984.cljs$core$ISeq$;
var inst_59998 = (inst_59996) || (inst_59997);
var state_60342__$1 = state_60342;
if(cljs.core.truth_(inst_59998)){
var statearr_60454_60566 = state_60342__$1;
(statearr_60454_60566[(1)] = (11));

} else {
var statearr_60455_60567 = state_60342__$1;
(statearr_60455_60567[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (49))){
var inst_59983 = (state_60342[(8)]);
var inst_60215 = cljs.core._EQ_.call(null,inst_59983,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_60342__$1 = state_60342;
if(inst_60215){
var statearr_60456_60568 = state_60342__$1;
(statearr_60456_60568[(1)] = (61));

} else {
var statearr_60457_60569 = state_60342__$1;
(statearr_60457_60569[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60343 === (84))){
var inst_59984 = (state_60342[(7)]);
var state_60342__$1 = state_60342;
var statearr_60458_60570 = state_60342__$1;
(statearr_60458_60570[(2)] = inst_59984);

(statearr_60458_60570[(1)] = (85));


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
});})(c__26738__auto__))
;
return ((function (switch__26715__auto__,c__26738__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26716__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26716__auto____0 = (function (){
var statearr_60462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60462[(0)] = cloudxmark$core$search_loop_$_state_machine__26716__auto__);

(statearr_60462[(1)] = (1));

return statearr_60462;
});
var cloudxmark$core$search_loop_$_state_machine__26716__auto____1 = (function (state_60342){
while(true){
var ret_value__26717__auto__ = (function (){try{while(true){
var result__26718__auto__ = switch__26715__auto__.call(null,state_60342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26718__auto__;
}
break;
}
}catch (e60463){if((e60463 instanceof Object)){
var ex__26719__auto__ = e60463;
var statearr_60464_60571 = state_60342;
(statearr_60464_60571[(5)] = ex__26719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60572 = state_60342;
state_60342 = G__60572;
continue;
} else {
return ret_value__26717__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26716__auto__ = function(state_60342){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26716__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26716__auto____1.call(this,state_60342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26716__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26716__auto____0;
cloudxmark$core$search_loop_$_state_machine__26716__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26716__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26716__auto__;
})()
;})(switch__26715__auto__,c__26738__auto__))
})();
var state__26740__auto__ = (function (){var statearr_60465 = f__26739__auto__.call(null);
(statearr_60465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26738__auto__);

return statearr_60465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26740__auto__);
});})(c__26738__auto__))
);

return c__26738__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468725752247