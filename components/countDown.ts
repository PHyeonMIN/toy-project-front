import { useEffect, useState } from 'react';

const targetDate = new Date('2022-12-29 23:59:59');
const Countdown = (targetDate: Date): number[] => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
    }, [countDownDate]);

    return getReturnValues(countDown)
}

const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
}

const [days, hours, minutes, seconds] = Countdown(targetDate);