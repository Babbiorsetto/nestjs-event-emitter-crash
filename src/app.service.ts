import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  getHello(): string {
    console.log("before event")
    // same with emitAsync
    this.eventEmitter.emit(EventsEnum.CRASH_ME_ASYNC);
    console.log("after event")
    return 'Hello World!';
  }
}
