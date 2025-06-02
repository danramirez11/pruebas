import { ChevronUpIcon, ShareIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";

// Data for songs
const songData = [
  {
    id: "01",
    title: "exes",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "3:25",
    cover: "https://c.animaapp.com/mbe5abedTZBB62/img/rectangle-37312-3.png",
  },
  {
    id: "01",
    title: "exes",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "3:25",
    cover: "https://c.animaapp.com/mbe5abedTZBB62/img/rectangle-37312-3.png",
  },
  {
    id: "01",
    title: "exes",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "3:25",
    cover: "https://c.animaapp.com/mbe5abedTZBB62/img/rectangle-37312-3.png",
  },
  {
    id: "01",
    title: "exes",
    artist: "Tate McRae",
    album: "Think Later",
    duration: "3:25",
    cover: "https://c.animaapp.com/mbe5abedTZBB62/img/rectangle-37312-3.png",
  },
];

// Data for members
const memberData = Array(9).fill({
  name: "David Damiano",
  avatar: "https://c.animaapp.com/mbe5abedTZBB62/img/ellipse-63-8.png",
});

// Data for genres
const genreData = [
  { name: "Hip Hop", color: "bg-morado-krina" },
  { name: "Modern Pop", color: "bg-naranja" },
  { name: "Alternative Rock", color: "bg-verde-agache-y-me-la-muerde" },
  { name: "R&B", color: "bg-rosita-fresita" },
  { name: "KPOP", color: "bg-[#a846f0]" },
  { name: "Rock", color: "bg-naranja" },
  { name: "Opera", color: "bg-morado-krina" },
  { name: "Classical Jazz", color: "bg-verde-agache-y-me-la-muerde" },
  { name: "Blues", color: "bg-[#a846f0]" },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full rounded-[20px] overflow-hidden shadow-[0px_6.44px_8.59px_#00000029] backdrop-blur-[15.03px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.03px)_brightness(100%)] bg-black/20 p-6">
      {/* Header Section */}
      <div className="flex items-start gap-5 mb-10">
        <div className="relative w-[233px] h-[227px]">
          <img
            className="absolute w-[202px] h-[203px] top-[11px] left-[15px]"
            alt="Subtract"
            src="https://c.animaapp.com/mbe5abedTZBB62/img/subtract.png"
          />
          <div className="absolute w-[233px] h-[227px] top-0 left-0">
            <img
              className="absolute w-[232px] h-[227px] top-0 left-px"
              alt="Album Cover"
              src="https://c.animaapp.com/mbe5abedTZBB62/img/free-futuristic-cd-cover-design-syndrome-1.png"
            />
            <img
              className="absolute w-[7px] h-[37px] top-[94px] left-0"
              alt="Rectangle"
              src="https://c.animaapp.com/mbe5abedTZBB62/img/rectangle-1.svg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="text-[87.7px] font-medium text-white [font-family:'Lufga-Medium',Helvetica] leading-tight">
              Chill Group
            </h1>
            <div className="flex items-center gap-1">
              <ChevronUpIcon className="w-[15px] h-[15px] text-white" />
              <p className="text-white text-[15px] leading-7">
                <span className="font-semibold">76.5% </span>
                <span>music match</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-9">
            <Button className="bg-[#ff07cd] hover:bg-[#ff07cd]/90 text-white font-bold rounded-[7.8px] h-auto py-2">
              Join
            </Button>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-4">
                <span className="text-white text-[13.6px] [font-family:'Lufga-Regular',Helvetica]">
                  Recommend Playlist?
                </span>
                <div className="flex items-center gap-[11px]">
                  <img
                    className="w-5 h-5 cursor-pointer transition-all duration-[0.2s] ease-[ease]"
                    alt="Thumbs up"
                    src="https://c.animaapp.com/mbe5abedTZBB62/img/component-1-7.svg"
                  />
                  <img
                    className="w-5 h-5 cursor-pointer transition-all duration-[0.2s] ease-[ease]"
                    alt="Thumbs down"
                    src="https://c.animaapp.com/mbe5abedTZBB62/img/component-2.svg"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="bg-[#3b3b3b80] rounded-full p-2 h-auto w-auto transition-all duration-[0.2s] ease-[ease]"
              >
                <ShareIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-white text-xl [font-family:'Lufga-Regular',Helvetica]">
            Members
          </h2>
          <img
            className="w-5 h-5 transition-all duration-[0.2s] ease-[ease]"
            alt="Add member"
            src="https://c.animaapp.com/mbe5abedTZBB62/img/component-1-2.svg"
          />
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-8 pb-4">
            {memberData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 w-[142px]"
              >
                <div className="relative">
                  <Avatar className="w-[109px] h-[109px]">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-[0.2s] ease-[ease]"
                    />
                  </Avatar>
                  <div className="absolute top-0 right-0">
                    <img
                      className="w-[25px] h-[25px]"
                      alt="Member status"
                      src="https://c.animaapp.com/mbe5abedTZBB62/img/component-1.svg"
                    />
                  </div>
                </div>
                <span className="text-[#d9d9d9] text-[15.4px] text-center [font-family:'Lufga-Regular',Helvetica]">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Content Section */}
      <div className="flex gap-6">
        {/* Songs Card */}
        <Card className="flex-1 bg-[#1f1f1f] rounded-[20px] border-0">
          <CardContent className="p-3.5">
            <h3 className="text-white text-xl mb-6 [font-family:'Lufga-Regular',Helvetica]">
              All Songs
            </h3>
            <div className="flex flex-col gap-6">
              {songData.map((song, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className="text-[#a6a6a6] text-sm w-8 [font-family:'Lufga-Regular',Helvetica]">
                      {song.id}
                    </span>
                    <div className="flex items-center gap-4">
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="w-14 h-[58px] object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-medium [font-family:'Lufga-Medium',Helvetica]">
                          {song.title}
                        </span>
                        <span className="text-[#a6a6a6] text-sm [font-family:'Lufga-Regular',Helvetica]">
                          {song.artist}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#a6a6a6] text-sm [font-family:'Lufga-Regular',Helvetica]">
                    {song.album}
                  </span>
                  <div className="flex items-center gap-12 w-28">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-[#3b3b3b80] rounded-full p-2 h-auto w-auto transition-all duration-[0.2s] ease-[ease]"
                    >
                      <img
                        className="w-5 h-5"
                        alt="Like"
                        src="https://c.animaapp.com/mbe5abedTZBB62/img/component-1-3.svg"
                      />
                    </Button>
                    <span className="text-[#a6a6a6] text-sm [font-family:'Lufga-Regular',Helvetica]">
                      {song.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Genres Card */}
        <Card className="w-[310px] bg-[#1f1f1f] rounded-[20px] border-0">
          <CardContent className="p-3.5">
            <h3 className="text-white text-xl mb-6 [font-family:'Lufga-Regular',Helvetica]">
              Genres
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {genreData.map((genre, index) => (
                <Badge
                  key={index}
                  className={`${genre.color} h-10 px-4 py-2 rounded-[5px] text-white text-base font-medium [font-family:'Lufga-Medium',Helvetica]`}
                >
                  {genre.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
