!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){LeafletWidget.methods.addTargomoPolygons=function(e,t,n,r,o){(async function(){const i=new tgm.TargomoClient("britishisles",e);r={travelType:r.travelType,travelEdgeWeights:r.travelTimes,strokeWidth:r.strokeWidth,inverse:r.inverse,edgeWeight:"time",srid:4326,serializer:"json"};const l=new tgm.leaflet.TgmLeafletPolygonOverlay({strokeWidth:r.strokeWidth,inverse:r.inverse});l.addTo(this);var s=[{id:0,lat:t,lng:n}];const a=await i.polygons.fetch(s,r),u=a.getMaxBounds();l.setData(a),o&&this.fitBounds(new L.latLngBounds(u.northEast,u.southWest))}).call(this)}}]);
//# sourceMappingURL=targomo-leaflet-bindings.js.map