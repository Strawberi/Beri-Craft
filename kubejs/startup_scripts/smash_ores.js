// priority: 0

let ores = {
    copper: "immersiveengineering:dust_copper",
    aluminum: "immersiveengineering:dust_aluminum",
    lead: "immersiveengineering:dust_lead",
    silver: "immersiveengineering:dust_silver",
    nickel: "immersiveengineering:dust_nickel",
    uranium: "immersiveengineering:dust_uranium",
    iron: "immersiveengineering:dust_iron",
    gold: "immersiveengineering:dust_gold"
  };
  
  onEvent("recipes", event => {
    for (let [input, output] of Object.entries(ores))
      event.shapeless(output, [ "#kubejs:rocks", "#forge:ores/" + input ]);
  });