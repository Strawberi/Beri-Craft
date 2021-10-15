// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc");
  event.create("raw_tin").displayName("Raw Tin");
  event.create("raw_lead").displayName("Raw Lead");
  event.create("raw_silver").displayName("Raw Silver");
  event.create("raw_nickel").displayName("Raw Nickel");
  event.create("raw_aluminum").displayName("Raw Bauxite");
  event.create("raw_uranium").displayName("Raw Uranium");
  event.create("heavy_bullet").displayName("Heavy Bullet");
  event.create("zinc_plate").displayName("Zinc Plate")
  event.create("coal_dust").displayName("Coal Dust").burnTime(1600);
  event.create("crude_steel_blend").displayName("Crude Steel Blend");

  event.create("crude_iron_pickaxe")
    .displayName("Crude Iron Pickaxe")
    .type("pickaxe")
    .tier("stone")
    .maxDamage(150);

  event.create("crude_stone_pickaxe")
    .displayName("Crude Stone Pickaxe")
    .type("pickaxe")
    .tier("wood")
    .maxDamage(50);

  event.create("copper_axe")
    .displayName("Copper Axe")
    .type("axe")
    .tier("stone")
    .maxDamage(131);

  event.create("copper_pickaxe")
    .displayName("Copper Pickaxe")
    .type("pickaxe")
    .tier("stone")
    .maxDamage(131);

  event.create("copper_shovel")
    .displayName("Copper Shovel")
    .type("shovel")
    .tier("stone")
    .maxDamage(131);

  event.create("copper_hoe")
    .displayName("Copper Hoe")
    .type("hoe")
    .tier("stone")
    .maxDamage(131);

  event.create("copper_sword")
    .displayName("Copper Sword")
    .type("sword")
    .tier("stone")
    .maxDamage(131);

  event.create("ceramic_shovel")
    .displayName("Ceramic Shovel")
    .type("shovel")
    .tier("gold")
    .maxDamage(44);

  event.create("ceramic_sword")
    .displayName("Ceramic Sword")
    .type("sword")
    .tier("gold")
    .maxDamage(44);

  event.create("ceramic_hoe")
    .displayName("Ceramic Hoe")
    .type("hoe")
    .tier("gold")
    .maxDamage(44);

  event.create("flint_axe")
    .displayName("Stone Hatchet")
    .type("axe")
    .tier("wood")
    .miningSpeed(2)
    .maxDamage(35);

});