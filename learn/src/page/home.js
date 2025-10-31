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

    {id:1 ,title:'تعلّم اللغات بسهولة',description:'طوّر مهاراتك في التحدث والكتابة عبر تمارين تفاعلية ودروس مصممة لمستواك ',logo:<HiOutlineLightBulb/>},
    {id:2 ,title:'أساسيات البرمجة والتكنولوجيا',description: "ابدأ من الصفر وتعلّم بناء المواقع والتطبيقات وفهم الخوارزميات بأسلوب مبسّط.",logo:<AiOutlineTeam/>},
    {id:3 ,title: "التصميم والإبداع الرقمي",description: "اكتشف أدوات التصميم وابدأ بإنشاء أعمال فنية جذابة باستخدام أحدث البرامج.",logo:<RiFlowChart/>},
    {id:4 ,title:'تحليل البيانات و الذكاء الاصطناعي' ,description:'تعرّف على كيفية تحليل البيانات وتطبيق الذكاء الاصطناعي في الحياة العملية. ',logo:<LuPen/>},
    {id:5 ,title: "إدارة المشاريع وتطوير الذات",description: "تعلّم مهارات التنظيم، القيادة، وإدارة الوقت لتحقيق أهدافك بكفاءة.",logo:<HiMiniComputerDesktop/>},
    {id:6 ,title: "مهارات العمل الحر وريادة الأعمال",description: "احترف العمل عبر الإنترنت وابدأ مشروعك بخطوات عملية من خبراء المجال.",logo:<AiOutlineInteraction/>},
    {id:7 ,title: "التسويق الرقمي وصناعة المحتوى",description: "اكتشف أسرار التسويق عبر السوشيال ميديا وطرق بناء هوية رقمية ناجحة.",logo:<GiConfirmed/>},
    {id:8 ,title: "مشروعك التطبيقي",description: "طبّق ما تعلمته في مشروع حقيقي يُبرز مهاراتك ويزيد فرصك في سوق العمل.",logo:<GiGraduateCap/>}


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
<p>نحن نقدم تجربة تعليمية فريدة تجمع بين النظرية والتطبيق العملي، مع التركيز على احتياجات الطلاب في المنطقة العربية</p>
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
  <p>مع دورات احترافية تغطي كل المستويات، بإشراف خبراء ومحتوى مخصص لسوق العربي طوّر مهاراتك في مختلف المجالات</p>
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