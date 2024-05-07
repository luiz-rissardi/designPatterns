class Notification {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
export class NotificationContext {
    constructor() {
        this.notifications = [];
    }
    addNotification(notification) {
        this.notifications.push(notification);
    }
    hasNotification() {
        return this.notifications.length > 0;
    }
}
