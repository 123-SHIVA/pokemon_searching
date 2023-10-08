import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"

function Icon({name}){

    if(name == "circle"){
        return <FaRegCircle/>
    }else if(name == "cross"){
            return <FaTimes/>
    }else{
        return <FaPen/>
    }
    return(
        <>
        
        </>
    )
}

export default Icon;