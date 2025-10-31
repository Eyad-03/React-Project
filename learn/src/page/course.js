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
import React,{useState} from 'react'
import it1 from '../image/it1.webp'
import it2 from '../image/it2.png'
import it3 from '../image/it3.png'
import it4 from '../image/it4.jpg'
import it5 from '../image/it5.jpg'
import it6 from '../image/it6.jpeg'
import it7 from '../image/it7.jpg'
import it8 from '../image/it8.jpg'
import it9 from '../image/it9.png'
import it10 from '../image/it10.webp'
import it11 from '../image/it11.jpg'
import it12 from '../image/it12.jpg'
import en1 from '../image/en1.jpg'
import en2 from '../image/en2.png'
import en3 from '../image/en3.jpeg'
import en4 from '../image/en4.jpeg'
import en5 from '../image/en5.jpg'
import en66 from '../image/en66.jpg'
import en7 from '../image/en7.jpeg'
import en8 from '../image/en8.jpg'
import en9 from '../image/en9.png'
import en10 from '../image/en10.png'
import en11 from '../image/en11.png'
import cm1 from '../image/cm1.jpeg'
import cm2 from '../image/cm2.jpg'
import cm3 from '../image/cm3.png'
import cm4 from '../image/cm4.jpg'
import cm5 from '../image/cm5.png'
import cm6 from '../image/cm6.png'
import cm7 from '../image/cm7.jpg'
import cm8 from '../image/cm8.jpg'
import cm9 from '../image/cm9.jpeg'
import cm10 from '../image/cm10.png'
import cm11 from '../image/cm11.jpg'
import cm12 from '../image/cm12.png'


