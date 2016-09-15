// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.tests.shop');
goog.require('cljs.core');
goog.require('mokepon.monsters');
goog.require('mokepon.container');
goog.require('mokepon.shop');
goog.require('mokepon.rpg');
goog.require('cljs.test');
goog.require('mokepon.tests.core');
mokepon.tests.shop.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,mokepon.tests.core.reset_game], null)], null);
mokepon.tests.shop.purchasing_item = (function mokepon$tests$shop$purchasing_item(){
return cljs.test.test_var(mokepon$tests$shop$purchasing_item.cljs$lang$var);
});
mokepon.tests.shop.purchasing_item.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((10));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.tests.core.has_play_by_play([cljs.core.str("You take the Mok\u00E9box "),cljs.core.str("from the midget's saggy, squishy hand. "),cljs.core.str("He smiles and gives you a tip of his top hat.")].join(''));

try{var values__19693__auto___25406 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),x__19298__auto__);
})();
var result__19694__auto___25407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19693__auto___25406);
if(cljs.core.truth_(result__19694__auto___25407)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19693__auto___25406),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19693__auto___25406);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25404){var t__19731__auto___25408 = e25404;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox),(1)),cljs.core.cst$kw$actual,t__19731__auto___25408,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25405){var t__19731__auto__ = e25405;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.shop.purchasing_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.shop.purchasing_item;},cljs.core.cst$sym$mokepon$tests$shop_SLASH_purchasing_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$shop,cljs.core.cst$sym$purchasing_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/shop.cljs",25,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.shop.purchasing_item)?mokepon.tests.shop.purchasing_item.cljs$lang$test:null)]));
mokepon.tests.shop.not_enough_cash_to_buy_item = (function mokepon$tests$shop$not_enough_cash_to_buy_item(){
return cljs.test.test_var(mokepon$tests$shop$not_enough_cash_to_buy_item.cljs$lang$var);
});
mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$test = (function (){

mokepon.tests.core.set_cash((0));

mokepon.container.buy_item_BANG_(cljs.core.cst$kw$mokebox);

mokepon.tests.core.has_play_by_play([cljs.core.str("The midget bitch slaps you saying that you can't afford that. "),cljs.core.str("He wonders if you were taught common core math.")].join(''));

try{var values__19693__auto___25411 = (function (){var x__19298__auto__ = mokepon.container.item_count(cljs.core.cst$kw$mokebox);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto___25412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto___25411);
if(cljs.core.truth_(result__19694__auto___25412)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto___25411),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto___25411);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25409){var t__19731__auto___25413 = e25409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$tnr_SLASH_item_DASH_count,cljs.core.cst$kw$mokebox)),cljs.core.cst$kw$actual,t__19731__auto___25413,cljs.core.cst$kw$message,null], null));
}
try{var values__19693__auto__ = (function (){var x__19298__auto__ = mokepon.tests.core.get_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cash], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})();
var result__19694__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,values__19693__auto__);
if(cljs.core.truth_(result__19694__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.zero_QMARK_,values__19693__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__19298__auto__ = cljs.core.cons(cljs.core.cst$sym$zero_QMARK_,values__19693__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__19298__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19694__auto__;
}catch (e25410){var t__19731__auto__ = e25410;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$get_DASH_state,cljs.core.cst$kw$cash)),cljs.core.cst$kw$actual,t__19731__auto__,cljs.core.cst$kw$message,null], null));
}});

mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$var = new cljs.core.Var(function(){return mokepon.tests.shop.not_enough_cash_to_buy_item;},cljs.core.cst$sym$mokepon$tests$shop_SLASH_not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$mokepon$tests$shop,cljs.core.cst$sym$not_DASH_enough_DASH_cash_DASH_to_DASH_buy_DASH_item,"/Users/amiralirajan/Projects/mokepon/src/mokepon/tests/shop.cljs",37,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(mokepon.tests.shop.not_enough_cash_to_buy_item)?mokepon.tests.shop.not_enough_cash_to_buy_item.cljs$lang$test:null)]));