
import React,{useState,useEffect} from 'react'
import Logo from "../../Images/logo_tri.png"
import { useToImage } from '@hcorta/react-to-image'
import pass from "../../Images/passes.jpeg"
import cookie from "js-cookie"
import { account } from '../../services/appwriteService.js'
const Index = () => {
  const { ref, isLoading, getPng ,dataURL} = useToImage()
  const [downloadURL, setDownloadURL] = useState(null);
  const [download,setDownload]=useState("Download");
 const [name,setName]=useState();
 const [email,setEmail]=useState();
 console.log(name);

    useEffect(() => {
      const promise = account.get();

    promise.then(function (response) {
        setName(response.name) // Success
        setEmail(response.email) // Success

    }, function (error) {
        console.log(error); // Failure
    });
    }, []);
  function display()
  {
    return <div className='ml-[42%] pt-[40px] md:pt-28 font-source'>
                <h1 className='text-sm md:text-2xl '>Name: {name}</h1>
                <h1 className='text-sm md:text-2xl '>Email: {email}</h1>
            </div>
  }

  async function handleDownload() {
    setDownload("THANKS")
    const url = await getPng();
    setDownloadURL(url);
    console.log(downloadURL)
  }
  

  return (
    <div className='w-full' ref={ref}>
        <div className='bg-cover bg-[url("https://i.ibb.co/rZzZWbx/passes.png")] h-[115px] md:h-[260px]  w-[370px] md:w-[800px] mx-auto shadow-lg  my-24 shadow-white'>
        
                {display()}

      </div>
      {/* {isLoading && 'loading...'} */}
      <button className='mb-24 ml-[36%] md:ml-[46%] font-medium font-dm tracking-wi
      // der bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7]
    duration-500' onClick={handleDownload}>{download}</button>
    </div>
  )
}

export default Index


