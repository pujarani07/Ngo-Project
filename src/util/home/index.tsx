import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { navArrType } from "@/types/index";
import { c1, c2, c3, c4, c5, r1, r2, r3,d1,d2,d3,d4,d5,d6, star,image10,image11,image12, t1, t2, t3, edu, health, livehood, water } from '@/assets/Home';
export const navArr: navArrType[] = [
   
    {
        id: 1,
        title: "About",
        path: "/about",
       
    },
    {
        id: 2,
        title: 'Solution',
        path: "/solutions",
       
    },
   
    {
        id: 3,
        title: "Causes",
        path: "/causes",

       
    },
    {
        id: 4,
        title: "FAQ",
        path: "/faq",
          
    },
   
    {
        id: 5,
        title: "Contact",
        path: "/contact",
    }
]
export const footerArr1 = [
    {
      id: 1,
      title: "Page builder",
      path: "/pagebulider",

    },
    {
      id: 2,
      title: "Design tools",
      path: "/designtools",
     
    },
    {
      id: 3,
      title: "Theme options",
      path: "/themeoption",
     
    },
    {
      id: 4,
      title: "Theme builder",
      path: "/themebuilder",
      
    },
    
];

export const footerArr2 = [
    {
      id: 1,
      title: "Customer support",
      path: "/customersupport",

    },
    {
      id: 2,
      title: "Documentation",
      path: "/documentation",
     
    },
    {
      id: 3,
      title: "Community",
      path: "/community",
     
    },
    {
      id: 4,
      title: "Hosting",
      path: "/hosting",
      
    },
    
];

export const cardArr=[
  {
    id: 1,
    title: "Transparent Operations",
    paragraph:"We uphold transparency in all our operations, ensuring ypur donations directly impact lives.",
    icon: LocalAtmOutlinedIcon

  },
  {
    id: 2,
    title: "Community Partnerships",
    paragraph:"Collaborating with local organization and leaders to implement effective solutions.",
    icon: AdminPanelSettingsOutlinedIcon
   
  },
  {
    id: 3,
    title: "Accountability & Reporting",
    paragraph:" Providing detailed reports displaying the tangible outcomes of your contributions.",
    icon: EqualizerOutlinedIcon
   
  },
  {
    id: 4,
    title: "Empowering futures",
    paragraph:" Our programs focus on long-term ,empowering communities to break the cycle of poverty.",
    icon: SupervisorAccountOutlinedIcon
  },
  {
    id: 5,
    title: "Global reach",
    paragraph:"Operating across multiple contries ,we address diverse challenges and leverage local experties.",
    icon: PublicOutlinedIcon
   
  },
  {
    id: 6,
    title: "Volunteer opportunities",
    paragraph:"Engage with us through volunteer programs, becoming directly involved in projects.",
    icon: VolunteerActivismOutlinedIcon
   
  },
]
 export const supportArr=[

  {
    id: 1,
    image: star,
    title: "David's Perspective",
    paragraph:"Their transparency and accountability are unmatched in the charity sector. It's inspiring to see their impact grow steadily.",
    profile:r1 ,
    name:"David Thompson",
    profession:"Financial Analyst",
   
  },
  {
    id: 2,
    image: star,
    title: "Maria's Experience",
    paragraph:"Their dedication to sustainable solutions sets them apart. I'm proud to be part of their journey towards lasting change.",
    profile:r2 ,
    name:"Maria Rodriguez",
    profession:"Teacher",
  },
  {
    id: 3,
    image:star ,
    title: "Sarah's Testimony",
    paragraph:"Volunteering with them has been incredibly rewarding. You can see the difference you're making in people's lives every day.",
    profile: r3,
    name:"Sarah Johnson",
    profession:"Nurse",
  },
 ]
 export const card2 = [
  {
    id:1,
    image: d1,
    title: "Donate for accessible healthcare services",
    content: "Together,we can make a meaningful impact and transform lives.",
    price:"$4,500",
    donation:"2",
    range:" of $10,000"

  },
  {
    id:2,
    image: d2,
    title: "Fund education programs to empower youth",
    content: "Every contribution counts for a better world for everyone to live in.",
    price:"$4,000",
    donation:"2",
    range:" of $10,000"
  },
  {
    id:3,
    image: d3,
    title: "Serve and support the community",
    content: "Join us in our mission to create a brighter future for generations to come.",
    price:"$2,500",
    donation:"1",
    range:" of $10,000"
  },
  {
    id:4,
    image: d4,
    title: "Donate for gender equality and opportunities",
    content: "Together,we can make a meaningful impact and transform lives.",
    price:"$12,500",
    donation:"2",
    range:" of $10,000"
  },
  {
    id:5,
    image: d5,
    title: "Donate for emergency disaster relief efforts",
    content: "Every contribution counts for a better world for everyone to live in.",
    price:"$500",
    donation:"1",
  range:" of $10,000"
  },
  {
    id:6,
    image: d6,
    title: "Donate to fight hunger and food insecurity",
    content: "Join us in our mission to create a brighter future for generations to come.",
    price:"$3,500",
    donation:"2",
    range:" of $10,000"
  }

];
 export const card = [
  {
    id:1,
    image:c1,
  },
  {

   id:2,
   image: c2,

  },
  {

    id:3,
    image: c3,

   },
   {

    id:4,
    image: c4,

   },
   {

    id:5,
    image: c5,

   },
  

]

