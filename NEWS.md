### TargomoR 0.0.1.9001

* tidy up code
* add in more tests

# TargomoR 0.0.1.9000

* First testing release version :D

### TargomoR 0.0.0.9007

* add support for giving IDs to source/target points
* deal more nicely with missing data
* return times as tibble (and sf)
* better reuse of code when multiple travel types supplied
* mapping options use circle markers for time service

### TargomoR 0.0.0.9006

* full drawing options for routing
* labelling and popups for routes
* supplying multiple travel modes using recursion
* formatting options for input times and distances
* wrap line-drawing functions

### TargomoR 0.0.0.9005

* generalise functions to derive sources, targets, options etc
* implied support for route and time services too
* catch errors nicely
* explicit support for routing
* explicit support for times

### TargomoR 0.0.0.9004

* use REST API to return geojson
* support most polygon options
* build `sf` objects with geojson

### TargomoR 0.0.0.9003

* created working plugin based off new API (not r360)
* support for polygon requests
* support for union/intersection/inversion/strokewidth etc
* support for different regions across the world
* ability to set env vars

### TargomoR 0.0.0.9000

* Created first working plugin:
  + Put API key in .Renviron file, not committed
* Added a `NEWS.md` file to track changes to the package.
* used webpack to bundle js files (including prod)
* using stable r360 api for now
* created working r360 polygon bindings

