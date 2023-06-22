import styles from './Landing.module.css'
import React, {useState, useEffect} from 'react'
import { Board } from '../Board/Board'


export const Landing = () => {
    const [winner, setWinner] =useState()
    const [player1, setPlayer1] = useState('Player 1')
    const [player2, setPlayer2] = useState('Player 2')
    const [starter, setStarter] =useState(player1)
    const [turn, setTurn] = useState(player2)
    const [score, setScore] = useState()
    const [r1, setr1] = useState(0)
    const [r2, setr2] = useState(0)
    const [r3, setr3] = useState(0)
    const [c1, setc1] = useState(0)
    const [c2, setc2] = useState(0)
    const [c3, setc3] = useState(0)
    const [d1, setd1] = useState(0)
    const [d2, setd2] = useState(0)
    const [tl, setTl] = useState ()
    const [tm, setTm] = useState ()
    const [tr, setTr] = useState ()
    const [ml, setMl] = useState ()
    const [mm, setMm] = useState ()
    const [mr, setMr] = useState ()
    const [bl, setBl] = useState ()
    const [bm, setBm] = useState ()
    const [br, setBr] = useState ()

    



    useEffect(() => {
        [r1, r2, r3, c1, c2, c3, d1, d2].forEach((element)=>{
            if (element===3) {
                setWinner(player1)
            }
            if (element===-3) {
                setWinner(player2)
            }
        })
    
    }, [r1, r2, r3, c1, c2, c3, d1, d2])
    




    return (
        <div className={styles.landing}>
            <h1>
                {turn}'s turn
            </h1>
            {winner && <h1>{winner} Wins!</h1>}
            <Board winner={winner} player1={player1} player2={player2} turn={turn} setTurn={setTurn} r1={r1} r2={r2} r3={r3} c1={c1} c2={c2} c3={c3} d1={d1} d2={d2} setr1={setr1} setr2={setr2} setr3={setr3} setc1={setc1} setc2={setc2} setc3={setc3} setd1={setd1} setd2={setd2} 
            
            tl={tl} setTl={setTl} tm={tm} setTm={setTm} tr={tr} setTr={setTr} ml={ml} setMl={setMl} mm={mm} setMm={setMm} mr={mr} setMr={setMr} bl={bl} setBl={setBl} bm={bm} setBm={setBm} br={br} setBr={setBr}/>

            <button className={styles.reset} onClick={() =>{
                if (starter==player1) {
                    setStarter(player2)
                    setTurn(starter)
                } else {
                    setStarter(player1)
                    setTurn(starter)
                }
                setWinner(undefined)
                setr1(0)
                setr2(0)
                setr3(0)
                setc1(0)
                setc2(0)
                setc3(0)
                setd1(0)
                setd2(0)

                setTl(undefined)
                setTm(undefined)
                setTr(undefined)
                setMl(undefined)
                setMm(undefined)
                setMr(undefined)
                setBl(undefined)
                setBm(undefined)
                setBr(undefined)          



            }}>
                Reset
            </button>


        </div>
    )



}