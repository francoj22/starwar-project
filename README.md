# StarWar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

###  Starships 
The application will take as input a distance in mega lights (MGLT). The output should be a collection of all the star ships and the total amount of stops required to make the distance between the planets.

The solution should not assume the data is static. All other application details are at your own discretion.

{ Sample output for 1000000: Y-wing: 74 Millennium Falcon: 9 Rebel Transport: 11 }

###  Requirements

The completed code should be submitted along with
Accompanying documentation
Tests and instructions on the usage of the application.
Documentation
This application it’s for a starship resource is a single transport craft that has hyperdrive capability.

When the real problem is: want to know for all SW star ships, to cover a given distance, how many stops for resupply are required.

The system was built with good architecture, with great design, with a system organized, all classes separated like Views with front-end to do a communication to controller, in this layer happen any validations and after send a request to Model to do post with API and returns the requisition to controller to calculate the problem and show the result in other View.

Utilizing angular The application does a Post async with HTTPCLIENT API and send a request to SW API.

Everyone can use the program, because it’s a simple software. The application will take as input a distance in mega lights (MGLT). The output should be a collection of all the star ships and the total amount of stops required to make the distance between the planets.

###  Resources
https://swapi.dev/
