export default class Person {
    x: number;
    y: number;
    status: string;
    vaccinated: boolean;
  
    constructor(x: number, y: number, vaccinated: boolean, status = "healthy") {
      this.x = x;
      this.y = y;
      this.vaccinated = vaccinated;
      this.status = status;
    }
  
    tryToInfect(
      p5: any,
      people: Person[],
      infectionRadius: number,
      infectionProbability: number,
      vaccineEfficacy: number
    ) {
      if (this.status === "healthy") {
        for (let other of people) {
          if (other.status === "infected") {
            const d = p5.dist(this.x, this.y, other.x, other.y);
            if (d < infectionRadius && (!this.vaccinated || Math.random() > vaccineEfficacy)) {
              if (Math.random() < infectionProbability) {
                this.status = "infected";
              }
            }
          }
        }
      }
    }
  
    move(p5: any) {
      this.x += p5.random(-5, 5);
      this.y += p5.random(-5, 5);
      this.x = p5.constrain(this.x, 0, p5.width);
      this.y = p5.constrain(this.y, 0, p5.height);
    }
  
    show(p5: any) {
      if (this.status === "healthy") p5.fill(100, 200, 255);
      else if (this.status === "infected") p5.fill(255, 100, 100);
      else p5.fill(0, 255, 0);
      p5.ellipse(this.x, this.y, 20, 20);
    }
  
    recover(vaccinatedRecoveryRate: number, unvaccinatedRecoveryRate: number) {
      if (this.status === "infected") {
        const recoveryChance = this.vaccinated ? vaccinatedRecoveryRate : unvaccinatedRecoveryRate;
        if (Math.random() < recoveryChance) this.status = "recovered";
      }
    }
  }
  