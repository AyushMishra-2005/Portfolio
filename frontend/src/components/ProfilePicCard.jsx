import { CometCard } from "./ui/comet-card.jsx";
import profilePicImage from '../assets/profilePic1.jpg'

export function ProfilePicCard() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex w-90 h-90 cursor-pointer items-center justify-center rounded-full border-0 bg-[#1F2121] md:my-20"
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
                className="h-full w-full rounded-full object-cover"
                alt="Invite background"
                src={profilePicImage}
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
