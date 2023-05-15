export class GradeSchool {
    private db: { [key: number]: string[] } = {}
    
    private roster(): { [key: number]: string[] } {
      return JSON.parse(JSON.stringify(this.db))
    }
  
    public add(student: string, gradeNum: number): void {
      for (const grade in this.db) {
        const students: string[] = this.db[grade]
        const studentIndex = students.indexOf(student)
        if (studentIndex !== -1) {
          students.splice(studentIndex, 1)
        }
      }
      
      if (!this.db[gradeNum]) {
        this.db[gradeNum] = []
      }
      
      this.db[gradeNum].push(student)
      this.db[gradeNum].sort()
    }
  
    private grade(gradeNum: number): string[] {
      const dbCopy = JSON.parse(JSON.stringify(this.db))
      return dbCopy[gradeNum] ?? []
    }
  }