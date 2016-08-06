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
var idx_35031 = (0);
while(true){
var len1_35032 = b1.length;
if((cljs.core._EQ_.call(null,idx_35031,len1_35032)) || (cljs.core._EQ_.call(null,idx_35031,max_len))){
} else {
(b1[idx_35031] = ((b1[idx_35031]) ^ (b2[idx_35031])));

var G__35033 = (idx_35031 + (1));
idx_35031 = G__35033;
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
var args35036 = [];
var len__22551__auto___35039 = arguments.length;
var i__22552__auto___35040 = (0);
while(true){
if((i__22552__auto___35040 < len__22551__auto___35039)){
args35036.push((arguments[i__22552__auto___35040]));

var G__35041 = (i__22552__auto___35040 + (1));
i__22552__auto___35040 = G__35041;
continue;
} else {
}
break;
}

var G__35038 = args35036.length;
switch (G__35038) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35036.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__35034_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35034_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__35035_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__35035_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__35043,_,p__35044){
var map__35045 = p__35043;
var map__35045__$1 = ((((!((map__35045 == null)))?((((map__35045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35045):map__35045);
var env = map__35045__$1;
var state = cljs.core.get.call(null,map__35045__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__35045__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__35046 = p__35044;
var map__35046__$1 = ((((!((map__35046 == null)))?((((map__35046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35046):map__35046);
var query_ver = cljs.core.get.call(null,map__35046__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__35046__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__35049 = lst;
var map__35049__$1 = ((((!((map__35049 == null)))?((((map__35049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35049):map__35049);
var lsts = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_35051 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_35051);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__35052,_,p__35053){
var map__35054 = p__35052;
var map__35054__$1 = ((((!((map__35054 == null)))?((((map__35054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35054):map__35054);
var env = map__35054__$1;
var state = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35055 = p__35053;
var map__35055__$1 = ((((!((map__35055 == null)))?((((map__35055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055):map__35055);
var status = map__35055__$1;
var id = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35054,map__35054__$1,env,state,map__35055,map__35055__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__35054,map__35054__$1,env,state,map__35055,map__35055__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__35058,_,p__35059){
var map__35060 = p__35058;
var map__35060__$1 = ((((!((map__35060 == null)))?((((map__35060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var env = map__35060__$1;
var state = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35061 = p__35059;
var map__35061__$1 = ((((!((map__35061 == null)))?((((map__35061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35061):map__35061);
var path = cljs.core.get.call(null,map__35061__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__35061__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__35061__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35060,map__35060__$1,env,state,map__35061,map__35061__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__35060,map__35060__$1,env,state,map__35061,map__35061__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__35064,_,p__35065){
var map__35066 = p__35064;
var map__35066__$1 = ((((!((map__35066 == null)))?((((map__35066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35066):map__35066);
var env = map__35066__$1;
var state = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35067 = p__35065;
var map__35067__$1 = ((((!((map__35067 == null)))?((((map__35067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35067):map__35067);
var data_map = map__35067__$1;
var lst_name = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__35067__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35066,map__35066__$1,env,state,map__35067,map__35067__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__35066,map__35066__$1,env,state,map__35067,map__35067__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__35070,_,p__35071){
var map__35072 = p__35070;
var map__35072__$1 = ((((!((map__35072 == null)))?((((map__35072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35072):map__35072);
var env = map__35072__$1;
var state = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35073 = p__35071;
var map__35073__$1 = ((((!((map__35073 == null)))?((((map__35073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35073):map__35073);
var field_id = cljs.core.get.call(null,map__35073__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__35073__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35072,map__35072__$1,env,state,map__35073,map__35073__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__35072,map__35072__$1,env,state,map__35073,map__35073__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__35076,_,p__35077){
var map__35078 = p__35076;
var map__35078__$1 = ((((!((map__35078 == null)))?((((map__35078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35078):map__35078);
var env = map__35078__$1;
var state = cljs.core.get.call(null,map__35078__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35079 = p__35077;
var map__35079__$1 = ((((!((map__35079 == null)))?((((map__35079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35079):map__35079);
var data_map = map__35079__$1;
var user_id = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35078,map__35078__$1,env,state,map__35079,map__35079__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__35078,map__35078__$1,env,state,map__35079,map__35079__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__35082,_,p__35083){
var map__35084 = p__35082;
var map__35084__$1 = ((((!((map__35084 == null)))?((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var env = map__35084__$1;
var state = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35085 = p__35083;
var map__35085__$1 = ((((!((map__35085 == null)))?((((map__35085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35085):map__35085);
var data_map = map__35085__$1;
var user_id = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35084,map__35084__$1,env,state,map__35085,map__35085__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__35084,map__35084__$1,env,state,map__35085,map__35085__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__35088,_,p__35089){
var map__35090 = p__35088;
var map__35090__$1 = ((((!((map__35090 == null)))?((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35090):map__35090);
var env = map__35090__$1;
var state = cljs.core.get.call(null,map__35090__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35091 = p__35089;
var map__35091__$1 = ((((!((map__35091 == null)))?((((map__35091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35091):map__35091);
var data_map = map__35091__$1;
var type = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35090,map__35090__$1,env,state,map__35091,map__35091__$1,data_map,type,fields){
return (function (){
return null;
});})(map__35090,map__35090__$1,env,state,map__35091,map__35091__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__35094,_,p__35095){
var map__35096 = p__35094;
var map__35096__$1 = ((((!((map__35096 == null)))?((((map__35096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35096):map__35096);
var env = map__35096__$1;
var state = cljs.core.get.call(null,map__35096__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35097 = p__35095;
var map__35097__$1 = ((((!((map__35097 == null)))?((((map__35097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35097):map__35097);
var data_map = map__35097__$1;
var name = cljs.core.get.call(null,map__35097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__35097__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35096,map__35096__$1,env,state,map__35097,map__35097__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__35096,map__35096__$1,env,state,map__35097,map__35097__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__35100,_,p__35101){
var map__35102 = p__35100;
var map__35102__$1 = ((((!((map__35102 == null)))?((((map__35102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35102):map__35102);
var env = map__35102__$1;
var state = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35103 = p__35101;
var map__35103__$1 = ((((!((map__35103 == null)))?((((map__35103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35103):map__35103);
var data_map = map__35103__$1;
var name = cljs.core.get.call(null,map__35103__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__35103__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35102,map__35102__$1,env,state,map__35103,map__35103__$1,data_map,name,value){
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
});})(map__35102,map__35102__$1,env,state,map__35103,map__35103__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__35106,_,___$1){
var map__35107 = p__35106;
var map__35107__$1 = ((((!((map__35107 == null)))?((((map__35107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35107):map__35107);
var env = map__35107__$1;
var state = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35107,map__35107__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__35107,map__35107__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__35109,_,p__35110){
var map__35111 = p__35109;
var map__35111__$1 = ((((!((map__35111 == null)))?((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var env = map__35111__$1;
var state = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35112 = p__35110;
var map__35112__$1 = ((((!((map__35112 == null)))?((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var data_map = map__35112__$1;
var status = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35111,map__35111__$1,env,state,map__35112,map__35112__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__35111,map__35111__$1,env,state,map__35112,map__35112__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args35115 = [];
var len__22551__auto___35118 = arguments.length;
var i__22552__auto___35119 = (0);
while(true){
if((i__22552__auto___35119 < len__22551__auto___35118)){
args35115.push((arguments[i__22552__auto___35119]));

var G__35120 = (i__22552__auto___35119 + (1));
i__22552__auto___35119 = G__35120;
continue;
} else {
}
break;
}

var G__35117 = args35115.length;
switch (G__35117) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35115.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__35122){
var map__35128 = p__35122;
var map__35128__$1 = ((((!((map__35128 == null)))?((((map__35128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35128):map__35128);
var info = cljs.core.get.call(null,map__35128__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__35128__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__35128__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__35130 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__35130,(0),null);
var msg = cljs.core.nth.call(null,vec__35130,(1),null);
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
var map__35135 = lst;
var map__35135__$1 = ((((!((map__35135 == null)))?((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35135):map__35135);
var lsts = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__35135,map__35135__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__35135,map__35135__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35139 = lst;
var map__35139__$1 = ((((!((map__35139 == null)))?((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35139):map__35139);
var status = cljs.core.get.call(null,map__35139__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__35145 = (function (){var G__35148 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35148) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__35145,(0),null);
var query_key = cljs.core.nth.call(null,vec__35145,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__35145,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__35145,elem_key,query_key))
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
var this__28282__auto__ = this;
React.Component.apply(this__28282__auto__,arguments);

if(!((this__28282__auto__.initLocalState == null))){
this__28282__auto__.state = this__28282__auto__.initLocalState();
} else {
this__28282__auto__.state = {};
}

return this__28282__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x35154_35166 = cloudxmark.core.Lsts.prototype;
x35154_35166.componentWillUpdate = ((function (x35154_35166){
return (function (next_props__28184__auto__,next_state__28185__auto__){
var this__28183__auto__ = this;
if(((!((this__28183__auto__ == null)))?(((false) || (this__28183__auto__.om$next$Ident$))?true:false):false)){
var ident__28187__auto___35167 = om.next.ident.call(null,this__28183__auto__,om.next.props.call(null,this__28183__auto__));
var next_ident__28188__auto___35168 = om.next.ident.call(null,this__28183__auto__,om.next._next_props.call(null,next_props__28184__auto__,this__28183__auto__));
if(cljs.core.not_EQ_.call(null,ident__28187__auto___35167,next_ident__28188__auto___35168)){
var idxr__28189__auto___35169 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28183__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28189__auto___35169 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28189__auto___35169),((function (idxr__28189__auto___35169,ident__28187__auto___35167,next_ident__28188__auto___35168,this__28183__auto__,x35154_35166){
return (function (indexes__28190__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28190__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28187__auto___35167], null),cljs.core.disj,this__28183__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28188__auto___35168], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28183__auto__);
});})(idxr__28189__auto___35169,ident__28187__auto___35167,next_ident__28188__auto___35168,this__28183__auto__,x35154_35166))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28183__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28183__auto__);
});})(x35154_35166))
;

x35154_35166.shouldComponentUpdate = ((function (x35154_35166){
return (function (next_props__28184__auto__,next_state__28185__auto__){
var this__28183__auto__ = this;
var next_children__28186__auto__ = next_props__28184__auto__.children;
var next_props__28184__auto____$1 = goog.object.get(next_props__28184__auto__,"omcljs$value");
var next_props__28184__auto____$2 = (function (){var G__35156 = next_props__28184__auto____$1;
if((next_props__28184__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35156);
} else {
return G__35156;
}
})();
var or__21368__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__28183__auto__),next_props__28184__auto____$2);
if(or__21368__auto__){
return or__21368__auto__;
} else {
var or__21368__auto____$1 = (function (){var and__21356__auto__ = this__28183__auto__.state;
if(cljs.core.truth_(and__21356__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__28183__auto__.state,"omcljs$state"),goog.object.get(next_state__28185__auto__,"omcljs$state"));
} else {
return and__21356__auto__;
}
})();
if(cljs.core.truth_(or__21368__auto____$1)){
return or__21368__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__28183__auto__.props.children,next_children__28186__auto__);
}
}
});})(x35154_35166))
;

x35154_35166.componentWillUnmount = ((function (x35154_35166){
return (function (){
var this__28183__auto__ = this;
var r__28194__auto__ = om.next.get_reconciler.call(null,this__28183__auto__);
var cfg__28195__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28194__auto__);
var st__28196__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28195__auto__);
var indexer__28193__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28195__auto__);
if(cljs.core.truth_((function (){var and__21356__auto__ = !((st__28196__auto__ == null));
if(and__21356__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__28196__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__28183__auto__], null));
} else {
return and__21356__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__28196__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__28183__auto__);
} else {
}

if((indexer__28193__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__28193__auto__,this__28183__auto__);
}
});})(x35154_35166))
;

x35154_35166.componentDidUpdate = ((function (x35154_35166){
return (function (prev_props__28191__auto__,prev_state__28192__auto__){
var this__28183__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28183__auto__);
});})(x35154_35166))
;

x35154_35166.isMounted = ((function (x35154_35166){
return (function (){
var this__28183__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28183__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35154_35166))
;

x35154_35166.componentWillMount = ((function (x35154_35166){
return (function (){
var this__28183__auto__ = this;
var indexer__28193__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28183__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28193__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28193__auto__,this__28183__auto__);
}
});})(x35154_35166))
;

x35154_35166.render = ((function (x35154_35166){
return (function (){
var this__28182__auto__ = this;
var this$ = this__28182__auto__;
var _STAR_reconciler_STAR_35157 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35158 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35159 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35160 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35161 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28182__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28182__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28182__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28182__auto__);

om.next._STAR_parent_STAR_ = this__28182__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35162 = lst;
var map__35162__$1 = ((((!((map__35162 == null)))?((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var lsts = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35161;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35160;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35159;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35158;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35157;
}});})(x35154_35166))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x35164_35170 = cloudxmark.core.Lsts;
x35164_35170.om$next$IQueryParams$ = true;

x35164_35170.om$next$IQueryParams$params$arity$1 = ((function (x35164_35170){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x35164_35170))
;

x35164_35170.om$next$IQuery$ = true;

x35164_35170.om$next$IQuery$query$arity$1 = ((function (x35164_35170){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x35164_35170))
;


var x35165_35171 = cloudxmark.core.Lsts.prototype;
x35165_35171.om$next$IQueryParams$ = true;

x35165_35171.om$next$IQueryParams$params$arity$1 = ((function (x35165_35171){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x35165_35171))
;

x35165_35171.om$next$IQuery$ = true;

x35165_35171.om$next$IQuery$query$arity$1 = ((function (x35165_35171){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x35165_35171))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28284__auto__,writer__28285__auto__,opt__28286__auto__){
return cljs.core._write.call(null,writer__28285__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__35180,cb){
var map__35181 = p__35180;
var map__35181__$1 = ((((!((map__35181 == null)))?((((map__35181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181):map__35181);
var lst_search = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__35183 = om.next.query__GT_ast.call(null,lst_search);
var map__35183__$1 = ((((!((map__35183 == null)))?((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35183):map__35183);
var vec__35184 = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__35184,(0),null);
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
var map__35192 = result;
var map__35192__$1 = ((((!((map__35192 == null)))?((((map__35192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192):map__35192);
var lsts = cljs.core.get.call(null,map__35192__$1,"lsts");
var user_id = cljs.core.get.call(null,map__35192__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__35192__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__35193 = json_status;
var map__35193__$1 = ((((!((map__35193 == null)))?((((map__35193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35193):map__35193);
var info = cljs.core.get.call(null,map__35193__$1,"info");
var warn = cljs.core.get.call(null,map__35193__$1,"warn");
var error = cljs.core.get.call(null,map__35193__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__35198 = json_status;
var map__35198__$1 = ((((!((map__35198 == null)))?((((map__35198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35198):map__35198);
var info = cljs.core.get.call(null,map__35198__$1,"info");
var warn = cljs.core.get.call(null,map__35198__$1,"warn");
var error = cljs.core.get.call(null,map__35198__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28028__auto__ = ((function (c__28051__auto__){
return (function (state_36076){
var state_val_36077 = (state_36076[(1)]);
if((state_val_36077 === (65))){
var state_36076__$1 = state_36076;
var statearr_36078_36200 = state_36076__$1;
(statearr_36078_36200[(2)] = false);

(statearr_36078_36200[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (70))){
var inst_35718 = (state_36076[(7)]);
var inst_35968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36079_36201 = state_36076__$1;
(statearr_36079_36201[(2)] = inst_35968);

(statearr_36079_36201[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (62))){
var inst_35717 = (state_36076[(8)]);
var inst_36004 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_36076__$1 = state_36076;
if(inst_36004){
var statearr_36080_36202 = state_36076__$1;
(statearr_36080_36202[(1)] = (74));

} else {
var statearr_36081_36203 = state_36076__$1;
(statearr_36081_36203[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (74))){
var inst_35718 = (state_36076[(7)]);
var inst_36007 = [cljs.core.str("lst query data:"),cljs.core.str(inst_35718)].join('');
var inst_36008 = cljs.core.println.call(null,inst_36007);
var inst_36010 = (inst_35718 == null);
var inst_36011 = cljs.core.not.call(null,inst_36010);
var state_36076__$1 = (function (){var statearr_36082 = state_36076;
(statearr_36082[(9)] = inst_36008);

return statearr_36082;
})();
if(inst_36011){
var statearr_36083_36204 = state_36076__$1;
(statearr_36083_36204[(1)] = (77));

} else {
var statearr_36084_36205 = state_36076__$1;
(statearr_36084_36205[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (7))){
var inst_36069 = (state_36076[(2)]);
var state_36076__$1 = (function (){var statearr_36085 = state_36076;
(statearr_36085[(10)] = inst_36069);

return statearr_36085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(90),c);
} else {
if((state_val_36077 === (59))){
var inst_35920 = (state_36076[(2)]);
var inst_35921 = cljs.core.get.call(null,inst_35920,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_35922 = cljs.core.get.call(null,inst_35920,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35923 = cljs.core.get.call(null,inst_35920,new cljs.core.Keyword(null,"value","value",305978217));
var inst_35924 = encodeURIComponent(inst_35921);
var inst_35925 = encodeURIComponent(inst_35922);
var inst_35926 = encodeURIComponent(inst_35923);
var inst_35927 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_35924),cljs.core.str("&name="),cljs.core.str(inst_35925),cljs.core.str("&value="),cljs.core.str(inst_35926)].join('');
var inst_35928 = cloudxmark.core.jsonp.call(null,inst_35927);
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(60),inst_35928);
} else {
if((state_val_36077 === (86))){
var inst_36030 = (state_36076[(11)]);
var inst_36033 = (state_36076[(2)]);
var inst_36034 = cljs.core.js__GT_clj.call(null,inst_36033);
var inst_36035 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36034,inst_36030,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_36036 = cljs.core.List.EMPTY;
var inst_36037 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36038 = cljs.core._conj.call(null,inst_36036,inst_36037);
var inst_36039 = cljs.core.List.EMPTY;
var inst_36040 = cljs.core._conj.call(null,inst_36039,inst_36035);
var inst_36041 = cljs.core.concat.call(null,inst_36038,inst_36040);
var inst_36042 = cljs.core.seq.call(null,inst_36041);
var inst_36043 = cljs.core.sequence.call(null,inst_36042);
var inst_36044 = cljs.core.List.EMPTY;
var inst_36045 = cljs.core._conj.call(null,inst_36044,inst_36043);
var inst_36046 = cljs.core.concat.call(null,inst_36045);
var inst_36047 = cljs.core.seq.call(null,inst_36046);
var inst_36048 = cljs.core.sequence.call(null,inst_36047);
var inst_36049 = cljs.core.vec.call(null,inst_36048);
var inst_36050 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36049);
var state_36076__$1 = state_36076;
var statearr_36086_36206 = state_36076__$1;
(statearr_36086_36206[(2)] = inst_36050);

(statearr_36086_36206[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (20))){
var inst_36067 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36087_36207 = state_36076__$1;
(statearr_36087_36207[(2)] = inst_36067);

(statearr_36087_36207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (72))){
var inst_35971 = (state_36076[(2)]);
var inst_35972 = cljs.core.get.call(null,inst_35971,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_35973 = cljs.core.get.call(null,inst_35971,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_35974 = cljs.core.get.call(null,inst_35971,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_35975 = cljs.core.get.call(null,inst_35971,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_35976 = cljs.core.get.call(null,inst_35971,new cljs.core.Keyword(null,"value","value",305978217));
var inst_35977 = encodeURIComponent(inst_35972);
var inst_35978 = encodeURIComponent(inst_35973);
var inst_35979 = encodeURIComponent(inst_35974);
var inst_35980 = encodeURIComponent(inst_35975);
var inst_35981 = encodeURIComponent(inst_35976);
var inst_35982 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_35977),cljs.core.str("&lst-name="),cljs.core.str(inst_35978),cljs.core.str("&orig-name="),cljs.core.str(inst_35979),cljs.core.str("&col-name="),cljs.core.str(inst_35980),cljs.core.str("&value="),cljs.core.str(inst_35981)].join('');
var inst_35983 = cloudxmark.core.jsonp.call(null,inst_35982);
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(73),inst_35983);
} else {
if((state_val_36077 === (58))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36088_36208 = state_36076__$1;
(statearr_36088_36208[(2)] = inst_35718);

(statearr_36088_36208[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (60))){
var inst_35930 = (state_36076[(2)]);
var inst_35931 = cljs.core.js__GT_clj.call(null,inst_35930);
var inst_35932 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35931,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_35933 = cljs.core.List.EMPTY;
var inst_35934 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35935 = cljs.core._conj.call(null,inst_35933,inst_35934);
var inst_35936 = cljs.core.List.EMPTY;
var inst_35937 = cljs.core._conj.call(null,inst_35936,inst_35932);
var inst_35938 = cljs.core.concat.call(null,inst_35935,inst_35937);
var inst_35939 = cljs.core.seq.call(null,inst_35938);
var inst_35940 = cljs.core.sequence.call(null,inst_35939);
var inst_35941 = cljs.core.List.EMPTY;
var inst_35942 = cljs.core._conj.call(null,inst_35941,inst_35940);
var inst_35943 = cljs.core.concat.call(null,inst_35942);
var inst_35944 = cljs.core.seq.call(null,inst_35943);
var inst_35945 = cljs.core.sequence.call(null,inst_35944);
var inst_35946 = cljs.core.vec.call(null,inst_35945);
var inst_35947 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35946);
var state_36076__$1 = state_36076;
var statearr_36089_36209 = state_36076__$1;
(statearr_36089_36209[(2)] = inst_35947);

(statearr_36089_36209[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (27))){
var inst_35718 = (state_36076[(7)]);
var inst_35794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36090_36210 = state_36076__$1;
(statearr_36090_36210[(2)] = inst_35794);

(statearr_36090_36210[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (1))){
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(2),c);
} else {
if((state_val_36077 === (69))){
var inst_35963 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36091_36211 = state_36076__$1;
(statearr_36091_36211[(2)] = inst_35963);

(statearr_36091_36211[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (24))){
var state_36076__$1 = state_36076;
var statearr_36092_36212 = state_36076__$1;
(statearr_36092_36212[(2)] = true);

(statearr_36092_36212[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (55))){
var state_36076__$1 = state_36076;
var statearr_36093_36213 = state_36076__$1;
(statearr_36093_36213[(2)] = false);

(statearr_36093_36213[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (85))){
var inst_36028 = (state_36076[(2)]);
var inst_36029 = cljs.core.get.call(null,inst_36028,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_36030 = cljs.core.get.call(null,inst_36028,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_36031 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_36076__$1 = (function (){var statearr_36094 = state_36076;
(statearr_36094[(12)] = inst_36029);

(statearr_36094[(11)] = inst_36030);

return statearr_36094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(86),inst_36031);
} else {
if((state_val_36077 === (39))){
var state_36076__$1 = state_36076;
var statearr_36095_36214 = state_36076__$1;
(statearr_36095_36214[(2)] = false);

(statearr_36095_36214[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (88))){
var state_36076__$1 = state_36076;
var statearr_36096_36215 = state_36076__$1;
(statearr_36096_36215[(2)] = null);

(statearr_36096_36215[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (46))){
var inst_35871 = (state_36076[(2)]);
var inst_35872 = cljs.core.get.call(null,inst_35871,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35873 = cljs.core.get.call(null,inst_35871,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_35874 = encodeURIComponent(inst_35872);
var inst_35875 = encodeURIComponent(inst_35873);
var inst_35876 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_35874),cljs.core.str("&desc="),cljs.core.str(inst_35875)].join('');
var inst_35877 = cloudxmark.core.jsonp.call(null,inst_35876);
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(47),inst_35877);
} else {
if((state_val_36077 === (4))){
var inst_36074 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36076__$1,inst_36074);
} else {
if((state_val_36077 === (77))){
var inst_35718 = (state_36076[(7)]);
var inst_36013 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_36014 = (inst_36013 & (64));
var inst_36015 = inst_35718.cljs$core$ISeq$;
var inst_36016 = (inst_36014) || (inst_36015);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_36016)){
var statearr_36097_36216 = state_36076__$1;
(statearr_36097_36216[(1)] = (80));

} else {
var statearr_36098_36217 = state_36076__$1;
(statearr_36098_36217[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (54))){
var state_36076__$1 = state_36076;
var statearr_36099_36218 = state_36076__$1;
(statearr_36099_36218[(2)] = true);

(statearr_36099_36218[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (15))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36100_36219 = state_36076__$1;
(statearr_36100_36219[(2)] = inst_35718);

(statearr_36100_36219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (48))){
var inst_35718 = (state_36076[(7)]);
var inst_35902 = (inst_35718 == null);
var inst_35903 = cljs.core.not.call(null,inst_35902);
var state_36076__$1 = state_36076;
if(inst_35903){
var statearr_36101_36220 = state_36076__$1;
(statearr_36101_36220[(1)] = (51));

} else {
var statearr_36102_36221 = state_36076__$1;
(statearr_36102_36221[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (50))){
var inst_36061 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36103_36222 = state_36076__$1;
(statearr_36103_36222[(2)] = inst_36061);

(statearr_36103_36222[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (75))){
var state_36076__$1 = state_36076;
var statearr_36104_36223 = state_36076__$1;
(statearr_36104_36223[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (21))){
var inst_35718 = (state_36076[(7)]);
var inst_35782 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35783 = (inst_35782 & (64));
var inst_35784 = inst_35718.cljs$core$ISeq$;
var inst_35785 = (inst_35783) || (inst_35784);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35785)){
var statearr_36106_36224 = state_36076__$1;
(statearr_36106_36224[(1)] = (24));

} else {
var statearr_36107_36225 = state_36076__$1;
(statearr_36107_36225[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (31))){
var inst_35828 = cloudxmark.core.jsonp.call(null,"/logout");
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(34),inst_35828);
} else {
if((state_val_36077 === (32))){
var inst_35717 = (state_36076[(8)]);
var inst_35849 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_36076__$1 = state_36076;
if(inst_35849){
var statearr_36108_36226 = state_36076__$1;
(statearr_36108_36226[(1)] = (35));

} else {
var statearr_36109_36227 = state_36076__$1;
(statearr_36109_36227[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (40))){
var inst_35866 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35866)){
var statearr_36110_36228 = state_36076__$1;
(statearr_36110_36228[(1)] = (44));

} else {
var statearr_36111_36229 = state_36076__$1;
(statearr_36111_36229[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (56))){
var inst_35912 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36112_36230 = state_36076__$1;
(statearr_36112_36230[(2)] = inst_35912);

(statearr_36112_36230[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (33))){
var inst_36065 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36113_36231 = state_36076__$1;
(statearr_36113_36231[(2)] = inst_36065);

(statearr_36113_36231[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (13))){
var inst_35736 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36114_36232 = state_36076__$1;
(statearr_36114_36232[(2)] = inst_35736);

(statearr_36114_36232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (22))){
var state_36076__$1 = state_36076;
var statearr_36115_36233 = state_36076__$1;
(statearr_36115_36233[(2)] = false);

(statearr_36115_36233[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (90))){
var inst_36071 = (state_36076[(2)]);
var inst_35712 = inst_36071;
var state_36076__$1 = (function (){var statearr_36116 = state_36076;
(statearr_36116[(13)] = inst_35712);

return statearr_36116;
})();
var statearr_36117_36234 = state_36076__$1;
(statearr_36117_36234[(2)] = null);

(statearr_36117_36234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (36))){
var inst_35717 = (state_36076[(8)]);
var inst_35898 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_36076__$1 = state_36076;
if(inst_35898){
var statearr_36118_36235 = state_36076__$1;
(statearr_36118_36235[(1)] = (48));

} else {
var statearr_36119_36236 = state_36076__$1;
(statearr_36119_36236[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (41))){
var state_36076__$1 = state_36076;
var statearr_36120_36237 = state_36076__$1;
(statearr_36120_36237[(2)] = true);

(statearr_36120_36237[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (89))){
var inst_36055 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36121_36238 = state_36076__$1;
(statearr_36121_36238[(2)] = inst_36055);

(statearr_36121_36238[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (43))){
var inst_35863 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36122_36239 = state_36076__$1;
(statearr_36122_36239[(2)] = inst_35863);

(statearr_36122_36239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (61))){
var inst_35718 = (state_36076[(7)]);
var inst_35953 = (inst_35718 == null);
var inst_35954 = cljs.core.not.call(null,inst_35953);
var state_36076__$1 = state_36076;
if(inst_35954){
var statearr_36123_36240 = state_36076__$1;
(statearr_36123_36240[(1)] = (64));

} else {
var statearr_36124_36241 = state_36076__$1;
(statearr_36124_36241[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (29))){
var inst_35797 = (state_36076[(2)]);
var inst_35798 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35799 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35800 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35801 = cloudxmark.core.enc_password.call(null,inst_35799);
var inst_35802 = encodeURIComponent(inst_35798);
var inst_35803 = encodeURIComponent(inst_35801);
var inst_35804 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_35802),cljs.core.str("&pass="),cljs.core.str(inst_35803)].join('');
var inst_35805 = cloudxmark.core.jsonp.call(null,inst_35804);
var state_36076__$1 = (function (){var statearr_36125 = state_36076;
(statearr_36125[(14)] = inst_35800);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(30),inst_35805);
} else {
if((state_val_36077 === (44))){
var inst_35718 = (state_36076[(7)]);
var inst_35868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36126_36242 = state_36076__$1;
(statearr_36126_36242[(2)] = inst_35868);

(statearr_36126_36242[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (6))){
var inst_35717 = (state_36076[(8)]);
var inst_35775 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_36076__$1 = state_36076;
if(inst_35775){
var statearr_36127_36243 = state_36076__$1;
(statearr_36127_36243[(1)] = (18));

} else {
var statearr_36128_36244 = state_36076__$1;
(statearr_36128_36244[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (28))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36129_36245 = state_36076__$1;
(statearr_36129_36245[(2)] = inst_35718);

(statearr_36129_36245[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (64))){
var inst_35718 = (state_36076[(7)]);
var inst_35956 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35957 = (inst_35956 & (64));
var inst_35958 = inst_35718.cljs$core$ISeq$;
var inst_35959 = (inst_35957) || (inst_35958);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35959)){
var statearr_36130_36246 = state_36076__$1;
(statearr_36130_36246[(1)] = (67));

} else {
var statearr_36131_36247 = state_36076__$1;
(statearr_36131_36247[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (51))){
var inst_35718 = (state_36076[(7)]);
var inst_35905 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35906 = (inst_35905 & (64));
var inst_35907 = inst_35718.cljs$core$ISeq$;
var inst_35908 = (inst_35906) || (inst_35907);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35908)){
var statearr_36132_36248 = state_36076__$1;
(statearr_36132_36248[(1)] = (54));

} else {
var statearr_36133_36249 = state_36076__$1;
(statearr_36133_36249[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (25))){
var state_36076__$1 = state_36076;
var statearr_36134_36250 = state_36076__$1;
(statearr_36134_36250[(2)] = false);

(statearr_36134_36250[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (34))){
var inst_35830 = (state_36076[(2)]);
var inst_35831 = cljs.core.js__GT_clj.call(null,inst_35830);
var inst_35832 = cloudxmark.core.convert_json_status.call(null,inst_35831,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_35833 = cljs.core.List.EMPTY;
var inst_35834 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35835 = cljs.core._conj.call(null,inst_35833,inst_35834);
var inst_35836 = cljs.core.List.EMPTY;
var inst_35837 = cljs.core._conj.call(null,inst_35836,inst_35832);
var inst_35838 = cljs.core.concat.call(null,inst_35835,inst_35837);
var inst_35839 = cljs.core.seq.call(null,inst_35838);
var inst_35840 = cljs.core.sequence.call(null,inst_35839);
var inst_35841 = cljs.core.List.EMPTY;
var inst_35842 = cljs.core._conj.call(null,inst_35841,inst_35840);
var inst_35843 = cljs.core.concat.call(null,inst_35842);
var inst_35844 = cljs.core.seq.call(null,inst_35843);
var inst_35845 = cljs.core.sequence.call(null,inst_35844);
var inst_35846 = cljs.core.vec.call(null,inst_35845);
var inst_35847 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35846);
var state_36076__$1 = state_36076;
var statearr_36135_36251 = state_36076__$1;
(statearr_36135_36251[(2)] = inst_35847);

(statearr_36135_36251[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (17))){
var inst_35746 = (state_36076[(15)]);
var inst_35747 = (state_36076[(16)]);
var inst_35753 = (state_36076[(2)]);
var inst_35754 = cljs.core.js__GT_clj.call(null,inst_35753);
var inst_35755 = cloudxmark.core.gen_key_bytes.call(null,inst_35746);
var inst_35756 = cloudxmark.core.create_aes_cbc.call(null,inst_35755);
var inst_35757 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35754,inst_35747,new cljs.core.Keyword(null,"login","login",55217519));
var inst_35758 = cljs.core.assoc.call(null,inst_35757,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_35756);
var inst_35759 = cljs.core.List.EMPTY;
var inst_35760 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35761 = cljs.core._conj.call(null,inst_35759,inst_35760);
var inst_35762 = cljs.core.List.EMPTY;
var inst_35763 = cljs.core._conj.call(null,inst_35762,inst_35758);
var inst_35764 = cljs.core.concat.call(null,inst_35761,inst_35763);
var inst_35765 = cljs.core.seq.call(null,inst_35764);
var inst_35766 = cljs.core.sequence.call(null,inst_35765);
var inst_35767 = cljs.core.List.EMPTY;
var inst_35768 = cljs.core._conj.call(null,inst_35767,inst_35766);
var inst_35769 = cljs.core.concat.call(null,inst_35768);
var inst_35770 = cljs.core.seq.call(null,inst_35769);
var inst_35771 = cljs.core.sequence.call(null,inst_35770);
var inst_35772 = cljs.core.vec.call(null,inst_35771);
var inst_35773 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35772);
var state_36076__$1 = state_36076;
var statearr_36136_36252 = state_36076__$1;
(statearr_36136_36252[(2)] = inst_35773);

(statearr_36136_36252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (3))){
var inst_35717 = (state_36076[(8)]);
var inst_35712 = (state_36076[(13)]);
var inst_35717__$1 = cljs.core.nth.call(null,inst_35712,(0),null);
var inst_35718 = cljs.core.nth.call(null,inst_35712,(1),null);
var inst_35719 = cljs.core.nth.call(null,inst_35712,(2),null);
var inst_35720 = cljs.core._EQ_.call(null,inst_35717__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_36076__$1 = (function (){var statearr_36137 = state_36076;
(statearr_36137[(8)] = inst_35717__$1);

(statearr_36137[(17)] = inst_35719);

(statearr_36137[(7)] = inst_35718);

return statearr_36137;
})();
if(inst_35720){
var statearr_36138_36253 = state_36076__$1;
(statearr_36138_36253[(1)] = (5));

} else {
var statearr_36139_36254 = state_36076__$1;
(statearr_36139_36254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (12))){
var state_36076__$1 = state_36076;
var statearr_36140_36255 = state_36076__$1;
(statearr_36140_36255[(2)] = false);

(statearr_36140_36255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (2))){
var inst_35708 = (state_36076[(2)]);
var inst_35709 = cljs.core.nth.call(null,inst_35708,(0),null);
var inst_35710 = cljs.core.nth.call(null,inst_35708,(1),null);
var inst_35711 = cljs.core.nth.call(null,inst_35708,(2),null);
var inst_35712 = inst_35708;
var state_36076__$1 = (function (){var statearr_36141 = state_36076;
(statearr_36141[(18)] = inst_35711);

(statearr_36141[(19)] = inst_35710);

(statearr_36141[(13)] = inst_35712);

(statearr_36141[(20)] = inst_35709);

return statearr_36141;
})();
var statearr_36142_36256 = state_36076__$1;
(statearr_36142_36256[(2)] = null);

(statearr_36142_36256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (66))){
var inst_35966 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35966)){
var statearr_36143_36257 = state_36076__$1;
(statearr_36143_36257[(1)] = (70));

} else {
var statearr_36144_36258 = state_36076__$1;
(statearr_36144_36258[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (23))){
var inst_35792 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35792)){
var statearr_36145_36259 = state_36076__$1;
(statearr_36145_36259[(1)] = (27));

} else {
var statearr_36146_36260 = state_36076__$1;
(statearr_36146_36260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (47))){
var inst_35879 = (state_36076[(2)]);
var inst_35880 = cljs.core.js__GT_clj.call(null,inst_35879);
var inst_35881 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35880,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_35882 = cljs.core.List.EMPTY;
var inst_35883 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35884 = cljs.core._conj.call(null,inst_35882,inst_35883);
var inst_35885 = cljs.core.List.EMPTY;
var inst_35886 = cljs.core._conj.call(null,inst_35885,inst_35881);
var inst_35887 = cljs.core.concat.call(null,inst_35884,inst_35886);
var inst_35888 = cljs.core.seq.call(null,inst_35887);
var inst_35889 = cljs.core.sequence.call(null,inst_35888);
var inst_35890 = cljs.core.List.EMPTY;
var inst_35891 = cljs.core._conj.call(null,inst_35890,inst_35889);
var inst_35892 = cljs.core.concat.call(null,inst_35891);
var inst_35893 = cljs.core.seq.call(null,inst_35892);
var inst_35894 = cljs.core.sequence.call(null,inst_35893);
var inst_35895 = cljs.core.vec.call(null,inst_35894);
var inst_35896 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35895);
var state_36076__$1 = state_36076;
var statearr_36147_36261 = state_36076__$1;
(statearr_36147_36261[(2)] = inst_35896);

(statearr_36147_36261[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (35))){
var inst_35718 = (state_36076[(7)]);
var inst_35853 = (inst_35718 == null);
var inst_35854 = cljs.core.not.call(null,inst_35853);
var state_36076__$1 = state_36076;
if(inst_35854){
var statearr_36148_36262 = state_36076__$1;
(statearr_36148_36262[(1)] = (38));

} else {
var statearr_36149_36263 = state_36076__$1;
(statearr_36149_36263[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (82))){
var inst_36020 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36150_36264 = state_36076__$1;
(statearr_36150_36264[(2)] = inst_36020);

(statearr_36150_36264[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (76))){
var inst_36057 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36151_36265 = state_36076__$1;
(statearr_36151_36265[(2)] = inst_36057);

(statearr_36151_36265[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (19))){
var inst_35717 = (state_36076[(8)]);
var inst_35826 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_36076__$1 = state_36076;
if(inst_35826){
var statearr_36152_36266 = state_36076__$1;
(statearr_36152_36266[(1)] = (31));

} else {
var statearr_36153_36267 = state_36076__$1;
(statearr_36153_36267[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (57))){
var inst_35718 = (state_36076[(7)]);
var inst_35917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36154_36268 = state_36076__$1;
(statearr_36154_36268[(2)] = inst_35917);

(statearr_36154_36268[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (68))){
var state_36076__$1 = state_36076;
var statearr_36155_36269 = state_36076__$1;
(statearr_36155_36269[(2)] = false);

(statearr_36155_36269[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (11))){
var state_36076__$1 = state_36076;
var statearr_36156_36270 = state_36076__$1;
(statearr_36156_36270[(2)] = true);

(statearr_36156_36270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (9))){
var state_36076__$1 = state_36076;
var statearr_36157_36271 = state_36076__$1;
(statearr_36157_36271[(2)] = false);

(statearr_36157_36271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (5))){
var inst_35718 = (state_36076[(7)]);
var inst_35723 = [cljs.core.str("lst login data:"),cljs.core.str(inst_35718)].join('');
var inst_35724 = cljs.core.println.call(null,inst_35723);
var inst_35726 = (inst_35718 == null);
var inst_35727 = cljs.core.not.call(null,inst_35726);
var state_36076__$1 = (function (){var statearr_36158 = state_36076;
(statearr_36158[(21)] = inst_35724);

return statearr_36158;
})();
if(inst_35727){
var statearr_36159_36272 = state_36076__$1;
(statearr_36159_36272[(1)] = (8));

} else {
var statearr_36160_36273 = state_36076__$1;
(statearr_36160_36273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (83))){
var inst_35718 = (state_36076[(7)]);
var inst_36025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36161_36274 = state_36076__$1;
(statearr_36161_36274[(2)] = inst_36025);

(statearr_36161_36274[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (14))){
var inst_35718 = (state_36076[(7)]);
var inst_35741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_36076__$1 = state_36076;
var statearr_36162_36275 = state_36076__$1;
(statearr_36162_36275[(2)] = inst_35741);

(statearr_36162_36275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (45))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36163_36276 = state_36076__$1;
(statearr_36163_36276[(2)] = inst_35718);

(statearr_36163_36276[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (53))){
var inst_35915 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35915)){
var statearr_36164_36277 = state_36076__$1;
(statearr_36164_36277[(1)] = (57));

} else {
var statearr_36165_36278 = state_36076__$1;
(statearr_36165_36278[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (78))){
var state_36076__$1 = state_36076;
var statearr_36166_36279 = state_36076__$1;
(statearr_36166_36279[(2)] = false);

(statearr_36166_36279[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (26))){
var inst_35789 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36167_36280 = state_36076__$1;
(statearr_36167_36280[(2)] = inst_35789);

(statearr_36167_36280[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (16))){
var inst_35746 = (state_36076[(15)]);
var inst_35744 = (state_36076[(2)]);
var inst_35745 = cljs.core.get.call(null,inst_35744,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35746__$1 = cljs.core.get.call(null,inst_35744,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35747 = cljs.core.get.call(null,inst_35744,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35748 = encodeURIComponent(inst_35745);
var inst_35749 = encodeURIComponent(inst_35746__$1);
var inst_35750 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_35748),cljs.core.str("&pass="),cljs.core.str(inst_35749)].join('');
var inst_35751 = cloudxmark.core.jsonp.call(null,inst_35750);
var state_36076__$1 = (function (){var statearr_36168 = state_36076;
(statearr_36168[(15)] = inst_35746__$1);

(statearr_36168[(16)] = inst_35747);

return statearr_36168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36076__$1,(17),inst_35751);
} else {
if((state_val_36077 === (81))){
var state_36076__$1 = state_36076;
var statearr_36169_36281 = state_36076__$1;
(statearr_36169_36281[(2)] = false);

(statearr_36169_36281[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (79))){
var inst_36023 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_36023)){
var statearr_36170_36282 = state_36076__$1;
(statearr_36170_36282[(1)] = (83));

} else {
var statearr_36171_36283 = state_36076__$1;
(statearr_36171_36283[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (38))){
var inst_35718 = (state_36076[(7)]);
var inst_35856 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35857 = (inst_35856 & (64));
var inst_35858 = inst_35718.cljs$core$ISeq$;
var inst_35859 = (inst_35857) || (inst_35858);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35859)){
var statearr_36172_36284 = state_36076__$1;
(statearr_36172_36284[(1)] = (41));

} else {
var statearr_36173_36285 = state_36076__$1;
(statearr_36173_36285[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (87))){
var state_36076__$1 = state_36076;
var statearr_36174_36286 = state_36076__$1;
(statearr_36174_36286[(2)] = null);

(statearr_36174_36286[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (30))){
var inst_35807 = (state_36076[(2)]);
var inst_35808 = cljs.core.js__GT_clj.call(null,inst_35807);
var inst_35809 = cloudxmark.core.convert_json_status.call(null,inst_35808,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_35810 = cljs.core.List.EMPTY;
var inst_35811 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_35812 = cljs.core._conj.call(null,inst_35810,inst_35811);
var inst_35813 = cljs.core.List.EMPTY;
var inst_35814 = cljs.core._conj.call(null,inst_35813,inst_35809);
var inst_35815 = cljs.core.concat.call(null,inst_35812,inst_35814);
var inst_35816 = cljs.core.seq.call(null,inst_35815);
var inst_35817 = cljs.core.sequence.call(null,inst_35816);
var inst_35818 = cljs.core.List.EMPTY;
var inst_35819 = cljs.core._conj.call(null,inst_35818,inst_35817);
var inst_35820 = cljs.core.concat.call(null,inst_35819);
var inst_35821 = cljs.core.seq.call(null,inst_35820);
var inst_35822 = cljs.core.sequence.call(null,inst_35821);
var inst_35823 = cljs.core.vec.call(null,inst_35822);
var inst_35824 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35823);
var state_36076__$1 = state_36076;
var statearr_36175_36287 = state_36076__$1;
(statearr_36175_36287[(2)] = inst_35824);

(statearr_36175_36287[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (73))){
var inst_35985 = (state_36076[(2)]);
var inst_35986 = cljs.core.js__GT_clj.call(null,inst_35985);
var inst_35987 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35986,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_35988 = cljs.core.List.EMPTY;
var inst_35989 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35990 = cljs.core._conj.call(null,inst_35988,inst_35989);
var inst_35991 = cljs.core.List.EMPTY;
var inst_35992 = cljs.core._conj.call(null,inst_35991,inst_35987);
var inst_35993 = cljs.core.concat.call(null,inst_35990,inst_35992);
var inst_35994 = cljs.core.seq.call(null,inst_35993);
var inst_35995 = cljs.core.sequence.call(null,inst_35994);
var inst_35996 = cljs.core.List.EMPTY;
var inst_35997 = cljs.core._conj.call(null,inst_35996,inst_35995);
var inst_35998 = cljs.core.concat.call(null,inst_35997);
var inst_35999 = cljs.core.seq.call(null,inst_35998);
var inst_36000 = cljs.core.sequence.call(null,inst_35999);
var inst_36001 = cljs.core.vec.call(null,inst_36000);
var inst_36002 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36001);
var state_36076__$1 = state_36076;
var statearr_36176_36288 = state_36076__$1;
(statearr_36176_36288[(2)] = inst_36002);

(statearr_36176_36288[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (10))){
var inst_35739 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35739)){
var statearr_36177_36289 = state_36076__$1;
(statearr_36177_36289[(1)] = (14));

} else {
var statearr_36178_36290 = state_36076__$1;
(statearr_36178_36290[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (18))){
var inst_35718 = (state_36076[(7)]);
var inst_35779 = (inst_35718 == null);
var inst_35780 = cljs.core.not.call(null,inst_35779);
var state_36076__$1 = state_36076;
if(inst_35780){
var statearr_36179_36291 = state_36076__$1;
(statearr_36179_36291[(1)] = (21));

} else {
var statearr_36180_36292 = state_36076__$1;
(statearr_36180_36292[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (52))){
var state_36076__$1 = state_36076;
var statearr_36181_36293 = state_36076__$1;
(statearr_36181_36293[(2)] = false);

(statearr_36181_36293[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (67))){
var state_36076__$1 = state_36076;
var statearr_36182_36294 = state_36076__$1;
(statearr_36182_36294[(2)] = true);

(statearr_36182_36294[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (71))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36183_36295 = state_36076__$1;
(statearr_36183_36295[(2)] = inst_35718);

(statearr_36183_36295[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (42))){
var state_36076__$1 = state_36076;
var statearr_36184_36296 = state_36076__$1;
(statearr_36184_36296[(2)] = false);

(statearr_36184_36296[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (80))){
var state_36076__$1 = state_36076;
var statearr_36185_36297 = state_36076__$1;
(statearr_36185_36297[(2)] = true);

(statearr_36185_36297[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (37))){
var inst_36063 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36186_36298 = state_36076__$1;
(statearr_36186_36298[(2)] = inst_36063);

(statearr_36186_36298[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (63))){
var inst_36059 = (state_36076[(2)]);
var state_36076__$1 = state_36076;
var statearr_36187_36299 = state_36076__$1;
(statearr_36187_36299[(2)] = inst_36059);

(statearr_36187_36299[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (8))){
var inst_35718 = (state_36076[(7)]);
var inst_35729 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35730 = (inst_35729 & (64));
var inst_35731 = inst_35718.cljs$core$ISeq$;
var inst_35732 = (inst_35730) || (inst_35731);
var state_36076__$1 = state_36076;
if(cljs.core.truth_(inst_35732)){
var statearr_36188_36300 = state_36076__$1;
(statearr_36188_36300[(1)] = (11));

} else {
var statearr_36189_36301 = state_36076__$1;
(statearr_36189_36301[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (49))){
var inst_35717 = (state_36076[(8)]);
var inst_35949 = cljs.core._EQ_.call(null,inst_35717,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_36076__$1 = state_36076;
if(inst_35949){
var statearr_36190_36302 = state_36076__$1;
(statearr_36190_36302[(1)] = (61));

} else {
var statearr_36191_36303 = state_36076__$1;
(statearr_36191_36303[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36077 === (84))){
var inst_35718 = (state_36076[(7)]);
var state_36076__$1 = state_36076;
var statearr_36192_36304 = state_36076__$1;
(statearr_36192_36304[(2)] = inst_35718);

(statearr_36192_36304[(1)] = (85));


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
});})(c__28051__auto__))
;
return ((function (switch__28028__auto__,c__28051__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__28029__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__28029__auto____0 = (function (){
var statearr_36196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36196[(0)] = cloudxmark$core$search_loop_$_state_machine__28029__auto__);

(statearr_36196[(1)] = (1));

return statearr_36196;
});
var cloudxmark$core$search_loop_$_state_machine__28029__auto____1 = (function (state_36076){
while(true){
var ret_value__28030__auto__ = (function (){try{while(true){
var result__28031__auto__ = switch__28028__auto__.call(null,state_36076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28031__auto__;
}
break;
}
}catch (e36197){if((e36197 instanceof Object)){
var ex__28032__auto__ = e36197;
var statearr_36198_36305 = state_36076;
(statearr_36198_36305[(5)] = ex__28032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36306 = state_36076;
state_36076 = G__36306;
continue;
} else {
return ret_value__28030__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28029__auto__ = function(state_36076){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28029__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28029__auto____1.call(this,state_36076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28029__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28029__auto____0;
cloudxmark$core$search_loop_$_state_machine__28029__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28029__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28029__auto__;
})()
;})(switch__28028__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_36199 = f__28052__auto__.call(null);
(statearr_36199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_36199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1470303908894