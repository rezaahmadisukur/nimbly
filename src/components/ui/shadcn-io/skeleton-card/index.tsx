import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-60">
        <div className="p-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2 relative">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs overflow-hidden rounded">
              <Skeleton />
            </div>
            <Skeleton className="w-2 h-1" />
          </div>
          <Skeleton className="w-250px h-4" />
          <Skeleton className="text-xs mb-2 line-clamp-2" />
          <div className="flex items-center justify-end">
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex flex-col w-full overflow-hidden gap-1 mt-1">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
