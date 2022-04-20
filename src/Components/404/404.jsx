

//SASS
import { Link } from 'react-router-dom'
import './404.scss'

function NotFound(){
    return(
        <div className='nf_wrapper'>
            <h1 className='nf_title'>Page not found</h1>
            <Link className='nf_link'>back to home page</Link>
        </div>
    )
}

export default NotFound