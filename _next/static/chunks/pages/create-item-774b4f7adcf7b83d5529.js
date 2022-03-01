(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{4730:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemID","type":"uint256"},{"indexed":true,"internalType":"address","name":"NFTContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenID","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"visible","type":"bool"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemID","type":"uint256"}],"name":"changeVisible","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"itemID","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyCreatedNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyOwnedNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemID","type":"uint256"},{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"visible","type":"bool"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemsCreatedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemsSoldCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transactionVolumeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawMarketEarnings","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},2200:function(e){"use strict";e.exports=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"marketplaceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},2605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(809),i=n.n(a),r=n(6265),s=n(5893),p=n(2447),u=n(7294),o=n(7893),l=n(6519),d=n(7616),y=n(5241),c=n(1163),m=n(2484),f=n.n(m),T=n(2200),b=n(4730);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,y.create)("https://ipfs.infura.io:5001/api/v0"),w="0x1dac4D214eCfA1e84a68F2fda25819006C45058f",g="0x92165536AE34a8AC5723648e7E2475e45851Fe8b";function k(){var e=(0,u.useState)(null),t=e[0],n=e[1],a=(0,u.useState)(!1),r=a[0],y=a[1],m=(0,u.useState)({price:"",name:"",description:""}),h=m[0],k=m[1],M=(0,u.useState)(""),j=M[0],N=M[1],I=(0,u.useState)(""),C=I[0],O=I[1],E=(0,u.useState)(!1),S=E[0],F=E[1],A=(0,c.useRouter)();function D(){return(D=(0,p.Z)(i().mark((function e(t){var a,r,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],n("pending"),e.prev=2,e.next=5,v.add(a,{progress:function(e){return console.log("received: ".concat(e))}});case 5:r=e.sent,s="https://ipfs.infura.io/ipfs/".concat(r.path),n(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error uploading file: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function P(){return(P=(0,p.Z)(i().mark((function e(){var n,a,r,s,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h.name,a=h.description,r=h.price,n&&a&&r&&t&&"pending"!==t){e.next=3;break}return e.abrupt("return");case 3:return s=JSON.stringify({name:n,description:a,image:t}),e.prev=4,e.next=7,v.add(s);case 7:p=e.sent,_("https://ipfs.infura.io/ipfs/".concat(p.path)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error uploading file: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function _(e){return z.apply(this,arguments)}function z(){return(z=(0,p.Z)(i().mark((function e(t){var n,a,r,s,p,u,c,m,x,v,k,M;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),n=new(f()),e.next=4,n.connect();case 4:return a=e.sent,r=new o.Q(a),s=r.getSigner(),p=new l.CH(w,T.M,s),e.next=10,p.createToken(t);case 10:return u=e.sent,e.next=13,u.wait();case 13:return c=e.sent,e.next=16,N(u.hash);case 16:return m=c.events[0],x=m.args[2],v=x.toNumber(),k=d.vz(h.price,"ether"),p=new l.CH(g,b.M,s),e.next=23,p.getListingPrice();case 23:return M=(M=e.sent).toString(),e.next=27,p.createMarketItem(w,v,k,{value:M});case 27:return u=e.sent,e.next=30,u.wait();case 30:return c=e.sent,e.next=33,O(u.hash);case 33:y(!0),window.scrollTo(0,0);case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(S||r)return(0,s.jsxs)("div",{style:{textAlign:"center",backgroundColor:"black",paddingTop:"12px",minHeight:"90vh"},children:[(0,s.jsx)("h1",{className:"text-white",style:{fontSize:"33px",width:"100%"},children:"This transaction will use the RINKEBY TEST NETWORK on Ethereum"}),(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"25px",width:"100%"},children:j?"Token has been minted! Transaction hash: ":"The Ethereum network will start minting and processing your NFT."}),j?(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"15px",width:"100%"},children:(0,s.jsx)("a",{href:"https://rinkeby.etherscan.io/tx/"+j,children:(0,s.jsx)("u",{children:j})})}):null,j?(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"25px",width:"100%"},children:C?"Token is available for sale on the market! Transaction Hash: ":"The Ethereum network will start making your NFT available for purchase."}):"DO NOT LEAVE THIS PAGE YET",C?(0,s.jsx)("h2",{className:"text-white",style:{fontSize:"15px",width:"100%"},children:(0,s.jsx)("a",{href:"https://rinkeby.etherscan.io/tx/"+C,children:(0,s.jsx)("u",{children:C})})}):null,r?(0,s.jsx)("h2",{className:"bg-pink-500 text-white rounded",style:{fontSize:"23px",padding:"6px",margin:"15px 33%",cursor:"pointer"},onClick:function(){A.reload(window.location.pathname)},children:"Mint another NFT"}):null,(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"w-1/2 flex flex-col pb-12 nftMinting",children:r?(0,s.jsx)("img",{style:{border:"3px #EC4899 solid"},src:t}):(0,s.jsxs)("div",{className:"lds-ellipsis animation-white",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})})]});var H=null;return"pending"===t?H=(0,s.jsx)("div",{className:"nftMinting",children:(0,s.jsxs)("div",{className:"lds-ellipsis",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}):t&&(H=(0,s.jsx)("img",{className:"rounded mt-4",width:"350",src:t})),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"w-1/2 flex flex-col pb-12",children:[(0,s.jsx)("input",{placeholder:"Asset Name",className:"mt-8 border rounded p-4",onChange:function(e){return k(x(x({},h),{},{name:e.target.value}))}}),(0,s.jsx)("textarea",{placeholder:"Asset Description",className:"mt-2 border rounded p-4",onChange:function(e){return k(x(x({},h),{},{description:e.target.value}))}}),(0,s.jsx)("input",{placeholder:"Asset Price in Eth",type:"number",className:"mt-2 border rounded p-4",onChange:function(e){return k(x(x({},h),{},{price:e.target.value}))}}),(0,s.jsx)("input",{type:"file",name:"Asset",className:"my-4",onChange:function(e){return D.apply(this,arguments)}}),H,(0,s.jsx)("button",{onClick:function(){return P.apply(this,arguments)},className:"font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",children:"Create Digital Asset"})]})})}},1932:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-item",function(){return n(2605)}])},7005:function(){},6937:function(){},6784:function(){},8795:function(){}},function(e){e.O(0,[207,977,774,888,179],(function(){return t=1932,e(e.s=t);var t}));var t=e.O();_N_E=t}]);