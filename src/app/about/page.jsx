import React from 'react'
import styles from "./page.module.css"

function page() {
  return (
    <main className={styles.main}>
        <section className={styles.picSect}>
            <h1>ჩვენი ისტორია</h1>
        </section>
        <section className={styles.aboutSect}>
            <h1>- 120 წელი საუკეთესო ჩაის მომზადებაში -</h1>
            <div className={styles.aboutItems}>
                <div className={styles.aboutItem}>
                    <div>ხარისხი</div>
                    <p>ჩვენი მთავარი პრიორიტეტია, ვაწარმოოთ საუკეთესო ხარისხის ჩაი ბაზარზე.</p>
                </div>
                <div className={styles.aboutItem}>
                    <div>დრო</div>
                    <p>დროის მართვა პრინციპულად საჭიროა. ჩვენი მომხმარებლები დროულად ითხოვენ თავიანთ შეკვეთას.</p>
                </div>
                <div className={styles.aboutItem}>
                    <div>სიახლე</div>
                    <p>ჩაიში სიახლე ისეთივე მნიშვნელოვანია, როგორც ხარისხი. ახალი ჩაი გამოირჩევა თავისი გამდიდრებული არომატით.</p>
                </div>
            </div>
        </section>
        <section className={styles.picAboutSect}>
            <div>
                <h1>ჩვენ შესახებ</h1>
                <p>ჩვენი ისტორია სათავეს იღებს 1878 წლიდან, როდესაც TeaTopia იყო მცირე ჩაის ბიზნესი, რომელიც ხალხს სხვადასხვა სახის ჩაის სთავაზობდა. ჩვენ წარმატებით შევძელით საიმედო და ერთგული კლიენტების მოპოვება. ჩვენი მრავალი მომხმარებელი აფასებს ჩვენს ბიზნესს. წელს ჩვენი 120 წლის იუბილეა, რაც ჩვენთვის ძალიან მნიშვნელოვანია.</p>
            </div>
        </section>
    </main>
  )
}

export default page