// Compiled by ClojureScript 1.9.76 {}
goog.provide('mokepon.core');
goog.require('cljs.core');
goog.require('mokepon.tests');
goog.require('mokepon.container');
mokepon.core.main_BANG_ = (function mokepon$core$main_BANG_(){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.current_app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"test","test",577538877));

mokepon.tests.run_tests.call(null);

cljs.core.swap_BANG_.call(null,mokepon.container.current_app_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"game","game",-441523833));

return mokepon.container.render_BANG_.call(null);
});
mokepon.core.main_BANG_.call(null);

//# sourceMappingURL=core.js.map