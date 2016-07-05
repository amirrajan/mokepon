// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests');
goog.require('cljs.core');
goog.require('cljs.test');
mokepon.tests.test_numbers = (function mokepon$tests$test_numbers(){
return cljs.test.test_var.call(null,mokepon$tests$test_numbers.cljs$lang$var);
});
mokepon.tests.test_numbers.cljs$lang$test = (function (){
try{var values__35103__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),(1));
var result__35104__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__35103__auto__);
if(cljs.core.truth_(result__35104__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__35103__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28846__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__35103__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28846__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__35104__auto__;
}catch (e37013){var t__35141__auto__ = e37013;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__35141__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.test_numbers.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.test_numbers;},new cljs.core.Symbol("mokepon.tests","test-numbers","mokepon.tests/test-numbers",1174350490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"test-numbers","test-numbers",-554519084,null),"/Users/amiralirajan/Projects/mokepon/test/core.cljs",22,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.test_numbers)?mokepon.tests.test_numbers.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env37014 = cljs.test.empty_env.call(null);
var summary37015 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env37014,summary37015){
return (function (){
cljs.test.set_env_BANG_.call(null,env37014);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__35207__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__35207__auto__,env37014,summary37015){
return (function (){
if((env__35207__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__35207__auto__,env37014,summary37015))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return mokepon.tests.test_numbers;},new cljs.core.Symbol("mokepon.tests","test-numbers","mokepon.tests/test-numbers",1174350490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Symbol(null,"test-numbers","test-numbers",-554519084,null),"/Users/amiralirajan/Projects/mokepon/test/core.cljs",22,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.test_numbers)?mokepon.tests.test_numbers.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__35207__auto__,env37014,summary37015){
return (function (){
if((env__35207__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__35207__auto__,env37014,summary37015))
], null));
})());
});})(env37014,summary37015))
,((function (env37014,summary37015){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests","mokepon.tests",-580206366,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env37014,summary37015))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env37014,summary37015){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary37015,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary37015),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env37014,summary37015))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env37014,summary37015){
return (function (){
cljs.test.set_env_BANG_.call(null,env37014);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary37015));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary37015),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env37014,summary37015))
], null));
})());

//# sourceMappingURL=tests.js.map