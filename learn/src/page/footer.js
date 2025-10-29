import { Link } from 'react-router-dom'
import Logo from '../image/logop.png'
import '../css/footer.css'
import { FaFacebook } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

export default function Footer()
{


    return(

    <div className='footer'>


        <div className='footer1'> 
            <div><img src={Logo}/></div>
            <p>منصة عربية متخصصة في تعليم تصميم واجهة وتجربة المستخدم (UI/UX) للمبتدئين والمحترفين، وتهدف إلى تطوير مهارات المصممين وتأهيلهم لسوق العمل في الوطن العربي والخليج.</p>
            <div className='icons'>
                <Link className="uxar-icon"><FaLinkedinIn/></Link>
                <Link className="uxar-icon"><GrFacebookOption/></Link>
                <Link className="uxar-icon"><RiTwitterXLine/></Link>
                <Link className="uxar-icon"><FaInstagram/></Link>
            </div>
        </div>


        <div className='footer2'>
            <h3>روابط سريعة</h3>
            <div>
                <p>الرئيسية</p>
                <p>الكورسات</p>
                <p>المدربين</p>
                <p>الاسئلة الشائعة</p>
            </div>
        </div>


        <div className='footer2'>
            <h3> الكورسات</h3>
            <div>
                <p>اساسيات البرمجة</p>
                <p>اختيار المستخدم</p>
                <p>تصميم الواجهات</p>
                <p>الاسئلة الشائعة</p>
            </div>
        </div>


        <div className='footer2' style={{padding:'10px 25px'}}>
            <h3> تواصل معنا</h3>
            <div>
                <p>info@gmail.com </p>
                <p> +9651188484</p>

            </div>
        </div>



    </div>

)

}