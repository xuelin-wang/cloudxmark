// Compiled by ClojureScript 1.9.225 {}
goog.provide('cloudxmark.common.ql');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('clojure.string');
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
var entity_alias = alias_map.call(null,cloudxmark.common.ql.unkebab.call(null,entity));
if((select instanceof cljs.core.Keyword)){
var name = cloudxmark.common.ql.unkebab.call(null,cljs.core.name.call(null,select));
if(cljs.core.truth_(name.startsWith("$"))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-attr","-attr",-1127457257),new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,vars,name.substring((1)))], null)], null);
} else {
var matched_entity_aliases = cljs.core.filter.call(null,((function (name,entity_alias){
return (function (p__36804){
var vec__36805 = p__36804;
var k = cljs.core.nth.call(null,vec__36805,(0),null);
var v = cljs.core.nth.call(null,vec__36805,(1),null);
var prefix = [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
return name.startsWith(prefix);
});})(name,entity_alias))
,alias_map);
var vec__36801 = ((cljs.core.not.call(null,cljs.core.seq.call(null,matched_entity_aliases)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_alias,name], null):(function (){var vec__36808 = cljs.core.first.call(null,matched_entity_aliases);
var k = cljs.core.nth.call(null,vec__36808,(0),null);
var v = cljs.core.nth.call(null,vec__36808,(1),null);
var prefix = [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v)),cljs.core.str(".")].join('');
var prefix_len = cljs.core.count.call(null,prefix);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,name.substring(prefix_len)], null);
})());
var this_alias = cljs.core.nth.call(null,vec__36801,(0),null);
var this_select = cljs.core.nth.call(null,vec__36801,(1),null);
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
}catch (e36843){if((e36843 instanceof Error)){
var e__25369__auto__ = e36843;
if((e__25369__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__36851 = cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__36851__$1 = ((((!((map__36851 == null)))?((((map__36851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36851):map__36851);
var selects = cljs.core.get.call(null,map__36851__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36851__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36844){if((e36844 instanceof Error)){
var e__25369__auto____$1 = e36844;
if((e__25369__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__36849 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__36849__$1 = ((((!((map__36849 == null)))?((((map__36849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36849):map__36849);
var selects = cljs.core.get.call(null,map__36849__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36849__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36845){if((e36845 instanceof Error)){
var e__25369__auto____$2 = e36845;
if((e__25369__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var attr3 = cljs.core.nth.call(null,exp,(3));
var map__36847 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__36847__$1 = ((((!((map__36847 == null)))?((((map__36847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36847):map__36847);
var selects = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
var res3 = cloudxmark$common$ql$parse_exp.call(null,attr3,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res3)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res3)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36846){if((e36846 instanceof Error)){
var e__25369__auto____$3 = e36846;
if((e__25369__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25369__auto____$3;
}
} else {
throw e36846;

}
}} else {
throw e__25369__auto____$2;
}
} else {
throw e36845;

}
}} else {
throw e__25369__auto____$1;
}
} else {
throw e36844;

}
}} else {
throw e__25369__auto__;
}
} else {
throw e36843;

}
}}
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cloudxmark.common.ql.entity_names.call(null,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__36853,p__36854){
var map__36865 = p__36853;
var map__36865__$1 = ((((!((map__36865 == null)))?((((map__36865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36865):map__36865);
var query = map__36865__$1;
var entity = cljs.core.get.call(null,map__36865__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__36865__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__36865__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__36865__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__36866 = p__36854;
var map__36866__$1 = ((((!((map__36866 == null)))?((((map__36866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36866):map__36866);
var parsed = map__36866__$1;
var selects = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
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
})(),(((entity == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.fromArray([cloudxmark.common.ql.unkebab.call(null,entity),cloudxmark.common.ql.unkebab.call(null,this_alias)], true, false)));
var merged_vars = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,vars,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(query));
var new_where = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,map__36865,map__36865__$1,query,entity,alias,args,attributes,map__36866,map__36866__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__36869,arg){
var map__36870 = p__36869;
var map__36870__$1 = ((((!((map__36870 == null)))?((((map__36870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36870):map__36870);
var curr_parsed = map__36870__$1;
var selects__$1 = cljs.core.get.call(null,map__36870__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__36870__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = cloudxmark.common.ql.parse_exp.call(null,arg,merged_vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,selects__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,params__$1,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,merged_vars,map__36865,map__36865__$1,query,entity,alias,args,attributes,map__36866,map__36866__$1,parsed,selects,where,params,vars,entity_alias_map))
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
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,new_where,map__36865,map__36865__$1,query,entity,alias,args,attributes,map__36866,map__36866__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__36872,attr){
var map__36873 = p__36872;
var map__36873__$1 = ((((!((map__36873 == null)))?((((map__36873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36873):map__36873);
var curr_parsed = map__36873__$1;
var selects__$1 = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__36873__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
if(cljs.core.map_QMARK_.call(null,attr)){
if(cljs.core.truth_(cloudxmark.common.ql.is_entity_QMARK_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(attr)))){
return cloudxmark$common$ql$parse_query.call(null,attr,curr_parsed);
} else {
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("attribute map's :entity is not an entity: "),cljs.core.str(attr)].join(''));
}
} else {
var parsed_attr = cloudxmark.common.ql.parse_exp.call(null,attr,vars__$1,entity,new_entity_alias_map);
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
});})(this_alias,new_entity_alias_map,merged_vars,new_where,map__36865,map__36865__$1,query,entity,alias,args,attributes,map__36866,map__36866__$1,parsed,selects,where,params,vars,entity_alias_map))
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
try{var exp_0__36904 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36904,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
try{var exp_1__36905 = cljs.core.nth.call(null,exp,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_1__36905,new cljs.core.Keyword(null,"?","?",-1703165233))){
return "?";
} else {
throw cljs.core.match.backtrack;

}
}catch (e36930){if((e36930 instanceof Error)){
var e__25369__auto__ = e36930;
if((e__25369__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto__;
}
} else {
throw e36930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36929){if((e36929 instanceof Error)){
var e__25369__auto__ = e36929;
if((e__25369__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto__;
}
} else {
throw e36929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36919){if((e36919 instanceof Error)){
var e__25369__auto__ = e36919;
if((e__25369__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__36906 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36906,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
var alias = cljs.core.nth.call(null,exp,(1));
var col = cljs.core.nth.call(null,exp,(2));
var col_str = cloudxmark.common.ql.unkebab.call(null,col);
if(cljs.core._EQ_.call(null,cloudxmark.common.ql.unkebab.call(null,alias),alias_to_ignore)){
return col_str;
} else {
return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(col_str)].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36928){if((e36928 instanceof Error)){
var e__25369__auto____$1 = e36928;
if((e__25369__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto____$1;
}
} else {
throw e36928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36920){if((e36920 instanceof Error)){
var e__25369__auto____$1 = e36920;
if((e__25369__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
try{var exp_0__36909 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36909,new cljs.core.Keyword(null,"count","count",2139924085))){
return "COUNT(*)";
} else {
throw cljs.core.match.backtrack;

}
}catch (e36927){if((e36927 instanceof Error)){
var e__25369__auto____$2 = e36927;
if((e__25369__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto____$2;
}
} else {
throw e36927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36921){if((e36921 instanceof Error)){
var e__25369__auto____$2 = e36921;
if((e__25369__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
try{var exp_0__36910 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36910,new cljs.core.Keyword(null,"between","between",1131099276))){
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
var sel3 = cljs.core.nth.call(null,exp,(3));
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1,alias_to_ignore)),cljs.core.str(" BETWEEN "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2,alias_to_ignore)),cljs.core.str(" AND "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel3,alias_to_ignore))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e36926){if((e36926 instanceof Error)){
var e__25369__auto____$3 = e36926;
if((e__25369__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto____$3;
}
} else {
throw e36926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36922){if((e36922 instanceof Error)){
var e__25369__auto____$3 = e36922;
if((e__25369__auto____$3 === cljs.core.match.backtrack)){
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
}catch (e36923){if((e36923 instanceof Error)){
var e__25369__auto____$4 = e36923;
if((e__25369__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var sel = cljs.core.nth.call(null,exp,(1));
var G__36925 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__36925) {
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
}catch (e36924){if((e36924 instanceof Error)){
var e__25369__auto____$5 = e36924;
if((e__25369__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25369__auto____$5;
}
} else {
throw e36924;

}
}} else {
throw e__25369__auto____$4;
}
} else {
throw e36923;

}
}} else {
throw e__25369__auto____$3;
}
} else {
throw e36922;

}
}} else {
throw e__25369__auto____$2;
}
} else {
throw e36921;

}
}} else {
throw e__25369__auto____$1;
}
} else {
throw e36920;

}
}} else {
throw e__25369__auto__;
}
} else {
throw e36919;

}
}});
cloudxmark.common.ql.parsed_ql__GT_sql_params = (function cloudxmark$common$ql$parsed_ql__GT_sql_params(op,entity,p__36943){
var map__36975 = p__36943;
var map__36975__$1 = ((((!((map__36975 == null)))?((((map__36975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36975):map__36975);
var parsed_query = map__36975__$1;
var selects = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"params","params",710516235));
var where = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var vars = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var parse_column_name_val = ((function (map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exp){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__36978 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__36978,new cljs.core.Keyword(null,"=","=",1152933628))){
var col = cljs.core.nth.call(null,exp,(1));
var val = cljs.core.nth.call(null,exp,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,val], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36982){if((e36982 instanceof Error)){
var e__25369__auto__ = e36982;
if((e__25369__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__25369__auto__;
}
} else {
throw e36982;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36981){if((e36981 instanceof Error)){
var e__25369__auto__ = e36981;
if((e__25369__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__25369__auto__;
}
} else {
throw e36981;

}
}});})(map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var parse_columns_name_val = ((function (parse_column_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (exps){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,parse_column_name_val,exps)));
});})(parse_column_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
;
var G__36983 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__36983) {
case "query":
var sel_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36932_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36932_SHARP_,null);
});})(G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,selects));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36933_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36933_SHARP_,null);
});})(sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (sel_str,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36984){
var vec__36985 = p__36984;
var k = cljs.core.nth.call(null,vec__36985,(0),null);
var v = cljs.core.nth.call(null,vec__36985,(1),null);
var e = vec__36985;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(sel_str,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
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
var vec__36988 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__36988,(0),null);
var vals = cljs.core.nth.call(null,vec__36988,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__36988,cols,vals,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36934_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36934_SHARP_,null);
});})(vec__36988,cols,vals,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,cloudxmark.common.ql.unkebab.call(null,entity));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__36988,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36935_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36935_SHARP_,null);
});})(vec__36988,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):"");
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36988,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36991){
var vec__36992 = p__36991;
var k = cljs.core.nth.call(null,vec__36992,(0),null);
var v = cljs.core.nth.call(null,vec__36992,(1),null);
var e = vec__36992;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(vec__36988,cols,vals,vals_sql,alias_to_ignore,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("INSERT INTO "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,entity)),cljs.core.str(" ("),cljs.core.str(clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36988,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36936_SHARP_){
return cloudxmark.common.ql.unkebab.call(null,cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36936_SHARP_,alias_to_ignore));
});})(vec__36988,cols,vals,vals_sql,alias_to_ignore,where_sel_str,from_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
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
var vec__36995 = parse_columns_name_val.call(null,selects);
var cols = cljs.core.nth.call(null,vec__36995,(0),null);
var vals = cljs.core.nth.call(null,vec__36995,(1),null);
var vals_sql = cljs.core.map.call(null,((function (vec__36995,cols,vals,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36937_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36937_SHARP_,null);
});})(vec__36995,cols,vals,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,vals);
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,cloudxmark.common.ql.unkebab.call(null,entity));
var set_sql = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36995,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36938_SHARP_,p2__36939_SHARP_){
return [cljs.core.str(p1__36938_SHARP_),cljs.core.str(" = "),cljs.core.str(cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p2__36939_SHARP_,null))].join('');
});})(vec__36995,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cljs.core.map.call(null,((function (vec__36995,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36940_SHARP_){
return cloudxmark.common.ql.unkebab.call(null,cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36940_SHARP_,alias_to_ignore));
});})(vec__36995,cols,vals,vals_sql,alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cols),vals));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (vec__36995,cols,vals,vals_sql,alias_to_ignore,set_sql,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36941_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36941_SHARP_,null);
});})(vec__36995,cols,vals,vals_sql,alias_to_ignore,set_sql,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (vec__36995,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__36998){
var vec__36999 = p__36998;
var k = cljs.core.nth.call(null,vec__36999,(0),null);
var v = cljs.core.nth.call(null,vec__36999,(1),null);
var e = vec__36999;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(vec__36995,cols,vals,vals_sql,alias_to_ignore,set_sql,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,cljs.core.dissoc.call(null,entity_alias_map,cloudxmark.common.ql.unkebab.call(null,entity))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("UPDATE "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,entity)),cljs.core.str(" SET "),cljs.core.str(set_sql),cljs.core.str(((cljs.core.empty_QMARK_.call(null,from_str))?"":[cljs.core.str(" FROM "),cljs.core.str(from_str)].join(''))),cljs.core.str(((cljs.core.empty_QMARK_.call(null,where_sel_str))?"":[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join('')))].join(''),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
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
var alias_to_ignore = cljs.core.get.call(null,entity_alias_map,cloudxmark.common.ql.unkebab.call(null,entity));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,((function (alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p1__36942_SHARP_){
return cloudxmark.common.ql.parsed_exp__GT_sql.call(null,p1__36942_SHARP_,alias_to_ignore);
});})(alias_to_ignore,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (alias_to_ignore,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__37002){
var vec__37003 = p__37002;
var k = cljs.core.nth.call(null,vec__37003,(0),null);
var v = cljs.core.nth.call(null,vec__37003,(1),null);
var e = vec__37003;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(alias_to_ignore,where_sel_str,G__36983,parse_column_name_val,parse_columns_name_val,map__36975,map__36975__$1,parsed_query,selects,params,where,vars,entity_alias_map))
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

//# sourceMappingURL=ql.js.map?rel=1472326861535