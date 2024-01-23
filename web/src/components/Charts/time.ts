import { parseISO, formatDistanceToNowStrict } from 'date-fns'

export const formattedTimeAgo = (dateString) => {
  const dateObject = parseISO(dateString)

  return formatDistanceToNowStrict(dateObject, {
    addSuffix: true,
    unit: 'second',
    roundingMethod: 'round',
  })
}
