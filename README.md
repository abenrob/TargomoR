
<!-- README.md is generated from README.Rmd. Please edit that file -->

# TargomoR

The goal of TargomoR is to provide an interface to the Targomo API for
users of `leaflet` in R. It is under development and should not yet be
used.

**This package is being developed with the permission of TargomoR, but
is NOT AN OFFICIAL PRODUCT. For more information about Targomo, please
see their website.**

## To Do

### General

  - [ ] add tests
  - [ ] add better documentation

### Polygon Service

  - [x] multiple sources
  - [x] accept data.frame input for sources
  - [x] union/intersection etc
  - [x] colour change
  - [x] layerId, group etc
  - [x] retrieve geojson into R as sf object?
  - [x] other API options e.g. transitDate, uphill, bikeSpeed etc

### Route Service

  - [x] call the API
  - [x] turn resulting data into sf objects
  - [x] drawing options
  - [x] source and target inputs (manual/data.frame)

### Time Service

  - [x] call the API
  - [ ] process the resulting data into a data frame?
  - [ ] provide mapping functionality?

### Multigraph Service

  - [ ] define options
  - [ ] call the API
