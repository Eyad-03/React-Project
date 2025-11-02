import { Link } from 'react-router-dom'
import '../css/trainer.css'
import eyad from '../image/my-pic.jpg'


export default function Trainer()
{

var trainerInfo = [
  {
    id: 1,
    name: 'محمد طه',
    field: 'مدرب تصميم UI/UX',
    img: 'https://edtech4beginners.com/wp-content/uploads/2021/05/1.png',
    rate: '★ ★ ★ ★ ★',
    count: '+450 طالب',
    exp: '8 سنوات خبرة',
    description:
      'خبير في تصميم واجهات المستخدم الحديثة مع أكثر من 8 سنوات من الخبرة في تطوير تجارب رقمية مميزة.'
  },
  {
    id: 2,
    name: 'حسام العتيبي',
    field: 'مدرب تطوير الويب',
    img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    rate: '★ ★ ★ ★ ☆',
    count: '+520 طالب',
    exp: '6 سنوات خبرة',
    description:
      'مختص في تطوير مواقع الويب باستخدام React وNode.js مع خبرة في بناء مشاريع متكاملة وسريعة الأداء.'
  },
  {
    id: 3,
    name: 'سارة النعيمي',
    field: 'مدربة التسويق الرقمي',
    img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+680 طالب',
    exp: '7 سنوات خبرة',
    description:
      'متخصصة في التسويق عبر السوشيال ميديا وتحليل الحملات الإعلانية لتحقيق أفضل النتائج للمشاريع الرقمية.'
  },
  {
    id: 4,
    name: 'نورة العبدالله',
    field: 'مدربة تحليل البيانات',
    img: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg',
    rate: '★ ★ ★ ★ ☆',
    count: '+400 طالب',
    exp: '5 سنوات خبرة',
    description:
      'خبيرة في تحليل البيانات باستخدام Power BI وPython وتدريب المتعلمين على اتخاذ قرارات مبنية على البيانات.'
  },
  {
    id: 5,
    name: 'خالد الحربي',
    field: 'مدرب الأمن السيبراني',
    img: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+550 طالب',
    exp: '9 سنوات خبرة',
    description:
      'متخصص في أمن المعلومات واختبار الاختراق مع خبرة في تدريب الطلبة على أدوات الأمن المتقدمة.'
  },
  {
    id: 6,
    name: 'ليلى المري',
    field: 'مدربة الذكاء الاصطناعي',
    img: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+390 طالب',
    exp: '6 سنوات خبرة',
    description:
      'مدربة في مجال الذكاء الاصطناعي وتعلم الآلة مع خبرة في تطوير حلول تعتمد على تحليل البيانات الضخمة.'
  },
  {
    id: 7,
    name: 'أحمد الجهني',
    field: 'مدرب لغات برمجة',
    img: 'https://images.pexels.com/photos/5553055/pexels-photo-5553055.jpeg',
    rate: '★ ★ ★ ★ ☆',
    count: '+620 طالب',
    exp: '8 سنوات خبرة',
    description:
      'متخصص في تعليم Python وC++ وJavaScript بأسلوب سهل ومبسط يناسب المبتدئين والمحترفين.'
  },
  {
    id: 8,
    name: 'ريم السبيعي',
    field: 'مدربة اللغة الإنجليزية',
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+700 طالب',
    exp: '10 سنوات خبرة',
    description:
      'مدربة لغة إنجليزية معتمدة تركز على تطوير مهارات المحادثة والاستماع بطريقة ممتعة وتفاعلية.'
  },
  {
    id: 9,
    name: 'فهد الدوسري',
    field: 'مدرب برمجة تطبيقات الجوال',
    img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    rate: '★ ★ ★ ★ ☆',
    count: '+480 طالب',
    exp: '7 سنوات خبرة',
    description:
      'متخصص في تطوير تطبيقات Android وiOS باستخدام Flutter مع خبرة في تصميم واجهات جذابة وسريعة.'
  },
  {
    id: 10,
    name: 'منى القحطاني',
    field: 'مدربة الموارد البشرية',
    img: 'https://images.pexels.com/photos/1181599/pexels-photo-1181599.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+370 طالب',
    exp: '8 سنوات خبرة',
    description:
      'مدربة متخصصة في تطوير المهارات الإدارية والقيادية وإدارة فرق العمل بكفاءة عالية.'
  },
  {
    id: 11,
    name: 'سالم المطيري',
    field: 'مدرب شبكات وتقنية معلومات',
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    rate: '★ ★ ★ ★ ☆',
    count: '+510 طالب',
    exp: '9 سنوات خبرة',
    description:
      'خبير في مجال الشبكات وإدارة الأنظمة مع خبرة في تدريب الطلبة على CCNA وLinux ومفاهيم الأمن.'
  },
  {
    id: 12,
    name: 'رهف العبدالكريم',
    field: 'مدربة التصوير والمونتاج',
    img: 'https://images.pexels.com/photos/7129701/pexels-photo-7129701.jpeg',
    rate: '★ ★ ★ ★ ★',
    count: '+420 طالب',
    exp: '6 سنوات خبرة',
    description:
      'مدربة إبداعية في التصوير الفوتوغرافي وصناعة الفيديوهات التعليمية والإعلانية بطريقة احترافية.'
  }
];


return(

<div style={{backgroundColor:'rgb(235, 242, 253)'}}>


<div className='bg' >

<div className='header-trainer'>
    <h1>تعرف على نخبة مدربينا</h1>
    <p>"ستكشف نخبة من المدربين المعتمدين في مختلف المجالات . لكل مدرب ملف تعريفي يشمل خبراته، تقييمه، عدد الطلاب الذين دربهم، وتخصصه الدقيق. ابدأ الآن واختر المدرب المناسب لتطوير مهاراتك خطوة بخطوة."</p>
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