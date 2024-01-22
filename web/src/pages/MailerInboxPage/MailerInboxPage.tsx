import { Buffer } from 'buffer'

import { useState } from 'react'

import {
  CodeBracketIcon as CodeIcon,
  DocumentDuplicateIcon,
  InboxArrowDownIcon as MailIcon,
  PaperClipIcon,
  TableCellsIcon as TableIcon,
} from '@heroicons/react/24/outline'
import { DocumentDuplicateIcon as DocumentDuplicateSolidIcon } from '@heroicons/react/solid'
import {
  Card,
  Col,
  Grid,
  Title,
  Text,
  Flex,
  Tab,
  TabGroup,
  TabList,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Button,
  TabPanels,
  TabPanel,
} from '@tremor/react'
import { GetMailInbox } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

import MailRenderer from 'src/components/MailRenderer/MailRenderer'

type MailSource = 'SMTP' | 'API'

const MAIL_INBOX_QUERY = gql`
  query GetMailInbox @live {
    smtp: mailSMTPInboxEntries {
      id
      smtp
      envelope
      plaintext
      html
      createdAt
    }
    api: mailAPIInboxEntries {
      id
      api
      createdAt
    }
  }
`

// TODO: Correct the types here
const SMTPMailTable = ({
  mails,
  selectedMailId,
  setSelectedMailId,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mails: any[]
  selectedMailId: string
  setSelectedMailId: (selectedMailId: string) => void
}) => {
  const formatAddress = (address) => {
    return address.name
      ? `${address.name} <${address.address}>`
      : address.address
  }

  return (
    <Table className="mt-3 max-h-[40vh]">
      <TableHead>
        <TableHeaderCell>Timestamp</TableHeaderCell>
        <TableHeaderCell>Subject</TableHeaderCell>
        <TableHeaderCell>From</TableHeaderCell>
        <TableHeaderCell>To</TableHeaderCell>
        <TableHeaderCell>Features</TableHeaderCell>
      </TableHead>
      <TableBody>
        {mails?.map((mail) => {
          const to =
            mail.smtp.to?.value?.map((entry) => formatAddress(entry)) ?? []
          const from =
            mail.smtp?.from?.value?.map((entry) => formatAddress(entry)) ?? []
          const cc =
            mail.smtp?.cc?.value?.map((entry) => formatAddress(entry)) ?? []
          const bcc =
            mail.envelope?.rcptTo
              ?.filter((entry) => {
                return (
                  !to.includes(entry.address) && !cc.includes(entry.address)
                )
              })
              .map((entry) => {
                return entry.address
              }) ?? []

          const attachments = mail.smtp?.attachments ?? []

          return (
            <TableRow
              key={mail.id}
              className={
                mail.id === selectedMailId
                  ? 'cursor-pointer bg-gray-300 dark:bg-gray-800'
                  : 'cursor-pointer'
              }
              onClick={() => setSelectedMailId(mail.id)}
            >
              <TableCell>{mail.createdAt.toLocaleString()}</TableCell>
              <TableCell>{mail.smtp?.subject}</TableCell>
              <TableCell className="truncate">
                {from.map((entry) => (
                  <span key={mail.id}>{entry}</span>
                ))}
              </TableCell>
              <TableCell className="truncate">
                {to.map((entry) => (
                  <span key={mail.id}>{entry}</span>
                ))}
              </TableCell>
              <TableCell>
                <Flex
                  justifyContent="start"
                  alignItems="center"
                  className="space-x-1"
                >
                  {attachments.length > 0 && (
                    <div>
                      <Badge icon={PaperClipIcon} tooltip="Attachment">
                        x{attachments.length}
                      </Badge>
                    </div>
                  )}
                  {bcc.length > 0 && (
                    <div>
                      <Badge icon={DocumentDuplicateIcon} tooltip="Bcc">
                        x{bcc.length}
                      </Badge>
                    </div>
                  )}
                  {cc.length > 0 && (
                    <div>
                      <Badge icon={DocumentDuplicateSolidIcon} tooltip="Cc">
                        x{cc.length}
                      </Badge>
                    </div>
                  )}
                </Flex>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

function downloadAttachment(attachment) {
  if (attachment.content?.type !== 'Buffer') {
    prompt('Attachment content is not a buffer, cannot download')
    return
  }

  const base64Content = Buffer.from(attachment.content.data).toString('base64')
  const link = document.createElement('a')
  link.href = `data:${attachment.contentType};base64,${base64Content}`
  link.download = attachment.filename
  link.click()
}

const MailerInboxPage = () => {
  const [selectedMailSource, setSelectedMailSource] =
    useState<MailSource>('SMTP')
  const [selectedSMTPMailId, setSelectedSMTPMailId] = useState<string>('')

  const mailRenderedTemplateQuery = useQuery<GetMailInbox>(MAIL_INBOX_QUERY)

  const smtpMails = mailRenderedTemplateQuery.data?.smtp ?? []

  const selectedMail =
    selectedMailSource === 'SMTP'
      ? smtpMails.find((mail) => mail.id === selectedSMTPMailId)
      : undefined

  return (
    <>
      <MetaTags title="MailerInbox" description="MailerInbox page" />

      <Title>Mail Inbox</Title>
      <Text>
        Studio can be used as a mail handler during development - allowing you
        to get starting implementing and sending mail without deciding on or
        configuring a more complex production handler.
      </Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* List */}
        <Col numColSpanLg={6}>
          <Card>
            <TabGroup
              onIndexChange={(i) =>
                setSelectedMailSource(i === 0 ? 'SMTP' : 'API')
              }
            >
              <TabList>
                <Tab icon={MailIcon}>SMTP</Tab>
                <Tab icon={CodeIcon}>API</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {smtpMails.length === 0 ? (
                    <Text className="pt-4 text-center">No mail</Text>
                  ) : (
                    <SMTPMailTable
                      mails={smtpMails}
                      selectedMailId={selectedSMTPMailId}
                      setSelectedMailId={setSelectedSMTPMailId}
                    />
                  )}
                </TabPanel>
                <TabPanel>
                  <Text className="pt-4 text-center">
                    Visualisation of API mail is not yet supported
                  </Text>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
        </Col>

        {/* View */}
        <Col numColSpanLg={6}>
          <MailRenderer
            html={selectedMail?.html}
            text={selectedMail?.plaintext}
            additionalTabHeaders={
              <>
                <Tab icon={TableIcon}>Metadata</Tab>
                <Tab icon={PaperClipIcon}>Attachments</Tab>
              </>
            }
            additionalTabPanels={[
              <Flex
                className="mt-2 gap-y-4"
                flexDirection="col"
                justifyContent="start"
                key="_metadataPanelTab"
              >
                {selectedMail?.smtp === undefined ||
                selectedMail?.envelope === undefined ? (
                  <Text className="w-full pt-4 text-center">No metadata</Text>
                ) : (
                  <div className="w-full overflow-auto">
                    <pre className="text-gray-500 dark:text-gray-600">
                      {JSON.stringify(
                        {
                          ...selectedMail?.smtp,
                          html: undefined,
                          text: undefined,
                          textAsHtml: undefined,
                          attachments: undefined,
                          envelope: selectedMail?.envelope,
                        },
                        undefined,
                        2
                      )}
                    </pre>
                  </div>
                )}
              </Flex>,
              <Flex
                className="mt-2 w-full overflow-auto"
                flexDirection="col"
                justifyContent="start"
                key="_attachmentsPanelTab"
              >
                {(selectedMail?.smtp.attachments.length ?? 0) === 0 ? (
                  <Text className="w-full pt-4 text-center">
                    No attachments
                  </Text>
                ) : (
                  <Table className="w-full">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Filename</TableHeaderCell>
                        <TableHeaderCell>Content Type</TableHeaderCell>
                        <TableHeaderCell>Download Link</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedMail?.smtp.attachments.map((attachment) => (
                        <TableRow key={attachment.checksum}>
                          <TableCell>{attachment.filename}</TableCell>
                          <TableCell>{attachment.contentType}</TableCell>
                          <TableCell>
                            <Button
                              variant="light"
                              onClick={() => {
                                downloadAttachment(attachment)
                              }}
                            >
                              Download
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </Flex>,
            ]}
          />
        </Col>
      </Grid>
    </>
  )
}

export default MailerInboxPage
