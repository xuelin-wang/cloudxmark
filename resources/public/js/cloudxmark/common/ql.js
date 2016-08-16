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
var vec__53209 = (((dot_index < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_alias,name], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name.substring((0),dot_index),name.substring((dot_index + (1)))], null));
var this_alias = cljs.core.nth.call(null,vec__53209,(0),null);
var this_select = cljs.core.nth.call(null,vec__53209,(1),null);
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
}catch (e53244){if((e53244 instanceof Error)){
var e__23474__auto__ = e53244;
if((e__23474__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var attr = cljs.core.nth.call(null,exp,(1));
var map__53252 = cloudxmark$common$ql$parse_exp.call(null,attr,vars,entity,alias_map);
var map__53252__$1 = ((((!((map__53252 == null)))?((((map__53252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53252):map__53252);
var selects = cljs.core.get.call(null,map__53252__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__53252__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53245){if((e53245 instanceof Error)){
var e__23474__auto____$1 = e53245;
if((e__23474__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var map__53250 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__53250__$1 = ((((!((map__53250 == null)))?((((map__53250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53250):map__53250);
var selects = cljs.core.get.call(null,map__53250__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__53250__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53246){if((e53246 instanceof Error)){
var e__23474__auto____$2 = e53246;
if((e__23474__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
var op = cljs.core.nth.call(null,exp,(0));
var attr1 = cljs.core.nth.call(null,exp,(1));
var attr2 = cljs.core.nth.call(null,exp,(2));
var attr3 = cljs.core.nth.call(null,exp,(3));
var map__53248 = cloudxmark$common$ql$parse_exp.call(null,attr1,vars,entity,alias_map);
var map__53248__$1 = ((((!((map__53248 == null)))?((((map__53248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53248):map__53248);
var selects = cljs.core.get.call(null,map__53248__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__53248__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark$common$ql$parse_exp.call(null,attr2,vars,entity,alias_map);
var res3 = cloudxmark$common$ql$parse_exp.call(null,attr3,vars,entity,alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res3)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res3)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53247){if((e53247 instanceof Error)){
var e__23474__auto____$3 = e53247;
if((e__23474__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__23474__auto____$3;
}
} else {
throw e53247;

}
}} else {
throw e__23474__auto____$2;
}
} else {
throw e53246;

}
}} else {
throw e__23474__auto____$1;
}
} else {
throw e53245;

}
}} else {
throw e__23474__auto__;
}
} else {
throw e53244;

}
}}
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"item","item",249373802),null,new cljs.core.Keyword(null,"auth","auth",1389754926),null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cloudxmark.common.ql.entity_names.call(null,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__53254,p__53255){
var map__53266 = p__53254;
var map__53266__$1 = ((((!((map__53266 == null)))?((((map__53266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53266):map__53266);
var query = map__53266__$1;
var entity = cljs.core.get.call(null,map__53266__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var alias = cljs.core.get.call(null,map__53266__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var args = cljs.core.get.call(null,map__53266__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__53266__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__53267 = p__53255;
var map__53267__$1 = ((((!((map__53267 == null)))?((((map__53267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53267):map__53267);
var parsed = map__53267__$1;
var selects = cljs.core.get.call(null,map__53267__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where = cljs.core.get.call(null,map__53267__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__53267__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__53267__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__53267__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
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
var new_where = cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,map__53266,map__53266__$1,query,entity,alias,args,attributes,map__53267,map__53267__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__53270,arg){
var map__53271 = p__53270;
var map__53271__$1 = ((((!((map__53271 == null)))?((((map__53271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53271):map__53271);
var curr_parsed = map__53271__$1;
var selects__$1 = cljs.core.get.call(null,map__53271__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params__$1 = cljs.core.get.call(null,map__53271__$1,new cljs.core.Keyword(null,"params","params",710516235));
var parsed_arg = cloudxmark.common.ql.parse_exp.call(null,arg,merged_vars,entity,new_entity_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),cljs.core.apply.call(null,cljs.core.merge,selects__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.apply.call(null,cljs.core.merge,params__$1,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(this_alias,new_entity_alias_map,merged_vars,map__53266,map__53266__$1,query,entity,alias,args,attributes,map__53267,map__53267__$1,parsed,selects,where,params,vars,entity_alias_map))
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
return cljs.core.reduce.call(null,((function (this_alias,new_entity_alias_map,merged_vars,new_where,map__53266,map__53266__$1,query,entity,alias,args,attributes,map__53267,map__53267__$1,parsed,selects,where,params,vars,entity_alias_map){
return (function (p__53273,attr){
var map__53274 = p__53273;
var map__53274__$1 = ((((!((map__53274 == null)))?((((map__53274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53274):map__53274);
var curr_parsed = map__53274__$1;
var selects__$1 = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var where__$1 = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map__$1 = cljs.core.get.call(null,map__53274__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
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
});})(this_alias,new_entity_alias_map,merged_vars,new_where,map__53266,map__53266__$1,query,entity,alias,args,attributes,map__53267,map__53267__$1,parsed,selects,where,params,vars,entity_alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"where","where",-2044795965),new_where,new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__21590__auto__ = params;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"vars","vars",-2046957217),merged_vars,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171),new_entity_alias_map], null)),attributes);
});
cloudxmark.common.ql.parsed_exp__GT_sql = (function cloudxmark$common$ql$parsed_exp__GT_sql(exp){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
try{var exp_0__53305 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__53305,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
try{var exp_1__53306 = cljs.core.nth.call(null,exp,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_1__53306,new cljs.core.Keyword(null,"?","?",-1703165233))){
return "?";
} else {
throw cljs.core.match.backtrack;

}
}catch (e53331){if((e53331 instanceof Error)){
var e__23474__auto__ = e53331;
if((e__23474__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23474__auto__;
}
} else {
throw e53331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53330){if((e53330 instanceof Error)){
var e__23474__auto__ = e53330;
if((e__23474__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23474__auto__;
}
} else {
throw e53330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53320){if((e53320 instanceof Error)){
var e__23474__auto__ = e53320;
if((e__23474__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 3))){
try{var exp_0__53307 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__53307,new cljs.core.Keyword(null,"-attr","-attr",-1127457257))){
var alias = cljs.core.nth.call(null,exp,(1));
var col = cljs.core.nth.call(null,exp,(2));
return [cljs.core.str(alias),cljs.core.str("."),cljs.core.str(col)].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e53329){if((e53329 instanceof Error)){
var e__23474__auto____$1 = e53329;
if((e__23474__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23474__auto____$1;
}
} else {
throw e53329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53321){if((e53321 instanceof Error)){
var e__23474__auto____$1 = e53321;
if((e__23474__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 1))){
try{var exp_0__53310 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__53310,new cljs.core.Keyword(null,"count","count",2139924085))){
return "COUNT(*)";
} else {
throw cljs.core.match.backtrack;

}
}catch (e53328){if((e53328 instanceof Error)){
var e__23474__auto____$2 = e53328;
if((e__23474__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23474__auto____$2;
}
} else {
throw e53328;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53322){if((e53322 instanceof Error)){
var e__23474__auto____$2 = e53322;
if((e__23474__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 4))){
try{var exp_0__53311 = cljs.core.nth.call(null,exp,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,exp_0__53311,new cljs.core.Keyword(null,"between","between",1131099276))){
var sel1 = cljs.core.nth.call(null,exp,(1));
var sel2 = cljs.core.nth.call(null,exp,(2));
var sel3 = cljs.core.nth.call(null,exp,(3));
return [cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel1)),cljs.core.str(" BETWEEN "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel2)),cljs.core.str(" AND "),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel3))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e53327){if((e53327 instanceof Error)){
var e__23474__auto____$3 = e53327;
if((e__23474__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23474__auto____$3;
}
} else {
throw e53327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53323){if((e53323 instanceof Error)){
var e__23474__auto____$3 = e53323;
if((e__23474__auto____$3 === cljs.core.match.backtrack)){
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
}catch (e53324){if((e53324 instanceof Error)){
var e__23474__auto____$4 = e53324;
if((e__23474__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,exp)) && ((cljs.core.count.call(null,exp) === 2))){
var op = cljs.core.nth.call(null,exp,(0));
var sel = cljs.core.nth.call(null,exp,(1));
var G__53326 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__53326) {
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
case "max":
return [cljs.core.str("MAX("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(")")].join('');

break;
case "min":
return [cljs.core.str("MIN("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(")")].join('');

break;
case "average":
return [cljs.core.str("AVG("),cljs.core.str(cloudxmark$common$ql$parsed_exp__GT_sql.call(null,sel)),cljs.core.str(")")].join('');

break;
default:
return cloudxmark.common.util.throw_common.call(null,[cljs.core.str("Unsupported unary operator: "),cljs.core.str(op)].join(''));

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e53325){if((e53325 instanceof Error)){
var e__23474__auto____$5 = e53325;
if((e__23474__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(exp)].join('')));
} else {
throw e__23474__auto____$5;
}
} else {
throw e53325;

}
}} else {
throw e__23474__auto____$4;
}
} else {
throw e53324;

}
}} else {
throw e__23474__auto____$3;
}
} else {
throw e53323;

}
}} else {
throw e__23474__auto____$2;
}
} else {
throw e53322;

}
}} else {
throw e__23474__auto____$1;
}
} else {
throw e53321;

}
}} else {
throw e__23474__auto__;
}
} else {
throw e53320;

}
}});
cloudxmark.common.ql.parsed_query__GT_sql_params = (function cloudxmark$common$ql$parsed_query__GT_sql_params(p__53333){
var map__53340 = p__53333;
var map__53340__$1 = ((((!((map__53340 == null)))?((((map__53340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53340):map__53340);
var parsed_query = map__53340__$1;
var selects = cljs.core.get.call(null,map__53340__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__53340__$1,new cljs.core.Keyword(null,"params","params",710516235));
var where = cljs.core.get.call(null,map__53340__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var vars = cljs.core.get.call(null,map__53340__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var entity_alias_map = cljs.core.get.call(null,map__53340__$1,new cljs.core.Keyword(null,"entity-alias-map","entity-alias-map",-1093672171));
var sel_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,cloudxmark.common.ql.parsed_exp__GT_sql,selects));
var where_sel_str = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where)))?clojure.string.join.call(null," AND ",cljs.core.map.call(null,cloudxmark.common.ql.parsed_exp__GT_sql,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(where))):null);
var from_str = clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (sel_str,where_sel_str,map__53340,map__53340__$1,parsed_query,selects,params,where,vars,entity_alias_map){
return (function (p__53342){
var vec__53343 = p__53342;
var k = cljs.core.nth.call(null,vec__53343,(0),null);
var v = cljs.core.nth.call(null,vec__53343,(1),null);
var e = vec__53343;
return [cljs.core.str(cloudxmark.common.ql.unkebab.call(null,k)),cljs.core.str(" "),cljs.core.str(cloudxmark.common.ql.unkebab.call(null,v))].join('');
});})(sel_str,where_sel_str,map__53340,map__53340__$1,parsed_query,selects,params,where,vars,entity_alias_map))
,entity_alias_map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("SELECT "),cljs.core.str(sel_str),cljs.core.str(" FROM "),cljs.core.str(from_str),cljs.core.str(((!((where_sel_str == null)))?[cljs.core.str(" WHERE "),cljs.core.str(where_sel_str)].join(''):null))].join(''),cljs.core.concat.call(null,(function (){var or__21590__auto__ = params;
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
});

//# sourceMappingURL=ql.js.map?rel=1471269441458