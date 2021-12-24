import {Coin} from "./module/coin.mjs";
import {Wallet} from "./module/Wallet.mjs";

let wallet=new Wallet();
function coinAdd(){
    wallet.addCoin(new Coin());
    wallet.addCoin(new Coin(5));
    wallet.addCoin(new Coin(10));
    wallet.addCoin(new Coin(25));
    wallet.addCoin(new Coin(10));
    wallet.addCoin(new Coin(5));
}
$(document).ready(function () {
    coinAdd();
    console.log("Sum:"+wallet.totalCoin);
    console.log("Remove coin: "+wallet.removeCoin.valueOfCoin);
    console.log("Sum count: "+wallet.coinCount);
    console.log("Add Coin:" +coinAdd(5));
    printNames();
})
function printNames(){
    for(let i=0;i<wallet.coinCount;i++){
        console.log("Name of coin is "+ wallet.coins[i].name);
    }
}
