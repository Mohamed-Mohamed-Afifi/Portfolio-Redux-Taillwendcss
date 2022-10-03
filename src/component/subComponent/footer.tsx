import React from 'react'

export const Footer = () => {
  // type Person={
  //   name:string,
  //   age?:number
  // }
  // type girls=Person &{
  //   id:string
  // }
  // let Fperson:girls={
  //   name:"mohamed",
  //   age:20,
  //   id:"4544"
  // }
  // console.log(Fperson)
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
// const printName=(name:string)=>{
//   console.log(name)
// }
// printName("mohamed")
// interface Person{
//   name:string,
//   age:number
// }
// interface Members extends Person{
//   id:string
// }
// let Fmamber:Members={
//   name:"mohmaed",
//   age:22,
//   id:"1500"
// }
// console.log(Fmamber)
  return (
    <div className='footer bg-slate-500 d-flex p-3'>
        <div className='policy'>By Mo3fifiy 2022 </div>
        <div className='follow me ml-auto'>Follow</div>
    </div>
  )
}
