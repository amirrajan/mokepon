// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.shop');
goog.require('cljs.core');
mokepon.shop.captured_monsters_gt_eq = (function mokepon$shop$captured_monsters_gt_eq(monster_count){
return (function (game_state){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$captured,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters], null)))) >= monster_count);
});
});
mokepon.shop.shop_items = (function mokepon$shop$shop_items(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$mokebox,cljs.core.cst$kw$name,"Mok\u00E9box",cljs.core.cst$kw$cost,(10),cljs.core.cst$kw$description,"Catches Mok\u00E9pon.",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$candy,cljs.core.cst$kw$name,"Candy",cljs.core.cst$kw$cost,(5),cljs.core.cst$kw$description,"Heals Mok\u00E9pon.",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$battery,cljs.core.cst$kw$name,"Battery",cljs.core.cst$kw$description,"Evolves electric Mok\u00E9pon.",cljs.core.cst$kw$cost,(25),cljs.core.cst$kw$available_DASH_if,mokepon.shop.captured_monsters_gt_eq((4))], null)], null);
});
mokepon.shop.shop_items_lookup = (function mokepon$shop$shop_items_lookup(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item),item], null);
}),mokepon.shop.shop_items()));
});
