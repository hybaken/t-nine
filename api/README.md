# T9 - API
Privdes endpoint to convert string of numbers in to T9 prediction.

e.g.
```json
POST 
URL: http://localhost:9000/tnine
Content-Type: 'application/json'
Body: { "numbers" : "23" }
```

Will return HTTP 200 with JSON body:

```json
{
    "prediction": [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf"
    ]
}
```

Invalid requests will generate HTTP 400 with text 'Invalid request.'.

Note: <br />
The requests accept *string* that should contains numbers only. <br />
Numeric types are rejected.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />

Open [http://localhost:9000](http://localhost:9000) to access API.

The code will reload if you make edits.<br />

### `yarn test`

Execute the tests.

### `yarn test:coverage`

To check the test coverate of the code.


### `yarn test:watch`

This is usefull during the writing of the tests. <br />

The tests are executed after the save of file automatically.