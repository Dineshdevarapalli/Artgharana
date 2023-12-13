"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { codes } from 'country-calling-code'
import toast from 'react-hot-toast'
import { Api } from '../utils/Api'
import { getContactPageData, getContactPageSeoData } from '../utils/ServerCalls'
import Meta from '../components/common/meta'
import Spinner from '../components/common/spinner'
import NotFound from '../components/common/notfound'
import ContactForm from '../components/contact/contactForm'
import LocateIcon from '../../../public/icons/address.svg'
import PhoneIcon from '../../../public/icons/phone-call.svg'
import styles from './contact.module.scss'

const ContactUs = async () => {

    const [PageData, SEO] = await Promise.all([getContactPageData(), getContactPageSeoData()])

    const Data = PageData?.data?.attributes || null    

    return (
        <>
            {/* <Meta {...{SEO}} /> */}

            <div className={styles.contact}>
        
                <div className='contain'>
                    {
                        Data ?
                        <div className={styles.contact_wrap}>
                            <div className={styles.contact_wrap_content}>
                                <h1 className={styles.title}>{Data?.title}</h1>
                                <p className={styles.sub_title}>{Data?.description}</p>
                                <div className={styles.img_block}>
                                    <h3 className={styles.img_block_title}>{Data?.heading}</h3>
                                    <div className={styles.img_block_media}>
                                        <Image
                                            src={Api.imageUrl(Data?.image?.data?.attributes?.url)}
                                            alt={Data?.title}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            sizes="500px"
                                        />
                                    </div>
                                    <p className={styles.img_block_description}>{Data?.footer_description}</p>
                                </div>
                                <div className={styles.address_block}>
                                    {
                                        Data?.address?.map((item, index) => {
                                            return (
                                                <div className={styles.address_block_item} key={index}>
                                                    <p className={styles.title}>{item.country}</p>
                                                    <p className={styles.text}>
                                                        <span><LocateIcon/></span>
                                                        {item.address}
                                                    </p>
                                                    <p className={styles.text}>
                                                        <span><PhoneIcon/></span>
                                                        {item.phone}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.contact_wrap_form}>
                                <ContactForm {...{styles}} />
                            </div>
                        </div> : <NotFound />
                    }
                </div>
            </div>
        </>
    )
}

export default ContactUs
