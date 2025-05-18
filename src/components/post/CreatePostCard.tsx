
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Image, Video, Smile } from "lucide-react";

const CreatePostCard = ({ onPostCreated }: { onPostCreated?: (post: any) => void }) => {
  const [postText, setPostText] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = () => {
    if (!postText.trim()) return;
    
    const newPost = {
      id: Date.now(),
      user: {
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png'
      },
      content: postText,
      timestamp: new Date(),
      likes: 0,
      comments: []
    };
    
    if (onPostCreated) {
      onPostCreated(newPost);
    }
    
    setPostText('');
    setIsCreating(false);
  };

  return (
    <div className="facebook-card">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div 
          className="bg-gray-100 rounded-full px-4 py-2.5 flex-grow cursor-pointer hover:bg-gray-200"
          onClick={() => setIsCreating(true)}
        >
          <span className="text-gray-500">What's on your mind, John?</span>
        </div>
      </div>

      {isCreating && (
        <div className="mt-4">
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-facebook-blue"
            rows={3}
            placeholder="What's on your mind, John?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end mt-2 gap-2">
            <Button variant="ghost" onClick={() => setIsCreating(false)}>Cancel</Button>
            <Button 
              className="bg-facebook-blue hover:bg-blue-600"
              onClick={handleCreatePost}
              disabled={!postText.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      )}

      <Separator className="my-3" />
      
      <div className="flex justify-between">
        <Button variant="ghost" className="flex-1 rounded-md text-gray-500">
          <Video className="mr-2 h-5 w-5" /> Live Video
        </Button>
        <Button variant="ghost" className="flex-1 rounded-md text-gray-500">
          <Image className="mr-2 h-5 w-5" /> Photo/Video
        </Button>
        <Button variant="ghost" className="flex-1 rounded-md text-gray-500">
          <Smile className="mr-2 h-5 w-5" /> Feeling/Activity
        </Button>
      </div>
    </div>
  );
};

export default CreatePostCard;
