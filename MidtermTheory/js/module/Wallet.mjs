import {Coin} from "./coin.mjs"
class Wallet {
    #coins;

    constructor() {
        this.#coins = [];
    }
    get coinCount(){
        return this.#coins.length;
    }
    get coins(){
        return this.#coins;
    }
    get totalCoin(){
        let total=0;
        for(let i=0;i<this.#coins.length;i++)
        {
            total += this.#coins[i].valueOfCoin;
        }
        return total;
    }
    addCoin(coin){
        this.#coins.push(coin);
    }
    get removeCoin(){
        if(this.#coins.length!=0){
            return this.#coins.pop();
        }else{
            throw new Error("Cannot remove a coin, the wallet is empty");
        }
    }
}
export {Wallet}
