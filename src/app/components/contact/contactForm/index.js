"use client";
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { codes } from 'country-calling-code'
import CustomInput from '../../formUtilities/customInput'
import CustomSelect from '../../formUtilities/customSelect'
import CustomPhoneInput from '../../formUtilities/customPhoneInput';
import FormFields from '../../../models/formfields.json'

const ContactForm = ({
    styles
}) => {

    const { setValue, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data)

    const FormBuilder = [
        {
            name: 'first_name',
            parent: 'contact',
            styles,
            control,
            type: 'text',
            label: true
        },
        {
            name: 'last_name',
            parent: 'contact',
            styles,
            control,
            type: 'text',
            label: true
        },
        {
            name: 'email',
            parent: 'contact',
            styles,
            control,
            type: 'email',
            label: true
        },
        {
            name: 'phone',
            parent: 'contact',
            styles,
            control,
            type: 'phone',
            label: true,
            inputWrapper: true,
            setValue: setValue
        },
        {
            name: 'country',
            parent: 'contact',
            styles,
            control,
            type: 'select',
            label: true,
            data: codes.map(item => {return {
                id: item.country,
                title: item.country,
            }}),
            searchable: true,
            label: true,
            multi: false,
            show: false
        },
        {
            name: 'art_forms',
            parent: 'contact',
            styles,
            control,
            type: 'select',
            label: true,
            data: [
                {
                    id: 'Abacus',
                    title: 'Abacus'
                },
                {
                    id: 'Art & Craft',
                    title: 'Art & Craft'
                },
                {
                    id: 'Bharatanatyam',
                    title: 'Bharatanatyam'
                },
                {
                    id: 'Bollywood Dance',
                    title: 'Bollywood Dance'
                },
                {
                    id: 'chess',
                    title: 'chess'
                },
                {
                    id: 'Carnatic Vocal',
                    title: 'Carnatic Vocal'
                },
                {
                    id: 'Dhol',
                    title: 'Dhol'
                },
                {
                    id: 'Drums',
                    title: 'Drums'
                },
                {
                    id: 'Flute',
                    title: 'Flute'
                },
                {
                    id: 'Guitar',
                    title: 'Guitar'
                },
                {
                    id: 'Hindi',
                    title: 'Hindi'
                },
                {
                    id: 'Hindustani Vocals',
                    title: 'Hindustani Vocals'
                },
                {
                    id: 'Kathak',
                    title: 'Kathak'
                },
                {
                    id: 'Piano',
                    title: 'Piano'
                },
                {
                    id: 'Saxophone',
                    title: 'Saxophone'
                },
                {
                    id: 'Tabla',
                    title: 'Tabla'
                },
                {
                    id: 'Ukelele',
                    title: 'Ukelele'
                },
                {
                    id: 'Violin',
                    title: 'Violin'
                },
                {
                    id: 'Western Vocals',
                    title: 'Western Vocals'
                },
                {
                    id: 'Yoga',
                    title: 'Yoga'
                },
        
            ],
            label: true,
            multi: false,
            show: false
        },
        {
            name: 'message',
            parent: 'contact',
            styles,
            control,
            type: 'textarea',
            label: true,
            full: true
        },
    ]

    useEffect(() => {
        setValue('country_code', 'IN')
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                FormBuilder.map(item => {
                    return (
                        <div className={`${styles.input_wrap} ${item?.full ? styles.full : ''}`} key={item.name}>
                            {
                                item.type == 'select' ?
                                <CustomSelect
                                    {...item}
                                /> :
                                item.type == 'phone' ?
                                <CustomPhoneInput
                                    {...item}
                                /> :
                                <CustomInput
                                    {...item}
                                />
                            }
                        </div>
                    )
                })
            }
            <div className={`${styles.input_wrap} ${styles.full}`}>
                <input type='submit' value="Submit" />
            </div>
        </form>
    )
}

export default ContactForm

const schema = yup.object().shape({
    first_name:
        yup.string()
            .required(FormFields.contact.first_name.errors.required)
            .max(40, FormFields.contact.first_name.errors.max)
            .min(3, FormFields.contact.first_name.errors.min),
    last_name:
        yup.string()
            .required(FormFields.contact.last_name.errors.required)
            .max(40, FormFields.contact.last_name.errors.max)
            .min(3, FormFields.contact.last_name.errors.min),
    email:
        yup.string()
            .email(FormFields.contact.email.errors.valid)
            .required(FormFields.contact.email.errors.required),
    phone:
        yup.string()
            .nullable()
            .required(FormFields.contact.phone.errors.required)
            .max(15, FormFields.contact.phone.errors.max),
    country:
        yup.array().of(yup.string())
            .required(FormFields.contact.country.errors.required),
    art_forms:
        yup.array().of(yup.string())
            .required(FormFields.contact.art_forms.errors.required),
    message:
        yup.string()
            .required(FormFields.contact.message.errors.required)
            .max(200, FormFields.contact.message.errors.max)
            .min(20, FormFields.contact.message.errors.min),
    country_code:
        yup.string(),
    calling_code:
        yup.string(),
})