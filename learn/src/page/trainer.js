import { Link } from 'react-router-dom'
import '../css/trainer.css'
import eyad from '../image/my-pic.jpg'


export default function Trainer()
{

    var trainerInfo = 
    [

        {id:1,name:'اياد منصور',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★',rate:'  ( 4.5 ) تقييم',count:' +450 طالب',exp:'8 سنوات خبرة',description:'خبير في تصميم واجهات المستخدم الحديثة مع أكثر من 8 سنوات من الخبرة في تطوير تجارب رقمية استثنائية. عمل مع شركات ناشئة ومؤسسات كبيرة في تصميم منتجات رقمية تخدم ملايين المستخدمين.'},
        {id:2,name:'محمد منصور ',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★',rate:' 4.5 تقييم',count:'+450',exp:'8 سنوات خبرة',description:'خبير في تصميم واجهات المستخدم الحديثة مع أكثر من 8 سنوات من الخبرة في تطوير تجارب رقمية استثنائية. عمل مع شركات ناشئة ومؤسسات كبيرة في تصميم منتجات رقمية تخدم ملايين المستخدمين.'},
        {id:3,name:'اياد منصور',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★'},
        {id:4,name:'اياد منصور',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★'},
        {id:5,name:'اياد منصور',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★'},
        {id:6,name:'اياد منصور',field:'مدرب تصميم',img:eyad,rate:'★ ★ ★ ★ ★'},


    ]

return(

<div style={{backgroundColor:'rgb(235, 242, 253)'}}>


<div className='bg' >

<div className='header-trainer'>
    <h1>تعرف على نخبة مدربينا</h1>
    <p>"ستكشف نخبة من المدربين المعتمدين في تصميم تجربة المستخدم وواجهات الاستخدام. لكل مدرب ملف تعريفي يشمل خبراته، تقييمه، عدد الطلاب الذين دربهم، وتخصصه الدقيق. ابدأ الآن واختر المدرب المناسب لتطوير مهاراتك خطوة بخطوة."</p>
</div>

</div>    

<div className='trainer-container'>

{trainerInfo.map((item)=>
<div className='card-trainer'>

    <div className='info-trainer'>

    <div className='border-img'>
    <img src={item.img}/>    
    </div>

    <h4> {item.name} </h4>
    </div>

    <div className='badge'>
        <span>{item.field}</span>
        <p className='rate-trainer'>★ ★ ★ ★ ★</p>
        
    </div>

    <div className='btn-trainer'>
        <Link to='/subtrainer' state={item}>عرض الملف الشخصي</Link>
    </div>

</div>

)}


</div>

</div>

)


}