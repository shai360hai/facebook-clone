
import { Link } from "react-router-dom";
import { Bell, Home, MessageSquare, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <svg height="40" width="40" viewBox="0 0 36 36">
              <path fill="#1877F2" d="M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.984 6.582 16.444 15.188 17.784V23.25h-4.572V18h4.572v-3.968c0-4.511 2.688-7.002 6.797-7.002 1.971 0 4.031.352 4.031.352v4.428h-2.269c-2.236 0-2.932 1.388-2.932 2.811V18h4.982l-.797 5.25h-4.185v12.534C29.418 34.444 36 26.984 36 18z"></path>
            </svg>
          </Link>
          <div className="relative max-w-[240px] hidden md:block">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              placeholder="Search Facebook" 
              className="pl-8 rounded-full bg-gray-100 border-none"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1">
          <Link to="/" className="px-10 py-2 text-facebook-blue border-b-2 border-facebook-blue">
            <Home />
          </Link>
          <Link to="/watch" className="px-10 py-2 text-gray-500 hover:bg-gray-100 rounded-md">
            <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28">
              <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25Z"></path>
            </svg>
          </Link>
          <Link to="/marketplace" className="px-10 py-2 text-gray-500 hover:bg-gray-100 rounded-md">
            <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28">
              <path d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75Z"></path>
              <path d="M21.25 9.5C21.25 9.5 21.25 9.5 21.25 9.5L18.75 9.5C18.336 9.5 18 9.164 18 8.75 18 8.336 18.336 8 18.75 8L21.25 8C21.664 8 22 8.336 22 8.75 22 9.164 21.664 9.5 21.25 9.5ZM15.25 9.5 12.75 9.5C12.336 9.5 12 9.164 12 8.75 12 8.336 12.336 8 12.75 8L15.25 8C15.664 8 16 8.336 16 8.75 16 9.164 15.664 9.5 15.25 9.5ZM9.25 9.5 6.75 9.5C6.336 9.5 6 9.164 6 8.75 6 8.336 6.336 8 6.75 8L9.25 8C9.664 8 10 8.336 10 8.75 10 9.164 9.664 9.5 9.25 9.5ZM21.941 4.25C21.78 4.089 21.561 4 21.343 4L6.657 4C6.439 4 6.22 4.089 6.059 4.25 6.059 4.25 6.059 4.25 6.059 4.25 5.898 4.411 5.809 4.63 5.809 4.848L5.809 10.25C5.809 10.468 5.898 10.687 6.059 10.849 6.22 11.01 6.439 11.099 6.657 11.099L21.343 11.099C21.561 11.099 21.78 11.01 21.941 10.849 22.102 10.687 22.191 10.468 22.191 10.25L22.191 4.848C22.191 4.63 22.102 4.411 21.941 4.25Z"></path>
            </svg>
          </Link>
          <Link to="/groups" className="px-10 py-2 text-gray-500 hover:bg-gray-100 rounded-md">
            <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28">
              <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
            </svg>
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
