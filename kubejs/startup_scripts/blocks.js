onEvent('block.registry', event => {
    event.create('copper_sand')
        .material('sand')
        .hardness(1.0)
        .harvestTool("shovel", 0)
        .displayName('Coppery Sand');
    event.create('copper_gravel')
        .material('clay')
        .hardness(1.0)
        .harvestTool("shovel", 0)
        .displayName('Coppery Gravel');
        event.create('tin_ore')
            .material('ground')
            .hardness(2)
            .harvestTool("pickaxe", 1)
            .requiresTool(true)
            .displayName('Tin Ore')
})