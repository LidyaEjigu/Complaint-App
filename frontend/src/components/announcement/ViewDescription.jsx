
import React, { useEffect, useState } from 'react'
import ViewDe from './viewde'
import Posts from './posts/Posts'
import { useDispatch } from 'react-redux';
import { fetchAnnuncements } from '../../actions/complaint';

const ViewDescription = () => {
  // const [curID,setCurID] = useState(0);
  // const dispatch =useDispatch()
  // useEffect(() =>{
  //   dispatch(fetchAnnuncements())
    
  // },[curID,dispatch])
  return (
    <>
     
          <ViewDe/>
          {/* <Posts setCurID={setCurID}/> */}
     
    </>
  )
}

export default ViewDescription