import { Separator } from '../ui/separator';

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <>
      <div>
        <h2 className='text-2xl font-medium tracking-wider mb-8 capitalize'>{text}</h2>
        <Separator />
      </div>
    </>
  );
};

export default SectionTitle;
