const arrows = [
    { id: "left-arrow", title: "Left Arrow", text: "&#8592;" },
    { id: "up-arrow", title: "Up Arrow", text: "&#8593;" },
    { id: "right-arrow", title: "Right Arrow", text: "&#8594;" },
    { id: "down-arrow", title: "Down Arrow", text: "&#8595;" },
    { id: "left-right-arrow", title: "Left Right Arrow", text: "&#8596;" },
    { id: "up-down-arrow", title: "Up Down Arrow", text: "&#8597;" },
    { id: "north-west-arrow", title: "North West Arrow", text: "&#8598;" },
    { id: "north-east-arrow", title: "North East Arrow", text: "&#8599;" },
    { id: "south-east-arrow", title: "South East Arrow", text: "&#8600;" },
    { id: "south-west-arrow", title: "South West Arrow", text: "&#8601;" },
    { id: "left-arrow-with-stroke", title: "Left Arrow with Stroke", text: "&#8602;" },
    { id: "right-arrow-with-stroke", title: "Right Arrow with Stroke", text: "&#8603;" },
    { id: "left-wave-arrow", title: "Left Wave Arrow", text: "&#8604;" },
    { id: "right-wave-arrow", title: "Right Wave Arrow", text: "&#8605;" },
    { id: "left-two-headed-arrow", title: "Left Two Headed Arrow", text: "&#8606;" },
    { id: "up-two-headed-arrow", title: "Up Two Headed Arrow", text: "&#8607;" },
    { id: "right-two-headed-arrow", title: "Right Two Headed Arrow", text: "&#8608;" },
    { id: "down-two-headed-arrow", title: "Down Two Headed Arrow", text: "&#8609;" },
    { id: "left-arrow-with-tail", title: "Left Arrow with Tail", text: "&#8610;" },
    { id: "right-arrow-with-tail", title: "Right Arrow with Tail", text: "&#8611;" },
    { id: "left-arrow-from-bar", title: "Left Arrow from Bar", text: "&#8612;" },
    { id: "up-arrow-from-bar", title: "Up Arrow from Bar", text: "&#8613;" },
    { id: "right-arrow-from-bar", title: "Right Arrow from Bar", text: "&#8614;" },
    { id: "down-arrow-from-bar", title: "Down Arrow from Bar", text: "&#8615;" },
    { id: "up-down-arrow-with-base", title: "Up Down Arrow with Base", text: "&#8616;" },
    { id: "left-arrow-with-hook", title: "Left Arrow with Hook", text: "&#8617;" },
    { id: "right-arrow-with-hook", title: "Right Arrow with Hook", text: "&#8618;" },
    { id: "left-arrow-with-loop", title: "Left Arrow with Loop", text: "&#8619;" },
    { id: "right-arrow-with-loop", title: "Right Arrow with Loop", text: "&#8620;" },
    { id: "left-right-wave-arrow", title: "Left Right Wave Arrow", text: "&#8621;" },
    { id: "left-right-arrow-with-stroke", title: "Left Right Arrow with Stroke", text: "&#8622;" },
    { id: "downwards-zigzag-arrow", title: "Downwards Zigzag Arrow", text: "&#8623;" },
    { id: "upwards-arrow-with-tip-leftwards", title: "Upwards Arrow with Tip Leftwards", text: "&#8624;" },
    { id: "upwards-arrow-with-tip-rightwards", title: "Upwards Arrow with Tip Rightwards", text: "&#8625;" },
    { id: "downwards-arrow-with-tip-leftwards", title: "Downwards Arrow with Tip Leftwards", text: "&#8626;" },
    { id: "downwards-arrow-with-tip-rightwards", title: "Downwards Arrow with Tip Rightwards", text: "&#8627;" },
    { id: "right-arrow-with-corner-downwards", title: "Right Arrow with Corner Downwards", text: "&#8628;" },
    { id: "downwards-arrow-with-corner-leftwards", title: "Downwards Arrow with Corner Leftwards", text: "&#8629;" },
    { id: "anticlockwise-top-semicircle-arrow", title: "Anticlockwise Top Semicircle Arrow", text: "&#8630;" },
    { id: "clockwise-top-semicircle-arrow", title: "Clockwise Top Semicircle Arrow", text: "&#8631;" },
    { id: "north-west-arrow-to-long-bar", title: "North West Arrow to Long Bar", text: "&#8632;" },
    { id: "leftwards-arrow-to-bar-over-rightwards-arrow-to-bar", title: "Leftwards Arrow to Bar Over Rightwards Arrow to Bar", text: "&#8633;" },
    { id: "anticlockwise-open-circle-arrow", title: "Anticlockwise Open Circle Arrow", text: "&#8634;" },
    { id: "clockwise-open-circle-arrow", title: "Clockwise Open Circle Arrow", text: "&#8635;" },
    { id: "leftwards-harpoon-with-barb-upwards", title: "Leftwards Harpoon with Barb Upwards", text: "&#8636;" },
    { id: "leftwards-harpoon-with-barb-downwards", title: "Leftwards Harpoon with Barb Downwards", text: "&#8637;" },
    { id: "upwards-harpoon-with-barb-rightwards", title: "Upwards Harpoon with Barb Rightwards", text: "&#8638;" },
    { id: "upwards-harpoon-with-barb-leftwards", title: "Upwards Harpoon with Barb Leftwards", text: "&#8639;" },
    { id: "rightwards-harpoon-with-barb-upwards", title: "Rightwards Harpoon with Barb Upwards", text: "&#8640;" },
    { id: "rightwards-harpoon-with-barb-downwards", title: "Rightwards Harpoon with Barb Downwards", text: "&#8641;" },
    { id: "downwards-harpoon-with-barb-rightwards", title: "Downwards Harpoon with Barb Rightwards", text: "&#8642;" },
    { id: "downwards-harpoon-with-barb-leftwards", title: "Downwards Harpoon with Barb Leftwards", text: "&#8643;" },
    { id: "rightwards-arrow-over-leftwards-arrow", title: "Rightwards Arrow Over Leftwards Arrow", text: "&#8644;" },
    { id: "upwards-arrow-leftwards-of-downwards-arrow", title: "Upwards Arrow Leftwards of Downwards Arrow", text: "&#8645;" },
    { id: "leftwards-arrow-over-rightwards-arrow", title: "Leftwards Arrow Over Rightwards Arrow", text: "&#8646;" },
    { id: "leftwards-paired-arrows", title: "Leftwards Paired Arrows", text: "&#8647;" },
    { id: "upwards-paired-arrows", title: "Upwards Paired Arrows", text: "&#8648;" },
    { id: "rightwards-paired-arrows", title: "Rightwards Paired Arrows", text: "&#8649;" },
    { id: "downwards-paired-arrows", title: "Downwards Paired Arrows", text: "&#8650;" },
    { id: "leftwards-harpoon-over-rightwards-harpoon", title: "Leftwards Harpoon Over Rightwards Harpoon", text: "&#8651;" },
    { id: "rightwards-harpoon-over-leftwards-harpoon", title: "Rightwards Harpoon Over Leftwards Harpoon", text: "&#8652;" },
    { id: "leftwards-double-arrow-with-stroke", title: "Leftwards Double Arrow with Stroke", text: "&#8653;" },
    { id: "left-right-double-arrow-with-stroke", title: "Left Right Double Arrow with Stroke", text: "&#8654;" },
    { id: "rightwards-double-arrow-with-stroke", title: "Rightwards Double Arrow with Stroke", text: "&#8655;" },
    { id: "leftwards-double-arrow", title: "Leftwards Double Arrow", text: "&#8656;" },
    { id: "upwards-double-arrow", title: "Upwards Double Arrow", text: "&#8657;" },
    { id: "rightwards-double-arrow", title: "Rightwards Double Arrow", text: "&#8658;" },
    { id: "downwards-double-arrow", title: "Downwards Double Arrow", text: "&#8659;" },
    { id: "left-right-double-arrow", title: "Left Right Double Arrow", text: "&#8660;" },
    { id: "up-down-double-arrow", title: "Up Down Double Arrow", text: "&#8661;" },
    { id: "north-west-double-arrow", title: "North West Double Arrow", text: "&#8662;" },
    { id: "north-east-double-arrow", title: "North East Double Arrow", text: "&#8663;" },
    { id: "south-east-double-arrow", title: "South East Double Arrow", text: "&#8664;" },
    { id: "south-west-double-arrow", title: "South West Double Arrow", text: "&#8665;" },
    { id: "leftwards-triple-arrow", title: "Leftwards Triple Arrow", text: "&#8666;" },
    { id: "rightwards-triple-arrow", title: "Rightwards Triple Arrow", text: "&#8667;" },
    { id: "leftwards-squiggle-arrow", title: "Leftwards Squiggle Arrow", text: "&#8668;" },
    { id: "rightwards-squiggle-arrow", title: "Rightwards Squiggle Arrow", text: "&#8669;" },
    { id: "upwards-arrow-with-double-stroke", title: "Upwards Arrow with Double Stroke", text: "&#8670;" },
    { id: "downwards-arrow-with-double-stroke", title: "Downwards Arrow with Double Stroke", text: "&#8671;" },
    { id: "leftwards-dashed-arrow", title: "Leftwards Dashed Arrow", text: "&#8672;" },
    { id: "upwards-dashed-arrow", title: "Upwards Dashed Arrow", text: "&#8673;" },
    { id: "rightwards-dashed-arrow", title: "Rightwards Dashed Arrow", text: "&#8674;" },
    { id: "downwards-dashed-arrow", title: "Downwards Dashed Arrow", text: "&#8675;" },
    { id: "leftwards-arrow-to-bar", title: "Leftwards Arrow to Bar", text: "&#8676;" },
    { id: "rightwards-arrow-to-bar", title: "Rightwards Arrow to Bar", text: "&#8677;" },
    { id: "leftwards-white-arrow", title: "Leftwards White Arrow", text: "&#8678;" },
    { id: "upwards-white-arrow", title: "Upwards White Arrow", text: "&#8679;" },
    { id: "rightwards-white-arrow", title: "Rightwards White Arrow", text: "&#8680;" },
    { id: "downwards-white-arrow", title: "Downwards White Arrow", text: "&#8681;" },
    { id: "upwards-white-arrow-from-bar", title: "Upwards White Arrow from Bar", text: "&#8682;" },
    { id: "upwards-white-arrow-on-pedestal", title: "Upwards White Arrow on Pedestal", text: "&#8683;" },
    { id: "upwards-white-arrow-on-pedestal-with-horizontal-bar", title: "Upwards White Arrow on Pedestal with Horizontal Bar", text: "&#8684;" },
    { id: "upwards-white-arrow-on-pedestal-with-vertical-bar", title: "Upwards White Arrow on Pedestal with Vertical Bar", text: "&#8685;" },
    { id: "upwards-white-double-arrow", title: "Upwards White Double Arrow", text: "&#8686;" },
    { id: "upwards-white-double-arrow-on-pedestal", title: "Upwards White Double Arrow on Pedestal", text: "&#8687;" },
    { id: "rightwards-white-arrow-from-wall", title: "Rightwards White Arrow from Wall", text: "&#8688;" },
    { id: "north-west-arrow-to-corner", title: "North West Arrow to Corner", text: "&#8689;" },
    { id: "south-east-arrow-to-corner", title: "South East Arrow to Corner", text: "&#8690;" },
    { id: "up-down-white-arrow", title: "Up Down White Arrow", text: "&#8691;" },
    { id: "right-arrow-with-small-circle", title: "Right Arrow with Small Circle", text: "&#8692;" },
    { id: "downwards-arrow-leftwards-of-upwards-arrow", title: "Downwards Arrow Leftwards of Upwards Arrow", text: "&#8693;" },
    { id: "three-rightwards-arrows", title: "Three Rightwards Arrows", text: "&#8694;" },
    { id: "leftwards-arrow-with-vertical-stroke", title: "Leftwards Arrow with Vertical Stroke", text: "&#8695;" },
    { id: "rightwards-arrow-with-vertical-stroke", title: "Rightwards Arrow with Vertical Stroke", text: "&#8696;" },
    { id: "left-right-arrow-with-vertical-stroke", title: "Left Right Arrow with Vertical Stroke", text: "&#8697;" },
    { id: "leftwards-arrow-with-double-vertical-stroke", title: "Leftwards Arrow with Double Vertical Stroke", text: "&#8698;" },
    { id: "rightwards-arrow-with-double-vertical-stroke", title: "Rightwards Arrow with Double Vertical Stroke", text: "&#8699;" },
    { id: "left-right-arrow-with-double-vertical-stroke", title: "Left Right Arrow with Double Vertical Stroke", text: "&#8700;" },
    { id: "leftwards-open-headed-arrow", title: "Leftwards Open-Headed Arrow", text: "&#8701;" },
    { id: "rightwards-open-headed-arrow", title: "Rightwards Open-Headed Arrow", text: "&#8702;" },
    { id: "left-right-open-headed-arrow", title: "Left Right Open-Headed Arrow", text: "&#8703;" },
    { id: "up-quadruple-arrow", title: "Up Quadruple Arrow", text: "&#10224;" },
    { id: "down-quadruple-arrow", title: "Down Quadruple Arrow", text: "&#10225;" },
    { id: "anticlockwise-gapped-circle-arrow", title: "Anticlockwise Gapped Circle Arrow", text: "&#10226;" },
    { id: "clockwise-gapped-circle-arrow", title: "Clockwise Gapped Circle Arrow", text: "&#10227;" },
    { id: "right-arrow-with-circled-plus", title: "Right Arrow with Circled Plus", text: "&#10228;" },
    { id: "long-leftwards-arrow", title: "Long Leftwards Arrow", text: "&#10229;" },
    { id: "long-rightwards-arrow", title: "Long Rightwards Arrow", text: "&#10230;" },
    { id: "long-left-right-arrow", title: "Long Left Right Arrow", text: "&#10231;" },
    { id: "long-leftwards-double-arrow", title: "Long Leftwards Double Arrow", text: "&#10232;" },
    { id: "long-rightwards-double-arrow", title: "Long Rightwards Double Arrow", text: "&#10233;" },
    { id: "long-left-right-double-arrow", title: "Long Left Right Double Arrow", text: "&#10234;" },
    { id: "long-leftwards-arrow-from-bar", title: "Long Leftwards Arrow from Bar", text: "&#10236;" },
    { id: "long-rightwards-arrow-from-bar", title: "Long Rightwards Arrow from Bar", text: "&#10237;" },
    { id: "long-leftwards-double-arrow-from-bar", title: "Long Leftwards Double Arrow from Bar", text: "&#10238;" },
    { id: "long-right-squiggle-arrow", title: "Long Right-squiggle-arrow", text: "&#10239;" },
    { id: "heavy-wide-headed-rightwards-arrow", title: "Heavy Wide-Headed Rightwards Arrow", text: "&#10132;" },
    { id: "heavy-round-tipped-rightwards-arrow", title: "Heavy Round-Tipped Rightwards Arrow", text: "&#10140;" },
    { id: "triangle-headed-rightwards-arrow", title: "Triangle-Headed Rightwards Arrow", text: "&#10142;" },
    { id: "white-triangle-headed-rightwards-arrow", title: "White Triangle-Headed Rightwards Arrow", text: "&#10143;" },
    { id: "heavy-triangle-headed-rightwards-arrow", title: "Heavy Triangle-Headed Rightwards Arrow", text: "&#10144;" },
    { id: "white-triangle-headed-rightwards-arrow-from-bar", title: "White Triangle-Headed Rightwards Arrow from Bar", text: "&#10145;" },
    { id: "three-d-top-lighted-righ-arrowhead", title: "Three-D Top-Lighted Right Arrowhead", text: "&#10146;" },
    { id: "three-d-bottom-lighted-righ-arrowhead", title: "Three-D Bottom-Lighted Right Arrowhead", text: "&#10147;" },
    { id: "black-right-arrowhead", title: "Black Right Arrowhead", text: "&#10148;" },
    { id: "heavy-black-curved-down-right-arrow", title: "heavy-black-curved-down-right-arrow", text: "&#10149;" },
    { id: "heavy-black-curved-up-right-arrow", title: "Heavy Black-Curved Up Right Arrow", text: "&#10150;" },
    { id: "squat-black-right-arrow", title: "Squat Black Right Arrow", text: "&#10151;" },
    { id: "rightwards-two-headed-triangle-arrow", title: "Rightwards Two-Headed Triangle Arrow", text: "&#10152;" },
    { id: "lower-right-semicircular-clockwise-arrow", title: "Lower Right Semicircular Clockwise Arrow", text: "&#10558;" },
    { id: "lower-left-semicircular-anticlockwise-arrow", title: "Lower Left Semicircular Anticlockwise Arrow", text: "&#10559;" },
    { id: "anticlockwise-closed-circle-arrow", title: "Anticlockwise Closed Circle Arrow", text: "&#10560;" }
    
]
export default arrows;