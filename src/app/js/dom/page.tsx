import React from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'
import Link  from "next/link"
import 'animate.css';
import Accordion from "@/components/accordion/accordion";

export  default function JsPage () {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperOne_Item}>

                    <div className={styles.first}>
                        <h2 className={styles.data_h2}>Типы данных</h2>
                        <p className={styles.data_p}>Значение в JavaScript всегда относится к данным определённого типа.
                            Например, это может быть строка или число.

                            Есть восемь основных типов данных в JavaScript. В этой главе мы рассмотрим их в общем, а в
                            следующих главах поговорим подробнее о каждом.

                            Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а
                            в другой – число:
                        </p>

                    </div>

                    <div className={styles.second}>
                        <h2 className={styles.data_h2}>Число</h2>
                        <p className={styles.data_p}>
                            Числовой тип данных (number) представляет как целочисленные значения, так и числа с
                            плавающей точкой.

                            Существует множество операций для чисел, например, умножение *, деление /, сложение +,
                            вычитание - и так далее.

                            Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые
                            относятся к этому типу данных: Infinity, -Infinity и NaN.

                            Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое
                            больше любого числа.
                        </p>
                    </div>
                    <div className={styles.three}>
                        <h2 className={styles.data_h2}>Число</h2>
                        <p className={styles.data_p}>
                            Числовой тип данных (number) представляет как целочисленные значения, так и числа с
                            плавающей точкой.

                            Существует множество операций для чисел, например, умножение *, деление /, сложение +,
                            вычитание - и так далее.

                            Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые
                            относятся к этому типу данных: Infinity, -Infinity и NaN.

                            Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое
                            больше любого числа.
                        </p>
                    </div>
                    <div className={styles.four}>
                        <h2 className={styles.data_h2}>Число</h2>
                        <p className={styles.data_p}>
                            Числовой тип данных (number) представляет как целочисленные значения, так и числа с
                            плавающей точкой.

                            Существует множество операций для чисел, например, умножение *, деление /, сложение +,
                            вычитание - и так далее.

                            Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые
                            относятся к этому типу данных: Infinity, -Infinity и NaN.

                            Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое
                            больше любого числа.
                        </p>

                    </div>
                    <div className={styles.five}>
                        <h2 className={styles.data_h2}>Число</h2>
                        <p className={styles.data_p}>
                            Числовой тип данных (number) представляет как целочисленные значения, так и числа с
                            плавающей точкой.

                            Существует множество операций для чисел, например, умножение *, деление /, сложение +,
                            вычитание - и так далее.

                            Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые
                            относятся к этому типу данных: Infinity, -Infinity и NaN.

                            Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое
                            больше любого числа.
                        </p>

                    </div>
                </div>
                <div className={styles.wrapperTwo_Item}>
                    <h1 className={styles.data_h1}>Java Script. Работа с DOM</h1>

                    <div className={styles.content}>
                        <div className={styles.contentOne}></div>
                        <div className={styles.contentTwo}></div>

                    </div>
                    <p className={styles.footertitle}>NazDev corporation</p>
                </div>
            </div>
        </div>
    )
}
