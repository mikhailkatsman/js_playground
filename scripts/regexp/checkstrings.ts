export function hey(message: string): string {
    const m = message.trim()
  
    const lettersRegExp: RegExp = /[a-zA-Z]/
    
    if (m.length === 0) {
      return "Fine. Be that way!"
    }
    if (m[m.length - 1] === "?") {
      if (m === m.toUpperCase() && lettersRegExp.test(m)) {
        return "Calm down, I know what I'm doing!"
      }
      return "Sure."
    }
    if (m === m.toUpperCase() && lettersRegExp.test(m)) {
      return "Whoa, chill out!"
    }
    return "Whatever."
}