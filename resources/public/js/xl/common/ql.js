// Compiled by ClojureScript 1.9.225 {}
goog.provide('xl.common.ql');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('clojure.string');
goog.require('xl.common.util');
xl.common.ql.op_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null);
xl.common.ql.kebab = (function xl$common$ql$kebab(kw_or_str){
var this_str = (((kw_or_str instanceof cljs.core.Keyword))?cljs.core.name.call(null,kw_or_str):kw_or_str);
return cljs.core.keyword.call(null,clojure.string.replace.call(null,this_str,"_","-"));
});
xl.common.ql.unkebab = (function xl$common$ql$unkebab(kw_or_str){
var this_str = (((kw_or_str instanceof cljs.core.Keyword))?cljs.core.name.call(null,kw_or_str):kw_or_str);
return clojure.string.replace.call(null,this_str,"-","_");
});
xl.common.ql.parse_attr = (function xl$common$ql$parse_attr(select,vars,entity,alias_map){
var entity_alias = alias_map.call(null,xl.common.ql.unkebab.call(null,entity));
if((select instanceof cljs.core.Keyword)){
var name = xl.common.ql.unkebab.call(null,cljs.core.name.call(null,select));
if(cljs.core.truth_(name.startsWith("$"))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,vars,name.substring((1)))], null)], null);
} else {
var matched_entity_aliases = cljs.core.filter.call(null,((function (name,entity_alias){
return (function (p__28481){
var vec__28482 = p__28481;
var k = cljs.core.nth.call(null,vec__28482,(0),null);
var v = cljs.core.nth.call(null,vec__28482,(1),null);
var prefix = [cljs.core.str(xl.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
return name.startsWith(prefix);
});})(name,entity_alias))
,alias_map);
var vec__28478 = ((cljs.core.not.call(null,cljs.core.seq.call(null,matched_entity_aliases)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_alias,name], null):(function (){var vec__28485 = cljs.core.first.call(null,matched_entity_aliases);
var k = cljs.core.nth.call(null,vec__28485,(0),null);
var v = cljs.core.nth.call(null,vec__28485,(1),null);
var prefix = [cljs.core.str(xl.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
var prefix_len = cljs.core.count.call(null,prefix);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,name.substring(prefix_len)], null);
})());
var this_alias = cljs.core.nth.call(null,vec__28478,(0),null);
var this_select = cljs.core.nth.call(null,vec__28478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),this_alias,this_select], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [select], null)], null);
}
});
xl.common.ql.parse_exp = (function xl$common$ql$parse_exp(exp,vars,entity,alias_map){
if(!(cljs.core.vector_QMARK_.call(null,exp))){
return xl.common.ql.parse_attr.call(null,exp,vars,entity,alias_map);
} else {
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
var attr = cljs.core.nth.call(null,exp,(0));
return xl$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28520){if((e28520 instanceof Error)){
var e__27580__auto__ = e28520;
if((e__27580__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__28528 = xl$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__28528__$1 = ((((!((map__28528 == null)))?((((map__28528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28528):map__28528);
var selects = cljs.core.get.call(null,map__28528__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__28528__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28521){if((e28521 instanceof Error)){
var e__27580__auto____$1 = e28521;
if((e__27580__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__28526 = xl$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__28526__$1 = ((((!((map__28526 == null)))?((((map__28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);
var selects = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = xl$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28522){if((e28522 instanceof Error)){
var e__27580__auto____$2 = e28522;
if((e__27580__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var attr3 = cljs.core.nth.call(null,exp,(3));
var map__28524 = xl$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__28524__$1 = ((((!((map__28524 == null)))?((((map__28524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);
var selects = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = xl$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
var res3 = xl$common$ql$parse_exp.call(null,attr3,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res3)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res3)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28523){if((e28523 instanceof Error)){
var e__27580__auto____$3 = e28523;
if((e__27580__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__27580__auto____$3;
}
} else {
throw e28523;

}
}} else {
throw e__27580__auto____$2;
}
} else {
throw e28522;

}
}} else {
throw e__27580__auto____$1;
}
} else {
throw e28521;

}
}} else {
throw e__27580__auto__;
}
} else {
throw e28520;

}
}}
});
xl.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
xl.common.ql.is_entity_QMARK_ = (function xl$common$ql$is_entity_QMARK_(name){
return xl.common.ql.entity_names.call(null,name);
});
xl.common.ql.parse_query = (function xl$common$ql$parse_query(p__28530,p__28531){
var map__28542 = p__28530;
var map__28542__$1 = ((((!((map__28542 == null)))?((((map__28542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28542):map__28542);
var query = map__28542__$1;
var entity = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__28543 = p__28531;
var map__28543__$1 = ((((!((map__28543 == null)))?((((map__28543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28543):map__28543);
var parsed = map__28543__$1;
var selects = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var this_alias = (function (){var or__21590__auto__ = alias;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return xl.common.ql.unkebab.call(null,entity);
}
})();
var new_entity_alias_map = cljs.core.merge.call(null,(function (){var or__21590__auto__ = entity_alias_map;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(((entity == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.fromArray([xl.common.ql.unkebab.call(null,entity),xl.common.ql.unkebab.call(null,this_alias)], true, false)));
var merged_vars = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,vars,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(query));
var new_where = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,map__28542,map__28542__$1,query,entity,alias,args,attributes,map__28543,map__28543__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__28546,arg){
var map__28547 = p__28546;
var map__28547__$1 = ((((!((map__28547 == null)))?((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28547):map__28547);
var curr_parsed = map__28547__$1;
var selects__$1 = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = xl.common.ql.parse_exp.call(null,arg,merged_vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,selects__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,params__$1,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,merged_vars,map__28542,map__28542__$1,query,entity,alias,args,attributes,map__28543,map__28543__$1,parsed,selects,where,params,vars,entity_alias_map))
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
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,new_where,map__28542,map__28542__$1,query,entity,alias,args,attributes,map__28543,map__28543__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__28549,attr){
var map__28550 = p__28549;
var map__28550__$1 = ((((!((map__28550 == null)))?((((map__28550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);
var curr_parsed = map__28550__$1;
var selects__$1 = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
if(cljs.core.map_QMARK_.call(null,attr)){
if(cljs.core.truth_(xl.common.ql.is_entity_QMARK_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(attr)))){
return xl$common$ql$parse_query.call(null,attr,curr_parsed);
} else {
return xl.common.util.throw_common.call(null,[cljs.core.str("attribute map's :entity is not an entity: "),cljs.core.str(attr)].join(''));
}
} else {
var parsed_attr = xl.common.ql.parse_exp.call(null,attr,vars__$1,entity,new_entity_alias_map);
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
});})(this_alias,new_entity_alias_map,merged_vars,new_where,map__28542,map__28542__$1,query,entity,alias,args,attributes,map__28543,map__28543__$1,parsed,selects,where,params,vars,entity_alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"where","where",-2044795965),new_where,new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"vars","vars",-2046957217),merged_vars,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171),new_entity_alias_map], null)),attributes);
});
xl.common.ql.parsed_exp__GT_sql = (function xl$common$ql$parsed_exp__GT_sql(exp,alias_to_ignore){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
try{var exp_0__28581 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__28581,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
try{var exp_1__28582 = cljs.core.nth.call(null,exp,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_1__28582,new cljs.core.Keyword(null,"?","?",-1703165233))){
return "?";
} else {
throw cljs.core.match.backtrack;

}
}catch (e28607){if((e28607 instanceof Error)){
var e__27580__auto__ = e28607;
if((e__27580__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto__;
}
} else {
throw e28607;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28606){if((e28606 instanceof Error)){
var e__27580__auto__ = e28606;
if((e__27580__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto__;
}
} else {
throw e28606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28596){if((e28596 instanceof Error)){
var e__27580__auto__ = e28596;
if((e__27580__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__28583 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__28583,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
var alias = cljs.core.nth.call(null,exp,(1));
var col = cljs.core.nth.call(null,exp,(2));
var col_str = xl.common.ql.unkebab.call(null,col);
if(cljs.core._EQ_.call(null,xl.common.ql.unkebab.call(null,alias),alias_to_ignore)){
return col_str;
} else {
return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(col_str)].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28605){if((e28605 instanceof Error)){
var e__27580__auto____$1 = e28605;
if((e__27580__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto____$1;
}
} else {
throw e28605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28597){if((e28597 instanceof Error)){
var e__27580__auto____$1 = e28597;
if((e__27580__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
try{var exp_0__28586 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__28586,new cljs.core.Keyword(null,"count","count",2139924085))){
return "COUNT(*)";
} else {
throw cljs.core.match.backtrack;

}
}catch (e28604){if((e28604 instanceof Error)){
var e__27580__auto____$2 = e28604;
if((e__27580__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto____$2;
}
} else {
throw e28604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28598){if((e28598 instanceof Error)){
var e__27580__auto____$2 = e28598;
if((e__27580__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
try{var exp_0__28587 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__28587,new cljs.core.Keyword(null,"between","between",1131099276))){
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
var sel3 = cljs.core.nth.call(null,exp,(3));
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel1,alias_to_ignore)),cljs.core.str(" BETWEEN "),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel2,alias_to_ignore)),cljs.core.str(" AND "),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel3,alias_to_ignore))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e28603){if((e28603 instanceof Error)){
var e__27580__auto____$3 = e28603;
if((e__27580__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto____$3;
}
} else {
throw e28603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28599){if((e28599 instanceof Error)){
var e__27580__auto____$3 = e28599;
if((e__27580__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"<=","<=",-395636158),null,new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,">=",">=",-623615505),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"=","=",1152933628),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null).call(null,op))){
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel1,alias_to_ignore)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,op)),cljs.core.str(" "),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel2,alias_to_ignore))].join('');
} else {
return xl.common.util.throw_common.call(null,[cljs.core.str("Unsupported binary operator: "),cljs.core.str(op)].join(''));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28600){if((e28600 instanceof Error)){
var e__27580__auto____$4 = e28600;
if((e__27580__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var sel = cljs.core.nth.call(null,exp,(1));
var G__28602 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__28602) {
case "pos?":
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" > 0")].join('');

break;
case "not-pos?":
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" <= 0")].join('');

break;
case "neg?":
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" < 0")].join('');

break;
case "not-neg?":
return [cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(" >= 0")].join('');

break;
case "max":
return [cljs.core.str("MAX("),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
case "min":
return [cljs.core.str("MIN("),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
case "average":
return [cljs.core.str("AVG("),cljs.core.str(xl$common$ql$parsed_exp__GT_sql.call(null,sel,alias_to_ignore)),cljs.core.str(")")].join('');

break;
default:
return xl.common.util.throw_common.call(null,[cljs.core.str("Unsupported unary operator: "),cljs.core.str(op)].join(''));

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e28601){if((e28601 instanceof Error)){
var e__27580__auto____$5 = e28601;
if((e__27580__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__27580__auto____$5;
}
} else {
throw e28601;

}
}} else {
throw e__27580__auto____$4;
}
} else {
throw e28600;

}
}} else {
throw e__27580__auto____$3;
}
} else {
throw e28599;

}
}} else {
throw e__27580__auto____$2;
}
} else {
throw e28598;

}
}} else {
throw e__27580__auto____$1;
}
} else {
throw e28597;

}
}} else {
throw e__27580__auto__;
}
} else {
throw e28596;

}
}});
xl.common.ql.parsed_ql__GT_sql_params = (function xl$common$ql$parsed_ql__GT_sql_params(op,entity,p__28620){
var map__28652 = p__28620;
var map__28652__$1 = ((((!((map__28652 == null)))?((((map__28652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);
var parsed_query = map__28652__$1;
var selects = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"params","params",710516235));
var where = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var vars = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var parse_column_name_val = ((function (map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exp){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__28655 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__28655,new cljs.core.Keyword(null,"=","=",1152933628))){
var col = cljs.core.nth.call(null,exp,(1));
var val = cljs.core.nth.call(null,exp,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,val], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28659){if((e28659 instanceof Error)){
var e__27580__auto__ = e28659;
if((e__27580__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__27580__auto__;
}
} else {
throw e28659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28658){if((e28658 instanceof Error)){
var e__27580__auto__ = e28658;
if((e__27580__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__27580__auto__;
}
} else {
throw e28658;

}
}});})(map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var parse_columns_name_val = ((function (parse_column_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exps){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse_column_name_val,exps)));
});})(parse_column_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var G__28660 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__28660) {
case "query":
var sel_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28609_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28609_SHARP_,null);
});})(G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,selects));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28610_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28610_SHARP_,null);
});})(sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (sel_str,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__28661){
var vec__28662 = p__28661;
var k = cljs.core.nth.call(null,vec__28662,(0),null);
var v = cljs.core.nth.call(null,vec__28662,(1),null);
var e = vec__28662;
return [cljs.core.str(xl.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(xl.common.ql.unkebab.call(null,v))].join('');
});})(sel_str,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
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
var vec__28665 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__28665,(0),null);
var vals = cljs.core.nth.call(null,vec__28665,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__28665,cols,vals,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28611_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28611_SHARP_,null);
});})(vec__28665,cols,vals,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,xl.common.ql.unkebab.call(null,entity));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__28665,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28612_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28612_SHARP_,null);
});})(vec__28665,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):"");
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__28665,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__28668){
var vec__28669 = p__28668;
var k = cljs.core.nth.call(null,vec__28669,(0),null);
var v = cljs.core.nth.call(null,vec__28669,(1),null);
var e = vec__28669;
return [cljs.core.str(xl.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(xl.common.ql.unkebab.call(null,v))].join('');
});})(vec__28665,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("INSERT INTO "),cljs.core.str(xl.common.ql.unkebab.call(null,entity)),cljs.core.str(" ("),cljs.core.str(clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__28665,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28613_SHARP_){
return xl.common.ql.unkebab.call(null,xl.common.ql.parsed_exp__GT_sql.call(null,p1__28613_SHARP_,alias_to_ignore));
});})(vec__28665,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
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
var vec__28672 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__28672,(0),null);
var vals = cljs.core.nth.call(null,vec__28672,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__28672,cols,vals,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28614_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28614_SHARP_,null);
});})(vec__28672,cols,vals,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,xl.common.ql.unkebab.call(null,entity));
var set_sql = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__28672,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28615_SHARP_,p2__28616_SHARP_){
return [cljs.core.str(p1__28615_SHARP_),cljs.core.str(" = "),cljs.core.str(xl.common.ql.parsed_exp__GT_sql.call(null,p2__28616_SHARP_,null))].join('');
});})(vec__28672,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cljs.core.map.call(null,((function (vec__28672,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28617_SHARP_){
return xl.common.ql.unkebab.call(null,xl.common.ql.parsed_exp__GT_sql.call(null,p1__28617_SHARP_,alias_to_ignore));
});})(vec__28672,cols,vals,vals_sql,alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cols),vals));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__28672,cols,vals,vals_sql,alias_to_ignore,set_sql,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28618_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28618_SHARP_,null);
});})(vec__28672,cols,vals,vals_sql,alias_to_ignore,set_sql,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__28672,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__28675){
var vec__28676 = p__28675;
var k = cljs.core.nth.call(null,vec__28676,(0),null);
var v = cljs.core.nth.call(null,vec__28676,(1),null);
var e = vec__28676;
return [cljs.core.str(xl.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(xl.common.ql.unkebab.call(null,v))].join('');
});})(vec__28672,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cljs.core.dissoc.call(null,entity_alias_map,xl.common.ql.unkebab.call(null,entity))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("UPDATE "),cljs.core.str(xl.common.ql.unkebab.call(null,entity)),cljs.core.str(" SET "),cljs.core.str(set_sql),cljs.core.str(((cljs.core.empty_QMARK_.call(null,from_str))?"":[cljs.core.str(" FROM "),cljs.core.str(from_str)].join(''))),cljs.core.str(((cljs.core.empty_QMARK_.call(null,where_sel_str))?"":[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join('')))].join(''),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
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
case "delete":
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,xl.common.ql.unkebab.call(null,entity));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__28619_SHARP_){
return xl.common.ql.parsed_exp__GT_sql.call(null,p1__28619_SHARP_,alias_to_ignore);
});})(alias_to_ignore,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (alias_to_ignore,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__28679){
var vec__28680 = p__28679;
var k = cljs.core.nth.call(null,vec__28680,(0),null);
var v = cljs.core.nth.call(null,vec__28680,(1),null);
var e = vec__28680;
return [cljs.core.str(xl.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(xl.common.ql.unkebab.call(null,v))].join('');
});})(alias_to_ignore,where_sel_str,G__28660,parse_column_name_val,parse_columns_name_val,map__28652,map__28652__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("DELETE FROM "),cljs.core.str(xl.common.ql.unkebab.call(null,entity)),cljs.core.str(((!((where_sel_str == null)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join(''),cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
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
return xl.common.util.throw_common.call(null,[cljs.core.str("Invalid operation: "),cljs.core.str(op)].join(''));

}
});
xl.common.ql.parsed_query__GT_sql_params = (function xl$common$ql$parsed_query__GT_sql_params(parsed_query){
return xl.common.ql.parsed_ql__GT_sql_params.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),null,parsed_query);
});

//# sourceMappingURL=ql.js.map?rel=1472381708269