"use client";

import { motion } from "framer-motion";

type Props={
  active?:boolean;
}

export default function DesignSvg({active=false}:Props){

return(

<motion.svg
viewBox="0 0 180 180"
className="h-28 w-28"
animate={{
rotate:active?[0,2,-2,0]:0
}}
transition={{
duration:4,
repeat:Infinity
}}
>

<rect
x="38"
y="42"
width="104"
height="92"
rx="18"
fill="none"
stroke="rgba(15,23,42,.16)"
strokeWidth="2"
/>

<motion.circle
cx="72"
cy="76"
r="12"
fill="#2563eb"
animate={{
r:active?[12,15,12]:[12,13,12]
}}
transition={{
duration:2,
repeat:Infinity
}}
/>

<motion.rect
x="98"
y="64"
width="24"
height="24"
rx="6"
fill="none"
stroke="#2563eb"
strokeWidth="2"
animate={{
rotate:active?[0,8,-8,0]:0
}}
style={{
originX:"110px",
originY:"76px"
}}
transition={{
duration:3,
repeat:Infinity
}}
/>

<motion.path
d="M70 112L92 98L118 118"
stroke="#2563eb"
strokeWidth="2"
fill="none"
strokeLinecap="round"
animate={{
pathLength:[0,1,0]
}}
transition={{
duration:3,
repeat:Infinity
}}
/>

</motion.svg>

)

}