// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
/**
 * Generates a testing environment with a reporter.
 * (empty-env) - uses the :cljs.test/default reporter.
 * (empty-env :cljs.test/pprint) - pretty prints all data structures. 
 * (empty-env reporter) - uses a reporter of your choosing.
 * 
 * To create your own reporter see cljs.test/report
 */
cljs.test.empty_env = (function cljs$test$empty_env(var_args){
var args37413 = [];
var len__19539__auto___37417 = arguments.length;
var i__19540__auto___37418 = (0);
while(true){
if((i__19540__auto___37418 < len__19539__auto___37417)){
args37413.push((arguments[i__19540__auto___37418]));

var G__37419 = (i__19540__auto___37418 + (1));
i__19540__auto___37418 = G__37419;
continue;
} else {
}
break;
}

var G__37415 = args37413.length;
switch (G__37415) {
case 0:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37413.length)].join('')));

}
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cljs$test_SLASH_default);
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1 = (function (reporter){
var G__37416 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$report_DASH_counters,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$test,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0)], null),cljs.core.cst$kw$testing_DASH_vars,cljs.core.List.EMPTY,cljs.core.cst$kw$testing_DASH_contexts,cljs.core.List.EMPTY,cljs.core.cst$kw$formatter,cljs.core.pr_str,cljs.core.cst$kw$reporter,reporter], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$test_SLASH_pprint,reporter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__37416,cljs.core.cst$kw$reporter,cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.array_seq([cljs.core.cst$kw$formatter,cljs.pprint.pprint], 0));
} else {
return G__37416;
}
});

cljs.test.empty_env.cljs$lang$maxFixedArity = 1;

cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function cljs$test$get_current_env(){
var or__18464__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
}
});
cljs.test.update_current_env_BANG_ = (function cljs$test$update_current_env_BANG_(var_args){
var args__19546__auto__ = [];
var len__19539__auto___37424 = arguments.length;
var i__19540__auto___37425 = (0);
while(true){
if((i__19540__auto___37425 < len__19539__auto___37424)){
args__19546__auto__.push((arguments[i__19540__auto___37425]));

var G__37426 = (i__19540__auto___37425 + (1));
i__19540__auto___37425 = G__37426;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((2) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((2)),(0),null)):null);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19547__auto__);
});

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,cljs.test.get_current_env(),ks,f,args);
});

cljs.test.update_current_env_BANG_.cljs$lang$maxFixedArity = (2);

cljs.test.update_current_env_BANG_.cljs$lang$applyTo = (function (seq37421){
var G__37422 = cljs.core.first(seq37421);
var seq37421__$1 = cljs.core.next(seq37421);
var G__37423 = cljs.core.first(seq37421__$1);
var seq37421__$2 = cljs.core.next(seq37421__$1);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37422,G__37423,seq37421__$2);
});

cljs.test.set_env_BANG_ = (function cljs$test$set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function cljs$test$clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
cljs.test.get_and_clear_env_BANG_ = (function cljs$test$get_and_clear_env_BANG_(){

var env = cljs.test.get_current_env();
cljs.test.clear_env_BANG_();

return env;
});
/**
 * Returns a string representation of the current test.  Renders names
 *   in *testing-vars* as a list, then the source file and line of
 *   current assertion.
 */
cljs.test.testing_vars_str = (function cljs$test$testing_vars_str(m){
var map__37430 = m;
var map__37430__$1 = ((((!((map__37430 == null)))?((((map__37430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37430):map__37430);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.cst$kw$column);
return [cljs.core.str(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__37430,map__37430__$1,file,line,column){
return (function (p1__37427_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37427_SHARP_));
});})(map__37430,map__37430__$1,file,line,column))
,cljs.core.cst$kw$testing_DASH_vars.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env())))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str((cljs.core.truth_(column)?[cljs.core.str(":"),cljs.core.str(column)].join(''):null)),cljs.core.str(")")].join('');
});
/**
 * Returns a string representation of the current test context. Joins
 *   strings in *testing-contexts* with spaces.
 */
cljs.test.testing_contexts_str = (function cljs$test$testing_contexts_str(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))));
});
/**
 * Increments the named counter in *report-counters*, a ref to a map.
 *   Does nothing if *report-counters* is nil.
 */
