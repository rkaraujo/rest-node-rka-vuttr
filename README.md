# VUTTR

This is a sample REST API that list, create and delete tools. VUTTR stands for Very Useful Tools to Remember.

It was developed using:

* Node.js
* Express
* validator
* Mongoose
* API Blueprint
* aglio

## How to run

It needs a Mongo Db installed at localhost.

To run the project:
```
npm run dev
```

## API Documentation

API documentation created with API Blueprint.

It is located in `docs/html/vuttr.html`.

To generate an HTML documentation, first install aglio and then run the aglio command:

```
npm install -g aglio

aglio -i docs/vuttr.apib -o docs/html/vuttr.html
```
