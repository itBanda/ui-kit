import { PropsWithChildren } from 'react'

import { cn } from '../../utils'

type Props = {
  className?: string
}

const H1 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h1 className={cn(className, 'text-xl font-bold')}>{children}</h1>
}

const H2 = ({ children, className }: PropsWithChildren<Props>) => {
  return <h2 className={cn(className, 'text-lg font-bold')}>{children}</h2>
}

const H3 = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <h3 className={cn(className, 'text-base font-semibold')}>{children}</h3>
  )
}

const TextSemiboldXl = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-2xl font-semibold')}>{children}</p>
}

const TextBase = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-base font-normal')}>{children}</p>
}

const TextBoldBase = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-base font-bold')}>{children}</p>
}

const TextSm = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-sm font-normal')}>{children}</p>
}

const TextMediumSm = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-sm font-medium')}>{children}</p>
}

const TextBoldSm = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-sm font-bold')}>{children}</p>
}

const TextXs = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-xs font-normal')}>{children}</p>
}

const TextSemiboldXs = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn(className, 'text-xs font-semibold')}>{children}</p>
}

const LinkBase = ({
  children,
  className,
  href,
}: PropsWithChildren<{ href?: string } & Props>) => {
  return (
    <a
      className={cn(
        className,
        'font-regular text-sm text-accent-500 underline'
      )}
      href={href}
    >
      {children}
    </a>
  )
}

const LinkSm = ({
  children,
  className,
  href,
}: PropsWithChildren<{ href?: string } & Props>) => {
  return (
    <a
      className={cn(
        className,
        'font-regular text-xs text-accent-500 underline'
      )}
      href={href}
    >
      {children}
    </a>
  )
}

export default {
  H1,
  H2,
  H3,
  LinkBase,
  LinkSm,
  TextBase,
  TextBoldBase,
  TextBoldSm,
  TextMediumSm,
  TextSemiboldXl,
  TextSemiboldXs,
  TextSm,
  TextXs,
}
