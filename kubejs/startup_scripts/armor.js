let armors = [
    //Type          Durability      BaseArmor       Enchantability      Toughness       KnockbackResist
    ["bronze",      12,             6,              10,                 0,              0],
    ["uranium",     7,              5,              20,                 0,              0.1],
    ["aluminum",    10,             4,              9,                  0,              0],
    ["enderium",    35,             8,              20,                 2.5,            0.1],
    ["lumium",      12,             5,              25,                 0,              0],
    ["signalum",    7,              4,              20,                 0,              0],
    ["constantan",  12,             5,              9,                  0,              0],
    ["invar",       20,             6,              9,                  1,              0],
    ["electrum",    8,              5,              30,                 0,              0],
    ["nickel",      12,             6.5,            8,                  0,              0],
    ["lead",        7,              5,              9,                  0,              0.1],
    ["tin",         10,             4,              9,                  0,              0],
    ["brass",       17,             6.75,           5,                  0,              0],
    ["zinc",        10,             4,              9,                  0,              0]
]

onEvent('item.registry.armor_tiers', event => {
    for (let [mat, d, b, e, t, k] of armors){
        // Slot indicies are [HEAD, BODY, LEGS, FEET]
        event.add(mat, tier => {
            tier.durabilityMultiplier = d // Each slot will be multiplied with [13, 15, 16, 11]
            tier.slotProtections = [(7/12)*b, b, (3/4)*b, (1/2)*b]
            tier.enchantmentValue = e
            tier.equipSound = 'minecraft:item.armor.equip_iron'
            tier.repairIngredient = '#forge:ingots/' + mat
            tier.toughness = t // diamond has 2.0, netherite 3.0
            tier.knockbackResistance = k
        })
    }
})

onEvent('item.registry', event => {
    for (let [mat, d, b, e, t, k] of armors){
        event.create(mat + "_helmet").displayName(mat[0].toUpperCase() + mat.substr(1) + " Helmet").type("helmet").tier(mat)
        event.create(mat + "_chestplate").displayName(mat[0].toUpperCase() + mat.substr(1) + " Chestplate").type("chestplate").tier(mat)
        event.create(mat + "_leggings").displayName(mat[0].toUpperCase() + mat.substr(1) + " Leggings").type("leggings").tier(mat)
        event.create(mat + "_boots").displayName(mat[0].toUpperCase() + mat.substr(1) + " Boots").type("boots").tier(mat)
    }
})

onEvent("recipes", event => {
    for (let [mat, d, b, e, t, k] of armors){
        let plate = "#forge:plates/" + mat;
        event.shaped("1x kubejs:" + mat + "_helmet", ["SSS","S S"], {S: plate});
        event.shaped("1x kubejs:" + mat + "_chestplate", ["S S","SSS","SSS"], {S: plate});
        event.shaped("1x kubejs:" + mat + "_leggings", ["SSS","S S","S S"], {S: plate});
        event.shaped("1x kubejs:" + mat + "_boots", ["S S","S S"], {S: plate});
    }
})