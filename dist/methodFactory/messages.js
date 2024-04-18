class Messeger {
    constructor(data, sendAt, phoneSender) {
        this.data = data;
        this.phoneSender = phoneSender;
        this.sendAt = sendAt;
    }
    sendMessage() {
        const messageData = this.abstractMethod(this.data);
        return messageData;
    }
}
export class MessageText extends Messeger {
    constructor(message, sendAt, phoneSender) {
        super(message, sendAt, phoneSender);
    }
    abstractMethod(data) {
        return data;
    }
}
export class MessageMidia extends Messeger {
    constructor(file, sendAt, phoneSender) {
        super(file, sendAt, phoneSender);
    }
    abstractMethod(file) {
        return new Promise((resolve, reject) => {
            const data = URL.createObjectURL(file);
            resolve(data);
        });
    }
}
export class MessageAudio extends Messeger {
    constructor(audio, sendAt, phoneSender) {
        super(audio, sendAt, phoneSender);
    }
    async abstractMethod(audio) {
        const audioData = new Blob(audio, {
            type: "audio/mp3"
        });
        return audioData;
    }
}
