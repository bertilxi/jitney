import { eventBus } from "../src";

describe("Event Bus", () => {
  beforeEach(() => {
    eventBus.unsubscribe("test");
  });

  it("should emit and unsubscribe", done => {
    const onTest = jest.fn((_payload: any) => {});
    const unsubscribe = eventBus.on("test", onTest);

    eventBus.emit("test", 42);
    unsubscribe();
    eventBus.emit("test", 42);
    eventBus.emit("test", 42);

    expect(onTest.mock.calls.length).toBe(1);
    expect(onTest.mock.calls[0][0]).toBe(42);
    done();
  });
});
