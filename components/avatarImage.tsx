import { AvatarComponentProps } from "@/interfaces"



const AvatarImage: React.FC<AvatarComponentProps> = ({ completion_rate, status }) => {

    const returnClasses = ():string => {
        let classes: string
        if(status == 'Daily'){
            classes = "w-10 h-10 rounded-full flex flex-col items-center justify-center p-8 bg-[#1A1A1A] text-xl text-[#2196F3]"
        }else if(status == 'Work'){
            classes = "w-10 h-10 rounded-full flex flex-col items-center justify-center p-8 bg-[#1A1A1A] text-xl text-[#0B9F00]"
        }else if(status == 'Projects'){
            classes = "w-10 h-10 rounded-full flex flex-col items-center justify-center p-8 bg-[#1A1A1A] text-xl text-[#F38721]"
        }else if(status == 'Ideas'){
            classes = "w-10 h-10 rounded-full flex flex-col items-center justify-center p-8 bg-[#1A1A1A] text-xl text-[#F32163]"
        }else{
            classes = ''
        }

        return classes
    }

    return(
        <h3 className={returnClasses()}>
            {completion_rate}%
        </h3>
    )
}

export default AvatarImage