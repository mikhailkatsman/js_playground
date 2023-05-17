export class Clock {
  private _hour: number = 0
  private _minute: number = 0
  
  constructor(hour: number, minute: number = 0) {
    this.setTime(hour, minute)
  }

  private setTime(hour: number = 0, minute: number) {
    while (minute < 0) {
      minute += 60
      hour--
    }
    while (minute > 59) {
      minute -= 60
      hour++
    }
    this._minute += minute
    
    while (hour < 0) hour += 24
    while (hour > 23) hour -= 24
    this._hour += hour
  }

  public toString(): string {
    const hour:string = this._hour < 10 ? `0${this._hour}` : `${this._hour}`
    const minute:string = this._minute < 10 ? `0${this._minute}` : `${this._minute}`
    return hour + ':' + minute
  }

  public plus(minutes: number): Clock {
    return new Clock(this._hour, this._minute + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this._hour, this._minute - minutes)
  }

  public equals(other: Clock): boolean {
    if (this._hour !== other._hour) return false
    return this._minute === other._minute ? true : false
  }
}