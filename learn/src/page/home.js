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
import { FaLanguage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { MdDataExploration } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import cc2 from '../image/cc2.jpg'
import cc3 from '../image/cc3.jpg'
import cc4 from '../image/cc4.webp'
import eyad from '../image/my-pic.jpg'
import React, { useState } from 'react';
import it2 from '../image/it2.png'
import it10 from '../image/it10.webp'
import en5 from '../image/en5.jpg'
import cm11 from '../image/cm11.jpg'


export default function Home ()
{

  var whatLearn = 
  [

    {id:1 ,title:'تعلّم اللغات بسهولة',description:'طوّر مهاراتك في التحدث والكتابة عبر تمارين تفاعلية ودروس مصممة لمستواك ',logo:<FaLanguage/>},
    {id:2 ,title:'أساسيات البرمجة والتكنولوجيا',description: "ابدأ من الصفر وتعلّم بناء المواقع والتطبيقات وفهم الخوارزميات بأسلوب مبسّط.",logo:<FaCode/>},
    {id:3 ,title: "التصميم والإبداع الرقمي",description: "اكتشف أدوات التصميم وابدأ بإنشاء أعمال فنية جذابة باستخدام أحدث البرامج.",logo:<RiFlowChart/>},
    {id:4 ,title:'تحليل البيانات و الذكاء الاصطناعي' ,description:'تعرّف على كيفية تحليل البيانات وتطبيق الذكاء الاصطناعي في الحياة العملية. ',logo:<MdDataExploration/>},
    {id:5 ,title: "إدارة المشاريع وتطوير الذات",description: "تعلّم مهارات التنظيم، القيادة، وإدارة الوقت لتحقيق أهدافك بكفاءة.",logo:<HiMiniComputerDesktop/>},
    {id:6 ,title: "مهارات العمل الحر وريادة الأعمال",description: "احترف العمل عبر الإنترنت وابدأ مشروعك بخطوات عملية من خبراء المجال.",logo:<AiOutlineInteraction/>},
    {id:7 ,title: "التسويق الرقمي وصناعة المحتوى",description: "اكتشف أسرار التسويق عبر السوشيال ميديا وطرق بناء هوية رقمية ناجحة.",logo:<GiConfirmed/>},
    {id:8 ,title: "مشروعك التطبيقي",description: "طبّق ما تعلمته في مشروع حقيقي يُبرز مهاراتك ويزيد فرصك في سوق العمل.",logo:<GiGraduateCap/>}


  ]


  var muchCourse =
  [

    {id:1, title:'أساسيات البرمجة بلغة Python', category:'IT', description:'تعلم المفاهيم البرمجية الأساسية من خلال لغة بايثون.', time:'50 ساعة', star:'★★★★', price:'350 دولار', img:it2, level:'مبتدئ', number:'450'},
    {id:4, title:'إدارة الحملات التسويقية', category:'تسويق', description:'تعلم تنظيم وتنفيذ حملات تسويقية ناجحة  .', time:'45 ساعة', star:'★★★★★', price:'440 دولار', img:cm11, level:'متوسط', number:'210'},
    {id:3, title:'إتقان اللغة الإنجليزية للأعمال', category:'لغات', description:'تعلم مصطلحات وتعبيرات العمل بالإنجليزية.', time:'45 ساعة', star:'★★★★★', price:'330 دولار', img:en5, level:'متوسط', number:'310'},


  ]

const allReviews = [
  { id: 1, name: 'رائد الاحمد', course: 'مصمم واجهة تطبيقات', star: '★ ★ ★ ★ ★', write: 'الكورس رائع تعلمت فيه الكثير من الامور و اهمها كيفية عمل واجهة لتطبيقات', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: 'ليان يوسف', course: 'مصممة UX/UI', star: '★ ★ ★ ★ ☆', write: 'تجربة جميلة جداً ساعدتني أطور نفسي في مجال التصميم.', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { id: 3, name: 'محمد عادل', course: 'مبرمج تطبيقات', star: '★ ★ ★ ★ ★', write: 'شرح مفصل وسهل، أنصح الجميع بهذه الدورة.', img: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 4, name: 'سارة خالد', course: 'كاتبة محتوى رقمي', star: '★ ★ ★ ★ ☆', write: 'تعلمت كيف أنسق المحتوى وأصمم واجهات جذابة.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 5, name: 'أحمد ناصر', course: 'مهندس بيانات', star: '★ ★ ★ ★ ★', write: 'الكورس فتح لي أبواب جديدة في تحليل البيانات.', img: 'https://randomuser.me/api/portraits/men/74.jpg' },
  { id: 6, name: 'نور الهدى', course: 'مطورة ويب', star: '★ ★ ★ ★ ★', write: 'طريقة الشرح سهلة جداً والمشاريع مفيدة.', img: 'https://randomuser.me/api/portraits/women/33.jpg' },
  { id: 7, name: 'خالد العتيبي', course: 'مطور تطبيقات موبايل', star: '★ ★ ★ ★ ☆', write: 'استفدت كثيراً من الشرح العملي والتطبيقات الواقعية.', img: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { id: 8, name: 'رنا حمود', course: 'خبيرة تسويق رقمي', star: '★ ★ ★ ★ ★', write: 'المحتوى احترافي جداً وساعدني بتطوير عملي في التسويق.', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 9, name: 'طارق الجوهري', course: 'محلل بيانات', star: '★ ★ ★ ★ ☆', write: 'تعلمت كيفية استخدام أدوات التحليل بشكل احترافي.', img: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 10, name: 'هند القحطاني', course: 'مصممة جرافيك', star: '★ ★ ★ ★ ★', write: 'التدريب ممتع جداً والمدربون محترفون.', img: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { id: 11, name: 'عبدالرحمن سعيد', course: 'مطور مواقع', star: '★ ★ ★ ★ ★', write: 'الدورة ساعدتني على فهم React وJavaScript بطريقة سهلة.', img: 'https://randomuser.me/api/portraits/men/54.jpg' },
  { id: 12, name: 'ريم منصور', course: 'خبيرة تجربة المستخدم', star: '★ ★ ★ ★ ☆', write: 'تعلمت التفكير من منظور المستخدم لتصميم واجهات أفضل.', img: 'https://randomuser.me/api/portraits/women/47.jpg' },
  { id: 13, name: 'فهد البدر', course: 'مبرمج بايثون', star: '★ ★ ★ ★ ★', write: 'الدورة ممتعة ومليئة بالأمثلة العملية، أنصح بها.', img: 'https://randomuser.me/api/portraits/men/25.jpg' },
  { id: 14, name: 'هدى محمود', course: 'كاتبة محتوى', star: '★ ★ ★ ★ ☆', write: 'تعلمت كتابة المحتوى الإبداعي بأسلوب جذاب وواضح.', img: 'https://randomuser.me/api/portraits/women/19.jpg' },
  { id: 15, name: 'علي الحربي', course: 'محلل نظم', star: '★ ★ ★ ★ ★', write: 'أكثر دورة منظمة ومفيدة التحقت بها حتى الآن.', img: 'https://randomuser.me/api/portraits/men/15.jpg' }
];


const [index, setIndex] = useState(0);
const reviewsToShow = allReviews.slice(index, index + 3);

const nextReviews = () => {
  setIndex((prev) => (prev + 3) % allReviews.length);
};

const prevReviews = () => {
  setIndex((prev) => (prev - 3 + allReviews.length) % allReviews.length);
};

return (

  <div style={{direction:'rtl'}}>

<div className='bg' >

<div className='header'>
    <h1 style={{ marginTop: '0px',paddingTop:'60px' }}>ابدأ رحلتك في عالم الدورات التعليمية وتجربة</h1>
    <h1>المستخدم بخطوات عملية و باللغة العربية</h1>
</div>

<div className='paragraph'>
    <p>            تعلّم تصميم مسار واضح من الصفر إلى الاحتراف مع منهج شامل ومشاريع حقيقية،
           </p>

    <p>
         خصيصًا للمتعلمين في الدول العربية
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

  <div className='arrow-container'>
    <div className='right-arrow' onClick={nextReviews}><FaArrowCircleRight /></div>
    <div className='left-arrow' onClick={prevReviews}><FaArrowCircleLeft /></div>
  </div>

  <div className='review-title'>
    <h1>اراء طلابنا</h1>
    <hr />
    <p>وجهة التعلم المفضلة لكل من يسعى للتميز والإبداع في عالم التصميم داخل الخليج العربي</p>
  </div>

  <div className='review-grid'>
    {reviewsToShow.map((item) => (
      <div className='review-card' key={item.id}>
        <div><img src={item.img} alt={item.name} /></div>
        <h5>{item.name}</h5>
        <div>
          <h4>{item.course}</h4>
          <p>{item.write}</p>
        </div>
        <p className='star-review'>{item.star}</p>
      </div>
    ))}
  </div>
</div>





</div>

)


}