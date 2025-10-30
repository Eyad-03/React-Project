import { Link } from 'react-router-dom'
import '../css/signin.css'
import Logo from '../image/logop.png'
import login from '../image/login.jpg'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Signin()
{

return(

<div style={{direction:'rtl'}}>

<div className="container-sign">

<div className='grid1'>

<h1>تسجيل الحساب</h1>

<form>

<div className='field'>
<label>البريد الالكتروني</label>
<input type='email' placeholder='البريد الالكتروني'/>
</div>

<br/>

<div className='field'>
<label>كلمة المرور</label>
<input type='password' placeholder='كلمة السر'/>
</div>

<div>
<Link className='remember'>هل نسيت كلمة السر ؟</Link>
</div>

<div className='btn-reg'>
<Link >تسجيل الدخول</Link>
</div>

</form>

<div className='create'>
<hr/> <p>انشاء بواسطة</p> <hr/>
</div>

<div className='icon-login'>
    <Link><FaFacebook/></Link>
    <Link><FcGoogle/></Link>
</div>

<div className='reg-account'>
    <span> هل لديك حساب ؟</span> <Link to='/signup'> انشاء حساب </Link>
</div>

</div>


<div className='grid2'>

<div className='img-logo'>
<img src={Logo}/>
</div>

<div>
<img src={login}/>
</div>


</div>


</div>


</div>
)

}