'use client'
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement>{
  link: string
}

export const SubcategoryButton = ({link, ...props}: IProps) => {
  const router = useRouter() 

  return (
    <button onClick={() => router.push(link)} {...props} className="absolute transition-all active:scale-95 w-[7.19vw] h-[7.19vw] rounded-full border border-white z-10 bottom-[2.67vw] right-[50%] translate-x-[50%] flex items-center justify-center backdrop-blur-[3px]">
      <svg className="w-[1.87vw] h-[1.87vw]" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.856108 4.07044H5.6239L4.16462 5.82318C4.13083 5.86383 4.10538 5.91074 4.08973 5.96123C4.07407 6.01171 4.0685 6.06479 4.07336 6.11742C4.08316 6.22372 4.13479 6.32178 4.21688 6.39001C4.29898 6.45825 4.40482 6.49108 4.51112 6.48128C4.61742 6.47148 4.71548 6.41985 4.78371 6.33775L6.79374 3.92571C6.80727 3.90653 6.81936 3.88637 6.82992 3.86541C6.82992 3.84531 6.85002 3.83325 6.85806 3.81315C6.89557 3.72032 6.89557 3.61654 6.85806 3.52371C6.85806 3.50361 6.83796 3.49155 6.82992 3.47145C6.81936 3.45049 6.80727 3.43033 6.79374 3.41115L4.78371 0.999106C4.74992 0.958456 4.70846 0.924859 4.66169 0.900233C4.61492 0.875607 4.56375 0.860435 4.51112 0.855582C4.45848 0.850729 4.40541 0.856291 4.35492 0.87195C4.30444 0.887609 4.25753 0.913059 4.21688 0.946846C4.17623 0.980633 4.14263 1.0221 4.11801 1.06887C4.09338 1.11564 4.07821 1.1668 4.07336 1.21944C4.0685 1.27207 4.07407 1.32515 4.08973 1.37563C4.10538 1.42612 4.13083 1.47302 4.16462 1.51367L5.6239 3.26642H0.856108C0.749489 3.26642 0.647237 3.30878 0.571847 3.38417C0.496456 3.45956 0.454102 3.56181 0.454102 3.66843C0.454102 3.77505 0.496456 3.8773 0.571847 3.95269C0.647237 4.02808 0.749489 4.07044 0.856108 4.07044Z" fill="white"/>
      </svg>
    </button>
  );
};