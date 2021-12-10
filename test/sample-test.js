describe("NFTMarket", function() {
  it("Should create and execute market sales", async function() {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    const NFT = await NFT.deploy(marketAddress);
    await NFT.deployed();
    const NFTContractAddress = NFT.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits('1', 'ether');

    await NFT.createToken("https://www.mytokenlocation.com");
    await NFT.createToken("https://www.mytokenlocation2.com");
  
    await market.createMarketItem(NFTContractAddress, 1, auctionPrice, { value: listingPrice });
    await market.createMarketItem(NFTContractAddress, 2, auctionPrice, { value: listingPrice });
    
    const [_, buyerAddress] = await ethers.getSigners();

    await market.connect(buyerAddress).createMarketSale(NFTContractAddress, 1, { value: auctionPrice});

    items = await market.fetchMarketItems();
    items = await Promise.all(items.map(async i => {
      const tokenUri = await NFT.tokenURI(i.tokenID);
      let item = {
        price: i.price.toString(),
        tokenID: i.tokenID.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
  });
});