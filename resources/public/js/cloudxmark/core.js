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
var idx_36865 = (0);
while(true){
var len1_36866 = b1.length;
if((cljs.core._EQ_.call(null,idx_36865,len1_36866)) || (cljs.core._EQ_.call(null,idx_36865,max_len))){
} else {
(b1[idx_36865] = ((b1[idx_36865]) ^ (b2[idx_36865])));

var G__36867 = (idx_36865 + (1));
idx_36865 = G__36867;
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
var args36870 = [];
var len__22773__auto___36873 = arguments.length;
var i__22774__auto___36874 = (0);
while(true){
if((i__22774__auto___36874 < len__22773__auto___36873)){
args36870.push((arguments[i__22774__auto___36874]));

var G__36875 = (i__22774__auto___36874 + (1));
i__22774__auto___36874 = G__36875;
continue;
} else {
}
break;
}

var G__36872 = args36870.length;
switch (G__36872) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36870.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__36868_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__36868_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__36869_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__36869_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__36877,_,p__36878){
var map__36879 = p__36877;
var map__36879__$1 = ((((!((map__36879 == null)))?((((map__36879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36879):map__36879);
var env = map__36879__$1;
var state = cljs.core.get.call(null,map__36879__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36879__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__36880 = p__36878;
var map__36880__$1 = ((((!((map__36880 == null)))?((((map__36880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36880):map__36880);
var query_ver = cljs.core.get.call(null,map__36880__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__36880__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__36883 = lst;
var map__36883__$1 = ((((!((map__36883 == null)))?((((map__36883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36883):map__36883);
var lsts = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_36885 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_36885);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__36886,_,p__36887){
var map__36888 = p__36886;
var map__36888__$1 = ((((!((map__36888 == null)))?((((map__36888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36888):map__36888);
var env = map__36888__$1;
var state = cljs.core.get.call(null,map__36888__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36889 = p__36887;
var map__36889__$1 = ((((!((map__36889 == null)))?((((map__36889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36889):map__36889);
var status = map__36889__$1;
var id = cljs.core.get.call(null,map__36889__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36888,map__36888__$1,env,state,map__36889,map__36889__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__36888,map__36888__$1,env,state,map__36889,map__36889__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__36892,_,p__36893){
var map__36894 = p__36892;
var map__36894__$1 = ((((!((map__36894 == null)))?((((map__36894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36894):map__36894);
var env = map__36894__$1;
var state = cljs.core.get.call(null,map__36894__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36895 = p__36893;
var map__36895__$1 = ((((!((map__36895 == null)))?((((map__36895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36895):map__36895);
var path = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36894,map__36894__$1,env,state,map__36895,map__36895__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__36894,map__36894__$1,env,state,map__36895,map__36895__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__36898,_,p__36899){
var map__36900 = p__36898;
var map__36900__$1 = ((((!((map__36900 == null)))?((((map__36900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36900):map__36900);
var env = map__36900__$1;
var state = cljs.core.get.call(null,map__36900__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36901 = p__36899;
var map__36901__$1 = ((((!((map__36901 == null)))?((((map__36901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36901):map__36901);
var data_map = map__36901__$1;
var lst_name = cljs.core.get.call(null,map__36901__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__36901__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__36901__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__36901__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36900,map__36900__$1,env,state,map__36901,map__36901__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__36900,map__36900__$1,env,state,map__36901,map__36901__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__36904,_,p__36905){
var map__36906 = p__36904;
var map__36906__$1 = ((((!((map__36906 == null)))?((((map__36906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36906):map__36906);
var env = map__36906__$1;
var state = cljs.core.get.call(null,map__36906__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36907 = p__36905;
var map__36907__$1 = ((((!((map__36907 == null)))?((((map__36907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36907):map__36907);
var field_id = cljs.core.get.call(null,map__36907__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__36907__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36906,map__36906__$1,env,state,map__36907,map__36907__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__36906,map__36906__$1,env,state,map__36907,map__36907__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__36910,_,p__36911){
var map__36912 = p__36910;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var env = map__36912__$1;
var state = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36913 = p__36911;
var map__36913__$1 = ((((!((map__36913 == null)))?((((map__36913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36913):map__36913);
var data_map = map__36913__$1;
var user_id = cljs.core.get.call(null,map__36913__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__36913__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__36913__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36912,map__36912__$1,env,state,map__36913,map__36913__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__36912,map__36912__$1,env,state,map__36913,map__36913__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__36916,_,p__36917){
var map__36918 = p__36916;
var map__36918__$1 = ((((!((map__36918 == null)))?((((map__36918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36918):map__36918);
var env = map__36918__$1;
var state = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36919 = p__36917;
var map__36919__$1 = ((((!((map__36919 == null)))?((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var data_map = map__36919__$1;
var user_id = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36918,map__36918__$1,env,state,map__36919,map__36919__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__36918,map__36918__$1,env,state,map__36919,map__36919__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__36922,_,p__36923){
var map__36924 = p__36922;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var env = map__36924__$1;
var state = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36925 = p__36923;
var map__36925__$1 = ((((!((map__36925 == null)))?((((map__36925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36925):map__36925);
var data_map = map__36925__$1;
var type = cljs.core.get.call(null,map__36925__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__36925__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36924,map__36924__$1,env,state,map__36925,map__36925__$1,data_map,type,fields){
return (function (){
return null;
});})(map__36924,map__36924__$1,env,state,map__36925,map__36925__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__36928,_,p__36929){
var map__36930 = p__36928;
var map__36930__$1 = ((((!((map__36930 == null)))?((((map__36930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36930):map__36930);
var env = map__36930__$1;
var state = cljs.core.get.call(null,map__36930__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36931 = p__36929;
var map__36931__$1 = ((((!((map__36931 == null)))?((((map__36931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36931):map__36931);
var data_map = map__36931__$1;
var name = cljs.core.get.call(null,map__36931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__36931__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36930,map__36930__$1,env,state,map__36931,map__36931__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__36930,map__36930__$1,env,state,map__36931,map__36931__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__36934,_,p__36935){
var map__36936 = p__36934;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var env = map__36936__$1;
var state = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36937 = p__36935;
var map__36937__$1 = ((((!((map__36937 == null)))?((((map__36937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36937):map__36937);
var data_map = map__36937__$1;
var name = cljs.core.get.call(null,map__36937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__36937__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36936,map__36936__$1,env,state,map__36937,map__36937__$1,data_map,name,value){
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
});})(map__36936,map__36936__$1,env,state,map__36937,map__36937__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__36940,_,___$1){
var map__36941 = p__36940;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36941):map__36941);
var env = map__36941__$1;
var state = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36941,map__36941__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__36941,map__36941__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__36943,_,p__36944){
var map__36945 = p__36943;
var map__36945__$1 = ((((!((map__36945 == null)))?((((map__36945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36945):map__36945);
var env = map__36945__$1;
var state = cljs.core.get.call(null,map__36945__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36946 = p__36944;
var map__36946__$1 = ((((!((map__36946 == null)))?((((map__36946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36946):map__36946);
var data_map = map__36946__$1;
var status = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36945,map__36945__$1,env,state,map__36946,map__36946__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__36945,map__36945__$1,env,state,map__36946,map__36946__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args36949 = [];
var len__22773__auto___36952 = arguments.length;
var i__22774__auto___36953 = (0);
while(true){
if((i__22774__auto___36953 < len__22773__auto___36952)){
args36949.push((arguments[i__22774__auto___36953]));

var G__36954 = (i__22774__auto___36953 + (1));
i__22774__auto___36953 = G__36954;
continue;
} else {
}
break;
}

var G__36951 = args36949.length;
switch (G__36951) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36949.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__36956){
var map__36962 = p__36956;
var map__36962__$1 = ((((!((map__36962 == null)))?((((map__36962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36962):map__36962);
var info = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__36964 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__36964,(0),null);
var msg = cljs.core.nth.call(null,vec__36964,(1),null);
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
var map__36969 = lst;
var map__36969__$1 = ((((!((map__36969 == null)))?((((map__36969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36969):map__36969);
var lsts = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__36969,map__36969__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__36969,map__36969__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__36973 = lst;
var map__36973__$1 = ((((!((map__36973 == null)))?((((map__36973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36973):map__36973);
var status = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var vec__36979 = (function (){var G__36982 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36982) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__36979,(0),null);
var query_key = cljs.core.nth.call(null,vec__36979,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__36979,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__36979,elem_key,query_key))
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

var x36988_37000 = cloudxmark.core.Lsts.prototype;
x36988_37000.componentWillUpdate = ((function (x36988_37000){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
if(((!((this__28511__auto__ == null)))?(((false) || (this__28511__auto__.om$next$Ident$))?true:false):false)){
var ident__28515__auto___37001 = om.next.ident.call(null,this__28511__auto__,om.next.props.call(null,this__28511__auto__));
var next_ident__28516__auto___37002 = om.next.ident.call(null,this__28511__auto__,om.next._next_props.call(null,next_props__28512__auto__,this__28511__auto__));
if(cljs.core.not_EQ_.call(null,ident__28515__auto___37001,next_ident__28516__auto___37002)){
var idxr__28517__auto___37003 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28517__auto___37003 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28517__auto___37003),((function (idxr__28517__auto___37003,ident__28515__auto___37001,next_ident__28516__auto___37002,this__28511__auto__,x36988_37000){
return (function (indexes__28518__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__28518__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28515__auto___37001], null),cljs.core.disj,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28516__auto___37002], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28511__auto__);
});})(idxr__28517__auto___37003,ident__28515__auto___37001,next_ident__28516__auto___37002,this__28511__auto__,x36988_37000))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__28511__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__28511__auto__);
});})(x36988_37000))
;

x36988_37000.shouldComponentUpdate = ((function (x36988_37000){
return (function (next_props__28512__auto__,next_state__28513__auto__){
var this__28511__auto__ = this;
var next_children__28514__auto__ = next_props__28512__auto__.children;
var next_props__28512__auto____$1 = goog.object.get(next_props__28512__auto__,"omcljs$value");
var next_props__28512__auto____$2 = (function (){var G__36990 = next_props__28512__auto____$1;
if((next_props__28512__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36990);
} else {
return G__36990;
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
});})(x36988_37000))
;

x36988_37000.componentWillUnmount = ((function (x36988_37000){
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
});})(x36988_37000))
;

x36988_37000.componentDidUpdate = ((function (x36988_37000){
return (function (prev_props__28519__auto__,prev_state__28520__auto__){
var this__28511__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__28511__auto__);
});})(x36988_37000))
;

x36988_37000.isMounted = ((function (x36988_37000){
return (function (){
var this__28511__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__28511__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36988_37000))
;

x36988_37000.componentWillMount = ((function (x36988_37000){
return (function (){
var this__28511__auto__ = this;
var indexer__28521__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28521__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__28521__auto__,this__28511__auto__);
}
});})(x36988_37000))
;

x36988_37000.render = ((function (x36988_37000){
return (function (){
var this__28510__auto__ = this;
var this$ = this__28510__auto__;
var _STAR_reconciler_STAR_36991 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36992 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36993 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36994 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36995 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__28510__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__28510__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__28510__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__28510__auto__);

om.next._STAR_parent_STAR_ = this__28510__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__36996 = lst;
var map__36996__$1 = ((((!((map__36996 == null)))?((((map__36996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36996):map__36996);
var lsts = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__36996__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36995;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36994;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36993;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36992;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36991;
}});})(x36988_37000))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x36998_37004 = cloudxmark.core.Lsts;
/** @nocollapse */
x36998_37004.om$next$IQueryParams$ = true;

/** @nocollapse */
x36998_37004.om$next$IQueryParams$params$arity$1 = ((function (x36998_37004){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x36998_37004))
;

/** @nocollapse */
x36998_37004.om$next$IQuery$ = true;

/** @nocollapse */
x36998_37004.om$next$IQuery$query$arity$1 = ((function (x36998_37004){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x36998_37004))
;


var x36999_37005 = cloudxmark.core.Lsts.prototype;

x36999_37005.om$next$IQueryParams$ = true;


x36999_37005.om$next$IQueryParams$params$arity$1 = ((function (x36999_37005){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x36999_37005))
;


x36999_37005.om$next$IQuery$ = true;


x36999_37005.om$next$IQuery$query$arity$1 = ((function (x36999_37005){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x36999_37005))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__28636__auto__,writer__28637__auto__,opt__28638__auto__){
return cljs.core._write.call(null,writer__28637__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__37014,cb){
var map__37015 = p__37014;
var map__37015__$1 = ((((!((map__37015 == null)))?((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var lst_search = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__37017 = om.next.query__GT_ast.call(null,lst_search);
var map__37017__$1 = ((((!((map__37017 == null)))?((((map__37017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37017):map__37017);
var vec__37018 = cljs.core.get.call(null,map__37017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__37018,(0),null);
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
var map__37026 = result;
var map__37026__$1 = ((((!((map__37026 == null)))?((((map__37026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37026):map__37026);
var lsts = cljs.core.get.call(null,map__37026__$1,"lsts");
var user_id = cljs.core.get.call(null,map__37026__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__37026__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__37027 = json_status;
var map__37027__$1 = ((((!((map__37027 == null)))?((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37027):map__37027);
var info = cljs.core.get.call(null,map__37027__$1,"info");
var warn = cljs.core.get.call(null,map__37027__$1,"warn");
var error = cljs.core.get.call(null,map__37027__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__37032 = json_status;
var map__37032__$1 = ((((!((map__37032 == null)))?((((map__37032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37032):map__37032);
var info = cljs.core.get.call(null,map__37032__$1,"info");
var warn = cljs.core.get.call(null,map__37032__$1,"warn");
var error = cljs.core.get.call(null,map__37032__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_37932){
var state_val_37933 = (state_37932[(1)]);
if((state_val_37933 === (65))){
var state_37932__$1 = state_37932;
var statearr_37934_38060 = state_37932__$1;
(statearr_37934_38060[(2)] = false);

(statearr_37934_38060[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (70))){
var inst_37565 = (state_37932[(7)]);
var inst_37815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_37935_38061 = state_37932__$1;
(statearr_37935_38061[(2)] = inst_37815);

(statearr_37935_38061[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (62))){
var inst_37564 = (state_37932[(8)]);
var inst_37851 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_37932__$1 = state_37932;
if(inst_37851){
var statearr_37936_38062 = state_37932__$1;
(statearr_37936_38062[(1)] = (74));

} else {
var statearr_37937_38063 = state_37932__$1;
(statearr_37937_38063[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (74))){
var inst_37565 = (state_37932[(7)]);
var inst_37854 = [cljs.core.str("lst query data:"),cljs.core.str(inst_37565)].join('');
var inst_37855 = cljs.core.println.call(null,inst_37854);
var inst_37857 = (inst_37565 == null);
var inst_37858 = cljs.core.not.call(null,inst_37857);
var state_37932__$1 = (function (){var statearr_37938 = state_37932;
(statearr_37938[(9)] = inst_37855);

return statearr_37938;
})();
if(inst_37858){
var statearr_37939_38064 = state_37932__$1;
(statearr_37939_38064[(1)] = (77));

} else {
var statearr_37940_38065 = state_37932__$1;
(statearr_37940_38065[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (7))){
var inst_37925 = (state_37932[(2)]);
var state_37932__$1 = (function (){var statearr_37941 = state_37932;
(statearr_37941[(10)] = inst_37925);

return statearr_37941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(93),c);
} else {
if((state_val_37933 === (59))){
var inst_37767 = (state_37932[(2)]);
var inst_37768 = cljs.core.get.call(null,inst_37767,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_37769 = cljs.core.get.call(null,inst_37767,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_37770 = cljs.core.get.call(null,inst_37767,new cljs.core.Keyword(null,"value","value",305978217));
var inst_37771 = encodeURIComponent(inst_37768);
var inst_37772 = encodeURIComponent(inst_37769);
var inst_37773 = encodeURIComponent(inst_37770);
var inst_37774 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_37771),cljs.core.str("&name="),cljs.core.str(inst_37772),cljs.core.str("&value="),cljs.core.str(inst_37773)].join('');
var inst_37775 = cloudxmark.core.jsonp.call(null,inst_37774);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(60),inst_37775);
} else {
if((state_val_37933 === (86))){
var state_37932__$1 = state_37932;
var statearr_37942_38066 = state_37932__$1;
(statearr_37942_38066[(2)] = "");

(statearr_37942_38066[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (20))){
var inst_37923 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37943_38067 = state_37932__$1;
(statearr_37943_38067[(2)] = inst_37923);

(statearr_37943_38067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (72))){
var inst_37818 = (state_37932[(2)]);
var inst_37819 = cljs.core.get.call(null,inst_37818,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_37820 = cljs.core.get.call(null,inst_37818,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_37821 = cljs.core.get.call(null,inst_37818,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_37822 = cljs.core.get.call(null,inst_37818,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_37823 = cljs.core.get.call(null,inst_37818,new cljs.core.Keyword(null,"value","value",305978217));
var inst_37824 = encodeURIComponent(inst_37819);
var inst_37825 = encodeURIComponent(inst_37820);
var inst_37826 = encodeURIComponent(inst_37821);
var inst_37827 = encodeURIComponent(inst_37822);
var inst_37828 = encodeURIComponent(inst_37823);
var inst_37829 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_37824),cljs.core.str("&lst-name="),cljs.core.str(inst_37825),cljs.core.str("&orig-name="),cljs.core.str(inst_37826),cljs.core.str("&col-name="),cljs.core.str(inst_37827),cljs.core.str("&value="),cljs.core.str(inst_37828)].join('');
var inst_37830 = cloudxmark.core.jsonp.call(null,inst_37829);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(73),inst_37830);
} else {
if((state_val_37933 === (58))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_37944_38068 = state_37932__$1;
(statearr_37944_38068[(2)] = inst_37565);

(statearr_37944_38068[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (60))){
var inst_37777 = (state_37932[(2)]);
var inst_37778 = cljs.core.js__GT_clj.call(null,inst_37777);
var inst_37779 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37778,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_37780 = cljs.core.List.EMPTY;
var inst_37781 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37782 = cljs.core._conj.call(null,inst_37780,inst_37781);
var inst_37783 = cljs.core.List.EMPTY;
var inst_37784 = cljs.core._conj.call(null,inst_37783,inst_37779);
var inst_37785 = cljs.core.concat.call(null,inst_37782,inst_37784);
var inst_37786 = cljs.core.seq.call(null,inst_37785);
var inst_37787 = cljs.core.sequence.call(null,inst_37786);
var inst_37788 = cljs.core.List.EMPTY;
var inst_37789 = cljs.core._conj.call(null,inst_37788,inst_37787);
var inst_37790 = cljs.core.concat.call(null,inst_37789);
var inst_37791 = cljs.core.seq.call(null,inst_37790);
var inst_37792 = cljs.core.sequence.call(null,inst_37791);
var inst_37793 = cljs.core.vec.call(null,inst_37792);
var inst_37794 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37793);
var state_37932__$1 = state_37932;
var statearr_37945_38069 = state_37932__$1;
(statearr_37945_38069[(2)] = inst_37794);

(statearr_37945_38069[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (27))){
var inst_37565 = (state_37932[(7)]);
var inst_37641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_37946_38070 = state_37932__$1;
(statearr_37946_38070[(2)] = inst_37641);

(statearr_37946_38070[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (1))){
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(2),c);
} else {
if((state_val_37933 === (69))){
var inst_37810 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37947_38071 = state_37932__$1;
(statearr_37947_38071[(2)] = inst_37810);

(statearr_37947_38071[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (24))){
var state_37932__$1 = state_37932;
var statearr_37948_38072 = state_37932__$1;
(statearr_37948_38072[(2)] = true);

(statearr_37948_38072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (55))){
var state_37932__$1 = state_37932;
var statearr_37949_38073 = state_37932__$1;
(statearr_37949_38073[(2)] = false);

(statearr_37949_38073[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (85))){
var inst_37878 = (state_37932[(11)]);
var inst_37875 = (state_37932[(2)]);
var inst_37876 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_37877 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_37878__$1 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_37879 = cljs.core.empty_QMARK_.call(null,inst_37878__$1);
var state_37932__$1 = (function (){var statearr_37950 = state_37932;
(statearr_37950[(12)] = inst_37877);

(statearr_37950[(13)] = inst_37876);

(statearr_37950[(11)] = inst_37878__$1);

return statearr_37950;
})();
if(inst_37879){
var statearr_37951_38074 = state_37932__$1;
(statearr_37951_38074[(1)] = (86));

} else {
var statearr_37952_38075 = state_37932__$1;
(statearr_37952_38075[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (39))){
var state_37932__$1 = state_37932;
var statearr_37953_38076 = state_37932__$1;
(statearr_37953_38076[(2)] = false);

(statearr_37953_38076[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (88))){
var inst_37885 = (state_37932[(2)]);
var inst_37886 = [cljs.core.str("/getItems?"),cljs.core.str(inst_37885)].join('');
var inst_37887 = cloudxmark.core.jsonp.call(null,inst_37886);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(89),inst_37887);
} else {
if((state_val_37933 === (46))){
var inst_37718 = (state_37932[(2)]);
var inst_37719 = cljs.core.get.call(null,inst_37718,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_37720 = cljs.core.get.call(null,inst_37718,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_37721 = encodeURIComponent(inst_37719);
var inst_37722 = encodeURIComponent(inst_37720);
var inst_37723 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_37721),cljs.core.str("&desc="),cljs.core.str(inst_37722)].join('');
var inst_37724 = cloudxmark.core.jsonp.call(null,inst_37723);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(47),inst_37724);
} else {
if((state_val_37933 === (4))){
var inst_37930 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37932__$1,inst_37930);
} else {
if((state_val_37933 === (77))){
var inst_37565 = (state_37932[(7)]);
var inst_37860 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37861 = (inst_37860 & (64));
var inst_37862 = inst_37565.cljs$core$ISeq$;
var inst_37863 = (inst_37861) || (inst_37862);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37863)){
var statearr_37954_38077 = state_37932__$1;
(statearr_37954_38077[(1)] = (80));

} else {
var statearr_37955_38078 = state_37932__$1;
(statearr_37955_38078[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (54))){
var state_37932__$1 = state_37932;
var statearr_37956_38079 = state_37932__$1;
(statearr_37956_38079[(2)] = true);

(statearr_37956_38079[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (92))){
var inst_37911 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37957_38080 = state_37932__$1;
(statearr_37957_38080[(2)] = inst_37911);

(statearr_37957_38080[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (15))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_37958_38081 = state_37932__$1;
(statearr_37958_38081[(2)] = inst_37565);

(statearr_37958_38081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (48))){
var inst_37565 = (state_37932[(7)]);
var inst_37749 = (inst_37565 == null);
var inst_37750 = cljs.core.not.call(null,inst_37749);
var state_37932__$1 = state_37932;
if(inst_37750){
var statearr_37959_38082 = state_37932__$1;
(statearr_37959_38082[(1)] = (51));

} else {
var statearr_37960_38083 = state_37932__$1;
(statearr_37960_38083[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (50))){
var inst_37917 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37961_38084 = state_37932__$1;
(statearr_37961_38084[(2)] = inst_37917);

(statearr_37961_38084[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (75))){
var state_37932__$1 = state_37932;
var statearr_37962_38085 = state_37932__$1;
(statearr_37962_38085[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (21))){
var inst_37565 = (state_37932[(7)]);
var inst_37629 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37630 = (inst_37629 & (64));
var inst_37631 = inst_37565.cljs$core$ISeq$;
var inst_37632 = (inst_37630) || (inst_37631);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37632)){
var statearr_37964_38086 = state_37932__$1;
(statearr_37964_38086[(1)] = (24));

} else {
var statearr_37965_38087 = state_37932__$1;
(statearr_37965_38087[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (31))){
var inst_37675 = cloudxmark.core.jsonp.call(null,"/logout");
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(34),inst_37675);
} else {
if((state_val_37933 === (32))){
var inst_37564 = (state_37932[(8)]);
var inst_37696 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_37932__$1 = state_37932;
if(inst_37696){
var statearr_37966_38088 = state_37932__$1;
(statearr_37966_38088[(1)] = (35));

} else {
var statearr_37967_38089 = state_37932__$1;
(statearr_37967_38089[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (40))){
var inst_37713 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37713)){
var statearr_37968_38090 = state_37932__$1;
(statearr_37968_38090[(1)] = (44));

} else {
var statearr_37969_38091 = state_37932__$1;
(statearr_37969_38091[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (91))){
var state_37932__$1 = state_37932;
var statearr_37970_38092 = state_37932__$1;
(statearr_37970_38092[(2)] = null);

(statearr_37970_38092[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (56))){
var inst_37759 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37971_38093 = state_37932__$1;
(statearr_37971_38093[(2)] = inst_37759);

(statearr_37971_38093[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (33))){
var inst_37921 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37972_38094 = state_37932__$1;
(statearr_37972_38094[(2)] = inst_37921);

(statearr_37972_38094[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (13))){
var inst_37583 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37973_38095 = state_37932__$1;
(statearr_37973_38095[(2)] = inst_37583);

(statearr_37973_38095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (22))){
var state_37932__$1 = state_37932;
var statearr_37974_38096 = state_37932__$1;
(statearr_37974_38096[(2)] = false);

(statearr_37974_38096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (90))){
var state_37932__$1 = state_37932;
var statearr_37975_38097 = state_37932__$1;
(statearr_37975_38097[(2)] = null);

(statearr_37975_38097[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (36))){
var inst_37564 = (state_37932[(8)]);
var inst_37745 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_37932__$1 = state_37932;
if(inst_37745){
var statearr_37976_38098 = state_37932__$1;
(statearr_37976_38098[(1)] = (48));

} else {
var statearr_37977_38099 = state_37932__$1;
(statearr_37977_38099[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (41))){
var state_37932__$1 = state_37932;
var statearr_37978_38100 = state_37932__$1;
(statearr_37978_38100[(2)] = true);

(statearr_37978_38100[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (89))){
var inst_37877 = (state_37932[(12)]);
var inst_37889 = (state_37932[(2)]);
var inst_37890 = cljs.core.js__GT_clj.call(null,inst_37889);
var inst_37891 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37890,inst_37877,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_37892 = cljs.core.List.EMPTY;
var inst_37893 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37894 = cljs.core._conj.call(null,inst_37892,inst_37893);
var inst_37895 = cljs.core.List.EMPTY;
var inst_37896 = cljs.core._conj.call(null,inst_37895,inst_37891);
var inst_37897 = cljs.core.concat.call(null,inst_37894,inst_37896);
var inst_37898 = cljs.core.seq.call(null,inst_37897);
var inst_37899 = cljs.core.sequence.call(null,inst_37898);
var inst_37900 = cljs.core.List.EMPTY;
var inst_37901 = cljs.core._conj.call(null,inst_37900,inst_37899);
var inst_37902 = cljs.core.concat.call(null,inst_37901);
var inst_37903 = cljs.core.seq.call(null,inst_37902);
var inst_37904 = cljs.core.sequence.call(null,inst_37903);
var inst_37905 = cljs.core.vec.call(null,inst_37904);
var inst_37906 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37905);
var state_37932__$1 = state_37932;
var statearr_37979_38101 = state_37932__$1;
(statearr_37979_38101[(2)] = inst_37906);

(statearr_37979_38101[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (43))){
var inst_37710 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37980_38102 = state_37932__$1;
(statearr_37980_38102[(2)] = inst_37710);

(statearr_37980_38102[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (61))){
var inst_37565 = (state_37932[(7)]);
var inst_37800 = (inst_37565 == null);
var inst_37801 = cljs.core.not.call(null,inst_37800);
var state_37932__$1 = state_37932;
if(inst_37801){
var statearr_37981_38103 = state_37932__$1;
(statearr_37981_38103[(1)] = (64));

} else {
var statearr_37982_38104 = state_37932__$1;
(statearr_37982_38104[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (29))){
var inst_37644 = (state_37932[(2)]);
var inst_37645 = cljs.core.get.call(null,inst_37644,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_37646 = cljs.core.get.call(null,inst_37644,new cljs.core.Keyword(null,"password","password",417022471));
var inst_37647 = cljs.core.get.call(null,inst_37644,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_37648 = cloudxmark.core.enc_password.call(null,inst_37646);
var inst_37649 = encodeURIComponent(inst_37645);
var inst_37650 = encodeURIComponent(inst_37648);
var inst_37651 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_37649),cljs.core.str("&pass="),cljs.core.str(inst_37650)].join('');
var inst_37652 = cloudxmark.core.jsonp.call(null,inst_37651);
var state_37932__$1 = (function (){var statearr_37983 = state_37932;
(statearr_37983[(14)] = inst_37647);

return statearr_37983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(30),inst_37652);
} else {
if((state_val_37933 === (44))){
var inst_37565 = (state_37932[(7)]);
var inst_37715 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_37984_38105 = state_37932__$1;
(statearr_37984_38105[(2)] = inst_37715);

(statearr_37984_38105[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (93))){
var inst_37927 = (state_37932[(2)]);
var inst_37559 = inst_37927;
var state_37932__$1 = (function (){var statearr_37985 = state_37932;
(statearr_37985[(15)] = inst_37559);

return statearr_37985;
})();
var statearr_37986_38106 = state_37932__$1;
(statearr_37986_38106[(2)] = null);

(statearr_37986_38106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (6))){
var inst_37564 = (state_37932[(8)]);
var inst_37622 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_37932__$1 = state_37932;
if(inst_37622){
var statearr_37987_38107 = state_37932__$1;
(statearr_37987_38107[(1)] = (18));

} else {
var statearr_37988_38108 = state_37932__$1;
(statearr_37988_38108[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (28))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_37989_38109 = state_37932__$1;
(statearr_37989_38109[(2)] = inst_37565);

(statearr_37989_38109[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (64))){
var inst_37565 = (state_37932[(7)]);
var inst_37803 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37804 = (inst_37803 & (64));
var inst_37805 = inst_37565.cljs$core$ISeq$;
var inst_37806 = (inst_37804) || (inst_37805);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37806)){
var statearr_37990_38110 = state_37932__$1;
(statearr_37990_38110[(1)] = (67));

} else {
var statearr_37991_38111 = state_37932__$1;
(statearr_37991_38111[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (51))){
var inst_37565 = (state_37932[(7)]);
var inst_37752 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37753 = (inst_37752 & (64));
var inst_37754 = inst_37565.cljs$core$ISeq$;
var inst_37755 = (inst_37753) || (inst_37754);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37755)){
var statearr_37992_38112 = state_37932__$1;
(statearr_37992_38112[(1)] = (54));

} else {
var statearr_37993_38113 = state_37932__$1;
(statearr_37993_38113[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (25))){
var state_37932__$1 = state_37932;
var statearr_37994_38114 = state_37932__$1;
(statearr_37994_38114[(2)] = false);

(statearr_37994_38114[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (34))){
var inst_37677 = (state_37932[(2)]);
var inst_37678 = cljs.core.js__GT_clj.call(null,inst_37677);
var inst_37679 = cloudxmark.core.convert_json_status.call(null,inst_37678,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_37680 = cljs.core.List.EMPTY;
var inst_37681 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_37682 = cljs.core._conj.call(null,inst_37680,inst_37681);
var inst_37683 = cljs.core.List.EMPTY;
var inst_37684 = cljs.core._conj.call(null,inst_37683,inst_37679);
var inst_37685 = cljs.core.concat.call(null,inst_37682,inst_37684);
var inst_37686 = cljs.core.seq.call(null,inst_37685);
var inst_37687 = cljs.core.sequence.call(null,inst_37686);
var inst_37688 = cljs.core.List.EMPTY;
var inst_37689 = cljs.core._conj.call(null,inst_37688,inst_37687);
var inst_37690 = cljs.core.concat.call(null,inst_37689);
var inst_37691 = cljs.core.seq.call(null,inst_37690);
var inst_37692 = cljs.core.sequence.call(null,inst_37691);
var inst_37693 = cljs.core.vec.call(null,inst_37692);
var inst_37694 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37693);
var state_37932__$1 = state_37932;
var statearr_37995_38115 = state_37932__$1;
(statearr_37995_38115[(2)] = inst_37694);

(statearr_37995_38115[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (17))){
var inst_37593 = (state_37932[(16)]);
var inst_37594 = (state_37932[(17)]);
var inst_37600 = (state_37932[(2)]);
var inst_37601 = cljs.core.js__GT_clj.call(null,inst_37600);
var inst_37602 = cloudxmark.core.gen_key_bytes.call(null,inst_37593);
var inst_37603 = cloudxmark.core.create_aes_cbc.call(null,inst_37602);
var inst_37604 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37601,inst_37594,new cljs.core.Keyword(null,"login","login",55217519));
var inst_37605 = cljs.core.assoc.call(null,inst_37604,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_37603);
var inst_37606 = cljs.core.List.EMPTY;
var inst_37607 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37608 = cljs.core._conj.call(null,inst_37606,inst_37607);
var inst_37609 = cljs.core.List.EMPTY;
var inst_37610 = cljs.core._conj.call(null,inst_37609,inst_37605);
var inst_37611 = cljs.core.concat.call(null,inst_37608,inst_37610);
var inst_37612 = cljs.core.seq.call(null,inst_37611);
var inst_37613 = cljs.core.sequence.call(null,inst_37612);
var inst_37614 = cljs.core.List.EMPTY;
var inst_37615 = cljs.core._conj.call(null,inst_37614,inst_37613);
var inst_37616 = cljs.core.concat.call(null,inst_37615);
var inst_37617 = cljs.core.seq.call(null,inst_37616);
var inst_37618 = cljs.core.sequence.call(null,inst_37617);
var inst_37619 = cljs.core.vec.call(null,inst_37618);
var inst_37620 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37619);
var state_37932__$1 = state_37932;
var statearr_37996_38116 = state_37932__$1;
(statearr_37996_38116[(2)] = inst_37620);

(statearr_37996_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (3))){
var inst_37564 = (state_37932[(8)]);
var inst_37559 = (state_37932[(15)]);
var inst_37564__$1 = cljs.core.nth.call(null,inst_37559,(0),null);
var inst_37565 = cljs.core.nth.call(null,inst_37559,(1),null);
var inst_37566 = cljs.core.nth.call(null,inst_37559,(2),null);
var inst_37567 = cljs.core._EQ_.call(null,inst_37564__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_37932__$1 = (function (){var statearr_37997 = state_37932;
(statearr_37997[(8)] = inst_37564__$1);

(statearr_37997[(7)] = inst_37565);

(statearr_37997[(18)] = inst_37566);

return statearr_37997;
})();
if(inst_37567){
var statearr_37998_38117 = state_37932__$1;
(statearr_37998_38117[(1)] = (5));

} else {
var statearr_37999_38118 = state_37932__$1;
(statearr_37999_38118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (12))){
var state_37932__$1 = state_37932;
var statearr_38000_38119 = state_37932__$1;
(statearr_38000_38119[(2)] = false);

(statearr_38000_38119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (2))){
var inst_37555 = (state_37932[(2)]);
var inst_37556 = cljs.core.nth.call(null,inst_37555,(0),null);
var inst_37557 = cljs.core.nth.call(null,inst_37555,(1),null);
var inst_37558 = cljs.core.nth.call(null,inst_37555,(2),null);
var inst_37559 = inst_37555;
var state_37932__$1 = (function (){var statearr_38001 = state_37932;
(statearr_38001[(19)] = inst_37556);

(statearr_38001[(20)] = inst_37557);

(statearr_38001[(21)] = inst_37558);

(statearr_38001[(15)] = inst_37559);

return statearr_38001;
})();
var statearr_38002_38120 = state_37932__$1;
(statearr_38002_38120[(2)] = null);

(statearr_38002_38120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (66))){
var inst_37813 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37813)){
var statearr_38003_38121 = state_37932__$1;
(statearr_38003_38121[(1)] = (70));

} else {
var statearr_38004_38122 = state_37932__$1;
(statearr_38004_38122[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (23))){
var inst_37639 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37639)){
var statearr_38005_38123 = state_37932__$1;
(statearr_38005_38123[(1)] = (27));

} else {
var statearr_38006_38124 = state_37932__$1;
(statearr_38006_38124[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (47))){
var inst_37726 = (state_37932[(2)]);
var inst_37727 = cljs.core.js__GT_clj.call(null,inst_37726);
var inst_37728 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37727,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_37729 = cljs.core.List.EMPTY;
var inst_37730 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37731 = cljs.core._conj.call(null,inst_37729,inst_37730);
var inst_37732 = cljs.core.List.EMPTY;
var inst_37733 = cljs.core._conj.call(null,inst_37732,inst_37728);
var inst_37734 = cljs.core.concat.call(null,inst_37731,inst_37733);
var inst_37735 = cljs.core.seq.call(null,inst_37734);
var inst_37736 = cljs.core.sequence.call(null,inst_37735);
var inst_37737 = cljs.core.List.EMPTY;
var inst_37738 = cljs.core._conj.call(null,inst_37737,inst_37736);
var inst_37739 = cljs.core.concat.call(null,inst_37738);
var inst_37740 = cljs.core.seq.call(null,inst_37739);
var inst_37741 = cljs.core.sequence.call(null,inst_37740);
var inst_37742 = cljs.core.vec.call(null,inst_37741);
var inst_37743 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37742);
var state_37932__$1 = state_37932;
var statearr_38007_38125 = state_37932__$1;
(statearr_38007_38125[(2)] = inst_37743);

(statearr_38007_38125[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (35))){
var inst_37565 = (state_37932[(7)]);
var inst_37700 = (inst_37565 == null);
var inst_37701 = cljs.core.not.call(null,inst_37700);
var state_37932__$1 = state_37932;
if(inst_37701){
var statearr_38008_38126 = state_37932__$1;
(statearr_38008_38126[(1)] = (38));

} else {
var statearr_38009_38127 = state_37932__$1;
(statearr_38009_38127[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (82))){
var inst_37867 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_38010_38128 = state_37932__$1;
(statearr_38010_38128[(2)] = inst_37867);

(statearr_38010_38128[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (76))){
var inst_37913 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_38011_38129 = state_37932__$1;
(statearr_38011_38129[(2)] = inst_37913);

(statearr_38011_38129[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (19))){
var inst_37564 = (state_37932[(8)]);
var inst_37673 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_37932__$1 = state_37932;
if(inst_37673){
var statearr_38012_38130 = state_37932__$1;
(statearr_38012_38130[(1)] = (31));

} else {
var statearr_38013_38131 = state_37932__$1;
(statearr_38013_38131[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (57))){
var inst_37565 = (state_37932[(7)]);
var inst_37764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_38014_38132 = state_37932__$1;
(statearr_38014_38132[(2)] = inst_37764);

(statearr_38014_38132[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (68))){
var state_37932__$1 = state_37932;
var statearr_38015_38133 = state_37932__$1;
(statearr_38015_38133[(2)] = false);

(statearr_38015_38133[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (11))){
var state_37932__$1 = state_37932;
var statearr_38016_38134 = state_37932__$1;
(statearr_38016_38134[(2)] = true);

(statearr_38016_38134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (9))){
var state_37932__$1 = state_37932;
var statearr_38017_38135 = state_37932__$1;
(statearr_38017_38135[(2)] = false);

(statearr_38017_38135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (5))){
var inst_37565 = (state_37932[(7)]);
var inst_37570 = [cljs.core.str("lst login data:"),cljs.core.str(inst_37565)].join('');
var inst_37571 = cljs.core.println.call(null,inst_37570);
var inst_37573 = (inst_37565 == null);
var inst_37574 = cljs.core.not.call(null,inst_37573);
var state_37932__$1 = (function (){var statearr_38018 = state_37932;
(statearr_38018[(22)] = inst_37571);

return statearr_38018;
})();
if(inst_37574){
var statearr_38019_38136 = state_37932__$1;
(statearr_38019_38136[(1)] = (8));

} else {
var statearr_38020_38137 = state_37932__$1;
(statearr_38020_38137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (83))){
var inst_37565 = (state_37932[(7)]);
var inst_37872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_38021_38138 = state_37932__$1;
(statearr_38021_38138[(2)] = inst_37872);

(statearr_38021_38138[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (14))){
var inst_37565 = (state_37932[(7)]);
var inst_37588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37565);
var state_37932__$1 = state_37932;
var statearr_38022_38139 = state_37932__$1;
(statearr_38022_38139[(2)] = inst_37588);

(statearr_38022_38139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (45))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_38023_38140 = state_37932__$1;
(statearr_38023_38140[(2)] = inst_37565);

(statearr_38023_38140[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (53))){
var inst_37762 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37762)){
var statearr_38024_38141 = state_37932__$1;
(statearr_38024_38141[(1)] = (57));

} else {
var statearr_38025_38142 = state_37932__$1;
(statearr_38025_38142[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (78))){
var state_37932__$1 = state_37932;
var statearr_38026_38143 = state_37932__$1;
(statearr_38026_38143[(2)] = false);

(statearr_38026_38143[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (26))){
var inst_37636 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_38027_38144 = state_37932__$1;
(statearr_38027_38144[(2)] = inst_37636);

(statearr_38027_38144[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (16))){
var inst_37593 = (state_37932[(16)]);
var inst_37591 = (state_37932[(2)]);
var inst_37592 = cljs.core.get.call(null,inst_37591,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_37593__$1 = cljs.core.get.call(null,inst_37591,new cljs.core.Keyword(null,"password","password",417022471));
var inst_37594 = cljs.core.get.call(null,inst_37591,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_37595 = encodeURIComponent(inst_37592);
var inst_37596 = encodeURIComponent(inst_37593__$1);
var inst_37597 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_37595),cljs.core.str("&pass="),cljs.core.str(inst_37596)].join('');
var inst_37598 = cloudxmark.core.jsonp.call(null,inst_37597);
var state_37932__$1 = (function (){var statearr_38028 = state_37932;
(statearr_38028[(16)] = inst_37593__$1);

(statearr_38028[(17)] = inst_37594);

return statearr_38028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37932__$1,(17),inst_37598);
} else {
if((state_val_37933 === (81))){
var state_37932__$1 = state_37932;
var statearr_38029_38145 = state_37932__$1;
(statearr_38029_38145[(2)] = false);

(statearr_38029_38145[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (79))){
var inst_37870 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37870)){
var statearr_38030_38146 = state_37932__$1;
(statearr_38030_38146[(1)] = (83));

} else {
var statearr_38031_38147 = state_37932__$1;
(statearr_38031_38147[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (38))){
var inst_37565 = (state_37932[(7)]);
var inst_37703 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37704 = (inst_37703 & (64));
var inst_37705 = inst_37565.cljs$core$ISeq$;
var inst_37706 = (inst_37704) || (inst_37705);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37706)){
var statearr_38032_38148 = state_37932__$1;
(statearr_38032_38148[(1)] = (41));

} else {
var statearr_38033_38149 = state_37932__$1;
(statearr_38033_38149[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (87))){
var inst_37878 = (state_37932[(11)]);
var inst_37882 = encodeURIComponent(inst_37878);
var inst_37883 = [cljs.core.str("query="),cljs.core.str(inst_37882)].join('');
var state_37932__$1 = state_37932;
var statearr_38034_38150 = state_37932__$1;
(statearr_38034_38150[(2)] = inst_37883);

(statearr_38034_38150[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (30))){
var inst_37654 = (state_37932[(2)]);
var inst_37655 = cljs.core.js__GT_clj.call(null,inst_37654);
var inst_37656 = cloudxmark.core.convert_json_status.call(null,inst_37655,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_37657 = cljs.core.List.EMPTY;
var inst_37658 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_37659 = cljs.core._conj.call(null,inst_37657,inst_37658);
var inst_37660 = cljs.core.List.EMPTY;
var inst_37661 = cljs.core._conj.call(null,inst_37660,inst_37656);
var inst_37662 = cljs.core.concat.call(null,inst_37659,inst_37661);
var inst_37663 = cljs.core.seq.call(null,inst_37662);
var inst_37664 = cljs.core.sequence.call(null,inst_37663);
var inst_37665 = cljs.core.List.EMPTY;
var inst_37666 = cljs.core._conj.call(null,inst_37665,inst_37664);
var inst_37667 = cljs.core.concat.call(null,inst_37666);
var inst_37668 = cljs.core.seq.call(null,inst_37667);
var inst_37669 = cljs.core.sequence.call(null,inst_37668);
var inst_37670 = cljs.core.vec.call(null,inst_37669);
var inst_37671 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37670);
var state_37932__$1 = state_37932;
var statearr_38035_38151 = state_37932__$1;
(statearr_38035_38151[(2)] = inst_37671);

(statearr_38035_38151[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (73))){
var inst_37832 = (state_37932[(2)]);
var inst_37833 = cljs.core.js__GT_clj.call(null,inst_37832);
var inst_37834 = cloudxmark.core.convert_json_lsts_result.call(null,inst_37833,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_37835 = cljs.core.List.EMPTY;
var inst_37836 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_37837 = cljs.core._conj.call(null,inst_37835,inst_37836);
var inst_37838 = cljs.core.List.EMPTY;
var inst_37839 = cljs.core._conj.call(null,inst_37838,inst_37834);
var inst_37840 = cljs.core.concat.call(null,inst_37837,inst_37839);
var inst_37841 = cljs.core.seq.call(null,inst_37840);
var inst_37842 = cljs.core.sequence.call(null,inst_37841);
var inst_37843 = cljs.core.List.EMPTY;
var inst_37844 = cljs.core._conj.call(null,inst_37843,inst_37842);
var inst_37845 = cljs.core.concat.call(null,inst_37844);
var inst_37846 = cljs.core.seq.call(null,inst_37845);
var inst_37847 = cljs.core.sequence.call(null,inst_37846);
var inst_37848 = cljs.core.vec.call(null,inst_37847);
var inst_37849 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_37848);
var state_37932__$1 = state_37932;
var statearr_38036_38152 = state_37932__$1;
(statearr_38036_38152[(2)] = inst_37849);

(statearr_38036_38152[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (10))){
var inst_37586 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37586)){
var statearr_38037_38153 = state_37932__$1;
(statearr_38037_38153[(1)] = (14));

} else {
var statearr_38038_38154 = state_37932__$1;
(statearr_38038_38154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (18))){
var inst_37565 = (state_37932[(7)]);
var inst_37626 = (inst_37565 == null);
var inst_37627 = cljs.core.not.call(null,inst_37626);
var state_37932__$1 = state_37932;
if(inst_37627){
var statearr_38039_38155 = state_37932__$1;
(statearr_38039_38155[(1)] = (21));

} else {
var statearr_38040_38156 = state_37932__$1;
(statearr_38040_38156[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (52))){
var state_37932__$1 = state_37932;
var statearr_38041_38157 = state_37932__$1;
(statearr_38041_38157[(2)] = false);

(statearr_38041_38157[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (67))){
var state_37932__$1 = state_37932;
var statearr_38042_38158 = state_37932__$1;
(statearr_38042_38158[(2)] = true);

(statearr_38042_38158[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (71))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_38043_38159 = state_37932__$1;
(statearr_38043_38159[(2)] = inst_37565);

(statearr_38043_38159[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (42))){
var state_37932__$1 = state_37932;
var statearr_38044_38160 = state_37932__$1;
(statearr_38044_38160[(2)] = false);

(statearr_38044_38160[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (80))){
var state_37932__$1 = state_37932;
var statearr_38045_38161 = state_37932__$1;
(statearr_38045_38161[(2)] = true);

(statearr_38045_38161[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (37))){
var inst_37919 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_38046_38162 = state_37932__$1;
(statearr_38046_38162[(2)] = inst_37919);

(statearr_38046_38162[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (63))){
var inst_37915 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_38047_38163 = state_37932__$1;
(statearr_38047_38163[(2)] = inst_37915);

(statearr_38047_38163[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (8))){
var inst_37565 = (state_37932[(7)]);
var inst_37576 = inst_37565.cljs$lang$protocol_mask$partition0$;
var inst_37577 = (inst_37576 & (64));
var inst_37578 = inst_37565.cljs$core$ISeq$;
var inst_37579 = (inst_37577) || (inst_37578);
var state_37932__$1 = state_37932;
if(cljs.core.truth_(inst_37579)){
var statearr_38048_38164 = state_37932__$1;
(statearr_38048_38164[(1)] = (11));

} else {
var statearr_38049_38165 = state_37932__$1;
(statearr_38049_38165[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (49))){
var inst_37564 = (state_37932[(8)]);
var inst_37796 = cljs.core._EQ_.call(null,inst_37564,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_37932__$1 = state_37932;
if(inst_37796){
var statearr_38050_38166 = state_37932__$1;
(statearr_38050_38166[(1)] = (61));

} else {
var statearr_38051_38167 = state_37932__$1;
(statearr_38051_38167[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (84))){
var inst_37565 = (state_37932[(7)]);
var state_37932__$1 = state_37932;
var statearr_38052_38168 = state_37932__$1;
(statearr_38052_38168[(2)] = inst_37565);

(statearr_38052_38168[(1)] = (85));


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
var statearr_38056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38056[(0)] = cloudxmark$core$search_loop_$_state_machine__28357__auto__);

(statearr_38056[(1)] = (1));

return statearr_38056;
});
var cloudxmark$core$search_loop_$_state_machine__28357__auto____1 = (function (state_37932){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_37932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e38057){if((e38057 instanceof Object)){
var ex__28360__auto__ = e38057;
var statearr_38058_38169 = state_37932;
(statearr_38058_38169[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38170 = state_37932;
state_37932 = G__38170;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__28357__auto__ = function(state_37932){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__28357__auto____1.call(this,state_37932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__28357__auto____0;
cloudxmark$core$search_loop_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__28357__auto____1;
return cloudxmark$core$search_loop_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_38059 = f__28380__auto__.call(null);
(statearr_38059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_38059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471912807179