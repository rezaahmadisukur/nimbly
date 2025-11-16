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
export default function FilterProduct() {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>FILTER</CardTitle>
          <CardDescription>Filter products </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Search">Search</Label>
                <Input
                  id="search"
                  name="search"
                  placeholder="Search of your products"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Sort By</Label>
                <Select>
                  <SelectTrigger id="framework" className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
