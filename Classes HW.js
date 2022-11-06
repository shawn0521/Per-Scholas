// ** Governor Class **

// class Governor {
//     static title = `Governor`
//     static officeLocation = "State Capitol"
//     static swearInTheGovs(){
//         console.log("The Governors have been sworn in!")
//     }
//     static stealFromThePeople() {
//         console.log('The Governors have began stealing from the people.')
//     }
//     constructor(name, age, gender, state, party) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.state = state
//         this.party = party
//     }
// }

// const scGov = new Governor("Jim-Bob", 42, 'male', 'South Carolina', "Republican")

// const caGov = new Governor("Peggy-Sue", 35, 'female', 'California', 'Independent')

// console.log(scGov)
// console.log(caGov)
// Governor.swearInTheGovs()
// Governor.stealFromThePeople()


// ** Person Class


// class Person {
//     constructor(name, age, occupation, passion, fitness) {
//         this.name = name
//         this.age = age
//         this.occupation = occupation
//         this.passion = passion
//         this.fitness = fitness
//     }
//     greet() {
//         console.log(`Hi, my name is ${this.name} & I am ${this.age} years old!`)
//     }
//     hobby() {
//         console.log(`For money I am a ${this.occupation} but my passion is ${this.passion}!`)
//     }
//     exercise() {
//         console.log(`I like to stay in shape by ${this.fitness}`)
//     }
// }

// ** Chef Class

// class Chef extends Person {
//     chopOnions(){
//         console.log(`Sorry for the tears, ${this.name} is cutting onions.`)
//     }
//     fryFish(){
//         console.log(`What's that intoxicating smell? Oh it's ${this.name} frying fish!`)
//     }
// }

//** Chef Variables */

// const chef1 = new Chef('Jorge', 44, 'Chef', "Rhythmic Dance", "lifting weights")
// const chef2 = new Chef('Paula', 28, 'Chef', "Dungeons & Dragons", "doing Yoga")

// chef1.greet()
// chef1.hobby()
// chef1.exercise()
// chef1.chopOnions()
// chef1.fryFish()

// chef2.greet()
// chef2.hobby()
// chef2.exercise()
// chef2.chopOnions()
// chef2.fryFish()



// ** Postal Worker Class

// class PostalWorker extends Person {
//     deliverMail(client){
//         console.log(`${client}, here is your mail!`)
//     }
//     sortMail(num){
//         console.log(`${this.name} can you please sort the mail? There are ${num} pieces to be sorted!`)
//     }
// }

// //** Post Worker Variables */
// const pw1 = new PostalWorker('Kelly-Anne', 33, "Postal Worker", "Gin... Rummy", "training Jiu-Jitsu")
// const pw2 = new PostalWorker('Timothy', 35, "Postal Worker", "Gaming", "swimming")


// ** Testing Postal Methods


// pw1.greet()
// pw1.hobby()
// pw1.exercise()
// pw1.sortMail(10)
// pw1.deliverMail('Clementine')


// pw2.greet()
// pw2.hobby()
// pw1.exercise()
// pw2.sortMail(5)
// pw2.deliverMail('Bob')


// ** Bank Account

// class BankAccount {
//     constructor(ownerName, balance, acctNum) {
//         this.ownerName = ownerName
//         this.balance = balance
//         this.acctNum = acctNum
//     }
//     deposit(num) {
//         (this.balance + num)
//         console.log(`Deposit processed. Your balance was ${this.balance} and now your balance is ${this.balance + num}.`)
//     }
//     withdraw(num) {
//         (this.balance - num)
//         console.log(`Withdrawal processed. Your balance was ${this.balance} and now your balance is ${this.balance - num}.`)
//     }
// }

// ** Checking Account

// class CheckingAccount extends BankAccount {
//     static overdraftEnabled = true
//     checkingWithdrawal(num) {
//         if (this.balance < num && this.overdraftEnabled === true) {
//             console.log(`Sorry ${this.ownerName}, you don't have enough money. You only have ${this.balance} monies.`)
//         } else {
//             super.withdraw(num)
//         }
//     }
// }

// * Creating Checking Accounts
// const myCheckingAccount = new CheckingAccount("M.S. Irby", 744, '23123412')
// myCheckingAccount.overdraftEnabled = true


// const yourCheckingAccount = new CheckingAccount('Bill Bixby', 125, '23123419')
// yourCheckingAccount.overdraftEnabled = false

// *Testing Checking*/

// myCheckingAccount.checkingWithdrawal(500)
// yourCheckingAccount.checkingWithdrawal(500)

// ** Savings Account Class

// class SavingsAccount extends BankAccount {
//     savingsWithdrawal(){
//         console.log(`Sorry ${this.ownerName}, no withdrawals are allowed from this account.`)
//     }
// }

// * Creating Savings Account
// const mySavingsAccount = new SavingsAccount("M.S. Irby", 444, '3239023-0')

// * Testing Savings

// console.log(mySavingsAccount)
// mySavingsAccount.savingsWithdrawal(599)
// mySavingsAccount.deposit(500)