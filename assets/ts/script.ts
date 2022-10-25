class Account {
    balanceInit: number = 0;
    account: string;
    constructor(balanceInit: number, account: string) {
        this.balanceInit = balanceInit;
        this.account = account
    }

    deposit(money: number) {
        this.balanceInit = this.balanceInit + money;
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}€`);
    }

    withdraw(money: number) {
        this.balanceInit = this.balanceInit - money;
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}€, ha ritirato ${money}€`);
    }
}

class MotherAccount extends Account {
    addInterest() {
        this.balanceInit = Math.floor(this.balanceInit * 1.1);
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}€`);
    }
}

class SonAccount extends Account {
}

let mother1 = new MotherAccount(0, 'Moira')
let figlio1 = new SonAccount(0, 'Asdrubale Paolo')

mother1.deposit(2500);
mother1.withdraw(300);
mother1.addInterest();

figlio1.deposit(100);
figlio1.withdraw(20);