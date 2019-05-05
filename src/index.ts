export type Listener = (...data: any[]) => any;

export interface ListenerMap {
  [name: string]: Listener[];
}

const listenerMap: ListenerMap = {};

export const emit = (event: string, ...data: any[]) => {
  const listeners = listenerMap[event];
  if (!listeners) return;

  listeners.forEach(listener => listener(...data));
};

export const unsubscribe = (listener: Listener | string) => {
  if (typeof listener === "string") {
    listenerMap[listener] = [];
    return;
  }

  Object.values(listenerMap).forEach(value => {
    const index = value.indexOf(listener);
    if (index === -1) return;

    value.splice(index, 1);
  });
};

export const on = (event: string, listener: Listener) => {
  listenerMap[event] = listenerMap[event] || [];
  listenerMap[event].push(listener);
  return () => unsubscribe(listener);
};

export const eventBus = Object.freeze({ emit, on, unsubscribe });
