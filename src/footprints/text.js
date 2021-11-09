module.exports = {
    params: {
        layer: 'F.SilkS',
        text: '',
        h_size: 1,
        v_size: 1,
        thickness: 0.15
    },
    body: p => `
        (gr_text "${p.text}" ${p.at} (layer ${p.param.layer}) (effects (font (size ${p.param.h_size} ${p.param.v_size}) (thickness ${p.param.thickness}))))
    `
}
