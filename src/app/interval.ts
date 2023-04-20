
export class Interval {
  // Private fields
  #hours: number;
  #minutes: number;
  #seconds: number;

  // region Getters
  get hours(): number {
    return this.#hours;
  }
  get hoursPad12Hr(): string {
    return (this.#hours > 12 ? this.#hours - 12 : this.#hours).toString().padStart(2, '0');
  }

  get minutes(): number {
    return this.#minutes;
  }
  get minutesPad(): string {
    return this.#minutes.toString().padStart(2, '0');
  }

  get seconds(): number {
    return this.#seconds;
  }
  get secondsPad(): string {
    return this.#seconds.toString().padStart(2, '0');
  }

  constructor(hours: number, minutes: number, seconds: number) {
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;
    if (hours < 0) {
      throw new Error(`Hours (${hours}) out of bounds [0,Infinity)`);
    }
    if (minutes > 59 || minutes < 0) {
      throw new Error(`Minutes (${minutes}) out of bounds [0,59]`);
    }
    if (seconds > 59 || seconds < 0) {
      throw new Error(`Seconds (${seconds}) out of bounds [0,59]`);
    }
  }
}
