'use client'
import { useEffect, useState } from "react"
import { useScoreStore } from "./store"
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';
import { useShallow } from "zustand/react/shallow";

export default function Graph() {
    const { speed, startTime } = useScoreStore(
        useShallow((state) => ({ speed: state.speed, startTime: state.startTime }))
    );
    const [speedList, setSpeedList] = useState<number[]>([]);

    useEffect(() => {
        setSpeedList((speedList) => [...speedList, speed])
    }, [speed])

    useEffect(() => {
        if (!startTime) {
            setSpeedList([])
        }
    }, [startTime])

    return (
        <div style={{ width: '100%', height: '200px' }}>
            Graph
            <Sparklines data={speedList} limit={20}>
                <SparklinesCurve style={{ fill: "none", strokeWidth: 3 }} />
                <SparklinesSpots />
            </Sparklines>
        </div>
    )
}