module.exports = {
    params: {
        variant: 'segment',
        net: undefined,
        side: 'F',
        from: [undefined, undefined],
        to: [undefined, undefined],
    },
    body: p => {

    if (p.param.variant == 'segment') {
        return `
        (segment (start ${p.param.from[0]} ${p.param.from[1]}) (end ${p.param.to[0]} ${p.param.to[1]}) (width 0.25) (layer ${p.param.side}.Cu) (net ${p.param.net}))
        `
    } else if (p.param.variant == 'via') {
        return `
        (via (at ${p.param.from[0]} ${p.param.from[1]}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net ${p.param.net}))
        `
    }
    }
}