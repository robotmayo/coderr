export default class Coderr extends Error {
  public code: string;
  constructor(message?: string, code?: string) {
    super(message);
    this.code = code;
  }
}

export function wrap(e: Error, code?: string): Coderr {
  const k = e as Coderr;
  k.code = code;
  return k;
}
