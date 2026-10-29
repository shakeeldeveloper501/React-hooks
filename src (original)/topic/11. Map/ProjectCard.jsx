// const ProjectCard = ({ item }) => {
//   console.log(item);

//   return (
//     <div className="bg-gray-700 mt-5 m-5 text-gray-300 p-3 rounded-2xl">
//       <p>{item.title}</p>
//       <p>{item.rating}</p>
//       <p>{item.reviews}</p>
//       <p>{item.price}</p>
//       <p>{item.originalPrice}</p>
//       <p>{item.discount}</p>
//     </div>
//   );
// };

const ProjectCard = ({
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  offers,
  details, 
  image
}) => {
  return (
    <div className="bg-gray-700 mt-5 m-5 text-gray-300 p-3 rounded-2xl">
      <p>{title}</p>
      <p>{rating}</p>
      <p>{reviews}</p>
      <p>{price}</p>
      <p>{originalPrice}</p>
      <p>{discount}</p>
      <p>{offers.exchangeOffer}</p>
      <p>{offers.bankOffer}</p>
      <p>{details}</p>
      <img src={image}/>
    </div>
  );
};
export default ProjectCard;
