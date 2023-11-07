"use client";
import React from 'react'
import { Controller } from "react-hook-form"
import FormFields from '../../../models/formfields.json'

const CustomInput = ({
    name,
    parent,
    control,
    type,
    styles,
    wrapper = true,
    label = true,
    inputWrapper = false,
    disabled = false
}) => {

    const FieldName = parent ? (FormFields[parent])[name] : FormFields[name]
    const Wrapper = wrapper ? 'div' : React.Fragment
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    const InputType = type === 'textarea' ? 'textarea' : 'input'

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
                            <InputWrapper {...(inputWrapper && {className: `${styles.InputWrapper}`})}>
                                <InputType 
                                    type={type}
                                    className={styles.tp_input}
                                    placeholder={FieldName.placeholder}
                                    disabled={disabled}
                                    {...field}
                                    value={field?.value || ''}
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

export default CustomInput