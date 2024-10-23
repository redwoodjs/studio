# Studio

## Contributing

### Local dev (Experimental)
1. (Should only have to do this once)
  `cd __fixtures__/test-project && touch yarn.lock && yarn`
2. Make your changes to the source code.
3. Run `RW_STUDIO_USER_PROJECT_PATH=./__fixtures__/test-project yarn rw dev`
4. Run the Test Project that send in to Studio using `yarn rw dev` inside
  `__fixtures__/test-project`
5. Be sure you set the OpenTelemetry sdk path in `redwood.toml` to point to the
  correct path for your project (see example below under
  [Troubleshooting](#troubleshooting))

### Test packaged version
1. Make your changes to the source code.
2. Run `yarn studio:package` - this will rebuild the project and package it locally.
3. (Re-)start Studio by running `yarn rw studio` from within the
  `__fixtures__/test-project` directory.
4. Run the Test Project that send in to Studio using `yarn rw dev` inside
  `__fixtures__/test-project`
5. Be sure you set the OpenTelemetry sdk path in `redwood.toml` to point to the
  correct path for your project (see example below under
  [Troubleshooting](#troubleshooting))

If you have to generate migrations because you have altered the database schema please use `yarn studio:migrate` as this will set the appropriate configuration above the default `yarn rw prisma migrate dev`.

### Test packaged version with a different project

#### Initial setup
1. Run `yarn rwfw project:tarsync` in the project you want to test with.
2. Run `yarn studio:package` - this will rebuild the project and package it locally.
3. Edit `./package.json` in the project you want to test with to include a
   resolution for Studio pointing to the local Studio package. For example:
   `"@redwoodjs/studio": "/Users/tobbe/dev/redwood/studio/packaged.tgz"`
4. Run `yarn install` in the project you want to test with to install the new version of Studio.
5. Run the test project (`yarn rw serve`)
6. Run `yarn rw studio` from within the test project.

#### Subsequent Runs
1. Make your changes to the Studio source code.
2. Run `yarn studio:package` in the Studio project.
3. Run `yarn install` in the test project
4. Run the test project (`yarn rw serve`)
5. Run `yarn rw studio` from within the test project.


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

### Adding New Prisma Models and Views

RW_STUDIO_DATABASE_URL=file:./dummy.sqlite

* In studio project root
* yarn rw prisma migrate reset to make sure dummy was up-to-date

If adding a view a view:

* yarn rw prisma migrate dev span-attribute-view --create-only
* Wrote view
* Update prisma schema with the view "model"

If adding a mode:

* Update prisma schema with the new "model"
* yarn rw prisma migrate dev

Then ...

* yarn rw prisma migrate reset
* View was applied to "dummy.sqlite"
* yarn studio:package
* Deleted __fixtures__/test-project/.redwood/studio/prisma.sqlite to make sure migrate deploy really updated
* Run studio via: yarn rw-studio to apply migrations

### Running Prisma Studio

RW_STUDIO_DATABASE_URL=file:/Users/tobbe/dev/redwood/studio/__fixtures__/rsc-test-project/.redwood/studio/prisma.sqlite npx prisma studio --schema ../../api/db/schema.prisma


## Releasing

```
npm version [major|minor|patch]
git push upstream --follow-tags
yarn studio:package --release
cd packaged
npm publish
```
