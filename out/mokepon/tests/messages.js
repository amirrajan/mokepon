// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.tests.messages');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
goog.require('mokepon.monsters');
goog.require('mokepon.rpg');
goog.require('mokepon.container');
mokepon.tests.messages.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),mokepon.tests.core.reset_game], null)], null);
mokepon.tests.messages.first_message_from_mom = (function mokepon$tests$messages$first_message_from_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_message_from_mom.cljs$lang$var);
});
mokepon.tests.messages.first_message_from_mom.cljs$lang$test = (function (){

var first_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(0));
try{var values__23053__auto___23815 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),x__19298__auto__);
})();
var result__23054__auto___23816 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23815);
if(cljs.core.truth_(result__23054__auto___23816)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23815),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23815);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23812){var t__23091__auto___23817 = e23812;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),"Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23817,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23818 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(first_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__23054__auto___23819 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23818);
if(cljs.core.truth_(result__23054__auto___23819)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23818),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23818);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23813){var t__23091__auto___23820 = e23813;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23820,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e23814){var t__23091__auto__ = e23814;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"first-message","first-message",949449480,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_message_from_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_message_from_mom;},new cljs.core.Symbol("mokepon.tests.messages","first-message-from-mom","mokepon.tests.messages/first-message-from-mom",-361860598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-message-from-mom","first-message-from-mom",-1944264826,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",32,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_message_from_mom)?mokepon.tests.messages.first_message_from_mom.cljs$lang$test:null)]));
mokepon.tests.messages.losing_chipu_causes_angry_mom = (function mokepon$tests$messages$losing_chipu_causes_angry_mom(){
return cljs.test.test_var.call(null,mokepon$tests$messages$losing_chipu_causes_angry_mom.cljs$lang$var);
});
mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.remove_dead_team_members_BANG_.call(null);

try{var values__23053__auto___23826 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__19298__auto__);
})();
var result__23054__auto___23827 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23826);
if(cljs.core.truth_(result__23054__auto___23827)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23826),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23826);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23821){var t__23091__auto___23828 = e23821;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"messages","messages",345434482),(2),new cljs.core.Keyword(null,"text","text",-1790561697)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23828,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014)], null),mokepon.monsters.sulbabaur);

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"sulbabaur","sulbabaur",-1110850014),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

cljs.core.swap_BANG_.call(null,mokepon.container.app_state.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"chipu","chipu",516526769),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),(0));

mokepon.container.remove_dead_team_members_BANG_.call(null);

