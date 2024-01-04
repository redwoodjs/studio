import { List, ListItem } from '@tremor/react'

export const SpanResource = ({ resource }) => {
  const attributes = resource.attributes ?? []
  return (
    <List className="overflow-x-scroll">
      {attributes.map((attr) => (
        <ListItem key={attr.id}>
          <span>{attr.key}</span>
          <span>{attr.value}</span>
        </ListItem>
      ))}
    </List>
  )
}
