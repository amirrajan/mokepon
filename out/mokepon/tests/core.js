// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.core.state = (function mokepon$tests$core$state(){
return cljs.core.deref.call(null,mokepon.container.app_state.call(null));
});
mokepon.tests.core.log = (function mokepon$tests$core$log(o){
return console.log(cljs.core.clj__GT_js.call(null,o));
});
mokepon.tests.core.reset_game = (function mokepon$tests$core$reset_game(){
cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

return mokepon.container.take_chipu_BANG_.call(null);
});
mokepon.tests.core.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.core.make_enemy_attack_ready = (function mokepon$tests$core$make_enemy_attack_ready(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"battling","battling",-129800115),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.core.make_chosen_attack_ready = (function mokepon$tests$core$make_chosen_attack_ready(){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chosen-key","chosen-key",-1773168355).cljs$core$IFn$_invoke$arity$1(mokepon.tests.core.state.call(null)),new cljs.core.Keyword(null,"at","at",1476951349)], null),mokepon.rpg.active_turn_threshold);
});
mokepon.tests.core.set_cash = (function mokepon$tests$core$set_cash(amount){
return cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc,new cljs.core.Keyword(null,"cash","cash",181122222),amount);
});
mokepon.tests.core.has_play_by_play = (function mokepon$tests$core$has_play_by_play(message){
try{var values__23053__auto__ = (function (){var x__19298__auto__ = cljs.core.PersistentHashSet.fromArray([message], true);
return cljs.core._conj.call(null,(function (){var x__19298__auto____$1 = new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732).cljs$core$IFn$_invoke$arity$1(mokepon.tests.core.state.call(null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto____$1);
})(),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core.some,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.some,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"some","some",-310548046,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e23760){var t__23091__auto__ = e23760;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"message","message",1234475525,null),null], null), null),cljs.core.list(new cljs.core.Keyword(null,"play-by-play","play-by-play",-670955732),cljs.core.list(new cljs.core.Symbol(null,"state","state",-348086572,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
mokepon.tests.core.get_state = (function mokepon$tests$core$get_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23762 = arguments.length;
var i__19540__auto___23763 = (0);
while(true){
if((i__19540__auto___23763 < len__19539__auto___23762)){
args__19546__auto__.push((arguments[i__19540__auto___23763]));

var G__23764 = (i__19540__auto___23763 + (1));
i__19540__auto___23763 = G__23764;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.get_in.call(null,mokepon.tests.core.state.call(null),path);
});

mokepon.tests.core.get_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.core.get_state.cljs$lang$applyTo = (function (seq23761){
return mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23761));
});

mokepon.tests.core.log_state = (function mokepon$tests$core$log_state(var_args){
var args__19546__auto__ = [];
var len__19539__auto___23766 = arguments.length;
var i__19540__auto___23767 = (0);
while(true){
if((i__19540__auto___23767 < len__19539__auto___23766)){
args__19546__auto__.push((arguments[i__19540__auto___23767]));

var G__23768 = (i__19540__auto___23767 + (1));
i__19540__auto___23767 = G__23768;
continue;
} else {
}
break;
}

var argseq__19547__auto__ = ((((0) < args__19546__auto__.length))?(new cljs.core.IndexedSeq(args__19546__auto__.slice((0)),(0),null)):null);
return mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic(argseq__19547__auto__);
});

mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return mokepon.tests.core.log.call(null,cljs.core.apply.call(null,mokepon.tests.core.get_state,path));
});

mokepon.tests.core.log_state.cljs$lang$maxFixedArity = (0);

mokepon.tests.core.log_state.cljs$lang$applyTo = (function (seq23765){
return mokepon.tests.core.log_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23765));
});

mokepon.tests.core.run_tests = (function mokepon$tests$core$run_tests(){
console.clear();

return cljs.test.run_block.call(null,(function (){var env23771 = cljs.test.empty_env.call(null);
var summary23772 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23771,summary23772){
return (function (){
cljs.test.set_env_BANG_.call(null,env23771);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests.core","mokepon.tests.core",-1892137121,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__23157__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__23157__auto__,env23771,summary23772){
return (function (){
if((env__23157__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"mokepon.tests.core","mokepon.tests.core",-1892137121,null),mokepon.tests.core.cljs_test_each_fixtures);
});})(env__23157__auto__,env23771,summary23772))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__23157__auto__,env23771,summary23772){
return (function (){
if((env__23157__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__23157__auto__,env23771,summary23772))
], null));
})());
});})(env23771,summary23772))
,((function (env23771,summary23772){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mokepon.tests.core","mokepon.tests.core",-1892137121,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env23771,summary23772))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23771,summary23772){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary23772,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary23772),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env23771,summary23772))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23771,summary23772){
return (function (){
cljs.test.set_env_BANG_.call(null,env23771);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary23772));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary23772),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env23771,summary23772))
], null));
})());
});

//# sourceMappingURL=core.js.map