// sigleton is a design pattern whose objective is to maintain only one instance of a given class in the entire project
// example is the use in bussines rules, when are used in all program
// angular use this design pattern
// database can use this pattern

// bussines rules of the club car
export class BussinesRulesSingleton {
    private static _instace: BussinesRulesSingleton | null = null;

    private constructor() { }

    static get instace(): BussinesRulesSingleton {
        if (BussinesRulesSingleton._instace == null) {
            BussinesRulesSingleton._instace = new BussinesRulesSingleton()
        }
        return BussinesRulesSingleton._instace
    }

    carValidate() {
        // validate logic ...
    }
}

const bussinesRules = BussinesRulesSingleton.instace
console.log(bussinesRules);