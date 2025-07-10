import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make More &nbsp;</span>
        <span className={title({ color: "violet" })}>Productivity&nbsp;</span>
        <br />
        {/* <span className={title()}>
          websites regardless of your design experience.
        </span> */}
        <div className={subtitle({ class: "mt-4" })}>
          With our Beautiful, fast and modern Todo App.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/tasks"
        >
          Get Started
        </Link>
      </div>


    </section>
  );
}
