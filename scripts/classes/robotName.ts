export class Robot {
  private _names: string[] = []
  
  constructor() {
    this._names.push(this.generator())
  }

  generator(): string {
    const nums: string = '0123456789'
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var buffer: string[] = []
    for (let i = 0; i < 2; i++) buffer.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    for (let i = 0; i < 3; i++) buffer.push(nums.charAt(Math.floor(Math.random() * nums.length)))

    return buffer.join('')
  }

  public get name(): string {
    return this._names[this._names.length - 1]
  }

  public resetName(): void {
    let newName: string
    while (true) {
      newName = this.generator()
      if (this._names.indexOf(newName) === -1) {
        this._names.push(newName)
        break
      }
    }
  }

  public static releaseNames(): void {
    
  }
}
