import React from 'react'
import Image from "next/image"
import Link from "next/link";
import styles from "./page.module.scss"
export  default function JsPage () {
    return(
        <div className={styles.container}>
    <div className={styles.wrapper}>

        <div className={styles.main}>

            <ul className={styles.ul}>
                <li className={styles.li}><a className ={styles.a} href="/js">Гла</a></li>
                <li className={styles.li}><a className ={styles.a} href="/js">Java script</a></li>
                <li className={styles.li}><a className ={styles.a} href="/css">CSS</a></li>
                <li className={styles.li}><a className ={styles.a} href="/react">React</a></li>
                <li className={styles.li}><a className ={styles.a} href="/html">HTML</a></li>
            </ul>
            <section>
                    <div className={styles.sectionTextBlock}>
                        <h1>NazDev<br/>Поддержка</h1>
                        <p>Добро пожаловать в раздел поддержки NazDev! Мы стремимся сделать ваше обучение максимально комфортным и эффективным. Наша команда всегда готова помочь вам на каждом этапе вашего образовательного пути.</p>
            <button><Link href="/">На главную</Link></button>
                    </div>
            </section>
        </div>

        <div className={styles.article}>

            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#section1">Как мне начать обучение? </Link></li>
                    <li> <Link  className={styles.a} href="#section2">Сколько стоят курсы? </Link> </li>
                    <li> <Link  className={styles.a} href="#section3">В каком порядке лучше проходить курсы? </Link></li>
                    <li> <Link  className={styles.a} href="#section4">Будут ли добавляться новые курсы?  </Link></li>
                    <li> <Link  className={styles.a} href="#section5">Какой уровень сложности курсов? </Link></li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#section6">Что делать, если видео не воспроизводится? </Link></li>
                    <li> <Link  className={styles.a} href="#section7">Работает ли сайт на мобильных устройствах?  </Link></li>
                    <li> <Link  className={styles.a} href="#section8">Как задать вопрос по материалу курса? </Link></li>
                    <li> <Link  className={styles.a} href="#section9">Где найти дополнительные материалы к курсу? </Link> </li>
                    <li> <Link  className={styles.a} href="#section10">Предоставляются ли сертификаты об окончании курсов? </Link></li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li> <Link  className={styles.a} href="#section11">Можно ли получить помощь от других студентов?  </Link></li>
                    <li> <Link  className={styles.a} href="#section12">Есть ли домашние задания?  </Link></li>
                    <li> <Link  className={styles.a} href="#section13">Что делать, если я не понимаю материал?   </Link></li>
                    <li> <Link  className={styles.a} href="#section14">Можно ли использовать код из курсов в своих проектах?   </Link></li>
                    <li> <Link  className={styles.a} href="#section15">Что делать, если я нашел неточность в материале курса? </Link> </li>
                </ul>
            </div>
            <div className={styles.articleItem}>
                <ul>
                    <li><Link  className={styles.a} href="#section16">Как получить обратную связь по своим проектам? </Link></li>
                    <li> <Link  className={styles.a} href="#section17">Как я могу поддержать проект?</Link></li>
                    <li> <Link  className={styles.a} href="#section18">Как стать спонсором проекта?</Link></li>
                    <li> <Link  className={styles.a} href="#section19">Какие авторские права на материалы курсов? </Link></li>
                    <li> <Link  className={styles.a} href="#section20">Могу ли я помочь проекту, создавая новые курсы? </Link></li>
                </ul>
            </div>

        </div>
    </div>
            <div className={styles.moreInfoBlock}>

                <div className={styles.InfoBlock}>

                    <h2 id="section1">Как мне начать обучение?</h2>
                    <p>
                        Прежде чем приступить к обучению, важно оценить свой текущий уровень знаний. Новичкам рекомендуется начать с HTML, затем перейти к CSS и JavaScript. Для облегчения ориентации по сложности, на сайте используются метки трех цветов, которые обозначают сложноть темы
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section2">Сколько стоят курсы?</h2>
                    <p>
                        На этом сайте представлены бесплатные курсы, которые помогут вам освоить новые технологии, познакомиться с миром фронтенд-разработки и значительно повысить свой уровень знаний.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section3">В каком порядке лучше проходить курсы?</h2>
                    <p>
                        Для наиболее эффективного освоения материала рекомендуется начать с изучения основ HTML, CSS и JavaScript, а затем перейти к React.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section4">Будут ли добавляться новые курсы?</h2>
                    <p>
                        На платформе с бесплатными курсами новые материалы будут появляться реже, чем на платформе с платными курсами и интенсивами.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section5">Какой уровень сложности курсов?</h2>
                    <p>
                        Каждый курс имеет специальное обозначение в виде медали, указывающее на его сложность. Однако это не означает, что тема является чрезмерно сложной; скорее, это говорит о том, что для её освоения потребуется больше времени и внимательности.
                    </p></div>
                <div className={styles.InfoBlock}>

                    <h2 id="section6">Что делать, если видео не воспроизводится?</h2>
                    <p>
                        В случае возникновения проблем с воспроизведением видеоролика, пожалуйста, обратитесь в службу поддержки по адресу электронной почты [адрес почты].
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section7"> Работает ли сайт на мобильных устройствах?</h2>
                    <p>
                        Мы гарантируем безошибочную работу мобильной версии сайта.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section8"> Как задать вопрос по материалу курса?</h2>
                    <p>
                        Да, существует несколько способов получить ответы на вопросы по пройденному курсу. Во-первых, вы можете присоединиться к нашему сообществу в Telegram. Во-вторых, участникам платных курсов предоставляется возможность задать вопрос напрямую мне, и я с высокой вероятностью отвечу и подробно разберу интересующую тему.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section9"> Где найти дополнительные материалы к курсу?</h2>
                    <p>
                        Расширенный материал, дополняющий бесплатный курс, предоставляется в рамках платных курсов, отличающихся более глубоким и всесторонним рассмотрением тем.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section10"> Предоставляются ли сертификаты об окончании курсов?</h2>
                    <p>
                        После завершения бесплатных курсов сертификат не выдается. Но если вы пройдете платные курсы, в конце обучения вам будет предоставлен документ, подтверждающий, что вы являетесь junior frontend-разработчиком.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section11">Можно ли получить помощь от других студентов?</h2>
                    <p>
                        Присоединившись к нашему сообществу NazDev Team, вы получите возможность открыто общаться с другими участниками обучения, задавать вопросы и оказывать помощь другим.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section12">Есть ли домашние задания?</h2>
                    <p>
                        Домашние задания являются неотъемлемой частью учебного процесса как в бесплатных, так и в платных курсах. Они позволяют вам самостоятельно закреплять полученные знания и совершенствовать навыки.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section13"> Что делать, если я не понимаю материал?</h2>
                    <p>
                        Если вам что-то неясно, рекомендуем повторно просмотреть видеоматериал и ознакомиться с текстовой версией темы. Не отчаивайтесь, и у вас обязательно получится! Создатель этого проекта, несмотря на юный возраст (всего 17 лет), столкнулся с трудностями и добился успеха благодаря настойчивости.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section14"> Можно ли использовать код из курсов в своих проектах?</h2>
                    <p>
                        Мы рады, если знания и код, полученные на наших курсах, пригодятся вам в ваших собственных проектах. Мы создаем эти курсы, чтобы поддержать вас на пути к новым знаниям и достижениям.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section15"> Что делать, если я нашел неточность в материале курса?</h2>
                    <p>
                        Мы искренне благодарим вас за внимательность и помощь в обнаружении неточностей и ошибок. Ваши замечания послужат стимулом для дальнейшего улучшения качества наших материалов. О любых обнаруженных проблемах, пожалуйста, сообщайте по адресу электронной почты: [адрес почты].
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section16"> Как получить обратную связь по своим проектам?</h2>
                    <p>
                        Если ваш проект, созданный на основе материалов курса, покажется автору перспективным для обучения других, вы сможете получить обратную связь и даже ревью вашего проекта.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section17">Как я могу поддержать проект?</h2>
                    <p>
                        Если вам нравится проект и вы хотите поддержать его развитие, вы можете внести свой вклад, сделав пожертвование.
                    </p>
                </div>
                <div className={styles.InfoBlock}>

                    <h2 id="section18">Как стать спонсором проекта?</h2>
                    <p>
                        Мы рассматриваем спонсорство как взаимовыгодное партнерство, направленное на достижение общих целей. Если вы разделяете нашу миссию и заинтересованы в долгосрочном сотрудничестве, пожалуйста, свяжитесь с нами по адресу [укажите адрес электронной почты или ссылку на страницу контактов], чтобы обсудить возможные варианты взаимодействия и партнерские программы.
                    </p>
                </div> <div className={styles.InfoBlock}>

                <h2 id="section19">Какие авторские права на материалы курсов?</h2>
                <p>
                    Все материалы курсов (видео, тексты, презентации, задания и т.д.) защищены авторским правом и принадлежат [Название вашей организации/Имя автора]. Любое копирование, распространение, изменение или использование материалов в коммерческих целях без письменного разрешения правообладателя запрещено. Использование материалов разрешено только в личных целях для обучения в рамках курса.
                </p>
            </div> <div className={styles.InfoBlock}>
                <h2 id="section20">Могу ли я помочь проекту, создавая новые курсы?</h2>
                <p>
                    Да, мы будем рады, если вы хотите помочь проекту, создавая новые курсы! Чтобы стать автором курса, пожалуйста, свяжитесь с нами по адресу [укажите адрес электронной почты или ссылку на страницу контактов] и расскажите о своей идее. Мы обсудим детали сотрудничества и поможем вам с публикацией вашего курса.
                </p>
            </div>

            </div>
        </div>
    )
}