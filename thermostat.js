class Thermostat {

  constructor(){
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true && this.temperature < 25) {
      this.temperature ++;
    } else if (this.powerSavingMode === false && this.temperature < 32) {
      this.temperature ++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    }
  }

  setPowerSavingMode(input) {
    this.powerSavingMode = input;
  }

    reset() {
      this.temperature = 20;
    }

    energyUsage() {
      if (this.temperature < 18) {
        return "low-usage";
      } else if (this.temperature <= 25) {
        return "medium-usage";
      } else
      return "high-usage";
    }

}



module.exports = Thermostat 