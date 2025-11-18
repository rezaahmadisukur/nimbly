import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { Context } from "@/contexts/Context";
import { useContext } from "react";

export function SpinnerEmpty() {
  const { setShowDetail } = useContext(Context);
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowDetail((prev) => !prev)}
        >
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  );
}
