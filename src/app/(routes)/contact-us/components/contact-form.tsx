export default function ContactForm() {
  return (
    <article className="w-full rounded-3xl  p-8 flex flex-col gap-2 blue-shadow">
      <h2 className="h2-content">Book a Demo!</h2>
      <p className="p-content">
        Fill out the form below and our sales team will get back to you as soon
        as possible
      </p>
      <form className="flex flex-col gap-5 mt-4">
        <label className="font-medium flex flex-col gap-2">
          <span>
            Full Name <span className="text-red-700">*</span>
          </span>
          <input
            type="text"
            required
            className="border rounded-lg py-2 px-3 placeholder:font-normal"
            placeholder="John Doe"
          />
        </label>
        <label className="font-medium flex flex-col gap-2">
          <span>
            Email <span className="text-red-700">*</span>
          </span>
          <input
            type="email"
            required
            className="border rounded-lg py-2 px-3 placeholder:font-normal"
            placeholder="john.doe@impakter.com"
          />
        </label>
        <label className="font-medium flex flex-col gap-2">
          Subject
          <input
            type="text"
            className="border rounded-lg py-2 px-3 placeholder:font-normal"
            placeholder="Demo call, PRO Tool usage, Enterprise solution...."
          />
        </label>
        <textarea
          className="border rounded-lg py-2 px-3 placeholder:font-normal"
          placeholder="Please describe your request"
        />

        <button type="submit" className="btn btn-big btn-primary mx-auto">
          Submit
        </button>
      </form>
    </article>
  );
}
