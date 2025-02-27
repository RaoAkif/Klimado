import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function LeftSection() {
  return (
    <div className="flex flex-col gap-4 pr-32">
      <p className="text-xl font-semibold">Ready to get started?</p>
      <p className="p-content">
        IMPAKTER PRO is an AI-powered ESG software. It helps businesses with ESG
        scorecard, progress report, action plan, sustainability badge, and more.
        Throughout the EU. Across industries.
      </p>
      <p className="p-content">
        It is a product of IMPAKTER Limited, that has been empowering
        sustainability for businesses since 2014.
      </p>
      <div className="flex gap-4">
        <p className="p-content">Follow us on:</p>
        <div className="flex gap-3 text-primary">
          <Link
            href="https://x.com/impakterdotcom"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter">
            <FaXTwitter style={{height: "24px", width: "24px"}} />
          </Link>
          <Link
            href="https://www.facebook.com/impakterdotcom/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook">
            <FaFacebook style={{height: "24px", width: "24px"}} />
          </Link>
          <Link
            href="https://www.instagram.com/impakter/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram">
            <FaInstagram style={{height: "24px", width: "24px"}} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/impakter/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin style={{height: "24px", width: "24px"}} />
          </Link>
        </div>
      </div>
    </div>
  );
}
