onEvent('block.registry', event => {
    event.create('copper_sand')
        .material('sand')
        .hardness(1.0)
        .harvestTool("shovel",0)
        .displayName('Coppery Sand')
})