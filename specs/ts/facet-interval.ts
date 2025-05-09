import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Faceted Interval Selections",
    "description": "A faceted plot with 2D interval selections.",
    "credit": "Adapted from https://observablehq.com/@observablehq/plot-non-faceted-marks"
  },
  "data": {
    "penguins": {
      "file": "data/penguins.parquet"
    }
  },
  "hconcat": [
    {
      "name": "plot",
      "plot": [
        {
          "mark": "frame"
        },
        {
          "mark": "dot",
          "data": {
            "from": "penguins"
          },
          "x": "bill_length",
          "y": "bill_depth",
          "fill": "#aaa",
          "r": 1
        },
        {
          "mark": "dot",
          "data": {
            "from": "penguins"
          },
          "x": "bill_length",
          "y": "bill_depth",
          "fill": "species",
          "fx": "sex",
          "fy": "species"
        },
        {
          "select": "intervalXY",
          "as": "$sel",
          "brush": {
            "stroke": "transparent"
          }
        },
        {
          "select": "highlight",
          "by": "$sel"
        }
      ],
      "grid": true,
      "marginRight": 60,
      "xDomain": "Fixed",
      "yDomain": "Fixed",
      "fxDomain": "Fixed",
      "fyDomain": "Fixed",
      "fxLabel": null,
      "fyLabel": null
    }
  ]
};
