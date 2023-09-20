import { Buffer } from 'buffer'
import { useQuery } from "@apollo/client";
import { CodeIcon, DocumentDuplicateIcon, MailIcon, PaperClipIcon, TableIcon } from "@heroicons/react/outline";
import { DocumentDuplicateIcon as DocumentDuplicateSolidIcon } from "@heroicons/react/solid";
import { MetaTags } from "@redwoodjs/web";
import { Card, Col, Grid, Title, Text, Flex, ProgressBar, Tab, TabGroup, TabList, TabPanel, TabPanels, Select, SelectItem, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Button } from "@tremor/react"
import { useEffect, useState } from "react";
import MailRenderer from "src/components/MailRenderer/MailRenderer";
import { GetMailInbox } from 'types/graphql';

type MailSource = "SMTP" | "API"
type SelectedMailMapping = Record<MailSource, string | null>

const MAIL_INBOX_QUERY = gql`
  query GetMailInbox($source: String!) @live {
    mailInboxEntries(source: $source) {
      id
      api
      smtp
      envelope
      text
      html
      createdAt
    }
  }
`

// TODO: Correct the types here
const SMTPMailTable = ({ mails, selectedMailId, setSelectedMailId }: { mails: any, selectedMailId: SelectedMailMapping, setSelectedMailId: (selectedMailId: SelectedMailMapping) => void }) => {
  return <Table className="mt-3 max-h-[40vh]">
    {mails.length === 0 ? (
      <TableBody>
        <TableRow>
          <TableCell className="text-center">
            <Text>No mails found</Text>
          </TableCell>
        </TableRow>
      </TableBody>
    ) : (
      <>
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
              mail.smtp.to?.value?.map((entry: any) => {
                return entry.name
                  ? `${entry.name} <${entry.address}>`
                  : entry.address
              }) ?? []
            const from =
              mail.smtp?.from?.value?.map((entry: any) => {
                return entry.name
                  ? `${entry.name} <${entry.address}>`
                  : entry.address
              }) ?? []
            const cc =
              mail.smtp?.cc?.value?.map((entry: any) => {
                return entry.name
                  ? `${entry.name} <${entry.address}>`
                  : entry.address
              }) ?? []
            const bcc = mail.envelope?.rcptTo
              ?.filter((entry: any) => {
                return (
                  !to.includes(entry.address) &&
                  !cc.includes(entry.address)
                )
              })
              .map((entry: any) => {
                return entry.address
              })

            const attachments = mail.smtp?.attachments ?? []

            return (
              <TableRow
                key={mail.id}
                className={
                  mail.id === selectedMailId["SMTP"]
                    ? 'bg-gray-300 dark:bg-gray-800 cursor-pointer'
                    : 'cursor-pointer'
                }
                onClick={() => setSelectedMailId({ ...selectedMailId, ["SMTP"]: mail.id })}
              >
                <TableCell>
                  {mail.createdAt.toLocaleString()}
                </TableCell>
                <TableCell>{mail.smtp?.subject}</TableCell>
                <TableCell className="truncate">
                  {from.map((entry: any) => (
                    <span key={mail.id}>{entry}</span>
                  ))}
                </TableCell>
                <TableCell className="truncate">
                  {to.map((entry: any) => (
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
                        <Badge
                          icon={PaperClipIcon}
                          tooltip="Attachment"
                        >
                          x{attachments.length}
                        </Badge>
                      </div>
                    )}
                    {bcc.length > 0 && (
                      <div>
                        <Badge
                          icon={DocumentDuplicateIcon}
                          tooltip="Bcc"
                        >
                          x{bcc.length}
                        </Badge>
                      </div>
                    )}
                    {cc.length > 0 && (
                      <div>
                        <Badge
                          icon={DocumentDuplicateSolidIcon}
                          tooltip="Cc"
                        >
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
      </>
    )}
  </Table>
}

function downloadAttachment(attachment: any) {
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
  const [selectedMailSource, setSelectedMailSource] = useState<MailSource>("SMTP")
  const [selectedMailMapping, setSelectedMailMapping] = useState<SelectedMailMapping>({
    SMTP: null,
    API: null
  })

  const mailRenderedTemplateQuery = useQuery<GetMailInbox>(MAIL_INBOX_QUERY, {
    variables: {
      source: selectedMailSource
    },
  })

  useEffect(() => {
    // If the id doesn't exist, reset it
    if (mailRenderedTemplateQuery.data?.mailInboxEntries !== undefined && selectedMailMapping[selectedMailSource] !== null) {
      if(mailRenderedTemplateQuery.data.mailInboxEntries.find((mail: any) => mail.id === selectedMailMapping[selectedMailSource]) === undefined) {
        setSelectedMailMapping({
          ...selectedMailMapping,
          [selectedMailSource]: null
        })
      }
    }
  }, [mailRenderedTemplateQuery.data, selectedMailSource])

  const mails = mailRenderedTemplateQuery.data?.mailInboxEntries ?? []
  const selectedMail = mails.find((mail) => mail.id === selectedMailMapping[selectedMailSource])

  return (
    <>
      <MetaTags title="MailerInbox" description="MailerInbox page" />

      <Title>Mail Inbox</Title>
      <Text>Studio can be used as a mail handler during development - allowing you to get starting implementing and sending mail without deciding on or configuring a more complex handler.</Text>

      <Grid numItemsLg={6} className="gap-6 mt-6">
        {/* List */}
        <Col numColSpanLg={6}>
          <Card>
            <TabGroup onIndexChange={(i) => setSelectedMailSource(i === 0 ? 'SMTP' : 'API')}>
              <TabList>
                <Tab icon={MailIcon}>SMTP</Tab>
                <Tab icon={CodeIcon}>API</Tab>
              </TabList>
            </TabGroup>
            {selectedMailSource === "SMTP" ? (
              <SMTPMailTable mails={mails} selectedMailId={selectedMailMapping} setSelectedMailId={setSelectedMailMapping} />
            ) : (
              <Text className='pt-6 text-center'>Visualisation of API mail is not yet implemented</Text>
            )}
          </Card>
        </Col>

        {/* View */}
        <Col numColSpanLg={6}>
          <MailRenderer
            html={selectedMail?.html}
            text={selectedMail?.text}
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
                <div className="overflow-auto w-full">
                  <pre className='text-gray-500 dark:text-gray-600'>
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
              </Flex>,
              <Flex
                className="mt-2 overflow-auto w-full"
                flexDirection="col"
                justifyContent="start"
                key="_attachmentsPanelTab"
              >
                {(selectedMail?.smtp.attachments.length ?? 0) === 0 ? (
                  <Text className="text-start w-full mt-2">No attachments</Text>
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
                      {selectedMail?.smtp.attachments.map((attachment: any) => (
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
  );
};

export default MailerInboxPage;