export default function Course()
{


  const [selectedCategory, setSelectedCategory] = useState("الكل");

 

var Course = [

  // ===== IT =====
{id:13, title:'مقدمة في الأمن السيبراني', category:'IT', description:'اكتشف أساسيات حماية المعلومات والتصدي للهجمات الإلكترونية.', time:'40 ساعة', star:'★★★★★', price:'400 دولار', img:it1, level:'مبتدئ', number:'320'},
{id:14, title:'أساسيات البرمجة بلغة Python', category:'IT', description:'تعلم المفاهيم البرمجية الأساسية من خلال لغة بايثون.', time:'50 ساعة', star:'★★★★', price:'350 دولار', img:it2, level:'مبتدئ', number:'450'},
{id:15, title:'تطوير الويب باستخدام HTML وCSS', category:'IT', description:'ابدأ رحلتك في بناء مواقع الويب من الصفر.', time:'45 ساعة', star:'★★★★★', price:'320 دولار', img:it3, level:'مبتدئ', number:'480'},
{id:16, title:'JavaScript المتقدمة', category:'IT', description:'تعلم بناء تطبيقات ويب تفاعلية باستخدام لغة جافاسكريبت.', time:'50 ساعة', star:'★★★★', price:'400 دولار', img:it4, level:'متوسط', number:'290'},
{id:17, title:'إدارة قواعد البيانات باستخدام SQL', category:'IT', description:'تعلم كيفية التعامل مع البيانات وإجراء الاستعلامات باحتراف.', time:'40 ساعة', star:'★★★★★', price:'370 دولار', img:it5, level:'متوسط', number:'310'},
{id:18, title:'الشبكات وأنظمة الاتصال', category:'IT', description:'تعلم المفاهيم الأساسية للشبكات والبروتوكولات.', time:'45 ساعة', star:'★★★★', price:'390 دولار', img:it6, level:'مبتدئ', number:'280'},
{id:19, title:'نظام التشغيل Linux', category:'IT', description:'تعرف على كيفية التعامل مع لينكس وإدارة الأوامر الأساسية.', time:'30 ساعة', star:'★★★★', price:'270 دولار', img:it7, level:'مبتدئ', number:'220'},
{id:20, title:'تحليل البيانات باستخدام Excel وPower BI', category:'IT', description:'تعلم تحليل البيانات وعرضها بشكل احترافي.', time:'40 ساعة', star:'★★★★★', price:'360 دولار', img:it8, level:'متوسط', number:'300'},
{id:21, title:'إدارة المشاريع التقنية', category:'IT', description:'تعرف على كيفية إدارة فرق تقنية وضبط المهام ضمن الوقت المحدد.', time:'35 ساعة', star:'★★★★', price:'310 دولار', img:it9, level:'متوسط', number:'240'},
{id:22, title:'الذكاء الاصطناعي وتعلم الآلة', category:'IT', description:'تعلم أساسيات بناء النماذج الذكية والتنبؤية.', time:'60 ساعة', star:'★★★★★', price:'500 دولار', img:it10, level:'متقدم', number:'200'},
{id:23, title:'إدارة السيرفرات والسحابة الإلكترونية', category:'IT', description:'تعرف على إدارة الخوادم وتطبيق تقنيات Cloud الحديثة.', time:'55 ساعة', star:'★★★★', price:'470 دولار', img:it11, level:'متوسط', number:'180'},
{id:24, title:'أمن التطبيقات واختبار الاختراق', category:'IT', description:'تعلم طرق اختبار الأمان وتحليل الثغرات في التطبيقات.', time:'50 ساعة', star:'★★★★★', price:'490 دولار', img:it12, level:'متقدم', number:'150'},


  // ===== لغات =====
{id:25, title:'اللغة الإنجليزية للمحادثة اليومية', category:'لغات', description:'طور مهارات المحادثة بطلاقة وثقة من خلال مواقف حياتية.', time:'35 ساعة', star:'★★★★★', price:'250 دولار', img:en1, level:'مبتدئ', number:'600'},
{id:26, title:'اللغة الفرنسية من الصفر', category:'لغات', description:'ابدأ تعلم الفرنسية بطريقة ممتعة وتفاعلية.', time:'40 ساعة', star:'★★★★', price:'300 دولار', img:en2, level:'مبتدئ', number:'380'},
{id:27, title:'اللغة الإسبانية للمبتدئين', category:'لغات', description:'تعلم أهم الكلمات والتعبيرات الإسبانية في مواقف الحياة اليومية.', time:'35 ساعة', star:'★★★★★', price:'290 دولار', img:en3, level:'مبتدئ', number:'400'},
{id:28, title:'اللغة التركية للمسافرين', category:'لغات', description:'تعلم العبارات التركية الأساسية للتعامل أثناء السفر.', time:'20 ساعة', star:'★★★★', price:'230 دولار', img:en4, level:'مبتدئ', number:'210'},
{id:29, title:'إتقان اللغة الإنجليزية للأعمال', category:'لغات', description:'تعلم مصطلحات وتعبيرات العمل بالإنجليزية.', time:'45 ساعة', star:'★★★★★', price:'330 دولار', img:en5, level:'متوسط', number:'310'},
{id:30, title:'اللغة اليابانية للمبتدئين', category:'لغات', description:'تعرف على أساسيات اللغة والثقافة اليابانية.', time:'50 ساعة', star:'★★★★', price:'350 دولار', img:en66, level:'مبتدئ', number:'220'},
{id:31, title:'اللغة الكورية الأساسية', category:'لغات', description:'ابدأ رحلتك لتعلم اللغة الكورية من الحروف إلى المحادثة.', time:'40 ساعة', star:'★★★★★', price:'320 دولار', img:en7, level:'مبتدئ', number:'300'},
{id:32, title:'محادثة اللغة الألمانية', category:'لغات', description:'تعلم كيفية التواصل باللغة الألمانية بثقة وسهولة.', time:'30 ساعة', star:'★★★★', price:'290 دولار', img:en8, level:'مبتدئ', number:'280'},
{id:33, title:'اللغة الصينية للمبتدئين', category:'لغات', description:'تعلم أساسيات النطق والكتابة باللغة الصينية.', time:'45 ساعة', star:'★★★★★', price:'340 دولار', img:en9, level:'مبتدئ', number:'250'},
{id:34, title:'اللغة الإيطالية خطوة بخطوة', category:'لغات', description:'تعلم اللغة الإيطالية عبر تمارين ومحادثات تفاعلية.', time:'40 ساعة', star:'★★★★', price:'310 دولار', img:en10, level:'مبتدئ', number:'260'},
{id:35, title:'تحسين النطق في اللغة الإنجليزية', category:'لغات', description:'تعلم نطق الكلمات الإنجليزية بشكل دقيق وصحيح.', time:'25 ساعة', star:'★★★★', price:'240 دولار', img:en11, level:'متوسط', number:'350'},
{id:36, title:'اللغة الإنجليزية الأكاديمية', category:'لغات', description:'تعلم كتابة الأبحاث والعروض الأكاديمية باللغة الإنجليزية.', time:'50 ساعة', star:'★★★★★', price:'370 دولار', img:en1, level:'متوسط', number:'200'},


  // ===== تسويق =====
{id:37, title:'مقدمة في التسويق الرقمي', category:'تسويق', description:'تعلم أساسيات التسويق عبر الإنترنت ومنصات التواصل.', time:'40 ساعة', star:'★★★★★', price:'400 دولار', img:cm1, level:'مبتدئ', number:'500'},
{id:38, title:'تحليل السوق واستراتيجيات العلامة التجارية', category:'تسويق', description:'تعلم تحليل المنافسين وصياغة هوية تسويقية مميزة.', time:'45 ساعة', star:'★★★★', price:'420 دولار', img:cm2, level:'متوسط', number:'280'},
{id:39, title:'التسويق عبر وسائل التواصل الاجتماعي', category:'تسويق', description:'تعلم كيفية بناء جمهور وإدارة الحملات الرقمية.', time:'35 ساعة', star:'★★★★★', price:'390 دولار', img:cm3, level:'متوسط', number:'360'},
{id:40, title:'كتابة المحتوى التسويقي', category:'تسويق', description:'تعلم كيفية كتابة محتوى يجذب العملاء ويزيد المبيعات.', time:'30 ساعة', star:'★★★★★', price:'370 دولار', img:cm4, level:'متوسط', number:'260'},
{id:41, title:'التسويق بالبريد الإلكتروني', category:'تسويق', description:'تعلم إنشاء حملات بريدية فعالة تحقق نتائج ملموسة.', time:'25 ساعة', star:'★★★★', price:'280 دولار', img:cm5, level:'مبتدئ', number:'240'},
{id:42, title:'Google Ads وإعلانات البحث', category:'تسويق', description:'افهم كيفية إنشاء حملات ممولة ناجحة عبر Google.', time:'40 ساعة', star:'★★★★★', price:'410 دولار', img:cm6, level:'متوسط', number:'340'},
{id:43, title:'تحسين محركات البحث SEO', category:'تسويق', description:'تعلم تقنيات رفع ترتيب المواقع في نتائج البحث.', time:'35 ساعة', star:'★★★★', price:'400 دولار', img:cm7, level:'متوسط', number:'310'},
{id:44, title:'إدارة العلامة التجارية', category:'تسويق', description:'تعرف على كيفية بناء هوية قوية ومستدامة لعلامتك.', time:'50 ساعة', star:'★★★★★', price:'420 دولار', img:cm8, level:'متوسط', number:'270'},
{id:45, title:'إعلانات الفيديو على YouTube', category:'تسويق', description:'تعلم إنشاء محتوى مرئي مؤثر يجذب الجمهور.', time:'25 ساعة', star:'★★★★', price:'300 دولار', img:cm9, level:'مبتدئ', number:'230'},
{id:46, title:'التسويق بالمؤثرين', category:'تسويق', description:'تعرف على كيفية التعاون مع المؤثرين لزيادة الانتشار.', time:'30 ساعة', star:'★★★★', price:'350 دولار', img:cm10, level:'متوسط', number:'190'},
{id:47, title:'إدارة الحملات التسويقية', category:'تسويق', description:'تعلم تنظيم وتنفيذ حملات تسويقية ناجحة خطوة بخطوة.', time:'45 ساعة', star:'★★★★★', price:'440 دولار', img:cm11, level:'متوسط', number:'210'},
{id:48, title:'تحليل بيانات التسويق', category:'تسويق', description:'تعلم قياس أداء الحملات باستخدام أدوات التحليل.', time:'40 ساعة', star:'★★★★★', price:'390 دولار', img:cm12, level:'متوسط', number:'200'},

];


 const filterCourse= selectedCategory==="الكل"?Course:Course.filter((c)=>c.category===selectedCategory)
 
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
    <li><Link onClick={() => setSelectedCategory("الكل")}>الكل</Link></li>
    <li><Link onClick={() => setSelectedCategory("IT")}>IT</Link></li>
    <li><Link onClick={() => setSelectedCategory("لغات")}>لغات</Link></li>
    <li><Link onClick={() => setSelectedCategory("تسويق")}>تسويق</Link></li>
</ul>

<div className='container-course'>

{filterCourse.map((item)=>

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