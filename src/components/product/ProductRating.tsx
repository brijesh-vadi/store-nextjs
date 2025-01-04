import { FaStar } from 'react-icons/fa';

const ProductRating = ({ productId }: { productId: string }) => {
  const rating = 4.2;
  const count = 24;

  const classes = `flex item-center gap-1 text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <>
      <span className={classes}>
        <FaStar className='w-3 h-3' />
        {rating} {countValue}
      </span>
    </>
  );
};

export default ProductRating;
