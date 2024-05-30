'use client'
import { useShallow } from 'zustand/react/shallow'
import { useScoreStore } from './store'

export default function Score() {
    const { score, speed } = useScoreStore(
        useShallow((state) => ({ score: state.score, speed: state.speed }))
    )

    return (
        <div>Score: {score}, speed: {speed}</div>
    )
}