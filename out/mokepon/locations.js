// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.locations');
goog.require('cljs.core');
goog.require('mokepon.monsters');
mokepon.locations.location_monsters = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,mokepon.monsters.sulbabaur,cljs.core.cst$kw$canyon,mokepon.monsters.deogude,cljs.core.cst$kw$pool,mokepon.monsters.tirsqule], null);
mokepon.locations.captured_monsters_gt_eq = (function mokepon$locations$captured_monsters_gt_eq(monster_count){
return (function (game_state){
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$captured,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mokedex,cljs.core.cst$kw$monsters], null)))) >= monster_count);
});
});
mokepon.locations.location_info = (function mokepon$locations$location_info(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$phone,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,"Your smart phone bulges from your skinny jeans.",cljs.core.cst$kw$action,"Bust out phone.",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),cljs.core.cst$kw$home,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,"Your mother's home stands in the distance. Smoke bellows from the chimney.",cljs.core.cst$kw$action,"Go home.",cljs.core.cst$kw$available_DASH_if,(function (_){
return true;
})], null),cljs.core.cst$kw$shop,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"There is a Mok\u00E9pon shop with a half working neon sign flashing. Looks kinda shady.",cljs.core.cst$kw$action,"Go shop.",cljs.core.cst$kw$awesome_DASH_text,"Hodor",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$canyon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"There is a rock face jutting out. It looks freaking scary.",cljs.core.cst$kw$action,"Go to canyon.",cljs.core.cst$kw$awesome_DASH_text,"You are currently chillin' like a villian in the canyon.",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$forest,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"There is a line of trees off in the distance.",cljs.core.cst$kw$action,"Go to forest.",cljs.core.cst$kw$awesome_DASH_text,"You are currently chillin' like a villian in the forest.",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null),cljs.core.cst$kw$pool,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$description,"The neighborhood pool hasn't been cleaned in a while. Smells like poop.",cljs.core.cst$kw$action,"Go to pool.",cljs.core.cst$kw$awesome_DASH_text,"You are currently chillin' like a villian in the pool. Gross.",cljs.core.cst$kw$available_DASH_if,mokepon.locations.captured_monsters_gt_eq((1))], null)], null);
});
