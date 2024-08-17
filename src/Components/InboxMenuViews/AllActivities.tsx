import {useState} from 'react'
import constants from '../../config/constants';

const AllActivities = () => {
const [isFollowing, setIsFollowed ]= useState(false)
  return (
    <div>
      <div className="text-gray-500 text-sm mb-2" style={{width: "100%"}}><p>This Month</p></div>
          <div className='display: flex flex-row items-center  hover:bg-gray-100 cursor-pointer p-2'>
              <img src="src/assets/ProfilePicJuewell.jpg" width={45} height={25} className="rounded-full"/>
              <div className='display: flex flex-col justify-evenly ml-3'>
                  <p><strong>Juewell</strong></p>
                  <p className='text-gray-400 text-sm'>Follows You</p>
              </div>
              <div className='ml-28'>
                  {isFollowing ? <button onClick={() => setIsFollowed(false)}  className='border border-b-gray-500 px-3 py-'>Following</button> :
                      <button onClick={() => setIsFollowed(true)} style={{
                          backgroundColor: constants.ACCENT_RED_COLOUR,
                          color: "whitesmoke", borderRadius: "0.3em", paddingInline: "0.5em", paddingBlock: "0.2em",
                          
                      }}>Follow back</button>
                }
              </div>
          </div>
    </div>
  );
}

export default AllActivities