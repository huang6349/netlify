(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{6:function(t,e){},"oF/0":function(t,e,o){t.exports=o.p+"static/ne_10m_airports.48e7a253.geojson"},"q+D0":function(t,e,o){"use strict";o.r(e);var i=o("q1tI"),r=o("cwYr"),n=o("YKQg"),a=o("yYqN"),c=o("UP1k"),s={latitude:51.47,longitude:.45,zoom:4,bearing:0,pitch:30},u=function(){var t=[new r["a"]({id:"airports",data:o("oF/0"),filled:!0,pointRadiusMinPixels:2,opacity:1,pointRadiusScale:2e3,getRadius:function(t){return 11-t.properties.scalerank},getFillColor:[200,0,80,180],pickable:!0,autoHighlight:!0}),new n["a"]({id:"arcs",data:o("oF/0"),dataTransform:function(t){return t.features.filter(function(t){return t.properties.scalerank<4})},getSourcePosition:function(t){return[-.4531566,51.4709959]},getTargetPosition:function(t){return t.geometry.coordinates},getSourceColor:[0,128,200],getTargetColor:[200,0,80],getWidth:1})];return i["createElement"](a["a"],{initialViewState:s,controller:!0,layers:t},i["createElement"](c["c"],{mapStyle:"mapbox://styles/mapbox/light-v9"}))};e["default"]=u}}]);