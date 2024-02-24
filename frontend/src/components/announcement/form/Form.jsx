import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAnnuncements, updateAnnuncements } from '../../../actions/complaint';
import '../Announcement.css'
const Form = ({curID,setCurID}) => {
  const user=JSON.parse(localStorage.getItem('studentAuth'))
  const [announcement, setAnnouncement] = useState({title:'',body:'',tag:''});
  const post = useSelector((state) => (curID ? state.announcements.announcements.find((message) => message._id === curID) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setAnnouncement(post);
  }, [post]);

  const Clear = () => {
     setCurID(0);
    setAnnouncement({title:'',body:'',tag:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (curID === 0) {
      dispatch(createAnnuncements(announcement));
      Clear();
    } else {
      dispatch(updateAnnuncements(curID,announcement));
      Clear();
    }
  };{
  }
  if (user.result.role !== 'admin') {
    return <div>
           </div>
  }
  return (
    <>
    <div className=" fo-clear">
    <div className="titleA">Announcement Form</div>
    <form className='formA' onSubmit={handleSubmit}>
      <div className="iputA">
        <input type="text" value={announcement.title} onChange={e=>setAnnouncement({...announcement,title:e.target.value})} placeholder='title'/>
        <input type="text" value={announcement.body} onChange={e=>setAnnouncement({...announcement,body:e.target.value})} placeholder='body' className='body'/>
        <input type="text" value={announcement.tag} onChange={e=>setAnnouncement({...announcement,tag:e.target.value})} placeholder='tag'/>
        {/* <input type="text" value={announcement.status} onChange={e=>setAnnouncement({...announcement,status:e.target.value})} placeholder='status'/> */}
      </div>
      <button  className='submit'>submit</button>
    </form>
    <button onClick={Clear} className='clear'>x</button>
    </div>
    </>
  )
}

export default Form