import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'
import { VariableIcon } from '@heroicons/react/24/outline'
import {
  Title,
  Grid,
  Col,
  Card,
  Text,
  Flex,
  SelectItem,
  Select,
  Tab,
} from '@tremor/react'
import {
  GetMailRenderedTemplate,
  GetMailRenderers,
  GetMailTemplates,
} from 'types/graphql'

import { MetaTags } from '@redwoodjs/web'

import MailRenderer from 'src/components/MailRenderer/MailRenderer'

const RENDERERS_QUERY = gql`
  query GetMailRenderers @live {
    mailRenderers {
      id
      key
      isDefault
    }
  }
`
const TEMPLATES_QUERY = gql`
  query GetMailTemplates @live {
    mailTemplates {
      id
      name
      components {
        id
        name
        propsTemplate
      }
    }
  }
`

const RENDERED_TEMPLATE_QUERY = gql`
  query GetMailRenderedTemplate(
    $templateId: ID!
    $componentId: ID!
    $rendererId: ID!
    $props: String!
  ) @live {
    mailRenderedTemplate(
      templateId: $templateId
      componentId: $componentId
      rendererId: $rendererId
      props: $props
    ) {
      id
      props
      html
      text
    }
  }
`

const MailerTemplatePreviewPage = () => {
  const [selectedRendererId, setSelectedRendererId] = useState<string | null>(
    null
  )
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
    null
  )
  const [selectedTemplateComponentId, setSelectedTemplateComponentId] =
    useState<string | null>(null)
  const [propsTextValues, setPropsTextValues] = useState<
    Record<string, string>
  >({})

  const mailRenderersQuery = useQuery<GetMailRenderers>(RENDERERS_QUERY)
  const mailTemplatesQuery = useQuery<GetMailTemplates>(TEMPLATES_QUERY)

  const mailRenderedTemplateQuery = useQuery<GetMailRenderedTemplate>(
    RENDERED_TEMPLATE_QUERY,
    {
      variables: {
        templateId: selectedTemplateId,
        componentId: selectedTemplateComponentId,
        rendererId: selectedRendererId,
        props: propsTextValues[selectedTemplateComponentId] ?? '{}',
      },
      skip:
        selectedTemplateId === null ||
        selectedTemplateComponentId === null ||
        selectedRendererId === null,
    }
  )

  const selectedTemplate = mailTemplatesQuery.data?.mailTemplates.find(
    (template) => template.id === selectedTemplateId
  )
  const selectedTemplateComponent = selectedTemplate?.components.find(
    (component) => component.id === selectedTemplateComponentId
  )

  useEffect(() => {
    if (mailRenderersQuery.data) {
      // If the selected renderer is not in the list of renderers, reset it
      const selectedRenderer = mailRenderersQuery.data.mailRenderers.find(
        (renderer) => renderer.id === selectedRendererId
      )
      if (selectedRenderer === undefined) {
        setSelectedRendererId(null)
      }

      // If no renderer is selected, select the default one
      if (selectedRendererId === null) {
        const defaultRenderer = mailRenderersQuery.data.mailRenderers.find(
          (renderer) => renderer.isDefault
        )
        if (defaultRenderer) {
          setSelectedRendererId(defaultRenderer.id)
        }
      }
    }

    // If the selected template is not in the list of templates, reset it
    if (selectedTemplate === undefined) {
      setSelectedTemplateId(null)
    }

    // If there is only one template, select it
    if (mailTemplatesQuery.data?.mailTemplates.length === 1) {
      setSelectedTemplateId(mailTemplatesQuery.data.mailTemplates[0].id)
    }

    // Reset the selected template component if no template is selected
    if (selectedTemplateId === null) {
      setSelectedTemplateComponentId(null)
    }

    // If the selected template component is not in the list of components, reset it
    if (selectedTemplateComponent === undefined) {
      setSelectedTemplateComponentId(null)
    }

    // If there is only one template component, select it
    if (selectedTemplate?.components.length === 1) {
      setSelectedTemplateComponentId(selectedTemplate?.components[0].id)
    }

    // Add a valid default props input value if there is none
    if (propsTextValues[selectedTemplateComponentId] === undefined) {
      setPropsTextValues({
        ...propsTextValues,
        [selectedTemplateComponentId]: '{}',
      })
    }
    // TODO: Be less lazy with this useEffect - split it up into multiple useEffects with specific dependencies
  }, [
    mailRenderersQuery.data,
    mailTemplatesQuery.data,
    selectedTemplateId,
    selectedTemplateComponentId,
    selectedRendererId,
    selectedTemplate,
    selectedTemplateComponent,
    propsTextValues,
  ])

  const renderers = mailRenderersQuery.data?.mailRenderers ?? []
  const templates = mailTemplatesQuery.data?.mailTemplates ?? []
  const templateComponents = selectedTemplate?.components ?? []

  return (
    <>
      <MetaTags
        title="MailerTemplatePreview"
        description="MailerTemplatePreview page"
      />

      <Title>Mail Template Preview</Title>
      <Text>
        Studio can help you work with your mail templates by providing a live
        preview.
      </Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* Top options panel */}
        <Col numColSpanLg={6}>
          <Card className="w-full">
            {/* Template, component and renderer selections */}
            <Flex
              flexDirection="row"
              justifyContent="evenly"
              alignItems="center"
              className="space-x-6"
            >
              <Flex flexDirection="col" alignItems="start">
                <Text>Template</Text>
                <Select
                  value={selectedTemplateId}
                  onValueChange={(v) => setSelectedTemplateId(v)}
                  disabled={
                    templates.length === 0 || mailTemplatesQuery.loading
                  }
                >
                  {templates.length === 0 ? (
                    mailTemplatesQuery.loading ? (
                      <SelectItem value="-1" key="-1">
                        Loading...
                      </SelectItem>
                    ) : (
                      <SelectItem value="-1" key="-1">
                        No templates found
                      </SelectItem>
                    )
                  ) : (
                    templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))
                  )}
                </Select>
              </Flex>
              <Flex flexDirection="col" alignItems="start">
                <Text>Component</Text>
                <Select
                  value={selectedTemplateComponentId}
                  onValueChange={(v) => setSelectedTemplateComponentId(v)}
                  disabled={
                    templateComponents.length === 0 ||
                    mailTemplatesQuery.loading
                  }
                >
                  {templateComponents.length === 0 ? (
                    mailTemplatesQuery.loading ? (
                      <SelectItem value="-1" key="-1">
                        Loading...
                      </SelectItem>
                    ) : (
                      <SelectItem value="-1" key="-1">
                        No components for this template
                      </SelectItem>
                    )
                  ) : (
                    templateComponents.map((component) => (
                      <SelectItem key={component.id} value={component.id}>
                        {component.name}
                      </SelectItem>
                    ))
                  )}
                </Select>
              </Flex>
              <Flex flexDirection="col" alignItems="start">
                <Text>Renderer</Text>
                <Select
                  value={selectedRendererId}
                  onValueChange={(v) => setSelectedRendererId(v)}
                >
                  {renderers.length === 0 ? (
                    mailRenderersQuery.loading ? (
                      <SelectItem value="-1" key="-1">
                        Loading...
                      </SelectItem>
                    ) : (
                      <SelectItem value="-1" key="-1">
                        No renderers found
                      </SelectItem>
                    )
                  ) : (
                    renderers.map((renderer) => (
                      <SelectItem key={renderer.id} value={renderer.id}>
                        {renderer.key}
                      </SelectItem>
                    ))
                  )}
                </Select>
                {/* TODO: Provide some ability to specify renderer options */}
              </Flex>
            </Flex>

            {/* Promps input */}
            {
              // TODO: Animate this in and out
              selectedTemplateComponent !== undefined &&
                selectedTemplateComponent.propsTemplate !== null && (
                  <Flex className="pt-6" flexDirection="col" alignItems="start">
                    <Text>Props</Text>
                    <textarea
                      id="mailPreviewPropsInputTextarea"
                      placeholder={selectedTemplateComponent.propsTemplate}
                      rows={3}
                      className="w-full resize-y border text-gray-500 dark:bg-gray-800 dark:text-gray-600"
                      onChange={(e) => {
                        setPropsTextValues({
                          ...propsTextValues,
                          [selectedTemplateComponentId]: e.target.value,
                        })
                      }}
                    />
                  </Flex>
                )
            }
          </Card>
        </Col>

        {/* Rendered mail */}
        <Col numColSpanLg={6}>
          <MailRenderer
            html={mailRenderedTemplateQuery.data?.mailRenderedTemplate.html}
            text={mailRenderedTemplateQuery.data?.mailRenderedTemplate.text}
            error={mailRenderedTemplateQuery.error}
            additionalTabHeaders={
              <>
                <Tab icon={VariableIcon}>Props Input</Tab>
              </>
            }
            additionalTabPanels={[
              <Flex
                className="mt-2 gap-y-4"
                flexDirection="col"
                justifyContent="start"
                key="_propsInputPanelTab"
              >
                <div className="w-full overflow-auto">
                  <pre className="text-gray-500 dark:text-gray-600">
                    {JSON.stringify(
                      mailRenderedTemplateQuery.data?.mailRenderedTemplate
                        .props,
                      undefined,
                      2
                    )}
                  </pre>
                </div>
              </Flex>,
            ]}
          />
        </Col>
      </Grid>
    </>
  )
}

export default MailerTemplatePreviewPage
