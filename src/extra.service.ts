import { Injectable } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class ExtraService {
    
    // Does not crash
    @OnEvent(EventsEnum.DONT_CRASH_ME_SYNC, {async: false})
    onCrashMeSync() {
        console.log(EventsEnum.DONT_CRASH_ME_SYNC)
        throw new Error("Error");
    }

    // Crashes
    @OnEvent(EventsEnum.CRASH_ME_ASYNC, {async: true})
    onCrashMeAsync() {
        console.log(EventsEnum.CRASH_ME_ASYNC)
        throw new Error("Error");
    }

    // Crashes
    @OnEvent(EventsEnum.CRASH_ME_ASYNC_2, {async: true})
    async onCrashMeAsync2() {
        await console.log(EventsEnum.CRASH_ME_ASYNC_2)
        throw new Error("Error");
    }

    // Crashes
    @OnEvent(EventsEnum.CRASH_ME_ASYNC_3, {async: false})
    async onCrashMeAsync3() {
        await console.log(EventsEnum.CRASH_ME_ASYNC_3)
        throw new Error("Error");
    }

}
