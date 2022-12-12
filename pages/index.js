import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Bad"
  },
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 30
  },
  {
    value: 40
  },
  {
    value: 50,
    label: "Meh"
  },
  {
    value: 60
  },
  {
    value: 70
  },
  {
    value: 80
  },
  {
    value: 90
  },
  {
    value: 100,
    label: "Good"
  }
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300, margin: "2rem" }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
