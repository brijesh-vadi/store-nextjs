import { cn } from '@/lib/helpers';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <>
      <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>{children}</div>
    </>
  );
};

export default Container;
