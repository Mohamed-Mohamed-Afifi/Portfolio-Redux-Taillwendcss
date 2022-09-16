import React from 'react'

export const Footer = () => {
  // type Person={
  //   name:string,
  //   age?:number
  // }
  // let Fperson:Person={
  //   name:"mohamed",
  //   age:20
  // }
  // let arr:Person[];
  // arr=[
  //   {
  //   name:"mo"     
  //   },
  //   {
  //     name:"go"     
  //     }
  // ]
  // console.log(arr)
const printName=(name:string)=>{
  console.log(name)
}
printName("mohamed")
  return (
    <div className='footer bg-slate-500 d-flex p-3'>
        <div className='policy'>By Mo3fifiy 2022 </div>
        <div className='follow me ml-auto'>Follow</div>
    </div>
  )
}
