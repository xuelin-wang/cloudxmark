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
var idx_28711 = (0);
while(true){
var len1_28712 = b1.length;
if((cljs.core._EQ_.call(null,idx_28711,len1_28712)) || (cljs.core._EQ_.call(null,idx_28711,max_len))){
} else {
(b1[idx_28711] = ((b1[idx_28711]) ^ (b2[idx_28711])));

var G__28713 = (idx_28711 + (1));
idx_28711 = G__28713;
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
var args28716 = [];
var len__22617__auto___28719 = arguments.length;
var i__22618__auto___28720 = (0);
while(true){
if((i__22618__auto___28720 < len__22617__auto___28719)){
args28716.push((arguments[i__22618__auto___28720]));

var G__28721 = (i__22618__auto___28720 + (1));
i__22618__auto___28720 = G__28721;
continue;
} else {
}
break;
}

var G__28718 = args28716.length;
switch (G__28718) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28716.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__28714_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28714_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__28715_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__28715_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__28723,_,p__28724){
var map__28725 = p__28723;
var map__28725__$1 = ((((!((map__28725 == null)))?((((map__28725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28725):map__28725);
var env = map__28725__$1;
var state = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28726 = p__28724;
var map__28726__$1 = ((((!((map__28726 == null)))?((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var query_ver = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__28729 = lst;
var map__28729__$1 = ((((!((map__28729 == null)))?((((map__28729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28729):map__28729);
var lsts = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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

var new_value_28731 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_28731);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__28732,_,p__28733){
var map__28734 = p__28732;
var map__28734__$1 = ((((!((map__28734 == null)))?((((map__28734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28734):map__28734);
var env = map__28734__$1;
var state = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28735 = p__28733;
var map__28735__$1 = ((((!((map__28735 == null)))?((((map__28735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28735):map__28735);
var status = map__28735__$1;
var id = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28734,map__28734__$1,env,state,map__28735,map__28735__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__28734,map__28734__$1,env,state,map__28735,map__28735__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__28738,_,p__28739){
var map__28740 = p__28738;
var map__28740__$1 = ((((!((map__28740 == null)))?((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var env = map__28740__$1;
var state = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28741 = p__28739;
var map__28741__$1 = ((((!((map__28741 == null)))?((((map__28741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);
var path = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28740,map__28740__$1,env,state,map__28741,map__28741__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__28740,map__28740__$1,env,state,map__28741,map__28741__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__28744,_,p__28745){
var map__28746 = p__28744;
var map__28746__$1 = ((((!((map__28746 == null)))?((((map__28746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);
var env = map__28746__$1;
var state = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28747 = p__28745;
var map__28747__$1 = ((((!((map__28747 == null)))?((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var data_map = map__28747__$1;
var lst_idx = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28746,map__28746__$1,env,state,map__28747,map__28747__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lst = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx], null));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var orig_name = cljs.core.get_in.call(null,lst,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",item_idx,"name"], null));
var encoded_value = ((cljs.core._EQ_.call(null,col_name,"value"))?cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,orig_name)):value);
cljs.core.println.call(null,[cljs.core.str("data-map in set-item-col:"),cljs.core.str(data_map),cljs.core.str("lst-id:"),cljs.core.str(lst_id)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx,"items",item_idx,col_name], null),value);

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__28746,map__28746__$1,env,state,map__28747,map__28747__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__28750,_,p__28751){
var map__28752 = p__28750;
var map__28752__$1 = ((((!((map__28752 == null)))?((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var env = map__28752__$1;
var state = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28753 = p__28751;
var map__28753__$1 = ((((!((map__28753 == null)))?((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var field_id = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28752,map__28752__$1,env,state,map__28753,map__28753__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__28752,map__28752__$1,env,state,map__28753,map__28753__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__28756,_,p__28757){
var map__28758 = p__28756;
var map__28758__$1 = ((((!((map__28758 == null)))?((((map__28758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28758):map__28758);
var env = map__28758__$1;
var state = cljs.core.get.call(null,map__28758__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28759 = p__28757;
var map__28759__$1 = ((((!((map__28759 == null)))?((((map__28759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28759):map__28759);
var data_map = map__28759__$1;
var user_id = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28758,map__28758__$1,env,state,map__28759,map__28759__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),cljs.core.assoc.call(null,data_map,new cljs.core.Keyword(null,"password","password",417022471),cloudxmark.core.enc_password.call(null,password)),null], null));
});})(map__28758,map__28758__$1,env,state,map__28759,map__28759__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null),(function (p__28762,_,p__28763){
var map__28764 = p__28762;
var map__28764__$1 = ((((!((map__28764 == null)))?((((map__28764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);
var env = map__28764__$1;
var state = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28765 = p__28763;
var map__28765__$1 = ((((!((map__28765 == null)))?((((map__28765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);
var data_map = map__28765__$1;
var user_id = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28764,map__28764__$1,env,state,map__28765,map__28765__$1,data_map,user_id,password){
return (function (){
return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998),data_map,null], null));
});})(map__28764,map__28764__$1,env,state,map__28765,map__28765__$1,data_map,user_id,password))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__28768,_,p__28769){
var map__28770 = p__28768;
var map__28770__$1 = ((((!((map__28770 == null)))?((((map__28770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28770):map__28770);
var env = map__28770__$1;
var state = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28771 = p__28769;
var map__28771__$1 = ((((!((map__28771 == null)))?((((map__28771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var data_map = map__28771__$1;
var name = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28770,map__28770__$1,env,state,map__28771,map__28771__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__28770,map__28770__$1,env,state,map__28771,map__28771__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__28774,_,p__28775){
var map__28776 = p__28774;
var map__28776__$1 = ((((!((map__28776 == null)))?((((map__28776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28776):map__28776);
var env = map__28776__$1;
var state = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28777 = p__28775;
var map__28777__$1 = ((((!((map__28777 == null)))?((((map__28777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777):map__28777);
var data_map = map__28777__$1;
var name = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28776,map__28776__$1,env,state,map__28777,map__28777__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var dontcare0 = cljs.core.println.call(null,[cljs.core.str("additem before cbc: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",state:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
var cbc = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null));
var dont = cljs.core.println.call(null,"cbc:",[cljs.core.str(cbc)].join(''));
var encoded_value = cloudxmark.core.cbc_enc_str.call(null,value,cbc,cloudxmark.core.gen_init_vector.call(null,name));
var dontcare = cljs.core.println.call(null,[cljs.core.str("additem: name: "),cljs.core.str(name),cljs.core.str(", value:"),cljs.core.str(value),cljs.core.str(",encoded:"),cljs.core.str(encoded_value)].join(''));
var curr = (function (){var or__21434__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),encoded_value], null),null], null));
});})(map__28776,map__28776__$1,env,state,map__28777,map__28777__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__28780,_,___$1){
var map__28781 = p__28780;
var map__28781__$1 = ((((!((map__28781 == null)))?((((map__28781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);
var env = map__28781__$1;
var state = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28781,map__28781__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__28781,map__28781__$1,env,state))
], null);
}));
cloudxmark.core.dec_items_vals = (function cloudxmark$core$dec_items_vals(lsts,cbc){
return cljs.core.map.call(null,(function (lst){
return cljs.core.assoc.call(null,lst,"items",cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,"value",cloudxmark.core.cbc_dec_str.call(null,cljs.core.get.call(null,item,"value"),cbc,cloudxmark.core.gen_init_vector.call(null,cljs.core.get.call(null,item,"name"))));
}),cljs.core.get.call(null,lst,"items")));
}),lsts);
});
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__28783,_,p__28784){
var map__28785 = p__28783;
var map__28785__$1 = ((((!((map__28785 == null)))?((((map__28785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28785):map__28785);
var env = map__28785__$1;
var state = cljs.core.get.call(null,map__28785__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28786 = p__28784;
var map__28786__$1 = ((((!((map__28786 == null)))?((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var data_map = map__28786__$1;
var status = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var ver = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var cbc = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"cbc","cbc",296490828));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28785,map__28785__$1,env,state,map__28786,map__28786__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
var new_cbc = (((cbc == null))?cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"cbc","cbc",296490828)], null)):cbc);
var new_lsts = cloudxmark.core.dec_items_vals.call(null,lsts,new_cbc);
if(cljs.core.truth_((function (){var and__21422__auto__ = status;
if(cljs.core.truth_(and__21422__auto__)){
return status_id;
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),new_lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),is_admin_QMARK_,new cljs.core.Keyword(null,"cbc","cbc",296490828),new_cbc], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__28785,map__28785__$1,env,state,map__28786,map__28786__$1,data_map,status,lsts,user_id,is_admin_QMARK_,ver,cbc))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args28789 = [];
var len__22617__auto___28792 = arguments.length;
var i__22618__auto___28793 = (0);
while(true){
if((i__22618__auto___28793 < len__22617__auto___28792)){
args28789.push((arguments[i__22618__auto___28793]));

var G__28794 = (i__22618__auto___28793 + (1));
i__22618__auto___28793 = G__28794;
continue;
} else {
}
break;
}

var G__28791 = args28789.length;
switch (G__28791) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28789.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21434__auto__ = field_state;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22360__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_idx,item_idx,item,col_name){
var field_val = (function (){var or__21434__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_idx),cljs.core.str("-"),cljs.core.str(item_idx),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330)),(function (){var x__22360__auto__ = lst_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161)),(function (){var x__22360__auto__ = item_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22360__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(field_val))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__28796){
var map__28802 = p__28796;
var map__28802__$1 = ((((!((map__28802 == null)))?((((map__28802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28802):map__28802);
var info = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__28804 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__28804,(0),null);
var msg = cljs.core.nth.call(null,vec__28804,(1),null);
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
var new_item_value = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22360__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22360__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
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
var new_lst_description = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22360__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__28809 = lst;
var map__28809__$1 = ((((!((map__28809 == null)))?((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var lsts = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__28809,map__28809__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__28809,map__28809__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__28813 = lst;
var map__28813__$1 = ((((!((map__28813 == null)))?((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28813):map__28813);
var status = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__28819 = (function (){var G__28822 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28822) {
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__28819,(0),null);
var query_key = cljs.core.nth.call(null,vec__28819,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__28819,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__28819,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22360__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22360__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22360__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
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
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-user","lst/add-user",490040823,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22360__auto__ = new_user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22360__auto__ = new_password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-user","add-user",-1150614693)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Add User"));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26956__auto__ = this;
React.Component.apply(this__26956__auto__,arguments);

if(!((this__26956__auto__.initLocalState == null))){
this__26956__auto__.state = this__26956__auto__.initLocalState();
} else {
this__26956__auto__.state = {};
}

return this__26956__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x28828_28840 = cloudxmark.core.Lsts.prototype;
x28828_28840.componentWillUpdate = ((function (x28828_28840){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___28841 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___28842 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___28841,next_ident__26862__auto___28842)){
var idxr__26863__auto___28843 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___28843 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___28843),((function (idxr__26863__auto___28843,ident__26861__auto___28841,next_ident__26862__auto___28842,this__26857__auto__,x28828_28840){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___28841], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___28842], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___28843,ident__26861__auto___28841,next_ident__26862__auto___28842,this__26857__auto__,x28828_28840))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x28828_28840))
;

x28828_28840.shouldComponentUpdate = ((function (x28828_28840){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__28830 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28830);
} else {
return G__28830;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26857__auto__),next_props__26858__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26857__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26857__auto__.state,"omcljs$state"),goog.object.get(next_state__26859__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26857__auto__.props.children,next_children__26860__auto__);
}
}
});})(x28828_28840))
;

x28828_28840.componentWillUnmount = ((function (x28828_28840){
return (function (){
var this__26857__auto__ = this;
var r__26868__auto__ = om.next.get_reconciler.call(null,this__26857__auto__);
var cfg__26869__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26868__auto__);
var st__26870__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
var indexer__26867__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26870__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26857__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26870__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26857__auto__);
} else {
}

if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x28828_28840))
;

x28828_28840.componentDidUpdate = ((function (x28828_28840){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x28828_28840))
;

x28828_28840.isMounted = ((function (x28828_28840){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28828_28840))
;

x28828_28840.componentWillMount = ((function (x28828_28840){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x28828_28840))
;

x28828_28840.render = ((function (x28828_28840){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_28831 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28832 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28833 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28834 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28835 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__28836 = lst;
var map__28836__$1 = ((((!((map__28836 == null)))?((((map__28836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28836):map__28836);
var lsts = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var is_admin_QMARK_ = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933));
var status = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div(null,om.util.force_children.call(null,(((user_id == null))?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status)))):null)),om.util.force_children.call(null,((!((user_id == null)))?React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr)))):null)),om.util.force_children.call(null,(cljs.core.truth_(is_admin_QMARK_)?React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new user"))),om.util.force_children.call(null,"New User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-user-id-field","new-user-id-field",916496334))),om.util.force_children.call(null,"New Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"new-password-field","new-password-field",-101278149),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.add_user_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-user","add-user",-1150614693).cljs$core$IFn$_invoke$arity$1(status)))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28835;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28834;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28833;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28832;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28831;
}});})(x28828_28840))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x28838_28844 = cloudxmark.core.Lsts;
x28838_28844.om$next$IQueryParams$ = true;

x28838_28844.om$next$IQueryParams$params$arity$1 = ((function (x28838_28844){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28838_28844))
;

x28838_28844.om$next$IQuery$ = true;

x28838_28844.om$next$IQuery$query$arity$1 = ((function (x28838_28844){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28838_28844))
;


var x28839_28845 = cloudxmark.core.Lsts.prototype;
x28839_28845.om$next$IQueryParams$ = true;

x28839_28845.om$next$IQueryParams$params$arity$1 = ((function (x28839_28845){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28839_28845))
;

x28839_28845.om$next$IQuery$ = true;

x28839_28845.om$next$IQuery$query$arity$1 = ((function (x28839_28845){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28839_28845))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/Lsts");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__28854,cb){
var map__28855 = p__28854;
var map__28855__$1 = ((((!((map__28855 == null)))?((((map__28855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);
var lst_search = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(lst_search)){
var map__28857 = om.next.query__GT_ast.call(null,lst_search);
var map__28857__$1 = ((((!((map__28857 == null)))?((((map__28857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28857):map__28857);
var vec__28858 = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__28858,(0),null);
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
var map__28866 = result;
var map__28866__$1 = ((((!((map__28866 == null)))?((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);
var lsts = cljs.core.get.call(null,map__28866__$1,"lsts");
var user_id = cljs.core.get.call(null,map__28866__$1,"user_id");
var is_admin = cljs.core.get.call(null,map__28866__$1,"is_admin");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__28867 = json_status;
var map__28867__$1 = ((((!((map__28867 == null)))?((((map__28867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28867):map__28867);
var info = cljs.core.get.call(null,map__28867__$1,"info");
var warn = cljs.core.get.call(null,map__28867__$1,"warn");
var error = cljs.core.get.call(null,map__28867__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"is-admin?","is-admin?",-1489161933),cljs.core._EQ_.call(null,"true",is_admin),new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.convert_json_status = (function cloudxmark$core$convert_json_status(result,status_id){
var json_status = cljs.core.get.call(null,result,"status");
var map__28872 = json_status;
var map__28872__$1 = ((((!((map__28872 == null)))?((((map__28872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28872):map__28872);
var info = cljs.core.get.call(null,map__28872__$1,"info");
var warn = cljs.core.get.call(null,map__28872__$1,"warn");
var error = cljs.core.get.call(null,map__28872__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (65))){
var state_29746__$1 = state_29746;
var statearr_29748_29870 = state_29746__$1;
(statearr_29748_29870[(2)] = false);

(statearr_29748_29870[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (70))){
var inst_29390 = (state_29746[(7)]);
var inst_29640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29749_29871 = state_29746__$1;
(statearr_29749_29871[(2)] = inst_29640);

(statearr_29749_29871[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (62))){
var inst_29389 = (state_29746[(8)]);
var inst_29674 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_29746__$1 = state_29746;
if(inst_29674){
var statearr_29750_29872 = state_29746__$1;
(statearr_29750_29872[(1)] = (74));

} else {
var statearr_29751_29873 = state_29746__$1;
(statearr_29751_29873[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (74))){
var inst_29390 = (state_29746[(7)]);
var inst_29677 = [cljs.core.str("lst query data:"),cljs.core.str(inst_29390)].join('');
var inst_29678 = cljs.core.println.call(null,inst_29677);
var inst_29680 = (inst_29390 == null);
var inst_29681 = cljs.core.not.call(null,inst_29680);
var state_29746__$1 = (function (){var statearr_29752 = state_29746;
(statearr_29752[(9)] = inst_29678);

return statearr_29752;
})();
if(inst_29681){
var statearr_29753_29874 = state_29746__$1;
(statearr_29753_29874[(1)] = (77));

} else {
var statearr_29754_29875 = state_29746__$1;
(statearr_29754_29875[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (7))){
var inst_29739 = (state_29746[(2)]);
var state_29746__$1 = (function (){var statearr_29755 = state_29746;
(statearr_29755[(10)] = inst_29739);

return statearr_29755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(90),c);
} else {
if((state_val_29747 === (59))){
var inst_29592 = (state_29746[(2)]);
var inst_29593 = cljs.core.get.call(null,inst_29592,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_29594 = cljs.core.get.call(null,inst_29592,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_29595 = cljs.core.get.call(null,inst_29592,new cljs.core.Keyword(null,"value","value",305978217));
var inst_29596 = encodeURIComponent(inst_29593);
var inst_29597 = encodeURIComponent(inst_29594);
var inst_29598 = encodeURIComponent(inst_29595);
var inst_29599 = [cljs.core.str("/addItem?lst-id="),cljs.core.str(inst_29596),cljs.core.str("&name="),cljs.core.str(inst_29597),cljs.core.str("&value="),cljs.core.str(inst_29598)].join('');
var inst_29600 = cloudxmark.core.jsonp.call(null,inst_29599);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(60),inst_29600);
} else {
if((state_val_29747 === (86))){
var inst_29700 = (state_29746[(11)]);
var inst_29703 = (state_29746[(2)]);
var inst_29704 = cljs.core.js__GT_clj.call(null,inst_29703);
var inst_29705 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29704,inst_29700,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_29706 = cljs.core.List.EMPTY;
var inst_29707 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29708 = cljs.core._conj.call(null,inst_29706,inst_29707);
var inst_29709 = cljs.core.List.EMPTY;
var inst_29710 = cljs.core._conj.call(null,inst_29709,inst_29705);
var inst_29711 = cljs.core.concat.call(null,inst_29708,inst_29710);
var inst_29712 = cljs.core.seq.call(null,inst_29711);
var inst_29713 = cljs.core.sequence.call(null,inst_29712);
var inst_29714 = cljs.core.List.EMPTY;
var inst_29715 = cljs.core._conj.call(null,inst_29714,inst_29713);
var inst_29716 = cljs.core.concat.call(null,inst_29715);
var inst_29717 = cljs.core.seq.call(null,inst_29716);
var inst_29718 = cljs.core.sequence.call(null,inst_29717);
var inst_29719 = cljs.core.vec.call(null,inst_29718);
var inst_29720 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29719);
var state_29746__$1 = state_29746;
var statearr_29756_29876 = state_29746__$1;
(statearr_29756_29876[(2)] = inst_29720);

(statearr_29756_29876[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (20))){
var inst_29737 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29757_29877 = state_29746__$1;
(statearr_29757_29877[(2)] = inst_29737);

(statearr_29757_29877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (72))){
var inst_29643 = (state_29746[(2)]);
var inst_29644 = cljs.core.get.call(null,inst_29643,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_29645 = cljs.core.get.call(null,inst_29643,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_29646 = cljs.core.get.call(null,inst_29643,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_29647 = cljs.core.get.call(null,inst_29643,new cljs.core.Keyword(null,"value","value",305978217));
var inst_29648 = encodeURIComponent(inst_29644);
var inst_29649 = encodeURIComponent(inst_29645);
var inst_29650 = encodeURIComponent(inst_29646);
var inst_29651 = encodeURIComponent(inst_29647);
var inst_29652 = [cljs.core.str("/updateItem?lst-id="),cljs.core.str(inst_29648),cljs.core.str("&orig-name="),cljs.core.str(inst_29649),cljs.core.str("&col-name="),cljs.core.str(inst_29650),cljs.core.str("&value="),cljs.core.str(inst_29651)].join('');
var inst_29653 = cloudxmark.core.jsonp.call(null,inst_29652);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(73),inst_29653);
} else {
if((state_val_29747 === (58))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29758_29878 = state_29746__$1;
(statearr_29758_29878[(2)] = inst_29390);

(statearr_29758_29878[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (60))){
var inst_29602 = (state_29746[(2)]);
var inst_29603 = cljs.core.js__GT_clj.call(null,inst_29602);
var inst_29604 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29603,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_29605 = cljs.core.List.EMPTY;
var inst_29606 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29607 = cljs.core._conj.call(null,inst_29605,inst_29606);
var inst_29608 = cljs.core.List.EMPTY;
var inst_29609 = cljs.core._conj.call(null,inst_29608,inst_29604);
var inst_29610 = cljs.core.concat.call(null,inst_29607,inst_29609);
var inst_29611 = cljs.core.seq.call(null,inst_29610);
var inst_29612 = cljs.core.sequence.call(null,inst_29611);
var inst_29613 = cljs.core.List.EMPTY;
var inst_29614 = cljs.core._conj.call(null,inst_29613,inst_29612);
var inst_29615 = cljs.core.concat.call(null,inst_29614);
var inst_29616 = cljs.core.seq.call(null,inst_29615);
var inst_29617 = cljs.core.sequence.call(null,inst_29616);
var inst_29618 = cljs.core.vec.call(null,inst_29617);
var inst_29619 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29618);
var state_29746__$1 = state_29746;
var statearr_29759_29879 = state_29746__$1;
(statearr_29759_29879[(2)] = inst_29619);

(statearr_29759_29879[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (27))){
var inst_29390 = (state_29746[(7)]);
var inst_29466 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29760_29880 = state_29746__$1;
(statearr_29760_29880[(2)] = inst_29466);

(statearr_29760_29880[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (1))){
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(2),c);
} else {
if((state_val_29747 === (69))){
var inst_29635 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29761_29881 = state_29746__$1;
(statearr_29761_29881[(2)] = inst_29635);

(statearr_29761_29881[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (24))){
var state_29746__$1 = state_29746;
var statearr_29762_29882 = state_29746__$1;
(statearr_29762_29882[(2)] = true);

(statearr_29762_29882[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (55))){
var state_29746__$1 = state_29746;
var statearr_29763_29883 = state_29746__$1;
(statearr_29763_29883[(2)] = false);

(statearr_29763_29883[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (85))){
var inst_29698 = (state_29746[(2)]);
var inst_29699 = cljs.core.get.call(null,inst_29698,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_29700 = cljs.core.get.call(null,inst_29698,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_29701 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_29746__$1 = (function (){var statearr_29764 = state_29746;
(statearr_29764[(11)] = inst_29700);

(statearr_29764[(12)] = inst_29699);

return statearr_29764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(86),inst_29701);
} else {
if((state_val_29747 === (39))){
var state_29746__$1 = state_29746;
var statearr_29765_29884 = state_29746__$1;
(statearr_29765_29884[(2)] = false);

(statearr_29765_29884[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (88))){
var state_29746__$1 = state_29746;
var statearr_29766_29885 = state_29746__$1;
(statearr_29766_29885[(2)] = null);

(statearr_29766_29885[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (46))){
var inst_29543 = (state_29746[(2)]);
var inst_29544 = cljs.core.get.call(null,inst_29543,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_29545 = cljs.core.get.call(null,inst_29543,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_29546 = encodeURIComponent(inst_29544);
var inst_29547 = encodeURIComponent(inst_29545);
var inst_29548 = [cljs.core.str("/addLst?name="),cljs.core.str(inst_29546),cljs.core.str("&desc="),cljs.core.str(inst_29547)].join('');
var inst_29549 = cloudxmark.core.jsonp.call(null,inst_29548);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(47),inst_29549);
} else {
if((state_val_29747 === (4))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (77))){
var inst_29390 = (state_29746[(7)]);
var inst_29683 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29684 = (inst_29683 & (64));
var inst_29685 = inst_29390.cljs$core$ISeq$;
var inst_29686 = (inst_29684) || (inst_29685);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29686)){
var statearr_29767_29886 = state_29746__$1;
(statearr_29767_29886[(1)] = (80));

} else {
var statearr_29768_29887 = state_29746__$1;
(statearr_29768_29887[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (54))){
var state_29746__$1 = state_29746;
var statearr_29769_29888 = state_29746__$1;
(statearr_29769_29888[(2)] = true);

(statearr_29769_29888[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (15))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29770_29889 = state_29746__$1;
(statearr_29770_29889[(2)] = inst_29390);

(statearr_29770_29889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (48))){
var inst_29390 = (state_29746[(7)]);
var inst_29574 = (inst_29390 == null);
var inst_29575 = cljs.core.not.call(null,inst_29574);
var state_29746__$1 = state_29746;
if(inst_29575){
var statearr_29771_29890 = state_29746__$1;
(statearr_29771_29890[(1)] = (51));

} else {
var statearr_29772_29891 = state_29746__$1;
(statearr_29772_29891[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (50))){
var inst_29731 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29773_29892 = state_29746__$1;
(statearr_29773_29892[(2)] = inst_29731);

(statearr_29773_29892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (75))){
var state_29746__$1 = state_29746;
var statearr_29774_29893 = state_29746__$1;
(statearr_29774_29893[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (21))){
var inst_29390 = (state_29746[(7)]);
var inst_29454 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29455 = (inst_29454 & (64));
var inst_29456 = inst_29390.cljs$core$ISeq$;
var inst_29457 = (inst_29455) || (inst_29456);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29457)){
var statearr_29776_29894 = state_29746__$1;
(statearr_29776_29894[(1)] = (24));

} else {
var statearr_29777_29895 = state_29746__$1;
(statearr_29777_29895[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (31))){
var inst_29500 = cloudxmark.core.jsonp.call(null,"/logout");
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(34),inst_29500);
} else {
if((state_val_29747 === (32))){
var inst_29389 = (state_29746[(8)]);
var inst_29521 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_29746__$1 = state_29746;
if(inst_29521){
var statearr_29778_29896 = state_29746__$1;
(statearr_29778_29896[(1)] = (35));

} else {
var statearr_29779_29897 = state_29746__$1;
(statearr_29779_29897[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (40))){
var inst_29538 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29538)){
var statearr_29780_29898 = state_29746__$1;
(statearr_29780_29898[(1)] = (44));

} else {
var statearr_29781_29899 = state_29746__$1;
(statearr_29781_29899[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (56))){
var inst_29584 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29782_29900 = state_29746__$1;
(statearr_29782_29900[(2)] = inst_29584);

(statearr_29782_29900[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (33))){
var inst_29735 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29783_29901 = state_29746__$1;
(statearr_29783_29901[(2)] = inst_29735);

(statearr_29783_29901[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (13))){
var inst_29408 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29784_29902 = state_29746__$1;
(statearr_29784_29902[(2)] = inst_29408);

(statearr_29784_29902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (22))){
var state_29746__$1 = state_29746;
var statearr_29785_29903 = state_29746__$1;
(statearr_29785_29903[(2)] = false);

(statearr_29785_29903[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (90))){
var inst_29741 = (state_29746[(2)]);
var inst_29384 = inst_29741;
var state_29746__$1 = (function (){var statearr_29786 = state_29746;
(statearr_29786[(13)] = inst_29384);

return statearr_29786;
})();
var statearr_29787_29904 = state_29746__$1;
(statearr_29787_29904[(2)] = null);

(statearr_29787_29904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (36))){
var inst_29389 = (state_29746[(8)]);
var inst_29570 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_29746__$1 = state_29746;
if(inst_29570){
var statearr_29788_29905 = state_29746__$1;
(statearr_29788_29905[(1)] = (48));

} else {
var statearr_29789_29906 = state_29746__$1;
(statearr_29789_29906[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (41))){
var state_29746__$1 = state_29746;
var statearr_29790_29907 = state_29746__$1;
(statearr_29790_29907[(2)] = true);

(statearr_29790_29907[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (89))){
var inst_29725 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29791_29908 = state_29746__$1;
(statearr_29791_29908[(2)] = inst_29725);

(statearr_29791_29908[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (43))){
var inst_29535 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29792_29909 = state_29746__$1;
(statearr_29792_29909[(2)] = inst_29535);

(statearr_29792_29909[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (61))){
var inst_29390 = (state_29746[(7)]);
var inst_29625 = (inst_29390 == null);
var inst_29626 = cljs.core.not.call(null,inst_29625);
var state_29746__$1 = state_29746;
if(inst_29626){
var statearr_29793_29910 = state_29746__$1;
(statearr_29793_29910[(1)] = (64));

} else {
var statearr_29794_29911 = state_29746__$1;
(statearr_29794_29911[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (29))){
var inst_29469 = (state_29746[(2)]);
var inst_29470 = cljs.core.get.call(null,inst_29469,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_29471 = cljs.core.get.call(null,inst_29469,new cljs.core.Keyword(null,"password","password",417022471));
var inst_29472 = cljs.core.get.call(null,inst_29469,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_29473 = cloudxmark.core.enc_password.call(null,inst_29471);
var inst_29474 = encodeURIComponent(inst_29470);
var inst_29475 = encodeURIComponent(inst_29473);
var inst_29476 = [cljs.core.str("/addAuth?user-id="),cljs.core.str(inst_29474),cljs.core.str("&pass="),cljs.core.str(inst_29475)].join('');
var inst_29477 = cloudxmark.core.jsonp.call(null,inst_29476);
var state_29746__$1 = (function (){var statearr_29795 = state_29746;
(statearr_29795[(14)] = inst_29472);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(30),inst_29477);
} else {
if((state_val_29747 === (44))){
var inst_29390 = (state_29746[(7)]);
var inst_29540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29796_29912 = state_29746__$1;
(statearr_29796_29912[(2)] = inst_29540);

(statearr_29796_29912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (6))){
var inst_29389 = (state_29746[(8)]);
var inst_29447 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-add-user","lst-add-user",-95423998));
var state_29746__$1 = state_29746;
if(inst_29447){
var statearr_29797_29913 = state_29746__$1;
(statearr_29797_29913[(1)] = (18));

} else {
var statearr_29798_29914 = state_29746__$1;
(statearr_29798_29914[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (28))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29799_29915 = state_29746__$1;
(statearr_29799_29915[(2)] = inst_29390);

(statearr_29799_29915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (64))){
var inst_29390 = (state_29746[(7)]);
var inst_29628 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29629 = (inst_29628 & (64));
var inst_29630 = inst_29390.cljs$core$ISeq$;
var inst_29631 = (inst_29629) || (inst_29630);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29631)){
var statearr_29800_29916 = state_29746__$1;
(statearr_29800_29916[(1)] = (67));

} else {
var statearr_29801_29917 = state_29746__$1;
(statearr_29801_29917[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (51))){
var inst_29390 = (state_29746[(7)]);
var inst_29577 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29578 = (inst_29577 & (64));
var inst_29579 = inst_29390.cljs$core$ISeq$;
var inst_29580 = (inst_29578) || (inst_29579);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29580)){
var statearr_29802_29918 = state_29746__$1;
(statearr_29802_29918[(1)] = (54));

} else {
var statearr_29803_29919 = state_29746__$1;
(statearr_29803_29919[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (25))){
var state_29746__$1 = state_29746;
var statearr_29804_29920 = state_29746__$1;
(statearr_29804_29920[(2)] = false);

(statearr_29804_29920[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (34))){
var inst_29502 = (state_29746[(2)]);
var inst_29503 = cljs.core.js__GT_clj.call(null,inst_29502);
var inst_29504 = cloudxmark.core.convert_json_status.call(null,inst_29503,new cljs.core.Keyword(null,"logout","logout",1418564329));
var inst_29505 = cljs.core.List.EMPTY;
var inst_29506 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_29507 = cljs.core._conj.call(null,inst_29505,inst_29506);
var inst_29508 = cljs.core.List.EMPTY;
var inst_29509 = cljs.core._conj.call(null,inst_29508,inst_29504);
var inst_29510 = cljs.core.concat.call(null,inst_29507,inst_29509);
var inst_29511 = cljs.core.seq.call(null,inst_29510);
var inst_29512 = cljs.core.sequence.call(null,inst_29511);
var inst_29513 = cljs.core.List.EMPTY;
var inst_29514 = cljs.core._conj.call(null,inst_29513,inst_29512);
var inst_29515 = cljs.core.concat.call(null,inst_29514);
var inst_29516 = cljs.core.seq.call(null,inst_29515);
var inst_29517 = cljs.core.sequence.call(null,inst_29516);
var inst_29518 = cljs.core.vec.call(null,inst_29517);
var inst_29519 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29518);
var state_29746__$1 = state_29746;
var statearr_29805_29921 = state_29746__$1;
(statearr_29805_29921[(2)] = inst_29519);

(statearr_29805_29921[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (17))){
var inst_29418 = (state_29746[(15)]);
var inst_29419 = (state_29746[(16)]);
var inst_29425 = (state_29746[(2)]);
var inst_29426 = cljs.core.js__GT_clj.call(null,inst_29425);
var inst_29427 = cloudxmark.core.gen_key_bytes.call(null,inst_29418);
var inst_29428 = cloudxmark.core.create_aes_cbc.call(null,inst_29427);
var inst_29429 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29426,inst_29419,new cljs.core.Keyword(null,"login","login",55217519));
var inst_29430 = cljs.core.assoc.call(null,inst_29429,new cljs.core.Keyword(null,"cbc","cbc",296490828),inst_29428);
var inst_29431 = cljs.core.List.EMPTY;
var inst_29432 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29433 = cljs.core._conj.call(null,inst_29431,inst_29432);
var inst_29434 = cljs.core.List.EMPTY;
var inst_29435 = cljs.core._conj.call(null,inst_29434,inst_29430);
var inst_29436 = cljs.core.concat.call(null,inst_29433,inst_29435);
var inst_29437 = cljs.core.seq.call(null,inst_29436);
var inst_29438 = cljs.core.sequence.call(null,inst_29437);
var inst_29439 = cljs.core.List.EMPTY;
var inst_29440 = cljs.core._conj.call(null,inst_29439,inst_29438);
var inst_29441 = cljs.core.concat.call(null,inst_29440);
var inst_29442 = cljs.core.seq.call(null,inst_29441);
var inst_29443 = cljs.core.sequence.call(null,inst_29442);
var inst_29444 = cljs.core.vec.call(null,inst_29443);
var inst_29445 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29444);
var state_29746__$1 = state_29746;
var statearr_29806_29922 = state_29746__$1;
(statearr_29806_29922[(2)] = inst_29445);

(statearr_29806_29922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (3))){
var inst_29384 = (state_29746[(13)]);
var inst_29389 = (state_29746[(8)]);
var inst_29389__$1 = cljs.core.nth.call(null,inst_29384,(0),null);
var inst_29390 = cljs.core.nth.call(null,inst_29384,(1),null);
var inst_29391 = cljs.core.nth.call(null,inst_29384,(2),null);
var inst_29392 = cljs.core._EQ_.call(null,inst_29389__$1,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_29746__$1 = (function (){var statearr_29807 = state_29746;
(statearr_29807[(17)] = inst_29391);

(statearr_29807[(7)] = inst_29390);

(statearr_29807[(8)] = inst_29389__$1);

return statearr_29807;
})();
if(inst_29392){
var statearr_29808_29923 = state_29746__$1;
(statearr_29808_29923[(1)] = (5));

} else {
var statearr_29809_29924 = state_29746__$1;
(statearr_29809_29924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (12))){
var state_29746__$1 = state_29746;
var statearr_29810_29925 = state_29746__$1;
(statearr_29810_29925[(2)] = false);

(statearr_29810_29925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (2))){
var inst_29380 = (state_29746[(2)]);
var inst_29381 = cljs.core.nth.call(null,inst_29380,(0),null);
var inst_29382 = cljs.core.nth.call(null,inst_29380,(1),null);
var inst_29383 = cljs.core.nth.call(null,inst_29380,(2),null);
var inst_29384 = inst_29380;
var state_29746__$1 = (function (){var statearr_29811 = state_29746;
(statearr_29811[(18)] = inst_29381);

(statearr_29811[(19)] = inst_29383);

(statearr_29811[(20)] = inst_29382);

(statearr_29811[(13)] = inst_29384);

return statearr_29811;
})();
var statearr_29812_29926 = state_29746__$1;
(statearr_29812_29926[(2)] = null);

(statearr_29812_29926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (66))){
var inst_29638 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29638)){
var statearr_29813_29927 = state_29746__$1;
(statearr_29813_29927[(1)] = (70));

} else {
var statearr_29814_29928 = state_29746__$1;
(statearr_29814_29928[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (23))){
var inst_29464 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29464)){
var statearr_29815_29929 = state_29746__$1;
(statearr_29815_29929[(1)] = (27));

} else {
var statearr_29816_29930 = state_29746__$1;
(statearr_29816_29930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (47))){
var inst_29551 = (state_29746[(2)]);
var inst_29552 = cljs.core.js__GT_clj.call(null,inst_29551);
var inst_29553 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29552,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_29554 = cljs.core.List.EMPTY;
var inst_29555 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29556 = cljs.core._conj.call(null,inst_29554,inst_29555);
var inst_29557 = cljs.core.List.EMPTY;
var inst_29558 = cljs.core._conj.call(null,inst_29557,inst_29553);
var inst_29559 = cljs.core.concat.call(null,inst_29556,inst_29558);
var inst_29560 = cljs.core.seq.call(null,inst_29559);
var inst_29561 = cljs.core.sequence.call(null,inst_29560);
var inst_29562 = cljs.core.List.EMPTY;
var inst_29563 = cljs.core._conj.call(null,inst_29562,inst_29561);
var inst_29564 = cljs.core.concat.call(null,inst_29563);
var inst_29565 = cljs.core.seq.call(null,inst_29564);
var inst_29566 = cljs.core.sequence.call(null,inst_29565);
var inst_29567 = cljs.core.vec.call(null,inst_29566);
var inst_29568 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29567);
var state_29746__$1 = state_29746;
var statearr_29817_29931 = state_29746__$1;
(statearr_29817_29931[(2)] = inst_29568);

(statearr_29817_29931[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (35))){
var inst_29390 = (state_29746[(7)]);
var inst_29525 = (inst_29390 == null);
var inst_29526 = cljs.core.not.call(null,inst_29525);
var state_29746__$1 = state_29746;
if(inst_29526){
var statearr_29818_29932 = state_29746__$1;
(statearr_29818_29932[(1)] = (38));

} else {
var statearr_29819_29933 = state_29746__$1;
(statearr_29819_29933[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (82))){
var inst_29690 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29820_29934 = state_29746__$1;
(statearr_29820_29934[(2)] = inst_29690);

(statearr_29820_29934[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (76))){
var inst_29727 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29821_29935 = state_29746__$1;
(statearr_29821_29935[(2)] = inst_29727);

(statearr_29821_29935[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (19))){
var inst_29389 = (state_29746[(8)]);
var inst_29498 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_29746__$1 = state_29746;
if(inst_29498){
var statearr_29822_29936 = state_29746__$1;
(statearr_29822_29936[(1)] = (31));

} else {
var statearr_29823_29937 = state_29746__$1;
(statearr_29823_29937[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (57))){
var inst_29390 = (state_29746[(7)]);
var inst_29589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29824_29938 = state_29746__$1;
(statearr_29824_29938[(2)] = inst_29589);

(statearr_29824_29938[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (68))){
var state_29746__$1 = state_29746;
var statearr_29825_29939 = state_29746__$1;
(statearr_29825_29939[(2)] = false);

(statearr_29825_29939[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (11))){
var state_29746__$1 = state_29746;
var statearr_29826_29940 = state_29746__$1;
(statearr_29826_29940[(2)] = true);

(statearr_29826_29940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (9))){
var state_29746__$1 = state_29746;
var statearr_29827_29941 = state_29746__$1;
(statearr_29827_29941[(2)] = false);

(statearr_29827_29941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (5))){
var inst_29390 = (state_29746[(7)]);
var inst_29395 = [cljs.core.str("lst login data:"),cljs.core.str(inst_29390)].join('');
var inst_29396 = cljs.core.println.call(null,inst_29395);
var inst_29398 = (inst_29390 == null);
var inst_29399 = cljs.core.not.call(null,inst_29398);
var state_29746__$1 = (function (){var statearr_29828 = state_29746;
(statearr_29828[(21)] = inst_29396);

return statearr_29828;
})();
if(inst_29399){
var statearr_29829_29942 = state_29746__$1;
(statearr_29829_29942[(1)] = (8));

} else {
var statearr_29830_29943 = state_29746__$1;
(statearr_29830_29943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (83))){
var inst_29390 = (state_29746[(7)]);
var inst_29695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29831_29944 = state_29746__$1;
(statearr_29831_29944[(2)] = inst_29695);

(statearr_29831_29944[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (14))){
var inst_29390 = (state_29746[(7)]);
var inst_29413 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29746__$1 = state_29746;
var statearr_29832_29945 = state_29746__$1;
(statearr_29832_29945[(2)] = inst_29413);

(statearr_29832_29945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (45))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29833_29946 = state_29746__$1;
(statearr_29833_29946[(2)] = inst_29390);

(statearr_29833_29946[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (53))){
var inst_29587 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29587)){
var statearr_29834_29947 = state_29746__$1;
(statearr_29834_29947[(1)] = (57));

} else {
var statearr_29835_29948 = state_29746__$1;
(statearr_29835_29948[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (78))){
var state_29746__$1 = state_29746;
var statearr_29836_29949 = state_29746__$1;
(statearr_29836_29949[(2)] = false);

(statearr_29836_29949[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (26))){
var inst_29461 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29837_29950 = state_29746__$1;
(statearr_29837_29950[(2)] = inst_29461);

(statearr_29837_29950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (16))){
var inst_29418 = (state_29746[(15)]);
var inst_29416 = (state_29746[(2)]);
var inst_29417 = cljs.core.get.call(null,inst_29416,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_29418__$1 = cljs.core.get.call(null,inst_29416,new cljs.core.Keyword(null,"password","password",417022471));
var inst_29419 = cljs.core.get.call(null,inst_29416,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_29420 = encodeURIComponent(inst_29417);
var inst_29421 = encodeURIComponent(inst_29418__$1);
var inst_29422 = [cljs.core.str("/loginGetItems?user-id="),cljs.core.str(inst_29420),cljs.core.str("&pass="),cljs.core.str(inst_29421)].join('');
var inst_29423 = cloudxmark.core.jsonp.call(null,inst_29422);
var state_29746__$1 = (function (){var statearr_29838 = state_29746;
(statearr_29838[(15)] = inst_29418__$1);

(statearr_29838[(16)] = inst_29419);

return statearr_29838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(17),inst_29423);
} else {
if((state_val_29747 === (81))){
var state_29746__$1 = state_29746;
var statearr_29839_29951 = state_29746__$1;
(statearr_29839_29951[(2)] = false);

(statearr_29839_29951[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (79))){
var inst_29693 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29693)){
var statearr_29840_29952 = state_29746__$1;
(statearr_29840_29952[(1)] = (83));

} else {
var statearr_29841_29953 = state_29746__$1;
(statearr_29841_29953[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (38))){
var inst_29390 = (state_29746[(7)]);
var inst_29528 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29529 = (inst_29528 & (64));
var inst_29530 = inst_29390.cljs$core$ISeq$;
var inst_29531 = (inst_29529) || (inst_29530);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29531)){
var statearr_29842_29954 = state_29746__$1;
(statearr_29842_29954[(1)] = (41));

} else {
var statearr_29843_29955 = state_29746__$1;
(statearr_29843_29955[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (87))){
var state_29746__$1 = state_29746;
var statearr_29844_29956 = state_29746__$1;
(statearr_29844_29956[(2)] = null);

(statearr_29844_29956[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (30))){
var inst_29479 = (state_29746[(2)]);
var inst_29480 = cljs.core.js__GT_clj.call(null,inst_29479);
var inst_29481 = cloudxmark.core.convert_json_status.call(null,inst_29480,new cljs.core.Keyword(null,"add-user","add-user",-1150614693));
var inst_29482 = cljs.core.List.EMPTY;
var inst_29483 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_29484 = cljs.core._conj.call(null,inst_29482,inst_29483);
var inst_29485 = cljs.core.List.EMPTY;
var inst_29486 = cljs.core._conj.call(null,inst_29485,inst_29481);
var inst_29487 = cljs.core.concat.call(null,inst_29484,inst_29486);
var inst_29488 = cljs.core.seq.call(null,inst_29487);
var inst_29489 = cljs.core.sequence.call(null,inst_29488);
var inst_29490 = cljs.core.List.EMPTY;
var inst_29491 = cljs.core._conj.call(null,inst_29490,inst_29489);
var inst_29492 = cljs.core.concat.call(null,inst_29491);
var inst_29493 = cljs.core.seq.call(null,inst_29492);
var inst_29494 = cljs.core.sequence.call(null,inst_29493);
var inst_29495 = cljs.core.vec.call(null,inst_29494);
var inst_29496 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29495);
var state_29746__$1 = state_29746;
var statearr_29845_29957 = state_29746__$1;
(statearr_29845_29957[(2)] = inst_29496);

(statearr_29845_29957[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (73))){
var inst_29655 = (state_29746[(2)]);
var inst_29656 = cljs.core.js__GT_clj.call(null,inst_29655);
var inst_29657 = cloudxmark.core.convert_json_lsts_result.call(null,inst_29656,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_29658 = cljs.core.List.EMPTY;
var inst_29659 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_29660 = cljs.core._conj.call(null,inst_29658,inst_29659);
var inst_29661 = cljs.core.List.EMPTY;
var inst_29662 = cljs.core._conj.call(null,inst_29661,inst_29657);
var inst_29663 = cljs.core.concat.call(null,inst_29660,inst_29662);
var inst_29664 = cljs.core.seq.call(null,inst_29663);
var inst_29665 = cljs.core.sequence.call(null,inst_29664);
var inst_29666 = cljs.core.List.EMPTY;
var inst_29667 = cljs.core._conj.call(null,inst_29666,inst_29665);
var inst_29668 = cljs.core.concat.call(null,inst_29667);
var inst_29669 = cljs.core.seq.call(null,inst_29668);
var inst_29670 = cljs.core.sequence.call(null,inst_29669);
var inst_29671 = cljs.core.vec.call(null,inst_29670);
var inst_29672 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_29671);
var state_29746__$1 = state_29746;
var statearr_29846_29958 = state_29746__$1;
(statearr_29846_29958[(2)] = inst_29672);

(statearr_29846_29958[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (10))){
var inst_29411 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29411)){
var statearr_29847_29959 = state_29746__$1;
(statearr_29847_29959[(1)] = (14));

} else {
var statearr_29848_29960 = state_29746__$1;
(statearr_29848_29960[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (18))){
var inst_29390 = (state_29746[(7)]);
var inst_29451 = (inst_29390 == null);
var inst_29452 = cljs.core.not.call(null,inst_29451);
var state_29746__$1 = state_29746;
if(inst_29452){
var statearr_29849_29961 = state_29746__$1;
(statearr_29849_29961[(1)] = (21));

} else {
var statearr_29850_29962 = state_29746__$1;
(statearr_29850_29962[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (52))){
var state_29746__$1 = state_29746;
var statearr_29851_29963 = state_29746__$1;
(statearr_29851_29963[(2)] = false);

(statearr_29851_29963[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (67))){
var state_29746__$1 = state_29746;
var statearr_29852_29964 = state_29746__$1;
(statearr_29852_29964[(2)] = true);

(statearr_29852_29964[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (71))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29853_29965 = state_29746__$1;
(statearr_29853_29965[(2)] = inst_29390);

(statearr_29853_29965[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (42))){
var state_29746__$1 = state_29746;
var statearr_29854_29966 = state_29746__$1;
(statearr_29854_29966[(2)] = false);

(statearr_29854_29966[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (80))){
var state_29746__$1 = state_29746;
var statearr_29855_29967 = state_29746__$1;
(statearr_29855_29967[(2)] = true);

(statearr_29855_29967[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (37))){
var inst_29733 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29856_29968 = state_29746__$1;
(statearr_29856_29968[(2)] = inst_29733);

(statearr_29856_29968[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (63))){
var inst_29729 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29857_29969 = state_29746__$1;
(statearr_29857_29969[(2)] = inst_29729);

(statearr_29857_29969[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (8))){
var inst_29390 = (state_29746[(7)]);
var inst_29401 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29402 = (inst_29401 & (64));
var inst_29403 = inst_29390.cljs$core$ISeq$;
var inst_29404 = (inst_29402) || (inst_29403);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29404)){
var statearr_29858_29970 = state_29746__$1;
(statearr_29858_29970[(1)] = (11));

} else {
var statearr_29859_29971 = state_29746__$1;
(statearr_29859_29971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (49))){
var inst_29389 = (state_29746[(8)]);
var inst_29621 = cljs.core._EQ_.call(null,inst_29389,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_29746__$1 = state_29746;
if(inst_29621){
var statearr_29860_29972 = state_29746__$1;
(statearr_29860_29972[(1)] = (61));

} else {
var statearr_29861_29973 = state_29746__$1;
(statearr_29861_29973[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (84))){
var inst_29390 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
var statearr_29862_29974 = state_29746__$1;
(statearr_29862_29974[(2)] = inst_29390);

(statearr_29862_29974[(1)] = (85));


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
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_29746){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_29746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e29867){if((e29867 instanceof Object)){
var ex__26706__auto__ = e29867;
var statearr_29868_29975 = state_29746;
(statearr_29868_29975[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29976 = state_29746;
state_29746 = G__29976;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_29869 = f__26726__auto__.call(null);
(statearr_29869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1468382713270