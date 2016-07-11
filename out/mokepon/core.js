// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('mokepon.core');
goog.require('cljs.core');
goog.require('mokepon.tests');
goog.require('mokepon.container');
mokepon.core.main_BANG_ = (function mokepon$core$main_BANG_(){
cljs.core.enable_console_print_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.current_app_state,cljs.core.assoc,cljs.core.cst$kw$value,cljs.core.cst$kw$test);

mokepon.tests.run_tests();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mokepon.container.current_app_state,cljs.core.assoc,cljs.core.cst$kw$value,cljs.core.cst$kw$game);

return mokepon.container.render_BANG_();
});
mokepon.core.main_BANG_();
