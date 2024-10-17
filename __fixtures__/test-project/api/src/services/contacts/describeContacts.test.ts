import { db } from 'src/lib/db'

import { contact, contacts, createContact } from './contacts'
import type { StandardScenario } from './contacts.scenarios'

/**
 * Example test for describe scenario.
 *
 * Note that scenario tests need a matching [name].scenarios.ts file.
 */

describeScenario<StandardScenario>('contacts', (getScenario) => {
  let scenario: StandardScenario

  beforeEach(() => {
    scenario = getScenario()
  })

  it('returns all contacts', async () => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  it('returns a single contact', async () => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  it('creates a contact', async () => {
    const result = await createContact({
      input: {
        name: 'Bazinga',
        email: 'contact@describe.scenario',
        message: 'Describe scenario works!',
      },
    })

    expect(result.name).toEqual('Bazinga')
    expect(result.email).toEqual('contact@describe.scenario')
    expect(result.message).toEqual('Describe scenario works!')
  })

  it('Checking that describe scenario works', async () => {
    // This test is dependent on the above test. If you used a normal scenario it would not work
    const contactCreatedInAboveTest = await db.contact.findFirst({
      where: {
        email: 'contact@describe.scenario',
      },
    })

    expect(contactCreatedInAboveTest.message).toEqual(
      'Describe scenario works!'
    )
  })
})
