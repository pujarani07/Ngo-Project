import React from 'react'
import CommonSlider from '@/components/common/CommonSlider'
import Mainlayout from '@/layout/Mainlayout';
import Card2 from '@/components/Causes/Card2';


const data = {
    cont1: "Donate for accessible services",
    cont2: "Empowering hope: a dynamic portfolio of impactful initiatives uplifting and empowering lives through charity",
    cont3:"Home > causes"
  };

export default function causes() {
  return (
    <Mainlayout>
        <CommonSlider data={data}/>
        <Card2/>
    </Mainlayout>
      )
}