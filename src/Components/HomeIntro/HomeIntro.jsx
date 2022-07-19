

//SASS
import './HomeIntro.scss'

function HomeIntro() {
    return (
        <>
            <section className="intro">
                <div className="container">
                    <div className="intro__wrapper">
                        <h1 className='intro__title'>Logeeka Science</h1>
                        <h2 className='intro__subtitle'>International scientific journal</h2>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='intro__banner'>
                    <a href="#" className='intro__link'>
                        <img className='intro__img' src="https://picsum.photos/700/200" alt="someimg" />
                    </a>
                    <a href="#" className='intro__link'>
                        <img className='intro__img' src="https://picsum.photos/700/200" alt="someimg" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomeIntro