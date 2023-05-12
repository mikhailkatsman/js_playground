export class Matrix {
    public matrix: number[][] = []
    
    constructor(data: string) {
      const rowStr: string[] = data.split('\n')
      rowStr.forEach(row => {
        const rowNum: number[] = row.split(' ').map(r => parseInt(r))
        this.matrix.push(rowNum)
      })
    }
  
    get rows(): number[][] {
      return this.matrix.slice()
    }
  
    get columns(): number[][] {
      var cols: number[][] = []
      for (let i = 0; i < this.matrix[0].length; i++) cols.push([])
      
      this.matrix.forEach(row => {
        row.forEach((num, index) => {
          cols[index].push(num)
        })
      })
      
      return cols
    }
  }