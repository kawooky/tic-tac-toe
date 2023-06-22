import React, {useState} from 'react'
import styles from './Board.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-regular-svg-icons'



export const Board = ({winner, player1, player2, turn, setTurn, r1, r2, r3, c1, c2, c3, d1, d2, setr1, setr2, setr3, setc1, setc2, setc3, setd1, setd2, tl, tm, tr, ml, mm, mr, bl, bm, br, setTl, setTm, setTr, setMl, setMm, setMr, setBl, setBm, setBr}) => {









    return (
        <div className={styles.board}>
            <div className={styles.row}>
                <button className={styles.tile} onClick={()=>{
                    setTl(turn)
                    if (turn===player1) {
                        setr1(r1+ 1)
                        setc1(c1+1)
                        setd1(d1+1)
                    }

                    if (turn===player2) {
                        setr1(r1- 1)
                        setc1(c1-1)
                        setd1(d1-1)
                    }

                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }} 
                disabled={tl || winner}
                >
                    {tl===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {tl===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={tm || winner} onClick={()=>{
                    setTm(turn)
                     if (turn===player1) {
                        setr1(r1+ 1)
                        setc2(c2+1)

                    }

                    if (turn===player2) {
                        setr1(r1- 1)
                        setc2(c2-1)
                    }

                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }}>
                    {tm===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {tm===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={tr || winner} onClick={()=>{
                    setTr(turn)
                     if (turn===player1) {
                        setr1(r1+ 1)
                        setc3(c3+1)
                        setd2(d2+1)

                    }

                    if (turn===player2) {
                        setr1(r1- 1)
                        setc3(c3-1)
                        setd2(d2-1)
                    }

                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }}>
                    {tr===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {tr===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
            </div>





            <div className={styles.row}>
                <button className={styles.tile} disabled={ml || winner} onClick={()=>{
                    setMl(turn)
                    if (turn===player1) {
                        setr2(r2+1)
                        setc1(c1+1)
                    }

                    if (turn===player2) {
                        setr2(r2-1)
                        setc1(c1-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                    
                }}>
                    {ml===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {ml===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={mm || winner} onClick={()=>{
                    setMm(turn)
                    if (turn===player1) {
                        setr2(r2+1)
                        setc2(c2+1)
                        setd1(d1+1)
                        setd2(d2+1)
                    }

                    if (turn===player2) {
                        setr2(r2-1)
                        setc2(c2-1)
                        setd1(d1-1)
                        setd2(d2-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }
                }}>
                    {mm===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {mm===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={mr || winner} onClick={()=>{
                    setMr(turn)
                    if (turn===player1) {
                        setr2(r2+1)
                        setc3(c3+1)
                    }

                    if (turn===player2) {
                        setr2(r2-1)
                        setc3(c3-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }
                }}>
                    {mr===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {mr===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
            </div>

            <div className={styles.row}>
            <button className={styles.tile} disabled={bl || winner} onClick={()=>{
                setBl(turn)
                    if (turn===player1) {
                        setr3(r3+ 1)
                        setc1(c1+1)
                        setd2(d2+1)
                    }

                    if (turn===player2) {
                        setr3(r3- 1)
                        setc1(c1-1)
                        setd2(d2-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }}>
                    {bl===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {bl===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={bm || winner} onClick={()=>{
                    setBm(turn)
                     if (turn===player1) {
                        setr3(r3+ 1)
                        setc2(c2+1)

                    }

                    if (turn===player2) {
                        setr3(r3- 1)
                        setc2(c2-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }}>
                    {bm===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {bm===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
                <button className={styles.tile} disabled={br || winner} onClick={()=>{
                    setBr(turn)
                     if (turn===player1) {
                        setr3(r3+ 1)
                        setc3(c3+1)
                        setd1(d1+1)

                    }

                    if (turn===player2) {
                        setr3(r3- 1)
                        setc3(c3-1)
                        setd1(d1-1)
                    }
                    if (turn===player1) {
                        setTurn(player2)
                    }
                    if (turn===player2) {
                        setTurn(player1)
                    }

                }}>
                    {br===player1 && <FontAwesomeIcon icon={faXmark}/>}
                    {br===player2 && <FontAwesomeIcon icon={faCircle} />}
                </button>
            </div>


        </div>
    )



}

