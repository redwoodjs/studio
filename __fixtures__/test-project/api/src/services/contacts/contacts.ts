import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { mailer } from 'src/lib/mailer'
import { ContactUsEmail } from 'src/mail/Example/ContactUs'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = async ({
  input,
}) => {
  const contact = await db.contact.create({
    data: input,
  })

  await mailer.send(
    ContactUsEmail({
      when: new Date().toLocaleString(),
    }),
    {
      to: 'inbox@example.com',
      subject: 'New Contact Us Submission',
      from: input.email,
    }
  )

  return contact
}

export const updateContact: MutationResolvers['updateContact'] = ({
  id,
  input,
}) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact: MutationResolvers['deleteContact'] = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
