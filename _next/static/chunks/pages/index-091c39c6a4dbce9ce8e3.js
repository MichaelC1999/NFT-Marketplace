(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4730:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemID","type":"uint256"},{"indexed":true,"internalType":"address","name":"NFTContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"visible","type":"bool"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemID","type":"uint256"}],"name":"changeVisible","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"itemID","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyCreatedNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyOwnedNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemsCreatedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemsSoldCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transactionVolumeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawMarketEarnings","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},2200:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"marketplaceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(809),i=n.n(a),s=n(5893),r=n(2447),p=n(7893),l=n(6519),u=n(7616),o=n(7294),d=n(9669),y=n.n(d),c=n(2484),m=n.n(c),f=n(1163),T=n(2200),b=n(4730),x="0x1dac4D214eCfA1e84a68F2fda25819006C45058f",h="0x92165536AE34a8AC5723648e7E2475e45851Fe8b";function w(){var e=(0,o.useState)([]),t=e[0],n=e[1],a=(0,o.useState)("not-loaded"),d=a[0],c=a[1],w=(0,o.useState)(),v=w[0],k=w[1],g=(0,o.useState)(),M=g[0],N=g[1];(0,o.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]);var j=(0,f.useRouter)();function I(){return(I=(0,r.Z)(i().mark((function e(){var t,a,s,o,d,f,w,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(m()),e.next=3,t.connect();case 3:return a=e.sent,s=new p.Q(a),o=new l.CH(x,T.M,s),d=new l.CH(h,b.M,s),e.next=9,d.fetchMarketItems();case 9:return f=e.sent,e.next=12,Promise.all(f.map(function(){var e=(0,r.Z)(i().mark((function e(t){var n,a,s,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.visible){e.next=12;break}return e.next=3,o.tokenURI(t.tokenID);case 3:return n=e.sent,e.next=6,y().get(n);case 6:return a=e.sent,s=u.bM(t.price.toString(),"ether"),r={price:s,itemID:t.itemID.toNumber(),seller:t.seller,owner:t.owner,image:a.data.image,name:a.data.name,description:a.data.description},e.abrupt("return",r);case 12:return e.abrupt("return",{});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 12:w=e.sent,v=[],w.forEach((function(e){Object.keys(e).length>0&&v.push(e)})),n(v),c("loaded");case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=(0,r.Z)(i().mark((function e(t){var n,a,s,r,o,d,y,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new(m()),e.next=4,n.connect();case 4:return a=e.sent,s=new p.Q(a),r=s.getSigner(),k("processing"),o=new l.CH(h,b.M,r),d=u.vz(t.price.toString(),"ether"),e.next=12,o.createMarketSale(x,t.itemID,{value:d});case 12:return y=e.sent,e.next=15,y.wait();case 15:c=e.sent,k(c.transactionHash),N(t.image),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0),k("");case 24:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}return"loaded"!==d?(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsxs)("div",{className:"lds-ellipsis",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}):"loaded"!==d||t.length?v?(0,s.jsxs)("div",{style:{textAlign:"center",backgroundColor:"black",paddingTop:"12px",minHeight:"90vh"},children:[(0,s.jsx)("h1",{className:"text-white",style:{fontSize:"33px",width:"100%"},children:"This transaction will use the RINKEBY TEST NETWORK on Ethereum"}),(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"25px",width:"100%"},children:"processing"===v?"The Ethereum network will transfer your NFT to your address: ":"Token has been transferred! Transaction hash: "}),"processing"===v?(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"15px",width:"100%"},children:window.ethereum.selectedAddress}):(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"15px",width:"100%"},children:(0,s.jsx)("a",{href:"https://rinkeby.etherscan.io/tx/"+v,children:(0,s.jsx)("u",{children:v})})}),"processing"===v?null:(0,s.jsx)("h2",{className:"bg-pink-500 text-white rounded",style:{fontSize:"23px",padding:"6px",margin:"15px 33%",cursor:"pointer"},onClick:function(){j.reload(window.location.pathname)},children:"Buy another NFT"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"w-1/2 flex flex-col pb-12 nftMinting",children:M?(0,s.jsx)("img",{style:{border:"3px #EC4899 solid"},src:M}):(0,s.jsxs)("div",{className:"lds-ellipsis animation-white",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})})]}):(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"px-4",style:{maxWidth:"1600px"},children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,s.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,s.jsx)("img",{src:e.image}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold",children:e.name}),(0,s.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,s.jsx)("p",{className:"text-gray-400",children:e.description})})]}),(0,s.jsxs)("div",{className:"p-4 bg-black",children:[(0,s.jsxs)("p",{className:"text-2xl mb-4 font-bold text-white",children:[e.price," ETH"]}),(0,s.jsx)("button",{className:"w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){return C.apply(this,arguments)}(e)},children:"Buy"})]})]},t)}))})})}):(0,s.jsx)("h1",{className:"px-20 py-10 text-3xl",children:"No items in marketplace"})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[207,669,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);