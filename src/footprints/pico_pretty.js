//  RaspBerry pi pico 2040
//  Take care to bridge the pads on the correct side of the pcb
//    To orient the MCU up, meaning power led faces away from pcb, bridge the pads on the side of the pcb with the MCU
//    To orient the MCU down, meaning power led faces the pcb, bridge the pads on the opposite side of the pcb

module.exports = {
    nets: {
      RAW: 'RAW',
      GND: 'GND',
      RST: 'RST',
      VCC: 'VCC',
      RUN: 'RUN',
      VREF: 'VREF',
      VCC_EN: 'VCC_EN',
      VSYS: 'VSUS',
      P0: 'P0',
      P1: 'P1',
      P2: 'P2',
      P3: 'P3',
      P4: 'P4',
      P5: 'P5',
      P6: 'P6',
      P7: 'P7',
      P8: 'P8',
      P9: 'P9',
      P10: 'P10',
      P11: 'P11',
      P12: 'P12',
      P13: 'P13',
      P14: 'P14',
      P15: 'P15',
      P16: 'P16',
      P17: 'P17',
      P18: 'P18',
      P19: 'P19',
      P20: 'P20',
      P21: 'P21',
      P22: 'P22',
      P26: 'P26',
      P27: 'P27',
      P28: 'P28'
    },
    params: {
      class: 'MCU',
    },
    body: p => {
      return `
      (module Raspberry_Pi_Pico_2040 (layer F.Cu) (tedit 632407BE)
        ${p.at /* parametric position */}
  
      ${'' /* footprint description, tags and reference */}
      (descr "Solder-jumper reversible Pi Pico footprint")
      (tags "promicro ProMicro reversible solder jumper")
      (fp_text reference "${p.ref}" (at -0.6 26.725 ${p.rot + 180}) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )

  (fp_text value Raspberry_Pi_Pico (at 0.075 26.6 ${p.rot + 180}) (layer B.Fab)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user VBUS (at 3.468761 -24.1 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user VSYS (at 3.349713 -21.560527 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at 3.063999 -19.021054 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user 3V3_EN (at 4.278284 -16.481581 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user 3V3 (at 2.921142 -13.942108 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user ADC_VREF (at 5.159237 -11.402635 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP28_A2 (at 4.778284 -8.863162 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user AGND (at 3.49257 -6.323689 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP27_A1 (at 4.778284 -3.784216 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP26_A0 (at 4.778284 -1.244743 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user RUN (at 3.087808 1.29473 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP22 (at 3.49257 3.834203 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at 3.063999 6.373676 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP21 (at 3.49257 8.913149 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP20 (at 3.49257 11.452622 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP19 (at 3.49257 13.992095 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP18 (at 3.49257 16.531568 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at 3.063999 19.071041 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP17 (at 3.49257 21.610514 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP16 (at 3.49257 24.15 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP0 (at -3.076 -24.071 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP1 (at -3.076 -21.531527 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at -3.123619 -18.992054 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP2 (at -3.076 -16.452581 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP3 (at -3.076 -13.913108 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP4 (at -3.076 -11.373635 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP5 (at -3.076 -8.834162 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at -3.123619 -6.294689 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP6 (at -3.076 -3.755216 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP7 (at -3.076 -1.215743 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP8 (at -3.076 1.32373 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP9 (at -3.076 3.863203 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at -3.123619 6.402676 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP10 (at -3.552191 8.942149 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP11 (at -3.552191 11.481622 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP12 (at -3.552191 14.021095 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP13 (at -3.552191 16.560568 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GND (at -3.123619 19.100041 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP14 (at -3.552191 21.639514 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user GP15 (at -3.552191 24.179 ${p.rot}) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_line (start 3.775 -21.15) (end -3.825 -21.15) (layer B.Fab) (width 0.15))
  (fp_line (start 3.8 -26.3) (end 3.8 -21.2) (layer F.Fab) (width 0.15))
  (fp_line (start -3.8 -26.3) (end -3.8 -21.2) (layer F.Fab) (width 0.15))
  (fp_line (start 4 -26.8) (end 4 -26.3) (layer F.Fab) (width 0.15))
  (fp_line (start -4 -26.8) (end -4 -26.3) (layer F.Fab) (width 0.15))
  (fp_line (start -4 -26.3) (end 4 -26.3) (layer F.Fab) (width 0.15))
  (fp_line (start -4 -26.8) (end 4 -26.8) (layer F.Fab) (width 0.15))
  (fp_line (start -10.5 -25.5) (end -10.5 25.5) (layer F.Fab) (width 0.15))
  (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer F.Fab) (width 0.15))
  (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer F.Fab) (width 0.15))
  (fp_line (start -10.5 25.5) (end 10.5 25.5) (layer F.Fab) (width 0.15))
  (fp_text user GP4 (at 3.026 -11.398635 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP3 (at 3.026 -13.938108 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP2 (at 3.026 -16.477581 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at 3.073619 -19.017054 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP1 (at 3.026 -21.556527 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP0 (at 3.026 -24.096 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP5 (at 3.026 -8.859162 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at 3.073619 -6.319689 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP6 (at 3.026 -3.780216 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP7 (at 3.026 -1.240743 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP8 (at 3.026 1.29873 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP9 (at 3.026 3.838203 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at 3.073619 6.377676 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP10 (at 3.502191 8.917149 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP11 (at 3.502191 11.456622 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP12 (at 3.502191 13.996095 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP13 (at 3.502191 16.535568 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at 3.073619 19.075041 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP14 (at 3.502191 21.614514 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP15 (at 3.502191 24.154 ${p.rot + 180}) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP16 (at -3.35743 -24.075) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP17 (at -3.35743 -21.535514) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP19 (at -3.35743 -13.917095) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP18 (at -3.35743 -16.456568) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at -3.786001 -18.996041) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP21 (at -3.35743 -8.838149) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP20 (at -3.35743 -11.377622) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP26_A0 (at -2.071716 1.319743) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP27_A1 (at -2.071716 3.859216) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user AGND (at -3.35743 6.398689) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user RUN (at -3.762192 -1.21973) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP22 (at -3.35743 -3.759203) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at -3.786001 -6.298676) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user 3V3 (at -3.928858 14.017108) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user ADC_VREF (at -1.690763 11.477635) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GP28_A2 (at -2.071716 8.938162) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user VBUS (at -3.381239 24.175) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user VSYS (at -3.500287 21.635527) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user GND (at -3.786001 19.096054) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user 3V3_EN (at -2.571716 16.556581) (layer B.SilkS)
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (pad 34 smd custom (at 0.774 -8.89 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P28.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 7 smd custom (at -0.774 -8.89 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P5.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 34 smd custom (at 0.774 -8.89 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P28.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -8.89 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -8.89 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 7 smd custom (at -6.15 -8.89 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P5.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -8.89 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 34 thru_hole circle (at 0.774 -8.89 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P28.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -8.89 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 7 smd custom (at -0.774 -8.89 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P5.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -8.89 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 34 smd custom (at 6.15 -8.89 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P28.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 -8.89 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -8.89 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 34 smd custom (at -6.15 -8.89 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P28.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -8.89 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 7 thru_hole circle (at -0.774 -8.89 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P5.str}
    (zone_connect 0))
  (pad 7 smd custom (at 6.15 -8.89 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P5.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 35 smd custom (at 0.774 -11.43 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.VREF.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -11.43 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -11.43 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 6 smd custom (at -6.15 -11.43 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P4.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -11.43 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 6 smd custom (at -0.774 -11.43 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P4.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -11.43 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -11.43 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 35 smd custom (at -6.15 -11.43 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.VREF.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -11.43 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 6 thru_hole circle (at -0.774 -11.43 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P4.str}
    (zone_connect 0))
  (pad 35 smd custom (at 0.774 -11.43 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.VREF.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 6 smd custom (at -0.774 -11.43 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P4.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 35 thru_hole circle (at 0.774 -11.43 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.VREF.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -11.43 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 -11.43 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 6 smd custom (at 6.15 -11.43 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P4.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 35 smd custom (at 6.15 -11.43 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.VREF.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 36 smd custom (at 0.774 -13.97 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.VCC.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -13.97 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -13.97 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 5 smd custom (at -6.15 -13.97 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P3.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -13.97 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 5 smd custom (at -0.774 -13.97 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P3.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -13.97 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -13.97 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 36 smd custom (at -6.15 -13.97 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.VCC.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -13.97 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 5 thru_hole circle (at -0.774 -13.97 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P3.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -13.97 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 36 smd custom (at 0.774 -13.97 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.VCC.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 36 thru_hole circle (at 0.774 -13.97 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.VCC.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -13.97 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 36 smd custom (at 6.15 -13.97 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.VCC.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 5 smd custom (at -0.774 -13.97 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P3.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 5 smd custom (at 6.15 -13.97 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P3.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 37 smd custom (at 0.774 -16.51 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.VCC_EN.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -16.51 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -16.51 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 4 smd custom (at -6.15 -16.51 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask)  ${p.net.P2.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 4 smd custom (at -0.774 -16.51 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P2.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 4 smd custom (at 6.15 -16.51 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P2.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 4 smd custom (at -0.774 -16.51 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P2.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -16.51 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -16.51 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 37 smd custom (at -6.15 -16.51 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.VCC_EN.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -16.51 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 4 thru_hole circle (at -0.774 -16.51 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P2.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -16.51 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 37 smd custom (at 0.774 -16.51 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.VCC_EN.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 -16.51 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 37 smd custom (at 6.15 -16.51 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.VCC_EN.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 37 thru_hole circle (at 0.774 -16.51 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.VCC_EN.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 -16.51 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 38 smd custom (at 0.774 -19.05 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -19.05 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -19.05 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 3 smd custom (at -6.15 -19.05 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 3 smd custom (at -0.774 -19.05 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 3 smd custom (at 6.15 -19.05 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 3 smd custom (at -0.774 -19.05 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -19.05 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -19.05 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 38 smd custom (at -6.15 -19.05 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -19.05 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 3 thru_hole circle (at -0.774 -19.05 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -19.05 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 38 smd custom (at 0.774 -19.05 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 -19.05 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 38 smd custom (at 6.15 -19.05 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 38 thru_hole circle (at 0.774 -19.05 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 -19.05 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 -21.59 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 39 smd custom (at 0.774 -21.59 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.VSYS.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 -21.59 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd rect (at -8.14 -21.59 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -21.59 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 39 smd custom (at -6.15 -21.59 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.VSYS.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -21.59 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 2 smd custom (at 6.15 -21.59 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask)  ${p.net.P1.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 2 smd custom (at -0.774 -21.59 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P1.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -21.59 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -21.59 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 2 smd custom (at -6.15 -21.59 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P1.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 2 smd custom (at -0.774 -21.59 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P1.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 2 thru_hole circle (at -0.774 -21.59 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P1.str}
    (zone_connect 0))
  (pad 39 thru_hole circle (at 0.774 -21.59 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.VSYS.str}
    (zone_connect 0))
  (pad 39 smd custom (at 0.774 -21.59 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.VSYS.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 39 smd custom (at 6.15 -21.59 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.VSYS.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -21.59 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" thru_hole circle (at -8.89 -24.13) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -21.59) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -19.05) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -16.51) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -13.97) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -11.43) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -8.89) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -6.35) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -3.81) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 -1.27) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 3.81) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 1.27) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 11.43) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 13.97) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 16.51) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 6.35) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 8.89) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 19.05) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 21.59) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at -8.89 24.13) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 8.89) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -16.51) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -11.43) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 3.81) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -13.97) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 16.51) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 13.97) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 6.35) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -3.81) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -6.35) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 19.05) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -21.59) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 11.43) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -19.05) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -24.13) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 24.13) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 21.59) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -1.27) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 1.27) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" thru_hole circle (at 8.89 -8.89) (size 1.524 1.524) (drill 0.8128) (layers *.Cu B.Mask))
  (pad "" smd rect (at -8.14 -24.13 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -24.13 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 1 smd custom (at -6.15 -24.13 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P0.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 1 smd custom (at -0.774 -24.13 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P0.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 1 thru_hole circle (at -0.774 -24.13 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P0.str}
    (zone_connect 0))
  (pad 40 thru_hole circle (at 0.774 -24.13 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.RAW.str}
    (zone_connect 0))
  (pad 40 smd custom (at 0.774 -24.13 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.RAW.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 40 smd custom (at 6.15 -24.13 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.RAW.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -24.13 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 -24.13 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 40 smd custom (at 0.774 -24.13 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.RAW.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 -24.13 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd rect (at -8.14 -24.13 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -24.13 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 40 smd custom (at -6.15 -24.13 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.RAW.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -24.13 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 1 smd custom (at 6.15 -24.13 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P0.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 1 smd custom (at -0.774 -24.13 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P0.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -6.35 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 33 smd custom (at 6.15 -6.35 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 8 smd custom (at -0.774 -6.35 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 33 smd custom (at 0.774 -6.35 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -6.35 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd custom (at -7.154 -6.35 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 33 smd custom (at 0.774 -6.35 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 -6.35 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -6.35 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 33 smd custom (at -6.15 -6.35 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -6.35 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 8 thru_hole circle (at -0.774 -6.35 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad 8 smd custom (at 6.15 -6.35 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 8 smd custom (at -6.15 -6.35 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -6.35 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 33 thru_hole circle (at 0.774 -6.35 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -6.35 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 8 smd custom (at -0.774 -6.35 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 9 smd custom (at -0.774 -3.81 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P6.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -3.81 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -3.81 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 32 smd custom (at 6.15 -3.81 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P27.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 -3.81 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -3.81 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 32 smd custom (at -6.15 -3.81 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P27.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -3.81 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 9 thru_hole circle (at -0.774 -3.81 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P6.str}
    (zone_connect 0))
  (pad 9 smd custom (at 6.15 -3.81 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P6.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 9 smd custom (at -6.15 -3.81 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P6.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -3.81 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 32 thru_hole circle (at 0.774 -3.81 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P27.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -3.81 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 9 smd custom (at -0.774 -3.81 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P6.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -3.81 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 32 smd custom (at 0.774 -3.81 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P27.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 32 smd custom (at 0.774 -3.81 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P27.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -1.27 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 10 smd custom (at -0.774 -1.27 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P7.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd custom (at -7.154 -1.27 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 31 smd custom (at 6.15 -1.27 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P26.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 -1.27 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 -1.27 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 31 smd custom (at -6.15 -1.27 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P26.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -1.27 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 10 thru_hole circle (at -0.774 -1.27 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P7.str}
    (zone_connect 0))
  (pad 10 smd custom (at 6.15 -1.27 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P7.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 10 smd custom (at -6.15 -1.27 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P7.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 -1.27 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 31 thru_hole circle (at 0.774 -1.27 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P26.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 -1.27 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 10 smd custom (at -0.774 -1.27 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P7.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 -1.27 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 31 smd custom (at 0.774 -1.27 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P26.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 31 smd custom (at 0.774 -1.27 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P26.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 11 smd custom (at -0.774 1.27 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P8.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 1.27 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd rect (at 8.14 1.27 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 1.27 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 30 smd custom (at -6.15 1.27 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.RUN.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 1.27 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 11 thru_hole circle (at -0.774 1.27 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P8.str}
    (zone_connect 0))
  (pad 11 smd custom (at 6.15 1.27 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P8.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 11 smd custom (at -6.15 1.27 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P8.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 1.27 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 30 thru_hole circle (at 0.774 1.27 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.RUN.str}
    (zone_connect 0))
  (pad "" smd rect (at 8.14 1.27 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 11 smd custom (at -0.774 1.27 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P8.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 1.27 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 30 smd custom (at 0.774 1.27 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.RUN.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 30 smd custom (at 0.774 1.27 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.RUN.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 30 smd custom (at 6.15 1.27 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.RUN.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at -7.154 1.27 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 12 smd custom (at 6.15 3.81 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P9.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 12 smd custom (at -6.15 3.81 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P9.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 29 smd custom (at 6.15 3.81 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P22.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 3.81 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 29 smd custom (at 0.774 3.81 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P22.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 12 thru_hole circle (at -0.774 3.81 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P9.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 3.81 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 29 smd custom (at -6.15 3.81 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P22.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 12 smd custom (at -0.774 3.81 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P9.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 3.81 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 29 thru_hole circle (at 0.774 3.81 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P22.str}
    (zone_connect 0))
  (pad "" smd rect (at -8.14 3.81 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 12 smd custom (at -0.774 3.81 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P9.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 3.81 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 3.81 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 3.81 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 29 smd custom (at 0.774 3.81 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P22.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd custom (at -7.154 3.81 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 13 smd custom (at 6.15 6.35 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 13 smd custom (at -6.15 6.35 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 28 smd custom (at 6.15 6.35 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 6.35 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 28 smd custom (at 0.774 6.35 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 13 thru_hole circle (at -0.774 6.35 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 6.35 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 28 smd custom (at -6.15 6.35 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 13 smd custom (at -0.774 6.35 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 6.35 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 28 thru_hole circle (at 0.774 6.35 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd rect (at -8.14 6.35 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 13 smd custom (at -0.774 6.35 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 6.35 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 6.35 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 6.35 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 28 smd custom (at 0.774 6.35 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd custom (at -7.154 6.35 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 27 smd custom (at 6.15 8.89 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P21.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 8.89 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 27 smd custom (at 0.774 8.89 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P21.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 14 thru_hole circle (at -0.774 8.89 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P10.str}
    (zone_connect 0))
  (pad 14 smd custom (at 6.15 8.89 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P10.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 8.89 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 27 smd custom (at -6.15 8.89 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P21.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 14 smd custom (at -0.774 8.89 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P10.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 8.89 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 27 thru_hole circle (at 0.774 8.89 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P21.str}
    (zone_connect 0))
  (pad "" smd rect (at -8.14 8.89 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 14 smd custom (at -0.774 8.89 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P10.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 8.89 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 8.89 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 8.89 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 27 smd custom (at 0.774 8.89 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P21.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd custom (at -7.154 8.89 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 14 smd custom (at -6.15 8.89 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P10.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 15 smd custom (at 6.15 11.43 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P11.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 11.43 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at -8.14 11.43 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 15 smd custom (at -0.774 11.43 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P11.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 11.43 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 11.43 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 11.43 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 26 smd custom (at 0.774 11.43 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P20.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd custom (at -7.154 11.43 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 15 smd custom (at -6.15 11.43 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P11.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 26 smd custom (at 6.15 11.43 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P20.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 11.43 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 26 smd custom (at 0.774 11.43 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P20.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 15 thru_hole circle (at -0.774 11.43 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P11.str}
    (zone_connect 0))
  (pad 26 smd custom (at -6.15 11.43 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P20.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 15 smd custom (at -0.774 11.43 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P11.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 11.43 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 26 thru_hole circle (at 0.774 11.43 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P20.str}
    (zone_connect 0))
  (pad "" smd custom (at -7.154 13.97 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 16 smd custom (at -6.15 13.97 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P12.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 25 smd custom (at 6.15 13.97 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P19.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 13.97 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 25 smd custom (at 0.774 13.97 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P19.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 16 thru_hole circle (at -0.774 13.97 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P12.str}
    (zone_connect 0))
  (pad 25 smd custom (at -6.15 13.97 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P19.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 16 smd custom (at -0.774 13.97 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P12.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 13.97 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 25 thru_hole circle (at 0.774 13.97 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P19.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 13.97 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at -8.14 13.97 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 13.97 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 13.97 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 25 smd custom (at 0.774 13.97 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P19.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 13.97 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 16 smd custom (at -0.774 13.97 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P12.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 16 smd custom (at 6.15 13.97 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P12.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at -7.154 16.51 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 17 smd custom (at -6.15 16.51 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P13.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 24 smd custom (at 6.15 16.51 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P18.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 16.51 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 24 smd custom (at 0.774 16.51 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P18.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 17 thru_hole circle (at -0.774 16.51 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P13.str}
    (zone_connect 0))
  (pad 24 smd custom (at -6.15 16.51 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P18.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 17 smd custom (at -0.774 16.51 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P13.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 16.51 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 24 thru_hole circle (at 0.774 16.51 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P18.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 16.51 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at -8.14 16.51 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 16.51 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 16.51 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 24 smd custom (at 0.774 16.51 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P18.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 16.51 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 17 smd custom (at -0.774 16.51 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P13.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 17 smd custom (at 6.15 16.51 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P13.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 23 smd custom (at -6.15 19.05 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 18 smd custom (at -0.774 19.05 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at 8.14 19.05 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 23 thru_hole circle (at 0.774 19.05 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 19.05 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad "" smd rect (at -8.14 19.05 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 19.05 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 19.05 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 23 smd custom (at 0.774 19.05 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 19.05 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 18 smd custom (at -0.774 19.05 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 18 smd custom (at 6.15 19.05 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at -7.154 19.05 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 18 smd custom (at -6.15 19.05 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 23 smd custom (at 6.15 19.05 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.GND.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 19.05 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 23 smd custom (at 0.774 19.05 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 18 thru_hole circle (at -0.774 19.05 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.GND.str}
    (zone_connect 0))
  (pad 22 smd custom (at -6.15 21.59 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P17.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 21.59 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at -8.14 21.59 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 21.59 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 21.59 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 22 smd custom (at 0.774 21.59 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P17.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 21.59 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad 19 smd custom (at -0.774 21.59 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P14.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 19 smd custom (at 6.15 21.59 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P14.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at -7.154 21.59 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 19 smd custom (at -6.15 21.59 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P14.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 22 smd custom (at 6.15 21.59 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P17.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 21.59 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 22 smd custom (at 0.774 21.59 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P17.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 19 thru_hole circle (at -0.774 21.59 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P14.str}
    (zone_connect 0))
  (pad 22 thru_hole circle (at 0.774 21.59 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P17.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 21.59 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 19 smd custom (at -0.774 21.59 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P14.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 24.13 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad 21 smd custom (at -6.15 24.13 ${p.rot + 90}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P16.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd rect (at 8.14 24.13 ${p.rot + 90}) (size 0.25 1.5) (layers F.Cu))
  (pad "" smd rect (at 8.14 24.13 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 24.13 ${p.rot + 90}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 21 smd custom (at 0.774 24.13 ${p.rot + 270}) (size 0.25 0.25) (layers B.Cu) ${p.net.P16.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad "" smd rect (at -8.14 24.13 ${p.rot + 90}) (size 0.25 1.5) (layers B.Cu))
  (pad "" smd custom (at -7.154 24.13 ${p.rot + 90}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 20 smd custom (at -6.15 24.13 ${p.rot + 90}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P15.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad 21 smd custom (at 6.15 24.13 ${p.rot + 270}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.P16.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
  (pad "" smd custom (at 7.154 24.13 ${p.rot + 270}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 21 smd custom (at 0.774 24.13 ${p.rot + 270}) (size 0.25 0.25) (layers F.Cu) ${p.net.P16.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 20 thru_hole circle (at -0.774 24.13 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P15.str}
    (zone_connect 0))
  (pad 21 thru_hole circle (at 0.774 24.13 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.net.P16.str}
    (zone_connect 0))
  (pad "" smd custom (at 7.154 24.13 ${p.rot + 270}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
) (width 0))
    ))
  (pad 20 smd custom (at -0.774 24.13 ${p.rot + 90}) (size 0.25 0.25) (layers F.Cu) ${p.net.P15.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -4.498) (width 0.25))
      (gr_line (start 0.766 -4.498) (end 0 -5.264) (width 0.25))
    ))
  (pad 20 smd custom (at -0.774 24.13 ${p.rot + 90}) (size 0.25 0.25) (layers B.Cu) ${p.net.P15.str}
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 6.022) (width 0.25))
      (gr_line (start -0.766 6.022) (end 0 6.788) (width 0.25))
    ))
  (pad 20 smd custom (at 6.15 24.13 ${p.rot + 270}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.P15.str}
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly (pts
         (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
) (width 0))
    ))
)

    `
    }
  }
  
  