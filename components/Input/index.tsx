import { FormControl } from '@material-ui/core'
import * as S from './style'
import { useState } from 'react'

export type InputProps = {
  initialValue?: string
  onInput?: (value: string) => void
  label?: string
}

export default function Input({ initialValue, onInput, label }: InputProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <FormControl margin="dense" variant="outlined">
      <S.Label htmlFor="component-outlined">{label}</S.Label>
      <S.Input
        type="text"
        defaultValue={value}
        onChange={onChange}
        label={label}
      />
    </FormControl>
  )
}
