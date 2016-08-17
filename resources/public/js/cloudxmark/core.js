// Compiled by ClojureScript 1.9.211 {}
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
var idx_35216 = (0);
while(true){
var len1_35217 = b1.length;
if((cljs.core._EQ_.call(null,idx_35216,len1_35217)) || (cljs.core._EQ_.call(null,idx_35216,max_len))){
} else {
(b1[idx_35216] = ((b1[idx_35216]) ^ (b2[idx_35216])));

var G__35218 = (idx_35216 + (1));
idx_35216 = G__35218;
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
var args35221 = [];
var len__22772__auto___35224 = arguments.length;
var i__22773__auto___35225 = (0);
while(true){
if((i__22773__auto___35225 < len__22772__auto___35224)){
args35221.push((arguments[i__22773__auto___35225]));

var G__35226 = (i__22773__auto___35225 + (1));
i__22773__auto___35225 = G__35226;
continue;
} else {
}
break;
}

var G__35223 = args35221.length;
switch (G__35223) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35221.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__35219_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35219_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__35220_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__35220_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22612__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22616__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22616__auto__,method_table__22612__auto__,prefer_table__22613__auto__,method_cache__22614__auto__,cached_hierarchy__22615__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__35228,_,p__35229){
var map__35230 = p__35228;
var map__35230__$1 = ((((!((map__35230 == null)))?((((map__35230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35230):map__35230);
var env = map__35230__$1;
var state = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__35231 = p__35229;
var map__35231__$1 = ((((!((map__35231 == null)))?((((map__35231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35231):map__35231);
var query_ver = cljs.core.get.call(null,map__35231__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__35231__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__35234 = lst;
var map__35234__$1 = ((((!((map__35234 == null)))?((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var lsts = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_35236 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_35236);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22612__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22616__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22616__auto__,method_table__22612__auto__,prefer_table__22613__auto__,method_cache__22614__auto__,cached_hierarchy__22615__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__35237,_,p__35238){
var map__35239 = p__35237;
var map__35239__$1 = ((((!((map__35239 == null)))?((((map__35239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35239):map__35239);
var env = map__35239__$1;
var state = cljs.core.get.call(null,map__35239__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35240 = p__35238;
var map__35240__$1 = ((((!((map__35240 == null)))?((((map__35240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35240):map__35240);
var status = map__35240__$1;
var id = cljs.core.get.call(null,map__35240__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35239,map__35239__$1,env,state,map__35240,map__35240__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__35239,map__35239__$1,env,state,map__35240,map__35240__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__35243,_,p__35244){
var map__35245 = p__35243;
var map__35245__$1 = ((((!((map__35245 == null)))?((((map__35245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35245):map__35245);
var env = map__35245__$1;
var state = cljs.core.get.call(null,map__35245__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35246 = p__35244;
var map__35246__$1 = ((((!((map__35246 == null)))?((((map__35246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35246):map__35246);
var path = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__35246__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35245,map__35245__$1,env,state,map__35246,map__35246__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__35245,map__35245__$1,env,state,map__35246,map__35246__$1,path,merge_QMARK_,value))
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__35249,_,p__35250){
var map__35251 = p__35249;
var map__35251__$1 = ((((!((map__35251 == null)))?((((map__35251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35251):map__35251);
var env = map__35251__$1;
var state = cljs.core.get.call(null,map__35251__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35252 = p__35250;
var map__35252__$1 = ((((!((map__35252 == null)))?((((map__35252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35252):map__35252);
var data_map = map__35252__$1;
var lst_name = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var item_name = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"item-name","item-name",1560972259));
var col_name = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35251,map__35251__$1,env,state,map__35252,map__35252__$1,data_map,lst_name,item_name,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cloudxmark.core.get_by_map_val.call(null,"name",lst_name,lsts);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cloudxmark.core.get_by_map_val.call(null,"name",item_name,cljs.core.get.call(null,lst,"items"));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,item_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605),lst_name,new cljs.core.Keyword(null,"item-name","item-name",1560972259),item_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__35251,map__35251__$1,env,state,map__35252,map__35252__$1,data_map,lst_name,item_name,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__35255,_,p__35256){
var map__35257 = p__35255;
var map__35257__$1 = ((((!((map__35257 == null)))?((((map__35257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35257):map__35257);
var env = map__35257__$1;
var state = cljs.core.get.call(null,map__35257__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35258 = p__35256;
var map__35258__$1 = ((((!((map__35258 == null)))?((((map__35258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35258):map__35258);
var field_id = cljs.core.get.call(null,map__35258__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__35258__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35257,map__35257__$1,env,state,map__35258,map__35258__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__35257,map__35257__$1,env,state,map__35258,map__35258__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__35261,_,p__35262){
var map__35263 = p__35261;
var map__35263__$1 = ((((!((map__35263 == null)))?((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35263):map__35263);
var env = map__35263__$1;
var state = cljs.core.get.call(null,map__35263__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35264 = p__35262;
var map__35264__$1 = ((((!((map__35264 == null)))?((((map__35264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35264):map__35264);
var data_map = map__35264__$1;
var user_id = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35263,map__35263__$1,env,state,map__35264,map__35264__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__35263,map__35263__$1,env,state,map__35264,map__35264__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__35267,_,p__35268){
var map__35269 = p__35267;
var map__35269__$1 = ((((!((map__35269 == null)))?((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var env = map__35269__$1;
var state = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35270 = p__35268;
var map__35270__$1 = ((((!((map__35270 == null)))?((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35270):map__35270);
var data_map = map__35270__$1;
var user_id = cljs.core.get.call(null,map__35270__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__35270__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35269,map__35269__$1,env,state,map__35270,map__35270__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__35269,map__35269__$1,env,state,map__35270,map__35270__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","mutate","lst/mutate",-1231649176,null),(function (p__35273,_,p__35274){
var map__35275 = p__35273;
var map__35275__$1 = ((((!((map__35275 == null)))?((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35275):map__35275);
var env = map__35275__$1;
var state = cljs.core.get.call(null,map__35275__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35276 = p__35274;
var map__35276__$1 = ((((!((map__35276 == null)))?((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35276):map__35276);
var data_map = map__35276__$1;
var type = cljs.core.get.call(null,map__35276__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fields = cljs.core.get.call(null,map__35276__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35275,map__35275__$1,env,state,map__35276,map__35276__$1,data_map,type,fields){
return (function (){
return null;
});})(map__35275,map__35275__$1,env,state,map__35276,map__35276__$1,data_map,type,fields))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__35279,_,p__35280){
var map__35281 = p__35279;
var map__35281__$1 = ((((!((map__35281 == null)))?((((map__35281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35281):map__35281);
var env = map__35281__$1;
var state = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35282 = p__35280;
var map__35282__$1 = ((((!((map__35282 == null)))?((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35282):map__35282);
var data_map = map__35282__$1;
var name = cljs.core.get.call(null,map__35282__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__35282__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35281,map__35281__$1,env,state,map__35282,map__35282__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__35281,map__35281__$1,env,state,map__35282,map__35282__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__35285,_,p__35286){
var map__35287 = p__35285;
var map__35287__$1 = ((((!((map__35287 == null)))?((((map__35287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35287):map__35287);
var env = map__35287__$1;
var state = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35288 = p__35286;
var map__35288__$1 = ((((!((map__35288 == null)))?((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35288):map__35288);
var data_map = map__35288__$1;
var name = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35287,map__35287__$1,env,state,map__35288,map__35288__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr_lst_name = (function (){var or__21589__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037)], null));
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return cljs.core.get.call(null,cljs.core.first.call(null,lsts),"name");
}
})();
var curr_lst = cloudxmark.core.get_by_map_val.call(null,"name",curr_lst_name,lsts);
var lst_id = cljs.core.get.call(null,curr_lst,"lst_id");
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__35287,map__35287__$1,env,state,map__35288,map__35288__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__35291,_,___$1){
var map__35292 = p__35291;
var map__35292__$1 = ((((!((map__35292 == null)))?((((map__35292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35292):map__35292);
var env = map__35292__$1;
var state = cljs.core.get.call(null,map__35292__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35292,map__35292__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__35292,map__35292__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__35294,_,p__35295){
var map__35296 = p__35294;
var map__35296__$1 = ((((!((map__35296 == null)))?((((map__35296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35296):map__35296);
var env = map__35296__$1;
var state = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__35297 = p__35295;
var map__35297__$1 = ((((!((map__35297 == null)))?((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var data_map = map__35297__$1;
var status = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__35296,map__35296__$1,env,state,map__35297,map__35297__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
if(cljs.core.truth_((function (){var and__21577__auto__ = status;
if(cljs.core.truth_(and__21577__auto__)){
return status_id;
} else {
return and__21577__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__35296,map__35296__$1,env,state,map__35297,map__35297__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037),null,new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args35300 = [];
var len__22772__auto___35303 = arguments.length;
var i__22773__auto___35304 = (0);
while(true){
if((i__22773__auto___35304 < len__22772__auto___35303)){
args35300.push((arguments[i__22773__auto___35304]));

var G__35305 = (i__22773__auto___35304 + (1));
i__22773__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var G__35302 = args35300.length;
switch (G__35302) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35300.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,({"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21589__auto__ = field_state;
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22515__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22515__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
}));
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_name,item,col_name){
var field_val = (function (){var or__21589__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return "";
}
})();
var item_name = cljs.core.get.call(null,item,"name");
return om.dom.input.call(null,({"key": [cljs.core.str("item-field-"),cljs.core.str(lst_name),cljs.core.str("-"),cljs.core.str(item_name),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val,item_name){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605)),(function (){var x__22515__auto__ = lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-name","item-name",1560972259)),(function (){var x__22515__auto__ = item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22515__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22515__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
});})(field_val,item_name))
}));
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul(({"key": "result-list"}),om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li(({"key": idx}),om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__35307){
var map__35313 = p__35307;
var map__35313__$1 = ((((!((map__35313 == null)))?((((map__35313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35313):map__35313);
var info = cljs.core.get.call(null,map__35313__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__35313__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__35313__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__35315 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__35315,(0),null);
var msg = cljs.core.nth.call(null,vec__35315,(1),null);
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
var new_item_value = (function (){var or__21589__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22515__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22515__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22515__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22515__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22515__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22515__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
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
var new_lst_description = (function (){var or__21589__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22515__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22515__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22515__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
}
})}),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp,selected_lst_name){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__35320 = lst;
var map__35320__$1 = ((((!((map__35320 == null)))?((((map__35320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35320):map__35320);
var lsts = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var selected_lst = cloudxmark.core.get_by_map_val.call(null,"name",selected_lst_name,lsts);
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,selected_lst,"items"):null);
return React.DOM.div(({}),om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div(({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,cljs.core.map.call(null,((function (lst,map__35320,map__35320__$1,lsts,status,selected_lst,items){
return (function (item){
return React.DOM.div(({"key": [cljs.core.str("item-"),cljs.core.str(cljs.core.get.call(null,item,"name"))].join('')}),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,selected_lst_name,item,"value")));
});})(lst,map__35320,map__35320__$1,lsts,status,selected_lst,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div(({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(selected_lst_name)].join('')}),om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35324 = lst;
var map__35324__$1 = ((((!((map__35324 == null)))?((((map__35324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324):map__35324);
var status = cljs.core.get.call(null,map__35324__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var selected_lst_name = (function (){var or__21589__auto__ = curr_lst_name;
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
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
var vec__35330 = (function (){var G__35333 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35333) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__35330,(0),null);
var query_key = cljs.core.nth.call(null,vec__35330,(1),null);
return om.dom.input.call(null,({"key": elem_key, "value": query, "onChange": ((function (vec__35330,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__35330,elem_key,query_key))
}));
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button(({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22515__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22515__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22515__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22515__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22515__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22515__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22515__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22515__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22515__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22515__auto__);
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
var this__34217__auto__ = this;
React.Component.apply(this__34217__auto__,arguments);

if(!((this__34217__auto__.initLocalState == null))){
this__34217__auto__.state = this__34217__auto__.initLocalState();
} else {
this__34217__auto__.state = {};
}

return this__34217__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x35339_35351 = cloudxmark.core.Lsts.prototype;
x35339_35351.componentWillUpdate = ((function (x35339_35351){
return (function (next_props__34096__auto__,next_state__34097__auto__){
var this__34095__auto__ = this;
if(((!((this__34095__auto__ == null)))?(((false) || (this__34095__auto__.om$next$Ident$))?true:false):false)){
var ident__34099__auto___35352 = om.next.ident.call(null,this__34095__auto__,om.next.props.call(null,this__34095__auto__));
var next_ident__34100__auto___35353 = om.next.ident.call(null,this__34095__auto__,om.next._next_props.call(null,next_props__34096__auto__,this__34095__auto__));
if(cljs.core.not_EQ_.call(null,ident__34099__auto___35352,next_ident__34100__auto___35353)){
var idxr__34101__auto___35354 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34095__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__34101__auto___35354 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__34101__auto___35354),((function (idxr__34101__auto___35354,ident__34099__auto___35352,next_ident__34100__auto___35353,this__34095__auto__,x35339_35351){
return (function (indexes__34102__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__34102__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__34099__auto___35352], null),cljs.core.disj,this__34095__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__34100__auto___35353], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__34095__auto__);
});})(idxr__34101__auto___35354,ident__34099__auto___35352,next_ident__34100__auto___35353,this__34095__auto__,x35339_35351))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__34095__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__34095__auto__);
});})(x35339_35351))
;

x35339_35351.shouldComponentUpdate = ((function (x35339_35351){
return (function (next_props__34096__auto__,next_state__34097__auto__){
var this__34095__auto__ = this;
var next_children__34098__auto__ = next_props__34096__auto__.children;
var next_props__34096__auto____$1 = goog.object.get(next_props__34096__auto__,"omcljs$value");
var next_props__34096__auto____$2 = (function (){var G__35341 = next_props__34096__auto____$1;
if((next_props__34096__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__35341);
} else {
return G__35341;
}
})();
var or__21589__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__34095__auto__),next_props__34096__auto____$2);
if(or__21589__auto__){
return or__21589__auto__;
} else {
var or__21589__auto____$1 = (function (){var and__21577__auto__ = this__34095__auto__.state;
if(cljs.core.truth_(and__21577__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__34095__auto__.state,"omcljs$state"),goog.object.get(next_state__34097__auto__,"omcljs$state"));
} else {
return and__21577__auto__;
}
})();
if(cljs.core.truth_(or__21589__auto____$1)){
return or__21589__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__34095__auto__.props.children,next_children__34098__auto__);
}
}
});})(x35339_35351))
;

x35339_35351.componentWillUnmount = ((function (x35339_35351){
return (function (){
var this__34095__auto__ = this;
var r__34106__auto__ = om.next.get_reconciler.call(null,this__34095__auto__);
var cfg__34107__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__34106__auto__);
var st__34108__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__34107__auto__);
var indexer__34105__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__34107__auto__);
if(cljs.core.truth_((function (){var and__21577__auto__ = !((st__34108__auto__ == null));
if(and__21577__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__34108__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__34095__auto__], null));
} else {
return and__21577__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__34108__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__34095__auto__);
} else {
}

if((indexer__34105__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__34105__auto__,this__34095__auto__);
}
});})(x35339_35351))
;

x35339_35351.componentDidUpdate = ((function (x35339_35351){
return (function (prev_props__34103__auto__,prev_state__34104__auto__){
var this__34095__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__34095__auto__);
});})(x35339_35351))
;

x35339_35351.isMounted = ((function (x35339_35351){
return (function (){
var this__34095__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__34095__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35339_35351))
;

x35339_35351.componentWillMount = ((function (x35339_35351){
return (function (){
var this__34095__auto__ = this;
var indexer__34105__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__34095__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__34105__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__34105__auto__,this__34095__auto__);
}
});})(x35339_35351))
;

x35339_35351.render = ((function (x35339_35351){
return (function (){
var this__34094__auto__ = this;
var this$ = this__34094__auto__;
var _STAR_reconciler_STAR_35342 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35343 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35344 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35345 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35346 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__34094__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__34094__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__34094__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__34094__auto__);

om.next._STAR_parent_STAR_ = this__34094__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__35347 = lst;
var map__35347__$1 = ((((!((map__35347 == null)))?((((map__35347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35347):map__35347);
var lsts = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr_lst_name = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"curr-lst-name","curr-lst-name",-2007927037));
var ver = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__35347__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var settings = cloudxmark.core.get_settings.call(null,lsts);
var settings_lst = cloudxmark.core.get_settings.call(null,lsts);
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,curr_lst_name)),om.util.force_children.call(null,cloudxmark.core.settings_editor.call(null,this$,settings_lst))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35346;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35345;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35344;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35343;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35342;
}});})(x35339_35351))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x35349_35355 = cloudxmark.core.Lsts;
/** @nocollapse */
x35349_35355.om$next$IQueryParams$ = true;

/** @nocollapse */
x35349_35355.om$next$IQueryParams$params$arity$1 = ((function (x35349_35355){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x35349_35355))
;

/** @nocollapse */
x35349_35355.om$next$IQuery$ = true;

/** @nocollapse */
x35349_35355.om$next$IQuery$query$arity$1 = ((function (x35349_35355){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x35349_35355))
;


var x35350_35356 = cloudxmark.core.Lsts.prototype;

x35350_35356.om$next$IQueryParams$ = true;


x35350_35356.om$next$IQueryParams$params$arity$1 = ((function (x35350_35356){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),null], null);
});})(x35350_35356))
;


x35350_35356.om$next$IQuery$ = true;


x35350_35356.om$next$IQuery$query$arity$1 = ((function (x35350_35356){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null),new cljs.core.Keyword(null,"query-query","query-query",-1282047666),new cljs.core.Symbol(null,"?query-query","?query-query",-1774706632,null)], null))], null);
});})(x35350_35356))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__34220__auto__,writer__34221__auto__,opt__34222__auto__){
return cljs.core._write.call(null,writer__34221__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__35365,cb){
var map__35366 = p__35365;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var lst_search = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__35368 = om.next.query__GT_ast.call(null,lst_search);
var map__35368__$1 = ((((!((map__35368 == null)))?((((map__35368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35368):map__35368);
var vec__35369 = cljs.core.get.call(null,map__35368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__35369,(0),null);
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
var map__35377 = result;
var map__35377__$1 = ((((!((map__35377 == null)))?((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35377):map__35377);
var lsts = cljs.core.get.call(null,map__35377__$1,"lsts");
var user_id = cljs.core.get.call(null,map__35377__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__35377__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__35378 = json_status;
var map__35378__$1 = ((((!((map__35378 == null)))?((((map__35378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35378):map__35378);
var info = cljs.core.get.call(null,map__35378__$1,"info");
var warn = cljs.core.get.call(null,map__35378__$1,"warn");
var error = cljs.core.get.call(null,map__35378__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__35383 = json_status;
var map__35383__$1 = ((((!((map__35383 == null)))?((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35383):map__35383);
var info = cljs.core.get.call(null,map__35383__$1,"info");
var warn = cljs.core.get.call(null,map__35383__$1,"warn");
var error = cljs.core.get.call(null,map__35383__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_36283){
var state_val_36284 = (state_36283[(1)]);
if((state_val_36284 === (65))){
var state_36283__$1 = state_36283;
var statearr_36285_36411 = state_36283__$1;
(statearr_36285_36411[(2)] = false);

(statearr_36285_36411[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (70))){
var inst_35916 = (state_36283[(7)]);
var inst_36166 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36286_36412 = state_36283__$1;
(statearr_36286_36412[(2)] = inst_36166);

(statearr_36286_36412[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (62))){
var inst_35915 = (state_36283[(8)]);
var inst_36202 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_36283__$1 = state_36283;
if(inst_36202){
var statearr_36287_36413 = state_36283__$1;
(statearr_36287_36413[(1)] = (74));

} else {
var statearr_36288_36414 = state_36283__$1;
(statearr_36288_36414[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (74))){
var inst_35916 = (state_36283[(7)]);
var inst_36205 = [cljs.core.str("lst query data:"),cljs.core.str(inst_35916)].join('');
var inst_36206 = cljs.core.println.call(null,inst_36205);
var inst_36208 = (inst_35916 == null);
var inst_36209 = cljs.core.not.call(null,inst_36208);
var state_36283__$1 = (function (){var statearr_36289 = state_36283;
(statearr_36289[(9)] = inst_36206);

return statearr_36289;
})();
if(inst_36209){
var statearr_36290_36415 = state_36283__$1;
(statearr_36290_36415[(1)] = (77));

} else {
var statearr_36291_36416 = state_36283__$1;
(statearr_36291_36416[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (7))){
var inst_36276 = (state_36283[(2)]);
var state_36283__$1 = (function (){var statearr_36292 = state_36283;
(statearr_36292[(10)] = inst_36276);

return statearr_36292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(93),c);
} else {
if((state_val_36284 === (59))){
var inst_36118 = (state_36283[(2)]);
var inst_36119 = cljs.core.get.call(null,inst_36118,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_36120 = cljs.core.get.call(null,inst_36118,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_36121 = cljs.core.get.call(null,inst_36118,new cljs.core.Keyword(null,"value","value",305978217));
var inst_36122 = encodeURIComponent(inst_36119);
var inst_36123 = encodeURIComponent(inst_36120);
var inst_36124 = encodeURIComponent(inst_36121);
var inst_36125 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_36122),cljs.core.str("&name="),cljs.core.str(inst_36123),cljs.core.str("&value="),cljs.core.str(inst_36124)].join('');
var inst_36126 = cloudxmark.core.jsonp.call(null,inst_36125);
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(60),inst_36126);
} else {
if((state_val_36284 === (86))){
var state_36283__$1 = state_36283;
var statearr_36293_36417 = state_36283__$1;
(statearr_36293_36417[(2)] = "");

(statearr_36293_36417[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (20))){
var inst_36274 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36294_36418 = state_36283__$1;
(statearr_36294_36418[(2)] = inst_36274);

(statearr_36294_36418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (72))){
var inst_36169 = (state_36283[(2)]);
var inst_36170 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_36171 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"lst-name","lst-name",-115353605));
var inst_36172 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_36173 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_36174 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"value","value",305978217));
var inst_36175 = encodeURIComponent(inst_36170);
var inst_36176 = encodeURIComponent(inst_36171);
var inst_36177 = encodeURIComponent(inst_36172);
var inst_36178 = encodeURIComponent(inst_36173);
var inst_36179 = encodeURIComponent(inst_36174);
var inst_36180 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_36175),cljs.core.str("&lst-name="),cljs.core.str(inst_36176),cljs.core.str("&orig-name="),cljs.core.str(inst_36177),cljs.core.str("&col-name="),cljs.core.str(inst_36178),cljs.core.str("&value="),cljs.core.str(inst_36179)].join('');
var inst_36181 = cloudxmark.core.jsonp.call(null,inst_36180);
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(73),inst_36181);
} else {
if((state_val_36284 === (58))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36295_36419 = state_36283__$1;
(statearr_36295_36419[(2)] = inst_35916);

(statearr_36295_36419[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (60))){
var inst_36128 = (state_36283[(2)]);
var inst_36129 = cljs.core.js__GT_clj.call(null,inst_36128);
var inst_36130 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36129,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_36131 = cljs.core.List.EMPTY;
var inst_36132 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36133 = cljs.core._conj.call(null,inst_36131,inst_36132);
var inst_36134 = cljs.core.List.EMPTY;
var inst_36135 = cljs.core._conj.call(null,inst_36134,inst_36130);
var inst_36136 = cljs.core.concat.call(null,inst_36133,inst_36135);
var inst_36137 = cljs.core.seq.call(null,inst_36136);
var inst_36138 = cljs.core.sequence.call(null,inst_36137);
var inst_36139 = cljs.core.List.EMPTY;
var inst_36140 = cljs.core._conj.call(null,inst_36139,inst_36138);
var inst_36141 = cljs.core.concat.call(null,inst_36140);
var inst_36142 = cljs.core.seq.call(null,inst_36141);
var inst_36143 = cljs.core.sequence.call(null,inst_36142);
var inst_36144 = cljs.core.vec.call(null,inst_36143);
var inst_36145 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36144);
var state_36283__$1 = state_36283;
var statearr_36296_36420 = state_36283__$1;
(statearr_36296_36420[(2)] = inst_36145);

(statearr_36296_36420[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (27))){
var inst_35916 = (state_36283[(7)]);
var inst_35992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36297_36421 = state_36283__$1;
(statearr_36297_36421[(2)] = inst_35992);

(statearr_36297_36421[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (1))){
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(2),c);
} else {
if((state_val_36284 === (69))){
var inst_36161 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36298_36422 = state_36283__$1;
(statearr_36298_36422[(2)] = inst_36161);

(statearr_36298_36422[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (24))){
var state_36283__$1 = state_36283;
var statearr_36299_36423 = state_36283__$1;
(statearr_36299_36423[(2)] = true);

(statearr_36299_36423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (55))){
var state_36283__$1 = state_36283;
var statearr_36300_36424 = state_36283__$1;
(statearr_36300_36424[(2)] = false);

(statearr_36300_36424[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (85))){
var inst_36229 = (state_36283[(11)]);
var inst_36226 = (state_36283[(2)]);
var inst_36227 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_36228 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_36229__$1 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"query-query","query-query",-1282047666));
var inst_36230 = cljs.core.empty_QMARK_.call(null,inst_36229__$1);
var state_36283__$1 = (function (){var statearr_36301 = state_36283;
(statearr_36301[(12)] = inst_36227);

(statearr_36301[(11)] = inst_36229__$1);

(statearr_36301[(13)] = inst_36228);

return statearr_36301;
})();
if(inst_36230){
var statearr_36302_36425 = state_36283__$1;
(statearr_36302_36425[(1)] = (86));

} else {
var statearr_36303_36426 = state_36283__$1;
(statearr_36303_36426[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (39))){
var state_36283__$1 = state_36283;
var statearr_36304_36427 = state_36283__$1;
(statearr_36304_36427[(2)] = false);

(statearr_36304_36427[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (88))){
var inst_36236 = (state_36283[(2)]);
var inst_36237 = [cljs.core.str("/getItems?"),cljs.core.str(inst_36236)].join('');
var inst_36238 = cloudxmark.core.jsonp.call(null,inst_36237);
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(89),inst_36238);
} else {
if((state_val_36284 === (46))){
var inst_36069 = (state_36283[(2)]);
var inst_36070 = cljs.core.get.call(null,inst_36069,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_36071 = cljs.core.get.call(null,inst_36069,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_36072 = encodeURIComponent(inst_36070);
var inst_36073 = encodeURIComponent(inst_36071);
var inst_36074 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_36072),cljs.core.str("&desc="),cljs.core.str(inst_36073)].join('');
var inst_36075 = cloudxmark.core.jsonp.call(null,inst_36074);
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(47),inst_36075);
} else {
if((state_val_36284 === (4))){
var inst_36281 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36283__$1,inst_36281);
} else {
if((state_val_36284 === (77))){
var inst_35916 = (state_36283[(7)]);
var inst_36211 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_36212 = (inst_36211 & (64));
var inst_36213 = inst_35916.cljs$core$ISeq$;
var inst_36214 = (inst_36212) || (inst_36213);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36214)){
var statearr_36305_36428 = state_36283__$1;
(statearr_36305_36428[(1)] = (80));

} else {
var statearr_36306_36429 = state_36283__$1;
(statearr_36306_36429[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (54))){
var state_36283__$1 = state_36283;
var statearr_36307_36430 = state_36283__$1;
(statearr_36307_36430[(2)] = true);

(statearr_36307_36430[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (92))){
var inst_36262 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36308_36431 = state_36283__$1;
(statearr_36308_36431[(2)] = inst_36262);

(statearr_36308_36431[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (15))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36309_36432 = state_36283__$1;
(statearr_36309_36432[(2)] = inst_35916);

(statearr_36309_36432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (48))){
var inst_35916 = (state_36283[(7)]);
var inst_36100 = (inst_35916 == null);
var inst_36101 = cljs.core.not.call(null,inst_36100);
var state_36283__$1 = state_36283;
if(inst_36101){
var statearr_36310_36433 = state_36283__$1;
(statearr_36310_36433[(1)] = (51));

} else {
var statearr_36311_36434 = state_36283__$1;
(statearr_36311_36434[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (50))){
var inst_36268 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36312_36435 = state_36283__$1;
(statearr_36312_36435[(2)] = inst_36268);

(statearr_36312_36435[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (75))){
var state_36283__$1 = state_36283;
var statearr_36313_36436 = state_36283__$1;
(statearr_36313_36436[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (21))){
var inst_35916 = (state_36283[(7)]);
var inst_35980 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_35981 = (inst_35980 & (64));
var inst_35982 = inst_35916.cljs$core$ISeq$;
var inst_35983 = (inst_35981) || (inst_35982);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_35983)){
var statearr_36315_36437 = state_36283__$1;
(statearr_36315_36437[(1)] = (24));

} else {
var statearr_36316_36438 = state_36283__$1;
(statearr_36316_36438[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (31))){
var inst_36026 = cloudxmark.core.jsonp.call(null,"/logout");
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(34),inst_36026);
} else {
if((state_val_36284 === (32))){
var inst_35915 = (state_36283[(8)]);
var inst_36047 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_36283__$1 = state_36283;
if(inst_36047){
var statearr_36317_36439 = state_36283__$1;
(statearr_36317_36439[(1)] = (35));

} else {
var statearr_36318_36440 = state_36283__$1;
(statearr_36318_36440[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (40))){
var inst_36064 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36064)){
var statearr_36319_36441 = state_36283__$1;
(statearr_36319_36441[(1)] = (44));

} else {
var statearr_36320_36442 = state_36283__$1;
(statearr_36320_36442[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (91))){
var state_36283__$1 = state_36283;
var statearr_36321_36443 = state_36283__$1;
(statearr_36321_36443[(2)] = null);

(statearr_36321_36443[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (56))){
var inst_36110 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36322_36444 = state_36283__$1;
(statearr_36322_36444[(2)] = inst_36110);

(statearr_36322_36444[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (33))){
var inst_36272 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36323_36445 = state_36283__$1;
(statearr_36323_36445[(2)] = inst_36272);

(statearr_36323_36445[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (13))){
var inst_35934 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36324_36446 = state_36283__$1;
(statearr_36324_36446[(2)] = inst_35934);

(statearr_36324_36446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (22))){
var state_36283__$1 = state_36283;
var statearr_36325_36447 = state_36283__$1;
(statearr_36325_36447[(2)] = false);

(statearr_36325_36447[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (90))){
var state_36283__$1 = state_36283;
var statearr_36326_36448 = state_36283__$1;
(statearr_36326_36448[(2)] = null);

(statearr_36326_36448[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (36))){
var inst_35915 = (state_36283[(8)]);
var inst_36096 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_36283__$1 = state_36283;
if(inst_36096){
var statearr_36327_36449 = state_36283__$1;
(statearr_36327_36449[(1)] = (48));

} else {
var statearr_36328_36450 = state_36283__$1;
(statearr_36328_36450[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (41))){
var state_36283__$1 = state_36283;
var statearr_36329_36451 = state_36283__$1;
(statearr_36329_36451[(2)] = true);

(statearr_36329_36451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (89))){
var inst_36228 = (state_36283[(13)]);
var inst_36240 = (state_36283[(2)]);
var inst_36241 = cljs.core.js__GT_clj.call(null,inst_36240);
var inst_36242 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36241,inst_36228,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_36243 = cljs.core.List.EMPTY;
var inst_36244 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36245 = cljs.core._conj.call(null,inst_36243,inst_36244);
var inst_36246 = cljs.core.List.EMPTY;
var inst_36247 = cljs.core._conj.call(null,inst_36246,inst_36242);
var inst_36248 = cljs.core.concat.call(null,inst_36245,inst_36247);
var inst_36249 = cljs.core.seq.call(null,inst_36248);
var inst_36250 = cljs.core.sequence.call(null,inst_36249);
var inst_36251 = cljs.core.List.EMPTY;
var inst_36252 = cljs.core._conj.call(null,inst_36251,inst_36250);
var inst_36253 = cljs.core.concat.call(null,inst_36252);
var inst_36254 = cljs.core.seq.call(null,inst_36253);
var inst_36255 = cljs.core.sequence.call(null,inst_36254);
var inst_36256 = cljs.core.vec.call(null,inst_36255);
var inst_36257 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36256);
var state_36283__$1 = state_36283;
var statearr_36330_36452 = state_36283__$1;
(statearr_36330_36452[(2)] = inst_36257);

(statearr_36330_36452[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (43))){
var inst_36061 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36331_36453 = state_36283__$1;
(statearr_36331_36453[(2)] = inst_36061);

(statearr_36331_36453[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (61))){
var inst_35916 = (state_36283[(7)]);
var inst_36151 = (inst_35916 == null);
var inst_36152 = cljs.core.not.call(null,inst_36151);
var state_36283__$1 = state_36283;
if(inst_36152){
var statearr_36332_36454 = state_36283__$1;
(statearr_36332_36454[(1)] = (64));

} else {
var statearr_36333_36455 = state_36283__$1;
(statearr_36333_36455[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (29))){
var inst_35995 = (state_36283[(2)]);
var inst_35996 = cljs.core.get.call(null,inst_35995,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35997 = cljs.core.get.call(null,inst_35995,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35998 = cljs.core.get.call(null,inst_35995,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35999 = cloudxmark.core.enc_password.call(null,inst_35997);
var inst_36000 = encodeURIComponent(inst_35996);
var inst_36001 = encodeURIComponent(inst_35999);
var inst_36002 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_36000),cljs.core.str("&pass="),cljs.core.str(inst_36001)].join('');
var inst_36003 = cloudxmark.core.jsonp.call(null,inst_36002);
var state_36283__$1 = (function (){var statearr_36334 = state_36283;
(statearr_36334[(14)] = inst_35998);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(30),inst_36003);
} else {
if((state_val_36284 === (44))){
var inst_35916 = (state_36283[(7)]);
var inst_36066 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36335_36456 = state_36283__$1;
(statearr_36335_36456[(2)] = inst_36066);

(statearr_36335_36456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (93))){
var inst_36278 = (state_36283[(2)]);
var inst_35910 = inst_36278;
var state_36283__$1 = (function (){var statearr_36336 = state_36283;
(statearr_36336[(15)] = inst_35910);

return statearr_36336;
})();
var statearr_36337_36457 = state_36283__$1;
(statearr_36337_36457[(2)] = null);

(statearr_36337_36457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (6))){
var inst_35915 = (state_36283[(8)]);
var inst_35973 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_36283__$1 = state_36283;
if(inst_35973){
var statearr_36338_36458 = state_36283__$1;
(statearr_36338_36458[(1)] = (18));

} else {
var statearr_36339_36459 = state_36283__$1;
(statearr_36339_36459[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (28))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36340_36460 = state_36283__$1;
(statearr_36340_36460[(2)] = inst_35916);

(statearr_36340_36460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (64))){
var inst_35916 = (state_36283[(7)]);
var inst_36154 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_36155 = (inst_36154 & (64));
var inst_36156 = inst_35916.cljs$core$ISeq$;
var inst_36157 = (inst_36155) || (inst_36156);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36157)){
var statearr_36341_36461 = state_36283__$1;
(statearr_36341_36461[(1)] = (67));

} else {
var statearr_36342_36462 = state_36283__$1;
(statearr_36342_36462[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (51))){
var inst_35916 = (state_36283[(7)]);
var inst_36103 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_36104 = (inst_36103 & (64));
var inst_36105 = inst_35916.cljs$core$ISeq$;
var inst_36106 = (inst_36104) || (inst_36105);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36106)){
var statearr_36343_36463 = state_36283__$1;
(statearr_36343_36463[(1)] = (54));

} else {
var statearr_36344_36464 = state_36283__$1;
(statearr_36344_36464[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (25))){
var state_36283__$1 = state_36283;
var statearr_36345_36465 = state_36283__$1;
(statearr_36345_36465[(2)] = false);

(statearr_36345_36465[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (34))){
var inst_36028 = (state_36283[(2)]);
var inst_36029 = cljs.core.js__GT_clj.call(null,inst_36028);
var inst_36030 = cloudxmark.core.convert_json_status.call(null,inst_36029,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_36031 = cljs.core.List.EMPTY;
var inst_36032 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_36033 = cljs.core._conj.call(null,inst_36031,inst_36032);
var inst_36034 = cljs.core.List.EMPTY;
var inst_36035 = cljs.core._conj.call(null,inst_36034,inst_36030);
var inst_36036 = cljs.core.concat.call(null,inst_36033,inst_36035);
var inst_36037 = cljs.core.seq.call(null,inst_36036);
var inst_36038 = cljs.core.sequence.call(null,inst_36037);
var inst_36039 = cljs.core.List.EMPTY;
var inst_36040 = cljs.core._conj.call(null,inst_36039,inst_36038);
var inst_36041 = cljs.core.concat.call(null,inst_36040);
var inst_36042 = cljs.core.seq.call(null,inst_36041);
var inst_36043 = cljs.core.sequence.call(null,inst_36042);
var inst_36044 = cljs.core.vec.call(null,inst_36043);
var inst_36045 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36044);
var state_36283__$1 = state_36283;
var statearr_36346_36466 = state_36283__$1;
(statearr_36346_36466[(2)] = inst_36045);

(statearr_36346_36466[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (17))){
var inst_35944 = (state_36283[(16)]);
var inst_35945 = (state_36283[(17)]);
var inst_35951 = (state_36283[(2)]);
var inst_35952 = cljs.core.js__GT_clj.call(null,inst_35951);
var inst_35953 = cloudxmark.core.gen_key_bytes.call(null,inst_35944);
var inst_35954 = cloudxmark.core.create_aes_cbc.call(null,inst_35953);
var inst_35955 = cloudxmark.core.convert_json_lsts_result.call(null,inst_35952,inst_35945,new cljs.core.Keyword(null,"login","login",55217519));
var inst_35956 = cljs.core.assoc.call(null,inst_35955,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_35954);
var inst_35957 = cljs.core.List.EMPTY;
var inst_35958 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_35959 = cljs.core._conj.call(null,inst_35957,inst_35958);
var inst_35960 = cljs.core.List.EMPTY;
var inst_35961 = cljs.core._conj.call(null,inst_35960,inst_35956);
var inst_35962 = cljs.core.concat.call(null,inst_35959,inst_35961);
var inst_35963 = cljs.core.seq.call(null,inst_35962);
var inst_35964 = cljs.core.sequence.call(null,inst_35963);
var inst_35965 = cljs.core.List.EMPTY;
var inst_35966 = cljs.core._conj.call(null,inst_35965,inst_35964);
var inst_35967 = cljs.core.concat.call(null,inst_35966);
var inst_35968 = cljs.core.seq.call(null,inst_35967);
var inst_35969 = cljs.core.sequence.call(null,inst_35968);
var inst_35970 = cljs.core.vec.call(null,inst_35969);
var inst_35971 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_35970);
var state_36283__$1 = state_36283;
var statearr_36347_36467 = state_36283__$1;
(statearr_36347_36467[(2)] = inst_35971);

(statearr_36347_36467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (3))){
var inst_35910 = (state_36283[(15)]);
var inst_35915 = (state_36283[(8)]);
var inst_35915__$1 = cljs.core.nth.call(null,inst_35910,(0),null);
var inst_35916 = cljs.core.nth.call(null,inst_35910,(1),null);
var inst_35917 = cljs.core.nth.call(null,inst_35910,(2),null);
var inst_35918 = cljs.core._EQ_.call(null,inst_35915__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_36283__$1 = (function (){var statearr_36348 = state_36283;
(statearr_36348[(18)] = inst_35917);

(statearr_36348[(7)] = inst_35916);

(statearr_36348[(8)] = inst_35915__$1);

return statearr_36348;
})();
if(inst_35918){
var statearr_36349_36468 = state_36283__$1;
(statearr_36349_36468[(1)] = (5));

} else {
var statearr_36350_36469 = state_36283__$1;
(statearr_36350_36469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (12))){
var state_36283__$1 = state_36283;
var statearr_36351_36470 = state_36283__$1;
(statearr_36351_36470[(2)] = false);

(statearr_36351_36470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (2))){
var inst_35906 = (state_36283[(2)]);
var inst_35907 = cljs.core.nth.call(null,inst_35906,(0),null);
var inst_35908 = cljs.core.nth.call(null,inst_35906,(1),null);
var inst_35909 = cljs.core.nth.call(null,inst_35906,(2),null);
var inst_35910 = inst_35906;
var state_36283__$1 = (function (){var statearr_36352 = state_36283;
(statearr_36352[(19)] = inst_35908);

(statearr_36352[(20)] = inst_35909);

(statearr_36352[(21)] = inst_35907);

(statearr_36352[(15)] = inst_35910);

return statearr_36352;
})();
var statearr_36353_36471 = state_36283__$1;
(statearr_36353_36471[(2)] = null);

(statearr_36353_36471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (66))){
var inst_36164 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36164)){
var statearr_36354_36472 = state_36283__$1;
(statearr_36354_36472[(1)] = (70));

} else {
var statearr_36355_36473 = state_36283__$1;
(statearr_36355_36473[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (23))){
var inst_35990 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_35990)){
var statearr_36356_36474 = state_36283__$1;
(statearr_36356_36474[(1)] = (27));

} else {
var statearr_36357_36475 = state_36283__$1;
(statearr_36357_36475[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (47))){
var inst_36077 = (state_36283[(2)]);
var inst_36078 = cljs.core.js__GT_clj.call(null,inst_36077);
var inst_36079 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36078,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_36080 = cljs.core.List.EMPTY;
var inst_36081 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36082 = cljs.core._conj.call(null,inst_36080,inst_36081);
var inst_36083 = cljs.core.List.EMPTY;
var inst_36084 = cljs.core._conj.call(null,inst_36083,inst_36079);
var inst_36085 = cljs.core.concat.call(null,inst_36082,inst_36084);
var inst_36086 = cljs.core.seq.call(null,inst_36085);
var inst_36087 = cljs.core.sequence.call(null,inst_36086);
var inst_36088 = cljs.core.List.EMPTY;
var inst_36089 = cljs.core._conj.call(null,inst_36088,inst_36087);
var inst_36090 = cljs.core.concat.call(null,inst_36089);
var inst_36091 = cljs.core.seq.call(null,inst_36090);
var inst_36092 = cljs.core.sequence.call(null,inst_36091);
var inst_36093 = cljs.core.vec.call(null,inst_36092);
var inst_36094 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36093);
var state_36283__$1 = state_36283;
var statearr_36358_36476 = state_36283__$1;
(statearr_36358_36476[(2)] = inst_36094);

(statearr_36358_36476[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (35))){
var inst_35916 = (state_36283[(7)]);
var inst_36051 = (inst_35916 == null);
var inst_36052 = cljs.core.not.call(null,inst_36051);
var state_36283__$1 = state_36283;
if(inst_36052){
var statearr_36359_36477 = state_36283__$1;
(statearr_36359_36477[(1)] = (38));

} else {
var statearr_36360_36478 = state_36283__$1;
(statearr_36360_36478[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (82))){
var inst_36218 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36361_36479 = state_36283__$1;
(statearr_36361_36479[(2)] = inst_36218);

(statearr_36361_36479[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (76))){
var inst_36264 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36362_36480 = state_36283__$1;
(statearr_36362_36480[(2)] = inst_36264);

(statearr_36362_36480[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (19))){
var inst_35915 = (state_36283[(8)]);
var inst_36024 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_36283__$1 = state_36283;
if(inst_36024){
var statearr_36363_36481 = state_36283__$1;
(statearr_36363_36481[(1)] = (31));

} else {
var statearr_36364_36482 = state_36283__$1;
(statearr_36364_36482[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (57))){
var inst_35916 = (state_36283[(7)]);
var inst_36115 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36365_36483 = state_36283__$1;
(statearr_36365_36483[(2)] = inst_36115);

(statearr_36365_36483[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (68))){
var state_36283__$1 = state_36283;
var statearr_36366_36484 = state_36283__$1;
(statearr_36366_36484[(2)] = false);

(statearr_36366_36484[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (11))){
var state_36283__$1 = state_36283;
var statearr_36367_36485 = state_36283__$1;
(statearr_36367_36485[(2)] = true);

(statearr_36367_36485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (9))){
var state_36283__$1 = state_36283;
var statearr_36368_36486 = state_36283__$1;
(statearr_36368_36486[(2)] = false);

(statearr_36368_36486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (5))){
var inst_35916 = (state_36283[(7)]);
var inst_35921 = [cljs.core.str("lst login data:"),cljs.core.str(inst_35916)].join('');
var inst_35922 = cljs.core.println.call(null,inst_35921);
var inst_35924 = (inst_35916 == null);
var inst_35925 = cljs.core.not.call(null,inst_35924);
var state_36283__$1 = (function (){var statearr_36369 = state_36283;
(statearr_36369[(22)] = inst_35922);

return statearr_36369;
})();
if(inst_35925){
var statearr_36370_36487 = state_36283__$1;
(statearr_36370_36487[(1)] = (8));

} else {
var statearr_36371_36488 = state_36283__$1;
(statearr_36371_36488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (83))){
var inst_35916 = (state_36283[(7)]);
var inst_36223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36372_36489 = state_36283__$1;
(statearr_36372_36489[(2)] = inst_36223);

(statearr_36372_36489[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (14))){
var inst_35916 = (state_36283[(7)]);
var inst_35939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_36283__$1 = state_36283;
var statearr_36373_36490 = state_36283__$1;
(statearr_36373_36490[(2)] = inst_35939);

(statearr_36373_36490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (45))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36374_36491 = state_36283__$1;
(statearr_36374_36491[(2)] = inst_35916);

(statearr_36374_36491[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (53))){
var inst_36113 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36113)){
var statearr_36375_36492 = state_36283__$1;
(statearr_36375_36492[(1)] = (57));

} else {
var statearr_36376_36493 = state_36283__$1;
(statearr_36376_36493[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (78))){
var state_36283__$1 = state_36283;
var statearr_36377_36494 = state_36283__$1;
(statearr_36377_36494[(2)] = false);

(statearr_36377_36494[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (26))){
var inst_35987 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36378_36495 = state_36283__$1;
(statearr_36378_36495[(2)] = inst_35987);

(statearr_36378_36495[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (16))){
var inst_35944 = (state_36283[(16)]);
var inst_35942 = (state_36283[(2)]);
var inst_35943 = cljs.core.get.call(null,inst_35942,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_35944__$1 = cljs.core.get.call(null,inst_35942,new cljs.core.Keyword(null,"password","password",417022471));
var inst_35945 = cljs.core.get.call(null,inst_35942,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_35946 = encodeURIComponent(inst_35943);
var inst_35947 = encodeURIComponent(inst_35944__$1);
var inst_35948 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_35946),cljs.core.str("&pass="),cljs.core.str(inst_35947)].join('');
var inst_35949 = cloudxmark.core.jsonp.call(null,inst_35948);
var state_36283__$1 = (function (){var statearr_36379 = state_36283;
(statearr_36379[(16)] = inst_35944__$1);

(statearr_36379[(17)] = inst_35945);

return statearr_36379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(17),inst_35949);
} else {
if((state_val_36284 === (81))){
var state_36283__$1 = state_36283;
var statearr_36380_36496 = state_36283__$1;
(statearr_36380_36496[(2)] = false);

(statearr_36380_36496[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (79))){
var inst_36221 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36221)){
var statearr_36381_36497 = state_36283__$1;
(statearr_36381_36497[(1)] = (83));

} else {
var statearr_36382_36498 = state_36283__$1;
(statearr_36382_36498[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (38))){
var inst_35916 = (state_36283[(7)]);
var inst_36054 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_36055 = (inst_36054 & (64));
var inst_36056 = inst_35916.cljs$core$ISeq$;
var inst_36057 = (inst_36055) || (inst_36056);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_36057)){
var statearr_36383_36499 = state_36283__$1;
(statearr_36383_36499[(1)] = (41));

} else {
var statearr_36384_36500 = state_36283__$1;
(statearr_36384_36500[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (87))){
var inst_36229 = (state_36283[(11)]);
var inst_36233 = encodeURIComponent(inst_36229);
var inst_36234 = [cljs.core.str("query="),cljs.core.str(inst_36233)].join('');
var state_36283__$1 = state_36283;
var statearr_36385_36501 = state_36283__$1;
(statearr_36385_36501[(2)] = inst_36234);

(statearr_36385_36501[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (30))){
var inst_36005 = (state_36283[(2)]);
var inst_36006 = cljs.core.js__GT_clj.call(null,inst_36005);
var inst_36007 = cloudxmark.core.convert_json_status.call(null,inst_36006,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_36008 = cljs.core.List.EMPTY;
var inst_36009 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_36010 = cljs.core._conj.call(null,inst_36008,inst_36009);
var inst_36011 = cljs.core.List.EMPTY;
var inst_36012 = cljs.core._conj.call(null,inst_36011,inst_36007);
var inst_36013 = cljs.core.concat.call(null,inst_36010,inst_36012);
var inst_36014 = cljs.core.seq.call(null,inst_36013);
var inst_36015 = cljs.core.sequence.call(null,inst_36014);
var inst_36016 = cljs.core.List.EMPTY;
var inst_36017 = cljs.core._conj.call(null,inst_36016,inst_36015);
var inst_36018 = cljs.core.concat.call(null,inst_36017);
var inst_36019 = cljs.core.seq.call(null,inst_36018);
var inst_36020 = cljs.core.sequence.call(null,inst_36019);
var inst_36021 = cljs.core.vec.call(null,inst_36020);
var inst_36022 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36021);
var state_36283__$1 = state_36283;
var statearr_36386_36502 = state_36283__$1;
(statearr_36386_36502[(2)] = inst_36022);

(statearr_36386_36502[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (73))){
var inst_36183 = (state_36283[(2)]);
var inst_36184 = cljs.core.js__GT_clj.call(null,inst_36183);
var inst_36185 = cloudxmark.core.convert_json_lsts_result.call(null,inst_36184,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_36186 = cljs.core.List.EMPTY;
var inst_36187 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36188 = cljs.core._conj.call(null,inst_36186,inst_36187);
var inst_36189 = cljs.core.List.EMPTY;
var inst_36190 = cljs.core._conj.call(null,inst_36189,inst_36185);
var inst_36191 = cljs.core.concat.call(null,inst_36188,inst_36190);
var inst_36192 = cljs.core.seq.call(null,inst_36191);
var inst_36193 = cljs.core.sequence.call(null,inst_36192);
var inst_36194 = cljs.core.List.EMPTY;
var inst_36195 = cljs.core._conj.call(null,inst_36194,inst_36193);
var inst_36196 = cljs.core.concat.call(null,inst_36195);
var inst_36197 = cljs.core.seq.call(null,inst_36196);
var inst_36198 = cljs.core.sequence.call(null,inst_36197);
var inst_36199 = cljs.core.vec.call(null,inst_36198);
var inst_36200 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36199);
var state_36283__$1 = state_36283;
var statearr_36387_36503 = state_36283__$1;
(statearr_36387_36503[(2)] = inst_36200);

(statearr_36387_36503[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (10))){
var inst_35937 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_35937)){
var statearr_36388_36504 = state_36283__$1;
(statearr_36388_36504[(1)] = (14));

} else {
var statearr_36389_36505 = state_36283__$1;
(statearr_36389_36505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (18))){
var inst_35916 = (state_36283[(7)]);
var inst_35977 = (inst_35916 == null);
var inst_35978 = cljs.core.not.call(null,inst_35977);
var state_36283__$1 = state_36283;
if(inst_35978){
var statearr_36390_36506 = state_36283__$1;
(statearr_36390_36506[(1)] = (21));

} else {
var statearr_36391_36507 = state_36283__$1;
(statearr_36391_36507[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (52))){
var state_36283__$1 = state_36283;
var statearr_36392_36508 = state_36283__$1;
(statearr_36392_36508[(2)] = false);

(statearr_36392_36508[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (67))){
var state_36283__$1 = state_36283;
var statearr_36393_36509 = state_36283__$1;
(statearr_36393_36509[(2)] = true);

(statearr_36393_36509[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (71))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36394_36510 = state_36283__$1;
(statearr_36394_36510[(2)] = inst_35916);

(statearr_36394_36510[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (42))){
var state_36283__$1 = state_36283;
var statearr_36395_36511 = state_36283__$1;
(statearr_36395_36511[(2)] = false);

(statearr_36395_36511[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (80))){
var state_36283__$1 = state_36283;
var statearr_36396_36512 = state_36283__$1;
(statearr_36396_36512[(2)] = true);

(statearr_36396_36512[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (37))){
var inst_36270 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36397_36513 = state_36283__$1;
(statearr_36397_36513[(2)] = inst_36270);

(statearr_36397_36513[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (63))){
var inst_36266 = (state_36283[(2)]);
var state_36283__$1 = state_36283;
var statearr_36398_36514 = state_36283__$1;
(statearr_36398_36514[(2)] = inst_36266);

(statearr_36398_36514[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (8))){
var inst_35916 = (state_36283[(7)]);
var inst_35927 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_35928 = (inst_35927 & (64));
var inst_35929 = inst_35916.cljs$core$ISeq$;
var inst_35930 = (inst_35928) || (inst_35929);
var state_36283__$1 = state_36283;
if(cljs.core.truth_(inst_35930)){
var statearr_36399_36515 = state_36283__$1;
(statearr_36399_36515[(1)] = (11));

} else {
var statearr_36400_36516 = state_36283__$1;
(statearr_36400_36516[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (49))){
var inst_35915 = (state_36283[(8)]);
var inst_36147 = cljs.core._EQ_.call(null,inst_35915,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_36283__$1 = state_36283;
if(inst_36147){
var statearr_36401_36517 = state_36283__$1;
(statearr_36401_36517[(1)] = (61));

} else {
var statearr_36402_36518 = state_36283__$1;
(statearr_36402_36518[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36284 === (84))){
var inst_35916 = (state_36283[(7)]);
var state_36283__$1 = state_36283;
var statearr_36403_36519 = state_36283__$1;
(statearr_36403_36519[(2)] = inst_35916);

(statearr_36403_36519[(1)] = (85));


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
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__29916__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__29916__auto____0 = (function (){
var statearr_36407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36407[(0)] = cloudxmark$core$search_loop_$_state_machine__29916__auto__);

(statearr_36407[(1)] = (1));

return statearr_36407;
});
var cloudxmark$core$search_loop_$_state_machine__29916__auto____1 = (function (state_36283){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_36283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e36408){if((e36408 instanceof Object)){
var ex__29919__auto__ = e36408;
var statearr_36409_36520 = state_36283;
(statearr_36409_36520[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36521 = state_36283;
state_36283 = G__36521;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__29916__auto__ = function(state_36283){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__29916__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__29916__auto____1.call(this,state_36283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__29916__auto____0;
cloudxmark$core$search_loop_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__29916__auto____1;
return cloudxmark$core$search_loop_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_36410 = f__30030__auto__.call(null);
(statearr_36410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_36410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1471419420252