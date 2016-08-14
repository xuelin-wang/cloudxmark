// Compiled by ClojureScript 1.9.198 {}
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
var dot_index = name.indexOf(".");
var vec__26705 = (((dot_index < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.common.ql.unkebab.call(null,entity),name], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name.substring((0),dot_index),name.substring((dot_index + (1)))], null));
var this_entity = cljs.core.nth.call(null,vec__26705,(0),null);
var this_select = cljs.core.nth.call(null,vec__26705,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),(function (){var or__21590__auto__ = cljs.core.get.call(null,alias_map,this_entity);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return this_entity;
}
})(),this_select], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null);
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
}catch (e26740){if((e26740 instanceof Error)){
var e__25814__auto__ = e26740;
if((e__25814__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__26748 = cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var selects = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26741){if((e26741 instanceof Error)){
var e__25814__auto____$1 = e26741;
if((e__25814__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__26746 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__26746__$1 = ((((!((map__26746 == null)))?((((map__26746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26746):map__26746);
var selects = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26742){if((e26742 instanceof Error)){
var e__25814__auto____$2 = e26742;
if((e__25814__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var attr3 = cljs.core.nth.call(null,exp,(3));
var map__26744 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__26744__$1 = ((((!((map__26744 == null)))?((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var selects = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
var res3 = cloudxmark$common$ql$parse_exp.call(null,attr3,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res3)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res3)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26743){if((e26743 instanceof Error)){
var e__25814__auto____$3 = e26743;
if((e__25814__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25814__auto____$3;
}
} else {
throw e26743;

}
}} else {
throw e__25814__auto____$2;
}
} else {
throw e26742;

}
}} else {
throw e__25814__auto____$1;
}
} else {
throw e26741;

}
}} else {
throw e__25814__auto__;
}
} else {
throw e26740;

}
}}
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cloudxmark.common.ql.entity_names.call(null,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__26750,p__26751){
var map__26762 = p__26750;
var map__26762__$1 = ((((!((map__26762 == null)))?((((map__26762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26762):map__26762);
var query = map__26762__$1;
var entity = cljs.core.get.call(null,map__26762__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__26762__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__26762__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__26762__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__26763 = p__26751;
var map__26763__$1 = ((((!((map__26763 == null)))?((((map__26763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763):map__26763);
var parsed = map__26763__$1;
var selects = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var this_alias = (function (){var or__21590__auto__ = alias;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return entity;
}
})();
var new_entity_alias_map = cljs.core.merge.call(null,(function (){var or__21590__auto__ = entity_alias_map;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentArrayMap.fromArray([entity,this_alias], true, false));
var new_where = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,map__26762,map__26762__$1,query,entity,alias,args,attributes,map__26763,map__26763__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__26766,arg){
var map__26767 = p__26766;
var map__26767__$1 = ((((!((map__26767 == null)))?((((map__26767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26767):map__26767);
var curr_parsed = map__26767__$1;
var selects__$1 = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = cloudxmark.common.ql.parse_exp.call(null,arg,vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,selects__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,params__$1,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,map__26762,map__26762__$1,query,entity,alias,args,attributes,map__26763,map__26763__$1,parsed,selects,where,params,vars,entity_alias_map))
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
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,new_where,map__26762,map__26762__$1,query,entity,alias,args,attributes,map__26763,map__26763__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__26769,attr){
var map__26770 = p__26769;
var map__26770__$1 = ((((!((map__26770 == null)))?((((map__26770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26770):map__26770);
var curr_parsed = map__26770__$1;
var selects__$1 = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
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
});})(this_alias,new_entity_alias_map,new_where,map__26762,map__26762__$1,query,entity,alias,args,attributes,map__26763,map__26763__$1,parsed,selects,where,params,vars,entity_alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"where","where",-2044795965),new_where,new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171),new_entity_alias_map], null)),attributes);
});
cloudxmark.common.ql.parsed_exp__GT_sql = (function cloudxmark$common$ql$parsed_exp__GT_sql(exp){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
try{var exp_0__26798 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__26798,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
try{var exp_1__26799 = cljs.core.nth.call(null,exp,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_1__26799,new cljs.core.Keyword(null,"?","?",-1703165233))){
return "?";
} else {
throw cljs.core.match.backtrack;

}
}catch (e26821){if((e26821 instanceof Error)){
var e__25814__auto__ = e26821;
if((e__25814__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25814__auto__;
}
} else {
throw e26821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26820){if((e26820 instanceof Error)){
var e__25814__auto__ = e26820;
if((e__25814__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25814__auto__;
}
} else {
throw e26820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26812){if((e26812 instanceof Error)){
var e__25814__auto__ = e26812;
if((e__25814__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__26800 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__26800,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
var alias = cljs.core.nth.call(null,exp,(1));
var col = cljs.core.nth.call(null,exp,(2));
return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(col)].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e26819){if((e26819 instanceof Error)){
var e__25814__auto____$1 = e26819;
if((e__25814__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25814__auto____$1;
}
} else {
throw e26819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26813){if((e26813 instanceof Error)){
var e__25814__auto____$1 = e26813;
if((e__25814__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
try{var exp_0__26803 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__26803,new cljs.core.Keyword(null,"between","between",1131099276))){
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
var sel3 = cljs.core.nth.call(null,exp,(3));
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1)),cljs.core.str(" BETWEEN "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2)),cljs.core.str(" AND "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel3))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e26818){if((e26818 instanceof Error)){
var e__25814__auto____$2 = e26818;
if((e__25814__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25814__auto____$2;
}
} else {
throw e26818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26814){if((e26814 instanceof Error)){
var e__25814__auto____$2 = e26814;
if((e__25814__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"<=","<=",-395636158),null,new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,">=",">=",-623615505),null,new cljs.core.Keyword(null,"=","=",1152933628),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null).call(null,op))){
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,op)),cljs.core.str(" "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2))].join('');
} else {
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Unsupported binary operator: "),cljs.core.str(op)].join(''));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e26815){if((e26815 instanceof Error)){
var e__25814__auto____$3 = e26815;
if((e__25814__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var sel = cljs.core.nth.call(null,exp,(1));
var G__26817 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__26817) {
case "pos?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(" > 0")].join('');

break;
case "not-pos?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(" <= 0")].join('');

break;
case "neg?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(" < 0")].join('');

break;
case "not-neg?":
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(" >= 0")].join('');

break;
default:
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Unsupported unary operator: "),cljs.core.str(op)].join(''));

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e26816){if((e26816 instanceof Error)){
var e__25814__auto____$4 = e26816;
if((e__25814__auto____$4 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25814__auto____$4;
}
} else {
throw e26816;

}
}} else {
throw e__25814__auto____$3;
}
} else {
throw e26815;

}
}} else {
throw e__25814__auto____$2;
}
} else {
throw e26814;

}
}} else {
throw e__25814__auto____$1;
}
} else {
throw e26813;

}
}} else {
throw e__25814__auto__;
}
} else {
throw e26812;

}
}});
cloudxmark.common.ql.parsed_query__GT_sql = (function cloudxmark$common$ql$parsed_query__GT_sql(p__26823){
var map__26830 = p__26823;
var map__26830__$1 = ((((!((map__26830 == null)))?((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var parsed_query = map__26830__$1;
var selects = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"params","params",710516235));
var where = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var vars = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var sel_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,cloudxmark.common.ql.parsed_exp__GT_sql,selects));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,cloudxmark.common.ql.parsed_exp__GT_sql,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (sel_str,where_sel_str,map__26830,map__26830__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__26832){
var vec__26833 = p__26832;
var k = cljs.core.nth.call(null,vec__26833,(0),null);
var v = cljs.core.nth.call(null,vec__26833,(1),null);
var e = vec__26833;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(sel_str,where_sel_str,map__26830,map__26830__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return [cljs.core.str("SELECT "),cljs.core.str(sel_str),cljs.core.str(" FROM "),cljs.core.str(from_str),cljs.core.str(((!((where_sel_str == null)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join('');
});

//# sourceMappingURL=ql.js.map?rel=1471181945858