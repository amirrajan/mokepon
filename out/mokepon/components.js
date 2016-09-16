// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.views.mokedex');
goog.require('mokepon.views.battle');
goog.require('mokepon.views.shop');
goog.require('mokepon.elements');
mokepon.components.team_view = (function mokepon$components$team_view(team,header,empty_text){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,header], null),((cljs.core.empty_QMARK_(team))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,empty_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__28792__auto__ = (function mokepon$components$team_view_$_iter__69831(s__69832){
return (new cljs.core.LazySeq(null,(function (){
var s__69832__$1 = s__69832;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69832__$1);
if(temp__4657__auto__){
var s__69832__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69832__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__69832__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__69834 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__69833 = (0);
while(true){
if((i__69833 < size__28791__auto__)){
var vec__69843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__69833);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69843,(1),null);
cljs.core.chunk_append(b__69834,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null));

var G__69849 = (i__69833 + (1));
i__69833 = G__69849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69834),mokepon$components$team_view_$_iter__69831(cljs.core.chunk_rest(s__69832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69834),null);
}
} else {
var vec__69846 = cljs.core.first(s__69832__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69846,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null),mokepon$components$team_view_$_iter__69831(cljs.core.rest(s__69832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(team);
})()], null)], 0));
});
mokepon.components.ask_mommy_view = (function mokepon$components$ask_mommy_view(team,team_at_home,take_chipu_handler){
if((cljs.core.empty_QMARK_(team)) && (cljs.core.empty_QMARK_(team_at_home))){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Take Chipu",take_chipu_handler)], 0));
} else {
return null;
}
});
mokepon.components.adventure_view = (function mokepon$components$adventure_view(description,action_text,key,go_to_location_handler){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a([cljs.core.str(action_text)].join(''),(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(key) : go_to_location_handler.call(null,key));
}))], 0));
});
mokepon.components.play_by_play_view = (function mokepon$components$play_by_play_view(play_by_play){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__28792__auto__ = (function mokepon$components$play_by_play_view_$_iter__69856(s__69857){
return (new cljs.core.LazySeq(null,(function (){
var s__69857__$1 = s__69857;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69857__$1);
if(temp__4657__auto__){
var s__69857__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69857__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__69857__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__69859 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__69858 = (0);
while(true){
if((i__69858 < size__28791__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__69858);
cljs.core.chunk_append(b__69859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null));

var G__69862 = (i__69858 + (1));
i__69858 = G__69862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69859),mokepon$components$play_by_play_view_$_iter__69856(cljs.core.chunk_rest(s__69857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69859),null);
}
} else {
var i = cljs.core.first(s__69857__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null),mokepon$components$play_by_play_view_$_iter__69856(cljs.core.rest(s__69857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.reverse(play_by_play)));
})()], 0));
});
mokepon.components.location_view = (function mokepon$components$location_view(location_description,team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler__$1,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
if((battling == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,location_description], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.empty_QMARK_(team))?mokepon.elements.disabled_a("Battle"):mokepon.elements.a("Battle",find_trouble_handler)),mokepon.elements.a("Back",(function (){
return (go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler__$1.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
} else {
return mokepon.views.battle.view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler__$1,items,throw_mokebox_handler,choose_monster_handler,candy_handler);
}
});
mokepon.components.home_view = (function mokepon$components$home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Home"], null)], 0)),mokepon.components.ask_mommy_view(team,team_at_home,take_chipu_handler),mokepon.components.team_view(team_at_home,"Team at home:","None"),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Sleep",sleep_at_home_handler),mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.messages_view = (function mokepon$components$messages_view(messages,go_to_location_handler){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Messages"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Messages from Mom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$messages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Where are you? Have you found a job yet?!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one day ago"], null)], null)], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phone) : go_to_location_handler.call(null,cljs.core.cst$kw$phone));
}))], 0))], null);
});
mokepon.components.phone_view = (function mokepon$components$phone_view(go_to_location_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Phone"], null)], 0)),mokepon.components.adventure_view("","Mok\u00E9dex",cljs.core.cst$kw$mokedex,go_to_location_handler),mokepon.components.adventure_view("","Messages",cljs.core.cst$kw$messages,go_to_location_handler),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.outside_view = (function mokepon$components$outside_view(location,team,go_to_location_handler,location_available_handler,location_info){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Outside"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__28792__auto__ = (function mokepon$components$outside_view_$_iter__69869(s__69870){
return (new cljs.core.LazySeq(null,(function (){
var s__69870__$1 = s__69870;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69870__$1);
if(temp__4657__auto__){
var s__69870__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69870__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__69870__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__69872 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__69871 = (0);
while(true){
if((i__69871 < size__28791__auto__)){
var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__69871);
cljs.core.chunk_append(b__69872,(cljs.core.truth_((location_available_handler.cljs$core$IFn$_invoke$arity$1 ? location_available_handler.cljs$core$IFn$_invoke$arity$1(loc) : location_available_handler.call(null,loc)))?mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler):null));

var G__69875 = (i__69871 + (1));
i__69871 = G__69875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69872),mokepon$components$outside_view_$_iter__69869(cljs.core.chunk_rest(s__69870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69872),null);
}
} else {
var loc = cljs.core.first(s__69870__$2);
return cljs.core.cons((cljs.core.truth_((location_available_handler.cljs$core$IFn$_invoke$arity$1 ? location_available_handler.cljs$core$IFn$_invoke$arity$1(loc) : location_available_handler.call(null,loc)))?mokepon.components.adventure_view(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(location_info) : loc.call(null,location_info))),loc,go_to_location_handler):null),mokepon$components$outside_view_$_iter__69869(cljs.core.rest(s__69870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone,cljs.core.cst$kw$home,cljs.core.cst$kw$shop,cljs.core.cst$kw$canyon,cljs.core.cst$kw$forest,cljs.core.cst$kw$pool], null));
})()], null)], null);
});
mokepon.components.title_view = (function mokepon$components$title_view(){
return null;
});
mokepon.components.status_view = (function mokepon$components$status_view(cash,items,shop_items_lookup,team,play_by_play){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.team_view(team,"Team:","None"),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cash: $",cash], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Items:"], null),((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"None"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__28792__auto__ = (function mokepon$components$status_view_$_iter__69894(s__69895){
return (new cljs.core.LazySeq(null,(function (){
var s__69895__$1 = s__69895;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__69895__$1);
if(temp__4657__auto__){
var s__69895__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69895__$2)){
var c__28790__auto__ = cljs.core.chunk_first(s__69895__$2);
var size__28791__auto__ = cljs.core.count(c__28790__auto__);
var b__69897 = cljs.core.chunk_buffer(size__28791__auto__);
if((function (){var i__69896 = (0);
while(true){
if((i__69896 < size__28791__auto__)){
var vec__69906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__28790__auto__,i__69896);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69906,(1),null);
cljs.core.chunk_append(b__69897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(shop_items_lookup) : k.call(null,shop_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null));

var G__69912 = (i__69896 + (1));
i__69896 = G__69912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69897),mokepon$components$status_view_$_iter__69894(cljs.core.chunk_rest(s__69895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69897),null);
}
} else {
var vec__69909 = cljs.core.first(s__69895__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69909,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(shop_items_lookup) : k.call(null,shop_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null),mokepon$components$status_view_$_iter__69894(cljs.core.rest(s__69895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28792__auto__(items);
})()], null))], 0)),mokepon.components.play_by_play_view(play_by_play)], null);
});
mokepon.components.rpg_view = (function mokepon$components$rpg_view(game_state,take_chipu_handler,go_to_location_handler,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,attack_handler,sleep_at_home_handler,active_turn_threshold,shop_items,shop_items_lookup,buy_item_handler,throw_mokebox_handler,choose_monster_handler,candy_handler,location_available_handler,location_info,shop_item_available_handler){
var map__69915 = game_state;
var map__69915__$1 = ((((!((map__69915 == null)))?((((map__69915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69915):map__69915);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$location);
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$team);
var team_at_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$team_DASH_at_DASH_home);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$battling);
var cash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$cash);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$items);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var mokedex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$mokedex);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,cljs.core.cst$kw$messages);
var top_level_battle_locations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$forest,cljs.core.cst$kw$canyon,cljs.core.cst$kw$pool], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.title_view(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$outside))?mokepon.components.outside_view(location,team,go_to_location_handler,location_available_handler,location_info):(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([location], true),top_level_battle_locations))?mokepon.components.location_view(cljs.core.cst$kw$awesome_DASH_text.cljs$core$IFn$_invoke$arity$1((location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(location_info) : location.call(null,location_info))),team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$home))?mokepon.components.home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$shop))?mokepon.views.shop.view(shop_items,buy_item_handler,go_to_location_handler,shop_item_available_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$phone))?mokepon.components.phone_view(go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$messages))?mokepon.components.messages_view(messages,go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$mokedex))?mokepon.views.mokedex.view(go_to_location_handler,mokedex):mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.elements.a("Go back.",((function (map__69915,map__69915__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
});})(map__69915,map__69915__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,messages,top_level_battle_locations))
)], 0))
))))))),mokepon.components.status_view(cash,items,shop_items_lookup,team,play_by_play)], null);
});
