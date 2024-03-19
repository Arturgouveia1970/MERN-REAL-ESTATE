function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
       <h1 className='text-3xl font-semibold text-center my-7'>
        Create Listing
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
            // onChange={handleChange}
            // value={formData.name}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg'
            id='description'
            required
            // onChange={handleChange}
            // value={formData.description}
          />
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            required
            // onChange={handleChange}
            // value={formData.address}
          />
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='sale'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.type === 'sale'}
              />
              <span>Sell</span>
            </div>
            
          </div>
        </div>
      </form>
    </main>
  )
}

export default CreateListing
