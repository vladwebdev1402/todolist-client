import { makeAutoObservable } from "mobx";
import { IMessage } from "../../types/IMessage";

class SocketStore {
    messages: IMessage[] = []

    constructor() {
        makeAutoObservable(this);
    }

    addMessage(message: IMessage) {
        this.messages.push(message);
    }
}

export default new SocketStore();