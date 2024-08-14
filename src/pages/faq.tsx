import CommonSlider from '@/components/common/CommonSlider';

import Mission from '@/components/FAQ/Mission';

import Mainlayout from '@/layout/Mainlayout';
import React from 'react'


const data = {
    cont1: "Got questions? This way.",
    cont2: "Explore answers to common queries about our services for quick solutions and insights.",
    cont3:"Home > FAQ"
  };
export default function faq() {
  return (
    <Mainlayout>
      <CommonSlider data={data}/>
      <Mission/>
    </Mainlayout>
  )
}