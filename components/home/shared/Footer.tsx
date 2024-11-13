import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="  max-w-7xl  mx-auto">
      <div className=" grid grid-cols-1  mx-4 px-3 border-t  border-project-card-border  md:grid-cols-2     items-center gap-y-4  gap-x-12   py-6   flex-wrap overflow-hidden ">
        <div className="text-text-secondary order-2 md:order-1">
          <p className="text-center md:text-left">
            Made by&nbsp;
            <span className="text-text-primary font-medium">
              Md. Rejoyan Islam.&nbsp;
            </span>
            All rights reserved.
          </p>
        </div>
        <div className=" order-1 md:order-2">
          <Socials direction="row" position="relative" />
        </div>
      </div>
    </footer>
  );
}
