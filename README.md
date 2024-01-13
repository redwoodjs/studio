# studio

## TODO:
1. Update @redwoodjs/project-config to support new studio config - not experimental
2. Update @redwoodjs/cli to just call the bin for studio. Needs to setup the boilerplate config if not present.
3. Studio components should be smart enough to not need port changes in multiple places
4. Upstream any changes to the opentelemetry setup

## Contributing
1. Make your changes to the source code.
2. Run `yarn studio:package` - this will rebuild the project and package it locally.
3. Restart `yarn rw-studio` from within the `__fixtures__/test-project` directory.
4. Run the Test Project that send into to Studio using `yarn rw dev`
5. Be sure you set the OpenTelemetry sdk to your environment's correct path in `redwood.toml`:

```
[experimental.opentelemetry]
	enabled = true
	apiSdk = "/Users/dthyresson/Dropbox/Code/redwoodjs/studio/__fixtures__/test-project/api/dist/opentelemetry.js"

```
If you have to generate migrations because you have altered the database schema please use `yarn studio:migrate` as this will set the appropriate configuration above the default `yarn rw prisma migrate dev`.

### Development

If you want to try out any Studio GraphQL queries, you may access the Studio GraphQL Playground at:

`http://localhost:4318/.redwood/functions/graphql`

If you want to make ad hoc queries against the SQLite database, you can find it in:

`__fixtures__/test-project/.redwood/studio/prisma.sqlite`

### Troubleshooting

If you run into any migration issues, run `yarn studio:reset` to remove the database so that can re-run migrations.

 `yarn studio:reset`  Can also be used reset and clear out the studio db.

If you do not see any traces or spans, check that your `redwood.toml` points to the correct path:

```
[experimental.opentelemetry]
	enabled = true
	apiSdk = "/Users/dthyresson/Dropbox/Code/redwoodjs/studio/__fixtures__/test-project/api/dist/opentelemetry.js"
```
