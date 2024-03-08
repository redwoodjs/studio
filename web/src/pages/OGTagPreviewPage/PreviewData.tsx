import type { OGTagPreviewResponse } from 'types/graphql'

interface Props {
  result: OGTagPreviewResponse['result']
}

export const PreviewData = ({ result }: Props) => {
  return (
    <div className="h-full w-full overflow-x-auto">
      <pre className="text-gray-500 dark:text-gray-600">
        {JSON.stringify(result, undefined, 2)}
      </pre>
    </div>
  )
}
