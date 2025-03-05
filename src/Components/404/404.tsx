import "./404.scss"
import {useNavigate} from 'react-router-dom'

export default function ErrorPage ()  {
  const naviagate = useNavigate()
    return (
        <div className="error-main">
            <div className="error">
            <h1>404</h1>
            <p>We're sorry but it looks like that page doesn't exist.</p>
              <div className="b">
                <button onClick={()=> {
                  naviagate("/")
                }}>Go Back </button>
              </div>
            </div>
        </div>
    )
}