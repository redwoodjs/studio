const CATEGORY_COLORS = [
  'emerald',
  'yellow',
  'red',
  'blue',
  'purple',
  'pink',
  'indigo',
  'green',
  'orange',
  'teal',
  'cyan',
  'gray',
]

export const categoryColors = (categoryCount: number) => {
  return CATEGORY_COLORS.slice(0, categoryCount)
}
