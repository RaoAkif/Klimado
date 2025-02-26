export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={
        "rounded-2xl py-1 px-3 font-semibold bg-primary/10 text-primary text-[0.625rem] text-center uppercase"
      }>
      {children}
    </span>
  );
}
