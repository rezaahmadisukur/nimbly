import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Context } from "@/contexts/Context";
import { useContext } from "react";

export default function FilterProduct() {
  const { search, setSearch, selectOpt, setSelectOpt } = useContext(Context);

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>FILTER</CardTitle>
          <CardDescription>Filter products </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Search">Search</Label>
                <Input
                  id="search"
                  name="search"
                  placeholder="Search of your products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Sort By</Label>
                <Select onValueChange={setSelectOpt} value={selectOpt}>
                  <SelectTrigger id="opt" className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="asc">A-Z</SelectItem>
                    <SelectItem value="desc">Z-A</SelectItem>
                    <SelectItem value="low">Low Price</SelectItem>
                    <SelectItem value="high">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
