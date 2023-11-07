import React, { useState, useEffect, useRef } from 'react'
import { Controller, useWatch } from 'react-hook-form'
import { motion, AnimatePresence } from "framer-motion"
import FormFields from '../../../models/formfields.json'
import AngleIcon from '../../../../../public/icons/menu_angle.svg'
import CheckIcon from '../../../../../public/icons/checkbox-active.svg'

const CustomSelect = ({
    control,
    name,
    parent,
    data,
    wrapper = true,
    label = true,
    inputWrapper = false,
    searchable = false,
    styles,
    multi,
    show,
    disabled = false
}) => {

    const [Drop, SetDrop] = useState(false)
    const [Search, SetSearch] = useState('')
    const buttonRef = useRef(null)

    useEffect(() => { 
        document.addEventListener('click', handleKeyPress);
        return () => {
            document.removeEventListener('click', handleKeyPress);
        }
    }, [])

    const handleKeyPress = ({target}) => {
        if (!buttonRef?.current?.contains(target)) {
            SetDrop(false)
        }
    }

    const FieldName = parent ? (FormFields[parent])[name] : FormFields[name]
    const Wrapper = wrapper ? 'div' : React.Fragment
    const InputWrapper = inputWrapper ? 'div' : React.Fragment
    const watch = useWatch({
        control
    })

    const sdFilteredData = (data, searchkey) => {
        let searchRegex = new RegExp(searchkey, "i")
        let newData = [...data].filter(item => {
            if (searchRegex.test(item.title)) return item
        })
        return newData
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => {
                return (
                    <>
                        <Wrapper {...(wrapper && {className: `${styles.tp_input_wrap}  ${error ? styles.error : ''}`})}>
                            {
                                label &&
                                <label>{FieldName.label}</label>
                            }
                            <InputWrapper {...(inputWrapper && {className: `${styles.tp_input_wrap}`})}>
                                <div className={styles.tp_droppable_input} ref={buttonRef}>
                                    <button 
                                        className={styles.tp_select_btn} 
                                        type="button"
                                        onFocus={() => {
                                            !Drop && SetDrop(true)
                                        }}
                                        disabled={disabled}
                                    >
                                        {
                                            (show || !watch[name]?.length) ?
                                            FieldName.button :
                                            <span>{data.find(val => val.id === field.value[0])?.title}</span>
                                        }
                                        <AngleIcon className={styles.tp_icon} />
                                    </button>
                                    <AnimatePresence mode='wait'>
                                        {
                                            Drop &&
                                            <motion.div 
                                                className={styles.tp_droppable_input_drop}
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                variants={dropVariants}
                                            >
                                                {
                                                    searchable &&
                                                    <input 
                                                        type="text" 
                                                        placeholder={FieldName?.search || ''}
                                                        value={Search}
                                                        onChange={e => SetSearch(e.target.value)}
                                                    />
                                                }
                                                <ul className={styles.tp_droppable_input_drop_list}>
                                                    {
                                                        sdFilteredData(data, Search).length ?
                                                        sdFilteredData(data, Search).map(item => {
                                                            let active = watch[name]?.length && watch[name]?.find((val) => val === item.id) || ''
                                                            return (
                                                                <li key={item.id} className={active ? styles.tp_active : ''}>
                                                                    <button 
                                                                        type="button"
                                                                        onClick={() => {
                                                                            let inputIds = watch[name] || []
                                                                            if(multi) {
                                                                                if(inputIds.find((val) => val === item.id)) {
                                                                                    inputIds = inputIds.filter((val) => val != item.id)
                                                                                } else inputIds.push(item.id)
                                                                            } else {
                                                                                inputIds = []
                                                                                inputIds.push(item.id)
                                                                            }
                                                                            field.onChange(inputIds)
                                                                            if(!multi) {
                                                                                SetDrop(false)
                                                                            }
                                                                        }}
                                                                    >
                                                                        <div className={styles.tp_content_wrap}>
                                                                            <div>
                                                                                <p className={styles.tp_title}>{item.title}</p>
                                                                                {
                                                                                    item.text &&
                                                                                    <p className={styles.tp_text}>{item.text}</p>
                                                                                }
                                                                            </div>
                                                                            {
                                                                                active ?
                                                                                <CheckIcon className={styles.tp_icon_active} /> :
                                                                                <AngleIcon />
                                                                            }
                                                                        </div>
                                                                    </button>
                                                                </li>
                                                            )
                                                        }) :
                                                        <li>
                                                            <p className={styles.tp_empty}>No Data Found</p>
                                                        </li>
                                                    }
                                                </ul>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                            </InputWrapper>
                            {error && <p className={styles.error_msg}>{error.message}</p>}
                        </Wrapper>
                    </>
                )
            }}
        />
    )
}

export default CustomSelect

const dropVariants = {
    open: {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.35
        }
    },
    closed: {
        opacity: 0,
        scaleX: 0.9,
        scaleY: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.35
        }
    }
}