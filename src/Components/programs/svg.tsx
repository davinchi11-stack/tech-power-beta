
import * as React from "react"
import { JSX } from "react/jsx-runtime"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
 <div className="main-svg wrapper medium">
      <svg className="md:w-20 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <circle
      cx={40}
      cy={100}
      r={15}
      fill="#201893"
      stroke="#201893"
      strokeWidth={15}
    >
      <animate
        attributeName="opacity"
        begin={-0.4}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>
    <circle
      cx={100}
      cy={100}
      r={15}
      fill="#201893"
      stroke="#201893"
      strokeWidth={15}
    >
      <animate
        attributeName="opacity"
        begin={-0.2}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>
    <circle
      cx={160}
      cy={100}
      r={15}
      fill="#201893"
      stroke="#201893"
      strokeWidth={15}
    >
      <animate
        attributeName="opacity"
        begin={0}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>
  </svg>
 </div>
)
export default SvgComponent
