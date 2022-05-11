
export default function Carousel({ t: { rooms }, selectedRoom }) {
  const RenderRooms = rooms.rooms.map((room) => {
    if (room.name !== selectedRoom) return;
    return room.othersImages.map((el) => (
      <img
        src={el.url}
        className='object-cover w-full rounded-md h-2/3 lg:place-self-center'
        alt={el.alt}
      />
    ));
  });

  return (
    <div className='grid justify-center w-full grid-cols-2 gap-2 px-2 mx-auto -mt-10 lg:grid-cols-4 md:gap-10 lg:px-14 max-w-screen-2xl lg:-mt-10'>
      {RenderRooms}
    </div>
  );
}
