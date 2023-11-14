import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="bg-p-color py-16 border-t-2 mt-5 flex justify-center">
      <div className="max-w-sm grid grid-cols-1 gap-2">
        <h1 className="font-black text-t-color uppercase text-sm">Subscribe to our News Letter</h1>
        <div className="flex space-x-2">
          <Input type="email" placeholder="Email" className="rounded-xl border-gray-400 bg-white" />
          <Button type="submit" className="rounded-xl bg-t-color text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
