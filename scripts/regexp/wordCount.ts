export function count(s: string): Map<string, number> {
    s = s.toLowerCase()
    let check = s.match(/[a-zA-Z0-9\?]+('[a-zA-Z0-9\?]+)?/g) || []
    let wordList = new Map<string, number>()
  
    check.forEach(word => {
      wordList.set(word, (wordList.get(word) || 0) + 1)
    })
  
    return wordList
  }