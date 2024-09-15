import { forwardRef } from 'react'

import { useGetId } from '../../hooks'
import { cn } from '../../utils'
import { Icon } from '../icon'
import { Props } from './types'
import { useSelect } from './useSelect'

export const Select = forwardRef<HTMLButtonElement, Props>(
  ({ disabled, id: propsId, label, options, width }, ref) => {
    const id = useGetId(propsId)
    const {
      handleBlur,
      handleKeyDown,
      handleSelect,
      highlightedIndex,
      isOpen,
      selectedOption,
      setHighlightedIndex,
      toggleOpen,
    } = useSelect(options)

    return (
      <div className='w-full' style={{ maxWidth: `${width}px` }}>
        {label && (
          <label className={cn('text-sm text-light-900')} htmlFor={id}>
            {label}
          </label>
        )}
        <div className='relative' onBlur={handleBlur}>
          <button
            aria-controls={`${id}-listbox`}
            aria-expanded={isOpen}
            className={cn(
              'flex w-full cursor-pointer items-center justify-between rounded-sm border border-dark-100 bg-transparent p-1 px-3 text-light-900',
              { 'text-light-100': label },
              {
                'rounded-b-none border-light-100 bg-dark-500 text-light-100 outline-none':
                  isOpen,
              },
              {
                'enabled:focus:border-accent-500 enabled:focus:ring-1 enabled:focus:ring-accent-500':
                  !isOpen,
              },
              { 'enabled:hover:border-light-900': !isOpen },
              'disabled:border-dark-100 disabled:text-dark-100'
            )}
            disabled={disabled}
            id={id}
            onClick={toggleOpen}
            onKeyDown={handleKeyDown}
            ref={ref}
            role='combobox'
            tabIndex={0}
          >
            <span className='flex items-center gap-2'>
              {selectedOption?.icon}
              {selectedOption?.name}
            </span>

            <span>
              {isOpen ? (
                <Icon icon='arrow-up' />
              ) : (
                <Icon icon='arrow-down-outline' />
              )}
            </span>
          </button>

          {isOpen && (
            <ul
              aria-labelledby={id}
              className={cn(
                'absolute z-10 w-full bg-dark-500 text-light-100',
                'border border-t-0',
                'rounded-sm',
                { 'rounded-t-none': isOpen }
              )}
              id={`${id}-listbox`}
              role='listbox'
              style={{ top: '100%' }}
            >
              {options.map((el, index) => (
                <li
                  aria-selected={index === highlightedIndex}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 px-3 py-1',
                    {
                      'bg-dark-300 text-accent-500': index === highlightedIndex,
                      'bg-transparent': index !== highlightedIndex,
                    }
                  )}
                  key={el.id}
                  onMouseDown={() => handleSelect(el)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {el.icon}
                  {el.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'
