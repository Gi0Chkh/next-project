import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <main className={styles.main}>
        <section className={styles.picSect}>
            <h1>ჩვენი სერვისები</h1>
        </section>
        <section className={styles.iconSect}>
            <Link href={"#iframeSect"} className={styles.iconItem}>
                <Image src={"/tea-icon.png"} width={120} height={120} alt="tea icon" className={styles.icon} />
                <h1>ადგილზე მომსახურების სერვისი</h1>
            </Link>
            <Link href={"/contact"} className={styles.iconItem}>
                <Image src={"/moped-icon.png"} width={120} height={120} alt="moped icon" className={styles.icon} />
                <h1>მიტანის სერვისი</h1>
            </Link>
        </section>
        <section id={styles.iframeSect}>
            <div>  
                <address>მის: ლ. იპსუმის ქუჩა No. 4</address>
                <h1>გვეწვიეთ</h1>
            </div>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.6845123683509!2d44.79687856547986!3d41.690968682010016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d5c21a7e203%3A0x60bf81071d3c5109!2sTsota%20Tsota%20Craft%20Beer%20Pub!5e0!3m2!1sen!2sge!4v1703410857486!5m2!1sen!2sge"} style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.iframe}></iframe>
        </section>
    </main>
  )
}

export default page