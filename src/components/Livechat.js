import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown, faArrowRight, faClose, faMessage, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { comments, removecommets } from '../utils/commentslice';
import {useDispatch , useSelector} from 'react-redux'

export const Livechat = ({showchat}) => {
 const dispatch = useDispatch()

 const commentsdata = useSelector(store => store.livechat) 
 console.log(commentsdata)

 const [msg , setMsg] = useState('')
 

 function randomId () {
  return Math.floor(Math.random( ) * 1000)
 }

 
  const username = ['subash' , 'mukesh' , 'pandiyammal' , 'ravi' , 'raja' , 'palani' , 'gurumurthy' , 'max' , 'geetha' , 'rejesh' , 'prem' , 'lokesh' , 'rajini' , 'vijay' , 'kamal' , 'sharma']
 function randomusername (){
 const len = Math.floor(Math.random() * username.length)
 return username[len]
 }



 const usercomments = ['​​Sasuke Uchiha Hey 👋' , `@ANDRO TOP kif umm 3refet lakan 🤓
  ` , '@sarthak what do you watch in Netflix' , 'Chennai, Bangalore, noida, jaipur me se kahin', 'Fahim do you know Flying Pearl ?', `​​Can i find a pious one who didn't watch 18+ scenes 🤡`, `
  ​​@Alaaa you have so many other friends you can joke with them and laugh 😎don't joke with me` , `​​no one repliedeyes-purple-crying` , `​​Tana sab bolte he meri music taste acchi he🧍`, `​​aahhh mona behen darao mat achanak se😂`, '​​aahhh mona behen darao mat achanak se😂',]
 
 function randomessage(){
  const len = Math.floor(Math.random() * usercomments.length)
  return usercomments[len]
 }
 

 const userprofilearr = ['https://yt4.ggpht.com/2orYygIqaRETVIBFkmZrpTn6C1nCb9A62T46L_nM3zoooc8XTbMXJGGUzA9QSLy1aX8WjKGeRw=s32-c-k-c0x00ffffff-no-rj','https://yt4.ggpht.com/0UGufSmf_hYS1yn3KO7BEQsnWoNaONuQ6WErKlE2Onu4m4JVy72tF0cWk5QdL2Pc9Imgyd57Qg=s32-c-k-c0x00ffffff-no-rj','https://yt4.ggpht.com/ymjUyF63prBb_b4BL7qeQnvV9Et8XXjcDiIESK1DexLO09l9Cga5q2NwD3op5gEtQGepiQmZZw=s32-c-k-c0x00ffffff-no-rj','https://yt4.ggpht.com/71oKjJlw-DSNZrUbOhxdWTofHh2HFKGPA7hRnh__EUa8VEDW8Mo6fCZGPSA6CEM8JRFCqXA6dQ=s32-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/dbQ2rEnIw1j9QstDuVuXDblmljSHzsL_SHu55zmVBHecPHOBNhAKqbUNBlF-LRyWLAv1MqjVaw=s32-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/O6B12-LKZzVgLdFsg-yUO4dcfOWocAtvHFQq6f5Q9qrB5BsEPLIutdS4oRS3Np9TWIBIIA60=s32-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/sfUb1LYLLUAnxo-Y3F8Lx0Qi4IrFz2Zb2aO9HSFVWSHYctVvBq9JQwIOW_ejMKEz21n9ZbCSmA=s64-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/4nZjKq6K08O08eFvRNVkeE6F30vJ4iQ8dqYiW3-J98rApJPvjykgIyA5BTY_jFtTwbpj7r_gTOw=s64-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/aXrOmybtc2WGibVDx22gWTR4UVPsqAFA-O0IrddLgx2zEF-E1zhCAii7TJune1TNGBFshemDFnQ=s64-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/t0dt9Z-7vxqyw78CRTRunpsYmR8K8dZV6wru_NCELCeKu3wI7YCdI7UJwMv7eQHvErt7NylkLg=s64-c-k-c0x00ffffff-no-rj', 'https://yt4.ggpht.com/KhqVVXlmDGHx0mxPpJDLbItQp5DAOrS3h-feLgTFn0p5yj-dtRKlKimalzV96Ub-V0E-x9J8=s64-c-k-c0x00ffffff-no-rj']
 
 function randomuserprofile(){
  const len = Math.floor(Math.random() * userprofilearr.length)
  return userprofilearr[len]
 }
  useEffect(() =>{

       const i = setInterval(() => {
        const chatdata = {
          id : randomId(),
          username : randomusername(),
          comment : randomessage(),
          userprofile : randomuserprofile()
        }
            dispatch(comments(chatdata))
    
            
       },2000);
       dispatch(removecommets())


       return () => clearInterval(i)
  },[randomId])

const  handlebtnclick = () =>{
  const localuserdata = { 
        id : randomId(),
        username : randomusername(),
        comment : msg,
        userprofile : randomuserprofile()

  }
  dispatch(comments(localuserdata))

  setMsg('')

}
  return (
  <>
    <div className='h-[360px] m-2 lg:ml-10 border mt-4 w-[380px] rounded-md transition-transform ease-in-out  overflow-y-scroll  flex-col-reverse flex  '  >
  
        <div className='flex shadow-md rounded-md justify-between absolute bg-white w-[378px] bottom-[410px]'>
             <p className='font-sans p-2 m-2 text-md '>Top chat <FontAwesomeIcon icon={faAngleDown}  className='text-gray-500   text-xl '/></p>
             <FontAwesomeIcon icon={faClose}  className='mt-4 text-gray-500 font-extralight cursor-pointer text-2xl mr-3' onClick={()=>showchat(false)}/>

        
        </div>
        <div >
              {
                

                commentsdata.map((i , index) =>(

                  <div key={index} className='flex   '>
                        <img src={i.userprofile} className='rounded-full  m-1 p-1 h-10 w-10 '/>
                         <p className='text-gray-500 m-1 p-1'>{i.username}</p>
                         <p className='p-1 m-1  font-normal '>{i.comment}</p>
                         
                         
                    </div>
                    
                ))
              }
        </div>
        <div className='absolute'>
       <input className='p-2 outline-none w-[340px] bg-gray-200 m-2 rounded-md' placeholder='send message ' onChange={e => setMsg(e.target.value)} value={msg}/>
        <FontAwesomeIcon icon={faArrowRight}  className='ml-[-30px] cursor-pointer ' onClick={handlebtnclick}/>
        </div>
    </div>
  
  </>
  )
}