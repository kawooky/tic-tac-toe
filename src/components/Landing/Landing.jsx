import styles from './Landing.module.css'
import React, {useState, useEffect} from 'react'
import { Board } from '../Board/Board'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-regular-svg-icons'


export const Landing = () => {
    const [winner, setWinner] =useState()
    const [counter, setCounter] = useState(0)
    const [player1, setPlayer1] = useState('Player 1')
    const [player2, setPlayer2] = useState('Player 2')
    const [starter, setStarter] =useState(player1)
    const [turn, setTurn] = useState(starter)
    const [score, setScore] = useState([0,0,0])
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
                setScore([score[0]+1, score[1], score[2]])
            }
            if (element===-3) {
                setWinner(player2)
                setScore([score[0], score[1], score[2]+1])
            }
            if (counter===9 && !winner ) {
                setWinner('Tie')
                setScore([score[0], score[1]+1, score[2]])
            }
        })
    
    }, [r1, r2, r3, c1, c2, c3, d1, d2, counter])
    




    return (
        <div className={styles.landing}>
            <div className={styles.top}>
                <h1 className={styles.header}>Tic-Tac-Toe</h1>
                <div className={styles.turn}>
                    {(!winner && turn=== player1) &&
                    <h1>
                        <FontAwesomeIcon icon={faXmark} size='xl'/>
                    </h1>
                    }
                    {(!winner && turn=== player2) &&
                    <h1>
                        <FontAwesomeIcon icon={faCircle}/>
                    </h1>
                    }                
                    {(winner && winner!=='Tie') && <h1><FontAwesomeIcon icon={faXmark} size='xl'/> Wins!</h1>}
                    {winner==='Tie' && <h1>It's a Tie</h1>}
                </div>
            </div>

            <div className={styles.middle}>
                <Board counter={counter} setCounter={setCounter} winner={winner} player1={player1} player2={player2} turn={turn} setTurn={setTurn} r1={r1} r2={r2} r3={r3} c1={c1} c2={c2} c3={c3} d1={d1} d2={d2} setr1={setr1} setr2={setr2} setr3={setr3} setc1={setc1} setc2={setc2} setc3={setc3} setd1={setd1} setd2={setd2} 
                
                tl={tl} setTl={setTl} tm={tm} setTm={setTm} tr={tr} setTr={setTr} ml={ml} setMl={setMl} mm={mm} setMm={setMm} mr={mr} setMr={setMr} bl={bl} setBl={setBl} bm={bm} setBm={setBm} br={br} setBr={setBr}/>
            </div>


            <div className={styles.bottom}>
                <div className={styles.playAgainContainer}>
                    {(winner || counter===9) && 
                    <button className={styles.playAgainButton} onClick={() =>{
                        if (starter==player1) {
                            setStarter(player2)
                            setTurn(starter)
                        } else {
                            setStarter(player1)
                            setTurn(starter)
                        }
                        setWinner(undefined)
                        setCounter(0)
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
                        Play Again
                    </button>
                    }

                </div>

            <div className={styles.score}>
                <div className={styles.player1Score}>
                <h1><FontAwesomeIcon icon={faCircle} /></h1>
                <h1>{score[0]}</h1>
                </div>
                <div className={styles.tieScore}>
                <h1>Tie</h1>
                <h1>{score[1]}</h1>
                </div>
                <div className={styles.player2Score}>
                <h1><FontAwesomeIcon icon={faXmark} size='xl'/></h1>
                <h1>{score[2]}</h1>
                </div>
            </div>

            </div>


        </div>
    )



}