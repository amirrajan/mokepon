// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.messages');
goog.require('cljs.core');
goog.require('mokepon.monsters');
goog.require('mokepon.container');
goog.require('mokepon.shop');
goog.require('mokepon.rpg');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
mokepon.tests.messages.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.messages.first_message_from_mom = (function mokepon$tests$messages$first_message_from_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_message_from_mom.cljs$lang$var);
});
mokepon.tests.messages.first_message_from_mom.cljs$lang$test = (function (){

var first_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(0));
try{var values__23053__auto___26227 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),x__19298__auto__);
})();
var result__23054__auto___26228 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26227);
if(cljs.core.truth_(result__23054__auto___26228)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26227),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26227);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26224){var t__23091__auto___26229 = e26224;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26229,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26230 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__23054__auto___26231 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26230);
if(cljs.core.truth_(result__23054__auto___26231)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26230),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26230);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26225){var t__23091__auto___26232 = e26225;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26232,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26226){var t__23091__auto__ = e26226;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},new cljs.core.Symbol("mokepon.tests.messages","first-message-from-mom","mokepon.tests.messages/first-message-from-mom",-361860598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-message-from-mom","first-message-from-mom",-1944264826,null),"src/mokepon/tests/messages.cljs",32,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__23053__auto___26238 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__23054__auto___26239 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26238);
if(cljs.core.truth_(result__23054__auto___26239)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26238),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26238);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26233){var t__23091__auto___26240 = e26233;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26240,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

var angry_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(2));
try{var values__23053__auto___26241 = (function (){var x__19298__auto__ = angry_message.call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),x__19298__auto__);
})();
var result__23054__auto___26242 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26241);
if(cljs.core.truth_(result__23054__auto___26242)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26241),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26241);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26234){var t__23091__auto___26243 = e26234;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26243,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26244 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___26245 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26244);
if(cljs.core.truth_(result__23054__auto___26245)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26244),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26244);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26235){var t__23091__auto___26246 = e26235;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26246,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26247 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__23054__auto___26248 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26247);
if(cljs.core.truth_(result__23054__auto___26248)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26247),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26247);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26236){var t__23091__auto___26249 = e26236;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26249,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26237){var t__23091__auto__ = e26237;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},new cljs.core.Symbol("mokepon.tests.messages","losing-chipu-causes-angry-mom","mokepon.tests.messages/losing-chipu-causes-angry-mom",632628653,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"losing-chipu-causes-angry-mom","losing-chipu-causes-angry-mom",-2019309295,null),"src/mokepon/tests/messages.cljs",39,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
mokepon.tests.messages.checking_messages_marks_them_as_seen = (function mokepon$tests$messages$checking_messages_marks_them_as_seen(){
return cljs.test.test_var.call(null,mokepon$tests$messages$checking_messages_marks_them_as_seen.cljs$lang$var);
});
mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test = (function (){
try{var values__23053__auto___26253 = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__23054__auto___26254 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26253);
if(cljs.core.truth_(result__23054__auto___26254)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26253),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26253);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26250){var t__23091__auto___26255 = e26250;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26255,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.view_messages_BANG_.call(null);

try{var values__23053__auto___26256 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"location","location",1815599388));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"messages","messages",345434482)),x__19298__auto__);
})();
var result__23054__auto___26257 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26256);
if(cljs.core.truth_(result__23054__auto___26257)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26256),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26256);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26251){var t__23091__auto___26258 = e26251;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26258,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26252){var t__23091__auto__ = e26252;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.checking_messages_marks_them_as_seen;},new cljs.core.Symbol("mokepon.tests.messages","checking-messages-marks-them-as-seen","mokepon.tests.messages/checking-messages-marks-them-as-seen",-1549953241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"checking-messages-marks-them-as-seen","checking-messages-marks-them-as-seen",-982637645,null),"src/mokepon/tests/messages.cljs",46,1,63,63,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.checking_messages_marks_them_as_seen)?mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test:null)]));
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget = (function mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget.cljs$lang$var);
});
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

