// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mokepon.mokedex');
goog.require('mokepon.battle');
goog.require('mokepon.elements');
mokepon.components.team_view = (function mokepon$components$team_view(team,header,empty_text){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,header], null),((cljs.core.empty_QMARK_(team))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,empty_text], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$team_view_$_iter__24094(s__24095){
return (new cljs.core.LazySeq(null,(function (){
var s__24095__$1 = s__24095;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24095__$1);
if(temp__4657__auto__){
var s__24095__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24095__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__24095__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__24097 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__24096 = (0);
while(true){
if((i__24096 < size__19243__auto__)){
var vec__24106 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__24096);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(1),null);
cljs.core.chunk_append(b__24097,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null));

var G__24112 = (i__24096 + (1));
i__24096 = G__24112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24097),mokepon$components$team_view_$_iter__24094(cljs.core.chunk_rest(s__24095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24097),null);
}
} else {
var vec__24109 = cljs.core.first(s__24095__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24109,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null),[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" (hp: "),cljs.core.str(cljs.core.cst$kw$hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$max_DASH_hp.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(")")].join('')], null),mokepon$components$team_view_$_iter__24094(cljs.core.rest(s__24095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(team);
})()], null)], 0));
});
mokepon.components.ask_mommy_view = (function mokepon$components$ask_mommy_view(team,team_at_home,take_chipu_handler){
if((cljs.core.empty_QMARK_(team)) && (cljs.core.empty_QMARK_(team_at_home))){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Your mom feels pity for your sorry ass."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"From her extended arm, a Chipu whimpers, hanging by the scruff of its neck."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\"Make something of yourself, you worthless millenial!\" she says to you."], null),mokepon.elements.a("Take Chipu.",take_chipu_handler)], 0));
} else {
return null;
}
});
mokepon.components.adventure_view = (function mokepon$components$adventure_view(description,action_text,key,go_to_location_handler){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null),mokepon.elements.a(action_text,(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(key) : go_to_location_handler.call(null,key));
}))], 0));
});
mokepon.components.play_by_play_view = (function mokepon$components$play_by_play_view(play_by_play){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__19244__auto__ = (function mokepon$components$play_by_play_view_$_iter__24119(s__24120){
return (new cljs.core.LazySeq(null,(function (){
var s__24120__$1 = s__24120;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24120__$1);
if(temp__4657__auto__){
var s__24120__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24120__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__24120__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__24122 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__24121 = (0);
while(true){
if((i__24121 < size__19243__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__24121);
cljs.core.chunk_append(b__24122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null));

var G__24125 = (i__24121 + (1));
i__24121 = G__24125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24122),mokepon$components$play_by_play_view_$_iter__24119(cljs.core.chunk_rest(s__24120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24122),null);
}
} else {
var i = cljs.core.first(s__24120__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,i], null),mokepon$components$play_by_play_view_$_iter__24119(cljs.core.rest(s__24120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.reverse(play_by_play)));
})()], 0));
});
mokepon.components.location_view = (function mokepon$components$location_view(location_description,team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler__$1,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler){
if((battling == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,location_description], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.empty_QMARK_(team))?mokepon.elements.disabled_a("Go look for some trouble."):mokepon.elements.a("Go look for some trouble.",find_trouble_handler)),mokepon.elements.a("Head back.",(function (){
return (go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler__$1.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
} else {
return mokepon.battle.view(team,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,active_turn_threshold,attack_handler,go_to_location_handler__$1,items,throw_mokebox_handler,choose_monster_handler,candy_handler);
}
});
mokepon.components.home_view = (function mokepon$components$home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You are being worthless at home."], null)], 0)),mokepon.components.ask_mommy_view(team,team_at_home,take_chipu_handler),mokepon.components.team_view(team_at_home,"Mok\u00E9pon chillin' at the crib:","None."),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Sleep. Cause you're a lazy worthless millenial.",sleep_at_home_handler),mokepon.elements.a("Head back.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.messages_view = (function mokepon$components$messages_view(go_to_location_handler){
var messages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$mom,cljs.core.cst$kw$name,"Mom"], null),cljs.core.cst$kw$messages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$days_DASH_ago,(0),cljs.core.cst$kw$text,"Where are you? Have you found a job yet?!"], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Messages"], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Messages from Mom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$messages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Where are you? Have you found a job yet?!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one day ago"], null)], null)], null)], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Back",((function (messages){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phone) : go_to_location_handler.call(null,cljs.core.cst$kw$phone));
});})(messages))
)], 0))], null);
});
mokepon.components.phone_view = (function mokepon$components$phone_view(go_to_location_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The soft glow of your phone, oh so nice."], null)], 0)),mokepon.components.adventure_view("There is an app on your phone called Mokedex.","Open Mokedex.",cljs.core.cst$kw$mokedex,go_to_location_handler),mokepon.components.adventure_view("Le Messages.","Open Messages. 1 new text message(s).",cljs.core.cst$kw$messages,go_to_location_handler),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mokepon.elements.a("Put phone away.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0))], null);
});
mokepon.components.store_view = (function mokepon$components$store_view(store_items,buy_item_handler,go_to_location_handler){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("You walk into the store. A midget stands behind the counter on a stool. "),cljs.core.str("He occasionally props himself up with locked arms and dangles his feet in the air.")].join('')], null),(function (){var iter__19244__auto__ = (function mokepon$components$store_view_$_iter__24136(s__24137){
return (new cljs.core.LazySeq(null,(function (){
var s__24137__$1 = s__24137;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24137__$1);
if(temp__4657__auto__){
var s__24137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24137__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__24137__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__24139 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__24138 = (0);
while(true){
if((i__24138 < size__19243__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__24138);
cljs.core.chunk_append(b__24139,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,((function (i__24138,item,c__19242__auto__,size__19243__auto__,b__24139,s__24137__$2,temp__4657__auto__){
return (function (){
var G__24144 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (buy_item_handler.cljs$core$IFn$_invoke$arity$1 ? buy_item_handler.cljs$core$IFn$_invoke$arity$1(G__24144) : buy_item_handler.call(null,G__24144));
});})(i__24138,item,c__19242__auto__,size__19243__auto__,b__24139,s__24137__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__24146 = (i__24138 + (1));
i__24138 = G__24146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24139),mokepon$components$store_view_$_iter__24136(cljs.core.chunk_rest(s__24137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24139),null);
}
} else {
var item = cljs.core.first(s__24137__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$href,"javascript:;",cljs.core.cst$kw$on_DASH_click,((function (item,s__24137__$2,temp__4657__auto__){
return (function (){
var G__24145 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (buy_item_handler.cljs$core$IFn$_invoke$arity$1 ? buy_item_handler.cljs$core$IFn$_invoke$arity$1(G__24145) : buy_item_handler.call(null,G__24145));
});})(item,s__24137__$2,temp__4657__auto__))
], null),[cljs.core.str("Buy "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" ("),cljs.core.str(cljs.core.cst$kw$cost.cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" \u0191iddy)")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$margin_DASH_bottom,"10px",cljs.core.cst$kw$font_DASH_size,"smaller"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item)], null)], null),mokepon$components$store_view_$_iter__24136(cljs.core.rest(s__24137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(store_items);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),mokepon.elements.a("Head back.",(function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
}))], 0));
});
mokepon.components.outside_view = (function mokepon$components$outside_view(location,team,go_to_location_handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You are being worthless outside."], null)], 0)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.adventure_view("Your smart phone bulges from your skinny jeans.","Bust out phone. 1 new notification(s).",cljs.core.cst$kw$phone,go_to_location_handler),mokepon.components.adventure_view("Your mother's home stands in the distance. Smoke bellows from the chimney.","Go home.",cljs.core.cst$kw$home,go_to_location_handler),mokepon.components.adventure_view("There is a Mok\u00E9pon store with a half working neon sign flashing. Looks kinda shady.","Go shop.",cljs.core.cst$kw$store,go_to_location_handler),mokepon.components.adventure_view("There is a rock face jutting out. It looks freaking scary.","Go be awesome in the canyon.",cljs.core.cst$kw$canyon,go_to_location_handler),mokepon.components.adventure_view("There is a line of trees off in the distance.","Go be awesome in the forest.",cljs.core.cst$kw$forest,go_to_location_handler),mokepon.components.adventure_view("The neighborhood pool hasn't been cleaned in a while. Smells like poop.","Go be awesome in the pool.",cljs.core.cst$kw$pool,go_to_location_handler)], null)], null);
});
mokepon.components.title_view = (function mokepon$components$title_view(){
return mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Mok\u00E9pon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"tag-line"], null),"Catching 'em all just got real, yo"], null)], 0));
});
mokepon.components.status_view = (function mokepon$components$status_view(cash,items,store_items_lookup,team,play_by_play){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.team_view(team,"Your posse:","No one. Cause you're worthless."),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cash: ",cash," \u0191iddy"], 0)),mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Items:"], null),((cljs.core.empty_QMARK_(items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"None. Cause you're worthless."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__19244__auto__ = (function mokepon$components$status_view_$_iter__24165(s__24166){
return (new cljs.core.LazySeq(null,(function (){
var s__24166__$1 = s__24166;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__24166__$1);
if(temp__4657__auto__){
var s__24166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24166__$2)){
var c__19242__auto__ = cljs.core.chunk_first(s__24166__$2);
var size__19243__auto__ = cljs.core.count(c__19242__auto__);
var b__24168 = cljs.core.chunk_buffer(size__19243__auto__);
if((function (){var i__24167 = (0);
while(true){
if((i__24167 < size__19243__auto__)){
var vec__24177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__19242__auto__,i__24167);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24177,(1),null);
cljs.core.chunk_append(b__24168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(store_items_lookup) : k.call(null,store_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null));

var G__24183 = (i__24167 + (1));
i__24167 = G__24183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24168),mokepon$components$status_view_$_iter__24165(cljs.core.chunk_rest(s__24166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24168),null);
}
} else {
var vec__24180 = cljs.core.first(s__24166__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24180,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(store_items_lookup) : k.call(null,store_items_lookup)))),cljs.core.str(": "),cljs.core.str(v)].join('')], null),mokepon$components$status_view_$_iter__24165(cljs.core.rest(s__24166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19244__auto__(items);
})()], null))], 0)),mokepon.components.play_by_play_view(play_by_play)], null);
});
mokepon.components.rpg_view = (function mokepon$components$rpg_view(game_state,take_chipu_handler,go_to_location_handler,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,attack_handler,sleep_at_home_handler,active_turn_threshold,store_items,store_items_lookup,buy_item_handler,throw_mokebox_handler,choose_monster_handler,candy_handler){
var map__24186 = game_state;
var map__24186__$1 = ((((!((map__24186 == null)))?((((map__24186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24186):map__24186);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$location);
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$team);
var team_at_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$team_DASH_at_DASH_home);
var battling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$battling);
var cash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$cash);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$items);
var play_by_play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$play_DASH_by_DASH_play);
var mokedex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24186__$1,cljs.core.cst$kw$mokedex);
var location_awesome_text = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$forest,"You are currently chillin' like a villian in the forest.",cljs.core.cst$kw$canyon,"You are currently chillin' like a villian in the canyon.",cljs.core.cst$kw$pool,"You are currently chillin' like a villian in the pool. Gross."], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,mokepon.components.title_view(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$outside))?mokepon.components.outside_view(location,team,go_to_location_handler):(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([location], true),cljs.core.keys(location_awesome_text)))?mokepon.components.location_view((location.cljs$core$IFn$_invoke$arity$1 ? location.cljs$core$IFn$_invoke$arity$1(location_awesome_text) : location.call(null,location_awesome_text)),team,find_trouble_handler,choosable_monsters,chosen,chosen_can_attack_QMARK_,battle_over_QMARK_,battling,go_to_location_handler,attack_handler,go_to_location_handler,active_turn_threshold,items,throw_mokebox_handler,choose_monster_handler,candy_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$home))?mokepon.components.home_view(team,team_at_home,take_chipu_handler,go_to_location_handler,sleep_at_home_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$store))?mokepon.components.store_view(store_items,buy_item_handler,go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$phone))?mokepon.components.phone_view(go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$messages))?mokepon.components.messages_view(go_to_location_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,cljs.core.cst$kw$mokedex))?mokepon.mokedex.view(go_to_location_handler,mokedex):mokepon.elements.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Location "),cljs.core.str(location),cljs.core.str(" not handled.")].join(''),mokepon.elements.a("Go back.",((function (map__24186,map__24186__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,location_awesome_text){
return (function (){
return (go_to_location_handler.cljs$core$IFn$_invoke$arity$1 ? go_to_location_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$outside) : go_to_location_handler.call(null,cljs.core.cst$kw$outside));
});})(map__24186,map__24186__$1,location,team,team_at_home,battling,cash,items,play_by_play,mokedex,location_awesome_text))
)], 0))
))))))),mokepon.components.status_view(cash,items,store_items_lookup,team,play_by_play)], null);
});
