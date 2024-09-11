import { useId } from 'react'

export const useGetId = (id: string | undefined) => {
  const uniqueId = useId()

  return id || uniqueId
}
