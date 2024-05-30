'use client'
import { useScoreStore } from './store'
import styles from './loader.module.css'

export default function Loader() {
    const loading = useScoreStore((state) => (state.loading))

    return loading ? (
        <div className={styles.loader}>Loading dictionary...</div>
    )
        : null
}