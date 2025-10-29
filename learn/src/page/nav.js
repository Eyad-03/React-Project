import '../css/nav.css'
import { Link } from 'react-router-dom'
import Logo from '../image/logop.png'

export default function Nav ()
{


return (


<div className="nav">

<div className='logo'>
    <img src={Logo} />
</div>



<div className="list-nav">
    <ul>
        <li><Link to=''> الرئيسية</Link> </li>
        <li><Link to='/course'> مساراتنا</Link>  </li>
        <li><Link to='/trainer'> مدربينا</Link> </li>
        <li><Link to=''> تواصل معنا</Link></li>
    </ul>
</div>

<div className='search'>
    <input type='search' placeholder='بحث'/>
</div>


<div className='btn-nav'>
    <button>تسجيل الدخول</button>
    <button>ابدأ التعلم </button>
</div>


</div>

)


}