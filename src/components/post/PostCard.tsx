
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Separator } from "@/components/ui/separator";

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: Date;
}

interface PostProps {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}

const PostCard = ({ post }: { post: PostProps }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(post.comments);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      user: {
        name: "John Doe",
        avatar: "https://github.com/shadcn.png",
      },
      content: newComment,
      timestamp: new Date(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="facebook-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={post.user.avatar} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{post.user.name}</h4>
            <p className="text-xs text-gray-500">
              {formatDistanceToNow(post.timestamp, { addSuffix: true })}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
      </div>

      <div className="mb-3">
        <p className="text-sm md:text-base whitespace-pre-wrap">{post.content}</p>
      </div>

      {post.image && (
        <div className="-mx-4 mb-3">
          <img
            src={post.image}
            alt="Post"
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center">
          <div className="bg-facebook-blue text-white rounded-full p-1">
            <Heart className="h-3 w-3" fill="white" />
          </div>
          <span className="ml-2">{likesCount}</span>
        </div>
        <button
          className="hover:underline"
          onClick={() => setShowComments(!showComments)}
        >
          {comments.length} comments
        </button>
      </div>

      <Separator className="mb-3" />

      <div className="flex justify-between">
        <Button
          variant="ghost"
          className="flex-1 rounded-md text-gray-500"
          onClick={handleLike}
        >
          <Heart
            className={`mr-2 h-5 w-5 ${liked ? "text-facebook-blue fill-facebook-blue" : ""}`}
          />
          Like
        </Button>
        <Button
          variant="ghost"
          className="flex-1 rounded-md text-gray-500"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Comment
        </Button>
        <Button variant="ghost" className="flex-1 rounded-md text-gray-500">
          <Share className="mr-2 h-5 w-5" />
          Share
        </Button>
      </div>

      {showComments && (
        <div className="mt-4">
          <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full bg-gray-100 rounded-full px-3 py-1.5 pr-10 focus:outline-none focus:ring-1 focus:ring-facebook-blue"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-facebook-blue"
                disabled={!newComment.trim()}
              >
                <svg
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  fill="currentColor"
                >
                  <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.user.avatar} />
                  <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-3 py-2">
                    <h5 className="font-semibold text-sm">{comment.user.name}</h5>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                  <div className="flex gap-4 mt-1 text-xs text-gray-500">
                    <button className="font-semibold">Like</button>
                    <button className="font-semibold">Reply</button>
                    <span>
                      {formatDistanceToNow(comment.timestamp, {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
