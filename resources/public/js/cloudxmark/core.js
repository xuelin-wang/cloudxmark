// Compiled by ClojureScript 1.9.89 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
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
var idx_28738 = (0);
while(true){
var len1_28739 = b1.length;
if((cljs.core._EQ_.call(null,idx_28738,len1_28739)) || (cljs.core._EQ_.call(null,idx_28738,max_len))){
} else {
(b1[idx_28738] = ((b1[idx_28738]) ^ (b2[idx_28738])));

var G__28740 = (idx_28738 + (1));
idx_28738 = G__28740;
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
var args28743 = [];
var len__22627__auto___28746 = arguments.length;
var i__22628__auto___28747 = (0);
while(true){
if((i__22628__auto___28747 < len__22627__auto___28746)){
args28743.push((arguments[i__22628__auto___28747]));

var G__28748 = (i__22628__auto___28747 + (1));
i__22628__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var G__28745 = args28743.length;
switch (G__28745) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28743.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__28741_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28741_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__28742_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__28742_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__28750,_,p__28751){
var map__28752 = p__28750;
var map__28752__$1 = ((((!((map__28752 == null)))?((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var env = map__28752__$1;
var state = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28753 = p__28751;
var map__28753__$1 = ((((!((map__28753 == null)))?((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var query_ver = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__28756 = lst;
var map__28756__$1 = ((((!((map__28756 == null)))?((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var lsts = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user)].join(''));

if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_28758 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_28758);

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__28759,_,p__28760){
var map__28761 = p__28759;
var map__28761__$1 = ((((!((map__28761 == null)))?((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var env = map__28761__$1;
var state = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28762 = p__28760;
var map__28762__$1 = ((((!((map__28762 == null)))?((((map__28762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28762):map__28762);
var status = map__28762__$1;
var id = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28761,map__28761__$1,env,state,map__28762,map__28762__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__28761,map__28761__$1,env,state,map__28762,map__28762__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__28765,_,p__28766){
var map__28767 = p__28765;
var map__28767__$1 = ((((!((map__28767 == null)))?((((map__28767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28767):map__28767);
var env = map__28767__$1;
var state = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28768 = p__28766;
var map__28768__$1 = ((((!((map__28768 == null)))?((((map__28768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28768):map__28768);
var path = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28767,map__28767__$1,env,state,map__28768,map__28768__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__28767,map__28767__$1,env,state,map__28768,map__28768__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__28771,_,p__28772){
var map__28773 = p__28771;
var map__28773__$1 = ((((!((map__28773 == null)))?((((map__28773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var env = map__28773__$1;
var state = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28774 = p__28772;
var map__28774__$1 = ((((!((map__28774 == null)))?((((map__28774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var data_map = map__28774__$1;
var lst_idx = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28773,map__28773__$1,env,state,map__28774,map__28774__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var lst = cljs.core.nth.call(null,lsts,lst_idx);
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var item = cljs.core.nth.call(null,cljs.core.get.call(null,lst,"items"),item_idx);
var orig_name = cljs.core.get.call(null,item,"name");
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,orig_name)):value);
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__28773,map__28773__$1,env,state,map__28774,map__28774__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__28777,_,p__28778){
var map__28779 = p__28777;
var map__28779__$1 = ((((!((map__28779 == null)))?((((map__28779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28779):map__28779);
var env = map__28779__$1;
var state = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28780 = p__28778;
var map__28780__$1 = ((((!((map__28780 == null)))?((((map__28780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);
var field_id = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28779,map__28779__$1,env,state,map__28780,map__28780__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__28779,map__28779__$1,env,state,map__28780,map__28780__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__28783,_,p__28784){
var map__28785 = p__28783;
var map__28785__$1 = ((((!((map__28785 == null)))?((((map__28785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28785):map__28785);
var env = map__28785__$1;
var state = cljs.core.get.call(null,map__28785__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28786 = p__28784;
var map__28786__$1 = ((((!((map__28786 == null)))?((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var data_map = map__28786__$1;
var user_id = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28785,map__28785__$1,env,state,map__28786,map__28786__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__28785,map__28785__$1,env,state,map__28786,map__28786__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__28789,_,p__28790){
var map__28791 = p__28789;
var map__28791__$1 = ((((!((map__28791 == null)))?((((map__28791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);
var env = map__28791__$1;
var state = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28792 = p__28790;
var map__28792__$1 = ((((!((map__28792 == null)))?((((map__28792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28792):map__28792);
var data_map = map__28792__$1;
var user_id = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28791,map__28791__$1,env,state,map__28792,map__28792__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__28791,map__28791__$1,env,state,map__28792,map__28792__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__28795,_,p__28796){
var map__28797 = p__28795;
var map__28797__$1 = ((((!((map__28797 == null)))?((((map__28797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);
var env = map__28797__$1;
var state = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28798 = p__28796;
var map__28798__$1 = ((((!((map__28798 == null)))?((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
var data_map = map__28798__$1;
var name = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28797,map__28797__$1,env,state,map__28798,map__28798__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__28797,map__28797__$1,env,state,map__28798,map__28798__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__28801,_,p__28802){
var map__28803 = p__28801;
var map__28803__$1 = ((((!((map__28803 == null)))?((((map__28803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);
var env = map__28803__$1;
var state = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28804 = p__28802;
var map__28804__$1 = ((((!((map__28804 == null)))?((((map__28804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var data_map = map__28804__$1;
var name = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28803,map__28803__$1,env,state,map__28804,map__28804__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr = (function (){var or__21444__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__28803,map__28803__$1,env,state,map__28804,map__28804__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__28807,_,___$1){
var map__28808 = p__28807;
var map__28808__$1 = ((((!((map__28808 == null)))?((((map__28808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28808):map__28808);
var env = map__28808__$1;
var state = cljs.core.get.call(null,map__28808__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28808,map__28808__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__28808,map__28808__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__28810,_,p__28811){
var map__28812 = p__28810;
var map__28812__$1 = ((((!((map__28812 == null)))?((((map__28812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28812):map__28812);
var env = map__28812__$1;
var state = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28813 = p__28811;
var map__28813__$1 = ((((!((map__28813 == null)))?((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28813):map__28813);
var data_map = map__28813__$1;
var status = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28812,map__28812__$1,env,state,map__28813,map__28813__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
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
});})(map__28812,map__28812__$1,env,state,map__28813,map__28813__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args28816 = [];
var len__22627__auto___28819 = arguments.length;
var i__22628__auto___28820 = (0);
while(true){
if((i__22628__auto___28820 < len__22627__auto___28819)){
args28816.push((arguments[i__22628__auto___28820]));

var G__28821 = (i__22628__auto___28820 + (1));
i__22628__auto___28820 = G__28821;
continue;
} else {
}
break;
}

var G__28818 = args28816.length;
switch (G__28818) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28816.length)].join('')));

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

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_idx,item_idx,item,col_name){
var field_val = (function (){var or__21444__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return "";
}
})();
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_idx),cljs.core.str("-"),cljs.core.str(item_idx),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22370__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22370__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330)),(function (){var x__22370__auto__ = lst_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22370__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161)),(function (){var x__22370__auto__ = item_idx;
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
});})(field_val))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__28823){
var map__28829 = p__28823;
var map__28829__$1 = ((((!((map__28829 == null)))?((((map__28829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28829):map__28829);
var info = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__28829__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__28831 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__28831,(0),null);
var msg = cljs.core.nth.call(null,vec__28831,(1),null);
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
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null);
var merge_QMARK_ = false;
var value = idx;
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
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(idx)].join(''));
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
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__28836 = lst;
var map__28836__$1 = ((((!((map__28836 == null)))?((((map__28836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28836):map__28836);
var lsts = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21444__auto__ = curr;
if(cljs.core.truth_(or__21444__auto__)){
return or__21444__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__28836,map__28836__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__28836,map__28836__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__28840 = lst;
var map__28840__$1 = ((((!((map__28840 == null)))?((((map__28840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28840):map__28840);
var status = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__28846 = (function (){var G__28849 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28849) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__28846,(0),null);
var query_key = cljs.core.nth.call(null,vec__28846,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__28846,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__28846,elem_key,query_key))
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
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26966__auto__ = this;
React.Component.apply(this__26966__auto__,arguments);

if(!((this__26966__auto__.initLocalState == null))){
this__26966__auto__.state = this__26966__auto__.initLocalState();
} else {
this__26966__auto__.state = {};
}

return this__26966__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x28855_28867 = cloudxmark.core.Lsts.prototype;
x28855_28867.componentWillUpdate = ((function (x28855_28867){
return (function (next_props__26868__auto__,next_state__26869__auto__){
var this__26867__auto__ = this;
if(((!((this__26867__auto__ == null)))?(((false) || (this__26867__auto__.om$next$Ident$))?true:false):false)){
var ident__26871__auto___28868 = om.next.ident.call(null,this__26867__auto__,om.next.props.call(null,this__26867__auto__));
var next_ident__26872__auto___28869 = om.next.ident.call(null,this__26867__auto__,om.next._next_props.call(null,next_props__26868__auto__,this__26867__auto__));
if(cljs.core.not_EQ_.call(null,ident__26871__auto___28868,next_ident__26872__auto___28869)){
var idxr__26873__auto___28870 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26873__auto___28870 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26873__auto___28870),((function (idxr__26873__auto___28870,ident__26871__auto___28868,next_ident__26872__auto___28869,this__26867__auto__,x28855_28867){
return (function (indexes__26874__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26874__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26871__auto___28868], null),cljs.core.disj,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26872__auto___28869], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26867__auto__);
});})(idxr__26873__auto___28870,ident__26871__auto___28868,next_ident__26872__auto___28869,this__26867__auto__,x28855_28867))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26867__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26867__auto__);
});})(x28855_28867))
;

x28855_28867.shouldComponentUpdate = ((function (x28855_28867){
return (function (next_props__26868__auto__,next_state__26869__auto__){
var this__26867__auto__ = this;
var next_children__26870__auto__ = next_props__26868__auto__.children;
var next_props__26868__auto____$1 = goog.object.get(next_props__26868__auto__,"omcljs$value");
var next_props__26868__auto____$2 = (function (){var G__28857 = next_props__26868__auto____$1;
if((next_props__26868__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28857);
} else {
return G__28857;
}
})();
var or__21444__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26867__auto__),next_props__26868__auto____$2);
if(or__21444__auto__){
return or__21444__auto__;
} else {
var or__21444__auto____$1 = (function (){var and__21432__auto__ = this__26867__auto__.state;
if(cljs.core.truth_(and__21432__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26867__auto__.state,"omcljs$state"),goog.object.get(next_state__26869__auto__,"omcljs$state"));
} else {
return and__21432__auto__;
}
})();
if(cljs.core.truth_(or__21444__auto____$1)){
return or__21444__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26867__auto__.props.children,next_children__26870__auto__);
}
}
});})(x28855_28867))
;

x28855_28867.componentWillUnmount = ((function (x28855_28867){
return (function (){
var this__26867__auto__ = this;
var r__26878__auto__ = om.next.get_reconciler.call(null,this__26867__auto__);
var cfg__26879__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26878__auto__);
var st__26880__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26879__auto__);
var indexer__26877__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26879__auto__);
if(cljs.core.truth_((function (){var and__21432__auto__ = !((st__26880__auto__ == null));
if(and__21432__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26880__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26867__auto__], null));
} else {
return and__21432__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26880__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26867__auto__);
} else {
}

if((indexer__26877__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26877__auto__,this__26867__auto__);
}
});})(x28855_28867))
;

x28855_28867.componentDidUpdate = ((function (x28855_28867){
return (function (prev_props__26875__auto__,prev_state__26876__auto__){
var this__26867__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26867__auto__);
});})(x28855_28867))
;

x28855_28867.isMounted = ((function (x28855_28867){
return (function (){
var this__26867__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26867__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28855_28867))
;

x28855_28867.componentWillMount = ((function (x28855_28867){
return (function (){
var this__26867__auto__ = this;
var indexer__26877__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26867__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26877__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26877__auto__,this__26867__auto__);
}
});})(x28855_28867))
;

x28855_28867.render = ((function (x28855_28867){
return (function (){
var this__26866__auto__ = this;
var this$ = this__26866__auto__;
var _STAR_reconciler_STAR_28858 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28859 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28860 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28861 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28862 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26866__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26866__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26866__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26866__auto__);

om.next._STAR_parent_STAR_ = this__26866__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__28863 = lst;
var map__28863__$1 = ((((!((map__28863 == null)))?((((map__28863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28863):map__28863);
var lsts = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28862;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28861;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28860;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28859;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28858;
}});})(x28855_28867))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x28865_28871 = cloudxmark.core.Lsts;
x28865_28871.om$next$IQueryParams$ = true;

x28865_28871.om$next$IQueryParams$params$arity$1 = ((function (x28865_28871){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28865_28871))
;

x28865_28871.om$next$IQuery$ = true;

x28865_28871.om$next$IQuery$query$arity$1 = ((function (x28865_28871){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28865_28871))
;


var x28866_28872 = cloudxmark.core.Lsts.prototype;
x28866_28872.om$next$IQueryParams$ = true;

x28866_28872.om$next$IQueryParams$params$arity$1 = ((function (x28866_28872){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28866_28872))
;

x28866_28872.om$next$IQuery$ = true;

x28866_28872.om$next$IQuery$query$arity$1 = ((function (x28866_28872){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28866_28872))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26968__auto__,writer__26969__auto__,opt__26970__auto__){
return cljs.core._write.call(null,writer__26969__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__28881,cb){
var map__28882 = p__28881;
var map__28882__$1 = ((((!((map__28882 == null)))?((((map__28882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28882):map__28882);
var lst_search = cljs.core.get.call(null,map__28882__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__28884 = om.next.query__GT_ast.call(null,lst_search);
var map__28884__$1 = ((((!((map__28884 == null)))?((((map__28884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28884):map__28884);
var vec__28885 = cljs.core.get.call(null,map__28884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__28885,(0),null);
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
var map__28893 = result;
var map__28893__$1 = ((((!((map__28893 == null)))?((((map__28893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);
var lsts = cljs.core.get.call(null,map__28893__$1,"lsts");
var user_id = cljs.core.get.call(null,map__28893__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__28893__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__28894 = json_status;
var map__28894__$1 = ((((!((map__28894 == null)))?((((map__28894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28894):map__28894);
var info = cljs.core.get.call(null,map__28894__$1,"info");
var warn = cljs.core.get.call(null,map__28894__$1,"warn");
var error = cljs.core.get.call(null,map__28894__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__28899 = json_status;
var map__28899__$1 = ((((!((map__28899 == null)))?((((map__28899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28899):map__28899);
var info = cljs.core.get.call(null,map__28899__$1,"info");
var warn = cljs.core.get.call(null,map__28899__$1,"warn");
var error = cljs.core.get.call(null,map__28899__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26735__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26735__auto__){
return (function (){
var f__26736__auto__ = (function (){var switch__26712__auto__ = ((function (c__26735__auto__){
return (function (state_29773){
var state_val_29774 = (state_29773[(1)]);
if((state_val_29774 === (65))){
var state_29773__$1 = state_29773;
var statearr_29775_29897 = state_29773__$1;
(statearr_29775_29897[(2)] = false);

(statearr_29775_29897[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (70))){
var inst_29417 = (state_29773[(7)]);
var inst_29667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29776_29898 = state_29773__$1;
(statearr_29776_29898[(2)] = inst_29667);

(statearr_29776_29898[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (62))){
var inst_29416 = (state_29773[(8)]);
var inst_29701 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_29773__$1 = state_29773;
if(inst_29701){
var statearr_29777_29899 = state_29773__$1;
(statearr_29777_29899[(1)] = (74));

} else {
var statearr_29778_29900 = state_29773__$1;
(statearr_29778_29900[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (74))){
var inst_29417 = (state_29773[(7)]);
var inst_29704 = [cljs.core.str("lst query data:"),cljs.core.str(inst_29417)].join('');
var inst_29705 = cljs.core.println.call(null,inst_29704);
var inst_29707 = (inst_29417 == null);
var inst_29708 = cljs.core.not.call(null,inst_29707);
var state_29773__$1 = (function (){var statearr_29779 = state_29773;
(statearr_29779[(9)] = inst_29705);

return statearr_29779;
})();
if(inst_29708){
var statearr_29780_29901 = state_29773__$1;
(statearr_29780_29901[(1)] = (77));

} else {
var statearr_29781_29902 = state_29773__$1;
(statearr_29781_29902[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (7))){
var inst_29766 = (state_29773[(2)]);
var state_29773__$1 = (function (){var statearr_29782 = state_29773;
(statearr_29782[(10)] = inst_29766);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(90),c);
} else {
if((state_val_29774 === (59))){
var inst_29619 = (state_29773[(2)]);
var inst_29620 = cljs.core.get.call(null,inst_29619,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_29621 = cljs.core.get.call(null,inst_29619,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_29622 = cljs.core.get.call(null,inst_29619,new cljs.core.Keyword(null,"value","value",305978217));
var inst_29623 = encodeURIComponent(inst_29620);
var inst_29624 = encodeURIComponent(inst_29621);
var inst_29625 = encodeURIComponent(inst_29622);
var inst_29626 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_29623),cljs.core.str("&name="),cljs.core.str(inst_29624),cljs.core.str("&value="),cljs.core.str(inst_29625)].join('');
var inst_29627 = cloudxmark.core.jsonp.call(null,inst_29626);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(60),inst_29627);
} else {
if((state_val_29774 === (86))){
var inst_29727 = (state_29773[(11)]);
var inst_29730 = (state_29773[(2)]);
var inst_29731 = cljs.core.js__GT_clj.call(null,inst_29730);
var inst_29732 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29731,inst_29727,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_29733 = cljs.core.List.EMPTY;
var inst_29734 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29735 = cljs.core._conj.call(null,inst_29733,inst_29734);
var inst_29736 = cljs.core.List.EMPTY;
var inst_29737 = cljs.core._conj.call(null,inst_29736,inst_29732);
var inst_29738 = cljs.core.concat.call(null,inst_29735,inst_29737);
var inst_29739 = cljs.core.seq.call(null,inst_29738);
var inst_29740 = cljs.core.sequence.call(null,inst_29739);
var inst_29741 = cljs.core.List.EMPTY;
var inst_29742 = cljs.core._conj.call(null,inst_29741,inst_29740);
var inst_29743 = cljs.core.concat.call(null,inst_29742);
var inst_29744 = cljs.core.seq.call(null,inst_29743);
var inst_29745 = cljs.core.sequence.call(null,inst_29744);
var inst_29746 = cljs.core.vec.call(null,inst_29745);
var inst_29747 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29746);
var state_29773__$1 = state_29773;
var statearr_29783_29903 = state_29773__$1;
(statearr_29783_29903[(2)] = inst_29747);

(statearr_29783_29903[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (20))){
var inst_29764 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29784_29904 = state_29773__$1;
(statearr_29784_29904[(2)] = inst_29764);

(statearr_29784_29904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (72))){
var inst_29670 = (state_29773[(2)]);
var inst_29671 = cljs.core.get.call(null,inst_29670,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_29672 = cljs.core.get.call(null,inst_29670,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_29673 = cljs.core.get.call(null,inst_29670,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_29674 = cljs.core.get.call(null,inst_29670,new cljs.core.Keyword(null,"value","value",305978217));
var inst_29675 = encodeURIComponent(inst_29671);
var inst_29676 = encodeURIComponent(inst_29672);
var inst_29677 = encodeURIComponent(inst_29673);
var inst_29678 = encodeURIComponent(inst_29674);
var inst_29679 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_29675),cljs.core.str("&orig-name="),cljs.core.str(inst_29676),cljs.core.str("&col-name="),cljs.core.str(inst_29677),cljs.core.str("&value="),cljs.core.str(inst_29678)].join('');
var inst_29680 = cloudxmark.core.jsonp.call(null,inst_29679);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(73),inst_29680);
} else {
if((state_val_29774 === (58))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29785_29905 = state_29773__$1;
(statearr_29785_29905[(2)] = inst_29417);

(statearr_29785_29905[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (60))){
var inst_29629 = (state_29773[(2)]);
var inst_29630 = cljs.core.js__GT_clj.call(null,inst_29629);
var inst_29631 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29630,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_29632 = cljs.core.List.EMPTY;
var inst_29633 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29634 = cljs.core._conj.call(null,inst_29632,inst_29633);
var inst_29635 = cljs.core.List.EMPTY;
var inst_29636 = cljs.core._conj.call(null,inst_29635,inst_29631);
var inst_29637 = cljs.core.concat.call(null,inst_29634,inst_29636);
var inst_29638 = cljs.core.seq.call(null,inst_29637);
var inst_29639 = cljs.core.sequence.call(null,inst_29638);
var inst_29640 = cljs.core.List.EMPTY;
var inst_29641 = cljs.core._conj.call(null,inst_29640,inst_29639);
var inst_29642 = cljs.core.concat.call(null,inst_29641);
var inst_29643 = cljs.core.seq.call(null,inst_29642);
var inst_29644 = cljs.core.sequence.call(null,inst_29643);
var inst_29645 = cljs.core.vec.call(null,inst_29644);
var inst_29646 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29645);
var state_29773__$1 = state_29773;
var statearr_29786_29906 = state_29773__$1;
(statearr_29786_29906[(2)] = inst_29646);

(statearr_29786_29906[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (27))){
var inst_29417 = (state_29773[(7)]);
var inst_29493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29787_29907 = state_29773__$1;
(statearr_29787_29907[(2)] = inst_29493);

(statearr_29787_29907[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (1))){
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(2),c);
} else {
if((state_val_29774 === (69))){
var inst_29662 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29788_29908 = state_29773__$1;
(statearr_29788_29908[(2)] = inst_29662);

(statearr_29788_29908[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (24))){
var state_29773__$1 = state_29773;
var statearr_29789_29909 = state_29773__$1;
(statearr_29789_29909[(2)] = true);

(statearr_29789_29909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (55))){
var state_29773__$1 = state_29773;
var statearr_29790_29910 = state_29773__$1;
(statearr_29790_29910[(2)] = false);

(statearr_29790_29910[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (85))){
var inst_29725 = (state_29773[(2)]);
var inst_29726 = cljs.core.get.call(null,inst_29725,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_29727 = cljs.core.get.call(null,inst_29725,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_29728 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_29773__$1 = (function (){var statearr_29791 = state_29773;
(statearr_29791[(12)] = inst_29726);

(statearr_29791[(11)] = inst_29727);

return statearr_29791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(86),inst_29728);
} else {
if((state_val_29774 === (39))){
var state_29773__$1 = state_29773;
var statearr_29792_29911 = state_29773__$1;
(statearr_29792_29911[(2)] = false);

(statearr_29792_29911[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (88))){
var state_29773__$1 = state_29773;
var statearr_29793_29912 = state_29773__$1;
(statearr_29793_29912[(2)] = null);

(statearr_29793_29912[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (46))){
var inst_29570 = (state_29773[(2)]);
var inst_29571 = cljs.core.get.call(null,inst_29570,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_29572 = cljs.core.get.call(null,inst_29570,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_29573 = encodeURIComponent(inst_29571);
var inst_29574 = encodeURIComponent(inst_29572);
var inst_29575 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_29573),cljs.core.str("&desc="),cljs.core.str(inst_29574)].join('');
var inst_29576 = cloudxmark.core.jsonp.call(null,inst_29575);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(47),inst_29576);
} else {
if((state_val_29774 === (4))){
var inst_29771 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29773__$1,inst_29771);
} else {
if((state_val_29774 === (77))){
var inst_29417 = (state_29773[(7)]);
var inst_29710 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29711 = (inst_29710 & (64));
var inst_29712 = inst_29417.cljs$core$ISeq$;
var inst_29713 = (inst_29711) || (inst_29712);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29713)){
var statearr_29794_29913 = state_29773__$1;
(statearr_29794_29913[(1)] = (80));

} else {
var statearr_29795_29914 = state_29773__$1;
(statearr_29795_29914[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (54))){
var state_29773__$1 = state_29773;
var statearr_29796_29915 = state_29773__$1;
(statearr_29796_29915[(2)] = true);

(statearr_29796_29915[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (15))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29797_29916 = state_29773__$1;
(statearr_29797_29916[(2)] = inst_29417);

(statearr_29797_29916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (48))){
var inst_29417 = (state_29773[(7)]);
var inst_29601 = (inst_29417 == null);
var inst_29602 = cljs.core.not.call(null,inst_29601);
var state_29773__$1 = state_29773;
if(inst_29602){
var statearr_29798_29917 = state_29773__$1;
(statearr_29798_29917[(1)] = (51));

} else {
var statearr_29799_29918 = state_29773__$1;
(statearr_29799_29918[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (50))){
var inst_29758 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29800_29919 = state_29773__$1;
(statearr_29800_29919[(2)] = inst_29758);

(statearr_29800_29919[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (75))){
var state_29773__$1 = state_29773;
var statearr_29801_29920 = state_29773__$1;
(statearr_29801_29920[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (21))){
var inst_29417 = (state_29773[(7)]);
var inst_29481 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29482 = (inst_29481 & (64));
var inst_29483 = inst_29417.cljs$core$ISeq$;
var inst_29484 = (inst_29482) || (inst_29483);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29484)){
var statearr_29803_29921 = state_29773__$1;
(statearr_29803_29921[(1)] = (24));

} else {
var statearr_29804_29922 = state_29773__$1;
(statearr_29804_29922[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (31))){
var inst_29527 = cloudxmark.core.jsonp.call(null,"/logout");
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(34),inst_29527);
} else {
if((state_val_29774 === (32))){
var inst_29416 = (state_29773[(8)]);
var inst_29548 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_29773__$1 = state_29773;
if(inst_29548){
var statearr_29805_29923 = state_29773__$1;
(statearr_29805_29923[(1)] = (35));

} else {
var statearr_29806_29924 = state_29773__$1;
(statearr_29806_29924[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (40))){
var inst_29565 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29565)){
var statearr_29807_29925 = state_29773__$1;
(statearr_29807_29925[(1)] = (44));

} else {
var statearr_29808_29926 = state_29773__$1;
(statearr_29808_29926[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (56))){
var inst_29611 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29809_29927 = state_29773__$1;
(statearr_29809_29927[(2)] = inst_29611);

(statearr_29809_29927[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (33))){
var inst_29762 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29810_29928 = state_29773__$1;
(statearr_29810_29928[(2)] = inst_29762);

(statearr_29810_29928[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (13))){
var inst_29435 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29811_29929 = state_29773__$1;
(statearr_29811_29929[(2)] = inst_29435);

(statearr_29811_29929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (22))){
var state_29773__$1 = state_29773;
var statearr_29812_29930 = state_29773__$1;
(statearr_29812_29930[(2)] = false);

(statearr_29812_29930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (90))){
var inst_29768 = (state_29773[(2)]);
var inst_29411 = inst_29768;
var state_29773__$1 = (function (){var statearr_29813 = state_29773;
(statearr_29813[(13)] = inst_29411);

return statearr_29813;
})();
var statearr_29814_29931 = state_29773__$1;
(statearr_29814_29931[(2)] = null);

(statearr_29814_29931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (36))){
var inst_29416 = (state_29773[(8)]);
var inst_29597 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_29773__$1 = state_29773;
if(inst_29597){
var statearr_29815_29932 = state_29773__$1;
(statearr_29815_29932[(1)] = (48));

} else {
var statearr_29816_29933 = state_29773__$1;
(statearr_29816_29933[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (41))){
var state_29773__$1 = state_29773;
var statearr_29817_29934 = state_29773__$1;
(statearr_29817_29934[(2)] = true);

(statearr_29817_29934[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (89))){
var inst_29752 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29818_29935 = state_29773__$1;
(statearr_29818_29935[(2)] = inst_29752);

(statearr_29818_29935[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (43))){
var inst_29562 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29819_29936 = state_29773__$1;
(statearr_29819_29936[(2)] = inst_29562);

(statearr_29819_29936[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (61))){
var inst_29417 = (state_29773[(7)]);
var inst_29652 = (inst_29417 == null);
var inst_29653 = cljs.core.not.call(null,inst_29652);
var state_29773__$1 = state_29773;
if(inst_29653){
var statearr_29820_29937 = state_29773__$1;
(statearr_29820_29937[(1)] = (64));

} else {
var statearr_29821_29938 = state_29773__$1;
(statearr_29821_29938[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (29))){
var inst_29496 = (state_29773[(2)]);
var inst_29497 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_29498 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"password","password",417022471));
var inst_29499 = cljs.core.get.call(null,inst_29496,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_29500 = cloudxmark.core.enc_password.call(null,inst_29498);
var inst_29501 = encodeURIComponent(inst_29497);
var inst_29502 = encodeURIComponent(inst_29500);
var inst_29503 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_29501),cljs.core.str("&pass="),cljs.core.str(inst_29502)].join('');
var inst_29504 = cloudxmark.core.jsonp.call(null,inst_29503);
var state_29773__$1 = (function (){var statearr_29822 = state_29773;
(statearr_29822[(14)] = inst_29499);

return statearr_29822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(30),inst_29504);
} else {
if((state_val_29774 === (44))){
var inst_29417 = (state_29773[(7)]);
var inst_29567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29823_29939 = state_29773__$1;
(statearr_29823_29939[(2)] = inst_29567);

(statearr_29823_29939[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (6))){
var inst_29416 = (state_29773[(8)]);
var inst_29474 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_29773__$1 = state_29773;
if(inst_29474){
var statearr_29824_29940 = state_29773__$1;
(statearr_29824_29940[(1)] = (18));

} else {
var statearr_29825_29941 = state_29773__$1;
(statearr_29825_29941[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (28))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29826_29942 = state_29773__$1;
(statearr_29826_29942[(2)] = inst_29417);

(statearr_29826_29942[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (64))){
var inst_29417 = (state_29773[(7)]);
var inst_29655 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29656 = (inst_29655 & (64));
var inst_29657 = inst_29417.cljs$core$ISeq$;
var inst_29658 = (inst_29656) || (inst_29657);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29658)){
var statearr_29827_29943 = state_29773__$1;
(statearr_29827_29943[(1)] = (67));

} else {
var statearr_29828_29944 = state_29773__$1;
(statearr_29828_29944[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (51))){
var inst_29417 = (state_29773[(7)]);
var inst_29604 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29605 = (inst_29604 & (64));
var inst_29606 = inst_29417.cljs$core$ISeq$;
var inst_29607 = (inst_29605) || (inst_29606);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29607)){
var statearr_29829_29945 = state_29773__$1;
(statearr_29829_29945[(1)] = (54));

} else {
var statearr_29830_29946 = state_29773__$1;
(statearr_29830_29946[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (25))){
var state_29773__$1 = state_29773;
var statearr_29831_29947 = state_29773__$1;
(statearr_29831_29947[(2)] = false);

(statearr_29831_29947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (34))){
var inst_29529 = (state_29773[(2)]);
var inst_29530 = cljs.core.js__GT_clj.call(null,inst_29529);
var inst_29531 = cloudxmark.core.convert_json_status.call(null,inst_29530,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_29532 = cljs.core.List.EMPTY;
var inst_29533 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_29534 = cljs.core._conj.call(null,inst_29532,inst_29533);
var inst_29535 = cljs.core.List.EMPTY;
var inst_29536 = cljs.core._conj.call(null,inst_29535,inst_29531);
var inst_29537 = cljs.core.concat.call(null,inst_29534,inst_29536);
var inst_29538 = cljs.core.seq.call(null,inst_29537);
var inst_29539 = cljs.core.sequence.call(null,inst_29538);
var inst_29540 = cljs.core.List.EMPTY;
var inst_29541 = cljs.core._conj.call(null,inst_29540,inst_29539);
var inst_29542 = cljs.core.concat.call(null,inst_29541);
var inst_29543 = cljs.core.seq.call(null,inst_29542);
var inst_29544 = cljs.core.sequence.call(null,inst_29543);
var inst_29545 = cljs.core.vec.call(null,inst_29544);
var inst_29546 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29545);
var state_29773__$1 = state_29773;
var statearr_29832_29948 = state_29773__$1;
(statearr_29832_29948[(2)] = inst_29546);

(statearr_29832_29948[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (17))){
var inst_29446 = (state_29773[(15)]);
var inst_29445 = (state_29773[(16)]);
var inst_29452 = (state_29773[(2)]);
var inst_29453 = cljs.core.js__GT_clj.call(null,inst_29452);
var inst_29454 = cloudxmark.core.gen_key_bytes.call(null,inst_29445);
var inst_29455 = cloudxmark.core.create_aes_cbc.call(null,inst_29454);
var inst_29456 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29453,inst_29446,new cljs.core.Keyword(null,"login","login",55217519));
var inst_29457 = cljs.core.assoc.call(null,inst_29456,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_29455);
var inst_29458 = cljs.core.List.EMPTY;
var inst_29459 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29460 = cljs.core._conj.call(null,inst_29458,inst_29459);
var inst_29461 = cljs.core.List.EMPTY;
var inst_29462 = cljs.core._conj.call(null,inst_29461,inst_29457);
var inst_29463 = cljs.core.concat.call(null,inst_29460,inst_29462);
var inst_29464 = cljs.core.seq.call(null,inst_29463);
var inst_29465 = cljs.core.sequence.call(null,inst_29464);
var inst_29466 = cljs.core.List.EMPTY;
var inst_29467 = cljs.core._conj.call(null,inst_29466,inst_29465);
var inst_29468 = cljs.core.concat.call(null,inst_29467);
var inst_29469 = cljs.core.seq.call(null,inst_29468);
var inst_29470 = cljs.core.sequence.call(null,inst_29469);
var inst_29471 = cljs.core.vec.call(null,inst_29470);
var inst_29472 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29471);
var state_29773__$1 = state_29773;
var statearr_29833_29949 = state_29773__$1;
(statearr_29833_29949[(2)] = inst_29472);

(statearr_29833_29949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (3))){
var inst_29411 = (state_29773[(13)]);
var inst_29416 = (state_29773[(8)]);
var inst_29416__$1 = cljs.core.nth.call(null,inst_29411,(0),null);
var inst_29417 = cljs.core.nth.call(null,inst_29411,(1),null);
var inst_29418 = cljs.core.nth.call(null,inst_29411,(2),null);
var inst_29419 = cljs.core._EQ_.call(null,inst_29416__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_29773__$1 = (function (){var statearr_29834 = state_29773;
(statearr_29834[(17)] = inst_29418);

(statearr_29834[(7)] = inst_29417);

(statearr_29834[(8)] = inst_29416__$1);

return statearr_29834;
})();
if(inst_29419){
var statearr_29835_29950 = state_29773__$1;
(statearr_29835_29950[(1)] = (5));

} else {
var statearr_29836_29951 = state_29773__$1;
(statearr_29836_29951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (12))){
var state_29773__$1 = state_29773;
var statearr_29837_29952 = state_29773__$1;
(statearr_29837_29952[(2)] = false);

(statearr_29837_29952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (2))){
var inst_29407 = (state_29773[(2)]);
var inst_29408 = cljs.core.nth.call(null,inst_29407,(0),null);
var inst_29409 = cljs.core.nth.call(null,inst_29407,(1),null);
var inst_29410 = cljs.core.nth.call(null,inst_29407,(2),null);
var inst_29411 = inst_29407;
var state_29773__$1 = (function (){var statearr_29838 = state_29773;
(statearr_29838[(18)] = inst_29410);

(statearr_29838[(19)] = inst_29408);

(statearr_29838[(13)] = inst_29411);

(statearr_29838[(20)] = inst_29409);

return statearr_29838;
})();
var statearr_29839_29953 = state_29773__$1;
(statearr_29839_29953[(2)] = null);

(statearr_29839_29953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (66))){
var inst_29665 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29665)){
var statearr_29840_29954 = state_29773__$1;
(statearr_29840_29954[(1)] = (70));

} else {
var statearr_29841_29955 = state_29773__$1;
(statearr_29841_29955[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (23))){
var inst_29491 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29491)){
var statearr_29842_29956 = state_29773__$1;
(statearr_29842_29956[(1)] = (27));

} else {
var statearr_29843_29957 = state_29773__$1;
(statearr_29843_29957[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (47))){
var inst_29578 = (state_29773[(2)]);
var inst_29579 = cljs.core.js__GT_clj.call(null,inst_29578);
var inst_29580 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29579,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_29581 = cljs.core.List.EMPTY;
var inst_29582 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29583 = cljs.core._conj.call(null,inst_29581,inst_29582);
var inst_29584 = cljs.core.List.EMPTY;
var inst_29585 = cljs.core._conj.call(null,inst_29584,inst_29580);
var inst_29586 = cljs.core.concat.call(null,inst_29583,inst_29585);
var inst_29587 = cljs.core.seq.call(null,inst_29586);
var inst_29588 = cljs.core.sequence.call(null,inst_29587);
var inst_29589 = cljs.core.List.EMPTY;
var inst_29590 = cljs.core._conj.call(null,inst_29589,inst_29588);
var inst_29591 = cljs.core.concat.call(null,inst_29590);
var inst_29592 = cljs.core.seq.call(null,inst_29591);
var inst_29593 = cljs.core.sequence.call(null,inst_29592);
var inst_29594 = cljs.core.vec.call(null,inst_29593);
var inst_29595 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29594);
var state_29773__$1 = state_29773;
var statearr_29844_29958 = state_29773__$1;
(statearr_29844_29958[(2)] = inst_29595);

(statearr_29844_29958[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (35))){
var inst_29417 = (state_29773[(7)]);
var inst_29552 = (inst_29417 == null);
var inst_29553 = cljs.core.not.call(null,inst_29552);
var state_29773__$1 = state_29773;
if(inst_29553){
var statearr_29845_29959 = state_29773__$1;
(statearr_29845_29959[(1)] = (38));

} else {
var statearr_29846_29960 = state_29773__$1;
(statearr_29846_29960[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (82))){
var inst_29717 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29847_29961 = state_29773__$1;
(statearr_29847_29961[(2)] = inst_29717);

(statearr_29847_29961[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (76))){
var inst_29754 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29848_29962 = state_29773__$1;
(statearr_29848_29962[(2)] = inst_29754);

(statearr_29848_29962[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (19))){
var inst_29416 = (state_29773[(8)]);
var inst_29525 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_29773__$1 = state_29773;
if(inst_29525){
var statearr_29849_29963 = state_29773__$1;
(statearr_29849_29963[(1)] = (31));

} else {
var statearr_29850_29964 = state_29773__$1;
(statearr_29850_29964[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (57))){
var inst_29417 = (state_29773[(7)]);
var inst_29616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29851_29965 = state_29773__$1;
(statearr_29851_29965[(2)] = inst_29616);

(statearr_29851_29965[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (68))){
var state_29773__$1 = state_29773;
var statearr_29852_29966 = state_29773__$1;
(statearr_29852_29966[(2)] = false);

(statearr_29852_29966[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (11))){
var state_29773__$1 = state_29773;
var statearr_29853_29967 = state_29773__$1;
(statearr_29853_29967[(2)] = true);

(statearr_29853_29967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (9))){
var state_29773__$1 = state_29773;
var statearr_29854_29968 = state_29773__$1;
(statearr_29854_29968[(2)] = false);

(statearr_29854_29968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (5))){
var inst_29417 = (state_29773[(7)]);
var inst_29422 = [cljs.core.str("lst login data:"),cljs.core.str(inst_29417)].join('');
var inst_29423 = cljs.core.println.call(null,inst_29422);
var inst_29425 = (inst_29417 == null);
var inst_29426 = cljs.core.not.call(null,inst_29425);
var state_29773__$1 = (function (){var statearr_29855 = state_29773;
(statearr_29855[(21)] = inst_29423);

return statearr_29855;
})();
if(inst_29426){
var statearr_29856_29969 = state_29773__$1;
(statearr_29856_29969[(1)] = (8));

} else {
var statearr_29857_29970 = state_29773__$1;
(statearr_29857_29970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (83))){
var inst_29417 = (state_29773[(7)]);
var inst_29722 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29858_29971 = state_29773__$1;
(statearr_29858_29971[(2)] = inst_29722);

(statearr_29858_29971[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (14))){
var inst_29417 = (state_29773[(7)]);
var inst_29440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29773__$1 = state_29773;
var statearr_29859_29972 = state_29773__$1;
(statearr_29859_29972[(2)] = inst_29440);

(statearr_29859_29972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (45))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29860_29973 = state_29773__$1;
(statearr_29860_29973[(2)] = inst_29417);

(statearr_29860_29973[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (53))){
var inst_29614 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29614)){
var statearr_29861_29974 = state_29773__$1;
(statearr_29861_29974[(1)] = (57));

} else {
var statearr_29862_29975 = state_29773__$1;
(statearr_29862_29975[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (78))){
var state_29773__$1 = state_29773;
var statearr_29863_29976 = state_29773__$1;
(statearr_29863_29976[(2)] = false);

(statearr_29863_29976[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (26))){
var inst_29488 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29864_29977 = state_29773__$1;
(statearr_29864_29977[(2)] = inst_29488);

(statearr_29864_29977[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (16))){
var inst_29445 = (state_29773[(16)]);
var inst_29443 = (state_29773[(2)]);
var inst_29444 = cljs.core.get.call(null,inst_29443,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_29445__$1 = cljs.core.get.call(null,inst_29443,new cljs.core.Keyword(null,"password","password",417022471));
var inst_29446 = cljs.core.get.call(null,inst_29443,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_29447 = encodeURIComponent(inst_29444);
var inst_29448 = encodeURIComponent(inst_29445__$1);
var inst_29449 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_29447),cljs.core.str("&pass="),cljs.core.str(inst_29448)].join('');
var inst_29450 = cloudxmark.core.jsonp.call(null,inst_29449);
var state_29773__$1 = (function (){var statearr_29865 = state_29773;
(statearr_29865[(15)] = inst_29446);

(statearr_29865[(16)] = inst_29445__$1);

return statearr_29865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(17),inst_29450);
} else {
if((state_val_29774 === (81))){
var state_29773__$1 = state_29773;
var statearr_29866_29978 = state_29773__$1;
(statearr_29866_29978[(2)] = false);

(statearr_29866_29978[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (79))){
var inst_29720 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29720)){
var statearr_29867_29979 = state_29773__$1;
(statearr_29867_29979[(1)] = (83));

} else {
var statearr_29868_29980 = state_29773__$1;
(statearr_29868_29980[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (38))){
var inst_29417 = (state_29773[(7)]);
var inst_29555 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29556 = (inst_29555 & (64));
var inst_29557 = inst_29417.cljs$core$ISeq$;
var inst_29558 = (inst_29556) || (inst_29557);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29558)){
var statearr_29869_29981 = state_29773__$1;
(statearr_29869_29981[(1)] = (41));

} else {
var statearr_29870_29982 = state_29773__$1;
(statearr_29870_29982[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (87))){
var state_29773__$1 = state_29773;
var statearr_29871_29983 = state_29773__$1;
(statearr_29871_29983[(2)] = null);

(statearr_29871_29983[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (30))){
var inst_29506 = (state_29773[(2)]);
var inst_29507 = cljs.core.js__GT_clj.call(null,inst_29506);
var inst_29508 = cloudxmark.core.convert_json_status.call(null,inst_29507,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_29509 = cljs.core.List.EMPTY;
var inst_29510 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_29511 = cljs.core._conj.call(null,inst_29509,inst_29510);
var inst_29512 = cljs.core.List.EMPTY;
var inst_29513 = cljs.core._conj.call(null,inst_29512,inst_29508);
var inst_29514 = cljs.core.concat.call(null,inst_29511,inst_29513);
var inst_29515 = cljs.core.seq.call(null,inst_29514);
var inst_29516 = cljs.core.sequence.call(null,inst_29515);
var inst_29517 = cljs.core.List.EMPTY;
var inst_29518 = cljs.core._conj.call(null,inst_29517,inst_29516);
var inst_29519 = cljs.core.concat.call(null,inst_29518);
var inst_29520 = cljs.core.seq.call(null,inst_29519);
var inst_29521 = cljs.core.sequence.call(null,inst_29520);
var inst_29522 = cljs.core.vec.call(null,inst_29521);
var inst_29523 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29522);
var state_29773__$1 = state_29773;
var statearr_29872_29984 = state_29773__$1;
(statearr_29872_29984[(2)] = inst_29523);

(statearr_29872_29984[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (73))){
var inst_29682 = (state_29773[(2)]);
var inst_29683 = cljs.core.js__GT_clj.call(null,inst_29682);
var inst_29684 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29683,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_29685 = cljs.core.List.EMPTY;
var inst_29686 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29687 = cljs.core._conj.call(null,inst_29685,inst_29686);
var inst_29688 = cljs.core.List.EMPTY;
var inst_29689 = cljs.core._conj.call(null,inst_29688,inst_29684);
var inst_29690 = cljs.core.concat.call(null,inst_29687,inst_29689);
var inst_29691 = cljs.core.seq.call(null,inst_29690);
var inst_29692 = cljs.core.sequence.call(null,inst_29691);
var inst_29693 = cljs.core.List.EMPTY;
var inst_29694 = cljs.core._conj.call(null,inst_29693,inst_29692);
var inst_29695 = cljs.core.concat.call(null,inst_29694);
var inst_29696 = cljs.core.seq.call(null,inst_29695);
var inst_29697 = cljs.core.sequence.call(null,inst_29696);
var inst_29698 = cljs.core.vec.call(null,inst_29697);
var inst_29699 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29698);
var state_29773__$1 = state_29773;
var statearr_29873_29985 = state_29773__$1;
(statearr_29873_29985[(2)] = inst_29699);

(statearr_29873_29985[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (10))){
var inst_29438 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29438)){
var statearr_29874_29986 = state_29773__$1;
(statearr_29874_29986[(1)] = (14));

} else {
var statearr_29875_29987 = state_29773__$1;
(statearr_29875_29987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (18))){
var inst_29417 = (state_29773[(7)]);
var inst_29478 = (inst_29417 == null);
var inst_29479 = cljs.core.not.call(null,inst_29478);
var state_29773__$1 = state_29773;
if(inst_29479){
var statearr_29876_29988 = state_29773__$1;
(statearr_29876_29988[(1)] = (21));

} else {
var statearr_29877_29989 = state_29773__$1;
(statearr_29877_29989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (52))){
var state_29773__$1 = state_29773;
var statearr_29878_29990 = state_29773__$1;
(statearr_29878_29990[(2)] = false);

(statearr_29878_29990[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (67))){
var state_29773__$1 = state_29773;
var statearr_29879_29991 = state_29773__$1;
(statearr_29879_29991[(2)] = true);

(statearr_29879_29991[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (71))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29880_29992 = state_29773__$1;
(statearr_29880_29992[(2)] = inst_29417);

(statearr_29880_29992[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (42))){
var state_29773__$1 = state_29773;
var statearr_29881_29993 = state_29773__$1;
(statearr_29881_29993[(2)] = false);

(statearr_29881_29993[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (80))){
var state_29773__$1 = state_29773;
var statearr_29882_29994 = state_29773__$1;
(statearr_29882_29994[(2)] = true);

(statearr_29882_29994[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (37))){
var inst_29760 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29883_29995 = state_29773__$1;
(statearr_29883_29995[(2)] = inst_29760);

(statearr_29883_29995[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (63))){
var inst_29756 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29884_29996 = state_29773__$1;
(statearr_29884_29996[(2)] = inst_29756);

(statearr_29884_29996[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (8))){
var inst_29417 = (state_29773[(7)]);
var inst_29428 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29429 = (inst_29428 & (64));
var inst_29430 = inst_29417.cljs$core$ISeq$;
var inst_29431 = (inst_29429) || (inst_29430);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29431)){
var statearr_29885_29997 = state_29773__$1;
(statearr_29885_29997[(1)] = (11));

} else {
var statearr_29886_29998 = state_29773__$1;
(statearr_29886_29998[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (49))){
var inst_29416 = (state_29773[(8)]);
var inst_29648 = cljs.core._EQ_.call(null,inst_29416,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_29773__$1 = state_29773;
if(inst_29648){
var statearr_29887_29999 = state_29773__$1;
(statearr_29887_29999[(1)] = (61));

} else {
var statearr_29888_30000 = state_29773__$1;
(statearr_29888_30000[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (84))){
var inst_29417 = (state_29773[(7)]);
var state_29773__$1 = state_29773;
var statearr_29889_30001 = state_29773__$1;
(statearr_29889_30001[(2)] = inst_29417);

(statearr_29889_30001[(1)] = (85));


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
});})(c__26735__auto__))
;
return ((function (switch__26712__auto__,c__26735__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26713__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26713__auto____0 = (function (){
var statearr_29893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29893[(0)] = cloudxmark$core$search_loop_$_state_machine__26713__auto__);

(statearr_29893[(1)] = (1));

return statearr_29893;
});
var cloudxmark$core$search_loop_$_state_machine__26713__auto____1 = (function (state_29773){
while(true){
var ret_value__26714__auto__ = (function (){try{while(true){
var result__26715__auto__ = switch__26712__auto__.call(null,state_29773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26715__auto__;
}
break;
}
}catch (e29894){if((e29894 instanceof Object)){
var ex__26716__auto__ = e29894;
var statearr_29895_30002 = state_29773;
(statearr_29895_30002[(5)] = ex__26716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30003 = state_29773;
state_29773 = G__30003;
continue;
} else {
return ret_value__26714__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26713__auto__ = function(state_29773){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26713__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26713__auto____1.call(this,state_29773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26713__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26713__auto____0;
cloudxmark$core$search_loop_$_state_machine__26713__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26713__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26713__auto__;
})()
;})(switch__26712__auto__,c__26735__auto__))
})();
var state__26737__auto__ = (function (){var statearr_29896 = f__26736__auto__.call(null);
(statearr_29896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26735__auto__);

return statearr_29896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26737__auto__);
});})(c__26735__auto__))
);

return c__26735__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468557657402