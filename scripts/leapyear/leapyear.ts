function isLeap(year: number) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.debug("passed /400")
          return true
        }
        console.debug("failed /100")
        return false
      }
      console.debug("passed /4")
      return true
    }
    console.debug("failed /4")
    return false
  }
  
  console.debug(isLeap(1996))