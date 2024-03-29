import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import '../../../../variables.css'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  >
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
  >

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
  options?: any[] //
  onChangeOption?: (option: any) => void //
  spanProps?: DefaultSpanPropsType // пропсы для спана // was ?
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                     id,
                                                     name,
                                                     options,
                                                     value,
                                                     onChange,
                                                     onChangeOption,
                                                     spanProps,
                                                     ...restProps
                                                   }) => {

  const onChangeCallback = (id: number) => {
    // делают студенты
    if (onChangeOption) onChangeOption(id)
    console.log(id)
  }

  console.log(value)

  const className = 's.radio:before'
  const finalRadioClassName = s.radio + (value ? ' ' + className : '')
  const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

  const mappedOptions: any[] = options
    ? options.map((o) => (
      <label key={name + '-' + o.id} className={s.label}>
        <input
          id={id + '-input-' + o.id}
          className={finalRadioClassName}
          type={'radio'}
          // name, checked, value делают студенты
          checked={o.id === value}
          value={o.id}
          name={o.id}
          onChange={() => {
            onChangeCallback(o.id)
            console.log(value)
          }}
          {...restProps}
        />
        <span
          id={id + '-span-' + o.id}
          {...spanProps}
          className={spanClassName}
        >
          {o.value}
        </span>
      </label>
    ))
    : []

  return <>
    <div className={s.options}>{mappedOptions}</div>
  </>
}

export default SuperRadio