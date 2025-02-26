import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function MainSection() {
  return (
    <section className="py-20">
      <div className="container flex flex-col-reverse lg:flex-row gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
