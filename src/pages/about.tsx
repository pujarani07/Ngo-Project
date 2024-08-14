import Getinvolve from '@/components/common/GetInvolved'
import Organization from '@/components/about/Organization'
import Ourmission from '@/components/about/Ourmission'
import Teammembers from '@/components/about/Teammember'
import Mainlayout from '@/layout/Mainlayout'
import CommonSlider from '@/components/common/CommonSlider'
import React from 'react'
import Commonbreadcrumb from '@/components/common/CommonSlider'


const data = {
    cont1: "We are a nonprofit organization",
    cont2: "Join us in a collective journey of compassion and impact as we work hand in hand, transforming lives and nurturing hope.",
    cont3:"Home > About"
  };

  
  const data1 = {
    cont1: "Join thousands of others",
    cont2:"across the country",
    cont3:"Giving your time means helping to give those most vulnerable a chance at the future they deserve.",
    cont4:"Make a donation"
};
export default function about() {
  return (
    <Mainlayout>
    <CommonSlider data={data}/>
    <Ourmission/>
    <Teammembers/>
    <Organization/>
    
    <Getinvolve data1={data1}/>
</Mainlayout>
    
  )
}
