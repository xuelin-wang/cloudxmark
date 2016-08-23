// Compiled by ClojureScript 1.9.225 {}
goog.provide('cloudxmark.common.ql');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cloudxmark.common.util');
cloudxmark.common.ql.op_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null);
cloudxmark.common.ql.kebab = (function cloudxmark$common$ql$kebab(kw_or_str){
var this_str = (((kw_or_str instanceof cljs.core.Keyword))?cljs.core.name.call(null,kw_or_str):kw_or_str);
return cljs.core.keyword.call(null,clojure.string.replace.call(null,this_str,"_","-"));
});
cloudxmark.common.ql.unkebab = (function cloudxmark$common$ql$unkebab(kw_or_str){
var this_str = (((kw_or_str instanceof cljs.core.Keyword))?cljs.core.name.call(null,kw_or_str):kw_or_str);
return clojure.string.replace.call(null,this_str,"-","_");
});
cloudxmark.common.ql.parse_attr = (function cloudxmark$common$ql$parse_attr(select,vars,entity,alias_map){
var entity_alias = alias_map.call(null,entity);
if((select instanceof cljs.core.Keyword)){
var name = cloudxmark.common.ql.unkebab.call(null,cljs.core.name.call(null,select));
if(cljs.core.truth_(name.startsWith("$"))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,vars,name.substring((1)))], null)], null);
} else {
var matched_entity_aliases = cljs.core.filter.call(null,((function (name,entity_alias){
return (function (p__36661){
var vec__36662 = p__36661;
var k = cljs.core.nth.call(null,vec__36662,(0),null);
var v = cljs.core.nth.call(null,vec__36662,(1),null);
var prefix = [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
return name.startsWith(prefix);
});})(name,entity_alias))
,alias_map);
var vec__36658 = ((cljs.core.not.call(null,cljs.core.seq.call(null,matched_entity_aliases)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_alias,name], null):(function (){var vec__36665 = cljs.core.first.call(null,matched_entity_aliases);
var k = cljs.core.nth.call(null,vec__36665,(0),null);
var v = cljs.core.nth.call(null,vec__36665,(1),null);
var prefix = [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
var prefix_len = cljs.core.count.call(null,prefix);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,name.substring(prefix_len)], null);
})());
var this_alias = cljs.core.nth.call(null,vec__36658,(0),null);
var this_select = cljs.core.nth.call(null,vec__36658,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),this_alias,this_select], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [select], null)], null);
}
});
cloudxmark.common.ql.parse_exp = (function cloudxmark$common$ql$parse_exp(exp,vars,entity,alias_map){
if(!(cljs.core.vector_QMARK_.call(null,exp))){
return cloudxmark.common.ql.parse_attr.call(null,exp,vars,entity,alias_map);
} else {
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
var attr = cljs.core.nth.call(null,exp,(0));
return cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36700){if((e36700 instanceof Error)){
var e__25368__auto__ = e36700;
if((e__25368__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__36708 = cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__36708__$1 = ((((!((map__36708 == null)))?((((map__36708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36708):map__36708);
var selects = cljs.core.get.call(null,map__36708__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36708__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36701){if((e36701 instanceof Error)){
var e__25368__auto____$1 = e36701;
if((e__25368__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__36706 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__36706__$1 = ((((!((map__36706 == null)))?((((map__36706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36706):map__36706);
var selects = cljs.core.get.call(null,map__36706__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36706__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36702){if((e36702 instanceof Error)){
var e__25368__auto____$2 = e36702;
if((e__25368__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var attr3 = cljs.core.nth.call(null,exp,(3));
var map__36704 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__36704__$1 = ((((!((map__36704 == null)))?((((map__36704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36704):map__36704);
var selects = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
var res3 = cloudxmark$common$ql$parse_exp.call(null,attr3,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res3)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res3)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36703){if((e36703 instanceof Error)){
var e__25368__auto____$3 = e36703;
if((e__25368__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25368__auto____$3;
}
} else {
throw e36703;

}
}} else {
throw e__25368__auto____$2;
}
} else {
throw e36702;

}
}} else {
throw e__25368__auto____$1;
}
} else {
throw e36701;

}
}} else {
throw e__25368__auto__;
}
} else {
throw e36700;

}
}}
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cloudxmark.common.ql.entity_names.call(null,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__36710,p__36711){
var map__36722 = p__36710;
var map__36722__$1 = ((((!((map__36722 == null)))?((((map__36722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36722):map__36722);
var query = map__36722__$1;
var entity = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__36722__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__36723 = p__36711;
var map__36723__$1 = ((((!((map__36723 == null)))?((((map__36723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36723):map__36723);
var parsed = map__36723__$1;
var selects = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var this_alias = (function (){var or__21590__auto__ = alias;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cloudxmark.common.ql.unkebab.call(null,entity);
}
})();
var new_entity_alias_map = cljs.core.merge.call(null,(function (){var or__21590__auto__ = entity_alias_map;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(((entity == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.fromArray([entity,this_alias], true, false)));
var merged_vars = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,vars,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(query));
var new_where = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,map__36722,map__36722__$1,query,entity,alias,args,attributes,map__36723,map__36723__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__36726,arg){
var map__36727 = p__36726;
var map__36727__$1 = ((((!((map__36727 == null)))?((((map__36727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36727):map__36727);
var curr_parsed = map__36727__$1;
var selects__$1 = cljs.core.get.call(null,map__36727__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__36727__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = cloudxmark.common.ql.parse_exp.call(null,arg,merged_vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,selects__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,params__$1,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,merged_vars,map__36722,map__36722__$1,query,entity,alias,args,attributes,map__36723,map__36723__$1,parsed,selects,where,params,vars,entity_alias_map))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null),args);
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,new_where,map__36722,map__36722__$1,query,entity,alias,args,attributes,map__36723,map__36723__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__36729,attr){
var map__36730 = p__36729;
var map__36730__$1 = ((((!((map__36730 == null)))?((((map__36730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36730):map__36730);
var curr_parsed = map__36730__$1;
var selects__$1 = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
if(cljs.core.map_QMARK_.call(null,attr)){
if(cljs.core.truth_(cloudxmark.common.ql.is_entity_QMARK_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(attr)))){
return cloudxmark$common$ql$parse_query.call(null,attr,curr_parsed);
} else {
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("attribute map's :entity is not an entity: "),cljs.core.str(attr)].join(''));
}
} else {
var parsed_attr = cloudxmark.common.ql.parse_exp.call(null,attr,vars__$1,entity,entity_alias_map__$1);
return cljs.core.merge.call(null,(function (){var or__21590__auto__ = curr_parsed;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21590__auto__ = selects__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_attr)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21590__auto__ = params__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_attr))], null));
}
});})(this_alias,new_entity_alias_map,merged_vars,new_where,map__36722,map__36722__$1,query,entity,alias,args,attributes,map__36723,map__36723__$1,parsed,selects,where,params,vars,entity_alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"where","where",-2044795965),new_where,new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"vars","vars",-2046957217),merged_vars,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171),new_entity_alias_map], null)),attributes);
});
cloudxmark.common.ql.parsed_exp__GT_sql = (function cloudxmark$common$ql$parsed_exp__GT_sql(exp,alias_to_ignore){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
try{var exp_0__36761 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36761,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
try{var exp_1__36762 = cljs.core.nth.call(null,exp,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_1__36762,new cljs.core.Keyword(null,"?","?",-1703165233))){
return "?";
} else {
throw cljs.core.match.backtrack;

}
}catch (e36787){if((e36787 instanceof Error)){
var e__25368__auto__ = e36787;
if((e__25368__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto__;
}
} else {
throw e36787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36786){if((e36786 instanceof Error)){
var e__25368__auto__ = e36786;
if((e__25368__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto__;
}
} else {
throw e36786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36776){if((e36776 instanceof Error)){
var e__25368__auto__ = e36776;
if((e__25368__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__36763 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36763,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
var alias = cljs.core.nth.call(null,exp,(1));
var col = cljs.core.nth.call(null,exp,(2));
var col_str = cloudxmark.common.ql.unkebab.call(null,col);
if(cljs.core._EQ_.call(null,alias,alias_to_ignore)){
return col_str;
} else {
return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(col_str)].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36785){if((e36785 instanceof Error)){
var e__25368__auto____$1 = e36785;
if((e__25368__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto____$1;
}
} else {
throw e36785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36777){if((e36777 instanceof Error)){
var e__25368__auto____$1 = e36777;
if((e__25368__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
try{var exp_0__36766 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36766,new cljs.core.Keyword(null,"count","count",2139924085))){
return "COUNT(*)";
} else {
throw cljs.core.match.backtrack;

}
}catch (e36784){if((e36784 instanceof Error)){
var e__25368__auto____$2 = e36784;
if((e__25368__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto____$2;
}
} else {
throw e36784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36778){if((e36778 instanceof Error)){
var e__25368__auto____$2 = e36778;
if((e__25368__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
try{var exp_0__36767 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36767,new cljs.core.Keyword(null,"between","between",1131099276))){
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
var sel3 = cljs.core.nth.call(null,exp,(3));
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1,alias_to_ignore)),cljs.core.str(" BETWEEN "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2,alias_to_ignore)),cljs.core.str(" AND "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel3,alias_to_ignore))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e36783){if((e36783 instanceof Error)){
var e__25368__auto____$3 = e36783;
if((e__25368__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto____$3;
}
} else {
throw e36783;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36779){if((e36779 instanceof Error)){
var e__25368__auto____$3 = e36779;
if((e__25368__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"<=","<=",-395636158),null,new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,">=",">=",-623615505),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"=","=",1152933628),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null).call(null,op))){
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1,alias_to_ignore)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,op)),cljs.core.str(" "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2,alias_to_ignore))].join('');
} else {
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Unsupported binary operator: "),cljs.core.str(op)].join(''));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36780){if((e36780 instanceof Error)){
var e__25368__auto____$4 = e36780;
if((e__25368__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var sel = cljs.core.nth.call(null,exp,(1));
var G__36782 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__36782) {
case "pos?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" > 0")].join('');

break;
case "not-pos?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" <= 0")].join('');

break;
case "neg?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" < 0")].join('');

break;
case "not-neg?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" >= 0")].join('');

break;
case "max":
return [cljs.core.str("MAX("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
case "min":
return [cljs.core.str("MIN("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
case "average":
return [cljs.core.str("AVG("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
default:
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Unsupported unary operator: "),cljs.core.str(op)].join(''));

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36781){if((e36781 instanceof Error)){
var e__25368__auto____$5 = e36781;
if((e__25368__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25368__auto____$5;
}
} else {
throw e36781;

}
}} else {
throw e__25368__auto____$4;
}
} else {
throw e36780;

}
}} else {
throw e__25368__auto____$3;
}
} else {
throw e36779;

}
}} else {
throw e__25368__auto____$2;
}
} else {
throw e36778;

}
}} else {
throw e__25368__auto____$1;
}
} else {
throw e36777;

}
}} else {
throw e__25368__auto__;
}
} else {
throw e36776;

}
}});
cloudxmark.common.ql.parsed_ql__GT_sql_params = (function cloudxmark$common$ql$parsed_ql__GT_sql_params(op,entity,p__36799){
var map__36831 = p__36799;
var map__36831__$1 = ((((!((map__36831 == null)))?((((map__36831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36831):map__36831);
var parsed_query = map__36831__$1;
var selects = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"params","params",710516235));
var where = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var vars = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var parse_column_name_val = ((function (map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exp){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__36834 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36834,new cljs.core.Keyword(null,"=","=",1152933628))){
var col = cljs.core.nth.call(null,exp,(1));
var val = cljs.core.nth.call(null,exp,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,val], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36838){if((e36838 instanceof Error)){
var e__25368__auto__ = e36838;
if((e__25368__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25368__auto__;
}
} else {
throw e36838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36837){if((e36837 instanceof Error)){
var e__25368__auto__ = e36837;
if((e__25368__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25368__auto__;
}
} else {
throw e36837;

}
}});})(map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var parse_columns_name_val = ((function (parse_column_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exps){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse_column_name_val,exps)));
});})(parse_column_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var G__36839 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__36839) {
case "query":
var sel_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36789_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36789_SHARP_,null);
});})(G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,selects));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36790_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36790_SHARP_,null);
});})(sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (sel_str,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36840){
var vec__36841 = p__36840;
var k = cljs.core.nth.call(null,vec__36841,(0),null);
var v = cljs.core.nth.call(null,vec__36841,(1),null);
var e = vec__36841;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(sel_str,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("SELECT "),cljs.core.str(sel_str),cljs.core.str(" FROM "),cljs.core.str(from_str),cljs.core.str(((!(cljs.core.empty_QMARK_.call(null,where_sel_str)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join(''),cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);

break;
case "insert":
var vec__36844 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__36844,(0),null);
var vals = cljs.core.nth.call(null,vec__36844,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__36844,cols,vals,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36791_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36791_SHARP_,null);
});})(vec__36844,cols,vals,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,entity);
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__36844,cols,vals,vals_sql,alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36792_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36792_SHARP_,null);
});})(vec__36844,cols,vals,vals_sql,alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):"");
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36844,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36847){
var vec__36848 = p__36847;
var k = cljs.core.nth.call(null,vec__36848,(0),null);
var v = cljs.core.nth.call(null,vec__36848,(1),null);
var e = vec__36848;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(vec__36844,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("INSERT INTO "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,entity)),cljs.core.str(" ("),cljs.core.str(clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36844,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36793_SHARP_){
return cloudxmark.common.ql.unkebab.call(null,cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36793_SHARP_,alias_to_ignore));
});})(vec__36844,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cols))),cljs.core.str(") "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,where_sel_str))?[cljs.core.str("VALUES ("),cljs.core.str(clojure.string.join.call(null,", ",vals_sql)),cljs.core.str(")")].join(''):[cljs.core.str("SELECT "),cljs.core.str(clojure.string.join.call(null,", ",vals_sql)),cljs.core.str(" FROM "),cljs.core.str(from_str),cljs.core.str([cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''))].join('')))].join(''),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))], null);

