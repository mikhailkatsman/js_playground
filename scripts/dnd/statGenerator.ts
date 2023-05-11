export class DnDCharacter {
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    public hitpoints: number;
  
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore();
      this.dexterity = DnDCharacter.generateAbilityScore();
      this.constitution = DnDCharacter.generateAbilityScore();
      this.intelligence = DnDCharacter.generateAbilityScore();
      this.wisdom = DnDCharacter.generateAbilityScore();
      this.charisma = DnDCharacter.generateAbilityScore();
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
  
    public static generateAbilityScore(): number {
      var rolls: number[] = []
      for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1)
      }
  
      rolls.sort((a, b) => b - a)
  
      var stat: number = 0
      for (let i = 0; i < 3; i++) {
        stat += rolls[i]
      }
      
      return stat
    }
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2)
    }
  }