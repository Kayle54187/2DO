import AvatarImage from "@/components/avatarImage";
import { AvatarComponentProps } from "@/interfaces";


const AvatarComponent: React.FC<AvatarComponentProps> = ({ completion_rate, status }) => {

    const returnClasses = ():string => {
        let classes: string
        if(status == 'Daily'){
            classes = "rounded-full p-2 inline-block bg-[#2196F3]"
        }else if(status == 'Work'){
            classes = "rounded-full p-2 inline-block bg-[#0B9F00]"
        }else if(status == 'Projects'){
            classes = "rounded-full p-2 inline-block bg-[#F38721]"
        }else if(status == 'Ideas'){
            classes = "rounded-full p-2 inline-block bg-[#F32163]"
        }else{
            classes = ''
        }

        return classes
    }

    return(
        <div className={returnClasses()}>
                <AvatarImage completion_rate={completion_rate} status={status}/>
        </div>
    )
}

export default AvatarComponent