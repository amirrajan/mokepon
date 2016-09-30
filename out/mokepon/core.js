// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.core');
goog.require('cljs.core');
goog.require('mokepon.tests.shop');
goog.require('mokepon.views.shop');
goog.require('mokepon.tests.affinities');
goog.require('mokepon.tests.messages');
goog.require('mokepon.container');
goog.require('mokepon.tests.mokedex');
goog.require('mokepon.tests.battle');
goog.require('mokepon.views.battle');
goog.require('mokepon.views.mokedex');
goog.require('mokepon.tests.home');
goog.require('mokepon.tests.core');
mokepon.core.main_BANG_ = (function mokepon$core$main_BANG_(){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.current_app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"test","test",577538877));

mokepon.tests.core.run_tests.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.current_app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"game","game",-441523833));

return mokepon.container.render_BANG_.call(null);
});
mokepon.core.main_BANG_.call(null);

//# sourceMappingURL=core.js.map