import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch("https://fake-coffee-api.vercel.app/api/", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("There is no data");
  }

  return res.json();
};

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <section className={styles.picSect}>
          <h1>TeaTopia-სთან ერთად ყოველთვის ჩაის დროა.</h1>
      </section>
      <section className={styles.prodSect}>
          <h1>- ახალი პროდუქტები -</h1>
          <div className={styles.prodItems}>
              <Link href={`/products/${data[0].id}`} className={styles.prodItem}>
                  <Image src={data[0].image_url} alt="Product image" width={324} height={162} className={styles.prodImg} />
                  <p>{data[0].name}</p>
                  <p>{data[0].price}</p>
              </Link>
              <Link href={`/products/${data[1].id}`} className={styles.prodItem}>
                  <Image src={data[1].image_url} alt="Product image" width={324} height={162} className={styles.prodImg} />
                  <p>{data[1].name}</p>
                  <p>{data[1].price}</p>
              </Link>
              <Link href={`/products/${data[2].id}`} className={styles.prodItem}>
                  <Image src={data[2].image_url} alt="Product image" width={324} height={162} className={styles.prodImg} />
                  <p>{data[2].name}</p>
                  <p>{data[2].price}</p>
              </Link>
          </div>
          <Button url={"/products"} title="მეტის ნახვა" />
      </section>
      <section className={styles.aboutSect}>
          <div className={styles.aboutWrap}>
              <h1>გაიგეთ მეტი ჩვენი ბიზნესის შესახებ</h1>
              <div className={styles.buttonWrap}>
                <Button url={"/about"} title="ჩვენ შესახებ" />
                <Button url={"/services"} title="სერვისები" />
              </div>
          </div>
      </section>
    </main>
  )
}
