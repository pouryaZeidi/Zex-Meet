declare module 'simple-peer' {
    import { EventEmitter } from 'events';

    interface PeerOptions {
        initiator?: boolean;
        trickle?: boolean;
        stream?: MediaStream;
    }

    export default class Peer extends EventEmitter {
        constructor(options?: PeerOptions);
        signal(data: any): void;
        send(data: string): void;
        destroy(): void;
        addStream(stream: MediaStream): void; // اینجا متد را تعریف کنید
    }
}
