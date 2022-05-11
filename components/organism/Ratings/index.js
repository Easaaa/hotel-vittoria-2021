


export default function Ratings() {
  return (
    <section className='mx-auto bg-gray-100'>
      <div className='container px-5 mx-auto lg:px-16'>
        <div className='grid grid-cols-2 gap-16 text-center'>
          <div className='flex justify-center'>
            <img
              src="/assets/booking.png"
              alt='The Booking platform logo'
              className='block object-contain w-4/5 lg:w-2/5 opacity-30 grayScale'
              width={275}
              height={180}
            />
          </div>
          <div className='flex justify-center'>
            <img
              src="/assets/google-maps.png"
              alt='The google logo'
              className='block object-contain w-4/5 lg:w-2/5 opacity-30 grayScale'
              width={275}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
