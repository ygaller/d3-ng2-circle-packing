# D3, Angular and Redux Circle Packing Demo

A port of [D3 Circle Packing](https://bl.ocks.org/mbostock/ca5b03a33affa4160321) 
to Angular 2 based on https://github.com/tomwanzek/d3-ng2-demo 
and https://github.com/tomwanzek/d3-ng2-service.

The D3 circle packing component is given a root node as input, in the [hierarchy](https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy) format. 

The data itself is provided by a separate service. The project has two data sets: In csv format and in json format (json taken from [https://bl.ocks.org/mbostock/7607535](https://bl.ocks.org/mbostock/7607535)).

The generated Angular page shows four variations on the display of D3's circle packing visualization. The differences in implementation are:

1. An all-in-one component which reads csv data, processed it and renders the visualization
2. A data service and a rendering component, using a csv data source
3. A data service and a rendering component, using a json data source
4. A data service and a rendering component with a common Redux data store used for communicating between the two

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
