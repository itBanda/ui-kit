import { useState } from 'react'

import { Option } from './types'

export const useSelect = (options: Option[]) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options[0] || null
  )

  const toggleOpen = () => setIsOpen(prev => !prev)
  const closeSelect = () => setIsOpen(false)

  const handleSelect = (option: Option) => {
    setSelectedOption(option)
    closeSelect()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    if (e.key === 'ArrowDown') {
      setHighlightedIndex(prevIndex =>
        prevIndex < options.length - 1 ? prevIndex + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : options.length - 1
      )
    } else if (e.key === 'Enter') {
      handleSelect(options[highlightedIndex] as Option)
      setTimeout(() => {
        setIsOpen(false)
      }, 0)
    }
  }

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      closeSelect()
    }
  }

  return {
    closeSelect,
    handleBlur,
    handleKeyDown,
    handleSelect,
    highlightedIndex,
    isOpen,
    selectedOption,
    setHighlightedIndex,
    toggleOpen,
  }
}
