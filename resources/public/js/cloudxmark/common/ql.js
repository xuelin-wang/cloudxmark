// Compiled by ClojureScript 1.9.89 {}
goog.provide('cloudxmark.common.ql');
goog.require('cljs.core');
goog.require('cljs.core.match');
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
var vec__90618 = (((dot_index < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,name], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name.substring((0),dot_index),name.substring((dot_index + (1)))], null));
var this_entity = cljs.core.nth.call(null,vec__90618,(0),null);
var this_select = cljs.core.nth.call(null,vec__90618,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),(function (){var or__21368__auto__ = cljs.core.get.call(null,alias_map,this_entity);
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
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
}catch (e90642){if((e90642 instanceof Error)){
var e__25039__auto__ = e90642;
if((e__25039__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__90647 = cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__90647__$1 = ((((!((map__90647 == null)))?((((map__90647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90647):map__90647);
var selects = cljs.core.get.call(null,map__90647__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__90647__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90643){if((e90643 instanceof Error)){
var e__25039__auto____$1 = e90643;
if((e__25039__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__90645 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__90645__$1 = ((((!((map__90645 == null)))?((((map__90645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90645):map__90645);
var selects = cljs.core.get.call(null,map__90645__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__90645__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e90644){if((e90644 instanceof Error)){
var e__25039__auto____$2 = e90644;
if((e__25039__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25039__auto____$2;
}
} else {
throw e90644;

}
}} else {
throw e__25039__auto____$1;
}
} else {
throw e90643;

}
}} else {
throw e__25039__auto__;
}
} else {
throw e90642;

}
}}
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cloudxmark.common.ql.entity_names.call(null,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__90649,p__90650){
var map__90661 = p__90649;
var map__90661__$1 = ((((!((map__90661 == null)))?((((map__90661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90661):map__90661);
var query = map__90661__$1;
var entity = cljs.core.get.call(null,map__90661__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__90661__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__90661__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__90661__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__90662 = p__90650;
var map__90662__$1 = ((((!((map__90662 == null)))?((((map__90662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90662):map__90662);
var parsed = map__90662__$1;
var selects = cljs.core.get.call(null,map__90662__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__90662__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__90662__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__90662__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__90662__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var this_alias = (function (){var or__21368__auto__ = alias;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return entity;
}
})();
var new_entity_alias_map = cljs.core.merge.call(null,(function (){var or__21368__auto__ = entity_alias_map;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentArrayMap.fromArray([entity,this_alias], true, false));
var parsed_args = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,map__90661,map__90661__$1,query,entity,alias,args,attributes,map__90662,map__90662__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__90665,arg){
var map__90666 = p__90665;
var map__90666__$1 = ((((!((map__90666 == null)))?((((map__90666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90666):map__90666);
var curr_parsed = map__90666__$1;
var selects__$1 = cljs.core.get.call(null,map__90666__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__90666__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = cloudxmark.common.ql.parse_exp.call(null,arg,vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = selects__$1;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = params__$1;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,map__90661,map__90661__$1,query,entity,alias,args,attributes,map__90662,map__90662__$1,parsed,selects,where,params,vars,entity_alias_map))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null),args);
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,parsed_args,map__90661,map__90661__$1,query,entity,alias,args,attributes,map__90662,map__90662__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__90668,attr){
var map__90669 = p__90668;
var map__90669__$1 = ((((!((map__90669 == null)))?((((map__90669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90669):map__90669);
var curr_parsed = map__90669__$1;
var selects__$1 = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
if(cljs.core.map_QMARK_.call(null,attr)){
if(cljs.core.truth_(cloudxmark.common.ql.is_entity_QMARK_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(attr)))){
return cloudxmark$common$ql$parse_query.call(null,attr,curr_parsed);
} else {
throw (new cloudxmark.common.ql.RuntimeException([cljs.core.str("attribute map's :entity is not an entity: "),cljs.core.str(attr)].join('')));
}
} else {
var parsed_attr = cloudxmark.common.ql.parse_exp.call(null,attr,vars__$1,entity,entity_alias_map__$1);
return cljs.core.merge.call(null,(function (){var or__21368__auto__ = curr_parsed;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = selects__$1;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_attr)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = params__$1;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_attr))], null));
}
});})(this_alias,new_entity_alias_map,parsed_args,map__90661,map__90661__$1,query,entity,alias,args,attributes,map__90662,map__90662__$1,parsed,selects,where,params,vars,entity_alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = where;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_args)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,(function (){var or__21368__auto__ = params;
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_args)),new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171),new_entity_alias_map], null)),attributes);
});
cloudxmark.common.ql.query__GT_sql = (function cloudxmark$common$ql$query__GT_sql(){
return cljs.core.List.EMPTY;
});

//# sourceMappingURL=ql.js.map?rel=1470717110309