var angry_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(2));
try{var values__23053__auto___23829 = (function (){var x__19298__auto__ = angry_message.call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),x__19298__auto__);
})();
var result__23054__auto___23830 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23829);
if(cljs.core.truth_(result__23054__auto___23830)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23829),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23829);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23822){var t__23091__auto___23831 = e23822;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null),new cljs.core.Keyword(null,"text","text",-1790561697)),"Did your Chipu get killed? Worthless. Come by and I'll give you another one."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23831,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23832 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___23833 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23832);
if(cljs.core.truth_(result__23054__auto___23833)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23832),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23832);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23823){var t__23091__auto___23834 = e23823;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23834,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23835 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(angry_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mom","mom",-1320393848)),x__19298__auto__);
})();
var result__23054__auto___23836 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23835);
if(cljs.core.truth_(result__23054__auto___23836)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23835),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23835);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23824){var t__23091__auto___23837 = e23824;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),new cljs.core.Keyword(null,"mom","mom",-1320393848)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23837,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e23825){var t__23091__auto__ = e23825;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"angry-message","angry-message",-485865542,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.losing_chipu_causes_angry_mom;},new cljs.core.Symbol("mokepon.tests.messages","losing-chipu-causes-angry-mom","mokepon.tests.messages/losing-chipu-causes-angry-mom",632628653,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"losing-chipu-causes-angry-mom","losing-chipu-causes-angry-mom",-2019309295,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",39,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.losing_chipu_causes_angry_mom)?mokepon.tests.messages.losing_chipu_causes_angry_mom.cljs$lang$test:null)]));
mokepon.tests.messages.checking_messages_marks_them_as_seen = (function mokepon$tests$messages$checking_messages_marks_them_as_seen(){
return cljs.test.test_var.call(null,mokepon$tests$messages$checking_messages_marks_them_as_seen.cljs$lang$var);
});
mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test = (function (){
try{var values__23053__auto___23841 = (function (){var x__19298__auto__ = mokepon.container.app_state_new_message_count.call(null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__19298__auto__);
})();
var result__23054__auto___23842 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23841);
if(cljs.core.truth_(result__23054__auto___23842)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23841),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23841);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23838){var t__23091__auto___23843 = e23838;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23843,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
mokepon.container.view_messages_BANG_.call(null);

try{var values__23053__auto___23844 = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"location","location",1815599388));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"messages","messages",345434482)),x__19298__auto__);
})();
var result__23054__auto___23845 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23844);
if(cljs.core.truth_(result__23054__auto___23845)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23844),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23844);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23839){var t__23091__auto___23846 = e23839;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23846,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e23840){var t__23091__auto__ = e23840;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("tnr","app-state-new-message-count","tnr/app-state-new-message-count",1238876994,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.checking_messages_marks_them_as_seen;},new cljs.core.Symbol("mokepon.tests.messages","checking-messages-marks-them-as-seen","mokepon.tests.messages/checking-messages-marks-them-as-seen",-1549953241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"checking-messages-marks-them-as-seen","checking-messages-marks-them-as-seen",-982637645,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",46,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.checking_messages_marks_them_as_seen)?mokepon.tests.messages.checking_messages_marks_them_as_seen.cljs$lang$test:null)]));
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget = (function mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget(){
return cljs.test.test_var.call(null,mokepon$tests$messages$first_chipu_from_mom_yields_message_from_midget.cljs$lang$var);
});
mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test = (function (){

cljs.core.reset_BANG_.call(null,mokepon.container.app_state.call(null),mokepon.rpg.new_game.call(null));

mokepon.container.take_chipu_BANG_.call(null);

var midget_message = mokepon.tests.core.get_state.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),(1));
try{var values__23053__auto___23851 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hey kid. Your mom told me that I can sell stuff to you. Come by."),x__19298__auto__);
})();
var result__23054__auto___23852 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23851);
if(cljs.core.truth_(result__23054__auto___23852)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23851),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23851);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23847){var t__23091__auto___23853 = e23847;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),"Hey kid. Your mom told me that I can sell stuff to you. Come by."),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23853,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23854 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),x__19298__auto__);
})();
var result__23054__auto___23855 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23854);
if(cljs.core.truth_(result__23054__auto___23855)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23854),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23854);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23848){var t__23091__auto___23856 = e23848;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23856,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23053__auto___23857 = (function (){var x__19298__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(midget_message);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"midget","midget",2073970809)),x__19298__auto__);
})();
var result__23054__auto___23858 = cljs.core.apply.call(null,cljs.core._EQ_,values__23053__auto___23857);
if(cljs.core.truth_(result__23054__auto___23858)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23053__auto___23857),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__19298__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23053__auto___23857);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19298__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23849){var t__23091__auto___23859 = e23849;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),new cljs.core.Keyword(null,"midget","midget",2073970809)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto___23859,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e23850){var t__23091__auto__ = e23850;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Symbol(null,"midget-message","midget-message",-1480251734,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__23091__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget;},new cljs.core.Symbol("mokepon.tests.messages","first-chipu-from-mom-yields-message-from-midget","mokepon.tests.messages/first-chipu-from-mom-yields-message-from-midget",401439979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mokepon.tests.messages","mokepon.tests.messages",1834786765,null),new cljs.core.Symbol(null,"first-chipu-from-mom-yields-message-from-midget","first-chipu-from-mom-yields-message-from-midget",-1310795929,null),"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/messages.cljs",57,1,71,71,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget)?mokepon.tests.messages.first_chipu_from_mom_yields_message_from_midget.cljs$lang$test:null)]));

//# sourceMappingURL=messages.js.map