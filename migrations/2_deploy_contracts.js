const Factory = artifacts.require('uniswapv2/UniswapV2Factory.sol');
const Router = artifacts.require('uniswapv2/UniswapV2Router02.sol');
const WETH = artifacts.require('WETH.sol');
const ERC20 = artifacts.require('../openzeppelin/contracts/token/ERC20/ERC20.sol');
const MockERC20 = artifacts.require('MockERC20.sol');
const SushiToken = artifacts.require('SushiToken.sol') 
const MasterChef = artifacts.require('MasterChef.sol'); 
const SushiBar = artifacts.require('SushiBar.sol');
const SushiMaker = artifacts.require('SushiMaker.sol');
const Migrator = artifacts.require('Migrator.sol');

module.exports = async function(deployer, _network, accounts) {
  if (_network == 'ropsten') {
    const admin = '0x420Dab420c5Fd0C067C4b8007448F0256abe2006';
    //const weth = '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5';
    // await deployer.deploy(WETH);
    // const weth = await WETH.deployed();

    await deployer.deploy(ERC20, 'test1', 'TST1');
    const erc201 = await ERC20.deployed();

    await deployer.deploy(ERC20, 'test2', 'TST2');
    const erc202 = await ERC20.deployed();


    // const tokenA = await MockERC20.new('Token A', 'TKA', web3.utils.toWei('1000'));
    // const tokenB = await MockERC20.new('Token B', 'TKB', web3.utils.toWei('1000'));
    //console.log(tokenA);
    //console.log(tokenB);
    
    //await deployer.deploy(Factory, admin);
    //const factory = await Factory.deployed();
    //await factory.createPair(tokenA.address, tokenB.address);
    //await deployer.deploy(Router, factory.address, weth.address);
    //const router = await Router.deployed();

    //await tokenA.approve(router.address, web3.utils.toWei('1000'));
    //await tokenB.approve(router.address, web3.utils.toWei('1000'));

    //await deployer.deploy(SushiToken);
    //const sushiToken = await SushiToken.deployed();

  //   await deployer.deploy(
  //     MasterChef,
  //     sushiToken.address,
  //     admin,
  //     web3.utils.toWei('100'),
  //     1,
  //     10000
  //   );
  //   const masterChef = await MasterChef.deployed();
  //   //await masterChef.transferOwnership(admin);
  //   await sushiToken.transferOwnership(masterChef.address);

  //   await deployer.deploy(SushiBar, sushiToken.address);
  //   const sushiBar = await SushiBar.deployed();

  //   await deployer.deploy(
  //     SushiMaker,
  //     factory.address, 
  //     sushiBar.address, 
  //     sushiToken.address, 
  //     weth.address
  //   );
  //   const sushiMaker = await SushiMaker.deployed();
  //   await factory.setFeeTo(sushiMaker.address);


  } else {
    const admin = accounts[0];
  //   //const weth = '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5';
  //   await deployer.deploy(WETH);
  //   const weth = await WETH.deployed();
  //   //const tokenA = await MockERC20.new('Token A', 'TKA', web3.utils.toWei('1000'));
  //   //const tokenB = await MockERC20.new('Token B', 'TKB', web3.utils.toWei('1000'));
  //   //console.log(tokenA);
  //   //console.log(tokenB);
    await deployer.deploy(ERC20, 'test1', 'TST1');
    const erc201 = await ERC20.deployed();

    await deployer.deploy(ERC20, 'test2', 'TST2');
    const erc202 = await ERC20.deployed();
  //   await deployer.deploy(Factory, admin);
  //   const factory = await Factory.deployed();
  //   //await factory.createPair(tokenA.address, tokenB.address);
  //   await deployer.deploy(Router, factory.address, weth.address);
  //   const router = await Router.deployed();

  //   //await tokenA.approve(router.address, web3.utils.toWei('1000'));
  //   //await tokenB.approve(router.address, web3.utils.toWei('1000'));

//     await deployer.deploy(SushiToken);
//     const sushiToken = await SushiToken.deployed();

//     await deployer.deploy(
//       MasterChef,
//       sushiToken.address,
//       admin,
//       web3.utils.toWei('100'),
//       1,
//       10000
//     );
//     const masterChef = await MasterChef.deployed();
//     //await masterChef.transferOwnership(admin);
//     await sushiToken.transferOwnership(masterChef.address);

//     await deployer.deploy(SushiBar, sushiToken.address);
//     const sushiBar = await SushiBar.deployed();

//     await deployer.deploy(
//       SushiMaker,
//       factory.address, 
//       sushiBar.address, 
//       sushiToken.address, 
//       weth.address
//     );
//     const sushiMaker = await SushiMaker.deployed();
//     await factory.setFeeTo(sushiMaker.address);
//   }

//   //await router.addLiquidity(tokenA.address, tokenB.address, web3.utils.toWei('900'), web3.utils.toWei('900'), web3.utils.toWei('800'), web3.utils.toWei('800'), admin, 1715698160);
  
//   //const lpaddress = await UniswapV2Library.pairFor(factory.address, tokenA.address, tokenB.address);
//   //await masterChef.add(0, lpaddress, 1);
//   //await masterChef.deposit(0, web3.utils.toWei('900'));

//   // await deployer.deploy(
//   //   Migrator,
//   //   masterChef.address,
//   //   '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
//   //   factory.address,
//   //   1
//   // );
  };
}