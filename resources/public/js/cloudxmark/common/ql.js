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
var name = cljs.core.name.call(null,select);
if(cljs.core.truth_(name.startsWith("$"))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,vars,name.substring((1)))], null)], null);
} else {
var dot_index = name.indexOf(".");
var vec__34978 = (((dot_index < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,name], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name.substring((0),dot_index),name.substring((dot_index + (1)))], null));
var this_entity = cljs.core.nth.call(null,vec__34978,(0),null);
var this_select = cljs.core.nth.call(null,vec__34978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__21368__auto__ = cljs.core.get.call(null,alias_map,this_entity);
if(cljs.core.truth_(or__21368__auto__)){
return or__21368__auto__;
} else {
return this_entity;
}
})(),this_select], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233)], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [select], null)], null);
}
});
cloudxmark.common.ql.parse_where = (function cloudxmark$common$ql$parse_where(where,vars,entity,alias_map){
try{if((cljs.core.vector_QMARK_.call(null,where)) && ((cljs.core.count.call(null,where) === 1))){
var attr = cljs.core.nth.call(null,where,(0));
var map__35011 = cloudxmark.common.ql.parse_attr.call(null,attr,vars,entity,alias_map);
var map__35011__$1 = ((((!((map__35011 == null)))?((((map__35011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35011):map__35011);
var selects = cljs.core.get.call(null,map__35011__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__35011__$1,new cljs.core.Keyword(null,"params","params",710516235));
cljs.core.println.call(null,[cljs.core.str("opt1:"),cljs.core.str(selects)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35004){if((e35004 instanceof Error)){
var e__25039__auto__ = e35004;
if((e__25039__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,where)) && ((cljs.core.count.call(null,where) === 2))){
var op = cljs.core.nth.call(null,where,(0));
var attr = cljs.core.nth.call(null,where,(1));
var map__35009 = cloudxmark.common.ql.parse_attr.call(null,attr,vars,entity,alias_map);
var map__35009__$1 = ((((!((map__35009 == null)))?((((map__35009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35009):map__35009);
var selects = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword(null,"params","params",710516235));
cljs.core.println.call(null,[cljs.core.str("opt2:"),cljs.core.str(selects)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects], null),new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35005){if((e35005 instanceof Error)){
var e__25039__auto____$1 = e35005;
if((e__25039__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,where)) && ((cljs.core.count.call(null,where) === 3))){
var op = cljs.core.nth.call(null,where,(0));
var attr1 = cljs.core.nth.call(null,where,(1));
var attr2 = cljs.core.nth.call(null,where,(2));
var map__35007 = cloudxmark.common.ql.parse_attr.call(null,attr1,vars,entity,alias_map);
var map__35007__$1 = ((((!((map__35007 == null)))?((((map__35007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35007):map__35007);
var selects = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"selects","selects",-402693929));
var params = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"params","params",710516235));
var res2 = cloudxmark.common.ql.parse_attr.call(null,attr2,vars,entity,alias_map);
cljs.core.println.call(null,[cljs.core.str("opt3:"),cljs.core.str(selects),cljs.core.str(",and: "),cljs.core.str(new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2))].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selects","selects",-402693929),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,selects,new cljs.core.Keyword(null,"selects","selects",-402693929).cljs$core$IFn$_invoke$arity$1(res2)], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res2)))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35006){if((e35006 instanceof Error)){
var e__25039__auto____$2 = e35006;
if((e__25039__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(where)].join('')));
} else {
throw e__25039__auto____$2;
}
} else {
throw e35006;

}
}} else {
throw e__25039__auto____$1;
}
} else {
throw e35005;

}
}} else {
throw e__25039__auto__;
}
} else {
throw e35004;

}
}});
cloudxmark.common.ql.db_aliases = "abcdefghijklmnopqrstuvwxyz";
cloudxmark.common.ql.get_table_alias = (function cloudxmark$common$ql$get_table_alias(index){
return cloudxmark.common.ql.db_aliases.substring(index,(index + (1)));
});
cloudxmark.common.ql.entity_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["lst",null,"auth",null,"item",null], null), null);
cloudxmark.common.ql.is_entity_QMARK_ = (function cloudxmark$common$ql$is_entity_QMARK_(name){
return cljs.core.some_QMARK_.call(null,cloudxmark.common.ql.entity_names,name);
});
cloudxmark.common.ql.parse_query = (function cloudxmark$common$ql$parse_query(p__35013,p__35014){
var map__35022 = p__35013;
var map__35022__$1 = ((((!((map__35022 == null)))?((((map__35022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var query = map__35022__$1;
var entity = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var args = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var attributes = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var map__35023 = p__35014;
var map__35023__$1 = ((((!((map__35023 == null)))?((((map__35023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35023):map__35023);
var parsed = map__35023__$1;
var select = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var from = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var where = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var next_alias_index = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"next-alias-index","next-alias-index",-508254241));
var alias_map = cljs.core.get.call(null,map__35023__$1,new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570));
var table_alias = cloudxmark.common.ql.get_table_alias.call(null,next_alias_index);
var new_from = [cljs.core.str(entity),cljs.core.str(" "),cljs.core.str(table_alias)].join('');
var new_alias_map = cljs.core.merge.call(null,alias_map,cljs.core.PersistentArrayMap.fromArray([entity,table_alias], true, false));
var parsed_args = cljs.core.reduce.call(null,((function (table_alias,new_from,new_alias_map,map__35022,map__35022__$1,query,entity,args,attributes,map__35023,map__35023__$1,parsed,select,from,where,params,vars,next_alias_index,alias_map){
return (function (curr_parsed,arg){
var parsed_arg = cloudxmark.common.ql.parse_where.call(null,arg,vars,entity,new_alias_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.concat.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(curr_parsed),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sql","sql",1251448786).cljs$core$IFn$_invoke$arity$1(parsed_arg)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.concat.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(curr_parsed),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_arg))], null);
});})(table_alias,new_from,new_alias_map,map__35022,map__35022__$1,query,entity,args,attributes,map__35023,map__35023__$1,parsed,select,from,where,params,vars,next_alias_index,alias_map))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY], null),args);
return cljs.core.reduce.call(null,((function (table_alias,new_from,new_alias_map,parsed_args,map__35022,map__35022__$1,query,entity,args,attributes,map__35023,map__35023__$1,parsed,select,from,where,params,vars,next_alias_index,alias_map){
return (function (p__35026,attr){
var map__35027 = p__35026;
var map__35027__$1 = ((((!((map__35027 == null)))?((((map__35027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35027):map__35027);
var parsed__$1 = map__35027__$1;
var select__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var from__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var where__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var params__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"params","params",710516235));
var vars__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var next_alias_index__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"next-alias-index","next-alias-index",-508254241));
var alias_map__$1 = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570));
if((typeof attr === 'string') || ((attr instanceof cljs.core.Keyword))){
var parsed_attr = cloudxmark.common.ql.parse_attr.call(null,attr,vars__$1,table_alias);
return cljs.core.merge.call(null,parsed__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.concat.call(null,select__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sql","sql",1251448786).cljs$core$IFn$_invoke$arity$1(parsed_attr)], null)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.concat.call(null,params__$1.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_attr)))], null));
} else {
if(cljs.core.truth_(cloudxmark.common.ql.is_entity_QMARK_.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(attr)))){
return cloudxmark$common$ql$parse_query.call(null,attr,parsed__$1);
} else {
throw [cljs.core.str("Attribute is neither string nor entity: "),cljs.core.str(attr)].join('');

}
}
});})(table_alias,new_from,new_alias_map,parsed_args,map__35022,map__35022__$1,query,entity,args,attributes,map__35023,map__35023__$1,parsed,select,from,where,params,vars,next_alias_index,alias_map))
,cljs.core.merge.call(null,parsed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.concat.call(null,from,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_from], null)),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.concat.call(null,where,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(parsed_args)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.concat.call(null,params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parsed_args)),new cljs.core.Keyword(null,"next-alias-index","next-alias-index",-508254241),(next_alias_index + (1)),new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570),new_alias_map], null)),attributes);
});

//# sourceMappingURL=ql.js.map?rel=1470303907639