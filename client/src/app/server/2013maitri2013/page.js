'use client'

import axios from 'axios';
import React, { useEffect,useState } from 'react';



export default function App() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    async function abhishek(){
      try{
    const res = await axios.get('/api/server')
    console.log(res);
    setData(res.data.myusers);
    console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    abhishek();

      
  },[])
  let allrows=[];
  function tablerow(){
    data.map(user => {
      allrows.push(
        <tr className="border-b dark:border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    {user.name}
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {user.email}
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    {user.coursesEnrolled.map(id=>id + ", ")}
                  </td>
                  {/* <td className="whitespace-nowrap px-6 py-4">null</td> */}
                </tr>
      )

    })
    return allrows;
  }
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500">
                    name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500">
                    email
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500">
                    courses
                  </th>
                  {/* <th scope="col" className="px-6 py-4">Handle</th> */}
                </tr>
              </thead>
              <tbody>
                
              
                {tablerow()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}