cljs.test.inc_report_counter_BANG_ = (function cljs$test$inc_report_counter_BANG_(name){
if(cljs.core.truth_(cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return null;
}
});
if(typeof cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.
 */
cljs.test.report = (function (){var method_table__19389__auto__ = (function (){var G__37432 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37432) : cljs.core.atom.call(null,G__37432));
})();
var prefer_table__19390__auto__ = (function (){var G__37433 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37433) : cljs.core.atom.call(null,G__37433));
})();
var method_cache__19391__auto__ = (function (){var G__37434 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37434) : cljs.core.atom.call(null,G__37434));
})();
var cached_hierarchy__19392__auto__ = (function (){var G__37435 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37435) : cljs.core.atom.call(null,G__37435));
})();
var hierarchy__19393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test","report"),((function (method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__,hierarchy__19393__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__,hierarchy__19393__auto__))
,cljs.core.cst$kw$default,hierarchy__19393__auto__,method_table__19389__auto__,prefer_table__19390__auto__,method_cache__19391__auto__,cached_hierarchy__19392__auto__));
})();
}
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$pass], null),(function (m){
return cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);
}));
cljs.test.print_comparison = (function cljs$test$print_comparison(m){
var formatter_fn = (function (){var or__18464__auto__ = cljs.core.cst$kw$formatter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__18464__auto__)){
return or__18464__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",(function (){var G__37438 = cljs.core.cst$kw$expected.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__37438) : formatter_fn.call(null,G__37438));
})()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",(function (){var G__37439 = cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__37439) : formatter_fn.call(null,G__37439));
})()], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4657__auto___37440 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___37440)){
var message_37441 = temp__4657__auto___37440;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_37441], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__4657__auto___37442 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto___37442)){
var message_37443 = temp__4657__auto___37442;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_37443], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$summary], null),(function (m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(m),"tests containing",((cljs.core.cst$kw$pass.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m)) + cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m),"failures,",cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null),(function (m){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",cljs.core.name(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_ns], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_run_DASH_tests], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_all_DASH_vars], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_vars], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function cljs$test$js_line_and_column(stack_element){
var parts = stack_element.split(":");
var cnt = cljs.core.count(parts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (2)));
var G__37449 = (10);
return parseInt(G__37448,G__37449);
})(),(function (){var G__37450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (1)));
var G__37451 = (10);
return parseInt(G__37450,G__37451);
})()], null);
});
cljs.test.js_filename = (function cljs$test$js_filename(stack_element){
return cljs.core.first(cljs.core.last(stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function cljs$test$mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4655__auto__ = cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(temp__4655__auto__)){
var source_map = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4655__auto____$1)){
var columns = temp__4655__auto____$1;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first((function (){var temp__4655__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,(column - (1)));
if(cljs.core.truth_(temp__4655__auto____$2)){
var mapping = temp__4655__auto____$2;
return mapping;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$line,cljs.core.cst$kw$col], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function cljs$test$file_and_line(exception,depth){
var temp__4655__auto__ = (function (){var and__18452__auto__ = typeof exception.stack === 'string';
if(and__18452__auto__){
var G__37461 = exception.stack;
var G__37461__$1 = (((G__37461 == null))?null:clojure.string.split_lines(G__37461));
var G__37461__$2 = (((G__37461__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__37461__$1,depth));
if((G__37461__$2 == null)){
return null;
} else {
return clojure.string.trim(G__37461__$2);
}
} else {
return and__18452__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var stack_element = temp__4655__auto__;
var fname = cljs.test.js_filename(stack_element);
var vec__37462 = cljs.test.js_line_and_column(stack_element);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37462,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37462,(1),null);
var vec__37465 = cljs.test.mapped_line_and_column(fname,line,column);
var fname__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(1),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,fname__$1,cljs.core.cst$kw$line,line__$1,cljs.core.cst$kw$column,column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,exception.fileName,cljs.core.cst$kw$line,exception.lineNumber], null);
}
});
cljs.test.do_report = (function cljs$test$do_report(m){
var m__$1 = (function (){var G__37469 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__37469) {
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line((new Error()),(4)),m], 0));

break;
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m),(0)),m], 0));

break;
default:
return m;

}
})();
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs.test.report.call(null,m__$1));
});

/**
 * Marker protocol denoting CPS function to begin asynchronous
 *   testing.
 * @interface
 */
cljs.test.IAsyncTest = function(){};

/**
 * Returns whether x implements IAsyncTest.
 */
