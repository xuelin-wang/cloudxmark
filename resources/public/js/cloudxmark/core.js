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
var idx_34692 = (0);
while(true){
var len1_34693 = b1.length;
if((cljs.core._EQ_.call(null,idx_34692,len1_34693)) || (cljs.core._EQ_.call(null,idx_34692,max_len))){
} else {
(b1[idx_34692] = ((b1[idx_34692]) ^ (b2[idx_34692])));

var G__34694 = (idx_34692 + (1));
idx_34692 = G__34694;
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
var args34697 = [];
var len__22773__auto___34700 = arguments.length;
var i__22774__auto___34701 = (0);
while(true){
if((i__22774__auto___34701 < len__22773__auto___34700)){
args34697.push((arguments[i__22774__auto___34701]));

var G__34702 = (i__22774__auto___34701 + (1));
i__22774__auto___34701 = G__34702;
continue;
} else {
}
break;
}

var G__34699 = args34697.length;
switch (G__34699) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34697.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__34695_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__34695_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__34696_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__34696_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__34704,_,p__34705){
var map__34706 = p__34704;
var map__34706__$1 = ((((!((map__34706 == null)))?((((map__34706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34706):map__34706);
var env = map__34706__$1;
var state = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__34706__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__34707 = p__34705;
var map__34707__$1 = ((((!((map__34707 == null)))?((((map__34707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34707):map__34707);
var query_ver = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__34710 = lst;
var map__34710__$1 = ((((!((map__34710 == null)))?((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var lsts = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_34712 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_34712);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__34713,_,p__34714){
var map__34715 = p__34713;
var map__34715__$1 = ((((!((map__34715 == null)))?((((map__34715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34715):map__34715);
var env = map__34715__$1;
var state = cljs.core.get.call(null,map__34715__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34716 = p__34714;
var map__34716__$1 = ((((!((map__34716 == null)))?((((map__34716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34716):map__34716);
var status = map__34716__$1;
var id = cljs.core.get.call(null,map__34716__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34715,map__34715__$1,env,state,map__34716,map__34716__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__34715,map__34715__$1,env,state,map__34716,map__34716__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__34719,_,p__34720){
var map__34721 = p__34719;
var map__34721__$1 = ((((!((map__34721 == null)))?((((map__34721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34721):map__34721);
var env = map__34721__$1;
var state = cljs.core.get.call(null,map__34721__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34722 = p__34720;
var map__34722__$1 = ((((!((map__34722 == null)))?((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34722):map__34722);
var path = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34721,map__34721__$1,env,state,map__34722,map__34722__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__34721,map__34721__$1,env,state,map__34722,map__34722__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__34725,_,p__34726){
var map__34727 = p__34725;
var map__34727__$1 = ((((!((map__34727 == null)))?((((map__34727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var env = map__34727__$1;
var state = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34728 = p__34726;
var map__34728__$1 = ((((!((map__34728 == null)))?((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34728):map__34728);
var data_map = map__34728__$1;
var lst_name = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34727,map__34727__$1,env,state,map__34728,map__34728__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__34727,map__34727__$1,env,state,map__34728,map__34728__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__34731,_,p__34732){
var map__34733 = p__34731;
var map__34733__$1 = ((((!((map__34733 == null)))?((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34733):map__34733);
var env = map__34733__$1;
var state = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34734 = p__34732;
var map__34734__$1 = ((((!((map__34734 == null)))?((((map__34734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34734):map__34734);
var field_id = cljs.core.get.call(null,map__34734__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__34734__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34733,map__34733__$1,env,state,map__34734,map__34734__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__34733,map__34733__$1,env,state,map__34734,map__34734__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__34737,_,p__34738){
var map__34739 = p__34737;
var map__34739__$1 = ((((!((map__34739 == null)))?((((map__34739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34739):map__34739);
var env = map__34739__$1;
var state = cljs.core.get.call(null,map__34739__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34740 = p__34738;
var map__34740__$1 = ((((!((map__34740 == null)))?((((map__34740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34740):map__34740);
var data_map = map__34740__$1;
var user_id = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34739,map__34739__$1,env,state,map__34740,map__34740__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__34739,map__34739__$1,env,state,map__34740,map__34740__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__34743,_,p__34744){
var map__34745 = p__34743;
var map__34745__$1 = ((((!((map__34745 == null)))?((((map__34745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34745):map__34745);
var env = map__34745__$1;
var state = cljs.core.get.call(null,map__34745__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34746 = p__34744;
var map__34746__$1 = ((((!((map__34746 == null)))?((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34746):map__34746);
var data_map = map__34746__$1;
var user_id = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34745,map__34745__$1,env,state,map__34746,map__34746__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__34745,map__34745__$1,env,state,map__34746,map__34746__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__34749,_,p__34750){
var map__34751 = p__34749;
var map__34751__$1 = ((((!((map__34751 == null)))?((((map__34751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34751):map__34751);
var env = map__34751__$1;
var state = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34752 = p__34750;
var map__34752__$1 = ((((!((map__34752 == null)))?((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34752):map__34752);
var data_map = map__34752__$1;
var type = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__34752__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34751,map__34751__$1,env,state,map__34752,map__34752__$1,data_map,type,fields){
return (function (){
return null;
});})(map__34751,map__34751__$1,env,state,map__34752,map__34752__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__34755,_,p__34756){
var map__34757 = p__34755;
var map__34757__$1 = ((((!((map__34757 == null)))?((((map__34757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34757):map__34757);
var env = map__34757__$1;
var state = cljs.core.get.call(null,map__34757__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34758 = p__34756;
var map__34758__$1 = ((((!((map__34758 == null)))?((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34758):map__34758);
var data_map = map__34758__$1;
var name = cljs.core.get.call(null,map__34758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__34758__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34757,map__34757__$1,env,state,map__34758,map__34758__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__34757,map__34757__$1,env,state,map__34758,map__34758__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__34761,_,p__34762){
var map__34763 = p__34761;
var map__34763__$1 = ((((!((map__34763 == null)))?((((map__34763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34763):map__34763);
var env = map__34763__$1;
var state = cljs.core.get.call(null,map__34763__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34764 = p__34762;
var map__34764__$1 = ((((!((map__34764 == null)))?((((map__34764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34764):map__34764);
var data_map = map__34764__$1;
var name = cljs.core.get.call(null,map__34764__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__34764__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34763,map__34763__$1,env,state,map__34764,map__34764__$1,data_map,name,value){
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
});})(map__34763,map__34763__$1,env,state,map__34764,map__34764__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__34767,_,___$1){
var map__34768 = p__34767;
var map__34768__$1 = ((((!((map__34768 == null)))?((((map__34768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34768):map__34768);
var env = map__34768__$1;
var state = cljs.core.get.call(null,map__34768__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34768,map__34768__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__34768,map__34768__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__34770,_,p__34771){
var map__34772 = p__34770;
var map__34772__$1 = ((((!((map__34772 == null)))?((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34772):map__34772);
var env = map__34772__$1;
var state = cljs.core.get.call(null,map__34772__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__34773 = p__34771;
var map__34773__$1 = ((((!((map__34773 == null)))?((((map__34773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34773):map__34773);
var data_map = map__34773__$1;
var status = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__34772,map__34772__$1,env,state,map__34773,map__34773__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__34772,map__34772__$1,env,state,map__34773,map__34773__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args34776 = [];
var len__22773__auto___34779 = arguments.length;
var i__22774__auto___34780 = (0);
while(true){
if((i__22774__auto___34780 < len__22773__auto___34779)){
args34776.push((arguments[i__22774__auto___34780]));

var G__34781 = (i__22774__auto___34780 + (1));
i__22774__auto___34780 = G__34781;
continue;
} else {
}
break;
}

var G__34778 = args34776.length;
switch (G__34778) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34776.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__34783){
var map__34789 = p__34783;
var map__34789__$1 = ((((!((map__34789 == null)))?((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34789):map__34789);
var info = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__34791 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__34791,(0),null);
var msg = cljs.core.nth.call(null,vec__34791,(1),null);
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
var map__34796 = lst;
var map__34796__$1 = ((((!((map__34796 == null)))?((((map__34796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34796):map__34796);
var lsts = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__34796__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__34796,map__34796__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__34796,map__34796__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__34800 = lst;
var map__34800__$1 = ((((!((map__34800 == null)))?((((map__34800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34800):map__34800);
var status = cljs.core.get.call(null,map__34800__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__34806 = (function (){var G__34809 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34809) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__34806,(0),null);
var query_key = cljs.core.nth.call(null,vec__34806,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__34806,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__34806,elem_key,query_key))
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
var this__33699__auto__ = this;
React.Component.apply(this__33699__auto__,arguments);

if(!((this__33699__auto__.initLocalState == null))){
this__33699__auto__.state = this__33699__auto__.initLocalState();
} else {
this__33699__auto__.state = {};
}

return this__33699__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x34815_34827 = cloudxmark.core.Lsts.prototype;
x34815_34827.componentWillUpdate = ((function (x34815_34827){
return (function (next_props__33601__auto__,next_state__33602__auto__){
var this__33600__auto__ = this;
if(((!((this__33600__auto__ == null)))?(((false) || (this__33600__auto__.om$next$Ident$))?true:false):false)){
var ident__33604__auto___34828 = om.next.ident.call(null,this__33600__auto__,om.next.props.call(null,this__33600__auto__));
var next_ident__33605__auto___34829 = om.next.ident.call(null,this__33600__auto__,om.next._next_props.call(null,next_props__33601__auto__,this__33600__auto__));
if(cljs.core.not_EQ_.call(null,ident__33604__auto___34828,next_ident__33605__auto___34829)){
var idxr__33606__auto___34830 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33600__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33606__auto___34830 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33606__auto___34830),((function (idxr__33606__auto___34830,ident__33604__auto___34828,next_ident__33605__auto___34829,this__33600__auto__,x34815_34827){
return (function (indexes__33607__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33607__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33604__auto___34828], null),cljs.core.disj,this__33600__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33605__auto___34829], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33600__auto__);
});})(idxr__33606__auto___34830,ident__33604__auto___34828,next_ident__33605__auto___34829,this__33600__auto__,x34815_34827))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33600__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33600__auto__);
});})(x34815_34827))
;

x34815_34827.shouldComponentUpdate = ((function (x34815_34827){
return (function (next_props__33601__auto__,next_state__33602__auto__){
var this__33600__auto__ = this;
var next_children__33603__auto__ = next_props__33601__auto__.children;
var next_props__33601__auto____$1 = goog.object.get(next_props__33601__auto__,"omcljs$value");
var next_props__33601__auto____$2 = (function (){var G__34817 = next_props__33601__auto____$1;
if((next_props__33601__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__34817);
} else {
return G__34817;
}
})();
var or__21590__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__33600__auto__),next_props__33601__auto____$2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = this__33600__auto__.state;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__33600__auto__.state,"omcljs$state"),goog.object.get(next_state__33602__auto__,"omcljs$state"));
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__33600__auto__.props.children,next_children__33603__auto__);
}
}
});})(x34815_34827))
;

x34815_34827.componentWillUnmount = ((function (x34815_34827){
return (function (){
var this__33600__auto__ = this;
var r__33611__auto__ = om.next.get_reconciler.call(null,this__33600__auto__);
var cfg__33612__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__33611__auto__);
var st__33613__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__33612__auto__);
var indexer__33610__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__33612__auto__);
if(cljs.core.truth_((function (){var and__21578__auto__ = !((st__33613__auto__ == null));
if(and__21578__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__33613__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__33600__auto__], null));
} else {
return and__21578__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__33613__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__33600__auto__);
} else {
}

if((indexer__33610__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__33610__auto__,this__33600__auto__);
}
});})(x34815_34827))
;

x34815_34827.componentDidUpdate = ((function (x34815_34827){
return (function (prev_props__33608__auto__,prev_state__33609__auto__){
var this__33600__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33600__auto__);
});})(x34815_34827))
;

x34815_34827.isMounted = ((function (x34815_34827){
return (function (){
var this__33600__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33600__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34815_34827))
;

x34815_34827.componentWillMount = ((function (x34815_34827){
return (function (){
var this__33600__auto__ = this;
var indexer__33610__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33600__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33610__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33610__auto__,this__33600__auto__);
}
});})(x34815_34827))
;

x34815_34827.render = ((function (x34815_34827){
return (function (){
var this__33599__auto__ = this;
var this$ = this__33599__auto__;
var _STAR_reconciler_STAR_34818 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34819 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34820 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34821 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34822 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33599__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33599__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33599__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33599__auto__);

om.next._STAR_parent_STAR_ = this__33599__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__34823 = lst;
var map__34823__$1 = ((((!((map__34823 == null)))?((((map__34823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34823):map__34823);
var lsts = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__34823__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34822;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34821;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34820;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34819;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34818;
}});})(x34815_34827))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x34825_34831 = cloudxmark.core.Lsts;
x34825_34831.om$next$IQueryParams$ = true;

x34825_34831.om$next$IQueryParams$params$arity$1 = ((function (x34825_34831){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x34825_34831))
;

x34825_34831.om$next$IQuery$ = true;

x34825_34831.om$next$IQuery$query$arity$1 = ((function (x34825_34831){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x34825_34831))
;


var x34826_34832 = cloudxmark.core.Lsts.prototype;
x34826_34832.om$next$IQueryParams$ = true;

x34826_34832.om$next$IQueryParams$params$arity$1 = ((function (x34826_34832){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x34826_34832))
;

x34826_34832.om$next$IQuery$ = true;

x34826_34832.om$next$IQuery$query$arity$1 = ((function (x34826_34832){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x34826_34832))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__33701__auto__,writer__33702__auto__,opt__33703__auto__){
return cljs.core._write.call(null,writer__33702__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__34841,cb){
var map__34842 = p__34841;
var map__34842__$1 = ((((!((map__34842 == null)))?((((map__34842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34842):map__34842);
var lst_search = cljs.core.get.call(null,map__34842__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__34844 = om.next.query__GT_ast.call(null,lst_search);
var map__34844__$1 = ((((!((map__34844 == null)))?((((map__34844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34844):map__34844);
var vec__34845 = cljs.core.get.call(null,map__34844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__34845,(0),null);
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
var map__34853 = result;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var lsts = cljs.core.get.call(null,map__34853__$1,"lsts");
var user_id = cljs.core.get.call(null,map__34853__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__34853__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__34854 = json_status;
var map__34854__$1 = ((((!((map__34854 == null)))?((((map__34854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var info = cljs.core.get.call(null,map__34854__$1,"info");
var warn = cljs.core.get.call(null,map__34854__$1,"warn");
var error = cljs.core.get.call(null,map__34854__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__34859 = json_status;
var map__34859__$1 = ((((!((map__34859 == null)))?((((map__34859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34859):map__34859);
var info = cljs.core.get.call(null,map__34859__$1,"info");
var warn = cljs.core.get.call(null,map__34859__$1,"warn");
var error = cljs.core.get.call(null,map__34859__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_35759){
var state_val_35760 = (state_35759[(1)]);
if((state_val_35760 === (65))){
var state_35759__$1 = state_35759;
var statearr_35761_35887 = state_35759__$1;
(statearr_35761_35887[(2)] = false);

(statearr_35761_35887[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (70))){
var inst_35392 = (state_35759[(7)]);
var inst_35642 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35762_35888 = state_35759__$1;
(statearr_35762_35888[(2)] = inst_35642);

(statearr_35762_35888[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (62))){
var inst_35391 = (state_35759[(8)]);
var inst_35678 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_35759__$1 = state_35759;
if(inst_35678){
var statearr_35763_35889 = state_35759__$1;
(statearr_35763_35889[(1)] = (74));

} else {
var statearr_35764_35890 = state_35759__$1;
(statearr_35764_35890[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (74))){
var inst_35392 = (state_35759[(7)]);
var inst_35681 = [cljs.core.str("lst query data:"),cljs.core.str(inst_35392)].join('');
var inst_35682 = cljs.core.println.call(null,inst_35681);
var inst_35684 = (inst_35392 == null);
var inst_35685 = cljs.core.not.call(null,inst_35684);
var state_35759__$1 = (function (){var statearr_35765 = state_35759;
(statearr_35765[(9)] = inst_35682);

return statearr_35765;
})();
if(inst_35685){
var statearr_35766_35891 = state_35759__$1;
(statearr_35766_35891[(1)] = (77));

} else {
var statearr_35767_35892 = state_35759__$1;
(statearr_35767_35892[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (7))){
var inst_35752 = (state_35759[(2)]);
var state_35759__$1 = (function (){var statearr_35768 = state_35759;
(statearr_35768[(10)] = inst_35752);

return statearr_35768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(93),c);
} else {
if((state_val_35760 === (59))){
var inst_35594 = (state_35759[(2)]);
var inst_35595 = cljs.core.get.call(null,inst_35594,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_35596 = cljs.core.get.call(null,inst_35594,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35597 = cljs.core.get.call(null,inst_35594,new cljs.core.Keyword(null,"value","value",305978217));
var inst_35598 = encodeURIComponent(inst_35595);
var inst_35599 = encodeURIComponent(inst_35596);
var inst_35600 = encodeURIComponent(inst_35597);
var inst_35601 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_35598),cljs.core.str("&name="),cljs.core.str(inst_35599),cljs.core.str("&value="),cljs.core.str(inst_35600)].join('');
var inst_35602 = cloudxmark.core.jsonp.call(null,inst_35601);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(60),inst_35602);
} else {
if((state_val_35760 === (86))){
var state_35759__$1 = state_35759;
var statearr_35769_35893 = state_35759__$1;
(statearr_35769_35893[(2)] = "");

(statearr_35769_35893[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (20))){
var inst_35750 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35770_35894 = state_35759__$1;
(statearr_35770_35894[(2)] = inst_35750);

(statearr_35770_35894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (72))){
var inst_35645 = (state_35759[(2)]);
var inst_35646 = cljs.core.get.call(null,inst_35645,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_35647 = cljs.core.get.call(null,inst_35645,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_35648 = cljs.core.get.call(null,inst_35645,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_35649 = cljs.core.get.call(null,inst_35645,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_35650 = cljs.core.get.call(null,inst_35645,new cljs.core.Keyword(null,"value","value",305978217));
var inst_35651 = encodeURIComponent(inst_35646);
var inst_35652 = encodeURIComponent(inst_35647);
var inst_35653 = encodeURIComponent(inst_35648);
var inst_35654 = encodeURIComponent(inst_35649);
var inst_35655 = encodeURIComponent(inst_35650);
var inst_35656 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_35651),cljs.core.str("&lst-name="),cljs.core.str(inst_35652),cljs.core.str("&orig-name="),cljs.core.str(inst_35653),cljs.core.str("&col-name="),cljs.core.str(inst_35654),cljs.core.str("&value="),cljs.core.str(inst_35655)].join('');
var inst_35657 = cloudxmark.core.jsonp.call(null,inst_35656);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(73),inst_35657);
} else {
if((state_val_35760 === (58))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35771_35895 = state_35759__$1;
(statearr_35771_35895[(2)] = inst_35392);

(statearr_35771_35895[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (60))){
var inst_35604 = (state_35759[(2)]);
var inst_35605 = cljs.core.js__GT_clj.call(null,inst_35604);
var inst_35606 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35605,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_35607 = cljs.core.List.EMPTY;
var inst_35608 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35609 = cljs.core._conj.call(null,inst_35607,inst_35608);
var inst_35610 = cljs.core.List.EMPTY;
var inst_35611 = cljs.core._conj.call(null,inst_35610,inst_35606);
var inst_35612 = cljs.core.concat.call(null,inst_35609,inst_35611);
var inst_35613 = cljs.core.seq.call(null,inst_35612);
var inst_35614 = cljs.core.sequence.call(null,inst_35613);
var inst_35615 = cljs.core.List.EMPTY;
var inst_35616 = cljs.core._conj.call(null,inst_35615,inst_35614);
var inst_35617 = cljs.core.concat.call(null,inst_35616);
var inst_35618 = cljs.core.seq.call(null,inst_35617);
var inst_35619 = cljs.core.sequence.call(null,inst_35618);
var inst_35620 = cljs.core.vec.call(null,inst_35619);
var inst_35621 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35620);
var state_35759__$1 = state_35759;
var statearr_35772_35896 = state_35759__$1;
(statearr_35772_35896[(2)] = inst_35621);

(statearr_35772_35896[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (27))){
var inst_35392 = (state_35759[(7)]);
var inst_35468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35773_35897 = state_35759__$1;
(statearr_35773_35897[(2)] = inst_35468);

(statearr_35773_35897[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (1))){
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(2),c);
} else {
if((state_val_35760 === (69))){
var inst_35637 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35774_35898 = state_35759__$1;
(statearr_35774_35898[(2)] = inst_35637);

(statearr_35774_35898[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (24))){
var state_35759__$1 = state_35759;
var statearr_35775_35899 = state_35759__$1;
(statearr_35775_35899[(2)] = true);

(statearr_35775_35899[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (55))){
var state_35759__$1 = state_35759;
var statearr_35776_35900 = state_35759__$1;
(statearr_35776_35900[(2)] = false);

(statearr_35776_35900[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (85))){
var inst_35705 = (state_35759[(11)]);
var inst_35702 = (state_35759[(2)]);
var inst_35703 = cljs.core.get.call(null,inst_35702,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_35704 = cljs.core.get.call(null,inst_35702,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_35705__$1 = cljs.core.get.call(null,inst_35702,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_35706 = cljs.core.empty_QMARK_.call(null,inst_35705__$1);
var state_35759__$1 = (function (){var statearr_35777 = state_35759;
(statearr_35777[(12)] = inst_35703);

(statearr_35777[(13)] = inst_35704);

(statearr_35777[(11)] = inst_35705__$1);

return statearr_35777;
})();
if(inst_35706){
var statearr_35778_35901 = state_35759__$1;
(statearr_35778_35901[(1)] = (86));

} else {
var statearr_35779_35902 = state_35759__$1;
(statearr_35779_35902[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (39))){
var state_35759__$1 = state_35759;
var statearr_35780_35903 = state_35759__$1;
(statearr_35780_35903[(2)] = false);

(statearr_35780_35903[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (88))){
var inst_35712 = (state_35759[(2)]);
var inst_35713 = [cljs.core.str("/getItems?"),cljs.core.str(inst_35712)].join('');
var inst_35714 = cloudxmark.core.jsonp.call(null,inst_35713);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(89),inst_35714);
} else {
if((state_val_35760 === (46))){
var inst_35545 = (state_35759[(2)]);
var inst_35546 = cljs.core.get.call(null,inst_35545,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35547 = cljs.core.get.call(null,inst_35545,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_35548 = encodeURIComponent(inst_35546);
var inst_35549 = encodeURIComponent(inst_35547);
var inst_35550 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_35548),cljs.core.str("&desc="),cljs.core.str(inst_35549)].join('');
var inst_35551 = cloudxmark.core.jsonp.call(null,inst_35550);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(47),inst_35551);
} else {
if((state_val_35760 === (4))){
var inst_35757 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35759__$1,inst_35757);
} else {
if((state_val_35760 === (77))){
var inst_35392 = (state_35759[(7)]);
var inst_35687 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35688 = (inst_35687 & (64));
var inst_35689 = inst_35392.cljs$core$ISeq$;
var inst_35690 = (inst_35688) || (inst_35689);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35690)){
var statearr_35781_35904 = state_35759__$1;
(statearr_35781_35904[(1)] = (80));

} else {
var statearr_35782_35905 = state_35759__$1;
(statearr_35782_35905[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (54))){
var state_35759__$1 = state_35759;
var statearr_35783_35906 = state_35759__$1;
(statearr_35783_35906[(2)] = true);

(statearr_35783_35906[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (92))){
var inst_35738 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35784_35907 = state_35759__$1;
(statearr_35784_35907[(2)] = inst_35738);

(statearr_35784_35907[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (15))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35785_35908 = state_35759__$1;
(statearr_35785_35908[(2)] = inst_35392);

(statearr_35785_35908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (48))){
var inst_35392 = (state_35759[(7)]);
var inst_35576 = (inst_35392 == null);
var inst_35577 = cljs.core.not.call(null,inst_35576);
var state_35759__$1 = state_35759;
if(inst_35577){
var statearr_35786_35909 = state_35759__$1;
(statearr_35786_35909[(1)] = (51));

} else {
var statearr_35787_35910 = state_35759__$1;
(statearr_35787_35910[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (50))){
var inst_35744 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35788_35911 = state_35759__$1;
(statearr_35788_35911[(2)] = inst_35744);

(statearr_35788_35911[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (75))){
var state_35759__$1 = state_35759;
var statearr_35789_35912 = state_35759__$1;
(statearr_35789_35912[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (21))){
var inst_35392 = (state_35759[(7)]);
var inst_35456 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35457 = (inst_35456 & (64));
var inst_35458 = inst_35392.cljs$core$ISeq$;
var inst_35459 = (inst_35457) || (inst_35458);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35459)){
var statearr_35791_35913 = state_35759__$1;
(statearr_35791_35913[(1)] = (24));

} else {
var statearr_35792_35914 = state_35759__$1;
(statearr_35792_35914[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (31))){
var inst_35502 = cloudxmark.core.jsonp.call(null,"/logout");
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(34),inst_35502);
} else {
if((state_val_35760 === (32))){
var inst_35391 = (state_35759[(8)]);
var inst_35523 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_35759__$1 = state_35759;
if(inst_35523){
var statearr_35793_35915 = state_35759__$1;
(statearr_35793_35915[(1)] = (35));

} else {
var statearr_35794_35916 = state_35759__$1;
(statearr_35794_35916[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (40))){
var inst_35540 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35540)){
var statearr_35795_35917 = state_35759__$1;
(statearr_35795_35917[(1)] = (44));

} else {
var statearr_35796_35918 = state_35759__$1;
(statearr_35796_35918[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (91))){
var state_35759__$1 = state_35759;
var statearr_35797_35919 = state_35759__$1;
(statearr_35797_35919[(2)] = null);

(statearr_35797_35919[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (56))){
var inst_35586 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35798_35920 = state_35759__$1;
(statearr_35798_35920[(2)] = inst_35586);

(statearr_35798_35920[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (33))){
var inst_35748 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35799_35921 = state_35759__$1;
(statearr_35799_35921[(2)] = inst_35748);

(statearr_35799_35921[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (13))){
var inst_35410 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35800_35922 = state_35759__$1;
(statearr_35800_35922[(2)] = inst_35410);

(statearr_35800_35922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (22))){
var state_35759__$1 = state_35759;
var statearr_35801_35923 = state_35759__$1;
(statearr_35801_35923[(2)] = false);

(statearr_35801_35923[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (90))){
var state_35759__$1 = state_35759;
var statearr_35802_35924 = state_35759__$1;
(statearr_35802_35924[(2)] = null);

(statearr_35802_35924[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (36))){
var inst_35391 = (state_35759[(8)]);
var inst_35572 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_35759__$1 = state_35759;
if(inst_35572){
var statearr_35803_35925 = state_35759__$1;
(statearr_35803_35925[(1)] = (48));

} else {
var statearr_35804_35926 = state_35759__$1;
(statearr_35804_35926[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (41))){
var state_35759__$1 = state_35759;
var statearr_35805_35927 = state_35759__$1;
(statearr_35805_35927[(2)] = true);

(statearr_35805_35927[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (89))){
var inst_35704 = (state_35759[(13)]);
var inst_35716 = (state_35759[(2)]);
var inst_35717 = cljs.core.js__GT_clj.call(null,inst_35716);
var inst_35718 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35717,inst_35704,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_35719 = cljs.core.List.EMPTY;
var inst_35720 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35721 = cljs.core._conj.call(null,inst_35719,inst_35720);
var inst_35722 = cljs.core.List.EMPTY;
var inst_35723 = cljs.core._conj.call(null,inst_35722,inst_35718);
var inst_35724 = cljs.core.concat.call(null,inst_35721,inst_35723);
var inst_35725 = cljs.core.seq.call(null,inst_35724);
var inst_35726 = cljs.core.sequence.call(null,inst_35725);
var inst_35727 = cljs.core.List.EMPTY;
var inst_35728 = cljs.core._conj.call(null,inst_35727,inst_35726);
var inst_35729 = cljs.core.concat.call(null,inst_35728);
var inst_35730 = cljs.core.seq.call(null,inst_35729);
var inst_35731 = cljs.core.sequence.call(null,inst_35730);
var inst_35732 = cljs.core.vec.call(null,inst_35731);
var inst_35733 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35732);
var state_35759__$1 = state_35759;
var statearr_35806_35928 = state_35759__$1;
(statearr_35806_35928[(2)] = inst_35733);

(statearr_35806_35928[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (43))){
var inst_35537 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35807_35929 = state_35759__$1;
(statearr_35807_35929[(2)] = inst_35537);

(statearr_35807_35929[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (61))){
var inst_35392 = (state_35759[(7)]);
var inst_35627 = (inst_35392 == null);
var inst_35628 = cljs.core.not.call(null,inst_35627);
var state_35759__$1 = state_35759;
if(inst_35628){
var statearr_35808_35930 = state_35759__$1;
(statearr_35808_35930[(1)] = (64));

} else {
var statearr_35809_35931 = state_35759__$1;
(statearr_35809_35931[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (29))){
var inst_35471 = (state_35759[(2)]);
var inst_35472 = cljs.core.get.call(null,inst_35471,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35473 = cljs.core.get.call(null,inst_35471,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35474 = cljs.core.get.call(null,inst_35471,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35475 = cloudxmark.core.enc_password.call(null,inst_35473);
var inst_35476 = encodeURIComponent(inst_35472);
var inst_35477 = encodeURIComponent(inst_35475);
var inst_35478 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_35476),cljs.core.str("&pass="),cljs.core.str(inst_35477)].join('');
var inst_35479 = cloudxmark.core.jsonp.call(null,inst_35478);
var state_35759__$1 = (function (){var statearr_35810 = state_35759;
(statearr_35810[(14)] = inst_35474);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(30),inst_35479);
} else {
if((state_val_35760 === (44))){
var inst_35392 = (state_35759[(7)]);
var inst_35542 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35811_35932 = state_35759__$1;
(statearr_35811_35932[(2)] = inst_35542);

(statearr_35811_35932[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (93))){
var inst_35754 = (state_35759[(2)]);
var inst_35386 = inst_35754;
var state_35759__$1 = (function (){var statearr_35812 = state_35759;
(statearr_35812[(15)] = inst_35386);

return statearr_35812;
})();
var statearr_35813_35933 = state_35759__$1;
(statearr_35813_35933[(2)] = null);

(statearr_35813_35933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (6))){
var inst_35391 = (state_35759[(8)]);
var inst_35449 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_35759__$1 = state_35759;
if(inst_35449){
var statearr_35814_35934 = state_35759__$1;
(statearr_35814_35934[(1)] = (18));

} else {
var statearr_35815_35935 = state_35759__$1;
(statearr_35815_35935[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (28))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35816_35936 = state_35759__$1;
(statearr_35816_35936[(2)] = inst_35392);

(statearr_35816_35936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (64))){
var inst_35392 = (state_35759[(7)]);
var inst_35630 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35631 = (inst_35630 & (64));
var inst_35632 = inst_35392.cljs$core$ISeq$;
var inst_35633 = (inst_35631) || (inst_35632);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35633)){
var statearr_35817_35937 = state_35759__$1;
(statearr_35817_35937[(1)] = (67));

} else {
var statearr_35818_35938 = state_35759__$1;
(statearr_35818_35938[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (51))){
var inst_35392 = (state_35759[(7)]);
var inst_35579 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35580 = (inst_35579 & (64));
var inst_35581 = inst_35392.cljs$core$ISeq$;
var inst_35582 = (inst_35580) || (inst_35581);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35582)){
var statearr_35819_35939 = state_35759__$1;
(statearr_35819_35939[(1)] = (54));

} else {
var statearr_35820_35940 = state_35759__$1;
(statearr_35820_35940[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (25))){
var state_35759__$1 = state_35759;
var statearr_35821_35941 = state_35759__$1;
(statearr_35821_35941[(2)] = false);

(statearr_35821_35941[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (34))){
var inst_35504 = (state_35759[(2)]);
var inst_35505 = cljs.core.js__GT_clj.call(null,inst_35504);
var inst_35506 = cloudxmark.core.convert_json_status.call(null,inst_35505,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_35507 = cljs.core.List.EMPTY;
var inst_35508 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35509 = cljs.core._conj.call(null,inst_35507,inst_35508);
var inst_35510 = cljs.core.List.EMPTY;
var inst_35511 = cljs.core._conj.call(null,inst_35510,inst_35506);
var inst_35512 = cljs.core.concat.call(null,inst_35509,inst_35511);
var inst_35513 = cljs.core.seq.call(null,inst_35512);
var inst_35514 = cljs.core.sequence.call(null,inst_35513);
var inst_35515 = cljs.core.List.EMPTY;
var inst_35516 = cljs.core._conj.call(null,inst_35515,inst_35514);
var inst_35517 = cljs.core.concat.call(null,inst_35516);
var inst_35518 = cljs.core.seq.call(null,inst_35517);
var inst_35519 = cljs.core.sequence.call(null,inst_35518);
var inst_35520 = cljs.core.vec.call(null,inst_35519);
var inst_35521 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35520);
var state_35759__$1 = state_35759;
var statearr_35822_35942 = state_35759__$1;
(statearr_35822_35942[(2)] = inst_35521);

(statearr_35822_35942[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (17))){
var inst_35421 = (state_35759[(16)]);
var inst_35420 = (state_35759[(17)]);
var inst_35427 = (state_35759[(2)]);
var inst_35428 = cljs.core.js__GT_clj.call(null,inst_35427);
var inst_35429 = cloudxmark.core.gen_key_bytes.call(null,inst_35420);
var inst_35430 = cloudxmark.core.create_aes_cbc.call(null,inst_35429);
var inst_35431 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35428,inst_35421,new cljs.core.Keyword(null,"login","login",55217519));
var inst_35432 = cljs.core.assoc.call(null,inst_35431,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_35430);
var inst_35433 = cljs.core.List.EMPTY;
var inst_35434 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35435 = cljs.core._conj.call(null,inst_35433,inst_35434);
var inst_35436 = cljs.core.List.EMPTY;
var inst_35437 = cljs.core._conj.call(null,inst_35436,inst_35432);
var inst_35438 = cljs.core.concat.call(null,inst_35435,inst_35437);
var inst_35439 = cljs.core.seq.call(null,inst_35438);
var inst_35440 = cljs.core.sequence.call(null,inst_35439);
var inst_35441 = cljs.core.List.EMPTY;
var inst_35442 = cljs.core._conj.call(null,inst_35441,inst_35440);
var inst_35443 = cljs.core.concat.call(null,inst_35442);
var inst_35444 = cljs.core.seq.call(null,inst_35443);
var inst_35445 = cljs.core.sequence.call(null,inst_35444);
var inst_35446 = cljs.core.vec.call(null,inst_35445);
var inst_35447 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35446);
var state_35759__$1 = state_35759;
var statearr_35823_35943 = state_35759__$1;
(statearr_35823_35943[(2)] = inst_35447);

(statearr_35823_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (3))){
var inst_35391 = (state_35759[(8)]);
var inst_35386 = (state_35759[(15)]);
var inst_35391__$1 = cljs.core.nth.call(null,inst_35386,(0),null);
var inst_35392 = cljs.core.nth.call(null,inst_35386,(1),null);
var inst_35393 = cljs.core.nth.call(null,inst_35386,(2),null);
var inst_35394 = cljs.core._EQ_.call(null,inst_35391__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_35759__$1 = (function (){var statearr_35824 = state_35759;
(statearr_35824[(8)] = inst_35391__$1);

(statearr_35824[(18)] = inst_35393);

(statearr_35824[(7)] = inst_35392);

return statearr_35824;
})();
if(inst_35394){
var statearr_35825_35944 = state_35759__$1;
(statearr_35825_35944[(1)] = (5));

} else {
var statearr_35826_35945 = state_35759__$1;
(statearr_35826_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (12))){
var state_35759__$1 = state_35759;
var statearr_35827_35946 = state_35759__$1;
(statearr_35827_35946[(2)] = false);

(statearr_35827_35946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (2))){
var inst_35382 = (state_35759[(2)]);
var inst_35383 = cljs.core.nth.call(null,inst_35382,(0),null);
var inst_35384 = cljs.core.nth.call(null,inst_35382,(1),null);
var inst_35385 = cljs.core.nth.call(null,inst_35382,(2),null);
var inst_35386 = inst_35382;
var state_35759__$1 = (function (){var statearr_35828 = state_35759;
(statearr_35828[(19)] = inst_35385);

(statearr_35828[(20)] = inst_35383);

(statearr_35828[(21)] = inst_35384);

(statearr_35828[(15)] = inst_35386);

return statearr_35828;
})();
var statearr_35829_35947 = state_35759__$1;
(statearr_35829_35947[(2)] = null);

(statearr_35829_35947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (66))){
var inst_35640 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35640)){
var statearr_35830_35948 = state_35759__$1;
(statearr_35830_35948[(1)] = (70));

} else {
var statearr_35831_35949 = state_35759__$1;
(statearr_35831_35949[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (23))){
var inst_35466 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35466)){
var statearr_35832_35950 = state_35759__$1;
(statearr_35832_35950[(1)] = (27));

} else {
var statearr_35833_35951 = state_35759__$1;
(statearr_35833_35951[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (47))){
var inst_35553 = (state_35759[(2)]);
var inst_35554 = cljs.core.js__GT_clj.call(null,inst_35553);
var inst_35555 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35554,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_35556 = cljs.core.List.EMPTY;
var inst_35557 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35558 = cljs.core._conj.call(null,inst_35556,inst_35557);
var inst_35559 = cljs.core.List.EMPTY;
var inst_35560 = cljs.core._conj.call(null,inst_35559,inst_35555);
var inst_35561 = cljs.core.concat.call(null,inst_35558,inst_35560);
var inst_35562 = cljs.core.seq.call(null,inst_35561);
var inst_35563 = cljs.core.sequence.call(null,inst_35562);
var inst_35564 = cljs.core.List.EMPTY;
var inst_35565 = cljs.core._conj.call(null,inst_35564,inst_35563);
var inst_35566 = cljs.core.concat.call(null,inst_35565);
var inst_35567 = cljs.core.seq.call(null,inst_35566);
var inst_35568 = cljs.core.sequence.call(null,inst_35567);
var inst_35569 = cljs.core.vec.call(null,inst_35568);
var inst_35570 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35569);
var state_35759__$1 = state_35759;
var statearr_35834_35952 = state_35759__$1;
(statearr_35834_35952[(2)] = inst_35570);

(statearr_35834_35952[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (35))){
var inst_35392 = (state_35759[(7)]);
var inst_35527 = (inst_35392 == null);
var inst_35528 = cljs.core.not.call(null,inst_35527);
var state_35759__$1 = state_35759;
if(inst_35528){
var statearr_35835_35953 = state_35759__$1;
(statearr_35835_35953[(1)] = (38));

} else {
var statearr_35836_35954 = state_35759__$1;
(statearr_35836_35954[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (82))){
var inst_35694 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35837_35955 = state_35759__$1;
(statearr_35837_35955[(2)] = inst_35694);

(statearr_35837_35955[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (76))){
var inst_35740 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35838_35956 = state_35759__$1;
(statearr_35838_35956[(2)] = inst_35740);

(statearr_35838_35956[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (19))){
var inst_35391 = (state_35759[(8)]);
var inst_35500 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_35759__$1 = state_35759;
if(inst_35500){
var statearr_35839_35957 = state_35759__$1;
(statearr_35839_35957[(1)] = (31));

} else {
var statearr_35840_35958 = state_35759__$1;
(statearr_35840_35958[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (57))){
var inst_35392 = (state_35759[(7)]);
var inst_35591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35841_35959 = state_35759__$1;
(statearr_35841_35959[(2)] = inst_35591);

(statearr_35841_35959[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (68))){
var state_35759__$1 = state_35759;
var statearr_35842_35960 = state_35759__$1;
(statearr_35842_35960[(2)] = false);

(statearr_35842_35960[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (11))){
var state_35759__$1 = state_35759;
var statearr_35843_35961 = state_35759__$1;
(statearr_35843_35961[(2)] = true);

(statearr_35843_35961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (9))){
var state_35759__$1 = state_35759;
var statearr_35844_35962 = state_35759__$1;
(statearr_35844_35962[(2)] = false);

(statearr_35844_35962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (5))){
var inst_35392 = (state_35759[(7)]);
var inst_35397 = [cljs.core.str("lst login data:"),cljs.core.str(inst_35392)].join('');
var inst_35398 = cljs.core.println.call(null,inst_35397);
var inst_35400 = (inst_35392 == null);
var inst_35401 = cljs.core.not.call(null,inst_35400);
var state_35759__$1 = (function (){var statearr_35845 = state_35759;
(statearr_35845[(22)] = inst_35398);

return statearr_35845;
})();
if(inst_35401){
var statearr_35846_35963 = state_35759__$1;
(statearr_35846_35963[(1)] = (8));

} else {
var statearr_35847_35964 = state_35759__$1;
(statearr_35847_35964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (83))){
var inst_35392 = (state_35759[(7)]);
var inst_35699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35848_35965 = state_35759__$1;
(statearr_35848_35965[(2)] = inst_35699);

(statearr_35848_35965[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (14))){
var inst_35392 = (state_35759[(7)]);
var inst_35415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35392);
var state_35759__$1 = state_35759;
var statearr_35849_35966 = state_35759__$1;
(statearr_35849_35966[(2)] = inst_35415);

(statearr_35849_35966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (45))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35850_35967 = state_35759__$1;
(statearr_35850_35967[(2)] = inst_35392);

(statearr_35850_35967[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (53))){
var inst_35589 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35589)){
var statearr_35851_35968 = state_35759__$1;
(statearr_35851_35968[(1)] = (57));

} else {
var statearr_35852_35969 = state_35759__$1;
(statearr_35852_35969[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (78))){
var state_35759__$1 = state_35759;
var statearr_35853_35970 = state_35759__$1;
(statearr_35853_35970[(2)] = false);

(statearr_35853_35970[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (26))){
var inst_35463 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35854_35971 = state_35759__$1;
(statearr_35854_35971[(2)] = inst_35463);

(statearr_35854_35971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (16))){
var inst_35420 = (state_35759[(17)]);
var inst_35418 = (state_35759[(2)]);
var inst_35419 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35420__$1 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35421 = cljs.core.get.call(null,inst_35418,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35422 = encodeURIComponent(inst_35419);
var inst_35423 = encodeURIComponent(inst_35420__$1);
var inst_35424 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_35422),cljs.core.str("&pass="),cljs.core.str(inst_35423)].join('');
var inst_35425 = cloudxmark.core.jsonp.call(null,inst_35424);
var state_35759__$1 = (function (){var statearr_35855 = state_35759;
(statearr_35855[(16)] = inst_35421);

(statearr_35855[(17)] = inst_35420__$1);

return statearr_35855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(17),inst_35425);
} else {
if((state_val_35760 === (81))){
var state_35759__$1 = state_35759;
var statearr_35856_35972 = state_35759__$1;
(statearr_35856_35972[(2)] = false);

(statearr_35856_35972[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (79))){
var inst_35697 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35697)){
var statearr_35857_35973 = state_35759__$1;
(statearr_35857_35973[(1)] = (83));

} else {
var statearr_35858_35974 = state_35759__$1;
(statearr_35858_35974[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (38))){
var inst_35392 = (state_35759[(7)]);
var inst_35530 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35531 = (inst_35530 & (64));
var inst_35532 = inst_35392.cljs$core$ISeq$;
var inst_35533 = (inst_35531) || (inst_35532);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35533)){
var statearr_35859_35975 = state_35759__$1;
(statearr_35859_35975[(1)] = (41));

} else {
var statearr_35860_35976 = state_35759__$1;
(statearr_35860_35976[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (87))){
var inst_35705 = (state_35759[(11)]);
var inst_35709 = encodeURIComponent(inst_35705);
var inst_35710 = [cljs.core.str("query="),cljs.core.str(inst_35709)].join('');
var state_35759__$1 = state_35759;
var statearr_35861_35977 = state_35759__$1;
(statearr_35861_35977[(2)] = inst_35710);

(statearr_35861_35977[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (30))){
var inst_35481 = (state_35759[(2)]);
var inst_35482 = cljs.core.js__GT_clj.call(null,inst_35481);
var inst_35483 = cloudxmark.core.convert_json_status.call(null,inst_35482,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_35484 = cljs.core.List.EMPTY;
var inst_35485 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35486 = cljs.core._conj.call(null,inst_35484,inst_35485);
var inst_35487 = cljs.core.List.EMPTY;
var inst_35488 = cljs.core._conj.call(null,inst_35487,inst_35483);
var inst_35489 = cljs.core.concat.call(null,inst_35486,inst_35488);
var inst_35490 = cljs.core.seq.call(null,inst_35489);
var inst_35491 = cljs.core.sequence.call(null,inst_35490);
var inst_35492 = cljs.core.List.EMPTY;
var inst_35493 = cljs.core._conj.call(null,inst_35492,inst_35491);
var inst_35494 = cljs.core.concat.call(null,inst_35493);
var inst_35495 = cljs.core.seq.call(null,inst_35494);
var inst_35496 = cljs.core.sequence.call(null,inst_35495);
var inst_35497 = cljs.core.vec.call(null,inst_35496);
var inst_35498 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35497);
var state_35759__$1 = state_35759;
var statearr_35862_35978 = state_35759__$1;
(statearr_35862_35978[(2)] = inst_35498);

(statearr_35862_35978[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (73))){
var inst_35659 = (state_35759[(2)]);
var inst_35660 = cljs.core.js__GT_clj.call(null,inst_35659);
var inst_35661 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35660,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_35662 = cljs.core.List.EMPTY;
var inst_35663 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35664 = cljs.core._conj.call(null,inst_35662,inst_35663);
var inst_35665 = cljs.core.List.EMPTY;
var inst_35666 = cljs.core._conj.call(null,inst_35665,inst_35661);
var inst_35667 = cljs.core.concat.call(null,inst_35664,inst_35666);
var inst_35668 = cljs.core.seq.call(null,inst_35667);
var inst_35669 = cljs.core.sequence.call(null,inst_35668);
var inst_35670 = cljs.core.List.EMPTY;
var inst_35671 = cljs.core._conj.call(null,inst_35670,inst_35669);
var inst_35672 = cljs.core.concat.call(null,inst_35671);
var inst_35673 = cljs.core.seq.call(null,inst_35672);
var inst_35674 = cljs.core.sequence.call(null,inst_35673);
var inst_35675 = cljs.core.vec.call(null,inst_35674);
var inst_35676 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35675);
var state_35759__$1 = state_35759;
var statearr_35863_35979 = state_35759__$1;
(statearr_35863_35979[(2)] = inst_35676);

(statearr_35863_35979[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (10))){
var inst_35413 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35413)){
var statearr_35864_35980 = state_35759__$1;
(statearr_35864_35980[(1)] = (14));

} else {
var statearr_35865_35981 = state_35759__$1;
(statearr_35865_35981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (18))){
var inst_35392 = (state_35759[(7)]);
var inst_35453 = (inst_35392 == null);
var inst_35454 = cljs.core.not.call(null,inst_35453);
var state_35759__$1 = state_35759;
if(inst_35454){
var statearr_35866_35982 = state_35759__$1;
(statearr_35866_35982[(1)] = (21));

} else {
var statearr_35867_35983 = state_35759__$1;
(statearr_35867_35983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (52))){
var state_35759__$1 = state_35759;
var statearr_35868_35984 = state_35759__$1;
(statearr_35868_35984[(2)] = false);

(statearr_35868_35984[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (67))){
var state_35759__$1 = state_35759;
var statearr_35869_35985 = state_35759__$1;
(statearr_35869_35985[(2)] = true);

(statearr_35869_35985[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (71))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35870_35986 = state_35759__$1;
(statearr_35870_35986[(2)] = inst_35392);

(statearr_35870_35986[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (42))){
var state_35759__$1 = state_35759;
var statearr_35871_35987 = state_35759__$1;
(statearr_35871_35987[(2)] = false);

(statearr_35871_35987[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (80))){
var state_35759__$1 = state_35759;
var statearr_35872_35988 = state_35759__$1;
(statearr_35872_35988[(2)] = true);

(statearr_35872_35988[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (37))){
var inst_35746 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35873_35989 = state_35759__$1;
(statearr_35873_35989[(2)] = inst_35746);

(statearr_35873_35989[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (63))){
var inst_35742 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35874_35990 = state_35759__$1;
(statearr_35874_35990[(2)] = inst_35742);

(statearr_35874_35990[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (8))){
var inst_35392 = (state_35759[(7)]);
var inst_35403 = inst_35392.cljs$lang$protocol_mask$partition0$;
var inst_35404 = (inst_35403 & (64));
var inst_35405 = inst_35392.cljs$core$ISeq$;
var inst_35406 = (inst_35404) || (inst_35405);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35406)){
var statearr_35875_35991 = state_35759__$1;
(statearr_35875_35991[(1)] = (11));

} else {
var statearr_35876_35992 = state_35759__$1;
(statearr_35876_35992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (49))){
var inst_35391 = (state_35759[(8)]);
var inst_35623 = cljs.core._EQ_.call(null,inst_35391,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_35759__$1 = state_35759;
if(inst_35623){
var statearr_35877_35993 = state_35759__$1;
(statearr_35877_35993[(1)] = (61));

} else {
var statearr_35878_35994 = state_35759__$1;
(statearr_35878_35994[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (84))){
var inst_35392 = (state_35759[(7)]);
var state_35759__$1 = state_35759;
var statearr_35879_35995 = state_35759__$1;
(statearr_35879_35995[(2)] = inst_35392);

(statearr_35879_35995[(1)] = (85));


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
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__29635__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__29635__auto____0 = (function (){
var statearr_35883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35883[(0)] = cloudxmark$core$search_loop_$_state_machine__29635__auto__);

(statearr_35883[(1)] = (1));

return statearr_35883;
});
var cloudxmark$core$search_loop_$_state_machine__29635__auto____1 = (function (state_35759){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_35759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e35884){if((e35884 instanceof Object)){
var ex__29638__auto__ = e35884;
var statearr_35885_35996 = state_35759;
(statearr_35885_35996[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35997 = state_35759;
state_35759 = G__35997;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__29635__auto__ = function(state_35759){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__29635__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__29635__auto____1.call(this,state_35759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__29635__auto____0;
cloudxmark$core$search_loop_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__29635__auto____1;
return cloudxmark$core$search_loop_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_35886 = f__29749__auto__.call(null);
(statearr_35886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_35886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471181955026