import { getUserProjectConfig } from 'src/util/project'

export const studioConfig = async () => {
  return getUserProjectConfig().studio
}
