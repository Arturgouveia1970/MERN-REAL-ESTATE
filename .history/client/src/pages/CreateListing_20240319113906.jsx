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
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='rent'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.type === 'rent'}
              />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='parking'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.parking}
              />
              <span>Parking spot</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.furnished}
              />
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='offer'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type='number'
                min='1'
                max='10'
                className='border p-3 rounded-lg border-gray-300'
                id='bedrooms'
                required
                // onChange={handleChange}
                // value={formData.price}
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type='number'
                min='1'
                max='10'
                className='border p-3 rounded-lg border-gray-300'
                id='bathrooms'
                required
                // onChange={handleChange}
                // value={formData.price}
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type='number'
                className='border p-3 rounded-lg border-gray-300'
                id='regularPrice'
                required
                min='50'
                max='10000000'
                // onChange={handleChange}
                // value={formData.price}
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>              
            </div>
            <div className="flex items-center gap-2">
              <input
                type='number'
                className='border p-3 rounded-lg border-gray-300'
                id='discountPrice'
                min='0'
                max='10000000'
                required
                // onChange={handleChange}
                // value={formData.price}
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">Images:
            <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6)</span>
          </p> 
          <div className="flex gap-4">
            <input
              // onChange={(e) => setFiles(e.target.files)}
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button
              className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
            >
              Upload
            </button>
          </div>
        </div>
        <button
        >Creat Listing</button>
      </form>
    </main>
  )
}

export default CreateListing
