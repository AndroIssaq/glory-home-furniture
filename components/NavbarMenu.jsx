"use client"
import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Chip,
    collapse
  } from "@material-tailwind/react";
  import Link from 'next/link';
  import {
    MdSingleBed,
    MdOutlineChair,
    MdOutlineRestaurant,
    MdCheckroom,
    MdChildFriendly,
    MdTableRestaurant,
  } from "react-icons/md";
   import    { Square3Stack3DIcon,Bars3Icon ,XMarkIcon, ChevronDownIcon,ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline'
  const colors = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
    purple: "bg-purple-50 text-purple-500",
    teal: "bg-teal-50 text-teal-500",
    cyan: "bg-cyan-50 text-cyan-500",
    pink: "bg-pink-50 text-pink-500",
  };
   
  const navListMenuItems = [
    {
      color: "blue",
      icon: MdSingleBed,
      title: "Bed Room",
      link:"/bed-room"
    },
    {
      color: "orange",
      icon: MdOutlineChair,
      title: "Lounges",
      link:"/lounges"
    },
  
    {
      color: "teal",
      icon: MdOutlineRestaurant,
      title: "Kitchens",
      link:"/kitchens"
    },
    {
      color: "cyan",
      icon: MdCheckroom,
      title: "Dressing Room",
      link: "/dressing-room",
    },
    {
      color: "pink",
      icon: MdChildFriendly,
      title: "Children's Room",
      link: "/children-room",
    },
    {
      color: "pink",
      icon: MdTableRestaurant,
      title: "Dining Tables",
      link: "/tables",
    },
  ];
   function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
   
    const renderItems = navListMenuItems.map(
      ({ icon, title, description, color ,link}, index) => (
        <>

          <MenuItem onClick={() =>{ setIsMobileMenuOpen((cur) => !cur), setIsMenuOpen(false)} } key={link} className="flex items-center gap-3 border-none ">
            
            <div key={link}>
            <Typography
          as={Link}
          href={link}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center justify-center gap-[10px]"
        >
          <span className={` p-5 ${colors[color]}`}>
              {React.createElement(icon, {
                className: "h-6 w-6",
              })}
            </span>
          {title}
          </Typography>
            </div>
          </MenuItem>
  </>
      )
    );
   
    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-normal border-none">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                  Products
                <ChevronDownIcon
                  
                  className={`hidden h-3 w-3 transition-transform lg:block shadow-none ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  
                  className={`block h-3 w-3 transition-transform shadow-none lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          
          </MenuHandler>
          <Typography
          as={Link}
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 lg:block md:hidden sm:hidden hidden"
        >
          GLORY HOME
        </Typography>
          <MenuList className="hidden max-w-screen-xl rounded-xl border-none lg:block">
            <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden border-none">
          <Collapse  open={isMobileMenuOpen} >{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }
   
  function NavList() {
    return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 border-none">
        
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
            <ListItem className="flex items-center gap-2 py-2 pr-4 border-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
            </ListItem>
        </Typography>

        <NavListMenu />
        <Typography
          as={Link}
          href="/aboutus"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              About Us
            </ListItem>
        </Typography>
        <Typography
          as={Link}
          href="/contactus"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contact Us
            </ListItem>
        </Typography>
      </List>
    );
  }
   
  export function NavbarMenu() {
    const [openNav, setOpenNav] = React.useState(false);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
   
    return (
      <collapse className="mx-auto max-w-none shadow-none w-full  rounded-none">
        <div className="flex items-center px-[20px] py-6 lg:justify-center md:justify-between sm:justify-between justify-between text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2  lg:hidden"
        >
          GLORY HOME
        </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6"  />
            ) : (
              <Bars3Icon className="h-6 w-6"  />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        
        </Collapse>
      </collapse>
    );
  }