cljs.test.async_QMARK_ = (function cljs$test$async_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs$test$IAsyncTest$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
}
});
/**
 * Invoke all functions in fns with no arguments. A fn can optionally
 *   return
 *   
 *   an async test - is invoked with a continuation running left fns
 * 
 *   a seq of fns tagged per block - are invoked immediately after fn
 */
cljs.test.run_block = (function cljs$test$run_block(fns){
while(true){
var temp__4657__auto__ = cljs.core.seq(fns);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var f = cljs.core.first(xs__5205__auto__);
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
var G__37477 = (function (){var d = (new cljs.core.Delay(((function (fns,obj,f,xs__5205__auto__,temp__4657__auto__){
return (function (){
return cljs$test$run_block(cljs.core.rest(fns));
});})(fns,obj,f,xs__5205__auto__,temp__4657__auto__))
,null));
return ((function (fns,d,obj,f,xs__5205__auto__,temp__4657__auto__){
return (function (){
if(cljs.core.realized_QMARK_(d)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["WARNING: Async test called done more than one time."], 0));
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d));
}
});
;})(fns,d,obj,f,xs__5205__auto__,temp__4657__auto__))
})();
return (obj.cljs$core$IFn$_invoke$arity$1 ? obj.cljs$core$IFn$_invoke$arity$1(G__37477) : obj.call(null,G__37477));
} else {
var G__37479 = (function (){var G__37478 = cljs.core.rest(fns);
if(cljs.core.truth_(cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(obj,G__37478);
} else {
return G__37478;
}
})();
fns = G__37479;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Tag a seq of fns to be picked up by run-block as injected
 *   continuation.  See run-block.
 */
cljs.test.block = (function cljs$test$block(fns){
var G__37481 = fns;
if((G__37481 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__37481,cljs.core.assoc,cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_,true);
}
});
cljs.test.test_var_block_STAR_ = (function cljs$test$test_var_block_STAR_(v,t){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error("Assert failed: (instance? Var v)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.conj,cljs.core.array_seq([v], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,cljs.core.cst$kw$test], null),cljs.core.inc);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

try{return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e37484){var e = e37484;
var G__37485 = (((e instanceof cljs.core.Keyword))?e.fqn:null);
switch (G__37485) {
case "cljs.test/async-disabled":
throw "Async tests require fixtures to be specified as maps.  Testing aborted.";

break;
default:
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,"Uncaught exception, not in assertion.",cljs.core.cst$kw$expected,null,cljs.core.cst$kw$actual,e], null));

}
}}),(function (){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.rest);
})], null);
});
/**
 * Like test-var, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_var_block = (function cljs$test$test_var_block(v){
var temp__4655__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4655__auto__)){
var t = temp__4655__auto__;
return cljs.test.test_var_block_STAR_(v,t);
} else {
return null;
}
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   add v to :testing-vars property of env.
 */
cljs.test.test_var = (function cljs$test$test_var(v){
return cljs.test.run_block(cljs.test.test_var_block(v));
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.default_fixture = (function cljs$test$default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.compose_fixtures = (function cljs$test$compose_fixtures(f1,f2){
return (function (g){
var G__37488 = (function (){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37488) : f1.call(null,G__37488));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.join_fixtures = (function cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
 * Wraps block in map-fixtures.
 */
cljs.test.wrap_map_fixtures = (function cljs$test$wrap_map_fixtures(map_fixtures,block){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before,map_fixtures),block,cljs.core.array_seq([cljs.core.reverse(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$after,map_fixtures))], 0));
});
cljs.test.execution_strategy = (function cljs$test$execution_strategy(once,each){
var fixtures_type = (function cljs$test$execution_strategy_$_fixtures_type(coll){
if(cljs.core.empty_QMARK_(coll)){
return cljs.core.cst$kw$none;
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,coll)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.every_QMARK_(cljs.core.fn_QMARK_,coll)){
return cljs.core.cst$kw$fn;
} else {
return null;
}
}
}
});
var fixtures_types = (function cljs$test$execution_strategy_$_fixtures_types(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$none,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fixtures_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [once,each], null))));
});
var vec__37492 = fixtures_types();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492,(0),null);
var types = vec__37492;
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,types)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fixtures may not be of mixed types"),cljs.core.str("\n"),cljs.core.str("(not-any? nil? types)")].join('')));
}

