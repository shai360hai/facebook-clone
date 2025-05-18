
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import StoriesSection from "@/components/post/StoriesSection";
import CreatePostCard from "@/components/post/CreatePostCard";
import PostCard from "@/components/post/PostCard";

// Sample demo posts
const initialPosts = [
  {
    id: 1,
    user: {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    content: "Just finished reading an amazing book! 📚 Would highly recommend to everyone who enjoys mysteries.",
    image: "https://source.unsplash.com/random/1200x800?book",
    timestamp: new Date(Date.now() - 35 * 60 * 1000), // 35 minutes ago
    likes: 12,
    comments: [
      {
        id: 1,
        user: {
          name: "Mike Johnson",
          avatar: "https://i.pravatar.cc/150?img=2",
        },
        content: "What's the title? I'm looking for something new to read!",
        timestamp: new Date(Date.now() - 23 * 60 * 1000), // 23 minutes ago
      },
      {
        id: 2,
        user: {
          name: "Sarah Williams",
          avatar: "https://i.pravatar.cc/150?img=3",
        },
        content: "I love mystery books too! We should exchange recommendations sometime.",
        timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Alex Brown",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    content: "Beautiful sunset at the beach today! ☀️ Nature really has the best views.",
    image: "https://source.unsplash.com/random/1200x800?sunset,beach",
    timestamp: new Date(Date.now() - 3 * 3600 * 1000), // 3 hours ago
    likes: 45,
    comments: [
      {
        id: 3,
        user: {
          name: "Emily Davis",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        content: "Wow! Which beach is this? Looks amazing!",
        timestamp: new Date(Date.now() - 2.5 * 3600 * 1000), // 2.5 hours ago
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Tech Enthusiasts",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    content: "Exciting news! Our community just reached 10,000 members. Thank you all for being part of this journey. 🚀\n\nWhat topics would you like us to cover next?",
    timestamp: new Date(Date.now() - 5 * 3600 * 1000), // 5 hours ago
    likes: 89,
    comments: [],
  }
];

const Index = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handlePostCreated = (newPost: any) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <Header />

      <div className="container mx-auto flex py-4">
        <Sidebar />

        <main className="flex-1 mx-auto max-w-[680px] px-4">
          <StoriesSection />
          <CreatePostCard onPostCreated={handlePostCreated} />
          
          <div className="mt-4 space-y-4">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
