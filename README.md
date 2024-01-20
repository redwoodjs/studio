# Studio

## Contributing

### Local dev
1. Make your changes to the source code.
2. Run `RW_STUDIO_USER_PROJECT_PATH=./__fixtures__/test-project yarn rw dev`
3. Run the Test Project that send in to Studio using `yarn rw dev` inside
  `__fixtures__/test-project`
4. Be sure you set the OpenTelemetry sdk path in `redwood.toml` to point to the
  correct path for your project (see example below under
  [Troubleshooting](#troubleshooting))

### Test packaged version
1. Make your changes to the source code.
2. Run `yarn studio:package` - this will rebuild the project and package it locally.
3. Restart `yarn rw-studio` from within the `__fixtures__/test-project` directory.
4. Run the Test Project that send in to Studio using `yarn rw dev`
5. Be sure you set the OpenTelemetry sdk path in `redwood.toml` to point to the
  correct path for your project (see example below under
  [Troubleshooting](#troubleshooting))

If you have to generate migrations because you have altered the database schema please use `yarn studio:migrate` as this will set the appropriate configuration above the default `yarn rw prisma migrate dev`.

### Development

If you want to try out any Studio GraphQL queries, you may access the Studio GraphQL Playground at:

`http://localhost:4318/.redwood/functions/graphql`

If you want to make ad hoc queries against the SQLite database, you can find it in `.redwood/studio/prisma.sqlite` in the project that sends data to Studio

### Troubleshooting

If you run into any migration issues, run `yarn studio:reset` to remove the database so that migrations can be rerun.

 `yarn studio:reset` Can also be used to reset and clear out the studio db.

If you do not see any traces or spans, check that your `redwood.toml` points to the correct path, for example:

```
[experimental.opentelemetry]
	enabled = true
	apiSdk = "/Users/dthyresson/Dropbox/Code/redwoodjs/studio/__fixtures__/test-project/api/dist/opentelemetry.js"
```

## Releasing

`npm version [major|minor|patch]`
`git push --follow-tags`
`yarn studio:package`
`cd package`
`npm publish`
