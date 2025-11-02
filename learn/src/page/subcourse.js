import { Link,useLocation } from 'react-router-dom'
import React, { useState } from "react";
import '../css/subcourse.css'
import bg5 from '../image/mini5.jpg'
import { IoMdTime } from "react-icons/io";
import { FaLevelUpAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";


const data = [
  {
    title: "محتوى الأسبوع الأول",
    items: [
      {text:'الدرس الاول'},
      {text:'الدرس الثاني'},
      {text:'الدرس الثالث'},
      {text:'الدرس الرابع'},
    ]
  },
  {
    title: "محتوى الأسبوع الثاني",
    items: [
      {text:'الدرس الخامس'},
      {text:'الدرس السادس'},
      {text:'الدرس السابع'},
      {text:'الدرس الثامن'},
    ]
  },
  {
    title: "محتوى الأسبوع الثالث",
    items: [
      {text:'الدرس التاسع'},
      {text:'الدرس العاشر'},
      {text:'الدرس الحادي عشر'},
      {text:'الدرس الثاني عشر'},
    ]
  }
];

export default function Sub()
{


  const location =useLocation();
  const [subCourseMain,setsubCourse] = React.useState(location.state)


  const [openIndex, setOpenIndex] = useState(0); // open week 3 by default (like screenshot)
  const [activeItem, setActiveItem] = useState(2); // highlight the 3rd row by default

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

return(

<div style={{backgroundColor:'#e3eefa'}}>


<div className='bg-grid' >

<div className='header-container'>

    <div>
        <h1>{subCourseMain.title}</h1>
    </div>

    <p>{subCourseMain.description}</p>

    <div className='btn-reg'>
        <Link>سجل الان</Link>
    </div>

</div>

<div className='img-grid'>

<img src={subCourseMain.img}/>

</div>



</div>   


<div className='container-details'>

<div className='card-info'>
    <p> <span> <IoMdTime/>  المدة : </span> <span className='info-text'>{subCourseMain.time}</span>  </p>
    <p> <span> <FaLevelUpAlt/>  المستوى : </span> <span className='info-text'>{subCourseMain.level}</span>  </p>
    <p> <span> <AiOutlineTeam/>    عدد من سجل : </span> <span className='info-text'>{subCourseMain.number}</span> </p>
    <p> <span> <MdOutlineRateReview/>  التقييم : </span> <span className='star'>{subCourseMain.star}</span>  </p>
</div>

<div className='card-info2'>
    
    <p>  خصم 30% على هذا المسار لفترة محدودة سجل الآن قبل انتهاء العرض </p>

</div>


<div className='card-info2'>
    
    <p>  هدية مجانية : احصل على استشارات تصميم مدتها 30 دقيقة بعد إكمال المسار  </p>

</div>



</div>

<div className='learn-title'>
<h1>خطة التعلم الاسبوعية</h1>
<hr/>
</div>

    <div className="weeks-container" dir="rtl">
      {data.map((week, i) => (
        <section key={i} className="week">
          <button
            className={`week-header ${openIndex === i ? "is-open" : ""}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className={`chevron ${openIndex === i ? "rotate" : ""}`}>
              {/* Chevron icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M8.12 9.29a1 1 0 0 0 0 1.41l3.17 3.17a1 1 0 0 0 1.42 0l3.17-3.17a1 1 0 1 0-1.42-1.41L12 11.46 9.54 9a1 1 0 0 0-1.42 0z" />
              </svg>
            </span>
            <span className="week-title">{week.title}</span>
          </button>

          <div
            className={`week-content ${openIndex === i ? "show" : ""}`}
            role="region"
            aria-hidden={openIndex !== i}
          >
            {week.items.length === 0 ? (
              <div className="empty-row">لا توجد عناصر لهذا الأسبوع</div>
            ) : (
              week.items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveItem(idx)}
                  className={`row ${activeItem === idx && openIndex === i ? "active" : ""}`}
                >
                  {item.text}
                </button>
              ))
            )}
          </div>
        </section>
      ))}
    </div>


</div>

)

}