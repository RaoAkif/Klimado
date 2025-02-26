import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { Building2, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <article className="w-full flex flex-col gap-2">
      <h2 className="h2-content">Contact Us</h2>
      <Line />
      <div className="flex gap-2 mt-5">
        <Building2 className="text-primary size-5" />
        <p className="p-content font-semibold">Headquarters</p>
      </div>
      <DividerSlim />
      <p className="p-content font-semibold">IMPAKTER LIMITED</p>
      <div>
        <p className="p-content">
          32 Lots Road, London SW10 0QJ, United Kingdom
        </p>
        <p className="p-content">Office Hours: 9.30 AM – 5.30 PM</p>
      </div>
      <div className="flex gap-2 mt-5">
        <Mail className="text-primary size-5" />
        <p className="p-content font-semibold">Email</p>
      </div>
      <DividerSlim />
      <a
        href="mailto:impakter.pro@gmail.com"
        className="p-content w-fit underline">
        impakter.pro@gmail.com
      </a>
    </article>
  );
}
