// Compiled by ClojureScript 1.7.189 {}
goog.provide('rente.start');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('rente.client.app');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.swap_BANG_.call(null,rente.client.app.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136)], null),cljs.core.not);
}));
rente.client.app.main.call(null);

//# sourceMappingURL=start.js.map