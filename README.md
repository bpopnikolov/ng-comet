# Ng Comet
The purpose of this project is educational - putting Angular, Node.js, MongoDB, Mongoose to practise, and is the final team assignment in Telerik Academy Alpha November 2017.

## Details

This is a Single Page Web Application that can serve as a marketing site for a company. The website should contain the following functionality:

    A configurable landing page.
    A section with job ads.
    The ability for users to apply for a job ad.
    An interface for managing all applications by the system administrators.
    A configurable about/contacts page.

For a detailed description of each functionality, please follow [this link](https://github.com/Teodor92/Project-Company-Life/tree/master/specification)
![](header.png)

## Extra features

The following features have been added on top of the general requirements:
* Contacts have been extended to include address, phone and e-mail values, for easier setup of different office locations
* If you double-click on an address, it will be loaded on the map.
* If 'Remember Me' is not ticked upon login, the token will expire in two hours.
* In the Users Admin Page, if an admin hovers over the 'Jobs Applied' field, they will get a tooltip with the list of jobs applied.

## Installation

First, you need to run the [Server](https://github.com/bpopnikolov/comet-rest-api)
Navigate to the Server folder and run the following commands: 

```sh

Run npm install
Run npm start
```

Once this is done, you can navigate to the Application folder and run the following commands ([Angular CLI](https://github.com/angular/angular-cli) is required to run the application):

```sh
Run npm install
Run ng serve -o  // This will automatically open your default web browser once the application is compiled
```
## Application Usage

To application functionality, you can use the following users:

```sh
Administrator:
username: admin1@comet.com
password: admin1@Comet

User:
username: user1@comet.com
password: user1@Comet
```


## Authors & Contributors

[Borislav Popnikolov](https://github.com/bpopnikolov/)
[Deyan Atanasov](https://github.com/deyan-a/)