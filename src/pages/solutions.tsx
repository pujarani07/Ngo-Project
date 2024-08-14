import React from 'react'
import Mainlayout from '@/layout/Mainlayout';
import CommonSlider from '@/components/common/CommonSlider'
import Empoweringhope from '@/components/solutions/Empoweringhope';
import Ourmission from '@/components/solutions/Ourmission';
import Ourprograms from '@/components/solutions/Ourprograms';
import Ourpartners from '@/components/solutions/Ourpartners';
import GetInvolved from '@/components/common/GetInvolved';
import Givetime from '@/components/solutions/Givetime';
const data = {
    cont1: "This is what we do",
    cont2: "Our mission is to empower individuals and families through comprehensive services, and positive community impact.",
    cont3:"Home > solution"
  };

  const data1 = {
    cont1: "Together we are stronger.",
    cont2:"Help us campaign for change",
    cont3:"Whether you’re an individual, a company or a charity, there are plenty of ways to get involved.",
    cont4:"Make a donation"
  };

export default function solutions() {
  return (
    <Mainlayout>
    <CommonSlider data={data} />
    <Empoweringhope/>
     <Ourmission/>
     <Ourprograms/>
     <Ourpartners/>
     <Givetime/>
     <GetInvolved data1={data1}/>
</Mainlayout>
  )
}
