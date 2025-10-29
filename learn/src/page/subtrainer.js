import '../css/subtrainer.css'
import tr1 from '../image/tr1.png'
import { Link,useLocation } from 'react-router-dom'
import React, { useState } from "react";

export default function Subtrainer()
{

    const location = useLocation();
    const [subTrainer,setsubTrainer]=React.useState(location.state);

return(


<div style={{backgroundColor:'#ebf2fd'}}>

<div className="container-info">


<div className='img-trainer'>
    <div className='bg-small'></div>
    <img src={subTrainer.img}/>
</div>


<div className='grid-static'>

    <h2> اياد منصور</h2>
    <br/>

    <div className='static-info'>

        <div>
            <p>{subTrainer.count} </p>
            <Link>تواصل معي</Link>
        </div>

        <div>
            <p>{subTrainer.rate}</p>
            <Link>احجز الان</Link>
        </div>

        <div>
            <p>{subTrainer.exp}</p>
            <Link>ابدأ التعليم</Link>
        </div>

    </div>


    <div className='exp'>


        <p>
            {subTrainer.description}        
        </p>


    </div>



</div>


</div>







</div>


)

}