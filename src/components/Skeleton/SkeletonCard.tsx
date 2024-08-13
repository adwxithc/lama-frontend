interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard = ({ className }: SkeletonCardProps) => {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50 bg-[length:200%_100%] animate-wave border border-black/10 shadow-xl h-32 p-2 overflow-hidden flex cursor-pointer ${className}`}
    />
  );
};

export default SkeletonCard;
