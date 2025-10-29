import '../css/home.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { RiFlowChart } from "react-icons/ri";
import { LuPen } from "react-icons/lu";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { GiConfirmed } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineInteraction } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import cc2 from '../image/cc2.jpg'
import cc3 from '../image/cc3.jpg'
import cc4 from '../image/cc4.webp'
import eyad from '../image/my-pic.jpg'

export default function Home ()
{

  var whatLearn = 
  [

    {id:1 ,title:'اساسيات بحث المستخدم',description:'تعرف على كيفية فهم سلوك المستخدم و احتياجاته لبناء تجارب فعالة ',logo:<HiOutlineLightBulb/>},
    {id:2 ,title:'بناء شخصيات المستخدم',description: "تعلم كيفية إنشاء تمثيلات لأهداف ودوافع المستخدمين لفهم جمهورك بطريقة أعمق.",logo:<AiOutlineTeam/>},
    {id:3 ,title: "تصميم تدفق المستخدم",description: "صمم المسارات التي يتبعها المستخدم داخل المنتج لضمان تحقيق الأهداف.",logo:<RiFlowChart/>},
    {id:4 ,title:'اساسيات بحث المستخدم',description:'تعرف على كيفية فهم سلوك المستخدم و احتياجاته لبناء تجارب فعالة ',logo:<LuPen/>},
    {id:5 ,title: "تصميم الواجهة المرئية",description: "صمم واجهات جذابة من خلال التوازن بين الجمالية وسهولة الاستخدام.",logo:<HiMiniComputerDesktop/>},
    {id:6 ,title: "النماذج الأولية التفاعلية",description: "حول أفكارك إلى نماذج يمكن تجربتها وتطويرها قبل التنفيذ الفعلي.",logo:<AiOutlineInteraction/>},
    {id:7 ,title: "اختبار قابلية الاستخدام",description: "اكتشف نقاط القوة والضعف في تصميمك من خلال إجراء اختبارات المستخدمين.",logo:<GiConfirmed/>},
    {id:8 ,title: "مشروع التخرج",description: "قم بتطبيق مشروع عملي لتطبيق كل ما تعلمته وضمانة أن عملك احترافي.",logo:<GiGraduateCap/>}


  ]


  var muchCourse =
  [

    {id:1,title:'اساسيات تصميم تجربة المستخدم',description:'تعلم تصميم تجربة المستخدم لميزة افضل',time:'30 ساعة',star:'★★★★★',price:'200 دولار',img:cc2},
    {id:2,title:'تصميم واجهات تطبيقات',description:'تعلم تصميم التطبيقات بما يتناسب مع السوق',time:'30 ساعة',star:'★★★★',price:'300 دولار',img:cc3},
    {id:3,title:'التعامل مع الذكاء الاصطناعي',description:'تعلم كيفية التعامل مع الشات بوت و طريقة طرح ',time:'50 ساعة',star:'★★★★',price:'600 دولار',img:cc4}


  ]


  var review =
  [
    {id:1,name:'اياد منصور',course:'مصمم واجهة تطبيقات',star:'★ ★ ★ ★ ★',write:'الكورس رائع تعلمت فيه الكثير من الامور و اهمها كيفية عمل واجهة لتطبيقات',img:eyad},
    {id:1,name:'اياد منصور',course:'مصمم واجهة تطبيقات',star:'★ ★ ★ ★ ★',write:'الكورس رائع تعلمت فيه الكثير من الامور و اهمها كيفية عمل واجهة لتطبيقات',img:eyad},
    {id:1,name:'اياد منصور',course:'مصمم واجهة تطبيقات',star:'★ ★ ★ ★ ★',write:'الكورس رائع تعلمت فيه الكثير من الامور و اهمها كيفية عمل واجهة لتطبيقات',img:eyad},

  ]

return (

  <div style={{direction:'rtl'}}>

<div className='bg' >

<div className='header'>
    <h1 style={{ marginTop: '0px',paddingTop:'60px' }}>ابدأ رحلتك في عالم تصميم واجهة وتجربة</h1>
    <h1>المستخدم بخطوات عملية و باللغة العربية</h1>
</div>

<div className='paragraph'>
    <p>            تعلّم تصميم UX/UI من الصفر إلى الاحتراف مع منهج شامل ومشاريع حقيقية،
            مصمم .</p>

    <p>
         خصيصًا للمتعلمين في دول الخليج العرب
    </p>
</div>

<div className='btn-bg'>
    <button className='btn-bg1'>ابدأ الان</button>
    <button className='btn-bg2'>تصفح الدورات</button>
</div>


<div className='stats'>

          <ul className="hero__stats" aria-label="إحصائيات">
            <li className="hero__stat">
              <strong className="hero__statNumber">+10,000</strong>
              <span className="hero__statLabel">طالب متخرج</span>
            </li>
            <li className="hero__divider" aria-hidden="true" />
            <li className="hero__stat">
              <strong className="hero__statNumber">6</strong>
              <span className="hero__statLabel">دول ناشطة</span>
            </li>
            <li className="hero__divider" aria-hidden="true" />
            <li className="hero__stat">
              <strong className="hero__statNumber">96%</strong>
              <span className="hero__statLabel">معدل رضا</span>
            </li>
          </ul>

</div>

</div>    


<div style={{direction:'rtl'}}>

<div className='learn-title'>
<h1>ماذا ستتعلم معنا</h1>
<hr/>
<p>نحن نقدم تجربة تعليمية فريدة تجمع بين النظرية والتطبيق العملي، مع التركيز على احتياجات المصممين في منطقة الخليج العربي</p>
</div>

<div className='cards'>

{whatLearn.map((item)=>
<div className='learn-card'>
<div className='logos'>
{item.logo}
</div>
<h4> {item.title} </h4>
<p>{item.description}</p>
</div>
)}

</div>

</div>

<div>

<div className='much'>
  <h1>الكورسات الاكثر شعبية</h1>
  <hr/>
  <p>مع دورات احترافية تغطي كل المستويات، بإشراف خبراء عرب ومحتوى مخصص لسوق الخليج. (UI/UX)طوّر مهاراتك في تصميم</p>
</div>

<div className='container-offer'>

{muchCourse.map((item)=>

<div className='offer-card'>
  <div className='img-course'><img src={item.img}/></div>

  <div className='info' style={{padding:'12px'}}>
  <h4>{item.title}</h4>
  <p>{item.description}</p>

  <div className='detail-offer'>
    <p>المدة <IoMdTime/> <span>{item.time}</span></p>
    <p>التقيم <span className='star'>{item.star}</span></p>
    <p className='btn-offer'>{item.price}<Link>سجل الان</Link></p>
  </div>
  </div>


</div>
)}


</div>

</div>

<div className='review-container'>


<div className='review-title'>
<h1>اراء طلابنا</h1>
<hr/>
<p>وجهة التعلم المفضلة لكل من يسعى للتميز والإبداع في عالم التصميم داخل الخليج العربي</p>
</div>

<div className='review-grid'>

{review.map((item)=>
<div className='review-card'>

<div><img src={eyad}/></div>
<h5>{item.name}</h5>
<div>
  <h4>{item.course}</h4>
  <p>{item.write}</p>
</div>
<p className='star-review'>{item.star}</p>

</div>

)}

</div>

</div>




</div>

)


}