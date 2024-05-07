class Notification {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description
    }
}

export class NotificationContext {

    notifications: Notification[] = [];

    protected addNotification(notification: Notification) {
        this.notifications.push(notification);
    }

    protected hasNotification() {
        return this.notifications.length > 0;
    }
}