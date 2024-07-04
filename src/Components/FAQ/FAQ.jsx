import React from 'react';

const FAQ = () => {
    return (
        <div className='mt-40'>
            
            <button className=' btn bg-[#FFFFF5] rounded-full px-14'>Faq</button>
            <h1 className=' text-5xl font-font1 font-bold mt-4'>We Help To Get Soultions</h1>
 
            <div className="collapse collapse-arrow bg-secondary_accent mt-10">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What are your office hours?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-secondary_accent mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-secondary_accent mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you accept insurance?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-secondary_accent mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-secondary_accent mt-2">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
        </div>
    );
};

export default FAQ;