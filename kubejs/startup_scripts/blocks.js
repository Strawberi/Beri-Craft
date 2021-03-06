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
            .material('iron')
            .hardness(2)
            .harvestTool("pickaxe", 0)
            .requiresTool(true)
            .displayName('Tin Ore')
})