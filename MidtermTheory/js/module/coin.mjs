class Coin{

    #valueOfCoin
    constructor(valueCoin=25) {
    this.#valueOfCoin=this.#valueOfCoin
    }

    get valueOfCoin(){
        return this.#valueOfCoin;
    }


    set valueOfCoin(coin){
        if(coin==5){
            this.#valueOfCoin=coin;
        }
        else if(coin==10){
            this.#valueOfCoin=coin;
        }
        else if(coin==25){
            this.#valueOfCoin=coin;
        }else{
            throw new Error("Illegal Coin Value");
        }

    }
    get name(){
        if(this.#valueOfCoin==5){
            console.log("nickel");
        }else if(this.#valueOfCoin==10) {
            console.log("dime");
        }
        else if(this.#valueOfCoin==25){
            console.log("quater");

        }

       }
    }
    export {Coin}