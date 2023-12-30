import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'

function page() {
  return (
    <main className={styles.main}>
        <section className={styles.picSect}>
            <h1>შეგვეხმიანეთ</h1>
        </section>
        <form className={styles.form}>
            <input type="email" placeholder="თქვენი ელ.ფოსტა..." id={styles.mailInput} />
            <textarea name="" placeholder="თქვენი ტექსტი..." id={styles.msgInput} cols="30" rows="10"></textarea>
            <input type="submit" value="გაგზავნა" className={styles.submitBtn} />
        </form>
    </main>
  )
}

export default page