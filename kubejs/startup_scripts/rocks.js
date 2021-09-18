let rocks = [
  ["stone", "minecraft:cobblestone", "minecraft:stone"],
  ["granite", "create:granite_cobblestone", "minecraft:granite"],
  ["diorite", "create:diorite_cobblestone", "minecraft:diorite"],
  ["andesite", "create:andesite_cobblestone", "minecraft:andesite"],
  ["sandstone", "minecraft:sandstone", "minecraft:sandstone"],
  ["red_sandstone", "minecraft:red_sandstone", "minecraft:red_sandstone"],
  ["blackstone", "minecraft:blackstone", "minecraft:blackstone"],
  ["deepslate", "cavesandcliffs:cobbled_deepslate", "cavesandcliffs:deepslate"],
  ["limestone", "create:limestone_cobblestone", "create:limestone"],
  ["weathered_limestone", "create:weathered_limestone_cobblestone", "create:weathered_limestone"],
  ["dolomite", "create:dolomite_cobblestone", "create:dolomite"],
  ["gabbro", "create:gabbro_cobblestone", "create:gabbro"],
  ["scoria", "create:scoria_cobblestone", "create:scoria"],
  ["dark_scoria", "create:dark_scoria_cobblestone", "create:dark_scoria"],
  ["brimstone", "quark:brimstone", "quark:brimstone"],
  ["limestone", "quark:limestone", "quark:limestone"],
  ["jasper", "quark:jasper", "quark:jasper"],
  ["marble", "quark:marble", "quark:marble"],
  ["slate", "quark:slate", "quark:slate"],
  ["basalt", "quark:basalt", "quark:basalt"],
  ["myalite", "quark:myalite", "quark:myalite"],
  ["permafrost", "quark:permafrost", "quark:permafrost"],
  ["cobbedstone", "quark:cobbedstone", "quark:cobbedstone"]
  // etc ...
];

onEvent("item.registry", event => {
  for (let [rock, cobble, stone] of rocks) {
    let name = rock[0].toUpperCase() + rock.substr(1);
    event.create(rock).displayName(name + " Rock");
  }
});

onEvent("item.tags", event => {
  for (let [rock, cobble, stone] of rocks) {
    let item = "kubejs:" + rock;
    event.add("kubejs:rocks", item);
  }
});

onEvent("recipes", event => {
  for (let [rock, cobble, stone] of rocks) {
    let item = "kubejs:" + rock;

    event.shaped("1x " + cobble, ["SS", "SS"], { S: item });
    event.shaped("1x " + cobble + "_stairs", ["S ", "SS"], { S: item });
    event.shaped("1x " + cobble + "_slab", ["SS"], { S: item });

    event.shapeless("4x " + item, [cobble]);
    event.shapeless("3x " + item, [cobble + "_stairs"]);
    event.shapeless("2x " + item, [cobble + "_slab"]);
  }
});

onEvent("block.loot_tables", event => {
  for (let [rock, cobble, stone] of rocks) {
    let item = "kubejs:" + rock;
    event.build(stone, table => {
      table.pool(pool => {
        pool.rolls = 1;
        // With silk touch, drop stone block itself.
        pool.addEntry({
          type: "minecraft:item",
          name: stone,
          conditions: [{
            condition: "minecraft:match_tool",
            predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
          }]
        });
        // Otherwise, drop 4x rocks.
        pool.addEntry({
          type: "minecraft:item",
          name: item,
          functions: [{ function: "set_count", count: 4 }]
        });
      });
    });
  }
});