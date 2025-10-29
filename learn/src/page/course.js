import '../css/course.css'
import mini1 from '../image/mini1.jpg'
import mini2 from '../image/mini2.jpeg'
import mini3 from '../image/mini3.webp'
import mini4 from '../image/mini4.jpg'
import mini5 from '../image/mini5.jpg'
import mini6 from '../image/mini6.jpeg'
import { SiSpeedtest } from "react-icons/si";
import { MdContentPaste } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import cc2 from '../image/cc2.jpg'
import cc3 from '../image/cc3.jpg'
import cc4 from '../image/cc4.webp'
import { Link } from 'react-router-dom'

export default function Course()
{

  var Course =
  [

    {id:1,title:'اساسيات تصميم تجربة المستخدم',description:'تعلم تصميم تجربة المستخدم لميزة افضل',time:'30 ساعة',star:'★★★★★',price:'200 دولار',img:cc2,level:'مبتدئ',number:'250'},
    {id:2,title:'تصميم واجهات تطبيقات',description:'تعلم تصميم التطبيقات بما يتناسب مع السوق',time:'30 ساعة',star:'★★★★',price:'300 دولار',img:cc3,level:'مبتدئ',number:'250'},
    {id:3,title:'التعامل مع الذكاء الاصطناعي',description:'تعلم كيفية التعامل مع الشات بوت و طريقة طرح ',time:'50 ساعة',star:'★★★★',price:'600 دولار',img:cc4,level:'مبتدئ',number:'250'},
    {id:1,title:'اساسيات تصميم تجربة المستخدم',description:'تعلم تصميم تجربة المستخدم لميزة افضل',time:'30 ساعة',star:'★★★★★',price:'200 دولار',img:cc2,level:'مبتدئ',number:'250'},
    {id:2,title:'تصميم واجهات تطبيقات',description:'تعلم تصميم التطبيقات بما يتناسب مع السوق',time:'30 ساعة',star:'★★★★',price:'300 دولار',img:cc3,level:'مبتدئ',number:'250'},
    {id:3,title:'التعامل مع الذكاء الاصطناعي',description:'تعلم كيفية التعامل مع الشات بوت و طريقة طرح ',time:'50 ساعة',star:'★★★★',price:'600 دولار',img:cc4,level:'مبتدئ',number:'250'}

  ]


    const steps = [
    { line1: "فهم تجربة", line2: "المستخدم" },
    { line1: "دراسة سلوك", line2: "المستخدمين" },
    { line1: "إنشاء شخصيات", line2: "المستخدم Personas" },
    { line1: "رحلة المستخدم", line2: "وتخطيط التجربة" },
    { line1: "تقييم وتحسين", line2: "التجربة" },
  ];



return (

<div style={{direction:'rtl'}}>

<div className='bg' >

<div className='header'>
    <h1 style={{ marginTop: '0px',paddingTop:'60px' }}>كل ما تحتاجه من دورات تعليمية</h1>
    <h1>لتصبح محترف في مسار تعليمي واضح  </h1>
</div>


<div className='btn-bg' style={{marginTop:'70px'}}>
    <button className='btn1-bg'>اكتشف مسارات تعليمية</button>
    <button className='btn2-bg'>اختبر نفسك</button>
</div>

<div className='note'>
    <p className='note-flex'><SiSpeedtest/> مسارات مخصصة لمستواك</p>
    <p className='note-flex'><MdContentPaste/> محنوى عملي و تطبيقي</p>
    <p className='note-flex'><PiCertificate/> شهادة في نهاية الكورس</p>
</div>

<div className='img-bg'>
    <img className='img-bg1' src={mini1}/>
    <img className='img-bg2' src={mini5}/>

</div>




</div>   


<div className='learn-title'>
<h1>اختر مسارك التعليمي</h1>
<hr/>
<p>نحن نقدم تجربة تعليمية فريدة تجمع بين النظرية والتطبيق العملي، مع التركيز على احتياجات المصممين في منطقة الخليج العربي</p>
</div>

<div className='course-cotainer'>

<ul>
    <li><Link>تطبيقات</Link></li>
    <li><Link>UI/UX</Link></li>
    <li><Link>لغات</Link></li>
    <li><Link>شبكات</Link></li>
</ul>

<div className='container-course'>

{Course.map((item)=>

<div className='course-card'>
  <div className='img-course'><img src={item.img}/></div>

  <div className='info' style={{padding:'12px'}}>
  <h4>{item.title}</h4>
  <p>{item.description}</p>

  <div className='detail-course'>
    <p>المدة <IoMdTime/> <span>{item.time}</span></p>
    <p>التقيم <span className='star'>{item.star}</span></p>
    <p className='btn-course'>{item.price}<Link to='/sub' state={item}>سجل الان</Link></p>
  </div>
  </div>


</div>
)}


</div>




</div>


    <section className="roadmap" dir="rtl" aria-labelledby="roadmap-title">
      <div className="roadmap__inner">
        <h2 id="roadmap-title" className="roadmap__title">
          تقدمك خطوة بخطوة
        </h2>

        <p className="roadmap__subtitle">
          خريطة تقدم تفاعلية تساعدك على تتبع خطواتك، ومعرفة ما أنجزته وما تبقى لك.
          <span className="roadmap__link"> كل خطوة تقربك أكثر من هدفك</span>
        </p>

        <ul className="timeline" role="list">
          {steps.map((s, i) => (
            <li key={i} className="timeline__step">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__label">
                <span>{s.line1}</span>
                <span>{s.line2}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>







</div>


)


}