

export interface message {
    data: string;
    sendAt: Date;
    phoneSender: number;
}

abstract class Messeger {
    data: any;
    sendAt: Date;
    phoneSender: number;
    abstract abstractMethod(data:any): any;

    constructor(data: any, sendAt: Date, phoneSender: number) {
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
    constructor(message: string, sendAt: Date, phoneSender: number) {
        super(message, sendAt, phoneSender);
    }

    abstractMethod(data: string): string {
        return data
    }
}

export class MessageMidia extends Messeger {
    constructor(file: any, sendAt: Date, phoneSender: number) {
        super(file, sendAt, phoneSender)
    }

    abstractMethod(file: any): Promise<Object> {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const fileData = event.target.result;
                resolve({ fileData, fileName: file.name })
            }

            fileReader.readAsDataURL(file);
        })
    }
}

export class MessageAudio extends Messeger{
    constructor(audio:any,sendAt:Date, phoneSender:number){
        super(audio,sendAt,phoneSender);
    }

    async abstractMethod(audio: BlobPart[]): Promise<any> {
        const audioData = new Blob(audio,{
            type:"audio/mp3"
        })
        console.log(audio);
        return audioData;
    }
}