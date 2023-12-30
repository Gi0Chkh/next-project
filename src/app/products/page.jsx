import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
    const res = await fetch("https://fake-coffee-api.vercel.app/api/", {
      cache: "force-cache",
    });
  
    if (!res.ok) {
      throw new Error("There is no data");
    };

    return res.json();
};

async function page() {
    const data = await getData();
    return (
        <main className={styles.main}>
            {data.map((product) => (
                <Link href={`/products/${product.id}`} className={styles.prodWrap} style={product.id % 2 === 0 ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
                    <Image src={product.image_url} width={100} height={50} className={styles.prodImg}/>
                    <div className={styles.prodTextWrap}>
                        <p className={styles.prodName}>{product.name}</p>
                        <p className={styles.prodPrice}>${product.price}</p>
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default page