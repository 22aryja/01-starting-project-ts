type SectionProps = {
  title: string;
  children: any;
  id?: string;
};

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
