import { useState, ReactNode } from "react";

interface TooltipProps {
   children: ReactNode;
   text: string;
}

const delay : number = 500;
function Tooltip({ children, text }: TooltipProps) {
   const [showTooltip, setShowTooltip] = useState(false);

   const handleMouseEnter = () => {
       setShowTooltip(true)
   };

   const handleMouseLeave = () => {
      setShowTooltip(false);
   };

   return (
       <div
           className="relative inline-flex justify-center"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
       >
          {children}
              <span onMouseEnter={handleMouseLeave} className={`absolute top-full text-base delay-1000 whitespace-nowrap transform-all  ${showTooltip ? "translate-y-2 opacity-100 visible" : "delay-100 -translate-y-2 opacity-0 invisible"}  duration-300 cursor-default bg-transparent text-black text-sm py-1 px-3 rounded-md`}>
                 {text}
              </span>
       </div>
   );
}

export default Tooltip;
