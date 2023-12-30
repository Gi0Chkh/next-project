"use client";

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import Button from '@/components/button/Button';

function page({ params }) {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(()=> {
        fetch(`https://fake-coffee-api.vercel.app/api/${params.id}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json[0]);
                setLoading(false);
            })
    }, []);
    return (
        <div>
            <Button url={"/products"} title="უკან დაბრუნება" />
            {loading && <div>გთხოვთ მოიცადოთ...</div>}
            {product && (
                <main className={styles.main}>
                    <div className={styles.textWrap}>
                        <h1>Name: {product.name}</h1>
                        <h2>Region: {product.region}</h2>
                        <h3>Weight: {product.weight} G.</h3>
                        <h4>Roast lvl :{product.roast_level}</h4>
                        <p>{product.description}</p>
                        <p className={styles.flavorPar}>{product.flavor_profile}</p>
                    </div>
                    <Image src={product.image_url} width={500} height={250} alt={product.name}/>
                </main>
            )}
        </div>
    )
}

export default page