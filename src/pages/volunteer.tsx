import React from 'react'
import Mainlayout from '@/layout/Mainlayout';
import CommonSlider from '@/components/common/CommonSlider'
import Empoweringhope from '@/components/solutions/Empoweringhope';
import Ourmission from '@/components/solutions/Ourmission';
import Ourprograms from '@/components/solutions/Ourprograms';
import Ourpartners from '@/components/solutions/Ourpartners';
import GetInvolved from '@/components/common/GetInvolved';
import Givetime from '@/components/solutions/Givetime';
import Contactdetails from '@/components/Volunteer/Contactdetails';
const data = {
    cont1: "Become a charity volunteer",
    cont2: "Register today and join us in our mission and vision to save and change lives for the better.",
    cont3:"Home > Volunteer"
  };

  const data1 = {
    cont1: "Join thousands of others",
    cont2: " across the country",
    cont3:"Giving your time means helping to give those most vulnerable a chance at the future they deserve.",
    cont4:"Get started now"
  };

export default function solutions() {
  return (
    <Mainlayout>
    <CommonSlider data={data} />
    <Contactdetails/>
    <GetInvolved data1={data1}/>
</Mainlayout>
  )
}
