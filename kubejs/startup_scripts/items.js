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
  event.create("steel_blend").displayName("Steel Blend");
  event.create("steel_ingot").displayName("Steel Ingot");
  event.create("steel_plate").displayName("Steel Plate");
  event.create("uranium_ingot").displayName("Uranium Ingot");
  event.create("uranium_ingot").displayName("Uranium Plate");
  event.create("primitive_coke_oven").displayName("Primitive Coke Oven");
  event.create("coke_dust").displayName("Coke Dust");

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