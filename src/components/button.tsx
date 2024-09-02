import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export function Button(props: Props) {
  return (
    <button className='mx-10 bg-slate-500' {...props} type='submit'>
      Hello Hello
    </button>
  )
}
