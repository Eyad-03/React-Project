import '../css/contact.css'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact()
{


    var contact=
    [

        {id:1,logo:<IoMdCall/>,name:'اتصل بنا',content:"07985453"},
        {id:2,logo:<MdEmail/>,name:' راسلنا عبر البريد الالكتروني',content:"info@gmail.com"},
        {id:3,logo:<FaFacebookSquare/>,name:' محادثة فورية',content:"facebook"},
        {id:4,logo:<FaInstagram/>,name:' محادثة فورية',content:"instagram"},
    ]



return(

<div style={{direction:'rtl'}}>

<div className='bg-contact' >

<div className='header-contact'>
    <h1>نحن هنا لمساعدتك</h1>
    <p>نقدر اهتمامك بالتعلم ونسعد دائما بخدمتك تواصل معنا باي وقت</p>
</div>

</div>

<div className='container-contact'> 

{contact.map((item)=>
<div className='card-contact'>
    <div className='logo-contact'>{item.logo}</div>
    <h5>{item.name} </h5>
    <p>{item.content}</p>
</div>

)}

</div>


</div>

)


}