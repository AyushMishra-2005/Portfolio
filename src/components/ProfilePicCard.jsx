import { CometCard } from "./ui/comet-card.jsx";

export function ProfilePicCard() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex w-80 h-80 cursor-pointer items-center justify-center rounded-full border-0 bg-[#1F2121] md:my-20"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500">
            <div className="w-full h-full rounded-full bg-black">
              <img
                loading="lazy"
                className="h-full w-full rounded-full object-cover contrast-75"
                alt="Invite background"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      </button>
    </CometCard>
  );
}
