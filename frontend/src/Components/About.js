import aboutImage from "../assest/images/thumb-612599.jpg"

const About = ()=>{
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="about" className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default  About;