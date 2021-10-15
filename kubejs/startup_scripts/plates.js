let plates = [
    ["tin", "thermal:tin_ingot"],
    ["terminite", "betterendforge:terminite_ingot"],
    ["thallasium", "betterendforge:thallasium_ingot"],
    ["aeternium", "bettereendforge:aeternium_ingot"],
    ["enderium", "thermal:enderium_ingot"],
    ["lumium", "thermal:lumium_ingot"],
    ["signalum", "thermal:signalum_ingot"],
    ["invar", "thermal:invar_ingot"],
    ["bronze", "thermal:bronze_ingot"],
    ["zinc", "create:zinc_ingot"]
];

onEvent("item.registry", event => {
    for (let [plate, _] of plates) {
      let name = plate[0].toUpperCase() + plate.substr(1);
      event.create(plate + "_plate").displayName(name + " Plate");
    }
  });

  onEvent("item.tags", event => {
    for (let [plate, _] of plates) {
      let item = "kubejs:" + plate;
      event.add("forge:plates", item);
      event.add("forge:plates/" + plate, item);
    }
  });

  onEvent("recipes", event => {
    for (let [plate, ingot] of plates) {
      let item = "kubejs:" + plate;
      event.pressing("1x " + plate, ingot);
    }
  });