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
var idx_48182 = (0);
while(true){
var len1_48183 = b1.length;
if((cljs.core._EQ_.call(null,idx_48182,len1_48183)) || (cljs.core._EQ_.call(null,idx_48182,max_len))){
} else {
(b1[idx_48182] = ((b1[idx_48182]) ^ (b2[idx_48182])));

var G__48184 = (idx_48182 + (1));
idx_48182 = G__48184;
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
var args48187 = [];
var len__22773__auto___48190 = arguments.length;
var i__22774__auto___48191 = (0);
while(true){
if((i__22774__auto___48191 < len__22773__auto___48190)){
args48187.push((arguments[i__22774__auto___48191]));

var G__48192 = (i__22774__auto___48191 + (1));
i__22774__auto___48191 = G__48192;
continue;
} else {
}
break;
}

var G__48189 = args48187.length;
switch (G__48189) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48187.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__48185_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__48185_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__48186_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__48186_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__48194,_,p__48195){
var map__48196 = p__48194;
var map__48196__$1 = ((((!((map__48196 == null)))?((((map__48196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48196):map__48196);
var env = map__48196__$1;
var state = cljs.core.get.call(null,map__48196__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__48196__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__48197 = p__48195;
var map__48197__$1 = ((((!((map__48197 == null)))?((((map__48197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48197):map__48197);
var query_ver = cljs.core.get.call(null,map__48197__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__48197__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__48200 = lst;
var map__48200__$1 = ((((!((map__48200 == null)))?((((map__48200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48200):map__48200);
var lsts = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_48202 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_48202);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__48203,_,p__48204){
var map__48205 = p__48203;
var map__48205__$1 = ((((!((map__48205 == null)))?((((map__48205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48205):map__48205);
var env = map__48205__$1;
var state = cljs.core.get.call(null,map__48205__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48206 = p__48204;
var map__48206__$1 = ((((!((map__48206 == null)))?((((map__48206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48206):map__48206);
var status = map__48206__$1;
var id = cljs.core.get.call(null,map__48206__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48205,map__48205__$1,env,state,map__48206,map__48206__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__48205,map__48205__$1,env,state,map__48206,map__48206__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__48209,_,p__48210){
var map__48211 = p__48209;
var map__48211__$1 = ((((!((map__48211 == null)))?((((map__48211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48211):map__48211);
var env = map__48211__$1;
var state = cljs.core.get.call(null,map__48211__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48212 = p__48210;
var map__48212__$1 = ((((!((map__48212 == null)))?((((map__48212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48212):map__48212);
var path = cljs.core.get.call(null,map__48212__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__48212__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__48212__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48211,map__48211__$1,env,state,map__48212,map__48212__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__48211,map__48211__$1,env,state,map__48212,map__48212__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__48215,_,p__48216){
var map__48217 = p__48215;
var map__48217__$1 = ((((!((map__48217 == null)))?((((map__48217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48217):map__48217);
var env = map__48217__$1;
var state = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48218 = p__48216;
var map__48218__$1 = ((((!((map__48218 == null)))?((((map__48218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48218):map__48218);
var data_map = map__48218__$1;
var lst_name = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__48218__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48217,map__48217__$1,env,state,map__48218,map__48218__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__48217,map__48217__$1,env,state,map__48218,map__48218__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__48221,_,p__48222){
var map__48223 = p__48221;
var map__48223__$1 = ((((!((map__48223 == null)))?((((map__48223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48223):map__48223);
var env = map__48223__$1;
var state = cljs.core.get.call(null,map__48223__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48224 = p__48222;
var map__48224__$1 = ((((!((map__48224 == null)))?((((map__48224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48224):map__48224);
var field_id = cljs.core.get.call(null,map__48224__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__48224__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48223,map__48223__$1,env,state,map__48224,map__48224__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__48223,map__48223__$1,env,state,map__48224,map__48224__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__48227,_,p__48228){
var map__48229 = p__48227;
var map__48229__$1 = ((((!((map__48229 == null)))?((((map__48229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48229):map__48229);
var env = map__48229__$1;
var state = cljs.core.get.call(null,map__48229__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48230 = p__48228;
var map__48230__$1 = ((((!((map__48230 == null)))?((((map__48230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48230):map__48230);
var data_map = map__48230__$1;
var user_id = cljs.core.get.call(null,map__48230__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__48230__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__48230__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48229,map__48229__$1,env,state,map__48230,map__48230__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__48229,map__48229__$1,env,state,map__48230,map__48230__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__48233,_,p__48234){
var map__48235 = p__48233;
var map__48235__$1 = ((((!((map__48235 == null)))?((((map__48235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48235):map__48235);
var env = map__48235__$1;
var state = cljs.core.get.call(null,map__48235__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48236 = p__48234;
var map__48236__$1 = ((((!((map__48236 == null)))?((((map__48236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48236):map__48236);
var data_map = map__48236__$1;
var user_id = cljs.core.get.call(null,map__48236__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__48236__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48235,map__48235__$1,env,state,map__48236,map__48236__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__48235,map__48235__$1,env,state,map__48236,map__48236__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__48239,_,p__48240){
var map__48241 = p__48239;
var map__48241__$1 = ((((!((map__48241 == null)))?((((map__48241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48241):map__48241);
var env = map__48241__$1;
var state = cljs.core.get.call(null,map__48241__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48242 = p__48240;
var map__48242__$1 = ((((!((map__48242 == null)))?((((map__48242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48242):map__48242);
var data_map = map__48242__$1;
var type = cljs.core.get.call(null,map__48242__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__48242__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48241,map__48241__$1,env,state,map__48242,map__48242__$1,data_map,type,fields){
return (function (){
return null;
});})(map__48241,map__48241__$1,env,state,map__48242,map__48242__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__48245,_,p__48246){
var map__48247 = p__48245;
var map__48247__$1 = ((((!((map__48247 == null)))?((((map__48247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48247):map__48247);
var env = map__48247__$1;
var state = cljs.core.get.call(null,map__48247__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48248 = p__48246;
var map__48248__$1 = ((((!((map__48248 == null)))?((((map__48248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48248):map__48248);
var data_map = map__48248__$1;
var name = cljs.core.get.call(null,map__48248__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__48248__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48247,map__48247__$1,env,state,map__48248,map__48248__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__48247,map__48247__$1,env,state,map__48248,map__48248__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__48251,_,p__48252){
var map__48253 = p__48251;
var map__48253__$1 = ((((!((map__48253 == null)))?((((map__48253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48253):map__48253);
var env = map__48253__$1;
var state = cljs.core.get.call(null,map__48253__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48254 = p__48252;
var map__48254__$1 = ((((!((map__48254 == null)))?((((map__48254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48254):map__48254);
var data_map = map__48254__$1;
var name = cljs.core.get.call(null,map__48254__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__48254__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48253,map__48253__$1,env,state,map__48254,map__48254__$1,data_map,name,value){
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
});})(map__48253,map__48253__$1,env,state,map__48254,map__48254__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__48257,_,___$1){
var map__48258 = p__48257;
var map__48258__$1 = ((((!((map__48258 == null)))?((((map__48258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48258):map__48258);
var env = map__48258__$1;
var state = cljs.core.get.call(null,map__48258__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48258,map__48258__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__48258,map__48258__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__48260,_,p__48261){
var map__48262 = p__48260;
var map__48262__$1 = ((((!((map__48262 == null)))?((((map__48262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48262):map__48262);
var env = map__48262__$1;
var state = cljs.core.get.call(null,map__48262__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__48263 = p__48261;
var map__48263__$1 = ((((!((map__48263 == null)))?((((map__48263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48263):map__48263);
var data_map = map__48263__$1;
var status = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__48263__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48262,map__48262__$1,env,state,map__48263,map__48263__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__48262,map__48262__$1,env,state,map__48263,map__48263__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args48266 = [];
var len__22773__auto___48269 = arguments.length;
var i__22774__auto___48270 = (0);
while(true){
if((i__22774__auto___48270 < len__22773__auto___48269)){
args48266.push((arguments[i__22774__auto___48270]));

var G__48271 = (i__22774__auto___48270 + (1));
i__22774__auto___48270 = G__48271;
continue;
} else {
}
break;
}

var G__48268 = args48266.length;
switch (G__48268) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48266.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__48273){
var map__48279 = p__48273;
var map__48279__$1 = ((((!((map__48279 == null)))?((((map__48279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48279):map__48279);
var info = cljs.core.get.call(null,map__48279__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__48279__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__48279__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__48281 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__48281,(0),null);
var msg = cljs.core.nth.call(null,vec__48281,(1),null);
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
var map__48286 = lst;
var map__48286__$1 = ((((!((map__48286 == null)))?((((map__48286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48286):map__48286);
var lsts = cljs.core.get.call(null,map__48286__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__48286__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__48286,map__48286__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__48286,map__48286__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__48290 = lst;
var map__48290__$1 = ((((!((map__48290 == null)))?((((map__48290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48290):map__48290);
var status = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__48296 = (function (){var G__48299 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48299) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__48296,(0),null);
var query_key = cljs.core.nth.call(null,vec__48296,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__48296,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__48296,elem_key,query_key))
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

var x48305_48317 = cloudxmark.core.Lsts.prototype;
x48305_48317.componentWillUpdate = ((function (x48305_48317){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
if(((!((this__28544__auto__ == null)))?(((false) || (this__28544__auto__.om$next$Ident$))?true:false):false)){
var ident__28548__auto___48318 = om.next.ident.call(null,this__28544__auto__,om.next.props.call(null,this__28544__auto__));
var next_ident__28549__auto___48319 = om.next.ident.call(null,this__28544__auto__,om.next._next_props.call(null,next_props__28545__auto__,this__28544__auto__));
if(cljs.core.not_EQ_.call(null,ident__28548__auto___48318,next_ident__28549__auto___48319)){
var idxr__28550__auto___48320 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28550__auto___48320 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28550__auto___48320),((function (idxr__28550__auto___48320,ident__28548__auto___48318,next_ident__28549__auto___48319,this__28544__auto__,x48305_48317){
return (function (indexes__28551__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28551__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28548__auto___48318], null),cljs.core.disj,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28549__auto___48319], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28544__auto__);
});})(idxr__28550__auto___48320,ident__28548__auto___48318,next_ident__28549__auto___48319,this__28544__auto__,x48305_48317))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28544__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28544__auto__);
});})(x48305_48317))
;

x48305_48317.shouldComponentUpdate = ((function (x48305_48317){
return (function (next_props__28545__auto__,next_state__28546__auto__){
var this__28544__auto__ = this;
var next_children__28547__auto__ = next_props__28545__auto__.children;
var next_props__28545__auto____$1 = goog.object.get(next_props__28545__auto__,"omcljs$value");
var next_props__28545__auto____$2 = (function (){var G__48307 = next_props__28545__auto____$1;
if((next_props__28545__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__48307);
} else {
return G__48307;
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
});})(x48305_48317))
;

x48305_48317.componentWillUnmount = ((function (x48305_48317){
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
});})(x48305_48317))
;

x48305_48317.componentDidUpdate = ((function (x48305_48317){
return (function (prev_props__28552__auto__,prev_state__28553__auto__){
var this__28544__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28544__auto__);
});})(x48305_48317))
;

x48305_48317.isMounted = ((function (x48305_48317){
return (function (){
var this__28544__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28544__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48305_48317))
;

x48305_48317.componentWillMount = ((function (x48305_48317){
return (function (){
var this__28544__auto__ = this;
var indexer__28554__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28544__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28554__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28554__auto__,this__28544__auto__);
}
});})(x48305_48317))
;

x48305_48317.render = ((function (x48305_48317){
return (function (){
var this__28543__auto__ = this;
var this$ = this__28543__auto__;
var _STAR_reconciler_STAR_48308 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48309 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48310 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48311 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48312 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28543__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28543__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28543__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28543__auto__);

om.next._STAR_parent_STAR_ = this__28543__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__48313 = lst;
var map__48313__$1 = ((((!((map__48313 == null)))?((((map__48313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48313):map__48313);
var lsts = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48312;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48311;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48310;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48309;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48308;
}});})(x48305_48317))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x48315_48321 = cloudxmark.core.Lsts;
x48315_48321.om$next$IQueryParams$ = true;

x48315_48321.om$next$IQueryParams$params$arity$1 = ((function (x48315_48321){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x48315_48321))
;

x48315_48321.om$next$IQuery$ = true;

x48315_48321.om$next$IQuery$query$arity$1 = ((function (x48315_48321){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x48315_48321))
;


var x48316_48322 = cloudxmark.core.Lsts.prototype;
x48316_48322.om$next$IQueryParams$ = true;

x48316_48322.om$next$IQueryParams$params$arity$1 = ((function (x48316_48322){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x48316_48322))
;

x48316_48322.om$next$IQuery$ = true;

x48316_48322.om$next$IQuery$query$arity$1 = ((function (x48316_48322){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x48316_48322))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28645__auto__,writer__28646__auto__,opt__28647__auto__){
return cljs.core._write.call(null,writer__28646__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__48331,cb){
var map__48332 = p__48331;
var map__48332__$1 = ((((!((map__48332 == null)))?((((map__48332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48332):map__48332);
var lst_search = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__48334 = om.next.query__GT_ast.call(null,lst_search);
var map__48334__$1 = ((((!((map__48334 == null)))?((((map__48334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48334):map__48334);
var vec__48335 = cljs.core.get.call(null,map__48334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__48335,(0),null);
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
var map__48343 = result;
var map__48343__$1 = ((((!((map__48343 == null)))?((((map__48343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48343):map__48343);
var lsts = cljs.core.get.call(null,map__48343__$1,"lsts");
var user_id = cljs.core.get.call(null,map__48343__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__48343__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__48344 = json_status;
var map__48344__$1 = ((((!((map__48344 == null)))?((((map__48344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48344):map__48344);
var info = cljs.core.get.call(null,map__48344__$1,"info");
var warn = cljs.core.get.call(null,map__48344__$1,"warn");
var error = cljs.core.get.call(null,map__48344__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__48349 = json_status;
var map__48349__$1 = ((((!((map__48349 == null)))?((((map__48349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48349):map__48349);
var info = cljs.core.get.call(null,map__48349__$1,"info");
var warn = cljs.core.get.call(null,map__48349__$1,"warn");
var error = cljs.core.get.call(null,map__48349__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28389__auto__ = ((function (c__28412__auto__){
return (function (state_49249){
var state_val_49250 = (state_49249[(1)]);
if((state_val_49250 === (65))){
var state_49249__$1 = state_49249;
var statearr_49251_49377 = state_49249__$1;
(statearr_49251_49377[(2)] = false);

(statearr_49251_49377[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (70))){
var inst_48882 = (state_49249[(7)]);
var inst_49132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49252_49378 = state_49249__$1;
(statearr_49252_49378[(2)] = inst_49132);

(statearr_49252_49378[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (62))){
var inst_48881 = (state_49249[(8)]);
var inst_49168 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_49249__$1 = state_49249;
if(inst_49168){
var statearr_49253_49379 = state_49249__$1;
(statearr_49253_49379[(1)] = (74));

} else {
var statearr_49254_49380 = state_49249__$1;
(statearr_49254_49380[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (74))){
var inst_48882 = (state_49249[(7)]);
var inst_49171 = [cljs.core.str("lst query data:"),cljs.core.str(inst_48882)].join('');
var inst_49172 = cljs.core.println.call(null,inst_49171);
var inst_49174 = (inst_48882 == null);
var inst_49175 = cljs.core.not.call(null,inst_49174);
var state_49249__$1 = (function (){var statearr_49255 = state_49249;
(statearr_49255[(9)] = inst_49172);

return statearr_49255;
})();
if(inst_49175){
var statearr_49256_49381 = state_49249__$1;
(statearr_49256_49381[(1)] = (77));

} else {
var statearr_49257_49382 = state_49249__$1;
(statearr_49257_49382[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (7))){
var inst_49242 = (state_49249[(2)]);
var state_49249__$1 = (function (){var statearr_49258 = state_49249;
(statearr_49258[(10)] = inst_49242);

return statearr_49258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(93),c);
} else {
if((state_val_49250 === (59))){
var inst_49084 = (state_49249[(2)]);
var inst_49085 = cljs.core.get.call(null,inst_49084,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_49086 = cljs.core.get.call(null,inst_49084,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_49087 = cljs.core.get.call(null,inst_49084,new cljs.core.Keyword(null,"value","value",305978217));
var inst_49088 = encodeURIComponent(inst_49085);
var inst_49089 = encodeURIComponent(inst_49086);
var inst_49090 = encodeURIComponent(inst_49087);
var inst_49091 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_49088),cljs.core.str("&name="),cljs.core.str(inst_49089),cljs.core.str("&value="),cljs.core.str(inst_49090)].join('');
var inst_49092 = cloudxmark.core.jsonp.call(null,inst_49091);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(60),inst_49092);
} else {
if((state_val_49250 === (86))){
var state_49249__$1 = state_49249;
var statearr_49259_49383 = state_49249__$1;
(statearr_49259_49383[(2)] = "");

(statearr_49259_49383[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (20))){
var inst_49240 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49260_49384 = state_49249__$1;
(statearr_49260_49384[(2)] = inst_49240);

(statearr_49260_49384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (72))){
var inst_49135 = (state_49249[(2)]);
var inst_49136 = cljs.core.get.call(null,inst_49135,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_49137 = cljs.core.get.call(null,inst_49135,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_49138 = cljs.core.get.call(null,inst_49135,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_49139 = cljs.core.get.call(null,inst_49135,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_49140 = cljs.core.get.call(null,inst_49135,new cljs.core.Keyword(null,"value","value",305978217));
var inst_49141 = encodeURIComponent(inst_49136);
var inst_49142 = encodeURIComponent(inst_49137);
var inst_49143 = encodeURIComponent(inst_49138);
var inst_49144 = encodeURIComponent(inst_49139);
var inst_49145 = encodeURIComponent(inst_49140);
var inst_49146 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_49141),cljs.core.str("&lst-name="),cljs.core.str(inst_49142),cljs.core.str("&orig-name="),cljs.core.str(inst_49143),cljs.core.str("&col-name="),cljs.core.str(inst_49144),cljs.core.str("&value="),cljs.core.str(inst_49145)].join('');
var inst_49147 = cloudxmark.core.jsonp.call(null,inst_49146);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(73),inst_49147);
} else {
if((state_val_49250 === (58))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49261_49385 = state_49249__$1;
(statearr_49261_49385[(2)] = inst_48882);

(statearr_49261_49385[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (60))){
var inst_49094 = (state_49249[(2)]);
var inst_49095 = cljs.core.js__GT_clj.call(null,inst_49094);
var inst_49096 = cloudxmark.core.convert_json_lsts_result.call(null,inst_49095,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_49097 = cljs.core.List.EMPTY;
var inst_49098 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_49099 = cljs.core._conj.call(null,inst_49097,inst_49098);
var inst_49100 = cljs.core.List.EMPTY;
var inst_49101 = cljs.core._conj.call(null,inst_49100,inst_49096);
var inst_49102 = cljs.core.concat.call(null,inst_49099,inst_49101);
var inst_49103 = cljs.core.seq.call(null,inst_49102);
var inst_49104 = cljs.core.sequence.call(null,inst_49103);
var inst_49105 = cljs.core.List.EMPTY;
var inst_49106 = cljs.core._conj.call(null,inst_49105,inst_49104);
var inst_49107 = cljs.core.concat.call(null,inst_49106);
var inst_49108 = cljs.core.seq.call(null,inst_49107);
var inst_49109 = cljs.core.sequence.call(null,inst_49108);
var inst_49110 = cljs.core.vec.call(null,inst_49109);
var inst_49111 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_49110);
var state_49249__$1 = state_49249;
var statearr_49262_49386 = state_49249__$1;
(statearr_49262_49386[(2)] = inst_49111);

(statearr_49262_49386[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (27))){
var inst_48882 = (state_49249[(7)]);
var inst_48958 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49263_49387 = state_49249__$1;
(statearr_49263_49387[(2)] = inst_48958);

(statearr_49263_49387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (1))){
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(2),c);
} else {
if((state_val_49250 === (69))){
var inst_49127 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49264_49388 = state_49249__$1;
(statearr_49264_49388[(2)] = inst_49127);

(statearr_49264_49388[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (24))){
var state_49249__$1 = state_49249;
var statearr_49265_49389 = state_49249__$1;
(statearr_49265_49389[(2)] = true);

(statearr_49265_49389[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (55))){
var state_49249__$1 = state_49249;
var statearr_49266_49390 = state_49249__$1;
(statearr_49266_49390[(2)] = false);

(statearr_49266_49390[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (85))){
var inst_49195 = (state_49249[(11)]);
var inst_49192 = (state_49249[(2)]);
var inst_49193 = cljs.core.get.call(null,inst_49192,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_49194 = cljs.core.get.call(null,inst_49192,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_49195__$1 = cljs.core.get.call(null,inst_49192,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_49196 = cljs.core.empty_QMARK_.call(null,inst_49195__$1);
var state_49249__$1 = (function (){var statearr_49267 = state_49249;
(statearr_49267[(11)] = inst_49195__$1);

(statearr_49267[(12)] = inst_49193);

(statearr_49267[(13)] = inst_49194);

return statearr_49267;
})();
if(inst_49196){
var statearr_49268_49391 = state_49249__$1;
(statearr_49268_49391[(1)] = (86));

} else {
var statearr_49269_49392 = state_49249__$1;
(statearr_49269_49392[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (39))){
var state_49249__$1 = state_49249;
var statearr_49270_49393 = state_49249__$1;
(statearr_49270_49393[(2)] = false);

(statearr_49270_49393[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (88))){
var inst_49202 = (state_49249[(2)]);
var inst_49203 = [cljs.core.str("/getItems?"),cljs.core.str(inst_49202)].join('');
var inst_49204 = cloudxmark.core.jsonp.call(null,inst_49203);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(89),inst_49204);
} else {
if((state_val_49250 === (46))){
var inst_49035 = (state_49249[(2)]);
var inst_49036 = cljs.core.get.call(null,inst_49035,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_49037 = cljs.core.get.call(null,inst_49035,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_49038 = encodeURIComponent(inst_49036);
var inst_49039 = encodeURIComponent(inst_49037);
var inst_49040 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_49038),cljs.core.str("&desc="),cljs.core.str(inst_49039)].join('');
var inst_49041 = cloudxmark.core.jsonp.call(null,inst_49040);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(47),inst_49041);
} else {
if((state_val_49250 === (4))){
var inst_49247 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49249__$1,inst_49247);
} else {
if((state_val_49250 === (77))){
var inst_48882 = (state_49249[(7)]);
var inst_49177 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_49178 = (inst_49177 & (64));
var inst_49179 = inst_48882.cljs$core$ISeq$;
var inst_49180 = (inst_49178) || (inst_49179);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49180)){
var statearr_49271_49394 = state_49249__$1;
(statearr_49271_49394[(1)] = (80));

} else {
var statearr_49272_49395 = state_49249__$1;
(statearr_49272_49395[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (54))){
var state_49249__$1 = state_49249;
var statearr_49273_49396 = state_49249__$1;
(statearr_49273_49396[(2)] = true);

(statearr_49273_49396[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (92))){
var inst_49228 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49274_49397 = state_49249__$1;
(statearr_49274_49397[(2)] = inst_49228);

(statearr_49274_49397[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (15))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49275_49398 = state_49249__$1;
(statearr_49275_49398[(2)] = inst_48882);

(statearr_49275_49398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (48))){
var inst_48882 = (state_49249[(7)]);
var inst_49066 = (inst_48882 == null);
var inst_49067 = cljs.core.not.call(null,inst_49066);
var state_49249__$1 = state_49249;
if(inst_49067){
var statearr_49276_49399 = state_49249__$1;
(statearr_49276_49399[(1)] = (51));

} else {
var statearr_49277_49400 = state_49249__$1;
(statearr_49277_49400[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (50))){
var inst_49234 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49278_49401 = state_49249__$1;
(statearr_49278_49401[(2)] = inst_49234);

(statearr_49278_49401[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (75))){
var state_49249__$1 = state_49249;
var statearr_49279_49402 = state_49249__$1;
(statearr_49279_49402[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (21))){
var inst_48882 = (state_49249[(7)]);
var inst_48946 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_48947 = (inst_48946 & (64));
var inst_48948 = inst_48882.cljs$core$ISeq$;
var inst_48949 = (inst_48947) || (inst_48948);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_48949)){
var statearr_49281_49403 = state_49249__$1;
(statearr_49281_49403[(1)] = (24));

} else {
var statearr_49282_49404 = state_49249__$1;
(statearr_49282_49404[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (31))){
var inst_48992 = cloudxmark.core.jsonp.call(null,"/logout");
var state_49249__$1 = state_49249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(34),inst_48992);
} else {
if((state_val_49250 === (32))){
var inst_48881 = (state_49249[(8)]);
var inst_49013 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_49249__$1 = state_49249;
if(inst_49013){
var statearr_49283_49405 = state_49249__$1;
(statearr_49283_49405[(1)] = (35));

} else {
var statearr_49284_49406 = state_49249__$1;
(statearr_49284_49406[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (40))){
var inst_49030 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49030)){
var statearr_49285_49407 = state_49249__$1;
(statearr_49285_49407[(1)] = (44));

} else {
var statearr_49286_49408 = state_49249__$1;
(statearr_49286_49408[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (91))){
var state_49249__$1 = state_49249;
var statearr_49287_49409 = state_49249__$1;
(statearr_49287_49409[(2)] = null);

(statearr_49287_49409[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (56))){
var inst_49076 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49288_49410 = state_49249__$1;
(statearr_49288_49410[(2)] = inst_49076);

(statearr_49288_49410[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (33))){
var inst_49238 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49289_49411 = state_49249__$1;
(statearr_49289_49411[(2)] = inst_49238);

(statearr_49289_49411[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (13))){
var inst_48900 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49290_49412 = state_49249__$1;
(statearr_49290_49412[(2)] = inst_48900);

(statearr_49290_49412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (22))){
var state_49249__$1 = state_49249;
var statearr_49291_49413 = state_49249__$1;
(statearr_49291_49413[(2)] = false);

(statearr_49291_49413[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (90))){
var state_49249__$1 = state_49249;
var statearr_49292_49414 = state_49249__$1;
(statearr_49292_49414[(2)] = null);

(statearr_49292_49414[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (36))){
var inst_48881 = (state_49249[(8)]);
var inst_49062 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_49249__$1 = state_49249;
if(inst_49062){
var statearr_49293_49415 = state_49249__$1;
(statearr_49293_49415[(1)] = (48));

} else {
var statearr_49294_49416 = state_49249__$1;
(statearr_49294_49416[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (41))){
var state_49249__$1 = state_49249;
var statearr_49295_49417 = state_49249__$1;
(statearr_49295_49417[(2)] = true);

(statearr_49295_49417[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (89))){
var inst_49194 = (state_49249[(13)]);
var inst_49206 = (state_49249[(2)]);
var inst_49207 = cljs.core.js__GT_clj.call(null,inst_49206);
var inst_49208 = cloudxmark.core.convert_json_lsts_result.call(null,inst_49207,inst_49194,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_49209 = cljs.core.List.EMPTY;
var inst_49210 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_49211 = cljs.core._conj.call(null,inst_49209,inst_49210);
var inst_49212 = cljs.core.List.EMPTY;
var inst_49213 = cljs.core._conj.call(null,inst_49212,inst_49208);
var inst_49214 = cljs.core.concat.call(null,inst_49211,inst_49213);
var inst_49215 = cljs.core.seq.call(null,inst_49214);
var inst_49216 = cljs.core.sequence.call(null,inst_49215);
var inst_49217 = cljs.core.List.EMPTY;
var inst_49218 = cljs.core._conj.call(null,inst_49217,inst_49216);
var inst_49219 = cljs.core.concat.call(null,inst_49218);
var inst_49220 = cljs.core.seq.call(null,inst_49219);
var inst_49221 = cljs.core.sequence.call(null,inst_49220);
var inst_49222 = cljs.core.vec.call(null,inst_49221);
var inst_49223 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_49222);
var state_49249__$1 = state_49249;
var statearr_49296_49418 = state_49249__$1;
(statearr_49296_49418[(2)] = inst_49223);

(statearr_49296_49418[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (43))){
var inst_49027 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49297_49419 = state_49249__$1;
(statearr_49297_49419[(2)] = inst_49027);

(statearr_49297_49419[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (61))){
var inst_48882 = (state_49249[(7)]);
var inst_49117 = (inst_48882 == null);
var inst_49118 = cljs.core.not.call(null,inst_49117);
var state_49249__$1 = state_49249;
if(inst_49118){
var statearr_49298_49420 = state_49249__$1;
(statearr_49298_49420[(1)] = (64));

} else {
var statearr_49299_49421 = state_49249__$1;
(statearr_49299_49421[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (29))){
var inst_48961 = (state_49249[(2)]);
var inst_48962 = cljs.core.get.call(null,inst_48961,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_48963 = cljs.core.get.call(null,inst_48961,new cljs.core.Keyword(null,"password","password",417022471));
var inst_48964 = cljs.core.get.call(null,inst_48961,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_48965 = cloudxmark.core.enc_password.call(null,inst_48963);
var inst_48966 = encodeURIComponent(inst_48962);
var inst_48967 = encodeURIComponent(inst_48965);
var inst_48968 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_48966),cljs.core.str("&pass="),cljs.core.str(inst_48967)].join('');
var inst_48969 = cloudxmark.core.jsonp.call(null,inst_48968);
var state_49249__$1 = (function (){var statearr_49300 = state_49249;
(statearr_49300[(14)] = inst_48964);

return statearr_49300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(30),inst_48969);
} else {
if((state_val_49250 === (44))){
var inst_48882 = (state_49249[(7)]);
var inst_49032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49301_49422 = state_49249__$1;
(statearr_49301_49422[(2)] = inst_49032);

(statearr_49301_49422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (93))){
var inst_49244 = (state_49249[(2)]);
var inst_48876 = inst_49244;
var state_49249__$1 = (function (){var statearr_49302 = state_49249;
(statearr_49302[(15)] = inst_48876);

return statearr_49302;
})();
var statearr_49303_49423 = state_49249__$1;
(statearr_49303_49423[(2)] = null);

(statearr_49303_49423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (6))){
var inst_48881 = (state_49249[(8)]);
var inst_48939 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_49249__$1 = state_49249;
if(inst_48939){
var statearr_49304_49424 = state_49249__$1;
(statearr_49304_49424[(1)] = (18));

} else {
var statearr_49305_49425 = state_49249__$1;
(statearr_49305_49425[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (28))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49306_49426 = state_49249__$1;
(statearr_49306_49426[(2)] = inst_48882);

(statearr_49306_49426[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (64))){
var inst_48882 = (state_49249[(7)]);
var inst_49120 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_49121 = (inst_49120 & (64));
var inst_49122 = inst_48882.cljs$core$ISeq$;
var inst_49123 = (inst_49121) || (inst_49122);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49123)){
var statearr_49307_49427 = state_49249__$1;
(statearr_49307_49427[(1)] = (67));

} else {
var statearr_49308_49428 = state_49249__$1;
(statearr_49308_49428[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (51))){
var inst_48882 = (state_49249[(7)]);
var inst_49069 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_49070 = (inst_49069 & (64));
var inst_49071 = inst_48882.cljs$core$ISeq$;
var inst_49072 = (inst_49070) || (inst_49071);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49072)){
var statearr_49309_49429 = state_49249__$1;
(statearr_49309_49429[(1)] = (54));

} else {
var statearr_49310_49430 = state_49249__$1;
(statearr_49310_49430[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (25))){
var state_49249__$1 = state_49249;
var statearr_49311_49431 = state_49249__$1;
(statearr_49311_49431[(2)] = false);

(statearr_49311_49431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (34))){
var inst_48994 = (state_49249[(2)]);
var inst_48995 = cljs.core.js__GT_clj.call(null,inst_48994);
var inst_48996 = cloudxmark.core.convert_json_status.call(null,inst_48995,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_48997 = cljs.core.List.EMPTY;
var inst_48998 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_48999 = cljs.core._conj.call(null,inst_48997,inst_48998);
var inst_49000 = cljs.core.List.EMPTY;
var inst_49001 = cljs.core._conj.call(null,inst_49000,inst_48996);
var inst_49002 = cljs.core.concat.call(null,inst_48999,inst_49001);
var inst_49003 = cljs.core.seq.call(null,inst_49002);
var inst_49004 = cljs.core.sequence.call(null,inst_49003);
var inst_49005 = cljs.core.List.EMPTY;
var inst_49006 = cljs.core._conj.call(null,inst_49005,inst_49004);
var inst_49007 = cljs.core.concat.call(null,inst_49006);
var inst_49008 = cljs.core.seq.call(null,inst_49007);
var inst_49009 = cljs.core.sequence.call(null,inst_49008);
var inst_49010 = cljs.core.vec.call(null,inst_49009);
var inst_49011 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_49010);
var state_49249__$1 = state_49249;
var statearr_49312_49432 = state_49249__$1;
(statearr_49312_49432[(2)] = inst_49011);

(statearr_49312_49432[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (17))){
var inst_48911 = (state_49249[(16)]);
var inst_48910 = (state_49249[(17)]);
var inst_48917 = (state_49249[(2)]);
var inst_48918 = cljs.core.js__GT_clj.call(null,inst_48917);
var inst_48919 = cloudxmark.core.gen_key_bytes.call(null,inst_48910);
var inst_48920 = cloudxmark.core.create_aes_cbc.call(null,inst_48919);
var inst_48921 = cloudxmark.core.convert_json_lsts_result.call(null,inst_48918,inst_48911,new cljs.core.Keyword(null,"login","login",55217519));
var inst_48922 = cljs.core.assoc.call(null,inst_48921,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_48920);
var inst_48923 = cljs.core.List.EMPTY;
var inst_48924 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_48925 = cljs.core._conj.call(null,inst_48923,inst_48924);
var inst_48926 = cljs.core.List.EMPTY;
var inst_48927 = cljs.core._conj.call(null,inst_48926,inst_48922);
var inst_48928 = cljs.core.concat.call(null,inst_48925,inst_48927);
var inst_48929 = cljs.core.seq.call(null,inst_48928);
var inst_48930 = cljs.core.sequence.call(null,inst_48929);
var inst_48931 = cljs.core.List.EMPTY;
var inst_48932 = cljs.core._conj.call(null,inst_48931,inst_48930);
var inst_48933 = cljs.core.concat.call(null,inst_48932);
var inst_48934 = cljs.core.seq.call(null,inst_48933);
var inst_48935 = cljs.core.sequence.call(null,inst_48934);
var inst_48936 = cljs.core.vec.call(null,inst_48935);
var inst_48937 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_48936);
var state_49249__$1 = state_49249;
var statearr_49313_49433 = state_49249__$1;
(statearr_49313_49433[(2)] = inst_48937);

(statearr_49313_49433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (3))){
var inst_48881 = (state_49249[(8)]);
var inst_48876 = (state_49249[(15)]);
var inst_48881__$1 = cljs.core.nth.call(null,inst_48876,(0),null);
var inst_48882 = cljs.core.nth.call(null,inst_48876,(1),null);
var inst_48883 = cljs.core.nth.call(null,inst_48876,(2),null);
var inst_48884 = cljs.core._EQ_.call(null,inst_48881__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_49249__$1 = (function (){var statearr_49314 = state_49249;
(statearr_49314[(7)] = inst_48882);

(statearr_49314[(18)] = inst_48883);

(statearr_49314[(8)] = inst_48881__$1);

return statearr_49314;
})();
if(inst_48884){
var statearr_49315_49434 = state_49249__$1;
(statearr_49315_49434[(1)] = (5));

} else {
var statearr_49316_49435 = state_49249__$1;
(statearr_49316_49435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (12))){
var state_49249__$1 = state_49249;
var statearr_49317_49436 = state_49249__$1;
(statearr_49317_49436[(2)] = false);

(statearr_49317_49436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (2))){
var inst_48872 = (state_49249[(2)]);
var inst_48873 = cljs.core.nth.call(null,inst_48872,(0),null);
var inst_48874 = cljs.core.nth.call(null,inst_48872,(1),null);
var inst_48875 = cljs.core.nth.call(null,inst_48872,(2),null);
var inst_48876 = inst_48872;
var state_49249__$1 = (function (){var statearr_49318 = state_49249;
(statearr_49318[(19)] = inst_48874);

(statearr_49318[(15)] = inst_48876);

(statearr_49318[(20)] = inst_48875);

(statearr_49318[(21)] = inst_48873);

return statearr_49318;
})();
var statearr_49319_49437 = state_49249__$1;
(statearr_49319_49437[(2)] = null);

(statearr_49319_49437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (66))){
var inst_49130 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49130)){
var statearr_49320_49438 = state_49249__$1;
(statearr_49320_49438[(1)] = (70));

} else {
var statearr_49321_49439 = state_49249__$1;
(statearr_49321_49439[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (23))){
var inst_48956 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_48956)){
var statearr_49322_49440 = state_49249__$1;
(statearr_49322_49440[(1)] = (27));

} else {
var statearr_49323_49441 = state_49249__$1;
(statearr_49323_49441[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (47))){
var inst_49043 = (state_49249[(2)]);
var inst_49044 = cljs.core.js__GT_clj.call(null,inst_49043);
var inst_49045 = cloudxmark.core.convert_json_lsts_result.call(null,inst_49044,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_49046 = cljs.core.List.EMPTY;
var inst_49047 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_49048 = cljs.core._conj.call(null,inst_49046,inst_49047);
var inst_49049 = cljs.core.List.EMPTY;
var inst_49050 = cljs.core._conj.call(null,inst_49049,inst_49045);
var inst_49051 = cljs.core.concat.call(null,inst_49048,inst_49050);
var inst_49052 = cljs.core.seq.call(null,inst_49051);
var inst_49053 = cljs.core.sequence.call(null,inst_49052);
var inst_49054 = cljs.core.List.EMPTY;
var inst_49055 = cljs.core._conj.call(null,inst_49054,inst_49053);
var inst_49056 = cljs.core.concat.call(null,inst_49055);
var inst_49057 = cljs.core.seq.call(null,inst_49056);
var inst_49058 = cljs.core.sequence.call(null,inst_49057);
var inst_49059 = cljs.core.vec.call(null,inst_49058);
var inst_49060 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_49059);
var state_49249__$1 = state_49249;
var statearr_49324_49442 = state_49249__$1;
(statearr_49324_49442[(2)] = inst_49060);

(statearr_49324_49442[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (35))){
var inst_48882 = (state_49249[(7)]);
var inst_49017 = (inst_48882 == null);
var inst_49018 = cljs.core.not.call(null,inst_49017);
var state_49249__$1 = state_49249;
if(inst_49018){
var statearr_49325_49443 = state_49249__$1;
(statearr_49325_49443[(1)] = (38));

} else {
var statearr_49326_49444 = state_49249__$1;
(statearr_49326_49444[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (82))){
var inst_49184 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49327_49445 = state_49249__$1;
(statearr_49327_49445[(2)] = inst_49184);

(statearr_49327_49445[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (76))){
var inst_49230 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49328_49446 = state_49249__$1;
(statearr_49328_49446[(2)] = inst_49230);

(statearr_49328_49446[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (19))){
var inst_48881 = (state_49249[(8)]);
var inst_48990 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_49249__$1 = state_49249;
if(inst_48990){
var statearr_49329_49447 = state_49249__$1;
(statearr_49329_49447[(1)] = (31));

} else {
var statearr_49330_49448 = state_49249__$1;
(statearr_49330_49448[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (57))){
var inst_48882 = (state_49249[(7)]);
var inst_49081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49331_49449 = state_49249__$1;
(statearr_49331_49449[(2)] = inst_49081);

(statearr_49331_49449[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (68))){
var state_49249__$1 = state_49249;
var statearr_49332_49450 = state_49249__$1;
(statearr_49332_49450[(2)] = false);

(statearr_49332_49450[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (11))){
var state_49249__$1 = state_49249;
var statearr_49333_49451 = state_49249__$1;
(statearr_49333_49451[(2)] = true);

(statearr_49333_49451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (9))){
var state_49249__$1 = state_49249;
var statearr_49334_49452 = state_49249__$1;
(statearr_49334_49452[(2)] = false);

(statearr_49334_49452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (5))){
var inst_48882 = (state_49249[(7)]);
var inst_48887 = [cljs.core.str("lst login data:"),cljs.core.str(inst_48882)].join('');
var inst_48888 = cljs.core.println.call(null,inst_48887);
var inst_48890 = (inst_48882 == null);
var inst_48891 = cljs.core.not.call(null,inst_48890);
var state_49249__$1 = (function (){var statearr_49335 = state_49249;
(statearr_49335[(22)] = inst_48888);

return statearr_49335;
})();
if(inst_48891){
var statearr_49336_49453 = state_49249__$1;
(statearr_49336_49453[(1)] = (8));

} else {
var statearr_49337_49454 = state_49249__$1;
(statearr_49337_49454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (83))){
var inst_48882 = (state_49249[(7)]);
var inst_49189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49338_49455 = state_49249__$1;
(statearr_49338_49455[(2)] = inst_49189);

(statearr_49338_49455[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (14))){
var inst_48882 = (state_49249[(7)]);
var inst_48905 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48882);
var state_49249__$1 = state_49249;
var statearr_49339_49456 = state_49249__$1;
(statearr_49339_49456[(2)] = inst_48905);

(statearr_49339_49456[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (45))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49340_49457 = state_49249__$1;
(statearr_49340_49457[(2)] = inst_48882);

(statearr_49340_49457[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (53))){
var inst_49079 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49079)){
var statearr_49341_49458 = state_49249__$1;
(statearr_49341_49458[(1)] = (57));

} else {
var statearr_49342_49459 = state_49249__$1;
(statearr_49342_49459[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (78))){
var state_49249__$1 = state_49249;
var statearr_49343_49460 = state_49249__$1;
(statearr_49343_49460[(2)] = false);

(statearr_49343_49460[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (26))){
var inst_48953 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49344_49461 = state_49249__$1;
(statearr_49344_49461[(2)] = inst_48953);

(statearr_49344_49461[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (16))){
var inst_48910 = (state_49249[(17)]);
var inst_48908 = (state_49249[(2)]);
var inst_48909 = cljs.core.get.call(null,inst_48908,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_48910__$1 = cljs.core.get.call(null,inst_48908,new cljs.core.Keyword(null,"password","password",417022471));
var inst_48911 = cljs.core.get.call(null,inst_48908,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_48912 = encodeURIComponent(inst_48909);
var inst_48913 = encodeURIComponent(inst_48910__$1);
var inst_48914 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_48912),cljs.core.str("&pass="),cljs.core.str(inst_48913)].join('');
var inst_48915 = cloudxmark.core.jsonp.call(null,inst_48914);
var state_49249__$1 = (function (){var statearr_49345 = state_49249;
(statearr_49345[(16)] = inst_48911);

(statearr_49345[(17)] = inst_48910__$1);

return statearr_49345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49249__$1,(17),inst_48915);
} else {
if((state_val_49250 === (81))){
var state_49249__$1 = state_49249;
var statearr_49346_49462 = state_49249__$1;
(statearr_49346_49462[(2)] = false);

(statearr_49346_49462[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (79))){
var inst_49187 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49187)){
var statearr_49347_49463 = state_49249__$1;
(statearr_49347_49463[(1)] = (83));

} else {
var statearr_49348_49464 = state_49249__$1;
(statearr_49348_49464[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (38))){
var inst_48882 = (state_49249[(7)]);
var inst_49020 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_49021 = (inst_49020 & (64));
var inst_49022 = inst_48882.cljs$core$ISeq$;
var inst_49023 = (inst_49021) || (inst_49022);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_49023)){
var statearr_49349_49465 = state_49249__$1;
(statearr_49349_49465[(1)] = (41));

} else {
var statearr_49350_49466 = state_49249__$1;
(statearr_49350_49466[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (87))){
var inst_49195 = (state_49249[(11)]);
var inst_49199 = encodeURIComponent(inst_49195);
var inst_49200 = [cljs.core.str("query="),cljs.core.str(inst_49199)].join('');
var state_49249__$1 = state_49249;
var statearr_49351_49467 = state_49249__$1;
(statearr_49351_49467[(2)] = inst_49200);

(statearr_49351_49467[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (30))){
var inst_48971 = (state_49249[(2)]);
var inst_48972 = cljs.core.js__GT_clj.call(null,inst_48971);
var inst_48973 = cloudxmark.core.convert_json_status.call(null,inst_48972,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_48974 = cljs.core.List.EMPTY;
var inst_48975 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_48976 = cljs.core._conj.call(null,inst_48974,inst_48975);
var inst_48977 = cljs.core.List.EMPTY;
var inst_48978 = cljs.core._conj.call(null,inst_48977,inst_48973);
var inst_48979 = cljs.core.concat.call(null,inst_48976,inst_48978);
var inst_48980 = cljs.core.seq.call(null,inst_48979);
var inst_48981 = cljs.core.sequence.call(null,inst_48980);
var inst_48982 = cljs.core.List.EMPTY;
var inst_48983 = cljs.core._conj.call(null,inst_48982,inst_48981);
var inst_48984 = cljs.core.concat.call(null,inst_48983);
var inst_48985 = cljs.core.seq.call(null,inst_48984);
var inst_48986 = cljs.core.sequence.call(null,inst_48985);
var inst_48987 = cljs.core.vec.call(null,inst_48986);
var inst_48988 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_48987);
var state_49249__$1 = state_49249;
var statearr_49352_49468 = state_49249__$1;
(statearr_49352_49468[(2)] = inst_48988);

(statearr_49352_49468[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (73))){
var inst_49149 = (state_49249[(2)]);
var inst_49150 = cljs.core.js__GT_clj.call(null,inst_49149);
var inst_49151 = cloudxmark.core.convert_json_lsts_result.call(null,inst_49150,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_49152 = cljs.core.List.EMPTY;
var inst_49153 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_49154 = cljs.core._conj.call(null,inst_49152,inst_49153);
var inst_49155 = cljs.core.List.EMPTY;
var inst_49156 = cljs.core._conj.call(null,inst_49155,inst_49151);
var inst_49157 = cljs.core.concat.call(null,inst_49154,inst_49156);
var inst_49158 = cljs.core.seq.call(null,inst_49157);
var inst_49159 = cljs.core.sequence.call(null,inst_49158);
var inst_49160 = cljs.core.List.EMPTY;
var inst_49161 = cljs.core._conj.call(null,inst_49160,inst_49159);
var inst_49162 = cljs.core.concat.call(null,inst_49161);
var inst_49163 = cljs.core.seq.call(null,inst_49162);
var inst_49164 = cljs.core.sequence.call(null,inst_49163);
var inst_49165 = cljs.core.vec.call(null,inst_49164);
var inst_49166 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_49165);
var state_49249__$1 = state_49249;
var statearr_49353_49469 = state_49249__$1;
(statearr_49353_49469[(2)] = inst_49166);

(statearr_49353_49469[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (10))){
var inst_48903 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_48903)){
var statearr_49354_49470 = state_49249__$1;
(statearr_49354_49470[(1)] = (14));

} else {
var statearr_49355_49471 = state_49249__$1;
(statearr_49355_49471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (18))){
var inst_48882 = (state_49249[(7)]);
var inst_48943 = (inst_48882 == null);
var inst_48944 = cljs.core.not.call(null,inst_48943);
var state_49249__$1 = state_49249;
if(inst_48944){
var statearr_49356_49472 = state_49249__$1;
(statearr_49356_49472[(1)] = (21));

} else {
var statearr_49357_49473 = state_49249__$1;
(statearr_49357_49473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (52))){
var state_49249__$1 = state_49249;
var statearr_49358_49474 = state_49249__$1;
(statearr_49358_49474[(2)] = false);

(statearr_49358_49474[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (67))){
var state_49249__$1 = state_49249;
var statearr_49359_49475 = state_49249__$1;
(statearr_49359_49475[(2)] = true);

(statearr_49359_49475[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (71))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49360_49476 = state_49249__$1;
(statearr_49360_49476[(2)] = inst_48882);

(statearr_49360_49476[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (42))){
var state_49249__$1 = state_49249;
var statearr_49361_49477 = state_49249__$1;
(statearr_49361_49477[(2)] = false);

(statearr_49361_49477[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (80))){
var state_49249__$1 = state_49249;
var statearr_49362_49478 = state_49249__$1;
(statearr_49362_49478[(2)] = true);

(statearr_49362_49478[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (37))){
var inst_49236 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49363_49479 = state_49249__$1;
(statearr_49363_49479[(2)] = inst_49236);

(statearr_49363_49479[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (63))){
var inst_49232 = (state_49249[(2)]);
var state_49249__$1 = state_49249;
var statearr_49364_49480 = state_49249__$1;
(statearr_49364_49480[(2)] = inst_49232);

(statearr_49364_49480[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (8))){
var inst_48882 = (state_49249[(7)]);
var inst_48893 = inst_48882.cljs$lang$protocol_mask$partition0$;
var inst_48894 = (inst_48893 & (64));
var inst_48895 = inst_48882.cljs$core$ISeq$;
var inst_48896 = (inst_48894) || (inst_48895);
var state_49249__$1 = state_49249;
if(cljs.core.truth_(inst_48896)){
var statearr_49365_49481 = state_49249__$1;
(statearr_49365_49481[(1)] = (11));

} else {
var statearr_49366_49482 = state_49249__$1;
(statearr_49366_49482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (49))){
var inst_48881 = (state_49249[(8)]);
var inst_49113 = cljs.core._EQ_.call(null,inst_48881,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_49249__$1 = state_49249;
if(inst_49113){
var statearr_49367_49483 = state_49249__$1;
(statearr_49367_49483[(1)] = (61));

} else {
var statearr_49368_49484 = state_49249__$1;
(statearr_49368_49484[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49250 === (84))){
var inst_48882 = (state_49249[(7)]);
var state_49249__$1 = state_49249;
var statearr_49369_49485 = state_49249__$1;
(statearr_49369_49485[(2)] = inst_48882);

(statearr_49369_49485[(1)] = (85));


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
var statearr_49373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49373[(0)] = cloudxmark$core$search_loop_$_state_machine__28390__auto__);

(statearr_49373[(1)] = (1));

return statearr_49373;
});
var cloudxmark$core$search_loop_$_state_machine__28390__auto____1 = (function (state_49249){
while(true){
var ret_value__28391__auto__ = (function (){try{while(true){
var result__28392__auto__ = switch__28389__auto__.call(null,state_49249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28392__auto__;
}
break;
}
}catch (e49374){if((e49374 instanceof Object)){
var ex__28393__auto__ = e49374;
var statearr_49375_49486 = state_49249;
(statearr_49375_49486[(5)] = ex__28393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49487 = state_49249;
state_49249 = G__49487;
continue;
} else {
return ret_value__28391__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28390__auto__ = function(state_49249){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28390__auto____1.call(this,state_49249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28390__auto____0;
cloudxmark$core$search_loop_$_state_machine__28390__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28390__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28390__auto__;
})()
;})(switch__28389__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_49376 = f__28413__auto__.call(null);
(statearr_49376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_49376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471209305341