import React from 'react'
import { Controller, useWatch } from "react-hook-form"
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import FormFields from '../../../models/formfields.json'

const CustomPhoneInput = ({
    name,
    parent,
    control,
    styles,
    lang,
    wrapper = true,
    label = true,
    inputWrapper = false,
    disabled = false,
    setValue
}) => {

    const FieldName = parent ? (FormFields[parent])[name] : FormFields[name]
    const Wrapper = wrapper ? 'div' : React.Fragment
    const InputWrapper = inputWrapper ? 'div' : React.Fragment

    const watch = useWatch({control})

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            render={({ field, fieldState: { error } }) => {
                return (
                    <>
                        <Wrapper {...(wrapper && {className: `${styles.tp_input_wrap}  ${error ? styles.error : ''}`})}>
                            {
                                label && 
                                <label
                                    className={styles.FormLabel}
                                    htmlFor={name}
                                >{FieldName.label}</label>
                            }
                            <InputWrapper {...(inputWrapper && {className: `${styles.InputWrapper} ${styles.Phone}`})}>
                                <PhoneInput
                                    placeholder={FieldName?.placeholder || ''}
                                    disabled={disabled}
                                    value={field.value}
                                    countryCallingCodeEditable={false}
                                    defaultCountry={watch.country_code}
                                    onChange={val => field.onChange(val || '')}
                                    onCountryChange={val => {
                                        setValue('country_code', val)
                                        setValue('calling_code', getCountryCallingCode(val || 'DE'))
                                    }}
                                />
                            </InputWrapper>
                            {error && <p className={styles.error_msg}>{error.message}</p>}
                        </Wrapper>
                    </>
                )
            }}
        />
    )
}

export default CustomPhoneInput