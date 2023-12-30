"use client";

import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';


function Header() {
    const links = [
        {
            id: 1,
            url: '/',
            title: "მთავარი"
        },
        {
            id: 2,
            url: '/about',
            title: "ჩვენ შესახებ"
        },
        {
            id: 3,
            url: '/services',
            title: "სერვისები"
        },
        {
            id: 4,
            url: '/products',
            title: "პროდუქტები"
        },
        {
            id: 5,
            url: '/contact',
            title: "კონტაქტი"
        }
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerIconWrap}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="16" viewBox="0 0 512 512"><path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" /></svg>
                <h1>TeaTopia</h1>
            </div>
            <nav className={styles.headerNavbar}>
                <DarkModeToggle className={styles.darkMode}/>
                {links.map(link => (<Link href={link.url} className={styles.headerLink}>{link.title}</Link>))}
            </nav>
            <Image src={'/burger-bar.png'} width={50} height={50} alt="burger bar image" className={styles.burgerBar} />
        </div>
    )
}

export default Header