
interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard = ({ className }: SkeletonCardProps) => {
  return (
    <div
      className={`rounded-2xl bg-gray-200 animate-pulse border border-black/10 shadow-xl h-32 p-2 overflow-hidden flex cursor-pointer ${className}`}
    />
  );
};

export default SkeletonCard;
