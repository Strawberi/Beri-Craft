// priority: 0

let ores = {
    copper: "thermal:copper_dust",
    aluminum: "immersiveengineering:dust_aluminum",
    lead: "thermal:lead_dust",
    silver: "thermal:silver_dust",
    nickel: "thermal:nickel_dust",
    uranium: "immersiveengineering:dust_uranium",
    iron: "thermal:iron_dust",
    gold: "thermal:gold_dust",
    tin: "thermal:tin_dust"
  };
  
  onEvent("recipes", event => {
    for (let input in ores) {
      let output = ores[input];
      event.shapeless(output, [ "#kubejs:rocks", "#forge:ores/" + input ]);
    }
  });