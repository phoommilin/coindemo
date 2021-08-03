(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(e,c,t){},83:function(e,c,t){},84:function(e,c,t){},89:function(e,c,t){},93:function(e,c,t){"use strict";t.r(c);var a=t(1),i=t.n(a),s=t(18),n=t.n(s),l=(t(63),t.p,t(8)),r=t.n(l),o=t(16),d=t(50),j=t(51),b=t(58),h=t(56),m=t(12),x=t.n(m),O=t(0),p=(a.Component,t(5)),u=(t(83),t(21)),v=(t(84),function(e){var c,t=e.rank,i=e.name,s=e.image,n=e.price,l=e.pricechange1h,d=e.pricechange24h,j=e.pricechange7d,b=e.marketcap,h=e.id,m=e.symbol,v=Object(a.useState)([]),g=Object(p.a)(v,2),k=g[0],_=g[1],N=Object(a.useState)(!0),f=Object(p.a)(N,2),y=(f[0],f[1]);function w(e){return Number(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.coingecko.com/api/v3/simple/price/",{params:{ids:h,vs_currencies:"usd",include_24hr_vol:"true"}});case 2:c=e.sent,console.log(Object.values(c.data)[0].usd_24h_vol),_(Object.values(c.data)[0]),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),Object(O.jsxs)("div",{className:"coin-list d-inline-flex",children:[Object(O.jsx)("div",{className:"coin-list__rank",children:Object(O.jsx)("p",{children:t})}),Object(O.jsx)(u.b,{to:"/coins/".concat(h),children:Object(O.jsxs)("div",{className:"coin-list__coin-title",children:[Object(O.jsx)("div",{className:"coin-list__image",children:Object(O.jsx)("img",{src:s})}),Object(O.jsx)("p",{className:"d-none d-lg-block coin-name",children:i}),Object(O.jsx)("p",{className:"d-lg-none text-uppercase",children:m}),Object(O.jsx)("p",{className:"text-uppercase coin-symbol",children:m})]})}),Object(O.jsx)("div",{className:"coin-list__price",children:Object(O.jsxs)("p",{children:["$",(c=n,Number(c).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})}),Object(O.jsx)("div",{className:"coin-list__price-change 1h",children:l>0?Object(O.jsxs)("p",{className:"green",children:[l.toFixed(1),"%"]}):Object(O.jsxs)("p",{className:"red",children:[l.toFixed(1),"%"]})}),Object(O.jsx)("div",{className:"coin-list__price-change 24h",children:d>0?Object(O.jsxs)("p",{className:"green",children:[d.toFixed(1),"%"]}):Object(O.jsxs)("p",{className:"red",children:[d.toFixed(1),"%"]})}),Object(O.jsx)("div",{className:"coin-list__price-change 1h",children:j>0?Object(O.jsxs)("p",{className:"green",children:[j.toFixed(1),"%"]}):Object(O.jsxs)("p",{className:"red",children:[j.toFixed(1),"%"]})}),Object(O.jsx)("div",{className:"coin-list__volume-change-24h",children:Object(O.jsxs)("p",{children:["$",w(Number(k.usd_24h_vol).toFixed(0))]})}),Object(O.jsx)("div",{className:"coin-list__market-cap",children:Object(O.jsxs)("p",{children:["$",w(b)]})})]})}),g=t(53),k=t.n(g),_=function(){var e=Object(a.useState)([].slice(0,50)),c=Object(p.a)(e,2),t=c[0],i=c[1];Object(a.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d");case 2:c=e.sent,i(c.data),console.log(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Object(a.useState)(0),n=Object(p.a)(s,2),l=n[0],d=n[1],j=10*l,b=t.slice(j,j+10).map((function(e){return Object(O.jsx)(v,{id:e.id,rank:e.market_cap_rank,name:e.name,image:e.image,price:e.current_price,pricechange1h:e.price_change_percentage_1h_in_currency,pricechange24h:e.price_change_percentage_24h_in_currency,pricechange7d:e.price_change_percentage_7d_in_currency,marketcap:e.market_cap,symbol:e.symbol})})),h=Math.ceil(t.length/10);return Object(O.jsxs)("div",{className:"container coin-table-container pt-5",children:[Object(O.jsx)("div",{className:"coin-table",children:Object(O.jsxs)("div",{className:"scrollable",children:[Object(O.jsxs)("div",{className:"table-heading d-inline-flex",children:[Object(O.jsx)("div",{className:"table-heading__rank",children:Object(O.jsx)("p",{children:"#"})}),Object(O.jsx)("div",{className:"table-heading__coin-title",children:Object(O.jsx)("p",{children:"Coin"})}),Object(O.jsx)("div",{className:"table-heading__price",children:Object(O.jsx)("p",{children:"Price"})}),Object(O.jsx)("div",{className:"table-heading__price-change 1h",children:Object(O.jsx)("p",{children:"1h"})}),Object(O.jsx)("div",{className:"table-heading__price-change 24h",children:Object(O.jsx)("p",{children:"24h"})}),Object(O.jsx)("div",{className:"table-heading__price-change 7d",children:Object(O.jsx)("p",{children:"7d"})}),Object(O.jsx)("div",{className:"table-heading__volume-change-24h",children:Object(O.jsx)("p",{children:"24h Volume"})}),Object(O.jsx)("div",{className:"table-heading__market-cap",children:Object(O.jsx)("p",{children:"Mkt Cap"})})]}),b]})}),Object(O.jsx)(k.a,{previousLabel:"Previous",pageRangeDisplayed:"4",marginPagesDisplayed:"1",nextLabel:"Next",pageCount:h,onPageChange:function(e){var c=e.selected;d(c)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})},N=t(7),f=(t(3),t(99),t(100)),y=t(57),w=(t(89),t(6)),A=t(22),C=t(25),V=t(15);var I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAE0ElEQVR42u3ZW0xcRRgA4KVcgqEXiBFjatSGqDXqg7EmxhsGOQVOCyK1VhFomVnYGSAQtLs01A3l0gAzwMyegUAvSYNBkgpYOLNNazUmJprUh8Y2GmJiUhNvUWpTa6otLWXMWdi40l1ammbZTfZP5mVzHs63M//MP/+x2WIRi1jE4k7E7tbhR+ucB9ZGNUIcPLFqT/vhI7iurzO/0L0iaiFdvd7yFjIyXVlj/AYc7IWoRFAh11Ehz7SSUVVRbSiA2BGA2KooQ3jjqZCECqlayYgfcgUgXh5ts5FJDHOKGGYgxBpnAObrogWxmgjTtBBBINYgALP4aIDYiWFOLwKZAohnRjSCCJlBDPMbPyIExBomRGx1ZM6EIROIkN2BiEUg0wAxe6RCsohh/nGLEGt8CzHPiKyDz5BrqJBHFyJuAlEQ8W6IPPGRlOCIGObVpUIAYucg5lmRgniYGHIyGMIHoaOLQRRA/CjAPHV5d6le00pwTyiEdbLvaT+sIOaLQNhVgDha7tnQiGGeD4Zo6xpTu5reV/Yqjyp43a22lexV2yu6QmEmIeKPLBcijQp5/L9/31SdHlO1kBG1c/ch5ajt9b1kCSAqZ3OD0nSn2lTYqLYWt6oyOw22xDwA8YTlgNQQw7w2B5jwLaH6XQdVZc3/86E0AOIfeQW7VNGbzT5kwLPnAeZauO8Z66mQ33WwceVuG1a1zv2+JVTuuHHZBIP4R25+gyrc2qTe3tGhyh09Vi4dt1d50sKCaKVjSa10bKCxZUjVvDPgS2TrJUIl82IQ/8jZ7FIFW9zqrbL2a2WQ1oUF4nIPplbX9w9CzC8Hm4HbgfjHxk2uP/OL3E3F5Z3hyZVSSFMA4qUAsVMAset3ADKt6a6PNd21MVOrTwzP2eExk7qEN31w9GQcQGwtQLwZIPbLbUJmNd05uVF3oew855rq+v4EiHm63cFWhAEyYV1jS6iQ1bTPm/ZyVn0cQHwDQHwIIHZpCZApTXd1abrTVzhCzB+AmDdCzLLDufWm+4pEIT+jQuaJg58klkGaDDHfAhD/EiA2swjksqa7xjXd9eJzmTXxFdViJcB8O0D8NMS8D2KWHO6y/VlimD8Sw/yLGHI/FfJx63fg6EkHiDUAxH5YALmu6c6vNd1Zlp27M6Xm3X3xEPOXAGITc2UKO2nNynLdQTAxzCvzp/tZKqSrq897jw+E2BMQ8wMlgFzMzW/4VdOdLZruvH9+GWUAxJhV/c7P3O8w3IfhgrZPChVyMKDGmiGG/IIKWcQHjiXvqOxJKt7R+Yr+auMzGeu3xdmrPKkQ8yqrtgKIzc4jrs3lBl/eTuRcGW+eXlA0XqKGHKJCPj0iT8VVVItEiHkOQOzE/DIK3BDGIeZptkgIKuRrxDAv3FAFC/nz3u6P2u1Vnn0AsQtBtufvIeJPRVD3xJtADdlODHP2xhvi6GyIi9XfAEdg55EKeS8R8tMlXHUHAArzVrsEzPPEMH+6BchXEPGHIr3TWHeTTuM5gLge+S1TQ66kwvwgBGQGIN4EsCc6PvpQIR/zt04XQLwA87uj7dPCG1TIiwGQsxDzDbZoCypkIhWye/6L1T8AsQpbtAbrP3Zfc8eHn6Pa3kMlkN5li+Z4r234yVrn/gdtsYhFLGJxJ+Jf6UH/J0oTvGkAAAAASUVORK5CYII=",L=(t(91),function(){var e=Object(N.e)().id,c=Object(a.useState)([]),t=Object(p.a)(c,2),i=t[0],s=t[1],n=Object(a.useState)([]),l=Object(p.a)(n,2),d=l[0],j=l[1],b=Object(a.useState)(!1),h=Object(p.a)(b,2),m=h[0],u=h[1],v=Object(a.useState)(!0),g=Object(p.a)(v,2),k=g[0],_=g[1],L=(i.categories,Object(a.useState)("")),T=Object(p.a)(L,2),F=T[0],S=T[1],B=Object(a.useState)([]),P=Object(p.a)(B,2),G=(P[0],P[1]);function E(e){return Number(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function D(e){var c=function(e){return(e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0]}(e),t=c.split("."),a=t.length;return a>2&&(c=t[a-2]+"."+t[a-1],2==t[a-2].length&&2==t[a-1].length&&(c=t[a-3]+"."+c)),c=(c=(c=c.replace(".org","")).replace(".io","")).replace(".to","")}Object(a.useEffect)((function(){(function(){var c=Object(o.a)(r.a.mark((function c(){var t,a,i;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x.a.get("https://api.coingecko.com/api/v3/coins/".concat(e,"/"));case 2:return t=c.sent,c.next=5,x.a.get("https://api.coingecko.com/api/v3/simple/price/",{params:{ids:e,vs_currencies:"usd",include_24hr_vol:"true"}});case 5:return a=c.sent,c.next=8,x.a.get("https://api.coingecko.com/api/v3/coins/categories/list");case 8:i=c.sent,j(Object.values(a.data)[0]),s(t.data),_(!1),G(Object.values(i.data));case 13:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]);var H=function(e){var c;switch(e){case"ethereum":c=I;break;case"binance-smart-chain":c="https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615";break;default:c=I}return c};return k?Object(O.jsx)("div",{children:"Loading..."}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container coin",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-12 col-lg-8 coin__left-column",children:[Object(O.jsxs)("div",{className:"coin-rank",children:["Rank #",i.market_cap_rank]}),Object(O.jsxs)("div",{className:"coin-title",children:[Object(O.jsx)("img",{src:i.image.small}),i.name," (",i.symbol.toUpperCase(),")"]}),Object(O.jsxs)("div",{className:"coin-price d-flex",children:[i.market_data.current_price.usd<1?Object(O.jsxs)("div",{className:"coin-price-usd",children:["$",i.market_data.current_price.usd]}):Object(O.jsxs)("div",{className:"coin-price-usd",children:["$",E(i.market_data.current_price.usd)]}),i.market_data.price_change_percentage_24h>0?Object(O.jsxs)("div",{className:"coin-price-change green",children:[i.market_data.price_change_percentage_24h.toFixed(1),"%"]}):Object(O.jsxs)("div",{className:"coin-price-change red",children:[i.market_data.price_change_percentage_24h.toFixed(1),"%"]})]}),Object(O.jsxs)("div",{className:"coin-btc d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-price",children:[i.market_data.current_price.btc," BTC"]}),i.market_data.price_change_percentage_24h_in_currency.btc>0?Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-change green",children:[i.market_data.price_change_percentage_24h_in_currency.btc.toFixed(1),"%"]}),Object(O.jsx)("div",{className:"coin-btc-change-icon",children:Object(O.jsx)(w.a,{icon:A.c,color:"#4eaf0a"})})]}):Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-change red",children:[i.market_data.price_change_percentage_24h_in_currency.btc.toFixed(1),"%"]}),Object(O.jsx)("div",{className:"coin-btc-change-icon",children:Object(O.jsx)(w.a,{icon:A.b,color:"#e15241"})})]})]}),i.market_data.current_price.eth>0?Object(O.jsxs)("div",{className:"coin-btc d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-price",children:[i.market_data.current_price.eth," ETH"]}),i.market_data.price_change_percentage_24h_in_currency.eth>0?Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-change green",children:[i.market_data.price_change_percentage_24h_in_currency.eth.toFixed(1),"%"]}),Object(O.jsx)("div",{className:"coin-btc-change-icon",children:Object(O.jsx)(w.a,{icon:A.c,color:"#4eaf0a"})})]}):Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("div",{className:"coin-btc-change red",children:[i.market_data.price_change_percentage_24h_in_currency.eth.toFixed(1),"%"]}),Object(O.jsx)("div",{className:"coin-btc-change-icon",children:Object(O.jsx)(w.a,{icon:A.b,color:"#e15241"})})]})]}):null,Object(O.jsxs)("div",{className:"white-action-buttons",children:[Object(O.jsx)("button",{className:"white-button",children:Object(O.jsx)(w.a,{icon:A.d,color:"#374151"})}),Object(O.jsx)("button",{className:"white-button",children:Object(O.jsx)(w.a,{icon:A.a,color:"#374151"})}),Object(O.jsx)("button",{className:"white-button",children:Object(O.jsx)(w.a,{icon:V.c,color:"#374151"})})]})]}),Object(O.jsx)("div",{className:"col-12 col-lg-4 coin__right-column",children:Object(O.jsx)("div",{className:"buy-sell-section-box",children:Object(O.jsxs)("div",{className:"buy-sell-section",children:[Object(O.jsx)("button",{className:"green-button",children:"Buy / Sell"}),Object(O.jsx)("button",{className:"green-button",children:"Long / Short"}),Object(O.jsx)("button",{className:"green-button",children:"Earn / Loan"}),Object(O.jsx)("button",{className:"green-button",children:"Collect Nft"})]})})})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-12 col-lg-8 coin__left-column",children:Object(O.jsxs)("div",{className:"row coin-data",children:[Object(O.jsxs)("div",{className:"col-12 col-lg-6 coin-data-first-column",children:[Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Market Cap"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["Market Cap = Current Price x Circulating Supply",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Refers to the total market value of a cryptocurrency\u2019s circulating supply. It is similar to the stock market\u2019s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)"]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsxs)("div",{className:"coin-data-item-value",children:["$",E(i.market_data.market_cap.usd)]})]}),Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"24 Hour Trading Vol"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{className:"readmore-link",href:"https:www.google.com",children:"Readmore"})]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsxs)("div",{className:"coin-data-item-value",children:["$",E(d.usd_24h_vol.toFixed(0))]})]}),i.market_data.fully_diluted_valuation.usd>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Fully Diluted Valuation"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["Market Cap = Current Price x Circulating Supply",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Refers to the total market value of a cryptocurrency\u2019s circulating supply. It is similar to the stock market\u2019s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)"]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsxs)("div",{className:"coin-data-item-value",children:["$",E(i.market_data.fully_diluted_valuation.usd)]})]}):null,i.market_data.total_value_locked>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Total Value Locked (TVL)"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["Capital deposited into the platform in the form of loan collateral or liquidity trading pool.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Data provided by Defi Llama"]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsxs)("div",{className:"coin-data-item-value",children:["$",E(i.market_data.total_value_locked)]})]}):null,i.market_data.fdv_to_tvl_ratio>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Fully Diluted Valuation / TVL Ratio"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["Ratio of fully diluted valuation (FDV) over total value locked (TVL) of this asset. A ratio of more than 1.0 means that the FDV is greater than its TVL.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"FDV/TVL is used to approximate a protocol\u2019s fully diluted market value vs. the amount in assets it has staked/locked."]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsx)("div",{className:"coin-data-item-value",children:E(i.market_data.fdv_to_tvl_ratio)})]}):null,i.market_data.mcap_to_tvl_ratio>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Market Cap / TVL Ratio"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["Ratio of market capitalization over total value locked of this asset. A ratio of more than 1.0 refers to its market cap being greater than its total value locked.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"MC/TVL is used to approximate a protocol\u2019s market value vs. the amount in assets it has staked/locked."]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsx)("div",{className:"coin-data-item-value",children:E(i.market_data.mcap_to_tvl_ratio)})]}):null]}),Object(O.jsxs)("div",{className:"col-12 col-lg-6 coin-data-second-column",children:[Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Circulating Supply"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{className:"readmore-link",href:"https:www.google.com",children:"Readmore"})]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsx)("div",{className:"coin-data-item-value",children:E(i.market_data.circulating_supply.toFixed(0))})]}),i.market_data.total_supply>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Total Supply"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Supply = Onchain supply - burned tokens"]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsx)("div",{className:"coin-data-item-value",children:E(i.market_data.total_supply.toFixed(0))})]}):null,i.market_data.max_supply>0?Object(O.jsxs)("div",{className:"coin-data-item d-flex",children:[Object(O.jsxs)("div",{className:"coin-data-item-title",children:[Object(O.jsx)("span",{children:"Max Supply"}),Object(O.jsx)(f.a,{placement:"top",delay:{show:0,hide:300},overlay:Object(O.jsx)(y.a,{id:"popover-basic",children:Object(O.jsx)(y.a.Body,{children:Object(O.jsxs)("div",{className:"popover-box",children:["The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Supply = Theoretical maximum as coded"]})})}),children:Object(O.jsx)("div",{className:"question-icon",children:Object(O.jsx)(w.a,{icon:V.b})})})]}),Object(O.jsx)("div",{className:"coin-data-item-value",children:E(i.market_data.max_supply)})]}):null]})]})}),Object(O.jsx)("div",{className:"col-12 show-button-mobile",children:Object(O.jsx)("div",{onClick:function(){return S("active")},className:"show-button "+F,children:"Show All"})}),Object(O.jsxs)("div",{className:"col-12 col-lg-4 coin__right-column mobile "+F,children:[Object.keys(i.platforms).length>1?Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Contract"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:Object(O.jsx)("a",{href:"https://www.coingecko.com",children:Object.keys(i.platforms).map((function(e,c){return Object(O.jsx)("div",{children:i.platforms[e].length>4?Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)("img",{src:H(e)}),Object(O.jsxs)("span",{children:[i.platforms[e].slice(0,3),"...",i.platforms[e].slice(-3)]}),Object(O.jsx)(w.a,{icon:V.a,className:"copy-icon"})]}):null})}))})})]}):null,null!=i.links.homepage?Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Website"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:i.links.homepage.map((function(e){return""===e?null:Object(O.jsx)("div",{className:"coin-link-list",children:Object(O.jsx)("a",{target:"_blank",href:e,children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:D(e)})})})})}))})]}):null,null!=i.links.blockchain_site?Object(O.jsxs)("div",{className:"row coin-link-row",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:Object(O.jsx)("span",{children:"Explorers"})}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:i.links.blockchain_site.map((function(e){return e?Object(O.jsx)("div",{className:"coin-link-list",children:Object(O.jsx)("a",{target:"_blank",href:e,children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:D(e)})})})}):""}))})]}):null,Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Wallets"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:Object(O.jsx)("a",{href:"https://www.coingecko.com",children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:"Ledger"})})})})]}),Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Community"}),Object(O.jsxs)("div",{className:"col-8 coin-link-list d-flex",children:[""!==i.links.subreddit_url?Object(O.jsx)("a",{target:"_blank",href:i.links.subreddit_url,children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)(w.a,{icon:C.c}),Object(O.jsx)("span",{children:"Reddit"})]})}):null,""!==i.links.twitter_screen_name?Object(O.jsx)("a",{target:"_blank",href:"https://twitter.com/"+i.links.twitter_screen_name,children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)(w.a,{icon:C.e}),Object(O.jsx)("span",{children:"Twitter"})]})}):null,""!==i.links.facebook_username?Object(O.jsx)("a",{target:"_blank",href:"https://facebook.com/"+i.links.facebook_username,children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)(w.a,{icon:C.a}),Object(O.jsx)("span",{children:"Facebook"})]})}):null,""!==i.links.telegram_channel_identifier.toString()?Object(O.jsx)("a",{target:"_blank",href:"https://t.me/"+i.links.telegram_channel_identifier,children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)(w.a,{icon:C.d}),Object(O.jsx)("span",{children:"Telegram"})]})}):null]})]}),Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Source Code"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:null!=i.links.repos_url?Object(O.jsx)("a",{target:"_blank",href:i.links.repos_url.github[0],children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)(w.a,{icon:C.b}),Object(O.jsx)("span",{children:"Github"})]})}):null})]}),Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"API id"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:Object(O.jsx)("div",{className:"coin-link-id",children:Object(O.jsxs)("div",{className:"coin-link-item",children:[Object(O.jsx)("span",{children:i.id}),Object(O.jsx)(w.a,{icon:V.a,className:"copy-icon"})]})})})]}),i.categories.length>3?Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Tags"}),Object(O.jsxs)("div",{className:"col-8 coin-link-list d-flex",children:[Object(O.jsx)("a",{target:"_blank",href:"https://www.coingecko.com/en/categories/"+i.categories[0].replace(/ +/g,"-").toLowerCase(),children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:i.categories[0]})})}),Object(O.jsx)("a",{target:"_blank",href:"https://www.coingecko.com/en/categories/"+i.categories[1].replace(/ +/g,"-").toLowerCase(),children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:i.categories[1]})})}),Object(O.jsx)("a",{target:"_blank",href:"https://www.coingecko.com/en/categories/"+i.categories[2].replace(/ +/g,"-").toLowerCase(),children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:i.categories[2]})})}),m?Object(O.jsxs)("div",{children:[i.categories.slice(3).map((function(e){return console.log(e.replace(/ +/g,"-").toLowerCase()),Object(O.jsx)("a",{target:"_blank",href:"https://www.coingecko.com/en/categories/"+e.replace(/ +/g,"-").toLowerCase(),children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:e})})})})),Object(O.jsx)("button",{onClick:function(){return u(!1)},children:Object(O.jsx)("div",{className:"coin-link-item green",children:Object(O.jsx)("span",{children:"Hide"})})})]}):Object(O.jsx)("button",{onClick:function(){return u(!0)},children:Object(O.jsx)("div",{className:"coin-link-item green",children:Object(O.jsx)("span",{children:"Show All"})})})]})]}):Object(O.jsxs)("div",{className:"row coin-link-row ",children:[Object(O.jsx)("div",{className:"col-4 coin-link-title",children:"Tags"}),Object(O.jsx)("div",{className:"col-8 coin-link-list d-flex",children:i.categories.map((function(e){return Object(O.jsx)("a",{target:"_blank",href:"https://www.coingecko.com/en/categories/"+e.replace(/ +/g,"-").toLowerCase(),children:Object(O.jsx)("div",{className:"coin-link-item",children:Object(O.jsx)("span",{children:e})})})}))})]}),Object(O.jsx)("div",{className:"show-button-mobile",children:Object(O.jsx)("div",{onClick:function(){return S("")},className:"show-button hide",children:"Hide"})})]})]})]})})});var T=function(){return Object(O.jsxs)(u.a,{basename:"/coindemo",children:[Object(O.jsx)(N.a,{exact:!0,path:"",component:_}),Object(O.jsx)(N.a,{path:"/coins/:id/",component:L})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(c){var t=c.getCLS,a=c.getFID,i=c.getFCP,s=c.getLCP,n=c.getTTFB;t(e),a(e),i(e),s(e),n(e)}))};n.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),F()}},[[93,1,2]]]);
//# sourceMappingURL=main.2670d36a.chunk.js.map