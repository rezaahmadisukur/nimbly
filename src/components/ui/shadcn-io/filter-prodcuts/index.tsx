import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
  const {
    search,
    setSearch,
    selectOpt,
    setSelectOpt,
    products,
    checkbox,
    setCheckbox
  } = useContext(Context);

  const categories = Array.from(
    new Set(
      products
        .map((p: { category: { name: string } }) => p.category.name)
        .sort((a, b) => a.localeCompare(b))
    )
  );

  const handleChecked = (value: string, checked: boolean) => {
    if (checked) {
      setCheckbox((prev) => [...prev, value]);
    } else {
      setCheckbox(checkbox.filter((c) => c !== value));
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>FILTER</CardTitle>
          <CardDescription>Filter products </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="grid w-full items-center gap-6">
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
              <div className="flex flex-col gap-6">
                <Label>By Category</Label>
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <Checkbox
                      id={`check-${index}`}
                      value={category}
                      onCheckedChange={(checked) =>
                        handleChecked(category, checked as boolean)
                      }
                      name="check"
                    />
                    <Label htmlFor={`check-${index}`}>{category}</Label>
                  </div>
                ))}
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
