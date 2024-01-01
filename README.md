# studio

## TODO:
1. Update @redwoodjs/project-config to support new studio config - not experimental
2. Update @redwoodjs/cli to just call the bin for studio. Needs to setup the boilerplate config if not present.
3. Studio components should be smart enough to not need port changes in multiple places

## Troubleshooting
If you have problems relating to the `@swc` packages then please try adding the following configuration to your `.yarnrc.yml`

```yml
supportedArchitectures:
  os:
    - darwin
    - linux
    - win32
  cpu:
    - arm64
    - arm
    - x64
    - ia32
  libc:
    - glibc
    - musl
```

## Contributing
1. Make your changes to the source code.
2. Run `yarn studio:package` - this will rebuild the project and package it locally.
3. Restart `yarn rw-studio` from within the `__fixtures__/test-project` directory.

If you have to generate migrations because you have altered the database schema please use `yarn studio:migrate` as this will set the appropriate configuration above the default `yarn rw prisma migrate dev`.
