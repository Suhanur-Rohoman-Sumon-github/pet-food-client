import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="relative border rounded-lg overflow-hidden p-4 space-y-4">
      {/* Top buttons skeleton */}

      {/* Image Skeleton */}
      <Skeleton className="w-full h-64 rounded-lg" />

      {/* Text Content Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4 rounded" /> {/* Product name */}
        <Skeleton className="h-4 w-1/2 rounded" /> {/* Product category */}
        <Skeleton className="h-5 w-1/4 rounded" /> {/* Product price */}
      </div>

      {/* Button Skeleton */}
      <Skeleton className="h-10 w-full rounded" />
    </div>
  );
};

export default ProductCardSkeleton;