var midget_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(1));
try{var values__23053__auto___26263 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hey kid. Your mom told me that I can sell stuff to you. Come by."),x__19298__auto__);
})();
var result__23054__auto___26264 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26263);
if(cljs.core.truth_(result__23054__auto___26264)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26263),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26263);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26259){var t__23091__auto___26265 = e26259;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26265,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26266 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___26267 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26266);
if(cljs.core.truth_(result__23054__auto___26267)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26266),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26266);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26260){var t__23091__auto___26268 = e26260;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26268,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26269 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"midget","midget",2073970809)),x__19298__auto__);
})();
var result__23054__auto___26270 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26269);
if(cljs.core.truth_(result__23054__auto___26270)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26269),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26269);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26261){var t__23091__auto___26271 = e26261;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26271,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26262){var t__23091__auto__ = e26262;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget;},new cljs.core.Symbol("mokepon.tests.messages","first-chipu-from-mom-yields-message-from-midget","mokepon.tests.messages/first-chipu-from-mom-yields-message-from-midget",401439979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-chipu-from-mom-yields-message-from-midget","first-chipu-from-mom-yields-message-from-midget",-1310795929,null),"src/mokepon/tests/messages.cljs",57,1,73,73,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget)?mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test:null)]));
mokepon.tests.messages.shop_owner_texts_of_new_items = (function mokepon$tests$messages$shop_owner_texts_of_new_items(){
return cljs.test.test_var.call(null,mokepon$tests$messages$shop_owner_texts_of_new_items.cljs$lang$var);
});
mokepon.tests.messages.shop_owner_texts_of_new_items.cljs$lang$test = (function (){
var previous_shop_items = mokepon.shop.available_shop_items.call(null,cljs.core.deref.call(null,mokepon.container.app_state.call(null)));
cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.mark_captured_in_mokedex,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"deogude","deogude",1813060744),new cljs.core.Keyword(null,"tirsqule","tirsqule",-1967739200)], null));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.text_for_unlocked_items,previous_shop_items,mokepon.shop.shop_items.call(null));

var midget_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(2));
try{var values__23053__auto___26276 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hey kid. I got some new wares for sale. Come by."),x__19298__auto__);
})();
var result__23054__auto___26277 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26276);
if(cljs.core.truth_(result__23054__auto___26277)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. I got some new wares for sale. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26276),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. I got some new wares for sale. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26276);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26272){var t__23091__auto___26278 = e26272;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. I got some new wares for sale. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26278,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26279 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___26280 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26279);
if(cljs.core.truth_(result__23054__auto___26280)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26279),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26279);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26273){var t__23091__auto___26281 = e26273;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26281,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___26282 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"midget","midget",2073970809)),x__19298__auto__);
})();
var result__23054__auto___26283 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___26282);
if(cljs.core.truth_(result__23054__auto___26283)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___26282),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___26282);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e26274){var t__23091__auto___26284 = e26274;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___26284,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto__ = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"seen?","seen?",-1677689856).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__19298__auto__);
})();
var result__23054__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto__);
if(cljs.core.truth_(result__23054__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__23054__auto__;
}catch (e26275){var t__23091__auto__ = e26275;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.shop_owner_texts_of_new_items.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.shop_owner_texts_of_new_items;},new cljs.core.Symbol("mokepon.tests.messages","shop-owner-texts-of-new-items","mokepon.tests.messages/shop-owner-texts-of-new-items",-426448947,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"shop-owner-texts-of-new-items","shop-owner-texts-of-new-items",-2136490831,null),"src/mokepon/tests/messages.cljs",39,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.shop_owner_texts_of_new_items)?mokepon.tests.messages.shop_owner_texts_of_new_items.cljs$lang$test:null)]));

//# sourceMappingURL=messages.js.map