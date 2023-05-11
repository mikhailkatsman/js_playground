export function isPangram(text: string): boolean {
    const chars: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
    const textCheck:string = text.toLowerCase()
  
    for (let i = 0; i < textCheck.length; i++) {
      const index: number = chars.indexOf(textCheck[i])
      if (index !== -1) chars.splice(index, 1)
    }
  
    console.debug(chars)
    return chars.length > 0 ? false : true
  }