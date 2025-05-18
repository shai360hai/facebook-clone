
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const contacts = [
  { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", status: "online" },
  { id: 2, name: "Mike Johnson", avatar: "https://i.pravatar.cc/150?img=2", status: "online" },
  { id: 3, name: "Sarah Williams", avatar: "https://i.pravatar.cc/150?img=3", status: "offline" },
  { id: 4, name: "Alex Brown", avatar: "https://i.pravatar.cc/150?img=4", status: "online" },
  { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", status: "offline" },
  { id: 6, name: "Chris Wilson", avatar: "https://i.pravatar.cc/150?img=6", status: "online" },
];

const RightSidebar = () => {
  return (
    <aside className="w-[300px] pl-4 pt-4 hidden lg:block">
      <div>
        <h3 className="text-gray-500 font-medium mb-4">Sponsored</h3>
        <div className="facebook-card p-0 overflow-hidden">
          <img 
            src="https://source.unsplash.com/random/300x200/?product" 
            alt="Advertisement" 
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-medium">Try our new product</h4>
            <p className="text-sm text-gray-500">shopname.com</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 font-medium">Contacts</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <g fillRule="evenodd" transform="translate(-446 -350)">
                  <path d="M457.25 361H454.75v2.5a.75.75 0 0 1-1.5 0V361h-2.5a.75.75 0 0 1 0-1.5h2.5V357a.75.75 0 0 1 1.5 0v2.5h2.5a.75.75 0 0 1 0 1.5m5.75 2.5a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0z"></path>
                </g>
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
              <svg fill="currentColor" viewBox="0 0 16 16" width="20" height="20">
                <g fillRule="evenodd" transform="translate(-448 -544)">
                  <path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5m-2-5.75v-.003a.777.777 0 0 1-.25.033h-4a5.25 5.25 0 0 0-5.25 5.25v4c0 .086.01.17.025.25H444a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <ul className="space-y-2">
          {contacts.map(contact => (
            <li key={contact.id}>
              <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {contact.status === "online" && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>
                <span className="font-medium">{contact.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
