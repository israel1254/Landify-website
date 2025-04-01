import React from 'react'
import "./FeatureMultiple.css"
import ListSet from '../listSet/ListSet'
import icon1 from "../../assets/01.png"
import icon2 from "../../assets/02.png"
import icon3 from "../../assets/03.png"
import icon4 from "../../assets/04.png"
import icon5 from "../../assets/05.png"
import icon6 from "../../assets/08.png"
const FeatureMultiple = () => {

   const listdatas=[
    {
      id:1,
      img:icon1,
      title:"Robust Workflow",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow loremno."
    },
    {
      id:2,
      img:icon2,
      title:"Flexibility",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow loremgtn ."
    },
    {
      id:3,
      img:icon3,
      title:"User friendly",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow lorem i ."
    },
    {
      id:4,
      img:icon4,
      title:"Multiple layouts",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow lorem y   ."
    },
    {
      id:5,
      img:icon5,
      title:"Better components",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow devops ."
    },
    {
      id:6,
      img:icon6,
      title:"Well organised",
      desc:"Lower impsum dolor sit amet consectetur dasing int and evoliution human grow loremi  ."
    }
   ]
  return (
    <div style={{paddingTop:"30px"}}>
    <div className='FeatureMultiple'>
        
          <div className="titlebox">
              <h2>Tailer-made features</h2>
              <p style={{color:"rgb(60, 60, 61)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus, enim id venenatis scelerisque, nisl ligula and the etiopian popel is grat. </p>
          </div>
    </div>
  
  
    <div className="listbox" style={{paddingBottom:"70px"}}>
        <div className="ferstbox" style={{display:"grid",gridTemplateColumns:"310px 310px 310px" ,gap:"20px"}}>

        {listdatas.map((listdata)=>{
  
          return(
          <ListSet 
          key={listdata.id}
          list={listdata}
           />
          );
        })}
    
       </div>
    </div>
    </div>
  )
}

export default FeatureMultiple