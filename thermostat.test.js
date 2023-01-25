const Thermostat = require('./thermostat');

  describe('thermostat', () => {

  it('returns the thermostat temperature', () => {
    const myThermostat = new Thermostat()
    expect(myThermostat.getTemperature()).toBe(20)
  });

  it('raises the thermostat temperature', () => {
    const myThermostat = new Thermostat()
    myThermostat.up()
    expect(myThermostat.getTemperature()).toBe(21)
  });

  it('lowers the thermostat temperature', () => {
    const myThermostat = new Thermostat()
    myThermostat.down()
    expect(myThermostat.getTemperature()).toBe(19)
  });

  it('switches power saving off', () => {
    const myThermostat = new Thermostat()
    myThermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      myThermostat.up();
    }
    expect(myThermostat.getTemperature()).toBe(32)
  });

  it('maxes out at 25', () => {
    const myThermostat = new Thermostat()
    for (let i = 0 ; i < 20 ; i++) {
      myThermostat.up();
    }
    expect(myThermostat.getTemperature()).toBe(25)
  });

  it('resets to 20', () => {
    const myThermostat = new Thermostat()
    for (let i = 0 ; i < 20 ; i++) {
      myThermostat.up();
    }
    myThermostat.reset();
    expect(myThermostat.getTemperature()).toBe(20)
  });

  it('doesnt go lower than 10', () => {
    const myThermostat = new Thermostat()
    for (let i = 0 ; i < 20 ; i++) {
      myThermostat.down();
    }
    expect(myThermostat.getTemperature()).toBe(10)
  });

  it('returns energy usage - low', () => {
    const myThermostat = new Thermostat()
    myThermostat.down();
    myThermostat.down();
    myThermostat.down();
    expect(myThermostat.energyUsage()).toBe("low-usage")
  });

  it('returns energy usage - medium', () => {
    const myThermostat = new Thermostat()
    expect(myThermostat.energyUsage()).toBe("medium-usage")
  });

  it('returns energy usage - high', () => {
    const myThermostat = new Thermostat()
    myThermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      myThermostat.up();
    }
    expect(myThermostat.energyUsage()).toBe("high-usage")
  });

});