export const cards = [
  {
    id:1,
    image: image10,
    title: "Donate for accessible healthcare services",
    content: "Together,we can make a meaningful impact and transform lives."
  },
  {
    id:2,
    image: image11,
    title: "Fund education programs to empower youth",
    content: "Every contribution counts for a better world for everyone to live in."
  },
  {
    id:3,
    image: image12,
    title: "Serve and support the community",
    content: "Join us in our mission to create a brighter future for generations to come."
  }

];

export const getArr = [
  {
    id:1,
    icon: FlagOutlinedIcon,
    title: "Campaigning",
    content: "Drive change through social media advocacy.Organize fundraising events and awarness campaigns. "
  },
  {
    id:2,
    icon: SupervisorAccountOutlinedIcon,
    title:"Volunteering",
    content: "Contribute your skills in education ,healthcare,or administration,Join our local initiatives."
  },
  {
    id:3,
    icon:GroupAddIcon,
    title: "Membership",
    content: "Gain exclusive access to events. Collaborate with like-minded indivisuals for lasting change."
  }

];

export const contactArr = [
  {
    id:1,
    icon: HandshakeOutlinedIcon,
    title: "Staff recruitment ",
    content: "There's an extensive range of jobs : discover which profession best matches your skillset."
  },
  {
    id:2,
    icon: MonitorHeartOutlinedIcon,
    title:"share your story",
    content: " Help others by sharing your story if you have experienced our service first-hand."
  },
  {
    id:3,
    icon:PublicOutlinedIcon,
    title: "Press enquiries",
    content: "Contact our media relation team for press releases, interviews,or any media-related queries."
  }

];

export const missionArr=[
  {
    id:1,
    question:" What is the main mission of your NGO?",
    answer:"The main mission of our NGO is to create lasting change through compassion and impact, transforming lives together."
},
{
    id:2,
    question:" Can I volunteer or intern with your organization?",
    answer:"Yes, you can volunteer or intern with our organization. Please visit our website or contact us for more information."
},
{
    id:3,
    question:" How can I donate to support your projects?",
    answer:"You can donate to support our projects by visiting our website. You can also contact us directly for more information on donation options."
},
{
    id:4,
    question:"What specific projects is your NGO currently working on?",
    answer:"Our NGO is currently working on several projects, including providing education, healthcare, and clean water initiatives to underserved communities."
    },
{
  id:5,
    question:"How can I stay updated on your NGO's progress and events?",
    answer:"You can stay updated on our NGO's progress and events by subscribing to our newsletter, following us on social media, and regularly visiting our website for the latest news and updates."

}
]

