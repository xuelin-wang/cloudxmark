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
var idx_61545 = (0);
while(true){
var len1_61546 = b1.length;
if((cljs.core._EQ_.call(null,idx_61545,len1_61546)) || (cljs.core._EQ_.call(null,idx_61545,max_len))){
} else {
(b1[idx_61545] = ((b1[idx_61545]) ^ (b2[idx_61545])));

var G__61547 = (idx_61545 + (1));
idx_61545 = G__61547;
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
var args61550 = [];
var len__22773__auto___61553 = arguments.length;
var i__22774__auto___61554 = (0);
while(true){
if((i__22774__auto___61554 < len__22773__auto___61553)){
args61550.push((arguments[i__22774__auto___61554]));

var G__61555 = (i__22774__auto___61554 + (1));
i__22774__auto___61554 = G__61555;
continue;
} else {
}
break;
}

var G__61552 = args61550.length;
switch (G__61552) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61550.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__61548_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__61548_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__61549_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__61549_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__61557,_,p__61558){
var map__61559 = p__61557;
var map__61559__$1 = ((((!((map__61559 == null)))?((((map__61559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61559):map__61559);
var env = map__61559__$1;
var state = cljs.core.get.call(null,map__61559__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__61559__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__61560 = p__61558;
var map__61560__$1 = ((((!((map__61560 == null)))?((((map__61560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61560):map__61560);
var query_ver = cljs.core.get.call(null,map__61560__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__61560__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__61563 = lst;
var map__61563__$1 = ((((!((map__61563 == null)))?((((map__61563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61563):map__61563);
var lsts = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__61563__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_61565 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_61565);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__61566,_,p__61567){
var map__61568 = p__61566;
var map__61568__$1 = ((((!((map__61568 == null)))?((((map__61568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61568):map__61568);
var env = map__61568__$1;
var state = cljs.core.get.call(null,map__61568__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61569 = p__61567;
var map__61569__$1 = ((((!((map__61569 == null)))?((((map__61569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61569):map__61569);
var status = map__61569__$1;
var id = cljs.core.get.call(null,map__61569__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61568,map__61568__$1,env,state,map__61569,map__61569__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__61568,map__61568__$1,env,state,map__61569,map__61569__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__61572,_,p__61573){
var map__61574 = p__61572;
var map__61574__$1 = ((((!((map__61574 == null)))?((((map__61574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61574):map__61574);
var env = map__61574__$1;
var state = cljs.core.get.call(null,map__61574__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61575 = p__61573;
var map__61575__$1 = ((((!((map__61575 == null)))?((((map__61575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61575):map__61575);
var path = cljs.core.get.call(null,map__61575__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__61575__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__61575__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61574,map__61574__$1,env,state,map__61575,map__61575__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__61574,map__61574__$1,env,state,map__61575,map__61575__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__61578,_,p__61579){
var map__61580 = p__61578;
var map__61580__$1 = ((((!((map__61580 == null)))?((((map__61580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61580):map__61580);
var env = map__61580__$1;
var state = cljs.core.get.call(null,map__61580__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61581 = p__61579;
var map__61581__$1 = ((((!((map__61581 == null)))?((((map__61581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61581):map__61581);
var data_map = map__61581__$1;
var lst_name = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61580,map__61580__$1,env,state,map__61581,map__61581__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__61580,map__61580__$1,env,state,map__61581,map__61581__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__61584,_,p__61585){
var map__61586 = p__61584;
var map__61586__$1 = ((((!((map__61586 == null)))?((((map__61586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61586):map__61586);
var env = map__61586__$1;
var state = cljs.core.get.call(null,map__61586__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61587 = p__61585;
var map__61587__$1 = ((((!((map__61587 == null)))?((((map__61587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61587):map__61587);
var field_id = cljs.core.get.call(null,map__61587__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__61587__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61586,map__61586__$1,env,state,map__61587,map__61587__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__61586,map__61586__$1,env,state,map__61587,map__61587__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__61590,_,p__61591){
var map__61592 = p__61590;
var map__61592__$1 = ((((!((map__61592 == null)))?((((map__61592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61592):map__61592);
var env = map__61592__$1;
var state = cljs.core.get.call(null,map__61592__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61593 = p__61591;
var map__61593__$1 = ((((!((map__61593 == null)))?((((map__61593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61593):map__61593);
var data_map = map__61593__$1;
var user_id = cljs.core.get.call(null,map__61593__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__61593__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__61593__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61592,map__61592__$1,env,state,map__61593,map__61593__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__61592,map__61592__$1,env,state,map__61593,map__61593__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__61596,_,p__61597){
var map__61598 = p__61596;
var map__61598__$1 = ((((!((map__61598 == null)))?((((map__61598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61598):map__61598);
var env = map__61598__$1;
var state = cljs.core.get.call(null,map__61598__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61599 = p__61597;
var map__61599__$1 = ((((!((map__61599 == null)))?((((map__61599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61599):map__61599);
var data_map = map__61599__$1;
var user_id = cljs.core.get.call(null,map__61599__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__61599__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61598,map__61598__$1,env,state,map__61599,map__61599__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__61598,map__61598__$1,env,state,map__61599,map__61599__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__61602,_,p__61603){
var map__61604 = p__61602;
var map__61604__$1 = ((((!((map__61604 == null)))?((((map__61604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61604):map__61604);
var env = map__61604__$1;
var state = cljs.core.get.call(null,map__61604__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61605 = p__61603;
var map__61605__$1 = ((((!((map__61605 == null)))?((((map__61605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61605):map__61605);
var data_map = map__61605__$1;
var type = cljs.core.get.call(null,map__61605__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__61605__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61604,map__61604__$1,env,state,map__61605,map__61605__$1,data_map,type,fields){
return (function (){
return null;
});})(map__61604,map__61604__$1,env,state,map__61605,map__61605__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__61608,_,p__61609){
var map__61610 = p__61608;
var map__61610__$1 = ((((!((map__61610 == null)))?((((map__61610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61610):map__61610);
var env = map__61610__$1;
var state = cljs.core.get.call(null,map__61610__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61611 = p__61609;
var map__61611__$1 = ((((!((map__61611 == null)))?((((map__61611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61611):map__61611);
var data_map = map__61611__$1;
var name = cljs.core.get.call(null,map__61611__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__61611__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61610,map__61610__$1,env,state,map__61611,map__61611__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__61610,map__61610__$1,env,state,map__61611,map__61611__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__61614,_,p__61615){
var map__61616 = p__61614;
var map__61616__$1 = ((((!((map__61616 == null)))?((((map__61616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61616):map__61616);
var env = map__61616__$1;
var state = cljs.core.get.call(null,map__61616__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61617 = p__61615;
var map__61617__$1 = ((((!((map__61617 == null)))?((((map__61617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61617):map__61617);
var data_map = map__61617__$1;
var name = cljs.core.get.call(null,map__61617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__61617__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61616,map__61616__$1,env,state,map__61617,map__61617__$1,data_map,name,value){
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
});})(map__61616,map__61616__$1,env,state,map__61617,map__61617__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__61620,_,___$1){
var map__61621 = p__61620;
var map__61621__$1 = ((((!((map__61621 == null)))?((((map__61621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61621):map__61621);
var env = map__61621__$1;
var state = cljs.core.get.call(null,map__61621__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61621,map__61621__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__61621,map__61621__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__61623,_,p__61624){
var map__61625 = p__61623;
var map__61625__$1 = ((((!((map__61625 == null)))?((((map__61625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61625):map__61625);
var env = map__61625__$1;
var state = cljs.core.get.call(null,map__61625__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__61626 = p__61624;
var map__61626__$1 = ((((!((map__61626 == null)))?((((map__61626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61626):map__61626);
var data_map = map__61626__$1;
var status = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__61626__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__61625,map__61625__$1,env,state,map__61626,map__61626__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__61625,map__61625__$1,env,state,map__61626,map__61626__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args61629 = [];
var len__22773__auto___61632 = arguments.length;
var i__22774__auto___61633 = (0);
while(true){
if((i__22774__auto___61633 < len__22773__auto___61632)){
args61629.push((arguments[i__22774__auto___61633]));

var G__61634 = (i__22774__auto___61633 + (1));
i__22774__auto___61633 = G__61634;
continue;
} else {
}
break;
}

var G__61631 = args61629.length;
switch (G__61631) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61629.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__61636){
var map__61642 = p__61636;
var map__61642__$1 = ((((!((map__61642 == null)))?((((map__61642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61642):map__61642);
var info = cljs.core.get.call(null,map__61642__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__61642__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__61642__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__61644 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__61644,(0),null);
var msg = cljs.core.nth.call(null,vec__61644,(1),null);
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
var map__61649 = lst;
var map__61649__$1 = ((((!((map__61649 == null)))?((((map__61649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61649):map__61649);
var lsts = cljs.core.get.call(null,map__61649__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__61649__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__61649,map__61649__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__61649,map__61649__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__61653 = lst;
var map__61653__$1 = ((((!((map__61653 == null)))?((((map__61653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61653):map__61653);
var status = cljs.core.get.call(null,map__61653__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__61659 = (function (){var G__61662 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__61662) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__61659,(0),null);
var query_key = cljs.core.nth.call(null,vec__61659,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__61659,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__61659,elem_key,query_key))
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

var x61668_61680 = cloudxmark.core.Lsts.prototype;
x61668_61680.componentWillUpdate = ((function (x61668_61680){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
if(((!((this__28511__auto__ == null)))?(((false) || (this__28511__auto__.om$next$Ident$))?true:false):false)){
var ident__28515__auto___61681 = om.next.ident.call(null,this__28511__auto__,om.next.props.call(null,this__28511__auto__));
var next_ident__28516__auto___61682 = om.next.ident.call(null,this__28511__auto__,om.next._next_props.call(null,next_props__28512__auto__,this__28511__auto__));
if(cljs.core.not_EQ_.call(null,ident__28515__auto___61681,next_ident__28516__auto___61682)){
var idxr__28517__auto___61683 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28517__auto___61683 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28517__auto___61683),((function (idxr__28517__auto___61683,ident__28515__auto___61681,next_ident__28516__auto___61682,this__28511__auto__,x61668_61680){
return (function (indexes__28518__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28518__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28515__auto___61681], null),cljs.core.disj,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28516__auto___61682], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28511__auto__);
});})(idxr__28517__auto___61683,ident__28515__auto___61681,next_ident__28516__auto___61682,this__28511__auto__,x61668_61680))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28511__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28511__auto__);
});})(x61668_61680))
;

x61668_61680.shouldComponentUpdate = ((function (x61668_61680){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
var next_children__28514__auto__ = next_props__28512__auto__.children;
var next_props__28512__auto____$1 = goog.object.get(next_props__28512__auto__,"omcljs$value");
var next_props__28512__auto____$2 = (function (){var G__61670 = next_props__28512__auto____$1;
if((next_props__28512__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__61670);
} else {
return G__61670;
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
});})(x61668_61680))
;

x61668_61680.componentWillUnmount = ((function (x61668_61680){
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
});})(x61668_61680))
;

x61668_61680.componentDidUpdate = ((function (x61668_61680){
return (function (prev_props__28519__auto__,prev_state__28520__auto__){
var this__28511__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28511__auto__);
});})(x61668_61680))
;

x61668_61680.isMounted = ((function (x61668_61680){
return (function (){
var this__28511__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28511__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x61668_61680))
;

x61668_61680.componentWillMount = ((function (x61668_61680){
return (function (){
var this__28511__auto__ = this;
var indexer__28521__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28521__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28521__auto__,this__28511__auto__);
}
});})(x61668_61680))
;

x61668_61680.render = ((function (x61668_61680){
return (function (){
var this__28510__auto__ = this;
var this$ = this__28510__auto__;
var _STAR_reconciler_STAR_61671 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_61672 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_61673 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_61674 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_61675 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28510__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28510__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28510__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28510__auto__);

om.next._STAR_parent_STAR_ = this__28510__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__61676 = lst;
var map__61676__$1 = ((((!((map__61676 == null)))?((((map__61676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61676):map__61676);
var lsts = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__61676__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_61675;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_61674;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_61673;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_61672;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_61671;
}});})(x61668_61680))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x61678_61684 = cloudxmark.core.Lsts;
/** @nocollapse */
x61678_61684.om$next$IQueryParams$ = true;

/** @nocollapse */
x61678_61684.om$next$IQueryParams$params$arity$1 = ((function (x61678_61684){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x61678_61684))
;

/** @nocollapse */
x61678_61684.om$next$IQuery$ = true;

/** @nocollapse */
x61678_61684.om$next$IQuery$query$arity$1 = ((function (x61678_61684){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x61678_61684))
;


var x61679_61685 = cloudxmark.core.Lsts.prototype;

x61679_61685.om$next$IQueryParams$ = true;


x61679_61685.om$next$IQueryParams$params$arity$1 = ((function (x61679_61685){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x61679_61685))
;


x61679_61685.om$next$IQuery$ = true;


x61679_61685.om$next$IQuery$query$arity$1 = ((function (x61679_61685){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x61679_61685))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28636__auto__,writer__28637__auto__,opt__28638__auto__){
return cljs.core._write.call(null,writer__28637__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__61694,cb){
var map__61695 = p__61694;
var map__61695__$1 = ((((!((map__61695 == null)))?((((map__61695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61695):map__61695);
var lst_search = cljs.core.get.call(null,map__61695__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__61697 = om.next.query__GT_ast.call(null,lst_search);
var map__61697__$1 = ((((!((map__61697 == null)))?((((map__61697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61697):map__61697);
var vec__61698 = cljs.core.get.call(null,map__61697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__61698,(0),null);
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
var map__61706 = result;
var map__61706__$1 = ((((!((map__61706 == null)))?((((map__61706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61706):map__61706);
var lsts = cljs.core.get.call(null,map__61706__$1,"lsts");
var user_id = cljs.core.get.call(null,map__61706__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__61706__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__61707 = json_status;
var map__61707__$1 = ((((!((map__61707 == null)))?((((map__61707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61707):map__61707);
var info = cljs.core.get.call(null,map__61707__$1,"info");
var warn = cljs.core.get.call(null,map__61707__$1,"warn");
var error = cljs.core.get.call(null,map__61707__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__61712 = json_status;
var map__61712__$1 = ((((!((map__61712 == null)))?((((map__61712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61712):map__61712);
var info = cljs.core.get.call(null,map__61712__$1,"info");
var warn = cljs.core.get.call(null,map__61712__$1,"warn");
var error = cljs.core.get.call(null,map__61712__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_62612){
var state_val_62613 = (state_62612[(1)]);
if((state_val_62613 === (65))){
var state_62612__$1 = state_62612;
var statearr_62614_62740 = state_62612__$1;
(statearr_62614_62740[(2)] = false);

(statearr_62614_62740[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (70))){
var inst_62245 = (state_62612[(7)]);
var inst_62495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62615_62741 = state_62612__$1;
(statearr_62615_62741[(2)] = inst_62495);

(statearr_62615_62741[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (62))){
var inst_62244 = (state_62612[(8)]);
var inst_62531 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_62612__$1 = state_62612;
if(inst_62531){
var statearr_62616_62742 = state_62612__$1;
(statearr_62616_62742[(1)] = (74));

} else {
var statearr_62617_62743 = state_62612__$1;
(statearr_62617_62743[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (74))){
var inst_62245 = (state_62612[(7)]);
var inst_62534 = [cljs.core.str("lst query data:"),cljs.core.str(inst_62245)].join('');
var inst_62535 = cljs.core.println.call(null,inst_62534);
var inst_62537 = (inst_62245 == null);
var inst_62538 = cljs.core.not.call(null,inst_62537);
var state_62612__$1 = (function (){var statearr_62618 = state_62612;
(statearr_62618[(9)] = inst_62535);

return statearr_62618;
})();
if(inst_62538){
var statearr_62619_62744 = state_62612__$1;
(statearr_62619_62744[(1)] = (77));

} else {
var statearr_62620_62745 = state_62612__$1;
(statearr_62620_62745[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (7))){
var inst_62605 = (state_62612[(2)]);
var state_62612__$1 = (function (){var statearr_62621 = state_62612;
(statearr_62621[(10)] = inst_62605);

return statearr_62621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(93),c);
} else {
if((state_val_62613 === (59))){
var inst_62447 = (state_62612[(2)]);
var inst_62448 = cljs.core.get.call(null,inst_62447,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_62449 = cljs.core.get.call(null,inst_62447,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_62450 = cljs.core.get.call(null,inst_62447,new cljs.core.Keyword(null,"value","value",305978217));
var inst_62451 = encodeURIComponent(inst_62448);
var inst_62452 = encodeURIComponent(inst_62449);
var inst_62453 = encodeURIComponent(inst_62450);
var inst_62454 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_62451),cljs.core.str("&name="),cljs.core.str(inst_62452),cljs.core.str("&value="),cljs.core.str(inst_62453)].join('');
var inst_62455 = cloudxmark.core.jsonp.call(null,inst_62454);
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(60),inst_62455);
} else {
if((state_val_62613 === (86))){
var state_62612__$1 = state_62612;
var statearr_62622_62746 = state_62612__$1;
(statearr_62622_62746[(2)] = "");

(statearr_62622_62746[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (20))){
var inst_62603 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62623_62747 = state_62612__$1;
(statearr_62623_62747[(2)] = inst_62603);

(statearr_62623_62747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (72))){
var inst_62498 = (state_62612[(2)]);
var inst_62499 = cljs.core.get.call(null,inst_62498,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_62500 = cljs.core.get.call(null,inst_62498,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_62501 = cljs.core.get.call(null,inst_62498,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_62502 = cljs.core.get.call(null,inst_62498,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_62503 = cljs.core.get.call(null,inst_62498,new cljs.core.Keyword(null,"value","value",305978217));
var inst_62504 = encodeURIComponent(inst_62499);
var inst_62505 = encodeURIComponent(inst_62500);
var inst_62506 = encodeURIComponent(inst_62501);
var inst_62507 = encodeURIComponent(inst_62502);
var inst_62508 = encodeURIComponent(inst_62503);
var inst_62509 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_62504),cljs.core.str("&lst-name="),cljs.core.str(inst_62505),cljs.core.str("&orig-name="),cljs.core.str(inst_62506),cljs.core.str("&col-name="),cljs.core.str(inst_62507),cljs.core.str("&value="),cljs.core.str(inst_62508)].join('');
var inst_62510 = cloudxmark.core.jsonp.call(null,inst_62509);
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(73),inst_62510);
} else {
if((state_val_62613 === (58))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62624_62748 = state_62612__$1;
(statearr_62624_62748[(2)] = inst_62245);

(statearr_62624_62748[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (60))){
var inst_62457 = (state_62612[(2)]);
var inst_62458 = cljs.core.js__GT_clj.call(null,inst_62457);
var inst_62459 = cloudxmark.core.convert_json_lsts_result.call(null,inst_62458,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_62460 = cljs.core.List.EMPTY;
var inst_62461 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_62462 = cljs.core._conj.call(null,inst_62460,inst_62461);
var inst_62463 = cljs.core.List.EMPTY;
var inst_62464 = cljs.core._conj.call(null,inst_62463,inst_62459);
var inst_62465 = cljs.core.concat.call(null,inst_62462,inst_62464);
var inst_62466 = cljs.core.seq.call(null,inst_62465);
var inst_62467 = cljs.core.sequence.call(null,inst_62466);
var inst_62468 = cljs.core.List.EMPTY;
var inst_62469 = cljs.core._conj.call(null,inst_62468,inst_62467);
var inst_62470 = cljs.core.concat.call(null,inst_62469);
var inst_62471 = cljs.core.seq.call(null,inst_62470);
var inst_62472 = cljs.core.sequence.call(null,inst_62471);
var inst_62473 = cljs.core.vec.call(null,inst_62472);
var inst_62474 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62473);
var state_62612__$1 = state_62612;
var statearr_62625_62749 = state_62612__$1;
(statearr_62625_62749[(2)] = inst_62474);

(statearr_62625_62749[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (27))){
var inst_62245 = (state_62612[(7)]);
var inst_62321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62626_62750 = state_62612__$1;
(statearr_62626_62750[(2)] = inst_62321);

(statearr_62626_62750[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (1))){
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(2),c);
} else {
if((state_val_62613 === (69))){
var inst_62490 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62627_62751 = state_62612__$1;
(statearr_62627_62751[(2)] = inst_62490);

(statearr_62627_62751[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (24))){
var state_62612__$1 = state_62612;
var statearr_62628_62752 = state_62612__$1;
(statearr_62628_62752[(2)] = true);

(statearr_62628_62752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (55))){
var state_62612__$1 = state_62612;
var statearr_62629_62753 = state_62612__$1;
(statearr_62629_62753[(2)] = false);

(statearr_62629_62753[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (85))){
var inst_62558 = (state_62612[(11)]);
var inst_62555 = (state_62612[(2)]);
var inst_62556 = cljs.core.get.call(null,inst_62555,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_62557 = cljs.core.get.call(null,inst_62555,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_62558__$1 = cljs.core.get.call(null,inst_62555,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_62559 = cljs.core.empty_QMARK_.call(null,inst_62558__$1);
var state_62612__$1 = (function (){var statearr_62630 = state_62612;
(statearr_62630[(11)] = inst_62558__$1);

(statearr_62630[(12)] = inst_62557);

(statearr_62630[(13)] = inst_62556);

return statearr_62630;
})();
if(inst_62559){
var statearr_62631_62754 = state_62612__$1;
(statearr_62631_62754[(1)] = (86));

} else {
var statearr_62632_62755 = state_62612__$1;
(statearr_62632_62755[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (39))){
var state_62612__$1 = state_62612;
var statearr_62633_62756 = state_62612__$1;
(statearr_62633_62756[(2)] = false);

(statearr_62633_62756[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (88))){
var inst_62565 = (state_62612[(2)]);
var inst_62566 = [cljs.core.str("/getItems?"),cljs.core.str(inst_62565)].join('');
var inst_62567 = cloudxmark.core.jsonp.call(null,inst_62566);
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(89),inst_62567);
} else {
if((state_val_62613 === (46))){
var inst_62398 = (state_62612[(2)]);
var inst_62399 = cljs.core.get.call(null,inst_62398,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_62400 = cljs.core.get.call(null,inst_62398,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_62401 = encodeURIComponent(inst_62399);
var inst_62402 = encodeURIComponent(inst_62400);
var inst_62403 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_62401),cljs.core.str("&desc="),cljs.core.str(inst_62402)].join('');
var inst_62404 = cloudxmark.core.jsonp.call(null,inst_62403);
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(47),inst_62404);
} else {
if((state_val_62613 === (4))){
var inst_62610 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62612__$1,inst_62610);
} else {
if((state_val_62613 === (77))){
var inst_62245 = (state_62612[(7)]);
var inst_62540 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62541 = (inst_62540 & (64));
var inst_62542 = inst_62245.cljs$core$ISeq$;
var inst_62543 = (inst_62541) || (inst_62542);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62543)){
var statearr_62634_62757 = state_62612__$1;
(statearr_62634_62757[(1)] = (80));

} else {
var statearr_62635_62758 = state_62612__$1;
(statearr_62635_62758[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (54))){
var state_62612__$1 = state_62612;
var statearr_62636_62759 = state_62612__$1;
(statearr_62636_62759[(2)] = true);

(statearr_62636_62759[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (92))){
var inst_62591 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62637_62760 = state_62612__$1;
(statearr_62637_62760[(2)] = inst_62591);

(statearr_62637_62760[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (15))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62638_62761 = state_62612__$1;
(statearr_62638_62761[(2)] = inst_62245);

(statearr_62638_62761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (48))){
var inst_62245 = (state_62612[(7)]);
var inst_62429 = (inst_62245 == null);
var inst_62430 = cljs.core.not.call(null,inst_62429);
var state_62612__$1 = state_62612;
if(inst_62430){
var statearr_62639_62762 = state_62612__$1;
(statearr_62639_62762[(1)] = (51));

} else {
var statearr_62640_62763 = state_62612__$1;
(statearr_62640_62763[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (50))){
var inst_62597 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62641_62764 = state_62612__$1;
(statearr_62641_62764[(2)] = inst_62597);

(statearr_62641_62764[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (75))){
var state_62612__$1 = state_62612;
var statearr_62642_62765 = state_62612__$1;
(statearr_62642_62765[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (21))){
var inst_62245 = (state_62612[(7)]);
var inst_62309 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62310 = (inst_62309 & (64));
var inst_62311 = inst_62245.cljs$core$ISeq$;
var inst_62312 = (inst_62310) || (inst_62311);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62312)){
var statearr_62644_62766 = state_62612__$1;
(statearr_62644_62766[(1)] = (24));

} else {
var statearr_62645_62767 = state_62612__$1;
(statearr_62645_62767[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (31))){
var inst_62355 = cloudxmark.core.jsonp.call(null,"/logout");
var state_62612__$1 = state_62612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(34),inst_62355);
} else {
if((state_val_62613 === (32))){
var inst_62244 = (state_62612[(8)]);
var inst_62376 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_62612__$1 = state_62612;
if(inst_62376){
var statearr_62646_62768 = state_62612__$1;
(statearr_62646_62768[(1)] = (35));

} else {
var statearr_62647_62769 = state_62612__$1;
(statearr_62647_62769[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (40))){
var inst_62393 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62393)){
var statearr_62648_62770 = state_62612__$1;
(statearr_62648_62770[(1)] = (44));

} else {
var statearr_62649_62771 = state_62612__$1;
(statearr_62649_62771[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (91))){
var state_62612__$1 = state_62612;
var statearr_62650_62772 = state_62612__$1;
(statearr_62650_62772[(2)] = null);

(statearr_62650_62772[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (56))){
var inst_62439 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62651_62773 = state_62612__$1;
(statearr_62651_62773[(2)] = inst_62439);

(statearr_62651_62773[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (33))){
var inst_62601 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62652_62774 = state_62612__$1;
(statearr_62652_62774[(2)] = inst_62601);

(statearr_62652_62774[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (13))){
var inst_62263 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62653_62775 = state_62612__$1;
(statearr_62653_62775[(2)] = inst_62263);

(statearr_62653_62775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (22))){
var state_62612__$1 = state_62612;
var statearr_62654_62776 = state_62612__$1;
(statearr_62654_62776[(2)] = false);

(statearr_62654_62776[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (90))){
var state_62612__$1 = state_62612;
var statearr_62655_62777 = state_62612__$1;
(statearr_62655_62777[(2)] = null);

(statearr_62655_62777[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (36))){
var inst_62244 = (state_62612[(8)]);
var inst_62425 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_62612__$1 = state_62612;
if(inst_62425){
var statearr_62656_62778 = state_62612__$1;
(statearr_62656_62778[(1)] = (48));

} else {
var statearr_62657_62779 = state_62612__$1;
(statearr_62657_62779[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (41))){
var state_62612__$1 = state_62612;
var statearr_62658_62780 = state_62612__$1;
(statearr_62658_62780[(2)] = true);

(statearr_62658_62780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (89))){
var inst_62557 = (state_62612[(12)]);
var inst_62569 = (state_62612[(2)]);
var inst_62570 = cljs.core.js__GT_clj.call(null,inst_62569);
var inst_62571 = cloudxmark.core.convert_json_lsts_result.call(null,inst_62570,inst_62557,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_62572 = cljs.core.List.EMPTY;
var inst_62573 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_62574 = cljs.core._conj.call(null,inst_62572,inst_62573);
var inst_62575 = cljs.core.List.EMPTY;
var inst_62576 = cljs.core._conj.call(null,inst_62575,inst_62571);
var inst_62577 = cljs.core.concat.call(null,inst_62574,inst_62576);
var inst_62578 = cljs.core.seq.call(null,inst_62577);
var inst_62579 = cljs.core.sequence.call(null,inst_62578);
var inst_62580 = cljs.core.List.EMPTY;
var inst_62581 = cljs.core._conj.call(null,inst_62580,inst_62579);
var inst_62582 = cljs.core.concat.call(null,inst_62581);
var inst_62583 = cljs.core.seq.call(null,inst_62582);
var inst_62584 = cljs.core.sequence.call(null,inst_62583);
var inst_62585 = cljs.core.vec.call(null,inst_62584);
var inst_62586 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62585);
var state_62612__$1 = state_62612;
var statearr_62659_62781 = state_62612__$1;
(statearr_62659_62781[(2)] = inst_62586);

(statearr_62659_62781[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (43))){
var inst_62390 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62660_62782 = state_62612__$1;
(statearr_62660_62782[(2)] = inst_62390);

(statearr_62660_62782[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (61))){
var inst_62245 = (state_62612[(7)]);
var inst_62480 = (inst_62245 == null);
var inst_62481 = cljs.core.not.call(null,inst_62480);
var state_62612__$1 = state_62612;
if(inst_62481){
var statearr_62661_62783 = state_62612__$1;
(statearr_62661_62783[(1)] = (64));

} else {
var statearr_62662_62784 = state_62612__$1;
(statearr_62662_62784[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (29))){
var inst_62324 = (state_62612[(2)]);
var inst_62325 = cljs.core.get.call(null,inst_62324,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_62326 = cljs.core.get.call(null,inst_62324,new cljs.core.Keyword(null,"password","password",417022471));
var inst_62327 = cljs.core.get.call(null,inst_62324,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_62328 = cloudxmark.core.enc_password.call(null,inst_62326);
var inst_62329 = encodeURIComponent(inst_62325);
var inst_62330 = encodeURIComponent(inst_62328);
var inst_62331 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_62329),cljs.core.str("&pass="),cljs.core.str(inst_62330)].join('');
var inst_62332 = cloudxmark.core.jsonp.call(null,inst_62331);
var state_62612__$1 = (function (){var statearr_62663 = state_62612;
(statearr_62663[(14)] = inst_62327);

return statearr_62663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(30),inst_62332);
} else {
if((state_val_62613 === (44))){
var inst_62245 = (state_62612[(7)]);
var inst_62395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62664_62785 = state_62612__$1;
(statearr_62664_62785[(2)] = inst_62395);

(statearr_62664_62785[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (93))){
var inst_62607 = (state_62612[(2)]);
var inst_62239 = inst_62607;
var state_62612__$1 = (function (){var statearr_62665 = state_62612;
(statearr_62665[(15)] = inst_62239);

return statearr_62665;
})();
var statearr_62666_62786 = state_62612__$1;
(statearr_62666_62786[(2)] = null);

(statearr_62666_62786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (6))){
var inst_62244 = (state_62612[(8)]);
var inst_62302 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_62612__$1 = state_62612;
if(inst_62302){
var statearr_62667_62787 = state_62612__$1;
(statearr_62667_62787[(1)] = (18));

} else {
var statearr_62668_62788 = state_62612__$1;
(statearr_62668_62788[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (28))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62669_62789 = state_62612__$1;
(statearr_62669_62789[(2)] = inst_62245);

(statearr_62669_62789[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (64))){
var inst_62245 = (state_62612[(7)]);
var inst_62483 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62484 = (inst_62483 & (64));
var inst_62485 = inst_62245.cljs$core$ISeq$;
var inst_62486 = (inst_62484) || (inst_62485);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62486)){
var statearr_62670_62790 = state_62612__$1;
(statearr_62670_62790[(1)] = (67));

} else {
var statearr_62671_62791 = state_62612__$1;
(statearr_62671_62791[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (51))){
var inst_62245 = (state_62612[(7)]);
var inst_62432 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62433 = (inst_62432 & (64));
var inst_62434 = inst_62245.cljs$core$ISeq$;
var inst_62435 = (inst_62433) || (inst_62434);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62435)){
var statearr_62672_62792 = state_62612__$1;
(statearr_62672_62792[(1)] = (54));

} else {
var statearr_62673_62793 = state_62612__$1;
(statearr_62673_62793[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (25))){
var state_62612__$1 = state_62612;
var statearr_62674_62794 = state_62612__$1;
(statearr_62674_62794[(2)] = false);

(statearr_62674_62794[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (34))){
var inst_62357 = (state_62612[(2)]);
var inst_62358 = cljs.core.js__GT_clj.call(null,inst_62357);
var inst_62359 = cloudxmark.core.convert_json_status.call(null,inst_62358,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_62360 = cljs.core.List.EMPTY;
var inst_62361 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_62362 = cljs.core._conj.call(null,inst_62360,inst_62361);
var inst_62363 = cljs.core.List.EMPTY;
var inst_62364 = cljs.core._conj.call(null,inst_62363,inst_62359);
var inst_62365 = cljs.core.concat.call(null,inst_62362,inst_62364);
var inst_62366 = cljs.core.seq.call(null,inst_62365);
var inst_62367 = cljs.core.sequence.call(null,inst_62366);
var inst_62368 = cljs.core.List.EMPTY;
var inst_62369 = cljs.core._conj.call(null,inst_62368,inst_62367);
var inst_62370 = cljs.core.concat.call(null,inst_62369);
var inst_62371 = cljs.core.seq.call(null,inst_62370);
var inst_62372 = cljs.core.sequence.call(null,inst_62371);
var inst_62373 = cljs.core.vec.call(null,inst_62372);
var inst_62374 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62373);
var state_62612__$1 = state_62612;
var statearr_62675_62795 = state_62612__$1;
(statearr_62675_62795[(2)] = inst_62374);

(statearr_62675_62795[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (17))){
var inst_62274 = (state_62612[(16)]);
var inst_62273 = (state_62612[(17)]);
var inst_62280 = (state_62612[(2)]);
var inst_62281 = cljs.core.js__GT_clj.call(null,inst_62280);
var inst_62282 = cloudxmark.core.gen_key_bytes.call(null,inst_62273);
var inst_62283 = cloudxmark.core.create_aes_cbc.call(null,inst_62282);
var inst_62284 = cloudxmark.core.convert_json_lsts_result.call(null,inst_62281,inst_62274,new cljs.core.Keyword(null,"login","login",55217519));
var inst_62285 = cljs.core.assoc.call(null,inst_62284,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_62283);
var inst_62286 = cljs.core.List.EMPTY;
var inst_62287 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_62288 = cljs.core._conj.call(null,inst_62286,inst_62287);
var inst_62289 = cljs.core.List.EMPTY;
var inst_62290 = cljs.core._conj.call(null,inst_62289,inst_62285);
var inst_62291 = cljs.core.concat.call(null,inst_62288,inst_62290);
var inst_62292 = cljs.core.seq.call(null,inst_62291);
var inst_62293 = cljs.core.sequence.call(null,inst_62292);
var inst_62294 = cljs.core.List.EMPTY;
var inst_62295 = cljs.core._conj.call(null,inst_62294,inst_62293);
var inst_62296 = cljs.core.concat.call(null,inst_62295);
var inst_62297 = cljs.core.seq.call(null,inst_62296);
var inst_62298 = cljs.core.sequence.call(null,inst_62297);
var inst_62299 = cljs.core.vec.call(null,inst_62298);
var inst_62300 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62299);
var state_62612__$1 = state_62612;
var statearr_62676_62796 = state_62612__$1;
(statearr_62676_62796[(2)] = inst_62300);

(statearr_62676_62796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (3))){
var inst_62244 = (state_62612[(8)]);
var inst_62239 = (state_62612[(15)]);
var inst_62244__$1 = cljs.core.nth.call(null,inst_62239,(0),null);
var inst_62245 = cljs.core.nth.call(null,inst_62239,(1),null);
var inst_62246 = cljs.core.nth.call(null,inst_62239,(2),null);
var inst_62247 = cljs.core._EQ_.call(null,inst_62244__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_62612__$1 = (function (){var statearr_62677 = state_62612;
(statearr_62677[(8)] = inst_62244__$1);

(statearr_62677[(7)] = inst_62245);

(statearr_62677[(18)] = inst_62246);

return statearr_62677;
})();
if(inst_62247){
var statearr_62678_62797 = state_62612__$1;
(statearr_62678_62797[(1)] = (5));

} else {
var statearr_62679_62798 = state_62612__$1;
(statearr_62679_62798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (12))){
var state_62612__$1 = state_62612;
var statearr_62680_62799 = state_62612__$1;
(statearr_62680_62799[(2)] = false);

(statearr_62680_62799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (2))){
var inst_62235 = (state_62612[(2)]);
var inst_62236 = cljs.core.nth.call(null,inst_62235,(0),null);
var inst_62237 = cljs.core.nth.call(null,inst_62235,(1),null);
var inst_62238 = cljs.core.nth.call(null,inst_62235,(2),null);
var inst_62239 = inst_62235;
var state_62612__$1 = (function (){var statearr_62681 = state_62612;
(statearr_62681[(19)] = inst_62238);

(statearr_62681[(15)] = inst_62239);

(statearr_62681[(20)] = inst_62236);

(statearr_62681[(21)] = inst_62237);

return statearr_62681;
})();
var statearr_62682_62800 = state_62612__$1;
(statearr_62682_62800[(2)] = null);

(statearr_62682_62800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (66))){
var inst_62493 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62493)){
var statearr_62683_62801 = state_62612__$1;
(statearr_62683_62801[(1)] = (70));

} else {
var statearr_62684_62802 = state_62612__$1;
(statearr_62684_62802[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (23))){
var inst_62319 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62319)){
var statearr_62685_62803 = state_62612__$1;
(statearr_62685_62803[(1)] = (27));

} else {
var statearr_62686_62804 = state_62612__$1;
(statearr_62686_62804[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (47))){
var inst_62406 = (state_62612[(2)]);
var inst_62407 = cljs.core.js__GT_clj.call(null,inst_62406);
var inst_62408 = cloudxmark.core.convert_json_lsts_result.call(null,inst_62407,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_62409 = cljs.core.List.EMPTY;
var inst_62410 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_62411 = cljs.core._conj.call(null,inst_62409,inst_62410);
var inst_62412 = cljs.core.List.EMPTY;
var inst_62413 = cljs.core._conj.call(null,inst_62412,inst_62408);
var inst_62414 = cljs.core.concat.call(null,inst_62411,inst_62413);
var inst_62415 = cljs.core.seq.call(null,inst_62414);
var inst_62416 = cljs.core.sequence.call(null,inst_62415);
var inst_62417 = cljs.core.List.EMPTY;
var inst_62418 = cljs.core._conj.call(null,inst_62417,inst_62416);
var inst_62419 = cljs.core.concat.call(null,inst_62418);
var inst_62420 = cljs.core.seq.call(null,inst_62419);
var inst_62421 = cljs.core.sequence.call(null,inst_62420);
var inst_62422 = cljs.core.vec.call(null,inst_62421);
var inst_62423 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62422);
var state_62612__$1 = state_62612;
var statearr_62687_62805 = state_62612__$1;
(statearr_62687_62805[(2)] = inst_62423);

(statearr_62687_62805[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (35))){
var inst_62245 = (state_62612[(7)]);
var inst_62380 = (inst_62245 == null);
var inst_62381 = cljs.core.not.call(null,inst_62380);
var state_62612__$1 = state_62612;
if(inst_62381){
var statearr_62688_62806 = state_62612__$1;
(statearr_62688_62806[(1)] = (38));

} else {
var statearr_62689_62807 = state_62612__$1;
(statearr_62689_62807[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (82))){
var inst_62547 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62690_62808 = state_62612__$1;
(statearr_62690_62808[(2)] = inst_62547);

(statearr_62690_62808[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (76))){
var inst_62593 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62691_62809 = state_62612__$1;
(statearr_62691_62809[(2)] = inst_62593);

(statearr_62691_62809[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (19))){
var inst_62244 = (state_62612[(8)]);
var inst_62353 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_62612__$1 = state_62612;
if(inst_62353){
var statearr_62692_62810 = state_62612__$1;
(statearr_62692_62810[(1)] = (31));

} else {
var statearr_62693_62811 = state_62612__$1;
(statearr_62693_62811[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (57))){
var inst_62245 = (state_62612[(7)]);
var inst_62444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62694_62812 = state_62612__$1;
(statearr_62694_62812[(2)] = inst_62444);

(statearr_62694_62812[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (68))){
var state_62612__$1 = state_62612;
var statearr_62695_62813 = state_62612__$1;
(statearr_62695_62813[(2)] = false);

(statearr_62695_62813[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (11))){
var state_62612__$1 = state_62612;
var statearr_62696_62814 = state_62612__$1;
(statearr_62696_62814[(2)] = true);

(statearr_62696_62814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (9))){
var state_62612__$1 = state_62612;
var statearr_62697_62815 = state_62612__$1;
(statearr_62697_62815[(2)] = false);

(statearr_62697_62815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (5))){
var inst_62245 = (state_62612[(7)]);
var inst_62250 = [cljs.core.str("lst login data:"),cljs.core.str(inst_62245)].join('');
var inst_62251 = cljs.core.println.call(null,inst_62250);
var inst_62253 = (inst_62245 == null);
var inst_62254 = cljs.core.not.call(null,inst_62253);
var state_62612__$1 = (function (){var statearr_62698 = state_62612;
(statearr_62698[(22)] = inst_62251);

return statearr_62698;
})();
if(inst_62254){
var statearr_62699_62816 = state_62612__$1;
(statearr_62699_62816[(1)] = (8));

} else {
var statearr_62700_62817 = state_62612__$1;
(statearr_62700_62817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (83))){
var inst_62245 = (state_62612[(7)]);
var inst_62552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62701_62818 = state_62612__$1;
(statearr_62701_62818[(2)] = inst_62552);

(statearr_62701_62818[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (14))){
var inst_62245 = (state_62612[(7)]);
var inst_62268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62245);
var state_62612__$1 = state_62612;
var statearr_62702_62819 = state_62612__$1;
(statearr_62702_62819[(2)] = inst_62268);

(statearr_62702_62819[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (45))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62703_62820 = state_62612__$1;
(statearr_62703_62820[(2)] = inst_62245);

(statearr_62703_62820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (53))){
var inst_62442 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62442)){
var statearr_62704_62821 = state_62612__$1;
(statearr_62704_62821[(1)] = (57));

} else {
var statearr_62705_62822 = state_62612__$1;
(statearr_62705_62822[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (78))){
var state_62612__$1 = state_62612;
var statearr_62706_62823 = state_62612__$1;
(statearr_62706_62823[(2)] = false);

(statearr_62706_62823[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (26))){
var inst_62316 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62707_62824 = state_62612__$1;
(statearr_62707_62824[(2)] = inst_62316);

(statearr_62707_62824[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (16))){
var inst_62273 = (state_62612[(17)]);
var inst_62271 = (state_62612[(2)]);
var inst_62272 = cljs.core.get.call(null,inst_62271,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_62273__$1 = cljs.core.get.call(null,inst_62271,new cljs.core.Keyword(null,"password","password",417022471));
var inst_62274 = cljs.core.get.call(null,inst_62271,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_62275 = encodeURIComponent(inst_62272);
var inst_62276 = encodeURIComponent(inst_62273__$1);
var inst_62277 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_62275),cljs.core.str("&pass="),cljs.core.str(inst_62276)].join('');
var inst_62278 = cloudxmark.core.jsonp.call(null,inst_62277);
var state_62612__$1 = (function (){var statearr_62708 = state_62612;
(statearr_62708[(16)] = inst_62274);

(statearr_62708[(17)] = inst_62273__$1);

return statearr_62708;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62612__$1,(17),inst_62278);
} else {
if((state_val_62613 === (81))){
var state_62612__$1 = state_62612;
var statearr_62709_62825 = state_62612__$1;
(statearr_62709_62825[(2)] = false);

(statearr_62709_62825[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (79))){
var inst_62550 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62550)){
var statearr_62710_62826 = state_62612__$1;
(statearr_62710_62826[(1)] = (83));

} else {
var statearr_62711_62827 = state_62612__$1;
(statearr_62711_62827[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (38))){
var inst_62245 = (state_62612[(7)]);
var inst_62383 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62384 = (inst_62383 & (64));
var inst_62385 = inst_62245.cljs$core$ISeq$;
var inst_62386 = (inst_62384) || (inst_62385);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62386)){
var statearr_62712_62828 = state_62612__$1;
(statearr_62712_62828[(1)] = (41));

} else {
var statearr_62713_62829 = state_62612__$1;
(statearr_62713_62829[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (87))){
var inst_62558 = (state_62612[(11)]);
var inst_62562 = encodeURIComponent(inst_62558);
var inst_62563 = [cljs.core.str("query="),cljs.core.str(inst_62562)].join('');
var state_62612__$1 = state_62612;
var statearr_62714_62830 = state_62612__$1;
(statearr_62714_62830[(2)] = inst_62563);

(statearr_62714_62830[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (30))){
var inst_62334 = (state_62612[(2)]);
var inst_62335 = cljs.core.js__GT_clj.call(null,inst_62334);
var inst_62336 = cloudxmark.core.convert_json_status.call(null,inst_62335,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_62337 = cljs.core.List.EMPTY;
var inst_62338 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_62339 = cljs.core._conj.call(null,inst_62337,inst_62338);
var inst_62340 = cljs.core.List.EMPTY;
var inst_62341 = cljs.core._conj.call(null,inst_62340,inst_62336);
var inst_62342 = cljs.core.concat.call(null,inst_62339,inst_62341);
var inst_62343 = cljs.core.seq.call(null,inst_62342);
var inst_62344 = cljs.core.sequence.call(null,inst_62343);
var inst_62345 = cljs.core.List.EMPTY;
var inst_62346 = cljs.core._conj.call(null,inst_62345,inst_62344);
var inst_62347 = cljs.core.concat.call(null,inst_62346);
var inst_62348 = cljs.core.seq.call(null,inst_62347);
var inst_62349 = cljs.core.sequence.call(null,inst_62348);
var inst_62350 = cljs.core.vec.call(null,inst_62349);
var inst_62351 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62350);
var state_62612__$1 = state_62612;
var statearr_62715_62831 = state_62612__$1;
(statearr_62715_62831[(2)] = inst_62351);

(statearr_62715_62831[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (73))){
var inst_62512 = (state_62612[(2)]);
var inst_62513 = cljs.core.js__GT_clj.call(null,inst_62512);
var inst_62514 = cloudxmark.core.convert_json_lsts_result.call(null,inst_62513,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_62515 = cljs.core.List.EMPTY;
var inst_62516 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_62517 = cljs.core._conj.call(null,inst_62515,inst_62516);
var inst_62518 = cljs.core.List.EMPTY;
var inst_62519 = cljs.core._conj.call(null,inst_62518,inst_62514);
var inst_62520 = cljs.core.concat.call(null,inst_62517,inst_62519);
var inst_62521 = cljs.core.seq.call(null,inst_62520);
var inst_62522 = cljs.core.sequence.call(null,inst_62521);
var inst_62523 = cljs.core.List.EMPTY;
var inst_62524 = cljs.core._conj.call(null,inst_62523,inst_62522);
var inst_62525 = cljs.core.concat.call(null,inst_62524);
var inst_62526 = cljs.core.seq.call(null,inst_62525);
var inst_62527 = cljs.core.sequence.call(null,inst_62526);
var inst_62528 = cljs.core.vec.call(null,inst_62527);
var inst_62529 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_62528);
var state_62612__$1 = state_62612;
var statearr_62716_62832 = state_62612__$1;
(statearr_62716_62832[(2)] = inst_62529);

(statearr_62716_62832[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (10))){
var inst_62266 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62266)){
var statearr_62717_62833 = state_62612__$1;
(statearr_62717_62833[(1)] = (14));

} else {
var statearr_62718_62834 = state_62612__$1;
(statearr_62718_62834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (18))){
var inst_62245 = (state_62612[(7)]);
var inst_62306 = (inst_62245 == null);
var inst_62307 = cljs.core.not.call(null,inst_62306);
var state_62612__$1 = state_62612;
if(inst_62307){
var statearr_62719_62835 = state_62612__$1;
(statearr_62719_62835[(1)] = (21));

} else {
var statearr_62720_62836 = state_62612__$1;
(statearr_62720_62836[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (52))){
var state_62612__$1 = state_62612;
var statearr_62721_62837 = state_62612__$1;
(statearr_62721_62837[(2)] = false);

(statearr_62721_62837[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (67))){
var state_62612__$1 = state_62612;
var statearr_62722_62838 = state_62612__$1;
(statearr_62722_62838[(2)] = true);

(statearr_62722_62838[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (71))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62723_62839 = state_62612__$1;
(statearr_62723_62839[(2)] = inst_62245);

(statearr_62723_62839[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (42))){
var state_62612__$1 = state_62612;
var statearr_62724_62840 = state_62612__$1;
(statearr_62724_62840[(2)] = false);

(statearr_62724_62840[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (80))){
var state_62612__$1 = state_62612;
var statearr_62725_62841 = state_62612__$1;
(statearr_62725_62841[(2)] = true);

(statearr_62725_62841[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (37))){
var inst_62599 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62726_62842 = state_62612__$1;
(statearr_62726_62842[(2)] = inst_62599);

(statearr_62726_62842[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (63))){
var inst_62595 = (state_62612[(2)]);
var state_62612__$1 = state_62612;
var statearr_62727_62843 = state_62612__$1;
(statearr_62727_62843[(2)] = inst_62595);

(statearr_62727_62843[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (8))){
var inst_62245 = (state_62612[(7)]);
var inst_62256 = inst_62245.cljs$lang$protocol_mask$partition0$;
var inst_62257 = (inst_62256 & (64));
var inst_62258 = inst_62245.cljs$core$ISeq$;
var inst_62259 = (inst_62257) || (inst_62258);
var state_62612__$1 = state_62612;
if(cljs.core.truth_(inst_62259)){
var statearr_62728_62844 = state_62612__$1;
(statearr_62728_62844[(1)] = (11));

} else {
var statearr_62729_62845 = state_62612__$1;
(statearr_62729_62845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (49))){
var inst_62244 = (state_62612[(8)]);
var inst_62476 = cljs.core._EQ_.call(null,inst_62244,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_62612__$1 = state_62612;
if(inst_62476){
var statearr_62730_62846 = state_62612__$1;
(statearr_62730_62846[(1)] = (61));

} else {
var statearr_62731_62847 = state_62612__$1;
(statearr_62731_62847[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62613 === (84))){
var inst_62245 = (state_62612[(7)]);
var state_62612__$1 = state_62612;
var statearr_62732_62848 = state_62612__$1;
(statearr_62732_62848[(2)] = inst_62245);

(statearr_62732_62848[(1)] = (85));


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
var statearr_62736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62736[(0)] = cloudxmark$core$search_loop_$_state_machine__28357__auto__);

(statearr_62736[(1)] = (1));

return statearr_62736;
});
var cloudxmark$core$search_loop_$_state_machine__28357__auto____1 = (function (state_62612){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_62612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e62737){if((e62737 instanceof Object)){
var ex__28360__auto__ = e62737;
var statearr_62738_62849 = state_62612;
(statearr_62738_62849[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62850 = state_62612;
state_62612 = G__62850;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28357__auto__ = function(state_62612){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____1.call(this,state_62612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28357__auto____0;
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28357__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_62739 = f__28380__auto__.call(null);
(statearr_62739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_62739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471999379295