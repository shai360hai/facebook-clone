
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const stories = [
  {
    id: 1,
    user: { name: "Your Story", avatar: "https://github.com/shadcn.png" },
    background: "https://source.unsplash.com/random/300x600?night",
    isOwn: true,
  },
  {
    id: 2,
    user: { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1" },
    background: "https://source.unsplash.com/random/300x600?city",
  },
  {
    id: 3,
    user: { name: "Mike Johnson", avatar: "https://i.pravatar.cc/150?img=2" },
    background: "https://source.unsplash.com/random/300x600?nature",
  },
  {
    id: 4,
    user: { name: "Sarah Williams", avatar: "https://i.pravatar.cc/150?img=3" },
    background: "https://source.unsplash.com/random/300x600?beach",
  },
  {
    id: 5,
    user: { name: "Alex Brown", avatar: "https://i.pravatar.cc/150?img=4" },
    background: "https://source.unsplash.com/random/300x600?mountain",
  },
  {
    id: 6,
    user: { name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5" },
    background: "https://source.unsplash.com/random/300x600?forest",
  },
];

const StoriesSection = () => {
  return (
    <div className="mb-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 p-1">
          {stories.map((story) => (
            <Card 
              key={story.id} 
              className="w-[110px] h-[200px] overflow-hidden rounded-lg shrink-0 relative cursor-pointer hover:opacity-95 transition-opacity"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${story.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {story.isOwn ? (
                <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-facebook-blue flex items-center justify-center mb-1">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">Create Story</span>
                </div>
              ) : null}
              
              <div className={`${story.isOwn ? "absolute top-2 left-2" : "absolute top-2 left-2 ring-4 ring-facebook-blue rounded-full"}`}>
                <Avatar className={story.isOwn ? "w-0 h-0" : "w-9 h-9 border-4 border-facebook-blue"}>
                  <AvatarImage src={story.user.avatar} />
                  <AvatarFallback>{story.user.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              
              {!story.isOwn && (
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-xs font-medium line-clamp-2">
                    {story.user.name}
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default StoriesSection;
