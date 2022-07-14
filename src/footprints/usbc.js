module.exports = {
    nets: {
      A: 'TX',
      B: 'RX',
      VCC: 'VCC',
      GND: 'GND'
    },
    params: {
      class: 'USBC'
    },
    body: p => {
      const standard = `
        (module USB_C_Receptacle_MUP_U22401 (layer F.Cu) (tedit 5EF90DE5)
  
        ${p.at /* parametric position */}   
  
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -5.295) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value USB_C_Receptacle_MUP_U22401 (at 0 5.45) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))  
        ${''/* corner marks */}
        (fp_line (start 6.2 -4.92) (end 6.2 4.5) (layer F.CrtYd) (width 0.05))
        (fp_line (start -6.2 -4.92) (end -6.2 4.5) (layer F.CrtYd) (width 0.05))
        (fp_line (start -6.2 4.5) (end 6.2 4.5) (layer F.CrtYd) (width 0.05))
        (fp_line (start -6.2 -4.92) (end 6.2 -4.92) (layer F.CrtYd) (width 0.05))
        (fp_line (start 4.47 -2.45) (end 4.47 4.05) (layer F.Fab) (width 0.1))
        (fp_line (start -4.47 4.05) (end 4.47 4.05) (layer F.Fab) (width 0.1))
        (fp_line (start -4.47 -2.45) (end -4.47 4.05) (layer F.Fab) (width 0.1))
        (fp_line (start -4.47 -2.45) (end 4.47 -2.45) (layer F.Fab) (width 0.1))
        (fp_line (start -4.62 4.05) (end 4.62 4.05) (layer Cmts.User) (width 0.12))
        (fp_line (start -4.62 4.05) (end -4.62 -2.65) (layer Cmts.User) (width 0.12))
        (fp_line (start 4.62 4.05) (end 4.62 -2.65) (layer Cmts.User) (width 0.12))
        (fp_line (start 4.62 -2.65) (end -4.62 -2.65) (layer Cmts.User) (width 0.12))
        (fp_line (start -4.6 4.05) (end 4.6 4.05) (layer Dwgs.User) (width 0.12))
        (fp_text user %R (at 0 0.35) (layer F.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text user "PCB edge" (at 0 3.05 ${p.rot}) (layer Dwgs.User)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        `
      function pins() {
        return `
        ${'' /* mount pads */}
        (pad S1 thru_hole oval (at 5.62 1.95 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.GND.str})
        (pad S1 thru_hole oval (at -5.62 1.95 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.GND.str})
        (pad S1 thru_hole oval (at -5.62 -2.05 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.GND.str})
        (pad S1 thru_hole oval (at 5.62 -2.05 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.GND.str})

        (pad A6 smd rect (at -0.25 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.A.str})
        (pad B6 smd rect (at 0.75 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.A.str})

        (pad B5 smd rect (at 1.75 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask))
        (pad A8 smd rect (at 1.25 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask))

        (pad A7 smd rect (at 0.25 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.B.str})
        (pad B7 smd rect (at -0.75 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.B.str})

        (pad A5 smd rect (at -1.25 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask))
        (pad B8 smd rect (at -1.75 -3.4 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Paste F.Mask))

        ${'' /* outer pads vcc / gnd */}
        (pad A12 smd rect (at 3.25 -3.4 ${p.rot}) (size 0.6 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.GND.str})
        (pad A4 smd rect (at -2.45 -3.4 ${p.rot}) (size 0.6 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.VCC.str})
        (pad A1 smd rect (at -3.25 -3.4 ${p.rot}) (size 0.6 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.GND.str})
        (pad A9 smd rect (at 2.45 -3.4 ${p.rot}) (size 0.6 1.3) (layers F.Cu F.Paste F.Mask) ${p.net.VCC.str})
        `
      }
    return `
            ${standard}
            ${pins()})
          `
    }
  }