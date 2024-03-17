import { useSelector } from 'react-redux';
function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form>
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover mx-auto' />
      </form>
    </div>
  )
}

export default Profile