export const programsArr=[
  {
    id:1,
    question:" What programs and services does your NGO offer?",
    answer:" Our NGO offers programs and services in education, healthcare, clean water, and community empowerment."
},
{
    id:2,
    question:"  How can I benefit from your educational programs?",
    answer:"You can benefit from our educational programs by gaining access to scholarships, tutoring, and resources to support your academic success."
},
{
    id:3,
    question:" Do you provide support services for specific communities?",
    answer:"Yes, we provide support services tailored to specific communities in need, including education, healthcare, and development initiatives."
},
{
    id:4,
    question:"Are there any upcoming events or workshops?",
    answer:"Yes, we regularly host events and workshops; please check our website or social media for the latest updates and schedules."
    },
{
  id:5,
    question:"How can I participate in advocacy efforts led by your NGO?",
    answer:"You can participate in our advocacy efforts by joining our campaigns, signing petitions, attending events, and spreading awareness through your network."

}
]
export const accountArr = [
  {
    id:1,
    question:"Can I view financial reports or audits?",
    answer:"Yes, you can view our financial reports and audits on our website under the About Us or Transparency section.",
  },
  {
    id:2,
    question:" What impact has your NGO made in the community?",
    answer:"Our NGO has made a significant impact by improving access to education, healthcare, and clean water, empowering individuals, and fostering sustainable community development."
  },
  {
    id:3,
    question:"How does your organization ensure transparency and accountability?",
    answer:"We ensure transparency and accountability by regularly publishing financial reports, conducting audits, and providing detailed updates on our projects and outcomes."
  },
  {
    id:4,
    question:"What are the success stories or testimonials from beneficiaries?",
    answer:"We share success stories and testimonials from beneficiaries on our website and in our newsletters, highlighting personal achievements, improved lives, and positive impacts from our programs."
},
{
  id:5,
    question:" How can I provide feedback or report concerns about your NGO's operations?",
    answer:"You can provide feedback or report concerns by contacting us through our website's contact form, email, or by phone. We value your input and strive to address any issues promptly."
 
}
  

]

export const teamArr =[
  {
    id:1,
    image: t1,
    title:"Sara Grant"
  },
  {
    id:2,
    image: t2,
    title:"Reece Bronson"
  },
  {
    id:3,
    image: t3,
    title:"Claire Olson"

  },
]

export const organizArr =[
  {
    id:1,
    title: "Hello world!",
    heading: "Inception",
    content:"Our humble beginnings started with a vision to address pressing social issues through community partnerships.",
    
  },
  {
    id:2,
    title: "Growing support!",
    heading: "Expansion",
    content: "With growing support, we expanded our reach, launching impactful programs and initiatives to empower more lives.",
    
  },
  {
    id:3,
    title: "Sustainability",
    heading: "Innovation",
    content:" Embracing innovation, we leveraged technology and sustainable practices to enhance program effectiveness.",
    
  },
  {
    id:4,
    title:"Lasting change",
    heading: "Global Impact",
    content: "Today, we proudly stand as a global force for positive change, collaborating with partners worldwide to create meaningful impact.",
    
  },
 ]

 export const homeArr=[
  {
    id:1,
    title:"Education Support",
    heading:"Empowering futures through education ",
    paragraph:"We provide access to quality education for underprivileged children, unlocking their potential and brightening their future. ",
    image:edu,
    path:"#education",
    componentid:"education"
  },
  {

    id:2,
    title:"Healthcare Initiatives",
    heading:"Essential healthcare plans and services ",
    paragraph:"We offer essential healthcare services and wellness programs to improve health outcomes and promote well-being. ",
    image:health ,
    path:"#healthcare",
    componentid:"healthcare"
  },
  {

    id:3,
    title:"Livelihood Programs",
    heading:"Creating sustainable livelihoods ",
    paragraph:"We empower individuals and families through skill development and microfinance initiatives, fostering self-sufficiency. ",
    image:livehood,
    path:"#livehood",
    componentid:"livehood"
  },
  {
    id:4,
    title:"Access to Water",
    heading:"Ensuring Clean Water Access",
    paragraph:"Implementing sustainable water solutions to provide safe drinking water, reducing waterborne diseases and improving health.",
    image:water,
    path:"#accesswater",
    componentid:"accesswater"
  }
 ]