if(((2) > cljs.core.count(types))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("fixtures specified in :once and :each must be of the same type"),cljs.core.str("\n"),cljs.core.str("(> 2 (count types))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$map,cljs.core.cst$kw$async,cljs.core.cst$kw$fn,cljs.core.cst$kw$sync], null).call(null,type,cljs.core.cst$kw$async);
});
cljs.test.disable_async = (function cljs$test$disable_async(f){
return (function (){
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
throw cljs.core.cst$kw$cljs$test_SLASH_async_DASH_disabled;
} else {
}

return obj;
});
});
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_vars_block = (function cljs$test$test_vars_block(vars){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37506){
var vec__37507 = p__37506;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(1),null);
return ((function (vec__37507,ns,vars__$1){
return (function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_fixtures,ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures,ns], null));
var G__37510 = (((cljs.test.execution_strategy(once_fixtures,each_fixtures) instanceof cljs.core.Keyword))?cljs.test.execution_strategy(once_fixtures,each_fixtures).fqn:null);
switch (G__37510) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1){
return (function (){
return cljs.test.join_fixtures(once_fixtures).call(null,((function (each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1){
return (function (){
var seq__37511 = cljs.core.seq(vars__$1);
var chunk__37512 = null;
var count__37513 = (0);
var i__37514 = (0);
while(true){
if((i__37514 < count__37513)){
var v = chunk__37512.cljs$core$IIndexed$_nth$arity$2(null,i__37514);
var temp__4657__auto___37518 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4657__auto___37518)){
var t_37519 = temp__4657__auto___37518;
var G__37515_37520 = ((function (seq__37511,chunk__37512,count__37513,i__37514,t_37519,temp__4657__auto___37518,v,each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37519)));
});})(seq__37511,chunk__37512,count__37513,i__37514,t_37519,temp__4657__auto___37518,v,each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37515_37520) : each_fixture_fn.call(null,G__37515_37520));
} else {
}

var G__37521 = seq__37511;
var G__37522 = chunk__37512;
var G__37523 = count__37513;
var G__37524 = (i__37514 + (1));
seq__37511 = G__37521;
chunk__37512 = G__37522;
count__37513 = G__37523;
i__37514 = G__37524;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__37511);
if(temp__4657__auto__){
var seq__37511__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37511__$1)){
var c__19275__auto__ = cljs.core.chunk_first(seq__37511__$1);
var G__37525 = cljs.core.chunk_rest(seq__37511__$1);
var G__37526 = c__19275__auto__;
var G__37527 = cljs.core.count(c__19275__auto__);
var G__37528 = (0);
seq__37511 = G__37525;
chunk__37512 = G__37526;
count__37513 = G__37527;
i__37514 = G__37528;
continue;
} else {
var v = cljs.core.first(seq__37511__$1);
var temp__4657__auto___37529__$1 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__4657__auto___37529__$1)){
var t_37530 = temp__4657__auto___37529__$1;
var G__37516_37531 = ((function (seq__37511,chunk__37512,count__37513,i__37514,t_37530,temp__4657__auto___37529__$1,v,seq__37511__$1,temp__4657__auto__,each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37530)));
});})(seq__37511,chunk__37512,count__37513,i__37514,t_37530,temp__4657__auto___37529__$1,v,seq__37511__$1,temp__4657__auto__,each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37516_37531) : each_fixture_fn.call(null,G__37516_37531));
} else {
}

var G__37532 = cljs.core.next(seq__37511__$1);
var G__37533 = null;
var G__37534 = (0);
var G__37535 = (0);
seq__37511 = G__37532;
chunk__37512 = G__37533;
count__37513 = G__37534;
i__37514 = G__37535;
continue;
}
} else {
return null;
}
}
break;
}
});})(each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1))
);
});})(each_fixture_fn,G__37510,env,once_fixtures,each_fixtures,vec__37507,ns,vars__$1))
], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.test.execution_strategy(once_fixtures,each_fixtures))].join('')));

}
})());
});
;})(vec__37507,ns,vars__$1))
}),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.meta),vars));
});
/**
 * Groups vars by their namespace and runs test-vars on them with
 *   appropriate fixtures assuming they are present in the current
 *   testing environment.
 */
cljs.test.test_vars = (function cljs$test$test_vars(vars){
return cljs.test.run_block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.test.test_vars_block(vars),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__37537 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_vars,cljs.core.cst$kw$vars,vars], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__37537) : cljs.test.report.call(null,G__37537));
})], null)));
});
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cljs.test.successful_QMARK_ = (function cljs$test$successful_QMARK_(summary){
return ((cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});