break;
case "update":
var vec__36851 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__36851,(0),null);
var vals = cljs.core.nth.call(null,vec__36851,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__36851,cols,vals,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36794_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36794_SHARP_,null);
});})(vec__36851,cols,vals,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,entity);
var set_sql = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36851,cols,vals,vals_sql,alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36795_SHARP_,p2__36796_SHARP_){
return [cljs.core.str(p1__36795_SHARP_),cljs.core.str(" = "),cljs.core.str(cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p2__36796_SHARP_,alias_to_ignore))].join('');
});})(vec__36851,cols,vals,vals_sql,alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cols,vals));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__36851,cols,vals,vals_sql,alias_to_ignore,set_sql,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36797_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36797_SHARP_,alias_to_ignore);
});})(vec__36851,cols,vals,vals_sql,alias_to_ignore,set_sql,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36851,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36854){
var vec__36855 = p__36854;
var k = cljs.core.nth.call(null,vec__36855,(0),null);
var v = cljs.core.nth.call(null,vec__36855,(1),null);
var e = vec__36855;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(vec__36851,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("UPDATE "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,entity)),cljs.core.str(" SET "),cljs.core.str(set_sql),cljs.core.str(" FROM "),cljs.core.str(from_str),cljs.core.str(((!((where_sel_str == null)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join(''),cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);

break;
case "delete":
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,entity);
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36798_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36798_SHARP_,alias_to_ignore);
});})(alias_to_ignore,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (alias_to_ignore,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36858){
var vec__36859 = p__36858;
var k = cljs.core.nth.call(null,vec__36859,(0),null);
var v = cljs.core.nth.call(null,vec__36859,(1),null);
var e = vec__36859;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(alias_to_ignore,where_sel_str,G__36839,parse_column_name_val,parse_columns_name_val,map__36831,map__36831__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("DELETE FROM "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,entity)),cljs.core.str(((!((where_sel_str == null)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join(''),cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__21590__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);

break;
default:
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Invalid operation: "),cljs.core.str(op)].join(''));

}
});
cloudxmark.common.ql.parsed_query__GT_sql_params = (function cloudxmark$common$ql$parsed_query__GT_sql_params(parsed_query){
return cloudxmark.common.ql.parsed_ql__GT_sql_params.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),null,parsed_query);
});

//# sourceMappingURL=ql.js.map?rel=1471912806018