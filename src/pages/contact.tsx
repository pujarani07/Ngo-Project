import ContactUs from '@/components/Contact/ContactUs'
import Mainlayout from '@/layout/Mainlayout'
import CommonSlider from '@/components/common/CommonSlider'
import React from 'react'
import Ourlocation from '@/components/Contact/Ourlocation';

const data = {
    cont1: "Let's get in touch now",
    cont2: "Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.",
    cont3:"Home > cantact"
  };

  
  const data1 = {
    cont1: "Together we are stronger.",
    cont2:"Help us campaign for change",
    cont3:"Whether you’re an individual, a company or a charity, there are plenty of ways to get involved."
  };
export default function contact() {
  return (
    <Mainlayout>
         <CommonSlider data={data} />
        <ContactUs/>
        <Ourlocation/>
    </Mainlayout>
  )
}
