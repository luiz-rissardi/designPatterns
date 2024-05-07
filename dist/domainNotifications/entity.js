import { NotificationContext } from "./notifications.js";
export class HeroEntity extends NotificationContext {
    constructor({ name, age }) {
        super();
        this.age = Number(age);
        this.name = name;
    }
    isValid() {
        if (this.name.length < 4) {
            this.addNotification({ name: "heroName", description: " the name hero should be length 4" });
        }
        if (typeof this.name != "string") {
            this.addNotification({ name: "heroName", description: "the type of hero name should be string" });
        }
        if (this.age < 18 && this.age > 100) {
            this.addNotification({ name: "heroAge", description: "age is incompatible, must be over 18 and under 100" });
        }
        if (typeof this.age != "number") {
            this.addNotification({ name: "heroAge", description: "age must be a number" });
        }
        return !this.hasNotification();
    }
}
