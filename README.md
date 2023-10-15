# RedwoodJS Studio

Description of the studio coming soon!

## How to use (temporary)

During initial development I've added a small script which essentially packages up the studio and copies it to the project. This is temporary and will be replaced with a proper package install.

We expect the studio to be cloned into a `rw-studio` directory and a redwood project called `rw-test-studio` which both live in the same parent directory. From that you can navigate into the `rw-test-studio` directory and run the following commands:

```bash
node ../rw-studio/copyToProject.mjs && node ./.redwood-studio/api/dist/server.js --enable-web | yarn rw-log-formatter
```

This should build and copy over the studio and then run it within the redwood project. You will have to do this for every change you make to the studio during development - there is no watch mode.
