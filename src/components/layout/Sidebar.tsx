
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Users, 
  Clock,
  Bookmark,
  Flag,
  Heart,
  Calendar,
  Video,
  ShoppingBag
} from "lucide-react";

const sidebarItems = [
  { icon: User, label: "John Doe", to: "/profile" },
  { icon: Users, label: "Friends", to: "/friends" },
  { icon: Clock, label: "Memories", to: "/memories" },
  { icon: Bookmark, label: "Saved", to: "/saved" },
  { icon: Flag, label: "Pages", to: "/pages" },
  { icon: Heart, label: "Fundraisers", to: "/fundraisers" },
  { icon: Calendar, label: "Events", to: "/events" },
  { icon: Video, label: "Watch", to: "/watch" },
  { icon: ShoppingBag, label: "Marketplace", to: "/marketplace" },
];

const Sidebar = () => {
  return (
    <aside className="w-[300px] pr-4 pt-4 hidden lg:block">
      <nav>
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                {index === 0 ? (
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                ) : (
                  <item.icon className="w-6 h-6 text-facebook-blue" />
                )}
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t">
          <h3 className="text-gray-500 font-medium px-2 mb-2">Your shortcuts</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/groups/gaming"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                  🎮
                </div>
                <span className="font-medium">Gaming Group</span>
              </Link>
            </li>
            <li>
              <Link
                to="/groups/tech"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                  💻
                </div>
                <span className="font-medium">Tech Enthusiasts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/groups/cooking"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                  🍳
                </div>
                <span className="font-medium">Cooking Club</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
