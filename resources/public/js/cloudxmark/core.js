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
var idx_57652 = (0);
while(true){
var len1_57653 = b1.length;
if((cljs.core._EQ_.call(null,idx_57652,len1_57653)) || (cljs.core._EQ_.call(null,idx_57652,max_len))){
} else {
(b1[idx_57652] = ((b1[idx_57652]) ^ (b2[idx_57652])));

var G__57654 = (idx_57652 + (1));
idx_57652 = G__57654;
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
var args57657 = [];
var len__22773__auto___57660 = arguments.length;
var i__22774__auto___57661 = (0);
while(true){
if((i__22774__auto___57661 < len__22773__auto___57660)){
args57657.push((arguments[i__22774__auto___57661]));

var G__57662 = (i__22774__auto___57661 + (1));
i__22774__auto___57661 = G__57662;
continue;
} else {
}
break;
}

var G__57659 = args57657.length;
switch (G__57659) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57657.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__57655_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__57655_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__57656_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__57656_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__57664,_,p__57665){
var map__57666 = p__57664;
var map__57666__$1 = ((((!((map__57666 == null)))?((((map__57666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57666):map__57666);
var env = map__57666__$1;
var state = cljs.core.get.call(null,map__57666__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__57666__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__57667 = p__57665;
var map__57667__$1 = ((((!((map__57667 == null)))?((((map__57667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57667):map__57667);
var query_ver = cljs.core.get.call(null,map__57667__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__57667__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__57670 = lst;
var map__57670__$1 = ((((!((map__57670 == null)))?((((map__57670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57670):map__57670);
var lsts = cljs.core.get.call(null,map__57670__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__57670__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__57670__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__57670__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__57670__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_57672 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_57672);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__57673,_,p__57674){
var map__57675 = p__57673;
var map__57675__$1 = ((((!((map__57675 == null)))?((((map__57675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57675):map__57675);
var env = map__57675__$1;
var state = cljs.core.get.call(null,map__57675__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57676 = p__57674;
var map__57676__$1 = ((((!((map__57676 == null)))?((((map__57676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57676):map__57676);
var status = map__57676__$1;
var id = cljs.core.get.call(null,map__57676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57675,map__57675__$1,env,state,map__57676,map__57676__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__57675,map__57675__$1,env,state,map__57676,map__57676__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__57679,_,p__57680){
var map__57681 = p__57679;
var map__57681__$1 = ((((!((map__57681 == null)))?((((map__57681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57681):map__57681);
var env = map__57681__$1;
var state = cljs.core.get.call(null,map__57681__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57682 = p__57680;
var map__57682__$1 = ((((!((map__57682 == null)))?((((map__57682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57682):map__57682);
var path = cljs.core.get.call(null,map__57682__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__57682__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__57682__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57681,map__57681__$1,env,state,map__57682,map__57682__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__57681,map__57681__$1,env,state,map__57682,map__57682__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__57685,_,p__57686){
var map__57687 = p__57685;
var map__57687__$1 = ((((!((map__57687 == null)))?((((map__57687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57687):map__57687);
var env = map__57687__$1;
var state = cljs.core.get.call(null,map__57687__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57688 = p__57686;
var map__57688__$1 = ((((!((map__57688 == null)))?((((map__57688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57688):map__57688);
var data_map = map__57688__$1;
var lst_name = cljs.core.get.call(null,map__57688__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__57688__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__57688__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__57688__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57687,map__57687__$1,env,state,map__57688,map__57688__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__57687,map__57687__$1,env,state,map__57688,map__57688__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__57691,_,p__57692){
var map__57693 = p__57691;
var map__57693__$1 = ((((!((map__57693 == null)))?((((map__57693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57693):map__57693);
var env = map__57693__$1;
var state = cljs.core.get.call(null,map__57693__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57694 = p__57692;
var map__57694__$1 = ((((!((map__57694 == null)))?((((map__57694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57694):map__57694);
var field_id = cljs.core.get.call(null,map__57694__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__57694__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57693,map__57693__$1,env,state,map__57694,map__57694__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__57693,map__57693__$1,env,state,map__57694,map__57694__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__57697,_,p__57698){
var map__57699 = p__57697;
var map__57699__$1 = ((((!((map__57699 == null)))?((((map__57699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57699):map__57699);
var env = map__57699__$1;
var state = cljs.core.get.call(null,map__57699__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57700 = p__57698;
var map__57700__$1 = ((((!((map__57700 == null)))?((((map__57700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57700):map__57700);
var data_map = map__57700__$1;
var user_id = cljs.core.get.call(null,map__57700__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__57700__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__57700__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57699,map__57699__$1,env,state,map__57700,map__57700__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__57699,map__57699__$1,env,state,map__57700,map__57700__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__57703,_,p__57704){
var map__57705 = p__57703;
var map__57705__$1 = ((((!((map__57705 == null)))?((((map__57705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57705):map__57705);
var env = map__57705__$1;
var state = cljs.core.get.call(null,map__57705__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57706 = p__57704;
var map__57706__$1 = ((((!((map__57706 == null)))?((((map__57706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57706):map__57706);
var data_map = map__57706__$1;
var user_id = cljs.core.get.call(null,map__57706__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__57706__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57705,map__57705__$1,env,state,map__57706,map__57706__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__57705,map__57705__$1,env,state,map__57706,map__57706__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__57709,_,p__57710){
var map__57711 = p__57709;
var map__57711__$1 = ((((!((map__57711 == null)))?((((map__57711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57711):map__57711);
var env = map__57711__$1;
var state = cljs.core.get.call(null,map__57711__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57712 = p__57710;
var map__57712__$1 = ((((!((map__57712 == null)))?((((map__57712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57712):map__57712);
var data_map = map__57712__$1;
var type = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57711,map__57711__$1,env,state,map__57712,map__57712__$1,data_map,type,fields){
return (function (){
return null;
});})(map__57711,map__57711__$1,env,state,map__57712,map__57712__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__57715,_,p__57716){
var map__57717 = p__57715;
var map__57717__$1 = ((((!((map__57717 == null)))?((((map__57717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57717):map__57717);
var env = map__57717__$1;
var state = cljs.core.get.call(null,map__57717__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57718 = p__57716;
var map__57718__$1 = ((((!((map__57718 == null)))?((((map__57718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57718):map__57718);
var data_map = map__57718__$1;
var name = cljs.core.get.call(null,map__57718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__57718__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57717,map__57717__$1,env,state,map__57718,map__57718__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__57717,map__57717__$1,env,state,map__57718,map__57718__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__57721,_,p__57722){
var map__57723 = p__57721;
var map__57723__$1 = ((((!((map__57723 == null)))?((((map__57723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57723):map__57723);
var env = map__57723__$1;
var state = cljs.core.get.call(null,map__57723__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57724 = p__57722;
var map__57724__$1 = ((((!((map__57724 == null)))?((((map__57724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57724):map__57724);
var data_map = map__57724__$1;
var name = cljs.core.get.call(null,map__57724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__57724__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57723,map__57723__$1,env,state,map__57724,map__57724__$1,data_map,name,value){
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
});})(map__57723,map__57723__$1,env,state,map__57724,map__57724__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__57727,_,___$1){
var map__57728 = p__57727;
var map__57728__$1 = ((((!((map__57728 == null)))?((((map__57728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57728):map__57728);
var env = map__57728__$1;
var state = cljs.core.get.call(null,map__57728__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57728,map__57728__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__57728,map__57728__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__57730,_,p__57731){
var map__57732 = p__57730;
var map__57732__$1 = ((((!((map__57732 == null)))?((((map__57732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57732):map__57732);
var env = map__57732__$1;
var state = cljs.core.get.call(null,map__57732__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__57733 = p__57731;
var map__57733__$1 = ((((!((map__57733 == null)))?((((map__57733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57733):map__57733);
var data_map = map__57733__$1;
var status = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__57733__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57732,map__57732__$1,env,state,map__57733,map__57733__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__57732,map__57732__$1,env,state,map__57733,map__57733__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args57736 = [];
var len__22773__auto___57739 = arguments.length;
var i__22774__auto___57740 = (0);
while(true){
if((i__22774__auto___57740 < len__22773__auto___57739)){
args57736.push((arguments[i__22774__auto___57740]));

var G__57741 = (i__22774__auto___57740 + (1));
i__22774__auto___57740 = G__57741;
continue;
} else {
}
break;
}

var G__57738 = args57736.length;
switch (G__57738) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57736.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__57743){
var map__57749 = p__57743;
var map__57749__$1 = ((((!((map__57749 == null)))?((((map__57749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57749):map__57749);
var info = cljs.core.get.call(null,map__57749__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__57749__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__57749__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__57751 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__57751,(0),null);
var msg = cljs.core.nth.call(null,vec__57751,(1),null);
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
var map__57756 = lst;
var map__57756__$1 = ((((!((map__57756 == null)))?((((map__57756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57756):map__57756);
var lsts = cljs.core.get.call(null,map__57756__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__57756__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__57756,map__57756__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__57756,map__57756__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__57760 = lst;
var map__57760__$1 = ((((!((map__57760 == null)))?((((map__57760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57760):map__57760);
var status = cljs.core.get.call(null,map__57760__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__57766 = (function (){var G__57769 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57769) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__57766,(0),null);
var query_key = cljs.core.nth.call(null,vec__57766,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__57766,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__57766,elem_key,query_key))
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
var this__28633__auto__ = this;
React.Component.apply(this__28633__auto__,arguments);

if(!((this__28633__auto__.initLocalState == null))){
this__28633__auto__.state = this__28633__auto__.initLocalState();
} else {
this__28633__auto__.state = {};
}

return this__28633__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x57775_57787 = cloudxmark.core.Lsts.prototype;
x57775_57787.componentWillUpdate = ((function (x57775_57787){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
if(((!((this__28511__auto__ == null)))?(((false) || (this__28511__auto__.om$next$Ident$))?true:false):false)){
var ident__28515__auto___57788 = om.next.ident.call(null,this__28511__auto__,om.next.props.call(null,this__28511__auto__));
var next_ident__28516__auto___57789 = om.next.ident.call(null,this__28511__auto__,om.next._next_props.call(null,next_props__28512__auto__,this__28511__auto__));
if(cljs.core.not_EQ_.call(null,ident__28515__auto___57788,next_ident__28516__auto___57789)){
var idxr__28517__auto___57790 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28517__auto___57790 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28517__auto___57790),((function (idxr__28517__auto___57790,ident__28515__auto___57788,next_ident__28516__auto___57789,this__28511__auto__,x57775_57787){
return (function (indexes__28518__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28518__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28515__auto___57788], null),cljs.core.disj,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28516__auto___57789], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28511__auto__);
});})(idxr__28517__auto___57790,ident__28515__auto___57788,next_ident__28516__auto___57789,this__28511__auto__,x57775_57787))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28511__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28511__auto__);
});})(x57775_57787))
;

x57775_57787.shouldComponentUpdate = ((function (x57775_57787){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
var next_children__28514__auto__ = next_props__28512__auto__.children;
var next_props__28512__auto____$1 = goog.object.get(next_props__28512__auto__,"omcljs$value");
var next_props__28512__auto____$2 = (function (){var G__57777 = next_props__28512__auto____$1;
if((next_props__28512__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__57777);
} else {
return G__57777;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28511__auto__),next_props__28512__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__28511__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28511__auto__.state,"omcljs$state"),goog.object.get(next_state__28513__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28511__auto__.props.children,next_children__28514__auto__);
}
}
});})(x57775_57787))
;

x57775_57787.componentWillUnmount = ((function (x57775_57787){
return (function (){
var this__28511__auto__ = this;
var r__28522__auto__ = om.next.get_reconciler.call(null,this__28511__auto__);
var cfg__28523__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28522__auto__);
var st__28524__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28523__auto__);
var indexer__28521__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28523__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__28524__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28511__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28524__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28511__auto__);
} else {
}

if((indexer__28521__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28521__auto__,this__28511__auto__);
}
});})(x57775_57787))
;

x57775_57787.componentDidUpdate = ((function (x57775_57787){
return (function (prev_props__28519__auto__,prev_state__28520__auto__){
var this__28511__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28511__auto__);
});})(x57775_57787))
;

x57775_57787.isMounted = ((function (x57775_57787){
return (function (){
var this__28511__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28511__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x57775_57787))
;

x57775_57787.componentWillMount = ((function (x57775_57787){
return (function (){
var this__28511__auto__ = this;
var indexer__28521__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28521__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28521__auto__,this__28511__auto__);
}
});})(x57775_57787))
;

x57775_57787.render = ((function (x57775_57787){
return (function (){
var this__28510__auto__ = this;
var this$ = this__28510__auto__;
var _STAR_reconciler_STAR_57778 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_57779 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_57780 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_57781 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_57782 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28510__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28510__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28510__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28510__auto__);

om.next._STAR_parent_STAR_ = this__28510__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__57783 = lst;
var map__57783__$1 = ((((!((map__57783 == null)))?((((map__57783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57783):map__57783);
var lsts = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__57783__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_57782;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_57781;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_57780;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_57779;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_57778;
}});})(x57775_57787))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x57785_57791 = cloudxmark.core.Lsts;
/** @nocollapse */
x57785_57791.om$next$IQueryParams$ = true;

/** @nocollapse */
x57785_57791.om$next$IQueryParams$params$arity$1 = ((function (x57785_57791){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x57785_57791))
;

/** @nocollapse */
x57785_57791.om$next$IQuery$ = true;

/** @nocollapse */
x57785_57791.om$next$IQuery$query$arity$1 = ((function (x57785_57791){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x57785_57791))
;


var x57786_57792 = cloudxmark.core.Lsts.prototype;

x57786_57792.om$next$IQueryParams$ = true;


x57786_57792.om$next$IQueryParams$params$arity$1 = ((function (x57786_57792){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x57786_57792))
;


x57786_57792.om$next$IQuery$ = true;


x57786_57792.om$next$IQuery$query$arity$1 = ((function (x57786_57792){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x57786_57792))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28636__auto__,writer__28637__auto__,opt__28638__auto__){
return cljs.core._write.call(null,writer__28637__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__57801,cb){
var map__57802 = p__57801;
var map__57802__$1 = ((((!((map__57802 == null)))?((((map__57802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57802):map__57802);
var lst_search = cljs.core.get.call(null,map__57802__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__57804 = om.next.query__GT_ast.call(null,lst_search);
var map__57804__$1 = ((((!((map__57804 == null)))?((((map__57804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57804):map__57804);
var vec__57805 = cljs.core.get.call(null,map__57804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__57805,(0),null);
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
var map__57813 = result;
var map__57813__$1 = ((((!((map__57813 == null)))?((((map__57813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57813):map__57813);
var lsts = cljs.core.get.call(null,map__57813__$1,"lsts");
var user_id = cljs.core.get.call(null,map__57813__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__57813__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__57814 = json_status;
var map__57814__$1 = ((((!((map__57814 == null)))?((((map__57814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57814):map__57814);
var info = cljs.core.get.call(null,map__57814__$1,"info");
var warn = cljs.core.get.call(null,map__57814__$1,"warn");
var error = cljs.core.get.call(null,map__57814__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__57819 = json_status;
var map__57819__$1 = ((((!((map__57819 == null)))?((((map__57819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57819):map__57819);
var info = cljs.core.get.call(null,map__57819__$1,"info");
var warn = cljs.core.get.call(null,map__57819__$1,"warn");
var error = cljs.core.get.call(null,map__57819__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_58719){
var state_val_58720 = (state_58719[(1)]);
if((state_val_58720 === (65))){
var state_58719__$1 = state_58719;
var statearr_58721_58847 = state_58719__$1;
(statearr_58721_58847[(2)] = false);

(statearr_58721_58847[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (70))){
var inst_58352 = (state_58719[(7)]);
var inst_58602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58722_58848 = state_58719__$1;
(statearr_58722_58848[(2)] = inst_58602);

(statearr_58722_58848[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (62))){
var inst_58351 = (state_58719[(8)]);
var inst_58638 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_58719__$1 = state_58719;
if(inst_58638){
var statearr_58723_58849 = state_58719__$1;
(statearr_58723_58849[(1)] = (74));

} else {
var statearr_58724_58850 = state_58719__$1;
(statearr_58724_58850[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (74))){
var inst_58352 = (state_58719[(7)]);
var inst_58641 = [cljs.core.str("lst query data:"),cljs.core.str(inst_58352)].join('');
var inst_58642 = cljs.core.println.call(null,inst_58641);
var inst_58644 = (inst_58352 == null);
var inst_58645 = cljs.core.not.call(null,inst_58644);
var state_58719__$1 = (function (){var statearr_58725 = state_58719;
(statearr_58725[(9)] = inst_58642);

return statearr_58725;
})();
if(inst_58645){
var statearr_58726_58851 = state_58719__$1;
(statearr_58726_58851[(1)] = (77));

} else {
var statearr_58727_58852 = state_58719__$1;
(statearr_58727_58852[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (7))){
var inst_58712 = (state_58719[(2)]);
var state_58719__$1 = (function (){var statearr_58728 = state_58719;
(statearr_58728[(10)] = inst_58712);

return statearr_58728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(93),c);
} else {
if((state_val_58720 === (59))){
var inst_58554 = (state_58719[(2)]);
var inst_58555 = cljs.core.get.call(null,inst_58554,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_58556 = cljs.core.get.call(null,inst_58554,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_58557 = cljs.core.get.call(null,inst_58554,new cljs.core.Keyword(null,"value","value",305978217));
var inst_58558 = encodeURIComponent(inst_58555);
var inst_58559 = encodeURIComponent(inst_58556);
var inst_58560 = encodeURIComponent(inst_58557);
var inst_58561 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_58558),cljs.core.str("&name="),cljs.core.str(inst_58559),cljs.core.str("&value="),cljs.core.str(inst_58560)].join('');
var inst_58562 = cloudxmark.core.jsonp.call(null,inst_58561);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(60),inst_58562);
} else {
if((state_val_58720 === (86))){
var state_58719__$1 = state_58719;
var statearr_58729_58853 = state_58719__$1;
(statearr_58729_58853[(2)] = "");

(statearr_58729_58853[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (20))){
var inst_58710 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58730_58854 = state_58719__$1;
(statearr_58730_58854[(2)] = inst_58710);

(statearr_58730_58854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (72))){
var inst_58605 = (state_58719[(2)]);
var inst_58606 = cljs.core.get.call(null,inst_58605,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_58607 = cljs.core.get.call(null,inst_58605,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_58608 = cljs.core.get.call(null,inst_58605,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_58609 = cljs.core.get.call(null,inst_58605,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_58610 = cljs.core.get.call(null,inst_58605,new cljs.core.Keyword(null,"value","value",305978217));
var inst_58611 = encodeURIComponent(inst_58606);
var inst_58612 = encodeURIComponent(inst_58607);
var inst_58613 = encodeURIComponent(inst_58608);
var inst_58614 = encodeURIComponent(inst_58609);
var inst_58615 = encodeURIComponent(inst_58610);
var inst_58616 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_58611),cljs.core.str("&lst-name="),cljs.core.str(inst_58612),cljs.core.str("&orig-name="),cljs.core.str(inst_58613),cljs.core.str("&col-name="),cljs.core.str(inst_58614),cljs.core.str("&value="),cljs.core.str(inst_58615)].join('');
var inst_58617 = cloudxmark.core.jsonp.call(null,inst_58616);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(73),inst_58617);
} else {
if((state_val_58720 === (58))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58731_58855 = state_58719__$1;
(statearr_58731_58855[(2)] = inst_58352);

(statearr_58731_58855[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (60))){
var inst_58564 = (state_58719[(2)]);
var inst_58565 = cljs.core.js__GT_clj.call(null,inst_58564);
var inst_58566 = cloudxmark.core.convert_json_lsts_result.call(null,inst_58565,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_58567 = cljs.core.List.EMPTY;
var inst_58568 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_58569 = cljs.core._conj.call(null,inst_58567,inst_58568);
var inst_58570 = cljs.core.List.EMPTY;
var inst_58571 = cljs.core._conj.call(null,inst_58570,inst_58566);
var inst_58572 = cljs.core.concat.call(null,inst_58569,inst_58571);
var inst_58573 = cljs.core.seq.call(null,inst_58572);
var inst_58574 = cljs.core.sequence.call(null,inst_58573);
var inst_58575 = cljs.core.List.EMPTY;
var inst_58576 = cljs.core._conj.call(null,inst_58575,inst_58574);
var inst_58577 = cljs.core.concat.call(null,inst_58576);
var inst_58578 = cljs.core.seq.call(null,inst_58577);
var inst_58579 = cljs.core.sequence.call(null,inst_58578);
var inst_58580 = cljs.core.vec.call(null,inst_58579);
var inst_58581 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58580);
var state_58719__$1 = state_58719;
var statearr_58732_58856 = state_58719__$1;
(statearr_58732_58856[(2)] = inst_58581);

(statearr_58732_58856[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (27))){
var inst_58352 = (state_58719[(7)]);
var inst_58428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58733_58857 = state_58719__$1;
(statearr_58733_58857[(2)] = inst_58428);

(statearr_58733_58857[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (1))){
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(2),c);
} else {
if((state_val_58720 === (69))){
var inst_58597 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58734_58858 = state_58719__$1;
(statearr_58734_58858[(2)] = inst_58597);

(statearr_58734_58858[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (24))){
var state_58719__$1 = state_58719;
var statearr_58735_58859 = state_58719__$1;
(statearr_58735_58859[(2)] = true);

(statearr_58735_58859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (55))){
var state_58719__$1 = state_58719;
var statearr_58736_58860 = state_58719__$1;
(statearr_58736_58860[(2)] = false);

(statearr_58736_58860[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (85))){
var inst_58665 = (state_58719[(11)]);
var inst_58662 = (state_58719[(2)]);
var inst_58663 = cljs.core.get.call(null,inst_58662,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_58664 = cljs.core.get.call(null,inst_58662,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_58665__$1 = cljs.core.get.call(null,inst_58662,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_58666 = cljs.core.empty_QMARK_.call(null,inst_58665__$1);
var state_58719__$1 = (function (){var statearr_58737 = state_58719;
(statearr_58737[(12)] = inst_58664);

(statearr_58737[(13)] = inst_58663);

(statearr_58737[(11)] = inst_58665__$1);

return statearr_58737;
})();
if(inst_58666){
var statearr_58738_58861 = state_58719__$1;
(statearr_58738_58861[(1)] = (86));

} else {
var statearr_58739_58862 = state_58719__$1;
(statearr_58739_58862[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (39))){
var state_58719__$1 = state_58719;
var statearr_58740_58863 = state_58719__$1;
(statearr_58740_58863[(2)] = false);

(statearr_58740_58863[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (88))){
var inst_58672 = (state_58719[(2)]);
var inst_58673 = [cljs.core.str("/getItems?"),cljs.core.str(inst_58672)].join('');
var inst_58674 = cloudxmark.core.jsonp.call(null,inst_58673);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(89),inst_58674);
} else {
if((state_val_58720 === (46))){
var inst_58505 = (state_58719[(2)]);
var inst_58506 = cljs.core.get.call(null,inst_58505,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_58507 = cljs.core.get.call(null,inst_58505,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_58508 = encodeURIComponent(inst_58506);
var inst_58509 = encodeURIComponent(inst_58507);
var inst_58510 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_58508),cljs.core.str("&desc="),cljs.core.str(inst_58509)].join('');
var inst_58511 = cloudxmark.core.jsonp.call(null,inst_58510);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(47),inst_58511);
} else {
if((state_val_58720 === (4))){
var inst_58717 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58719__$1,inst_58717);
} else {
if((state_val_58720 === (77))){
var inst_58352 = (state_58719[(7)]);
var inst_58647 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58648 = (inst_58647 & (64));
var inst_58649 = inst_58352.cljs$core$ISeq$;
var inst_58650 = (inst_58648) || (inst_58649);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58650)){
var statearr_58741_58864 = state_58719__$1;
(statearr_58741_58864[(1)] = (80));

} else {
var statearr_58742_58865 = state_58719__$1;
(statearr_58742_58865[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (54))){
var state_58719__$1 = state_58719;
var statearr_58743_58866 = state_58719__$1;
(statearr_58743_58866[(2)] = true);

(statearr_58743_58866[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (92))){
var inst_58698 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58744_58867 = state_58719__$1;
(statearr_58744_58867[(2)] = inst_58698);

(statearr_58744_58867[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (15))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58745_58868 = state_58719__$1;
(statearr_58745_58868[(2)] = inst_58352);

(statearr_58745_58868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (48))){
var inst_58352 = (state_58719[(7)]);
var inst_58536 = (inst_58352 == null);
var inst_58537 = cljs.core.not.call(null,inst_58536);
var state_58719__$1 = state_58719;
if(inst_58537){
var statearr_58746_58869 = state_58719__$1;
(statearr_58746_58869[(1)] = (51));

} else {
var statearr_58747_58870 = state_58719__$1;
(statearr_58747_58870[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (50))){
var inst_58704 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58748_58871 = state_58719__$1;
(statearr_58748_58871[(2)] = inst_58704);

(statearr_58748_58871[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (75))){
var state_58719__$1 = state_58719;
var statearr_58749_58872 = state_58719__$1;
(statearr_58749_58872[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (21))){
var inst_58352 = (state_58719[(7)]);
var inst_58416 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58417 = (inst_58416 & (64));
var inst_58418 = inst_58352.cljs$core$ISeq$;
var inst_58419 = (inst_58417) || (inst_58418);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58419)){
var statearr_58751_58873 = state_58719__$1;
(statearr_58751_58873[(1)] = (24));

} else {
var statearr_58752_58874 = state_58719__$1;
(statearr_58752_58874[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (31))){
var inst_58462 = cloudxmark.core.jsonp.call(null,"/logout");
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(34),inst_58462);
} else {
if((state_val_58720 === (32))){
var inst_58351 = (state_58719[(8)]);
var inst_58483 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_58719__$1 = state_58719;
if(inst_58483){
var statearr_58753_58875 = state_58719__$1;
(statearr_58753_58875[(1)] = (35));

} else {
var statearr_58754_58876 = state_58719__$1;
(statearr_58754_58876[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (40))){
var inst_58500 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58500)){
var statearr_58755_58877 = state_58719__$1;
(statearr_58755_58877[(1)] = (44));

} else {
var statearr_58756_58878 = state_58719__$1;
(statearr_58756_58878[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (91))){
var state_58719__$1 = state_58719;
var statearr_58757_58879 = state_58719__$1;
(statearr_58757_58879[(2)] = null);

(statearr_58757_58879[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (56))){
var inst_58546 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58758_58880 = state_58719__$1;
(statearr_58758_58880[(2)] = inst_58546);

(statearr_58758_58880[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (33))){
var inst_58708 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58759_58881 = state_58719__$1;
(statearr_58759_58881[(2)] = inst_58708);

(statearr_58759_58881[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (13))){
var inst_58370 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58760_58882 = state_58719__$1;
(statearr_58760_58882[(2)] = inst_58370);

(statearr_58760_58882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (22))){
var state_58719__$1 = state_58719;
var statearr_58761_58883 = state_58719__$1;
(statearr_58761_58883[(2)] = false);

(statearr_58761_58883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (90))){
var state_58719__$1 = state_58719;
var statearr_58762_58884 = state_58719__$1;
(statearr_58762_58884[(2)] = null);

(statearr_58762_58884[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (36))){
var inst_58351 = (state_58719[(8)]);
var inst_58532 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_58719__$1 = state_58719;
if(inst_58532){
var statearr_58763_58885 = state_58719__$1;
(statearr_58763_58885[(1)] = (48));

} else {
var statearr_58764_58886 = state_58719__$1;
(statearr_58764_58886[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (41))){
var state_58719__$1 = state_58719;
var statearr_58765_58887 = state_58719__$1;
(statearr_58765_58887[(2)] = true);

(statearr_58765_58887[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (89))){
var inst_58664 = (state_58719[(12)]);
var inst_58676 = (state_58719[(2)]);
var inst_58677 = cljs.core.js__GT_clj.call(null,inst_58676);
var inst_58678 = cloudxmark.core.convert_json_lsts_result.call(null,inst_58677,inst_58664,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_58679 = cljs.core.List.EMPTY;
var inst_58680 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_58681 = cljs.core._conj.call(null,inst_58679,inst_58680);
var inst_58682 = cljs.core.List.EMPTY;
var inst_58683 = cljs.core._conj.call(null,inst_58682,inst_58678);
var inst_58684 = cljs.core.concat.call(null,inst_58681,inst_58683);
var inst_58685 = cljs.core.seq.call(null,inst_58684);
var inst_58686 = cljs.core.sequence.call(null,inst_58685);
var inst_58687 = cljs.core.List.EMPTY;
var inst_58688 = cljs.core._conj.call(null,inst_58687,inst_58686);
var inst_58689 = cljs.core.concat.call(null,inst_58688);
var inst_58690 = cljs.core.seq.call(null,inst_58689);
var inst_58691 = cljs.core.sequence.call(null,inst_58690);
var inst_58692 = cljs.core.vec.call(null,inst_58691);
var inst_58693 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58692);
var state_58719__$1 = state_58719;
var statearr_58766_58888 = state_58719__$1;
(statearr_58766_58888[(2)] = inst_58693);

(statearr_58766_58888[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (43))){
var inst_58497 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58767_58889 = state_58719__$1;
(statearr_58767_58889[(2)] = inst_58497);

(statearr_58767_58889[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (61))){
var inst_58352 = (state_58719[(7)]);
var inst_58587 = (inst_58352 == null);
var inst_58588 = cljs.core.not.call(null,inst_58587);
var state_58719__$1 = state_58719;
if(inst_58588){
var statearr_58768_58890 = state_58719__$1;
(statearr_58768_58890[(1)] = (64));

} else {
var statearr_58769_58891 = state_58719__$1;
(statearr_58769_58891[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (29))){
var inst_58431 = (state_58719[(2)]);
var inst_58432 = cljs.core.get.call(null,inst_58431,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_58433 = cljs.core.get.call(null,inst_58431,new cljs.core.Keyword(null,"password","password",417022471));
var inst_58434 = cljs.core.get.call(null,inst_58431,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_58435 = cloudxmark.core.enc_password.call(null,inst_58433);
var inst_58436 = encodeURIComponent(inst_58432);
var inst_58437 = encodeURIComponent(inst_58435);
var inst_58438 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_58436),cljs.core.str("&pass="),cljs.core.str(inst_58437)].join('');
var inst_58439 = cloudxmark.core.jsonp.call(null,inst_58438);
var state_58719__$1 = (function (){var statearr_58770 = state_58719;
(statearr_58770[(14)] = inst_58434);

return statearr_58770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(30),inst_58439);
} else {
if((state_val_58720 === (44))){
var inst_58352 = (state_58719[(7)]);
var inst_58502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58771_58892 = state_58719__$1;
(statearr_58771_58892[(2)] = inst_58502);

(statearr_58771_58892[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (93))){
var inst_58714 = (state_58719[(2)]);
var inst_58346 = inst_58714;
var state_58719__$1 = (function (){var statearr_58772 = state_58719;
(statearr_58772[(15)] = inst_58346);

return statearr_58772;
})();
var statearr_58773_58893 = state_58719__$1;
(statearr_58773_58893[(2)] = null);

(statearr_58773_58893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (6))){
var inst_58351 = (state_58719[(8)]);
var inst_58409 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_58719__$1 = state_58719;
if(inst_58409){
var statearr_58774_58894 = state_58719__$1;
(statearr_58774_58894[(1)] = (18));

} else {
var statearr_58775_58895 = state_58719__$1;
(statearr_58775_58895[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (28))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58776_58896 = state_58719__$1;
(statearr_58776_58896[(2)] = inst_58352);

(statearr_58776_58896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (64))){
var inst_58352 = (state_58719[(7)]);
var inst_58590 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58591 = (inst_58590 & (64));
var inst_58592 = inst_58352.cljs$core$ISeq$;
var inst_58593 = (inst_58591) || (inst_58592);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58593)){
var statearr_58777_58897 = state_58719__$1;
(statearr_58777_58897[(1)] = (67));

} else {
var statearr_58778_58898 = state_58719__$1;
(statearr_58778_58898[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (51))){
var inst_58352 = (state_58719[(7)]);
var inst_58539 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58540 = (inst_58539 & (64));
var inst_58541 = inst_58352.cljs$core$ISeq$;
var inst_58542 = (inst_58540) || (inst_58541);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58542)){
var statearr_58779_58899 = state_58719__$1;
(statearr_58779_58899[(1)] = (54));

} else {
var statearr_58780_58900 = state_58719__$1;
(statearr_58780_58900[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (25))){
var state_58719__$1 = state_58719;
var statearr_58781_58901 = state_58719__$1;
(statearr_58781_58901[(2)] = false);

(statearr_58781_58901[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (34))){
var inst_58464 = (state_58719[(2)]);
var inst_58465 = cljs.core.js__GT_clj.call(null,inst_58464);
var inst_58466 = cloudxmark.core.convert_json_status.call(null,inst_58465,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_58467 = cljs.core.List.EMPTY;
var inst_58468 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_58469 = cljs.core._conj.call(null,inst_58467,inst_58468);
var inst_58470 = cljs.core.List.EMPTY;
var inst_58471 = cljs.core._conj.call(null,inst_58470,inst_58466);
var inst_58472 = cljs.core.concat.call(null,inst_58469,inst_58471);
var inst_58473 = cljs.core.seq.call(null,inst_58472);
var inst_58474 = cljs.core.sequence.call(null,inst_58473);
var inst_58475 = cljs.core.List.EMPTY;
var inst_58476 = cljs.core._conj.call(null,inst_58475,inst_58474);
var inst_58477 = cljs.core.concat.call(null,inst_58476);
var inst_58478 = cljs.core.seq.call(null,inst_58477);
var inst_58479 = cljs.core.sequence.call(null,inst_58478);
var inst_58480 = cljs.core.vec.call(null,inst_58479);
var inst_58481 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58480);
var state_58719__$1 = state_58719;
var statearr_58782_58902 = state_58719__$1;
(statearr_58782_58902[(2)] = inst_58481);

(statearr_58782_58902[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (17))){
var inst_58380 = (state_58719[(16)]);
var inst_58381 = (state_58719[(17)]);
var inst_58387 = (state_58719[(2)]);
var inst_58388 = cljs.core.js__GT_clj.call(null,inst_58387);
var inst_58389 = cloudxmark.core.gen_key_bytes.call(null,inst_58380);
var inst_58390 = cloudxmark.core.create_aes_cbc.call(null,inst_58389);
var inst_58391 = cloudxmark.core.convert_json_lsts_result.call(null,inst_58388,inst_58381,new cljs.core.Keyword(null,"login","login",55217519));
var inst_58392 = cljs.core.assoc.call(null,inst_58391,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_58390);
var inst_58393 = cljs.core.List.EMPTY;
var inst_58394 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_58395 = cljs.core._conj.call(null,inst_58393,inst_58394);
var inst_58396 = cljs.core.List.EMPTY;
var inst_58397 = cljs.core._conj.call(null,inst_58396,inst_58392);
var inst_58398 = cljs.core.concat.call(null,inst_58395,inst_58397);
var inst_58399 = cljs.core.seq.call(null,inst_58398);
var inst_58400 = cljs.core.sequence.call(null,inst_58399);
var inst_58401 = cljs.core.List.EMPTY;
var inst_58402 = cljs.core._conj.call(null,inst_58401,inst_58400);
var inst_58403 = cljs.core.concat.call(null,inst_58402);
var inst_58404 = cljs.core.seq.call(null,inst_58403);
var inst_58405 = cljs.core.sequence.call(null,inst_58404);
var inst_58406 = cljs.core.vec.call(null,inst_58405);
var inst_58407 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58406);
var state_58719__$1 = state_58719;
var statearr_58783_58903 = state_58719__$1;
(statearr_58783_58903[(2)] = inst_58407);

(statearr_58783_58903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (3))){
var inst_58351 = (state_58719[(8)]);
var inst_58346 = (state_58719[(15)]);
var inst_58351__$1 = cljs.core.nth.call(null,inst_58346,(0),null);
var inst_58352 = cljs.core.nth.call(null,inst_58346,(1),null);
var inst_58353 = cljs.core.nth.call(null,inst_58346,(2),null);
var inst_58354 = cljs.core._EQ_.call(null,inst_58351__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_58719__$1 = (function (){var statearr_58784 = state_58719;
(statearr_58784[(7)] = inst_58352);

(statearr_58784[(8)] = inst_58351__$1);

(statearr_58784[(18)] = inst_58353);

return statearr_58784;
})();
if(inst_58354){
var statearr_58785_58904 = state_58719__$1;
(statearr_58785_58904[(1)] = (5));

} else {
var statearr_58786_58905 = state_58719__$1;
(statearr_58786_58905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (12))){
var state_58719__$1 = state_58719;
var statearr_58787_58906 = state_58719__$1;
(statearr_58787_58906[(2)] = false);

(statearr_58787_58906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (2))){
var inst_58342 = (state_58719[(2)]);
var inst_58343 = cljs.core.nth.call(null,inst_58342,(0),null);
var inst_58344 = cljs.core.nth.call(null,inst_58342,(1),null);
var inst_58345 = cljs.core.nth.call(null,inst_58342,(2),null);
var inst_58346 = inst_58342;
var state_58719__$1 = (function (){var statearr_58788 = state_58719;
(statearr_58788[(19)] = inst_58344);

(statearr_58788[(20)] = inst_58345);

(statearr_58788[(15)] = inst_58346);

(statearr_58788[(21)] = inst_58343);

return statearr_58788;
})();
var statearr_58789_58907 = state_58719__$1;
(statearr_58789_58907[(2)] = null);

(statearr_58789_58907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (66))){
var inst_58600 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58600)){
var statearr_58790_58908 = state_58719__$1;
(statearr_58790_58908[(1)] = (70));

} else {
var statearr_58791_58909 = state_58719__$1;
(statearr_58791_58909[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (23))){
var inst_58426 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58426)){
var statearr_58792_58910 = state_58719__$1;
(statearr_58792_58910[(1)] = (27));

} else {
var statearr_58793_58911 = state_58719__$1;
(statearr_58793_58911[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (47))){
var inst_58513 = (state_58719[(2)]);
var inst_58514 = cljs.core.js__GT_clj.call(null,inst_58513);
var inst_58515 = cloudxmark.core.convert_json_lsts_result.call(null,inst_58514,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_58516 = cljs.core.List.EMPTY;
var inst_58517 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_58518 = cljs.core._conj.call(null,inst_58516,inst_58517);
var inst_58519 = cljs.core.List.EMPTY;
var inst_58520 = cljs.core._conj.call(null,inst_58519,inst_58515);
var inst_58521 = cljs.core.concat.call(null,inst_58518,inst_58520);
var inst_58522 = cljs.core.seq.call(null,inst_58521);
var inst_58523 = cljs.core.sequence.call(null,inst_58522);
var inst_58524 = cljs.core.List.EMPTY;
var inst_58525 = cljs.core._conj.call(null,inst_58524,inst_58523);
var inst_58526 = cljs.core.concat.call(null,inst_58525);
var inst_58527 = cljs.core.seq.call(null,inst_58526);
var inst_58528 = cljs.core.sequence.call(null,inst_58527);
var inst_58529 = cljs.core.vec.call(null,inst_58528);
var inst_58530 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58529);
var state_58719__$1 = state_58719;
var statearr_58794_58912 = state_58719__$1;
(statearr_58794_58912[(2)] = inst_58530);

(statearr_58794_58912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (35))){
var inst_58352 = (state_58719[(7)]);
var inst_58487 = (inst_58352 == null);
var inst_58488 = cljs.core.not.call(null,inst_58487);
var state_58719__$1 = state_58719;
if(inst_58488){
var statearr_58795_58913 = state_58719__$1;
(statearr_58795_58913[(1)] = (38));

} else {
var statearr_58796_58914 = state_58719__$1;
(statearr_58796_58914[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (82))){
var inst_58654 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58797_58915 = state_58719__$1;
(statearr_58797_58915[(2)] = inst_58654);

(statearr_58797_58915[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (76))){
var inst_58700 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58798_58916 = state_58719__$1;
(statearr_58798_58916[(2)] = inst_58700);

(statearr_58798_58916[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (19))){
var inst_58351 = (state_58719[(8)]);
var inst_58460 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_58719__$1 = state_58719;
if(inst_58460){
var statearr_58799_58917 = state_58719__$1;
(statearr_58799_58917[(1)] = (31));

} else {
var statearr_58800_58918 = state_58719__$1;
(statearr_58800_58918[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (57))){
var inst_58352 = (state_58719[(7)]);
var inst_58551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58801_58919 = state_58719__$1;
(statearr_58801_58919[(2)] = inst_58551);

(statearr_58801_58919[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (68))){
var state_58719__$1 = state_58719;
var statearr_58802_58920 = state_58719__$1;
(statearr_58802_58920[(2)] = false);

(statearr_58802_58920[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (11))){
var state_58719__$1 = state_58719;
var statearr_58803_58921 = state_58719__$1;
(statearr_58803_58921[(2)] = true);

(statearr_58803_58921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (9))){
var state_58719__$1 = state_58719;
var statearr_58804_58922 = state_58719__$1;
(statearr_58804_58922[(2)] = false);

(statearr_58804_58922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (5))){
var inst_58352 = (state_58719[(7)]);
var inst_58357 = [cljs.core.str("lst login data:"),cljs.core.str(inst_58352)].join('');
var inst_58358 = cljs.core.println.call(null,inst_58357);
var inst_58360 = (inst_58352 == null);
var inst_58361 = cljs.core.not.call(null,inst_58360);
var state_58719__$1 = (function (){var statearr_58805 = state_58719;
(statearr_58805[(22)] = inst_58358);

return statearr_58805;
})();
if(inst_58361){
var statearr_58806_58923 = state_58719__$1;
(statearr_58806_58923[(1)] = (8));

} else {
var statearr_58807_58924 = state_58719__$1;
(statearr_58807_58924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (83))){
var inst_58352 = (state_58719[(7)]);
var inst_58659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58808_58925 = state_58719__$1;
(statearr_58808_58925[(2)] = inst_58659);

(statearr_58808_58925[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (14))){
var inst_58352 = (state_58719[(7)]);
var inst_58375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58352);
var state_58719__$1 = state_58719;
var statearr_58809_58926 = state_58719__$1;
(statearr_58809_58926[(2)] = inst_58375);

(statearr_58809_58926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (45))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58810_58927 = state_58719__$1;
(statearr_58810_58927[(2)] = inst_58352);

(statearr_58810_58927[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (53))){
var inst_58549 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58549)){
var statearr_58811_58928 = state_58719__$1;
(statearr_58811_58928[(1)] = (57));

} else {
var statearr_58812_58929 = state_58719__$1;
(statearr_58812_58929[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (78))){
var state_58719__$1 = state_58719;
var statearr_58813_58930 = state_58719__$1;
(statearr_58813_58930[(2)] = false);

(statearr_58813_58930[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (26))){
var inst_58423 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58814_58931 = state_58719__$1;
(statearr_58814_58931[(2)] = inst_58423);

(statearr_58814_58931[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (16))){
var inst_58380 = (state_58719[(16)]);
var inst_58378 = (state_58719[(2)]);
var inst_58379 = cljs.core.get.call(null,inst_58378,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_58380__$1 = cljs.core.get.call(null,inst_58378,new cljs.core.Keyword(null,"password","password",417022471));
var inst_58381 = cljs.core.get.call(null,inst_58378,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_58382 = encodeURIComponent(inst_58379);
var inst_58383 = encodeURIComponent(inst_58380__$1);
var inst_58384 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_58382),cljs.core.str("&pass="),cljs.core.str(inst_58383)].join('');
var inst_58385 = cloudxmark.core.jsonp.call(null,inst_58384);
var state_58719__$1 = (function (){var statearr_58815 = state_58719;
(statearr_58815[(16)] = inst_58380__$1);

(statearr_58815[(17)] = inst_58381);

return statearr_58815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(17),inst_58385);
} else {
if((state_val_58720 === (81))){
var state_58719__$1 = state_58719;
var statearr_58816_58932 = state_58719__$1;
(statearr_58816_58932[(2)] = false);

(statearr_58816_58932[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (79))){
var inst_58657 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58657)){
var statearr_58817_58933 = state_58719__$1;
(statearr_58817_58933[(1)] = (83));

} else {
var statearr_58818_58934 = state_58719__$1;
(statearr_58818_58934[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (38))){
var inst_58352 = (state_58719[(7)]);
var inst_58490 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58491 = (inst_58490 & (64));
var inst_58492 = inst_58352.cljs$core$ISeq$;
var inst_58493 = (inst_58491) || (inst_58492);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58493)){
var statearr_58819_58935 = state_58719__$1;
(statearr_58819_58935[(1)] = (41));

} else {
var statearr_58820_58936 = state_58719__$1;
(statearr_58820_58936[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (87))){
var inst_58665 = (state_58719[(11)]);
var inst_58669 = encodeURIComponent(inst_58665);
var inst_58670 = [cljs.core.str("query="),cljs.core.str(inst_58669)].join('');
var state_58719__$1 = state_58719;
var statearr_58821_58937 = state_58719__$1;
(statearr_58821_58937[(2)] = inst_58670);

(statearr_58821_58937[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (30))){
var inst_58441 = (state_58719[(2)]);
var inst_58442 = cljs.core.js__GT_clj.call(null,inst_58441);
var inst_58443 = cloudxmark.core.convert_json_status.call(null,inst_58442,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_58444 = cljs.core.List.EMPTY;
var inst_58445 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_58446 = cljs.core._conj.call(null,inst_58444,inst_58445);
var inst_58447 = cljs.core.List.EMPTY;
var inst_58448 = cljs.core._conj.call(null,inst_58447,inst_58443);
var inst_58449 = cljs.core.concat.call(null,inst_58446,inst_58448);
var inst_58450 = cljs.core.seq.call(null,inst_58449);
var inst_58451 = cljs.core.sequence.call(null,inst_58450);
var inst_58452 = cljs.core.List.EMPTY;
var inst_58453 = cljs.core._conj.call(null,inst_58452,inst_58451);
var inst_58454 = cljs.core.concat.call(null,inst_58453);
var inst_58455 = cljs.core.seq.call(null,inst_58454);
var inst_58456 = cljs.core.sequence.call(null,inst_58455);
var inst_58457 = cljs.core.vec.call(null,inst_58456);
var inst_58458 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58457);
var state_58719__$1 = state_58719;
var statearr_58822_58938 = state_58719__$1;
(statearr_58822_58938[(2)] = inst_58458);

(statearr_58822_58938[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (73))){
var inst_58619 = (state_58719[(2)]);
var inst_58620 = cljs.core.js__GT_clj.call(null,inst_58619);
var inst_58621 = cloudxmark.core.convert_json_lsts_result.call(null,inst_58620,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_58622 = cljs.core.List.EMPTY;
var inst_58623 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_58624 = cljs.core._conj.call(null,inst_58622,inst_58623);
var inst_58625 = cljs.core.List.EMPTY;
var inst_58626 = cljs.core._conj.call(null,inst_58625,inst_58621);
var inst_58627 = cljs.core.concat.call(null,inst_58624,inst_58626);
var inst_58628 = cljs.core.seq.call(null,inst_58627);
var inst_58629 = cljs.core.sequence.call(null,inst_58628);
var inst_58630 = cljs.core.List.EMPTY;
var inst_58631 = cljs.core._conj.call(null,inst_58630,inst_58629);
var inst_58632 = cljs.core.concat.call(null,inst_58631);
var inst_58633 = cljs.core.seq.call(null,inst_58632);
var inst_58634 = cljs.core.sequence.call(null,inst_58633);
var inst_58635 = cljs.core.vec.call(null,inst_58634);
var inst_58636 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_58635);
var state_58719__$1 = state_58719;
var statearr_58823_58939 = state_58719__$1;
(statearr_58823_58939[(2)] = inst_58636);

(statearr_58823_58939[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (10))){
var inst_58373 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58373)){
var statearr_58824_58940 = state_58719__$1;
(statearr_58824_58940[(1)] = (14));

} else {
var statearr_58825_58941 = state_58719__$1;
(statearr_58825_58941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (18))){
var inst_58352 = (state_58719[(7)]);
var inst_58413 = (inst_58352 == null);
var inst_58414 = cljs.core.not.call(null,inst_58413);
var state_58719__$1 = state_58719;
if(inst_58414){
var statearr_58826_58942 = state_58719__$1;
(statearr_58826_58942[(1)] = (21));

} else {
var statearr_58827_58943 = state_58719__$1;
(statearr_58827_58943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (52))){
var state_58719__$1 = state_58719;
var statearr_58828_58944 = state_58719__$1;
(statearr_58828_58944[(2)] = false);

(statearr_58828_58944[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (67))){
var state_58719__$1 = state_58719;
var statearr_58829_58945 = state_58719__$1;
(statearr_58829_58945[(2)] = true);

(statearr_58829_58945[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (71))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58830_58946 = state_58719__$1;
(statearr_58830_58946[(2)] = inst_58352);

(statearr_58830_58946[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (42))){
var state_58719__$1 = state_58719;
var statearr_58831_58947 = state_58719__$1;
(statearr_58831_58947[(2)] = false);

(statearr_58831_58947[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (80))){
var state_58719__$1 = state_58719;
var statearr_58832_58948 = state_58719__$1;
(statearr_58832_58948[(2)] = true);

(statearr_58832_58948[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (37))){
var inst_58706 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58833_58949 = state_58719__$1;
(statearr_58833_58949[(2)] = inst_58706);

(statearr_58833_58949[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (63))){
var inst_58702 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
var statearr_58834_58950 = state_58719__$1;
(statearr_58834_58950[(2)] = inst_58702);

(statearr_58834_58950[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (8))){
var inst_58352 = (state_58719[(7)]);
var inst_58363 = inst_58352.cljs$lang$protocol_mask$partition0$;
var inst_58364 = (inst_58363 & (64));
var inst_58365 = inst_58352.cljs$core$ISeq$;
var inst_58366 = (inst_58364) || (inst_58365);
var state_58719__$1 = state_58719;
if(cljs.core.truth_(inst_58366)){
var statearr_58835_58951 = state_58719__$1;
(statearr_58835_58951[(1)] = (11));

} else {
var statearr_58836_58952 = state_58719__$1;
(statearr_58836_58952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (49))){
var inst_58351 = (state_58719[(8)]);
var inst_58583 = cljs.core._EQ_.call(null,inst_58351,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_58719__$1 = state_58719;
if(inst_58583){
var statearr_58837_58953 = state_58719__$1;
(statearr_58837_58953[(1)] = (61));

} else {
var statearr_58838_58954 = state_58719__$1;
(statearr_58838_58954[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (84))){
var inst_58352 = (state_58719[(7)]);
var state_58719__$1 = state_58719;
var statearr_58839_58955 = state_58719__$1;
(statearr_58839_58955[(2)] = inst_58352);

(statearr_58839_58955[(1)] = (85));


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
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28357__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28357__auto____0 = (function (){
var statearr_58843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58843[(0)] = cloudxmark$core$search_loop_$_state_machine__28357__auto__);

(statearr_58843[(1)] = (1));

return statearr_58843;
});
var cloudxmark$core$search_loop_$_state_machine__28357__auto____1 = (function (state_58719){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_58719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e58844){if((e58844 instanceof Object)){
var ex__28360__auto__ = e58844;
var statearr_58845_58956 = state_58719;
(statearr_58845_58956[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58957 = state_58719;
state_58719 = G__58957;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28357__auto__ = function(state_58719){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____1.call(this,state_58719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28357__auto____0;
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28357__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_58846 = f__28380__auto__.call(null);
(statearr_58846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_58846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1472318618785