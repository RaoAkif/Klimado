import { CircleCheckBig } from "lucide-react";

export default function StripeBadge() {
  return (
    <span
      className={
        "rounded-2xl py-1 px-3 font-semibold bg-green-100 text-green-600 text-[0.625rem] text-center flex gap-2 items-center justify-center"
      }>
      <CircleCheckBig className="size-4" />
      Stripe Verified
    </span>
  );
}
