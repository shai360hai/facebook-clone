
import Header from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Pencil } from "lucide-react";
import CreatePostCard from "@/components/post/CreatePostCard";
import PostCard from "@/components/post/PostCard";

// Sample user profile data
const user = {
  id: 1,
  name: "John Doe",
  avatar: "https://github.com/shadcn.png",
  coverPhoto: "https://source.unsplash.com/random/1200x400?landscape",
  bio: "Software Developer | Photography Enthusiast | Traveler",
  location: "San Francisco, California",
  workplace: "Tech Innovations Inc.",
  education: "Stanford University",
  joinDate: "January 2015",
  friends: 843,
  posts: [
    {
      id: 101,
      user: {
        name: "John Doe",
        avatar: "https://github.com/shadcn.png",
      },
      content: "Working on an exciting new project! Can't wait to share it with everyone. #coding #newproject",
      image: "https://source.unsplash.com/random/1200x800?coding",
      timestamp: new Date(Date.now() - 2 * 24 * 3600 * 1000), // 2 days ago
      likes: 34,
      comments: [
        {
          id: 1001,
          user: {
            name: "Jane Smith",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
          content: "Looking forward to seeing it!",
          timestamp: new Date(Date.now() - 1.8 * 24 * 3600 * 1000), // 1.8 days ago
        },
      ],
    },
    {
      id: 102,
      user: {
        name: "John Doe",
        avatar: "https://github.com/shadcn.png",
      },
      content: "Beautiful hike last weekend. Nature is the best therapy! 🌲🏞️",
      image: "https://source.unsplash.com/random/1200x800?hiking,mountains",
      timestamp: new Date(Date.now() - 5 * 24 * 3600 * 1000), // 5 days ago
      likes: 62,
      comments: [],
    },
  ],
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Header />

      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white shadow rounded-b-lg">
          {/* Cover Photo */}
          <div className="h-[350px] relative rounded-t-lg overflow-hidden">
            <img 
              src={user.coverPhoto}
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <Button variant="secondary" className="absolute bottom-4 right-4 flex items-center gap-1">
              <Camera size={16} /> Edit Cover Photo
            </Button>
          </div>

          {/* Profile Info */}
          <div className="px-8 pb-4 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <div className="flex items-end">
                <div className="mt-[-85px] relative">
                  <Avatar className="w-[168px] h-[168px] border-4 border-white">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="secondary" className="absolute bottom-4 right-4 rounded-full h-9 w-9">
                    <Camera size={16} />
                  </Button>
                </div>
                <div className="ml-4 mb-4">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-sm text-gray-500">{user.friends} Friends</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <Button className="bg-facebook-blue hover:bg-blue-600">+ Add to Story</Button>
                <Button variant="secondary" className="flex items-center gap-1">
                  <Pencil size={16} /> Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t px-4">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="flex justify-start bg-transparent border-b-0 p-0">
                <TabsTrigger 
                  value="posts"
                  className="border-b-2 border-transparent data-[state=active]:border-facebook-blue text-gray-600 data-[state=active]:text-facebook-blue py-4 px-4 rounded-none hover:bg-gray-100"
                >
                  Posts
                </TabsTrigger>
                <TabsTrigger 
                  value="about"
                  className="border-b-2 border-transparent data-[state=active]:border-facebook-blue text-gray-600 data-[state=active]:text-facebook-blue py-4 px-4 rounded-none hover:bg-gray-100"
                >
                  About
                </TabsTrigger>
                <TabsTrigger 
                  value="friends"
                  className="border-b-2 border-transparent data-[state=active]:border-facebook-blue text-gray-600 data-[state=active]:text-facebook-blue py-4 px-4 rounded-none hover:bg-gray-100"
                >
                  Friends
                </TabsTrigger>
                <TabsTrigger 
                  value="photos"
                  className="border-b-2 border-transparent data-[state=active]:border-facebook-blue text-gray-600 data-[state=active]:text-facebook-blue py-4 px-4 rounded-none hover:bg-gray-100"
                >
                  Photos
                </TabsTrigger>
                <TabsTrigger 
                  value="videos"
                  className="border-b-2 border-transparent data-[state=active]:border-facebook-blue text-gray-600 data-[state=active]:text-facebook-blue py-4 px-4 rounded-none hover:bg-gray-100"
                >
                  Videos
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {/* Left Column - Bio */}
          <div>
            <div className="facebook-card">
              <h2 className="text-xl font-bold mb-3">Intro</h2>
              <p className="mb-3 text-center">{user.bio}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                  </svg>
                  <span>Add workplace</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 15.977v-.891c0-1.364 1.167-2.72 3.5-4.067a8.477 8.477 0 0 1 4.23-2.019v6.884h-7.73zM0 14.977v-6.776a8.477 8.477 0 0 1 4.23 2.011c2.333 1.347 3.5 2.703 3.5 4.067v.773h-7.73zM8 0c1.9 0 3.5.667 4.8 2a6.64 6.64 0 0 1 2 4.8c0 1.9-.667 3.5-2 4.8a6.64 6.64 0 0 1-4.8 2c-1.9 0-3.5-.667-4.8-2a6.64 6.64 0 0 1-2-4.8c0-1.9.667-3.5 2-4.8A6.64 6.64 0 0 1 8 0z"/>
                  </svg>
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-3">Edit Details</Button>
              <Button variant="outline" className="w-full mt-2">Add Hobbies</Button>
              <Button variant="outline" className="w-full mt-2">Add Featured</Button>
            </div>

            <div className="facebook-card mt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Photos</h3>
                <Button variant="link" className="text-facebook-blue">See All Photos</Button>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <img src="https://source.unsplash.com/random/300x300?nature" className="aspect-square object-cover rounded-md" />
                <img src="https://source.unsplash.com/random/300x300?city" className="aspect-square object-cover rounded-md" />
                <img src="https://source.unsplash.com/random/300x300?people" className="aspect-square object-cover rounded-md" />
                <img src="https://source.unsplash.com/random/300x300?technology" className="aspect-square object-cover rounded-md" />
                <img src="https://source.unsplash.com/random/300x300?food" className="aspect-square object-cover rounded-md" />
                <img src="https://source.unsplash.com/random/300x300?travel" className="aspect-square object-cover rounded-md" />
              </div>
            </div>

            <div className="facebook-card mt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Friends</h3>
                <Button variant="link" className="text-facebook-blue">See All Friends</Button>
              </div>
              <div className="text-sm text-gray-500 mb-2">{user.friends} friends</div>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=1" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Jane Smith</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=2" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Mike Johnson</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=3" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Sarah Williams</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=4" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Alex Brown</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=5" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Emily Davis</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/150?img=6" className="aspect-square object-cover rounded-md" />
                  <p className="text-sm mt-1 truncate">Chris Wilson</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Posts */}
          <div className="md:col-span-2">
            <CreatePostCard />
            <div className="space-y-4 mt-4">
              {user.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
